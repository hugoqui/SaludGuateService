<template>
    <div>        
        <parallax style="height:400px !important" :speed-factor="0.3">
            <img src="@/assets/inmunocal_head.jpg" alt="Salud GuateService" style="object-position: left !important">
        </parallax>
        <br>
        <h1 class="text-center text-primary">INMUNOCAL</h1> <br>
        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-md-1 text-secondary">
                    <p>
                        Es un nutraceutico patentado cuyas pruebas científicas y clínicas han demostrado que es capaz de optimizar el sistema inmune, desintoxicar el organismo y evitar la oxidación celular. <br>
                        <i> SIMPLEMENTE NO EXISTE EN TODO EL MUNDO UNA MEJOR MANERA DE OPTIMIZAR LA FUNCION DEL SISTEMA INMUNE.</i>
                    </p>
                    <p>
                        <b>QUE ES EL GLUTATION</b> <br>
                        Es una molécula pequeña producida en el interior de nuestras células. Es sumamente importante para el buen funcionamiento de nuestro cuerpo. SIN EL SIMPLEMENTE MORIRIAMOS. <br>
                    </p>
                    

                    <p class="text-center">
                        Sus funciones principales son: <br>
                    </p> 

                    <div class="row">                        
                        <p class="col-md-4 text-center">
                            <b>DESINTOXICACION:</b> <br>
                            Es el primer desintoxicador de nuestro organismo.
                        </p>                               
                        <p class="col-md-4 text-center">
                            <b>INMUNE:</b> <br>
                            Es el combustible del sistema inmunológico, regulando sus funciones y elevando su nivel de respuesta.
                        </p>   
                        <p class="col-md-4 text-center">
                            <b>ANTIOXIDANTE MAESTRO:</b> <br>
                            Evita el proceso degenerativo producido por radicales libre y el estrés oxidativo.
                        </p>   
                    </div>
                    
                    
                    

                    <p>
                        <b>ESTA COMPROBADO QUE ELEVAR LOS NIVELES DE GLUTATION EN EL ORGANISMO AYUDA EN COSA DE:</b>
                        Parkinson, Alzheimer, Cataratas, Enfermedades del Corazón, Gastritis, Ulcera Péptica, Hepatitis, Inflamación Intestinal, Desintoxicación de cualquier tipo, Sida (VIH), Herpes, Influenza, Infecciones virales, Bacterianas y Parásitos de cualquier tipo, Fibromialgia, Lupus, Artritis, Esclerosis múltiple, Cáncer de cualquier tipo, Potencializa los resultados de Quimioterapias y Radioterapias, Detiene y revierte el daño oxidativo del ADN, Suprime el crecimiento de tumores, Fibrosis Quística, Asma, Fibrosis Pulmonar, Enfisema, Bronquitis Crónica, En Deportistas disminuye el tiempo de recuperación de lesiones y estrés físico, Insuficiencia Renal, Regula los niveles de azúcar en la sangre, (Diabetes ) , Neuropatía, Retinopatía, Neuropatía, Pie Diabético, Hace más lento el proceso de envejecimiento.
                    </p>                   
                </div>                
            </div>
            <div class="row">
                <div class="offset-md-1 col-md-5" v-scroll-reveal="{ delay: 500, duration: 1000, origin: 'bottom', distance: '50px' }">
                    <iframe style="width:100%; height:200px" src="https://www.youtube.com/embed/6hET7CphNII" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-md-5" v-scroll-reveal="{ delay: 750, duration: 1000, origin: 'top', distance: '50px' }">
                    <iframe style="width:100%; height:200px" src="https://www.youtube.com/embed/aQdoBlQUmKA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
           
            <div class="row">
                <div class="offset-md-1 col-md-10" style="margin-top:40px">
                    <h3 class="text-primary text-center">DIABETES</h3>
                    <p>
                        Grupo de enfermedades que tiene como resultado un exceso de azúcar en la sangre (glucosa sanguínea elevada). 
                    </p>
                    <h5 class="text-secondary">TIPOS MÁS COMUNES:</h5>
                    <p>
                        Diabetes tipo 2:  Afección crónica que afecta la manera en la que el cuerpo procesa el azúcar en sangre (glucosa) , en este tipo de diabetes el cuerpo de la persona no produce suficiente insulina o es resistente a la insulina.     Los síntomas incluyen: sed, micción (acción de orinar)  frecuente, hambre, cansancio, y visión borrosa.  En algunos casos, no hay síntomas.
                    </p>
                    <p>
                        Diabetes mellitus tipo 1: Afección crónica en la que el páncreas produce poco o nada de insulina. Las Células pancreáticas destruidas no pueden producir insulina.  Los síntomas incluyen: sed, micción (acción de orinar) frecuente, hambre, cansancio, y visión borrosa.
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="offset-md-1 col-md-5" v-scroll-reveal="{ delay: 500, duration: 1000, origin: 'bottom', distance: '50px' }">
                    <iframe style="width:100%; height:200px" src="https://www.youtube.com/embed/6oT0OWSTv0c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-md-5" v-scroll-reveal="{ delay: 750, duration: 1000, origin: 'top', distance: '50px' }">
                    <iframe style="width:100%; height:200px" src="https://www.youtube.com/embed/K1TTAkX3V8E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>        

        <products></products>
        <financial></financial>
    </div>
</template>

<script>
import Parallax from "vue-parallaxy";
import Products from "./Products"
import Financial from "./Financial"

export default {
    components:{ Parallax, Products, Financial }    
}
</script>

<style>
    @media screen and (min-width: 768px){
    .Masthead {
            min-height: 50vh !important; 
        }
    }
    
</style>

<style scoped>
    p{text-align: justify;}    
</style>
