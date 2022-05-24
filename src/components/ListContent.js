import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ListContent.css";
import ListFooter from "./ListFooter";
import ListItem from "./LitItem";

export default function ListContent() {
  const { todoList, todoFilter } = useSelector((state) => state.todo);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (todoFilter === "all") {
      setList(todoList);
      return;
    }
    setList(todoList.filter((x) => setList.complete));
  }, [todoList, todoFilter]);

  return (
    <div className="item-content-wrapper">
      <div className="content">
        {list.length < 1 && (
          <div className="text-xs text-gray-700 font-bold  text-center">
            Henüz bir eleman mevcut değil
          </div>
        )}
        {list.map((x) => {
          return (
            <ListItem
              key={x.id}
              item={x}
              className={x.complete ? "completed" : ""}
            />
          );
        })}
      </div>
      <ListFooter />
    </div>
  );
}
