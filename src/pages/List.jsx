import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  const { products, onHandleRemove } = props;
  return (
    <>
      <div>
        <a href="/products/add">Thêm sản phẩm</a>
        <div>
          <table>
            <thead>
              <td>Tên sản phẩm</td>
              <td>Giá thành</td>
              <td>Mô tả</td>
              <td>Hành dộng</td>
            </thead>
          </table>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>
                    <button onClick={() => onHandleRemove(product.id)}>
                      Xoa
                    </button>
                    <Link to={`/products/${product.id}/update`}>
                      <button>Update</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </div>
      </div>
    </>
  );
};

export default List;
