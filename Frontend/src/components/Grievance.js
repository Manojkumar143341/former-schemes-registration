import React, { useState } from "react";
import axiosInstance from "../services/schemeService";

const Grievance = () => {
  const [complaint, setComplaint] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const submitGrievance = async () => {
    if (!complaint.trim()) {
      setMessage({ type: "error", text: "Complaint cannot be empty" });
      return;
    }

    setLoading(true);
    try {
      await axiosInstance.post("/grievances", { complaint });
      setMessage({ type: "success", text: "Grievance submitted successfully" });
      setComplaint("");
    } catch (error) {
      setMessage({ type: "error", text: "Error submitting grievance" });
    }
    setLoading(false);
  };

  return (
    <div className="grievance-container">
      <h2>Submit a Grievance</h2>

      {message && <p className={message.type === "error" ? "error-msg" : "success-msg"}>{message.text}</p>}

      <textarea
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
        placeholder="Describe your complaint"
        rows="4"
        required
      />

      <button onClick={submitGrievance} disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
};

export default Grievance;
