import axios from 'axios';
let actions={
    USER:({state,commit},payload)=>{
        return axios({
                url:'/api/login',
                params:{
                    username:payload.username,
                    password:payload.password
                }
            }).then(
                res=>{
                    commit('USER',res.data)
                    return res.data
                }
            )
        },
    SHOPPE:({state,commit},payload)=>{
        return axios({
                url:'data/c.json'
            }).then(
                res => {
                    commit('SHOPPE',res.data)
                    return res.data
                }
            )
    },
    INFO:({state,commit},payload)=>{
        return axios({
                    url:'data/d.json'
                }).then(
                    res => {
                        commit('INFO',res.data);
                        // console.log(res.data);
                        return res.data.data
                    }
                )
        },


}

export default actions;