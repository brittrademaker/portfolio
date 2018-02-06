$(document).on('ready', function () {

    "use strict";

    $('.filter-btn .menu-icon').on('click', function () {
        $(this).toggleClass('is-open');
        $('.portfolio-sec.filter-hide .option-isotop').toggleClass('is-open');
    });

    $('.menu-btn .menu-icon').on('click', function () {
        $(this).toggleClass('is-open');
        $('header nav').toggleClass('is-open');
    });

    $('.floating-btns a.search-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.search').toggleClass('show');
    });

    $('header nav > ul > li.menu-item-has-children').on('click', function () {
        $('header nav > ul > li.menu-item-has-children').removeClass('active');
        $(this).toggleClass('active');
    });

});


split = ->
  words = $('h2').text().split('')
  # Build array
  # console.log(words)
  for i of words
    `i = i`
    words[i] = '<span>' + words[i] + '</span>'
    # Wrap each letter in a span
  text = words.join('')
  # Join
  $('h2').html text
  # Update html
  return

show_text = ->
  split()
  in_speed = 10
  count = 0
  length = $('.current_step p span').length
  end_time = length * in_speed + 200
  $('h2 span').each ->
    $(this).delay(1300 + in_speed * count).animate { opacity: '1' }, 200
    count++
    return
  return

show_text()
