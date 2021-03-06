import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Components/Player';
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();
// Connect Spotify to React with the API key to allow spotify to talk to React

function App() {
const [{ user, token}, dispatch] = useDataLayerValue();
  
  // State is a short term memory store. If you refresh you will lose whatever value was left 
  // inside of the token. It is how we handle variables inside of React. 
  // UseEffect runs code based on a given condition. 
  
  
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });


      spotify.getUserPlaylists().then((playlists)=> {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
    });
    });


// Copy your discover weekly pin
    
   spotify.getPlaylist('37i9dQZEVXcD4ANfKjrXy7').then(response =>
    dispatch({
      type: "SET_DISCOVER_WEEKLY",
      discover_weekly: response,
    })
    )
  }
  }, []);


  return (
    <div className="App">
    
    
    {token ? 
    <Player spotify={spotify} />
     :
    <Login />
}
    </div>
  )
}

  export default App;


// We are going to have some JavaScript within our return. This is known as 
// JSX. If there is a token, render the app, like a player, otherwise with a 
// ternanry operator render the login page. 