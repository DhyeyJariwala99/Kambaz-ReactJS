import Modules from "../Modules/page";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home">
      {/* Buttons at the top */}
      <div style={{ marginBottom: '20px' }}>
        <button>Collapse All</button>
        <button>View Progress</button>
        <button>Publish All</button>
        <button>+ Module</button>
      </div>
      
      <table>
        <tbody>
          <tr>
            <td valign="top" width="70%"> 
              <Modules /> 
            </td>
            <td valign="top"> 
              <CourseStatus /> 
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}