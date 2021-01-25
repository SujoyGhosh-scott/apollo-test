import './App.css';
import { useQuery, gql } from "@apollo/client"

const STARSHIPS = gql`
  {
    starships {
      id
      name
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(STARSHIPS)
  
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error...</p>
  
  return (
    <div className="App">
      <h3>
        all starships...
      </h3>
      {
        data.starships.map((starship) => (
          <p key={starship.id}>{starship.name}</p>
        ))
      }
    </div>
  );
}

export default App;
