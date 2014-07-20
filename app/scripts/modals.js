/**
 * Modal related functionality
 * needs:
 *  SearchPlaceMap for map related functionality
 */

$(".add-btn").on("click", function(){
    $(".didi-modal").modal({
        backdrop: true,
        show: true,
        closable: true
    });
    $(".didi-modal").modal("show");


//  initialize map
    DiDiSearchPlaceMap.init();
});

$(".didi-modal-close").click(function() {
    $(".didi-modal").modal("hide");
});

// date and time in modal

// initialize input widgets first
$('.datetimer-input-container-col .time').timepicker({
    'showDuration': true,
    'timeFormat': 'g:ia',
    'autocomplete': true
});

$('.datetimer-input-container-col .date').datepicker({
    'format': 'd/m/yyyy',
    'autoclose': true
});

// date controls for clickable icon
$('.didi-calendar-ico.start').click(function() {
    $('.datetimer-input-container-col .date.start').datepicker('show');
});

$('.didi-calendar-ico.end').click(function() {
    $('.datetimer-input-container-col .date.end').datepicker('show');
});

// initialize datepair
$('.datetimer-input-container-col').datepair();
