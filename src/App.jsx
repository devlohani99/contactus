import React, { useState } from 'react';
import styles from './styles';

const App = () => {
  const [isSubmitHovered, setSubmitHovered] = useState(false);

  return (
    <div className="form-container" style={styles.container}>
      <form style={styles.form}>
        <h2 style={styles.header}>Sign up</h2>

        <label style={styles.label}>Full name</label>
        <input type="text" placeholder="Enter your name" style={styles.input} />

        <label style={styles.label}>Phone number</label>
        <input type="" placeholder="xxxxxxxxxx" style={styles.input} />

        <label style={styles.label}>Email ID</label>
        <input type="text" placeholder="your@email.com" style={styles.input} />

        <label style={styles.label}>Enter your query</label>
        <textarea placeholder="" style={{ ...styles.input, height: '100px' }} />

        <div style={styles.checkboxContainer}>
          <input
            type="submit"
            id="updates"
            style={{ ...styles.checkbox, ...styles.submitButton, ...(isSubmitHovered ? styles.submitButtonHover : {}) }}
            onMouseEnter={() => setSubmitHovered(true)}
            onMouseLeave={() => setSubmitHovered(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default App;
