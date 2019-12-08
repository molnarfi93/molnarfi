function mover(x){
    x.style.backgroundColor='#FFFF00';
}

function mout(x){
    x.style.backgroundColor='#C0C0C0';
}

function message(x){
    alert("Mivel ez demo nézet, a link nem működik!");
}

$(document).ready(function() {
    $("#elrejt").click(function () {
        $(".style18").hide("slow");
    });
});

$(document).ready(function() {
    $("#mutat").click(function () {
        $(".style18").show("slow");
    });
});

$(document).ready(function() {
    $("#hatter").click(function () {
        $(".style1").css("background-image", "");
        $(".style1").css("background-color", "black");
    });
});

$(document).ready(function() {
    $("#hattervissza").click(function () {
        $(".style1").css("background-image", "url('pictures/1328123655_699.jpg')");
    });
});

$(document).ready(function() {
    $("#ricsgreen").click(function (event) {
        event.preventDefault();
        $("#ricsgreendiv").load("http://www.ricsandgreen.hu/news.html");
    });
});

function Start(){
    $("#filmek").hide();
    $("#szineszek").hide();
    $("#filmstudiok").hide();
    $("#addFilmekForm").hide();
    $("#addSzineszekForm").hide();
    $("#addFilmstudiokForm").hide();
    $("#szineszValasztas").hide();
    $("#filmstudioValasztas").hide();
}

function filmek(){
    $("#filmek").hide();
    $("#szineszek").hide();
    $("#filmstudiok").hide();
    $("#addFilmekForm").hide();
    $("#addSzineszekForm").hide();
    $("#addFilmstudiokForm").hide();
    $("#szineszValasztas").hide();
    $("#filmstudioValasztas").hide();
    $("#index").hide();
    $.getJSON('filmek', function(data){
        var table=$('<table id="filmek"></table>');
        var thead=$("<thead></thead>");
        var tbody=$("<tbody></tbody>");
        var title=$("<tr><th colspan='16'>Filmek</th></tr>");
        var head=$("<tr><th>Cím</th><th></th><th>Megjelenési év</th><th>Rendező</th><th>Producer</th><th>Gyártó</th></tr>");
        thead.append(title);
        thead.append(head);
        $.each(data, function(key, value){
            var line=$('<tr></tr>');
            var cimData=$('<td>'+value.cim+'</td>');
            var megjelenesievData=$('<td>'+value.megjelenesiev+'</td>');
            var rendezoData=$('<td>'+value.rendezo+'</td>');
            var producerData=$('<td>'+value.producer+'</td>');
            var gyartoData=$('<td>'+value.gyarto+'</td>');
            line.append(cimData);
            line.append(megjelenesievData);
            line.append(rendezoData);
            line.append(producerData);
            line.append(gyartoData)
            tbody.append(line);
        })
        table.append(thead);
        table.append(tbody);
        $("#filmek").show().html(table);
    })
}

function szineszek(){
    $("#filmek").hide();
    $("#szineszek").hide();
    $("#filmstudiok").hide();
    $("#addFilmekForm").hide();
    $("#addSzineszekForm").hide();
    $("#addFilmstudiokForm").hide();
    $("#szineszValasztas").hide();
    $("#filmstudioValasztas").hide();
    $("#index").hide();
    $.getJSON('szineszek', function(data){
        var table=$('<table id="szineszek"></table>');
        var thead=$("<thead></thead>");
        var tbody=$("<tbody></tbody>");
        var title=$("<tr><th colspan='4'>Színészek</th></tr>");
        var head=$("<tr><th>Név</th><th></th><th>Nemzetiség</th><th>Születési hely</th><th>Születési év</th><th>Elhalálozási év</th>");
        thead.append(title);
        thead.append(head);
        $.each(data, function(key, value){
            var line=$('<tr></tr>');
            var nevData=$('<td>'+value.nev+'</td>');
            var nemzetisegData=$('<td>'+value.nemzetiseg+'</td>');
            var szuletesihelyData=$('<td>'+value.szuletesihely+'</td>');
            var szuletesievData=$('<td>'+value.szuletesiev+'</td>');
            var elhalalozasievData=$('<td>'+value.elhalalozasiev+'</td>');
            line.append(nevData);
            line.append(nemzetisegData);
            line.append(szuletesihelyData);
            line.append(szuletesievData);
            line.append(elhalalozasievData);
            tbody.append(line);
        })
        table.append(thead);
        table.append(tbody);
        $("#szineszek").show().html(table);
    })
}

