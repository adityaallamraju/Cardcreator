import React, { useState } from 'react';

const Hello=()=>{

    const[input,setinput]=useState('');
    const[print,setprint]=useState('');
    

     function changeHandle(e){
        setinput(e.target.value);
     }
    
    
    function click(){
        setprint(input);
        console.log(input);
    }

    return(
    <div>
        <h1>hello welcome</h1>
        <center><input type="text" onChange={changeHandle}></input>
        <button onClick={click}>Print</button></center>
        <h1>{print}</h1> 
    </div>
    );

}

export default Hello;