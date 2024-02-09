import { useState, useEffect, Suspense } from 'react';

const fetchPokemons = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
  const data = await response.json();

  return data.results;
};

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemons()
      .then(setPokemons)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading Pokemons...</p>;
  }

  return (
    <ul>
      {pokemons.map(pokemon => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
}
