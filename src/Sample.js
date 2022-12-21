import React, { useState } from 'react';

function Sample() {
  //  let name = 'Sasi';
  const[name,setname]=useState('sasi');
  
  function click(){
    // name = "dharan";
    setname('dharan');
    console.log(name);
  }
  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <button onClick={click}>Print</button>
      <h1>{name}</h1>
    </div>
  );
}

export default Sample;
