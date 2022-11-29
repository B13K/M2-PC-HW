import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
   /* Escribe acá tu código */

   let [zoo, setZoo] = React.useState({
      zooName: '',
      animals: [],
      species: [],
      allAnimals: []
   })

   const handleInputChange = (event) => {
      // setZoo((prevState) => ({
      //    ...prevState,
      //    zooName: event.target.value
      // }))
      setZoo({
         ...zoo,
         zooName: event.target.value
      })
   }

   
   React.useEffect(() => {
      fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) =>
         setZoo({
            ...zoo,
            animals: data.animals,
            species: data.species,
            allAnimals: data.animals,
         })
      )
      .catch((error) => console.log(error));
   },[])

   let handleSpecies = (event) => {
      const arr = zoo.allAnimals.filter(animal => animal.specie === event.target.value)
      // setZoo({
      //    ...zoo,
      //    animals: arr
      // })
        setZoo((prevState) => ({
         ...prevState,
         animals: prevState.allAnimals.filter(animal => animal.specie === event.target.value)
      }))

   }

   let handleAllSpecies = () => {
      setZoo({
         ...zoo,
         animals: zoo.allAnimals
      })
   }


   return (
      <div>
         <label>Zoo Name:</label>
         <input  value={zoo.zooName} onChange={handleInputChange}></input>
         <h1>{zoo.zooName}</h1>
         <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies}/>
         <Animals animals={zoo.animals}/>
      </div>
   );
}
