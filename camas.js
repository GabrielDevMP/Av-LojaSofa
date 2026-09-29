var Tabcama = new Array(4);

Tabcama[0] = ["Cama de Solteiro", "Simples", "104 x 104 x 202 (AxLxP)", "CamaSolt_150", 325];
Tabcama[1] = ["Cama de Solteiro", "Bicama", "70 x 87 x 193 (AxLxP)", "BicamaSolteiro_150", 470];
Tabcama[2] = ["Cama de Casal", "Simples", "108 x 154 x 210 (AxLxP)", "CamaCasalSImples_150", 680];
Tabcama[3] = ["Cama de Casal", "Com gavetas", "48 x 145 x 195 (AxLxP)", "CamaCasalGavetas_150", 1900];

function MostrarTabCamas(tipo) {
    var gab = window.open(
        "",
        "janelaCama",
        "location=no,status=no,width=300,height=420"
    );

    if (!gab) {
        return;
    }

    var pasta = location.href.substring(0, location.href.lastIndexOf("/") + 1);
    var cama = Tabcama[tipo];

    gab.document.open();
    gab.document.write("<!DOCTYPE html>");
    gab.document.write("<html lang='pt-br'><head>");
    gab.document.write("<meta charset='UTF-8'>");
    gab.document.write("<title>DOReMI SOlFÁ-móveis</title>");
    gab.document.write("<base href='" + pasta + "'>");
    gab.document.write("<link rel='stylesheet' href='style.css'>");
    gab.document.write("</head><body class='janela-cama'>");
    gab.document.write("<div class='apresentacao'>");
    gab.document.write("<h3>" + cama[0] + "</h3>");
    gab.document.write("<p class='estilo-cama'>" + cama[1] + "</p>");
    gab.document.write("<p><img src='Imagens/" + cama[3] + ".jpg' alt='" + cama[0] + " " + cama[1] + "'></p>");
    gab.document.write("<p>" + cama[2] + "</p>");
    gab.document.write("<p>Preço: R$ " + cama[4] + ",00</p>");
    gab.document.write("<form>");
    gab.document.write("<input type='button' value='Fechar' onclick='window.close();'>");
    gab.document.write("</form>");
    gab.document.write("</div>");
    gab.document.write("</body></html>");
    gab.document.close();
}
