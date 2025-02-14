let tysv=document.getElementById("typesv");
let psm=document.getElementById("smA");
let prm=document.getElementById("rmA");
let webE=document.getElementsByClassName("fa-solid fa-earth");
function plMa(xo){
xo.currentTime=0;
xo.play();
}
const msgs = [
    "I am not an AI ; I can't understand.",
    "I cannot think or answer.",
    "I am not able to answer.",
    "I am not an AI; I can't think.",
    "I am not smart enough for this."
];

function rndMsg() {
    return msgs[Math.floor(Math.random() * msgs.length)];
}


    let box = document.getElementById("box");
    
    
    pData.toString().replace(/ /g,"");
  
    const lowKeys = o => 
    Object.fromEntries(Object.entries(o).map(([k, v]) => [k.toLowerCase(), v]));
    lowKeys(pData);
    
    
    let words = [...new Set(Object.keys(pData).flatMap(k => k.split("-")))];

    function chk(input) {
       input=input.toLowerCase();
        let iWords = input.split("-");
        return iWords.every(w => words.includes(w)) ? getAns(input) : getAns(input);
    }

    function getAns(input) {
  //  input=input.toLowerCase();
  return pData[Object.keys(pData).find(k => k.split("-").sort().join("-") === input.split("-").sort().join("-"))] || "I don't understand.";
        
    }

    
    

    function send() {
    closeP();
    
        tysv.style.display="none";
        let txt = document.getElementById("inp").value.trim();
        if (!txt) return;
        addMsg(txt, "u-msg");
        if(webE[0].className=="fa-solid fa-earth w" && !maTH(txt)){
        setTimeout( ()=>{
        ranDU(txt).then(da=>addMsg(da,"b-msg"))}
        ,1500);
        }
        else if(maTH(txt)){
        setTimeout(() => addMsg(eval(txt).toString(), "b-msg"), 1500);
        } else if(typeof(pData)=="object"){
        setTimeout(() => addMsg(chk(txt), "b-msg"), 1500);
        }else{
        setTimeout(() => addMsg("Please Import Data File To Read", "b-msg"), 1500);
         
        }
        document.getElementById("inp").value = "";
    }

    function addMsg(txt, cls) {
    let div = document.createElement("div");
    div.className = `msg ${cls}`;
 // div.id= "#"+cls.replace(/ /g,"-");
    
   //location.href=div.id;
    if(cls=="b-msg"){
    
    div.innerText="";
  //  resetIfMore(box);
    div.innerHTML=txt;
    div.ondblclick=()=>cpyto(txt);
    box.prepend(div);
    div.innerText="";
  typeE(div, txt);
   
    }
    else{
   // resetIfMore(box);
   box.prepend(div);
    div.innerText=txt;
    psm.currentTime=0;
    plMa(prm);
 
    }
    
    
    
   // div.onclick = function () {
   // this.innerText = conED(this.innerText, "d");
  //  };
    
   let cvg= box.scrollHeight;
    
    div.scrollTop = cvg;
    
    }
    
    
    
    function typeE(ele, te, ind = 0) {
    if (ind < te.length) {
    ele.innerHTML += te.charAt(ind);
    setTimeout(() => typeE(ele, te, ind + 1), 20);
    }
    }

    function openP() { document.getElementById("p-modal").style.display = "flex";tysv.style.display="none";}
    function closeP() { document.getElementById("p-modal").style.display = "none"; tysv.style.display="none";if(document.getElementById("box").children.length>0){tysv.style.display="none" }else{tysv.style.display="block"}}
    
    
    function cpyto(phd){
    navigator.clipboard.writeText(phd);
    alert("Copied...");
    }
    
    function showSug() {
    let val = document.getElementById("inp").value.toLowerCase();
    let sugBox = document.getElementById("sug-box");
    sugBox.innerHTML = "";
    
    if (!val) { 
    sugBox.style.display = "none"; 
    return; 
    }
    
    Object.keys(pData).forEach(key => {
    if (key.toLowerCase().includes(val)) {
    let div = document.createElement("div");
    div.className = "sug-item";
    div.innerText = key;
    div.onclick = () => { 
    document.getElementById("inp").value = key; 
    sugBox.style.display = "none"; 
    };
    sugBox.appendChild(div);
    }
    });
    
    sugBox.style.display = sugBox.children.length ? "block" : "none";
    }
    
    
    
    function maTH(input) {
    let haNum = false;
    let haOpp = false;
    
    for (let i = 0; i < input.length; i++) {
    let char = input[i];
    
    if (char >= '0' && char <= '9') {
    haNum = true;
    } else if (char === '+' || char === '-' || char === '*' || char === '/' || char === '(' || char === ')' || char === '^' || char === '%') {
    haOpp = true;
    } else if (char !== ' ') {
    return false;
    }
    }
    
    return haNum && haOpp;
   
    }
    
    function conED(txt,type){
    
    if(type=="d"){
    let dd= CryptoJS.AES.decrypt(txt,imKey);
    return dd.toString(CryptoJS.enc.Utf8);
    }else{
    
    }
    
    }
    
    
   async function ranDU(tx){
   try{
    let qu=`https://api.duckduckgo.com/?q=${tx}&format=json`;
   let f= await fetch(qu);
    
    let c=await f.json();
    
   let yu= await c["RelatedTopics"][0]["Text"];
   
   
   if(yu=="" ||yu==" "){
   return "Search Nit Found";
   }else{
   return yu;
   }
   
   }catch(e){
    return "Search Not Found";
  // return e.mesaage;
    
    }
    }
    
    
    function resetIfMore(p) {
    if (p.children.length > 23) while (p.firstChild) p.removeChild(p.firstChild);
    }
    
   
    
    
    
   
    
 
    