//import {rerenderEntireTree} from "../render";

let rerenderEntireTree = () => {
    console.log('стейт изменился')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 73},
        ],
        newPostText: 'bla bla bla'
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
        ],
        newMessageText: 'ta ta ta',
        dialogs: [
            {id: 1, name: 'Vovan'},
            {id: 2, name: 'Sanches'},
            {id: 3, name: 'Лена'},
            {id: 4, name: 'Миша'},
            {id: 5, name: 'Леша'},
        ],
    },
}

export function addPost() {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export function addMessage() {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export function updateNewPostText(newText) {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export function updateNewMessageText(newText) {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export function subscribe(observer) {
    rerenderEntireTree = observer;
}

export default state;