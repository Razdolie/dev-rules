---
sidebar_position: 4
sidebar_label: Подписки на события
title: Подписки на события
---
Для общих случаев использовать функционал **БПР [“Подписки на события”](../../psl/subscription.md).**

Для исключений методы должны быть расположены в модуле **рздПодпискиНаСобытия.**

Основная логика реализации метода не должна быть в модуле **рздПодпискиНаСобытия,** а должна быть переадресация на метод общего модуля, который предназначен для объекта (об этом также описано в разделе **[“Подписки на события”](../../psl/subscription.md)**).

Новый объект должен быть размещен в служебную подсистему согласно регламенту “[Подсистемы](subsystem.md)“.