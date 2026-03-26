import { useEffect, useState } from "react";

function App() {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/cakes")
      .then(res => res.json())
      .then(data => setCakes(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🍰 Cake List</h1>
      <ul>
        {cakes.map((cake) => (
          <li key={cake.id}>{cake.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;