// js/main.js

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.onload = () => window.scrollTo(0, 0);

$(document).ready(function () {
  console.log('main.js carregado');

  // ——— 1) Carousel ———
  $('#carousel-imagens').slick({
    autoplay: true,
    arrows: false
  });

  // ——— 2) Máscaras ———
  // Telefone fixo ou celular
  $('#telefone').mask(
    function (val) {
      return val.replace(/\D/g, '').length === 11
        ? '(00) 00000-0000'
        : '(00) 0000-0000';
    },
    { placeholder: '(DD) _____-____' }
  );
  // CPF
  $('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
  });
  // CEP
  $('#cep').mask('00000-000', {
    placeholder: '01234-567'
  });

  // ——— 3) Validação ———
  $('#form').validate({
    rules: {
      nome:     { required: true },
      email:    { required: true, email: true },
      telefone: { required: true },
      endereco: { required: true },
      cep:      { required: true },
      cpf:      { required: true }
    },
    submitHandler(form) {
      alert(
        'Sua requisição foi enviada para análise, parabéns pela aquisição!'
      );
      form.reset();
    },
    invalidHandler() {
      alert(
        'Por favor, preencha os campos para prosseguir com a compra!'
      );
    }
  });

  // ——— 4) Testes visuais ———

  // Carousel
  $('#btn-test-carousel').on('click', function () {
    const slick = $('#carousel-imagens').slick('getSlick');
    $('#slide-info').text(
      `Slide ${slick.currentSlide + 1} de ${slick.slideCount}`
    );
  });

  // Máscaras (no painel)
  $('#telefone').on('input', () =>
    $('#tg-telefone').text($('#telefone').val())
  );
  $('#cpf').on('input', () =>
    $('#tg-cpf').text($('#cpf').val())
  );
  $('#cep').on('input', () =>
    $('#tg-cep').text($('#cep').val())
  );

  // Validação
  $('#btn-test-validate').on('click', () => $('#form').submit());
});
