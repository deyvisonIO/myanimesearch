export function Label({ children, ...options}: any) {
	return (
		<span {...options} className={`rounded-xl py-1 px-2 text-sm font-bold bg-yellow ${options.className}`}>{children}</span>
	)
}


