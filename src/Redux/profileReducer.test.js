import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

let state = {
    posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 24 },
            { id: 2, message: "Today i read a book!", likesCount: 135 },
            { id: 3, message: "I'm gonna to visit London, Yeee!", likesCount: 47 },
        ],
    };

test('new post should be added', () => {
    //1. test data
    let action = addPostActionCreator("it");
    
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(4);
});

test('new post message should be correct', () => {
    //1. test data
    let action = addPostActionCreator("it");
    
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts[3].message).toBe("it");
});

test('post length after deleting should be incremented', () => {
    //1. test data
    let action = deletePost(1);
    
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(2);
});

test('after deleting length shouldnt be decremented if ID is incorrect', () => {
    //1. test data
    let action = deletePost(1000);
    
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
});
