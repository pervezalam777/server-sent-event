import React, { useEffect } from 'react';
import { withAppStateContext } from '../../store/context/appStateContext';
import CoronaListItem from './listItem'
import style from './listItem.module.css'

function CoronaList({getCountriesList, updateCountry, appState:{countries}}) {
    
    useEffect(()=>{
        getCountriesList();
    },[])

    return (
        <>
            <h1>Counties List</h1>
            <ul style={{listStyle:'none', margin:'0px', padding:'0px'}}>
                <li className={style.row}>
                    <span>Country Name</span>
                    <span>Total</span>
                    <span>Active</span>
                    <span>Recovered</span>
                    <span>Update</span>
                </li>
                {
                    Object.keys(countries).length > 0 && 
                    Object.keys(countries).map(key => (
                        <CoronaListItem 
                            key={key} 
                            updateCountry={updateCountry}
                            item={countries[key]} />
                    ))
                }
            </ul>
        </>
    )
}

export default withAppStateContext(CoronaList)