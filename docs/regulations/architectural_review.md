---
sidebar_position: 12
sidebar_label: Архитектурное ревью
title: Архитектурное ревью
---

## Введение

**Архитектурное ревью** проводится при разработке программного обеспечения. Оно позволяет выявить потенциальные проблемы и недостатки, выработать более оптимальные пути разработки, подобрать правильную архитектуру решения, повысить качество решения.

**Ошибка, которая может быть обнаружена на этапе нашего обзора архитектуры в исправлении почти бесплатна** и является более дорогой если находится на этапе код-ревью (проверки кода).

Цель повысить качество разработки, когда в команде много специалистов среднего уровня, начинающих.

С помощью архитект-ревью можно повысить культуру разработки, т.е. сначала проектировать, а потом начинать разработку. Иными словами включать голову. Т.е. **(мы переходим от принципа «я кодирую» к подходу «я понимаю что я кодирую».)**

Самый положительный эффект с точки управления - это влияние на сроки разработки, повышение предсказуемости сроков завершения.

## Какие проблемы решает АРХИТЕКТ-РЕВЬЮ?

Архитект-ревью отличается от код-ревью определенными моментами. Давайте определим отличия и назначения этого ревью:

1. Оно проводится до начала разработки и предназначено для устранения возможных проблем при начале разработки, до фактического начала решения задачи (до кодирования).

2. Позволяет избежать создания дублирующегося функционала. Это поможет уменьшить количество грязного кода, вы будете меньше проводить рефакторинг.

3. Найти подходящий механизм в конфигурации для реализации задачи.

4. Определиться с архитектурой нового решения.

5. Позволяет сосредоточиться на разработке сверху вниз, а не наоборот.

6. Может проводиться в процессе разработки, для исправления выявленных ошибок.

Итак, код-ревью по факту проверяет результат созданного кода. А архитект-ревью нужно для выбора правильной архитектуры, правильного решения задачи до начала фактической разработки.

## Какую пользу мы получаем?

В результате его проведения Вы сможете получить оценку объема требуемых работ. Для большого проекта Вы сможете сразу создать набор задач, оценить сложность решения, получить примерное время решения.

Вы снижаете риски получения некачественного или не работающего кода, потери времени, сил, средств, репутации, вероятности появления фейлов при работе решения. Наконец, улучшиться культура разработки.

И как было сказано выше во вступлении - стоимость исправления ошибок до реализации практически бесплатна, за исключением накладных расходов на сам процесс обзора.

Используя архитектурное-ревью мы повышаем управляемость разработкой - получаем более адекватную оценку сроков разработки и повышаем предсказуемость сроков завершения.

## Кто проводит, выполняет эту процедуру?

### Подход через исполнителя и защиту им его решения

Задача выдается ответственному разработчику. Разработчик формулирует плюсы и минусы решения. Определяет механизмы, которые он будет использовать, что и как.

Далее, когда обзор выполнен, то он защищает свое решение  перед архитектором/ведущим разработчиком.

На защите задаются вопросы к слабым сторонам решения, предлагаются другие альтернативные варианты решения.

Этот вариант очень здорово подходит для контроля роста и адаптации новых сотрудников, начинающих.

## Описание нашего процесса

1. Ведущим разработчиком назначается разработчик на статусе  “**Формирование ТР**“.

2. Разработчик читает ТЗ аналитика, обсуждает с ним задачу и задает уточняющие вопросы.

3. Разработчик готовит техническое описание своей реализации на Wiki.

4. Разработчик переводит задачу на ведущего-разработчика в статусе “**Арх-ревью“**.

5. Если нужно доработать **ТР** задача возвращается ведущим-разработчиком на статус “**Формирование ТР**“ разработчику. Если **ТР** принято задача двигается дальше на статус “**Оценка**“ ведущим-разработчиком.

## Материалы

1. Использован текст из статьи “[Архитектурное ревью. Процесс разработки](https://infostart.ru/pm/1960257/)”

2. [Шаблон технического решения](./technical_solutions/pattern.md)

3. [Примеры технических решений](../examples_technical_solutions/)

<details>
  <summary>Чек лист для оценки решения</summary>

| Раздел  | Вопрос | 
| ------------- | ------------- |
|Обоснование необходимости изменений| Требуется ли доработка конфигурации?|
|Обоснование необходимости изменений|Требуется ли уточнение требований, нужны ли дополнительные вопросы?|
|Обоснование необходимости изменений|Полностью ли решение соответствует требованиям задачи?|
|Обоснование необходимости изменений|Есть ли риски неполного выполнения требований?|
|Оценка объема работ|Требуется ли добавление новых объектов (справочников, регистров, документов)?|
|Оценка объема работ|Требуется ли изменение существующих объектов (добавление реквизитов, форм, состава типов)?|
|Оценка объема работ|Разрабатывается ли новая подсистема или механизм?|
|Оценка объема работ|Вносятся ли исправления в существующий механизм?|
|Совместимость и обновление|Какие будут проблемы с обновлением типового решения?|
|Качество решения|Приведет ли данное решение к проблемам снижения производительности?|
|Качество решения|Соответствует ли решение принятым стандартам разработки (наименования, комментарии, структура кода и т.д.)?|
|Качество решения|Соблюдаются ли правила разработки (использование общих модулей, разделение ролей и т.д.)?|
|Альтернативные варианты реализации|Можно ли механизм заполнения, расчета, рассылки и т.п. вынести в фоновую обработку?|
|Альтернативные варианты реализации|Можно ли реализовать отдельной обработкой?|
|Тестирование|Требуется ли разработка тестов для проверки решения?|
|Тестирование|Какие виды тестирования необходимы (модульное, интеграционное, нагрузочное и т.д.)?|
|Безопасность|Есть ли риски нарушения безопасности данных или доступа?|
|Безопасность|Требуются ли дополнительные меры по обеспечению безопасности?|
|Интеграция|Требуется ли интеграция с другими системами или сервисами?|
|Интеграция|Какие протоколы и форматы данных необходимо использовать?|
|Документация|Требуется ли разработка дополнительной документации по решению?|
|Документация|Какие разделы документации необходимо подготовить?|
|Развертывание и миграция|Каков план развертывания решения в промышленную эксплуатацию?|
|Развертывание и миграция|Требуется ли миграция или конвертация данных?|
|Сопровождение и поддержка|Как будет организовано сопровождение и поддержка решения?|
|Сопровождение и поддержка|Требуются ли дополнительные ресурсы для поддержки?|
|Оценка ресурсов|Оценка времени решения|

</details>
