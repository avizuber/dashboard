import './Collapse.styles.scss';
import React from 'react';
import { useState } from 'react';
import { Icon } from 'components';
import CollapseArrow from '../../assets/icons/caret-down.svg';

interface CollapseProps {
  header: string;
  children: React.ReactElement;
}

const formatHeaderText = (header: string) => {
  const result = header.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};

const Collapse = ({ header, children }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleCollapseToggle = () => {
    setIsOpen(!isOpen);
  };

  // TODO: Accessibility for header click

  return (
    <div className={`collapse ${isOpen ? 'is-open' : 'is-closed'}`}>
      <div className='collapse_header' onClick={handleCollapseToggle}>
        <span className='collapse_header-toggle'>
          <Icon src={CollapseArrow} />
        </span>
        {formatHeaderText(header)}
      </div>
      <div className='collapse_body'>{children}</div>
    </div>
  );
};

export default Collapse;
