import {IJoke} from '../models/IJoke';
import {AppDispatch} from './store';
import JokeService from '../api/JokeService';

type ActionType = ReturnType<typeof setJoke> | ReturnType<typeof setMyFavoriteJoke>

const initialState = {
    joke: {} as IJoke,
    myJoke: [] as Array<IJoke>
}
type initialStateType = typeof initialState

export default function jokeReducer(state = initialState, action: ActionType): initialStateType {
    switch (action.type) {
        case 'SET_RANDOM_JOKE':
            return {...state, joke: action.joke}
        case 'SET_MY_FAVORITE_JOKE':
            return {...state, myJoke: action.myJoke}
        default:
            return state;
    }
}

export const setJoke = (joke: IJoke) => ({type: 'SET_RANDOM_JOKE', joke} as const)
export const setMyFavoriteJoke = (myJoke: Array<IJoke>) => ({
    type: 'SET_MY_FAVORITE_JOKE',
    myJoke
} as const)

export const getJoke = () => async (dispatch: AppDispatch) => {
    try {
        const response = await JokeService.getJoke()
        dispatch(setJoke(response.data))
    } catch (e) {
        console.log(e)
    }
}

