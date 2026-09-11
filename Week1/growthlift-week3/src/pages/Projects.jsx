function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-green-500 mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-400 transition-colors">Project 1 — Web Development</div>
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-400 transition-colors">Project 2 — Flutter & Mobile Apps</div>
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-400 transition-colors">Project 3 — Machine Learning</div>
      </div>
    </div>
  );
}

export default Projects;