function cadastro (){

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario === "" || senha === ""){
        alert("preencha o campo com informações!")
        return;
    }

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("senha", senha);

    alert("cadastro realizado!");
    window.location.href = "login.html"
}



function login (){
    let usuario = document.getElementById("usuariologin").value;
    let senha = document.getElementById("senhalogin").value;

    let usuariosalvo = localStorage.getItem("usuario");
    let senhasalva = localStorage.getItem("senha");


    if(usuario === usuariosalvo && senha === senhasalva){    
        alert("Login efetuado com Sucesso!");
        window.location.href = "../prototipo/pokemons.html";
    } 
    else if(usuario === "" && senha === ""){
        document.getElementById("errologin").innerText = "Preencha os campos!";
    }
    else if(usuario === ""){
        document.getElementById("errologin").innerText = "Adicione um usuario!";
    }
    else if(senha === ""){
        document.getElementById("errologin").innerText = "Adicione uma senha!";
    }
    else {
        alert("Login invalido!")
    }
    
}


