




export const authEndpoint=
"https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

// Click Login button 
// Redirect to spotfiy login page 
// Redirect to home page once authorized 

const clientid = "8765545b25344f0095aa282cbadd8093";

// You throw the user over to spotify and include a bunch of scopes.
// What that is trying to show is that the screen  we are going to show them will have all these things listed out.
// If you dont give the user scope to delete stuff. If you dont have permissions to delete anything; you cant delete it. 
// The user could not publish their own songs if they wanted to. 

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];


export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce ((initial, item) => {
        // #acsessToken=mysupersecretkey split it at the equal sign
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent (parts[1]);

        return initial;
    }, {});
}

    // reducers are very powerful

export const loginUrl = 
`${authEndpoint}
?client_id=${clientid}
&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`; //string interpolation