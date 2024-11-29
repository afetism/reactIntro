

import React from 'react'
import Card from './card';




const User = () => {
  const cardData = [
    { Name: 'Aynise', Surname: 'Gptov' },
    { Name: 'Gpt', Surname: 'Aiov' },
    { Name: 'Gimini', Surname: 'Googlov' },
  ];
  return (
    <div className="h-3/5 flex justify-around items-center bg-gray-100">
     {cardData.map((data, index) => (
      <Card  name={data.Name} surname={data.Surname} />
    ))}
  </div>
  )
}

export default User