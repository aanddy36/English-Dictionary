import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaSearch, FaEraser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export const Home = () => {
    const [word, setWord] = useState("")
    const [isValid, setIsValid] = useState(true)
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setWord(e.target.value)
        if(!isValid)setIsValid(true)
    }
    //useEffect(()=>console.log(word),[word])
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!word){
            return setIsValid(false)
        }
        setIsValid(true)
        navigate(`/${word.toLowerCase()}`)

    }
    
    const handleRandom = ()=>{
        const randomWord = async ()=>{
            let result = {}
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '3fe9412164msh68fa0a54b638e9ep164706jsn96596cfc6b69',
                    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
                }
            } 
            while(!result.results){
                const response = await fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true', options);
                result = await response.json();
                console.log(result);
            }
            navigate(`/${result.word}`)         
        }
        randomWord()
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
                <div className='btns'>
                    <button type='submit' className='hyperlink-a'>Search</button>
                    <button type='button' className='hyperlink-a-random' onClick={handleRandom}>Random</button>
                </div>
            </form>
        </main>
    )
}
