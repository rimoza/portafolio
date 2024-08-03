import Image from "next/image";
import { notFound } from "next/navigation";
import Contact from "../../components/Contact";
import Container from "../../components/Container/Container";
import Button from "../../components/UI/Button/Button";
import { projects } from "../../dummyData";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="w-full px-6 py-16 text-justify bg-white mt-32">
        <Container>
          <div className="mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl">
              {project.title}
            </h1>
            <p className="mt-6 text-gray-500">{project.description}</p>
          </div>
          <div className="mt-10 flex justify-center relative">
            <Image
              className="h-96 w-full max-w-4xl rounded-xl object-cover inset-0 lg:w-4/5 transform hover:scale-[1.01] transition-all cursor-pointer"
              src={project.imageUrl || project.image}
              alt={project.name}
              width={500}
              height={500}
            />
          </div>
          <h1 className="mt-6 text-xl font-bold lg:text-4xl">{project.name}</h1>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              className="block w-full rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-[#fff] uppercase hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-opacity-75 sm:w-auto cursor-pointer"
              onClick={() => window.history.back()}
            >
              Back
            </Button>
            {project.type === "website" && project.websiteUrl && (
              <a
                className="block w-full rounded border border-primary px-12 py-3 text-sm font-medium text-primary uppercase hover:text-[#fff] bg-white hover:bg-primary focus:outline-none focus:ring active:bg-primary sm:w-auto cursor-pointer"
                href={project.websiteUrl}
                target="_blank"
                rel="noreferrer"
              >
                Project Link
              </a>
            )}
          </div>
          <div className="mt-10">
            <Contact />
          </div>
        </Container>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
