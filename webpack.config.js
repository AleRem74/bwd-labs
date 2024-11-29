const path = require('path'); // Импорт модуля "path"
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   stats: {
       children: true
   },
   entry: './src/index.js', // Точка входа
   output: {
       filename: 'bundle.js', // Имя выходного файла
       path: path.resolve(__dirname, 'dist'), // Путь для выходного файла
       clean: true // Очищать выходную папку перед каждой сборкой
   },
   module: {
       rules: [
           {
               test: /\.css$/, // Регулярное выражение для .css файлов
               use: ['style-loader', 'css-loader'], // Загрузчики для CSS
           },
       ],
   },
   plugins: [
       new HtmlWebpackPlugin({
           template: './src/main.html', // Шаблон HTML
           inject: true,
           
           filename: 'main.html', // Имя для выходного файла
       }),
       new HtmlWebpackPlugin({
           template: './src/projects.html', // Шаблон для projects.html
           inject: true,
           
           filename: 'projects.html', // Имя для выходного файла
       }),
       new HtmlWebpackPlugin({
           template: './src/about.html', // Шаблон для about.html
           inject: true,
           
           filename: 'about.html', // Имя для выходного файла
       }),
       new HtmlWebpackPlugin({
           template: './src/tasks.html', // Шаблон для tasks.html
           inject: true,
           
           filename: 'tasks.html', // Имя для выходного файла
       }),
   ],
   devServer: {
       static: {
           directory: path.join(__dirname, 'dist'), // Каталог для статики
       },
       open: true, // Автоматически открывать браузер
   },
   mode: 'development', // Режим сборки
};
