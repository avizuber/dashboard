import { useState } from 'react';
import './ToggleButton.styles.scss';

interface ToggleButtonProps {
  label: string;
  isOn: boolean;
  theme: 'primary' | 'secondary';
  onClick?: () => void;
}

const ToggleButton = ({ label, isOn, theme, onClick }: ToggleButtonProps) => {
  // TODO: Accessibility on button
  // TODO: Consider optimistic UI using local state
  const [isActive, setIsActive] = useState(isOn);
  const handleToggleClick = () => {
    setIsActive(!isActive);
    onClick && onClick();
  };

  return (
    <div
      onClick={handleToggleClick}
      className={`toggle-button ${isActive ? 'on' : ''} ${theme}`}
    >
      {label}
    </div>
  );
};

export default ToggleButton;
