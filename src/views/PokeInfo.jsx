import { useParams } from "react-router-dom"
import Card from "../components/Card"
import { useState, useEffect } from "react"

const PokeInfo = () => {
  const [infoPokemon, setInfoPokemon] = useState(null);
  const {name} = useParams();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    async function fetchData(){
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      setInfoPokemon(data);
      setLoading(true);
    }
    fetchData();
  
  }, [])
  

  return (
    <Card infoPokemon = {infoPokemon} loading = {loading}/>
  )
}

export default PokeInfo