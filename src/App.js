import './components/button/Button.css'
import Button from './components/button/Button';
import './App.css';
import '../src/components/constants.css'
import Textfield from './components/Fields/Textfield';
import './components/Fields/Fields.css'
import './components/formStyle.css'
import overlap from './components/overlap.png'
import ForgotPasswordLink from './components/Link/ForgotPasswordLink';
import Navbar from './components/Navbar/Navbar';
import Tableres from './components/table/Table';
import Table from './components/table/Table';
import '../src/components/tablePageStyle.css'
import CompanyName from './components/Headings/CompanyName';
import TableHeading from './components/Headings/TableHeading';
import DataDisplay from './components/DataDisplay/DataDisplay';
import Toggle from './components/Toggle/Toggle';
import Status from './components/Status/Status';
import { useState } from 'react';

function App() {
  const theadData = ["Name", "Poles", "Podiums", "Wins", "Career Points", "Championships"];

  const bodyData = [
    {
      Name: "Max Verstappen",
      Poles: 22,
      Podiums: 80,
      Wins: 37,
      "Career Points": 2080.5,
      Championships: 2,
    },
    {
      Name: "Max Verstappen",
      Poles: 22,
      Podiums: 80,
      Wins: 37,
      "Career Points": 2080.5,
      Championships: 2,
    },
    {
      Name: "Max Verstappen",
      Poles: 22,
      Podiums: 80,
      Wins: 37,
      "Career Points": 2080.5,
      Championships: 2,
    },
    {
      Name: "Max Verstappen",
      Poles: 22,
      Podiums: 80,
      Wins: 37,
      "Career Points": 2080.5,
      Championships: 2,
    },
    {
      Name: "Max Verstappen",
      Poles: 22,
      Podiums: 80,
      Wins: 37,
      "Career Points": 2080.5,
      Championships: 2,
    },
    {
      Name: "Max Verstappen",
      Poles: 22,
      Podiums: 80,
      Wins: 37,
      "Career Points": 2080.5,
      Championships: 2,
    },
    {
      Name: "Max Verstappen",
      Poles: 22,
      Podiums: 80,
      Wins: 37,
      "Career Points": 2080.5,
      Championships: 2,
    },
    // Add more data objects as needed
  ];

  const data = [
    { column1: 'Item 1', column2: 'Description 1' },
    { column1: 'Item 2', column2: 'Description 2' },
    // Add more data items as needed
  ];

  const [isActive, setisActive] =useState(true)

  return (
    <>
    <Navbar/>
    <div className='company-and-btn'>
      <CompanyName text="Farmer"/>
      <Button className= 'create-btn' text="Create New Company"/>
    </div>
    <DataDisplay data={data} />
    
    <Toggle/>
    <Status active={isActive}/>
    <TableHeading text="User List"/>
    <Table theadData={theadData} bodyData={bodyData} />
    {/* <div className="parent"> 
      <div className="centered-container">
        <div className="form-container">
          <h1>Login</h1>
          <form>
            <Textfield placeholder="Enter your Email" type="text" />
            <Textfield
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              required
              // onChange={handlePasswordChange}
            />
            <Button text="Login" className="form-btn" />
            <ForgotPasswordLink />
            
          </form>
        </div>
      </div>
    </div> */}
    <img src={overlap} alt="Stacked Image" class="stacked-image" />
    </>
    
  );
}

export default App;
