/* eslint-disable react/prop-types */
import ProjectCard from "./projectcard"
import "../styles/projects.css"

const projects = [
    {
        name: "FitLife",
        img: "../../fct_image.png",
        description: "Final project for a 2nd-year DAM course: a social network with OpenAI-powered AI recipe generation. Tech stack: Java, Android Studio, Firebase, Gradle...",
        onClick: "https://github.com/humberDEV"
    },
    {
        name: "Brandmanic Test",
        img: "../../brandmanic_image.png",
        description: "Technical assessment for BrandManic: an app that reads from a JSON file and displays influencer profiles. Tech stack: JavaScript, HTML, CSS.",
        onClick: "https://github.com/humberDEV/brandmanic-test-humberto"
    },
    {
        name: "TPV Project",
        img: "https://www.muycomputer.com/wp-content/uploads/2021/06/Monterey-1.jpg",
        description: "Soon...",
        onClick: "https://github.com/humberDEV"
    },

]

export default function Projects() {
    return (
        <section className="projects-section" id="projects">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-container">
                {
                    projects.map((props, key) => (
                        <ProjectCard
                            key={key}
                            img={props.img}
                            name={props.name}
                            description={props.description}
                            onClick={props.onClick}
                        />
                    ))
                }
            </div>

        </section>
    )
}