export default defineEventHandler(async () => {
  const data = await useStorage('assets:server').getItem('text.txt')
  return data
})
