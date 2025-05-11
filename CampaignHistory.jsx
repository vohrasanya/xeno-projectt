import React, { useState } from 'react';
import './CampaignHistory.css';
import Navbar from '../components/Navbar';// ✅ Import your Navbar

const CampaignHistory = () => {
  const [campaigns] = useState([
    {
      name: 'Visit',
      createdAt: '2025-05-12',
      status: 'Done',
      condition: '<10000',
    },
    {
      name: 'Spend',
      createdAt: '2025-05-12',
      status: 'Not Done',
      condition: '>2000',
    },
    {
      name: 'Inactive Day',
      createdAt: '2025-05-12',
      status: 'Done',
      condition: '=9000',
    },
  ]);

  return (
    <>
      <Navbar /> {/* ✅ Add Navbar at the top */}
      <div className="campaign-history-container">
        <h2 className="history-title">Campaign History</h2>

        <table className="campaign-history-table">
          <thead>
            <tr>
              <th>Campaign Name</th>
              <th>Creation Date</th>
              <th>Condition</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign, index) => (
              <tr key={index}>
                <td>{campaign.name}</td>
                <td>{new Date(campaign.createdAt).toLocaleDateString()}</td>
                <td>{campaign.condition}</td>
                <td>{campaign.status}</td>
                <td className="action-buttons">
                  <button className="view-btn">View</button>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CampaignHistory;
