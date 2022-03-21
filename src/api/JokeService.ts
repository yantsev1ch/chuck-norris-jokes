import axios, {AxiosResponse} from 'axios';
import {IJoke} from '../models/IJoke';

export default class JokeService {
    static async getJoke(): Promise<AxiosResponse<IJoke>> {
        return axios.get<IJoke>('https://api.chucknorris.io/jokes/random')
    }
}