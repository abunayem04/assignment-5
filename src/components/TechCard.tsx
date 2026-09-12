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
  // pick badge color based on the badge text
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

  const cardClass = isAdded ? 'tech-card-selected' : 'tech-card';

  return (
    <div className={cardClass}>
      <div>
        <div className="card-header">
          <div className="icon-wrapper">
            <img
              src={technology.icon}
              alt={technology.name}
              className="icon-img"
            />
          </div>
          <span className={`tech-badge ${getBadgeClass(technology.badge)}`}>
            {technology.badge}
          </span>
        </div>

        <h3 className="card-title">
          {technology.name}
        </h3>

        <p className="tech-desc">
          {technology.description}
        </p>
      </div>

      <div>
        <div className="tech-meta">
          <span className="category-tag">
            {technology.category}
          </span>
          <span className="difficulty-label">
            {technology.difficulty}
          </span>
          <div className="rating">
            <Star className="star-icon" />
            <span>{technology.rating.toFixed(1)}</span>
          </div>
        </div>

        <button
          onClick={() => onAddToStack(technology)}
          disabled={isAdded}
          className={isAdded ? 'added-btn' : 'add-btn'}
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
