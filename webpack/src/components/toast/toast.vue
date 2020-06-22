<template>
    <div>
        <slot name="header"></slot>
        我是toast
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        // console.log('attrs',this.$attrs);
    }
}
</script>

<style lang="less" scoped>
.item{
    position: relative;
    width:50px;
    padding:3px;
    margin:100px auto;
    text-align: center;
    border:1px solid black;
}
span:nth-child(1){
    position: absolute;
    display: block;
    width:50px;
    text-align: center;
    top:-100%;
    transition:all 1s;
    opacity: 0;
    border-radius: 4px;
    border:1px solid black;
}
.item:hover span:nth-child(1){
    opacity: 1;
    cursor: pointer;
}
</style>