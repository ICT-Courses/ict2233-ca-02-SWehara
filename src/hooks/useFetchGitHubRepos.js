import { useEffect, useState } from "react";
export default function useFetchGitHubRepos(username, perPage = 6) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    let cancelled = false;

    async function fetchRepos() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}`
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        if (!cancelled) setRepos(data);
      } catch (err) {
        if (!cancelled) setError(err.message || "Error fetching repos");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchRepos();

    return () => {
      cancelled = true;
    };
  }, [username, perPage]);

  return { repos, loading, error };
}
