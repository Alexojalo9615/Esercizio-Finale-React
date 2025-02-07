import './App.css';
import { MyNav, Welcome } from './components/MyNavWelcome.js'
import AllTheBooks from './components/AllTheBooks.js';
import {Container} from 'react-bootstrap'

function App() {

  const onAddReview = (newReview) => {
    console.log("Nuova recensione aggiunta:", newReview);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <MyNav />
        <Container>
        <AllTheBooks/>
        {/* <CommentArea/> */}
        </Container>
      </header>
    </div>
  );
}

export default App;
