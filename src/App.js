import './App.css';
import Login from './components/NavigationBar/NavigationBar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    <div className="App">
     <Login />
     <SignIn />
     <SignUp />
    </div>
  );
}

export default App;
