function autoHypenPhone(str) {
  str = str.replace(/[^0-9]/g, '');
  var tmp = '';
  if (str.length < 4) {
    return str;
  } else if (str.length < 7) {
    tmp += str.substr(0, 3);
    tmp += '-';
    tmp += str.substr(3);
    return tmp;
  } else if (str.length < 11) {
    tmp += str.substr(0, 3);
    tmp += '-';
    tmp += str.substr(3, 3);
    tmp += '-';
    tmp += str.substr(6);
    return tmp;
  } else {
    tmp += str.substr(0, 3);
    tmp += '-';
    tmp += str.substr(3, 4);
    tmp += '-';
    tmp += str.substr(7);
    return tmp;
  }
  return str;
}

var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "20%";
  }
}

$(function() {
  $('table.floating-thead>thead').each(function() {
    $(this).after($(this).clone().hide().css('top', 0).css('position', 'fixed'));
  });

  $(window).scroll(function() {
    $('table.floating-thead').each(function(i) {
      var table = $(this),
        thead = table.find('thead:first'),
        clone = table.find('thead:last'),
        top = table.offset().top,
        bottom = top + table.height() - thead.height(),
        left = table.position().left,
        border = parseInt(thead.find('th:first').css('border-width')),
        scroll = $(window).scrollTop();

      if (scroll < top || scroll > bottom) {
        clone.hide();
        return true;
      }
      if (clone.is('visible')) return true;
      clone.css('left', left).show().find('th').each(function(i) {
        $(this).width(thead.find('th').eq(i).width() + border);
      });
    });
  });
});


function change_quantity(num) {
  var x = document.form;
  var y = Number(x.count.value) + num;
  if (y < 1) y = 1;
  x.count.value = y;
}

$(function() {
  $('.bt-up').click(function() {
    var n = $('.bt-up').index(this);
    var num = $(".num:eq(" + n + ")").val();
    num = $(".num:eq(" + n + ")").val(num * 1 + 1);
  });
  $('.bt-down').click(function() {
    var n = $('.bt-down').index(this);
    var num = $(".num:eq(" + n + ")").val();
    num = $(".num:eq(" + n + ")").val(num * 1 - 1);
  });
});


$(document).ready(function() {
  $('#click_btn').click(function() {
    var rows = document.getElementById("order_table").getElementsByTagName("tr");
    var sum = 0;
    var total = document.getElementById("total_order").value;

    //rows.length -> 한 행에 있는 컬럼의 갯수
    /*
      for (var i = 1; i < rows.length; i++) {
        sum += parseInt(rows[i].childNodes[3].firstChild.data);

      }*/
    var ipts = $("sub_total1").val();

    var ipts2 = $("sub_total2").val();

    //  var ipts3 = $("input[type='text'][class='beef_class3']");

    //sum = parseInt(ipts) + parseInt(ipts2);
    sum = ipts + ipts2;
    alert(sum);
    /*
      for (var i = 0; i < ipts.length; i++) {

        var val = ipts.eq(i).val();

        if (val == '') val = '0';

        sum += Number(val);

      }
      sum = parseInt(document.getElementById("sub_total1").value);*/
    /*  var s1 = document.getElementById("sub_total1").value;
    var s2 = document.getElementById("sub_total2").value;
    var s3 = document.getElementById("sub_total3").value;*/
    //document.getElementById("total_order") = sum;
    $("total_order").text(sum);

  });

});

$('#total_order tr').each(function() {
  var customerId = $(this).find("td").eq(2).html();

});


$(document).ready(function() {
  $("#btn1").click(function() {
    $("p").append(" <b>Appended text</b>.");
  });

  $("#btn2").click(function() {
    $("order_table tr").append("<td>1</td>");
  });
});



$("#example-table-1 tr").click(function() {

  var str = ""
  var tdArr = new Array(); // 배열 선언
  // 현재 클릭된 Row(<tr>)
  var tr = $(this);
  var td = tr.children();

  // tr.text()는 클릭된 Row 즉 tr에 있는 모든 값을 가져온다.
  console.log("클릭한 Row의 모든 데이터 : " + tr.text());

  // 반복문을 이용해서 배열에 값을 담아 사용할 수 도 있다.
  td.each(function(i) {
    tdArr.push(td.eq(i).text());
  });

  console.log("배열에 담긴 값 : " + tdArr);

  // td.eq(index)를 통해 값을 가져올 수도 있다.
  var no = td.eq(0).text();
  var userid = td.eq(1).text();
  var name = td.eq(2).text();
  var email = td.eq(3).text();


  str += " * 클릭된 Row의 td값 = No. : <font color='red'>" + no + "</font>" +
    ", 아이디 : <font color='red'>" + userid + "</font>" +
    ", 이름 : <font color='red'>" + name + "</font>" +
    ", 이메일 : <font color='red'>" + email + "</font>";

  $("#ex1_Result1").html(" * 클릭한 Row의 모든 데이터 = " + tr.text());
  $("#ex1_Result2").html(str);

});

// 상단 선택버튼 클릭시 체크된 Row의 값을 가져온다.
$("#selectBtn").click(function() {

  var rowData = new Array();
  var tdArr = new Array();
  var checkbox = $("input[name=user_CheckBox]:checked");

  // 체크된 체크박스 값을 가져온다
  checkbox.each(function(i) {

    // checkbox.parent() : checkbox의 부모는 <td>이다.
    // checkbox.parent().parent() : <td>의 부모이므로 <tr>이다.
    var tr = checkbox.parent().parent().eq(i);
    var td = tr.children();

    // 체크된 row의 모든 값을 배열에 담는다.
    rowData.push(tr.text());

    // td.eq(0)은 체크박스 이므로  td.eq(1)의 값부터 가져온다.
    var no = td.eq(1).text() + ", "
    var userid = td.eq(2).text() + ", ";
    var name = td.eq(3).text() + ", ";
    var email = td.eq(4).text() + ", ";

    // 가져온 값을 배열에 담는다.
    tdArr.push(no);
    tdArr.push(userid);
    tdArr.push(name);
    tdArr.push(email);

    //console.log("no : " + no);
    //console.log("userid : " + userid);
    //console.log("name : " + name);
    //console.log("email : " + email);
  });

  $("#ex3_Result1").html(" * 체크된 Row의 모든 데이터 = " + rowData);
  $("#ex3_Result2").html(tdArr);
});
