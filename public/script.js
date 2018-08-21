let postFunc = function() {
    $.ajax({
        type: "POST",
        url: '/user',
        data: { name: "Jim" },
        success: function(data) {
            alert(data);
        }
    });
};


$('.btn').on('click', function(ev) {
    ev.preventDefault();
    postFunc();
});
