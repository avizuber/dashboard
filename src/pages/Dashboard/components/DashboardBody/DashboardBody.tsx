import { DataContext, useDataContext } from 'utils/context';

interface DashboardBodyProps {
  children: React.ReactElement | React.ReactElement[];
}

const DashboardBody = ({ children }: DashboardBodyProps) => {
  const { defaultValues } = useDataContext();

  return (
    <DataContext.Provider value={defaultValues}>
      {children}
    </DataContext.Provider>
  );
};

export default DashboardBody;
