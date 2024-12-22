import React, { useState } from "react";
import {
  Upload,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  X,
} from "lucide-react";

export default function VideoManagementUI() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const videos = [
    {
      id: 1,
      title: "Getting Started with React",
      duration: "15:30",
      tags: ["frontend", "react"],
      thumbnail: "react",
    },
    {
      id: 2,
      title: "Node.js Complete Tutorial",
      duration: "22:45",
      tags: ["backend", "nodejs"],
      thumbnail: "nodejs",
    },
    {
      id: 3,
      title: "MongoDB Essentials",
      duration: "18:20",
      tags: ["database", "mongodb"],
      thumbnail: "mongodb",
    },
    {
      id: 4,
      title: "Docker for Beginners",
      duration: "25:15",
      tags: ["devops", "docker"],
      thumbnail: "docker",
    },
    {
      id: 5,
      title: "Express.js API Development",
      duration: "20:10",
      tags: ["backend", "express"],
      thumbnail: "express",
    },
    {
      id: 6,
      title: "Web Security Fundamentals",
      duration: "28:45",
      tags: ["security", "web"],
      thumbnail: "security",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Video Management</h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Upload size={20} />
            <span>Upload Video</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search videos..."
                className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                className="absolute right-3 top-3.5 text-gray-400"
                size={20}
              />
            </div>
          </div>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Filter size={20} />
            <span>Filter</span>
          </button>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail */}
              <div className="relative group">
                <img
                  src={`/api/placeholder/400/225?text=${video.thumbnail}`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity flex items-center justify-center">
                  <PlayCircle className="text-white w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </span>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {video.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
            <ChevronLeft size={20} />
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`px-4 py-2 rounded-lg transition-colors ${
                page === 1
                  ? "bg-blue-500 text-white"
                  : "border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
            <ChevronRight size={20} />
          </button>
        </div>
      </main>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>
            <div className="aspect-video bg-black">
              <img
                src={`/api/placeholder/800/450?text=${selectedVideo.thumbnail}`}
                alt={selectedVideo.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex gap-2 mb-4">
                {selectedVideo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-gray-600">
                Duration: {selectedVideo.duration}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
