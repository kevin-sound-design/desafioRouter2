
const Card = ({infoPokemon, loading}) => {
  
  return (
    <>
      {loading ? (
        <div className="mainPokeInfo">
        <div className="myCard">
          <img src={infoPokemon.sprites.other.dream_world.front_default} alt={infoPokemon.name} />
          <div className="stats">
          <h1>{infoPokemon.name}</h1>
            <ul>
              <li>
                hp: {infoPokemon.stats[0].base_stat}
              </li>
              <li>
                attack: {infoPokemon.stats[1].base_stat}
              </li>
              <li>
                defense: {infoPokemon.stats[2].base_stat} 
              </li>
              <li>
                special-attack: {infoPokemon.stats[3].base_stat}
              </li>
              <li>
                special-defense: {infoPokemon.stats[4].base_stat}
              </li>
              <li>
                speed: {infoPokemon.stats[5].base_stat}
              </li>
              <h3>
              {infoPokemon.types[0].type.name}
              </h3>
            </ul>
          </div>
        </div>
      </div>
      ): (
        <h1>loading...</h1>
      )}
    </>
  )
}

export default Card