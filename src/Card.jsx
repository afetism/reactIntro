import React from 'react'

const Card = ({name,surname}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-1/4 text-center">
    <h3 className="text-lg font-bold mb-2">{name}</h3>
    <p className="text-gray-600">{surname}</p>
  </div>
  )
}

export default Card