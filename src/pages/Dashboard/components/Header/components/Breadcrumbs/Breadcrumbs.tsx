import './Breadcrumbs.styles.scss';
import { Icon } from 'components';
import ArrowIcon from '../../../../../../assets/icons/angle-right.svg';

interface BreadcrumbsProps {
  breadcrumbsData: string[];
}

const formattedBreadcrumbs = (breadcrumbsData: (string | JSX.Element)[]) => {
  return breadcrumbsData.reduce<(string | JSX.Element)[]>(
    (acc, val) =>
      acc.concat(
        val,
        <span className='breadcrumbs-icon'>
          <Icon src={ArrowIcon} />
        </span>
      ),
    []
  );
};

const Breadcrumbs = ({ breadcrumbsData }: BreadcrumbsProps) => {
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
