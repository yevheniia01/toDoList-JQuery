
$(document).ready(function(){
    $('#add').on('click', function(){
        var newItem = $('#new-task').val();
        if (newItem.length > 0){
            $('#tasks').append('<li>' + newItem + '</li>');
            $('#new-task').val(" ");
        }
    })
})
