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
    isClassInEventElement: function(ev, className){
        console.log("method ev", ev);
        console.log("method className", className);
        if((typeof ev != 'undefined') && (typeof ev != 'undefined')){
            return ($.inArray(className , ev.currentTarget.classList) > -1 ) ? true : false;
        } else {
            return false;
        }
    },
    addPromo: function() {
        var self = this;
        $(".promo-btn").on("click", function(ev){
            // change modal header add or edit
            if(self.isClassInEventElement(ev, "add-promo")){
                $(".add-promo-modal .promo-modal-header").text("Agregar Promoción");
            } else {
                $(".add-promo-modal .promo-modal-header").text("Editar Promoción");
            }
            $(".didi-modal.add-promo-modal").modal({
                backdrop: true,
                show: true,
                closable: true
            });
            $(".didi-modal.add-promo-modal").modal("show");
            $(".add-promo-modal .didi-modal-close").on("click", function() {
                $(".didi-modal.add-promo-modal").modal("hide");
            });

        });
        eventModalDateTimeInit();
        individualDateTimeInit();

        // init slider and update placeholder value of numeric input
        var promoInputQuantityEl = $("#promo-input-quantity");
        $("#promo-slider-quantity").slider({
            formater: function(value) {
                return 'Valor actual: ' + value;
            }
        }).on("slide", function(ev){
            promoInputQuantityEl.attr("placeholder", ev.value + "%");
        });

//        detener carrusel .carousel('pause')
//        setear bindings plantilla (imagen cupon)
        function PromoTemplateSetup() {
            $(".carousel").carousel();
            $(".carousel").carousel('pause');
            // tipo promo
            // promo-name, promo-price, promo-description
//            capturar el onchange
            $(".promo-template-input").on("input", function(ev){
               console.log(".promo-template-input change detected");
               console.log(".promo-template-input ev", ev);
               // switch according to event source case
            });
//            averiguar el elemento fuente del onchange
//            tomar el valor del elemento y asignarlo al elemento de plantilla correspondiente
//            actualizar el template
//
        }
        PromoTemplateSetup();

    },
    addProduct: function() {
        var self = this;
        $(".product-btn").on("click", function(ev){
            console.log("ev", ev);
            console.log("self.isClassInEventElement", self.isClassInEventElement());
            // change modal header add or edit
            if(self.isClassInEventElement(ev, "add-product")){
                $(".add-product-modal .promo-modal-header").text("Agregar Producto/Servicio");
            } else {
                $(".add-product-modal .promo-modal-header").text("Editar Producto/Servicio");
            }
            $(".didi-modal.add-product-modal").modal({
                backdrop: true,
                show: true,
                closable: true
            });
            $(".didi-modal.add-product-modal").modal("show");
            $(".add-product-modal .didi-modal-close").on("click", function() {
                $(".didi-modal.add-product-modal").modal("hide");
            });

        });
    },
    dropDownDefaultActions: function() {
        //update dropdown with selection
        $(".dropdown-menu a").on("click", function(e){
            e.preventDefault();
            var dropdownItemSelectedText = $(this).text();
            var displayedTextButton = $(this).closest(".dropdown").find("button");
            displayedTextButton.text(dropdownItemSelectedText);
        });
    },
    init: function() {
        this.dropDownDefaultActions();
        this.addEvent();
        this.editEvent();
        this.addPromo();
        this.addProduct();
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


function individualDateTimeInit() {
    // initialize input widgets first

    $('.promo-date-input').datepicker({
        'format': 'd/m/yyyy',
        'autoclose': true
    });

// date controls for clickable icon
    $('.didi-calendar-ico.promo-date').click(function() {
        $('.promo-date-input').datepicker('show');
    });

};