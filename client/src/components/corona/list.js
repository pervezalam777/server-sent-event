import React, { useEffect } from 'react';
import { withCoronaContext } from '../../store/context/coronaStateContext';
import CoronaListItem from './listItem'
import style from './listItem.module.css'

function CoronaList({connect, coronaState:{countries}}) {
    
    useEffect(()=>{
        connect();
    },[])

    return (
        <>
            <ul style={{listStyle:'none', margin:'0px', padding:'0px'}}>
                <li className={style.row}>
                    <span>Country Name</span>
                    <span>Total</span>
                    <span>Active</span>
                    <span>Recovered</span>
                </li>
                {
                    countries.length > 0 && 
                    countries.map(country => (
                        <CoronaListItem 
                            key={country.id} 
                            item={country} />
                    ))
                }
            </ul>
        </>
    )
}

export default withCoronaContext(CoronaList)