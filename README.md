# Unblur Image - Welcome Page

Это очищенная Welcome Page для Chrome расширения Unblur Image, созданная на основе экспорта из Tilda.

## Структура файлов

```
Unblur_Image/
├── index.html          # Главная страница
├── css/
│   └── styles.css      # Стили без Tilda зависимостей
├── js/
│   └── script.js       # Минимальный JavaScript
├── images/
│   ├── check-icon.svg              # Иконка галочки
│   ├── browser-extension-step.png  # Скриншот шагов 1-2
│   ├── extension-icon-step.png     # Скриншот шага 3
│   ├── favicon.svg                 # SVG favicon
│   ├── favicon-32x32.png          # PNG favicon 32x32
│   └── favicon-180x180.png        # Apple touch icon
└── README.md           # Этот файл
```

## Что было удалено

- Все Tilda специфичные атрибуты и классы
- Tilda JavaScript библиотеки
- Ненужные tracking скрипты (Yandex.Metrika)
- Tilda CDN зависимости
- Лишние изображения и файлы
- Footer с информацией о 2text

## Особенности

- ✅ Полностью адаптивный дизайн
- ✅ Работает без внешних зависимостей
- ✅ Минимальный и чистый код
- ✅ Быстрая загрузка
- ✅ Поддержка всех размеров экранов
- ✅ Современный CSS без вендорных префиксов
- ✅ Accessibility friendly

## Использование

Просто откройте `index.html` в браузере или разместите папку на веб-сервере.
