import './Collapse.styles.scss';
import React from 'react';
import { Icon } from 'components';
import CollapseArrow from '../../assets/icons/caret-down.svg';
import useCollapse from './useCollapse';

interface CollapseProps {
  header: string;
  children: React.ReactElement;
}

const Collapse = ({ header, children }: CollapseProps) => {
  const { isOpen, handleCollapseToggle, formatHeaderText } = useCollapse();

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
