import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Jumbotron = () => {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt
                possimus non incidunt odit vero aliquid similique.
            </p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
                Call to action!
            </a>
        </div>
    );
};

export default Jumbotron;
