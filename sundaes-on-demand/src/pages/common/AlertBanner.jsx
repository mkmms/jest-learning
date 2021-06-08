import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertBanner = ({ message, variant }) => {
  const alertMessage = message || "An error occured";
  const alertVariant = variant || "danger";
  return (
    <div>
      <Alert variant={alertVariant} style={{ backgroundColor: "red" }}>
        {alertMessage}
      </Alert>
    </div>
  );
};

export default AlertBanner;
