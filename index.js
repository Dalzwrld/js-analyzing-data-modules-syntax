function mergeUserArrays(...arrays) {
  const mergedArray = [].concat(...arrays);

  const mergeDate = new Date();
  
  return {
    users: mergedArray,
    mergeDate: mergeDate,
    totalUsers: mergedArray.length
  };
}

const usersFromSiteA = ["alice123", "bob_dev", "charlie_codes"];
const usersFromSiteB = ["diana_smith", "eve_wilson", "frank_lee"];
const usersFromSiteC = ["grace_lin"];

const result = mergeUserArrays(
  usersFromSiteA,
  usersFromSiteB,
  usersFromSiteC
);

console.log(result);


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};