export default function About() {
  return (
    <div className="flex justify-center items-start min-h-screen p-8 bg-gray-900 text-white">
      <div className="max-w-4xl w-full bg-gray-800/80 p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
        <p className="text-lg mb-4">
          I am a second year IT Undergraduate following a BSc. Hons in IT degree at the University of Sri Jayewardenepura, Sri Lanka.
          I'm passionate about technology, problem-solving, and learning new skills. I have a strong interest in
          software development, web technologies, and creating useful solutions.
        </p>


        <h2 className="text-2xl font-semibold mt-6 mb-2">Technical Skills</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Python, C#, JavaScript</li>
          <li>React.js, Node.js</li>
          <li>MySQL , MongoDB</li>
          <li>HTML, CSS, Tailwind CSS, Bootstrap, Sass</li>
          <li>Git & GitHub version control</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Soft Skills</h2>
        <ul className="list-disc list-inside">
          <li>Teamwork and collaboration</li>
          <li>Time management</li>
          <li>Adaptability and learning new technologies</li>
          <li>Problem-solving and analytical thinking</li>
        </ul>
      </div>
    </div>
  );
}
