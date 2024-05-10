/**
 * Checks if a given pathname starts with any of the paths in the list.
 *
 * @param {string} pathname - The pathname to check.
 * @param {string[]} list - The list of paths to compare against.
 * @returns {boolean} - Returns true if the pathname starts with any of the paths in the list, otherwise returns false.
 */
const containsPath = (pathname: string, list: string[]) => {
  for (const path of list) {
    if (pathname.startsWith(path)) return true;
  }
  return false;
};

export default containsPath;
