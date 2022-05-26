import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://629004bcd9d3f1f54c4ba69a.mockapi.io' }),
//   endpoints: (builder) => ({
//     getPokemonByName: builder.query<Pokemon, string>({
//       query: (name) => `pokemon/${name}`,
//     }),
//   }),
// })

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    adder(state, action) {
      state.items.push({
        name: action.payload.name,
        number: action.payload.number,
        id: nanoid(),
      });
    },
    deleter(state, action) {
      const newContacts = state.items.filter(
        contact => !(contact.id === action.payload)
      );
      return { ...state, items: newContacts };
    },
    change(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { adder, deleter, change } = contactsSlice.actions;

const persistConfig = {
  key: 'items',
  storage,
  whitelist: ['items'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
