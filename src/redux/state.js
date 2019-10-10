let store = {
    _state: {
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
    },
    getState(){
        return this._state;
    },
    _callSubscriber (){
        console.log('State changed')
    },
    subscribe (observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        if(action.type = 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type = 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText=action.Text;
            this._callSubscriber(this._state);
        }
    }
}

export default store;

window.store = store;