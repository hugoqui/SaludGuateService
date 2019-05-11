<template>
    <div>        
        <parallax style="height:400px !important" :speed-factor="0.3">
            <img src="@/assets/kyani.jpg" alt="Salud GuateService" style="object-position: left !important">
        </parallax>
        <br>
        <h1 class="text-center text-primary">KYANI</h1> <br>
        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-md-1 text-secondary">                  
                    <h2 class="text-secondary">Nuestra Historia</h2>
                    <p>
                        Kyäni comenzó con notables familias fundadoras que, desde sus humildes comienzos, alcanzaron gran éxito a través del trabajo duro y la innovación. Los Hansen han tomado su pequeño negocio familiar y se han extendido a muchas áreas exitosas, incluyendo el desarrollo de bienes raíces, tiendas de conveniencia, hoteles, y mucho más. Del mismo modo, la familia Taylor transformó tres acres y un caballo en una de las más grandes granjas de cultivo de papa y ganaderas operando en Idaho. Hoy en día utilizan la tecnología de vanguardia para mejorar y ampliar sus negocios.
                    </p>
                    <p>
                        Las familias fundadoras se introdujeron primero en el notable poder de dos súper-alimentos relativamente desconocidos – Los arándanos silvestres de Alaska y el salmón rojo salvaje de Alaska. Los Hansen y los Taylors quedaron impresionados por la potencia y los extraordinarios beneficios a la salud de estos nutrientes. Como resultado, se fundó Kyäni para proporcionar bienestar nutricional a millones en todo el mundo. Hoy en día, Kyäni combina los súper-alimentos más poderosos del mundo para crear los suplementos nutricionales más irresistibles en la industria y la oportunidad de “Experimentar Más”.
                    </p>   
                    <p>
                        El comité consultivo y científico de Kyäni está formado por médicos y científicos de prestigio que han dedicado su vida a la investigación para mejorar la salud de las personas alrededor del mundo, compartiendo el estilo de vida Kyäni y ayudándolos a Experimentar más.
                    </p>
                    <p>
                        El comité consultivo de ciencia está constantemente y de manera activa, perfeccionando los productos Kyäni y desollando nuevos productos con beneficios para su salud.  Adicionalmente, ellos comparten su conocimiento y experiencia con los distribuidores de Kyäni enseñándoles como nuestros productos tienen un efecto dramático en la salud y bienestar de las personas.
                    </p>                    
                </div>                
            </div>    
            <div class="row">
                <div class="offset-md-1 col-md-5">
                    <h2 class="text-secondary">INVESTIGACION</h2>
                    <p>
                        Los productos Kyäni están elaborados con tecnología innovadora. Cada ingrediente fue cuidadosamente seleccionado para ayudarlo a usted y a su familia a alcanzar un bienestar y salud óptimos.
                    </p>
                    <p>
                        El comité consultivo y científico de Kyäni ha documentado meticulosamente la ciencia detrás de cada uno de los productos Kyäni.
                    </p>
                    <p>
                        Estas investigaciones científicas tienen referencias minuciosas, haciéndolos la fuente perfecta para responder a cualquier pregunta que tenga acerca de nuestros productos.
                    </p>
                </div>
                <div class="col-md-5">
                    <img src="@/assets/scientist.jpg" class="img-fluid" alt="GuateService">
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
    components:{ Parallax, Products, Financial}    
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
