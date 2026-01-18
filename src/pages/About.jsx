import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900">
          About Me
        </h1>

        <p className="mt-4 text-gray-600">
          A quick overview of my background, skills, and career goals.
        </p>
      </div>

      {/* CONTENT */}
      <div className="mt-14 max-w-4xl mx-auto bg-white p-10 rounded-xl shadow">

        {/* INTRO */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600">
            Introduction
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Hi, I’m Sanidhya, a Computer Science student and an aspiring
            Frontend / Full Stack Developer. I enjoy building clean,
            responsive, and user-friendly web applications using modern
            technologies.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-600">
            Key Highlights
          </h2>
          <ul className="mt-4 list-disc ml-6 text-gray-700 space-y-1">
            <li>Strong foundation in Data Structures & Algorithms</li>
            <li>Hands-on experience with React and Tailwind CSS</li>
            <li>Built multiple projects using modern frontend practices</li>
            <li>Comfortable with Git, REST APIs, and clean code</li>
          </ul>
        </div>

        {/* EDUCATION */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-600">
            Education
          </h2>
          <p className="mt-3 text-gray-700">
          Final-year Computer Science undergraduate focused on data structures, problem-solving, and building scalable full-stack web applications.
          </p>
        </div>

        {/* GOALS */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-600">
            Career Goals
          </h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            I am actively seeking an internship or entry-level role where I
            can contribute to real-world projects, learn from experienced
            engineers, and grow as a software developer.
          </p>
        </div>

        {/* TECHNOLOGIES */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-600">
            Technologies I Work With
          </h2>
          <p className="mt-3 text-gray-700">
            React, Tailwind CSS, JavaScript, Node.js, Express.js, Git,
            REST APIs
          </p>
        </div>

        {/* CALL TO ACTION */}
        <div className="mt-10 text-center">
          <p className="text-gray-700 font-medium">
            Interested in working together?
          </p>
          <p className="mt-1 text-gray-600">
            Feel free to reach out via the Contact page.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;
