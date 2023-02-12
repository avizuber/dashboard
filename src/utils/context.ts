import { DataType } from 'data/types';
import React, { useState } from 'react';
import data from '../data/fe_data.json';

interface DataContextInterface {
  currentData: DataType | any | null;
  setCurrentData: React.Dispatch<React.SetStateAction<DataType | null>> | any;
  searchValues: {
    queryString: string;
    piiOnlyStatus: boolean;
  };
  setSearchValues: React.Dispatch<React.SetStateAction<boolean | null>> | any;
}

const DataContext = React.createContext<DataContextInterface>({
  currentData: data,
  setCurrentData: null,
  searchValues: {
    queryString: '',
    piiOnlyStatus: false,
  },
  setSearchValues: null,
});

const useDataContext = () => {
  const [currentData, setCurrentData] = useState(data);
  const [searchValues, setSearchValues] = useState({
    queryString: '',
    piiOnlyStatus: false,
  });

  const defaultValues = {
    currentData,
    setCurrentData,
    searchValues,
    setSearchValues,
  };

  return {
    defaultValues,
  };
};

export { DataContext, useDataContext };
