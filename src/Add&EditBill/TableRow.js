import React,{useState} from 'react'

function TableRow() {
  return (
    function TableRow ({row, handleDataChange, deleteRow}) {
        var index = row.index
        var [first_name, handleChangeFirstName] = useState(row.first_name);
        var [last_name, handleChangeLastName] = useState(row.last_name);
       
        const updateValues = e => {
           var inputName = e.target.name
           var inputValue = e.target.value
           if(inputName == 'first_name'){
              handleChangeFirstName(inputValue)
           }else if(inputName == 'last_name'){
              handleChangeLastName(inputValue)
           }
     
           handleDataChange({
              index: index,
              first_name: first_name,
              last_name: last_name
           })
        }
     
        const removeRow = () => {
           deleteRow(index)
        }
     
        return(
           <tr>
              <td>{index + 1}</td>
              <td>
                 <input type="text" name="first_name" className="first_name" placeholder="First Name" value={first_name} onChange={updateValues}></input>
                 <input type="text" name="last_name"  className="last_name" placeholder="Last Name" value={last_name} onChange={updateValues}></input>
              </td>
              <td><button type="button" className="btn btn-remove" onClick={removeRow}>&times;</button></td>
           </tr>
        )
     }
  )
}

export default TableRow