
var babelFish = function( hello ){

  var sayHiFish = function( name ){
    return hello + ' ' + name;
  }
  return sayHiFish;
}

var spanish = babelFish('Hola!');
var french  = babelFish('Bonjour');
var english = babelFish('Good Day');
var merican = babelFish('Howdy');

debug( spanish( 'Juan' ) );
debug( french( 'Juan' ) );
debug( english( 'Juan' ) );
debug( merican( 'Juan' ) );