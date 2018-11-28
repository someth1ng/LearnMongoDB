// Todo list app
const baseUrl = document.location.origin;

var getID = (h) => {
    var pID = h.children("p");
    return pID[0].innerText;
};

function initInput() {
    $("input[type='text'").on('keypress',function(event) {
        if (event.which === 13) {
            // input todos
            var todoText = $(this).val();
            // create new li
            $('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
            // clear input
            $(this).val("");
            var url = baseUrl + "/todos";
            var data = {text: todoText};
            $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                url,
                success: function (data) {
                    console.log('success');
                    console.log(JSON.stringify(data));
                }
            });
        }
    })
}

function init() {
    // check off specific Todos by click
    $('ul').on('click', 'li', function () {
        var completed = $(this).is(".selected") ? true : false;
        
        $(this).toggleClass('selected');
        var id = getID($(this));
        var url = baseUrl + "/todos/" + id + "?_method=PUT";

        var data = {completed};
        $.ajax({
            url,
            data: JSON.stringify(data),
            contentType: 'application/json',
            type: 'POST',
            success: function (res) {
                console.log('success');
            }
        });
    });

    // click on X to delete Todo
    $('ul').on('click', 'span', function(event) {
        var id = getID($(this).parent());
        var url = baseUrl + "/todos/" + id + "?_method=DELETE";

        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        });
        event.stopPropagation();
        $.ajax({
            url,
            type: 'POST',
            success: function (res) {
                console.log('success');
            }
        });
    })

    initInput();

    // button plus animation
    $('span:first-of-type').on('click', function () {
        $("input[type='text'").fadeToggle();
    })
}





init();
