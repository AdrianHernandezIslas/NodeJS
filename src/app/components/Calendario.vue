<template>
    <div class="col-md-2">
        <div class="form-group">
            <span class="form-label">Fecha</span>
            <div class='input-group date' id='divMiCalendario'>
                <input type='text' id="txtFecha" class="form-control" readonly/>
                    <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                    </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Calendario'
}
</script>
