import { Link } from "react-router-dom";

const PokemonCard = ({ id, name, picture }) => {
    return (
        <Link to={`/pokemon/${id}`}>
            <div className="max-w-xs bg-gray-200 rounded overflow-hidden shadow-lg m-4 p-4">
                <img className="w-full" src={picture} />
                <hr class="w-48 h-0.5 mx-auto bg-gray-300 rounded md:my-5"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                </div>
            </div>
        </Link>
    );
  };

export default PokemonCard;