document.querySelector('.ano-atual').textContent = new Date().getFullYear();

document.querySelector('.form-contato').addEventListener('submit', function (e){
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem){
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const numeroWhatsapp = '5598985531935';
    const texto = `Olá, meu nome é *${nome}*. 
    \n\n Email : ${email} 
    \n\n Mensagem: ${mensagem}`;

    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
})