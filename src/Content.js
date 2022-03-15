import React, { useState } from 'react';
function Content() {
  const [name, setName] = useState('Fantish');
  const [count, setCount] = useState(0);
  const handleNamechange = () => {
    const names = ['Abebe', 'Fentahun', 'Solomon'];
    const int = Math.floor(Math.random() * 3);//if we use 2 solomon is not displayed or we use 4 hello and all the name displayed randomly.
    setName(names[int]);
  } 
  const handleClick = () => {
    console.log('You clicked it');
    console.log(count);
  }
  const handleClick0 = () => {
    setCount(count+1);
    setCount(count +1);

    console.log(count);
  }

  const handleClick2 =(name) => {
    console.log(name,'was clicked');
  }
  const handleClick3 =(e) => {
    console.log(e.target.innerText);
  }
  return  ( 
      <main>
          <p onDoubleClick={handleClick}>
                  Hello {name}
          </p>
      <button onClick={ handleNamechange }>Change Name</button>
            <button onClick={()=> handleClick2('Fentish')}>Click italso</button> 
      <button onClick={ (e) => handleClick3(e) }>Click3</button>
      <button onClick={handleClick0}>Click0</button> 


      </main>
  )
}

export default Content