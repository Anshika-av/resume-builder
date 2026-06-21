import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import "./App.css";

function App() {

const [resume,setResume]=useState({
name:"",
email:"",
phone:"",
skills:"",
education:""
})

return(
<div className="container">

<h1>Resume Builder</h1>

<ResumeForm
resume={resume}
setResume={setResume}
/>

<ResumePreview resume={resume}/>

</div>
)

}

export default App;