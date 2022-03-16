import { useRef, useState, useEffect } from "react";

import './style/login.css';
import axios from "../axios";
import { Redirect } from "react-router-dom";
const LOGIN_URL = "/etudiant";





function Login(){
  
  const userRef = useRef();
  const errRef = useRef();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  

  useEffect(() => {
    setErrorMsg("");
  }, [login, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      LOGIN_URL,
      JSON.stringify({ login, password }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    console.log(JSON.stringify(response?.data));

    const bd = response?.data.find((user) => user.login === login);

    if (bd) {
      if (bd.password === password) {
        
        setLogin("");
        setPassword("");
        setSuccess(true);
        console.log(bd);
      } else {
        setErrorMsg("Mot de passe incorrecte");
        console.log("Mot de passe incorrecte");
      }
    } else {
      setErrorMsg("Login incorrecte");
      console.log("Login incorrecte");
    }
  };

  return (
    <>
      {success ? (
        <Redirect to="/" />
      ) : (
        <section>
          <p
            ref={errRef}
            className={errorMsg ? "errormsg" : "invisible"}
          >
            {errorMsg}
          </p>
          <h1>Connexion</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="login">Login:</label>
            <input
              type="text"
              id="login"
              ref={userRef}
              onChange={(e) => setLogin(e.target.value)}
              value={login}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button>Connexion</button>
          </form>
        </section>
      )}
    </>
  );
};

export default Login;
