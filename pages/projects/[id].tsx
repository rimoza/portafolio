import Image from "next/image";
import { useRouter } from "next/router";
import client from '../../api/sanityClient';

import Container from "../../components/Container/Container";

const ProjectDetails = ({ project }: any) => {
  const router = useRouter();

  if (!project) {
    return (
      <Container>
        <h2 className="mt-20 text-center text-red-500 font-bold">
          Project not found
        </h2>
      </Container>
    );
  }

  return (
    <Container>
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="mx-auto max-w-lg">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
            {project.title}
          </h1>
          <p className="mt-6 text-gray-500 dark:text-gray-300">
            {project.description}
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <Image
            className="h-96 w-full rounded-xl object-cover lg:w-4/5"
            src={project.imageUrl}
            alt={project.name}
            width={500}
            height={500}
          />
        </div>
        <h1 className="mt-6 text-xl font-bold text-gray-800 dark:text-white lg:text-4xl">
          {project.name}
        </h1>
        <button
          className="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto"
          onClick={() => router.push("/")}
        >
          Go Home
        </button>
      </div>
    </Container>
  );
};

export default ProjectDetails;



export async function getStaticProps(context: any) {
  const { params } = context;
  if (!params) return { props: {} };

  const query = `*[_id == $itemId] { _id, title, name, 'imageUrl': image.asset->url, description }`;

  try {
    const project = await client.fetch(query, { itemId: params.id });
    return {
      props: {
        project: project[0],
      },
    };
  } catch (error) {
    console.log("error:", error);
  }

  return { props: {} };
}

export async function getStaticPaths() {
  const projects = await client.fetch(`*[_type == "projects"]`);

  if (!projects) return { paths: [], fallback: false };

  const paths =
    projects.map((project: any) => ({
      params: {
        id: project._id.toString(),
      },
    })) || [];

  return {
    paths,
    fallback: false,
  };
}
