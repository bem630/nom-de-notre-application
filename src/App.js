import { useState } from 'react';
import './App.css';


function App() {

  const [ fruits, setFruits] = useState([
    { id: 1, nom: "Mangue"},
    { id: 2, nom: "Banane"},
    { id: 3, nom: "Orange"}
  ]);
  //state
  const [ nouveauFruit, setNouveauFruit] = useState("");

  //comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
  const handleChange = (e) => {
    //console.log(e.target.value);
    setNouveauFruit(e.target.value);
  }

  //affichage (render)
  

  return (
    <div className='App'>
      <h1>Liste de Fruits</h1>
      <ul>{ fruits.map((fruit) => {
        return <li key={fruit.id}>{fruit.nom}</li>
      } ) }</ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input value={nouveauFruit} type="text" placeholder='Ajouter un fruit...' onChange={handleChange} />
        <button>Ajouter</button>
      </form>
    </div>
  );
}

export default App;


/**!SECTION
 * const [nouveauFruit, setNeauveauFruit] = useState("");
  const handleDelete = (id) => {
    const fruitsCopy = [...fruits];
    const nouveauFruits = fruitsCopy.filter((fruit) =>  fruit.id !== id )
    setFruits(nouveauFruits);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const fruitsCopy = [...fruits];
    const id = new Date().getTime();
    const nom = nouveauFruit;
    fruitsCopy.push({id:id , nom: nom})
    setFruits(fruitsCopy);
  }
  const handleChange = (event) => {
    setNeauveauFruit(event.target.value);
  }
 * <ul>
        {fruits.map((fruit) => {
          return <li key={fruit.id}>{fruit.nom} <button onClick={() => {
            handleDelete(fruit.id)
          }}>x</button> </li>
        } )}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input value={nouveauFruit} type="text" onChange={handleChange} placeholder='Ajouter un Fruit...' />
        <button>Ajouter +</button>
      </form>
 */
