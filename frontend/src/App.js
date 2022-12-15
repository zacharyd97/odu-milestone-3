import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from "./components/Home"
import Navigation from './components/Navigation';
import CurrentUserProvider from './contexts/CurrentUser';
import LoginForm from './users/loginForm';
import SignUpForm from './users/signUpForm';
import GenreIndex from './genres/GenreIndex';
import NewGenreForm from './genres/NewGenreForm';
import EditGenreForm from './genres/EditGenreForm';
import PostPage from './posts/PostPage';
import Error404 from './Error404';

function App() {


  return (
    <div className='App'>
      <CurrentUserProvider>
        <BrowserRouter>
          <Navigation />
          <SignUpForm />
          <LoginForm />
          <div className='Display'>
            <Routes>
              <Route path="/" element={Home} />
              <Route exact path="/sign-up" component={SignUpForm} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/genres" component={GenreIndex} />
              <Route exact path="/genres/new" component={NewGenreForm} />
              <Route exact path="/genres/:genre_id" component={GenrePage} />
              <Route exact path="/genres/:genre_id/edit" component={EditGenreForm} />
              <Route exact path="/posts/:post_id" component={PostPage} />
              <Route path="/" component={Error404} />
            </Routes>
          </div>
        </BrowserRouter>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
