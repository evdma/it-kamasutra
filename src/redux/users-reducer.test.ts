import usersReducer, { actions, InitialStateType } from "./users-reducer";

let state: InitialStateType;

beforeEach(() => {
    state = {
        users: [
            {
                id: 0,
                name: "Masha",
                photos: {
                    small: "",
                    large: ""
                },
                status: "Status 0",
                followed: false
            },
            {
                id: 1,
                name: "Dasha",
                photos: {
                    small: "",
                    large: ""
                },
                status: "Status 1",
                followed: false
            },
            {
                id: 2,
                name: "Sasha",
                photos: {
                    small: "",
                    large: ""
                },
                status: "Status 2",
                followed: true
            },
            {
                id: 3,
                name: "Kasha",
                photos: {
                    small: "",
                    large: ""
                },
                status: "Status 3",
                followed: true
            }
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    };
});

test('follow success', () => {
    const newState = usersReducer(state, actions.followSuccess(1));

    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
});

test('unfollow success', () => {
    const newState = usersReducer(state, actions.unfollowSuccess(3));

    expect(newState.users[3].followed).toBeFalsy();
    expect(newState.users[2].followed).toBeTruthy();
});