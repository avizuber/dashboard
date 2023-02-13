import { useState } from 'react';

interface UseToggleButtonProps {
  isOn: boolean;
  onClick?: () => void;
}

const useToggleButton = ({ isOn, onClick }: UseToggleButtonProps) => {
  const [isActive, setIsActive] = useState(isOn);
  const handleToggleClick = () => {
    setIsActive(!isActive);
    onClick && onClick();
  };

  return {
    isActive,
    handleToggleClick,
  };
};

export default useToggleButton;
