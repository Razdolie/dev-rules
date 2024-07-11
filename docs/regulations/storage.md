---
sidebar_position: 2
sidebar_label: Хранилище
title: Хранилище
---
## Комментарий при помещение

При помещении доработок в хранилище **обязательно** оставлять комментарий. Формат комментария:

```
НомерЗадачи
ОписаниеЗадачи
```

Если помещаются доработки по задаче целиком - тогда в описании достаточно указать наименование ТЗ, если помещается часть доработок - нужно кратко описать изменения:

Комментарий при помещении всех доработок по задаче:

```
ФР-КУ-46
Учет ветеранов
```

Комментарий при помещении части доработок по задаче:

```
ФР-КУ-46
Новый реквизит рздВетеран
```

## Создание пользователей

Имя пользователя в хранилище должно соответствовать имени базы. Например,  если подключение к базе **Srvr="srv";Ref="ural_zup_ochakovskiy";** то имя пользователя в хранилище будет **ural_zup_ochakovskiy.**

Имя базы должно соответствовать шаблону **Проект_Конфигурация_Фамилия.**