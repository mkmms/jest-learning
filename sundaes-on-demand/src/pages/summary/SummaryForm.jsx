import React, { useState } from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const SummaryForm = () => {
  const [disabled, setDisabled] = useState(true);

  const popover = () => {
    return (
      <Popover id="popover-basic">
        <Popover.Content>here is the content</Popover.Content>
      </Popover>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-3 col-md-3">
          <input
            type="checkbox"
            id="terms"
            onClick={(e) => setDisabled(!e.target.checked)}
          />
          <label htmlFor="terms">
            I accept the
            <OverlayTrigger placement="right" overlay={popover}>
              <span>terms and conditions</span>
            </OverlayTrigger>
          </label>
          <button disabled={disabled}>Confirm Order</button>
        </div>
      </div>
    </div>
  );
};

export default SummaryForm;
