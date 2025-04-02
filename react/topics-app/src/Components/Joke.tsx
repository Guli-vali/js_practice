import React from 'react';
import './Joke.css';

export interface JokeProps {
    key: number;
    name: string;
    index: number;
}

const Joke: React.FC<JokeProps> = ({ key, name, index }) => {
    return (
        <div className="joke-card">
            <div className="joke-content">
                <h3 className="joke-title">Chuck Norris Joke #{index + 1}</h3>
                <p className="joke-text">{name}</p>
            </div>
        </div>
    );
}
export default Joke;
