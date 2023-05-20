import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Error } from './pages/Error';
import Home from './pages/Home';
import { SignIn } from './pages/Signin';
import { SignUp } from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
