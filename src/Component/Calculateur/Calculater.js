import React ,{useState} from 'react'
import './style.css';






const listNumbers = ({setInput , input})=>{
    const arrayNumebrs = document.querySelector('.arrey__number')
    let i = 0;
    let ArreyNumbers = []
    for(let p = 9 ; p >= i ; p--){
        ArreyNumbers.push(<li onClick={()=>{setInput(input += p)}}  key={p}>{p}</li>);

         if(p === 7){
             ArreyNumbers.push(<li onClick={()=> setInput(input.length > 0 ? input += ' * ' : input += '')}  >x</li>)
         }
         if(p === 4){
             ArreyNumbers.push(<li onClick={()=> setInput(input.length > 0 ? input += ' - ' : input += '')}  >-</li>)
         }
        if(p === 1){
            ArreyNumbers.push(<li onClick={()=> setInput(input.length > 0 ? input += ' / ' : input += '')}  >/</li>)
        }
        if(p === 0){
            ArreyNumbers.push(<li onClick={()=> setInput(input.length > 0 ?  input += '.' : input += '' )} >.</li>)
            ArreyNumbers.push(<li  onClick={()=> setInput(input.length > 0 ? input = eval(input)  : input += '')} >=</li>)
            ArreyNumbers.push(<li onClick={()=> setInput(input.length > 0 ? input += ' + ' : input += '')} >+</li>)
            ArreyNumbers.push(<li onClick={()=> setInput(input = '')} style={{gridColumnStart: '1' ,gridColumnEnd: '5' , background: 'red', }} >Ac</li>)
        }
    }
    return(ArreyNumbers)
}









const Calculater = () => {
    const [input , setInput] = useState('')

  
  return (
    <div className='container'>
        <div className='calculator'>
             <div className='input'>
                <p>{input}</p>
             </div>
             <div className='numbers'>
                 <ul className='arrey__number'>{listNumbers({setInput , input})}</ul>
             </div>
        </div>
    </div>
  )
}

export default Calculater