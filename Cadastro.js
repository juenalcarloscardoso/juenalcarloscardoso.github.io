function validar(){
                
                var nome = formuser.nome.value;
                var cargo = formuser.cargo.value;
                var idade = formuser.idade.value;
                var dependentes = formuser.dependentes.value;
                var email = formuser.email.value;
                var login = formuser.login.value;
                var senha = formuser.senha.value;
               

                
                if(nome == ""){
                    alert('Preencha o campo nome.');
                    formuser.nome.focus();
                    return false;
                }
                if(cargo == ""){
                    alert('Preencha o campo cargo.');
                    formuser.cargo.focus();
                    return false;
                }

                if(idade == ""){
                    alert('Preencha o campo idade.');
                    formuser.idade.focus();
                    return false;
                }
                if(dependentes == ""){
                    alert('Preencha o campo com a quantidade de dependentes.');
                    formuser.dependentes.focus();
                    return false;
                }
                
                if(email == "" || email.indexOf('@') == -1 ){
                    alert('Preencha o campo E-mail.');
                    formuser.email.focus();
                    return false;
                }
                if(login == ""){
                    alert('Preencha o campo login.');
                    formuser.login.focus();
                    return false;
                }
                
                if(senha == "" || senha.length <= 5){
                    alert('Preencha o campo senha com minimo 6 caracteres');
                    formuser.senha.focus();
                    return false;
                }
                alert("Cadastro realizado com sucesso!");
                open("Questionario.html");
           
     
 sessionStorage.setItem('s', senha);
 sessionStorage.setItem('l', login);
  
}

var autsenha = sessionStorage.getItem('s');
var autlogin = sessionStorage.getItem('l');

function enviar(){

   var senInput = forlog.senha.value;
   var logInput = forlog.login.value;
 if(senInput == autsenha && logInput == autlogin){
    open('Questionario.html');
 }
 

}
    