import Image from "next/image";
import { useRouter } from "next/router";
import client from "../../api/sanityClient";
import Container from "../../components/Container/Container";
import { IProjects } from "../../types";

const ProjectDetails = ({ project }: { project: IProjects }) => {
  console.log('project url:', project.websiteUrl);
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
    <div className="w-full px-6 py-16 text-center bg-white">
      <Container>
        <div className="mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
            {project.title}
          </h1>
          <p className="mt-6 text-gray-500 dark:text-gray-300">
            {project.description}
          </p>
        </div>
        <div className="mt-10 flex justify-center relative">
          <Image
            className="h-96 w-full max-w-4xl rounded-xl object-cover  inset-0 lg:w-4/5 transform hover:scale-[1.01] transition-all cursor-pointer"
            src={project.imageUrl}
            alt={project.name}
            width={500}
            height={500}
          />
        </div>
        <h1 className="mt-6 text-xl font-bold text-gray-800 dark:text-white lg:text-4xl">
          {project.name}
        </h1>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            className="block w-full rounded border border-blue-600 bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-opacity-75 sm:w-auto cursor-pointer"
            onClick={() => router.push("/")}
          >
            Go Home
          </button>
          {project.type === "website" && (
            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-primary hover:text-white bg-white hover:bg-primary focus:outline-none focus:ring active:bg-primary sm:w-auto cursor-pointer"
              href={project.websiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              Project Link
            </a>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetails;

export async function getStaticProps(context: any) {
  const { params } = context;
  if (!params) return { props: {} };

  const query = `*[_id == $itemId] { _id, title, name, type, websiteUrl, 'imageUrl': image.asset->url, description }`;

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
