import { About } from "../About/About";
import { MyProjects } from "../MyProjects/MyProjects";
import { WorkExperience } from "../WorkExperience/WorkExperience";
import { Education } from "../Education/Education";

export const MainContent = () => {
  return (
    <>
      <About />
      <MyProjects />
      <WorkExperience />
      <Education />
    </>
  );
};
