function changeImage(){
    const html = document.documentElement;
    html.classList.toggle("light")
    
    var imagem = document.querySelector('#profile')
    var btn = document.getElementById("btnStyle")
    var dt = document.getElementById("data")

    var registro = new Date();

    dt = formatarData(registro)

    if(html.classList.contains("light")){
        imagem.setAttribute("src", "./Imagens/pfp1.png");
        document.getElementById("data").textContent = formatarData(registro);
        btn.style.color = "darkyellow"
        btn.style.backgroundColor = "yellow"
    }else{
        imagem.setAttribute("src", "./Imagens/pfp2.png");
        document.getElementById("data").textContent = formatarData(registro);
        btn.style.color = "lightblue"
        btn.style.backgroundColor = "blue"
    }

}

function formatarData(item){

    var options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }

    return item.toLocaleString("pt-BR", options)
}