console.log("js enabled");
//working on table classic


// From the window to the event target parent: this is the capture phase
// The event target itself: this is the target phase
// From the event target parent back to the window: the bubble phase

let root=document.getElementById('root');
let yearGlobal=2021;
let calendarObj={
    month: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'], 
    day: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
    holidaysIndia:[],
    holidyasDallas:[]
}
let getDaysInMonth=(month, year)=> {
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }
let addButtonTo=(el,value,classList,textContent,eventFun)=>{

    let button=document.createElement('button');
    let p=document.createElement('p');
    
    button.value=value;
    p.textContent=textContent;
    button.addEventListener('click',eventFun);
    button.classList.add(...classList)
    button.appendChild(p);
    el.appendChild(button);   
         
}
let addDiv=(ref)=>{
    console.log("passed the "+this);
console.log("root classes are ",ref.currentTarget.classList);
console.log("deletion at"+ref.currentTarget.parentNode,ref.currentTarget)
ref.currentTarget.remove()
// ref.currentTarget.parentNode.remove(ref.currentTarget);
   
} 
console.log("root classes are ",root.classList)
let i=0;
let myCall=()=>{
    //moth from 0
    let days=getDaysInMonth(0,yearGlobal);
    console.log("my days are---",days);
    days.forEach((el)=>{
        console.log(el.getDate()+" "+el.getDay());
        addButtonTo(root,"1",["btn" ,"btn-sm"],`${calendarObj.day[el.getDay()]}  ${el.getDate()}`,addDiv)
    })
}
// addElement(root,button);