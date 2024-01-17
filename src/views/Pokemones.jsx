import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {

  const [names, setNames] = useState(null);
  const [loading, setLoading] = useState(false);
  const [opcionElegida, setOpcionElegida] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await res.json();
        setNames(data.results);
        setLoading(true);
        setOpcionElegida(data.results[0].name)
      } catch (error) {
        console.error(error);
      } 
    }
    fetchData();
  }, []);

  function capturarOpcion(e){
    e.preventDefault();
    setOpcionElegida(e.target.value);
  }
  function usarOpcionNavigate(e){
    e.preventDefault();
    navigate(`/pokemones/${opcionElegida}`)

    
  }
  
  return (
    <main className="pokemonesMain">
      {loading ? (
        <form id="formulario" onSubmit={usarOpcionNavigate} >
        <label>Selecciona un pokemón</label>
        <select id="opcionElegida" onChange={capturarOpcion}>
          {names.map((name, index)=>{
            return <option key={index} value = {name.name}>{name.name}</option>
          })}
        </select>
        <input type="submit" value= "Ver Detalle" />
      </form>
      ) : (
        <h1>Loading...</h1>
      )}
      
    </main>
  )
}

export default Pokemones
