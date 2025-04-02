This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
на задание ушло 5-6 часов

yarn или nmp install 
для установки зависимостей

возможно придётся доустановить библиотеку для дизайна
npm install @mui/material @emotion/react @emotion/styled

ссылки на фото брать с доменов
'www.google.com',
'places.moscow',
'wikiway.com',
'media.istockphoto.com',
'nationalparks-15bc7.kxcdn.com',

# Система планирования посещения достопримечательностей

## Описание

Данный проект представляет собой веб-приложение для планирования посещения достопримечательностей. 
Приложение позволяет пользователям просматривать, добавлять, редактировать и удалять достопримечательности, а также управлять их статусом (в планах, осмотрена).

## Функциональные возможности

- **Таблица достопримечательностей**: Отображение списка достопримечательностей с возможностью фильтрации и сортировки.
- **Счетчик достопримечательностей**: Отображение количества достопримечательностей в списке.
- **Режим администратора**: Возможность просмотра, редактирования и удаления достопримечательностей, а также создания новых.
- **Данные о достопримечательностях**:
    - Уникальный идентификатор
    - Название
    - Описание
    - Дата и время добавления
    - Рейтинг (от 1 до 5)
    - Фото
    - Местоположение
    - Координаты (широта и долгота)
    - Ссылка на Google Maps или Яндекс.Карты, формируемая автоматически
    - Статус (в планах, осмотрена)
- **Поиск**: Возможность поиска по таблице достопримечательностей.
- **Скрытие осмотренных**: Возможность скрыть достопримечательности со статусом "осмотрена".

## Технологии

- **Frontend**: TypeScript, React / Next.js, Material UI ( с Gravity UI возникли сложности, пыталась исправить )
- **Дополнительные библиотеки**: Redux 

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/seyberkhegen/yeti-crab.git


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

