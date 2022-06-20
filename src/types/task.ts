import { Category } from "./category"

export type Task = {
	id: string
  title: string
  categoryId?: string
  description: string
  codStatus: string
	deadline: string
  categories?: Category[]
}
