import React ,{useState , useEffect} from 'react'
import {db} from './fire'
import Aos from "aos";
import "aos/dist/aos.css";
import {ref,onValue} from 'firebase/database';
import { Link , useNavigate } from 'react-router-dom';

export default function Lazy() {

const [cards,setCards] = useState(null)

const navigate = useNavigate();

function getCards(){ 
    const products = ref(db,'MyWorks/');

    onValue(products , (snapshot) => {
        const data = snapshot.val();

        if(data === null) setCards(null);
        if(data === undefined) setCards(null);
        let cleanData = Object.entries(data);
        console.log("BEFORE object entries : ")
        console.log(data);
        console.log("After using  object entries : ")
        console.log(cleanData);
        setCards(cleanData)
        }) ;
}

useEffect(()=>{
Aos.init({duration : 2000})
getCards();
console.log(cards)
},[])


  return (
    <div className='container'>
      <div className='row'>
        {cards === null ? 
        <h1>Loading ....</h1> :
        cards && cards.map( (item,counter) => 
        (
  
<div className="card m-2" style={{width: '16rem'}} key={counter} data-aos="fade-up">

  <img src={item[1].PhotoURL} className="w-100 h-50" 
  style={{borderRadius : '20px'}} alt="..." />
  <div className="card-body">
    <h5 className="card-title text-primary">{item[1].Title}</h5>
    <p className="card-text pb-5">
     {item[1].Description.substring(0,20)} ...
     </p>
     <p className='h6 text-success card-text mb-5 pe-3 ' 
     style={{ left : 'auto'}}> {item[1].Price} DT</p>
    <button onClick={() => { navigate('/Card' , {state : {item}}) }} 
     className='btn btn-success w-100 '
     style={{left :'auto'}} > 
      Buy
    </button>
 
  </div>
 
</div>
           
          )
        )
        }

        </div>
    </div>
  )
}
