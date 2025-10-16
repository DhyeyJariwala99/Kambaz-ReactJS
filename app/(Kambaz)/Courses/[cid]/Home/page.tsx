import Modules from "../Modules/page";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home" className="d-flex">
      {/* Modules on left - takes remaining space */}
      <div className="flex-fill me-3">
        <Modules />
      </div>
      
      {/* Course Status on right - hides on small screens */}
      <div className="d-none d-xl-block">
        <CourseStatus />
      </div>
    </div>
  );
}