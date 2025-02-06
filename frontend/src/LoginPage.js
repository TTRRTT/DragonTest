import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", { username, password });
      if (response.data.status === "success") {
        navigate("/home");
      } else {
        alert("Ошибка входа!");
      }
    } catch (error) {
      alert("Ошибка сервера");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Вход</h2>
      <input
        type="text"
        placeholder="Логин"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>Войти</button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  input: { display: "block", margin: "10px auto", padding: "10px", width: "200px" },
  button: { padding: "10px 20px", cursor: "pointer" },
};

export default LoginPage;

