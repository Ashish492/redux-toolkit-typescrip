import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { Post, PostForm } from "../../interface";
import { useAppSelector } from "../../app";
const initialState: Post[] = [
  {
    id: 1,
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
    date: sub(new Date(), { minutes: 10, days: 1 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
    date: sub(new Date(), { minutes: 5, months: 9 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    add: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload);
      },
      prepare({ title, content, user }: PostForm) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId: user,
            date: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export default postSlice.reducer;
export const { add } = postSlice.actions;
