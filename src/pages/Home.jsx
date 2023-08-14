import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaSearch, FaEraser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Home = () => {
    const [word, setWord] = useState("")
    const [isValid, setIsValid] = useState(true)

    const handleChange = (e)=>{
        setWord(e.target.value)
        if(!isValid)setIsValid(true)
    }
    //useEffect(()=>console.log(word),[word])
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!word){
            setIsValid(false)
            console.log("entro");
            return
        }
        setIsValid(true)
        console.log(word);

    }
    return (
        <main>
            <div className="contacts">
                <Link to='https://github.com/aanddy36'><FaGithub className='fa-brands'/></Link>
                <Link to='https://www.linkedin.com/in/delchiaroa/'><FaLinkedin className='fa-brands'/></Link>
            </div>
            <h1 className="title">Word<span className='row'>row</span></h1>
            <form onSubmit={handleSubmit}>
                <div className="search-bar">
                    <FaSearch className='fa-magnifying-glass' onClick={handleSubmit}/>
                    <input type="text" className="searcher" placeholder="e.g. Desert" 
                    onChange={handleChange} value={word} style={{borderColor: isValid ? "#212A3E" : "rgb(192, 15, 15)"}}/>
                    {word && <FaEraser className='fa-xmark' onClick={()=>setWord("")}/>}
                </div>
                {!isValid && <span className="wrong-text">Please insert a word!</span>}
                <span className="text">Look for the definition, examples, synonyms and antonyms for any word of the English language! </span>
                <button type='submit' className='hyperlink-a'>Search</button>
            </form>
        </main>
    )

  /*return (
    <main className='body-home'>
        <div className="contacts">
            <Link to='https://github.com/aanddy36'><FaGithub className='fa-brands'/></Link>
            <Link to='https://www.linkedin.com/in/delchiaroa/'><FaLinkedin className='fa-brands'/></Link>
        </div>
        <h1 className="title">Word<span style={{color:"#f39c1a", textShadow:"5px 0px 0 black"}}>row</span></h1>
        <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass" style={{color:"#212a3e"}}></i>
            <input className="searcher" type="text" placeholder="Desert" />
            <i className="fa-solid fa-xmark" style={{color:"#212a3e"}}></i>
        </div>
        <span className="wrong-text">Please insert a word!</span>
        <span className="text">Look for the definition, examples, synonyms and antonyms for any word of the English language! </span>
        <div className="hyperlink-a"><a href="word.html">Search</a></div>
    </main>
  )*/
}
