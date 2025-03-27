import React from 'react';

const Contact = () => {
  return (
    <div className="container text-white py-5">
    <h1 className="mb-4">Contact</h1>

     <div className="col-md-7 offset-">
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" />
        </div>
        <div className="mb-3 .col-sm- .col-md- .col-lg- .col-xl-">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea className="form-control" id="message" name="message"  rows={4}></textarea>
        </div>
        <button type="submit" className="btn tbn-light">Submit</button>
      </form>
    </div>
    </div>
      
  );
};

export default Contact;
