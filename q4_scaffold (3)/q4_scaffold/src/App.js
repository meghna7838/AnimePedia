import React from "react";
import "./styles.css";
import AnimeList from './AnimeList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Animepedia</h1>
        <AnimeList/>
      </div>
    );
  }
}

export default App;
