// src/constants/routes.ts

export const routes = {
  home: '/',
  about: '/about',
  contact: '/contact',
  resume: '/resume',
  achievements: '/achievements',
  projects: '/projects',
  projectDetail: (slug: string) => `/projects/${slug}`, // dynamic route
};
