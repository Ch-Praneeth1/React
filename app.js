import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id:"heading"},"Hello World form React!");
// let root = ReactDOM.createRoot(document.getElementById('root'));
// // console.log(heading) //object 
// root.render(heading);



/***
 * 
 *  <div id="parent">
        <div id="child">
            <h1>nested element creation in React</h1>
        </div>
 *  </div>
 * 
 */

        // creation of nested elements 

// const parent = React.createElement(
//     "div",{id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement("h1",{},"nested element creation"))
// );

// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);


// ReactElement(Object)  =>(converted by render())   HTML(browser understands)


/***
 * 
 *  <div id="parent">
        <div id="child">
            <h1>nested element creation in React</h1>
            <h2>nested element creation with sibilings</h2>
        </div>
 *  </div>
 * 
 */

        // creation of nested elements with sibiling 

        // sibilings cration can be done by changing the third perameter which is children as an array or a list in [], which is seperated by coma(,)


//         const parent = React.createElement(
//             "div",{id:"parent"},
//             React.createElement(
//                 "div",
//                 {id:"child"},[  //array creation of 2 elements
//                 React.createElement("h1",{},"nested element creation with sibilings"),
//                 React.createElement("h2",{},"nested element creation with sibilings")
//                 ])
//         );

// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);



/***
 * 
 *  <div id="parent">
        <div id="child1">
            <h1>nested element creation in React</h1>
            <h2>nested element creation with sibilings</h2>
        </div>
        <div id="child2">
            <h1>nested element creation in React</h1>
            <h2>nested element creation with sibilings</h2>
        </div>
 *  </div>
 * 
 */


        const parent = React.createElement(
            "div",{id:"parent"},[
            React.createElement(
                "div",
                {id:"child1"},[
                React.createElement("h1",{},"nested element creation with sibilings"),
                React.createElement("h2",{},"nested element creation with sibilings")
                ]),
                React.createElement(
                    "div",
                    {id:"child2"},[
                    React.createElement("h1",{},"nested element creation with sibilings"),
                    React.createElement("h2",{},"nested element creation with sibilings")
                ])]
        );

let root = ReactDOM.createRoot(document.getElementById('root'));
// if someting was already present in the html root div then that content will be replaced by the content when we invoke the function rendor 
root.render(parent);