import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    sort: {
        name: 'по популярности',
        sortProperty: 'price'
    },
    currentPage: 1,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId (state, action) {
            state.sort = action.payload
        },
        setSort (state, action) {
            state.sort = action.payload
        },
        setCurrentPage(state,action) {
            state.currentPage = action.payload
        }
    }
})


// Action creators are generated for each case reducer function
export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer
console.log(filterSlice)