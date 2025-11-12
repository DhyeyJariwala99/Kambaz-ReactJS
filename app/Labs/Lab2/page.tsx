
"use client";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - CSS</h2>
      <h3>Cascading Style Sheets (CSS)</h3>

      {/* ID Selectors */}
      <div id="wd-css-id-selectors">
        <h3>ID Selectors</h3>
        <p id="wd-css-id-selector-01" 
           style={{ 
             backgroundColor: 'red', 
             color: 'white', 
             padding: '10px' 
           }}>
          White on red paragraph
        </p>
        <p id="wd-css-id-selector-02" 
           style={{ 
             backgroundColor: 'yellow', 
             color: 'black', 
             padding: '10px' 
           }}>
          Black on yellow paragraph
        </p>
      </div>

      {/* Class Selectors */}
      <div id="wd-css-class-selectors">
        <h3>Class Selectors</h3>
        <p className="wd-bg-yellow wd-fg-blue" 
           style={{ 
             backgroundColor: 'yellow', 
             color: 'blue', 
             padding: '10px' 
           }}>
          Blue on yellow paragraph
        </p>
        <h4 className="wd-bg-yellow wd-fg-blue" 
            style={{ 
              backgroundColor: 'yellow', 
              color: 'blue', 
              padding: '10px' 
            }}>
          Blue on yellow heading
        </h4>
      </div>

      {/* Document Structure Styling */}
      <div id="wd-css-document-structure">
        <h3>Document Structure</h3>
        <div style={{ 
          backgroundColor: 'red', 
          color: 'white', 
          padding: '20px' 
        }}>
          <p>White on red DIV</p>
          <div style={{ 
            backgroundColor: 'yellow', 
            color: 'blue', 
            padding: '10px',
            margin: '10px 0'
          }}>
            <span>Blue on yellow small span within the DIV</span>
          </div>
        </div>
      </div>

      {/* Foreground Color */}
      <div id="wd-css-colors">
        <h3>Foreground Color</h3>
        <h5 style={{ color: 'blue', backgroundColor: 'white', padding: '10px' }}>
          Blue on white heading
        </h5>
        <p style={{ color: 'red', backgroundColor: 'white', padding: '10px' }}>
          Red on white text
        </p>
        <p style={{ color: 'green', backgroundColor: 'white', padding: '10px' }}>
          Green on white text
        </p>
      </div>

      {/* Background Color */}
      <div id="wd-css-background-colors">
        <h3>Background Color</h3>
        <h5 style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>
          White on blue heading
        </h5>
        <p style={{ backgroundColor: 'red', color: 'black', padding: '10px' }}>
          Black on red paragraph
        </p>
        <p style={{ backgroundColor: 'green', color: 'white', padding: '10px' }}>
          White on green span
        </p>
      </div>

      {/* Borders */}
      <div id="wd-css-borders">
        <h3>Borders</h3>
        <div style={{ 
          border: '10px solid red', 
          padding: '20px', 
          marginBottom: '10px' 
        }}>
          Fat red border
        </div>
        <div style={{ 
          border: '2px dashed blue', 
          padding: '20px' 
        }}>
          Thin blue dashed border
        </div>
      </div>

      {/* Padding */}
      <div id="wd-css-padding">
        <h3>Padding</h3>
        <div style={{ 
          backgroundColor: 'yellow', 
          padding: '20px 10px', 
          border: '1px solid black',
          marginBottom: '10px'
        }}>
          Padding 20px top and bottom, 10px left and right
        </div>
        <div style={{ 
          backgroundColor: 'lightblue', 
          padding: '30px', 
          border: '1px solid black'
        }}>
          Padding 30px all around
        </div>
      </div>

      {/* Margins */}
      <div id="wd-css-margins">
        <h3>Margins</h3>
        <div style={{ 
          border: '2px solid red', 
          backgroundColor: 'yellow', 
          marginTop: '20px',
          marginLeft: '50px',
          padding: '20px' 
        }}>
          Fat red border with yellow background and big padding above and left
        </div>
        <div style={{ 
          border: '2px solid blue', 
          backgroundColor: 'yellow', 
          marginBottom: '20px', 
          padding: '20px' 
        }}>
          Fat blue border with yellow background and big padding at bottom
        </div>
        <div style={{ 
          border: '2px solid yellow', 
          backgroundColor: 'blue', 
          color: 'white',
          margin: '20px', 
          padding: '20px' 
        }}>
          Fat yellow border with blue background and big padding all around
        </div>
        <div style={{ 
          border: '2px solid red', 
          backgroundColor: 'yellow', 
          marginBottom: '20px', 
          padding: '10px' 
        }}>
          Fat red border with yellow background and margin at bottom
        </div>
        <div style={{ 
          border: '2px solid blue', 
          backgroundColor: 'yellow', 
          width: '50%',
          margin: '0 auto', 
          padding: '20px' 
        }}>
          Fat blue border with yellow background and centered because margins on both sides
        </div>
        <div style={{ 
          border: '2px solid yellow', 
          backgroundColor: 'blue', 
          color: 'white',
          margin: '30px', 
          padding: '20px' 
        }}>
          Fat yellow border with blue background and big margins all around
        </div>
      </div>

      {/* Corners */}
      <div id="wd-css-border-radius">
        <h3>Rounded Corners</h3>
        <div style={{ 
          border: '2px solid blue', 
          borderRadius: '20px 20px 0 0', 
          padding: '20px',
          marginBottom: '10px'
        }}>
          Div with rounded corners at top left and right
        </div>
        <div style={{ 
          border: '2px solid green', 
          borderRadius: '0 0 20px 20px', 
          padding: '20px',
          marginBottom: '10px'
        }}>
          Div with rounded corners at bottom left and right
        </div>
        <div style={{ 
          border: '2px solid red', 
          borderRadius: '20px', 
          padding: '20px',
          marginBottom: '10px'
        }}>
          Div with all rounded corners
        </div>
        <div style={{ 
          border: '2px solid purple', 
          borderRadius: '20px 0 20px 20px', 
          padding: '20px' 
        }}>
          Div with rounded corners all around except top right
        </div>
      </div>

      {/* Dimensions */}
      <div id="wd-css-dimensions">
        <h3>Dimensions</h3>
        <div style={{ 
          width: '100%', 
          height: '100px', 
          backgroundColor: 'yellow',
          marginBottom: '10px'
        }}>
          Yellow DIV longer than its taller
        </div>
        <div style={{ 
          width: '100px', 
          height: '200px', 
          backgroundColor: 'blue',
          color: 'white',
          marginBottom: '10px'
        }}>
          Blue DIV taller than its longer
        </div>
        <div style={{ 
          width: '200px', 
          height: '200px', 
          backgroundColor: 'red',
          color: 'white'
        }}>
          Red DIV height same as width
        </div>
      </div>

      {/* Positions */}
      <div id="wd-css-position-relative">
        <h3>Relative Position</h3>
        <div style={{ 
          position: 'relative',
          height: '300px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc'
        }}>
          <div style={{ 
            position: 'relative',
            top: '30px',
            left: '50px',
            backgroundColor: 'yellow',
            padding: '10px',
            width: '300px'
          }}>
            Yellow DIV with text nudged down and right
          </div>
          <div style={{ 
            position: 'relative',
            top: '10px',
            left: '30px',
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px',
            width: '200px'
          }}>
            Blue DIV moved up and right a bit
          </div>
        </div>
      </div>

      {/* Absolute Position */}
      <div id="wd-css-position-absolute">
        <h3>Absolute Position</h3>
        <div style={{ 
          position: 'relative',
          width: '500px',
          height: '400px',
          border: '2px solid black',
          marginBottom: '20px'
        }}>
          <div style={{ 
            position: 'absolute',
            top: '50px',
            left: '100px',
            width: '100px',
            height: '150px',
            backgroundColor: 'red',
            color: 'white',
            padding: '10px'
          }}>
            Portrait
          </div>
          <div style={{ 
            position: 'absolute',
            top: '200px',
            left: '50px',
            width: '150px',
            height: '100px',
            backgroundColor: 'green',
            color: 'white',
            padding: '10px'
          }}>
            Landscape
          </div>
          <div style={{ 
            position: 'absolute',
            top: '100px',
            left: '300px',
            width: '120px',
            height: '120px',
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px'
          }}>
            Square
          </div>
        </div>
      </div>

      {/* Fixed Position */}
      <div id="wd-css-position-fixed">
        <h3>Fixed Position</h3>
        <div style={{ 
          position: 'fixed',
          bottom: '50px',
          right: '50px',
          width: '200px',
          backgroundColor: 'blue',
          color: 'white',
          padding: '15px',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          zIndex: 1000
        }}>
          Blue Fixed position rectangle doesnt scroll with rest of page
        </div>
      </div>

      {/* Z-Index */}
      <div id="wd-css-zindex">
        <h3>Z Index</h3>
        <div style={{ position: 'relative', height: '300px' }}>
          <div style={{ 
            position: 'absolute',
            top: '50px',
            left: '50px',
            width: '200px',
            height: '150px',
            backgroundColor: 'lightblue',
            border: '2px solid blue',
            padding: '10px',
            zIndex: 3
          }}>
            Blue Landscape rectangle renders above other two
          </div>
          <div style={{ 
            position: 'absolute',
            top: '100px',
            left: '100px',
            width: '150px',
            height: '200px',
            backgroundColor: 'lightcoral',
            border: '2px solid red',
            padding: '10px',
            zIndex: 1
          }}>
            Red Portrait
          </div>
          <div style={{ 
            position: 'absolute',
            top: '150px',
            left: '200px',
            width: '180px',
            height: '180px',
            backgroundColor: 'lightyellow',
            border: '2px solid yellow',
            padding: '10px',
            zIndex: 2
          }}>
            Yellow Square
          </div>
        </div>
      </div>

      {/* Float */}
      <div id="wd-css-float" style={{ clear: 'both', overflow: 'auto', marginTop: '350px' }}>
        <h3>Float</h3>
        <div style={{ width: '400px', overflow: 'auto' }}>
          <div style={{ 
            float: 'left',
            width: '100px',
            height: '100px',
            backgroundColor: 'red',
            marginRight: '10px'
          }}>
            Red
          </div>
          <div style={{ 
            float: 'left',
            width: '100px',
            height: '100px',
            backgroundColor: 'blue',
            color: 'white',
            marginRight: '10px'
          }}>
            Blue
          </div>
          <div style={{ 
            float: 'left',
            width: '100px',
            height: '100px',
            backgroundColor: 'green',
            color: 'white'
          }}>
            Green
          </div>
        </div>
        <p style={{ clear: 'both', paddingTop: '10px' }}>
          Three rectangles laid out horizontally
        </p>
        
        <div style={{ width: '400px', overflow: 'auto', marginTop: '20px' }}>
          <img 
            src="/images/teslabot.jpg" 
            width={150}
            style={{ float: 'right', marginLeft: '10px' }}
            alt="Tesla Bot"
          />
          <p>
            Image on the right. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            The text wraps around the floated image. Suspendisse potenti. Integer bibendum 
            nisi vel augue congue, et tincidunt urna malesuada.
          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <div id="wd-css-grid-layout" style={{ clear: 'both', marginTop: '20px' }}>
        <h3>Grid layout</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '10px',
          marginBottom: '20px'
        }}>
          <div style={{ backgroundColor: '#dc3545', color: 'white', padding: '20px' }}>
            Left
          </div>
          <div style={{ backgroundColor: '#0dcaf0', padding: '20px' }}>
            Middle
          </div>
          <div style={{ backgroundColor: '#198754', color: 'white', padding: '20px' }}>
            Right
          </div>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1fr',
          gap: '10px',
          marginBottom: '20px'
        }}>
          <div style={{ backgroundColor: '#ffc107', padding: '20px' }}>
            Main content (2/3)
          </div>
          <div style={{ backgroundColor: '#6c757d', color: 'white', padding: '20px' }}>
            Sidebar (1/3)
          </div>
        </div>
      </div>

      {/* Flexbox */}
      <div id="wd-css-flex">
        <h3>Flex</h3>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <div style={{ 
            flex: 1, 
            backgroundColor: '#0d6efd', 
            color: 'white', 
            padding: '20px',
            textAlign: 'center'
          }}>
            Column 1
          </div>
          <div style={{ 
            flex: 1, 
            backgroundColor: '#6610f2', 
            color: 'white', 
            padding: '20px',
            textAlign: 'center'
          }}>
            Column 2
          </div>
          <div style={{ 
            flex: 1, 
            backgroundColor: '#6f42c1', 
            color: 'white', 
            padding: '20px',
            textAlign: 'center'
          }}>
            Column 3
          </div>
        </div>
      </div>

      {/* React Icons */}
      <div id="wd-css-react-icons">
        <h3>React Icons Sample</h3>
        <div style={{ fontSize: '40px', display: 'flex', gap: '20px' }}>
          <span>🏠</span>
          <span>📚</span>
          <span>✉️</span>
           <span>👤</span>
          <span>⚙️</span>
          <span>📅</span>
        </div>
      </div>

      {/* Bootstrap Containers */}
      <div id="wd-css-bootstrap-containers">
        <h2>Bootstrap Containers</h2>
        <div className="container" style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px',
          marginBottom: '10px',
          border: '1px solid #dee2e6'
        }}>
          <h3>Thin padding all around - Container</h3>
        </div>
      </div>

      {/* Bootstrap Grid */}
      <div id="wd-css-bootstrap-grid">
        <h2>Bootstrap Grids</h2>
        <div className="row" style={{ marginBottom: '20px' }}>
          <div className="col" style={{ 
            backgroundColor: '#0d6efd', 
            color: 'white', 
            padding: '20px',
            border: '1px solid white'
          }}>
            Left Half
          </div>
          <div className="col" style={{ 
            backgroundColor: '#198754', 
            color: 'white', 
            padding: '20px',
            border: '1px solid white'
          }}>
            Right Half
          </div>
        </div>
        
        <div className="row" style={{ marginBottom: '20px' }}>
          <div className="col-4" style={{ 
            backgroundColor: '#dc3545', 
            color: 'white', 
            padding: '20px',
            border: '1px solid white'
          }}>
            One Third
          </div>
          <div className="col-8" style={{ 
            backgroundColor: '#ffc107', 
            padding: '20px',
            border: '1px solid white'
          }}>
            Two Thirds
          </div>
        </div>
        
        <div className="row">
          <div className="col-2" style={{ 
            backgroundColor: '#6c757d', 
            color: 'white', 
            padding: '20px',
            border: '1px solid white'
          }}>
            Sidebar
          </div>
          <div className="col-8" style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '20px',
            border: '1px solid #dee2e6'
          }}>
            Main Content
          </div>
          <div className="col-2" style={{ 
            backgroundColor: '#6c757d', 
            color: 'white', 
            padding: '20px',
            border: '1px solid white'
          }}>
            Sidebar
          </div>
        </div>
      </div>

      {/* Bootstrap Responsive */}
      <div id="wd-css-bootstrap-responsive">
        <h2>Bootstrap Responsive Grids</h2>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3" style={{ 
            backgroundColor: '#0dcaf0', 
            padding: '20px',
            marginBottom: '10px',
            border: '1px solid white'
          }}>
            Column A
          </div>
          <div className="col-12 col-md-6 col-lg-3" style={{ 
            backgroundColor: '#0d6efd', 
            color: 'white',
            padding: '20px',
            marginBottom: '10px',
            border: '1px solid white'
          }}>
            Column B
          </div>
          <div className="col-12 col-md-6 col-lg-3" style={{ 
            backgroundColor: '#6610f2', 
            color: 'white',
            padding: '20px',
            marginBottom: '10px',
            border: '1px solid white'
          }}>
            Column C
          </div>
          <div className="col-12 col-md-6 col-lg-3" style={{ 
            backgroundColor: '#6f42c1', 
            color: 'white',
            padding: '20px',
            marginBottom: '10px',
            border: '1px solid white'
          }}>
            Column D
          </div>
        </div>
        
        <div className="d-block d-sm-none p-3 bg-warning">
          Visible only on extra small screens (phones)
        </div>
        <div className="d-none d-sm-block d-md-none p-3 bg-info text-white">
          Visible only on small screens (tablets)
        </div>
        <div className="d-none d-md-block p-3 bg-success text-white">
          Visible on medium screens and larger (desktops)
        </div>
      </div>

      {/* Bootstrap Tables */}
      <div id="wd-css-bootstrap-tables">
        <h2>Bootstrap Tables</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Q1</td><td>HTML</td><td>9/13/25</td><td>85</td></tr>
            <tr><td>Q2</td><td>CSS</td><td>9/10/25</td><td>99</td></tr>
            <tr><td>Q3</td><td>JavaScript</td><td>9/17/25</td><td>95</td></tr>
          </tbody>
        </table>
        
        <h3>Responsive Table</h3>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>Very Long Column Name 1</th>
                <th>Very Long Column Name 2</th>
                <th>Very Long Column Name 3</th>
                <th>Very Long Column Name 4</th>
                <th>Very Long Column Name 5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
                <td>Data 4</td>
                <td>Data 5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Bootstrap Lists */}
      <div id="wd-css-bootstrap-lists">
        <h2>Bootstrap Lists</h2>
        <h3>Favorite Movies</h3>
        <ul className="list-group">
          <li className="list-group-item active">James Bond</li>
          <li className="list-group-item">The Matrix</li>
          <li className="list-group-item">Vikings</li>
          <li className="list-group-item">The Dark Knight</li>
        </ul>
        
        <h3 style={{ marginTop: '20px' }}>Favorite Books</h3>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action">
            Game of Thrones
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Chronicles of Narnia
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Stranger Things
          </a>
        </div>
      </div>

      {/* Bootstrap Forms - FIXED: Remove 'selected' attribute */}
      <div id="wd-css-bootstrap-forms">
        <h2>Bootstrap Forms</h2>
        <form style={{ maxWidth: '500px' }}>
          <div className="mb-3">
            <label htmlFor="email-input" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="email-input" 
              placeholder="name@example.com"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="textarea-input" className="form-label">Example textarea</label>
            <textarea 
              className="form-control" 
              id="textarea-input" 
              rows={3}
              placeholder="Enter your text here..."
            />
          </div>
          
          {/* FIXED: Use defaultValue on select, not selected on option */}
          <div className="mb-3">
            <label htmlFor="select-dropdown" className="form-label">Dropdown</label>
            <select className="form-select" id="select-dropdown" defaultValue="">
              <option value="">Choose an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
          
          <div className="mb-3 form-check form-switch">
            <input className="form-check-input" type="checkbox" id="switch1" />
            <label className="form-check-label" htmlFor="switch1">
              Enable notifications
            </label>
          </div>
          
          <div className="mb-3">
            <label htmlFor="range-slider" className="form-label">Range Slider</label>
            <input type="range" className="form-range" id="range-slider" />
          </div>
          
          <button type="submit" className="btn btn-primary me-2">Submit</button>
          <button type="button" className="btn btn-secondary">Cancel</button>
        </form>
      </div>

      {/* Bootstrap Form Addons */}
      <div id="wd-css-bootstrap-addons" style={{ marginTop: '30px' }}>
        <h2>Bootstrap Form Add-ons</h2>
        <div style={{ maxWidth: '500px' }}>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input type="text" className="form-control" placeholder="Username" />
          </div>
          
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Amount" />
            <span className="input-group-text">.00</span>
          </div>
          
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input type="text" className="form-control" />
            <span className="input-group-text">.00</span>
          </div>
        </div>
      </div>

      {/* Bootstrap Responsive Forms */}
      <div id="wd-css-responsive-forms" style={{ marginTop: '30px' }}>
        <h2>Responsive Forms</h2>
        <form style={{ maxWidth: '800px' }}>
          <div className="row mb-3">
            <div className="col-12 col-md-6">
              <label className="form-label">First Name</label>
              <input type="text" placeholder= 'first' className="form-control" />
            </div>
            <div className="col-12 col-md-6">
              <label className="form-label">Last Name</label>
              <input type="text" placeholder= 'last' className="form-control" />
            </div>
          </div>
          
          <div className="row mb-3">
            <div className="col-12">
              <label className="form-label">Email</label>
              <input type="email" placeholder= '@gmail.com' className="form-control" />
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

      {/* Bootstrap Tabs */}
      <div id="wd-css-bootstrap-tabs" style={{ marginTop: '30px' }}>
        <h2>Bootstrap Tabs</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Another Link</a>
          </li>
        </ul>
        <div style={{ padding: '20px', border: '1px solid #dee2e6', borderTop: 'none' }}>
          <p>Tab content goes here</p>
        </div>
      </div>

      {/* Bootstrap Pills */}
      <div id="wd-css-bootstrap-pills" style={{ marginTop: '30px' }}>
        <h2>Bootstrap Pills - Navigation</h2>
        <ul className="nav nav-pills mb-3">
          <li className="nav-item">
            <a className="nav-link active" href="/Labs">Labs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Labs/Lab1">Lab 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Labs/Lab2">Lab 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Kambas</a>
          </li>
        </ul>
        
        <h3>Link to GitHub Repository</h3>
        <a href="https://github.com/DhyeyJariwala99/Kambaz-ReactJS" 
           className="btn btn-dark"
           target="_blank"
           rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>

      {/* Bootstrap Cards */}
      <div id="wd-css-bootstrap-cards" style={{ marginTop: '30px' }}>
        <h2>Bootstrap Cards</h2>
        <div className="card" style={{ width: '18rem' }}>
          <img 
            src="/images/teslabot.jpg" 
            className="card-img-top" 
            alt="Starship"
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <div className="card-body">
            <h5 className="card-title">Stacking Starship Card</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the cards content.
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  );
}