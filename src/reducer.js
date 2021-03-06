export const initialState = { 
    user: null,
    playlists:  [],
    playing: false,
    item: null,
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

                case 'SET_DISCOVER_WEEKLY':
                    return {
                        ...state,
                        discover_weekly: action.discover_weekly,
                    };
        default: 
        return state;
}
}

export default reducer;

  // when we push a user into the data layer, we dispatch an action : a type (setuser) and throw them into the data layer.
