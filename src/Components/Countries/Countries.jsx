import React, { useEffect, useState } from 'react'
import Country from '../Country/Country';
import './Countries.css'

function Countries() {
    const [countries,setCountries]=useState([]);
    const [visitedCountry,setVisitedCountry]=useState([]);
    const [visitedFlag,setVisitedFlag]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data));
    },[]);
    const handlevisistedCountry=country=>{
        // visitedCountry.push(country);
        const newVisitedCountry=[...visitedCountry,country];
        setVisitedCountry(newVisitedCountry);
    }
    const handleVisitedFlag=flag=>{
        const newVisitedFlag=[...visitedFlag,flag];
        setVisitedFlag(newVisitedFlag);
    }
  return (
    <div > 
        <h3>Countries  :  {countries.length}</h3>
        <div>
            <h5>Visited Countries : {visitedCountry.length}</h5>
            <ul>
                {
                    visitedCountry.map(country=>
                        <><li key={country.cca3}> {country.name.common}</li></>)
                }
            </ul>
        </div>
        <div className='flag-container'>
            {
                visitedFlag.map((flag,index)=> <img key={index} src={flag} alt="" />)
            }
        </div>

         <div className='country-container'>
            {
            countries.map(country=><Country handleVisitedFlag={handleVisitedFlag} handlevisistedCountry={handlevisistedCountry} key={country.cca3} country={country}/>)
         }
         </div>
    </div>
  )
}

export default Countries
