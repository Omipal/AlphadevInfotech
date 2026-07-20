/**
 * Merge class names — lightweight classnames helper.
 * Using this avoids the need for the `clsx` or `classnames` package.
 */
export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ')
}
