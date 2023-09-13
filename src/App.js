import './components/button/Button.css'
import './App.css';
import Button from './components/button/Button';
import '../src/components/colors.css'

function App() {
  return (
    <div className="App">
      <Button text="Login" className="form-btn" />
      <Button text="Create" className="create-btn" />
      <Button text="Details" className="table-btn" />
      <Button text="Export" className="export-btn" />
      <Button text="Clear" className="clear-btn" />
      <Button text="Search" className="search-btn" />
      <Button text="Cancel" className="popup-cancel-btn" />
      <Button text="Save" className="popup-save-btn" />
      <Button text="Delete" className="popup-delete-btn" />
      
      
  
  </div>
  );
}

export default App;
