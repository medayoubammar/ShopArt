import React, { useState } from "react";
import {db} from '../utils/fire';
import {ref,set} from 'firebase/database';
import Swal from 'sweetalert2';


export default function AddWork() {
    const [title , setTitle] = useState('sans_titre');
    const [desc , setDesc] = useState('sans_desc');
    const [price , setPrice] = useState(10);
    const [url,setURL] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwiWmIjz2AiADrcO9M4tjy_nC374jkcPQOuw&usqp=CAU");

    const addWork = (e) =>{
        e.preventDefault();
        let workRef = ref(db,"MyWorks/"+Math.floor(Math.random()*100));
        set(workRef,{
            Title : title,
            Description : desc ,
            Price : price,
            PhotoURL : url,
        })
        Swal.fire('Work added successfully ! ' ,'','success');
        document.getElementById("addWorkForm").reset();

    }


  return (
    <section className="login">
      <div className="loginContainer">
        <h3>Add new work</h3>
        <form id="addWorkForm">
        <label>Title</label>
        <input type="text" autoFocus onChange={(e)=>setTitle(e.target.value)}/>
        <label>Description</label>
        <input type="text" onChange={(e)=>setDesc(e.target.value)}/>
        <label>Price</label>
        <input type="number" 
        placeholder="DT"
        onChange={(e)=>setPrice(e.target.value)}
        />
        <label>Picture</label>
        <input type="url" placeholder="url picture ..." 
        onChange={(e)=>setURL(e.target.value)}
        />

        <div className="btnContainer">
          <button className="loginBtn btn btn-success" onClick={addWork}>Submit new work</button>
        </div>
        </form>
      </div>
    </section>
  );
}
