export function useCustomFetch(
  url,
  options={}
) {
  return useFetch(url, {
    baseURL: 'https://api.admin.realsoft.uz/api',
    ...options,
    $fetch: useNuxtApp().$customFetch,
  })
}