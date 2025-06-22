import { supabase } from '@/lib/supabase/client'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

// Your format: using params as a Promise
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!project || error) return notFound()

  return (
    <div className="px-6 py-12 max-w-4xl mx-auto text-white">
      <nav className="text-sm text-gray-400 mb-4">
        <Link href="/projects" className="hover:underline">Projects</Link> / {project.title}
      </nav>
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-400 mb-6">{project.description}</p>

      {project.thumbnail_url && (
        <Image
          src={project.thumbnail_url}
          alt={project.title}
          width={960}
          height={400}
          className="rounded-lg shadow-md mb-8 w-full object-cover"
          priority
          unoptimized
        />
      )}

      <Section title="Overview" content={project.overview} fallback="No overview provided." />

      {Array.isArray(project.tech_stack) && project.tech_stack.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech_stack.map((tech: string) => (
              <span key={tech} className="bg-zinc-800 text-sm px-3 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {Array.isArray(project.features) && project.features.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {project.features.map((f: { title: string; description: string }, i: number) => (
              <li key={i}>
                <strong>{f.title}:</strong> {f.description}
              </li>
            ))}
          </ul>
        </section>
      )}

      {(project.challenges || project.solutions) && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Challenges & Solutions</h2>
          {project.challenges && (
            <p className="mb-2">
              <strong>Challenges:</strong> {project.challenges}
            </p>
          )}
          {project.solutions && (
            <p>
              <strong>Solutions:</strong> {project.solutions}
            </p>
          )}
        </section>
      )}

      {project.lessons && (
        <Section title="Lessons Learned" content={project.lessons} />
      )}

      {project.live_url && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Live Preview</h2>
          <div className="w-full aspect-video bg-zinc-900 flex items-center justify-center rounded-lg shadow-md">
            <iframe
              src={project.live_url}
              title="Live Project"
              className="w-full h-full rounded-lg"
              allowFullScreen
            />
          </div>
        </section>
      )}

      <div className="flex gap-4 mt-8">
        {project.live_url && (
          <Link
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View Project
          </Link>
        )}
        {project.repo_url && (
          <Link
            href={project.repo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            View Code
          </Link>
        )}
      </div>
    </div>
  )
}

function Section({
  title,
  content,
  fallback,
}: {
  title: string
  content?: string
  fallback?: string
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300">{content || fallback || 'N/A'}</p>
    </section>
  )
}
