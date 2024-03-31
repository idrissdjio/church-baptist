import React, { useEffect } from 'react';

/**
 * DonateButton is a React component that renders a Tithe.ly donation button.
 * It dynamically loads the Tithe.ly donation script and initializes the widget
 * to allow users to make donations.
 */
const Donate = () => {
  useEffect(() => {
    // Dynamically create and append the Tithe.ly script to the document.
    // This script is necessary for initializing the Tithe.ly donation widget.
    const script = document.createElement('script');
    script.src = "https://tithe.ly/widget/v3/give.js?3"; // URL of the Tithe.ly donation script.
    script.async = true; // Load the script asynchronously.
    script.onload = () => {
      // Once the script is loaded, initialize the Tithe.ly widget.
      // This enables the donation functionality.
      window.create_tithely_widget();
    };

    document.body.appendChild(script); // Add the script to the document body.

    return () => {
      // Remove the script from the document body when the component unmounts.
      // This cleanup helps prevent memory leaks or duplication of the script.
      document.body.removeChild(script);
    };
  }, []); // The empty dependency array ensures the effect runs only once after the initial render.

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{
          color: '#2e2e2e', // Dark text color for readability.
          fontFamily: 'Georgia, serif', // Serif font for a traditional look.
          fontSize: '18px', // Font size for ease of reading.
          margin: '0 0 20px', // Margin to separate from the button.
          maxWidth: '600px', // Maximum width of the text block.
          marginLeft: 'auto', // Center the text block horizontally.
          marginRight: 'auto',
          padding: '10px', // Padding around the text.
        }}>
        We at East Side Baptist Church are profoundly grateful for your support and generosity.
        Your contributions empower us to continue our mission and serve our community with love and grace.
        Thank you for being a vital part of our church family.
      </p>
      <button
        className="tithely-give-btn"
        style={{
          backgroundColor: '#0C2D57', // Green background color.
          fontFamily: 'inherit', // Use the inherited font family.
          fontWeight: 'bold', // Bold font weight for emphasis.
          fontSize: '19px', // Font size for readability.
          padding: '15px 70px', // Padding for a larger clickable area.
          borderRadius: '4px', // Rounded corners.
          cursor: 'pointer', // Cursor indicates a clickable button.
          backgroundImage: 'none', // No background image.
          color: 'white', // White text color for contrast.
          textShadow: 'none', // No text shadow for clarity.
          border: 'none', // No border for a clean look.
          margin: 20,
        }}
        data-church-id="1317593" // Your church's unique Tithe.ly ID.
      >
        Donate
      </button>
    </div>
  );
};

export default Donate; // Export the component for use in other parts of the app.