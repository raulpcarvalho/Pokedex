import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container} from 'react-bootstrap';

// Pages
import Homepage from "./pages/Homepage";
import PokemonPage from "./pages/PokemonPage";

import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header/>
      <Container>
        <Routes>
        <Route exact path= '/' element={<Homepage/>}/>
        <Route path='/pokemon/:id' element={<PokemonPage/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
