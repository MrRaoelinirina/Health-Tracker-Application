import React from 'react';

const ActivityLog = ({ activities }) => {
    return (
        <div>
            <h3>Activity Log</h3>
            {activities.map(activity => (
                <div key={activity._id}>
                    <p>Date: {new Date(activity.date).toLocaleDateString()}</p>
                    <p>Type: {activity.type}</p>
                    <p>Duration: {activity.duration} minutes</p>
                </div>
            ))}
        </div>
    );
};

export default ActivityLog
