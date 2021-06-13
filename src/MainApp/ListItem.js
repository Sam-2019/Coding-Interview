import React from "react";
import "./listitem.css";
import { useDispatch } from "react-redux";
import { removeData } from "./features/dataSlice";

function ListItem({ id, text }) {
  const dispatch = useDispatch();

  function remove() {
    console.log(id);
    dispatch(removeData(id));
  }

  return (
    <div className="listitem">
      <div>{text}</div>

      <button onClick={remove}>Delete</button>
    </div>
  );
}

export default ListItem;
