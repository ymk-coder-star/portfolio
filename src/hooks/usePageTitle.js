import { useEffect } from 'react';
import { siteName } from '../constants/site';

/**
 * Sets `document.title` for the current page.
 * Pass a full title with `{ absolute: true }`, or a short label appended with the site name.
 */
export function usePageTitle(title, { absolute = false } = {}) {
  useEffect(() => {
    if (!title) return;
    document.title = absolute ? title : `${title} | ${siteName}`;
  }, [title, absolute]);
}
