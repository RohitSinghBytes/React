
const element = React.createElement("h1",{id:"first",className:"Rohit",style:{backgroundColor:"blue",color:"pink"}},"Hello Rohit Singh");
const element1 = React.createElement("h2",{id:"second",className:"Rohit",style:{backgroundColor:"black",color:"white"}},"Tumhe karna hi hoga");
// ye react ka element taiyyar ho gaya hai
// let ki 50 card pade hai


const div1 = React.createElement('div',{},[element,element1]);
// array ke form mein de diya hai children ko i.e element and element1



// ab mujhe ye element div mein dalna hai jiska id hai root
  
// ReactDOM.render(element,document.getElementById('root'));


const ReactRoot = ReactDOM.createRoot(document.getElementById('root'));
// react root container
// react khud control le rha hai root element ke upar
// ReactRoot.render(element); 
// ReactRoot.render(element1);
ReactRoot.render(div1);


// { <div>
//     <h1>hello Rohit Singh</h1>
//     <h1>Tumhe karna hi hoga</h1>
// </div> }

/* <div>
    <div>
        <h1>
            <p>
               hello everyone
            </p>
        </h1>
    </div>
</div> */
 
// JSX