import './Dashboard.styles.scss';
import { DashboardBody, Header, Search } from './components';
import { DataContext, useDataContext } from 'utils/context';
import { Tabs } from 'components';
import { dashboardTabs } from './dashboardTabs';
import { useState } from 'react';
import { TabType } from 'components/Tabs/Tabs';

const Dashboard = () => {
  const { defaultValues } = useDataContext();

  const [activeTab, setActiveTab] = useState<TabType>(dashboardTabs[0]);

  console.log('i am rerender');

  return (
    <div className='dashboard'>
      <Header>
        <Tabs
          items={dashboardTabs}
          activeTab={activeTab}
          setActiveTab={(at) => setActiveTab(at)}
        />
      </Header>
      <DataContext.Provider value={defaultValues}>
        <div className='dashboard_body'>
          <Search />
          <DashboardBody dataType={activeTab.content} />
        </div>
      </DataContext.Provider>
    </div>
  );
};

export default Dashboard;
