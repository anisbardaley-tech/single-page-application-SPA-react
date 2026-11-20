import { useState } from 'react'
import { techOptions } from '../data.js'

const emptyForm = { title: "", tech: techOptions[0], description: "" }

function Projectform({ onAdd }) {
    const [form, setForm] = useState(emptyForm)

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm((currentForm) => ({ ...currentForm, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!form.title.trim()) return

        onAdd({
            title: form.title.trim(),
            tech: form.tech,
            description: form.description.trim(),
        })
        setForm(emptyForm)
    }

    return (
        <form className="bg-white p-6 shadow-sm" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold text-slate-800">Add Project</h2>
            <p className="mt-1 text-sm text-slate-500">Add your project details here.</p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="project-title" className="block text-sm font-medium text-slate-700">
                        Title
                    </label>
                    <input
                       id="project-title"
                        name="title"
                        type="text"
                        required
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Add your project title here ..."
                        className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-sm"/>
                </div>

                
            </div>

            <div className="mt-4">
                <label htmlFor="project-description" className="block text-sm font-medium text-slate-700">
                    Description
                </label>
                <textarea
                    id="project-description"
                    name="description"
                    rows="3"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Detail your project here ..."
                    className="mt-1 w-full rounded-lg border border-slate-300 p-2 text-sm"
                ></textarea>
            </div>

            <button type="submit"className="mt-4 w-full rounded-lg bg-teal-600 px-4 py-2 font-semibold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300 sm:w-auto">
                Add 
            </button>
        </form>
    )
}

export default Projectform
