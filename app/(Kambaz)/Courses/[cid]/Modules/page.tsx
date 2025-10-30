"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { addModule, deleteModule, updateModule, editModule } from "./reducer";
import { v4 as uuidv4 } from "uuid";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const createModule = () => {
    const newModule = {
      _id: uuidv4(),
      name: moduleName,
      course: cid,
      lessons: [],
      editing: false,
    };
    dispatch(addModule(newModule));
    setModuleName("");
  };

  const removeModule = (moduleId: string) => {
    dispatch(deleteModule(moduleId));
  };

  const editModuleName = (moduleId: string) => {
    dispatch(editModule(moduleId));
  };

  const saveModule = (module: any) => {
    dispatch(updateModule({ ...module, editing: false }));
  };

  return (
    <div className="wd-modules">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={createModule}
      />
      <br />
      <br />
      <br />
      <br />

      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroupItem
              key={module._id}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                
                {!module.editing && module.name}
                
                {module.editing && (
                  <FormControl
                    className="w-50 d-inline-block"
                    value={module.name}
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule(module);
                      }
                    }}
                    autoFocus
                  />
                )}
                
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={removeModule}
                  editModule={editModuleName}
                />
              </div>
              
              {module.lessons && module.lessons.length > 0 && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroupItem
                      key={lesson._id}
                      className="wd-lesson p-3 ps-1 border-start border-success border-3"
                    >
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}