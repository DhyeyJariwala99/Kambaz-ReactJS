"use client";
import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import HttpClient from "./HttpClient";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function Lab5() {
  return (
    <div id="wd-lab5" className="container">
      <h2>Lab 5 - Node.js Integration</h2>
      
      <div className="list-group mb-3">
        <a 
          href={`${HTTP_SERVER}/lab5/welcome`}
          className="list-group-item list-group-item-action"
          target="_blank"
        >
          Welcome
        </a>
      </div>
      
      <EnvironmentVariables />
      <PathParameters />
      <QueryParameters />
      <WorkingWithObjects />
      <WorkingWithArrays />
      <HttpClient />
      <WorkingWithObjectsAsynchronously />
      <WorkingWithArraysAsynchronously />
    </div>
  );
}