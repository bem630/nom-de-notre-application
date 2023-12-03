import { useState } from "react";
const LoginForm = () => {
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
    return ( 
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1><br />
            <h2>Connectez vous</h2>
            <input value={inputValue} type="text" placeholder="Entre votre prénom..." required onChange={handleChange} />
            <button>Accédez à votre page</button>
        </form>
            
     );
}
 
export default LoginForm;