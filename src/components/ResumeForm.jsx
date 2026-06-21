function ResumeForm({resume,setResume}){

const handleChange=(e)=>{
setResume({
...resume,
[e.target.name]:e.target.value
})
}

return(
<div>

<input
name="name"
placeholder="Name"
onChange={handleChange}
/>

<input
name="email"
placeholder="Email"
onChange={handleChange}
/>

<input
name="phone"
placeholder="Phone"
onChange={handleChange}
/>

<textarea
name="skills"
placeholder="Skills"
onChange={handleChange}
/>

<textarea
name="education"
placeholder="Education"
onChange={handleChange}
/>

</div>
)
}

export default ResumeForm;