import React from 'react'

function Card({
    title,
    href,
    category,
    description,
    imageUrl
}) {
  return (
    
    <div class="mt-12   mx-auto  grid lg:grid-cols-3 lg:min-w-max   ">
        <div className='flex flex-col rounded-lg shadow-lg overflow-hidden '>
            <div className='flex-shrink-0'>
                <img className='h-48 w-full object-cover' src="https://images.unsplash.com/photo-1655326525214-a49dbe71975f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="prueba" />
            </div>
            <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                <div className='flex-1'>
                    <p className='text-sm font-medium text-indigo-600'>
                        <a href="#" className='hover:underline'>
                            Article
                        </a>
                    </p>
                    <a href="#" className='block mt-2'>
                        <p className='text-xl font-semibold text-gray-900'>
                            Boost your conversation rate
                        </p>
                        <p className='mt-3 text-base text-gray-500'>
                            texto mucho texto algo para escribir ahora o nunca siempre
                        </p>
                    </a>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Card