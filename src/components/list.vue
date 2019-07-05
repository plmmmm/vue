<template>
    <div class="list">
        <van-card
            v-for="(item,index) of list"
            :key="index"
            :desc="item.user1"
            :title="item.user"
            :thumb="item.imgs"
            @click="abc(index,dataName)"
        />
        
    </div>    
</template>

<script>
export default {
    props:['list','dataName'],
    methods:{
        abc(index,dataName){
            console.log(this.list[index]._id)
            console.log(dataName)
            let lista = this.list[index]._id
            this.$router.push({name:'detail',params:{id:lista},query:{dataName:dataName}})
        }
    
    },
    mounted() {
        console.log(this.list)
    },
}
</script>

<style scoped>
.logo{text-align: center;line-height: 40px;}
.logo1{text-align: center;line-height: 40px;width: 100%;}
.van-col--16{height: 40px;text-align: center;line-height: 40px;color: blue;}
.van-col--4{height: 40px;text-align: center;line-height: 40px;color: blue;}
.swipe-item-img{width: 100%;}
.van-swipe{height: 150px;margin-top: 10px;}
.van-card__header >>> .van-card__title{margin-top: 20px;margin-bottom: 4px;}
</style>
