<template>
    <div class="error">
        
        <el-button
        plain
        @click="open4">
        错误
        </el-button>
    </div>
</template>

<script>
export default {
    methods: {
        open4() {
        this.$notify.error({
          title: '错误',
          message: '哎呀~页面找不到啦~~'
        });
      }
    }
}
</script>

<style>

</style>
