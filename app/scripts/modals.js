/**
 * Modal related functionality
 * dependencies:
 *  SearchPlaceMap for map related functionality
 */

var DiDiModals = {
    settings: {

    },
    addEvent: function (){
        $(".add-btn.event-btn").on("click", function(){
            // change modal header add or edit event
            $(".add-event-modal .event-modal-header").text("Agregar Evento");
            $(".didi-modal.add-event-modal").modal({
                backdrop: true,
                show: true,
                closable: true
            });
            $(".didi-modal.add-event-modal").modal("show");

        //  initialize map, date time controls
            DiDiSearchPlaceMap.init();
            eventModalDateTimeInit();
        });

        $(".didi-modal-close").click(function() {
            $(".didi-modal.add-event-modal").modal("hide");
        });
    },
    editEvent: function (){
        $(".event-panel .edit-btn").on("click", function(){
            // change modal header add or edit event
            $(".add-event-modal .event-modal-header").text("Editar Evento");
            $(".didi-modal.add-event-modal").modal({
                backdrop: true,
                show: true,
                closable: true
            });
            $(".didi-modal.add-event-modal").modal("show");

        //  initialize map, date time controls
            DiDiSearchPlaceMap.init();
            eventModalDateTimeInit();
        });

        $(".didi-modal-close").click(function() {
            $(".didi-modal.add-event-modal").modal("hide");
        });
    },
    addPromo: function() {
        $(".add-btn.add-promo").on("click", function(){
            console.log("add promo");
            // change modal header add or edit event
            $(".add-promo-modal .promo-modal-header").text("Agregar Promoción");
            $(".didi-modal.add-promo-modal").modal({
                backdrop: true,
                show: true,
                closable: true
            });
            $(".didi-modal.add-promo-modal").modal("show");
            console.log(this);
            console.log($(this).closest(".didi-modal-header h2"));
            $(".add-promo-modal .didi-modal-close").on("click", function() {
                $(".didi-modal.add-promo-modal").modal("hide");
            });
        });
        // init slider and update placeholder value of numeric input
        var promoInputQuantityEl = $("#promo-input-quantity");
        $("#promo-slider-quantity").slider({
            formater: function(value) {
                return 'Valor actual: ' + value;
            }
        }).on("slide", function(ev){
            promoInputQuantityEl.attr("placeholder", ev.value + "%");
        });
    },
    init: function() {
        this.addEvent();
        this.editEvent();
        this.addPromo();
    }
};

DiDiModals.init();


/**
 * Date and time inputs in modal
 */
function eventModalDateTimeInit () {
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
};
