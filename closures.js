'use strict';

function idMaker( peopleList ){
  var i;
  var len = peopleList.length;
  var uniqueId = 100;
  for( i = 0; i < len; i++){
    peopleList[i].id = function(j) {
      debug('peopleList.id for ' + peopleList[j].name);
      return function(){
        debug('Inside Function for ' + peopleList[j].name);
        return uniqueId + j;
      }();
    }(i);
  }

  return peopleList;
}

var list = [{name: 'Yossarian', id: 0}, {name: 'Nately', id: 0}, {name: 'Oar', id: 0}];

var idList = idMaker( list );

debug( idList[2].id );