export const initialState = { 
    user: null,
    playlists:  [],
    playing: false,
    item: null,
    // remove after finished developing
    token: "BQC049-KaL3Oo0d4gNvxkDslGYNEkp465OaDeMQB_DN5_2mUsGWB3m3SjG8ivK6WeeLLvDOCaO8qV17_2VfY3BGh9DB3EhMraRpv5XvPtHd8aAPgjrWmVD8CxJmUhRbJ3WP_1fmA6Yp2jQqllpEZbE0gmR1VWNzyTe4coz-U9FwgSFyX",
};

const reducer = (state, action) =>
{
console.log(action);

// Action -> type, [payload]

switch(action.type) {
    case 'SET USER':
        return {
            ...state,
            user: action.user
        };


        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists: action.playlists,
                }
        default: 
        return state;
}
}

export default reducer;

  // when we push a user into the data layer, we dispatch an action : a type (setuser) and throw them into the data layer.
