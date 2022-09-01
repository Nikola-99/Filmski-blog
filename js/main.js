function rezervacija(){
    let film = document.querySelector("#film").value;
    let brojKarata = document.querySelector("#brojKarata").value;
    let tipKarte = document.querySelector("#tipKarte").value;
    let racun = document.querySelector("#racun");

   racun.innerHTML = `Račun: ${film * brojKarata * tipKarte} RSD`;
    
}