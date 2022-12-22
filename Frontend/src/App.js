import './App.css';
import Billing from './pages/Billing/Billing';
import {Routes,Route} from 'react-router-dom'
import SignUp from './pages/Authentication/SignUp';
import Login from './pages/Authentication/Login';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Billing/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
