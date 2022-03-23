import {Button} from 'antd';
import {Content} from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {getJoke} from '../store/jokeReducer';
import {IJoke} from '../models/IJoke';

type PropsType = {}

const RandomJoke: FC<PropsType> = () => {
    const dispatch = useDispatch()
    const randomJoke = useSelector<RootState, IJoke>(state => state.joke.joke)
    const [start, setStart] = useState(false)
    const [myJoke, setMyJoke] = useState<Array<IJoke>>([])


    useEffect(() => {
        if (start) {
            const interval = setInterval(() => dispatch(getJoke()), 3000);
            return () => clearInterval(interval)
        }
    })

    const getRandomJoke = () => {
        dispatch(getJoke())
    }

    const startCount = () => {
        setStart(!start)
    }

    const addMyJoke = useCallback(() => {
        setMyJoke([...myJoke, randomJoke])
        localStorage.setItem('jokes', JSON.stringify(myJoke))
    }, [randomJoke])

    return (
        <Content style={{padding: '100px 50px', height: 'calc(100vh - 64px)'}}>
            <div className="site-layout-content">
                <div className="jokes-content">
                    <Title
                        style={{color: 'white', fontSize: 30}}>{randomJoke.value}</Title>
                </div>
                <div className="jokes-buttons">
                    <Button type={'primary'} size={'large'} onClick={getRandomJoke}>Get
                        random joke</Button>
                    <Button type={'primary'} size={'large'} onClick={startCount}
                            danger={start}>Get joke
                        per 3sec</Button>
                    <Button type={'primary'} size={'large'} onClick={addMyJoke}>Add joke to list</Button>
                </div>

            </div>
        </Content>
    );
};

export default RandomJoke;