import './../styles/pages/projects.css'

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.githubUrl} className="project-link">Code</a>
          <a href={project.demoUrl} className="project-link">Demo</a>
        </div>
      </div>
    </div>
  )
}