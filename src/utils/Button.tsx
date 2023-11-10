export function Button({children, ...options}: any) {
	return (
		<button {...options} className={`disabled:bg-gray-900 disabled:text-gray-800 bg-black text-white p-2 font-bold rounded ${options.className} `} >{children}</button>
	)
}
