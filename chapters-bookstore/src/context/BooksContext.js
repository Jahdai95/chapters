import React, { createContext, useState, useEffect } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    const db = getFirestore();
    const booksCollection = collection(db, "books");
    getDocs(booksCollection).then((snapshot) => {
      setBooks(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ books, getBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
