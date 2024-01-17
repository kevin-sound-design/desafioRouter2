import { useState, useEffect } from "react";

function obtenerDataForm (){
  
}

const Pokemones = () => {

  const [names, setNames] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await res.json();
        setNames(data.results);
        setLoading(true);
      } catch (error) {
        console.error(error);
      } 
    }
    fetchData();
  }, []);
  
 
  return (
    <main className="pokemonesMain">
      {loading ? (
        <form id="formulario">
        <label>Selecciona un pokemón</label>
        <select id="opcionElegida">
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
