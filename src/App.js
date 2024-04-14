import './App.css';
import ResponsiveAppBar from './Component/ResponsiveAppBar';
import SignIn from './Component/SignIn';
import EmployeeForm from './Component/EmployeeForm';
import SignUp from './Component/SignUp';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path='/EmployeeForm' element={<EmployeeForm/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/SignIn' element={<SignIn/>} />
      </Routes>
    </div>
  );
}

export default App;
