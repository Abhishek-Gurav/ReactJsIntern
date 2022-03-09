import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
function DropdownAdd(props) {
  return (
    <Dropdown>
        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
            Add
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="/add">Note</Dropdown.Item>
            <Dropdown.Item href="/addEmail">Email</Dropdown.Item>
            <Dropdown.Item href="/addBill">Bill</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownAdd