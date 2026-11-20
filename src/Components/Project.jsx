import { useMemo, useState } from 'react'
import FilterButton from './FilterButton.jsx'
import Projectcard from './Projectcard.jsx'
import Searchbar from './Search.jsx'
import { techOptions } from '../data.js'


function Projects({ projects }) {
    const [filter, setFilter] = useState("All")
    const [query, setQuery] = useState("")

    const categories = useMemo(() => {
        const usedTech = new Set(projects.map((project) => project.tech).filter(Boolean))
        const labels = [...usedTech].map((tech) =>
            techOptions.find((option) => option.toLowerCase() === tech.toLowerCase()) ?? tech
        )
        return ["All", ...new Set(labels)]
    }, [projects])

    const filteredProjects = useMemo(() => {
        const search = query.trim().toLowerCase()

        return projects.filter((project) => {
            const matchesCategory = filter === "All"
                || (project.tech ?? "").toLowerCase() === filter.toLowerCase()
            const matchesSearch = !search
                || project.title.toLowerCase().includes(search)
                || (project.tech ?? "").toLowerCase().includes(search)
                || (project.description ?? "").toLowerCase().includes(search)

            return matchesCategory && matchesSearch
        })
    }, [projects, filter, query])

    return (
        <section aria-labelledby="projects-heading">

            <div className="mx-auto mt-4 max-w-xl">
                <Searchbar value={query} onChange={setQuery} />
            </div>

            <div className="mt-3 flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                    <FilterButton
                        key={category}
                        label={category}
                        active={filter === category}
                        onClick={() => setFilter(category)}
                    />
                ))}
            </div>

            {filteredProjects.length === 0 ? (
                <p className="mt-8 text-center text-slate-500">
                    {query.trim()
                        ? `No projects match “${query.trim()}”.`
                        : "No projects in this category yet."}
                </p>
            ) : (
                <div className="mt-6 grid gap-4">
                    {filteredProjects.map((project) => (
                        <Projectcard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Projects
