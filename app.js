import React, { Component } from "react";
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


//         const parent = React.createElement(
//             "div",{id:"parent"},[
//             React.createElement(
//                 "div",
//                 {id:"child1"},[
//                 React.createElement("h1",{},"nested element creation with sibilings"),
//                 React.createElement("h2",{},"nested element creation with sibilings")
//                 ]),
//                 React.createElement(
//                     "div",
//                     {id:"child2"},[
//                     React.createElement("h1",{},"nested element creation with sibilings"),
//                     React.createElement("h2",{},"nested element creation with sibilings")
//                 ])]
//         );

// let root = ReactDOM.createRoot(document.getElementById('root'));
// // if someting was already present in the html root div then that content will be replaced by the content when we invoke the function rendor 
// root.render(parent);



// 3rd video of namaste react 


// let heading = React.createElement("h1",{id:"heading"},"Namste React 🚀");   //core of react


//  JSX (java script syntax) jsx and react is different
//  JSX is developed to make developer life is easy (jsx is not react both are seperate)  jsx is just a synta
// let jsxheading = <h1 id="jsxheading" >element creation using jsx 🚀</h1>;  // end of the day react element


// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxheading);


// react components
    // 1) class based component
    // 2) functional component

// functional Component
            // a function that return jsx is a functional component

// const HeadingComponent = ()=>(
//     <div>
//         <h1 id="functionalcomponent">functional component</h1>
//     </div>
// );
//                         or  both are same
// const HeadingComponent1 = () => <h1> functional componet</h1>;



// let root = ReactDOM.createRoot(document.getElementById('root'));

// functional component can't be rendered as direct as an element it shoulb be done as bellow
// root.render(<HeadingComponent/>);  //all the componensts are rendered this way 



// component composition    combining of 2 or more functional components is known as component composition

// const Title = () =>{
//     return <h2>component composition</h2>
// }

// const HeadingComponent = () =>(
//     <div>
//         <Title/>
//         <h1>inside heading component</h1>
//     </div>
// );


// let root = ReactDOM.createRoot(document.getElementById('root'));

// // functional component can't be rendered as direct as an element it shoulb be done as bellow
// root.render(<HeadingComponent/>);  //all the componensts are rendered this way 



// practice assignment 

// const parent= React.createElement("div",{id:"parent"},[
//     React.createElement("h1",{id:"h1 tag"},"this is h1"),
//     React.createElement("h2",{id:"h2 tag"},"this is h2"),
//     React.createElement("h3",{id:"h3 tag"},"this is h3"),
// ]);

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent)



//above same using jsx

// const parent = (<div>
//     <h1>this is h1 tag using jsx</h1>
//     <h2>this is h2 tag using jsx</h2>
//     <h3>this is h3 tag using jsx</h3>
// </div>);

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent)



// creating a functional componet for the above

// const Parent = () =>(<div>
//     <h1>this is h1 tag using functionalcomponent</h1>
//     <h2>this is h2 tag using functionalcomponent</h2>
//     <h3>this is h3 tag using functionalcomponent</h3>
//  </div>);

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Parent/>)




// create a header component form scratch using functional compennts with hsx
        /****
         * add a logo on lef 
         * add a search bar in middle
         * add user icon on right 
         * add css to make it look nice
         */

const Parent = () =>(<div>
    <img id="image"src="assignment/images/logo.jpg" alt="logo"></img>
    <input type="text" placeholder="Search.."></input>
    <i class="fa-solid fa-user"></i>
</div>);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent/>)