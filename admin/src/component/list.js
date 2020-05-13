import React from 'react'
import ListItemComponent from './listItem';

export default ({list, handleUpdate}) => (
    <table className="stats-table">
      <thead>
        <tr>
          <th>Momma</th>
          <th>Eggs</th>
          <th>Temperature</th>
        </tr>
      </thead>
      <tbody>
        {
          list.length > 0 && list.map((item, i) => (
            <ListItemComponent {...item}  key={item.id} handleUpdate={handleUpdate} />
          )) 
        }
      </tbody>
   </table> 
)