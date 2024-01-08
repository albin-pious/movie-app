import './App.css';
import React from 'react';
import NavBar from './components/navbar/navbar';
import  Banner from './components/banner/Banner.jsx';
import RowPost from './components/rowpost/RowPost.jsx';
import { action, adventureAction, blockbuster, comedy, hindi, hollybood, horror, newReleases, originals, romantic, tamil, thriller } from './urls.jsx';
import ExploreMore from './components/exploremore/ExploreMore.jsx';
import LastContainer from './components/last/LastContainer.jsx';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Popular on Netflix'/>
      <RowPost url={hollybood} title= 'Hollywood' isSmall/>
      <RowPost url={hindi} title= 'Bollywood' isSmall />
      <RowPost url={blockbuster} title= 'Blockbuster Movies' isSmall />
      <RowPost url={horror} title ='Horror Movies' isSmall />
      <RowPost url={comedy} title ='Comedy Movies' isSmall />
      <RowPost url={action} title ='Action Movies' isSmall />
      <RowPost url={romantic} title ='Romantic Movies' isSmall />
      <RowPost url={thriller} title ='Thriller Movies' isSmall />
      <RowPost url={adventureAction} title ='Action & Adventure Movies' isSmall />
      <RowPost url={tamil} title ='Tamil-Language Movies' isSmall />
      <RowPost url={newReleases} title = 'New Releases' isSmall />
      <ExploreMore />
      <LastContainer />
    </div>
  );
}

export default App;
