import { useContext, useRef } from "react";
import { AppContext } from "../ThemeApp";

export default function Form({add}){

    const {mode} = useContext(AppContext);
    const contentRef = useRef();
    const nameRef = useRef();

    return (
        <form action="#" style={{display: "flex", flexDirection: "column", gap: 3, padding: 10, borderRadius: 8, marginBottom: 20, background: mode === "dark" ? "#555" : "#def"}} onSubmit={ (e) => {
            e.preventDefault();
            const content = contentRef.current.value;
            const name = nameRef.current.value;

            add(content, name);
            e.currentTarget.reset();
        }}>
            <input ref={contentRef} type="text" placeholder="Content" style={{padding: 5}}/>
            <input ref={nameRef} type="text" placeholder="Name" style={{padding: 5}}/>
            <button type="submit" style={{padding: 8, background: "#0d6efd", color: "white", border: "0 none"}}>Post</button>
        </form>
    )
}