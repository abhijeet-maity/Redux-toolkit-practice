// const createSlice = require("@reduxjs/toolkit").createSlice;

// const initialState = {
//     numOfIcecreams: 20,
// }

// const iceCreamSlice = createSlice({
//     name: 'icecream',
//     initialState,
//     reducers: {
//         ordered: state => {
//             state.numOfIcecreams--
//         },
//         restocked: (state, action) => {
//             state.numOfIcecreams += action.payload
//         },
//     },
// })

// module.exports = iceCreamSlice.reducer;
// module.exports.iceCreamActions = iceCreamSlice.actions;

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIcecreams: 10,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state = initialState) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("cake/ordered", (state) => {
      state.numOfIcecreams--;
    });
  },
  // extraReducers: {
  //     ['cake/ordered']:(state) => {
  //         state.numOfIcecreams--;
  //     },
  // },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
