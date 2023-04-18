import "./App.css";
import { Card } from "./components/Card";

export function App() {
  return (
    <div className="container">
      <div className="card">
        <div>
          <img src="https://github.com/antoniodebrito.png" alt="" />

          <p>
            Antonio Brito
          </p>

          <p>
            Front End Developer
          </p>
        </div>

        <Card />
      </div>

      <div>

      </div>
    </div>
  );
}
