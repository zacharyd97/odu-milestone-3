import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from "./components/Home"
import Navigation from './components/Navigation';
import CurrentUserProvider from './contexts/CurrentUser';
import LoginForm from './users/loginForm';
import SignUpForm from './users/signUpForm'

function App() {


  return (
    <div className='App'>
      <CurrentUserProvider>
      <BrowserRouter>
      <Navigation />
      <SignUpForm/>
      <LoginForm/>
        <div className='Display'>
          <Routes>
            <Route path="/" element={ Home } />
            <Route exact path="/sign-up" component={SignUpForm} />
            <Route exact path="/login" component={LoginForm} />
          </Routes>
        </div>
      </BrowserRouter>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
