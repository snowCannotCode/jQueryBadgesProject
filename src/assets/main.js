$(function() {
  $.ajax{
    url:'https://www.codeschool.com/users/snowCannotCode.json',
    dataType:'jsonp',
    success:function(response){
      var badges=$('#badges');
      for(var i=0,len=response.courses.completed.length;i<len;i++){
        var h3=$('<h3></h3>');
        var div=$('<div></div>');
        h3.appendTo(div);
        div.addClass('course');
        div.appendTo(badges);
      }
    }
  }


});
