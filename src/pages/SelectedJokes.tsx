import React, {FC} from 'react';
import {Button} from 'antd';
import {Content} from 'antd/lib/layout/layout';

type PropsType = {

}

const SelectedJokes: FC<PropsType> = () => {

    return (
        <Content style={{padding: '100px 50px', height: 'calc(100vh - 64px)'}}>
            <div className="site-layout-content">
                <div className="jokes-content">
                    {myFavoriteJoke.map(j => <div>{j.value}</div>)}
                </div>
                <div className="jokes-buttons">
                    <Button type={'primary'} size={'large'}>Get
                        random joke</Button>
                </div>

            </div>
        </Content>
    );
};

export default SelectedJokes;