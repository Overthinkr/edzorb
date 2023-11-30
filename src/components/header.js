import React from "react";

export default function Header() {
  return (
    <div className="header flex flex-row bg-primary p-4 text-cyan-50 justify-between items-center px-60">
      <div className="flex flex-row gap-8 text-center items-center">
        <img
          src={process.env.PUBLIC_URL + "/logo.jpg"}
          alt="logo"
          className="rounded-full h-10 w-50"
        />
        <span className="material-symbols-outlined">verified_user</span>
        <a href="/">Premium+</a>
        <a href="/">Blogs</a>
        <a href="/" className="text-center flex align-middle gap-1">
          <span className="material-symbols-outlined">mic</span>Podcast
        </a>
      </div>
      <div className="flex flex-row gap-6 text-center items-center">
        <span className="material-symbols-outlined cursor-pointer">
          play_arrow
        </span>
        <span className="material-symbols-outlined cursor-pointer">ios</span>
        <a
          className="bg-yellow-500 text-black border-2 border-yellow-500 p-2 px-4 rounded-xl font-semibold hover:border-2 hover:border-white hover:text-white"
          href="/login"
        >
          Login
        </a>
        <a
          className="bg-white text-black border-2 border-white p-2 px-4 rounded-xl font-semibold hover:border-2 hover:border-yellow-500"
          href="/register"
        >
          Signup
        </a>
      </div>
    </div>
  );
}
