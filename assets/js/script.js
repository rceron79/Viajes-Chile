$(document).ready(function () {
    $('.carousel').carousel({
        interval: 2000
    })
});


$(document).ready(function () {
    $('.collapse').on('show.bs.collapse', function () {
        $('.collapse.show').collapse('toggle');
    });
});