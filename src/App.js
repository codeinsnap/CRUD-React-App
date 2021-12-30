import React from 'react'
import Navbar from './components/Navbar';
import Artistic from './components/Artistic';
import AddSubs from './components/AddSubs';
import AllSubs from './components/AllSubs';
import UrlErr from './components/UrlErr';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import EditUser from './components/EditUser';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Artistic />} />
        <Route path='/all' element={<AllSubs />} />
        <Route path='/add' element={<AddSubs/>} />
        <Route path='/*' element={<UrlErr />} />
        <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
    </Router>
  )
}

export default App;
