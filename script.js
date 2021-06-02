function f_function(){
  let c=document.getElementById('c').value;
  if(c!=""){
  let f=(c*(9/5))+32;
  document.getElementById('f').value=parseFloat(f.toFixed(2));
  }
  else{
    document.getElementById('f').value="";
  }
}

function c_function(){
  let f=document.getElementById('f').value;
  if(f!=""){
  let c=(f-32)*(5/9);
  document.getElementById('c').value=parseFloat(c.toFixed(2));
}
  else{
    document.getElementById('c').value="";
  }
}
