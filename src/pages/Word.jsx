import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Meanings } from '../components/Meanings';
import { Examples } from '../components/Examples';
import {useFetchWord} from '../useFetchWord';
import { Navbar } from '../components/Navbar';
import { SynAnt } from '../components/SynAnt';


export const Word = () => {
  const {searchedWord} = useParams()
  const [newWord, setNewWord] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!newWord){
      return setIsValid(false)
    }
    navigate(`/${newWord.toLowerCase()}`)
    setNewWord("")
  }
  const {results, syllables, isError, isLoading, definitions, 
    examples, synonyms, antonyms} = useFetchWord(searchedWord)

  useEffect(() => {
    // Scroll to the top of the page when the component loads
    window.scrollTo(0, 0);
  });

  const antSynWord = (e) =>{
    e.preventDefault()
    navigate(`/${e.nativeEvent.submitter.value}`)
  }

  const handleChange = (e)=>{
    setNewWord(e.target.value)
  }

  if(isError){
    return (
      <div>
        <Navbar handleSubmit={handleSubmit} handleChange={handleChange} newWord={newWord} setNewWord={setNewWord}/>
        <div style={{margin: "100px auto 0 auto", maxWidth: "80%"}}>
          <h4 className='wrong-word'>Ups! Apparently you misspelled the word</h4>
          <h3 className='wrong-word'>Try again!</h3>
        </div>
      </div>)
  }
  if(isLoading){
    return (
      <div>
        <Navbar handleSubmit={handleSubmit} handleChange={handleChange} newWord={newWord} setNewWord={setNewWord}/>
        <div style={{margin: "100px auto 0 auto", maxWidth: "80%"}}>
          <h4 className='wrong-word'>Loading...</h4>
        </div>
      </div>)
  }

  return (
    <div>
      <Navbar handleSubmit={handleSubmit} handleChange={handleChange} newWord={newWord} setNewWord={setNewWord}/>
      <main className='word-container'>
        <div className="word-and-syllables">
          <h1 className="word">{results?.word || searchedWord}</h1>
          <span className="syllables">{syllables?.join("-")}</span>
        </div>
        <div className='box-container'> 
          <Meanings definitions={definitions}/>
          <Examples examples={examples}/>
          <SynAnt title={"Synonyms"} handleSubmit={antSynWord} words={synonyms}/>
          <SynAnt title={"Antonyms"} handleSubmit={antSynWord} words={antonyms}/>
        </div>
      </main>
    </div>
  )
}
