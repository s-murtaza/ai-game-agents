import { Link } from "react-router-dom";
import "./main.css";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎮 Game Zone</h1>
      <div style={styles.menu}>
        <Link to="/" className="link-button">
          🏠 Home
        </Link>
        <Link to="/tic-tac-toe" className="link-button">
          ❌ Tic Tac Toe
        </Link>
        <Link to="/puzzle" className="link-button">
          🧩 Puzzle
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "rgba(33, 42, 23, 0.928)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontFamily: "'Press Start 2P', cursive",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "3rem",
    textShadow: "0 0 12px rgba(139, 145, 94, 0.9)",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  //   link: {
  //     backgroundColor: "#1f1f1f",
  //     padding: "1.2rem 2.5rem",
  //     color: "#ffffff",
  //     textDecoration: "none",
  //     border: "2px solid rgba(110, 118, 47, 0.877)",
  //     borderRadius: "12px",
  //     transition: "all 0.3s ease-in-out",
  //     textAlign: "center",
  //     fontSize: "1.2rem",
  //     cursor: "pointer",
  //   },
};
