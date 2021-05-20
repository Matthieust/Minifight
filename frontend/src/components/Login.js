import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import AuthService from '../services/auth.service';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const onChangeUsername = event => {
        setUsername(event.target.value);
    };

    const onChangePassword = event => {
        setPassword(event.target.value);
    };

    const handleLogin = event => {
        event.preventDefault();

        setMessage('');
        setLoading(true);

        AuthService.login(username, password).then(
            () => {
                props.history.push('/');
                window.location.reload();
            },
            error => {
                setLoading(false);
                setMessage("L'identifiant ou le mot de passe est incorrect");
            }
        )
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col align-self-center">
                    <h2>Connexion</h2>

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Pseudo</label>
                            <input type="text" className="form-control" id="username" value={username} onChange={onChangeUsername}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Mot de passe</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={onChangePassword}/>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary" style={{ marginRight: 10 }} disabled={loading}>
                                {loading && (<span className="spinner-border spinner-border-sm"></span>)}
                                Envoyer
                            </button>
                            <Link to="/" className="btn btn-outline-primary">Créer un nouveau compte</Link>
                        </div>
                    </form>
                </div>
                <div className="col vh-100" style={{ background: "url(https://picsum.photos/1000/1000)"}}></div>
            </div>
        </div>
    );
};

export default Login;
