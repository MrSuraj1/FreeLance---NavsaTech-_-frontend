// src/pages/SingleBlog.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function SingleBlog() {
  const { id } = useParams();

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Blog Post #{id}
        </h1>
        <p className="text-gray-700 leading-relaxed">
          This is a detailed blog post page. You can fetch content from your
          backend or CMS (like WordPress, Strapi, or Firebase) using the blog
          ID.
        </p>
      </div>
    </section>
  );
}
