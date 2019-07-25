import React from 'react';
import './App.css';

function App() {
  return (<div>
      <h3>Posts</h3>
      <button onClick={get_posts}>All posts</button>
      <button onClick={get_details}>Single post</button>
      <p id="demo"></p>
    </div>);
}
function get_details(){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", 'https://jsonplaceholder.typicode.com/posts/1', false ); 
  xmlHttp.send( null );
  var Result = JSON.parse(xmlHttp.responseText)
  var x = ""
  for (var key in Result) {
    x += "<div>"+key  +"----------->"+Result[key]+"\n"+"</div>"
  }
  document.getElementById("demo").innerHTML = x;
  return xmlHttp.responseText
}
function get_posts(){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", 'https://jsonplaceholder.typicode.com/posts', false ); 
  xmlHttp.send( null );
  var posts = JSON.parse(xmlHttp.responseText)
  var x = ""
  for (var post of posts) {
    x += "<div>"+post['title']+"\n"+"</div>"
  }
  document.getElementById("demo").innerHTML = x;
  document.getElementById("demo").style.color="Green"
  return xmlHttp.responseText
}
export default App;
