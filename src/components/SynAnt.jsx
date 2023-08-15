import React from 'react'
import { nanoid } from 'nanoid'

export const SynAnt = ({title, handleSubmit, words}) => {
    if(words.length===0){
        return (
            <div className="full-box">
                <h1 className='box-title'>{title}</h1>
                <form className="syn-ant-rhy">
                    <span className="no-entries"> No results found</span>
                </form>
            </div>
          )
    }
  return (
    <div className="full-box">
        <h1 className='box-title'>{title}</h1>
        <form className="syn-ant-rhy" onSubmit={handleSubmit}>
            {words.map((item)=>{
                return <button key={nanoid()} type='submit' value={`${item}`}>{item}</button>
            })}
        </form>
    </div>
  )
}
