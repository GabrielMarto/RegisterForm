function autocomplete(inp, arr) {
    var currentFocus
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });

    document.body.style.zoom="100%"

    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { //up
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
{ 
  var marcas = ['AGRALE', 'FIAT', 'FORD', 'GUERRA', 'GMC', 'HYUNDAI', 'IVECO', 'KIAMOTORS', 'MAN', 'MERCEDESBENZ', 'PEUGEOT', 'RANDON', 'RENAULT', 'SCANIA', 'SR', 'VOLKSWAGEN', 'VOLVO']
  autocomplete(document.getElementById("marca"), marcas);
  
  var modelosAgrale = ['AUTO LIFE', 'AUTO LIFE TRO'];
  autocomplete(document.getElementById("modelo"), modelosAgrale);
  
  var modelosFiat = ['DUCATO CARGO', 'DUCATO MC RONTANAMB'];
  autocomplete(document.getElementById("modelo"), modelosFiat);
  
  var modelosFord = ['CARGO 1630', 'CARGO 1717E', ' CARGO 1723', 'CARGO 1723L', 'CARGO 2423L', 'CARGO 2429', 'CARGO 2429L', 'CARGO 4331S', 'CARGO 712', 'CARGO 816S', 'CARGO 1119', 'CARGO 1317E', 'CARGO 1421', 'CARGO 1517E', 'CARGO 1519', 'CARGO 1519B', 'CARGO 1621', 'CARGO 1622', 'CARGO 1722', 'CARGO 1722E', 'CARGO 1932', 'CARGO 2422', 'CARGO 2422T', 'CARGO 2422E', 'CARGO 2422E TOPLINE', 'CARGO 2423', 'CARGO 2425', 'CARGO 2428', 'CARGO 2428E', 'CARGO 2429', 'CARGO 2429L', 'CARGO 2622E', 'CARGO 2628', 'CARGO 2628E', 'CARGO 2629 6X4', 'CARGO 2630', 'CARGO 3031', 'CARGO 4030', 'CARGO 4031', 'CARGO 4331', 'CARGO 4432E', 'CARGO 4532E', 'CARGO 4532E TOP LINE', 'CARGO 6332E', 'CARGO 814', 'CARGO 815', 'CARGO 815E', 'F14000', 'TRANSUT 330C']
  autocomplete(document.getElementById("modelo"), modelosFord);
  
  var modelosGMC = ['GMC 7110'];
  autocomplete(document.getElementById("modelo"), modelosGMC);
  
  var modelosGuerra = ['MAQUINA Z80'];
  autocomplete(document.getElementById("modelo"), modelosGuerra);
  
  var modelosHyundai = ['HR HDB'];
  autocomplete(document.getElementById("modelo"), modelosHyundai);

  var modelosIveco =['490S42', 'CAVALLINO 450E32', 'CURSOR 450E33', 'DAILY 35S14HDCS', 'DAILY4912', 'CURSOR 450E32 TN', 'HD490S38']
  }
  