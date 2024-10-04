$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()

        const enderecodaNovaImagem = $('#endereco-img-nova').val()
        const novaImagem = $('<li style="display: none"></li>')
        $(`<img src='${enderecodaNovaImagem}'/>`).appendTo(novaImagem)
        $(`<div class="overlay-img-link">
                <a href="${enderecodaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
            </div>`).appendTo(novaImagem)
        $(novaImagem).appendTo('ul')
        $(novaImagem).fadeIn(1000)
        $('#endereco-img-nova').val('')
    })
})
