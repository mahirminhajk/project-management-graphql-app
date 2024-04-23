import { useQuery } from "@apollo/client"
import Spinner from "./Spinner"
import { GET_PROJECTS } from "../queries/projectQueries"
import ProjectCard from "./ProjectCard";


function Projects() {

    const { error, loading, data } = useQuery(GET_PROJECTS);

    if (loading) return <Spinner />
    if (error) return <p>Error :{error.message}</p>

    return (
        <>
            {data.projects.length > 0 ? (
                <div className="row mt-3">
                    {data.projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (<p>No projects found</p>)}
        </>
    )
}

export default Projects