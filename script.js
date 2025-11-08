welcomeMessage();
function welcomeMessage() {
    let name = prompt('Hello Namamu siapa?');

    if (name != null){
    
   document.getElementById('welcome-speech').innerHTML ='Hello ' +name + ' selamat datang'}
}

function toggleKeterangan(id) {
      const keterangan = document.getElementById(id);
      if (keterangan.style.display === "none" || keterangan.style.display === "") {
        keterangan.style.display = "block";
      } else {
        keterangan.style.display = "none";
      }
    }

    const kataKlik = document.getElementById("kataKlik");
    const popup = document.getElementById("popup");
    const tutupPopup = document.getElementById("tutupPopup");

    kataKlik.addEventListener("click", () => {
      popup.classList.remove("hidden"); // tampilkan pop-up
    });

    tutupPopup.addEventListener("click", () => {
      popup.classList.add("hidden"); // sembunyikan pop-up
    });

