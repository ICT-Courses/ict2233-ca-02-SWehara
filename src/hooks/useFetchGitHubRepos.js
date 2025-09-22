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
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}`);
        if (!res.ok) throw new Error("Failed to fetch repos");
        const data = await res.json();
        if (!cancelled) setRepos(data);
      } catch (err) {
        if (!cancelled) setError(err.message || "Error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchRepos();
    return () => { cancelled = true; };
  }, [username, perPage]);

  return { repos, loading, error };
}
