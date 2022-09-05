import React ,{useState,useEffect} from 'react'
import {ref,onValue} from 'firebase/database';
import {db} from '../utils/fire';
import ReactLoading from 'react-loading';

export default function Inbox() {
    const [comments,setComments] = useState(null);


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
    <div className='d-flex'>
    <div className="container ">
        {comments === null ? 
        <ReactLoading type={"spin"} color={"#ffffff"} height={667} width={375} />
        :
        comments.map((item,index)=>(
            <div key={index}>
            <div className="card border-success mb-3" style={{maxWidth: '20rem'}}>
  <div className="card-header bg-transparent border-success d-flex justify-content-between">
   <span> {item[1].lastName +' '+ item[1].name}</span>
   <span>{item[1].phone}</span>
  </div>
  <div className="card-body text-success">
    <h5 className="card-title">{item[1].city +', '+item[1].adresse}</h5>
    <p className="card-text">{item[1].comment}</p>
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
