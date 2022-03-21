import React from 'react';
import RandomJoke from '../pages/RandomJoke';
import SelectedJokes from '../pages/SelectedJokes';

export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    RANDOM_JOKE = '/random-joke',
    SELECTED_JOKES = '/selected-jokes'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.RANDOM_JOKE, element: RandomJoke},
    {path: RouteNames.SELECTED_JOKES, element: SelectedJokes}
]