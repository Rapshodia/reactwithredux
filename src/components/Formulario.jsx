import React from 'react'

function Formulario() {
  return (
    <div className='sm:grid sm:grid-cols-3 border sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
        <label htmlFor="username" className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'>
            UserName
        </label>
        <div className='mt-1 sm:mt-0 sm:col-span-2'>
            <div className='max-w-lg flex rounded-md shadow-sm'>
                <span className='inline-flex items-center px-3 rounded-1-md border-r-0 bottom-0'>

                </span>
                <input type="text"
                name='username'
                id='username'
                autoComplete='username'
                className='flex-1 block w-full border focus:ring-indigo-500 min-w-0 rounded-full sm:text-sm border-gray-300' />
            </div>
        </div>
    </div>
  )
}

export default Formulario