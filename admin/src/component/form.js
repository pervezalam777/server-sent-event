import React, { useCallback, useReducer } from 'react';

export default ({handleSubmit, handleChange, momma, eggs, temperature}) => (
    <form onSubmit={handleSubmit}>
        <label htmlFor="momma">Momma Name:</label>
        <input type="text" id="momma" value={momma} onChange={handleChange} />
        <br />
        <label htmlFor="eggs">Eggs Count:</label>
        <input type="number" id="eggs" value={eggs} onChange={handleChange} />
        <br />
        <label htmlFor="temperature">Temperature:</label>
        <input type="number" id="temperature" value={temperature} onChange={handleChange} />
        <br />
        <button type="submit">submit</button>
    </form>
)