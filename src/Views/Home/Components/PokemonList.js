import PokemonListItem from "./PokemonListItem";

const PokemonList = ({ pokemons }) => {
  return (
    <>
      {pokemons?.map((pokemonMapeado, index) => (
        <PokemonListItem key={index} {...pokemonMapeado} />
      ))}
    </>
  );
};

export default PokemonList;
