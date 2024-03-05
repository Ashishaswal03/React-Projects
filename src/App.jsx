import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Select from './components/Select'


export default function App() {
  return (
    <>
     <Header/>
     <main>
     <div class="search-filter-container">
     <Search/>
     <Select/>
     </div>
     </main>
    </>
  )
}
