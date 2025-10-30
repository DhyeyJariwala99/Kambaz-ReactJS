"use client";
import React from "react";
import { usePathname } from "next/navigation";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";

export default function Lab3() {
  const pathname = usePathname();

  return (
    <div id="wd-lab3" className="container">
      <h2>Lab 3 - JavaScript and React</h2>
      <p className="text-muted">Author: Dhyey Jariwala | NUID : 002022179</p>

      {/* ==================== SECTION 3.2: INTRODUCTION TO JAVASCRIPT ==================== */}
      <h3 className="mt-4">Introduction to JavaScript</h3>
      
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />

      {/* ==================== SECTION 3.3: JAVASCRIPT FUNCTIONS ==================== */}
      <h3 className="mt-4">JavaScript Functions</h3>
      
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturn />
      <TemplateLiterals />

      {/* ==================== SECTION 3.4: JAVASCRIPT DATA STRUCTURES ==================== */}
      <h3 className="mt-4">JavaScript Data Structures</h3>
      
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FindIndex />
      <FilterFunction />
      <JsonStringify />
      <House />
      <TodoList />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
      <DestructingImports />

      {/* ==================== SECTION 3.5: DYNAMIC STYLING ==================== */}
      <h3 className="mt-4">Dynamic Styling</h3>
      
      <Classes />
      <Styles />

      {/* ==================== SECTION 3.6: PARAMETERIZING COMPONENTS ==================== */}
      <h3 className="mt-4">Parameterizing Components</h3>
      
      <Add a={3} b={4} />
      
      <h4>Square of 4</h4>
      <Square>4</Square>
      <hr />
      
      <h4>Highlight Example</h4>
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        ratione eaque illo minus cum, saepe totam vel nihil repellat nemo
        explicabo excepturi consectetur. Modi omnis minus sequi maiores,
        provident voluptates.
      </Highlight>
      <hr />

      {/* ==================== SECTION 3.6.2: WORKING WITH LOCATION ==================== */}
      <div id="wd-working-with-location">
        <h4>Working with Location</h4>
        <p>Current path: {pathname}</p>
      </div>
      <hr />

      {/* ==================== SECTION 3.6.3: PATH PARAMETERS ==================== */}
      <PathParameters />
    </div>
  );
}