import './Button.styles.scss';
interface ButtonProps {
  label: string;
  name?: string;
  onClick: () => void;
}
const Button = ({ label, onClick, name }: ButtonProps) => {
  return (
    <button
      name={name || label}
      className='button'
      type='button'
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
