import React ,{useState,useEffect} from 'react'
import {ref,onValue,remove} from 'firebase/database';
import {db} from '../utils/fire';
import ReactLoading from 'react-loading';
import Swal from 'sweetalert2';

export default function Inbox() {
    const [comments,setComments] = useState(null);

  const handelDelete = (id) => {
    Swal.fire({
      title : "Are you sure ?" ,
      text : "You will not be able to recover this comment !",
      icon : 'warning',
      showCancelButton: true,
      cancelButtonText: " No , Keep it ",
      confirmButtonText : "Yes , delete it !"
    })
    .then((result)=>{
      if(result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        let commentRef = ref(db,'Comments/'+id);
        remove(commentRef);
      }
      else{
        Swal.fire(
          'Cancelled!',
          'Your comment is safe !.',
          'success'
        )
      }
    })
   
  }
    const getComments = () => {
        let commentRef = ref(db,"Comments/");
        onValue(commentRef , (snapshot) => {
            const data = snapshot.val();
            let cleanData = Object.entries(data);
            console.log(cleanData);
            setComments(cleanData)
            }) ;
    }

 useEffect(()=>{
    getComments();
 },[])

  return (
   comments === null ? <h1>Pas de messages ..</h1>  :
   <div className='d-flex m-5 '>
   <div className="container m-5">
       {comments === null ? 
       <ReactLoading type={"spin"} color={"#ffffff"} height={667} width={375} />
       :comments.map((item,index)=>(
           <div key={index}>
            
           <div className="card border-success mb-3" style={{maxWidth: '20rem'}}>

 <div className="card-header bg-transparent border-success d-flex justify-content-between">

  <span> {item[1].lastName +' '+ item[1].name}</span>

  <button onClick={()=>handelDelete(item[0])} 
  className='btn btn-danger btn-sm p-1'> X </button>
 </div>
 <span className='p-3 text-warning bg-dark'>{item[1].phone}</span>
 <div className="card-body text-success">
   <h5 className="card-title">{item[1].city +', '+item[1].adresse}</h5>
   <p className="card-text">{ item[1].comment }</p>
 </div>
 <div className="card-footer bg-transparent border-success">{item[1].email}</div>
</div>
           </div>
       ))
       }
   </div>
   </div>

  )
}
