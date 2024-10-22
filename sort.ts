// STANDARD: standard packages (those that are not bulky or heavy) can be handled normally.
// SPECIAL: packages that are either heavy or bulky can't be handled automatically.
// REJECTED: packages that are both bulky and heavy.

const sort = (width: number, height: number, length: number, mass: number) => {
  const isHeavy = mass >= 20
  const isBulky = (width > 150 || height > 150 || length > 150) || (height * width * length) >= 1_000_000
  if(isBulky && isHeavy) {
    return "REJECTED"
  }
  if(isBulky || isHeavy) {
    return "SPECIAL"
  }
  return "STANDARD"
  
};
export default sort
