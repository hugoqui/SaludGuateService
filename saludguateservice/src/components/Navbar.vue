<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- <nav class="navbar navbar-expand-lg navbar-dark" style="position:absolute; top:0; width:100%; z-index:9; background:rgba(0,0,0,0.3)"> -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
            <img src="@/assets/logo.png" width="200" alt="GuateService">
            <!-- <img src="@/assets/cropped-GuateService-1.png" alt="GuateService"> -->
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">            
            </ul>
            <div class="form-inline my-2 my-lg-0">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">            
                    <li class="nav-item ">
                        <router-link active-class="active" class="nav-link" to="/" exact>INICIO</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" class="nav-link" to="inmunocal">INMUNOCAL</router-link>          
                    </li>
                    <li class="nav-item">                        
                        <router-link active-class="active" class="nav-link" to="kyani">KYÄNi</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" class="nav-link" to="nutritif">NUTRITIF</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-outline-light" href="#">TIENDA</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .nav-link{margin-left:10px; margin-right: 10px}
    .active{font-weight: bold; background: rgba(0, 0, 30, 0.4); border-radius: 4px }
    @media screen and (max-width: 600px) {
        .navbar{
            background-color: #444 !important;
            position: unset !important;
            color: #fff;
        }        
        .active{font-weight: bold; background: unset !important}
    }
</style>
