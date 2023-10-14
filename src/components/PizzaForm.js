import React from "react";

function PizzaForm({ topping, setTopping,
                     size, setSize,
                     isVegetarian, setIsVegetarian,
                     onNewPizzaSubmit
                    }) {

  return (
    <form onSubmit={onNewPizzaSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={e => setTopping(e.target.value)}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={e => setSize(e.target.value)} value={size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={isVegetarian}
              onChange={() => setIsVegetarian(true)}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={!isVegetarian}
              onChange={() => setIsVegetarian(false)}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
