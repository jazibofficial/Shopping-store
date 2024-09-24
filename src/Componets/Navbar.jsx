import React, { useState } from 'react'

function Navbar({count,Show}) {
    const [ligh,setLight]=useState(false)
    const Switch=()=>{
setLight((p)=>!p)
    }


  return (

    <div className='flex justify-between   bg-red-400'>
<div className='mx-10 py-4 cursor-pointer' onClick={()=>Show(false)}>
        Shopping App

</div>

<div onClick={Switch}>

</div>
<div className='mx-10  py-4 cursor-pointer' onClick={()=>Show(true)}>
Cart <sup>{count}</sup>
    
</div>
    </div>
  )
}

export default Navbar
