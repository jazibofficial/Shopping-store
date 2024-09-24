import React from 'react'

function Productlist({product,cartHandle}) {
  return (
    <div className=' flex  grid grid-cols-4 gap-4 mt-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   '>

    {
        product.map((value,index)=>{
return (
    <div>
    


        <img src={value.imageUrl}  className='w-96 h-96 object-cover rounded-lg shadow-lg   '/>

        <div className='flex flex-col'>
       <p className='font-bold'> {value.name} | {value.category} </p>
         <p>Rs.{value.prices} /.</p>
       <p> {value.seller}</p>
        </div>
        <button onClick={()=>cartHandle(value)} className='bg-red-500 rounded  p-2'>Add To cart</button>
    </div>
   
    
)
        })
    }
      
    </div>
  )
}

export default Productlist
