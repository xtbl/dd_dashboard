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