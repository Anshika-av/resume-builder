import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const downloadPDF=()=>{

const input=document.getElementById("resume");

html2canvas(input).then((canvas)=>{

const imgData=canvas.toDataURL("image/png");

const pdf=new jsPDF();

pdf.addImage(imgData,"PNG",0,0);

pdf.save("resume.pdf");

})

}
function ResumePreview({resume}){

return(

<div id="resume">

<h2>{resume.name}</h2>

<p>{resume.email}</p>

<p>{resume.phone}</p>

<h3>Skills</h3>

<p>{resume.skills}</p>

<h3>Education</h3>

<p>{resume.education}</p>

<hr/>

<h4>
Anshika Verma
</h4>

<p>
your-email@gmail.com
</p>

<a
href="https://digitalheroesco.com"
target="_blank"
>
<button>
Built for Digital Heroes
</button>
<button onClick={downloadPDF}>
Download PDF
</button>
</a>

</div>

)

}

export default ResumePreview;