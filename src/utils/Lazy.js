import React ,{useState , useEffect} from 'react'
import {db} from './fire'

import {ref,onValue} from 'firebase/database'

export default function Lazy() {

const [cards,setCards] = useState(null)


function getCards(){ 
    const products = ref(db,'MyWorks/');
    onValue(products , 
        (snapshot) => {
        const data = snapshot.val();
        if(data === null) setCards(null);
        if(data === undefined) setCards(null);
        let cleanData = Object.entries(data);
        setCards(cleanData)
        }) ;
}

useEffect(()=>{
getCards();
console.log(cards)
},[])


  return (
    <div className='container'>
        {cards === null ? <h1>Loading ....</h1> :
        cards && cards.map( (item,counter) => 
        (<div key={counter}>
            <img alt="url photos" src={item[1].PhotoURL} />
            </div>)
        )
        }
    </div>
  )
}
