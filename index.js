const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function superbowlWin(array){
    let foundItem
    if (foundItem = array.find(array =>array.result==='W')){
      return foundItem.year
      } else return undefined
  }