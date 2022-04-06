import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
//
import PokemonContext from "../../Context/Pokemons";
//
import PokeStats from "./components/PokeStats";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const PokeDetail = () => {
  const { id } = useParams();
  const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } =
    useContext(PokemonContext);

  useEffect(() => {
    /*
Cada vez que se cargue la pantalla o cada vez que cambie el id, solicitar el detalle del pokemon
    */
    getPokemonDetail(id).catch(null);
  }, []);

  if (isLoading) {
    return <Loading title="Cargando pokemon o que ase..." />;
  }

  return (
    <div>
      {hasError ? (
        <ErrorMessage title={errorMessage} />
      ) : (
        <>
          <h3 style={{ marginTop: 15, marginBottom: 15 }}>
            General information
          </h3>
          <p>{`Name: ${pokemonDetail?.name}.`}</p>
          <p>{`Peso: ${pokemonDetail?.weight} kgs.`}</p>
          <p>{`Altura: ${pokemonDetail?.height} cms.`}</p>
          <div>
            <h3 style={{ marginTop: 30, marginBottom: 15 }}>Habilidades</h3>
            <PokeStats stats={pokemonDetail?.stats ?? []} />
          </div>
        </>
      )}
    </div>
  );
};

export default PokeDetail;
