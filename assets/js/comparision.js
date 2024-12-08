for (var i = 1; i < product.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
}

function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2) {
        document.getElementById("img1").src = product[a].image
        document.getElementById("Brand1").innerHTML = product[a].brand
        document.getElementById("Price1").innerHTML = product[a].price
        document.getElementById("Performance1").innerHTML = product[a].performance
        document.getElementById("Library1").innerHTML = product[a].games
        document.getElementById("Features1").innerHTML = product[a].features
        document.getElementById("Storage1").innerHTML = product[a].storage

    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = product[0].image
        document.getElementById("Brand1").innerHTML = ""
        document.getElementById("Price1").innerHTML = ""
        document.getElementById("Performance1").innerHTML = ""
        document.getElementById("Library1").innerHTML = ""
        document.getElementById("Features1").innerHTML = ""
        document.getElementById("Storage1").innerHTML = ""

    }
}

function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1) {
        document.getElementById("img2").src = product[a].image
        document.getElementById("Brand2").innerHTML = product[a].brand
        document.getElementById("Price2").innerHTML = product[a].price
        document.getElementById("Performance2").innerHTML = product[a].performance
        document.getElementById("Library2").innerHTML = product[a].games
        document.getElementById("Features2").innerHTML = product[a].features
        document.getElementById("Storage2").innerHTML = product[a].storage
    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = product[0].image
        document.getElementById("Brand2").innerHTML = ""
        document.getElementById("Price2").innerHTML = ""
        document.getElementById("Performance2").innerHTML = ""
        document.getElementById("Library2").innerHTML = ""
        document.getElementById("Features2").innerHTML = ""
        document.getElementById("Storage2").innerHTML = ""

    }
}