import { rerenderEntireTree } from "../render";

let state={
    profilePage:{
        posts:[
            {id:1,message:"How are you?", likesCount:45},
            {id:2,message:"It is my first post", likesCount:83}
        ],
        newPostText: "Your text"
    },
    dialogsPage:{
        dialogs:[
            {id:1,name:'Masha'},
            {id:2,name:'Sonya'}
        ],
        messages:[
            {id:1,message:'Hi'},
            {id:2,message:'Bye'},
            {id:3,message:'Nope'}
        ]
    },
    sidebar: {}    
}

export let addPost = () =>{
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let upateNewPostText = (newText) =>{
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state);
}

export default state;