import { X } from 'lucide-react';
import { Technology } from '../types/technology';

interface StackItemProps {
  technology: Technology;
  onRemove: (id: string) => void;
}

export const StackItem = ({ technology, onRemove }: StackItemProps) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200/90 p-3 flex items-center justify-between shadow-sm transition-all hover:border-slate-300">
      <div className="flex items-center space-x-3 min-w-0">
        <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 p-1 flex items-center justify-center flex-shrink-0">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-6 h-6 object-contain"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
            }}
          />
        </div>
        <div className="truncate">
          <h4 className="text-sm font-bold text-slate-900 leading-tight truncate">
            {technology.name}
          </h4>
          <p className="text-xs text-slate-400 font-medium">
            {technology.category}
          </p>
        </div>
      </div>

      <button
        onClick={() => onRemove(technology.id)}
        className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 p-1.5 rounded-lg transition-colors flex-shrink-0"
        aria-label={`Remove ${technology.name} from stack`}
      >
        <X className="w-4 h-4 stroke-[2]" />
      </button>
    </div>
  );
};

