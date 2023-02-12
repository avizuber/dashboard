import { Collapse, Tag, ToggleButton } from 'components';
import { DataParamType } from 'data/types';
import { useContext } from 'react';
import { DataContext } from 'utils/context';
import './DataTable.styles.scss';

interface DataTableProps {
  data: any;
}

const DataTable = ({ data }: DataTableProps) => {
  const { searchValues } = useContext(DataContext);
  return (
    <div className='data-table'>
      <div className='data-table_header'>
        <div className='data-table_col-1'>Name</div>
        <div className='data-table_col-2'>PII</div>
        <div className='data-table_col-3'>Masking</div>
        <div className='data-table_col-4'>Type</div>
      </div>
      <div className='data-table_body'>
        {Object.keys(data).map((key, index) => {
          return (
            <Collapse header={key} key={index}>
              {data[key]
                .filter(
                  (i: DataParamType) =>
                    i.name.includes(searchValues.queryString) ||
                    i.type.includes(searchValues.queryString)
                )
                .filter((i: DataParamType) => {
                  if (searchValues.piiOnlyStatus === true) {
                    return i.pii === true;
                  } else {
                    return i;
                  }
                })
                .map((rowItem: any, rowItemIndex: number) => {
                  return (
                    <div className='data-table_row' key={rowItemIndex}>
                      <span className='data-table_col-1'>{rowItem.name}</span>
                      <span className='data-table_col-2'>
                        <ToggleButton
                          label='PII'
                          theme='secondary'
                          isOn={rowItem.pii}
                          onClick={() => (rowItem.pii = !rowItem.pii)}
                        />
                      </span>
                      <span className='data-table_col-3'>
                        <ToggleButton
                          label='Masked'
                          theme='primary'
                          isOn={rowItem.masking}
                        />
                      </span>
                      <span className='data-table_col-4'>
                        <Tag text={rowItem.type} />
                      </span>
                    </div>
                  );
                })}
            </Collapse>
          );
        })}
      </div>
    </div>
  );
};

export default DataTable;
