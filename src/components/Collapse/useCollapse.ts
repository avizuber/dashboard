import { useState } from 'react';

const useCollapse = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCollapseToggle = () => {
    setIsOpen(!isOpen);
  };

  const formatHeaderText = (header: string) => {
    const result = header.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  };

  return {
    isOpen,
    handleCollapseToggle,
    formatHeaderText,
  };
};

export default useCollapse;
