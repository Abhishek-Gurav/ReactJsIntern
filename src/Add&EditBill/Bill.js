import React,{useState} from 'react'
import Table from 'react-bootstrap/Table'
import {Link} from "react-router-dom"
import {FiEdit} from "react-icons/fi"
import {AiFillDelete} from "react-icons/ai"

function Bill(props) {
  return (
    <div className='table__div'>
        <h1 className="preview-title">{props.activeNoteContent.title}<Link to={`editBill/${props.activeNoteContent.id}`}><FiEdit className="edtBtn" /></Link> <button className='dltBtn_content ' onClick={props.deleteUser}><AiFillDelete /></button></h1>
        <hr></hr>
        <Table className='homepage__table' striped bordered hover>
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    {
        props.activeNoteContent.content && props.activeNoteContent.content.map((item, index) => {
                return (
                <tr>
                    <td>{item.item}</td>
                    <td>{item.qty}</td>
                    <td>{item.price}</td>
                    <td>{item.price * item.qty}</td>
                </tr>
            )
        })
        
    }
    <tr>
        <td>Total</td>
        <td>3</td>
        <td></td>
        <td>30</td>
    </tr>
  </tbody>
</Table>
    </div>
  )
}

export default Bill