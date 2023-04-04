import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
        <h2>{props.title}</h2>
      <div className="project-card-inner">
        <img className="project-card-img" src={props.img} />
        <div className="project-card-text">{props.text}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
