const USERNAME = "preethikashree-vijayasaravanan";

const BASE_URL = `https://api.github.com/users/${USERNAME}`;

export const getGitHubProfile = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub profile.");
  }

  return await response.json();
};

export const getGitHubRepositories = async () => {
  const response = await fetch(
    `${BASE_URL}/repos?sort=updated&per_page=6`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repositories.");
  }

  return await response.json();
};

export const getGitHubData = async () => {
  const [profile, repositories] = await Promise.all([
    getGitHubProfile(),
    getGitHubRepositories(),
  ]);

  return {
    profile,
    repositories,
  };
};