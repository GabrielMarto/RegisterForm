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

  var modelosKiamotors = ['KIA BESTA GS GRAND 2', 'KIA k2700'];
  autocomplete(document.getElementById("modelo"), modelosKiamotors);

  var modelosMan = ['TGX 29.440 6X4  ', 'MAN TGX  28.440', 'MAN TGX 29.440T'];
  autocomplete(document.getElementById("modelo"), modelosMan);
  
  var modelosMercedesbenz = ['ACTROS 2546LS', '1622', 'LS 1634', 'ATEGO 1725', 'ATEGO 2425', 'ATRON 2324', 'AXOR 2540S', 'AXOR 2036S', 'MB CAIO MILLENNIUM', 'AXOR 1933S', 'AXOR 2640S 6X4', '1718', 'AXOR 2035S', 'AXOR 2044S', '1938LS', '1938 S', 'ATEGO 1418', 'ATEGO 2429', 'BUSSCAR URBANUSS', 'ATEGO 1718', 'AXOR 2536S', '1935LS', 'ATEGO 2428', 'AXOR 3340S 6X4', 'AXOR 3340 6X4', 'ATRON 2729 6X4', 'ATEGO 2426', 'ATEGO 2430', '1934 LS', '515 CDI SPRINTER', 'AXOR 3344S 6X4', 'ATEGO 1719', '2635 6X4', '1720', '608 L D', 'AXOR 2644S 6X4', '1620', '1620 L', '1944S', 'GUERRA MIC 20', 'ACCELO 1016', 'AXOR 2826 6X4', 'DUCATO MULTI', 'ACTROS 2546 LS', '1318', '1318 L', 'ATRON 2324', 'MULTIEIXO 2425 8X4', 'AXOR 2544S', 'AXOR 2540 S', '712C', 'AXOR 2831 6X4', 'ACTROS 2646LS', '712E RHINUS 700', '712E SBB CF', 'AUTO LIFE TROIAL2', 'ATRON 1319', 'MB O-500', 'ACCELO 815', '712 CHAVANTE BRUT', 'ATEGO 1518', '2638L', '2638LK', 'ACCELO 915C', 'AXOR 2041S', '2638LS', '1634', '1618', '1618 L', '1618 L 3E', 'AXOR 2535S', 'AXOR 1933LS', '1933 S', 'AXOR 1933', 'AXOR 1933 S', 'MB CAIO MILLENNIUM U', 'MB CAIO MILLENNIUM 2', 'ATRON 1719', '1418 L', 'L 2213', 'L2325', 'AXOR 4140 6X4', 'AXOR 3131 6X4', 'AXOR 3344S', '1938 LS', '2644S 6X4', '3344S 6X4 AXOR', '2729 6X4', '3344S 6X4', '2726 K 6X4', 'AXOR 2040S', 'MB AMAL ALCATRAZ AB1', 'AXOR 4140K 6X4', 'MB ATRON 1719', 'CAMINHAO MB ATRON 16', 'MB AXOR 2644LS 6X4', 'MB 2635LS 6X4', 'MB 2635LS', 'MB INDUSCAR MONDENG', 'M.BENZ AXOR 3340 6X4', 'M.BENZ ATEGO 1315', 'M.BENZ 915C', 'MB 3340S 6X4', 'MB 2423K', '815', '914C', '2426', '2644S', '1728 8X2', '1935', '1635S', '1418', '2429', 'AXOR 2540', '608D', 'L 1113', '608', '708', 'ATRON 2729', '1016', 'MB AXOR 2041', 'MB ATEGO 1726', 'MB 2428', 'AXOR 2035 S', 'M.BENZ / AXOR 2826', 'MB AXOR 2540 S', 'MB ATRON 1719K', 'MB AXOR 2831', 'M.BENZ 710', 'M.BENZ MPOLO VIALE U', 'MB ATEGO 3030', 'AXOR 2826', 'M.BENZ 1714K', 'M.BENZ LS1935', 'M.BENZ ATEGO 1419', 'M.BENZ ACTROS 2646LS', 'M.BENZ AXOR 2640S', 'M.BENZ LS1941', 'M.BENZ L608', 'M.BENZ ATRON 1319', 'M.BENZ 709', 'CM  MB AXOR 2544S', 'MB ACTROS 2651S', 'M.BENZ AXOR 3340 S', 'MB ATRON 2729K', 'M. BENZ 710', 'M.BENZ ATEGO 1518', 'M.BENZ ATRON 1635S', 'AXOR 2036 S', 'M.BENZ 1016', 'M.BENZ 1728', 'ACTROS 2651S', 'M.BENZ ACTROS 2646S', '1214', 'BUSSCAR URBPLUS U', 'INDUSCAR APACHE A', 'MB MPOLO VIALE', 'AXOR 2036LS', '709', 'AXOR 2536 S', 'LS 1632'];
  autocomplete(document.getElementById("modelo"), modelosMercedesbenz);

  var modelosPeugeot = ['206 SOLEIL'];
  autocomplete(document.getElementById("modelo"), modelosPeugeot);

  var modelosRandon = ['RANDON SR TQ', 'SR RANDON SR FG', 'RANDON SR CA'];
  autocomplete(document.getElementById("modelo"), modelosRandon);

  var modelosRenault = ['MASTER CC 2.5 DCI', 'MASTER 13M3 25DCI', 'MASTER EUROLAF'];
  autocomplete(document.getElementById("modelo"), modelosRenault);

  var modelosScania = ['G 420 6X2', 'P360 6X2', 'P114 GA 4X2 330', 'R 420 6X4', 'SCANIA INDUSCAR MILL', 'R480 6X4', 'P340 4X2', 'R124 GA 4X2 360', 'T124 GA 6X4 360', 'G380 4X2', 'R400 6X2', 'R164 GA 6X4 480', 'G420 4X2', 'R124 GA 6X4 400', 'G420 6X4', 'G380 4X2', 'R124 6X2 400', 'R-124', 'R-124 GA6X4', 'P340 A 6X2', 'SCANIA P 310 B8X2', 'T124 GA 4X2 400', 'SCANIA R124 LA', 'R124 GA 6X4 360', 'SCANIA P310',  'SCANIA R440', 'R124 GA 4X2 400', 'SCANIA R114', 'R440 6X4', 'SCANIA T142', 'T114 GA 4X2 360', 'SCANIA G380', 'SCANIA R124 -420', 'SCANIA G 380', 'SCNIA G380', 'R440 6X2', 'SCANIA R124', 'R114 GA 4X2 380', 'SCANIA T113 H', 'SCANIA T124 GA4X2', 'SCANIA T124', 'SCANIA R480 6X4', 'SCANIA T-124', 'T-124 GA 4X2 360', 'SCANIA P270', 'R-124 GA 6X4 420', 'SCANIA P124', 'CM SCANIA G420', 'SCANIA G420', 'R420 A', 'R124 LA 6X2 NA420', 'R400A'];
  autocomplete(document.getElementById("modelo"), modelosScania);

  var modelosSr = ['SR FACCHINI SRF CF', 'BAU GUERRA AG FG', 'SR GUERRA AG GR', 'SR RANDONSP SPFG CG', 'KRONORTE TANQUE BT1', 'SR RHODOSS TQ2 CTT', 'REB/ RANDON SR BA AB', 'SR FACCHINI SRF CA', 'LIBRELATO CRBAENI2', 'SR RANDON', 'SR LIBRELATO SRCS 3E', 'METANOX', 'KRONE'];
  autocomplete(document.getElementById("modelo"), modelosSr);

  var modelosVolksWagen = ['24.280 CRM 6X2','17.220 TRATOR','19.320 CLC TT','24.250 CNC 6X2','18.310 TITAN 4X2','15.180 CNM','23.220','VW INDUSCAR MILLENNI','17.210','15.190','15.180','25.320 CNC 6X2','18.310 TITAN','KOMBI FURGAO','19.320 CLC','24.250 CLC 6X2','26.260E','VW 18.310 TITAN','VW 24.220','VW 19.320','VW 24.250 CLC 6X2','VW 26.260E','19.330 CTC 4X2','24.250E WORKER 6X2','31.320 CNC 6X4','24.250 CNC 8X2','13.180 CNM','VW 17.250E','17.250E','14.220','24.220 EURO3 WORKER','16.200','9.150E DELIVERY','VW 19.370 CLM 4X2','25.320 CLC 6X2','13.150','GOL GLI 1.8','19.320 CNC','18310 TRACTOR','17220 TRACTOR','19.370 CLM 4X2','25.370 CLM 6X2','16.220','26.280 CRM 6X4','18.310','13.180 WORKER','13.170','VW 25.370','CM VW 35.300','VW 24.280','VW 26.220 WORKER','VW 5.150','VW 17.320','VW 24.320','VW 15.190','VW 26.280','VW 25.320','19.330 CONSTELLATION','VW 24.250 CTC','VW 19.370','19.370 CLM T','8.160 DELIVERY','19.320 CONSTELLATION','VW 11.180 DRC','17.190 CRM','24.250C','VM 260','14.190 CRM 4X2','COMIL CAMPIONE R','24.250 CONSTELLATION','VW 24.250E WORKER','VW 19.330','VW  17.230','VW DELIVERY 10.160','VW 11.180 DELIVERY','VW 17.210','CM VW 13.180','CM VW 19.360','VW 17.280','VW 31.260E','CONSTELLATION 24280','VW 31.310','VW 17.180 WORKER','17190 4X2','31330','VW 13.190 CRM 4X2','11180','17280','31320','8160 4X2','15190','17190','VW 16.170 BT','VW 8.140','VW 23250E','VW 40.300','VW 10.160 DRC 4X2','VW 19.390 CTC 4X2','VW 9.150E CUMMINS','VW 17250 CLC TRATOR','25.390 CTC 6X2','8150E INBRA BD','8150E AUTO LIFE TR10','INDUSCAR MIL U OT','VW 17250 CNC','VW 31320 CNC 6X2','VW 8160 BLIFORT BO','VW 24.250 CNC 6X2','VW 8150E AUTO LIFE T','26280  CRM 6X4','17.250 CLC','8.160 MIB METROPOLIS','15.180E EURO3','8.150E INBRA','8.150 MIB METROPOLIS','8.150E AUTO LIFE','17.180 EURO3 WORKER','VW/17.210 MOTOR MWM','VW 25.370 CLM T 6X2','VW 17.280 CRM 4X2','VW 13.190 WORKER','VW 25.420 CTC 6X2','VW 9.170','10160','24250','15170E','24220 EURO 3'];
  autocomplete(document.getElementById("modelo"), modelosVolksWagen);

  var modelosVolvo = [ 'FM 500 6X4', 'VOLVO VM 330', 'FH400 6X2', 'CM VOLVO N10', 'VV VM 310', 'VOLVO NL12 360', 'VOLVO FH540', 'VOLVO FH 12 420', 'VOLVO VM 270', 'VOLVO VM 260', 'FM 370 4X2', 'VOLVO NH12 380', 'VOLVO FH 12 380', 'VOLVO FH 540', 'FH 12380', 'FH 440 6X2', 'VM 310', 'VOLVO NL 12 360', 'VM 260 R', 'VOLVO FH 440', 'FH 12.380', 'VOLVO FH 12.420', 'VOLVO FH 460', 'NH 12.380', 'FH 460T', 'VOLVO VM 310', 'VM 260 6X2', 'FH 540 6X4T', 'FH12 460 4X2', 'FH 520 6X4', 'FH 12.420T', 'VM 310 6X4', 'FH440 6X2 ', 'FH12 420 4X2 ', 'NH12 420 6X4', 'FH440 6X4', 'FH540 6X4', 'FH 400 4X2', 'FH 540 6X4', 'VM 270 6X2', 'NL10 340 4X2', 'NH12 380', 'FH12 420 4X2', 'FM 370 6X2', 'FH520 6X4', 'FH 460 6X2', 'VM220 4X2', 'VM310 4X2', 'FH440 6X2', 'VM 330 8X2', 'FH12 380 4X2', 'VV FH12380 4X2', 'VOLVO VM 260R 6X2', 'VOLVO VM 260R 6X2R', 'VV FH 12380 4X2', 'VM 270 6X4', 'VOLVO FH 12380 4X2', 'VOLVO FH 12380', 'FM 480 6X4', 'FH460 6X2'];
  autocomplete(document.getElementById("modelo"), modelosVolvo);
  }
  