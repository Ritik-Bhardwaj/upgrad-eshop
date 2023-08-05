import { useState } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';

function App() {
  const  [userSigned, setUserSingIn] = useState(false)
  return (
    <div>
     <NavigationBar />
    <SignIn />

     <SignUp />
     <Home />
    </div>
  );
}

export default App;
