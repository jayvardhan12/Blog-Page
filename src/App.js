import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Understanding React Basics",
      content:
        "React is a powerful library for building user interfaces. Learn the basics of components, props, and state.",
      category: "Frontend",
    },
    {
      id: 2,
      title: "Building RESTful APIs with Node.js",
      content:
        "Learn how to build efficient and scalable RESTful APIs using Node.js and Express framework.",
      category: "Backend",
    },
    {
      id: 3,
      title: "Mastering JavaScript ES6 Features",
      content:
        "JavaScript ES6 introduced many exciting features like arrow functions, destructuring, and more. Master them now!",
      category: "JavaScript",
    },
    {
      id: 4,
      title: "Optimizing Web Performance",
      content:
        "Explore techniques to speed up your web applications using caching, lazy loading, and more.",
      category: "Performance",
    },
    {
      id: 5,
      title: "Introduction to Docker",
      content:
        "Docker simplifies the deployment of applications. Learn how to containerize your apps effectively.",
      category: "DevOps",
    },
    {
      id: 6,
      title: "CSS Grid Layouts for Beginners",
      content:
        "CSS Grid is a powerful tool for creating responsive web layouts. Get started with practical examples.",
      category: "Frontend",
    },
    {
      id: 7,
      title: "Understanding Authentication with OAuth 2.0",
      content:
        "Learn the basics of OAuth 2.0 for securing web and mobile applications.",
      category: "Security",
    },
    {
      id: 8,
      title: "React Performance Optimization Tips",
      content:
        "Improve your React app's performance with these optimization strategies, including memoization and lazy loading.",
      category: "Frontend",
    },
    {
      id: 9,
      title: "Node.js Streams Explained",
      content:
        "Streams in Node.js provide an efficient way to handle data. Learn how to use them effectively.",
      category: "Backend",
    },
    {
      id: 10,
      title: "Exploring Kubernetes Basics",
      content:
        "Kubernetes automates deployment and scaling of applications. Get familiar with its core concepts.",
      category: "DevOps",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const numberOfStars = 100;
    const starContainer = document.querySelector('.starryBackground');

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      const size = Math.random() * 2 + 1;
      const positionX = Math.random() * window.innerWidth;
      const positionY = Math.random() * window.innerHeight;

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${positionX}px`;
      star.style.top = `${positionY}px`;

      starContainer.appendChild(star);
    }
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "all" || post.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container">
      <div className="starryBackground"></div>
      <h1 className="header">Tech Blog</h1>

      {selectedPost ? (
        <div className="postDetails">
          <h2 className="postTitle">{selectedPost.title}</h2>
          <p className="postCategory">Category: {selectedPost.category}</p>
          <p className="postContent">{selectedPost.content}</p>
          <button className="backButton" onClick={() => setSelectedPost(null)}>
            Back to Blog List
          </button>
        </div>
      ) : (
        <div>
          <div className="searchContainer">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="searchBox"
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="filterDropdown"
            >
              <option value="all">All</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Performance">Performance</option>
              <option value="DevOps">DevOps</option>
              <option value="Security">Security</option>
            </select>
          </div>

          <div className="blogList">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="blogItem"
                  onClick={() => setSelectedPost(post)}
                >
                  <h3 className="blogTitle">{post.title}</h3>
                  <p className="blogPreview">
                    {post.content.substring(0, 60)}...
                  </p>
                  <span className="categoryTag">{post.category}</span>
                </div>
              ))
            ) : (
              <p className="noResults">No results found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
