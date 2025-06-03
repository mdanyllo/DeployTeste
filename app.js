function entrarAvaliador() {
    window.location.href="./avaliação.html";
}

function selecionarAvaliador() {

}   

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