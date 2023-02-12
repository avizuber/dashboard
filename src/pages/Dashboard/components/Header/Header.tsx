import './Header.styles.scss';
import { Breadcrumbs } from './components';
import data from '../../../../data/fe_data.json';

interface HeaderProps {
  children: React.ReactElement;
}

const Header = ({ children }: HeaderProps) => {
  const { method, path, api } = data;
  const breadcrumbsData = ['All APIs', api, path];

  return (
    <div className='header'>
      <div className='header_page-title'>
        <span className='method'>{method}</span>
        <span className='path'>{path}</span>
      </div>
      <Breadcrumbs breadcrumbsData={breadcrumbsData} />
      <div className='divider' />
      <div>{children}</div>
    </div>
  );
};

export default Header;
