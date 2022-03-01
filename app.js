const express = require('express') // вызываем функцию для создания сервера (Импортируем все зависимости которые необходимы для его работы)
// Подключаем пакет path
const path = require('path') // Утилита path позволяет формировать пути к файлам согласно вашей операционной системе
// 3000 это свободный порт через который будет работать наш сервер (Обычно переменные пишутся в начале кода)
// Импортируем данные из файл "DB.js"
const { db } = require('./DB') // Деструкторизация
const PORT = 3000  // вынесем номер порта в отдельную переменную
const server = express() // создаем экземпляр нашего сервера (Создаем сервер) p.s. Всегда должна быть вверху
// Настройка движка рендеринга
server.set('view engine', 'hbs');
// Настройка пути где находятся файлы с шаблонами hbs(обязательно нужно использовать пакет path)
server.set('views', path.join(__dirname, 'src', 'views'))
// эта строчка научила наш сервер принимать данные из пользовательской формы
// она должна быть строго раньше, чем описания слушетеля, который нацелен на прием данных
server.use(express.urlencoded({ extended: true }))

server.get('/', (request, res) => {
    res.render('main', {listOfContent: db.images}) // файл шаблон main.hbs - отвечает за рендер страници
    // listOfContent - имя передаваемого ключа, db.images - значение, а также имя массива в БД
})
server.post('/images', (req, res) => {
    const dataFromForm = req.body
    //console.log({ dataFromForm })
    // Добавление и отображение данных на нашем сайте:
    db.images.push(dataFromForm)
    res.redirect('/') // укажим главную страницу
})
// Проверка того что наш сервер запущен:
server.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}`)
})
