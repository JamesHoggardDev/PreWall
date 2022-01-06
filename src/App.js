import * as React from 'react';
import './App.css';
import { Outlet, Link } from "react-router-dom";


const App = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
  
        <div>
            <h1 style={{ color: "blue" }}>PreWall</h1>
            <nav
              style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem"
              }}

              
            >
              <Link to="/invoices">Bills to be Processed</Link> |{" "}
              <Link to="/expenses">True Expenses</Link>
            </nav>
            <Outlet />
        <div>
            <h2>my </h2>

            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={handleChange} />
        </div>
      </div>
  );
};

export default App;
