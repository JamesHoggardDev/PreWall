import * as React from 'react';
import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1 style={{ color: 'blue' }}>PreWall</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/invoices">Bills to be Processed</Link>
        {' '}
        |
        {' '}
        <Link to="/expenses">True Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
export default App;
