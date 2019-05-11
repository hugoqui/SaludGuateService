<template>
    <div style="padding-top:3rem;">
        <div class="row" id="financial">
            <div class="col-md-6 offset-md-5">
                <section style="padding:16px">
                    <h2 class="text-info text-center d-none d-sm-block">Oportunidad de Trabajo e Independencia Financiera</h2>
                    <h2 class="text-info text-center d-block d-sm-none">Independencia Financiera</h2>
                    <p>
                        Por favor llene el siguiente formulario para que nosotros nos contactemos con usted y darle seguimiento a su deseo de participación  y darle mayor información.
                    </p>
                    <div class="row">
                        <div class="col-md-12">
                            <input v-model="name" type="text" class="form-control" placeholder="Nombre y Apellido">
                        </div>
                        
                        <div class="col-md-6 col-6">
                            <input v-model="email" type="text" class="form-control" placeholder="email">
                        </div>
                        <div class="col-md-4 col-3">
                            <input v-model="phone" type="phone" class="form-control" placeholder="Teléfono">
                        </div>

                        <div class="col-md-2 col-3">
                            <input v-model="age" type="number" placeholder="Edad" class="form-control">
                        </div>
                        
                        <div class="col-md-12 col-9">
                            <textarea v-model="message" name="" id="" cols="30" rows="3" placeholder="Comentarios" class="form-control"></textarea>
                        </div>

                        <div class="col-md-12 col-3 text-right">
                            <button class="btn btn-primary" @click="SendEmail()">Enviar</button>
                        </div>

                    </div>
                </section>                
            </div>
        </div>
    </div>
</template>

<script>
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

export default {
     data(){
        return {
            name:'',
            age:'',
            email:'',
            phone:'',
            message:'',
            body:''
        }
    },
    methods:{
        Validate(){                   
            if (this.name!='' && this.email!='' && this.message!='') {
                this.body = `                
                    <b>Nombre: </b> 
                    <i>${this.name}</i> <br>
                    
                    <b>Email: </b> 
                    <i>${this.email}</i> <br>

                    <b>Edad: </b> 
                    <i>${this.age}</i> <br>

                    <b>Teléfono: </b> 
                    <i>${this.phone}</i> <br><br>

                    <b>Mensaje: </b> <br>
                    <i>${this.message}</i> 
                `
                return true
            }
        },
        SendEmail(){
            if (this.Validate()) {
                Email.send({
                    Host : "smtp.gmail.com	",
                    Username : "hugo2555@gmail.com",
                    Password : "uno1dos2tres3",
                    To : 'marioj64@gmail.com',
                    From : "hugo2555@gmail.com",
                    Subject : "Contacto desde Sitio Web",
                    Body : this.body
                }).then(
                    () => { 
                        alert('Gracias por contactarnos. \nEn breve un asesor se comunicará con usted.')
                        this.name = ''
                        this.email = ''
                        this.phone = ''
                        this.age =''
                        this.message = ''
                        this.body = ''                        
                    }
                );    
            }else {
                alert('Por favor complete todos los campos antes de enviar el mensaje')
            }

        }
    }
}
</script>


<style scoped>
    #financial{
        background-image: url('../assets/financial.jpg');
        min-height: 450px;
        background-size: contain;
        background-repeat: no-repeat;
        margin:0 !important;
    }

    input, textarea, button {margin-top: 1rem}
    
    @media screen and (max-width: 768px){
    .btn {
            margin-top:50%; 
        }

    #financial { background-size: cover}
    }
</style>
