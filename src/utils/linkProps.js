/**
 * Returns anchor props following portfolio link conventions:
 * - mailto:/tel: → same tab (no target)
 * - external http(s) → new tab with rel="noreferrer"
 */
export function getLinkProps(href, label) {
	if (href.startsWith('mailto:') || href.startsWith('tel:')) {
		return { 'aria-label': label };
	}

	return {
		target: '_blank',
		rel: 'noreferrer',
		'aria-label': `${label} (opens in new tab)`,
	};
}
