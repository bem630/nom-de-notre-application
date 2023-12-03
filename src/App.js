import './App.css';
import LoginPage from './components/pages/login/LoginPage';


function App() {

  
  //state

  //comportements
  

  //affichage (render)
  

  return (
    <div className='App'>
      <LoginPage/>
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
