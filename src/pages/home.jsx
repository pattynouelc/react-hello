import React from 'react';
import Navbar from '../component/Navbar.jsx';
import Jumbotron from '../component/Jumbotron.jsx';
import Card from '../component/Card.jsx';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <Jumbotron />
                <div className="row">
                    <div className="col-md-3">
                        <Card title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." />
                    </div>
                    <div className="col-md-3">
                        <Card title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." />
                    </div>
                    <div className="col-md-3">
                        <Card title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." />
                    </div>
                    <div className="col-md-3">
                        <Card title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
