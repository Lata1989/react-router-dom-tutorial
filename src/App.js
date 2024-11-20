import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./routes/Home";
import { Contact } from "./routes/Contact";
import { About } from "./routes/About";
import { UsuarioProvider } from "./context/UsuarioProvider";
import { Login } from "./routes/Login";

export const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <hr></hr>
      <UsuarioProvider>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
      </UsuarioProvider>
    </>
  );
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
