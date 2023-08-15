import React, { useEffect, useRef, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { nanoid } from 'nanoid'

export const Meanings = ({definitions}) => {
  const divRef = useRef(null)
  const [height, setHeight] = useState(divRef.current?.getBoundingClientRect().height)
  const [viewMore, setViewMore] = useState(false)
  useEffect(()=>{
    //console.log(height)
    setHeight(divRef.current?.getBoundingClientRect().height)
    setViewMore(false)
  },[definitions])
  //useEffect(()=>console.log(height),[height])
  //useEffect(()=>console.log(viewMore),[viewMore])
  return (
    <div ref={divRef} className={viewMore ? 'full-box' : 'limited-box'}>
        <h1 className='box-title'>Meanings</h1>
        <div className="item">
          {definitions.map((word, index) =>{
            const {definition, partOfSpeech} = word
            return <p key={nanoid()} className='comp-meanings'>
              <span className='number'>{`${index+1}.`}</span>
              <span className='type-of-word'>{`${partOfSpeech}.`}</span>
              <span className='meaning'>{`${definition}.`}</span>
            </p>
          })}
        </div>
        {height > 289 && <div className={viewMore ? 'see-less-cont' : 'see-more-cont'}>
          <button onClick={()=>setViewMore(prev => !prev)}><FaAngleDown className='angle-down'/>{viewMore ? "View less" : "View more"}</button>
          </div>}
    </div>
  )
}
