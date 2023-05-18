import React, { useState, useEffect } from 'react'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ListIcon from '@mui/icons-material/List';

function Loaninfos() {
  const [data, setData] = useState([])
  const [searchterm, setSearchterm] = useState("")
  const [column, setColumn] = useState(false)

  useEffect(() => {
    getloaninfos()
  }, [])

  const getloaninfos = async () => {
    let result = await fetch("http://localhost:5000/borrowers")
    result = await result.json()
    setData(result)
  }



  return (
    <>

      <label for="search" className='searchlabel'>Search...
        <input className='search' type="text" placeholder="Loan#  |  Client Name  |  City  |  Property Address " onChange={(event) => { setSearchterm(event.target.value) }}></input></label><button className='searchbtn text-dark '>search<PersonSearchIcon /></button>
      <div className='columndiv'> <span className='columnicon'><button className='buttonclk' onClick={() => setColumn(!column)}><ListIcon />Column</button><br></br>
        {column ? < div className="allcolunmbox">
          <select value="Columns List" onChange={(e)=>setColumn(e.target.value)}>
          <option value="Columns List" className=''>Columns List</option>
          <option value="Loan Number">Loan Number</option>
          <option value="Primary Borrower">Primary Borrower</option>
          <option value="Property Address">Property Address</option>
          <option value="City">City</option>
          <option value="Loan Amount">Loan Amount</option>
          <option value="Loan Type">Loan Type</option>
          <option value="Product">Product</option>
          <option value="Status">Status</option>
          <option value="Days">Days</option>
          </select>
        </div>
          //  <select name="select" multiple>
          //   <option>Loan Number</option>
          //   <option>Primary Borrower</option>
          //   <option>Property Address</option>
          //   <option>City</option>
          //   <option>Loan Amount </option>
          //   <option>Loan Type </option>
          //   <option>Product </option>
          //   <option>Status </option>
          //   <option>Days </option>
          //   </select>
          : null}
      </span>
      </div>
      <div className='table-responsive alltable'><table className=' table table-bordered table-info table-hover table-striped text-center p-3'  >
        <thead>
          <tr>
            <th>Loan Number </th>
            <th>Primary Borrower </th>
            {column==="Property Address"?null:<th>Property Address </th>}
            <th>City </th>
            <th>State </th>
            <th>Loan Amount </th>
            <th>Loan Type </th>
            <th>Product </th>
            <th>Status </th>
            <th>Days </th>
          </tr>
        </thead>
        <tbody>
          {
            data.filter((val) => {
              if (searchterm === "") {
                return val;
              }
              else if (
                val.Borrower.toLowerCase().includes(searchterm.toLocaleLowerCase()) ||
                val.Loanno.toLowerCase().includes(searchterm.toLocaleLowerCase()) ||
                val.City.toLowerCase().includes(searchterm.toLocaleLowerCase())

              ) {
                return val
              }
            }).map((item, i) => {
              return <tr key={i}>
                <td>{item.Loanno}</td>
                <td>{item.Borrower}</td>
                {column === "Property Address"?null:<td>{item.Address}</td>}
                <td>{item.City}</td>
                <td>{item.State}</td>
                <td>{item.Loanamount}</td>
                <td>{item.loantype}</td>
                <td>{item.Product}</td>
                <td>{item.Status}</td>
                <td>{item.Day}</td>

              </tr>

            })
          }
        </tbody>
      </table></div>
    
    </>
  )
}
export default Loaninfos