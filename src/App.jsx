import { useState } from 'react'
import Navigation from './Components/Navigation.jsx'
import Header from './Components/Header.jsx'
import Projectform from './Components/ProjectForm.jsx'
import Projects from './Components/Project.jsx'
import initialProjects from './data.js'

function App() {
  const [projects, setProjects] = useState(initialProjects)

  const handleAddProject = (project) => {
    setProjects((currentProjects) => [
      { ...project, id: `project-${Date.now()}`, likes: 0 },
      ...currentProjects,
    ])
  }

  return (
    <div className="flex min-h-screen flex-col text-slate-800">
      <Navigation />
      <Header />

      <main className="mx-auto w-full max-w-5xl flex-1 space-y-8 px-4 py-8 sm:px-6">
        <Projectform onAdd={handleAddProject} />
        <Projects projects={projects} />
      </main>
  </div>
  )
}

export default App
