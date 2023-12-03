import { useState } from "react";

const LoginPage = () => {
    // state[data, données]
    const [ inputValue, setInputValue ] = useState("");

    //comportements 
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Bonjour ${inputValue}`)
        setInputValue("")
    }
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    //affichage
    // creation du formulaire
    //recupération des données
    //soumission du formulaire
    return ( 
        <div>
            <h1>Bienvenue chez nous !</h1><br />
            <h2>Connectez vous</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input value={inputValue} type="text" placeholder="Entre votre prénom..." required onChange={handleChange} />
                <button>Accédez à votre page</button>
            </form>
        </div>
     );
}
 
export default LoginPage;