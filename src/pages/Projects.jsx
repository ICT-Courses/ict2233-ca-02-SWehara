import "../styles/main.scss";

export default function Projects() {
  // Example project data
  const projects = [
    {
      title: "Project One",
      description: "A short description of Project One.",
      link: "https://github.com/yourusername/project-one",
    },
    {
      title: "Project Two",
      description: "A short description of Project Two.",
      link: "https://github.com/yourusername/project-two",
    },
    {
      title: "Project Three",
      description: "A short description of Project Three.",
      link: "https://github.com/yourusername/project-three",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white mb-8">My Projects</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-gray-800/80 text-white p-6 rounded-xl shadow-lg text-center"
          >
            <h2 className="text-2xl font-semibold mb-2">{proj.title}</h2>
            <p className="mb-4">{proj.description}</p>
            <a
              href={proj.link}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

