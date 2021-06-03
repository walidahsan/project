import React from 'react';
import { useSelector } from 'react-redux';

export const Alert = () =>
  useSelector((state) =>
    state.AlertState.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.alertType} text-danger`}>
        {alert.msg}
      </div>
    ))
  );
