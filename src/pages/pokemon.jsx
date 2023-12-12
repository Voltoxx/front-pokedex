    import React, { useState, useEffect } from "react";
    import { useParams } from "react-router-dom";

    const Pokemon = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`http://51.75.23.76:3001/pokemon/${id}`);
            const data = await response.json();
            setPokemonData(data);
            console.log('Pokemon data:', data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

        fetchData();
    }, [id]);

    return (
        <div className="flex flex-col items-center justify-center">
        {pokemonData ? (
            <>
            <h1 className="text-4xl font-bold mb-4 text-yellow-300">
                {pokemonData.name}
            </h1>
            <img src={pokemonData.picture} />
            <p>
            Types: {pokemonData.type ? (
              pokemonData.type.map((type, index) => (
                <span key={index}>
                  {index > 0 && " & "} {type}
                </span>
              ))
            ) : (
              "No types available"
            )}
            </p>
            </>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );
    };

    export default Pokemon;