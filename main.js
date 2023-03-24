$(document).ready(function(){
    let count = 0;
    const carCount = $('.contador');
    const cartIcon = $('.carrinho');

    $('.container button').click(function(){
        
      if(confirm('Deseja Adicionar no Carrinho?')) { 
        count++;
        carCount.text(count);
        
        // Animação do contador
        cartIcon.stop().animate({
            fontSize: '20px',
          }, 100).animate({
            fontSize: '10px',
          }, 100);
        }
    })
})