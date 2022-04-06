import { useContext, useEffect } from "react";
//
import PokemonContext from "../../Context/Pokemons";
//
import PokemonList from "./Components/PokemonList";
//
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
//

const Home = () => {
  const { getPokemons, pokemons, isLoading, hasError, errorMessage } =
    useContext(PokemonContext);

  useEffect(() => {
    getPokemons().catch(null);
    //Aquí como getPokemons es asyncrono, le coloco el catch(null) para evitar problemas
  }, []);
  if (isLoading) {
    return <Loading title={"Cargando pokemon o que ase..."} />;
  }
  return (
    <>
      {hasError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </>
  );
};

export default Home;
