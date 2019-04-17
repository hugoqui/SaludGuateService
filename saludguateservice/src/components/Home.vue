<template>
    <div>
        <div class="bd-example">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="@/assets/inmunocal.jpg" class="d-block w-100" alt="Salud Guateservice">
                        <div class="carousel-caption d-none d-md-block">                            
                            <router-link to="/" class="btn btn-outline-primary btn-lg">SABER MÁS </router-link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/kyani.jpg" class="d-block w-100" alt="Salud Guateservice">
                        <div class="carousel-caption d-none d-md-block">
                            <router-link to="/" class="btn btn-outline-light btn-lg">SABER MÁS </router-link>
                        </div>
                    </div>                   
                </div>

                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <!-- <img class="img-fluid" src="@/assets/inmunocal.jpg" alt="Salud Guateservice"> -->
        <div class="container">            
            <div>
                <br>
                <div style="margin-top:30px; margin-bottom:30px">
                    <h1 class="text-primary text-center">SALUD GUATESERVICE</h1>
                    <h2 class="text-secondary text-center">Salud y Bienestar</h2>
                </div>
                <div class="row">                    
                    <div class="col-md-6">
                        <p>
                            Estimados amigos y amigas, esta página se ha creado con el objetivo de poder compartir con
                            ustedes, información sobre la salud, y sobre todo hablar sobre las enfermedades que están 
                            a la orden del día.      
                        </p>    
                    
                        <p>
                            Desafortunadamente, cada día que pasa estamos expuestos a un montón de situaciones de vida, 
                            tales como: El ESTRÉS, EL ENOJO, LA RADIACION, LA MALA ALIMENTACION, EL CAMBIO CLIMATICO, ETC. 
                        </p>
                        <p>
                            Todo esto ha venido a degenerar nuestro SISTEMA IMMUNOLOGICO, el cual se afecta con el NIVEL 
                            OXIDATIVO que vivimos todos los días, lo que hace que SIMPLEMENTE NOS ENFERMEMOS, constantemente 
                            o de una forma permanente, razón por la cual hemos creado esta página para ayudar e informar sobre 
                            estos asuntos de moda, tal y como son las enfermedades degenerativas de las cuales resalta LA 
                            DIABETES, y otras más.
                        </p>
                        <p>
                            En esta página encontraran información sobre algunas de ellas y algunos testimonios de personas que se han curado y/o se han dado la esperanza de tener una vida mejor.
                        </p>
                        <p>
                            Les informaremos sobre los productos que distribuimos con los cuales, hemos estado ayudando a que muchas personas tengan la oportunidad de sub sanar sus dolencias y mitigar su dolor y preocupación por la parecencia de alguna de estas terribles enfermedades.
                        </p>
                    </div>
                    <div class="col-md-6">
                        <img src="@/assets/healthy-man.jpg" alt="Salud GuateService" style="max-width:100%">
                    </div>                   
                </div>   

                <div class="row">
                    <div class="col">
                        <p>
                            Dichos productos tienen respaldo científico y médico, y vienen en presentación como suplementos alimenticios, ya que en ningún momento aparecerán como productos medicinales, pues lo que hacen es ir directamente a la célula y así hacerlos como SUPLEMENTOS ALIMENTICIOS CELULARES. Y funcionan como precursores que hacen que este producto entre directamente a nuestro torrente sanguíneo y haga la función que se requiere.
                        </p>
                        <p>
                            Esperando que la información sea de su agrado y que puedan dejar sus mensajes en nuestro portal, aprovechamos para darle la más cordial bienvenida. Bendiciones.
                        </p>
                    </div>                    
                </div>             
            </div>
        </div>
    </div>
</template>

<style scoped>
    p{text-align: justify;}
</style>
