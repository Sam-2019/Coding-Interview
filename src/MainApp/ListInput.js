import React from "react";
import { adddata } from "./features/dataSlice";
import { useDispatch } from "react-redux";

function ListInput({ name, setName }) {
  const dispatch = useDispatch();

  function submit() {
    if (!name) {
      return;
    }
    const addData = {
      id: Math.random(),
      name
    };

    dispatch(adddata(addData));

    setName("");
  }

  return (
    <div>
      <input
        name="asset"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={submit}> Submit </button>
    </div>
  );
}

export default ListInput;
