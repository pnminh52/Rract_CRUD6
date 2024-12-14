import React from "react";

const Add = (props) => {
  const { errors, onHandleSubmit, onHandleChange } = props;
  const errorDetails = errors.map((item) => {
    return { [item.context.label]: item.message };
  });
  const [errorname, errorprice, errordes] = errorDetails;
  return (
    <>
      <div>
        <form action="" onSubmit={onHandleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onInput={onHandleChange}
          />
          <span>{errorname?.name}</span>
          <input
            type="text"
            name="price"
            placeholder="price"
            onInput={onHandleChange}
          />
          <span>{errorprice?.price}</span>
          <input
            type="text"
            name="description"
            placeholder="description"
            onInput={onHandleChange}
          />
          <span>{errordes?.description}</span>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Add;
