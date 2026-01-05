export default defineNuxtRouteMiddleware((to) => {
  // Allow only the homepage route
  if (to.path !== '/') {
    return navigateTo('/')
  }
})

