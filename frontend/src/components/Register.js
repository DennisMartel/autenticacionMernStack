import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"

const Register = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const postData = () => {
        fetch("http://localhost:4000/register", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.error) {
                alert(data.error)
            } else {
                alert(data.message)
                history.push("/")
            }
        })
        .catch(err => console.log(err))
    }    

    return (
        <form id="form" onSubmit={e => e.preventDefault()}>
            <div className="form">
                <h1>registro</h1>
                <div className="grupo">
                    <input 
                        type="text" 
                        id="name" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <span className="barra"></span>
                    <label htmlFor="nombre">nombre</label>
                </div>
                <div className="grupo">
                    <input 
                        type="email" 
                        name="" 
                        id="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="barra"></span>
                    <label htmlFor="email">correo</label>
                </div>
                <div className="grupo">
                    <input 
                        type="password" 
                        name="" 
                        id="password" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="barra"></span>
                    <label htmlFor="password">contraseña</label>
                </div>
                <button type="submit" onClick={() => postData()}>Registrarme</button>

                <Link to="/" className="link">Iniciar Sesion</Link>
            </div>
        </form>
    )
}

export default Register