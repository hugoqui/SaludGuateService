<template>
<div>
    <h1 class="text-center text-primary">Productos</h1>
    <div class="container">
        <carousel :perPageCustom="[[768, 3], [1024, 6]]">
            <slide class="text-center"> 
                <img src="@/assets/products/inmunocal.jpg" class="img-fluid" alt="Salud GuateService">                
                <a href="#" class="btn btn-outline-primary">Ir a la tienda</a>                
            </slide>
            <slide class="text-center"> 
                <img src="@/assets/products/inmunotec.jpg" class="img-fluid" alt="Salud GuateService">
                <a href="#" class="btn btn-outline-primary">Ir a la tienda</a>                
            </slide>
            <slide class="text-center"> 
                <img src="@/assets/products/kyani.jpg" class="img-fluid" alt="Salud GuateService">
                <a href="#" class="btn btn-outline-primary">Ir a la tienda</a>                
            </slide>
            <slide class="text-center"> 
                <img src="@/assets/products/sunrise.jpg" class="img-fluid" alt="Salud GuateService">
                <a href="#" class="btn btn-outline-primary">Ir a la tienda</a>                
            </slide>
            <slide class="text-center"> 
                <img src="@/assets/products/sunset.jpg" class="img-fluid" alt="Salud GuateService">
                <a href="#" class="btn btn-outline-primary">Ir a la tienda</a>                
            </slide>
            <slide class="text-center"> 
                <img src="@/assets/products/nitro.jpg" class="img-fluid" alt="Salud GuateService">
                <a href="#" class="btn btn-outline-primary">Ir a la tienda</a>                
            </slide>
            <slide class="text-center"> 
                <img src="@/assets/products/xtreme.jpg" class="img-fluid" alt="Salud GuateService">
                <a href="#" class="btn btn-outline-primary">Ir a la tienda</a>                
            </slide>
            <slide class="text-center"> 
                <img src="@/assets/products/morinlife.jpg" class="img-fluid" alt="Salud GuateService">
                <a href="#" class="btn btn-outline-primary">Ir a la tienda</a>                
            </slide>
            <slide class="text-center"> 
                <img src="@/assets/products/salmarina.jpg" class="img-fluid" alt="Salud GuateService">
                <a href="#" class="btn btn-outline-primary">Ir a la tienda</a>                
            </slide>
                       
        
        </carousel>

    </div>
</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components:{
        Carousel, Slide        
    }
}
</script>

<style scoped>
    .button {
        /* display: none; */
        animation: fadein 1s;
        
    }

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }


    img:hover + .button, .button:hover {
        display: inline-block;
    }    

    .msg{
        background: rgba(0, 0, 0, 0.4);        
        height: 100%;
        top:0;
        position: absolute;
    }
</style>

