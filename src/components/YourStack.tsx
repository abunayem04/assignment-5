import { Technology } from '../types/technology';
import { StackItem } from './StackItem';

interface YourStackProps {
  selectedTechs: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export const YourStack = ({
  selectedTechs,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  const count = selectedTechs.length;

  return (
    <aside className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm sticky top-28 self-start">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Your Stack
        </h2>
        <p className="text-sm text-slate-400 mt-1 font-normal">
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

          <button
            onClick={onRemoveAll}
            className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-rose-600 border border-rose-200 hover:bg-rose-50 active:scale-[0.98] transition-all duration-200"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};

