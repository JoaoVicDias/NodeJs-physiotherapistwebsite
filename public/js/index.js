$('.galeria').slick({
    infinite: true,
    automatic:true,
    speed: 500,
    fade: true,
    prevArrow:$("#prev-arrow"),
    nextArrow:$("#next-arrow"),
    centerMode:true,
  });

  $('.comentarios').slick({
    prevArrow:$("#arrow-prev"),
    nextArrow:$("#arrow-next"),
    dots:true,
  });
  