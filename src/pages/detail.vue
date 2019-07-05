<template>
    <div class="detail">
        <van-nav-bar
        title="详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />

        <van-card 
        :desc="detail.user1" 
        :title="detail.user"
        :thumb="detail.imgs"
        />
        <span class="span1">剧情内容：</span>
        <van-rate v-model="value" />
        <van-collapse v-model="activeNames">
            <van-collapse-item :title="detail.data.skill1" name="1">
                {{detail.data.SkillsIntroduction1}}
            </van-collapse-item>
            <van-collapse-item :title="detail.data.skill2" name="2">
                {{detail.data.SkillsIntroduction2}}
            </van-collapse-item>
            <van-collapse-item :title="detail.data.skill3" name="3">
                {{detail.data.SkillsIntroduction3}}
            </van-collapse-item>
            <van-collapse-item :title="detail.data.skill4" name="4">
                {{detail.data.SkillsIntroduction4}}
            </van-collapse-item>
            <van-collapse-item :title="detail.data.skill5" name="5">
                {{detail.data.SkillsIntroduction5}}
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeNames:['1'],
            imageURL:'../assets/img/tu4.jpg',
            value:4,
            detail:{}
        }
    },
    methods:{
        onClickLeft(){
            this.$router.push({path:'/home'})
        }
    },
    async mounted(){
        let detaName = this.$route.query.detaName;
        let id = this.$route.params.id;
        let res = await axios({url:'/api/'+dataName+'/'+id})
        if(res.data.error==0){
            this.detail = res.data.data;
            console.log(this.detail)
        }else{
            this.error=true;
        }
    }
}
</script>

<style scoped>
.span1{display: inline-block;margin:0 8px 0 18px;line-height: 25px}
.van-rate{display: inline-block;height: 25px;}
.van-card__header >>> .van-card__title{margin-top: 20px;margin-bottom: 4px;}
</style>
