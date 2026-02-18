import type { videoGame } from "../../models/video-game";

export function GameItems(game: Omit<videoGame, "id">){
    return(
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ">
            
            <div className="relative h-48 overflow-hidden group">

                <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-4xl">🎮</p>
                </div>

            </div>
            <div className ="p-6">
                <h3 className="text-white  font-bold mb-4">{game.title}</h3>
                <h4 className ="text-grey-300 text-lg mb-3">{game.subtitle}</h4>
                <p className="text-grey-400 text-sm">{game.description}</p>
            </div>

        </div> 
    );
};
