import React  from 'react'

function Content() {
  
  const handleNamechange = () => {
    const names = ['Abebe', 'Fentahun', 'Solomon'];
    const int = Math.floor(Math.random() * 3);//if we use 2 solomon is not displayed or we use 4 hello and all the name displayed randomly.
    return names[int];
  } 
  const handleClick = () => {
    console.log('You clicked it');
  }
  const handleClick2 =(name) => {
    console.log(name,'was clicked');
  }
  const handleClick3 =(e) => {
    console.log(e.target.innerText);
  }
  return  ( 
      <main>
      <p>Hello {handleNamechange()}</p>
      <button onClick={ handleClick }>Click it</button>
            <button onClick={()=> handleClick2('Fentish')}>Click italso</button> 
            <button onClick={(e)=> handleClick3(e)}>Click3</button>

      </main>
  )
}

export default Content