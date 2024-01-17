
const Card = ({infoPokemon, loading}) => {
  
  return (
    <>
      {loading ? (
        <div className="mainPokeInfo">
        <div className="myCard">
          <img src={infoPokemon.sprites.other.dream_world.front_default} alt={infoPokemon.name} />
          <div className="stats">
            
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