const addFriend = document.querySelector("#add");
let friendship = document.querySelector("h5")
let count = 0 ;

addFriend.addEventListener("click",function(){
    if(count==0){
        addFriend.innerText="Remove"
        addFriend.style.backgroundColor="#dadada"
        addFriend.style.color="black"
        friendship.innerText="Friends"
        friendship.style.color="Green"
        count=1

    }else{
        addFriend.innerText="Add friend"
        addFriend.style.backgroundColor="cadetblue"
        addFriend.style.color="white"
        friendship.innerText="Stranger"
        friendship.style.color="red"
        count=0
    }
})
