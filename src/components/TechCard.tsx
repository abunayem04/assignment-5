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
    if (badge === 'Popular' || badge === 'Top SQL' || badge === 'Essential' || badge === 'Containers' || badge === 'Robust') {
      return 'bg-sky-50 text-sky-600 border-sky-100';
    }
    if (badge === 'Versatile' || badge === 'Standard') {
      return 'bg-emerald-50 text-emerald-600 border-emerald-100';
    }
    if (badge === 'Fast' || badge === 'Cache') {
      return 'bg-rose-50 text-rose-600 border-rose-100';
    }
    if (badge === 'Ubiquitous') {
      return 'bg-amber-50 text-amber-700 border-amber-100';
    }
    if (badge === 'Modern') {
      return 'bg-teal-50 text-teal-600 border-teal-100';
    }
    return 'bg-slate-50 text-slate-600 border-slate-100';
  };

  return (
    <div
      className={`bg-white rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 font-jakarta ${
        isAdded
          ? 'border-2 border-brand-pink shadow-sm'
          : 'border border-slate-100 shadow-sm hover:shadow-md'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 p-1.5 border border-slate-100">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-7 h-7 object-contain"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
              }}
            />
          </div>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getBadgeClass(technology.badge)}`}>
            {technology.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
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
          <span className="text-slate-500 font-normal">
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
          className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 ${
            isAdded
              ? 'bg-slate-100 text-slate-600 cursor-not-allowed border border-slate-200'
              : 'bg-brand-dark text-white hover:bg-brand-darkHover active:scale-[0.98] shadow-sm'
          }`}
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

