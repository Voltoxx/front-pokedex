import React, { useState, useEffect } from "react";
import PokemonCard from "../components/pokemonCard";

const Pokemons = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://51.75.23.76:3001/pokemons`);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-yellow-300">Pokemon Page</h1>
      <div className="flex flex-wrap justify-center">
        {pokemonData &&
          pokemonData.map((pokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
      </div>
    </div>
  );
};

export default Pokemons;
