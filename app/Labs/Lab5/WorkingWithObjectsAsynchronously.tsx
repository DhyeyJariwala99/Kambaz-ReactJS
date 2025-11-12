"use client";
import { useState, useEffect } from "react";
import * as client from "./client";
import { FormControl } from "react-bootstrap";
export default function WorkingWithObjectsAsynchronously() {
const [assignment, setAssignment] = useState<any>({id: 1, title: "NodeJS Assignment", description: "Create a NodeJS server with ExpressJS", due: "2021-10-10", completed: false, score: 0});
const fetchAssignment = async () => {const assignment = await client.fetchAssignment(); setAssignment(assignment);};
const updateTitle = async (title: string) => {const updatedAssignment = await client.updateTitle(title); setAssignment(updatedAssignment);};
useEffect(() => {fetchAssignment();}, []);
return (<div id="wd-asynchronous-objects"><h3>Working with Objects Asynchronously</h3><h4>Assignment</h4><FormControl className="mb-2" value={assignment.title} onChange={(e) => setAssignment({...assignment, title: e.target.value})} /><FormControl as="textarea" rows={3} value={assignment.description} className="mb-2" onChange={(e) => setAssignment({...assignment, description: e.target.value})} /><FormControl type="date" className="mb-2" value={assignment.due} onChange={(e) => setAssignment({...assignment, due: e.target.value})} /><div className="form-check mb-2"><input className="form-check-input" type="checkbox" checked={assignment.completed} onChange={(e) => setAssignment({...assignment, completed: e.target.checked})} /><label className="form-check-label">Completed</label></div><button className="btn btn-primary me-2" onClick={() => updateTitle(assignment.title)}>Update Title</button><pre>{JSON.stringify(assignment, null, 2)}</pre><hr /></div>);
}