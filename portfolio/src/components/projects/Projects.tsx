'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase/client';

type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string;
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('id, title, description, thumbnail_url')
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) {
        setError('Failed to load projects.');
        return;
      }

      setProjects(data);
    };

    fetchProjects();
  }, []);

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (!projects) {
    return <p className="text-gray-500 text-center">Loading projects...</p>;
  }

  return (
    <section className="py-16 px-4">
      <h2 className="text-xl font-semibold mb-8">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div key={project.id} className="bg-[#1b1e27] p-4 rounded-lg">
            {project.thumbnail_url && (
              <Image
                src={project.thumbnail_url}
                alt={project.title}
                width={400}
                height={250}
                className="rounded mb-4"
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                priority={i === 0}
              />
            )}
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
