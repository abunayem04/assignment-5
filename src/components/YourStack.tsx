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
    <aside className="stack-sidebar">
      <div className="stack-sidebar-header">
        <h2 className="stack-title">
          Your Stack
        </h2>
        <p className="stack-subtitle">
          {count === 0
            ? 'No technologies selected yet.'
            : `${count} Technology Selected`}
        </p>
      </div>

      {count === 0 ? (
        <div className="stack-empty-box">
          <p className="stack-empty-text">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="stack-body">
          <div className="stack-items-scroll">
            {selectedTechs.map((tech) => (
              <StackItem
                key={tech.id}
                technology={tech}
                onRemove={onRemove}
              />
            ))}
          </div>

          <button onClick={onRemoveAll} className="btn-remove-all">
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};
