export default function Input({ className, name, placeholder, type }) {
	return (
		<>
			<input className={`popup__input ${className}-input`} type={type} id={className} name={name} placeholder={placeholder} autoComplete="off" />
			<span className={`popup__error ${className}-error`}></span>
		</>
	);
}
