import axios from 'axios';
import React,{useState} from 'react'
import styles from "./AddBill.module.css"
import {useHistory} from 'react-router-dom'

function Add() {
  let history = useHistory();
  const [note, setNote] = useState({
      content:[
          {
              item:"",
              qty:Number,
              price: Number
          }
      ],
      title:"",
      type:"Bill"
  });
  const onSubmit= async e =>{
    e.preventDefault();
    await axios.post("http://localhost:3003/users",note);
    history.push("/");
  }
  return (

    <div className={styles.add}>
    <div className= {`form-group ${styles.form}`} >
      <h2 className={styles.header}>Add Bill</h2>
      <form onSubmit={e => onSubmit(e)}>
      <input 
        type='text'
        className='form-control form-control-lg'
        placeholder='title'
        name='title' 
        value={note.to}
        onChange={(e) => setNote({...note,title:e.target.value})}
      />
      
      <button className="btn btn-lg btn-primary">Add Bill</button>
      </form>
    </div>
     </div>
  )
}

export default Add