import "../style/ProjectsScrollbar.css";

const projects = [
  {
    name: "ngl",
    description: "Just a ngl with supabase backend.",
    image: "https://labs.bloosheddev.my.id/assets/project-img/ngl.png",
    link: "https://bloosheddev.my.id/ngl/",
  },
  {
    name: "b_clips",
    description: "Share information anonymously!",
    image:
      "https://raw.githubusercontent.com/bloosheddev/b_clips/refs/heads/main/assets/images/logo.png",
    link: "https://github.com/bloosheddev/b_clips",
  },
];

function ProjectCard({ name, description, image, link }) {
  return (
    <article className="project-card">
      <div className="project-image" aria-label={`${name} project preview`}>
        <img
          className="project-placeholder"
          src={image}
          alt={`${name} project preview`}
        />
      </div>
      <div className="project-information">
        <h2>{name}</h2>
        <p>{description}</p>
        <a
          className="project-link"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Try Now
        </a>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <div className="projects-page">
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard {...project} key={`${project.name}-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
