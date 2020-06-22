<template>
  <div>
    <toast food="123" >
      <template v-slot:footer>
        <h1>footer</h1>
      </template>
      <template v-slot:header>
        <h1>header</h1>
      </template>
    </toast>
  </div>  
</template>

<script>
import message from '../components/message/message';
import toast from '../components/toast/toast';
import {getNode,getDeleteStudentBySno} from '../api/index';
export default {
  data() {
    return {
      name:'index'
    };
  },
  created(){
    getDeleteStudentBySno().then(data=>{
      console.log(data);
    })
  },
  methods:{
    show(){
      this.$message('提交成功');
    }
  },
  components:{
    message,toast
  },
  mounted(){
    
  },
  inheritAttrs:false
};
</script>

<style lang="less" scoped>
</style>