import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ title, text }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
};

export default Card;
