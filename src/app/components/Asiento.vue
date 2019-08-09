<template>
    <div>
        <button :id="btn_id" @click="seleccionaAsiento">
            <img :src="url_img" alt="">
        </button>
    </div>
</template>

<script>
export default {
    name: 'Asiento',
    props:{
        btn_id: String,
        url_img: String
    },
    methods:{
        seleccionaAsiento(){
            console.log('Asiento click');
        }
    }
}
</script>

