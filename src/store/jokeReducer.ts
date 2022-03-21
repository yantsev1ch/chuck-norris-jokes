import {IJoke} from '../models/IJoke';
import {AppDispatch} from './store';
import JokeService from '../api/JokeService';

type ActionType = ReturnType<typeof setJoke>

const initialState = {
    joke: {} as IJoke
}
type initialStateType = typeof initialState

export default function jokeReducer(state = initialState, action: ActionType): initialStateType {
    switch (action.type) {
        case 'SET_RANDOM_JOKE':
            return {...state, joke: action.joke}
        default:
            return state;
    }
}

export const setJoke = (joke: IJoke) => ({type: 'SET_RANDOM_JOKE', joke} as const)

export const getJoke = () => async (dispatch: AppDispatch) => {
    try {
        const response = await JokeService.getJoke()
        dispatch(setJoke(response.data))
    } catch (e) {
        console.log(e)
    }
}

