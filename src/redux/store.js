import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';
import { persistReducer, persistStore, FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE } from "redux-persist";

import storage  from "redux-persist/lib/storage";

const contactsPersistConfig = {
    key: 'contacts',
    storage: storage,
};

const contactsPersistReducer = persistReducer(contactsPersistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: contactsPersistReducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
        },
    }),
});

export const persistor = persistStore(store);