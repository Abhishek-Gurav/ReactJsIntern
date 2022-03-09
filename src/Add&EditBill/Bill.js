import React, { useState, useEffect, useCallback } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"
import { FiEdit } from "react-icons/fi"
import { AiFillDelete } from "react-icons/ai"
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';


function Bill(props) {


  const [tableData, setTableData] = useState({
    data: [],
    columns: [],
  })
  const ref = React.createRef();


  const createData = (table) => {
    const demo = Object.keys(table);

    return demo.map((item, index) => {
      let hidden = false;
      if (item === "id") {
        hidden = true;
      }
      return {
        dataField: item,
        text: item,
        hidden: hidden,
      }
    });
  }

  const selectRow = {
    mode: 'checkbox',
  };

  function DeleteOperation(id) {
    setTableData((prevState) => {
      const newState = { ...prevState };

      newState.data = newState.data.filter((item) => item.id !== id);

      return newState;
    })
  }

  const deleteRow = () => {
    if (ref.current == null) return;
    console.log(ref.current.selectionContext.selected);
    const id_list = ref.current.selectionContext.selected;

    id_list.forEach((id) => {
      DeleteOperation(id);
    });

  }

  const addRow = () => {

    setTableData((prevState) => {
      const newState = { ...prevState };

      const columns = [...newState.columns];

      let newData = {};
      columns.forEach((item, index) => {
        newData[item.dataField] = '';
      });
      newData['id'] = Math.random();

      console.log(newData, newState);
      return {
        ...newState,
        data: [...newState.data, newData],
      };
    })

  }

  const editRow = (oldValue, newValue, row, column) => {
    console.log(oldValue, newValue, row, column);

    setTableData((prevState) => {
      const newState = { ...prevState };

      const data = newState.data.map((item, index) => {
        if (item.id === row.id) {
          return row;
        }

        return item;
      });



      return {
        ...newState,
        data: data,
      };
    })

  }

  useEffect(() => {
    const newTableData = props.activeNoteContent.content;
    const data = {
      columns: createData(newTableData[0]),
      data: newTableData,
    }
    // console.log
    setTableData(data);

  }, [props.activeNoteContent.content]);


  return (
    <div className='table__div'>
      <h1 className="preview-title">{props.activeNoteContent.title}<Link to={`editBill/${props.activeNoteContent.id}`}><FiEdit className="edtBtn" /></Link> <button className='dltBtn_content ' onClick={props.deleteUser}><AiFillDelete /></button></h1>
      <hr />
      {
        tableData.data.length > 0 ?

          <BootstrapTable
            ref={ref}
            keyField='id'
            data={tableData.data}
            columns={tableData.columns}
            selectRow={selectRow}
            cellEdit={cellEditFactory({
              mode: 'click',
              blurToSave: true,
              afterSaveCell: editRow,
            })}
          />
          :
          null
      }
      <button
        onClick={deleteRow}
      >
        Delete Rows
      </button>
      <button
        onClick={addRow}
      >
        Add Row
      </button>
    </div>
  )
}

export default Bill