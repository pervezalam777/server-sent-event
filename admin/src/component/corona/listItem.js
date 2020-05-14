import React, {useState} from 'react';
import style from './listItem.module.css';

function CoronaListItem(
    {
        item:{id, active, total, recovered, published}, 
        updateCountry, 
        addCountry
    }
){
    const [toggleEdit, setToggleEdit] = useState()
    const [loc_active, setActive] = useState(active);
    const [loc_total, setTotal] = useState(total);
    const [loc_recovered, setRecovered] = useState(recovered)
    return (
        <li className={style.row}>
            <span><b>{id}</b></span>
            <span>
                {   
                    toggleEdit === true 
                    ? <input type="number" 
                        value={loc_total}
                        onChange={(e) => setTotal(e.target.value)} /> 
                    : total
                }
            </span>
            <span>
                {   
                    toggleEdit === true
                    ? <input type="number" 
                        value={loc_active}
                        onChange={(e) => setActive(e.target.value)} /> 
                    : active
                }
            </span>
            <span>
                {   
                    toggleEdit === true
                    ? <input type="number" 
                        value={loc_recovered}
                        onChange={(e) => setRecovered(e.target.value)}/> 
                    : recovered
                }
            </span>
            <span>
                <button 
                    onClick={
                        () => {
                            if(toggleEdit){
                                let country = {
                                    id, 
                                    active:loc_active, 
                                    total:loc_total, 
                                    recovered:loc_recovered,
                                    published:true
                                }
                                
                                published == true 
                                ? updateCountry(country) 
                                : addCountry(country)
                            }
                            setToggleEdit(!toggleEdit);
                        }
                    }>
                    {
                        toggleEdit === true 
                        ? published === true ? "update" : "publish"
                        : "edit"
                    }    
                </button>
            </span>
        </li>
    )
}

export default CoronaListItem