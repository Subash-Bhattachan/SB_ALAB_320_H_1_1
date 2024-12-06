import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function HomePage() {
  return (

    <div
      style={{
        width: "300px",
        height: "493px",
        border: "2px solid orange",
        marginRight: "1px",
        marginLeft: "1px",
        marginTop: "2px",
        marginBottom: "9px",
        // display: "flex",
        // justifyContent: 'space-between',
      }}>
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

function EmployeePage() {
  return (

    <div style={{
      width: "300px",
      height: "493px",
      border: "2px solid brown",
      marginRight: "1px",
      marginLeft: "1px",
      marginTop: "2px",
      marginBottom: "1px",
      // display: "flex", // this bring the divs aligning next to one another, so avoiding it here as we want divs stacking on top of one another
      // justifyContent: 'space-between',
    }}>
      <Header title="Employee" />
      
    </div>
  );
}

function Header( { title } ) {
  return (

    <div style={{
      width: "98%",
      height: "34px",
      border: "2px solid blue",
      marginRight: "1px",
      marginLeft: "1px",
      marginTop: "2px",
      marginBottom: "1px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

    }}>
      <p>{ title }</p>
    </div>
  );
}

function SearchBar() {
  return (

    <div style={{
      width: "98%",
      height: "34px",
      border: "2px solid green",
      marginRight: "1px",
      marginLeft: "1px",
      marginTop: "2px",
      marginBottom: "1px",

    }}>
      Search Bar

    </div>
  );
}

function EmployeeList() {
  return (

    <div style={{
      width: "98%",
      height: "405px",
      border: "2px solid violet",
      marginRight: "1px",
      marginLeft: "1px",
      marginTop: "2px",
      marginBottom: "1px",

    }}>
      <EmployeeListItem name="James King" />
      <EmployeeListItem  name="Julie Taylor" />
      <EmployeeListItem name="Eugene Lee"/>
      <EmployeeListItem name="John Williams"/>
      <EmployeeListItem name="Ray Moore"/>
      <EmployeeListItem name="Paul Jones"/>

    </div>
  );
}

function EmployeeListItem( { name }) {
  return (

    <div style={{
      width: "98%",
      height: "61.5px",
      border: "2px solid purple",
      marginRight: "1px",
      marginLeft: "1px",
      marginTop: "2px",
      marginBottom: "1px",

    }}>
      <p>{ name }</p>
    </div>
  );
}

function App() {
  return (
    <>
      <div style={{ width: "600px", height: "500px", border: "4px solid black", display: "flex", justifyContent: "space-between" }}>
        <HomePage />
        <EmployeePage />

      </div>

    </>
  );
}

export default App
