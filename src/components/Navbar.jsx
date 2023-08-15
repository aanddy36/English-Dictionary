import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaSearch, FaEraser } from 'react-icons/fa';

export const Navbar = ({setNewWord, newWord, handleSubmit}) => {
 // useEffect(()=>{
 //   const retrieveCapitals = async ()=>{
 //     const resp = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,unMember')
 //     const data = await resp.json()
 //     let newArray = data.filter(country => country.unMember)
 //     console.log(newArray);
 //   }
 //   retrieveCapitals()
 // },[])
  return (
    <nav className='nav'>
        <Link to='/'>
            <span className="word-title">Word<span style={{color:"#f39c1a"}}>row</span></span>
        </Link>
        <form  onSubmit={handleSubmit}>
          <div className='input-navbar-cont'>
            <FaSearch className='word-fa-magnifying-glass' onClick={handleSubmit}/>
            <input className="word-searcher" type="text" placeholder="e.g. Desert" onChange={(e)=>setNewWord(e.target.value)} value={newWord}/>
            {newWord && <FaEraser className='word-fa-xmark' onClick={()=>setNewWord("")}/>}
          </div>
        </form>
        <div className="word-contacts">
            <Link to='https://github.com/aanddy36'><FaGithub className='fa-brands'/></Link>
            <Link to='https://www.linkedin.com/in/delchiaroa/'><FaLinkedin className='fa-brands'/></Link>
        </div>
    </nav>
  )
}
