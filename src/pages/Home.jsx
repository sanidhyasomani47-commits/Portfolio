import React from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const data = useLoaderData();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 px-6 py-12">

      {/* HERO SECTION */}
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Hi, I'm <span className="text-blue-600">Sanidhya Somani</span> 👋
        </h1>

        {/* PROFILE IMAGE */}
        <div className="mt-6 flex justify-center">
          <motion.img
            src={data.avatar_url}
            alt="Sanidhya"
            className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        <p className="mt-5 text-xl text-gray-700 font-medium">
          Frontend / Full Stack Developer
        </p>

        <p className="mt-3 text-gray-600 leading-relaxed">
          I build responsive and user-friendly web applications using
          modern technologies.
        </p>
      </motion.div>

      {/* TECH STACK */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-900">
          Tech Stack
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Frontend
            </h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Backend
            </h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST APIs</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* PROGRAMMING LANGUAGES */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-900">
          Programming Languages
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-blue-600">
              Preferred Language
            </h3>
            <p className="mt-4 text-lg font-semibold text-gray-800">
              C++
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-md sm:col-span-2"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-blue-600">
              Other Languages
            </h3>
            <ul className="mt-4 list-disc ml-6 text-gray-700 space-y-1">
              <li>Python</li>
              <li>JavaScript</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* DATA STRUCTURES & ALGORITHMS */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-900">
          Data Structures & Algorithms
        </h2>

        <div className="mt-10 max-w-5xl mx-auto grid gap-8 sm:grid-cols-2">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Data Structures
            </h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Arrays</li>
              <li>Strings</li>
              <li>Hash Maps</li>
              <li>Sets</li>
              <li>Stacks</li>
              <li>Queues</li>
              <li>Linked Lists</li>
              <li>Trees (Binary Tree, BST)</li>
              <li>Basic Graphs</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Algorithms & Concepts
            </h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Recursion</li>
              <li>Sorting Algorithms</li>
              <li>Searching Algorithms</li>
              <li>BFS</li>
              <li>DFS</li>
              <li>Time & Space Complexity</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
}

export default Home;

/* ---------------- LOADER ---------------- */

export const gitinfoloader=async()=>{
    const res=await fetch('https://api.github.com/users/sanidhyasomani47-commits')
    return res.json()
}
