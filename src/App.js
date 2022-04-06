//
import PokemonProvider from "./Context/Pokemons/Provider";
import Routes from "./Routes";
//

//

const App = () => {
  return (
    <PokemonProvider>
      <Routes />
    </PokemonProvider>
  );
};

export default App;
