import React from "react";
import "./BlogCard.scss";

export default function BlogCard({ blog, isDark }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div onClick={() => openUrlInNewTab(blog.url, blog.title)}>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <div
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
        >
          <div className="blog-text-container">
            <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
              {blog.title}
            </h3>
            <p className={isDark ? "small-dark small" : "small"}>
              {blog.description}
            </p>
          </div>
          {blog.image && (
            <div className="blog-image-container">
              <img
                src={blog.image}
                alt={`Cover for ${blog.title}`}
                className="blog-image"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}