import './App.css';
import {MyNav, Welcome } from './components/function.js'
import AllTheBooks from './components/book.js';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <MyNav />
        <Container>
        <AllTheBooks/>
        </Container>
      </header>
    </div>
  );
}

export default App;
