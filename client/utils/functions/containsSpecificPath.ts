/**
 * Checks if a given specific pathname is present in the provided list of paths.
 *
 * @param pathname - The pathname to check.
 * @param list - The list of paths to search in.
 * @returns `true` if the pathname is found in the list, `false` otherwise.
 */
const containsSpecificPath = (pathname: string, list: string[]) => {
  return list.includes(pathname);
};

export default containsSpecificPath;
