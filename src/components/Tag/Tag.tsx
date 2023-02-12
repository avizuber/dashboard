import './Tag.styles.scss';
interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return <span className='tag'>{text}</span>;
};

export default Tag;
