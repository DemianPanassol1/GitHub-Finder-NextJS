import { createContext, useReducer } from "react";
import axios from 'axios';

import reducer from "./reducer";

const context = createContext();
const dispatchContext = createContext();

function Provider(props) {

    const initialState = {
        users: [],
        user: null,
        repos: [],
        isLoading: false,
        alertMessage: null
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const searchUsers = async (input) => {
        dispatch({ type: 'SET_LOADING' });

        try {
            const { data } = await axios.get(`https://api.github.com/search/users?q=${input}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`);

            if (data.items.length === 0) {
                setAlert('A pesquisa não retornou dados');
            };

            dispatch({ type: 'SEARCH_USERS', data: data.items });

        } catch (error) {
            setAlert('Um erro inesperado aconteceu. Por favor, tente novamente');
        };
    };

    const clearUsers = () => {
        dispatch({ type: 'CLEAR_USERS' });
    };

    const findUser = async (input) => {
        dispatch({ type: 'SET_LOADING' });

        const userRes = await axios.get(`https://api.github.com/users/${input}?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`);

        const repoRes = await axios.get(`https://api.github.com/users/${input}/repos?per_page=5&sort=created:asc&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`);

        dispatch({ type: 'FIND_USER', data: userRes.data, repoData: repoRes.data });
    };

    const clearUser = () => {
        dispatch({ type: 'CLEAR_USER' });
    };

    const setAlert = (input) => {
        dispatch({ type: 'SET_ALERT', data: input });

        setTimeout(() => {
            dismissAlert();
        }, 6500);
    };

    const dismissAlert = () => {
        dispatch({ type: 'DISMISS_ALERT' })
    };

    return (
        <context.Provider value={state}>
            <dispatchContext.Provider value={{ searchUsers, clearUsers, findUser, clearUser, setAlert, dismissAlert }}>
                {props.children}
            </dispatchContext.Provider>
        </context.Provider>
    );
};

export { Provider, context, dispatchContext };