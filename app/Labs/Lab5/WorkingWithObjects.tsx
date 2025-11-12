"use client";
import { useState } from "react";
import { FormControl } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
const [assignment, setAssignment] = useState({id: 1, title: "NodeJS Assignment", description: "Create a NodeJS server with ExpressJS", due: "2021-10-10", completed: false, score: 0});
const [module, setModule] = useState({id: 1, name: "NodeJS Module", description: "Learn NodeJS basics", course: "Web Development"});
const ASSIGNMENT_API_URL = HTTP_SERVER + "/lab5/assignment";
const MODULE_API_URL = HTTP_SERVER + "/lab5/module";
return (<div id="wd-working-with-objects"><h3>Working With Objects</h3><h4>Retrieving Objects</h4><a id="wd-retrieve-assignments" className="btn btn-primary mb-2" href={ASSIGNMENT_API_URL} target="_blank">Get Assignment</a><hr /><h4>Retrieving Properties</h4><a id="wd-retrieve-assignment-title" className="btn btn-primary mb-2" href={ASSIGNMENT_API_URL + "/title"} target="_blank">Get Title</a><hr /><h4>Modifying Properties</h4><a id="wd-update-assignment-title" className="btn btn-primary float-end" href={ASSIGNMENT_API_URL + "/title/" + assignment.title} target="_blank">Update Title</a><FormControl className="w-75 mb-2" id="wd-assignment-title" value={assignment.title} onChange={(e) => setAssignment({...assignment, title: e.target.value})} /><hr /><h4>Working with Module Object</h4><a id="wd-retrieve-module" className="btn btn-primary me-2 mb-2" href={MODULE_API_URL} target="_blank">Get Module</a><a id="wd-retrieve-module-name" className="btn btn-primary mb-2" href={MODULE_API_URL + "/name"} target="_blank">Get Module Name</a><hr /><a id="wd-update-module-name" className="btn btn-primary float-end" href={MODULE_API_URL + "/name/" + module.name} target="_blank">Update Module Name</a><FormControl className="w-75 mb-2" value={module.name} onChange={(e) => setModule({...module, name: e.target.value})} /><hr /></div>);
}