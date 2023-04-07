import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <a href={props.link}>
      <div className="project-card">
        <h2>{props.title}</h2>
        <div className="project-card-inner">
          <img className="project-card-img" src={props.img} />
          {props.text}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
