module.exports = async function (context, scoreItem) {
    let teamPoint = createTeamPoint(scoreItem)

    context.log('UpdatePoints trigger function processed item: ', scoreItem);
    context.bindings.out = teamPoint
}

function createTeamPoint(teamId, userId) {
    let partitionKey = "point",
    rowKey = uuid(),
    teamId = teamId,
    userId = userId;

    return {
        partitionKey,
        rowKey,
        teamId,
        userId
    }
}

function uuid() {  
    let uuidValue = "", k, randomValue;  
    for (k = 0; k < 32;k++) {  
      randomValue = Math.random() * 16 | 0;  
    //   console.log(randomValue)
      if (k == 8 || k == 12 || k == 16 || k == 20) {  
        uuidValue += "-"  
      }  
      uuidValue += (k == 12 ? 4 : (k == 16 ? (randomValue & 3 | 8) : randomValue)).toString(16);  
    }
    // console.log(uuidValue)
    return uuidValue;  
  }  