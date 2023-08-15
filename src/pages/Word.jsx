import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaSearch, FaEraser } from 'react-icons/fa';
import { Meanings } from '../components/Meanings';
import { Examples } from '../components/Examples';
import {useFetchWord} from '../useFetchWord';
import { Navbar } from '../components/Navbar';


export const Word = () => {
  const {searchedWord} = useParams()
  //console.log("Selected: " + searchedWord);
  const [newWord, setNewWord] = useState("")
  const [isValid, setIsValid] = useState(true)
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!newWord){
      return setIsValid(false)
    }
    setIsValid(true)
    //console.log(newWord);
    navigate(`/${newWord.toLowerCase()}`)
    setNewWord("")
  }
  const {results, syllables, isError, isLoading, definitions, examples} = useFetchWord(searchedWord)
  console.log(results);
  //console.log(examples);
  //console.log(definitions);
  //console.log(syllables.join("-"));

  useEffect(() => {
    // Scroll to the top of the page when the component loads
    window.scrollTo(0, 0);
  });

  //useEffect(()=>console.log(newWord),[newWord])
  const antSynWord = (e) =>{
    e.preventDefault()
    //console.log(e.nativeEvent.submitter.value);
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
          <div className="full-box">
            <h1 className='box-title'>Synonyms</h1>
            <form className="syn-ant-rhy" onSubmit={antSynWord}>
              <button type="submit" value="defect">defect</button>
              <button type="submit" value="abandon">abandon</button>
              <button type="submit" value="desolate">desolate</button>
              <button type="submit" value="forsake">forsake</button>
            </form>
          </div>
          <div className="full-box">
            <h1 className='box-title'>Antonyms</h1>
            <form className="syn-ant-rhy">
                <span className="no-entries"> No results found</span>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
