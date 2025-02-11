import{BrowserRouter as Router,Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/Contact" element = {<Contact/>}/>
        </Routes>
      </Router>
    </>
  
  );
}

export default App;