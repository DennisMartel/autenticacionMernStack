import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const postData = () => {
        fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())
        .then(data => {
            if(data.error) {
                alert(data.error)
            } else {
                alert(data.message)
                history.push("home")
            }
        }).catch(err => console.log(err))
    }
    return (
        <form id="form" onSubmit={e => e.preventDefault()}>
            <div className="form">
                <h1>login</h1>
                <div className="grupo">
                    <input 
                        type="email" 
                        name="" 
                        id="email" 
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className="barra"></span>
                    <label htmlFor="password">contraseña</label>
                </div>
                <button type="submit" onClick={() => postData()}>iniciar sesion</button>

                <Link to="/register" className="link">Registrarme</Link>
            </div>
        </form>
    )
}

export default Login