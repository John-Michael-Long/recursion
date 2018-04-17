// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//You should use document.body, element.childNodes, and element.classList


var getElementsByClassName = function(className) {

  // your code here
  var resultArray = [];
  
 
  function checkForClassName(node){
  	
   if(node.classList && node.classList.contains(className)){
     resultArray.push(node)
   }
   if(node.hasChildNodes()){
   	node.childNodes.forEach(function(child){
    checkForClassName(child)
   	});
   }
  
  }
  checkForClassName(document.body)
  return resultArray;

  
};	