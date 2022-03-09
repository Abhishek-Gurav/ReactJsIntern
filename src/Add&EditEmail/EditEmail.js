import axios from 'axios';
import React,{useState,useEffect} from 'react'
import styles from "./AddEmail.module.css"
import {useHistory,useParams} from 'react-router-dom'

function Edit() {
  let history = useHistory();
  const id = useParams();
  const [note, setNote] = useState({
    to:"",
    cc:"",
    type:"Email",
    title:"",
    body:""
});
  useEffect(()=>{
    loadNote();
  },[])
  const onSubmit= async e =>{
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id.id}`,note);
    history.push("/");
  }
  const loadNote = async () => {
      const result = await axios.get(`http://localhost:3003/users/${id.id}`);
      setNote(result.data);
  }
  const handleKeyDown = e => {
    if (e.key === 'Tab') {
        e.preventDefault();
        const textArea = e.currentTarget; // or use document.querySelector('#my-textarea');
        textArea.setRangeText(
          '\t',
          textArea.selectionStart,
          textArea.selectionEnd,
          'end'
        );
      }
    };
  return (

    <div className={styles.add}>
    <div className= {`form-group ${styles.form}`} >
      <h2 className={styles.header}>Edit Note</h2>
      <form onSubmit={e => onSubmit(e)}>
      <input 
        type='text'
        className='form-control form-control-lg'
        placeholder='to'
        name='to' 
        value={note.to}
        onChange={(e) => setNote({...note,to:e.target.value})}
      />
      <input 
        type='text'
        className='form-control form-control-lg'
        placeholder='cc'
        name='cc' 
        value={note.cc}
        onChange={(e) => setNote({...note,cc:e.target.value})}
      />
      <input 
        type='text'
        className='form-control form-control-lg'
        placeholder='subject'
        name='subject' 
        value={note.title}
        onChange={(e) => setNote({...note,title:e.target.value})}
      />
      <textarea 
        type='text'
        className='form-control form-control-lg'
        placeholder='content'
        name='content'
        rows={8}
        value={note.body}
        onChange={(e) => setNote({...note,body:e.target.value})}
        onKeyDown={handleKeyDown}
      />
      <button className="btn btn-lg btn-primary">Edit Email</button>
      </form>
    </div>
     </div>
  )
}

export default Edit