import {Layout, Menu, Row} from 'antd';
import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {RouteNames} from '../router';

const Navbar: FC = () => {
    const navigate = useNavigate()
    return (
        <Layout.Header>
            <Row justify="start">
                <>
                    <Menu theme="dark" mode="horizontal">
                         <Menu.Item key={1} onClick={() => navigate(RouteNames.RANDOM_JOKE)}>Random Joke</Menu.Item>
                         <Menu.Item key={6} onClick={() => navigate(RouteNames.SELECTED_JOKES)}>My Jokes</Menu.Item>
                    </Menu>
                </>
            </Row>
        </Layout.Header>
    );
};

export default Navbar;