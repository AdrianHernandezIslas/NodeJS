<template>
    <div id="app">
        <!-- Asiento url_img="./img/seat.png" btn_id="btn-0" / -->
        <FormCorridas />
        
    </div>
</template>

<script>
//import HolaMundo from './components/HolaMundo.vue'
import FormCorridas from './components/FormCorridas.vue'

export default {
   name: 'app',
   data:function(){
       return {
           
       };
   },
   components: {
       FormCorridas
   },
   created:function(){
       
   } 
};
</script>

