import './App.css';
import {Route} from "react-router-dom"
import Login from './components/auth/Login';
import Homepage from './pages/Homepage';


function App() {
  return (
    <>
    <div className='App'>
    <Route path="/" component={Homepage} exact/> 
    </div>
    <div className='App'>
    <Route path="/auth" component={Login}  /> 
    </div>
    </>
  );
}

export default App;
