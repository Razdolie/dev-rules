---
sidebar_position: 1
sidebar_label: Описание прецедента
title: Описание прецедента
---

## Теория

**Прецеденты** (Use Cases) – это текстовые описания сценариев использования системы, которые помогают понять и формализовать требования. Они создают общую основу для общения между аналитиками, разработчиками и другими участниками проекта.

Основные элементы:

- **Актор (исполнитель)** – субъект, взаимодействующий с системой (пользователь, внешняя система).
- **Сценарий** – последовательность действий или взаимодействий между системой и актором.

**Важно**: Прецеденты описываются с точки зрения пользователя или актора. Детали реализации (например, интерфейс) исключаются. Система рассматривается как "черный ящик", который выполняет заявленные функции.

**Почему важны прецеденты?**

1. **Понимание контекста:**
   Прецедент позволяет ответить на ключевые вопросы:

   * **Для кого?** Кто (какой исполнитель или система) будет использовать этот функционал?

   * **Зачем?** Какая цель достигается с помощью этого функционала?

   * **Что получаем в результате?** Какой полезный результат или изменение создается?

2. **Формализация требований:**
   Прецедент помогает аналитикам и разработчикам прийти к единому пониманию задач.

3. **Основа для проектирования:**
   Выделяет ключевые действия, из которых формируются концептуальные классы и проектируется архитектура системы.

4. **Взаимопонимание:**
   Упрощает взаимодействие между аналитиками, разработчиками и заказчиками, так как представляет требования в доступной и понятной форме.

---

## Шаблон развернутого описания прецедента


|Раздел|Описание|Вопросы для аналитика|
|:---|:---|:---|
|**Название**|Краткое и точное описание цели сценария.|Какую основную функцию выполняет данный прецедент?|
|**Рамки**|Область ответственности системы (например, конкретное приложение или процесс).|Какие части системы затрагивает данный прецедент?|
|**Уровень**|Уровень задачи: пользовательский (высокий) или вспомогательный (низкий).|Это пользовательская задача (достижение цели исполнителя) или вспомогательная функция?|
|**Основной исполнитель**|Кто запускает сценарий.|Кто выполняет действия в рамках данного сценария?|
|**Заинтересованные лица**|Участники, чьи интересы затрагиваются в процессе.|Кто еще, кроме основного исполнителя, заинтересован в реализации этого сценария? Какие цели или задачи решает данный прецедент для заинтересованных сторон? Есть ли дополнительные требования от заинтересованных лиц, которые могут повлиять на сценарий?|
|**Предусловия**|Условия, которые должны быть выполнены перед началом сценария.|Какие условия или состояния системы должны быть выполнены перед запуском сценария? Должны ли быть заранее подготовлены данные или выполнены другие сценарии?|
|**Результат**|Что гарантировано при успешном выполнении сценария.|Какой результат считается успешным выполнением сценария?|
|**Основной сценарий**|Последовательность шагов, описывающая стандартный ход выполнения задачи.|Какие шаги должен выполнить пользователь или система для успешного выполнения сценария? Какие данные необходимы для каждого шага?|
|**Расширения**|Альтернативные успешные или неуспешные сценарии, которые могут отклоняться от основного.|Какие альтернативные сценарии могут возникнуть (например, при ошибке или других условиях)? Какие нестандартные ситуации следует учесть?|
|**Специальные требования**|Дополнительные требования, не связанные с функциональностью (например, производительность, безопасность, форматы данных).|Какие нефункциональные требования необходимо учесть (производительность, безопасность, масштабируемость)?|
|**Список технологий и данных**|Инструменты, методы ввода/вывода, форматы данных, используемые в сценарии.|Какие форматы данных используются на входе и выходе? Есть ли ограничения или требования к технологии реализации?|
|**Частота использования**|Как часто сценарий должен выполняться (влияет на тестирование и приоритизацию).|Как часто предполагается использовать данный функционал? Есть ли сценарии с пиковой нагрузкой? Как они должны быть обработаны?|
|**Открытые вопросы**|Вопросы, которые остаются нерешенными и требуют дополнительного анализа или уточнений.|Какие аспекты или детали прецедента требуют уточнения? Какие внешние зависимости (от других сценариев или систем) могут повлиять на реализацию? Какие возможные риски или проблемы стоит учесть при проектировании и реализации?|

---

## Принципы выделения прецедентов

1. **Определить рамки системы:**

   * Является ли система программным приложением, аппаратно-программным комплексом или всей организацией?

   * Что к ней **не относится**?

2. **Идентифицировать основных исполнителей:**

   * Кто взаимодействует с системой?

   * Какие цели эти исполнители хотят достичь?

3. **Для каждого исполнителя определить задачи:**

   * Какие сценарии помогают исполнителю достигать его целей?

4. **Определить прецеденты:**

   * Какие действия системы удовлетворяют потребности исполнителей?

   * Присвоить имена прецедентам в соответствии с задачами.

---

## Шаблон описания прецедента (Markdown)

```markdown
**Название прецедента:**
(Краткое описание цели сценария)

**Рамки:**  
(Описание границ системы, включая, что в них не входит)

**Уровень:**  
(Пользовательский или вспомогательный)

**Основной исполнитель:**  
(Кто инициирует сценарий)

**Заинтересованные лица и их потребности:**  
- (Роль 1): (Ее интересы/потребности)
- (Роль 2): (Ее интересы/потребности)

**Предусловия:**  
(Условия, которые должны быть выполнены до начала сценария)

**Результат:**  
(Гарантированный результат выполнения сценария)

**Основной успешный сценарий:**  
1. (Первый шаг)
2. (Следующий шаг)
3. (И так далее…)

**Расширения или альтернативные потоки:**  
- (Вариант 1): Описание ситуации и действий
- (Вариант 2): Описание ситуации и действий

**Специальные требования:**  
(Нефункциональные требования, например, скорость работы или защита данных)

**Список технологий и типов данных:**  
(Технологии, методы ввода-вывода, форматы данных)

**Частота использования:**  
(Как часто будет выполняться сценарий, для оценки важности)

**Открытые вопросы:**  
- (Вопрос 1)
- (Вопрос 2)
```

---

## Советы для разработчиков:

1. При переводе ТЗ в прецеденты сосредоточьтесь на **действиях пользователей и обязанностях системы**.
2. Если сценарий кажется неполным, добавьте открытые вопросы для уточнения.
3. Убедитесь, что каждый шаг сценария приводит к проверяемому результату.