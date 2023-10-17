import React from 'react'; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';
import Header from './Header';
import Homepage from './Homepage';
import Login from './Login';
import Baner from './Baner';
import List from './List';
const App=()=>{
  return (
    <>
   <Router>
    <Routes>
        <Route path="/" element={
        <>
<Header/>
<Homepage/>
        </>
         } />
         <Route exact path="/login" element={
          <>
            <Header/>
            <Login/>
          </>
         }
         />
          <Route exact path="/register" element={
          <>
            <Header/>
            <Login/>
          </>
         }
         />
        <Route exact path='/dashboard' element={
          <>
            <Header/>
            <Baner/>
            <List title="Netflix Originals" param="originals"/>
              <List title="Trending Now" param="trending"/>
              <List title="Now Playing" param="now_playing"/>
              <List title="Popular" param="popular"/>
              <List title="Top Rated" param="top_rated"/>
              <List title="Upcoming" param="upcoming"/>

          </>
        }

        /> 

  
    </Routes>
   </Router>
    </>
  );
  }
export default App;
