import React from "react";
import useFetchGitHubRepos from "../hooks/useFetchGitHubRepos";

export default function Projects() {
  // change this to your github username if different
  const githubUser = "SWehara";
  const { repos, loading, error } = useFetchGitHubRepos(githubUser, 9);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>

      {loading && <p>Loading projects from GitHub...</p>}
      {error && <p className="text-red-400">Error: {error}</p>}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {!loading && repos.length === 0 && (
          <div className="bg-gray-800/80 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">No repos found</h3>
            <p>Add projects to your GitHub or update your username variable in this file.</p>
          </div>
        )}

        {repos.map((repo) => (
          <div key={repo.id} className="bg-gray-800/80 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{repo.name}</h2>
            <p className="mb-4">{repo.description || "No description provided."}</p>
            <div className="flex justify-between items-center">
              <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">View Repo</a>
              <span className="text-sm">{repo.stargazers_count} ★</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
