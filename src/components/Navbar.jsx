import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaSearch, FaEraser } from 'react-icons/fa';

export const Navbar = ({setNewWord, newWord, handleSubmit}) => {
  return (
    <nav className='nav'>
        <Link to='/'>
            <span className="word-title">Word<span style={{color:"#f39c1a"}}>row</span></span>
        </Link>
        <form  onSubmit={handleSubmit}>
            <FaSearch className='word-fa-magnifying-glass' onClick={handleSubmit}/>
            <input className="word-searcher" type="text" placeholder="e.g. Desert" onChange={(e)=>setNewWord(e.target.value)} value={newWord}/>
            {newWord && <FaEraser className='word-fa-xmark' onClick={()=>setNewWord("")}/>}
        </form>
        <div className="word-contacts">
            <Link to='https://github.com/aanddy36'><FaGithub className='fa-brands'/></Link>
            <Link to='https://www.linkedin.com/in/delchiaroa/'><FaLinkedin className='fa-brands'/></Link>
        </div>
    </nav>
  )
}
