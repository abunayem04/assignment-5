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


  function getBadgeColor(badge: string) {
    if (badge === 'Popular' || badge === 'Top SQL' || badge === 'Essential' || badge === 'Containers' || badge === 'Robust') {
      return 'badge-blue';
    } else if (badge === 'Versatile' || badge === 'Standard') {
      return 'badge-green';
    } else if (badge === 'Fast' || badge === 'Cache') {
      return 'badge-rose';
    } else if (badge === 'Ubiquitous') {
      return 'badge-amber';
    } else if (badge === 'Modern') {
      return 'badge-teal';
    }
    return 'badge-default';
  }

  return (
    <div className={isAdded ? 'tech-card-selected' : 'tech-card'}>
      <div>
        <div className="card-header">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 p-1.5 border border-slate-100">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-7 h-7 object-contain"
            />
          </div>
          <span className={`tech-badge ${getBadgeColor(technology.badge)}`}>
            {technology.badge}
          </span>
        </div>

        <h3 className="card-title">
          {technology.name}
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
          {technology.description}
        </p>
      </div>

      <div>

        <div className="flex items-center justify-between text-xs pt-3 pb-5 border-t border-slate-50 text-slate-600">
          <span className="bg-slate-50 text-slate-700 font-medium px-2.5 py-1 rounded-md border border-slate-100">
            {technology.category}
          </span>
          <span className="text-slate-500">
            {technology.difficulty}
          </span>
          <div className="flex items-center gap-1 font-semibold text-slate-700">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
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
              <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
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
