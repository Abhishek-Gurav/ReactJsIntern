import React from 'react'
import {Link} from "react-router-dom"
import {FiEdit} from "react-icons/fi"
import {AiFillDelete} from "react-icons/ai"
import BootstrapSwitchButton from 'bootstrap-switch-button-react'



function Note(props) {
  const [checked, setChecked] = React.useState(false);
  function handleOnChange(){
    setChecked(!checked);
  }
  function FirstSnippet() {
    return (
      <><h1 className="preview-title">{props.activeNoteContent.title} <Link to={`editEmail/${props.activeNoteContent.id}`}><FiEdit className="edtBtn" /></Link> <button className='dltBtn_content' onClick={props.deleteUser}><AiFillDelete /></button></h1><p className='toCc toCcTop'><b>To :</b> {props.activeNoteContent.to}</p><p className='toCc'><b>cc :</b> {props.activeNoteContent.cc} </p></>
    )
  }
  function SecondSnippet() {
    return (
      <>
      <p className='toCc toCcTop'><b>To :</b> {props.activeNoteContent.to}</p>
      <p className='toCc'><b>cc :</b> {props.activeNoteContent.cc} </p>
      <p  className='toCc'><b>Subject :</b> {props.activeNoteContent.title} <Link to={`editEmail/${props.activeNoteContent.id}`}><FiEdit className="edtBtn" /></Link> <button className='dltBtn_content ' onClick={props.deleteUser}><AiFillDelete /></button></p>
  
      </>
    )
  }
  return (
    
    <div className="app-main">
          <div className="app-main-note-preview">
            <div className='Header__email'>
            <span>
            {
              checked ? <FirstSnippet /> : <SecondSnippet />
            }
            </span>
            <BootstrapSwitchButton className="toggler__email" onChange={handleOnChange} checked={true} onstyle="dark" offstyle="light" style="border"/>
            </div>
              <hr /><p>
              <div className="markdown-preview" style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{__html: props.activeNoteContent.body}}>
            
              </div>
              </p>
            </div>
          </div>
  )
}

export default Note