import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h2>Добро пожаловать!</h2>
      <input
        type="text"
        placeholder="Введите текст..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogout} style={styles.button}>Выйти</button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  input: { display: "block", margin: "10px auto", padding: "10px", width: "200px" },
  button: { padding: "10px 20px", cursor: "pointer" },
};

export default HomePage;

