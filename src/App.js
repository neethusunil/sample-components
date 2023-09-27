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
import Status from './components/Status/Status';
import { useState } from 'react';
import "./components/Edit Button/Edit.css"
import { MdEdit } from 'react-icons/md';
import ToggleSwitch from './components/Toggle/ToggleSwitch';
import Message from './components/Message/Message';

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
    { name: 'Ayimen',  type: 'Good boy' },
    { name: 'Another Name',  type: 'Another Type' },
    // Add more data objects as needed
  ];

  const [isActive, setIsActive] =useState(true)
  const handleToggle = (newState) => {
    setIsActive(newState);
    // You can perform any additional actions here when the toggle state changes.
  };


  return (
    <>
    <Navbar/>
    <div className='company-and-btn'>
      <CompanyName text="Farmer"/>
      <Button className= 'create-btn' text="Create New Company"/>
    </div>
    <div className='edit-button'>
        <button>
          <div className="edit-content">
            <div className='edit-text'>Edit</div>
            <div>
              <MdEdit size={18} />
            </div>
          </div>
        </button>
      </div>
      <ToggleSwitch active={isActive} onToggle={handleToggle} />
      <Message message="Neethu is here"/>
    <DataDisplay data={data} />
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
