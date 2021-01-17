import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNavigation from './components/navbar';
import { DetailPokemonPage, MainPage, MyPokemonPage } from './pages';

function App() {
  return (
    <Router>
      <TopNavigation></TopNavigation>
      <Container>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/detail/:id" component={DetailPokemonPage} />
          <Route path="/mypokemon" component={MyPokemonPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
