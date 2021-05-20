import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import AuthService from '../services/auth.service';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmation, setEmailConfirmation] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState('');

    const onChangeUsername = event => {
        setUsername(event.target.value);
    };

    const onChangeEmail = event => {
        setEmail(event.target.value);
    };

    const onChangeEmailConfirmation = event => {
        setEmailConfirmation(event.target.value);
    };

    const onChangePassword = event => {
        setPassword(event.target.value);
    };

    const onChangePasswordConfirmation = event => {
        setPasswordConfirmation(event.target.value);
    };

    const handleRegister = event => {
        event.preventDefault();

        setMessage('');
        setSuccessful(false);

        AuthService.register(username, email, password).then(
            response => {
                setMessage('Votre compte a été créé !');
                setSuccessful(true);
            },
            error => {
                const resMessage =
                    (error.response && error.response.data && error.response.data.message)
                    || error.message
                    || error.toString();
                
                setMessage(resMessage);
                setSuccessful(false);
            }
        )
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col align-self-center">
                    <h2>Inscription</h2>

                    {message && (
                        <div className="form-group">
                            <div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
                                {message}
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Pseudo</label>
                            <input type="text" className="form-control" id="username" value={username} onChange={onChangeUsername}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={onChangeEmail}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email_confirm" className="form-label">Confirmer e-mail</label>
                            <input type="email"
                                   className="form-control"
                                   id="email_confirm"
                                   value={emailConfirmation}
                                   onChange={onChangeEmailConfirmation}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Mot de passe</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={onChangePassword}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password_confirm" className="form-label">Confirmer mot de passe</label>
                            <input type="password"
                                   className="form-control"
                                   id="password_confirm"
                                   value={passwordConfirmation}
                                   onChange={onChangePasswordConfirmation}
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="accept_terms"/>
                            <label className="form-check-label" htmlFor="accept_terms">J'accepte les conditions d'utilisation</label>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary" style={{ marginRight: 10 }}>Envoyer</button>
                            <Link to="/connexion" className="btn btn-outline-primary">Connexion</Link>
                        </div>
                    </form>
                </div>
                <div className="col vh-100" style={{ background: "url(https://picsum.photos/1000/1000)"}}></div>
            </div>
        </div>
    );
};

export default Register;
