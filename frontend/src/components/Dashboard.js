import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AuthService from '../services/auth.service';
import UserService from '../services/user.service';

const Dashboard = () => {
    const [fighter, setFighter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        UserService.getMyFighter().then(
            response => {
                setFighter(response.data);
                setLoading(false);
            }
        )
    }, []);

    const onClickLogout = () => {
        AuthService.logout();
        window.location.reload();
    };

    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">Minifight</Link>
                    <button className="btn btn-primary-outline" onClick={onClickLogout}>
                        Déconnexion
                    </button>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col align-self-center">
                        <h1>Mon fighter</h1>

                        {! loading && (
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <th>Nom</th>
                                        <td>{fighter.name}</td>
                                    </tr>
                                    <tr>
                                        <th>Vie</th>
                                        <td>{fighter.health}</td>
                                    </tr>
                                    <tr>
                                        <th>Force</th>
                                        <td>{fighter.strength}</td>
                                    </tr>
                                    <tr>
                                        <th>Dextérité</th>
                                        <td>{fighter.dexterity}</td>
                                    </tr>
                                    <tr>
                                        <th>Armure</th>
                                        <td>{fighter.armor}</td>
                                    </tr>
                                    <tr>
                                        <th>Niveau</th>
                                        <td>{fighter.level}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                    <div className="col" style={{ height: "calc(100vh - 56px)", background: "url(https://picsum.photos/id/1024/1000/1000)"}}>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
