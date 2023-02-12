import SVG from 'react-inlinesvg';

interface IconProps {
  src: string;
}

const Icon = ({ src }: IconProps) => {
  return <SVG src={src} cacheRequests />;
};

export default Icon;
