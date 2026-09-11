import React from 'react';
import { Technology } from '../types/technology';
import { TechCard } from './TechCard';
import { Loader2 } from 'lucide-react';

interface TechGridProps {
  technologies: Technology[];
  selectedTechs: Technology[];
  isLoading: boolean;
  onAddToStack: (tech: Technology) => void;
}

export const TechGrid: React.FC<TechGridProps> = ({
  technologies,
  selectedTechs,
  isLoading,
  onAddToStack,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Explore the <span className="bg-gradient-to-r from-[#FF5E3A] via-[#FF2A6D] to-[#9B51E0] bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-500 mt-2 font-normal">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <Loader2 className="w-10 h-10 text-[#FF2A6D] animate-spin" />
          <p className="text-slate-600 font-medium text-sm">
            Loading technology data...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              technology={tech}
              isAdded={selectedTechs.some((item) => item.id === tech.id)}
              onAddToStack={onAddToStack}
            />
          ))}
        </div>
      )}
    </div>
  );
};
