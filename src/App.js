import './components/button/Button.css'
import Button from './components/button/Button';
import './App.css';
import '../src/components/constants.css'
import Textfield from './components/Fields/Textfield';
import './components/Fields/Fields.css'
import './components/formStyle.css'
import overlap from './components/overlap.png'

function App() {
  return (
    <>
    <div className="parent"> 
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
            
          </form>
        </div>
      </div>
    </div>
    <img src={overlap} alt="Stacked Image" class="stacked-image" />
    </>
    
  );
}

export default App;
