import React from 'react';

const Popup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Login Form</h2>
        <div>
          <div>
            <label>
              Username:
              <input type="text" name="username" />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
          </div>
          <div>
            <button type="button">Submit</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Popup;

