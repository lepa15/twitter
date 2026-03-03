import { createSlice } from '@reduxjs/toolkit';

type AuthModalType = 'login' | 'register' | null;

interface AuthModalState {
  modal: AuthModalType;
}

const initialState: AuthModalState = {
  modal: null,
};

export const authModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    openLogin: (state: AuthModalState) => {
      state.modal = 'login';
    },
    openRegister: (state: AuthModalState) => {
      state.modal = 'register';
    },
    closeModal: (state: AuthModalState) => {
      state.modal = null;
    },
  },
});

export const { openLogin, openRegister, closeModal } = authModalSlice.actions;
export default authModalSlice.reducer;
