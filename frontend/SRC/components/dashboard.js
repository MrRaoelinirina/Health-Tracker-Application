import React from 'react';
import ActivityLog from './ActivityLog';
import SleepTracker from './SleepTracker';
import DietPlan from './DietPlan';

const Dashboard = ({ data }) => {
    return (
        <div>
            <h2>Dashboard</h2>
            <ActivityLog activities={data.activities} />
            <SleepTracker sleep={data.sleep} />
            <DietPlan diet={data.diet} />
        </div>
    );
};

export default Dashboard
