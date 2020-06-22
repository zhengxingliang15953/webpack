<template>
    <div>
       <div id="show" class="item">{{item}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            node:null,
            time:null,
            item:window.sessionStorage.getItem('message')?window.sessionStorage.getItem('message'):'你好',
        }
    },
    methods:{
        success(){
            this.time=null;
            this.node=document.getElementById('show');
            this.node.classList.add('toTop');
            this.time=setTimeout(()=>{
                this.node.classList.remove('toTop');
                this.time=null;
            },2000)
        }
    },
    computed:{
        
    }
}
</script>

<style lang="less" scoped>
    .item{
        position: absolute;
        width:200px;
        height:30px;
        top:200px;
        left:50%;
        transform: translateX(-50%);
        line-height: 30px;
        text-align: center;
        opacity: 0;
        background-color: green;
        padding:4px;
        border-radius: 5px;
        color: white;
    }
    @keyframes toTop {
        0%{
            opacity: 1;
        }
        100%{
            top:100px;
        }
    }
    .toTop{
        animation: toTop 2s linear;
    }
</style>