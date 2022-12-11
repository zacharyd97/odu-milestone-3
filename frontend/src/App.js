import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Home from "./components/Home"

import CurrentUserProvider from './contexts/CurrentUser';
import LoginForm from './users/loginForm';
import SignUpForm from './users/signUpForm';


function App() {


  return (
    <div className='App'>
      <CurrentUserProvider>
      <BrowserRouter>
      <Navigation/>
        <div className='Display'>
          <Routes>
            <Route exact path="/" component={<Home />} />
            <Route exact path="/sign-up" component={<SignUpForm/>}/>
            <Route exact path="/login" component={<LoginForm/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
