const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
            ],
            newMessageBody: ''
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
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText=action.newText;
            this._callSubscriber(this._state);
        }
        else if(action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
        else if(action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id:6,message:body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextCreator = (text) =>
    ({type:UPDATE_NEW_POST_TEXT, newText:text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE}); 

export const updateNewMessageBodyCreator = (body) =>
    ({type:UPDATE_NEW_MESSAGE_BODY, body:body});

export default store;

window.store = store;