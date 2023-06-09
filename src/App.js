import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import Header from "./components/Header";

function App() {
  return (
<>
<Router>
  <Header/>
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/sign-in" element={<SignIn/>}/>
<Route path="/sign-up" element={<SignUp/>}/>
<Route path="/forgot-password" element={<ForgotPassword/>}/>
<Route path="/tasks" element={<Tasks/>}/>
  </Routes>
</Router>
</>
  );
}

export default App;
