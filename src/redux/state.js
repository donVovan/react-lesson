let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 73},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
        ],
        dialogs: [
            {id: 1, name: 'Vovan'},
            {id: 2, name: 'Sanches'},
            {id: 3, name: 'Лена'},
            {id: 4, name: 'Миша'},
            {id: 5, name: 'Леша'},
        ],
    },
}

export function addPost(postMessage) {
    debugger;
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
}

export default state;