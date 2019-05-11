<template>
    <div>        
        <parallax style="height:400px !important" :speed-factor="0.3">
            <img src="@/assets/nutritif.jpg" alt="Salud GuateService" style="object-position: left !important">
        </parallax>
        <br>
        <h1 class="text-center text-secondary">NUTRITIF</h1> <br>
        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-md-1 text-secondary">                  
                    <h2 class="text-secondary">Alkalina</h2>
                    <p>
                        Es una empresa 100%, guatemalteca,  Ubicada en la finca Xejuyu, en el Departamento de Chimaltenango, y por más de 15 años se han dedicado a la elaboración de productos 100% orgánicos, y naturales, los cuales han ayudado a muchas personas a salir de problemas de salud como lo es la Diabetes, la gastritis y muchas más.  Es administrada y sus operaciones son dirigidas por el Señor Juan Carlos Matheu y su esposa Silvia Pimentel, quienes se han dedicado y se dedican a la investigación y exploración de dichos productos orgánicos y naturales.  Dichos productos son procesados y envasados bajo estándares de calidad y limpieza y en áreas 100% Higiénicas, aptas para el consumo diario sin problemas.  Dentro de los productos que ellos elaboran y envasan, se encuentra, EL AGUA MARINA (oceánica), SAL MARINA, MORINGA (morinlife)  CLOROFILA, COLAGENO, CURCUMA, ACEITE DE COCO, PANELA ORGANICA Y NANO PLATA COLOIDAL. 
                    </p>

                    <div class="row">                        
                        <h3 class="text-primary col-md-12">Moringa, El Árbol Milagro</h3>
                        <p class="col-md-5">
                            La moringa es un árbol que ofrece valiosos recursos nutricionales y energéticos, y destaca por sus propiedades medicinales, desde combatir la fatiga, el colesterol o procesos inflamatorios a evitar las infecciones. <br>
                            Esto es lo que se sabe de la "hierba mágica" <br>
                            La moringa es originaria del norte de India, Etiopía, Filipinas y Sudán, aunque abunda en muchos países tropicales y subtropicales. <br>
                            Las hojas, con alto contenido de calcio y hierro, se usan como equivalente de las espinacas <br>
                            También contienen altas dosis de cistina y metonina, un tipo de aminoácidos que a menudo escasean. <br>
                            Tal vez por eso muchos se refieren a ella como "el árbol de la vida".
                        </p>
                        <img src="@/assets/moringa.jpg" class="col-md-7" alt="Salud GuateService">

                        <div class="col">
                            <h3 class="text-secondary"><small>Beneficios</small></h3>
                            <p>
                                Sus beneficios naturales son avalados por la FAO (Organización de las Naciones Unidas para la Alimentación). Este organismo internacional destaca las cualidades especiales que posee la moringa y recomienda su consumo en las zonas más afectadas por la desnutrición.
                            </p>
                            <p>
                                Sus hojas son ricas en proteínas, vitaminas A, B y C, y minerales: muy recomendables para mujeres embarazadas y lactantes, así como para niños pequeños.
                            </p>
                            <p>La planta produce hojas durante la temporada seca y en periodos de sequía y es una excelente fuente de hortalizas verdes cuando hay pocos alimentos disponibles.</p>
                            <p>Crece rápidamente y es resistente a la sequía (no tolera el encharcamiento).</p>
                            <p>Los productos de moringa tienen propiedades antibióticas, contra el tripanosoma y la hipotensión, antiespasmódicas, anti-ulcerosas, anti-inflamatorias, hipocolesterolémicas e hipoglucémicas.</p>
                        </div>                        
                    </div>
                </div>                              
            </div>         
        </div> 

        <parallax  :speed-factor="0.3">
            <img src="@/assets/morinlife.jpg" alt="Salud GuateService">
        </parallax>         

        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-md-1 text-secondary">      
                    <br>            
                    <h2 class="text-secondary">Oceánica</h2>
                    <p>
                        Oceánica #AguaIsotonica #Alkalina Podemos experimentar los beneficios del agua marina tanto interna como externamente. Puede mejorar condiciones como la #psoriasis e incluso cuadros de #artritis o #artrosis, y también es útil para tratar estados de #ansiedad
                    </p>

                    <h3 class="text-secondary">Océanica - Morinlife</h3>
                    <p>La combinación perfecta para curar y prevenir La diabetes</p>
                    <p>Agua de mar, Posee 89 de los elementos que contiene nuestro cuerpo, además vitaminas y micro organismos beneficiosos para el buen funcionamiento en general,
                        Nutre, Remineraliza y Sana nuestro cuerpo.
                    </p>
                    <p>Moringa Oleífera, El árbol de la vida, cura y previene más de 300 enfermedades, principalmente diabetes.</p>
                    <p>Súper tratamiento que cura y previene la diabetes, le garantizamos bienestar y salud en menos de tres meses.</p>
                </div>                              
            </div>         
        </div> 
    </div>
</template>

<script>
import Parallax from "vue-parallaxy";

export default {
    components:{ Parallax }    
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
