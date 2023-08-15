import React, { useEffect, useState, useRef } from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { nanoid } from 'nanoid'

export const Examples = ({examples}) => {
    const divRef = useRef(null)
    const [height, setHeight] = useState(divRef.current?.getBoundingClientRect().height)
    const [viewMore, setViewMore] = useState(false)
    useEffect(()=>{
        setHeight(divRef.current?.getBoundingClientRect().height)
        setViewMore(false)
      },[examples])

    if(examples.length === 0){
        return (
            <div className="full-box">
                <h1 className='box-title'>Examples</h1>
                <form className="syn-ant-rhy">
                    <span className="no-entries"> No examples available yet</span>
                </form>
            </div>
          )
    }
    
  return (
    <div ref={divRef} className={viewMore ? 'full-box' : 'limited-box'}>
        <h1 className='box-title'>Examples</h1>
        <div className="item">
            {examples.map((word, index)=>{
                return <p key={nanoid()} className='comp-examples'>
                    <span className='number'>{`${index+1}.`}</span>
                    <span className='example'>{`"${word}."`}</span>
                </p>
            })}
        </div>
        {height > 289 && <div className={viewMore ? 'see-less-cont' : 'see-more-cont'}>
          <button onClick={()=>setViewMore(prev => !prev)}><FaAngleDown className='angle-down'/>{viewMore ? "View less" : "View more"}</button>
          </div>}
    </div>
  )
}
