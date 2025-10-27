import Skills from "@/components/ResumeSkills/Skills";

export default function Resume() {
  return (
    <div className="resume-page">
      <div id="skills">
        <div>
          <h2 className="pageHeader">Skills</h2>
        </div>

        <Skills />
      </div>
    </div>
  );
}