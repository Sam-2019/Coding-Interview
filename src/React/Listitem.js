import React from "react";
import { useDispatch } from "react-redux";
import { removeData } from "../features/dataSlice";

import "./listitem.css";

function ListItem({ id, text }) {
  const dispatch = useDispatch();

  function remove() {
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
