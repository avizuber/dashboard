import './Search.styles.scss';
import { Button, Icon } from 'components';
import SearchIcon from '../../../../assets/icons/magnifying-glass.svg';
import { useContext } from 'react';
import { DataContext } from 'utils/context';
import { useState } from 'react';

const Search = () => {
  const { setSearchValues } = useContext(DataContext);
  const [searchValue, setSearchValue] = useState<string>('');
  const [piiOnly, setPiiOnly] = useState<boolean>(false);

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handlePIIOnlyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPiiOnly(e.target.checked);
  };

  const handleFilterData = () => {
    setSearchValues({
      queryString: searchValue,
      piiOnlyStatus: piiOnly,
    });
  };

  const handleReset = () => {
    setSearchValue('');
    setPiiOnly(false);
    setSearchValues({
      queryString: '',
      piiOnlyStatus: false,
    });
  };

  return (
    <>
      <div className='search'>
        <div className='search-left'>
          <div className='search-icon'>
            <Icon src={SearchIcon} />
          </div>
          <div className='search-input'>
            <input
              type='text'
              placeholder='Search'
              value={searchValue}
              onChange={handleSearchValueChange}
            />
          </div>
          <div className='search-separator' />
          <div className='search-filter'>
            <input
              type='checkbox'
              checked={piiOnly}
              onChange={handlePIIOnlyChange}
            />
            <span className='search-filter_label'>Show PII only</span>
          </div>
        </div>
        <div className='search-button'>
          <Button label='Apply' onClick={handleFilterData} />
        </div>
      </div>
      <span className='search-reset' onClick={handleReset}>
        Reset Filter
      </span>
    </>
  );
};

export default Search;
