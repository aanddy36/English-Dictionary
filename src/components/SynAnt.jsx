import React, { useEffect, useRef, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { nanoid } from 'nanoid'


export const SynAnt = ({title, handleSubmit, words}) => {
    const divRef = useRef(null)
    const [height, setHeight] = useState(divRef.current?.getBoundingClientRect().height)
    const [viewMore, setViewMore] = useState(false)
    useEffect(()=>{
      setHeight(divRef.current?.getBoundingClientRect().height)
      setViewMore(false)
    },[words])
  
    if(words?.length===0){
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
    <div ref={divRef} className={viewMore ? 'full-box' : 'limited-box'}>
        <h1 className='box-title'>{title}</h1>
        <form className="syn-ant-rhy" onSubmit={handleSubmit}>
            {words?.map((item)=>{
                return <button key={nanoid()} type='submit' value={`${item}`}>{item}</button>
            })}
        </form>
        {height > 289 && <div className={viewMore ? 'see-less-cont' : 'see-more-cont'}>
          <button onClick={()=>setViewMore(prev => !prev)}><FaAngleDown className='angle-down'/>{viewMore ? "View less" : "View more"}</button>
          </div>}
    </div>
  )
}
