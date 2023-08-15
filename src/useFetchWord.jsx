import React, { memo, useEffect, useState } from 'react'

export const useFetchWord = (searchedWord) => {
    const [results, setResults] = useState(null)
    const [syllables, setSyllables] = useState(null)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [definitions, setDefinitions] = useState(null)
    const [examples, setExamples] = useState([])
    //console.log("Word inside useFetch: " + searchedWord);
    const url = `https://wordsapiv1.p.rapidapi.com/words/${searchedWord}`;
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
                const result = await response.json();
                //console.log("Se llamo al API");
                setResults(result);
                setSyllables(result.syllables.list)
                setDefinitions(result.results)
                setIsError(false)
                setExamples(()=>{
                    return result.results.map(word => {
                        if(word.examples){
                            return [...word.examples]
                        }
                        return []
                    })
                    .filter(subArray => subArray.length > 0)
                    .flatMap(subArray => subArray)
                })
            } catch(err){
                console.log("HUBO UN ERROR");
                setIsError(true)
            }
            setIsLoading(false)
        }
        definitionWord()
    },[searchedWord])


  return {results, syllables, isError, isLoading, definitions, examples}
}
