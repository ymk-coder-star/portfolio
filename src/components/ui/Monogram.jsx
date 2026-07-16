import { monogramSvg } from '../../assets/monogramMark';

const sizeClasses = {
	sm: '[&_svg]:h-7 [&_svg]:w-7',
	md: '[&_svg]:h-9 [&_svg]:w-9',
	lg: '[&_svg]:h-12 [&_svg]:w-12',
};

export default function Monogram({ size = 'md', className = '' }) {
	return (
		<span
			className={`inline-flex shrink-0 leading-none [&_svg]:block ${sizeClasses[size]}${className ? ` ${className}` : ''}`}
			aria-hidden="true"
			dangerouslySetInnerHTML={{ __html: monogramSvg }}
		/>
	);
}
