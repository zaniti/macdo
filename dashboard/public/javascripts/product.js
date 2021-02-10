fetch("/product")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var table = document.getElementById("myTable__content");
    var html = "";
    for (var i = 0; i < data.length; i++) {
      var row = `<tr class="product-info">
                  <td>${data[i].productName}</td>
                  <td>${data[i].price}</td>
                  <td>${data[i].subCategory}</td>
                  <td><a href="#" data-id><i class="fas fa-trash"></a></i>
                  <a href="#"><i class="fas fa-pen-alt"></a></i></td>
                </tr>`;
      html += row;
    }
    table.innerHTML = html;
  });
