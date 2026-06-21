import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ResumePreview({ resume }) {
  const downloadPDF = () => {
    const input = document.getElementById("resume");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF();

      const imgWidth = 210; // A4 width
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div id="resume">
      <h2 className="resume-name">{resume.name}</h2>

      <p>{resume.email}</p>

      <p>{resume.phone}</p>

      <h3>Skills</h3>
      <p>{resume.skills}</p>

      <h3>Education</h3>
      <p>{resume.education}</p>

      <hr />

      {/* Your Details */}
      <h4>Anshika Verma</h4>

      <p>anshikaworkspace2006@gmail.com</p>

      {/* Digital Heroes Button */}
      <div className="buttons">
  <a
    href="https://digitalheroesco.com"
    target="_blank"
    rel="noreferrer"
  >
    <button>Built for Digital Heroes</button>
  </a>

  <button onClick={downloadPDF}>
    Download PDF
  </button>
</div>
    </div>
  );
}

export default ResumePreview;