# ApolloExpress
 
## Введение
Это небольшое приложение на nodejs которое использует Express GraphQL, TypeScript с небольшой простой схемой graphQL
Данные используются с помощью асинхронного чтения файла в формате JSON.
А также используются промисы в разных вариантах: с async await  синтаксисом и без него (просто использование методов then и catch)

## Предварительные требования
Прежде чем приступить к работе, у вас должен быть установлен Node
Apollo Server — это поддерживаемый сообществом сервер GraphQL с открытым исходным кодом. Он работает со многими платформами 
HTTP-серверов Node.js или может работать самостоятельно со встроенным сервером Express. Сервер Apollo работает с любой схемой GraphQL, созданной с помощью GraphQL.js , или определяет определения типов схемы с помощью языка определения схемы (SDL).
Для приложений, которым требуется существующая веб-инфраструктура, например интеграция с веб-платформами (такими как express, koa, hapi, и т. д.) необходимо использовать соответствующий пакет интеграции Apollo Server.
Какой пакет можно использовать указано [здесь]( https://www.apollographql.com/docs/apollo-server/integrations/middleware)
В приложении используется apollo-server-express — поскольку это пакет Apollo Server для  самого популярного веб-фреймворка Node.js Express. Это позволит нам подключить сервер GraphQL к существующему серверу Express.
Использование Express имеет несколько преимуществ, одно из которых — возможность одновременного обслуживания REST и GraphQL. Кроме того, обслуживание сервера GraphQL в Express позволяет использовать промежуточное ПО для решения общих проблем, таких как безопасность, аутентификация и другие.
Пример использования apollo-server-express есть в документации, но не предоставляет готового решения для начала работы. 
Apollo Server Express должен запускаться асинхронно, что вызывает некоторые проблемы.


## Запуск
- *npm run prestart:prod*
- *npm run start*
- Или после запуска контейнера можно запустить в режиме разработки выполнив npm run dev

## Использование 
- С помощью express-graphql мы можем просто отправить HTTP-запрос POST на конечную точку, на которой вы установили свой сервер GraphQL, передав запрос GraphQL в качестве query поля полезной нагрузки JSON.
- Cервер  GraphQL смонтирован по адресу http://localhost:4000/graphql , как в примере кода для запуска сервера Express GraphQL, отправить запрос для получения данных мы можем из командной строки с помощью curl.

curl -s -X POST -H "Content-type: application/json" http://localhost:4000/graphql \
--data '{ "query": "{ hello,totalPosts,getCurrentDate, getCurrentDateSleepDate{ time, date }}" }'

По скольку в приложении используется и Express данные можно получить перейдя http://localhost:4000/





