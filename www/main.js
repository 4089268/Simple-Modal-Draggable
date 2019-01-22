var modal1;
var btn_modal1;
var btn_close1;

var modal2;
var btn_modal2;
var btn_close2;


$(document).ready(function() {
    modal1 = $("#modal")[0];
    btn_modal1 = $("#btn_modal")[0];
    btn_close1 = $("#btn_close1")[0];

    modal2 = $("#modal-libre")[0];
    btn_modal2 = $("#btn_modal2")[0];
    btn_close2 = $("#btn_close2")[0];

    $(btn_modal1).click(openModal1);
    $(btn_close1).click(closeModal1);

    $(btn_modal2).click(openModal2);
    $(btn_close2).click(closeModal2);



    $(".modal").draggable({ handle: ".modal-topBar" });

});

function openModal1() {
    $(modal1).css('display', 'block');
}

function closeModal1() {
    $(modal1).css('display', 'none');
}

function openModal2() {

    $(modal2).css('display', 'block');
}

function closeModal2() {
    $(modal2).css('display', 'none');
}