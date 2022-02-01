const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_USERS':
            return {
                ...state,
                users: action.data,
                isLoading: false
            };

        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            };

        case 'FIND_USER':
            return {
                ...state,
                user: action.data,
                repos: action.repoData,
                isLoading: false
            };

        case 'CLEAR_USER':
            return {
                ...state,
                user: null,
                repos: []
            };

        case 'SET_LOADING':
            return {
                ...state,
                isLoading: !state.isLoading
            };

        case 'SET_ALERT':
            return {
                ...state,
                alertMessage: action.data
            };

        case 'DISMISS_ALERT':
            return {
                ...state,
                alertMessage: null
            };

        default:
            return state;
    };
};

export default reducer;