import { createContext, useState } from "react";

export const BookContext = createContext(); // "createContext()" è una funzione di React che serve a creare un contesto per la condivisione di dati tra componenti senza dover passare esplicitamente le props a ogni livello della gerarchia. Qui viene creato "BookContext" che servirà come contenitore per i dati condivisi.


const BookProvider = ({ children }) => {

    const [selectedBook, setSelectedBook] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const contextValue = {

        selectedBook,
        setSelectedBook,
        searchQuery,
        setSearchQuery
    }

    return (

        <BookContext.Provider value={contextValue} // "BookProvider" è un componente che avvolge gli altri componenti e fornisce loro i dati (stato e funzioni) tramite "BookContext.Provider". Il valore condiviso (contextValue) include selectedBook, searchQuery e le rispettive funzioni per aggiornarli.// 
           > {children}
        </BookContext.Provider>
    );
}

export default BookProvider