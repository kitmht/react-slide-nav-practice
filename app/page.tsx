"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Navigation */}
      <nav
        className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition duration-200 ease-in-out`}
      >
        <Button
          variant="ghost"
          className="absolute right-2 top-2 text-white"
          onClick={toggleNav}
        >
          <X className="h-6 w-6" />
        </Button>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Home
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          About
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Services
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          Contact
        </a>
      </nav>

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col overflow-hidden ${isOpen ? "ml-64" : "ml-0"} transition-margin duration-200 ease-in-out`}
      >
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <Button variant="outline" onClick={toggleNav}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Welcome to the Dashboard
              </h2>
              <p className="text-gray-600">
                This is your main content area. You can add more components or
                content here as needed.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
