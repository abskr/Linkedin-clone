const _TOKEN = window.localStorage.getItem('token')
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjNGI0YjZmZDIyODAwMTUzZmRiY2YiLCJpYXQiOjE2MTc3MDk4OTksImV4cCI6MTYxODkxOTQ5OX0.F_D6JHoKkrmlqFZN5B94Vr8OXMJeR5tJRoUGb6cK02o";
  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVkZDhmZmI5MTNkOTAwMTU5MzA0OTYiLCJpYXQiOjE2MjA2NTYyNTEsImV4cCI6MTYyMTg2NTg1MX0.K0UwhukTE5wYhl4qkGyu4XJvxnGz6AMA91aNOX2frH0'

export const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${_TOKEN}`,
}