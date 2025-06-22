// global.d.ts
declare module 'next' {
  namespace AppRouter {
    interface PageParams {
      params: {
        slug: string
      }
    }
  }
}
