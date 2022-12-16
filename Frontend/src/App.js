import './App.css';
import Billing from './pages/Billing/Billing';
import {Routes,Route} from 'react-router-dom'
import SignUp from './pages/Authentication/SignUp';
import SignIn from './pages/Authentication/SignIn';



function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/billing" element={<Billing/>}></Route>

      </Routes>
     
    </div>
  );
}

export default App;
