import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/todoActions";
import "./Input.css";

export default function Input() {
  const dispatch = useDispatch();
  const [text, setText] = useState();
  return (
    <div className="input-wrapper">
      <input
        onKeyPress={(e) => {
          if (e.key === "Enter" && text.trim() !== "") {
            dispatch(
              addTodo({ id: new Date().getTime(), text, complete: false })
            );
            setText("");
          }
        }}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        autoFocus
        placeholder="Create New Todo"
      />
    </div>
  );
}
