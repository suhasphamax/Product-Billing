import './App.css';
import Billing from './pages/Billing/Billing';
import {Routes,Route} from 'react-router-dom'
import SignUp from './pages/Authentication/SignUp';
import Login from './pages/Authentication/Login';




function App() {

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route> */}
        {/* <Route path={`${ process.env.REACT_APP_BASE_URL}/`} element={<Billing/>}></Route> */}
        <Route path={"/"} element={<Billing/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
