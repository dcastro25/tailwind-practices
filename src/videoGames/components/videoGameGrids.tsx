import type { videoGame } from "../../models/video-game";
import { GameItems } from "./gameItems";

interface Props{
    games: videoGame[];
}

export function VideoGameGrids({games} : Props){
    return(
        <div className ="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-white text-4xl font-bold mb-8"> Feature Games</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        games.map((value) => (
                            <GameItems key={value.id} {...value}/>
                        ))
                    }    
                </div>
            </div> 
        </div>
    )

}


