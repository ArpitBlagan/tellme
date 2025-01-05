import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  requests: [],
  friends: [],
  recentRegisteredUsers: [],
};

const auth = createSlice({
  name: "authList",
  initialState,
  reducers: {
    setLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload.status;
      state.user = action.payload.user;
    },
    updateWholeRequests: (state, action) => {
      state.requests = action.payload.requests;
    },
    updateRequests: (state, action) => {
      if ((action.payload.type = "remove")) {
        var newList: any = state.requests.map((ele: any) => {
          return ele.id != action.payload.user.id;
        });
        state.requests = newList;
      } else {
        //@ts-ignore
        state.requests.push(action.payload.user);
      }
    },
    updateFriends: (state, action) => {
      state.friends = action.payload.firends;
    },
    addFriend: () => {
      //@ts-ignore
      state.firends.push(action.payload.firend);
    },
    updateRegisteredUsers: (state, action) => {
      state.recentRegisteredUsers = action.payload.users;
    },
    updateRegisteredUser: () => {
      //@ts-ignore
      state.recentRegisteredUsers.push(action.payload.user);
    },
  },
});

export const {
  setLoginStatus,
  updateWholeRequests,
  updateRequests,
  updateRegisteredUsers,
  updateRegisteredUser,
  updateFriends,
  addFriend,
} = auth.actions;

export default auth.reducer;
