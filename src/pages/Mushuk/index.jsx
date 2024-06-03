import { useState } from 'react';
import { useEffect } from 'react';


function Mushuk() {
  const [malum, setMalum] = useState([])
  
  console.log(malum);

  useEffect(() => {
    fetch('http://localhost:3000/Mushuk')
      .then(data => data.json())
      .then(data => setMalum(data))
  }, [])

  return (
    <>
      {
        malum.map((malumot) => {
          return (
            <div className='AllDiv'>
              <h4>Id: {malumot.id}</h4>
              <h4>Name: {malumot.name}</h4>
              <h4>Age: {malumot.age}</h4>
              <h4>Rangi: {malumot.rangi}</h4><br />
            </div>
          )
        })
      }
    </>
  )
}

export default Mushuk