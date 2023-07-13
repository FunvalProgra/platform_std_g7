import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Login = () => {
    const inputRef = useRef(null);
    const navigate = useNavigate();

const handleSubmit = (e) =>{
    e.preventDefault();

    const contrasena = "1234";

    // let contrasenaInput = e.target.value.toLowerCase();
    const inputValue = inputRef.current.value;
    
    if (contrasena !== inputValue) {
        alert("Password incorrect");
        return;
    }

    console.log(inputValue);
    // console.log(contrasenaInput);

    navigate('/main');
}
    return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:
            </label>
                <input type="text" name="name" id="name" />
            <label htmlFor="password">
                Pasword:
            </label>
                <input type="password" name="password" id="password" ref={inputRef} />
                <button>INGRESAR</button>
        </form>
    </div>
  )
}
export default Login