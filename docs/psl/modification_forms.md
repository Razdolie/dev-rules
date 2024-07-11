---
sidebar_position: 2
sidebar_label: Программная доработка форм
title: Программная доработка форм
---

Все доработки типовых форм осуществляются программным способом. Для этого в БПР есть общий модуль **рздУправлениеФормой** и подсистема **МодификацияКонфигурации,** которая состоит из следующих модулей:

* рздМодификацияКонфигурацииСервер

* рздМодификацияКонфигурацииКлиент

* рздМодификацияКонфигурацииКлиентСерверПовтИсп

Если в конфигурации есть общий модуль **СобытияФорм** или **МодификацияКонфигурацииПереопределяемый** тогда в нужном событие указывается переадресация на модуль **БПР**, если данных модулей нет, то переадресация указывается в самой форме:

`рздМодификацияКонфигурацииСервер.ПриСозданииНаСервере(ЭтотОбъект, Отказ, СтандартнаяОбработка);`

Регистрация события осуществляется  в модуле **рздМодификацияКонфигурацииКлиентСерверПовтИсп** в методе **:**

```
ДобавитьОбработчикСобытия(События,
	"ПриЧтенииНаСервере",
	"Документ.РеализацияТоваровУслуг.Форма.ФормаДокумента",
	"рздМодификацияКонфигурацииСервер.РеализацияТоваровУслуг_ФормаДокумента_ПриЧтениинаСервере");
```

Имя метода задается по шаблону: ИмяОбъекта_ИмяФормы_ИмяСобытия.

В методе должна быть проверка, что форма программно уже была обработана. Также хорошей практикой является разделение на отдельные методы по созданию, заполнению реквизитов и созданию элементов формы.

```
Процедура РеализацияТоваровУслуг_ФормаДокумента_ПриЧтениинаСервере(Форма, ТекущийОбъект) Экспорт
	
	Если рздУправлениеФормой.ФормаПодготовлена(Форма) Тогда
		Возврат;
	КонецЕсли;
	
	РеализацияТоваровУслуг_ФормаДокумента_СоздатьРеквизиты(Форма);
	РеализацияТоваровУслуг_ФормаДокумента_ЗаполнитьРеквизиты(Форма);
	РеализацияТоваровУслуг_ФормаДокумента_СоздатьЭлементыФормы(Форма);
	
КонецПроцедуры
```