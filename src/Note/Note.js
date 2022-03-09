import React from 'react'
import {Link} from "react-router-dom"
import {FiEdit} from "react-icons/fi"
import {AiFillDelete} from "react-icons/ai"
function Note(props) {
  return (
    <div className="app-main">
          <div className="app-main-note-preview">
              <h1 className="preview-title">{props.activeNoteContent.title} <Link to={`edit/${props.activeNoteContent.id}`}><FiEdit className="edtBtn" /></Link><button className='dltBtn_content homepage__dlt' onClick={props.deleteUser}><AiFillDelete /></button></h1>
              <hr /><p>
              <div className="markdown-preview" style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{__html: props.activeNoteContent.content}}>
            
              </div>
              </p>
            </div>
          </div>
  )
}

export default Note