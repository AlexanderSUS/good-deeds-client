import { createSlice } from '@reduxjs/toolkit';
// import { User } from '../types/authorization';

// export type Opponent = Pick<User, 'id' | 'nickname' | 'createdAt' | 'updatedAt'>;

type UsersSliceState = {
  currentUser: null | {
    id: string;
    nickname: string;
  };
  // users: Opponent[]
};

const usersSliceInitialState: UsersSliceState = {
  currentUser: null,
  // users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState: usersSliceInitialState,
  reducers: {
    // setUsers: (state, { payload }: PayloadAction<Opponent[]>) => {
    //   state.users = payload;
    // },
  },
});

// export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;

export const usersSelector = (state: { usersStore: UsersSliceState }) => state.usersStore;
