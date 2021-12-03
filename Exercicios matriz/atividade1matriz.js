let products = [['Refrigerante, Pepsi, R$5', "<br>"],
['Biscoito, Piraquê, R$3', "<br>"],
['Batata , Maravilha, R$4', "<br>"]]


for (i = 0; i < products.length; i++) {
    for (j = 0; j < 3; j++) {

        document.write(products[i][j] + ' ')

    }

    document.write("<hr>")
}


