import React, { useState, useEffect } from "react";
import Joke, { JokeProps } from "./Joke";
import './JokeList.css';

interface JokeListProps {
    total: number;
    result: JokeProps[];
}

const JokeList: React.FC = () => {
    const [jokes, setJokes] = useState<JokeListProps | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('https://api.chucknorris.io/jokes/search?query=girl');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const responseData = await response.json();
                
                // Transform data using map instead of for loop
                const result = responseData.result.map((item: any) => ({
                    key: item.id,
                    name: item.value
                }));
                
                setJokes({
                    total: responseData.total,
                    result
                });
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
                console.error('Error fetching topics:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTopics();
    }, []);

    return (
        <div className="jokes-container">
            {isLoading && <p className="loading-message">Loading jokes...</p>}
            
            {error && <p className="error-message">Error: {error}</p>}
            
            {!isLoading && !error && jokes && (
                <>
                    <h2 className="jokes-header">{jokes.total} Chuck Norris Jokes</h2>
                    <div className="jokes-list">
                        {jokes.result.map((joke, index) => (
                            <Joke key={joke.key} name={joke.name} index={index} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default JokeList;
