import { Icon } from 'components';
import ArrowIcon from '../../../../../../assets/icons/angle-right.svg';

const useBreadcrumbs = () => {
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

  return {
    formattedBreadcrumbs,
  };
};

export default useBreadcrumbs;
