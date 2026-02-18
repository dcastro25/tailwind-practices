
import './App.css'
import { games } from './mocks/mocks-file';
import {VideoGameGrids}  from './videoGames/components/videoGameGrids'

function App() {
    return (
      <VideoGameGrids games={games} />
    );
}

export default App
