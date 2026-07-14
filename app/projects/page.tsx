import PageLink from "@/lib/page_link"
import { Project, projects } from "./project"

function ProjectInfo({ project } : { project: Project }) {
  return (
      <div className="px-2 py-2 basis-full md:basis-1/2">
          <div className="py-2 shadow-xl h-full">
            <div className="flex flex-col">
              <div className="flex max-w-full min-h-50 max-h-50 justify-center p-2">
                <img src={project.image} className="object-cover" />
              </div>
              <div className="text-xl font-bold px-4"><PageLink href={project.source}>{project.name}</PageLink></div>
              <div className="text-l px-4 pt-2">{project.description}</div>
              <div className="text-l px-4 pt-2"><strong>Technologies</strong>: {project.technologies}</div>
            </div>  
          </div>
      </div>
  )
}

export default function Projects() {
  return (
    <div className="pb-2 container mx-auto">
      <div className="text-2xl font-bold px-16 py-4">Projects</div>
      <div className="flex flex-row flex-wrap px-16">
          {projects.map(p => <ProjectInfo project={p} key={`${p.name}`} />)}
      </div>
    </div>
  )
}