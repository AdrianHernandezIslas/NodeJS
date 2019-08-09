<template>
<div>
    <div class="col-md-3">
        <div class="form-group">
            <span class="form-label">Origen</span>
            <select v-model="selected_origen" @change="emitOrigen($event)" class="form-control">
                <option :value="'selected'" disabled>Seleccione una opción</option>
                <option v-for="(terminal,index) in terminales_origen"  v-bind:value="terminal.Origen" :key="index"> 
                    {{ terminal.Origen }}
                </option>
            </select>
        </div>
    </div>
    <div class="col-md-3">
        <div class="form-group">
            <span class="form-label">Destino</span>
                <select v-model="selected_destino" @change="emitDestino($event)" class="form-control">
                    <option :value="'selected'" disabled>Seleccione una opción</option>
                    <option v-for="(terminal,index) in terminales_destinos"  v-bind:value="terminal.Origen" :key="index"> 
                    {{ terminal.Origen }}
                    </option>
                </select>
        </div>
    </div>
 
</div>
</template>

<script>

import {mapState, mapActions} from 'vuex';

export default {
    name: 'Selector',
    data:function(){
       return {
           selected_origen:'selected',
           selected_destino:'selected',
           terminales_origen:[],
           terminales_destinos:[]
       };
    },
    props:{
        url:String
    },
    computed:{
        ...mapState(['base_url','data_corridas'])
    },
    methods:{
        ...mapActions(['setDatosCorridas']),
        fetchData(url,arreglo){
            var that = this;
            fetch(this.base_url+url)
               .then(function(response) {
                   return response.json();
               })
               .then(function(myJson) {
                    that[arreglo]= myJson;
               });
        },
       getTerminalesOrigen(){
           this.fetchData('api/rutas/origenes','terminales_origen');
       },
       getTerminalesDestino(event){
           this.fetchData('api/rutas/destinos/'+event.target.value,'terminales_destinos');
       },
       emitOrigen(event){
           this.getTerminalesDestino(event);
           this.setDatosCorridas({key:'origen',value:event.target.value});
       },
       emitDestino(event){
           this.setDatosCorridas({key:'destino',value:event.target.value});
       }
        
    },
    
    created:function(){
        this.getTerminalesOrigen();
    }
   
}
</script>
