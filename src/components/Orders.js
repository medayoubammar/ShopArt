import React ,{useState,useEffect} from 'react'
import {ref,onValue,remove} from 'firebase/database';
import {db} from '../utils/fire';
import ReactLoading from 'react-loading';
import Swal from 'sweetalert2'

export default function Orders() {
  const [Orders,setOrders] = useState(null);

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
        let commentRef = ref(db,'Orders/'+id);
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
    const getOrders = () => {
        let commentRef = ref(db,"Orders/");
        onValue(commentRef , (snapshot) => {
            const data = snapshot.val();
            let cleanData = Object.entries(data);
            console.log(cleanData);
            setOrders(cleanData)
            }) ;
    }

    useEffect(()=>{
      getOrders();
   },[])

  return (
    <div className='d-flex m-5 '>
    <div className="container d-flex row">
        {Orders === null ? 
        <ReactLoading type={"spin"} color={"#ffffff"} height={667} width={375} />
        :Orders.map((item,index)=>(
            <div key={index}>
             
            <div className="card border-success mb-3" style={{maxWidth: '20rem'}}>
 
  <div className="card-header bg-transparent border-success d-flex justify-content-between">
 
   <span> {item[1].lastName +' '+ item[1].name}</span>
 
   <button onClick={()=>handelDelete(item[0])} 
   className='btn btn-danger btn-sm p-1'> X </button>
  </div>
  <span className='p-3 text-warning bg-dark'>{item[1].phone}</span>
  <div className="card-body text-success">
    <h5 className="card-title">{item[1].city }</h5>
   { item[1].order ? 
   <div>
    <img src={item[1].order.PhotoURL} alt="order pic" style={{ width : "90px"}} />
    <h1>{item[1].order.Price}  DT</h1>
    <h6>{item[1].order.Title}</h6>
    </div>
   : <></>}
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
