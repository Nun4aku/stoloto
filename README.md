Требуется реализовать логику игры. Правила следующие: 



У игры есть два поля, в первом поле будет девятнадцать клеток, во втором две клетки. От участника лотереи требуется отметить в первом поле восемь цифр, во втором одну цифру. При вычисление результата потребуется сравнить отмеченные участником числа с двумя случайно сгенерированными, в соответствиями с правилами игры (восемь чисел в первом массиве, одно во втором массиве), массивами чисел. В случае совпадения четырех и более цифр в первом поле, либо трех и более чисел в первом поле и одного во втором, пользователь считается победителем лотереи и получает причитающиеся ему лавры.


4*) Адаптивная mobile-first вёрстка, условно приближенная к макету. Flexbox/Grid layout. (https://www.figma.com/file/VDraSBJhGzDKP33eS4IBbp6Z/Finch_test). Safari хорошо, но оба не обязательно.

5*) Реализовать генерацию случайно выбранных полей в билете (в соответствие с правилами лотереи) по нажатию на значок волшебной палочки.



{

    selectedNumber: {
        firstField: [ *first field numbers* ],
        secondField: [ *second field numbers* ]
    },

    isTicketWon: *Boolean(true||false)*

}
