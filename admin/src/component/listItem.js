import React, { useState } from 'react';

export default ({id, momma, eggs, temperature, handleUpdate}) => {
    console.log('updated momma', momma)
    const [toggleEdit, setToggleEdit] = useState()
    const [loc_momma, setMomma] = useState(momma);
    const [loc_eggs, setEggs] = useState(eggs);
    const [loc_temperature, setTemperature] = useState(temperature)
    return (
        <tr>
            <td>
                {   
                    toggleEdit === true 
                    ? <input type="text" 
                        value={loc_momma}
                        onChange={(e) => setMomma(e.target.value)} /> 
                    : momma
                }
            </td>
            <td>
                {   
                    toggleEdit === true
                    ? <input type="number" 
                        value={loc_eggs}
                        onChange={(e) => setEggs(e.target.value)} /> 
                    : eggs
                }
            </td>
            <td>
                {   
                    toggleEdit === true
                    ? <input type="number" 
                        value={loc_temperature}
                        onChange={(e) => setTemperature(e.target.value)}/> 
                    : temperature
                }
            </td>
            <td>
                <button 
                    onClick={
                        () => {
                            if(toggleEdit){
                                handleUpdate({id, momma:loc_momma, eggs:loc_eggs, temperature:loc_temperature})
                            }
                            setToggleEdit(!toggleEdit);
                        }
                    }>
                    {
                        toggleEdit === true
                        ? "done"
                        : "edit"
                    }    
                </button>
            </td>
        </tr>
    )
}