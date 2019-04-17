<template>
    <div id="footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 offset-sm-1">
                    <div class="row">
                        <div class="col-1"><i class="fas fa-map-marker-alt"></i></div>
                        <div class="col">1ra Calle 3-23 Guatemala, C.A.</div>
                    </div>
                    <div class="row">
                        <div class="col-1"><i class="fas fa-phone"></i></div>
                        <div class="col">+502 7791- 3525</div>
                    </div>
                    <div class="row">
                        <div class="col-1"><i class="far fa-envelope"></i></div>
                        <div class="col"> <a href="mailto:contacto@guateservice.com">contacto@guateservice.com</a></div>
                    </div>
                    <div class="row">
                        <div class="col-1"><i class="fab fa-facebook"></i></div>
                        <div class="col">/GuateService</div>
                    </div>
                </div>

                <div class="col-sm-4 offset-sm-1">
                    <h4>Salud GuateService</h4>
                    <router-link to="/inmunocal">Inmunocal</router-link> <br>
                    <router-link to="/inmunocal">Kayni</router-link> <br>
                    <router-link to="/inmunocal">Tienda</router-link> <br>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #footer{
        width:100%;
        margin-top:3rem;
        background: #333;
        padding:3rem;
        color:#fff;
    }
</style>
