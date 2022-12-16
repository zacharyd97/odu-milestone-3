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
import GenrePage from './genres/GenrePage';

function App() {


  return (
    <div className='App'>
      <CurrentUserProvider>
        <BrowserRouter>
          <Navigation />
          <div className='Display'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="/sign-up" element={<SignUpForm />} />
              <Route exact path="/login" element={<LoginForm />} />
              <Route exact path="/genres" element={<GenreIndex />} />
              <Route exact path="/genres/new" element={<NewGenreForm />} />
              <Route exact path="/genres/:genre_id" element={<GenrePage />} />
              <Route exact path="/genres/:genre_id/edit" element={<EditGenreForm />} />
              <Route exact path="/posts/:post_id" element={<PostPage />} />
              <Route path="/" element={<Error404 />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
