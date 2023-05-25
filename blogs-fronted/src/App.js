import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Componet/Nav';
import AddBlog from './Componet/AddBlog';
import Dashboard from './Componet/Dashboard';
import BlogBox from './Componet/BlogBox';
import Table from './Componet/Table';
import Error from './Componet/Error';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>


          <Route path='/nav' element={ <  Nav /> } />
          <Route path='/blogbox' element={ <  BlogBox /> } />
          <Route path='/add-blog' element={ <AddBlog /> } />
          <Route path='/home' element={ <Dashboard /> } />
          <Route path='/table' element={ <Table /> } />
          <Route path='/error' element={ <Error /> } />

        </Routes>
        <ToastContainer autoClose={ 8000 } />
      </BrowserRouter>
    </>
  );
}

export default App;