import React from 'react'
import Logo from '../../components/Logo'
import {Link} from 'react-router-dom'
import './Error.css'

function Error() {
    return (
        <div className="fluid-container error-container">
            <div className="row">
                <div className="col-12 col-error">
                    <Logo className="logo-error" />
                    <h1 className="title-error">404</h1>
                    <h4 className="subtitle-error">Page not found</h4>
                    <Link to="/" className="btn btn-primary">Back to home</Link>
                </div>
            </div>
        </div>
    )
}

export default Error
