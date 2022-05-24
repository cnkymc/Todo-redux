import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ListFooter.css";
import {setTodoFilter} from "../store/actions/todoActions"
export default function ListFooter() {
  const { todoFilter, todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div className="content-footer">
      <div className="left-item">
        {todoList.filter((x) => !x.complete).length + ' kaldı'} 
      </div>
      <div className={`menu-item ${todoFilter === "all"?'active':''}`} onClick={()=>{
        dispatch(setTodoFilter('all'))
      }}>tümü</div>
      <div className={`menu-item ${todoFilter === "complete"?'active':''}`}
      onClick={()=>{
        dispatch(setTodoFilter('complete'))
      }}
      
      >tamamlanan</div>
    </div>
  );
}
