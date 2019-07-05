let mutations={
    USER:(state,payload)=>{
        state.user=payload;
    },
    SHOPPE:(state,payload)=>{
        state.shoppe=payload;
    },
    INFO:(state,payload)=>{
        state.info=payload;
        // console.log(state.info)
    },
}
export default mutations;