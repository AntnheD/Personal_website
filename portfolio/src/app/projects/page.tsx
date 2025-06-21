import { supabase } from '@/lib/supabase/client';
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/constants/routes';
import type { Project } from '@/types/project';

export default async function ProjectsPage() {
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (!projects || error) {
    return (
      <div className="text-center py-20 text-gray-400">
        Failed to load projects.
      </div>
    );
  }

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <p className="text-gray-400 mb-12">
        Explore real-world applications I have built using modern tech stacks.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project: Project) => (
          <Link
            key={project.id}
            href={routes.projectDetail(project.slug)}
            className="bg-zinc-900 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            {project.thumbnail_url && (
              <Image
                src={project.thumbnail_url}
                alt={project.title}
                width={800}
                height={192}
                style={{ width: '100%', height: '12rem', objectFit: 'cover', borderRadius: '0.5rem' }}
                priority
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-400 mt-1">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
