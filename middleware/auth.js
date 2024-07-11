// middleware/auth.js

export default defineNuxtRouteMiddleware((to, from) => {
  // This ensures the code inside only runs on client-side
  if (process.client) {
    const protectedRoute = '/room-control'; // Specify your route
    const accessGrantedKey = 'accessGrantedForRoomControl'; // Key used to check if access is granted
    const accessGranted = sessionStorage.getItem(accessGrantedKey) === 'true'; // Check if the user has been granted access

    // If the user is trying to access a protected route and hasn't been granted access, redirect to the login page
    if (to.path === protectedRoute && !accessGranted) {
      return navigateTo(`/login?redirect=${encodeURIComponent(to.fullPath)}`); // Redirect to login with a redirect path
    }
  }
});