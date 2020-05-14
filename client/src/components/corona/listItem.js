import React, {useState} from 'react';
import style from './listItem.module.css';

function CoronaListItem({item:{id, active, total, recovered}}){
    return (
        <li className={style.row}>
            <span><b>{ id }</b></span>
            <span>{ total }</span>
            <span>{ active }</span>
            <span>{ recovered }</span>
        </li>
    )
}

export default CoronaListItem