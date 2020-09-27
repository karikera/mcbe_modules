
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
    id: "es_MX" as LangId,
    commands:{
        "ability_description": "Establece la habilidad de un jugador.",
        "ability_noability": "No hay ninguna habilidad llamada \"%1$s\" disponible.",
        "ability_granted": "Recibiste la habilidad \"%1$s\".",
        "ability_revoked": "Perdiste la habilidad \"%1$s\".",
        "ability_success": "Se actualizó la habilidad",
        "achievement_alreadyHave": "El jugador %1$s ya tiene el logro %2$s.",
        "achievement_description": "Le da o le quita un logro a un jugador.",
        "achievement_dontHave": "El jugador %1$s no tiene el logro %2$s.",
        "achievement_give_success_all": "Se dieron todos los logros correctamente a %1$s.",
        "achievement_give_success_one": "Se dio con éxito a %1$s la estadística %2$s.",
        "achievement_statTooLow": "El jugador %1$s no tiene la estadística %2$s.",
        "achievement_take_success_all": "Se obtuvieron correctamente todos los logros de %1$s.",
        "achievement_take_success_one": "Se obtuvo correctamente la estadística %1$s de %2$s.",
        "achievement_unknownAchievement": "Logro o estadística \"%1$s\" desconocido",
        "agent_attack_success": "Ataque de agente exitoso",
        "agent_attack_failed": "Ataque de agente fallido",
        "agent_collect_success": "Recolección de agente exitosa",
        "agent_collect_failed": "Recolección de agente fallida",
        "agent_createagent_success": "Agente creado",
        "agent_createagent_failed": "No se pudo crear el agente",
        "agent_destroy_success": "El agente destruyó un bloque",
        "agent_destroy_failed": "Destrucción de agente fallida",
        "agent_detect_success": "Detección de agente exitosa",
        "agent_detect_failed": "Detección de agente fallida",
        "agent_detectredstone_success": "El agente detectó piedra rojiza",
        "agent_detectredstone_failed": "El agente no detectó piedra rojiza",
        "agent_drop_success": "El agente soltó con éxito",
        "agent_drop_failed": "El agente no soltó",
        "agent_dropall_success": "El agente soltó todo",
        "agent_dropall_failed": "El agente no soltó todo",
        "agent_getitemcount_success": "El agente consiguió el recuento de objetos",
        "agent_getitemcount_failed": "El agente no consiguió el recuento de objetos",
        "agent_getitemspace_success": "El agente consiguió un espacio para objetos",
        "agent_getitemspace_failed": "El agente no consiguió un espacio para objetos",
        "agent_getitemdetail_success": "El agente consiguió información sobre el objeto",
        "agent_getitemdetail_failed": "El agente no consiguió información sobre el objeto",
        "agent_getposition_success": "El agente consiguió la posición",
        "agent_getposition_failed": "El agente no consiguió la posición",
        "agent_inspect_success": "Inspección de agente exitosa",
        "agent_inspect_failed": "Inspección de agente fallida",
        "agent_inspectdata_success": "Inspección correcta de datos del agente",
        "agent_inspectdata_failed": "Error en la inspección de datos del agente",
        "agent_move_success": "El agente se movió",
        "agent_move_failed": "No se pudo mover al agente",
        "agent_outofrange": "No se pueden ejecutar comandos, el agente está fuera de alcance",
        "agent_place_success": "Ubicación de agente exitosa",
        "agent_place_failed": "No se pudo ubicar al agente",
        "agent_setitem_success": "El agente colocó el objeto con éxito",
        "agent_setitem_failed": "El agente no pudo colocar el objeto",
        "agent_turn_success": "Giro de agente exitoso",
        "agent_turn_failed": "No se pudo girar al agente",
        "agent_till_success": "Inclinación de agente exitosa",
        "agent_till_failed": "No se pudo inclinar al agente",
        "agent_tpagent_description": "Teletransporta a tu agente.",
        "agent_tpagent_success": "Agente teletransportado",
        "agent_tpagent_failed": "No se pudo teletransportar al agente",
        "agent_transfer_success": "Transferencia de agente exitosa",
        "agent_transfer_failed": "No se pudo transferir al agente",
        "always_day": "Ciclo día-noche %1$s",
        "always_day_locked": "Ciclo día-noche bloqueado",
        "always_day_unlocked": "Ciclo día-noche desbloqueado",
        "ban_description": "Agrega un jugador a la lista de baneos.",
        "autocomplete_a": "todos los jugadores",
        "autocomplete_c": "mi Agent",
        "autocomplete_e": "todas las entidades",
        "autocomplete_p": "jugador más cercano",
        "autocomplete_r": "jugador al azar",
        "autocomplete_s": "tú mismo",
        "autocomplete_v": "todos los Agents",
        "ban_failed": "No se pudo banear al jugador %1$s.",
        "ban_success": "Jugador %1$s baneado",
        "banip_description": "Agrega una dirección IP a la lista de baneos.",
        "banip_invalid": "Introdujiste una dirección IP no válida o de un jugador que no está conectado",
        "banip_success": "Dirección IP %1$s baneada",
        "banip_success_players": "Dirección IP %1$s baneada perteneciente a %2$s",
        "banlist_ips": "Hay %1$d direcciones IP totales baneadas:",
        "banlist_players": "Hay %1$d jugadores totales baneados:",
        "blockdata_description": "Modifica la etiqueta de datos de un bloque.",
        "blockdata_placeFailed": "No puedes ubicar bloques aquí",
        "blockdata_destroyFailed": "No puedes cavar aquí",
        "blockdata_failed": "La etiqueta de datos no cambió: %1$s.",
        "blockdata_notValid": "El bloque objetivo no puede tener datos",
        "blockdata_outOfWorld": "No se puede cambiar el bloque fuera del mundo",
        "blockdata_success": "Datos del bloque actualizados a: %1$s",
        "blockdata_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "bossbar_add_success": "Se creó la barra de jefe personalizada [%1$s]",
        "bossbar_add_failure_invalid": "El ID de la barra de jefe no es válido. El ID debe tener el formato espaciodenombre:id o id (de forma predeterminada, muestra el espacio de nombre de minecraft).",
        "bossbar_add_failure_exists": "Ya existe una barra de jefe con el ID '%1$s'",
        "bossbar_description": "Sirve para crear y modificar barras de jefes",
        "bossbar_get_max": "La barra de jefe personalizada [%1$s] tiene un máximo de %2$d",
        "bossbar_get_players": "La barra de jefe personalizada [%1$s] tiene %2$s jugadores en línea: %3$s",
        "bossbar_get_players_none": "La barra de jefe personalizada [%1$s] no tiene ningún jugador en línea",
        "bossbar_get_players_one": "La barra de jefe personalizada [%1$s] tiene 1 jugador en línea: %2$s",
        "bossbar_get_value": "La barra de jefe personalizada [%1$s] tiene un valor de %2$d",
        "bossbar_get_visible_true": "La barra de jefe personalizada [%1$s] se muestra actualmente",
        "bossbar_get_visible_false": "La barra de jefe personalizada [%1$s] está oculta actualmente",
        "bossbar_list": "Hay %1$s barras de jefe personalizadas activas: %2$s",
        "bossbar_list_none": "No hay ninguna barra de jefe personalizada activa",
        "bossbar_list_one": "Hay una barra de jefe personalizada activa: %1$s",
        "bossbar_notFound": "No existe ninguna barra de jefe con el ID '%1$s'",
        "bossbar_remove": "Se eliminó la barra de jefe personalizada [%1$s]",
        "change_setting_description": "Cambia una configuración del servidor dedicado mientras se está ejecutando.",
        "change_setting_success": "Se cambió %1$s.",
        "chunkinfo_compiled": "El chunk está compilado.",
        "chunkinfo_data": "Los primeros 64 vértices son: %1$s.",
        "chunkinfo_empty": "El chunk está vacío.",
        "chunkinfo_hasLayers": "La porción de terreno tiene capas: %1$s",
        "chunkinfo_hasNoRenderableLayers": "La porción no tiene capas renderizables.",
        "chunkinfo_isEmpty": "La porción de terreno tiene capas vacías: %1$s",
        "chunkinfo_location": "Ubicación de la porción de terreno: (%1$d, %2$d, %3$d)",
        "chunkinfo_noChunk": "No se encontró ninguna posición de porción de terreno %1$d, %2$d, %3$d.",
        "chunkinfo_notCompiled": "El chunk no está compilado.",
        "chunkinfo_notEmpty": "El chunk no está vacío.",
        "chunkinfo_vertices": "El búfer de capas de %1$s contiene %2$d vértices.",
        "classroommode_description": "Intentar iniciar y conectarse al modo Aula.",
        "classroommode_success": "Intentando iniciar el modo Aula...",
        "clear_description": "Quita los objetos del inventario del jugador.",
        "clear_failure": "No se pudo vaciar el inventario de %1$s.",
        "clear_failure_no_items": "No se pudo vaciar el inventario de %1$s: no tiene objetos.",
        "clear_success": "Se vació el inventario de %1$s y se quitaron %2$d objetos.",
        "clear_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "clear_testing": "%1$s tiene %2$d objetos que coinciden con los criterios",
        "clearfixedinv_description": "Quita todos los espacios fijados del inventario.",
        "clearfixedinv_success": "Vaciaste el inventario fijo",
        "clone_description": "Clona bloques de una región a otra.",
        "clone_failed": "Ningún bloque clonado",
        "clone_filtered_error": "El uso filtrado requiere especificar un bloque de filtro.",
        "clone_noOverlap": "El origen y el destino no se pueden superponer",
        "clone_outOfWorld": "No puedes acceder a bloques fuera del mundo",
        "clone_success": "%1$d bloques clonados",
        "clone_tooManyBlocks": "Demasiados bloques en el área especificada (%1$d > %2$d)",
        "closechat_description": "Cierra la ventana del chat del jugador local si está abierta.",
        "closechat_success": "Chat cerrado",
        "closechat_failure": "El chat no se abrió",
        "closewebsocket_description": "Cierra la conexión con WebSocket si hay una.",
        "code_description": "Abre el creador de código.",
        "code_success": "Creador de código abierto.",
        "compare_failed": "El origen y el destino no son idénticos",
        "compare_outOfWorld": "No puedes acceder a bloques fuera del mundo",
        "compare_success": "%1$d bloques comparados",
        "compare_tooManyBlocks": "Demasiados bloques en el área especificada (%1$d > %2$d)",
        "corruptworld_description": "Corrompe el mundo cargado en el servidor.",
        "corruptworld_success": "Mundo corrompido con éxito.",
        "daylock_description": "Bloquea y desbloquea el ciclo día-noche.",
        "debug_description": "Comienza o termina una sesión de depuración.",
        "debug_notStarted": "¡No puedes detener la creación de perfiles cuando todavía no hemos comenzado!",
        "debug_start": "Perfiles de depuración iniciados",
        "debug_stop": "Depuración de perfiles detenida después de %,2f segundos (%1$d casillas)",
        "defaultgamemode_description": "Establece el modo predeterminado del juego.",
        "defaultgamemode_success": "El modo de juego predeterminado del mundo ahora es %1$s.",
        "deop_description": "Revoca el estado de operador de un jugador.",
        "deop_failed": "No se pudo quitar el operador (nivel de permiso demasiado alto): %s",
        "deop_success": "Se quitó el rango de operador a: %s",
        "deop_message": "Ya no eres operador.",
        "difficulty_description": "Establece el nivel de dificultad.",
        "difficulty_usage": "/difficulty <new difficulty>",
        "difficulty_success": "Establecer la dificultad de juego en %1$s",
        "downfall_success": "Precipitaciones cambiadas",
        "effect_description": "Agrega o quita efectos de estado.",
        "effect_failure_notActive": "No podía tomar %1$s %2$s ya que no tienen el efecto",
        "effect_failure_notActive_all": "No se pueden quitar los efectos de %1$s debido a que no tiene ninguno.",
        "effect_failure_notAMob": "%1$s no puede tener efectos",
        "effect_notFound": "No hay un efecto de criatura con el id. %s.",
        "effect_success": "Dio %1$s * %2$d a %3$s durante %4$d segundos.",
        "effect_success_removed": "Tomó %1$s %2$s",
        "effect_success_removed_all": "Se obtuvieron todos los efectos de %1$s.",
        "enchant_cantCombine": "%1$s no se puede combinar con %2$s",
        "enchant_invalidLevel": "%1$s no es compatible con el nivel %2$d",
        "enchant_cantEnchant": "El encantamiento no se puede agregar al objeto seleccionado: %1$s",
        "enchant_description": "Agrega un encantamiento a un objeto seleccionado por el jugador.",
        "enchant_noItem": "El objetivo no lleva un objeto: %1$s",
        "enchant_notFound": "No hay ningún encantamiento con el id. %1$d.",
        "enchant_success": "Encantamiento exitoso para %1$s",
        "entitydata_description": "Modifica la etiqueta de datos de una entidad.",
        "entitydata_failed": "La etiqueta de datos no cambió: %1$s.",
        "entitydata_noPlayers": "%1$s es un jugador y no se puede cambiar.",
        "entitydata_success": "Los datos de la entidad se actualizaron a: %1$s.",
        "entitydata_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "execute_allInvocationsFailed": "Error en todas las invocaciones: \"%1$s\"",
        "execute_failed": "No se pudo ejecutar \"%1$s\" como %2$s.",
        "execute_description": "Ejecuta un comando en nombre de una o varias entidades.",
        "fill_description": "Rellena toda una región (o parte de ella) con un bloque específico.",
        "fill_failed": "No se colocó ningún bloque",
        "fill_outOfWorld": "No puedes colocar bloques fuera del mundo",
        "fill_success": "%1$d bloques llenados",
        "fill_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "fill_tooManyBlocks": "Demasiados bloques en el área especificada (%1$d > %2$d)",
        "fill_replace_auxvalue_invalid": "El valor de reemplazo de datos del bloque %1$s no es válido",
        "function_description": "Ejecuta comandos que se encuentran en el archivo de función correspondiente.",
        "function_functionNameNotFound": "Función %1$s no encontrada.",
        "function_invalidCharacters": "La función con el título '%s' no es válida, el carácter '%s' no está permitido en los nombres de las funciones.",
        "function_noEngineVersionSpecified": "No se pudo ejecutar la función %s. Debes especificar una min_engine_version en el manifest.json del pack de comportamiento.",
        "function_success": "Entradas de la función %1$d ejecutadas con éxito.",
        "gamemode_description": "Establece el modo de juego de un jugador.",
        "gamemode_success_other": "Establecer el modo de juego de %2$s como %1$s",
        "gamemode_success_self": "Establecer el modo de juego propio como %1$s",
        "gamemode_fail_invalid": "El modo de juego \"%1$s\" no es válido.",
        "gamerule_description": "Establece o consulta un valor de regla del juego.",
        "gamerule_type_invalid": "El tipo usado para la regla de juego \"%1$s\" no es válido.",
        "gamerule_type_nocheatsenabled": "La regla del juego '%1$s' solo se puede usar si se activan los trucos en este mundo.",
        "gamerule_nopermission": "Solo los propietarios del servidor pueden cambiar \"%1$s\".",
        "gamerule_norule": "No hay ninguna regla de juego llamada \"%1$s\" disponible.",
        "gamerule_success": "La regla de juego %1$s se actualizó a %2$s.",
        "generic_async_initiated": "Comando \"%1$s\" iniciado (paso asincrónico %2$d)",
        "generic_boolean_invalid": "\"%1$s\" no es verdadero ni falso.",
        "generic_chunk_notFound": "No se encontró la porción especificada",
        "generic_componentError": "Error al analizar la lista de componentes",
        "generic_dimension_notFound": "No se encontró la dimensión especificada",
        "generic_disabled": "No se permiten trucos en este nivel.",
        "generic_disabled_templateLocked": "La configuración está bloqueada por el momento. Desbloquea las opciones de plantillas de mundos en el menú de Configuración del juego para cambiarlas.",
        "generic_double_tooBig": "El número que ingresaste (%.2f) es demasiado grande, debe ser como máximo %.2f",
        "generic_double_tooSmall": "El número que introdujiste (%.2f) es demasiado pequeño, debe ser por lo menos %.2f",
        "generic_duplicateType": "Duplicar argumentos de tipo",
        "generic_duplicateSelectorArgument": "Duplicar argumentos del selector de %s",
        "generic_encryption_badkey": "Clave pública proporcionada incorrecta. Se esperaba una clave de 120 bytes después de formatear en PEM.",
        "generic_encryption_badsalt": "Sal proporcionada incorrecta. Se esperaban 16 bytes antes de codificar en base64.",
        "generic_encryption_required": "Sesión cifrada obligatoria",
        "generic_entity_invalidType": "El tipo de entidad \"%1$s\" no es válido.",
        "generic_entity_invalidUuid": "El UUID de la entidad es en un formato inválido",
        "generic_entity_notFound": "No se puede encontrar esa entidad",
        "generic_exception": "Ocurrió un error desconocido al intentar ejecutar este comando",
        "generic_invalidAgentType": "Introduce un argumento aplicado al selector Agent-only",
        "generic_invalidcontext": "El contexto proporcionado para el tipo de comando indicado no es válido.",
        "generic_invalidDevice": "El comando que ingresaste, %s, no es compatible con este dispositivo",
        "generic_invalidPlayerType": "Argumento de tipo aplicado al selector único de jugador",
        "generic_invalidType": "Argumento de tipo desconocido",
        "generic_levelError": "El nivel máximo debe ser mayor que el mínimo",
        "generic_malformed_body": "Falta el cuerpo o está deformado.",
        "generic_malformed_type": "Tipo de solicitud no válida",
        "generic_notimplemented": "No implementado",
        "generic_num_invalid": "\"%1$s\" no es un número válido.",
        "generic_num_tooBig": "El número que escribiste (%1$d) es demasiado grande, tiene que ser, como máximo, %2$d.",
        "generic_num_tooSmall": "El número que escribiste (%1$d) es demasiado pequeño, tiene que ser, como mínimo, %2$d.",
        "generic_parameter_invalid": "\"%1$s\" no es un parámetro válido.",
        "generic_permission_selector": "<permisos insuficientes para la expansión del selector>",
        "generic_player_notFound": "No se puede encontrar ese jugador",
        "generic_protocol_mismatch": "La versión del protocolo especificado no coincide con la versión de protocolo de Minecraft.",
        "generic_radiusError": "El radio mínimo del selector debe ser menor que el máximo",
        "generic_radiusNegative": "El radio no puede ser negativo",
        "generic_rotationError": "Rotación fuera de rango",
        "generic_running": "El comando ya está en ejecución",
        "generic_step_failed": "No se pudo realizar el paso de comando",
        "generic_syntax": "Error de sintaxis: \"%2$s\" inesperado: en \"%1$s>>%2$s<<%3$s\"",
        "generic_noTargetMatch": "Ningún objetivo coincide con el selector",
        "generic_targetNotPlayer": "El selector debe ser de tipo jugador",
        "generic_tooManyNames": "Demasiados argumentos de nombre del objetivo",
        "generic_tooManyTargets": "Demasiados objetivos coinciden con el selector",
        "generic_too_many_requests": "Solicitaste demasiados comandos, espera a que se ejecute uno",
        "generic_unknown": "Comando desconocido: %s. Revisa que el comando exista y que tengas permiso para usarlo.",
        "generic_usage": "Uso: %1$s",
        "generic_usage_noparam": "Uso:",
        "generic_version_mismatch": "La versión solicitada no existe para este comando",
        "generic_version_missing": "Las llamadas a comandos que no sean desde el chat deben especificar la versión del comando.",
        "getchunkdata_description": "Obtiene los píxeles de la porción especificada.",
        "getchunkdata_success": "Datos de porción recibidos",
        "getchunks_description": "Obtiene la lista de las porciones cargadas.",
        "getchunks_success": "Lista de porciones recibidas",
        "getlocalplayername_description": "Devuelve el nombre del jugador local.",
        "getspawnpoint_description": "Obtiene la posición de generación de los jugadores especificados.",
        "gettopsolidblock_description": "Obtiene la posición del bloque superior que no es aire debajo de la posición especificada",
        "gettopsolidblock_notfound": "No hay ningún bloque sólido debajo de la posición específica",
        "give_block_notFound": "No hay ningún bloque con el nombre %1$d.",
        "give_description": "Da un objeto a un jugador.",
        "give_item_invalid": "La sintaxis de comando no es válida: no existe ningún %s con ese valor de datos.",
        "give_item_notFound": "No hay ningún objeto con el nombre %1$d.",
        "give_map_invalidData": "Los datos de mapa proporcionados no son válidos",
        "give_map_featureNotFound": "No se pudo crear el mapa de exploración. La función no se encontró en esta dimensión",
        "give_success": "Dio %1$s * %2$d a %3$s.",
        "give_successRecipient": "Recibiste %1$s * %2$d.",
        "give_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "help_description": "Proporciona ayuda o una lista de comandos.",
        "help_footer": "Sugerencia: Utiliza la tecla <tab> al escribir un comando para autocompletar el comando o sus argumentos",
        "help_header": "--- Mostrando página de ayuda %1$d de %2$d (/help <página>) ---",
        "help_command_aliases": "%s (también %s):",
        "immutableworld_description": "Establece el estado inmutable del mundo.",
        "immutableworld_info": "immutableworld = %s",
        "kick_description": "Expulsa a un jugador del servidor.",
        "kick_description_edu": "Elimina a un jugador del juego.",
        "kick_not_found": "No se pudo encontrar al jugador %1$s.",
        "kick_not_yourself": "Es posible que no puedas eliminarte del juego",
        "kick_success": "Se expulsó a %1$s del juego.",
        "kick_success_reason": "Se expulsó a %1$s del juego: \"%2$s\"",
        "kick_success_reasonedu": "Se expulsó a %1$s del juego: \"%2$s\"",
        "kick_no_host": "No se puede expulsar al anfitrión de la partida.",
        "kick_no_teacher": "No se puede eliminar a los maestros de la partida.",
        "kill_successful_edu": "%1$s eliminados",
        "kill_successful": "%1$s murió.",
        "kill_description_edu": "Elimina entidades (jugadores, criaturas, etc.)",
        "kill_description": "Mata entidades (jugadores, criaturas, etc.).",
        "list_description": "Muestra una lista de los jugadores en el servidor.",
        "locate_description": "Muestra las coordenadas de la estructura más cercana de un tipo determinado.",
        "locate_fail_noplayer": "El comando solo puede ser usado por un jugador válido.",
        "locate_fail_nostructurefound": "No se encontró una estructura válida en esta dimensión",
        "locate_success": "La %1$s más cercana es en el bloque %2$s, (y?), %3$s",
        "togglecontentlog_toggle": "Activa o desactiva el comando de registro de contenido",
        "togglecontentlog_enabled": "Registro de contenido activado",
        "togglecontentlog_disabled": "Registro de contenido desactivado",
        "me_description": "Muestra un mensaje acerca de ti.",
        "message_display_incoming": "%1$s te susurró: %2$s.",
        "message_display_outgoing": "Susurraste a %1$s: %2$s.",
        "message_sameTarget": "¡No puedes enviarte un mensaje privado a ti mismo!",
        "mixer_description": "Control de interactividad de Mixer",
        "mixer_error_unknown": "Ocurrió un error desconocido de Mixer.",
        "mixer_error_notoken": "Debes tener una sesión iniciada con una cuenta de Microsoft para habilitar la interactividad de Mixer.",
        "mixer_error_notsupported": "El dispositivo que estás usando no es compatible con la interactividad de Mixer.",
        "mixer_interactive_error": "Ocurrió un error de Mixer: %1$s",
        "mixer_scene_failed": "No existe ninguna escena llamada %1$s. Asegúrate de haber escrito el nombre de escena correctamente.",
        "mixer_scene_success": "Escena cambiada a: %1$s",
        "mixer_start_success": "Interactividad de Mixer comienza en:%1$s",
        "mixer_start_fail_invalidCode": "No se pudo encontrar el proyecto con ID \"%1$s\". Asegúrate de que el ID o el código sea correcto.",
        "mixer_stop_success": "Se detuvo Mixer Interactive.",
        "mixer_stop_fail": "No hay ninguna sesión de interactividad que detener.",
        "mixer_status_notinitialized": "No se inicializó la interactividad.",
        "mixer_status_enabled": "La interactividad está habilitada.",
        "mixer_status_initializing": "La interactividad está inicializándose.",
        "mixer_status_pending": "La interactividad está pendiente.",
        "mixer_status_disabled": "La interactividad está deshabilitada.",
        "mixer_activatedbutton": "%1$s activó %2$s.",
        "mobevent_description": "Controla qué eventos de criatura pueden ejecutarse.",
        "mobevent_eventsEnabledSetToTrue": "Los eventos de criaturas ahora están habilitados y los eventos individuales que están configurados como falsos no se ejecutarán.",
        "mobevent_eventsEnabledSetToFalse": "Los eventos de criaturas ahora están deshabilitados y los eventos individuales no se ejecutarán.",
        "mobevent_eventsEnabledIsTrue": "Los eventos de criaturas están habilitados y los eventos individuales que están configurados como falsos no se ejecutarán.",
        "mobevent_eventsEnabledIsFalse": "Los eventos de criaturas están deshabilitados y los eventos individuales no se ejecutarán.",
        "mobevent_eventSetToTrue": "Evento de criatura %s (id: %s) configurado como verdadero.",
        "mobevent_eventSetToTrueButEventsDisabled": "Evento de criatura %s (id: %s) configurado como verdadero, pero los eventos de criatura están deshabilitados.",
        "mobevent_eventSetToFalse": "Evento de criatura %s (id: %s) configurado como falso.",
        "mobevent_eventIsTrue": "Evento de criatura %s (id: %s) está configurado como verdadero.",
        "mobevent_eventIsTrueButEventsDisabled": "Evento de criatura %s (id: %s) está configurado como verdadero, pero los eventos de criatura están deshabilitados.",
        "mobevent_eventIsFalse": "Evento de criatura %s (id: %s) está configurado como falso.",
        "op_description": "Da estado de operador a un jugador.",
        "op_failed": "No se pudo dar el rango de operador a (ya lo tiene o tiene uno superior): %s",
        "op_success": "Se dio el rango de operador a: %s",
        "op_message": "Ahora eres operador.",
        "origin_commandblock": "Bloque de comandos",
        "origin_external": "Externo",
        "origin_devconsole": "DevConsole",
        "origin_script": "Motor de script",
        "origin_server": "Servidor",
        "origin_teacher": "Maestro",
        "ops_description": "Recarga y aplica los permisos de operador.",
        "ops_reloaded": "Se volvieron a cargar los operadores del archivo.",
        "ops_set_success": "Se asignó con éxito el nivel de operador para el jugador %s.",
        "permissions_description": "Recarga y aplica los permisos.",
        "permissions_reloaded": "Se volvieron a cargar los permisos del archivo.",
        "permissions_set_failed": "Error al establecer el nivel de permiso %s para el jugador %s.",
        "permissions_set_success": "Se asignó con éxito el nivel de permiso %s para el jugador %s.",
        "permissions_save_failed": "Error al guardar el nivel de permiso %s para el jugador %s.",
        "permissions_save_success": "Se guardó con éxito el nivel de permiso %s para el jugador %s.",
        "spawnParticleEmitter_description": "Crea un emisor de partículas",
        "particle_description": "Crea partículas.",
        "particle_notFound": "Nombre del efecto desconocido (%1$s)",
        "particle_success": "Reproduciendo el efecto %1$s %2$d veces",
        "players_list": "Hay %1$d/%2$d jugadores conectados:",
        "players_list_names": "%s",
        "playsound_description": "Reproduce un sonido.",
        "playsound_playerTooFar": "El jugador %1$s está demasiado lejos para escuchar el sonido.",
        "playsound_success": "Se reprodujo el sonido \"%1$s\" a %2$s.",
        "position_description": "Activa y desactiva las coordenadas para el jugador.",
        "publish_failed": "No se puede alojar un juego local",
        "publish_started": "Juego local alojado en el puerto %1$s",
        "querytarget_description": "Obtiene la transformación, el nombre y la información de id. de las entidades de destino indicadas.",
        "querytarget_success": "Datos de destino: %1$s",
        "reload_description": "Recarga todos los archivos de funciones de todos los packs de comportamiento.",
        "reload_success": "Se recargaron los archivos de funciones existentes. Reinicia Minecraft para cargar NUEVAS funciones.",
        "replaceitem_description": "Reemplaza objetos en los inventarios.",
        "replaceitem_failed": "No se pudo reemplazar el espacio %s %d con %d * %s.",
        "replaceitem_keepFailed": "Ya existe un elemento en la ranura %d de %s.",
        "replaceitem_noContainer": "El bloque de %s no es un objeto contenedor.",
        "replaceitem_badSlotNumber": "No se pudo reemplazar el espacio %d, debe ser un valor entre %d y %d.",
        "replaceitem_success": "Espacio %s %d reemplazado con %d * %s",
        "replaceitem_success_entity": "Espacio %s %d de %s reemplazado con %d * %s",
        "replaceitem_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "save_description": "Controla o revisa la forma en que el juego guarda datos en el disco.",
        "save_disabled": "Guardado automático del mundo desactivado",
        "save_enabled": "Guardado automático del mundo activado",
        "save_failed": "Error al guardar: %1$s",
        "save_start": "Guardando...",
        "save_success": "El mundo ha sido guardado",
        "save_all_error": "Ocurrió un error al intentar pausar el almacenamiento de nivel.",
        "save_all_success": "Datos guardados. Los archivos están listos para copiarse.",
        "save_off_alreadyOff": "El guardado ya está desactivado.",
        "save_on_alreadyOn": "El guardado ya está activado.",
        "save_on_notDone": "No se completó un intento de guardado anterior.",
        "save_on_description": "Habilita el guardado automático en el servidor.",
        "save_on_success": "Se reanudaron los cambios en el nivel.",
        "save_state_description": "Revisa si un intento anterior de guardar todo está completo y muestra los archivos involucrados.",
        "say_description": "Envía un mensaje en el chat a otros jugadores.",
        "scoreboard_description": "Sirve para dar seguimiento y mostrar las puntuaciones de diferentes objetivos.",
        "scoreboard_allMatchesFailed": "Todas las operaciones fallaron",
        "scoreboard_noMultiWildcard": "Solo se permite un usuario comodín",
        "scoreboard_objectiveNotFound": "No se encontró ningún objetivo con el nombre '%1$s'",
        "scoreboard_objectiveReadOnly": "El objetivo '%1$s' es de solo lectura y no se puede establecer",
        "scoreboard_objectives_add_alreadyExists": "Ya existe un objetivo con el nombre '%1$s'",
        "scoreboard_objectives_add_displayTooLong": "El nombre para mostrar '%1$s' es demasiado largo para un objetivo, puede contener un máximo de %2$d caracteres",
        "scoreboard_objectives_add_success": "El nuevo objetivo '%1$s' se agregó correctamente",
        "scoreboard_objectives_add_tooLong": "El nombre '%1$s' es demasiado largo para un objetivo, puede contener un máximo de %2$d caracteres",
        "scoreboard_objectives_add_wrongType": "Tipo de criterio de objetivo '%1$s' no válido",
        "scoreboard_objectives_add_needName": "Un objetivo necesita un nombre.",
        "scoreboard_objectives_description": "Modifica los objetivos del marcador.",
        "scoreboard_objectives_list_count": "Mostrando %1$d objetivo(s) en el marcador:",
        "scoreboard_objectives_list_empty": "No hay objetivos en el marcador",
        "scoreboard_objectives_list_entry": "- %1$s: se muestra como '%2$s' y es de tipo '%3$s'",
        "scoreboard_objectives_remove_success": "El objetivo '%1$s' se quitó correctamente",
        "scoreboard_objectives_setdisplay_invalidSlot": "No hay ningún espacio de muestra '%1$s'",
        "scoreboard_objectives_setdisplay_successCleared": "Se borró el espacio de muestra de objetivo '%1$s'",
        "scoreboard_objectives_setdisplay_successSet": "Establecer el objetivo de muestra en el espacio '%1$s' en '%2$s'",
        "scoreboard_players_add_success": "Se agregó la cantidad de %1$d al objetivo [%2$s] para %3$s (nuevo total: %4$d)",
        "scoreboard_players_add_multiple_success": "Se agregó la cantidad de %1$d al objetivo [%2$s] para %3$d entidades",
        "scoreboard_players_nameNotFound": "Se debe asignar un nombre de jugador.",
        "scoreboard_players_enable_noTrigger": "El objetivo %1$s no es un activador",
        "scoreboard_players_enable_success": "Se habilitó el activador %1$s para %2$s",
        "scoreboard_players_list_count": "Mostrando %1$d jugadores seguidos en el marcador:",
        "scoreboard_players_list_empty": "No hay jugadores seguidos en el marcador",
        "scoreboard_players_list_player_count": "Mostrando %1$d objetivo(s) seguido(s) para %2$s:",
        "scoreboard_players_list_player_empty": "El jugador %1$s no tiene puntuaciones registradas",
        "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_players_operation_invalidOperation": "Operación %1$s no válida",
        "scoreboard_players_operation_notFound": "No se encontró la puntuación de %1$s para %2$s",
        "scoreboard_players_operation_success": "Se actualizó el objetivo [%1$s] para %2$d entidades",
        "scoreboard_players_offlinePlayerName": "Jugador sin conexión",
        "scoreboard_players_random_invalidRange": "El mínimo %1$d no es inferior que el máximo de %2$d",
        "scoreboard_players_remove_success": "Se eliminó la cantidad de %1$d del objetivo [%2$s] para %3$s (nuevo total: %4$d)",
        "scoreboard_players_remove_multiple_success": "Se eliminó la cantidad de %1$d del objetivo [%2$s] para %3$d entidades",
        "scoreboard_players_reset_success": "Restablecer puntuaciones del jugador %1$s",
        "scoreboard_players_resetscore_success": "Restablecer la puntuación %1$s del jugador %2$s",
        "scoreboard_players_set_success": "Se estableció el total del objetivo [%1$s] para %2$s en %3$d",
        "scoreboard_players_set_multiple_success": "Se estableció el total del objetivo [%1$s] para %2$d entidades en %3$d",
        "scoreboard_players_set_tagError": "No se pudo analizar dataTag. Motivo: %1$s",
        "scoreboard_players_set_tagMismatch": "El elemento dataTag no coincide con %1$s",
        "scoreboard_players_score_notFound": "No se encontró la puntuación de %1$s para %2$s",
        "scoreboard_players_test_failed": "La puntuación %1$d NO está dentro del intervalo de %2$d a %3$d",
        "scoreboard_players_test_success": "La puntuación %1$d está dentro del intervalo de %2$d a %3$d",
        "scoreboard_teamNotFound": "No se encontró ningún equipo con el nombre '%1$s'",
        "scoreboard_teams_add_alreadyExists": "Ya existe un equipo con el nombre '%1$s'",
        "scoreboard_teams_add_displayTooLong": "El nombre para mostrar '%1$s' es demasiado largo para un equipo, puede contener un máximo de %2$d caracteres",
        "scoreboard_teams_add_success": "El nuevo equipo '%1$s' se agregó correctamente",
        "scoreboard_teams_add_tooLong": "El nombre '%1$s' es demasiado largo para un equipo, puede contener un máximo de %2$d caracteres",
        "scoreboard_teams_empty_alreadyEmpty": "El equipo %1$s ya está vacío, no se pueden quitar jugadores que no existen",
        "scoreboard_teams_empty_success": "Se quitaron los %1$d jugadores del equipo %2$s",
        "scoreboard_teams_join_failure": "No se pudo agregar %1$d jugador(es) al equipo %2$s: %3$s",
        "scoreboard_teams_join_success": "%1$d jugador(es) agregado(s) al equipo %2$s: %3$s",
        "scoreboard_teams_leave_failure": "No se pudo quitar a %1$d jugador(es) de sus equipos: %2$s",
        "scoreboard_teams_leave_noTeam": "No estás en ningún equipo",
        "scoreboard_teams_leave_success": "Se quitaron %1$d jugadores de sus equipos: %2$s",
        "scoreboard_teams_list_count": "Mostrando %1$d equipos en el marcador:",
        "scoreboard_teams_list_empty": "No hay ningún equipo registrado en el marcador",
        "scoreboard_teams_list_entry": "- %1$s: '%2$s' tiene %3$d jugadores",
        "scoreboard_teams_list_player_count": "Mostrando %1$d jugador(es) en el equipo %2$s:",
        "scoreboard_teams_list_player_empty": "El equipo %1$s no tiene jugadores",
        "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_teams_option_noValue": "Los valores válidos para la opción %1$s son: %2$s",
        "scoreboard_teams_option_success": "Establecer la opción %1$s para el equipo %2$s en %3$s",
        "scoreboard_teams_remove_success": "Se quitó el equipo %1$s",
        "seed_success": "Semilla: %1$s",
        "setblock_description": "Cambia un bloque por otro.",
        "setblock_failed": "No se puede ubicar el bloque",
        "setblock_noChange": "No se pudo ubicar el bloque",
        "setblock_notFound": "No hay ningún bloque con el id. o el nombre %1$s.",
        "setblock_outOfWorld": "No se puede ubicar el bloque fuera del mundo",
        "setblock_success": "Bloque ubicado",
        "setblock_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "setidletimeout_success": "Se estableció correctamente el tiempo de inactividad en %1$d minutos.",
        "setfixedinvslots_description": "Establece la cantidad de espacios de inventario fijos para el servidor.",
        "setfixedinvslots_success": "La cantidad establecida de espacios de inventario fijos es %1$d.",
        "setfixedinvslot_description": "Establece un espacio fijo para un objeto especificado.",
        "setfixedinvslot_success": "Espacio de inventario fijo %1$d establecido para %2$s",
        "globalpause_description": "Obtiene o establece el estado de pausa de la partida para todos los jugadores.",
        "globalpause_success": "Se estableció o definió estado de pausa",
        "setmaxplayers_description": "Establece el número máximo de jugadores para esta sesión de juego.",
        "setmaxplayers_success": "Establecer el máximo de jugadores en %1$d.",
        "setmaxplayers_success_upperbound": "(Enlazado a las conexiones máximas permitidas)",
        "setmaxplayers_success_lowerbound": "(Enlazado al recuento actual de jugadores)",
        "setworldspawn_description": "Establece la generación del mundo.",
        "setworldspawn_success": "Establecer el punto de generación del mundo en (%1$d, %2$d, %3$d)",
        "setworldspawn_wrongDimension": "No se pudo establecer la generación del mundo en esta dimensión.",
        "spawnpoint_success_single": "Establecer el punto de generación de %1$s en (%2$d, %3$d, %4$d)",
        "spawnpoint_description": "Establece el punto de generación de un jugador.",
        "spawnpoint_success_multiple_specific": "Establecer el punto de generación de %1$s en (%2$d, %3$d, %4$d)",
        "spawnpoint_success_multiple_generic": "Establecer el punto de generación de %1$s",
        "spawnpoint_wrongDimension": "No se puede establecer el punto de generación en esta dimensión",
        "spreadplayers_description": "Teletransporta entidades a ubicaciones aleatorias.",
        "spreadplayers_failure_players": "No se pudieron esparcir %1$s jugadores alrededor de %2$s, %3$s (demasiados jugadores para el espacio: intenta esparcir un máximo de %4$s).",
        "spreadplayers_failure_teams": "No se pudieron esparcir %1$s equipos alrededor de %2$s, %3$s (demasiados jugadores para el espacio: intenta esparcir un máximo de %4$s).",
        "spreadplayers_info_players": "(La distancia promedia entre los jugadores es de %1$s bloques después de %2$s repeticiones).",
        "spreadplayers_info_teams": "(La distancia promedia entre los equipos es de %1$s bloques después de %2$s repeticiones).",
        "spreadplayers_spreading_players": "Esparciendo %1$s jugadores %2$s bloques alrededor de %3$s, %4$s (mínimo %5$s bloques de separación)",
        "spreadplayers_spreading_teams": "Esparciendo %1$s equipos %2$s bloques alrededor de %3$s, %4$s (mínimo %5$s bloques de separación)",
        "spreadplayers_success_players": "Se esparcieron correctamente %1$s jugadores alrededor de %2$s, %3$s.",
        "spreadplayers_success_teams": "Se esparcieron correctamente %1$s equipos alrededor de %2$s, %3$s.",
        "stats_cleared": "Se borraron las estadísticas de %1$s.",
        "stats_failed": "Parámetros inválidos",
        "stats_noCompatibleBlock": "El bloque en %1$d, %2$d, %3$d no puede hacer el seguimiento de estadísticas.",
        "stats_success": "Almacenando estadísticas de %1$s en %2$s en %3$s",
        "stop_description": "Detiene el servidor.",
        "stop_start": "Deteniendo el servidor",
        "stopsound_description": "Detiene un sonido.",
        "stopsound_success": "Se detuvo el sonido de %s para %s.",
        "stopsound_success_all": "Se detuvieron todos los sonidos para %s.",
        "summon_description": "Invoca una entidad.",
        "summon_failed": "No se pudo invocar el objeto",
        "summon_outOfWorld": "No se puede invocar el objeto fuera del mundo",
        "summon_success": "Objeto invocado con éxito",
        "summon_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "tag_description": "Administra las etiquetas almacenadas en entidades.",
        "tag_add_failed": "El objetivo ya tiene la etiqueta o tiene demasiadas etiquetas",
        "tag_add_success_single": "Se agregó la etiqueta '%1$s' a %2$s",
        "tag_add_success_multiple": "Se agregó la etiqueta '%1$s' a %2$d entidades",
        "tag_list_single_empty": "%s no tiene etiquetas",
        "tag_list_single_success": "%1$s tiene %2$d etiquetas: %3$s",
        "tag_list_multiple_empty": "No hay etiquetas en las %d entidades",
        "tag_list_multiple_success": "Las %1$d entidades tienen %2$d etiquetas en total: %3$s",
        "tag_remove_failed": "El objetivo no tiene esta etiqueta",
        "tag_remove_success_single": "Se eliminó la etiqueta '%1$s' de %2$s",
        "tag_remove_success_multiple": "Se eliminó la etiqueta '%1$s' de %2$d entidades",
        "tell_description": "Envía un mensaje privado a uno o más jugadores.",
        "tellraw_description": "Envía un mensaje JSON a otros jugadores.",
        "tellraw_jsonException": "JSON no válido: %1$s",
        "tellraw_jsonStringException": "Datos no válidos de cadena de json.",
        "tellraw_error_noData": "No se proporcionaron datos.",
        "tellraw_error_notArray": "El objeto rawtext debe contener una matriz. Ejemplo: \"rawtext\":[{..}]",
        "tellraw_error_textNotString": "El campo de texto en rawtext debe contener una cadena. Ejemplo: \"rawtext\":[{\"text\": \"text to display\"}]",
        "tellraw_error_translateNotString": "El campo de traducción en rawtext debe contener una clave de idioma. Ejemplo: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
        "tellraw_error_withNotArrayOrRawText": "el campo \"con\" en \"texto sin formato\" debe contener una matriz u otro objeto de texto sin formato. Ejemplo 1: \"texto sin formato\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Ejemplo 2: \"texto sin formato\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
        "tellraw_error_itemIsNotObject": "El valor de Json en la matriz de rawtext no es un objeto. Ejemplo: \"rawtext\": [{ \"text\" : \"my text\" }]",
        "educlientinfo_description": "Obtener el ID de cliente y el estado del host. Para CM.",
        "testfor_description": "Cuenta las entidades (jugadores, criaturas, etc.) que coinciden con las condiciones especificadas.",
        "testfor_failure": "%1$s no coincidió con la estructura de datos necesaria.",
        "testfor_success": "Se encontró %1$s.",
        "testfor_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "testforblock_description": "Prueba si un determinado bloque está en una ubicación concreta.",
        "testforblock_failed_data": "El bloque en %1$d, %2$d, %3$d no coincidió con el estado de bloque esperado.",
        "testforblock_failed_nbt": "El bloque %1$d, %2$d, %3$d no tiene las claves NBT necesarias.",
        "testforblock_failed_tile": "El bloque en %1$d, %2$d, %3$d es %4$s (se esperaba: %5$s).",
        "testforblock_failed_tileEntity": "El bloque en %1$d, %2$d, %3$d no es una entidad de iconos y no admite la coincidencia de etiquetas.",
        "testforblock_outOfWorld": "No se puede probar si hay un bloque fuera del mundo",
        "testforblock_success": "Se encontró el bloque correctamente en %1$d, %2$d, %3$d.",
        "testforblocks_description": "Prueba si los bloques de dos regiones coinciden.",
        "tickingarea_description": "Agrega, quita o muestra las áreas activas.",
        "tickingarea_inuse": "%1$d/%2$d áreas activas en uso.",
        "tickingarea_noneExist_currentDimension": "No existe ningún área activa en la dimensión actual.",
        "tickingarea_add_bounds_success": "Se agregó el área activa desde %1$d hasta %2$d.",
        "tickingarea_add_circle_success": "Se ha añadido el área de marca centrada en %1$d con un radio de %2$d fragmentos.",
        "tickingarea_add_failure": "Ya se alcanzó el número máximo de áreas activas (%1$d). No se pueden agregar más áreas activas.",
        "tickingarea_add_conflictingname": "Ya existe un área activa con el nombre %1$s.",
        "tickingarea_add_chunkfailure": "El área de marca contiene más de %1$d fragmentos. No se puede crear porque es demasiado grande.",
        "tickingarea_add_radiusfailure": "El radio no puede ser mayor de %1$d. El área activa es demasiado grande y no se puede crear.",
        "tickingarea_remove_success": "Área(s) activa(s) quitada(s)",
        "tickingarea_remove_failure": "No existe ningún área activa que contenga la posición del bloque %1$d en la dimensión actual.",
        "tickingarea_remove_byname_failure": "No existe ningún área activa con el nombre %1$s en la dimensión actual.",
        "tickingarea_remove_all_success": "Área(s) activa(s) quitada(s)",
        "tickingarea_remove_all_failure": "No existe ningún área activa en la dimensión actual.",
        "tickingarea_list_chunks": "porciones",
        "tickingarea_list_circle_radius": "Radio",
        "tickingarea_list_success_currentDimension": "Lista de todas las áreas activas de la dimensión actual",
        "tickingarea_list_success_allDimensions": "Lista de todas las áreas activas de todas las dimensiones",
        "tickingarea_list_failure_allDimensions": "No existe ningún área activa en ninguna dimensión.",
        "tickingarea_list_to": "a",
        "tickingarea_list_type_circle": "Círculo",
        "time_added": "Se agregó %1$d al tiempo.",
        "time_description": "Cambia o consulta el tiempo de juego en el mundo.",
        "time_disabled": "La opción \"Siempre de día\" está activada en este nivel.",
        "time_query_day": "El día es %d.",
        "time_query_daytime": "Las horas de luz son %d.",
        "time_query_gametime": "La hora del juego es %d.",
        "time_set": "Establecer la hora en %1$d",
        "time_stop": "Hora %1$s",
        "title_description": "Controla los títulos de la pantalla.",
        "title_success": "El comando /title se ejecutó con éxito",
        "titleraw_description": "Controla los títulos de la pantalla con mensajes JSON.",
        "toggledownfall_description": "Cambia el clima.",
        "tp_description": "Teletransporta entidades (jugadores, criaturas, etc.).",
        "tp_notSameDimension": "Es imposible teletransportar porque los jugadores no se encuentran en la misma dimensión",
        "tp_outOfWorld": "No se puede teletransportar entidades fuera del mundo",
        "tp_permission": "No tienes permiso para usar este comando con diagonal.",
        "tp_safeTeleportFail": "No se puede teletransportar %1$s a %2$s porque el área contiene bloques.",
        "tp_far": "No se puede teletransportar %1$s al área descargada en %2$s",
        "tp_success": "Se teletransportó a %1$s hacia %2$s.",
        "tp_successVictim": "Te teletransportaste a %1$s.",
        "tp_success_coordinates": "Se teletransportó a %1$s hacia %2$s, %3$s, %4$s.",
        "transferserver_description": "Transfiere un jugador a otro servidor.",
        "transferserver_successful": "Jugador transferido",
        "transferserver_invalid_port": "Puerto no válido (0-65535)",
        "trigger_description": "Establece un disparador que se debe activar.",
        "trigger_disabled": "El desencadenador %1$s no está habilitado.",
        "trigger_invalidMode": "Modo de desencadenador %1$s no válido",
        "trigger_invalidObjective": "Nombre de desencadenador %1$s no válido",
        "trigger_invalidPlayer": "Sólo los jugadores pueden usar el comando /trigger",
        "trigger_success": "Cambió el desencadenador %1$s con %2$s %3$s.",
        "unban_failed": "No se pudo desbanear al jugador %1$s.",
        "unban_success": "Jugador desbaneado: %1$s",
        "unbanip_invalid": "Introdujiste una dirección IP no válida",
        "unbanip_success": "Dirección IP %1$s desbaneada",
        "validategamelighting_description": "Revisar la iluminación del juego para una región específica",
        "validategamelighting_checkRegionTooBig": "¡La región especificada para revisar la iluminación es demasiado grande! (%1$d > %2$d)",
        "validategamelighting_outOfWorld": "No se puede revisar la iluminación fuera del mundo",
        "weather_clear": "Cambiando a clima despejado",
        "weather_description": "Establece el clima.",
        "weather_disabled": "El ciclo de clima no está activado en este nivel.",
        "weather_query": "El clima está: %s",
        "weather_query_clear": "despejado",
        "weather_query_rain": "lluvia",
        "weather_query_thunder": "tormenta",
        "weather_rain": "Cambiando a clima lluvioso",
        "weather_thunder": "Cambiando a clima de lluvia y tormenta",
        "whitelist_add_failed": "No se pudo agregar a %1$s a la lista aprobada.",
        "whitelist_add_success": "Se agregó %1$s a la lista aprobada.",
        "whitelist_description": "Administra la lista de permitidos del servidor.",
        "whitelist_disabled": "Lista aprobada desactivada",
        "whitelist_enabled": "Lista aprobada activada",
        "whitelist_list": "Hay %1$d (de %2$d vistos) jugadores en la lista aprobada:",
        "whitelist_reloaded": "Se volvió a cargar la lista aprobada del archivo.",
        "whitelist_remove_failed": "No se pudo quitar a %1$s de la lista aprobada.",
        "whitelist_remove_success": "Se quitó a %1$s de la lista aprobada.",
        "world_age_description": "Cambios o consultas de la edad del mundo (tiempo transcurrido desde su creación).",
        "world_age_added": "Se añadió %1$d a la edad del mundo",
        "world_age_query": "La edad del mundo es %d",
        "world_age_set": "Establece la edad del mundo a %1$d",
        "worldborder_center_success": "Establecer el centro de la frontera del mundo en %1$s, %2$s",
        "worldborder_damage_amount_success": "Establecer el daño de la frontera del mundo en %1$s por bloque (desde %2$s por bloque)",
        "worldborder_damage_buffer_success": "Establecer el búfer de daño de la frontera del mundo en %1$s bloques (desde %2$s bloques)",
        "worldborder_get_success": "La frontera del mundo actualmente es de %1$s bloques.",
        "worldborder_set_success": "Establecer la frontera del mundo en un ancho de %1$s bloques (desde %2$s bloques)",
        "worldborder_setSlowly_grow_success": "Ampliando la frontera del mundo a %1$s bloques de distancia (desde %2$s bloques) durante %3$s segundos",
        "worldborder_setSlowly_shrink_success": "Disminuyendo la frontera del mundo en %1$s bloques de distancia (desde %2$s bloques) durante %3$s segundos",
        "worldborder_warning_distance_success": "Establecer el aviso de la frontera del mundo en %1$s bloques de distancia (desde %2$s bloques)",
        "worldborder_warning_time_success": "Establecer el aviso de la frontera del mundo en %1$s segundos de distancia (desde %2$s segundos)",
        "worldbuilder_description": "Alternar el estado de Creador del mundo del autor de la llamada.",
        "worldbuilder_success": "Se actualizó el estado de creador del mundo a %1$s.",
        "wsserver_description": "Intenta conectarse al servidor WebSocket en la URL indicada.",
        "wsserver_invalid_url": "La URL del servidor proporcionada no es válida",
        "wsserver_request_existing": "Se está ejecutando otra solicitud de conexión",
        "wsserver_request_failed": "No se pudo conectar al servidor: %1$s.",
        "wsserver_success": "Conexión establecida con el servidor: %1$s",
        "xp_description": "Agrega o quita experiencia a un jugador.",
        "xp_failure_widthdrawXp": "No se puede dar al jugador puntos de experiencia negativos",
        "xp_success": "Dio %1$d experiencia a %2$s.",
        "xp_success_levels": "Dio %1$d niveles a %2$s.",
        "xp_success_negative_levels": "Se obtuvieron %1$d niveles de %2$s."
    },
    item:{
        "air": [
            "Aire"
        ],
        "apple": [
            "Manzana"
        ],
        "golden_apple": [
            "Manzana de oro"
        ],
        "appleenchanted": [
            "Manzana encantada"
        ],
        "armor_stand": [
            "Soporte para armaduras"
        ],
        "arrow": [
            "Flecha"
        ],
        "tipped_arrow": [
            "Flecha con punta filosa"
        ],
        "banner": [
            "Estandarte negro",
            "Estandarte negro",
            "Estandarte rojo",
            "Estandarte verde",
            "Estandarte marrón",
            "Estandarte azul",
            "Estandarte morado",
            "Estandarte cian",
            "Estandarte gris claro",
            "Estandarte gris",
            "Estandarte rosa",
            "Estandarte verde lima",
            "Estandarte amarillo",
            "Estandarte celeste",
            "Estandarte magenta",
            "Estandarte naranja",
            "Estandarte blanco"
        ],
        "bed": [
            "Cama",
            "Cama blanca",
            "Cama naranja",
            "Cama magenta",
            "Cama celeste",
            "Cama amarilla",
            "Cama verde lima",
            "Cama rosa",
            "Cama gris",
            "Cama gris claro",
            "Cama cian",
            "Cama morada",
            "Cama azul",
            "Cama marrón",
            "Cama verde",
            "Cama roja",
            "Cama negra"
        ],
        "bell": [
            "Campana"
        ],
        "steak": [
            "Filete"
        ],
        "beef": [
            "Ternera cruda"
        ],
        "beetroot": [
            "Betabel"
        ],
        "beetroot_soup": [
            "Sopa de betabel"
        ],
        "blaze_powder": [
            "Polvo de Blaze"
        ],
        "blaze_rod": [
            "Vara de Blaze"
        ],
        "boat": [
            "Bote de roble",
            "Bote de roble",
            "Bote de abeto",
            "Bote de abedul",
            "Bote de jungla",
            "Bote de acacia",
            "Bote de roble oscuro"
        ],
        "bone": [
            "Hueso"
        ],
        "book": [
            "Libro"
        ],
        "chainmail_boots": [
            "Botas de malla"
        ],
        "leather_boots": [
            "Botas de cuero"
        ],
        "diamond_boots": [
            "Botas de diamante"
        ],
        "golden_boots": [
            "Botas de oro"
        ],
        "iron_boots": [
            "Botas de hierro"
        ],
        "bow": [
            "Arco"
        ],
        "bowl": [
            "Tazón"
        ],
        "bread": [
            "Pan"
        ],
        "brewing_stand": [
            "Puesto de destilado"
        ],
        "brick": [
            "Ladrillo"
        ],
        "bucket": [
            "Cubeta"
        ],
        "bucketLava": [
            "Cubeta con lava"
        ],
        "bucketWater": [
            "Cubeta con agua"
        ],
        "bucketFish": [
            "Cubeta de bacalaos"
        ],
        "bucketSalmon": [
            "Cubeta de salmones"
        ],
        "bucketTropical": [
            "Cubeta de peces tropicales"
        ],
        "bucketPuffer": [
            "Cubeta de peces globo"
        ],
        "bucketCustomFish": [
            "Cubeta de"
        ],
        "tropicalColorWhite": [
            "Blanco"
        ],
        "tropicalColorOrange": [
            "Naranja"
        ],
        "tropicalColorMagenta": [
            "Magenta"
        ],
        "tropicalColorSky": [
            "Azul cielo"
        ],
        "tropicalColorYellow": [
            "Amarillo"
        ],
        "tropicalColorLime": [
            "Verde lima"
        ],
        "tropicalColorRose": [
            "Rosa"
        ],
        "tropicalColorGray": [
            "Gris"
        ],
        "tropicalColorSilver": [
            "Plateado"
        ],
        "tropicalColorTeal": [
            "Verde azulado"
        ],
        "tropicalColorPlum": [
            "Ciruela"
        ],
        "tropicalColorBlue": [
            "Azul"
        ],
        "tropicalColorBrown": [
            "Marrón"
        ],
        "tropicalColorGreen": [
            "Verde"
        ],
        "tropicalColorRed": [
            "Rojo"
        ],
        "tropicalBodyKobSingle": [
            "%1$s Kob"
        ],
        "tropicalBodySunstreakSingle": [
            "%1$s SunStreak"
        ],
        "tropicalBodySnooperSingle": [
            "%1$s Snooper"
        ],
        "tropicalBodyDasherSingle": [
            "%1$s Dasher"
        ],
        "tropicalBodyBrinelySingle": [
            "%1$s Brinely"
        ],
        "tropicalBodySpottySingle": [
            "%1$s Puntos"
        ],
        "tropicalBodyFlopperSingle": [
            "%1$s Flopper"
        ],
        "tropicalBodyStripeySingle": [
            "%1$s Franjas"
        ],
        "tropicalBodyGlitterSingle": [
            "%1$s Brillo"
        ],
        "tropicalBodyBlockfishSingle": [
            "%1$s Pez bloque"
        ],
        "tropicalBodyBettySingle": [
            "%1$s Betty"
        ],
        "tropicalBodyClayfishSingle": [
            "%1$s Pez arcilla"
        ],
        "tropicalBodyKobMulti": [
            "%1$s-%2$s Kob"
        ],
        "tropicalBodySunstreakMulti": [
            "%1$s-%2$s SunStreak"
        ],
        "tropicalBodySnooperMulti": [
            "%1$s-%2$s Snooper"
        ],
        "tropicalBodyDasherMulti": [
            "%1$s-%2$s Dasher"
        ],
        "tropicalBodyBrinelyMulti": [
            "%1$s-%2$s Brinely"
        ],
        "tropicalBodySpottyMulti": [
            "%1$s-%2$s Puntos"
        ],
        "tropicalBodyFlopperMulti": [
            "%1$s-%2$s Flopper"
        ],
        "tropicalBodyStripeyMulti": [
            "%1$s-%2$s Franjas"
        ],
        "tropicalBodyGlitterMulti": [
            "%1$s-%2$s Brillo"
        ],
        "tropicalBodyBlockfishMulti": [
            "%1$s-%2$s Pez bloque"
        ],
        "tropicalBodyBettyMulti": [
            "%1$s-%2$s Betty"
        ],
        "tropicalBodyClayfishMulti": [
            "%1$s-%2$s Pez arcilla"
        ],
        "tropicalSchoolAnemone": [
            "Anémona"
        ],
        "tropicalSchoolBlackTang": [
            "Cirujano negro"
        ],
        "tropicalSchoolBlueDory": [
            "Cirujano regal"
        ],
        "tropicalSchoolButterflyFish": [
            "Pez mariposa"
        ],
        "tropicalSchoolCichlid": [
            "Cíclido"
        ],
        "tropicalSchoolClownfish": [
            "Pez payaso"
        ],
        "tropicalSchoolCottonCandyBetta": [
            "Beta algodón de azúcar"
        ],
        "tropicalSchoolDottyback": [
            "Dottyback"
        ],
        "tropicalSchoolEmperorRedSnapper": [
            "Pargo emperador"
        ],
        "tropicalSchoolGoatfish": [
            "Salmonete"
        ],
        "tropicalSchoolMoorishIdol": [
            "Ídolo moro"
        ],
        "tropicalSchoolOrnateButterfly": [
            "Pez león rojo"
        ],
        "tropicalSchoolParrotfish": [
            "Pez loro"
        ],
        "tropicalSchoolQueenAngelFish": [
            "Pez ángel reina"
        ],
        "tropicalSchoolRedCichlid": [
            "Cíclido rojo"
        ],
        "tropicalSchoolRedLippedBlenny": [
            "Blenio labios rojos"
        ],
        "tropicalSchoolRedSnapper": [
            "Pargo"
        ],
        "tropicalSchoolThreadfin": [
            "Pez arcoíris de aleta filamentosa"
        ],
        "tropicalSchoolTomatoClown": [
            "Payaso tomate"
        ],
        "tropicalSchoolTriggerfish": [
            "Pez ballesta"
        ],
        "tropicalSchoolYellowTang": [
            "Cirujano amarillo"
        ],
        "tropicalSchoolYellowtailParrot": [
            "Pez loro de cola amarilla"
        ],
        "cake": [
            "Pastel"
        ],
        "camera": [
            "Cámara"
        ],
        "golden_carrot": [
            "Zanahoria de oro"
        ],
        "carrotOnAStick": [
            "Caña con zanahoria"
        ],
        "warped_fungus_on_a_stick": [
            "Seta deformada en un palo"
        ],
        "carrot": [
            "Zanahoria"
        ],
        "cauldron": [
            "Caldero"
        ],
        "coal": [
            "Carbón",
            null,
            "Carbón vegetal"
        ],
        "chainmail_chestplate": [
            "Coraza de malla"
        ],
        "leather_chestplate": [
            "Túnica de cuero"
        ],
        "diamond_chestplate": [
            "Coraza de diamante"
        ],
        "golden_chestplate": [
            "Coraza de oro"
        ],
        "iron_chestplate": [
            "Coraza de hierro"
        ],
        "chorus_fruit": [
            "Fruta coral"
        ],
        "chorus_fruit_popped": [
            "Fruta coral horneada"
        ],
        "cooked_beef": [
            "Filete cocido"
        ],
        "cooked_chicken": [
            "Pollo cocinado"
        ],
        "cooked_porkchop": [
            "Chuleta de cerdo cocinada"
        ],
        "chicken": [
            "Pollo crudo"
        ],
        "clay_ball": [
            "Arcilla"
        ],
        "clock": [
            "Reloj"
        ],
        "comparator": [
            "Comparador de piedra rojiza"
        ],
        "compass": [
            "Brújula"
        ],
        "lodestonecompass": [
            "Brújula de magnetita"
        ],
        "cookie": [
            "Galleta"
        ],
        "crossbow": [
            "Ballesta"
        ],
        "diamond": [
            "Diamante"
        ],
        "repeater": [
            "Repetidor de piedra rojiza"
        ],
        "acacia_door": [
            "Puerta de acacia"
        ],
        "birch_door": [
            "Puerta de abedul"
        ],
        "dark_oak_door": [
            "Puerta de roble oscuro"
        ],
        "iron_door": [
            "Puerta de hierro"
        ],
        "jungle_door": [
            "Puerta de jungla"
        ],
        "wooden_door": [
            "Puerta de roble"
        ],
        "spruce_door": [
            "Puerta de abeto"
        ],
        "crimson_door": [
            "Puerta escarlata"
        ],
        "warped_door": [
            "Puerta deformada"
        ],
        "dragon_breath": [
            "Aliento de dragón"
        ],
        "dye": [
            "Saco de tinta",
            "Saco de tinta",
            "Tinte rojo",
            "Tinte verde",
            "Granos de cacao",
            "Lapislázuli",
            "Tintura morada",
            "Tintura cian",
            "Tintura gris claro",
            "Tintura gris",
            "Tintura rosa",
            "Tintura verde lima",
            "Tinte amarillo",
            "Tintura celeste",
            "Tintura magenta",
            "Tintura naranja",
            "Polvo de hueso",
            "Tinte negro",
            "Tinte marrón",
            "Tinte azul",
            "Tinte blanco"
        ],
        "egg": [
            "Huevo"
        ],
        "elytra": [
            "Élitros"
        ],
        "emerald": [
            "Esmeralda"
        ],
        "emptyMap": [
            "Mapa vacío"
        ],
        "emptyLocatorMap": [
            "Mapa localizador vacío"
        ],
        "emptyPotion": [
            "Botella de agua"
        ],
        "enchanted_book": [
            "Libro de encantamientos"
        ],
        "end_crystal": [
            "Cristal de End"
        ],
        "end_rod": [
            "Vara de End"
        ],
        "ender_eye": [
            "Ojo de Ender"
        ],
        "ender_pearl": [
            "Perla de Ender"
        ],
        "experience_bottle": [
            "Botella de hechizo"
        ],
        "feather": [
            "Pluma"
        ],
        "fermented_spider_eye": [
            "Ojo de araña fermentado"
        ],
        "fireball": [
            "Descarga de fuego"
        ],
        "fireworks": [
            "Cohete de fuegos artificiales"
        ],
        "fireworksCharge": [
            "Estrella de fuegos artificiales"
        ],
        "clownfish": [
            "Pez tropical"
        ],
        "cooked_fish": [
            "Bacalao cocinado"
        ],
        "fish": [
            "Bacalao crudo"
        ],
        "pufferfish": [
            "Pez globo"
        ],
        "cooked_salmon": [
            "Salmón cocinado"
        ],
        "salmon": [
            "Salmón crudo"
        ],
        "fishing_rod": [
            "Caña de pescar"
        ],
        "flint": [
            "Pedernal"
        ],
        "flint_and_steel": [
            "Pedernal y acero"
        ],
        "flower_pot": [
            "Maceta"
        ],
        "frame": [
            "Marco"
        ],
        "ghast_tear": [
            "Lágrima de Ghast"
        ],
        "glass_bottle": [
            "Botella de cristal"
        ],
        "gold_nugget": [
            "Pepita de oro"
        ],
        "iron_nugget": [
            "Pepita de hierro"
        ],
        "diamond_axe": [
            "Hacha de diamante"
        ],
        "golden_axe": [
            "Hacha de oro"
        ],
        "iron_axe": [
            "Hacha de hierro"
        ],
        "stone_axe": [
            "Hacha de piedra"
        ],
        "wooden_axe": [
            "Hacha de madera"
        ],
        "chainmail_helmet": [
            "Casco de malla"
        ],
        "leather_helmet": [
            "Gorra de cuero"
        ],
        "diamond_helmet": [
            "Casco de diamante"
        ],
        "golden_helmet": [
            "Casco de oro"
        ],
        "iron_helmet": [
            "Casco de hierro"
        ],
        "diamond_hoe": [
            "Azadón de diamante"
        ],
        "golden_hoe": [
            "Azadón de oro"
        ],
        "iron_hoe": [
            "Azadón de hierro"
        ],
        "stone_hoe": [
            "Azadón de piedra"
        ],
        "wooden_hoe": [
            "Azadón de madera"
        ],
        "honey_bottle": [
            "Botella de miel"
        ],
        "honeycomb": [
            "Panal"
        ],
        "horsearmordiamond": [
            "Armadura de diamante para caballos"
        ],
        "horsearmorgold": [
            "Armadura de oro para caballos"
        ],
        "horsearmoriron": [
            "Armadura de hierro para caballos"
        ],
        "horsearmorleather": [
            "Armadura de cuero para caballos"
        ],
        "gold_ingot": [
            "Lingote de oro"
        ],
        "iron_ingot": [
            "Lingote de hierro"
        ],
        "netherite_ingot": [
            "Lingote de inframundita"
        ],
        "netherite_scrap": [
            "Pedazo de inframundita"
        ],
        "netherite_sword": [
            "Espada de inframundita"
        ],
        "netherite_pickaxe": [
            "Pico de inframundita"
        ],
        "netherite_axe": [
            "Hacha de inframundita"
        ],
        "netherite_shovel": [
            "Pala de inframundita"
        ],
        "netherite_hoe": [
            "Azadón de inframundita"
        ],
        "netherite_boots": [
            "Botas de inframundita"
        ],
        "netherite_leggings": [
            "Mallas de inframundita"
        ],
        "netherite_chestplate": [
            "Coraza de inframundita"
        ],
        "netherite_helmet": [
            "Casco de inframundita"
        ],
        "lead": [
            "Correa"
        ],
        "leather": [
            "Cuero"
        ],
        "leaves": [
            "Hojas",
            "Hojas de roble",
            "Hojas de abeto",
            "Hojas de abedul",
            "Hojas de jungla",
            "Hojas de acacia",
            "Hojas de roble oscuro"
        ],
        "chainmail_leggings": [
            "Musleras de malla"
        ],
        "leather_leggings": [
            "Pantalones de cuero"
        ],
        "diamond_leggings": [
            "Mallas de diamante"
        ],
        "golden_leggings": [
            "Musleras de oro"
        ],
        "iron_leggings": [
            "Musleras de hierro"
        ],
        "nautilus_shell": [
            "Concha de Nautilus"
        ],
        "heart_of_the_sea": [
            "Corazón del Mar"
        ],
        "magma_cream": [
            "Crema de magma"
        ],
        "map": [
            "Mapa"
        ],
        "melon": [
            "Sandía"
        ],
        "milk": [
            "Leche"
        ],
        "minecart": [
            "Vagoneta"
        ],
        "chest_minecart": [
            "Vagoneta con cofre"
        ],
        "command_block_minecart": [
            "Vagoneta con bloque de comandos"
        ],
        "minecartFurnace": [
            "Vagoneta con horno"
        ],
        "hopper_minecart": [
            "Vagoneta con tolva"
        ],
        "tnt_minecart": [
            "Vagoneta con dinamita"
        ],
        "trident": [
            "Tridente"
        ],
        "mushroom_stew": [
            "Sopa de hongos"
        ],
        "muttoncooked": [
            "Cordero cocinado"
        ],
        "muttonraw": [
            "Cordero crudo"
        ],
        "name_tag": [
            "Etiqueta"
        ],
        "netherbrick": [
            "Ladrillo del inframundo"
        ],
        "quartz": [
            "Cuarzo del inframundo"
        ],
        "nether_wart": [
            "Verruga del inframundo"
        ],
        "netherStar": [
            "Estrella del inframundo"
        ],
        "painting": [
            "Cuadro"
        ],
        "paper": [
            "Papel"
        ],
        "diamond_pickaxe": [
            "Pico de diamante"
        ],
        "golden_pickaxe": [
            "Pico de oro"
        ],
        "iron_pickaxe": [
            "Pico de hierro"
        ],
        "stone_pickaxe": [
            "Pico de piedra"
        ],
        "wooden_pickaxe": [
            "Pico de madera"
        ],
        "porkchop_cooked": [
            "Chuleta de cerdo cocinada"
        ],
        "porkchop": [
            "Chuleta de cerdo cruda"
        ],
        "portfolio": [
            "Album"
        ],
        "potato": [
            "Papa"
        ],
        "baked_potato": [
            "Papa asada"
        ],
        "poisonous_potato": [
            "Papa venenosa"
        ],
        "potion": [
            "Poción"
        ],
        "prismarine_crystals": [
            "Cristales de prismarina"
        ],
        "prismarine_shard": [
            "Fragmento de prismarina"
        ],
        "pumpkin_pie": [
            "Pay de calabaza"
        ],
        "cooked_rabbit": [
            "Conejo cocinado"
        ],
        "rabbit_foot": [
            "Pata de conejo"
        ],
        "rabbit_hide": [
            "Piel de conejo"
        ],
        "rabbit": [
            "Conejo crudo"
        ],
        "rabbit_stew": [
            "Sopa de conejo"
        ],
        "record": [
            "Disco"
        ],
        "redstone": [
            "Piedra rojiza"
        ],
        "reeds": [
            "Cañas de azúcar"
        ],
        "kelp": [
            "Alga parda"
        ],
        "dried_kelp": [
            "Alga parda seca"
        ],
        "rotten_flesh": [
            "Carne podrida"
        ],
        "ruby": [
            "Rubí"
        ],
        "saddle": [
            "Montura"
        ],
        "wheat_seeds": [
            "Semillas"
        ],
        "beetroot_seeds": [
            "Semillas de betabel"
        ],
        "melon_seeds": [
            "Semillas de sandía"
        ],
        "pumpkin_seeds": [
            "Semillas de calabaza"
        ],
        "shears": [
            "Tijeras"
        ],
        "diamond_shovel": [
            "Pala de diamante"
        ],
        "golden_shovel": [
            "Pala de oro"
        ],
        "iron_shovel": [
            "Pala de hierro"
        ],
        "stone_shovel": [
            "Pala de piedra"
        ],
        "wooden_shovel": [
            "Pala de madera"
        ],
        "sign": [
            "Letrero de roble"
        ],
        "spruce_sign": [
            "Letrero de abeto"
        ],
        "birch_sign": [
            "Letrero de abedul"
        ],
        "jungle_sign": [
            "Letrero de jungla"
        ],
        "acacia_sign": [
            "Letrero de acacia"
        ],
        "darkoak_sign": [
            "Letrero de roble oscuro"
        ],
        "crimson_sign": [
            "Letrero escarlata"
        ],
        "warped_sign": [
            "Letrero deformado"
        ],
        "skull": [
            "Calavera de esqueleto",
            "Calavera de esqueleto",
            "Calavera de esqueleto de Wither",
            "Cabeza de zombi",
            "Cabeza",
            "Cabeza de Creeper",
            "Cabeza de dragón"
        ],
        "slime_ball": [
            "Bola de Slime"
        ],
        "snowball": [
            "Bola de nieve"
        ],
        "speckled_melon": [
            "Sandía resplandeciente"
        ],
        "spider_eye": [
            "Ojo de araña"
        ],
        "stick": [
            "Palo"
        ],
        "string": [
            "Cuerda"
        ],
        "sugar": [
            "Azúcar"
        ],
        "gunpowder": [
            "Pólvora"
        ],
        "diamond_sword": [
            "Espada de diamante"
        ],
        "golden_sword": [
            "Espada de oro"
        ],
        "iron_sword": [
            "Espada de hierro"
        ],
        "stone_sword": [
            "Espada de piedra"
        ],
        "wooden_sword": [
            "Espada de madera"
        ],
        "wheat": [
            "Trigo"
        ],
        "writable_book": [
            "Libro y pluma"
        ],
        "written_book": [
            "Libro escrito"
        ],
        "glowstone_dust": [
            "Polvo de piedra luminosa"
        ],
        "shield": [
            "Escudo"
        ],
        "shulker_shell": [
            "Coraza de Shulker"
        ],
        "totem": [
            "Tótem de la inmortalidad"
        ],
        "turtle_helmet": [
            "Caparazón de tortuga"
        ],
        "turtle_shell_piece": [
            "Escama"
        ],
        "phantom_membrane": [
            "Membrana de fantasma"
        ],
        "sweet_berries": [
            "Bayas dulces"
        ],
        "suspicious_stew": [
            "Estofado sospechoso"
        ],
        "banner_pattern": [
            "Patrón de estandarte"
        ],
        "acaciaFence": [
            "Valla de acacia"
        ],
        "acacia_fence_gate": [
            "Puerta de valla de acacia"
        ],
        "activator_rail": [
            "Riel activador"
        ],
        "allow": [
            "Permitir"
        ],
        "deny": [
            "Rechazar"
        ],
        "border_block": [
            "Frontera"
        ],
        "anvil": [
            "Yunque",
            "Yunque",
            null,
            null,
            null,
            "Yunque algo dañado",
            null,
            null,
            null,
            "Yunque muy dañado"
        ],
        "barrier": [
            "Barrera"
        ],
        "beacon": [
            "Faro"
        ],
        "beehive": [
            "Colmena"
        ],
        "bee_nest": [
            "Nido de abejas"
        ],
        "target": [
            "Objetivo"
        ],
        "bedrock": [
            "Roca madre"
        ],
        "conduit": [
            "Conducto"
        ],
        "invisibleBedrock": [
            "Piedra base invisible"
        ],
        "birchFence": [
            "Valla de abedul"
        ],
        "birch_fence_gate": [
            "Puerta de valla de abedul"
        ],
        "blast_furnace": [
            "Horno de fusión"
        ],
        "bone_block": [
            "Bloque de hueso"
        ],
        "coal_block": [
            "Bloque de carbón"
        ],
        "diamond_block": [
            "Bloque de diamante"
        ],
        "emerald_block": [
            "Bloque de esmeralda"
        ],
        "gold_block": [
            "Bloque de oro"
        ],
        "iron_block": [
            "Bloque de hierro"
        ],
        "lapis_block": [
            "Bloque de lapislázuli"
        ],
        "redstone_block": [
            "Bloque de piedra rojiza"
        ],
        "bookshelf": [
            "Estantería"
        ],
        "brick_block": [
            "Ladrillos"
        ],
        "brown_mushroom": [
            "Hongo marrón"
        ],
        "wooden_button": [
            "Botón de roble"
        ],
        "acacia_button": [
            "Botón de acacia"
        ],
        "birch_button": [
            "Botón de abedul"
        ],
        "dark_oak_button": [
            "Botón de roble oscuro"
        ],
        "jungle_button": [
            "Botón de jungla"
        ],
        "spruce_button": [
            "Botón de abeto"
        ],
        "stone_button": [
            "Botón de piedra"
        ],
        "cactus": [
            "Cactus"
        ],
        "dried_kelp_block": [
            "Bloque de alga parda seca"
        ],
        "carved_pumpkin": [
            "Calabaza tallada"
        ],
        "chest": [
            "Cofre"
        ],
        "ender_chest": [
            "Cofre de Ender"
        ],
        "jigsaw": [
            "Bloque rompecabezas"
        ],
        "honey_block": [
            "Bloque de miel"
        ],
        "honeycomb_block": [
            "Bloque de panal"
        ],
        "lodestone": [
            "Magnetita"
        ],
        "nether_sprouts": [
            "Retoños del inframundo"
        ],
        "crimson_stem": [
            "Tallo escarlata"
        ],
        "warped_stem": [
            "Tallo deformado"
        ],
        "stripped_crimson_stem": [
            "Tallo escarlata pelado"
        ],
        "stripped_warped_stem": [
            "Tallo deformado pelado"
        ],
        "crimson_hyphae": [
            "Hifas escarlata"
        ],
        "warped_hyphae": [
            "Hifas deformadas"
        ],
        "stripped_crimson_hyphae": [
            "Hifas escarlata peladas"
        ],
        "stripped_warped_hyphae": [
            "Hifas deformadas peladas"
        ],
        "crimson_planks": [
            "Tablones escarlata"
        ],
        "warped_planks": [
            "Tablones deformados"
        ],
        "crimson_trapdoor": [
            "Escotilla escarlata"
        ],
        "warped_trapdoor": [
            "Escotilla deformada"
        ],
        "crimson_standing_sign": [
            "Letrero escarlata"
        ],
        "warped_standing_sign": [
            "Letrero deformado"
        ],
        "crimson_wall_sign": [
            "Letrero escarlata"
        ],
        "warped_wall_sign": [
            "Letrero deformado"
        ],
        "crimson_stairs": [
            "Escaleras escarlata"
        ],
        "warped_stairs": [
            "Escaleras deformadas"
        ],
        "crimson_fence": [
            "Valla escarlata"
        ],
        "warped_fence": [
            "Valla deformada"
        ],
        "crimson_fence_gate": [
            "Puerta de valla escarlata"
        ],
        "warped_fence_gate": [
            "Puerta de valla deformada"
        ],
        "crimson_button": [
            "Botón escarlata"
        ],
        "warped_button": [
            "Botón deformado"
        ],
        "crimson_pressure_plate": [
            "Placa de presión escarlata"
        ],
        "warped_pressure_plate": [
            "Placa de presión deformada"
        ],
        "crimson_slab": [
            "Losa escarlata"
        ],
        "warped_slab": [
            "Losa deformada"
        ],
        "crimson_double_slab": [
            "Losa escarlata"
        ],
        "warped_double_slab": [
            "Losa deformada"
        ],
        "shroomlight": [
            "Luz de hongo"
        ],
        "crimson_nylium": [
            "Nylium escarlata"
        ],
        "warped_nylium": [
            "Nylium deformado"
        ],
        "basalt": [
            "Basalto"
        ],
        "polished_basalt": [
            "Basalto pulido"
        ],
        "blackstone": [
            "Piedra negra"
        ],
        "polished_blackstone_bricks": [
            "Ladrillos de piedra negra pulida"
        ],
        "cracked_polished_blackstone_bricks": [
            "Ladrillos de piedra negra pulida rotos"
        ],
        "polished_blackstone_brick_stairs": [
            "Escaleras de ladrillo de piedra negra pulida"
        ],
        "blackstone_stairs": [
            "Escaleras de piedra negra"
        ],
        "blackstone_wall": [
            "Pared de piedra negra"
        ],
        "polished_blackstone_brick_wall": [
            "Pared de ladrillo de piedra negra pulida"
        ],
        "chiseled_polished_blackstone": [
            "Piedra negra pulida cincelada"
        ],
        "gilded_blackstone": [
            "Piedra negra dorada"
        ],
        "blackstone_slab": [
            "Losa de piedra negra"
        ],
        "polished_blackstone_brick_slab": [
            "Losa de ladrillo de piedra negra pulida"
        ],
        "chain": [
            "Cota de malla"
        ],
        "soul_soil": [
            "Tierra de almas"
        ],
        "soul_fire": [
            "Fuego de almas"
        ],
        "polished_blackstone": [
            "Piedra negra pulida"
        ],
        "polished_blackstone_stairs": [
            "Escaleras de piedra negra pulida"
        ],
        "polished_blackstone_slab": [
            "Losa de piedra negra pulida"
        ],
        "polished_blackstone_pressure_plate": [
            "Placa de presión de piedra negra pulida"
        ],
        "polished_blackstone_button": [
            "Botón de piedra negra pulida"
        ],
        "polished_blackstone_wall": [
            "Pared de piedra negra pulida"
        ],
        "soul_campfire": [
            "Fogata de alma"
        ],
        "chiseled_nether_bricks": [
            "Ladrillos del inframundo cincelados"
        ],
        "cracked_nether_bricks": [
            "Ladrillos del inframundo rotos"
        ],
        "quartz_bricks": [
            "Ladrillos de cuarzo"
        ],
        "trapped_chest": [
            "Cofre con trampa"
        ],
        "shulkerBoxWhite": [
            "Caja de Shulker blanca"
        ],
        "shulkerBoxOrange": [
            "Caja de Shulker naranja"
        ],
        "shulkerBoxMagenta": [
            "Caja de Shulker magenta"
        ],
        "shulkerBoxLightBlue": [
            "Caja de Shulker celeste"
        ],
        "shulkerBoxYellow": [
            "Caja de Shulker amarilla"
        ],
        "shulkerBoxLime": [
            "Caja de Shulker verde lima"
        ],
        "shulkerBoxPink": [
            "Caja de Shulker rosa"
        ],
        "shulkerBoxGray": [
            "Caja de Shulker gris"
        ],
        "shulkerBoxSilver": [
            "Caja de Shulker gris claro"
        ],
        "shulkerBoxCyan": [
            "Caja de Shulker cian"
        ],
        "shulkerBoxPurple": [
            "Caja de Shulker morada"
        ],
        "shulkerBoxBlue": [
            "Caja de Shulker azul"
        ],
        "shulkerBoxBrown": [
            "Caja de Shulker marrón"
        ],
        "shulkerBoxGreen": [
            "Caja de Shulker verde"
        ],
        "shulkerBoxRed": [
            "Caja de Shulker roja"
        ],
        "shulkerBoxBlack": [
            "Caja de Shulker negra"
        ],
        "shulkerBox": [
            "Caja de Shulker"
        ],
        "chorus_flower": [
            "Flor coral"
        ],
        "chorus_plant": [
            "Planta coral"
        ],
        "stained_glass": [
            "Cristal teñido de blanco",
            "Cristal teñido de blanco",
            "Cristal teñido de naranja",
            "Cristal teñido de magenta",
            "Cristal teñido de celeste",
            "Cristal teñido de amarillo",
            "Cristal teñido de verde lima",
            "Cristal teñido de rosa",
            "Cristal teñido de gris",
            "Cristal teñido de gris claro",
            "Cristal teñido de cian",
            "Cristal teñido de morado",
            "Cristal teñido de azul",
            "Cristal teñido de marrón",
            "Cristal teñido de verde",
            "Cristal teñido de rojo",
            "Cristal teñido de negro"
        ],
        "stained_glass_pane": [
            "Panel de cristal teñido de blanco",
            "Panel de cristal teñido de blanco",
            "Panel de cristal teñido de naranja",
            "Panel de cristal teñido de magenta",
            "Panel de cristal teñido de celeste",
            "Panel de cristal teñido de amarillo",
            "Panel de cristal teñido de verde lima",
            "Panel de cristal teñido de rosa",
            "Panel de cristal teñido de gris",
            "Panel de cristal teñido de gris claro",
            "Panel de cristal teñido de cian",
            "Panel de cristal teñido de morado",
            "Panel de cristal teñido de azul",
            "Panel de cristal teñido de marrón",
            "Panel de cristal teñido de verde",
            "Panel de cristal teñido de rojo",
            "Panel de cristal teñido de negro"
        ],
        "clay": [
            "Arcilla"
        ],
        "hardened_clay": [
            "Terracota"
        ],
        "stained_hardened_clay": [
            "Terracota",
            "Terracota blanca",
            "Terracota naranja",
            "Terracota magenta",
            "Terracota celeste",
            "Terracota amarilla",
            "Terracota verde lima",
            "Terracota rosa",
            "Terracota gris",
            "Terracota gris claro",
            "Terracota cian",
            "Terracota morada",
            "Terracota azul",
            "Terracota marrón",
            "Terracota verde",
            "Terracota roja",
            "Terracota negra"
        ],
        "structure_block": [
            "Bloque de estructuras"
        ],
        "structure_void": [
            "Vacío de estructuras"
        ],
        "wool": [
            "Lana",
            "Lana blanca",
            "Lana naranja",
            "Lana magenta",
            "Lana celeste",
            "Lana amarilla",
            "Lana verde lima",
            "Lana rosa",
            "Lana gris",
            "Lana gris claro",
            "Lana cian",
            "Lana morada",
            "Lana azul",
            "Lana marrón",
            "Lana verde",
            "Lana roja",
            "Lana negra"
        ],
        "cobblestone_wall": [
            "Pared de adoquín",
            "Pared de adoquín",
            "Pared de adoquines musgosa",
            "Pared de granito",
            "Pared de diorita",
            "Pared de andesita",
            "Pared de arenisca",
            "Pared de ladrillo",
            "Pared de ladrillo de piedra",
            "Pared de ladrillo de piedra musgosa",
            "Pared de ladrillo de piedra de End",
            "Pared de ladrillo del inframundo",
            "Pared de prismarina",
            "Pared de arenisca roja",
            "Pared de ladrillo del inframundo rojo"
        ],
        "cocoa": [
            "Cacao"
        ],
        "command_block": [
            "Bloque de comandos"
        ],
        "composter": [
            "Compostador"
        ],
        "light_block": [
            "Bloque ligero"
        ],
        "repeating_command_block": [
            "Bloque de comandos que se repite"
        ],
        "chain_command_block": [
            "Bloque de comandos en cadena"
        ],
        "darkOakFence": [
            "Valla de roble oscuro"
        ],
        "dark_oak_fence_gate": [
            "Puerta de valla de roble oscuro"
        ],
        "daylight_detector": [
            "Sensor de luz diurna"
        ],
        "deadbush": [
            "Arbusto muerto"
        ],
        "detector_rail": [
            "Riel detector"
        ],
        "dirt": [
            "Tierra",
            "Tierra",
            "Tierra estéril"
        ],
        "podzol": [
            "Podsol"
        ],
        "purpur_block": [
            "Bloque de púrpura",
            "Bloque de púrpura",
            "Púrpura cincelada",
            "Pilar de púrpura"
        ],
        "dispenser": [
            "Dispensador"
        ],
        "doorWood": [
            "Puerta de madera"
        ],
        "double_plant": [
            "Planta",
            "Girasol",
            "Lavanda",
            "Pasto alto x2",
            "Helecho alto",
            "Rosal",
            "Peonía"
        ],
        "dragon_egg": [
            "Huevo de dragón"
        ],
        "dropper": [
            "Soltador"
        ],
        "enchanting_table": [
            "Mesa de encantamientos"
        ],
        "enderChest": [
            "Cofre de Ender"
        ],
        "end_portal_frame": [
            "Portal de End"
        ],
        "farmland": [
            "Tierra de cultivo"
        ],
        "fletching_table": [
            "Mesa de arquería"
        ],
        "fence": [
            "Valla de roble"
        ],
        "fence_gate": [
            "Puerta de valla de roble"
        ],
        "iron_bars": [
            "Barras de hierro"
        ],
        "fire": [
            "Fuego"
        ],
        "yellow_flower": [
            "Flor",
            "Diente de león"
        ],
        "red_flower": [
            "Flor",
            "Amapola",
            "Orquídea azul",
            "Allium",
            "Azure bluet",
            "Tulipán rojo",
            "Tulipán naranja",
            "Tulipán blanco",
            "Tulipán rosa",
            "Margarita ojo de buey",
            "Aciano",
            "Lirio del valle"
        ],
        "wither_rose": [
            "Rosa de Wither"
        ],
        "furnace": [
            "Horno"
        ],
        "glass": [
            "Cristal"
        ],
        "golden_rail": [
            "Riel propulsado"
        ],
        "grass": [
            "Bloque de pasto"
        ],
        "grass_path": [
            "Camino de pasto"
        ],
        "gravel": [
            "Grava"
        ],
        "hay_block": [
            "Fardo de heno"
        ],
        "netherrack": [
            "Infiedra"
        ],
        "soul_sand": [
            "Arena de almas"
        ],
        "hopper": [
            "Tolva"
        ],
        "ice": [
            "Hielo"
        ],
        "packed_ice": [
            "Hielo comprimido"
        ],
        "blue_ice": [
            "Hielo azul"
        ],
        "iron_trapdoor": [
            "Escotilla de hierro"
        ],
        "jukebox": [
            "Tocadiscos"
        ],
        "jungleFence": [
            "Valla de jungla"
        ],
        "jungle_fence_gate": [
            "Puerta de valla de jungla"
        ],
        "ladder": [
            "Escalera"
        ],
        "flowing_lava": [
            "Lava"
        ],
        "leaves2": [
            "Hojas de acacia",
            "Hojas de acacia",
            "Hojas de roble oscuro"
        ],
        "lever": [
            "Palanca"
        ],
        "glowstone": [
            "Piedra luminosa"
        ],
        "lit_pumpkin": [
            "Calabaza iluminada"
        ],
        "lockedchest": [
            "Cofre cerrado"
        ],
        "log2": [
            "Leño de acacia",
            "Leño de acacia",
            "Leño de roble oscuro"
        ],
        "log": [
            "Leño",
            "Leño de roble",
            "Leño de abeto",
            "Leño de abedul",
            "Leño de la jungla"
        ],
        "magma": [
            "Bloque de magma"
        ],
        "melon_block": [
            "Sandía"
        ],
        "mob_spawner": [
            "Generador de monstruos"
        ],
        "monster_egg": [
            "Piedra infestada",
            "Piedra infestada",
            "Adoquín infestado",
            "Ladrillo de piedra infestado",
            "Ladrillo de piedra musgosa infestado",
            "Ladrillo de piedra roto infestado",
            "Ladrillo de piedra cincelada infestado"
        ],
        "mushroom": [
            "Hongo"
        ],
        "noteblock": [
            "Bloque musical"
        ],
        "mycelium": [
            "Micelio"
        ],
        "nether_brick": [
            "Ladrillo del inframundo"
        ],
        "red_nether_brick": [
            "Ladrillo del inframundo rojo"
        ],
        "nether_brick_fence": [
            "Valla de ladrillos del inframundo"
        ],
        "quartz_ore": [
            "Mineral de cuarzo del mundo inferior"
        ],
        "netherreactor": [
            "Núcleo del reactor del inframundo"
        ],
        "nether_wart_block": [
            "Bloque de verruga del inframundo"
        ],
        "warped_wart_block": [
            "Bloque de verruga deformada"
        ],
        "unlit_redstone_torch": [
            "Antorcha de piedra rojiza"
        ],
        "redstone_torch": [
            "Antorcha de piedra rojiza"
        ],
        "soul_torch": [
            "Antorcha de alma"
        ],
        "obsidian": [
            "Obsidiana"
        ],
        "coal_ore": [
            "Mineral de carbón"
        ],
        "diamond_ore": [
            "Mineral de diamante"
        ],
        "emerald_ore": [
            "Mineral de esmeralda"
        ],
        "gold_ore": [
            "Mineral de oro"
        ],
        "iron_ore": [
            "Mineral de hierro"
        ],
        "lapis_ore": [
            "Mineral de lapislázuli"
        ],
        "redstone_ore": [
            "Mineral de piedra rojiza"
        ],
        "oreRuby": [
            "Mineral de rubí"
        ],
        "observer": [
            "Observador"
        ],
        "piston": [
            "Pistón"
        ],
        "sticky_piston": [
            "Pistón pegajoso"
        ],
        "portal": [
            "Portal"
        ],
        "potatoes": [
            "Papas"
        ],
        "stone_pressure_plate": [
            "Placa de presión de piedra"
        ],
        "wooden_pressure_plate": [
            "Placa de presión de roble"
        ],
        "acacia_pressure_plate": [
            "Placa de presión de acacia"
        ],
        "birch_pressure_plate": [
            "Placa de presión de abedul"
        ],
        "dark_oak_pressure_plate": [
            "Placa de presión de roble oscuro"
        ],
        "jungle_pressure_plate": [
            "Placa de presión de jungla"
        ],
        "spruce_pressure_plate": [
            "Placa de presión de abeto"
        ],
        "prismarine": [
            "Prismarina",
            "Prismarina",
            "Ladrillos de prismarina",
            "Prismarina oscura"
        ],
        "pumpkin": [
            "Calabaza"
        ],
        "pumpkin_stem": [
            "Tallo de calabaza"
        ],
        "quartz_block": [
            "Bloque de cuarzo",
            "Bloque de cuarzo",
            "Bloque de cuarzo cincelado",
            "Pilar de cuarzo",
            "Bloque de cuarzo liso"
        ],
        "rail": [
            "Riel"
        ],
        "red_mushroom": [
            "Hongo rojo"
        ],
        "crimson_fungus": [
            "Seta escarlata"
        ],
        "warped_fungus": [
            "Seta deformada"
        ],
        "red_mushroom_block": [
            "Bloque de hongo rojo"
        ],
        "red_sandstone": [
            "Arenisca roja",
            "Arenisca roja",
            "Arenisca roja cincelada",
            "Arenisca roja cortada",
            "Arenisca roja lisa"
        ],
        "redstone_wire": [
            "Polvo de piedra rojiza"
        ],
        "redstone_lamp": [
            "Lámpara de piedra rojiza"
        ],
        "sand": [
            "Arena",
            "Arena",
            "Arena roja"
        ],
        "sandstone": [
            "Arenisca",
            "Arenisca",
            "Arenisca cincelada",
            "Arenisca cortada",
            "Arenisca lisa"
        ],
        "sapling": [
            "Retoño de roble",
            "Retoño de roble",
            "Retoño de abeto",
            "Retoño de abedul",
            "Retoño de la jungla",
            "Retoño de acacia",
            "Retoño de roble oscuro"
        ],
        "seaLantern": [
            "Linterna marina"
        ],
        "standing_sign": [
            "Letrero"
        ],
        "spruce_standing_sign": [
            "Letrero de abeto"
        ],
        "birch_standing_sign": [
            "Letrero de abedul"
        ],
        "jungle_standing_sign": [
            "Letrero de jungla"
        ],
        "acacia_standing_sign": [
            "Letrero de acacia"
        ],
        "darkoak_standing_sign": [
            "Letrero de roble oscuro"
        ],
        "slime": [
            "Bloque de Slime"
        ],
        "snow": [
            "Nieve"
        ],
        "sponge": [
            "Esponja",
            "Esponja",
            "Esponja mojada"
        ],
        "spruceFence": [
            "Valla de abeto"
        ],
        "spruce_fence_gate": [
            "Puerta de valla de abeto"
        ],
        "brick_stairs": [
            "Escaleras de ladrillo"
        ],
        "nether_brick_stairs": [
            "Escaleras de ladrillos del inframundo"
        ],
        "quartz_stairs": [
            "Escaleras de cuarzo"
        ],
        "smooth_quartz_stairs": [
            "Escaleras de cuarzo liso"
        ],
        "red_sandstone_stairs": [
            "Escaleras de arenisca roja"
        ],
        "sandstone_stairs": [
            "Escaleras de arenisca"
        ],
        "stone_stairs": [
            "Escaleras de adoquines"
        ],
        "normal_stone_stairs": [
            "Escaleras de piedra"
        ],
        "stone_brick_stairs": [
            "Escaleras de ladrillos de piedra"
        ],
        "oak_stairs": [
            "Escaleras de roble"
        ],
        "acacia_stairs": [
            "Escaleras de acacia"
        ],
        "birch_stairs": [
            "Escaleras de abedul"
        ],
        "dark_oak_stairs": [
            "Escaleras de roble oscuro"
        ],
        "jungle_stairs": [
            "Escaleras de madera de la jungla"
        ],
        "spruce_stairs": [
            "Escaleras de abeto"
        ],
        "purpur_stairs": [
            "Escaleras de púrpura"
        ],
        "prismarine_stairs": [
            "Estrellas de prismarina"
        ],
        "dark_prismarine_stairs": [
            "Estrellas de prismarina oscura"
        ],
        "prismarine_bricks_stairs": [
            "Escaleras de ladrillo de prismarina"
        ],
        "granite_stairs": [
            "Escaleras de granito"
        ],
        "diorite_stairs": [
            "Escaleras de diorita"
        ],
        "andesite_stairs": [
            "Escaleras de andesita"
        ],
        "polished_granite_stairs": [
            "Escaleras de granito pulido"
        ],
        "polished_diorite_stairs": [
            "Escaleras de diorita pulida"
        ],
        "polished_andesite_stairs": [
            "Escaleras de andesita pulida"
        ],
        "mossy_stone_brick_stairs": [
            "Escaleras de ladrillo de piedra musgosa"
        ],
        "smooth_red_sandstone_stairs": [
            "Escaleras de arenisca roja lisa"
        ],
        "smooth_sandstone_stairs": [
            "Escaleras de arenisca lisa"
        ],
        "end_brick_stairs": [
            "Escaleras de ladrillo de piedra de End"
        ],
        "mossy_cobblestone_stairs": [
            "Escaleras de adoquín musgoso"
        ],
        "red_nether_brick_stairs": [
            "Escaleras de ladrillo del inframundo rojo"
        ],
        "smooth_stone": [
            "Piedra lisa"
        ],
        "standing_banner": [
            "Estandarte",
            "Estandarte negro",
            "Estandarte rojo",
            "Estandarte verde",
            "Estandarte marrón",
            "Estandarte azul",
            "Estandarte morado",
            "Estandarte cian",
            "Estandarte gris claro",
            "Estandarte gris",
            "Estandarte rosa",
            "Estandarte verde lima",
            "Estandarte amarillo",
            "Estandarte celeste",
            "Estandarte magenta",
            "Estandarte naranja",
            "Estandarte"
        ],
        "stone": [
            "Piedra",
            "Piedra",
            "Granito",
            "Granito pulido",
            "Diorita",
            "Diorita pulida",
            "Andesita",
            "Andesita pulida"
        ],
        "cobblestone": [
            "Adoquín"
        ],
        "stonebrick": [
            "Ladrillos de piedra",
            "Ladrillos de piedra",
            "Ladrillos de piedra musgosa",
            "Ladrillos de piedra cincelados"
        ],
        "stonecutter": [
            "Cortapiedra"
        ],
        "stonecutter_block": [
            "Cortapiedra"
        ],
        "mossy_cobblestone": [
            "Adoquín musgoso"
        ],
        "double_stone_slab": [
            "Losa de piedra",
            "Losa de piedra",
            "Losa de arenisca",
            "Losa de madera",
            "Losa de adoquines",
            "Losa de ladrillo",
            "Losa de ladrillos de piedra",
            "Losa de cuarzo",
            "Losa de ladrillo del inframundo"
        ],
        "stone_slab": [
            "Losa de piedra",
            "Losa de piedra lisa",
            "Losa de arenisca",
            "Losa de madera",
            "Losa de adoquines",
            "Losa de ladrillo",
            "Losa de ladrillos de piedra",
            "Losa de cuarzo",
            "Losa de ladrillo del inframundo"
        ],
        "double_stone_slab2": [
            "Losa de arenisca roja",
            "Losa de arenisca roja"
        ],
        "stone_slab2": [
            "Losa de arenisca roja",
            "Losa de arenisca roja",
            "Losa de púrpura",
            "Losa de prismarina",
            "Losa de ladrillos de prismarina",
            "Losa de prismarina oscura",
            "Losa de adoquín musgoso",
            "Losa de arenisca lisa",
            "Losa de ladrillo del inframundo rojo"
        ],
        "stone_slab3": [
            "Losa de ladrillo de piedra de End",
            "Losa de ladrillo de piedra de End",
            "Losa de arenisca roja lisa",
            "Losa de andesita pulida",
            "Losa de andesita",
            "Losa de diorita",
            "Losa de diorita pulida",
            "Losa de granito",
            "Losa de granito pulido"
        ],
        "stone_slab4": [
            "Losa de ladrillo de piedra musgosa",
            "Losa de ladrillo de piedra musgosa",
            "Losa de cuarzo liso",
            "Losa de piedra",
            "Losa de arenisca cortada",
            "Losa de arenisca roja cortada"
        ],
        "coral_block": [
            "Bloque de coral tubo",
            "Bloque de coral tubo",
            "Bloque de coral cerebro",
            "Bloque de coral burbuja",
            "Bloque de coral de fuego",
            "Bloque de coral rugoso",
            "Bloque de coral tubo muerto",
            "Bloque de coral cerebro muerto",
            "Bloque de coral burbuja muerto",
            "Bloque de coral de fuego muerto",
            "Bloque de coral rugoso muerto"
        ],
        "tallgrass": [
            "Pasto",
            "Pasto",
            "Helecho"
        ],
        "seagrass": [
            "Algas marinas",
            "Algas marinas"
        ],
        "sea_pickle": [
            "Pepinillo de mar"
        ],
        "turtle_egg": [
            "Huevo pequeño de tortuga marina"
        ],
        "coral": [
            "Coral tubo",
            "Coral tubo",
            "Coral cerebro",
            "Coral burbuja",
            "Coral de fuego",
            "Coral rugoso",
            "Coral de tubo muerto",
            "Coral de cerebro muerto",
            "Coral de burbuja muerto",
            "Coral de fuego muerto",
            "Coral de cuerno muerto"
        ],
        "coral_fan": [
            "Coral tubo tipo abanico",
            "Coral tubo tipo abanico",
            "Coral cerebro tipo abanico",
            "Coral burbuja tipo abanico",
            "Coral de fuego tipo abanico",
            "Coral rugoso tipo abanico"
        ],
        "coral_fan_dead": [
            "Coral tubo tipo abanico muerto",
            "Coral tubo tipo abanico muerto",
            "Coral cerebro tipo abanico muerto",
            "Coral burbuja tipo abanico muerto",
            "Coral de fuego tipo abanico muerto",
            "Coral rugoso tipo abanico muerto"
        ],
        "glass_pane": [
            "Panel de cristal"
        ],
        "tnt": [
            "Dinamita"
        ],
        "snow_layer": [
            "Capa de nieve"
        ],
        "torch": [
            "Antorcha"
        ],
        "trapdoor": [
            "Escotilla de roble"
        ],
        "acacia_trapdoor": [
            "Escotilla de acacia"
        ],
        "birch_trapdoor": [
            "Escotilla de abedul"
        ],
        "dark_oak_trapdoor": [
            "Escotilla de roble oscuro"
        ],
        "jungle_trapdoor": [
            "Escotilla de jungla"
        ],
        "spruce_trapdoor": [
            "Escotilla de abeto"
        ],
        "tripWire": [
            "Cable trampa"
        ],
        "tripwire_hook": [
            "Gancho de cable trampa"
        ],
        "vine": [
            "Enredadera"
        ],
        "weeping_vines": [
            "Enredaderas lloronas"
        ],
        "twisting_vines": [
            "Enredaderas retorcidas"
        ],
        "flowing_water": [
            "Agua"
        ],
        "water": [
            "Agua"
        ],
        "waterlily": [
            "Nenúfar"
        ],
        "web": [
            "Tela de araña"
        ],
        "heavy_weighted_pressure_plate": [
            "Placa de presión por peso (pesado)"
        ],
        "light_weighted_pressure_plate": [
            "Placa de presión por peso (ligero)"
        ],
        "end_stone": [
            "Piedra de End"
        ],
        "end_bricks": [
            "Ladrillos de piedra de End"
        ],
        "planks": [
            "Tablones de madera",
            "Tablones de roble",
            "Tablones de abeto",
            "Tablones de abedul",
            "Tablones de madera de jungla",
            "Tablones de acacia",
            "Tablones de roble oscuro"
        ],
        "wooden_slab": [
            "Losa de madera",
            "Losa de roble",
            "Losa de abeto",
            "Losa de abedul",
            "Losa de madera de la jungla",
            "Losa de acacia",
            "Losa de roble oscuro"
        ],
        "carpet": [
            "Alfombra",
            "Alfombra negra",
            "Alfombra roja",
            "Alfombra verde",
            "Alfombra marrón",
            "Alfombra azul",
            "Alfombra morada",
            "Alfombra cian",
            "Alfombra gris claro",
            "Alfombra gris",
            "Alfombra rosa",
            "Alfombra verde lima",
            "Alfombra amarilla",
            "Alfombra celeste",
            "Alfombra magenta",
            "Alfombra naranja",
            "Alfombra blanca"
        ],
        "crafting_table": [
            "Mesa de trabajo"
        ],
        "white_glazed_terracotta": [
            "Terracota vidriada blanca",
            "Terracota vidriada blanca"
        ],
        "orange_glazed_terracotta": [
            "Terracota vidriada naranja",
            "Terracota vidriada naranja"
        ],
        "magenta_glazed_terracotta": [
            "Terracota vidriada magenta",
            "Terracota vidriada magenta"
        ],
        "light_blue_glazed_terracotta": [
            "Terracota vidriada celeste",
            "Terracota vidriada celeste"
        ],
        "yellow_glazed_terracotta": [
            "Terracota vidriada amarilla",
            "Terracota vidriada amarilla"
        ],
        "lime_glazed_terracotta": [
            "Terracota vidriada verde lima",
            "Terracota vidriada verde lima"
        ],
        "pink_glazed_terracotta": [
            "Terracota vidriada rosa",
            "Terracota vidriada rosa"
        ],
        "gray_glazed_terracotta": [
            "Terracota vidriada gris",
            "Terracota vidriada gris"
        ],
        "silver_glazed_terracotta": [
            "Terracota vidriada gris claro",
            "Terracota vidriada gris claro"
        ],
        "cyan_glazed_terracotta": [
            "Terracota vidriada cian",
            "Terracota vidriada cian"
        ],
        "purple_glazed_terracotta": [
            "Terracota vidriada morada",
            "Terracota vidriada morada"
        ],
        "blue_glazed_terracotta": [
            "Terracota vidriada azul",
            "Terracota vidriada azul"
        ],
        "brown_glazed_terracotta": [
            "Terracota vidriada marrón",
            "Terracota vidriada marrón"
        ],
        "green_glazed_terracotta": [
            "Terracota vidriada verde",
            "Terracota vidriada verde"
        ],
        "red_glazed_terracotta": [
            "Terracota vidriada roja",
            "Terracota vidriada roja"
        ],
        "black_glazed_terracotta": [
            "Terracota vidriada negra",
            "Terracota vidriada negra"
        ],
        "concrete": [
            "Concreto blanco",
            "Concreto blanco",
            "Concreto naranja",
            "Concreto magenta",
            "Concreto celeste",
            "Concreto amarillo",
            "Concreto verde lima",
            "Concreto rosa",
            "Concreto gris",
            "Concreto gris claro",
            "Concreto cian",
            "Concreto morado",
            "Concreto azul",
            "Concreto marrón",
            "Concreto verde",
            "Concreto rojo",
            "Concreto negro"
        ],
        "glazedTerracottaWhite": [
            "Terracota vidriada blanca"
        ],
        "glazedTerracottaOrange": [
            "Terracota vidriada naranja"
        ],
        "glazedTerracottaMagenta": [
            "Terracota vidriada magenta"
        ],
        "glazedTerracottaLightBlue": [
            "Terracota vidriada celeste"
        ],
        "glazedTerracottaYellow": [
            "Terracota vidriada amarilla"
        ],
        "glazedTerracottaLime": [
            "Terracota vidriada verde lima"
        ],
        "glazedTerracottaPink": [
            "Terracota vidriada rosa"
        ],
        "glazedTerracottaGray": [
            "Terracota vidriada gris"
        ],
        "glazedTerracottaSilver": [
            "Terracota vidriada gris claro"
        ],
        "glazedTerracottaCyan": [
            "Terracota vidriada cian"
        ],
        "glazedTerracottaPurple": [
            "Terracota vidriada morada"
        ],
        "glazedTerracottaBlue": [
            "Terracota vidriada azul"
        ],
        "glazedTerracottaBrown": [
            "Terracota vidriada marrón"
        ],
        "glazedTerracottaGreen": [
            "Terracota vidriada verde"
        ],
        "glazedTerracottaRed": [
            "Terracota vidriada roja"
        ],
        "glazedTerracottaBlack": [
            "Terracota vidriada negra"
        ],
        "concretePowder": [
            "Polvo de concreto blanco",
            "Polvo de concreto blanco",
            "Polvo de concreto naranja",
            "Polvo de concreto magenta",
            "Polvo de concreto celeste",
            "Polvo de concreto amarillo",
            "Polvo de concreto verde lima",
            "Polvo de concreto rosa",
            "Polvo de concreto gris",
            "Polvo de concreto gris claro",
            "Polvo de concreto cian",
            "Polvo de concreto morado",
            "Polvo de concreto azul",
            "Polvo de concreto marrón",
            "Polvo de concreto verde",
            "Polvo de concreto rojo",
            "Polvo de concreto negro"
        ],
        "stripped_spruce_log": [
            "Leño de abeto descortezado"
        ],
        "stripped_dark_oak_log": [
            "Leño de roble oscuro descortezado"
        ],
        "stripped_birch_log": [
            "Leño de abedul descortezado"
        ],
        "stripped_jungle_log": [
            "Leño de la jungla descortezado"
        ],
        "stripped_oak_log": [
            "Leño de roble descortezado"
        ],
        "stripped_acacia_log": [
            "Leño de acacia descortezado"
        ],
        "bamboo": [
            "Bambú"
        ],
        "scaffolding": [
            "Andamios"
        ],
        "grindstone": [
            "Piedra de afilar"
        ],
        "cartography_table": [
            "Mesa de cartografía"
        ],
        "lantern": [
            "Linterna"
        ],
        "soul_lantern": [
            "Linterna de alma"
        ],
        "smoker": [
            "Ahumador"
        ],
        "smithing_table": [
            "Mesa de herrería"
        ],
        "barrel": [
            "Barril"
        ],
        "campfire": [
            "Fogata"
        ],
        "loom": [
            "Telar"
        ],
        "lectern": [
            "Atril"
        ],
        "sweet_berry_bush": [
            "Arbusto de bayas dulces"
        ],
        "wood": [
            "Madera de roble",
            "Madera de roble",
            "Madera de abeto",
            "Madera de abedul",
            "Madera de la jungla",
            "Madera de acacia",
            "Madera de roble oscuro",
            null,
            null,
            "Madera de roble descortezada",
            "Madera de abeto descortezada",
            "Madera de abedul descortezada",
            "Madera de la jungla descortezada",
            "Madera de acacia descortezada",
            "Madera de roble oscuro descortezada"
        ],
        "netherite_block": [
            "Bloque de inframundita"
        ],
        "ancient_debris": [
            "Escombros ancestrales"
        ],
        "nether_gold_ore": [
            "Mineral de oro del inframundo"
        ],
        "respawn_anchor": [
            "Ancla de regeneración"
        ],
        "crying_obsidian": [
            "Obsidiana llorona"
        ]
    }
};
freeze(lang_data);
export = lang_data;
