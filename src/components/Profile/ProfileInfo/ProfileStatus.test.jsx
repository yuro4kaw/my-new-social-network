import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="itbaby" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("itbaby");
    });
    test("after creation input shouldn`t be displayed", () => {
        const component = create(<ProfileStatus status="itbaby" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });
    test("span should contain correct status", () => {
        const component = create(<ProfileStatus status="itbaby" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("itbaby");
    });
    test("input should be displayed in editMode instaead of span", () => {
        const component = create(<ProfileStatus status="itbaby" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("itbaby");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="itbaby" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
}); 