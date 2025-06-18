// src/app/projects/page.tsx
import { supabase } from '@/lib/supabase/client'

export default async function ProjectsPage() {
  const { data: projects, error } = await supabase.from('projects').select('*')

  if (error) {
    return <div className="text-red-500">Failed to load projects.</div>
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects?.map((project) => (
          <a
            key={project.id}
            href={`/projects/${project.slug}`}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-500">{project.description}</p>
          </a>
        ))}
      </div>
    </main>
  )
}
