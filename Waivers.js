import {useState} from "react"
import { useNavigate } from "react-router-dom";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Waivers=()=>{
   const navigate =useNavigate()
   const[fullscr,setFullscr]=useState(true)
   const [amount,setAmount]=useState('')
   const[totalamount,setTotalamount]=useState(false)
   const [additem,setAdditem]=useState([{Approvedto:"",reason:"",Appliesto:"",Amount:"",ModifiedBy:"",ModifiedDate:""}])
   const [addwaiver,setAddWaiver]=useState([{Approvedto:"",reason:"",Appliesto:"",Amount:"",ModifiedBy:"",ModifiedDate:""}])
   // onChange={(e)=>setValiddate(e.target.value)}
   const gotoHomepage =()=>{
      // alert("navigation button works")
      navigate("/")
   }
   
   const additemization=()=>{
    
     setAdditem([...additem,{Appliesto:"",Amount:"",ModifiedBy:"",ModifiedDate:""}])
    
   }
   const addwaivers=()=>{
      setAddWaiver([...addwaiver,{Approvedto:"",reason:"",Appliesto:"",Amount:"",ModifiedBy:"",ModifiedDate:""}])

   }
   const savechanges=()=>{
      setTotalamount(true)

   }
   const removewaiver=(index)=>{
      const list =[...addwaiver]
      list.splice(index,1)
      setAddWaiver(list)
   }
   const removeitem=(index)=>{
      const list =[...additem]
      list.splice(index,1)
      setAdditem(list)
   }

   return(
    <>
  
   
    <div className={`${fullscr?'waivercontainers':"waivercontainersfulscr"}`}>
     <h1>Waivers</h1>
    <div className="btnbox d-flex">
        <button className="btn btn-sm btn-light" onClick={()=>gotoHomepage()}><CloseIcon fontSize="small"  />CLOSE</button>
        {/* <button className=" btn btn-sm btn-dark" >ADD WAIVERS</button> */}
        <button className=" btn btn-sm btn-dark" onClick={()=>setFullscr(!fullscr)} >
        {fullscr?<><FullscreenIcon/> Full Screen</>:"Half Screen"}</button>

        </div>
   
   
 {
   addwaiver.map((y,j)=>{
     return(
   <>
 <div className="btnbox d-flex">
 {
        additem.length-1===j &&  <button className="btn  btn-dark" onClick={addwaivers}>ADD WAIVERS</button>
         }
         {
         addwaiver.length!==1 &&<div className="waiveritemization" >
          <button className="removeicon btn  btn-light" onClick={removewaiver}><DeleteOutlineIcon/>REMOVE</button>
        </div>
        }
 </div> 
      <div class="card m-3 ">
  <h5 class="card-header bg-dark" style={{color:"white"}}>Total Amount :Rs.{ totalamount ?<>{amount}</>:''}</h5>
  <div class="card-body">
  <div className="waiverinput" >
           <label> &nbsp;&nbsp;Approved By<span style={{color:"red"}}>*</span><br/>
              <input type="text"  name="Approved By" className="waiverapp" style={{color:"grey"}} placeholder="Enter Name" required/>
           </label>
        </div>
        <div className="waiverinput" >
           <label> &nbsp;&nbsp;Reason<span style={{color:"red"}}>*</span><br/>
              <input type="text" name="Reason"  className={`${fullscr?'halfwaiverreason':"waiverreason"}`} style={{color:"black"}} placeholder="Enter Reason" required/>
           </label>
        </div>
        
   
      
    {
      additem.map((x,i)=>{
         return(
            <>
            <div className="itemization d-md-flex">
    <h3 class="card-title ">Itemization</h3>
  {/* <button className="btn btn-sm btn-dark" onClick={additemization}>ADD ITEMIZATION</button> */}
  <div>
  {
        additem.length-1===i &&  <button className="btn btn-sm btn-dark" onClick={additemization}>ADD ITEMIZATION</button>
         }
  </div>
  
    </div>
            <div className="waiveritemization" >
           <label> &nbsp;&nbsp;Applies to<span style={{color:"red"}}>*</span><br/>
              <input type="text"  name="Applies to"  className={`${fullscr?'halfscreen':"additem"}`} style={{color:"grey"}} placeholder="Enter Name" required/>
           </label>
        </div>
        <div className="waiveritemization" >
           <label> &nbsp;&nbsp;Amount<span style={{color:"red"}}>*</span><br/>
              <input type="number" name="Amount" onChange={(e)=>setAmount(e.target.value)} className={`${fullscr?'halfscreen':"additem"}`} style={{color:"grey"}} placeholder="Enter Name" required/>
           </label>
        </div>
        <div className="waiveritemization" >
           <label> &nbsp;&nbsp;Modified By<span style={{color:"red"}}>*</span><br/>
              <input type="text" name="Modified By"  className={`${fullscr?'halfscreen':"additem"}`} style={{color:"grey"}} placeholder="Enter Name" required/>
           </label>
        </div>
        <div className="waiveritemization" >
           <label> &nbsp;&nbsp;Modified Date<span style={{color:"red"}}>*</span><br/>
              <input type="datetime-local" name="Modified Date"  className={`${fullscr?'halfscreen':"additem"}`} style={{color:"grey"}} placeholder="Enter Name" required/>
           </label>
        </div>
        {
         additem.length!==1 &&<div className="waiveritemization" >
          <button className="removeicon btn btn-sm btn-light" onClick={removeitem}><DeleteOutlineIcon/>REMOVE</button>
        </div>
        }
         
            </>
         )
      })
    }
  
  </div>
</div>
   </>
     )
   })
 }
      <div className="btnbox d-flex">
        <button className="btncancel"  >CANCEL</button>
        <button className="btnsave" onClick={savechanges}>SAVE CHANGES</button>

        </div>
    </div>

    </>
   )
}
export default Waivers