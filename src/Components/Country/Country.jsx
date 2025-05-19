    import React, { useState } from 'react'
    import './Country.css'
    
    function Country({country,handlevisistedCountry,handleVisitedFlag}) {
        const {name ,flags,population ,area,cca3}=country;
        // console.log(country);
        const [visited,setVisited]=useState(false);
        const handdleVisisted=()=>{
            setVisited(!visited);
        }
      return (
        <div  className={`country ${visited ? 'visited':'non-visited    '}`}>
            <img src={flags.png} alt="" />
            <h1 style={{color: visited ? 'purple ':'white'}}> {name.common}</h1>
            <h3>population : {population}</h3>
            <h3>Area : {area}</h3>
            <p><small>Code  :{cca3}</small></p>
            <button onClick={()=>handlevisistedCountry(country)}>Mark Vissted</button><br />
            <button onClick={()=>handleVisitedFlag(country.flags.png)}>Add Flag</button> <br />
            <button onClick={handdleVisisted}>{visited?'Visited': 'Going'}</button>
            {visited ?'I have Visited this Country.':'I Want to visit'}
        </div>
      )
    }
    
    export default Country
    