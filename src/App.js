import "./styles.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Nairobi" />
      <footer>
        <em>
          This project was coded by{" "}
          <a href="https://github.com/Monicah-Ngari">
            <strong>Monicah Ngari</strong>
          </a>{" "}
          and is{" "}
          <a href="https://github.com/Monicah-Ngari/tesstAppp">
            <strong>open sourced on Github</strong>
          </a>
          and{" "}
          <a href="/">
            <strong>hosted on Netlify</strong>
          </a>
        </em>
      </footer>
    </div>
  );
}
