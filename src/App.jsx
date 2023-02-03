import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [apiError, setApiError] = useState("");
  const [allSectors, setAllSectors] = useState([]);

  useEffect(() => {
    fetch('http://substantiveresearch.pythonanywhere.com/')
    .then((response) => response.json())
    .then((data) => totalAllSectors(data))
    .catch((err) => setApiError(err))
  }, [])

  const totalAllSectors = (apiData) => {
    let sectorArray = [];
    for (let i=1; i <= 11; i++) {
      let interactionPerSector = apiData.filter(interaction => interaction.sector_id === i.toString());
      let sectorTotal = {
        id: interactionPerSector[0].sector_id,
        name: interactionPerSector[0].name,
        total: interactionPerSector.length
      }
      sectorArray.push(sectorTotal);
    }
    setAllSectors(sectorArray);
  }

  return (
    <div className="App">
      {
      apiError !== "" ? (<h1>Error: {apiError}</h1>)
      :
      (
        <table className="table">
          <thead>
            <tr className="title center">
              <th>Sector ID</th>
              <th>Sector</th>
              <th>Total Interactions</th>
            </tr>
          </thead>
          <tbody>
            {allSectors.map((allSector, index) => { 
              return (
              <tr className="center" key={index}>
                <td>{allSector.id}</td>
                <td>{allSector.name}</td>
                <td>{allSector.total}</td>
              </tr>
              );
            }) }
          </tbody>
        </table>
      )
      }
    </div>
  )
}

export default App
