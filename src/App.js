import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Project from './pages/project';


function App() {
  return (
      <>
      <Header/>
      <Routes>
        <Route path='/Portfolio' element={<Home/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
      
      
      
        
        
      </>
  );
}

export default App;
