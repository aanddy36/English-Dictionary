import React, { memo, useEffect, useState } from 'react'

export const useFetchWord = (searchedWord) => {
    const [results, setResults] = useState(null)
    const [syllables, setSyllables] = useState(null)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [definitions, setDefinitions] = useState(null)
    const [examples, setExamples] = useState([])
    const [synonyms, setSynonyms] = useState([])
    const [antonyms, setAntonyms] = useState([])

    const url = `https://wordsapiv1.p.rapidapi.com/words/${searchedWord.replaceAll(" ", "%20")}`;
    const urlAnt = `https://wordsapiv1.p.rapidapi.com/words/${searchedWord.replaceAll(" ", "%20")}/antonyms`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3fe9412164msh68fa0a54b638e9ep164706jsn96596cfc6b69',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    } 
    useEffect(()=>{
        const definitionWord = async ()=>{
            try{
                const response = await fetch(url, options);
                if(!response.ok){
                    console.log("hola");
                    setIsError(true)
                    setIsLoading(false)
                    return
                }
                const result = await response.json();
                setResults(result);
                setSyllables(result.syllables?.list)
                setDefinitions(result.results)
                setIsError(false)
                setExamples(()=>{
                    return result.results?.map(word => {
                        if(word.examples){
                            return [...word.examples]
                        }
                        return []
                    })
                    .filter(subArray => subArray.length > 0)
                    .flatMap(subArray => subArray)
                })
                setSynonyms(()=>{
                    const newArray = result.results?.map(word=>{
                        if(word.synonyms){
                            return [...word.synonyms]
                        }
                        return []
                    })
                    .filter(subArray => subArray.length > 0)
                    .flatMap(subArray => subArray)

                    return [...new Set(newArray)]
                })
                const responseAnt = await fetch(urlAnt, options);
                const resultAnt = await responseAnt.json();
                setAntonyms(resultAnt.antonyms);                
            } catch(err){
                console.log(err);
                console.log("err");
                setIsError(true)
            }
            setIsLoading(false)
        }
        definitionWord()
    },[searchedWord])

    //console.log(results);
  return {results, syllables, isError, isLoading, definitions, examples, synonyms, antonyms}
}
