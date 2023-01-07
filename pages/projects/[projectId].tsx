import Image from 'next/image';
import { useRouter } from 'next/router';
import projects from '../../dummyData';

const ProjectDetails = () => {
  const router = useRouter()
  const projectId = router.query.projectId as string
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <Image src={project.image} alt={project.name} width={500} height={500} />
      <button onClick={() => router.push('/')}>Home</button>
    </div>
  )
}

export default ProjectDetails