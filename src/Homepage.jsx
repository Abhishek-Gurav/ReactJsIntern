import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {AiFillDelete} from "react-icons/ai"
import DropdownAdd from "./Components/DropdownAdd";
import Note from "./Note/Note";
import Email from "./Email/Email";
import Bill from "./Add&EditBill/Bill";
import {Link} from "react-router-dom"
import {FiEdit} from "react-icons/fi"
function Homepage() {
  const [data, setData] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const [activeNoteContent, setActiveNoteContent] = useState({});
  useEffect(() => {
    loadUser();
  },[]);



  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setData(result.data.reverse());
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    setActiveNoteContent({});
    setActiveNote(false);
    loadUser();
  }
  function dtlUser(){
    deleteUser(activeNoteContent.id);
  }
  return (
    <div className="App">
      <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ToDo's</h1>
        <DropdownAdd />
      </div>
      <div className="app-sidebar-notes">
      {
          data.map((item,index)=>{
            return(
              <div
            className={`app-sidebar-note ${item.id === activeNote && "active"}`}
            onClick={() => {
              setActiveNote(item.id)
              setActiveNoteContent(item)
              }}
          >
          <div className="sidebar-note-title">
              <strong>{item.title}</strong>
              <span>
              {
                item.type === "Note" ? <Link to={`edit/${item.id}`}><FiEdit className="edtBtn_sidebar" /></Link> : <Link to={`editEmail/${item.id}`}><FiEdit className="edtBtn_sidebar" /></Link>
              }
              <button className="homepage__dlt" onClick={() => deleteUser(item.id)}><AiFillDelete /></button>
              </span>

            </div>
            <p>{item.type}</p>
          </div>
            )
          })
        }
        </div>
    </div>
    {
      
      activeNote && (
        activeNoteContent.type === "Note" ? (
              <Note activeNoteContent={activeNoteContent} deleteUser={dtlUser}
                
              />
        ) : (
          activeNoteContent.type === "Email" ? (
          <Email activeNoteContent={activeNoteContent} deleteUser={dtlUser} />
          ) : (
            <Bill activeNoteContent={activeNoteContent} deleteUser={dtlUser}/>  //Add Bill
          )
        )
      )
    }
    
    </div>
  );
}

export default Homepage;
