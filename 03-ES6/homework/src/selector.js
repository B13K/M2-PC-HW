var traverseDomAndCollectElements = function(matchFunc, startEl) {
  // matchFunction --> es una funcion que le envias un elemento
  // startE1 --> es donde va a buscar
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){
    resultSet.push(startEl)
  }
  //startEl = startEl.children

  for (let i = 0; i < startEl.children.length; i++) {
    let elements = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    resultSet = [...resultSet, ...elements]
  }

  return resultSet
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === '#') return 'id';
  else if(selector[0] === '.') return 'class';
  else{
    let sel = selector.split('.');
    if(sel.length > 1) return 'tag.class';
    else return 'tag'
  }
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function (el) {
      return el.tagName && ('#'+el.id === selector);
    };
   
  } else if (selectorType === "class") {
    matchFunction = function(el) {
      let listClass = el.classList
      for (let i = 0; i < listClass.length; i++) {
        if(el.className && ('.'+listClass[i] === selector)){
          return true;
        }        
      }
      return false;
    }

  } else if (selectorType === "tag.class") {
    const [e, c] = selector.split('.')
    matchFunction = (el) => {
      return matchFunctionMaker(e)(el) && matchFunctionMaker('.'+c)(el)
    }
    
  } else if (selectorType === "tag") {
    matchFunction = (el) => {
      return el.tagName.toLowerCase() === selector
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
