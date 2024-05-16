import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiLogout } from 'react-icons/ci';
import Modal from './Modal';
import './Styling/Dashboard.css';

const Dashboard: React.FC = () => {
  const [healthMetrics, setHealthMetrics] = useState({
    exercise: '',
    waterIntake: 0,
    healthIndex: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/healthmetrics')
      .then((response) => response.json())
      .then((data) => setHealthMetrics(data))
      .catch((error) => console.error('Fetching healthmetrics error:', error));
  }, []);

  const handleLogout = () => {
    navigate('/login');
  };

  const handleOpenModal = (type: string) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleSave = (data: any) => {
    console.log(`Saved data for ${modalType}:`, data);
    // Here you would send the data to the backend and update state accordingly
  };

  return (
    <div className="dashboard">
      <section className="header-container">
        <div className="icon"></div>
        <div>
          <h1>WellnessWatch</h1>
        </div>
      </section>
      <div className="logout-btn-container">
        <button className="logout-button" onClick={handleLogout}>
          Log ud <CiLogout id="logout-icon" />
        </button>
      </div>

      <div className="main-content">
        <section className="dashboard-container">
          <div className="intro-div">
            <p>Intro</p>
          </div>
          <div className="dash-info-div">
            <p>Health Metrics: {healthMetrics.healthIndex}</p>
            <p>Water Intake: {healthMetrics.waterIntake}</p>
            <p>Exercise: {healthMetrics.exercise}</p>
          </div>
        </section>
        <section className="dashboard-container">
          <div className="dashboard-options">
            <div className="dashboard-options-btns">
              <button className="options-btn" onClick={() => handleOpenModal('waterIntake')}>
                Daglig Vand Indtag
              </button>
              <button className="options-btn" onClick={() => handleOpenModal('goalSetting')}>
                Set Mål
              </button>
              <button className="options-btn" onClick={() => handleOpenModal('mail')}>
                Noget med mail
              </button>
            </div>
          </div>
          <div className="dashboard-mail">
            <p>Mail</p>
          </div>
        </section>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} />
    </div>
  );
};

export default Dashboard;
