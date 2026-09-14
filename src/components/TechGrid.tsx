import { Technology } from '../types/technology';
import { TechCard } from './TechCard';
import { Loader2 } from 'lucide-react';

interface TechGridProps {
  technologies: Technology[];
  selectedTechs: Technology[];
  isLoading: boolean;
  onAddToStack: (tech: Technology) => void;
}

export function TechGrid({
  technologies,
  selectedTechs,
  isLoading,
  onAddToStack,
}: TechGridProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="section-heading">
          Explore the <span className="gradient-text">Technologies</span>
        </h2>
        <p className="section-subtext">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <Loader2 className="w-10 h-10 text-brand-pink animate-spin" />
          <p className="text-slate-600 font-medium text-sm">
            Loading technology data...
          </p>
        </div>
      ) : (
        <div className="cards-grid">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              technology={tech}
              isAdded={selectedTechs.some((s) => s.id === tech.id)}
              onAddToStack={onAddToStack}
            />
          ))}
        </div>
      )}
    </div>
  );
}
