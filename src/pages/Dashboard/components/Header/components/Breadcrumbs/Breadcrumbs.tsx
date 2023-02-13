import './Breadcrumbs.styles.scss';
import useBreadcrumbs from './useBreadcrumbs';

interface BreadcrumbsProps {
  breadcrumbsData: string[];
}

const Breadcrumbs = ({ breadcrumbsData }: BreadcrumbsProps) => {
  const { formattedBreadcrumbs } = useBreadcrumbs();

  return (
    <div className='breadcrumbs'>
      {formattedBreadcrumbs(breadcrumbsData)
        .slice(0, -1)
        .map((item, index) => {
          return (
            <span className='breadcrumbs-item' key={index}>
              {item}
            </span>
          );
        })}
    </div>
  );
};

export default Breadcrumbs;
