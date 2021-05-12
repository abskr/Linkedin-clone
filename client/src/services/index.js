const _TOKEN = window.localStorage.getItem('token')

export const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${_TOKEN}`,
}