function filmstudiok(){
    $("#filmek").hide();
    $("#szineszek").hide();
    $("#filmstudiok").hide();
    $("#addFilmekForm").hide();
    $("#addSzineszekForm").hide();
    $("#addFilmstudiokForm").hide();
    $("#szineszValasztas").hide();
    $("#filmstudioValasztas").hide();
    $("#index").hide();
    $.getJSON('filmstudiok', function(data){
        var table=$('<table id="filmstudiok"></table>');
        var thead=$("<thead></thead>");
        var tbody=$("<tbody></tbody>");
        var title=$("<tr><th colspan='4'>Filmstúdiók</th></tr>");
        var head=$("<tr><th>Név</th><th></th><th>Ország</th><th>Alapító</th><th>Alapítási év</th>");
        thead.append(title);
        thead.append(head);
        $.each(data, function(key, value){
            var line=$('<tr></tr>');
            var nevData=$('<td>'+value.nev+'</td>');
            var orszagData=$('<td>'+value.orszag+'</td>');
            var alapitoData=$('<td>'+value.alapito+'</td>');
            var alapitasievData=$('<td>'+value.alapitasiev+'</td>');
            line.append(nevData);
            line.append(orszagData);
            line.append(alapitoData);
            line.append(alapitasievData);
            tbody.append(line);
        })
        table.append(thead);
        table.append(tbody);
        $("#filmstudiok").show().html(table);
    })
}

function addFilmek(){
    $("#filmek").hide();
    $("#szineszek").hide();
    $("#filmstudiok").hide();
    $("#addSzineszekForm").hide();
    $("#addFilmstudiokForm").hide();
    $("#szineszValasztas").hide();
    $("#filmstudioValasztas").hide();
    $("#index").hide();
    $("#addFilmekForm").on('submit', function(event){
        event.preventDefault();
        $.post("/addFilmek", {
                "cim": $("#filmCim").val(),
                "megjelenesiev": $("#filmMegjelenesiev").val(),
                "rendezo": $("#filmRendezo").val(),
                "producer": $("#filmProducer").val(),
                "gyarto": $("#filmGyarto").val(),
            },
            function(){
                alert("Sikeres a hozzáadás!");
            }).fail(function(){
            alert("Hiba!");
        })
    })
    $.get("/szineszNevek"), function(nevek){
        nevek.forEach(function(nev){
            $("#filmSzinesz").append('option value="' + nev + '">' + nev + '</option>');
        })
    }
    $("#addFilmekForm").show();
}

function addSzineszek(){
    $("#filmek").hide();
    $("#szineszek").hide();
    $("#filmstudiok").hide();
    $("#addFilmekForm").hide();
    $("#addFilmstudiokForm").hide();
    $("#szineszValasztas").hide();
    $("#filmstudioValasztas").hide();
    $("#index").hide();
    $("#addSzineszekForm").on('submit', function(event){
        event.preventDefault();
        $.post("/addSzineszek", {
            "nev": $("#szineszNev").val(),
            "nemzetiseg": $("#szineszNemzetiseg").val(),
            "szuletesihely": $("#szineszSzuletesihely").val(),
            "szuletesiev": $("#szineszSzuletesiev").val(),
            "elhalalozasiev": $("#szineszElhalalozasiev").val(),
        },
        function(){
            alert("Sikeres hozzáadás!");
        }).fail(function(){
            alert("Hiba!");
        })
    })
    $("#addSzineszekForm").show();
    document.getElementById("addSzineszekForm()").reset();
}

function addFilmstudiok(){
    $("#filmek").hide();
    $("#szineszek").hide();
    $("#filmstudiok").hide();
    $("#addFilmekForm").hide();
    $("#addSzineszekForm").hide();
    $("#szineszValasztas").hide();
    $("#filmstudioValasztas").hide();
    $("#index").hide();
    $("#addFilmstudiokForm").on('submit', function(event){
        event.preventDefault();
        $.post("/addFilmstudiok", {
            "nev": $("#filmstudioNev").val(),
            "orszag": $("#filmstudioOrszag").val(),
            "alapito": $("#filmstudioAlapito").val(),
            "alapitasiev": $("#filmstudioAlapitasiev").val(),
            "gyarto": $("#filmGyarto").val(),
        },
        function(){
            alert("Sikeres hozzáadás!");
        }).fail(function(){
            alert("Hiba!");
        })
    })
    $("#addFilmstudiokForm").show();
    document.getElementById("addFilmstudiokForm()").reset();
}

function szineszValasztas(){
    $("#filmek").hide();
    $("#szineszek").hide();
    $("#filmstudiok").hide();
    $("#addFilmekForm").hide();
    $("#addSzineszekForm").hide();
    $("#addFilmstudiokForm").hide();
    $("#szineszValasztas").hide();
    $("#filmstudioValasztas").hide();
    $("#index").hide();
    $.getJSON('/szineszek', function(data){
        var table=$('<table id="szineszvalasztas"></table>');
        var thead=$("<thead></thead>");
        var tbody=$("<tbody></tbody>");
        var title=$("<tr><th>Válassz egy színészt!</th></tr>");
        var selectorLine=$("<tr></tr>");
        var submitLine=$("<tr></tr>");
        var selector=$('<select id="selector">Filmlista</select>');
        thead.append(title);
        selectorLine.append(selector);
        tbody.append(selectorLine);
        $.each(data, function(key, value){
            var szineszValasztas=$('<option>'+value.nev+'</option>');
            selector.append(szineszValasztas);
        });
        var submit=$('<input type="button" onclick="filmekBySzineszek()" value="Submit"</button>');
        submitLine.append(submit);
        tbody.append(submitLine);
        table.append(thead);
        table.append(tbody);
        $("#szineszValasztas").show().html(table);
    })
}

