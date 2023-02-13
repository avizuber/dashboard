import { useContext } from 'react';
import { DataContext } from 'utils/context';
import { DataTable } from '../index';

interface DashboardBodyProps {
  dataType: any;
}

const DashboardBody = ({ dataType }: DashboardBodyProps) => {
  const { currentData } = useContext(DataContext);

  return <DataTable data={currentData[`${dataType}`]} />;
};

export default DashboardBody;
