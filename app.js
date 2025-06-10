 
const inputFoto = document.getElementById('input-foto');
const imagemPreview = document.getElementById('imagem-preview');

    inputFoto.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        const leitor = new FileReader();
        leitor.onload = function(e) {
          imagemPreview.src = e.target.result;
        }
        leitor.readAsDataURL(file);
      }
    });


function mostrarSenha() {
  const senha = getElementById('senha');
  const btnSenha = getElementById('mostrar');

  if (senha === 'password') {
    senha.type = 'text';
    btnSenha.textContent = '🙈';
  } else {
    senha.type = 'password';
    btnSenha.textContent = '👀'
  }
}