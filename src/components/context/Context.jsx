import React, { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageContext = createContext();

const PageProvider = ({ children }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = newPage => {
    setCurrentPage(newPage);
  };

  return (
    <PageContext.Provider value={{ currentPage, goToPage }}>
      {children}
    </PageContext.Provider>
  );
};

export { PageContext, PageProvider };