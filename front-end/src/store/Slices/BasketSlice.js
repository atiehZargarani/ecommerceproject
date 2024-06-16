import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
}

const basketSlice = createSlice({
    name: 'basketSlice',
    initialState,
    reducers: {
        removeAll: (state) => {
            state.list = []
        },
        removeItem: (state, action) => {
           
            state.list = state.list.filter((e) => {
          
                if (e.id == action.payload.id) {
                   
                    const pr = e
                    pr.quantity = pr.quantity - 1
                    if (pr.quantity === 0) {
                        return false
                    }
                    else {
                        return pr
                    }
                }
                return true
            })
        },
        addItems: (state, action) => {

            let addCheck = false
            if (state.list.length === 0) {
                const pr = action.payload

                pr.quantity = 1
                state.list.push(pr)
                addCheck = true
            }
            else {

                state.list = state.list.map((e) => {

                    if (e.id == action.payload.id) {
                        e.quantity = e.quantity + 1
                        addCheck = true
                        return e
                    }
                    return e
                })
            }
            if (!addCheck) {

                const pr = action.payload
                pr.quantity = 1
                state.list.push(pr)
                addCheck = true

            }
        }
    }
})

export default basketSlice.reducer
export const { addItems, removeAll, removeItem } = basketSlice.actions