import { X } from 'lucide-react';
import { Technology } from '../types/technology';

interface StackItemProps {
  technology: Technology;
  onRemove: (id: string) => void;
}

export const StackItem = ({ technology, onRemove }: StackItemProps) => {
  return (
    <div className="stack-item-card">
      <div className="stack-item-info">
        <div className="stack-item-icon-box">
          <img
            src={technology.icon}
            alt={technology.name}
            className="stack-item-icon-img"
          />
        </div>
        <div className="stack-item-text">
          <h4 className="stack-item-title">
            {technology.name}
          </h4>
          <p className="stack-item-category">
            {technology.category}
          </p>
        </div>
      </div>

      <button
        onClick={() => onRemove(technology.id)}
        className="stack-item-remove-btn"
      >
        <X className="remove-icon" />
      </button>
    </div>
  );
};
