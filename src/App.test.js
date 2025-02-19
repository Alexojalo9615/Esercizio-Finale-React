import { fireEvent, render, screen } from '@testing-library/react'
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import AllTheBooks from './components/AllTheBooks.js';
import CommentArea from './components/CommentArea.js';


const mordenkainenBook = {

  asin: '0786966246',
  img: "https://images-na.ssl-images-amazon.com/images/I/8147MOLG%2BoL.jpg",
  title: "D&D MORDENKAINEN'S TOME OF FOES (Dungeons & Dragons)",
  category: "fantasy",
  price: 27.94

}
const follyBook = {

  asin: '0316190357',
  img: "https://images-na.ssl-images-amazon.com/images/I/71ScVeaHuUL.jpg",
  title: "The Folly of the World",
  category: "fantasy",
  price: 15.13

}


it('checking Welcome es.1', () => {

  // rendering
  render(<App />);

  //recupero dell'elemento da testare 
  const header = screen.getByRole("heading", {
    name: /benvenuti in epicbooks/i,
  })


  // interazione in questo caso non c'è

  // verifica finale

  expect(header).toBeInTheDocument();


});


it('bootstrap cards es.2', () => {

  render(<App />);

  const cards = screen.getAllByTestId('libri')

  expect(cards).toHaveLength(150)

})



it('commentArea check es.3', () => {
  render(<CommentArea asin={'0786966246'} />)

  const title = screen.getByText('Recensioni per questo libro')
  expect(title).toBeInTheDocument();


})


it('filtering books 1 es.4 parte 1', () => {


  render(<App />)

  const filterBook = screen.getByPlaceholderText(/cerca un libro/i)
  fireEvent.change(filterBook, { target: { value: 'mordenkainen' } })
  const allTheBooks = screen.getAllByTestId('libri')
  expect(allTheBooks).toHaveLength(1)
})

it('filtering books 2 es.4 parte 2', () => {


  render(<App />)

  const filterBook = screen.getByPlaceholderText(/cerca un libro/i)
  fireEvent.change(filterBook, { target: { value: 'sword' } })
  const allTheBooks = screen.getAllByTestId('libri')
  expect(allTheBooks).toHaveLength(9)
})


it('changed color es.5', () => {

  render(<BrowserRouter>

    <AllTheBooks />

  </BrowserRouter>
  )

  const books = screen.getAllByTestId('libri')

  // Assicuriamoci che almeno un libro esista
  expect(books.length).toBeGreaterThan(0);

  const firstBook = books[0];

  expect(firstBook).not.toHaveClass('selected');

  fireEvent.click(firstBook);

  expect(firstBook).toHaveClass('selected');

})



it('restoring color es.6', () => {

  render(<BrowserRouter>

    <AllTheBooks />

  </BrowserRouter>
  )

  // Otteniamo tutti i libri tramite il data-test-id = "libri"
  const books = screen.getAllByTestId('libri');

  // Selezionamo il primoe e secondo libro
  const firstBook = books[0];
  const secondBook = books[1];

  // Clicchiamo il primo libro e verifichiamo che diventi selezionato
  fireEvent.click(firstBook);
  expect(firstBook).toHaveClass('selected');

  // Clicchiamo il secondo libro
  fireEvent.click(secondBook);

  // Aspettiamo che il primo perda il 'selected', e il secondo libro abbia 'selected'
  expect(firstBook).not.toHaveClass('selected');
  expect(secondBook).toHaveClass('selected');

})


it('cheching there is no singlecomment on first page es.7', () => {

  render(<App />)
  const noSingleComments = screen.queryAllByTestId('single-comment')
  expect(noSingleComments).toHaveLength(0)

})

