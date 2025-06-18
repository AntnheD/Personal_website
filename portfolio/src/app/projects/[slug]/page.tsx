import { supabase } from '@/lib/supabase/client'

import { notFound as nextNotFound } from 'next/navigation'

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  console.log("DEBUG SLUG:", params.slug)

  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', params.slug)
    .single()

  console.log("DEBUG PROJECT:", project)
  console.log("DEBUG ERROR:", error)

  if (!project || error) return notFound()

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-6">{project.overview}</p>

      <h2 className="text-xl font-semibold">Tech Stack</h2>
      <ul className="flex gap-2 flex-wrap mb-6">
        {project.tech_stack?.map((tech: string) => (
          <li key={tech} className="bg-gray-100 px-3 py-1 rounded text-sm">{tech}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold">Key Features</h2>
      <ul className="list-disc list-inside mb-6">
        {project.features?.map((feat: { title: string; description: string }, i: number) => (
          <li key={i}><strong>{feat.title}:</strong> {feat.description}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold">Challenges & Solutions</h2>
      <p><strong>Challenges:</strong> {project.challenges}</p>
      <p><strong>Solutions:</strong> {project.solutions}</p>

      <h2 className="text-xl font-semibold mt-6">Lessons Learned</h2>
      <p>{project.lessons}</p>

      <div className="mt-6 space-x-4">
        <a href={project.repo_url} className="text-blue-600 underline" target="_blank">View Code</a>
        <a href={project.live_url} className="text-blue-600 underline" target="_blank">Live Demo</a>
      </div>
    </div>
  )
}
function notFound() {
    return nextNotFound()
}

