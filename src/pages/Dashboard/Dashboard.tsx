import './Dashboard.styles.scss';
import { DashboardBody, DashboardData, Header, Search } from './components';
import { Tabs } from 'components';
import { dashboardTabs } from './constants';
import { useState } from 'react';
import { TabType } from 'components/Tabs/Tabs';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<TabType>(dashboardTabs[0]);

  return (
    <div className='dashboard'>
      <Header>
        <Tabs
          items={dashboardTabs}
          activeTab={activeTab}
          setActiveTab={(at) => setActiveTab(at)}
        />
      </Header>

      <div className='dashboard_body'>
        <DashboardBody>
          <Search />
          <DashboardData dataType={activeTab.content} />
        </DashboardBody>
      </div>
    </div>
  );
};

export default Dashboard;
