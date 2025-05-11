import React, { useState } from 'react';
import './CampaignBuilder.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar'; // Import Navbar component

const defaultCondition = { field: 'spend', operator: '>', value: '' };

const CampaignBuilder = () => {
  const [conditions, setConditions] = useState([defaultCondition]);
  const [logic, setLogic] = useState('AND');
  const [previewSize, setPreviewSize] = useState(null);
  const navigate = useNavigate();

  const handleChange = (index, key, value) => {
    const updated = [...conditions];
    updated[index][key] = value;
    setConditions(updated);
  };

  const handleAddCondition = () => {
    setConditions([...conditions, { field: '', operator: '', value: '' }]);
  };

  const handlePreview = async () => {
    try {
      const res = await axios.post('/api/preview-segment', { conditions, logic });
      setPreviewSize(res.data.size);
    } catch (err) {
      console.error('Error fetching preview:', err);
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/api/create-campaign', { conditions, logic });
      navigate('/campaigns');
    } catch (err) {
      console.error('Error submitting campaign:', err);
    }
  };

  return (
    <div className="campaign-container">
      {/* Navbar will be placed at the top of the page */}
      <Navbar />

      <div className="content-container">
        <h2 className="campaign-title">Create New Campaign</h2>

        {/* Card for the conditions */}
        <div className="card">
          <h3>Rule Builder</h3>
          {conditions.map((c, i) => (
            <div className="rule-condition" key={i}>
              <select value={c.field} onChange={e => handleChange(i, 'field', e.target.value)}>
                <option value="">Select Field</option>
                <option value="spend">Spend</option>
                <option value="visits">Visits</option>
                <option value="inactiveDays">Inactive Days</option>
              </select>

              <select value={c.operator} onChange={e => handleChange(i, 'operator', e.target.value)}>
                <option value="">Operator</option>
                <option value=">">&gt;</option>
                <option value="<">&lt;</option>
                <option value=">=">&gt;=</option>
                <option value="<=">&lt;=</option>
                <option value="=">=</option>
              </select>

              <input
                type="text"
                placeholder="Value"
                value={c.value}
                onChange={e => handleChange(i, 'value', e.target.value)}
              />
            </div>
          ))}

          <div className="logic-selector">
            <label>Combine with:</label>
            <select value={logic} onChange={e => setLogic(e.target.value)}>
              <option value="AND">AND</option>
              <option value="OR">OR</option>
            </select>
          </div>

          <div className="actions">
            <button className="add-condition-btn" onClick={handleAddCondition}>+ Add Condition</button>
            <button className="preview-btn" onClick={handlePreview}>Preview Audience</button>
            <button className="save-btn" onClick={handleSubmit}>Save Campaign</button>
          </div>

          {previewSize !== null && <p className="preview">Estimated Audience: {previewSize}</p>}
        </div>
      </div>
    </div>
  );
};

export default CampaignBuilder;
