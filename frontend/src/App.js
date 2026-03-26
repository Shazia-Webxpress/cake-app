import { useEffect, useState } from "react";

function App() {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    fetch("http://13.62.56.221:5000/api/cakes")
      .then(res => res.json())
      .then(data => setCakes(data));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🍰 Cake Dashboard</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px"
      }}>
        {cakes.map((cake) => (
          <div key={cake.id} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
          }}>
            <img
              src="https://via.placeholder.com/150"
              alt="cake"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{cake.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;