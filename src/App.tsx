import { Layout } from 'antd';
import React from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';

function App() {
    return (
        <div>
            <Layout>
                <Navbar/>
                <Layout.Content>
                    <AppRouter/>
                </Layout.Content>
            </Layout>
        </div>
    );
}

export default App;
