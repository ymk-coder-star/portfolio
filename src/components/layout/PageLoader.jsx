export default function PageLoader() {
	return (
		<div
			className="flex min-h-[50vh] items-center justify-center p-16"
			role="status"
			aria-label="Loading page">
			<div
				className="h-8 w-8 animate-loader-spin rounded-full border-[3px] border-border border-t-accent motion-reduce:animate-none motion-reduce:opacity-60"
				aria-hidden="true"
			/>
		</div>
	);
}
