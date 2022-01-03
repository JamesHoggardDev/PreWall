import React from 'react';
import './App.css';
import About from './components/About';
import { Outlet, Link } from "react-router-dom";

export default function App() {
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
    </div>
  );
}