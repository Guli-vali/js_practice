import React, { useState } from "react";

type GreetingProps = {
    initialName: string;
}

const Greeting: React.FC<GreetingProps> = ({ initialName }) => {
    const [name, setName] = useState<string>(initialName);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [greetCount, setGreetCount] = useState<number>(0);
    const [nameHistory, setNameHistory] = useState<string[]>([]);
    const [formErrors, setFormErrors] = useState({
        email: "",
        password: ""
    });

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        setName(newName);

        if (newName.trim() === "") {
            setError("Name cannot be empty");
        } else {
            setError("");
            setGreetCount(prevCount => prevCount + 1);
            setNameHistory(prevHistory => [...prevHistory, newName]);
        }
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = event.target.value;
        setEmail(newEmail);

        if (!newEmail.includes("@")) {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                email: "Invalid email format"
            }));
        } else {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                email: ""
            }));
        }
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = event.target.value;
        setPassword(newPassword);

        if (newPassword.length < 6) {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                password: "Password must be at least 6 characters long"
            }));
        } else {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                password: ""
            }));
        }
    };

    const resetName = () => {
        setName(initialName);
        setError("");
        setGreetCount(prevCount => prevCount + 1);
        setNameHistory(prevHistory => [...prevHistory, initialName]);
    };

    const clearHistory = () => {
        setNameHistory([]);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formErrors.email || formErrors.password) {
            alert("Please fix the errors before submitting.");
            return;
        }

        alert(`Form submitted successfully!\nName: ${name}\nEmail: ${email}`);
    };

    return (
        <div>
            <h1>Hello, {name}!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Enter your name"
                        />
                    </label>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                        />
                    </label>
                    {formErrors.email && <p style={{ color: "red" }}>{formErrors.email}</p>}
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Enter your password"
                        />
                    </label>
                    {formErrors.password && <p style={{ color: "red" }}>{formErrors.password}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
            <button onClick={resetName}>Reset Name</button>
            <button onClick={clearHistory}>Clear History</button>
            <p>You have been greeted {greetCount} times.</p>
            <h2>Greeting History:</h2>
            <ul>
                {nameHistory.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Greeting;