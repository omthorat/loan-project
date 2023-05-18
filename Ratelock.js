import  { useState } from "react"
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import Rateshow from './Rateshow';
const Ratelock = () => {
   // {document.title="Loan Info's-Ratelock"}
   const[fullscr,setFullscr]=useState("true")
   const[percentage,setPercentage]=useState(true)
   const[locks,setLocks]=useState('')
   const [validdate,setValiddate]=useState("")
   const [expireddate,setExpiredate]=useState("")
    const [cancel ,setCancel]=useState(false)
   const[ftp,setFtp]=useState(false);
   const navigate =useNavigate()
   console.log(fullscr)
   const gotoHomepage =()=>{
      // alert("navigation button works")
      navigate("/")
   }
   const print =()=>{
      setFtp(true)
   }
   // const canceldata=()=>{
   //  locks='';
   //  setCancel('')
   // }
  const onSubmit=(e)=>{
     e.preventDefault()
  }
   return (
      <>
        <div className={`${fullscr?'container containers':'fullcontainer'}`}>
        <h1>Rate lock</h1>
        <div className="btnbox d-flex">
        <button className="btnclose" onClick={()=>gotoHomepage()}><CloseIcon fontSize="small" />CLOSE</button>
        <button className="btnfull" onClick={()=>setFullscr(!fullscr)} >{fullscr?<><FullscreenIcon/>FULL SCREEN</>:"HALF SCREEN"}</button>
        </div>
        
        {
         
         ftp?<><h6 style={{color:"red"}}> *{locks} From {validdate} to {expireddate} for Loan {percentage}%*</h6> </>:<>{percentage?<h6 style={{color:"red"}}>*please enter  input*</h6>:""}</>}
        
       
     
     {/* {
         ftp?<h6 style={{color:"red"}}>{percentage?`*{locks} From ${validdate} to ${expireddate} for Loan ${percentage}%*`</h6>:"Please Enter Valid Input"}
        } */}
    

     <form className="ratecontainer" onSubmit={onSubmit}>
        <div className="checkboxclicked">Status:</div>
        <div className="checkbox">
           <label>
              <input type="radio" onChange={(e)=>setLocks(e.target.value)} name="Status" value="Standard Lock" /> <span className="checkboxclicked">&nbsp; Standard Lock</span>
           </label> &nbsp; 
        </div>
        <div className="checkbox">
           <label>
              <input type="radio" name="Status"  onChange={(e)=>setLocks(e.target.value)} value="Lock and Doc" />  <span className="checkboxclicked"> &nbsp;Lock and Doc</span>
           </label>
        </div>
    <div className="datebox" >
    <div className="dateinput" >
           <label> &nbsp;&nbsp;Valid From<span style={{color:"red"}}>*</span><br/>
              <input type="date" onChange={(e)=>setValiddate(e.target.value)} className="datepic" style={{color:"grey",textTransform:"uppercase"}} placeholder="DD/MM/YYYY" required/>
           </label>
        </div>
        <div className="dateinput">
           <label>&nbsp;&nbsp;Expires On<span style={{color:"red"}}>*</span><br/>
              <input type="date" onChange={(e)=>setExpiredate(e.target.value)} className="datepic"  style={{color:"grey",textTransform:"uppercase"}} placeholder="DD/MM/YYYY" required/>
           </label>
        </div>
        <div className="dateinput">
           <label>&nbsp;&nbsp;FTP<span style={{color:"red"}}>*</span><br/>
              <input type="number" className="datepic" onChange={(e)=>setPercentage(e.target.value)} style={{color:"grey",textTransform:"uppercase"}}  placeholder="percentage%" required/>
           </label>
        </div>
    </div>
    <div className="dateinput">
           <label>&nbsp;&nbsp;Notes<span style={{color:"red"}}>*</span><br/>
              <input type="text" className="notepic" style={{color:"grey",textTransform:"uppercase",}}  placeholder="ENTER DESCRIPTION ABOUT RATE LOCK" required/>
           </label>
        </div>

        <div className="btnbox d-md-flex">
        <button className="btncancel m-1" type="reset" >RESET</button>
        <button className="btnsave bg-dark"  onClick={print}>SAVE CHANGES</button>

        </div>
    
     </form>
     

  </div> 
   
   </>
      
   )
}
export default Ratelock