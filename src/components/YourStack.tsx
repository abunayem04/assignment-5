import { Technology } from '../types/technology';
import { StackItem } from './StackItem';

interface YourStackProps {
  selectedTechs: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function YourStack({ selectedTechs, onRemove, onRemoveAll }: YourStackProps) {
  const count = selectedTechs.length;
  const isEmpty = count === 0;

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <h2 className="sidebar-title">
          Your Stack
        </h2>
        <p className="sidebar-subtitle">
          {isEmpty
            ? 'No technologies selected yet.'
            : `${count} Technology Selected`}
        </p>
      </div>

      {isEmpty ? (
        <div className="empty-state">
          <p className="empty-msg">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="sidebar-body">
          <div className="items-list">
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

export default YourStack;
