// import './App.css'
// import Navbar from './components/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Training from './pages/Training'
// import Blogs from './pages/blogs/Blog'
// import Articles from './pages/articles/Articles'
// import AuthForm from './components/AuthForm'
// import CreateUpdateForm from './components/CreateUpdateForm'

// function App() {
 

//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/training" element={<Training />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/articles" element={<Articles />} />
//         <AuthForm />
//         <CreateUpdateForm />

//       </Routes>
//     </>
//   )
// }

// export default App







import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Login from './account/Login';
import Signup from './account/Signup';
import Home from './pages/Home'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path='/' element={<Home />} />
      </Routes>
      </>
  );
};

export default App;
