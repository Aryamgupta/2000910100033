import React, { useState, useEffect } from 'react';
import { getTrainSchedule, registerServer } from './api'; 
import moment from 'moment';
import './App.css';

const TrainScheduleApp = () => {
  const [trainSchedule, setTrainSchedule] = useState([]);

  const fetchTrainSchedule = async () => {
    try {
      const data = await getTrainSchedule(); 
      setTrainSchedule(data);
    } catch (error) {
      console.error('Error fetching train schedule:', error);
    }
  };

  useEffect(() => {
    fetchTrainSchedule();
  }, []);

  const handleRegisterServer = async () => {
    try {
      const response = await registerServer(); 
      console.log(response);
      
    } catch (error) {
      console.error('Error registering server:', error);
     
    }
  };

  const renderTrainSchedule = () => {
    return trainSchedule.map((train) => (
      <tr key={train.id}>
        <td>{train.trainNumber}</td>
        <td>{moment(train.departureTime).format('HH:mm')}</td>
        <td>{moment(train.arrivalTime).format('HH:mm')}</td>
        <td>{train.source}</td>
        <td>{train.destination}</td>
      </tr>
    ));
  };

  return (
    <div className="train-schedule-app">
      <h1>Train Schedule</h1>
      <button onClick={handleRegisterServer}>Register Server</button>
      <table>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Source</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>{renderTrainSchedule()}</tbody>
      </table>
    </div>
  );
};

export default TrainScheduleApp;
