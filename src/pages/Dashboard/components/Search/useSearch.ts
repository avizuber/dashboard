import { useContext, useState } from 'react';
import { DataContext } from 'utils/context';

const useSearch = () => {
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

  return {
    handleSearchValueChange,
    handlePIIOnlyChange,
    handleFilterData,
    handleReset,
    searchValue,
    piiOnly,
  };
};

export default useSearch;
