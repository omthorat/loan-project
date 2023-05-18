import {useState,useEffect} from "react"
import MaterialTable from 'material-table'
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';

const Tablematerial=()=>{
   // {document.title="Loan Info's-Ratelock"}
   
   const[tabledata,setTabledata]=useState()
   const[errors,setErrors]=useState(true)
   useEffect(() => {
    loaninfos()
  }, [])

  const loaninfos = async () => {
  try{
    let result = await fetch("http://localhost:5000/borrowers")
    result = await result.json()
    setTabledata(result)
  }catch(e){
    setErrors(!errors)
    console.log(e.response.data.error)
  }
    // console.log(result)
  }
 

   const columns=[
    {title:"Loan Number",field:"Loanno",cellStyle:{color:"green"}},
    {title:"Primary Borrower",field:"Borrower"},
    {title:"Property Address ",field:"Address"},
    {title:"City ",field:"City"},
    {title:"State",field:"State"},
    {title:"Loan Amount ",field:"Loanamount"},
    {title:"Loan Type",field:"loantype"},
    {title:"Product",field:"Product"},
    {title:"Status",field:"Status"},
    {title:"Days ",field:"Day"},
   
   ]

   return(
    <>
    <div className="container">

    
    {
      errors?<MaterialTable columns={columns} data={tabledata} title={<h2 style={{color:"green"}}>Loan Borrowers</h2>}
     options={{columnsButton:true,
      search: true,
    headerStyle:{background:"green",fontSize:"20px",color:"white"},
    searchFieldStyle:{color:"black",fontSize:"20px",width:"40vw"},
    
   
    }}
    
    icons={{FirstPage:()=><FirstPageIcon color="action"/>,LastPage:()=><LastPageIcon color="action"/>,
    NextPage:()=><ArrowForwardIosIcon color="action"/>,PreviousPage:()=><ArrowBackIosIcon color="action"/>,search:()=><SearchIcon/> }} />:<h3 style={{color:"red",textAlign:"center"}}> Loan Data Not Found</h3>
    }
    {/* icons={{LastPage:()=><LastPageIcon color="action"/>}} />
    icons={{FirstPage:()=><FirstPageIcon color="action"/}} />>
    icons={{FirstPage:()=><FirstPageIcon color="action"/>}} /> */}
    </div>
    </>
   )
}
export default Tablematerial