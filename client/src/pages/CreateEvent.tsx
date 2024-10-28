import React, { useState } from "react"; // Import useState for state management
import "../App.css";

function CreateEvent() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    time: "",
    participantLimit: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form className="container" onSubmit={handleSubmit}> {/* Wrap in a form element */}
      <div className="image-container"> {/* Image upload section */}
        <label htmlFor="coverImage" className="text">
          Click to upload cover image...
        </label>
        <input
          type="file"
          id="coverImage" // Ensure the id matches the label's htmlFor
          className="file-input" // Add a class for styling the file input if needed
        />
      </div>

      <div className="form-group"> {/* Grouping form fields for better styling */}
        <label htmlFor="title" className="text">Title</label>
        <input
          type="text"
          name="title"
          id="title" // Add id for better accessibility
          placeholder="Write title here..."
          className="input-field"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description" className="text">Description</label>
        <textarea
          name="description"
          id="description" // Add id for better accessibility
          placeholder="Write description here..."
          className="input-field"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="location" className="text">Location</label>
        <input
          type="text"
          name="location"
          id="location" // Add id for better accessibility
          placeholder="Find Location"
          className="input-field"
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="time" className="text">Time</label>
        <input
          type="datetime-local"
          name="time"
          id="time" // Add id for better accessibility
          className="input-field"
          value={formData.time}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="participantLimit" className="text">Participant Limit</label>
        <input
          type="number"
          name="participantLimit"
          id="participantLimit" // Add id for better accessibility
          placeholder="Enter limit..."
          className="input-field"
          value={formData.participantLimit}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="price" className="text">Price (leave empty if free)</label>
        <input
          type="text"
          name="price"
          id="price" // Add id for better accessibility
          placeholder="Enter price"
          className="input-field"
          value={formData.price}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="createEventButton"> 
        Create event
      </button>
    </form>
  );
}

export default CreateEvent;