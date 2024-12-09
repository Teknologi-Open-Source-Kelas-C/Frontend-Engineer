import React, { createContext, useContext, useState } from 'react'

// context
const FileFilterContext = createContext();

// membuat custom hook untuk mengakses context
export const useFilter = () => useContext(FileFilterContext);

// provider untuk membungkus komponen yang membutuhkan filter
export const FilterProvider = ({ children }) => {
  const [selectedSemester, setSelectedSemester] = useState('');
  const [searchQuery, setSearchQuery] = useState('');


  return (
    <FileFilterContext.Provider
      value={{
        selectedSemester,
        setSelectedSemester,
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </FileFilterContext.Provider>
  )
}