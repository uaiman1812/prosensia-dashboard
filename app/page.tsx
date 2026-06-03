'use client';

import { useState } from 'react';
import Button from '@/src/components/atoms/Button';
import Card from '@/src/components/molecules/Card';
import Modal from '@/src/components/molecules/Modal';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          ProSensia Full Stack Dashboard
        </h1>
        <p className="text-gray-500">Day 2: Atomic Design with Next.js + TypeScript + Tailwind</p>
      </div>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Total Tasks</h3>
            <span className="text-2xl">📋</span>
          </div>
          <p className="text-3xl font-bold text-blue-600">5/12</p>
          <p className="text-sm text-gray-400 mt-2">Today's progress</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '41%' }}></div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Components Built</h3>
            <span className="text-2xl">🎨</span>
          </div>
          <p className="text-3xl font-bold text-green-600">3/8</p>
          <p className="text-sm text-gray-400 mt-2">Atomic Design</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: '37%' }}></div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Performance Score</h3>
            <span className="text-2xl">⚡</span>
          </div>
          <p className="text-3xl font-bold text-purple-600">98%</p>
          <p className="text-sm text-gray-400 mt-2">With cleanup hooks</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '98%' }}></div>
          </div>
        </div>
      </div>
      
      {/* Buttons */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          ✨ Open Modal
        </button>
        
        <a
          href="https://github.com/uaiman1812/prosensia-dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-purple-400 hover:text-purple-600 shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center gap-2"
        >
          📂 View Repository
        </a>
      </div>
      
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="✅ Success!">
        <div className="text-center">
          <div className="text-5xl mb-4">🎉</div>
          <p className="text-green-600 font-semibold mb-2">useEffect cleanup implemented properly!</p>
          <p className="text-sm text-gray-500">No memory leaks here.</p>
          <p className="text-xs text-gray-400 mt-4 bg-gray-50 p-3 rounded-lg">
            Component unmounts → Clean subscription removed
          </p>
        </div>
      </Modal>
    </main>
  );
}