<template>
    <div id="booking" class="section">
        <div class="section-center">
            <div class="container">
                <div class="row">
                    <div class="booking-form" >
                        <form method="GET" @submit.prevent="getCorridas">
                            <div class="row no-margin object rocket move-up" id="app" >
                                <div class="col-md-2" >
                                    <div class="form-header">
                                        <h2>CORRIDAS</h2>
                                    </div>
                                </div>
                                <Selector />
                                <Calendario />
                                <div class="col-md-2">
                                    <div class="form-btn">
                                        <button class="submit-btn">Buscar</button>
                                    </div>
                                </div>
                            </div>
                            
                        </form>
                        
                    </div>
                </div>        
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import Selector from './Selector.vue';
import Calendario from './Calendario.vue'
export default {
   name: 'FormCorridas',
   data:function(){
       return {
           
       };
   },
   computed:{
        ...mapState(['data_corridas'])
   },
   components: {
       Selector,
       Calendario
   },
   methods:{
       getCorridas(){
           console.log(this.data_corridas);
       }
   }
}
</script>

