function scrollToForm() {
  document.getElementById("formSection").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let budget = document.getElementById("budget").value;
  let area = document.getElementById("area").value;

  let msg =
`🏡 Hai Meerul Saya nak beli rumah!

Nama: ${name}
No: ${phone}
Bajet: ${budget}
Area: ${area}

Saya nak consultation rumah.`;

  let number = "601165655833"; // tukar nombor kau

  window.open(
    "https://wa.me/" + number + "?text=" + encodeURIComponent(msg),
    "_blank"
  );
});