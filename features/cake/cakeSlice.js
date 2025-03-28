const createSlice = require("@reduxjs/toolkit").createSlice;
// const {createSlice} = rtk;

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered : (state) => {
            state.numOfCakes--;
        },
        restocked : (state, action) => {
            state.numOfCakes += action.payload
        },
    },
})

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions

