document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var hargaUnit = 15;

    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var telefon = document.getElementById("telefon").value;
    var kategori = document.getElementById("kategori").value;
    var slot = document.getElementById("slot").value;

    var jumlah = hargaUnit * slot;

    var output =
        "<h2>Pengesahan Pendaftaran</h2>" +
        "<p><strong>Nama:</strong> " + nama + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Telefon:</strong> " + telefon + "</p>" +
        "<p><strong>Kategori:</strong> " + kategori + "</p>" +
        "<p><strong>Bilangan Slot:</strong> " + slot + "</p>" +
        "<p><strong>Jumlah Yuran:</strong> RM " + jumlah.toFixed(3) + "</p>";

    var box = document.getElementById("confirmationBox");
    box.innerHTML = output;
    box.style.display = "block";
});