import { Technology } from '../types/technology';
import { TechCard } from './TechCard';
import { Loader2 } from 'lucide-react';

interface TechGridProps {
  technologies: Technology[];
  selectedTechs: Technology[];
  isLoading: boolean;
  onAddToStack: (tech: Technology) => void;
}

export const TechGrid = ({
  technologies,
  selectedTechs,
  isLoading,
  onAddToStack,
}: TechGridProps) => {
  return (
    <div className="tech-grid-wrapper">
      <div>
        <h2 className="tech-grid-title">
          Explore the <span className="gradient-text">Technologies</span>
        </h2>
        <p className="tech-grid-subtitle">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {isLoading ? (
        <div className="tech-grid-loading">
          <Loader2 className="loading-spinner" />
          <p className="loading-text">
            Loading technology data...
          </p>
        </div>
      ) : (
        <div className="tech-grid-list">
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
