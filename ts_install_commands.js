//? 1. npm install -g typescript ts-node
//!Чтобы запускать в VSCode - ts- файлы
//! с помощью команды ts-node имя_файла.ts внутри нужной папки

//? 2. npm install -g parcel-bundler
//! Чтобы запускать ts-файлы в браузере

//? 3. В проекте(главной папке), создается файл index.html (внутри которого внутри мы вставляем в тэг script файл index.ts), создается папка src - внутрь которой ложатся все файлы ts и главный файл index.ts
//! Затем на главной папке мы запускаем команду : parcel index.html

//? 4. Устанавливаем пакет faker (npm install faker) - https://www.npmjs.com/package/faker/v/5.5.3     -  API - который генерирует фейковые данные

//? 5. Если какая-то библиотека или файл ts не может быть импортировани из-за ошибки (невозможности определения типов), нужно установать в проест @types/имя_библиотеки,
// https://www.npmjs.com/package/@types/faker/v/5.5.9
// npm install --save @types/faker

//--------------------------------------------------------//
//? 6. Работа с google Maps ___________________
// 1. https://console.cloud.google.com/apis/dashboard
// 2. Create Project
// 3. Добавляем API-сервис в наш проект: menu->APIs & Services->Library
// 4. В поиске пишем : maps api  --из списка выбираем (Maps JavaScript API)
// 5. Затем нужно создать ключ: menu->APIs & Services->Credentials
// 6. Выбираем функцию : +Create Credentials  и выбираем API key : AIzaSyCzvJ1weSzZHB-YTqKwogdefTc_neUx2-U
// 7. Так же нужно в файл index.html перед всеми скриптами добавить :
{
  /* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzvJ1weSzZHB-YTqKwogdefTc_neUx2-U"></script>
    <script src="./src/index.ts"></script> */
}
// 8. Т.к. мы внедрили googlemaps в наш проект не используя npm, нужно добавить определение топов : https://www.npmjs.com/package/@types/googlemaps
// npm i @types/googlemaps
//! или
//  https://www.npmjs.com/package/@googlemaps/types
//  npm i @googlemaps/types
//--------------------------------------------------------//

//!commands
//?1. tsc index.ts     -  переводит файл ts в js
//?2. tsc --init     - чтобы создать файл настроек TypeScript
/* в файле tsconfig.json - находим : 
a) "rootDir": "./src",  - папка из которой нужно будет брать ts-файлы
b) "outDir": "./build", - папка в которую мы будем помещать скомпелированные файлы
c) Затем запускаем команду   tsc
c) Затем запускаем команду   tsc -w   - чтобы наблюдать за изменениями
*/
//?3. чтобы создать файл package.json - настройка для js-компиляции
//   npm init -y
//   npm install nodemon concurrently
/* эти модули нужны чтобы перезапускать код когда он перекомпелирован  */
/* Вномим оизменение в package.json : {
  "scripts": {
    "start:build": "tsc -w",
    "start:run":"nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
}
*/
