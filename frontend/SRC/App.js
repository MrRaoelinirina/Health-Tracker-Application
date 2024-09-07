import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('/api/health/user/1') // Assuming user ID 1 for demo purposes
            .then(response => response.json())
            .then(data => setUserData(data));
    }, []);

    return (
        <div className="App">
            <h1>Health Tracker Application</h1>
            {userData ? <Dashboard data={userData} /> : <p>Loading...</p>}
        </div>
    );
}

export default App
