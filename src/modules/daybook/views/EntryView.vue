<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-succes fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3 fw-bold">Julio</span>
            <span class="mx-2 fs-4 fw-light">2021, jueves</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">
                <i class="fa fa-trash alt"></i> 
                Borrar
            </button>

            <button class="btn btn-primary">
                <i class="fa fa-upload"></i> 
                Subir foto
            </button>
            
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea 
        placeholder="Que sucedio hoy"
        cols="30" rows="10">

        </textarea>
    </div>
    <Fab
    icon="fa-save" />
</template>

<script>
import { defineAsyncComponent} from 'vue'
export default {
    components: {
        Fab:  defineAsyncComponent (()=> import ('../components/Fab.vue')),

    }
}
</script>