export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container">
      <div className="row">
        <div className="col-8">
          <div className="mb-3">
            <label htmlFor="wd-name" className="form-label fw-bold">Assignment Name</label>
            <input id="wd-name" defaultValue="A1 - ENV + HTML" className="form-control" />
          </div>
          
          <div className="mb-3">
            <label htmlFor="wd-description" className="form-label fw-bold">Assignment Description</label>
            <textarea 
              id="wd-description"
              rows={10}
              className="form-control"
              defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link to the Kambaz application, Links to all relevant source code repositories. The Kambaz application should include a link to navigate back to the landing page."
            />
          </div>
        </div>
        
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-4">
                  <label htmlFor="wd-points" className="form-label fw-bold">Points</label>
                </div>
                <div className="col-8">
                  <input id="wd-points" type="number" defaultValue="100" className="form-control" />
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-4">
                  <label htmlFor="wd-group" className="form-label fw-bold">Assignment Group</label>
                </div>
                <div className="col-8">
                  <select id="wd-group" defaultValue="ASSIGNMENTS" className="form-select">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="EXAMS">EXAMS</option>
                    <option value="PROJECT">PROJECT</option>
                  </select>
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-4">
                  <label htmlFor="wd-display-grade-as" className="form-label fw-bold">Display Grade as</label>
                </div>
                <div className="col-8">
                  <select id="wd-display-grade-as" defaultValue="Percentage" className="form-select">
                    <option value="Percentage">Percentage</option>
                    <option value="Points">Points</option>
                    <option value="Complete/Incomplete">Complete/Incomplete</option>
                  </select>
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-4">
                  <label htmlFor="wd-submission-type" className="form-label fw-bold">Submission Type</label>
                </div>
                <div className="col-8">
                  <select id="wd-submission-type" defaultValue="Online" className="form-select">
                    <option value="Online">Online</option>
                    <option value="Paper">Paper</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <h6 className="fw-bold">Online Entry Options</h6>
                <div className="form-check">
                  <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                  <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-website-url" defaultChecked className="form-check-input" />
                  <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                  <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                  <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                  <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="wd-assign-to" className="form-label fw-bold">Assign to</label>
                <input id="wd-assign-to" defaultValue="Everyone" className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
                <input type="date" id="wd-due-date" defaultValue="2024-05-13" className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                <input type="date" id="wd-available-from" defaultValue="2024-05-06" className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
                <input type="date" id="wd-available-until" defaultValue="2024-05-20" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <hr />
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-secondary me-2">Cancel</button>
        <button type="button" className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
