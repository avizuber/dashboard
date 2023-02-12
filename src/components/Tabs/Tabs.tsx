import './Tabs.styles.scss';

export type TabType = {
  name: string;
  content: React.ReactNode | JSX.Element;
};

interface TabsProps {
  items: TabType[];
  activeTab: TabType;
  setActiveTab: (arg0: TabType) => void;
}

const Tabs = ({ items, activeTab, setActiveTab }: TabsProps) => {
  return (
    <div className='tabs'>
      {items?.map((tab) => {
        return (
          <div
            key={tab.name}
            className={`tabs-item ${
              activeTab.name === tab.name ? 'active' : ''
            }`}
            onClick={() => setActiveTab(tab)}
          >
            <span className='tabs-item_name'>{tab.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
