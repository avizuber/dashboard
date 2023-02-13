import './ToggleButton.styles.scss';
import useToggleButton from './useToggleButton';

interface ToggleButtonProps {
  label: string;
  isOn: boolean;
  theme: 'primary' | 'secondary';
  onClick?: () => void;
}

const ToggleButton = ({ label, isOn, theme, onClick }: ToggleButtonProps) => {
  const { isActive, handleToggleClick } = useToggleButton({ isOn, onClick });

  // TODO: Accessibility on button
  // TODO: Consider optimistic UI using local state

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
