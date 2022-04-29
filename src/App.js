import './App.css';
import ApiMovie from './components/ApiMovie';
import ApiTvShow from './components/ApiTvShow';
import Moviedetail from './components/MovieDetail';
import Navbar from './components/Navbar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
        <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path="/" ><ApiMovie/> </Route>
          <Route exact path="/tvshow"><ApiTvShow/> </Route>
          <Route exact path="/moviedetail/:type/:id"><Moviedetail/> </Route>
        </div>
        </BrowserRouter>
  );
}

export default App;
