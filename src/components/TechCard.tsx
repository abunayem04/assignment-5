import { Star, Check } from 'lucide-react';
import { Technology } from '../types/technology';

interface TechCardProps {
  technology: Technology;
  isAdded: boolean;
  onAddToStack: (tech: Technology) => void;
}

export const TechCard = ({
  technology,
  isAdded,
  onAddToStack,
}: TechCardProps) => {
  const getBadgeClass = (badge: string) => {
    switch (badge) {
      case 'Popular':
      case 'Top SQL':
      case 'Essential':
      case 'Containers':
      case 'Robust':
        return 'badge-blue';
      case 'Versatile':
      case 'Standard':
        return 'badge-green';
      case 'Fast':
      case 'Cache':
        return 'badge-rose';
      case 'Ubiquitous':
        return 'badge-amber';
      case 'Modern':
        return 'badge-teal';
      default:
        return 'badge-default';
    }
  };

  return (
    <div className={`font-jakarta ${isAdded ? 'tech-card-selected' : 'tech-card'}`}>
      <div>
        <div className="tech-card-top">
          <div className="tech-icon-box">
            <img
              src={technology.icon}
              alt={technology.name}
              className="tech-icon-img"
            />
          </div>
          <span className={`tech-badge ${getBadgeClass(technology.badge)}`}>
            {technology.badge}
          </span>
        </div>

        <h3 className="tech-card-title">
          {technology.name}
        </h3>

        <p className="tech-card-description">
          {technology.description}
        </p>
      </div>

      <div>
        <div className="tech-card-meta">
          <span className="tech-category-pill">
            {technology.category}
          </span>
          <span className="tech-difficulty-text">
            {technology.difficulty}
          </span>
          <div className="tech-rating-box">
            <Star className="star-icon" />
            <span>{technology.rating.toFixed(1)}</span>
          </div>
        </div>

        <button
          onClick={() => onAddToStack(technology)}
          disabled={isAdded}
          className={isAdded ? 'btn-already-added' : 'btn-add-to-stack'}
        >
          {isAdded ? (
            <>
              <Check className="check-icon" />
              <span>Added to Stack</span>
            </>
          ) : (
            'Add to Stack'
          )}
        </button>
      </div>
    </div>
  );
};
