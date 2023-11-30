import React from "react";

export default function Footer() {
  return (
    <div className="flex bg-gradient-to-b from-secondary to-primary px-24 justify-between text-gray-500 font-mono font-medium text-lg py-2">
      <p>© 2023 Edzorb Law Private Limited</p>
      <nav className="flex gap-6">
        <a href="/"> F.A.Q. </a>
        <a href="/"> About Us </a>
        <a href="/"> Career </a>
        <a href="/"> Blog </a>
        <a href="/"> Privacy Policy </a>
        <a href="/"> Terms & Conditions </a>
      </nav>
    </div>
  );
}
