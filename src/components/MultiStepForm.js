import React, { useState } from "react";
// import { Form, Button, ProgressBar } from "react-bootstrap";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <ProgressBar now={(step / 3) * 100} /> */}
      <div
        className="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow={(step / 3) * 100}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar" style={{ width: "0%" }}></div>
      </div>

      {step === 1 && (
        <div className="input-group" controlId="formStep1">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
      )}
      {step === 2 && (
        <div className="input-group" controlId="formStep2">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
      )}
      {step === 3 && (
        <div className="input-group" controlId="formStep3">
          <label>Message</label>
          <input
            className="form-control"
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
      )}
      <div className="d-flex justify-content-between">
        {step > 1 && (
          <button variant="secondary" onClick={handlePrevious}>
            Previous
          </button>
        )}
        {step < 3 ? (
          <button variant="primary" onClick={handleNext}>
            Next
          </button>
        ) : (
          <button variant="primary" type="submit">
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default MultiStepForm;
