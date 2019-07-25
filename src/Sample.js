import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // var arr = [3,4,5]
  // var map = new Map()
  // map.set(0,'zero')
  // map.set(1,'one')
  // console.log(map,Reflect.ownKeys(map))

  // var map1 = {0:'zero',1:'one'}
  // console.log(map,Reflect.ownKeys(map1))


  // let target = {
  //   foo: "Welcome, foo"
  // }
  // let proxy = new Proxy(target, {
  //     get (receiver, name) {
  //         return name in receiver ? receiver[name] : `Hello, ${name}`
  //     }
  // })
  // console.log(proxy.foo   === "Welcome, foo")
  // console.log(proxy.world === "Hello, world")
  // console.log(proxy.manisha)

  
// const myPromise = new Promise((resolve, reject) => {
//   if (Math.random() * 100 < 90) {
//       console.log('resolving the promise ...');
//       resolve('Hello, Promises!');
//   }
//     reject(new Error('In 10% of the cases, I fail. Miserably.'));
//   });

//   // Two functions 
//   const onResolved = (resolvedValue) => console.log(resolvedValue);
//   const onRejected = (error) => console.log(error);

//   myPromise.then(onResolved, onRejected);

//   // Same as above, written concisely
//   myPromise.then((resolvedValue) => {
//     console.log(resolvedValue);
//   }, (error) => {
//     console.log(error);
//   });


  // arr.foo=6
  // console.log(arr['foo'])
  // for(var i in arr){
  //   console.log(i + 'in');
  // }
  // for(var i of arr){
  //   console.log(i + 'of');
  // }


  // const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  // wait().then(() => console.log(4));
  // Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
  // console.log(1);



  // var dest = { quux: 0 }
  // var src1 = { foo: 1, bar: 2 }
  // var src2 = { foo: 3, baz: 4 }
  // Object.assign(dest, src1, src2)

  // console.log(" ,".repeat(4 * 1))
  // console.log(1/2 === 0.5)
  // function msgAfterTimeout (msg, who, timeout) {
  //   return new Promise((resolve, reject) => {
  //       setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
  //   })
  // }
  // msgAfterTimeout("", "Foo", 100).then((msg) =>
  //   msgAfterTimeout(msg, "Bar", 200)
  // ).then((msg) => {
  //   console.log(`done after 300ms:${msg}`)
  // })



  // class Shape {
  //   constructor (shape,width, height, radius) {
  //       this.shape = shape
  //       this.width = width
  //       this.height = height
  //       this.radius = radius
  //   }
  //   area () {
  //     return `The area of ${this.shape} is ${this.radius*this.radius}`
  // }
  // }
  // class Circle extends Shape {
  //     constructor (shape,width, height, radius) {
  //       super(shape,width, height, radius)
  //     }
  // }
  // var obj1= new Circle('circle',1,2,20);
  // console.log(obj1.area());




  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  
  return (
  <div>
    {get_details()}

  </div>);
  function get_details(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://jsonplaceholder.typicode.com/posts/1', false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText
  }
}

export default App;
