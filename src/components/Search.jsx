import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  
  return (
    <div className='search'>
      <div>
      <img src="./search.svg" alt="" />
      <input 
        className=''
        type="text"
        value={searchTerm}
        placeholder='search through thousand of movie'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      
      
    </div>
  )
}

export default Search