import React from 'react';
import profileReducer, { actions } from "./profile-reducer";
import { ProfileType } from '../types/types';

let state = {
    posts: [
        { id: 1, message: "How are you?", likesCount: 45 },
        { id: 2, message: "It is my first post", likesCount: 83 }
    ],
    profile: null,
    status: '',
    newPostText: ""
};

it('length of post should be incremented', () => {

    let action = actions.addPostActionCreator("it-kamasutra.com");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {

    let action = actions.addPostActionCreator("it-kamasutra.com");

    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe("it-kamasutra.com");
});

it('after deleting length of messages should decrement', () => {

    let action = actions.deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});

it("after deleting length shouldn't be decrement if id incorrect", () => {

    let action = actions.deletePost(100);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});