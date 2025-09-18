// create element with the js

// const header1 = document.createElement('h1');
// header1.innerText = "Hello Coder Army"; 
// header1.style.backgroundColor ="blue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";

// // ab mujhe isse div id root ke undar insert karana hai


// const header2 = document.createElement('h2');
// header2.innerText = "Kaise hai sab koi"; 
// header2.style.backgroundColor ="black";
// header2.style.fontSize = "30px";
// header2.style.color = "white";

// const header3 = document.createElement('h3');
// header3.innerText = "Mast hai na"; 
// header3.style.backgroundColor ="purple";
// header3.style.fontSize = "30px";
// header3.style.color = "white";

// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2);
// root.append(header3);

// styles = {fontSize:"30px",backgroundColor:"blue" ,color:"white"}

// React : object hai
// ReactDOM : object hai

// ye react ke code ko hi library bolte hai 

const React = {

    createElement: function(tag,styles,children){
        const element = document.createElement(tag);
        // ye method hai

         if(typeof children === 'object'){ // to check if children array hai
              for(let val of children)
                element.append(val);
         }

        else
        element.innerText = children;
        for(let key in styles){
            element.style[key] = styles[key];
        }
        return element;

    }

}

const ReactDOM = {
    render: function(element,root){
        root.append(element);
    }
}

const li1 = React.createElement('li',{},"HTML");
const li2 = React.createElement('li',{},"CSS");
const li3 = React.createElement('li',{},"JS");

const Ul = React.createElement('ul',{fontSize:"25px",backgroundColor:"blue" ,color:"white"},[li1,li2,li3]);



// Unordered list 
// html
// css
// js



const header1 = React.createElement('h1',{fontSize:"30px",backgroundColor:"blue" ,color:"white"},"Hello Rohit Singh");
const header2 = React.createElement('h1',{fontSize:"25px",backgroundColor:"black" ,color:"white"},"Tum kar loge");
const header3 = React.createElement('h1',{fontSize:"30px",backgroundColor:"purple" ,color:"white"},"I beleive in you");

ReactDOM.render(header1,document.getElementById('root'));
// document.getElementById('root')
// iski jagah par root ko likh sakte hai
ReactDOM.render(header2,document.getElementById('root'));
ReactDOM.render(header3,document.getElementById('root'));
ReactDOM.render(Ul,document.getElementById('root'));
  