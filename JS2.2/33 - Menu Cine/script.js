function recomendar(genero){
    let edad = document.getElementById("edad").value;
    let recomendar = document.getElementById("recomendacion");


    switch(genero){
        case 'drama':
            if(edad < 13){
                recomendar.textContent = "Casa Blanca";
                recomendar.style.color = "red";
                recomendar.style.backgroundColor = "white";
            }else if(edad <16){
                recomendar.textContent = "The Shawshank Redemption";
                recomendar.style.color = "red";

            }else{
                recomendar.textContent = "Taxi Driver";
                recomendar.style.color = "red";

            }
            break;
        case 'comedia':
            if(edad < 13){
                recomendar.textContent = "Back to the Future";
                recomendar.style.color = "red";

            }else if(edad <16){
                recomendar.textContent = "The Truman Show";
                recomendar.style.color = "red";

            }else{
                recomendar.textContent = "The Wolf of Wall Street";
                recomendar.style.color = "red";

            }
            break;
        case 'musical':
            if(edad < 13){
                recomendar.textContent = "La La Land";
                recomendar.style.color = "red";

            }else if(edad <16){
                recomendar.textContent = "Les Miserables";
                recomendar.style.color = "red";

            }else{
                recomendar.textContent = "The Rocky Horror Picture Show";
                recomendar.style.color = "red";

            }
            break;
        case 'crimen':
            if(edad < 13){
                recomendar.textContent = "No hay recomendaciones para esta edad";
                recomendar.style.color = "red";

            }else if(edad <16){
                recomendar.textContent = "El Secreto de Tus ojos";
                recomendar.style.color = "red";

            }else{
                recomendar.textContent = "The Godfaher";
                recomendar.style.color = "red";

            }
            break;        
    }
}