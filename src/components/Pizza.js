import React from "react";

function Pizza({ pizza, onPizzaEditClick }) {
  const {id, topping, size, vegetarian} = pizza;

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={() => onPizzaEditClick(id, topping, size, vegetarian)}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
