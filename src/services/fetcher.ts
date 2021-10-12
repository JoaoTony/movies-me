import { kay, baseURL } from "./api"

const fetcher= (method: string) => async <T>(url: string, page: number , body?: Object) => {

  const res = await fetch(`${baseURL}/${url}?api_key=${kay}&language=pt-BR&page=${page}`, {
    method,
    body: JSON.stringify(body)
  })

  const data = await res.json()
  return { status: res.status, data: data as T }
}

export const getFetcher = fetcher('GET')