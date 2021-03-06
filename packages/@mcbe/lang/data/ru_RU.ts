
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
    id: "ru_RU" as LangId,
    commands:{
        "ability_description": "Задает способность игрока.",
        "ability_noability": "Способность под названием «%1$s» отсутствует",
        "ability_granted": "Вам предоставлена способность «%1$s»",
        "ability_revoked": "Вы были лишены способности «%1$s»",
        "ability_success": "Способность обновлена",
        "achievement_alreadyHave": "У игрока %1$s уже есть достижение «%2$s»",
        "achievement_description": "Игрок получает достижение или лишается его.",
        "achievement_dontHave": "У игрока %1$s нет достижения «%2$s»",
        "achievement_give_success_all": "Игроку %1$s успешно присвоены все достижения",
        "achievement_give_success_one": "Игроку %1$s успешно присвоен показатель «%2$s»",
        "achievement_statTooLow": "У игрока %1$s нет показателя «%2$s»",
        "achievement_take_success_all": "Все достижения игрока %1$s успешно удалены",
        "achievement_take_success_one": "У игрока %2$s успешно удален показатель «%1$s»",
        "achievement_unknownAchievement": "Неизвестное достижение или показатель «%1$s»",
        "agent_attack_success": "Агент успешно атаковал",
        "agent_attack_failed": "Агент не атаковал",
        "agent_collect_success": "Агент собран успешно",
        "agent_collect_failed": "Агент не собран",
        "agent_createagent_success": "Создан агент",
        "agent_createagent_failed": "Агент не создан",
        "agent_destroy_success": "Агент уничтожил блок",
        "agent_destroy_failed": "Агент ничего не уничтожил",
        "agent_detect_success": "Агент обнаружил",
        "agent_detect_failed": "Агент не обнаружил",
        "agent_detectredstone_success": "Агент выполнил действие detectredstone",
        "agent_detectredstone_failed": "Агент не выполнил действие detectredstone",
        "agent_drop_success": "Агент выложил успешно",
        "agent_drop_failed": "Агент не выложил",
        "agent_dropall_success": "Агент выполнил действие dropall",
        "agent_dropall_failed": "Агент не выполнил действие dropall",
        "agent_getitemcount_success": "Агент выполнил действие getitemcount",
        "agent_getitemcount_failed": "Агент не выполнил действие getitemcount",
        "agent_getitemspace_success": "Агент выполнил действие getitemspace",
        "agent_getitemspace_failed": "Агент не выполнил действие getitemspace",
        "agent_getitemdetail_success": "Агент выполнил действие getitemdetail",
        "agent_getitemdetail_failed": "Агент не выполнил действие getitemdetail",
        "agent_getposition_success": "Агент выполнил действие getposition",
        "agent_getposition_failed": "Агент не выполнил действие getposition",
        "agent_inspect_success": "Агент выполнил проверку",
        "agent_inspect_failed": "Агент не выполнил проверку",
        "agent_inspectdata_success": "Агент успешно проверил данные",
        "agent_inspectdata_failed": "Агенту не удалось проверить данные",
        "agent_move_success": "Агент выполнил движение",
        "agent_move_failed": "Агент не выполнил движение",
        "agent_outofrange": "Не удалось отдать команду: агент вне досягаемости",
        "agent_place_success": "Агент разместил успешно",
        "agent_place_failed": "Агент не разместил",
        "agent_setitem_success": "Агент задал предмет",
        "agent_setitem_failed": "Агент не задал предмет",
        "agent_turn_success": "Поворот агента выполнен успешно",
        "agent_turn_failed": "Не удалось повернуть агента",
        "agent_till_success": "Агент вспахал успешно",
        "agent_till_failed": "Агент не вспахал",
        "agent_tpagent_description": "Перенести своего агента.",
        "agent_tpagent_success": "Агент перенесен",
        "agent_tpagent_failed": "Агент не перенесен",
        "agent_transfer_success": "Агент перемещен успешно",
        "agent_transfer_failed": "Агент не перемещен",
        "always_day": "Цикл «день — ночь»: %1$s",
        "always_day_locked": "Цикл «день — ночь» заблокирован",
        "always_day_unlocked": "Цикл «день — ночь» разблокирован",
        "ban_description": "Добавляет игрока в список заблокированных.",
        "autocomplete_a": "все игроки",
        "autocomplete_c": "мой Agent",
        "autocomplete_e": "все сущности",
        "autocomplete_p": "ближайший игрок",
        "autocomplete_r": "случайный игрок",
        "autocomplete_s": "вы",
        "autocomplete_v": "все Agent",
        "ban_failed": "Не удалось заблокировать игрока %1$s",
        "ban_success": "Игрок %1$s заблокирован",
        "banip_description": "Добавляет IP-адрес в список заблокированных.",
        "banip_invalid": "Введен недопустимый IP-адрес или игрок не в сети",
        "banip_success": "IP-адрес %1$s заблокирован",
        "banip_success_players": "Заблокирован IP-адрес %1$s, принадлежащий игроку %2$s",
        "banlist_ips": "Заблокированные IP-адреса (всего %1$d):",
        "banlist_players": "Заблокированные игроки (всего %1$d):",
        "blockdata_description": "Изменяет тег данных блока.",
        "blockdata_placeFailed": "Вы не можете размещать здесь блоки",
        "blockdata_destroyFailed": "Вы не можете копать здесь грунт",
        "blockdata_failed": "Тег данных не изменился: %1$s",
        "blockdata_notValid": "Целевой блок не является блоком-носителем данных",
        "blockdata_outOfWorld": "Невозможно изменить блок за пределами мира",
        "blockdata_success": "Данные блока изменены на: %1$s",
        "blockdata_tagError": "Сбой анализа тега данных: %1$s",
        "bossbar_add_success": "Создана пользовательская босс-панель [%1$s]",
        "bossbar_add_failure_invalid": "Недействительный идентификатор босс-панели. Идентификаторы должны иметь формат «пространство_имен:идентификатор» (по умолчанию используется пространство имен minecraft).",
        "bossbar_add_failure_exists": "Босс-панель с идентификатором «%1$s» уже существует",
        "bossbar_description": "Создание или изменение полосок здоровья.",
        "bossbar_get_max": "Пользовательская босс-панель [%1$s] имеет максимальное значение %2$d",
        "bossbar_get_players": "Количество игроков %2$s для пользовательской босс-панели [%1$s], находящихся сейчас в сети: %3$s",
        "bossbar_get_players_none": "Игроки в сети для пользовательской босс-панели [%1$s] отсутствуют",
        "bossbar_get_players_one": "В данный момент для пользовательской босс-панели [%1$s] имеется в сети 1 игрок: %2$s",
        "bossbar_get_value": "Пользовательская босс-панель [%1$s] имеет значение %2$d",
        "bossbar_get_visible_true": "Пользовательская босс-панель [%1$s] в данный момент отображается",
        "bossbar_get_visible_false": "Пользовательская босс-панель [%1$s] в данный момент скрыта",
        "bossbar_list": "Активные пользовательские босс-панели %1$s: %2$s",
        "bossbar_list_none": "Активные пользовательские босс-панели отсутствуют",
        "bossbar_list_one": "Активна 1 пользовательская босс-панель: %1$s",
        "bossbar_notFound": "Босс-панели с идентификатором «%1$s» не существует",
        "bossbar_remove": "Пользовательская босс-панель [%1$s] удалена",
        "change_setting_description": "Меняет параметр выделенного сервера на время работы.",
        "change_setting_success": "Параметр «%1$s» изменен",
        "chunkinfo_compiled": "Фрагмент скомпилирован.",
        "chunkinfo_data": "Первые 64 вершины: %1$s",
        "chunkinfo_empty": "Фрагмент пуст.",
        "chunkinfo_hasLayers": "В фрагменте есть слои: %1$s",
        "chunkinfo_hasNoRenderableLayers": "В фрагменте нет отрисовываемых слоев.",
        "chunkinfo_isEmpty": "В фрагменте есть пустые слои: %1$s",
        "chunkinfo_location": "Расположение фрагмента: (%1$d, %2$d, %3$d)",
        "chunkinfo_noChunk": "Фрагмент не обнаружен в точке %1$d, %2$d, %3$d",
        "chunkinfo_notCompiled": "Фрагмент не скомпилирован.",
        "chunkinfo_notEmpty": "Фрагмент не пуст.",
        "chunkinfo_vertices": "Буфер слоя %1$s содержит несколько вершин (%2$d)",
        "classroommode_description": "Попытаться выполнить запуск и подключение к Classroom Mode.",
        "classroommode_success": "Попытка запуска Classroom Mode...",
        "clear_description": "Убирает предметы из инвентаря игрока.",
        "clear_failure": "Не удалось очистить инвентарь игрока %1$s",
        "clear_failure_no_items": "Не удалось очистить инвентарь игрока %1$s, нет предметов для удаления",
        "clear_success": "Инвентарь игрока %1$s очищен, удалено предметов: %2$d",
        "clear_tagError": "Сбой анализа тега данных: %1$s",
        "clear_testing": "%1$s: условиям соответствует несколько предметов (%2$d)",
        "clearfixedinv_description": "Удаляет все выделенные под инвентарь ячейки.",
        "clearfixedinv_success": "Выделенный инвентарь очищен",
        "clone_description": "Клонирует блоки из одной области в другую.",
        "clone_failed": "Блоки не клонированы",
        "clone_filtered_error": "При использовании фильтров необходимо указать блок фильтров",
        "clone_noOverlap": "Исходный и целевой объекты не могут перекрываться",
        "clone_outOfWorld": "Доступ к блокам за пределами мира невозможен",
        "clone_success": "Клонировано блоков: %1$d",
        "clone_tooManyBlocks": "В заданной области слишком много блоков (%1$d > %2$d)",
        "closechat_description": "Закрывает окно чата локального игрока, если оно открыто.",
        "closechat_success": "Чат закрыт",
        "closechat_failure": "Чат не был открыт",
        "closewebsocket_description": "Закрывает WebSocket-подключение, если оно есть.",
        "code_description": "Запускает Code Builder.",
        "code_success": "Запущен Code Builder.",
        "compare_failed": "Исходный и целевой объекты не идентичны",
        "compare_outOfWorld": "Доступ к блокам за пределами мира невозможен",
        "compare_success": "Выполнено сравнение нескольких блоков: %1$d",
        "compare_tooManyBlocks": "В заданной области слишком много блоков (%1$d > %2$d)",
        "corruptworld_description": "Повреждает мир, загруженный на сервер.",
        "corruptworld_success": "Мир успешно поврежден.",
        "daylock_description": "Блокирует и разблокирует смену дня и ночи.",
        "debug_description": "Начинает или прекращает сеанс отладки.",
        "debug_notStarted": "Нельзя остановить профилирование, так как оно не запущено!",
        "debug_start": "Начало профилирования отладки",
        "debug_stop": "Остановка профилирования отладки спустя %.2f с (тактов: %1$d)",
        "defaultgamemode_description": "Задает режим игры по умолчанию.",
        "defaultgamemode_success": "Режим игры по умолчанию в этом мире теперь «%1$s»",
        "deop_description": "Лишает игрока статуса оператора.",
        "deop_failed": "Не удалось отозвать права оператора (слишком высокий уровень разрешений): %s",
        "deop_success": "Отозваны права оператора: %s",
        "deop_message": "Вы лишены прав модератора",
        "difficulty_description": "Задает уровень сложности.",
        "difficulty_usage": "/difficulty <new difficulty>",
        "difficulty_success": "Сложность игры изменена на «%1$s»",
        "downfall_success": "Погода успешно изменена",
        "effect_description": "Добавление или удаление эффектов состояния.",
        "effect_failure_notActive": "Нельзя забрать %1$s от %2$s, поскольку эффект отсутствует",
        "effect_failure_notActive_all": "%1$s: не удалось удалить эффекты, так как они отсутствуют",
        "effect_failure_notAMob": "%1$s: невозможно наложить эффекты",
        "effect_notFound": "Не существует эффекта моба с ID %s",
        "effect_success": "Наложен эффект %1$s * %2$d на цель %3$s на %4$d с",
        "effect_success_removed": "«%2$s»: эффект «%1$s» удален",
        "effect_success_removed_all": "%1$s: все эффекты удалены",
        "enchant_cantCombine": "%1$s и %2$s: невозможно объединить",
        "enchant_invalidLevel": "%1$s не поддерживает уровень %2$d",
        "enchant_cantEnchant": "Невозможно наложить выбранные чары на целевой предмет: %1$s",
        "enchant_description": "Накладывает чары на выбранный предмет игрока.",
        "enchant_noItem": "У цели нет предмета: %1$s",
        "enchant_notFound": "Зачарования с ID %1$d не существует",
        "enchant_success": "%1$s: чары успешно наложены",
        "entitydata_description": "Изменяет тег данных сущности.",
        "entitydata_failed": "Тег данных не изменился: %1$s",
        "entitydata_noPlayers": "%1$s является игроком, изменить его нельзя",
        "entitydata_success": "Данные сущности изменены на: %1$s",
        "entitydata_tagError": "Сбой анализа тега данных: %1$s",
        "execute_allInvocationsFailed": "Сбой всех вызовов: «%1$s»",
        "execute_failed": "Не удалось выполнить команду «%1$s» как %2$s",
        "execute_description": "Выполняет команду от имени одного или нескольких объектов.",
        "fill_description": "Целиком или частично заполняет область определенным блоком.",
        "fill_failed": "Блоки не заполнены",
        "fill_outOfWorld": "Невозможно разместить блоки за пределами мира",
        "fill_success": "Заполнено блоков: %1$d",
        "fill_tagError": "Сбой анализа тега данных: %1$s",
        "fill_tooManyBlocks": "В заданной области слишком много блоков (%1$d > %2$d)",
        "fill_replace_auxvalue_invalid": "Недопустимое значение замены данных для блока «%1$s»",
        "function_description": "Выполняет команды, найденные в соответствующем файле функций.",
        "function_functionNameNotFound": "Функция %1$s не найдена.",
        "function_invalidCharacters": "Функция с названием '%s' недействительна, символ '%s' недопустим в названии функций.",
        "function_noEngineVersionSpecified": "Невозможно выполнить функцию: %s. Необходимо указать min_engine_version в manifest.json набора параметров.",
        "function_success": "Успешно выполнены вхождения функции (%1$).",
        "gamemode_description": "Задает режим игры игрока.",
        "gamemode_success_other": "Режим игры игрока %2$s изменен на «%1$s»",
        "gamemode_success_self": "Ваш режим игры изменен на «%1$s»",
        "gamemode_fail_invalid": "Недопустимый режим игры: «%1$s»",
        "gamerule_description": "Устанавливает или запрашивает правило игры.",
        "gamerule_type_invalid": "Использован недопустимый тип для правила игры «%1$s»",
        "gamerule_type_nocheatsenabled": "Правило игры '%1$s' можно использовать, только если в этом мире включены читы.",
        "gamerule_nopermission": "Изменять «%1$s» могут только владельцы сервера",
        "gamerule_norule": "Правило игры под названием «%1$s» отсутствует",
        "gamerule_success": "Правило игры «%1$s» изменено на: «%2$s»",
        "generic_async_initiated": "Началось выполнение команды «%1$s» (асинхронный шаг %2$d)",
        "generic_boolean_invalid": "«%1$s» не является true или false",
        "generic_chunk_notFound": "Указанный фрагмент не найден",
        "generic_componentError": "Сбой анализа списка компонентов",
        "generic_dimension_notFound": "Указанное измерение не найдено",
        "generic_disabled": "На этом уровне читы отключены.",
        "generic_disabled_templateLocked": "Настройки сейчас заблокированы. Чтобы изменить, разблокируйте параметры шаблона мира в настройках игры.",
        "generic_double_tooBig": "Вы ввели слишком большое число (%.2f), оно должно быть не больше %.2f",
        "generic_double_tooSmall": "Вы ввели слишком маленькое число (%.2f), оно должно быть не меньше %.2f",
        "generic_duplicateType": "Дублирование аргументов типа",
        "generic_duplicateSelectorArgument": "Дублирование аргументов средства выбора (%s)",
        "generic_encryption_badkey": "Предоставлен неверный открытый ключ. Ожидался 120-байтовый ключ после форматирования PEM.",
        "generic_encryption_badsalt": "Предоставлены неверные случайные данные. Ожидалось 16 байт до кодировки Base 64.",
        "generic_encryption_required": "Требуется зашифрованный сеанс",
        "generic_entity_invalidType": "«%1$s» является недопустимым типом сущности",
        "generic_entity_invalidUuid": "Недопустимый формат UUID объекта",
        "generic_entity_notFound": "Не удается найти эту сущность",
        "generic_exception": "При выполнении этой команды произошла неизвестная ошибка",
        "generic_invalidAgentType": "Аргумент типа применен к средству выбора только Agent",
        "generic_invalidcontext": "Предоставлен недопустимый контекст для выбранного типа команды",
        "generic_invalidDevice": "Введенная вами команда (%s) не поддерживается на этом устройстве",
        "generic_invalidPlayerType": "Аргумент типа применен к средству выбора только игроков",
        "generic_invalidType": "Неизвестный аргумент типа",
        "generic_levelError": "Максимальный уровень должен быть больше минимального",
        "generic_malformed_body": "Тело отсутствует или деформировано",
        "generic_malformed_type": "Неверный тип запроса",
        "generic_notimplemented": "Не используется",
        "generic_num_invalid": "«%1$s» не является допустимым числом",
        "generic_num_tooBig": "Введенное число (%1$d) слишком большое, оно должно быть не больше %2$d",
        "generic_num_tooSmall": "Введенное число (%1$d) слишком маленькое, оно должно быть не меньше %2$d",
        "generic_parameter_invalid": "«%1$s» не является допустимым параметром",
        "generic_permission_selector": "<недостаточно разрешений для расширения средства выбора>",
        "generic_player_notFound": "Указанный игрок не найден",
        "generic_protocol_mismatch": "Предоставленная версия протокола не совпадает с версией протокола Minecraft",
        "generic_radiusError": "Значение минимального радиуса средства выбора должно быть меньше максимального",
        "generic_radiusNegative": "Радиус не может быть отрицательным",
        "generic_rotationError": "Поворот вне диапазона",
        "generic_running": "Команда уже выполняется",
        "generic_step_failed": "Шаг команды не выполнен",
        "generic_syntax": "Ошибка синтаксиса: непредвиденное «%2$s»: в «%1$s>>%2$s<<%3$s»",
        "generic_noTargetMatch": "Нет целей, соответствующих средству выбора",
        "generic_targetNotPlayer": "Целью средства выбора должен быть игрок",
        "generic_tooManyNames": "Слишком много аргументов имени цели",
        "generic_tooManyTargets": "Слишком много целей соответствует средству выбора",
        "generic_too_many_requests": "Послано слишком много команд! Дождитесь, пока будет выполнена текущая",
        "generic_unknown": "Неизвестная команда: %s. Убедитесь, что такая команда существует и у вас есть право ее использовать.",
        "generic_usage": "Использование: %1$s",
        "generic_usage_noparam": "Использование:",
        "generic_version_mismatch": "Для данной команды отсутствует запрошенная версия",
        "generic_version_missing": "При вызовах команды не из чата необходимо указывать версию команды",
        "getchunkdata_description": "Получает пиксели для конкретного фрагмента.",
        "getchunkdata_success": "Данные о фрагменте получены",
        "getchunks_description": "Получает список загруженных фрагментов.",
        "getchunks_success": "Список фрагментов получен",
        "getlocalplayername_description": "Возвращает имя локального игрока.",
        "getspawnpoint_description": "Получает зону появления указанных игроков.",
        "gettopsolidblock_description": "Получает сведения о местонахождении верхнего блока (не являющегося воздухом) ниже указанной точки.",
        "gettopsolidblock_notfound": "Ниже указанной точки нет твердых блоков.",
        "give_block_notFound": "Нет блока с именем «%1$d»",
        "give_description": "Выдает игроку предмет.",
        "give_item_invalid": "Недопустимый синтаксис команды: %s с таким значением данных не существует",
        "give_item_notFound": "Нет предмета с именем «%1$d»",
        "give_map_invalidData": "Предоставлены недопустимые данные карты",
        "give_map_featureNotFound": "Не удалось создать карту исследований. Возможность не найдена в этом измерении",
        "give_success": "%3$s получает %1$s * %2$d",
        "give_successRecipient": "Вы получили %1$s * %2$d",
        "give_tagError": "Сбой анализа тега данных: %1$s",
        "help_description": "Показывает помощь или список команд.",
        "help_footer": "Подсказка. Используйте при вводе команды <tab>, чтобы автоматически завершить написание ее или ее аргументов.",
        "help_header": "--- Страница справки %1$d из %2$d (/help <страница>) ---",
        "help_command_aliases": "%s (также %s):",
        "immutableworld_description": "Задает неизменяемое состояние мира.",
        "immutableworld_info": "immutableworld = %s",
        "kick_description": "Выгоняет игрока с сервера.",
        "kick_description_edu": "Удаляет игрока из игры.",
        "kick_not_found": "Не удалось найти игрока %1$s",
        "kick_not_yourself": "Удалить себя из игры невозможно",
        "kick_success": "Игрока %1$s выгнали из игры",
        "kick_success_reason": "Игрока %1$s выгнали из игры: «%2$s»",
        "kick_success_reasonedu": "Участника %1$s удалили из игры: \"%2$s\"",
        "kick_no_host": "Организатора невозможно выгнать из игры.",
        "kick_no_teacher": "Учителей невозможно удалять из игры.",
        "kill_successful_edu": "Удалено %1$",
        "kill_successful": "%1$s умирает",
        "kill_description_edu": "Удаляет сущности (игроков, мобов и т. д.).",
        "kill_description": "Убивает сущности (игроков, мобов и т. д.).",
        "list_description": "Показывает список игроков на сервере.",
        "locate_description": "Показывает координаты ближайшей структуры выбранного типа.",
        "locate_fail_noplayer": "Только действительный игрок может использовать эту команду",
        "locate_fail_nostructurefound": "В данном измерении не найдено допустимое строение",
        "locate_success": "%1$s ближе всего в блоке %2$s, (y?), %3$s",
        "togglecontentlog_toggle": "Команда включения или отключения журнала содержимого",
        "togglecontentlog_enabled": "Журнал содержимого включен",
        "togglecontentlog_disabled": "Журнал содержимого отключен",
        "me_description": "Отображает сообщение о вас.",
        "message_display_incoming": "%1$s шепчет вам: «%2$s»",
        "message_display_outgoing": "Вы шепчете игроку %1$s: «%2$s»",
        "message_sameTarget": "Нельзя отправить личное сообщение самому себе.",
        "mixer_description": "Управление интерактивностью Mixer",
        "mixer_error_unknown": "Произошла неизвестная ошибка Mixer.",
        "mixer_error_notoken": "Чтобы включить интерактивность Mixer, необходимо войти в учетную запись Майкрософт.",
        "mixer_error_notsupported": "Используемое вами устройство не поддерживает интерактивность Mixer.",
        "mixer_interactive_error": "Произошла ошибка Mixer: %1$s",
        "mixer_scene_failed": "Сцены с именем «%1$s» не существует. Убедитесь, что вы правильно ввели имя сцены.",
        "mixer_scene_success": "Сцена изменена на: %1$s",
        "mixer_start_success": "Запуск интерактивности Mixer: %1$s",
        "mixer_start_fail_invalidCode": "Не удалось найти проект с ИД %1$s. Убедитесь в правильности ИД или кода общего доступа.",
        "mixer_stop_success": "Интерактивность Mixer остановлена.",
        "mixer_stop_fail": "Нет интерактивных сеансов для остановки.",
        "mixer_status_notinitialized": "Интерактивность не инициализирована.",
        "mixer_status_enabled": "Интерактивность включена.",
        "mixer_status_initializing": "Интерактивность инициализируется.",
        "mixer_status_pending": "Интерактивность в ожидании.",
        "mixer_status_disabled": "Интерактивность отключена.",
        "mixer_activatedbutton": "%1$s активирует %2$s.",
        "mobevent_description": "Контролирует, какие события мобов разрешено запускать.",
        "mobevent_eventsEnabledSetToTrue": "События мобов теперь включены. Отдельные события, для которых задано значение false, не будут запускаться.",
        "mobevent_eventsEnabledSetToFalse": "События мобов теперь отключены. Отдельные события не будут запускаться.",
        "mobevent_eventsEnabledIsTrue": "События мобов включены. Отдельные события, для которых задано значение false, не будут запускаться.",
        "mobevent_eventsEnabledIsFalse": "События мобов отключены. Отдельные события не будут запускаться.",
        "mobevent_eventSetToTrue": "Для события мобов %s (id: %s) задано значение true.",
        "mobevent_eventSetToTrueButEventsDisabled": "Для события мобов %s (id: %s) задано значение true, но события мобов отключены.",
        "mobevent_eventSetToFalse": "Для события мобов %s (id: %s) задано значение false.",
        "mobevent_eventIsTrue": "Для события мобов %s (id: %s) задано значение true.",
        "mobevent_eventIsTrueButEventsDisabled": "Для события мобов %s (id: %s) задано значение true, но события мобов отключены.",
        "mobevent_eventIsFalse": "Для события мобов %s (id: %s) задано значение false.",
        "op_description": "Наделяет игрока статусом оператора.",
        "op_failed": "Не удалось выдать права оператора (уже обладает этим или более высоким статусом): %s",
        "op_success": "Выданы права оператора: %s",
        "op_message": "Вы получили права модератора",
        "origin_commandblock": "Командный блок",
        "origin_external": "Внешний",
        "origin_devconsole": "Консоль разработчика",
        "origin_script": "Обработчик сценариев",
        "origin_server": "Сервер",
        "origin_teacher": "Преподаватель",
        "ops_description": "Перезагрузить и выдать права модератора.",
        "ops_reloaded": "Модераторы перезагружены из файла.",
        "ops_set_success": "Успешно задан уровень оператора для игрока %s.",
        "permissions_description": "Перезагружает и применяет разрешения.",
        "permissions_reloaded": "Разрешения перезагружены из файла.",
        "permissions_set_failed": "Не удалось задать уровень разрешений %s для игрока %s.",
        "permissions_set_success": "Успешно задан уровень разрешений %s для игрока %s.",
        "permissions_save_failed": "Не удалось сохранить уровень разрешений %s для игрока %s.",
        "permissions_save_success": "Успешно сохранен уровень разрешений %s для игрока %s.",
        "spawnParticleEmitter_description": "Создает эмиттер частиц",
        "particle_description": "Создает частицы.",
        "particle_notFound": "Неизвестное имя эффекта (%1$s)",
        "particle_success": "Воспроизведение эффекта «%1$s» несколько раз (%2$d)",
        "players_list": "Игроки в сети (%1$d/%2$d):",
        "players_list_names": "%s",
        "playsound_description": "Воспроизводит звук.",
        "playsound_playerTooFar": "Игрок %1$s находится слишком далеко, чтобы услышать звук",
        "playsound_success": "Звук «%1$s» воспроизведен игроку %2$s",
        "position_description": "Включает или выключает координаты игрока.",
        "publish_failed": "Невозможно запустить локальный сервер",
        "publish_started": "Локальная игра размещается на порте %1$s",
        "querytarget_description": "Получает сведения о трансформации, имени и ID выбранной целевой сущности или сущностей.",
        "querytarget_success": "Данные цели: %1$s",
        "reload_description": "Перезагружает все файлы функций из всех наборов параметров.",
        "reload_success": "Существующие файлы функций были перезагружены. Перезапустите Minecraft, чтобы перезагрузить НОВЫЕ функции.",
        "replaceitem_description": "Заменяет предметы в инвентаре.",
        "replaceitem_failed": "Не удалось заменить %s (ячейка %d) на %d * %s",
        "replaceitem_keepFailed": "Уже есть элемент, занимающий %s слот %d.",
        "replaceitem_noContainer": "Блок в %s не является контейнером",
        "replaceitem_badSlotNumber": "Не удалось заменить ячейку %d, значение должно быть в диапазоне от %d до %d.",
        "replaceitem_success": "Выполнена замена: %s (ячейка %d) на %d * %s",
        "replaceitem_success_entity": "Выполнена замена: %s (ячейка %d – %s) на %d * %s",
        "replaceitem_tagError": "Сбой анализа тега данных: %1$s",
        "save_description": "Управление сохранением данных игры на диске или проверка этого процесса.",
        "save_disabled": "Автосохранение мира выключено",
        "save_enabled": "Автосохранение мира включено",
        "save_failed": "Ошибка сохранения: %1$s",
        "save_start": "Сохранение...",
        "save_success": "Мир успешно сохранен",
        "save_all_error": "При попытке приостановить сохранение уровня возникла ошибка.",
        "save_all_success": "Данные сохранены. Файлы готовы к копированию.",
        "save_off_alreadyOff": "Сохранение уже выключено.",
        "save_on_alreadyOn": "Сохранение уже включено.",
        "save_on_notDone": "Предыдущее сохранение не завершено.",
        "save_on_description": "Включает автоматическое сохранение на сервере.",
        "save_on_success": "Изменения уровня продолжены.",
        "save_state_description": "Проверяет, завершено ли предыдущее сохранение всех ресурсов, и отображает список всех затронутых файлов.",
        "say_description": "Отправляет сообщение другим игрокам в чат.",
        "scoreboard_description": "Отслеживание и отображение очков для различных целей.",
        "scoreboard_allMatchesFailed": "Все совпадения не прошли",
        "scoreboard_noMultiWildcard": "Допустима только одна подстановка пользователя",
        "scoreboard_objectiveNotFound": "Цель с именем «%1$s» не найдена",
        "scoreboard_objectiveReadOnly": "Невозможно задать цель «%1$s»: только для чтения",
        "scoreboard_objectives_add_alreadyExists": "Цель с именем «%1$s» уже существует",
        "scoreboard_objectives_add_displayTooLong": "Отображаемое имя «%1$s» является слишком длинным для цели, количество символов должно быть не более %2$d",
        "scoreboard_objectives_add_success": "Успешно добавлена новая цель «%1$s»",
        "scoreboard_objectives_add_tooLong": "Имя «%1$s» является слишком длинным для цели, количество символов должно быть не более %2$d",
        "scoreboard_objectives_add_wrongType": "Недопустимый критерий цели: «%1$s»",
        "scoreboard_objectives_add_needName": "Укажите имя цели.",
        "scoreboard_objectives_description": "Изменить цели в таблице счета.",
        "scoreboard_objectives_list_count": "Показ целей (%1$d) в таблице счета:",
        "scoreboard_objectives_list_empty": "В таблице счета нет целей",
        "scoreboard_objectives_list_entry": "- %1$s: отображается как «%2$s» типа «%3$s»",
        "scoreboard_objectives_remove_success": "Цель «%1$s» успешно удалена",
        "scoreboard_objectives_setdisplay_invalidSlot": "Ячейки отображения «%1$s» не существует",
        "scoreboard_objectives_setdisplay_successCleared": "Очищена ячейка отображения цели «%1$s»",
        "scoreboard_objectives_setdisplay_successSet": "Отображаемая цель в ячейке «%1$s» задана как «%2$s»",
        "scoreboard_players_add_success": "Добавлено %1$d очк. в цель [%2$s] для игрока %3$s (теперь %4$d очк.)",
        "scoreboard_players_add_multiple_success": "Добавлено %1$d очк. в цель [%2$s] для %3$d сущн.",
        "scoreboard_players_nameNotFound": "Укажите имя игрока.",
        "scoreboard_players_enable_noTrigger": "Цель «%1$s» не является активатором",
        "scoreboard_players_enable_success": "Включен активатор «%1$s» для %2$s",
        "scoreboard_players_list_count": "Показ отслеживаемых игроков (%1$d) в таблице счета:",
        "scoreboard_players_list_empty": "В таблице счета нет отслеживаемых игроков",
        "scoreboard_players_list_player_count": "Показ отслеживаемых целей (%1$d) для %2$s:",
        "scoreboard_players_list_player_empty": "У игрока %1$s нет зарегистрированного счета",
        "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_players_operation_invalidOperation": "Недопустимая операция «%1$s»",
        "scoreboard_players_operation_notFound": "Счет «%1$s» для игрока %2$s не найден",
        "scoreboard_players_operation_success": "Обновлено цель [%1$s] для %2$d сущн.",
        "scoreboard_players_offlinePlayerName": "Игрок вне сети",
        "scoreboard_players_random_invalidRange": "Минимум (%1$d) не меньше максимума (%2$d)",
        "scoreboard_players_remove_success": "Удалено %1$d очк. из цели [%2$s] для игрока %3$s (теперь %4$d)",
        "scoreboard_players_remove_multiple_success": "Удалено %1$d очк. из цели [%2$s] для %3$d сущн.",
        "scoreboard_players_reset_success": "Сброс счета игрока %1$s",
        "scoreboard_players_resetscore_success": "Сброс счета «%1$s» игрока %2$s",
        "scoreboard_players_set_success": "Задано цель [%1$s] для игрока %2$: %3$d",
        "scoreboard_players_set_multiple_success": "Задано цель [%1$s] для %2$d сущн.: %3$d",
        "scoreboard_players_set_tagError": "Не удалось проанализировать тег данных, причина: %1$s",
        "scoreboard_players_set_tagMismatch": "Несоответствие тега данных для игрока %1$s",
        "scoreboard_players_score_notFound": "Счет «%1$s» для игрока %2$s не найден",
        "scoreboard_players_test_failed": "Счет %1$d выходит за рамки диапазона от %2$d до %3$d",
        "scoreboard_players_test_success": "Счет %1$d находится в диапазоне от %2$d до %3$d",
        "scoreboard_teamNotFound": "Альянс с именем «%1$s» не найден",
        "scoreboard_teams_add_alreadyExists": "Альянс с именем «%1$s» уже существует",
        "scoreboard_teams_add_displayTooLong": "Отображаемое имя «%1$s» является слишком длинным для альянса, количество символов должно быть не более %2$d",
        "scoreboard_teams_add_success": "Успешно добавлен новый альянс «%1$s»",
        "scoreboard_teams_add_tooLong": "Имя «%1$s» является слишком длинным для альянса, количество символов должно быть не более %2$d",
        "scoreboard_teams_empty_alreadyEmpty": "Альянс «%1$s» пуст, невозможно удалить несуществующих игроков",
        "scoreboard_teams_empty_success": "Все игроки (%1$d) удалены из альянса «%2$s»",
        "scoreboard_teams_join_failure": "Невозможно добавить игроков (%1$d) в альянс «%2$s»: %3$s",
        "scoreboard_teams_join_success": "Игроки (%1$d) добавлены в альянс «%2$s»: %3$s",
        "scoreboard_teams_leave_failure": "Невозможно удалить игроков (%1$d) из их альянсов: %2$s",
        "scoreboard_teams_leave_noTeam": "Вы не состоите в альянсе",
        "scoreboard_teams_leave_success": "Игроки (%1$d) удалены из своих альянсов: %2$s",
        "scoreboard_teams_list_count": "Показ альянсов (%1$d) в таблице счета:",
        "scoreboard_teams_list_empty": "В таблице счета нет зарегистрированных альянсов",
        "scoreboard_teams_list_entry": "- в команде %1$s: '%2$s' %3$d игроков",
        "scoreboard_teams_list_player_count": "Показ игроков (%1$d) в альянсе «%2$s»:",
        "scoreboard_teams_list_player_empty": "В альянсе «%1$s» нет игроков",
        "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_teams_option_noValue": "Допустимые значения параметра «%1$s»: %2$s",
        "scoreboard_teams_option_success": "Параметр «%1$s» для альянса «%2$s» изменен на «%3$s»",
        "scoreboard_teams_remove_success": "Альянс «%1$s» удален",
        "seed_success": "Ключ генерации: %1$s",
        "setblock_description": "Меняет блок на другой блок.",
        "setblock_failed": "Не удается поместить блок",
        "setblock_noChange": "Не удалось поместить блок",
        "setblock_notFound": "Блока с ID/именем «%1$s» не существует",
        "setblock_outOfWorld": "Невозможно поместить блок за пределами мира",
        "setblock_success": "Блок установлен",
        "setblock_tagError": "Сбой анализа тега данных: %1$s",
        "setidletimeout_success": "Время ожидания простоя изменено на %1$d мин.",
        "setfixedinvslots_description": "Задает количество фиксированных ячеек инвентаря для сервера.",
        "setfixedinvslots_success": "Число фиксированных ячеек инвентаря изменено на %1$d",
        "setfixedinvslot_description": "Задает выделенную ячейку для указанного предмета.",
        "setfixedinvslot_success": "Для фиксированной ячейки инвентаря %1$d задано значение «%2$s»",
        "globalpause_description": "Задает или получает состояние паузы игры для всех игроков.",
        "globalpause_success": "Задано или получено состояние паузы",
        "setmaxplayers_description": "Задает максимальное количество игроков в этом сеансе игры.",
        "setmaxplayers_success": "Максимальное количество игроков: %1$d.",
        "setmaxplayers_success_upperbound": "(Привязано к максимальному количеству разрешенных подключений)",
        "setmaxplayers_success_lowerbound": "(Привязано к текущему количеству игроков)",
        "setworldspawn_description": "Задает точку появления мира.",
        "setworldspawn_success": "Точка появления в мире изменена на (%1$d, %2$d, %3$d)",
        "setworldspawn_wrongDimension": "Невозможно задать точку появления в мире в этом измерении",
        "spawnpoint_success_single": "Точка появления игрока %1$s изменена на (%2$d, %3$d, %4$d)",
        "spawnpoint_description": "Задает точку появления игрока.",
        "spawnpoint_success_multiple_specific": "Точка появления для %1$s изменена на (%2$d, %3$d, %4$d)",
        "spawnpoint_success_multiple_generic": "Изменена точка появления для %1$s",
        "spawnpoint_wrongDimension": "Невозможно задать точку появления в этом измерении",
        "spreadplayers_description": "Переносит сущности в случайные места.",
        "spreadplayers_failure_players": "Невозможно распределить игроков (%1$s) вокруг %2$s,%3$s (слишком много игроков, попробуйте использовать распределение не более %4$s)",
        "spreadplayers_failure_teams": "Невозможно распределить альянсы (%1$s) вокруг %2$s,%3$s (слишком много игроков, попробуйте использовать распределение не более %4$s)",
        "spreadplayers_info_players": "(Среднее расстояние между игроками, блоков: %1$s; количество итераций: %2$s)",
        "spreadplayers_info_teams": "(Среднее расстояние между альянсами, блоков: %1$s; количество итераций: %2$s)",
        "spreadplayers_spreading_players": "Распределение игроков (%1$s) на расстоянии до %2$s блоков вокруг %3$s,%4$s (минимальное расстояние между ними в блоках: %5$s)",
        "spreadplayers_spreading_teams": "Распределение альянсов (%1$s) на расстоянии до %2$s блоков вокруг %3$s,%4$s (минимальное расстояние между ними в блоках: %5$s)",
        "spreadplayers_success_players": "Игроки (%1$s) успешно распределены вокруг %2$s,%3$s",
        "spreadplayers_success_teams": "Альянсы (%1$s) успешно распределены вокруг %2$s,%3$s",
        "stats_cleared": "Очищена статистика: %1$s",
        "stats_failed": "Недействительные параметры",
        "stats_noCompatibleBlock": "Для блока в точке %1$d, %2$d, %3$d невозможно отслеживать статистику",
        "stats_success": "Сохранение статистики %1$s в %2$s на %3$s",
        "stop_description": "Останавливает сервер.",
        "stop_start": "Выключение сервера",
        "stopsound_description": "Останавливает воспроизведение звука.",
        "stopsound_success": "Отключен звук %s для игрока %s",
        "stopsound_success_all": "Отключены все звуки для цели «%s»",
        "summon_description": "Призывает сущность.",
        "summon_failed": "Не удается вызвать объект",
        "summon_outOfWorld": "Невозможно вызвать объект за пределами мира",
        "summon_success": "Объект успешно вызван",
        "summon_tagError": "Сбой анализа тега данных: %1$s",
        "tag_description": "Управляет тегами, хранящимися в сущностях.",
        "tag_add_failed": "У целевого объекта уже есть один или слишком много тегов",
        "tag_add_success_single": "Добавлен тег «%1$s» к %2$s",
        "tag_add_success_multiple": "Добавлен тег «%1$s» к сущностям (%2$d)",
        "tag_list_single_empty": "У %s нет тегов",
        "tag_list_single_success": "У %1$s есть теги (%2$d): %3$s",
        "tag_list_multiple_empty": "У сущностей (%d) нет тегов",
        "tag_list_multiple_success": "У сущностей (%1$d) есть теги (%2$d): %3$s",
        "tag_remove_failed": "В целевом объекте нет этого тега",
        "tag_remove_success_single": "Тег «%1$s» удален из %2$s",
        "tag_remove_success_multiple": "Тег «%1$s» удален из сущностей (%2$d)",
        "tell_description": "Отправляет личное сообщение одному или нескольким игрокам.",
        "tellraw_description": "Отправляет JSON-сообщение игрокам.",
        "tellraw_jsonException": "Недопустимый JSON: %1$s",
        "tellraw_jsonStringException": "Недопустимые строки данных в формате JSON.",
        "tellraw_error_noData": "Данные не предоставлены.",
        "tellraw_error_notArray": "Объект rawtext должен содержать массив. Пример: «rawtext»: [{..}]",
        "tellraw_error_textNotString": "текстовое поле в объекте rawtext должно содержать строку. Пример: \"rawtext\":[{\"text\": \"text to display\"}]",
        "tellraw_error_translateNotString": "поле перевода в объекте rawtext должно содержать код языка. Пример: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
        "tellraw_error_withNotArrayOrRawText": "с полем с объектом rawtext должно содержать массив или другой объект rawtext. Пример 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Пример 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
        "tellraw_error_itemIsNotObject": "Значение Json в массиве rawtext не было объектом. Пример: \"rawtext\": [{ \"text\" : \"my text\" }]",
        "educlientinfo_description": "Получить идентификатор клиента и состояние сервера. Предназначено для ТР.",
        "testfor_description": "Подсчитывает сущности (игроков, мобов, предметы и т. д.), соответствующие заданным условиям.",
        "testfor_failure": "%1$s не соответствует требуемой структуре данных",
        "testfor_success": "Найдено: %1$s",
        "testfor_tagError": "Сбой анализа тега данных: %1$s",
        "testforblock_description": "Проверяет, находится ли конкретный блок в определенном месте.",
        "testforblock_failed_data": "Состояние блока в %1$d,%2$d,%3$d отличается от ожидаемого.",
        "testforblock_failed_nbt": "Блок в точке %1$d,%2$d,%3$d не обладает требуемыми ключами NBT.",
        "testforblock_failed_tile": "Блок в точке %1$d,%2$d,%3$d — %4$s (ожидалось: %5$s).",
        "testforblock_failed_tileEntity": "Блок в точке %1$d,%2$d,%3$d не является блочной сущностью и не поддерживает сопоставление тегов.",
        "testforblock_outOfWorld": "Невозможно проверить блок за пределами мира",
        "testforblock_success": "Блок успешно найден в точке %1$d,%2$d,%3$d.",
        "testforblocks_description": "Проверяет, совпадают ли блоки в двух областях.",
        "tickingarea_description": "Добавление, удаление или выведение списка тактовых областей.",
        "tickingarea_inuse": "Используется тактовых областей: %1$d/%2$d.",
        "tickingarea_noneExist_currentDimension": "В этом измерении нет тактовых областей.",
        "tickingarea_add_bounds_success": "Добавлена тактовая область от %1$d до %2$d.",
        "tickingarea_add_circle_success": "Добавлена тактовая область с центром в %1$d и радиусом %2$d, измеряемым в фрагментах.",
        "tickingarea_add_failure": "Достигнуто максимальное число тактовых областей (%1$d). Невозможно добавить больше тактовых областей.",
        "tickingarea_add_conflictingname": "Тактовая область с именем «%1$s» уже существует.",
        "tickingarea_add_chunkfailure": "Тактовая область содержит слишком много фрагментов (более %1$d), из-за чего ее невозможно создать.",
        "tickingarea_add_radiusfailure": "Значение радиуса не может превышать %1$d. Тактовая область слишком велика и не может быть создана.",
        "tickingarea_remove_success": "Одна или несколько тактовых областей удалены",
        "tickingarea_remove_failure": "В этом измерении нет тактовых областей с позицией блока %1$d.",
        "tickingarea_remove_byname_failure": "В этом измерении нет тактовых областей с именем «%1$s».",
        "tickingarea_remove_all_success": "Одна или несколько тактовых областей удалены",
        "tickingarea_remove_all_failure": "В этом измерении нет тактовых областей.",
        "tickingarea_list_chunks": "фрагм.",
        "tickingarea_list_circle_radius": "Радиус",
        "tickingarea_list_success_currentDimension": "Список тактовых областей в этом измерении",
        "tickingarea_list_success_allDimensions": "Список тактовых областей во всех измерениях",
        "tickingarea_list_failure_allDimensions": "Ни в одном измерении нет тактовых областей.",
        "tickingarea_list_to": "до",
        "tickingarea_list_type_circle": "Круг",
        "time_added": "К текущему времени добавлено %1$d",
        "time_description": "Изменяет или запрашивает игровое время мира.",
        "time_disabled": "На этом уровне включена настройка «Всегда день».",
        "time_query_day": "День: %d",
        "time_query_daytime": "Дневное время: %d",
        "time_query_gametime": "Время игры: %d",
        "time_set": "Установлено время: %1$d",
        "time_stop": "Время: %1$s",
        "title_description": "Управляет надписями на экране.",
        "title_success": "Команда title успешно выполнена",
        "titleraw_description": "Управляет заголовками экрана с сообщениями JSON.",
        "toggledownfall_description": "Меняет погоду.",
        "tp_description": "Телепортирует сущности (игроков, мобов и т. д.).",
        "tp_notSameDimension": "Телепортация невозможна, так как игроки находятся в разных измерениях",
        "tp_outOfWorld": "Невозможно перенести сущности за пределы мира",
        "tp_permission": "У вас нет прав на использование этой команды с косой чертой.",
        "tp_safeTeleportFail": "Не удалось перенести %1$s к %2$s, поскольку в этой области находились блоки.",
        "tp_far": "Не удалось перенести %1$s в незагруженную область в %2$s",
        "tp_success": "%1$s переносится в точку %2$s",
        "tp_successVictim": "Вы переноситесь в точку %1$s",
        "tp_success_coordinates": "%1$s переносится в точку %2$s, %3$s, %4$s",
        "transferserver_description": "Перемещает игрока на другой сервер.",
        "transferserver_successful": "Игрок перемещен",
        "transferserver_invalid_port": "Недопустимый порт (0-65535)",
        "trigger_description": "Задает активатор.",
        "trigger_disabled": "Активатор «%1$s» не включен",
        "trigger_invalidMode": "Недействительный режим активатора «%1$s»",
        "trigger_invalidObjective": "Недопустимое имя активатора «%1$s»",
        "trigger_invalidPlayer": "Использовать команду /trigger могут только игроки",
        "trigger_success": "Активатор «%1$s» изменен с помощью %2$s %3$s",
        "unban_failed": "Не удалось разблокировать игрока %1$s",
        "unban_success": "Игрок %1$s разблокирован",
        "unbanip_invalid": "Вы ввели недопустимый IP-адрес",
        "unbanip_success": "IP-адрес %1$s разблокирован",
        "validategamelighting_description": "Проверка игрового освещения указанной области",
        "validategamelighting_checkRegionTooBig": "Область слишком велика для проверки освещения! (%1$d > %2$d)",
        "validategamelighting_outOfWorld": "Невозможно проверить освещение за пределами мира",
        "weather_clear": "Смена погоды на ясную",
        "weather_description": "Задает погоду.",
        "weather_disabled": "На этом уровне не включена настройка «Смена погоды».",
        "weather_query": "Погода: %s",
        "weather_query_clear": "ясно",
        "weather_query_rain": "дождь",
        "weather_query_thunder": "гроза",
        "weather_rain": "Смена погоды на дождь",
        "weather_thunder": "Смена погоды на дождь с грозой",
        "whitelist_add_failed": "Не удалось добавить игрока %1$s в белый список",
        "whitelist_add_success": "Игрок %1$s добавлен в белый список",
        "whitelist_description": "Управляет списком разрешений сервера.",
        "whitelist_disabled": "Белый список отключен",
        "whitelist_enabled": "Белый список включен",
        "whitelist_list": "Игроки в белом списке (%1$d, в игре: %2$d):",
        "whitelist_reloaded": "Белый список перезагружен из файла.",
        "whitelist_remove_failed": "Не удалось удалить игрока %1$s из белого списка",
        "whitelist_remove_success": "Игрок %1$s удален из белого списка",
        "world_age_description": "Меняет или запрашивает возраст мира (время с момента его создания).",
        "world_age_added": "К возрасту мира добавлено %1$d",
        "world_age_query": "Возраст мира составляет %d",
        "world_age_set": "Сделать возраст мира равным %1$d",
        "worldborder_center_success": "Центр границы мира изменен на %1$s,%2$s",
        "worldborder_damage_amount_success": "Урон границы мира изменен на %1$s на блок (ранее: %2$s на блок)",
        "worldborder_damage_buffer_success": "Буфер границы мира в блоках изменен на %1$s (ранее: %2$s)",
        "worldborder_get_success": "Сейчас ширина границы мира в блоках: %1$s",
        "worldborder_set_success": "Ширина границы мира в блоках изменена на %1$s (ранее: %2$s)",
        "worldborder_setSlowly_grow_success": "Увеличение ширины границы мира в блоках до %1$s (ранее: %2$s) в течение %3$s с",
        "worldborder_setSlowly_shrink_success": "Уменьшение ширины границы мира в блоках до %1$s (ранее: %2$s) в течение %3$s с",
        "worldborder_warning_distance_success": "Порог предупреждения о границе мира в блоках изменен на %1$s (ранее: %2$s)",
        "worldborder_warning_time_success": "Порог предупреждения о границе мира в секундах изменен на %1$s (ранее: %2$s)",
        "worldbuilder_description": "Переключение статуса World Builder для вызывающего.",
        "worldbuilder_success": "Статус World Builder изменен на «%1$s»",
        "wsserver_description": "Пытается подключиться к серверу WebSocket по указанному URL-адресу.",
        "wsserver_invalid_url": "Неверно указан URL сервера",
        "wsserver_request_existing": "Уже обрабатывается другой запрос на подключение",
        "wsserver_request_failed": "Не удалось подключиться к серверу: %1$s",
        "wsserver_success": "Установлено соединение с сервером: %1$s",
        "xp_description": "Увеличивает или уменьшает количество опыта у игрока.",
        "xp_failure_widthdrawXp": "Нельзя выдать игроку отрицательное количество очков опыта",
        "xp_success": "Выдано %1$d ед. опыта игроку %2$s",
        "xp_success_levels": "Выданы уровни (%1$d) игроку %2$s",
        "xp_success_negative_levels": "Игрок %2$s теряет уровни (%1$d)"
    },
    item:{
        "air": [
            "Воздух"
        ],
        "apple": [
            "Яблоко"
        ],
        "golden_apple": [
            "Золотое яблоко"
        ],
        "appleenchanted": [
            "Зачарованное яблоко"
        ],
        "armor_stand": [
            "Стойка для доспехов"
        ],
        "arrow": [
            "Стрела"
        ],
        "tipped_arrow": [
            "Стрела с эффектом"
        ],
        "banner": [
            "Черное знамя",
            "Черное знамя",
            "Красное знамя",
            "Зеленое знамя",
            "Коричневое знамя",
            "Синее знамя",
            "Фиолетовое знамя",
            "Бирюзовое знамя",
            "Светло-серое знамя",
            "Серое знамя",
            "Розовое знамя",
            "Лаймовое знамя",
            "Желтое знамя",
            "Голубое знамя",
            "Пурпурное знамя",
            "Оранжевое знамя",
            "Белое знамя"
        ],
        "bed": [
            "Кровать",
            "Белая кровать",
            "Оранжевая кровать",
            "Пурпурная кровать",
            "Голубая кровать",
            "Желтая кровать",
            "Лаймовая кровать",
            "Розовая кровать",
            "Серая кровать",
            "Светло-серая кровать",
            "Бирюзовая кровать",
            "Фиолетовая кровать",
            "Синяя кровать",
            "Коричневая кровать",
            "Зеленая кровать",
            "Красная кровать",
            "Черная кровать"
        ],
        "bell": [
            "Колокол"
        ],
        "steak": [
            "Стейк"
        ],
        "beef": [
            "Сырая говядина"
        ],
        "beetroot": [
            "Свекла"
        ],
        "beetroot_soup": [
            "Борщ"
        ],
        "blaze_powder": [
            "Огненный порошок"
        ],
        "blaze_rod": [
            "Огненный стержень"
        ],
        "boat": [
            "Лодка из дуба",
            "Лодка из дуба",
            "Лодка из сосны",
            "Лодка из березы",
            "Лодка из тропического дерева",
            "Лодка из акации",
            "Лодка из темного дуба"
        ],
        "bone": [
            "Кость"
        ],
        "book": [
            "Книга"
        ],
        "chainmail_boots": [
            "Кольчужные ботинки"
        ],
        "leather_boots": [
            "Кожаные ботинки"
        ],
        "diamond_boots": [
            "Алмазные ботинки"
        ],
        "golden_boots": [
            "Золотые ботинки"
        ],
        "iron_boots": [
            "Железные ботинки"
        ],
        "bow": [
            "Лук"
        ],
        "bowl": [
            "Миска"
        ],
        "bread": [
            "Хлеб"
        ],
        "brewing_stand": [
            "Варочная стойка"
        ],
        "brick": [
            "Кирпич"
        ],
        "bucket": [
            "Ведро"
        ],
        "bucketLava": [
            "Ведро лавы"
        ],
        "bucketWater": [
            "Ведро воды"
        ],
        "bucketFish": [
            "Ведро трески"
        ],
        "bucketSalmon": [
            "Ведро лосося"
        ],
        "bucketTropical": [
            "Ведро тропической рыбы"
        ],
        "bucketPuffer": [
            "Ведро рыбы фугу"
        ],
        "bucketCustomFish": [
            "Ведро рыбы"
        ],
        "tropicalColorWhite": [
            "Белый"
        ],
        "tropicalColorOrange": [
            "Оранжевый"
        ],
        "tropicalColorMagenta": [
            "Пурпурный"
        ],
        "tropicalColorSky": [
            "Небесно-голубой"
        ],
        "tropicalColorYellow": [
            "Желтый"
        ],
        "tropicalColorLime": [
            "Лаймовый"
        ],
        "tropicalColorRose": [
            "Розовый"
        ],
        "tropicalColorGray": [
            "Серый"
        ],
        "tropicalColorSilver": [
            "Серебряный"
        ],
        "tropicalColorTeal": [
            "Сине-зеленый"
        ],
        "tropicalColorPlum": [
            "Сливовый"
        ],
        "tropicalColorBlue": [
            "Синий"
        ],
        "tropicalColorBrown": [
            "Коричневый"
        ],
        "tropicalColorGreen": [
            "Зеленый"
        ],
        "tropicalColorRed": [
            "Красный"
        ],
        "tropicalBodyKobSingle": [
            "Коб (%1$s)"
        ],
        "tropicalBodySunstreakSingle": [
            "Пустынный кот (%1$s)"
        ],
        "tropicalBodySnooperSingle": [
            "Ищейка (%1$s)"
        ],
        "tropicalBodyDasherSingle": [
            "Стремительный (%1$s)"
        ],
        "tropicalBodyBrinelySingle": [
            "Солончак (%1$s)"
        ],
        "tropicalBodySpottySingle": [
            "Пятныш (%1$s)"
        ],
        "tropicalBodyFlopperSingle": [
            "Симулянт (%1$s)"
        ],
        "tropicalBodyStripeySingle": [
            "Полосатик (%1$s)"
        ],
        "tropicalBodyGlitterSingle": [
            "Блестящий (%1$s)"
        ],
        "tropicalBodyBlockfishSingle": [
            "Блок-рыба (%1$s)"
        ],
        "tropicalBodyBettySingle": [
            "Бетти (%1$s)"
        ],
        "tropicalBodyClayfishSingle": [
            "Глинорыба (%1$s)"
        ],
        "tropicalBodyKobMulti": [
            "Коб (%1$s-%2$s)"
        ],
        "tropicalBodySunstreakMulti": [
            "Пустынный кот (%1$s-%2$s)"
        ],
        "tropicalBodySnooperMulti": [
            "Ищейка (%1$s-%2$s)"
        ],
        "tropicalBodyDasherMulti": [
            "Стремительный (%1$s-%2$s)"
        ],
        "tropicalBodyBrinelyMulti": [
            "Солончак (%1$s-%2$s)"
        ],
        "tropicalBodySpottyMulti": [
            "Пятныш (%1$s-%2$s)"
        ],
        "tropicalBodyFlopperMulti": [
            "Симулянт (%1$s-%2$s)"
        ],
        "tropicalBodyStripeyMulti": [
            "Полосатик (%1$s-%2$s)"
        ],
        "tropicalBodyGlitterMulti": [
            "Блестящий (%1$s-%2$s)"
        ],
        "tropicalBodyBlockfishMulti": [
            "Блок-рыба (%1$s-%2$s)"
        ],
        "tropicalBodyBettyMulti": [
            "Бетти (%1$s-%2$s)"
        ],
        "tropicalBodyClayfishMulti": [
            "Глинорыба (%1$s-%2$s)"
        ],
        "tropicalSchoolAnemone": [
            "Анемона"
        ],
        "tropicalSchoolBlackTang": [
            "Черная зебрасома"
        ],
        "tropicalSchoolBlueDory": [
            "Синяя дори"
        ],
        "tropicalSchoolButterflyFish": [
            "Рыба-бабочка"
        ],
        "tropicalSchoolCichlid": [
            "Хромис"
        ],
        "tropicalSchoolClownfish": [
            "Рыба-клоун"
        ],
        "tropicalSchoolCottonCandyBetta": [
            "Многоцветная рыба-петушок"
        ],
        "tropicalSchoolDottyback": [
            "Ложнохромис"
        ],
        "tropicalSchoolEmperorRedSnapper": [
            "Трехполосый луциан"
        ],
        "tropicalSchoolGoatfish": [
            "Султанка"
        ],
        "tropicalSchoolMoorishIdol": [
            "Рогатый занкл"
        ],
        "tropicalSchoolOrnateButterfly": [
            "Разукрашенная бабочка"
        ],
        "tropicalSchoolParrotfish": [
            "Рыба-попугай"
        ],
        "tropicalSchoolQueenAngelFish": [
            "Королевский ангел"
        ],
        "tropicalSchoolRedCichlid": [
            "Хромис красный"
        ],
        "tropicalSchoolRedLippedBlenny": [
            "Красногубая морская собачка"
        ],
        "tropicalSchoolRedSnapper": [
            "Красный луциан"
        ],
        "tropicalSchoolThreadfin": [
            "Пальцепер"
        ],
        "tropicalSchoolTomatoClown": [
            "Помидорная рыба-клоун"
        ],
        "tropicalSchoolTriggerfish": [
            "Спинорог"
        ],
        "tropicalSchoolYellowTang": [
            "Желтая зебрасома"
        ],
        "tropicalSchoolYellowtailParrot": [
            "Желтохвостый попугай"
        ],
        "cake": [
            "Торт"
        ],
        "camera": [
            "Камера"
        ],
        "golden_carrot": [
            "Золотая морковь"
        ],
        "carrotOnAStick": [
            "Морковь на палочке"
        ],
        "warped_fungus_on_a_stick": [
            "Искаженный грибок на палке"
        ],
        "carrot": [
            "Морковь"
        ],
        "cauldron": [
            "Котел"
        ],
        "coal": [
            "Уголь",
            null,
            "Древесный уголь"
        ],
        "chainmail_chestplate": [
            "Кольчуга"
        ],
        "leather_chestplate": [
            "Кожаная куртка"
        ],
        "diamond_chestplate": [
            "Алмазная кираса"
        ],
        "golden_chestplate": [
            "Золотая кираса"
        ],
        "iron_chestplate": [
            "Железная кираса"
        ],
        "chorus_fruit": [
            "Плод коруса"
        ],
        "chorus_fruit_popped": [
            "Приготовленный плод коруса"
        ],
        "cooked_beef": [
            "Жареная говядина"
        ],
        "cooked_chicken": [
            "Жареная курятина"
        ],
        "cooked_porkchop": [
            "Жареная свинина"
        ],
        "chicken": [
            "Сырая курятина"
        ],
        "clay_ball": [
            "Глина"
        ],
        "clock": [
            "Часы"
        ],
        "comparator": [
            "Компаратор"
        ],
        "compass": [
            "Компас"
        ],
        "lodestonecompass": [
            "Магнетитовый компас"
        ],
        "cookie": [
            "Печенье"
        ],
        "crossbow": [
            "Арбалет"
        ],
        "diamond": [
            "Алмаз"
        ],
        "repeater": [
            "Повторитель"
        ],
        "acacia_door": [
            "Дверь из акации"
        ],
        "birch_door": [
            "Дверь из березы"
        ],
        "dark_oak_door": [
            "Дверь из темного дуба"
        ],
        "iron_door": [
            "Железная дверь"
        ],
        "jungle_door": [
            "Дверь из тропического дерева"
        ],
        "wooden_door": [
            "Дверь из дуба"
        ],
        "spruce_door": [
            "Дверь из сосны"
        ],
        "crimson_door": [
            "Багровая дверь"
        ],
        "warped_door": [
            "Искаженная дверь"
        ],
        "dragon_breath": [
            "Дыхание дракона"
        ],
        "dye": [
            "Пузырек с чернилами",
            "Пузырек с чернилами",
            "Красный краситель",
            "Зеленый краситель",
            "Какао-бобы",
            "Лазурит",
            "Фиолетовый краситель",
            "Бирюзовый краситель",
            "Светло-серый краситель",
            "Серый краситель",
            "Розовый краситель",
            "Лаймовый краситель",
            "Желтый краситель",
            "Голубой краситель",
            "Пурпурный краситель",
            "Оранжевый краситель",
            "Костная мука",
            "Черный краситель",
            "Коричневый краситель",
            "Синий краситель",
            "Белый краситель"
        ],
        "egg": [
            "Яйцо"
        ],
        "elytra": [
            "Элитры"
        ],
        "emerald": [
            "Изумруд"
        ],
        "emptyMap": [
            "Пустая карта"
        ],
        "emptyLocatorMap": [
            "Пустая карта с локатором"
        ],
        "emptyPotion": [
            "Пузырек воды"
        ],
        "enchanted_book": [
            "Зачарованная книга"
        ],
        "end_crystal": [
            "Кристалл Края"
        ],
        "end_rod": [
            "Стержень Края"
        ],
        "ender_eye": [
            "Око Края"
        ],
        "ender_pearl": [
            "Жемчуг Края"
        ],
        "experience_bottle": [
            "Пузырек опыта"
        ],
        "feather": [
            "Перо"
        ],
        "fermented_spider_eye": [
            "Маринованный паучий глаз"
        ],
        "fireball": [
            "Огненный шар"
        ],
        "fireworks": [
            "Ракета"
        ],
        "fireworksCharge": [
            "Звездочка"
        ],
        "clownfish": [
            "Тропическая рыба"
        ],
        "cooked_fish": [
            "Жареная треска"
        ],
        "fish": [
            "Сырая треска"
        ],
        "pufferfish": [
            "Рыба фугу"
        ],
        "cooked_salmon": [
            "Жареный лосось"
        ],
        "salmon": [
            "Сырой лосось"
        ],
        "fishing_rod": [
            "Удочка"
        ],
        "flint": [
            "Кремень"
        ],
        "flint_and_steel": [
            "Огниво"
        ],
        "flower_pot": [
            "Цветочный горшок"
        ],
        "frame": [
            "Рамка"
        ],
        "ghast_tear": [
            "Слеза гаста"
        ],
        "glass_bottle": [
            "Пузырек"
        ],
        "gold_nugget": [
            "Золотой самородок"
        ],
        "iron_nugget": [
            "Железный самородок"
        ],
        "diamond_axe": [
            "Алмазный топор"
        ],
        "golden_axe": [
            "Золотой топор"
        ],
        "iron_axe": [
            "Железный топор"
        ],
        "stone_axe": [
            "Каменный топор"
        ],
        "wooden_axe": [
            "Деревянный топор"
        ],
        "chainmail_helmet": [
            "Кольчужный шлем"
        ],
        "leather_helmet": [
            "Кожаный шлем"
        ],
        "diamond_helmet": [
            "Алмазный шлем"
        ],
        "golden_helmet": [
            "Золотой шлем"
        ],
        "iron_helmet": [
            "Железный шлем"
        ],
        "diamond_hoe": [
            "Алмазная мотыга"
        ],
        "golden_hoe": [
            "Золотая мотыга"
        ],
        "iron_hoe": [
            "Железная мотыга"
        ],
        "stone_hoe": [
            "Каменная мотыга"
        ],
        "wooden_hoe": [
            "Деревянная мотыга"
        ],
        "honey_bottle": [
            "Бутыль с медом"
        ],
        "honeycomb": [
            "Медовые соты"
        ],
        "horsearmordiamond": [
            "Алмазные конские доспехи"
        ],
        "horsearmorgold": [
            "Золотые конские доспехи"
        ],
        "horsearmoriron": [
            "Железные конские доспехи"
        ],
        "horsearmorleather": [
            "Кожаные конские доспехи"
        ],
        "gold_ingot": [
            "Золотой слиток"
        ],
        "iron_ingot": [
            "Железный слиток"
        ],
        "netherite_ingot": [
            "Незеритовый слиток"
        ],
        "netherite_scrap": [
            "Незеритовый скрап"
        ],
        "netherite_sword": [
            "Незеритовый меч"
        ],
        "netherite_pickaxe": [
            "Незеритовая кирка"
        ],
        "netherite_axe": [
            "Незеритовый топор"
        ],
        "netherite_shovel": [
            "Незеритовая лопата"
        ],
        "netherite_hoe": [
            "Незеритовая мотыга"
        ],
        "netherite_boots": [
            "Незеритовые ботинки"
        ],
        "netherite_leggings": [
            "Незеритовые поножи"
        ],
        "netherite_chestplate": [
            "Незеритовая кираса"
        ],
        "netherite_helmet": [
            "Незеритовый шлем"
        ],
        "lead": [
            "Поводок"
        ],
        "leather": [
            "Кожа"
        ],
        "leaves": [
            "Листва",
            "Листва дуба",
            "Хвоя",
            "Листва березы",
            "Листва тропического дерева",
            "Листва акации",
            "Листва темного дуба"
        ],
        "chainmail_leggings": [
            "Кольчужные поножи"
        ],
        "leather_leggings": [
            "Кожаные поножи"
        ],
        "diamond_leggings": [
            "Алмазные поножи"
        ],
        "golden_leggings": [
            "Золотые поножи"
        ],
        "iron_leggings": [
            "Железные поножи"
        ],
        "nautilus_shell": [
            "Раковина наутилуса"
        ],
        "heart_of_the_sea": [
            "Сердце моря"
        ],
        "magma_cream": [
            "Сгусток магмы"
        ],
        "map": [
            "Карта"
        ],
        "melon": [
            "Арбуз"
        ],
        "milk": [
            "Ведро с молоком"
        ],
        "minecart": [
            "Вагонетка"
        ],
        "chest_minecart": [
            "Грузовая вагонетка"
        ],
        "command_block_minecart": [
            "Вагонетка с командным блоком"
        ],
        "minecartFurnace": [
            "Самоходная вагонетка"
        ],
        "hopper_minecart": [
            "Вагонетка с загрузочной воронкой"
        ],
        "tnt_minecart": [
            "Вагонетка с динамитом"
        ],
        "trident": [
            "Трезубец"
        ],
        "mushroom_stew": [
            "Тушеные грибы"
        ],
        "muttoncooked": [
            "Жареная баранина"
        ],
        "muttonraw": [
            "Сырая баранина"
        ],
        "name_tag": [
            "Бирка"
        ],
        "netherbrick": [
            "Кирпич Нижнего мира"
        ],
        "quartz": [
            "Кварц Нижнего мира"
        ],
        "nether_wart": [
            "Нарост Нижнего мира"
        ],
        "netherStar": [
            "Звезда Нижнего мира"
        ],
        "painting": [
            "Картина"
        ],
        "paper": [
            "Бумага"
        ],
        "diamond_pickaxe": [
            "Алмазная кирка"
        ],
        "golden_pickaxe": [
            "Золотая кирка"
        ],
        "iron_pickaxe": [
            "Железная кирка"
        ],
        "stone_pickaxe": [
            "Каменная кирка"
        ],
        "wooden_pickaxe": [
            "Деревянная кирка"
        ],
        "porkchop_cooked": [
            "Жареная свинина"
        ],
        "porkchop": [
            "Сырая свинина"
        ],
        "portfolio": [
            "Портфолио"
        ],
        "potato": [
            "Картофель"
        ],
        "baked_potato": [
            "Печеный картофель"
        ],
        "poisonous_potato": [
            "Ядовитый картофель"
        ],
        "potion": [
            "Зелье"
        ],
        "prismarine_crystals": [
            "Кристаллы призмарина"
        ],
        "prismarine_shard": [
            "Осколок призмарина"
        ],
        "pumpkin_pie": [
            "Тыквенный пирог"
        ],
        "cooked_rabbit": [
            "Жареная крольчатина"
        ],
        "rabbit_foot": [
            "Кроличья лапка"
        ],
        "rabbit_hide": [
            "Кроличья шкурка"
        ],
        "rabbit": [
            "Сырая крольчатина"
        ],
        "rabbit_stew": [
            "Тушеный кролик"
        ],
        "record": [
            "Пластинка"
        ],
        "redstone": [
            "Красный камень"
        ],
        "reeds": [
            "Сахарный тростник"
        ],
        "kelp": [
            "Водоросли"
        ],
        "dried_kelp": [
            "Сушеные водоросли"
        ],
        "rotten_flesh": [
            "Гнилая плоть"
        ],
        "ruby": [
            "Рубин"
        ],
        "saddle": [
            "Седло"
        ],
        "wheat_seeds": [
            "Семена"
        ],
        "beetroot_seeds": [
            "Семена свеклы"
        ],
        "melon_seeds": [
            "Семена арбуза"
        ],
        "pumpkin_seeds": [
            "Семена тыквы"
        ],
        "shears": [
            "Ножницы"
        ],
        "diamond_shovel": [
            "Алмазная лопата"
        ],
        "golden_shovel": [
            "Золотая лопата"
        ],
        "iron_shovel": [
            "Железная лопата"
        ],
        "stone_shovel": [
            "Каменная лопата"
        ],
        "wooden_shovel": [
            "Деревянная лопата"
        ],
        "sign": [
            "Табличка из дуба"
        ],
        "spruce_sign": [
            "Табличка из сосны"
        ],
        "birch_sign": [
            "Табличка из березы"
        ],
        "jungle_sign": [
            "Табличка из тропического дерева"
        ],
        "acacia_sign": [
            "Табличка из акации"
        ],
        "darkoak_sign": [
            "Табличка из темного дуба"
        ],
        "crimson_sign": [
            "Багровая табличка"
        ],
        "warped_sign": [
            "Искаженная табличка"
        ],
        "skull": [
            "Череп скелета",
            "Череп скелета",
            "Череп скелета-иссушителя",
            "Голова зомби",
            "Голова",
            "Голова крипера",
            "Голова дракона"
        ],
        "slime_ball": [
            "Слизь"
        ],
        "snowball": [
            "Снежок"
        ],
        "speckled_melon": [
            "Сверкающий арбуз"
        ],
        "spider_eye": [
            "Паучий глаз"
        ],
        "stick": [
            "Палка"
        ],
        "string": [
            "Нить"
        ],
        "sugar": [
            "Сахар"
        ],
        "gunpowder": [
            "Порох"
        ],
        "diamond_sword": [
            "Алмазный меч"
        ],
        "golden_sword": [
            "Золотой меч"
        ],
        "iron_sword": [
            "Железный меч"
        ],
        "stone_sword": [
            "Каменный меч"
        ],
        "wooden_sword": [
            "Деревянный меч"
        ],
        "wheat": [
            "Пшеница"
        ],
        "writable_book": [
            "Книга с пером"
        ],
        "written_book": [
            "Завершенная книга"
        ],
        "glowstone_dust": [
            "Светопыль"
        ],
        "shield": [
            "Щит"
        ],
        "shulker_shell": [
            "Панцирь шалкера"
        ],
        "totem": [
            "Тотем бессмертия"
        ],
        "turtle_helmet": [
            "Панцирь черепахи"
        ],
        "turtle_shell_piece": [
            "Щиток"
        ],
        "phantom_membrane": [
            "Мембрана фантома"
        ],
        "sweet_berries": [
            "Сладкие ягоды"
        ],
        "suspicious_stew": [
            "Подозрительная путаница"
        ],
        "banner_pattern": [
            "Узор знамени"
        ],
        "acaciaFence": [
            "Забор из акации"
        ],
        "acacia_fence_gate": [
            "Ворота из акации"
        ],
        "activator_rail": [
            "Активирующие рельсы"
        ],
        "allow": [
            "Разрешить"
        ],
        "deny": [
            "Запретить"
        ],
        "border_block": [
            "Граница"
        ],
        "anvil": [
            "Наковальня",
            "Наковальня",
            null,
            null,
            null,
            "Поврежденная наковальня",
            null,
            null,
            null,
            "Сильно поврежденная наковальня"
        ],
        "barrier": [
            "Барьер"
        ],
        "beacon": [
            "Маяк"
        ],
        "beehive": [
            "Улей"
        ],
        "bee_nest": [
            "Дикий улей"
        ],
        "target": [
            "Мишень"
        ],
        "bedrock": [
            "Коренная порода"
        ],
        "conduit": [
            "Проводник"
        ],
        "invisibleBedrock": [
            "Невидимая коренная порода"
        ],
        "birchFence": [
            "Забор из березы"
        ],
        "birch_fence_gate": [
            "Ворота из березы"
        ],
        "blast_furnace": [
            "Плавильная печь"
        ],
        "bone_block": [
            "Костяной блок"
        ],
        "coal_block": [
            "Угольный блок"
        ],
        "diamond_block": [
            "Алмазный блок"
        ],
        "emerald_block": [
            "Изумрудный блок"
        ],
        "gold_block": [
            "Золотой блок"
        ],
        "iron_block": [
            "Железный блок"
        ],
        "lapis_block": [
            "Лазуритовый блок"
        ],
        "redstone_block": [
            "Блок красного камня"
        ],
        "bookshelf": [
            "Книжный шкаф"
        ],
        "brick_block": [
            "Блок кирпича"
        ],
        "brown_mushroom": [
            "Коричневый гриб"
        ],
        "wooden_button": [
            "Кнопка из дуба"
        ],
        "acacia_button": [
            "Кнопка из акации"
        ],
        "birch_button": [
            "Кнопка из березы"
        ],
        "dark_oak_button": [
            "Кнопка из темного дуба"
        ],
        "jungle_button": [
            "Кнопка из тропического дерева"
        ],
        "spruce_button": [
            "Кнопка из сосны"
        ],
        "stone_button": [
            "Каменная кнопка"
        ],
        "cactus": [
            "Кактус"
        ],
        "dried_kelp_block": [
            "Блок сушеных водорослей"
        ],
        "carved_pumpkin": [
            "Вырезанная тыква"
        ],
        "chest": [
            "Сундук"
        ],
        "ender_chest": [
            "Сундук Края"
        ],
        "jigsaw": [
            "Блок-фрагмент"
        ],
        "honey_block": [
            "Блок меда"
        ],
        "honeycomb_block": [
            "Блок медовых сот"
        ],
        "lodestone": [
            "Магнетит"
        ],
        "nether_sprouts": [
            "Побеги Нижнего мира"
        ],
        "crimson_stem": [
            "Багровый стебель"
        ],
        "warped_stem": [
            "Искаженный стебель"
        ],
        "stripped_crimson_stem": [
            "Обтесанный багровый стебель"
        ],
        "stripped_warped_stem": [
            "Обтесанный искаженный стебель"
        ],
        "crimson_hyphae": [
            "Багровая гифа"
        ],
        "warped_hyphae": [
            "Искаженная гифа"
        ],
        "stripped_crimson_hyphae": [
            "Полосатая багровая гифа"
        ],
        "stripped_warped_hyphae": [
            "Полосатая искаженная гифа"
        ],
        "crimson_planks": [
            "Багровые доски"
        ],
        "warped_planks": [
            "Искаженные доски"
        ],
        "crimson_trapdoor": [
            "Багровый люк"
        ],
        "warped_trapdoor": [
            "Искаженный люк"
        ],
        "crimson_standing_sign": [
            "Багровая табличка"
        ],
        "warped_standing_sign": [
            "Искаженная табличка"
        ],
        "crimson_wall_sign": [
            "Багровая табличка"
        ],
        "warped_wall_sign": [
            "Искаженная табличка"
        ],
        "crimson_stairs": [
            "Багровые ступени"
        ],
        "warped_stairs": [
            "Искаженные ступени"
        ],
        "crimson_fence": [
            "Багровый забор"
        ],
        "warped_fence": [
            "Искаженный забор"
        ],
        "crimson_fence_gate": [
            "Багровые ворота"
        ],
        "warped_fence_gate": [
            "Искаженные ворота"
        ],
        "crimson_button": [
            "Багровая кнопка"
        ],
        "warped_button": [
            "Искаженная кнопка"
        ],
        "crimson_pressure_plate": [
            "Багровая нажимная пластина"
        ],
        "warped_pressure_plate": [
            "Искаженная нажимная пластина"
        ],
        "crimson_slab": [
            "Багровая плита"
        ],
        "warped_slab": [
            "Искаженная плита"
        ],
        "crimson_double_slab": [
            "Багровая плита"
        ],
        "warped_double_slab": [
            "Искаженная плита"
        ],
        "shroomlight": [
            "Грибосвет"
        ],
        "crimson_nylium": [
            "Багровый нилий"
        ],
        "warped_nylium": [
            "Искаженный нилий"
        ],
        "basalt": [
            "Базальт"
        ],
        "polished_basalt": [
            "Полированный базальт"
        ],
        "blackstone": [
            "Чернокамень"
        ],
        "polished_blackstone_bricks": [
            "Кирпич из полированного чернокамня"
        ],
        "cracked_polished_blackstone_bricks": [
            "Потрескавшийся кирпич из полированного чернокамня"
        ],
        "polished_blackstone_brick_stairs": [
            "Кирпичные ступени из полированного чернокамня"
        ],
        "blackstone_stairs": [
            "Чернокаменные ступени"
        ],
        "blackstone_wall": [
            "Чернокаменная стена"
        ],
        "polished_blackstone_brick_wall": [
            "Стена из кирпича из полированного чернокамня"
        ],
        "chiseled_polished_blackstone": [
            "Резной полированный чернокамень"
        ],
        "gilded_blackstone": [
            "Позолоченный чернокамень"
        ],
        "blackstone_slab": [
            "Чернокаменная плита"
        ],
        "polished_blackstone_brick_slab": [
            "Кирпичная плита из полированного чернокамня"
        ],
        "chain": [
            "Цепь"
        ],
        "soul_soil": [
            "Почва душ"
        ],
        "soul_fire": [
            "Огонь душ"
        ],
        "polished_blackstone": [
            "Полированный чернокамень"
        ],
        "polished_blackstone_stairs": [
            "Ступени из полированного чернокамня"
        ],
        "polished_blackstone_slab": [
            "Плита из полированного чернокамня"
        ],
        "polished_blackstone_pressure_plate": [
            "Нажимная пластина из полированного чернокамня"
        ],
        "polished_blackstone_button": [
            "Кнопка из полированного чернокамня"
        ],
        "polished_blackstone_wall": [
            "Стена из полированного чернокамня"
        ],
        "soul_campfire": [
            "Костер с огнем душ"
        ],
        "chiseled_nether_bricks": [
            "Резной кирпич Нижнего мира"
        ],
        "cracked_nether_bricks": [
            "Потрескавшийся кирпич Нижнего мира"
        ],
        "quartz_bricks": [
            "Кварцевый кирпич"
        ],
        "trapped_chest": [
            "Сундук-ловушка"
        ],
        "shulkerBoxWhite": [
            "Белый ящик шалкера"
        ],
        "shulkerBoxOrange": [
            "Оранжевый ящик шалкера"
        ],
        "shulkerBoxMagenta": [
            "Пурпурный ящик шалкера"
        ],
        "shulkerBoxLightBlue": [
            "Голубой ящик шалкера"
        ],
        "shulkerBoxYellow": [
            "Желтый ящик шалкера"
        ],
        "shulkerBoxLime": [
            "Лаймовый ящик шалкера"
        ],
        "shulkerBoxPink": [
            "Розовый ящик шалкера"
        ],
        "shulkerBoxGray": [
            "Серый ящик шалкера"
        ],
        "shulkerBoxSilver": [
            "Светло-серый ящик шалкера"
        ],
        "shulkerBoxCyan": [
            "Бирюзовый ящик шалкера"
        ],
        "shulkerBoxPurple": [
            "Фиолетовый ящик шалкера"
        ],
        "shulkerBoxBlue": [
            "Синий ящик шалкера"
        ],
        "shulkerBoxBrown": [
            "Коричневый ящик шалкера"
        ],
        "shulkerBoxGreen": [
            "Зеленый ящик шалкера"
        ],
        "shulkerBoxRed": [
            "Красный ящик шалкера"
        ],
        "shulkerBoxBlack": [
            "Черный ящик шалкера"
        ],
        "shulkerBox": [
            "Ящик шалкера"
        ],
        "chorus_flower": [
            "Цветок коруса"
        ],
        "chorus_plant": [
            "Корус"
        ],
        "stained_glass": [
            "Белое стекло",
            "Белое стекло",
            "Оранжевое стекло",
            "Пурпурное стекло",
            "Голубое стекло",
            "Желтое стекло",
            "Лаймовое стекло",
            "Розовое стекло",
            "Серое стекло",
            "Светло-серое стекло",
            "Бирюзовое стекло",
            "Фиолетовое стекло",
            "Синее стекло",
            "Коричневое стекло",
            "Зеленое стекло",
            "Красное стекло",
            "Черное стекло"
        ],
        "stained_glass_pane": [
            "Белая стеклянная панель",
            "Белая стеклянная панель",
            "Оранжевая стеклянная панель",
            "Пурпурная стеклянная панель",
            "Голубая стеклянная панель",
            "Желтая стеклянная панель",
            "Лаймовая стеклянная панель",
            "Розовая стеклянная панель",
            "Серая стеклянная панель",
            "Светло-серая стеклянная панель",
            "Бирюзовая стеклянная панель",
            "Фиолетовая стеклянная панель",
            "Синяя стеклянная панель",
            "Коричневая стеклянная панель",
            "Зеленая стеклянная панель",
            "Красная стеклянная панель",
            "Черная стеклянная панель"
        ],
        "clay": [
            "Блок глины"
        ],
        "hardened_clay": [
            "Терракота"
        ],
        "stained_hardened_clay": [
            "Терракота",
            "Белая терракота",
            "Оранжевая терракота",
            "Пурпурная терракота",
            "Голубая терракота",
            "Желтая терракота",
            "Лаймовая терракота",
            "Розовая терракота",
            "Серая терракота",
            "Светло-серая терракота",
            "Бирюзовая терракота",
            "Фиолетовая терракота",
            "Синяя терракота",
            "Коричневая терракота",
            "Зеленая терракота",
            "Красная терракота",
            "Черная терракота"
        ],
        "structure_block": [
            "Структурный блок"
        ],
        "structure_void": [
            "Структурная пустота"
        ],
        "wool": [
            "Шерсть",
            "Белая шерсть",
            "Оранжевая шерсть",
            "Пурпурная шерсть",
            "Голубая шерсть",
            "Желтая шерсть",
            "Лаймовая шерсть",
            "Розовая шерсть",
            "Серая шерсть",
            "Светло-серая шерсть",
            "Бирюзовая шерсть",
            "Фиолетовая шерсть",
            "Синяя шерсть",
            "Коричневая шерсть",
            "Зеленая шерсть",
            "Красная шерсть",
            "Черная шерсть"
        ],
        "cobblestone_wall": [
            "Стена из булыжника",
            "Стена из булыжника",
            "Стена из замшелого булыжника",
            "Стена из гранита",
            "Стена из диорита",
            "Стена из андезита",
            "Стена из песчаника",
            "Стена из кирпича",
            "Стена из каменного кирпича",
            "Стена из замшелого каменного кирпича",
            "Стена из каменного кирпича Края",
            "Стена из кирпича Нижнего мира",
            "Призмариновая стена",
            "Стена из красного песчаника",
            "Стена из красного кирпича Нижнего мира"
        ],
        "cocoa": [
            "Какао"
        ],
        "command_block": [
            "Командный блок"
        ],
        "composter": [
            "Компостер"
        ],
        "light_block": [
            "Светлый блок"
        ],
        "repeating_command_block": [
            "Циклический командный блок"
        ],
        "chain_command_block": [
            "Цепной командный блок"
        ],
        "darkOakFence": [
            "Забор из темного дуба"
        ],
        "dark_oak_fence_gate": [
            "Ворота из темного дуба"
        ],
        "daylight_detector": [
            "Датчик дневного света"
        ],
        "deadbush": [
            "Сухой куст"
        ],
        "detector_rail": [
            "Нажимные рельсы"
        ],
        "dirt": [
            "Земля",
            "Земля",
            "Грубая земля"
        ],
        "podzol": [
            "Подзол"
        ],
        "purpur_block": [
            "Пурпурный блок",
            "Пурпурный блок",
            "Обработанный пурпур",
            "Пурпурная колонна"
        ],
        "dispenser": [
            "Раздатчик"
        ],
        "doorWood": [
            "Деревянная дверь"
        ],
        "double_plant": [
            "Растение",
            "Подсолнух",
            "Сирень",
            "Двойная высокая трава",
            "Раскидистый папоротник",
            "Розовый куст",
            "Пион"
        ],
        "dragon_egg": [
            "Яйцо дракона"
        ],
        "dropper": [
            "Выбрасыватель"
        ],
        "enchanting_table": [
            "Стол зачарований"
        ],
        "enderChest": [
            "Сундук Края"
        ],
        "end_portal_frame": [
            "Портал Края"
        ],
        "farmland": [
            "Ферма"
        ],
        "fletching_table": [
            "Стол лучника"
        ],
        "fence": [
            "Забор из дуба"
        ],
        "fence_gate": [
            "Ворота из дуба"
        ],
        "iron_bars": [
            "Железная решетка"
        ],
        "fire": [
            "Огонь"
        ],
        "yellow_flower": [
            "Цветок",
            "Одуванчик"
        ],
        "red_flower": [
            "Цветок",
            "Мак",
            "Синяя орхидея",
            "Лук",
            "Голубой василек",
            "Красный тюльпан",
            "Оранжевый тюльпан",
            "Белый тюльпан",
            "Розовый тюльпан",
            "Ромашка",
            "Василек",
            "Ландыш"
        ],
        "wither_rose": [
            "Роза Иссушителя"
        ],
        "furnace": [
            "Печка"
        ],
        "glass": [
            "Стекло"
        ],
        "golden_rail": [
            "Электрические рельсы"
        ],
        "grass": [
            "Блок травы"
        ],
        "grass_path": [
            "Травяная дорожка"
        ],
        "gravel": [
            "Гравий"
        ],
        "hay_block": [
            "Сноп сена"
        ],
        "netherrack": [
            "Камень Нижнего мира"
        ],
        "soul_sand": [
            "Песок душ"
        ],
        "hopper": [
            "Воронка"
        ],
        "ice": [
            "Лед"
        ],
        "packed_ice": [
            "Плотный лед"
        ],
        "blue_ice": [
            "Синий лед"
        ],
        "iron_trapdoor": [
            "Железный люк"
        ],
        "jukebox": [
            "Проигрыватель"
        ],
        "jungleFence": [
            "Забор из тропического дерева"
        ],
        "jungle_fence_gate": [
            "Ворота из тропического дерева"
        ],
        "ladder": [
            "Лестница"
        ],
        "flowing_lava": [
            "Лава"
        ],
        "leaves2": [
            "Листва акации",
            "Листва акации",
            "Листва темного дуба"
        ],
        "lever": [
            "Рычаг"
        ],
        "glowstone": [
            "Светящийся камень"
        ],
        "lit_pumpkin": [
            "Светильник Джека"
        ],
        "lockedchest": [
            "Запертый сундук"
        ],
        "log2": [
            "Акациевое бревно",
            "Акациевое бревно",
            "Бревно темного дуба"
        ],
        "log": [
            "Бревно",
            "Дубовое бревно",
            "Сосновое бревно",
            "Березовое бревно",
            "Бревно тропического дерева"
        ],
        "magma": [
            "Блок магмы"
        ],
        "melon_block": [
            "Арбуз"
        ],
        "mob_spawner": [
            "Спаунер монстров"
        ],
        "monster_egg": [
            "Зараженный камень",
            "Зараженный камень",
            "Зараженный булыжник",
            "Зараженный каменный кирпич",
            "Зараженный замшелый каменный кирпич",
            "Зараженный потрескавшийся каменный кирпич",
            "Зараженный резной каменный кирпич"
        ],
        "mushroom": [
            "Гриб"
        ],
        "noteblock": [
            "Музыкальный блок"
        ],
        "mycelium": [
            "Мицелий"
        ],
        "nether_brick": [
            "Блок кирпича Нижнего мира"
        ],
        "red_nether_brick": [
            "Красный кирпич Нижнего мира"
        ],
        "nether_brick_fence": [
            "Забор из кирпичей Нижнего мира"
        ],
        "quartz_ore": [
            "Кварцевая руда Нижнего мира"
        ],
        "netherreactor": [
            "Ядро реактора Нижнего мира"
        ],
        "nether_wart_block": [
            "Блок нароста Нижнего мира"
        ],
        "warped_wart_block": [
            "Блок искаженного нароста"
        ],
        "unlit_redstone_torch": [
            "Факел из красного камня"
        ],
        "redstone_torch": [
            "Факел из красного камня"
        ],
        "soul_torch": [
            "Факел с огнем душ"
        ],
        "obsidian": [
            "Обсидиан"
        ],
        "coal_ore": [
            "Угольная руда"
        ],
        "diamond_ore": [
            "Алмазная руда"
        ],
        "emerald_ore": [
            "Изумрудная руда"
        ],
        "gold_ore": [
            "Золотая руда"
        ],
        "iron_ore": [
            "Железная руда"
        ],
        "lapis_ore": [
            "Лазуритовая руда"
        ],
        "redstone_ore": [
            "Руда красного камня"
        ],
        "oreRuby": [
            "Рубиновая руда"
        ],
        "observer": [
            "Наблюдатель"
        ],
        "piston": [
            "Поршень"
        ],
        "sticky_piston": [
            "Липкий поршень"
        ],
        "portal": [
            "Портал"
        ],
        "potatoes": [
            "Картофель"
        ],
        "stone_pressure_plate": [
            "Каменная нажимная пластина"
        ],
        "wooden_pressure_plate": [
            "Нажимная пластина из дуба"
        ],
        "acacia_pressure_plate": [
            "Нажимная пластина из акации"
        ],
        "birch_pressure_plate": [
            "Нажимная пластина из березы"
        ],
        "dark_oak_pressure_plate": [
            "Нажимная пластина из темного дуба"
        ],
        "jungle_pressure_plate": [
            "Нажимная пластина из тропического дерева"
        ],
        "spruce_pressure_plate": [
            "Нажимная пластина из сосны"
        ],
        "prismarine": [
            "Призмарин",
            "Призмарин",
            "Призмариновые кирпичи",
            "Темный призмарин"
        ],
        "pumpkin": [
            "Тыква"
        ],
        "pumpkin_stem": [
            "Стебель тыквы"
        ],
        "quartz_block": [
            "Кварцевый блок",
            "Кварцевый блок",
            "Резной кварцевый блок",
            "Кварцевая колонна",
            "Гладкий блок из кварца"
        ],
        "rail": [
            "Рельсы"
        ],
        "red_mushroom": [
            "Красный гриб"
        ],
        "crimson_fungus": [
            "Багровый грибок"
        ],
        "warped_fungus": [
            "Искаженный грибок"
        ],
        "red_mushroom_block": [
            "Блок красного гриба"
        ],
        "red_sandstone": [
            "Красный песчаник",
            "Красный песчаник",
            "Резной красный песчаник",
            "Тесаный красный песчаник",
            "Гладкий красный песчаник"
        ],
        "redstone_wire": [
            "Пыль красного камня"
        ],
        "redstone_lamp": [
            "Лампа из красного камня"
        ],
        "sand": [
            "Песок",
            "Песок",
            "Красный песок"
        ],
        "sandstone": [
            "Песчаник",
            "Песчаник",
            "Обработанный песчаник",
            "Тесаный песчаник",
            "Гладкий песчаник"
        ],
        "sapling": [
            "Саженец дуба",
            "Саженец дуба",
            "Саженец сосны",
            "Саженец березы",
            "Саженец тропического дерева",
            "Саженец акации",
            "Саженец темного дуба"
        ],
        "seaLantern": [
            "Морской фонарь"
        ],
        "standing_sign": [
            "Табличка"
        ],
        "spruce_standing_sign": [
            "Табличка из сосны"
        ],
        "birch_standing_sign": [
            "Табличка из березы"
        ],
        "jungle_standing_sign": [
            "Табличка из тропического дерева"
        ],
        "acacia_standing_sign": [
            "Табличка из акации"
        ],
        "darkoak_standing_sign": [
            "Табличка из темного дуба"
        ],
        "slime": [
            "Блок слизи"
        ],
        "snow": [
            "Снег"
        ],
        "sponge": [
            "Губка",
            "Губка",
            "Мокрая губка"
        ],
        "spruceFence": [
            "Забор из сосны"
        ],
        "spruce_fence_gate": [
            "Ворота из сосны"
        ],
        "brick_stairs": [
            "Кирпичные ступени"
        ],
        "nether_brick_stairs": [
            "Ступени из кирпичей Нижнего мира"
        ],
        "quartz_stairs": [
            "Кварцевые ступени"
        ],
        "smooth_quartz_stairs": [
            "Ступени из гладкого кварца"
        ],
        "red_sandstone_stairs": [
            "Ступени из красного песчаника"
        ],
        "sandstone_stairs": [
            "Ступени из песчаника"
        ],
        "stone_stairs": [
            "Ступени из булыжника"
        ],
        "normal_stone_stairs": [
            "Ступени из камня"
        ],
        "stone_brick_stairs": [
            "Ступени из каменных кирпичей"
        ],
        "oak_stairs": [
            "Ступени из древесины дуба"
        ],
        "acacia_stairs": [
            "Ступени из древесины акации"
        ],
        "birch_stairs": [
            "Ступени из древесины березы"
        ],
        "dark_oak_stairs": [
            "Ступени из древесины темного дуба"
        ],
        "jungle_stairs": [
            "Ступени из древесины тропического дерева"
        ],
        "spruce_stairs": [
            "Ступени из древесины сосны"
        ],
        "purpur_stairs": [
            "Пурпурные ступени"
        ],
        "prismarine_stairs": [
            "Призмариновые ступени"
        ],
        "dark_prismarine_stairs": [
            "Ступени из темного призмарина"
        ],
        "prismarine_bricks_stairs": [
            "Ступени из призмариновых кирпичей"
        ],
        "granite_stairs": [
            "Ступени из гранита"
        ],
        "diorite_stairs": [
            "Ступени из диорита"
        ],
        "andesite_stairs": [
            "Ступени из андезита"
        ],
        "polished_granite_stairs": [
            "Ступени из полированного гранита"
        ],
        "polished_diorite_stairs": [
            "Ступени из полированного диорита"
        ],
        "polished_andesite_stairs": [
            "Ступени из полированного андезита"
        ],
        "mossy_stone_brick_stairs": [
            "Ступени из замшелого каменного кирпича"
        ],
        "smooth_red_sandstone_stairs": [
            "Ступени из гладкого красного песчаника"
        ],
        "smooth_sandstone_stairs": [
            "Ступени из гладкого песчаника"
        ],
        "end_brick_stairs": [
            "Ступени из каменного кирпича Края"
        ],
        "mossy_cobblestone_stairs": [
            "Ступени из замшелого булыжника"
        ],
        "red_nether_brick_stairs": [
            "Ступени из красного кирпича Нижнего мира"
        ],
        "smooth_stone": [
            "Гладкий камень"
        ],
        "standing_banner": [
            "Знамя",
            "Черное знамя",
            "Красное знамя",
            "Зеленое знамя",
            "Коричневое знамя",
            "Синее знамя",
            "Фиолетовое знамя",
            "Бирюзовое знамя",
            "Светло-серое знамя",
            "Серое знамя",
            "Розовое знамя",
            "Лаймовое знамя",
            "Желтое знамя",
            "Голубое знамя",
            "Пурпурное знамя",
            "Оранжевое знамя",
            "Знамя"
        ],
        "stone": [
            "Камень",
            "Камень",
            "Гранит",
            "Полированный гранит",
            "Диорит",
            "Полированный диорит",
            "Андезит",
            "Полированный андезит"
        ],
        "cobblestone": [
            "Булыжник"
        ],
        "stonebrick": [
            "Каменные кирпичи",
            "Каменные кирпичи",
            "Замшелые каменные кирпичи",
            "Резные каменные кирпичи"
        ],
        "stonecutter": [
            "Камнетес"
        ],
        "stonecutter_block": [
            "Камнетес"
        ],
        "mossy_cobblestone": [
            "Замшелый булыжник"
        ],
        "double_stone_slab": [
            "Каменная плита",
            "Каменная плита",
            "Плита из песчаника",
            "Деревянная плита",
            "Плита из булыжника",
            "Кирпичная плита",
            "Плита из каменных кирпичей",
            "Кварцевая плита",
            "Плита из кирпичей Нижнего мира"
        ],
        "stone_slab": [
            "Каменная плита",
            "Плита из гладкого камня",
            "Плита из песчаника",
            "Деревянная плита",
            "Плита из булыжника",
            "Кирпичная плита",
            "Плита из каменных кирпичей",
            "Кварцевая плита",
            "Плита из кирпичей Нижнего мира"
        ],
        "double_stone_slab2": [
            "Плита из красного песчаника",
            "Плита из красного песчаника"
        ],
        "stone_slab2": [
            "Плита из красного песчаника",
            "Плита из красного песчаника",
            "Пурпурная плита",
            "Призмариновая плита",
            "Плита из призмариновых кирпичей",
            "Плита из темного призмарина",
            "Плита из замшелого булыжника",
            "Плита из гладкого песчаника",
            "Плита из красного кирпича Нижнего мира"
        ],
        "stone_slab3": [
            "Плита из каменного кирпича Края",
            "Плита из каменного кирпича Края",
            "Плита из гладкого красного песчаника",
            "Плита из полированного андезита",
            "Плита из андезита",
            "Плита из диорита",
            "Плита из полированного диорита",
            "Плита из гранита",
            "Плита из полированного гранита"
        ],
        "stone_slab4": [
            "Плита из замшелого каменного кирпича",
            "Плита из замшелого каменного кирпича",
            "Плита из гладкого кварца",
            "Плита из камня",
            "Плита из тесаного песчаника",
            "Плита из тесаного красного песчаника"
        ],
        "coral_block": [
            "Блок трубчатых кораллов",
            "Блок трубчатых кораллов",
            "Блок кораллов-мозговиков",
            "Блок пузырчатых кораллов",
            "Блок огненных кораллов",
            "Блок роговых кораллов",
            "Блок мертвых трубчатых кораллов",
            "Блок мертвых кораллов-мозговиков",
            "Блок мертвых пузырчатых кораллов",
            "Блок мертвых огненных кораллов",
            "Блок мертвых роговых кораллов"
        ],
        "tallgrass": [
            "Трава",
            "Трава",
            "Папоротник"
        ],
        "seagrass": [
            "Морская трава",
            "Морская трава"
        ],
        "sea_pickle": [
            "Морской огурец"
        ],
        "turtle_egg": [
            "Яйцо морской черепахи"
        ],
        "coral": [
            "Трубчатый коралл",
            "Трубчатый коралл",
            "Коралл-мозговик",
            "Пузырчатый коралл",
            "Огненный коралл",
            "Роговой коралл",
            "Мертвый трубчатый коралл",
            "Мертвый трубчатый коралл",
            "Мертвый пузырчатый коралл",
            "Мертвый огненный коралл",
            "Мертвый роговой коралл"
        ],
        "coral_fan": [
            "Веер из трубчатых кораллов",
            "Веер из трубчатых кораллов",
            "Веер из кораллов-мозговиков",
            "Веер из пузырчатых кораллов",
            "Веер из огненных кораллов",
            "Веер из роговых кораллов"
        ],
        "coral_fan_dead": [
            "Веер из мертвых трубчатых кораллов",
            "Веер из мертвых трубчатых кораллов",
            "Веер из мертвых кораллов-мозговиков",
            "Веер из мертвых пузырчатых кораллов",
            "Веер из мертвых огненных кораллов",
            "Веер из мертвых роговых кораллов"
        ],
        "glass_pane": [
            "Стеклянная панель"
        ],
        "tnt": [
            "Динамит"
        ],
        "snow_layer": [
            "Снежный покров"
        ],
        "torch": [
            "Факел"
        ],
        "trapdoor": [
            "Люк из дуба"
        ],
        "acacia_trapdoor": [
            "Люк из акации"
        ],
        "birch_trapdoor": [
            "Люк из березы"
        ],
        "dark_oak_trapdoor": [
            "Люк из темного дуба"
        ],
        "jungle_trapdoor": [
            "Люк из тропического дерева"
        ],
        "spruce_trapdoor": [
            "Люк из сосны"
        ],
        "tripWire": [
            "Растяжка"
        ],
        "tripwire_hook": [
            "Натяжной датчик"
        ],
        "vine": [
            "Лоза"
        ],
        "weeping_vines": [
            "Плакучая лоза"
        ],
        "twisting_vines": [
            "Извилистые лозы"
        ],
        "flowing_water": [
            "Вода"
        ],
        "water": [
            "Вода"
        ],
        "waterlily": [
            "Кувшинка"
        ],
        "web": [
            "Паутина"
        ],
        "heavy_weighted_pressure_plate": [
            "Утяжеленная нажимная пластина (тяжелая)"
        ],
        "light_weighted_pressure_plate": [
            "Утяжеленная нажимная пластина (легкая)"
        ],
        "end_stone": [
            "Камень Края"
        ],
        "end_bricks": [
            "Кирпичи из камня Края"
        ],
        "planks": [
            "Доски",
            "Доски из древесины дуба",
            "Доски из древесины сосны",
            "Доски из древесины березы",
            "Доски из тропического дерева",
            "Доски из древесины акации",
            "Доски из древесины темного дуба"
        ],
        "wooden_slab": [
            "Деревянная плита",
            "Плита из древесины дуба",
            "Плита из древесины сосны",
            "Плита из древесины березы",
            "Плита из тропического дерева",
            "Плита из древесины акации",
            "Плита из древесины темного дуба"
        ],
        "carpet": [
            "Ковер",
            "Черный ковер",
            "Красный ковер",
            "Зеленый ковер",
            "Коричневый ковер",
            "Синий ковер",
            "Фиолетовый ковер",
            "Бирюзовый ковер",
            "Светло-серый ковер",
            "Серый ковер",
            "Розовый ковер",
            "Лаймовый ковер",
            "Желтый ковер",
            "Голубой ковер",
            "Пурпурный ковер",
            "Оранжевый ковер",
            "Белый ковер"
        ],
        "crafting_table": [
            "Верстак"
        ],
        "white_glazed_terracotta": [
            "Белая глазурованная терракота",
            "Белая глазурованная терракота"
        ],
        "orange_glazed_terracotta": [
            "Оранжевая глазурованная терракота",
            "Оранжевая глазурованная терракота"
        ],
        "magenta_glazed_terracotta": [
            "Пурпурная глазурованная терракота",
            "Пурпурная глазурованная терракота"
        ],
        "light_blue_glazed_terracotta": [
            "Голубая глазурованная терракота",
            "Голубая глазурованная терракота"
        ],
        "yellow_glazed_terracotta": [
            "Желтая глазурованная терракота",
            "Желтая глазурованная терракота"
        ],
        "lime_glazed_terracotta": [
            "Лаймовая глазурованная терракота",
            "Лаймовая глазурованная терракота"
        ],
        "pink_glazed_terracotta": [
            "Розовая глазурованная терракота",
            "Розовая глазурованная терракота"
        ],
        "gray_glazed_terracotta": [
            "Серая глазурованная терракота",
            "Серая глазурованная терракота"
        ],
        "silver_glazed_terracotta": [
            "Светло-серая глазурованная терракота",
            "Светло-серая глазурованная терракота"
        ],
        "cyan_glazed_terracotta": [
            "Бирюзовая глазурованная терракота",
            "Бирюзовая глазурованная терракота"
        ],
        "purple_glazed_terracotta": [
            "Фиолетовая глазурованная терракота",
            "Фиолетовая глазурованная терракота"
        ],
        "blue_glazed_terracotta": [
            "Синяя глазурованная терракота",
            "Синяя глазурованная терракота"
        ],
        "brown_glazed_terracotta": [
            "Коричневая глазурованная терракота",
            "Коричневая глазурованная терракота"
        ],
        "green_glazed_terracotta": [
            "Зеленая глазурованная терракота",
            "Зеленая глазурованная терракота"
        ],
        "red_glazed_terracotta": [
            "Красная глазурованная терракота",
            "Красная глазурованная терракота"
        ],
        "black_glazed_terracotta": [
            "Черная глазурованная терракота",
            "Черная глазурованная терракота"
        ],
        "concrete": [
            "Белый бетон",
            "Белый бетон",
            "Оранжевый бетон",
            "Пурпурный бетон",
            "Голубой бетон",
            "Желтый бетон",
            "Лаймовый бетон",
            "Розовый бетон",
            "Серый бетон",
            "Светло-серый бетон",
            "Бирюзовый бетон",
            "Фиолетовый бетон",
            "Синий бетон",
            "Коричневый бетон",
            "Зеленый бетон",
            "Красный бетон",
            "Черный бетон"
        ],
        "glazedTerracottaWhite": [
            "Белая глазурованная терракота"
        ],
        "glazedTerracottaOrange": [
            "Оранжевая глазурованная терракота"
        ],
        "glazedTerracottaMagenta": [
            "Пурпурная глазурованная терракота"
        ],
        "glazedTerracottaLightBlue": [
            "Голубая глазурованная терракота"
        ],
        "glazedTerracottaYellow": [
            "Желтая глазурованная терракота"
        ],
        "glazedTerracottaLime": [
            "Лаймовая глазурованная терракота"
        ],
        "glazedTerracottaPink": [
            "Розовая глазурованная терракота"
        ],
        "glazedTerracottaGray": [
            "Серая глазурованная терракота"
        ],
        "glazedTerracottaSilver": [
            "Светло-серая глазурованная терракота"
        ],
        "glazedTerracottaCyan": [
            "Бирюзовая глазурованная терракота"
        ],
        "glazedTerracottaPurple": [
            "Фиолетовая глазурованная терракота"
        ],
        "glazedTerracottaBlue": [
            "Синяя глазурованная терракота"
        ],
        "glazedTerracottaBrown": [
            "Коричневая глазурованная терракота"
        ],
        "glazedTerracottaGreen": [
            "Зеленая глазурованная терракота"
        ],
        "glazedTerracottaRed": [
            "Красная глазурованная терракота"
        ],
        "glazedTerracottaBlack": [
            "Черная глазурованная терракота"
        ],
        "concretePowder": [
            "Белый цемент",
            "Белый цемент",
            "Оранжевый цемент",
            "Пурпурный цемент",
            "Голубой цемент",
            "Желтый цемент",
            "Лаймовый цемент",
            "Розовый цемент",
            "Серый цемент",
            "Светло-серый цемент",
            "Бирюзовый цемент",
            "Фиолетовый цемент",
            "Синий цемент",
            "Коричневый цемент",
            "Зеленый цемент",
            "Красный цемент",
            "Черный цемент"
        ],
        "stripped_spruce_log": [
            "Ошкуренное сосновое бревно"
        ],
        "stripped_dark_oak_log": [
            "Ошкуренное бревно темного дуба"
        ],
        "stripped_birch_log": [
            "Ошкуренное березовое бревно"
        ],
        "stripped_jungle_log": [
            "Ошкуренное бревно тропического дерева"
        ],
        "stripped_oak_log": [
            "Ошкуренное дубовое бревно"
        ],
        "stripped_acacia_log": [
            "Ошкуренное акациевое бревно"
        ],
        "bamboo": [
            "Бамбук"
        ],
        "scaffolding": [
            "Строительные леса"
        ],
        "grindstone": [
            "Точило"
        ],
        "cartography_table": [
            "Картографический стол"
        ],
        "lantern": [
            "Фонарь"
        ],
        "soul_lantern": [
            "Фонарь с огнем душ"
        ],
        "smoker": [
            "Коптильня"
        ],
        "smithing_table": [
            "Кузнечный станок"
        ],
        "barrel": [
            "Бочка"
        ],
        "campfire": [
            "Костер"
        ],
        "loom": [
            "Ткацкий станок"
        ],
        "lectern": [
            "Кафедра"
        ],
        "sweet_berry_bush": [
            "Куст сладких ягод"
        ],
        "wood": [
            "Древесина дуба",
            "Древесина дуба",
            "Древесина сосны",
            "Древесина березы",
            "Древесина тропического дерева",
            "Древесина акации",
            "Древесина темного дуба",
            null,
            null,
            "Ошкуренная древесина дуба",
            "Ошкуренная древесина сосны",
            "Ошкуренная древесина березы",
            "Ошкуренная древесина тропического дерева",
            "Ошкуренная древесина акации",
            "Ошкуренная древесина темного дуба"
        ],
        "netherite_block": [
            "Блок незерита"
        ],
        "ancient_debris": [
            "Древние обломки"
        ],
        "nether_gold_ore": [
            "Золотая руда Нижнего мира"
        ],
        "respawn_anchor": [
            "Якорь возрождения"
        ],
        "crying_obsidian": [
            "Плачущий обсидиан"
        ]
    }
};
freeze(lang_data);
export = lang_data;
