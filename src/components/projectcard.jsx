/* eslint-disable react/prop-types */
import "../styles/projectcard.css";

export default function ProjectCard(props) {

    const { img, name, description, onClick } = props;

    return (
        <div className="work-card" onClick={onClick}>
            <div className="work-card-image">
                <img
                    alt={name}
                    src={img}
                    className="work-card-image-content"
                />
            </div>
            <h1 className="work-card-title">
                {name ? name : "Project Name"}
            </h1>
            <h2 className="work-card-description">
                {description ? description : "Description"}
            </h2>
        </div>
    );
}

