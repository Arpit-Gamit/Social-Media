import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

// Like Reducer
export const likeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("likeRequest", (state) => {
      state.loading = true;
    })
    .addCase("likeSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("likeFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("addCommentRequest", (state) => {
      state.loading = true;
    })
    .addCase("addCommentSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("addCommentFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteCommentRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteCommentSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("deleteCommentFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    // ... (Repeat for other actions)
    .addCase("clearErrors", (state) => {
      state.error = null;
    })
    .addCase("clearMessage", (state) => {
      state.message = null;
    });
});

// My Posts Reducer
export const myPostsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("myPostsRequest", (state) => {
      state.loading = true;
    })
    .addCase("myPostsSuccess", (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    .addCase("myPostsFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});

// User Posts Reducer
export const userPostsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("userPostsRequest", (state) => {
      state.loading = true;
    })
    .addCase("userPostsSuccess", (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    .addCase("userPostsFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
