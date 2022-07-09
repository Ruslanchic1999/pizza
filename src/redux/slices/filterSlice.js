import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    sort: {
        name: 'по популярности',
        sortProperty: 'price'
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId (state, action)  {
            state.categotyId = action.payload
        },
        setSort (state, action) {
            state.sort = action.payload
        }
    }
})


// Action creators are generated for each case reducer function
export const { setCategoryId, setSort } = filterSlice.actions

export default filterSlice.reducer
console.log(filterSlice)