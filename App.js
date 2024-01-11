import './App.css';
import Books from './pages/Books';
import AddBooks from './pages/AddBooks';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path = "/" element={<Home />}/>
        <Route path = "/books" element={<Books />}/>
        <Route path = "/addBooks" element={<AddBooks />}/>
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;