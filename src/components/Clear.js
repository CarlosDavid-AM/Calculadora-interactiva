import React from 'react'

export default function Clear({clean}) {
  return (
    <div className='bg-red-800 w-full text-center text-white text-2xl my-3 py-2 border border-white rounded-lg hover:bg-yellow-700'
      onClick={clean}
    >
      Clear
    </div>
  )
}
