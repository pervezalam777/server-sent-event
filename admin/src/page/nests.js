import React, { useCallback, useReducer, useEffect } from 'react';
import FromComponent from '../component/form';
import ListComponent from '../component/list';
import {reducer, initialState} from '../store/reducers/appStateReducer'

function NestsPage(){
    const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/getList");
      const payload = await response.json();
      dispatch({type:"update_local_list", payload});
    }
    fetchData();
  }, [])
  
  const handleSubmit = useCallback(async (e)=>{
    e.preventDefault();
    console.log(state.formData);
    const response = await fetch("http://localhost:5000/nest", {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state.formData)
    })
    const data = await response.json();
    console.log("data..", data)
    dispatch({type:'update_local_list', payload:[data]})
    dispatch({type:'reset'})
  }, [])

  const handleChange = useCallback((e)=> {
    const id = e.currentTarget.id;
    const value = e.currentTarget.value;
    dispatch({type:id, payload:value})
  }, [])

  const handleUpdate = useCallback(async (payload) => {
    let response = await fetch("http://localhost:5000/nestUpdate", {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    dispatch({type:"update_list_item", payload})
  }, [])

  return ( 
    <>
      <h3>Add new Item</h3>
      <FromComponent 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        {...state.formData}
      />
      <h3>Update Item</h3>
      { state.list.length > 0 && <ListComponent list={state.list} handleUpdate={handleUpdate}/>}
    </>
  );
}

export default NestsPage;