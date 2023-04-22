import logo from './logo.svg';
import './App.css';
import ListComponent from './Components/ListComponent';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import ShowFile from './Components/ShowFile';
import HomeComponent from './Components/HomeComponent'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ShowSplitedFile from './Components/ShowSplitedFile';
import FileSplited from './Components/FileSplited';


function App() {
  return (
 
    <div>
        <Router>
           
           
                <NavBar/> 
                <div className="container">
                    <Routes>
                        <Route path='/'  element={<HomeComponent />}exact />
                       
                        <Route path='/list' element={< ListComponent/>}exact />
                        <Route path='/list/show' element={< ShowFile/>}exact />
                        <Route path='/list/ShowAll' element={< ShowSplitedFile/>} exact/>
                        <Route path='/list/Split/:id' element={< FileSplited/>} exact/>
                    </Routes>
               </div>
               <Footer/>
               
           
        </Router>
      </div>
  );
}

export default App;