function filmstudioValasztas(){
    $("#filmek").hide();
    $("#szineszek").hide();
    $("#filmstudiok").hide();
    $("#addFilmekForm").hide();
    $("#addSzineszekForm").hide();
    $("#addFilmstudiokForm").hide();
    $("#szineszValasztas").hide();
    $("#filmstudioValasztas").hide();
    $("#index").hide();
    $.getJSON('/filmstudiok', function(data){
        var table=$('<table id="filmstudiovalasztas"></table>');
        var thead=$("<thead></thead>");
        var tbody=$("<tbody></tbody>");
        var title=$("<tr><th>Válassz egy filmstúdiót!</th></tr>");
        var selectorLine=$("<tr></tr>");
        var submitLine=$("<tr></tr>");
        var selector=$('<select id="selector">Filmstúdió lista</select>');
        thead.append(title);
        selectorLine.append(selector);
        tbody.append(selectorLine);
        $.each(data, function(key, value){
            var filmstudioValasztas=$('<option>'+value.nev+'</option>');
            selector.append(filmstudioValasztas);
        });
        var submit=$('<input type="button" onclick="filmekByFilmstudiok()" value="Submit"</button>');
        submitLine.append(submit);
        tbody.append(submitLine);
        table.append(thead);
        table.append(tbody);
        $("#filmstudioValasztas").show().html(table);
    })
}

function filmekBySzineszek(){
    document.cookie = 'nev=' + document.getElementById("selector").value;
    $("#filmek").hide();
    $("#szineszek").hide();
    $("#filmstudiok").hide();
    $("#addFilmek").hide();
    $("#addSzineszek").hide();
    $("#szineszValasztas").hide();
    $("#filmstudioValasztas").hide();
    $("#index").hide();
    $.getJSON('/szineszvalasztas', function (data) {
        var table = $('<table id="filmekbyszineszek"></table>');
        var thead = $("<thead></thead>");
        var tbody = $("<tbody></tbody>");
        var title = $("<tr><th colspan='11'>A színész filmjei</th></tr>");
        var head = $("<tr><th>Cím</th><th>Megjelenési év</th><th>Rendező</th><th>Producer</th><th>Gyártó</th></tr>");
        thead.append(title);
        thead.append(head);
        $.each(data, function (key, value) {
            var line = $('<tr></tr>');
            var cimCell = $('<td>' + value.cim + '</td>');
            var megjelenesievCell = $('<td>' + value.megjelenesiev + '</td>');
            var rendezoCell = $('<td>' + value.rendezo + '</td>');
            var producerCell = $('<td>' + value.producer + '</td>');
            var gyartoCell = $('<td>' + value.gyarto + '</td>');
            line.append(cimCell);
            line.append(megjelenesievCell);
            line.append(rendezoCell);
            line.append(producerCell);
            line.append(gyartoCell);
            tbody.append(line);
        });
        table.append(thead);
        table.append(tbody);
        $('#szineszValasztas').show().html(table);
    })
}

function filmekByFilmstudiok(){
    document.cookie = 'nev=' + document.getElementById("selector").value;
    $("#filmek").hide();
    $("#szineszek").hide();
    $("#filmstudiok").hide();
    $("#addFilmek").hide();
    $("#addSzineszek").hide();
    $("#szineszValasztas").hide();
    $("#filmstudioValasztas").hide();
    $("#index").hide();
    $.getJSON('/filmstudiovalasztas', function (data) {
        var table = $('<table id="filmekbyfilmstudiok"></table>');
        var thead = $("<thead></thead>");
        var tbody = $("<tbody></tbody>");
        var title = $("<tr><th colspan='11'>A filmstúdió filmjei</th></tr>");
        var head = $("<tr><th>Cím</th><th>Megjelenési év</th><th>Rendező</th><th>Producer</th><th>Gyártó</th></tr>");
        thead.append(title);
        thead.append(head);
        $.each(data, function (key, value) {
            var line = $('<tr></tr>');
            var cimCell = $('<td>' + value.cim + '</td>');
            var megjelenesievCell = $('<td>' + value.megjelenesiev + '</td>');
            var rendezoCell = $('<td>' + value.rendezo + '</td>');
            var producerCell = $('<td>' + value.producer + '</td>');
            var gyartoCell = $('<td>' + value.gyarto + '</td>');
            line.append(cimCell);
            line.append(megjelenesievCell);
            line.append(rendezoCell);
            line.append(producerCell);
            line.append(gyartoCell);
            line.append(elerhetoCell);
            tbody.append(line);
        });
        table.append(thead);
        table.append(tbody);
        $('#filmstudioValasztas').show().html(table);
    })
}