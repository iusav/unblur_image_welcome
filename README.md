# Unblur Image

## Структура файлов

```
unblur_image_welcome/
├── index.html              # Главная страница (редирект)
├── css/
│   └── styles.css          # Общие стили
├── assets/
│   ├── browser-extension-step.png    # Скриншот шагов 1-2
│   ├── extension-icon-step.png       # Скриншот шага 3
│   ├── favicon_browser-48x48.svg     # SVG favicon для браузера
│   ├── favicon.svg                   # SVG favicon
│   ├── favicon-32x32.png             # PNG favicon 32x32
│   └── favicon-180x180.png           # Apple touch icon
├── welcome/
│   ├── index.html          # Welcome страница
│   └── js/
│       └── script.js       # JavaScript для welcome страницы
├── goodbye/
│   └── index.html          # Goodbye страница (при удалении расширения)
├── archive/
│   └── V1/                 # Архив первой версии
└── README.md               # Этот файл
```

## Использование

Просто откройте `index.html` в браузере или разместите папку на веб-сервере.

## Локальная разработка (Python)

Чтобы корректно подгружались стили, картинки и редирект с корня на `welcome/`, раздавайте проект через встроенный HTTP-сервер из **корня репозитория** (`unblur_image_welcome`).

1. В терминале перейдите в корень проекта:

   ```powershell
   cd D:\Programming\unblur_image_welcome
   ```

   (Подставьте свой путь к клону репозитория.)

2. Запустите сервер (Python 3):

   ```powershell
   python -m http.server 8000
   ```

   Если `python` не срабатывает, попробуйте: `py -3 -m http.server 8000`.

3. В браузере откройте:

   - `http://127.0.0.1:8000/` — с редиректом на welcome;
   - или сразу `http://127.0.0.1:8000/welcome/`.

Остановка сервера: `Ctrl+C` в том же терминале.
