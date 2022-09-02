import React ,{useState} from 'react'
import { db } from '../utils/fire';
import {ref,set} from "firebase/database"
import Swal from 'sweetalert2';



export default function Contact(props) {
  const [name,setName] = useState('');
  const [lastName,setLastName] = useState('');
  const [adresse,setAdresse] = useState('');
  const [city,setCity] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [comment,setComment] = useState('');

function contactProcess(e){
e.preventDefault();
console.log(name,lastName,adresse,city,email,phone,comment);
if((name.trim().length <= 2) || (lastName.trim().length <= 2) || (adresse.trim().length <= 2) || 
(city.trim().length <= 2) || (email.trim().length <= 2) || (phone.trim().length <= 2) || 
(comment.trim().length <= 2)) 
 { return Swal.fire('Oops...','Please fill all the form ','error')}

const user = {
  name,
  lastName,
  adresse,
  city,
  email,
  phone,
  comment,
  order : props.order || 'commentaire'
}
addCommentToDB(user);
Swal.fire('Request sended successfully ! ' ,'','success');
document.getElementById('ContactForm').reset();
setName('');
setLastName('');
setAdresse('');
setCity('');
setEmail('');
setPhone('');
setComment('')

}

function addCommentToDB(data){
let commentReference = ref(db, props.DBRef+`/${Math.floor(Math.random()*1000).toString()}`);
// * DBREF soit = /Comments soit = /Orders;
set(commentReference,data)
}

  return (
    <div className='container'>
    <form className="row g-3" id="ContactForm">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Name
    <span className='text-danger'>*</span></label>
    <input type="text" onChange={(e)=>setName(e.target.value)}
     className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">LastName
    <span className='text-danger'>*</span>
    </label>
    <input type="text" onChange={(e)=>setLastName(e.target.value)} className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address
    <span className='text-danger'>*</span></label>
    <input type="text" onChange={(e)=>setAdresse(e.target.value)} className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">City
    <span className='text-danger'>*</span></label>
    <input type="text" onChange={(e)=>setCity(e.target.value)} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="col-md-12">
    <label htmlFor="inputCity" className="form-label">email
    <span className='text-danger'>*</span>
    </label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="inputCity" />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">Phone
    <span className='text-danger'>*</span>
    </label>
    <input type="text" onChange={(e)=>setPhone(e.target.value)} maxLength={8} className="form-control" id="inputCity2" />
  </div>
  <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment or Message
  <span className='text-danger'>*</span>
  </label>
  <textarea className="form-control" onChange={(e)=>setComment(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

  <div className="col-12">
    <button type="submit" onClick={contactProcess} className="btn btn-success">Send</button>
  </div>
</form>

    </div>
  )
}
