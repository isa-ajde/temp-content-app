import { useState, useEffect } from 'react'
import { createClient } from 'contentful'

const client = createClient({
  space: 'thh984aryjs8',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
})

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      const project = response.items.map((item) => {
        const { url, title, image } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { url, title, id, img }
      })
      setProjects(project)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return { loading, projects }
}
