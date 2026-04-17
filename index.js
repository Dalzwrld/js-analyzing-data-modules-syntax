function mergeUserArrays(...arrays) {
  const mergedArray = [].concat(...arrays);

  const mergeDate = new Date();
  
  return {
    users: mergedArray,
    mergeDate: mergeDate,
    totalUsers: mergedArray.length
  };
}

const usersFromSiteA = ["alice123", "don.dev", "charlie_codes"];
const usersFromSiteB = ["kim_po$$ible", "ava_wilson", "champ.s"];
const usersFromSiteC = ["grace_345"];

const result = mergeUserArrays(
  usersFromSiteA,
  usersFromSiteB,
  usersFromSiteC
);

console.log(result);


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};