import './App.css';
import { MyNav, Welcome } from './components/MyNavWelcome.js'
import AllTheBooks from './components/AllTheBooks.js';
import { Container } from 'react-bootstrap'
import BookProvider from './BookContext.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookDetails from './components/BookDetails.js';



function App() {

  const onAddReview = (newReview) => {
    console.log("Nuova recensione aggiunta:", newReview);
  };

  return (
    <BrowserRouter>
      <BookProvider>
        <div className="App">
          <header className="App-header">
            <Welcome />
            <MyNav />
            <Container>
              <Routes>
                <Route path='/' element={<AllTheBooks />}></Route>
                <Route path='/book/:id' element={<BookDetails/>}></Route>
              </Routes>
            </Container>
          </header>
        </div>
      </BookProvider>
    </BrowserRouter>
  );
}

export default App;
