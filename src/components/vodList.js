import React from 'react'
import VodItem from './vodItem'

function VodList(props) {
  return (
    <div className='container-fluid py-5'>
    <div className='container'>
        <h2>List TV Shows:</h2>
        <div className='row'>
           {props.ar.map(item=>{
            return(
                <VodItem key={item.imdbID} item={item}/>
            )
           })}
        </div>
    </div>
    </div>
  )
}

export default VodList