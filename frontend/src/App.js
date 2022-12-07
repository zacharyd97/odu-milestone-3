import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from "./components/Home"


function App() {


  return (
    <div className='App'>
      <BrowserRouter>

        <div className='Display'>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
