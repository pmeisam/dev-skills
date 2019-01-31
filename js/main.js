// $(".skillsList");
// $("input");
// $("button");
// $('.remove');
var list = $('div');
$(".addSk").on('click',function(){
    list.append(`
    <tr>
        <td><button class="remove">X</button></td>
        <td>${$('input').val()}</td>
    </tr>
    `);
    $('input').val("");
    console.log('working')
});

$('div').on('click', 'button',function(){
    // console.log(this);
    $(this).closest('tr').toggle(4000);
});