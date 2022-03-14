import React from 'react';

const today=new Date();
function Footer () {
  return (
      <div className='footer'>
          <p>Copyright &copy; {today.getFullYear()}</p>
      </div>
  )
}

export default Footer
 