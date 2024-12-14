import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Update = ({ products, onHandleUpdate }) => {
  const [inputValue, setInputValue] = useState({});
  const { id } = useParams();
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const crtprd = products.find((item) => item.id == id);
  const onUpdate = (e) => {
    e.preventDefault();
    const updateData = { ...crtprd, ...inputValue };
    onHandleUpdate(updateData);
  };
  return (
    <>
      <div>
        <form action="" onSubmit={onUpdate}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onInput={onHandleChange}
            defaultValue={crtprd?.name}
          />

          <input
            type="number"
            name="price"
            placeholder="price"
            onInput={onHandleChange}
            defaultValue={crtprd?.price}
          />

          <input
            type="text"
            name="description"
            placeholder="description"
            onInput={onHandleChange}
            defaultValue={crtprd?.description}
          />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Update;
