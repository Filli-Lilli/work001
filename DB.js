const db = {
    images: [     
        {
            number: 'Тигренок',
            picture: 'https://s1.1zoom.ru/b5050/892/257255-Sepik_1600x1200.jpg'
        },
        {
            number: 'Белочка',
            picture: 'https://i.pinimg.com/originals/16/43/35/164335e4fe265fa04f3b8e2ab13ccfc5.jpg'
        },
    ],
}
// Экспортируем объект с ключом "db".
module.exports = {
    db
} // и далее в файле app.js прописываем строку: const {} = require('./DB')