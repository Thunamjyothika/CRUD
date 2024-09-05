import React, {useState,useEffect} from "react";
import "./App.css";
import Axios from 'axios'
function App()
{
const[sname,setStudentName]= useState("");
const[tech,setTechnology]= useState("");
const[sub,setSubscription]= useState("");
const[rollno,setRollno]= useState("");
const[section,setSection]= useState("");
const submitReview=()=>
{
Axios.post('http://localhost:9000/students',
{name:sname,
tech:tech,
sub:sub,
rollno:rollno,
section:section,}).then(()=>
{
alert("success");
});
};
return (
<div className="App">
<h1>CRUD Application Demo</h1>
<div className="information">
<label><b>Student Name</b></label>
<input
type="text"
name="sname"
onChange={(e)=>{
setStudentName(e.target.value);
}}
required/>
<label><b>Technology</b></label>
<input
type="text"
name="tech"
onChange={(e)=>{
setTechnology(e.target.value);
}}
required/>
<label><b>Subscription</b></label>
<input
type="text"
name="sub"
onChange={(e)=>{
setSubscription(e.target.value);
}}
required/>
<label><b>Roll No</b></label>
<input
type="text"
name="rollno"
onChange={(e)=>{
setRollno(e.target.value);
}}
required/>
<label><b>Section</b></label>
<input
type="text"
name="section"
onChange={(e)=>{
setSection(e.target.value);
}}
required/>
<button onClick={submitReview}><b>Submit</b></button>
</div>
</div>);
}
export default App;
