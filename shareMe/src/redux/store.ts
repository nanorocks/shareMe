import { configureStore } from '@reduxjs/toolkit'
import { articlesReducer, categoriesReducer } from '@redux/reducers/_index'

export const store = configureStore({
    reducer: {
        articlesReducer,
        categoriesReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch