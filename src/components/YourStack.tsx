import { Technology } from '../types/technology';
import { StackItem } from './StackItem';

interface YourStackProps {
  selectedTechs: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function YourStack({ selectedTechs, onRemove, onRemoveAll }: YourStackProps) {
  const count = selectedTechs.length;

  return (
    <aside className="sidebar">
      <div className="mb-6">
        <h2 className="sidebar-title">
          Your Stack
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          {count === 0
            ? 'No technologies selected yet.'
            : `${count} Technology Selected`}
        </p>
      </div>

      {count === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-2xl py-12 px-4 text-center">
          <p className="text-sm font-medium text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-2.5 max-h-[440px] overflow-y-auto pr-1">
            {selectedTechs.map((tech) => (
              <StackItem
                key={tech.id}
                technology={tech}
                onRemove={onRemove}
              />
            ))}
          </div>

          <button onClick={onRemoveAll} className="remove-all-btn">
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
}
