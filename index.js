const qrFormEl = document.getElementById("qrForm");
const qrImageEl = document.getElementById("qrImage");
const qrContainerEl = document.getElementById("qrContainer");
const qrInputText = document.getElementById("qrInputText");
const generateBtnEl = qrFormEl.querySelector("button");

const renderQRCode = (url) => {
    if (!url) return;
    generateBtnEl.innerText = "Generating QR Code...";

    qrImageEl.src = url;

    qrImageEl.addEventListener("load", () => {
        qrContainerEl.classList.add("show");
        generateBtnEl.innerText = "Generate QR Code";
    });
};

qrFormEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(qrFormEl);
    const text = formData.get("qrtext");  // Fixed from "qrText" to "qrtext"
    if (!text.trim()) return;

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;

    renderQRCode(qrCodeUrl);
});

qrInputText.addEventListener("keyup", () => {
    if (!qrInputText.value.trim()) {
        qrContainerEl.classList.remove("show");
    }
});
