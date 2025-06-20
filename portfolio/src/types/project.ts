// src/types/project.ts

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  overview?: string
  tech_stack?: string[]
  features?: {
    title: string
    description: string
  }[]
  challenges?: string
  solutions?: string
  lessons?: string
  repo_url?: string
  live_url?: string
  thumbnail_url?: string
  category?: string
  created_at?: string
}
