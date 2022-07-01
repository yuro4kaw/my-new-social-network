import { Field } from "redux-form";

export const CreateField = (component, placeholder, name, props = {}, type = {},  text = "") =>
    <div><Field component={component} placeholder={placeholder} name={name} {...props} type={type} /> {text} </div>