import React, { useEffect, useState } from 'react';

import Register from './Register';
import Dashboard from './Dashboard';
import AuthService from '../services/auth.service';

const Home = () => {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    return currentUser ? <Dashboard /> : <Register/>;
};

export default Home;
