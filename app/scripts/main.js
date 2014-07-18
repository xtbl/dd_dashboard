console.log('main.js');

console.log($);

$(".add-btn").click(function(){
    console.log("click");

    $(".didi-modal").modal({
        backdrop: true,
        show: true,
        closable: true
    });
    $(".didi-modal").modal("show");
});

$(".didi-modal-close").click(function() {
    $(".didi-modal").modal("hide");
});

// initialize input widgets first
$('#datepairExample .time').timepicker({
    'showDuration': true,
    'timeFormat': 'g:ia'
});

$('#datepairExample .date').datepicker({
    'format': 'yyyy-m-d',
    'autoclose': true
});

// initialize datepair
$('#datepairExample').datepair();