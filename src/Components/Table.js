import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { Button } from "react-bootstrap";
import { useSearchParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import { getInvoices } from '../data';

const invoices = getInvoices();
const { SearchBar } = Search;

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

let nameFilter;
let possessionFilter;
let amountFilter;
let dueFilter;

const ClearButton = props => {
  const handleClick = () => {
    props.onSearch("");
    props.clearAllFilter();
  };
  return (
    <Button
      variant="secondary"
      onClick={handleClick}
      style={{
        fontSize: "16px",
        padding: "5px",
        margin: "10px",
        height: "40px"
      }}
    >
      Clear
    </Button>
  );
};

function Table() {
  const [filteredInvs, setFilteredInvs] = useState([]);
  const columns = [
    {
      dataField: "name",
      text: "Name",
      filter: textFilter({
        getFilter: filter => {
          nameFilter = filter;
        }
      })
    },
    {
      dataField: "already_have",
      text: "Possession",
      filter: textFilter({
        getFilter: filter => {
          possessionFilter = filter;
        }
      }),
      sort: true
    },
    {
      dataField: "amount",
      text: "Amount",
      filter: textFilter({
        getFilter: filter => {
          amountFilter = filter;
        }
      })
    },
    {
      dataField: "due",
      text: "Due date",
      filter: textFilter({
        getFilter: filter => {
          dueFilter = filter;
        }
      })
    }
  ];
  const handleSearch = (newResult) => {
    console.log(newResult)
    setFilteredInvs(newResult)
  }

  const clearAllFilter = () => {
    nameFilter("");
    possessionFilter("");
    dueFilter("");
    amountFilter("");
  }
  return (

    <div className="sort-tool-div">
      <hr/>
      <div className="sort-tool-header">
        <h1 className="sort-tool-h1">Sort Tool</h1>
      </div>
      
      <ToolkitProvider
        bootstrap4
        keyField="name"
        data={invoices}
        columns={columns}
        search={{
          afterSearch: (newResult) => handleSearch(newResult)

        }}
      >
        {props => (
          <div>
            <SearchBar
              {...props.searchProps}
              style={{ width: "400px", height: "40px" }}
              className="search-bar"
            />
            <ClearButton
              {...props.searchProps}
              clearAllFilter={clearAllFilter}
            />
            <BootstrapTable
              {...props.baseProps}
              filter={filterFactory()}
              noDataIndication="There is no solution"
              striped
              hover
              rowStyle={ { backgroundColor: 'lightsalmon' } }
            />
            <div>{filteredInvs.map((invoice) => (
              <QueryNavLink
                key={invoice.number}
                style={({ isActive }) => {
                  return {
                    display: 'block',
                    padding: '10px',
                    margin: '10px',
                    color: isActive ? 'red' : '',
                  };
                }}
                to={`/invoices/${invoice.number}`}
              >
                {invoice.name}
              </QueryNavLink>
            ))}
            </div>
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
}
export default Table;

