# Movie Search Project

## Опис проєкту
Це проєкт для пошуку фільмів в реальному часі, який використовує OMDb API для отримання інформації про фільми, такі як назва, рік випуску, тип та постер.

## Функціонал
- LiveSearch: відображення результатів у реальному часі під час введення тексту в пошукове поле.
- Інтуїтивний інтерфейс для відображення списку фільмів.
- Кросбраузерна адаптація для мобільних пристроїв та великих екранів.

## Вимоги
Перед початком роботи переконайтеся, що у вас встановлено наступні компоненти:
- [Node.js](https://nodejs.org/) (версія 16 або новіша)
- [npm](https://www.npmjs.com/) або [yarn](https://yarnpkg.com/) для управління пакетами
- OMDb API ключ для доступу до API. Ви можете отримати його на [офіційному сайті OMDb](https://www.omdbapi.com/apikey.aspx).

## Установка
1. Клонуйте репозиторій:

    ```bash
    git clone https://github.com/your-username/movie-search-project.git
    cd movie-search-project
    ```

2. Встановіть всі необхідні залежності:

    ```bash
    npm install
    ```

3. Створіть файл `.env` для збереження API ключа:

    ```
    OMDB_API_KEY=your_api_key_here
    ```

## Запуск проєкту

### Режим розробки
Для запуску проєкту в режимі розробки з підтримкою автоматичної компіляції SCSS та оновлення сторінки за допомогою BrowserSync:

```bash
npm run dev
