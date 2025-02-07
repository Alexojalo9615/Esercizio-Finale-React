import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {

  // rendering
  render(<App />);

  //recupero dell'elemento da testare 
  const linkElement = screen.queryByText(/learn react/i);


  // interazione in questo caso non c'è

  // verifica finale
  
  expect(linkElement).not.toBeInTheDocument();

  
});
