import React from "react";
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="main-container">
      <div className="card w-75 mb-3">
        <div className="card-body">
          <h5 className="card-title">University Back-Office Interface</h5>
          <p className="card-text">
            Welcome!! This interface allows you to manage
            updates for the university website's various sections. Here's what
            you can do:
          </p>

          <div className="card-header card-title">
            1. Notice Board
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Upload Notices:</h5>
                  <p className="card-text">
                    Publish announcements, updates, or important information for
                    students and faculty. Select file type (PDF, Text, Image).
                    Add a clear and concise title for your notice. Provide a
                    brief description summarizing the content. Choose an
                    appropriate category (Academics, Events, etc.). Click
                    "Submit" to upload the notice.
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">View Submitted Notices:</h5>
                  <p className="card-text">
                    See a list of all notices you've uploaded. Edit or delete
                    existing notices before they're approved.
                  </p>
                
                </div>
              </div>
            </div>
          </div>

          <div className="card-header card-title">
            2. Upcoming Events
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Create Event:</h5>
                  <p className="card-text sub">
                    Announce upcoming events relevant to your department or the
                    university. Enter the event title, date, and time. Specify
                    the location (optional). Provide a brief description of the
                    event. Click "Submit" to create the event.
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title sub">Manage Events:</h5>
                  <p className="card-text">
                    View a list of all upcoming events you've created. Edit
                    event details (title, date, time, location, description) for
                    any event. Delete events that are no longer relevant.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
