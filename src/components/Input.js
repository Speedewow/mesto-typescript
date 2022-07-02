export default function Input({
	className,
	name,
	value,
	handleChange,
	validationMessage,
	...rest
}) {
	return (
		<>
			<input
				{...rest}
				className={`popup__input ${className}-input`}
				name={name}
				value={value || ''}
				onChange={handleChange}
			/>
			<span name={name} className={`popup__error ${className}-error`}>
				{validationMessage}
			</span>
		</>
	);
}
