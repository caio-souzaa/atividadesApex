let courses = [['Front-End-Apex, R$4.000,00', "<br>"],
['Full-Stack, R$8.000,00', "<br>"],
['Back-End, R$4.000,00', "<br>"]]


for (i = 0; i < courses.length; i++) {
    for (j = 0; j < 3; j++) {

        document.write(courses[i][j] + ' ')

    }

    document.write("<hr>")
}

