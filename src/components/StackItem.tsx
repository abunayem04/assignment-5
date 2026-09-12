import { X } from 'lucide-react';
import { Technology } from '../types/technology';

interface StackItemProps {
  technology: Technology;
  onRemove: (id: string) => void;
}

export const StackItem = ({ technology, onRemove }: StackItemProps) => {
  return (
    <div className="item-row">
      <div className="item-details">
        <div className="item-icon">
          <img
            src={technology.icon}
            alt={technology.name}
            className="item-img"
          />
        </div>
        <div className="item-meta">
          <h4 className="item-name">
            {technology.name}
          </h4>
          <p className="item-cat">
            {technology.category}
          </p>
        </div>
      </div>

      <button
        onClick={() => onRemove(technology.id)}
        className="item-remove"
      >
        <X className="remove-icon" />
      </button>
    </div>
  );
};
