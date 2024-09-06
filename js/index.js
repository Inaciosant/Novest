function sendToWhatsApp(productName) {
    const phoneNumber = "5516988657763"; // Coloque aqui o número do WhatsApp, com código do país e DDD
    const message = `Vi o produto ${productName} no site, me interessei por ele! Quais cores vocês tem disponivel?`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}