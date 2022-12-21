import React, { useState, useEffect } from 'react';

interface Repo {
  id: number;
  name: string;
}

interface Props {
  username: string;
}

const StarredRepos: React.FC<Props> = ({ username }) => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    // Fetch the list of repositories starred by the user
    fetch(`https://api.github.com/users/${username}/starred`)
      .then(response => response.json())
      .then(repos => setRepos(repos));
  }, [username]);

return (
  <div style={{ backgroundColor: 'black', position: 'relative' }}>
    {repos.map(repo => (
      <Star key={repo.id} repo={repo} />
    ))}
  </div>
);
};

const Star: React.FC<{ repo: Repo }> = ({ repo }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      setPosition({ x, y });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const textStyle = {
    fontSize: 20,
    fill: 'orange',
  };

  return (
    <svg
      width="200"
      height="200"
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
      }}
    >
      <path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z" fill="#FFD700" />
      <text x="50%" y="50%" dominantBaseline="top" textAnchor="top" style={textStyle}>
        {repo.name}
      </text>
    </svg>
  );
};

export default StarredRepos;
