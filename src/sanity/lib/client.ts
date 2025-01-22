import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'
export const client = createClient({
  projectId:"lfjj7qeb",
  dataset:"production,
  apiVersion:"2025-01-21,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: "skyrfu3q1waMhKmkclJjXgxODyl8jizM1Ygvx8gct28ZBaG5OfGRUdgVfDsfcK7LpWJI7oj26dXJ7e1kJ7SWnnXDlbUE9uOqXGyQ8iAzztVZvSJN7T6OcOGcQsWgGKAPyXcM05ihr3x6nct85JBNbDlVtHLvcp9HZhk7XUewCyb4qy0JSWAY",
})
