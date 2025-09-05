                                    //event bubbling 
            //  let div=document.querySelector("div");
            //  let ol=document.querySelector("ol");
            //  let li=document.querySelectorAll("li");                
            //  div.addEventListener("click",function(){
            //     console.log("div is clicked ");
            //  });
            //  ol.addEventListener("click",function(event){    //### stop propagatiuon is used for(let first of second) {third}
            //     event.stopPropagation();
            //     console.log(" orderd list is clicked ");
            //  });
            //  for(li of lis){
            //  li.addEventListener("click",function(event){   //agar ham event.stopropagation  nhi use karenge tab if i click ul then 
            //     //it also call or print his parent element if if use it then when i click ol it print only ol not his parent element
            //     event.stopPropagation();
            //     console.log("list is clicked ");
            //  });}

                                                    //   ACTIVITY USING DOM ELEMENT         

    let btn=document.querySelector("button");
    let ul=document.querySelector("ul");
    let inp=document.querySelector("input");
    btn.addEventListener("click",function(){
        let item= document.createElement("li");
        item.innerText=inp.value;
        ul.appendChild(item);
        console.log(inp.value);
        let delbtn= document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
        inp.value="";
    });
    ul.addEventListener("click" ,function(event){
    if(event.target.nodeName=="BUTTON"){
        
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
    else { 
        console.log("dont delete");
    }

});
    
    // let delbtns=document.querySelectorAll(".delete");
    // for(delbtns of delbtn){
    // delbtn.addEventListener("click", function(){
    //     let par = this.parentElement;
    //     console.log(par);
    //     par.remove();
        
    // });
    // }