---
sidebar_position: 2
sidebar_label: Служебные настройки
title: Служебные настройки
---

Для хранения различных настроек в ИБ есть подсистема **СлужебныеНастройки.** Ее функционал также помогает избегать конструкций в коде: **НайтиПоКоду** и **НайтиПоНаименованию**. Состав подсистемы:

Общие модули:

* рздСлужебныеНастройки (основной программный интерфейс подсистемы)

* рздСлужебныеНастройкиПереопределяемый (для создания настроек)

* рздСлужебныеНастройкиПовтИсп

И основной справочник **рздСлужебныеНастройки**.

Настройка может быть следующего типа (Перечисления.рздТипыСлужебныхНастроек):

* Одиночная

* Множественная (массив)

* Составная (структура, соответствие, таблица значений)

Все настройки создаются программно в модуле **рздСлужебныеНастройкиПереопределяемый**. Это необходимо для корректной работы системы в разных базах (разработки, тестирование и т.д) и отмены необходимости создавать что-то руками. В данном модуле допускается использование конструкций **НайтиПоНаименованию** и **НайтиПоКоду**.

После создание настройки необходимо в модуле **рздОбновлениеИнформационнойБазы (***[подробнее в регламенте по началу разработки](../regulations/begin.md)*) в методе **ПриДобавленииПодсистемы** увеличить номер сборки (последние цифры) на  +1. Это необходимо для запуска обработчиков обновления, которые автоматический создадут настройки.

```
Описание.Версия = "3.1.27.95";
```

Для получения значения настроек есть два метода:

```
// Значение настройки
ВидОтпускаОсновной = рздСлужебныеНастройки.ЗначениеСлужебнойНастройки("ВидОтпускаОсновной");

// Значение элемента настройки (актуально только для составного параметра)
ЛогинYandex = рздСлужебныеНастройки.ЗначениеЭлементаСлужебнойНастройки("ИнтеграцияYandex", "Логин");
```

Примеры создания разных настроек:

```
// Одиночная
Описание = рздСлужебныеНастройки.ОписаниеНастройки();
Описание.Наименование  = "Вид отпуска основной";
Описание.Идентификатор = "205a570f-20de-4c23-ac97-85806767b3bf";
Описание.Имя           = "ВидОтпускаОсновной";
Описание.Параметр      = Справочники.ВидыОтпусков.НайтиПоНаименованию("Основной");

рздСлужебныеНастройки.ДобавитьОписаниеНастройки(Описания, Описание);

// Множественная
Механизмы = Новый Массив;
Механизмы.Добавить("АдресныйСклад");
Механизмы.Добавить("Обеспечение");

Описание = рздСлужебныеНастройки.ОписаниеНастройки();
Описание.Наименование          = "Отключаемые механизмы";
Описание.Идентификатор         = "205a570f-20de-2246-4cc8-85806767b3bf";
Описание.Имя                   = "ОтключаемыеМеханизмы";
Описание.ТипНастройки          = рздСлужебныеНастройки.ТипМножественная();
Описание.Параметры             = Механизмы;

рздСлужебныеНастройки.ДобавитьОписаниеНастройки(Описания, Описание);

// Составная
ЗначенияНастроек = Новый Структура;
ЗначенияНастроек.Вставить("Адрес", "");
ЗначенияНастроек.Вставить("Логин", "");
ЗначенияНастроек.Вставить("Парль", "");

Описание = рздСлужебныеНастройки.ОписаниеНастройки();
Описание.Наименование      = "Интеграция с Yandex";
Описание.Идентификатор     = "01090e3a-2246-4cc8-baed-8550cedbeee3";
Описание.Имя               = "ИнтеграцияYandex";
Описание.ТипНастройки      = рздСлужебныеНастройки.ТипСоставная();
Описание.Хранилище         = Новый ХранилищеЗначения(ЗначенияНастроек, Новый СжатиеДанных());

рздСлужебныеНастройки.ДобавитьОписаниеНастройки(Описания, Описание);
```

Идентификатор настройки можно сгенерировать любым удобном способом, использую код:

```
Сообщить(Новый УникальныйИдентификатор);
```