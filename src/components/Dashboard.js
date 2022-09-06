import React , {useState} from 'react'
import {Link} from "react-router-dom";
import { files, insertWork, Left, mailBox, orderes } from '../ressources';
import AddWork from './AddWork';
import Files from './Files';
import Inbox from './Inbox';
import Orders from './Orders';

export default function Dashboard(props) {
  const {handelLogOut} = props;
  const[content,setContent] = useState(<AddWork />);
  const [contentName,setContentName] = useState("addWork");

  return (
    <div className='dashboard'>
    <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">

    { contentName === "addWork" ?   <img alt="insert" src={insertWork} width="30px" /> : <></>}
    <button className='btn' onClick={()=>{setContent(<AddWork />);setContentName("addWork")}}>Add new work</button>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">

    { contentName === "Inbox" ?   <img alt="insert" src={mailBox} width="30px" /> : <></>}
    <button className='btn' onClick={()=>{setContent(<Inbox />);setContentName("Inbox")}}>Inbox</button>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">

    { contentName === "Orders" ?   <img alt="insert" src={orderes} width="30px" /> : <></>}
    <button className='btn' onClick={()=>{setContent(<Orders />);setContentName("Orders")}}>Orders</button>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link "  href="#">

    { contentName === "Files" ?   <img alt="insert" src={files} width="30px" /> : <></>}
    <button className='btn' onClick={()=>{setContent(<Files />);setContentName("Files")}}>Files</button>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link " href='#'>
    
    <button className='btn'
     onClick={handelLogOut}><Link to="/" className='text-light'>Déconnexion</Link></button>
       <img src={Left} width="15px" />
    </a>
  </li>
</ul>
<div className='container-fluid d-flex justify-content-center content'>
  {content}
</div>

    </div>
  )
}
