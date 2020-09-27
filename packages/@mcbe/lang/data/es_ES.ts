
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
    id: "es_ES" as LangId,
    commands:{
        "ability_description": "Establece la habilidad de un jugador.",
        "ability_noability": "No está disponible ninguna habilidad llamada \"%1$s\".",
        "ability_granted": "Recibiste la habilidad \"%1$s\".",
        "ability_revoked": "Perdiste la habilidad \"%1$s\".",
        "ability_success": "La habilidad se ha actualizado.",
        "achievement_alreadyHave": "El jugador %1$s ya tiene el logro %2$s.",
        "achievement_description": "Da o quita un logro a un jugador.",
        "achievement_dontHave": "El jugador %1$s no tiene el logro %2$s.",
        "achievement_give_success_all": "Se dieron todos los logros correctamente a %1$s.",
        "achievement_give_success_one": "Se dio con éxito a %1$s la estadística %2$s.",
        "achievement_statTooLow": "El jugador %1$s no tiene la estadística %2$s.",
        "achievement_take_success_all": "Se obtuvieron correctamente todos los logros de %1$s.",
        "achievement_take_success_one": "Se obtuvo correctamente la estadística %1$s de %2$s.",
        "achievement_unknownAchievement": "Logro o estadística \"%1$s\" desconocido",
        "agent_attack_success": "El agente ha tenido éxito al atacar",
        "agent_attack_failed": "El agente ha fallado al atacar",
        "agent_collect_success": "El agente ha tenido éxito al recolectar",
        "agent_collect_failed": "El agente ha fallado al recolectar",
        "agent_createagent_success": "Agente creado",
        "agent_createagent_failed": "No se ha podido crear el agente",
        "agent_destroy_success": "El agente ha destruido un bloque",
        "agent_destroy_failed": "El agente ha fallado al destruir",
        "agent_detect_success": "El agente ha tenido éxito al detectar",
        "agent_detect_failed": "El agente ha fallado al detectar",
        "agent_detectredstone_success": "El agente ha tenido éxito al detectredstone",
        "agent_detectredstone_failed": "El agente ha fallado al detectredstone",
        "agent_drop_success": "El agente ha tenido éxito al soltar",
        "agent_drop_failed": "El agente ha fallado al soltar",
        "agent_dropall_success": "El agente ha tenido éxito al dropall",
        "agent_dropall_failed": "El agente ha fallado al dropall",
        "agent_getitemcount_success": "El agente ha tenido éxito al getitemcount",
        "agent_getitemcount_failed": "El agente ha fallado al getitemcount",
        "agent_getitemspace_success": "El agente ha tenido éxito al getitemspace",
        "agent_getitemspace_failed": "El agente ha fallado al getitemspace",
        "agent_getitemdetail_success": "El agente ha tenido éxito al getitemdetail",
        "agent_getitemdetail_failed": "El agente ha fallado al getitemdetail",
        "agent_getposition_success": "getposition de agente obtenida",
        "agent_getposition_failed": "Error al obtener getposition de agente",
        "agent_inspect_success": "El agente ha tenido éxito al inspeccionar",
        "agent_inspect_failed": "El agente ha fallado al inspeccionar",
        "agent_inspectdata_success": "Inspección correcta de datos del agente",
        "agent_inspectdata_failed": "El agente no pudo inspeccionar los datos.",
        "agent_move_success": "El agente ha tenido éxito al moverse",
        "agent_move_failed": "No se ha podido mover al agente",
        "agent_outofrange": "No se puede enviar comandos, el agente está fuera de alcance",
        "agent_place_success": "El agente ha tenido éxito al colocar",
        "agent_place_failed": "El agente ha fallado al colocar",
        "agent_setitem_success": "El agente ha establecido el objeto con éxito",
        "agent_setitem_failed": "El agente no ha podido establecer el objeto",
        "agent_turn_success": "El agente ha tenido éxito al girarse",
        "agent_turn_failed": "No se ha podido girar el agente",
        "agent_till_success": "El agente ha tenido éxito al labrar",
        "agent_till_failed": "El agente ha fallado al labrar",
        "agent_tpagent_description": "Teletransporta a tu agente.",
        "agent_tpagent_success": "Agente teletransportado",
        "agent_tpagent_failed": "El agente ha fallado al teletransportarse",
        "agent_transfer_success": "Transferencia del agente con éxito",
        "agent_transfer_failed": "Error al transferir el agente",
        "always_day": "Ciclo día-noche %1$s",
        "always_day_locked": "Ciclo día-noche bloqueado",
        "always_day_unlocked": "Ciclo día-noche desbloqueado",
        "ban_description": "Añade un jugador a la lista negra.",
        "autocomplete_a": "todos los jugadores",
        "autocomplete_c": "mi Agent",
        "autocomplete_e": "todas las entidades",
        "autocomplete_p": "jugador más cercano",
        "autocomplete_r": "jugador aleatorio",
        "autocomplete_s": "tú",
        "autocomplete_v": "todos los Agents",
        "ban_failed": "No se pudo prohibir al jugador %1$s.",
        "ban_success": "Jugador %1$s prohibido",
        "banip_description": "Añade la dirección IP a la lista negra.",
        "banip_invalid": "La IP que has introducido no es válida o el jugador no está conectado",
        "banip_success": "Dirección IP %1$s prohibida",
        "banip_success_players": "Dirección IP %1$s prohibida que pertenece a %2$s",
        "banlist_ips": "Hay un total de %1$d direcciones IP prohibidas:",
        "banlist_players": "Hay un total de %1$d jugadores prohibidos:",
        "blockdata_description": "Modifica la etiqueta de datos de un bloque.",
        "blockdata_placeFailed": "No puedes poner bloques aquí",
        "blockdata_destroyFailed": "No puedes cavar aquí",
        "blockdata_failed": "La etiqueta de datos no cambió: %1$s.",
        "blockdata_notValid": "El bloque objetivo no puede contener datos",
        "blockdata_outOfWorld": "No se puede cambiar un bloque fuera del mundo",
        "blockdata_success": "Datos del bloque actualizados a: %1$s",
        "blockdata_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "bossbar_add_success": "Has creado la barra de jefe personalizada [%1$s]",
        "bossbar_add_failure_invalid": "ID de barra de jefe no válida. Las ID deben formarse como namespace:id o id (se usa el namespace minecraft por defecto).",
        "bossbar_add_failure_exists": "Ya existe una barra de jefe con la ID '%1$s'",
        "bossbar_description": "Crea y modifica las barras de jefe",
        "bossbar_get_max": "La barra de jefe personalizada [%1$s] tiene un máximo de %2$d",
        "bossbar_get_players": "La barra de jefe personalizada [%1$s] tiene actualmente %2$s jugadores online: %3$s",
        "bossbar_get_players_none": "La barra de jefe personalizada [%1$s] no tiene jugadores online actualmente",
        "bossbar_get_players_one": "La barra de jefe personalizada [%1$s] tiene actualmente 1 jugador online: %2$s",
        "bossbar_get_value": "La barra de jefe personalizada [%1$s] tiene un valor de %2$d",
        "bossbar_get_visible_true": "La barra de jefe personalizada [%1$s] se muestra actualmente",
        "bossbar_get_visible_false": "La barra de jefe personalizada [%1$s] está actualmente oculta",
        "bossbar_list": "Hay %1$s barras de jefe personalizadas activadas: %2$s",
        "bossbar_list_none": "No hay barras de jefe personalizadas activadas",
        "bossbar_list_one": "Hay 1 barra de jefe personalizada activada: %1$s",
        "bossbar_notFound": "No existe ninguna barra de jefe con ID '%1$s'",
        "bossbar_remove": "Se ha eliminado la barra de jefe personalizada [%1$s]",
        "change_setting_description": "Cambia un ajuste en el servidor dedicado mientras está en funcionamiento.",
        "change_setting_success": "Se cambió %1$s.",
        "chunkinfo_compiled": "El fragmento está compilado.",
        "chunkinfo_data": "Los primeros 64 vértices son: %1$s.",
        "chunkinfo_empty": "El fragmento está vacío.",
        "chunkinfo_hasLayers": "La porción de terreno tiene capas: %1$s",
        "chunkinfo_hasNoRenderableLayers": "El fragmento no tiene capas que se puedan generar.",
        "chunkinfo_isEmpty": "La porción de terreno tiene capas vacías: %1$s",
        "chunkinfo_location": "Ubicación de la porción de terreno: (%1$d, %2$d, %3$d)",
        "chunkinfo_noChunk": "No se encontró ninguna posición de porción de terreno %1$d, %2$d, %3$d.",
        "chunkinfo_notCompiled": "El fragmento no está compilado.",
        "chunkinfo_notEmpty": "El fragmento no está vacío.",
        "chunkinfo_vertices": "El búfer de la capa de %1$s contiene %2$d vértices.",
        "classroommode_description": "Intenta iniciar y conectarse al modo Aula.",
        "classroommode_success": "Intentando iniciar el modo Aula...",
        "clear_description": "Borra objetos del inventario de jugadores.",
        "clear_failure": "No se pudo vaciar el inventario de %1$s.",
        "clear_failure_no_items": "No se pudo vaciar el inventario de %1$s: no tiene objetos.",
        "clear_success": "Se vació el inventario de %1$s y se quitaron %2$d objetos.",
        "clear_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "clear_testing": "%1$s tiene %2$d objetos que coinciden con los criterios",
        "clearfixedinv_description": "Elimina todas las ranuras de inventario fijas.",
        "clearfixedinv_success": "Inventario fijo vaciado.",
        "clone_description": "Clona bloques de una región en otra.",
        "clone_failed": "No se ha clonado ningún bloque",
        "clone_filtered_error": "El uso de filtros necesita que se especifique un bloqueo de filtro.",
        "clone_noOverlap": "El origen y el destino no se pueden superponer",
        "clone_outOfWorld": "No se puede acceder a bloques fuera del mundo",
        "clone_success": "%1$d bloques clonados",
        "clone_tooManyBlocks": "Demasiados bloques en el área especificada (%1$d > %2$d)",
        "closechat_description": "Cierra la ventana de chat del jugador local si está abierta.",
        "closechat_success": "Chat cerrado",
        "closechat_failure": "El chat no estaba abierto",
        "closewebsocket_description": "Cierra la conexión websocket si existiera alguna.",
        "code_description": "Inicia Code Builder.",
        "code_success": "Code Builder iniciado.",
        "compare_failed": "El origen y el destino no son idénticos",
        "compare_outOfWorld": "No se puede acceder a bloques fuera del mundo",
        "compare_success": "%1$d bloques comparados",
        "compare_tooManyBlocks": "Demasiados bloques en el área especificada (%1$d > %2$d)",
        "corruptworld_description": "Corrompe el mundo cargado en el servidor.",
        "corruptworld_success": "Mundo corrompido con éxito.",
        "daylock_description": "Bloquea y desbloquea el ciclo día-noche.",
        "debug_description": "Inicia o detiene una sesión de depuración.",
        "debug_notStarted": "¡No puedes parar el análisis cuando no ha empezado aún!",
        "debug_start": "Comenzó el análisis de errores",
        "debug_stop": "Depuración de perfiles detenida después de %.2f segundos (%1$d intervalos)",
        "defaultgamemode_description": "Define el modo de juego predeterminado.",
        "defaultgamemode_success": "El modo de juego predeterminado del mundo ahora es %1$s.",
        "deop_description": "Revoca el estado de operador de un jugador.",
        "deop_failed": "No se ha podido anular el estado de operador (nivel de permiso demasiado alto): %s",
        "deop_success": "Estado de operador anulado: %s",
        "deop_message": "Ya no eres operador.",
        "difficulty_description": "Define el nivel de dificultad.",
        "difficulty_usage": "/difficulty <new difficulty>",
        "difficulty_success": "Establecer la dificultad del juego en %1$s",
        "downfall_success": "Precipitación cambiada",
        "effect_description": "Añade o elimina efectos de estado.",
        "effect_failure_notActive": "No se ha podido quitar %1$s a %2$s ya que no tiene el efecto",
        "effect_failure_notActive_all": "No se pueden quitar los efectos de %1$s debido a que no tiene ninguno.",
        "effect_failure_notAMob": "%1$s no puede tener efectos",
        "effect_notFound": "No existe el efecto criatura con ID %s",
        "effect_success": "Has dado %1$s * %2$d a %3$s durante %4$d segundos",
        "effect_success_removed": "Se ha eliminado %1$s de %2$s",
        "effect_success_removed_all": "Se obtuvieron todos los efectos de %1$s.",
        "enchant_cantCombine": "%1$s no se puede combinar con %2$s",
        "enchant_invalidLevel": "%1$s no admite el nivel %2$d",
        "enchant_cantEnchant": "El encantamiento seleccionado no se puede añadir al objeto de destino: %1$s",
        "enchant_description": "Añade un encantamiento al objeto seleccionado de un jugador.",
        "enchant_noItem": "El destino no contiene un objeto: %1$s",
        "enchant_notFound": "No hay ningún encantamiento con el id. %1$d.",
        "enchant_success": "El encantamiento ha salido correctamente para %1$s",
        "entitydata_description": "Modifica la etiqueta de datos de una entidad.",
        "entitydata_failed": "La etiqueta de datos no cambió: %1$s.",
        "entitydata_noPlayers": "%1$s es un jugador y no se puede cambiar.",
        "entitydata_success": "Datos de la entidad actualizados a: %1$s",
        "entitydata_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "execute_allInvocationsFailed": "Error en todas las invocaciones: \"%1$s\"",
        "execute_failed": "No se pudo ejecutar \"%1$s\" como %2$s.",
        "execute_description": "Ejecuta un comando en nombre de una o más entidades.",
        "fill_description": "Rellena toda una región, o una parte, con un bloque específico.",
        "fill_failed": "No se ha rellenado ningún bloque",
        "fill_outOfWorld": "No se pueden colocar bloques fuera del mundo",
        "fill_success": "%1$d bloques llenados",
        "fill_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "fill_tooManyBlocks": "Demasiados bloques en el área especificada (%1$d > %2$d)",
        "fill_replace_auxvalue_invalid": "Valor de datos de sustitución no válido para el bloque %1$s",
        "function_description": "Ejecuta los comandos que se encuentran en el archivo de funciones correspondiente.",
        "function_functionNameNotFound": "No se encuentra la función %1$s.",
        "function_invalidCharacters": "La función con el título '%s' no es válida, no se permite el carácter '%s' en los nombres de función.",
        "function_noEngineVersionSpecified": "No se pudo ejecutar la función %s. Debes especificar min_engine_version en el manifest.json del pack de comportamiento.",
        "function_success": "Entradas de la función %1$d ejecutadas correctamente.",
        "gamemode_description": "Establece el modo de juego de un jugador.",
        "gamemode_success_other": "Definir el modo de juego de %2$s en %1$s",
        "gamemode_success_self": "Definir el modo de juego propio en %1$s",
        "gamemode_fail_invalid": "El modo de juego \"%1$s\" no es válido.",
        "gamerule_description": "Establece o consulta un valor de regla.",
        "gamerule_type_invalid": "Tipo usado para la regla de juego \"%1$s\" no válido",
        "gamerule_type_nocheatsenabled": "La regla de juego '%1$s' solo se puede usar si los trucos están activados en este mundo.",
        "gamerule_nopermission": "Solo los propietarios del servidor pueden cambiar \"%1$s\".",
        "gamerule_norule": "No está disponible ninguna regla de juego llamada \"%1$s\".",
        "gamerule_success": "La regla de juego %1$s se actualizó a %2$s.",
        "generic_async_initiated": "Comando \"%1$s\" iniciado (paso asincrónico %2$d)",
        "generic_boolean_invalid": "\"%1$s\" no es verdadero ni falso.",
        "generic_chunk_notFound": "No se ha encontrado el chunk especificado",
        "generic_componentError": "Error al analizar la lista de componentes",
        "generic_dimension_notFound": "No se ha encontrado la dimensión especificada",
        "generic_disabled": "No se permite el uso de trucos en este nivel.",
        "generic_disabled_templateLocked": "Los ajustes están bloqueados en este momento. Desbloquea las opciones del mundo de la plantilla en el menú Ajustes del juego para cambiarlas.",
        "generic_double_tooBig": "El número que has introducido (%.2f) es demasiado grande. Debe ser inferior a %.2f.",
        "generic_double_tooSmall": "El número que has introducido ( %.2f) es demasiado pequeño. Debe ser superior a %.2f",
        "generic_duplicateType": "Duplicar argumentos de tipo",
        "generic_duplicateSelectorArgument": "Duplicar argumentos del selector %s",
        "generic_encryption_badkey": "La clave pública proporcionada no es correcta. Se esperaba una clave de 120 bytes después de formatear en PEM.",
        "generic_encryption_badsalt": "La sal proporcionada no es correcta. Se esperaban 16 bytes antes de codificar en base64.",
        "generic_encryption_required": "Sesión cifrada obligatoria",
        "generic_entity_invalidType": "El tipo de entidad \"%1$s\" no es válido.",
        "generic_entity_invalidUuid": "El formato de la UUID de la entidad no es válido",
        "generic_entity_notFound": "No se ha encontrado esa entidad",
        "generic_exception": "Se ha producido un error desconocido al intentar ejecutar este comando",
        "generic_invalidAgentType": "Teclea un argumento que se aplique a un selector solo para Agent",
        "generic_invalidcontext": "Se ha proporcionado contexto no válido para el tipo de comando especificado",
        "generic_invalidDevice": "El comando que has introducido, %s, no se admite en este dispositivo",
        "generic_invalidPlayerType": "Argumento de tipo aplicado al selector solo de jugador",
        "generic_invalidType": "Argumento de tipo desconocido",
        "generic_levelError": "El nivel máximo tiene que ser mayor que el nivel mínimo",
        "generic_malformed_body": "Falta el cuerpo o está mal formado",
        "generic_malformed_type": "Tipo de solicitud no válida",
        "generic_notimplemented": "No implementado",
        "generic_num_invalid": "\"%1$s\" no es un número válido.",
        "generic_num_tooBig": "El número que escribiste (%1$d) es demasiado grande: debe ser, como máximo, %2$d.",
        "generic_num_tooSmall": "El número que escribiste (%1$d) es demasiado pequeño: debe ser, como mínimo, %2$d.",
        "generic_parameter_invalid": "\"%1$s\" no es un parámetro válido.",
        "generic_permission_selector": "<permisos insuficientes para la expansión del selector>",
        "generic_player_notFound": "No se ha encontrado ese jugador",
        "generic_protocol_mismatch": "La versión de protocolo proporcionada no coincide con la versión de protocolo de Minecraft",
        "generic_radiusError": "El radio del selector mínimo debe ser más pequeño que el máximo",
        "generic_radiusNegative": "El radio no puede ser negativo",
        "generic_rotationError": "Rotación fuera de rango",
        "generic_running": "El comando ya está activo",
        "generic_step_failed": "Ha fallado un paso de un comando",
        "generic_syntax": "Error de sintaxis: \"%2$s\" inesperado: en \"%1$s>>%2$s<<%3$s\"",
        "generic_noTargetMatch": "Ningún destino coincidía con el selector",
        "generic_targetNotPlayer": "El selector debe ser el tipo de jugador",
        "generic_tooManyNames": "Demasiados argumentos de nombre de destino",
        "generic_tooManyTargets": "Hay demasiados destinos que coinciden con el selector",
        "generic_too_many_requests": "Demasiados comandos solicitados, espera a que se complete uno.",
        "generic_unknown": "Comando desconocido: %s. Comprueba si el comando existe y tienes permiso para utilizarlo.",
        "generic_usage": "Uso: %1$s",
        "generic_usage_noparam": "Uso:",
        "generic_version_mismatch": "La versión solicitada no existe para este comando.",
        "generic_version_missing": "En las llamadas de comandos que no se realicen desde el chat se debe especificar la versión del comando",
        "getchunkdata_description": "Obtiene los píxeles de un fragmento específico.",
        "getchunkdata_success": "Datos de chunk recibidos",
        "getchunks_description": "Obtiene la lista de fragmentos que hay cargados.",
        "getchunks_success": "Lista de chunks recibida",
        "getlocalplayername_description": "Devuelve el nombre del jugador local.",
        "getspawnpoint_description": "Obtiene el punto de generación del jugador o jugadores especificados.",
        "gettopsolidblock_description": "Obtiene la posición del bloque superior no aéreo bajo la posición especificada",
        "gettopsolidblock_notfound": "No hay bloques sólidos bajo la posición especificada",
        "give_block_notFound": "No hay ningún bloque con el nombre %1$d.",
        "give_description": "Da un objeto a un jugador.",
        "give_item_invalid": "La sintaxis de comando no es válida: no existe ningún %s con ese valor de datos.",
        "give_item_notFound": "No hay ningún objeto con el nombre %1$d.",
        "give_map_invalidData": "Se han proporcionado datos de mapas no válidos",
        "give_map_featureNotFound": "No se ha podido crear el mapa de exploración. No se ha encontrado la función en esta dimensión",
        "give_success": "Dio %1$s * %2$d a %3$s.",
        "give_successRecipient": "Recibiste %1$s * %2$d.",
        "give_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "help_description": "Proporciona ayuda o la lista de comandos.",
        "help_footer": "Consejo: utiliza la tecla <tab> al escribir un comando para autocompletar el comando o sus argumentos",
        "help_header": "--- Mostrando página de ayuda %1$d de %2$d (/help <página>) ---",
        "help_command_aliases": "%s (también %s):",
        "immutableworld_description": "Establece el estado inmutable del mundo.",
        "immutableworld_info": "immutableworld = %s",
        "kick_description": "Echa a un jugador del servidor.",
        "kick_description_edu": "Expulsa a un jugador de la partida.",
        "kick_not_found": "No se pudo encontrar al jugador %1$s.",
        "kick_not_yourself": "No puedes eliminarte a ti mismo del juego",
        "kick_success": "Se expulsó a %1$s del juego.",
        "kick_success_reason": "Se expulsó a %1$s del juego: \"%2$s\"",
        "kick_success_reasonedu": "Se ha sacado a %1$s del juego: '%2$s'",
        "kick_no_host": "No se puede expulsar al anfitrión de la partida.",
        "kick_no_teacher": "No se pueden eliminar a los profesores de la partida.",
        "kill_successful_edu": "%1$s eliminados",
        "kill_successful": "%1$s murió.",
        "kill_description_edu": "Elimina entidades (jugadores, criaturas etc.).",
        "kill_description": "Mata entidades (jugadores, criaturas, etc.).",
        "list_description": "Muestra una lista de los jugadores que hay en el servidor.",
        "locate_description": "Muestra las coordenadas de la estructura más cercana de un tipo especificado.",
        "locate_fail_noplayer": "El comando solo lo puede usar un jugador válido",
        "locate_fail_nostructurefound": "No se ha encontrado estructura válida en esta dimensión",
        "locate_success": "El %1$s más cercano está en el bloque %2$s, (y?), %3$s",
        "togglecontentlog_toggle": "Activa o desactiva el comando del registro de contenido",
        "togglecontentlog_enabled": "Registro de contenido activado",
        "togglecontentlog_disabled": "Registro de contenido desactivado",
        "me_description": "Muestra un mensaje sobre ti.",
        "message_display_incoming": "%1$s te susurra: %2$s.",
        "message_display_outgoing": "Susurraste a %1$s: %2$s.",
        "message_sameTarget": "¡No puedes enviarte un mensaje privado a ti mismo!",
        "mixer_description": "Control de interactividad de Mixer",
        "mixer_error_unknown": "Se ha producido un error de Mixer desconocido.",
        "mixer_error_notoken": "Para habilitar la interactividad de Mixer, tienes que iniciar la sesión con una cuenta de Microsoft.",
        "mixer_error_notsupported": "El dispositivo que estás utilizando no es compatible con la interactividad de Mixer.",
        "mixer_interactive_error": "Se ha producido un error de Mixer: %1$s",
        "mixer_scene_failed": "No existe ninguna escena con el nombre %1$s. Asegúrate de que has introducido correctamente el nombre de la escena.",
        "mixer_scene_success": "Escena cambiada por: %1$s",
        "mixer_start_success": "Inicio interactivo de Mixer: %1$s",
        "mixer_start_fail_invalidCode": "No se ha encontrado el proyecto con el ID \"%1$s\". Asegúrate de que el ID o el código compartido son correctos.",
        "mixer_stop_success": "Modo interactivo de Mixer detenido.",
        "mixer_stop_fail": "No hay ninguna sesión interactiva que detener.",
        "mixer_status_notinitialized": "La interactividad no se ha inicializado.",
        "mixer_status_enabled": "La interactividad está habilitada.",
        "mixer_status_initializing": "La interactividad se está inicializando.",
        "mixer_status_pending": "La interactividad está pendiente.",
        "mixer_status_disabled": "La interactividad está deshabilitada.",
        "mixer_activatedbutton": "%1$s ha activado %2$s.",
        "mobevent_description": "Controla qué eventos de criatura pueden llevarse a cabo.",
        "mobevent_eventsEnabledSetToTrue": "Se han habilitado los eventos de criatura. Los eventos individuales que estén marcados como \"false\" no se llevarán a cabo.",
        "mobevent_eventsEnabledSetToFalse": "Se han inhabilitado los eventos de criatura. Los eventos individuales no se llevarán a cabo.",
        "mobevent_eventsEnabledIsTrue": "Los eventos de criatura están habilitados. Los eventos individuales que estén en marcados como \"false\" no se llevarán a cabo.",
        "mobevent_eventsEnabledIsFalse": "Los eventos de criatura están inhabilitados. Los eventos individuales no se llevarán a cabo.",
        "mobevent_eventSetToTrue": "Evento de criatura %s (ID: %s) marcado como \"true\".",
        "mobevent_eventSetToTrueButEventsDisabled": "Evento de criatura %s (ID: %s) marcado como \"true\", pero los eventos de criatura no están habilitados.",
        "mobevent_eventSetToFalse": "Evento de criatura %s (ID: %s) marcado como \"false\".",
        "mobevent_eventIsTrue": "El evento de criatura %s (ID: %s) está marcado como \"true\".",
        "mobevent_eventIsTrueButEventsDisabled": "El evento de criatura %s (ID: %s) está marcado como \"true\", pero los eventos de criatura no están habilitados.",
        "mobevent_eventIsFalse": "El evento de criatura %s (ID: %s) está marcado como \"false\".",
        "op_description": "Otorga a un jugador el estado de operador.",
        "op_failed": "No se ha podido hacer operador (ya lo era o tenía rango superior): %s",
        "op_success": "Ya es operador: %s",
        "op_message": "Ahora eres operador.",
        "origin_commandblock": "Bloque de comandos",
        "origin_external": "Externo",
        "origin_devconsole": "DevConsole",
        "origin_script": "Motor de scripts",
        "origin_server": "Servidor",
        "origin_teacher": "Profesor/a",
        "ops_description": "Recarga y aplica permisos de operador.",
        "ops_reloaded": "Operadores recargados desde el archivo.",
        "ops_set_success": "Se ha establecido correctamente el nivel del operador del jugador %s.",
        "permissions_description": "Recarga y aplica permisos.",
        "permissions_reloaded": "Los permisos se han recargado desde el archivo.",
        "permissions_set_failed": "No se ha podido establecer el nivel de permiso %s para el jugador %s.",
        "permissions_set_success": "Se ha establecido correctamente el nivel de permiso %s del jugador %s.",
        "permissions_save_failed": "No se ha podido guardar el nivel de permiso %s para el jugador %s.",
        "permissions_save_success": "Se ha guardado correctamente el nivel de permiso %s del jugador %s.",
        "spawnParticleEmitter_description": "Crea un emisor de partículas",
        "particle_description": "Crea partículas.",
        "particle_notFound": "Nombre del efecto desconocido (%1$s)",
        "particle_success": "Reproduciendo el efecto %1$s %2$d veces",
        "players_list": "Hay %1$d/%2$d jugadores conectados:",
        "players_list_names": "%s",
        "playsound_description": "Reproduce un sonido.",
        "playsound_playerTooFar": "El jugador %1$s está demasiado lejos para escuchar el sonido.",
        "playsound_success": "Se reprodujo el sonido \"%1$s\" a %2$s.",
        "position_description": "Activa y desactiva las coordenadas del jugador.",
        "publish_failed": "No puedes alojar una partida local",
        "publish_started": "Partida local hospedada en el puerto %1$s",
        "querytarget_description": "Obtiene la transformación, nombre e información de ID de la entidad o entidades de destino especificadas.",
        "querytarget_success": "Datos de destino: %1$s",
        "reload_description": "Recarga todos los archivos de funciones desde todos los packs de comportamiento.",
        "reload_success": "Se han vuelto a cargar los archivos de función existentes. Reinicia Minecraft para recargar las funciones NUEVAS.",
        "replaceitem_description": "Sustituye objetos en los inventarios.",
        "replaceitem_failed": "No se ha podido reemplazar la %s ranura %d por %d * %s",
        "replaceitem_keepFailed": "Ya hay un elemento que ocupa la %s ranura %d.",
        "replaceitem_noContainer": "El bloque en %s no es un contenedor",
        "replaceitem_badSlotNumber": "No se pudo reemplazar el espacio %d, debe ser un valor entre %d y %d.",
        "replaceitem_success": "Se ha reemplazado la %s ranura %d por %d * %s",
        "replaceitem_success_entity": "Se ha reemplazado la ranura %s %d de %s por %d * %s",
        "replaceitem_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "save_description": "Controla o comprueba la forma en que el juego guarda datos en el disco.",
        "save_disabled": "Autoguardado del mundo desactivado",
        "save_enabled": "Autoguardado del mundo activado",
        "save_failed": "Error al guardar: %1$s",
        "save_start": "Guardando...",
        "save_success": "Mundo guardado",
        "save_all_error": "Ha ocurrido un error al intentar pausar el guardado del nivel.",
        "save_all_success": "Datos guardados. Ya se pueden copiar los archivos.",
        "save_off_alreadyOff": "El guardado ya está desactivado.",
        "save_on_alreadyOn": "El guardado ya está activado.",
        "save_on_notDone": "Una acción de guardado anterior no ha finalizado.",
        "save_on_description": "Activa el guardado automático en el servidor.",
        "save_on_success": "Se han reanudado los cambios al nivel.",
        "save_state_description": "Comprueba si ha finalizado una acción de guardar todo anterior e indica los archivos implicados.",
        "say_description": "Envía un mensaje en el chat a otros jugadores.",
        "scoreboard_description": "Sigue y muestra la puntuación de diversos objetivos.",
        "scoreboard_allMatchesFailed": "Han fallado todas las operaciones",
        "scoreboard_noMultiWildcard": "Solo se permite un usuario comodín",
        "scoreboard_objectiveNotFound": "No se encontró ningún objetivo con el nombre \"%1$s\".",
        "scoreboard_objectiveReadOnly": "El objetivo \"%1$s\" es de solo lectura y no se puede establecer.",
        "scoreboard_objectives_add_alreadyExists": "Ya existe un objetivo con el nombre \"%1$s\".",
        "scoreboard_objectives_add_displayTooLong": "El nombre para mostrar \"%1$s\" es demasiado largo para un objetivo: debe contener un máximo de %2$d caracteres.",
        "scoreboard_objectives_add_success": "Nuevo objetivo \"%1$s\" agregado correctamente.",
        "scoreboard_objectives_add_tooLong": "El nombre \"%1$s\" es demasiado largo para un objetivo: debe contener un máximo de %2$d caracteres.",
        "scoreboard_objectives_add_wrongType": "Tipo de criterio objetivo \"%1$s\" no válido.",
        "scoreboard_objectives_add_needName": "Un objetivo necesita un nombre.",
        "scoreboard_objectives_description": "Modifica los objetivos del marcador.",
        "scoreboard_objectives_list_count": "Mostrando %1$d objetivo(s) en el marcador:",
        "scoreboard_objectives_list_empty": "No hay objetivos en el marcador",
        "scoreboard_objectives_list_entry": "- %1$s: se muestra como \"%2$s\" y es de tipo \"%3$s\".",
        "scoreboard_objectives_remove_success": "Se quitó el objetivo \"%1$s\" correctamente.",
        "scoreboard_objectives_setdisplay_invalidSlot": "No hay ningún espacio para mostrar \"%1$s\".",
        "scoreboard_objectives_setdisplay_successCleared": "Se borró el espacio para mostrar el objetivo \"%1$s\".",
        "scoreboard_objectives_setdisplay_successSet": "Establecer el objetivo para mostrar en el espacio \"%1$s\" en \"%2$s\"",
        "scoreboard_players_add_success": "Se ha añadido %1$d a [%2$s] para %3$s (ahora %4$d)",
        "scoreboard_players_add_multiple_success": "Se ha añadido %1$d a [%2$s] para %3$d entidades",
        "scoreboard_players_nameNotFound": "Se debe proporcionar un nombre de jugador.",
        "scoreboard_players_enable_noTrigger": "El objetivo %1$s no es un desencadenador.",
        "scoreboard_players_enable_success": "Desencadenador %1$s para %2$s habilitado",
        "scoreboard_players_list_count": "Mostrando %1$d jugadores seguidos en el marcador:",
        "scoreboard_players_list_empty": "No hay jugadores registrados en el marcador",
        "scoreboard_players_list_player_count": "Mostrando %1$d objetivo(s) seguido(s) para %2$s:",
        "scoreboard_players_list_player_empty": "El jugador %1$s no tiene puntuaciones registradas.",
        "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_players_operation_invalidOperation": "Operación %1$s no válida",
        "scoreboard_players_operation_notFound": "No se encontró la puntuación de %1$s para %2$s.",
        "scoreboard_players_operation_success": "Se ha actualizado [%1$s] para %2$d entidades",
        "scoreboard_players_offlinePlayerName": "Jugador sin conexión",
        "scoreboard_players_random_invalidRange": "%1$d mínimo no es inferior a %2$d máximo",
        "scoreboard_players_remove_success": "Se ha eliminado %1$d de [%2$s] para %3$s (ahora %4$d)",
        "scoreboard_players_remove_multiple_success": "Se ha eliminado %1$d de [%2$s] para %3$d entidades",
        "scoreboard_players_reset_success": "Restablecer puntuaciones del jugador %1$s",
        "scoreboard_players_resetscore_success": "Restablecer la puntuación %1$s del jugador %2$s",
        "scoreboard_players_set_success": "Se ha establecido [%1$s] para %2$s en %3$d",
        "scoreboard_players_set_multiple_success": "Se ha establecido [%1$s] para %2$d entidades en %3$d",
        "scoreboard_players_set_tagError": "No se pudo analizar dataTag. Razón: %1$s",
        "scoreboard_players_set_tagMismatch": "El elemento dataTag no coincide con %1$s.",
        "scoreboard_players_score_notFound": "No se ha encontrado ninguna puntuación de %1$s para %2$s",
        "scoreboard_players_test_failed": "La puntuación %1$d NO está dentro del intervalo %2$d a %3$d.",
        "scoreboard_players_test_success": "La puntuación %1$d está dentro del intervalo %2$d a %3$d.",
        "scoreboard_teamNotFound": "No se encontró ningún equipo con el nombre \"%1$s\".",
        "scoreboard_teams_add_alreadyExists": "Ya existe un equipo con el nombre \"%1$s\".",
        "scoreboard_teams_add_displayTooLong": "El nombre para mostrar \"%1$s\" es demasiado largo para un equipo: debe contener un máximo de %2$d caracteres.",
        "scoreboard_teams_add_success": "Nuevo equipo \"%1$s\" agregado correctamente",
        "scoreboard_teams_add_tooLong": "El nombre \"%1$s\" es demasiado largo para un equipo: debe contener un máximo de %2$d caracteres.",
        "scoreboard_teams_empty_alreadyEmpty": "El equipo %1$s ya está vacío: no se pueden quitar jugadores que no existen.",
        "scoreboard_teams_empty_success": "Se quitaron los %1$d jugadores del equipo %2$s.",
        "scoreboard_teams_join_failure": "No se pudieron agregar %1$d jugador(es) al equipo %2$s: %3$s.",
        "scoreboard_teams_join_success": "%1$d jugador(es) agregado(s) al equipo %2$s: %3$s",
        "scoreboard_teams_leave_failure": "No se pudo quitar a %1$d jugador(es) de sus equipos: %2$s.",
        "scoreboard_teams_leave_noTeam": "No formas parte de ningún equipo",
        "scoreboard_teams_leave_success": "Se quitaron %1$d jugadores de sus equipos: %2$s.",
        "scoreboard_teams_list_count": "Mostrando %1$d equipos en el marcador:",
        "scoreboard_teams_list_empty": "No hay equipos registrados en el marcador",
        "scoreboard_teams_list_entry": "- %1$s (%2$s) tiene %3$d miembros",
        "scoreboard_teams_list_player_count": "Mostrando %1$d jugador(es) en el equipo %2$s:",
        "scoreboard_teams_list_player_empty": "El equipo %1$s no tiene jugadores.",
        "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_teams_option_noValue": "Los valores válidos para la opción %1$s son: %2$s.",
        "scoreboard_teams_option_success": "Establecer la opción %1$s para el equipo %2$s en %3$s",
        "scoreboard_teams_remove_success": "Se quitó el equipo %1$s.",
        "seed_success": "Semilla: %1$s",
        "setblock_description": "Cambia un bloque por otro bloque.",
        "setblock_failed": "No se ha podido colocar el bloque",
        "setblock_noChange": "No se ha podido colocar el bloque",
        "setblock_notFound": "No hay ningún bloque con el id. o el nombre %1$s.",
        "setblock_outOfWorld": "No se puede colocar un bloque fuera del mundo",
        "setblock_success": "Bloque colocado",
        "setblock_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "setidletimeout_success": "Se estableció correctamente el tiempo de inactividad en %1$d minutos.",
        "setfixedinvslots_description": "Establece el número de espacios de inventario fijos para el servidor.",
        "setfixedinvslots_success": "Cantidad de espacios de inventario fijos establecida en %1$d",
        "setfixedinvslot_description": "Establece una ranura fija para un objeto especificado.",
        "setfixedinvslot_success": "Espacio de inventario fijo %1$d establecido en %2$s",
        "globalpause_description": "Establece u obtiene el estado de pausa del juego para todos los jugadores.",
        "globalpause_success": "Estado de pausa establecido u obtenido",
        "setmaxplayers_description": "Define el número de jugadores máximo para esta sesión de juego.",
        "setmaxplayers_success": "Define los jugadores máximos en %1$d.",
        "setmaxplayers_success_upperbound": "(Limitado a las conexiones máximas permitidas)",
        "setmaxplayers_success_lowerbound": "(Limitado al número de jugadores actual)",
        "setworldspawn_description": "Establece la regeneración del mundo.",
        "setworldspawn_success": "Establecer el punto de generación del mundo en (%1$d, %2$d, %3$d)",
        "setworldspawn_wrongDimension": "No se pudo establecer la generación del mundo en esta dimensión.",
        "spawnpoint_success_single": "Establecer el punto de generación de %1$s en (%2$d, %3$d, %4$d)",
        "spawnpoint_description": "Establece el punto de regeneración de un jugador.",
        "spawnpoint_success_multiple_specific": "Establecer el punto de generación de %1$s en (%2$d, %3$d, %4$d)",
        "spawnpoint_success_multiple_generic": "Establecer el punto de generación de %1$s",
        "spawnpoint_wrongDimension": "No se puede establecer el punto de generación en esta dimensión",
        "spreadplayers_description": "Teletransporta entidades a ubicaciones aleatorias.",
        "spreadplayers_failure_players": "No se pudieron esparcir %1$s jugadores alrededor de %2$s, %3$s (demasiados jugadores para el espacio: intenta esparcir un máximo de %4$s).",
        "spreadplayers_failure_teams": "No se pudieron esparcir %1$s equipos alrededor de %2$s, %3$s (demasiados jugadores para el espacio: intenta esparcir un máximo de %4$s).",
        "spreadplayers_info_players": "(La distancia media entre los jugadores es de %1$s bloques después de %2$s repeticiones).",
        "spreadplayers_info_teams": "(La distancia media entre los equipos es de %1$s bloques después de %2$s repeticiones).",
        "spreadplayers_spreading_players": "Esparciendo %1$s jugadores %2$s bloques alrededor de %3$s, %4$s (mínimo %5$s bloques de separación)",
        "spreadplayers_spreading_teams": "Esparciendo %1$s equipos %2$s bloques alrededor de %3$s, %4$s (mínimo %5$s bloques de separación)",
        "spreadplayers_success_players": "Se esparcieron correctamente %1$s jugadores alrededor de %2$s, %3$s.",
        "spreadplayers_success_teams": "Se esparcieron correctamente %1$s equipos alrededor de %2$s, %3$s.",
        "stats_cleared": "Se borraron las estadísticas de %1$s.",
        "stats_failed": "Parámetros no válidos",
        "stats_noCompatibleBlock": "El bloque de la posición %1$d, %2$d, %3$d no puede hacer el seguimiento de estadísticas.",
        "stats_success": "Almacenando estadísticas de %1$s en %2$s en %3$s",
        "stop_description": "Detiene el servidor.",
        "stop_start": "Deteniendo el servidor",
        "stopsound_description": "Detiene un sonido.",
        "stopsound_success": "Sonido interrumpido %s durante %s",
        "stopsound_success_all": "Se han interrumpido todos los sonidos durante %s",
        "summon_description": "Invoca a una entidad.",
        "summon_failed": "No se ha podido invocar el objeto",
        "summon_outOfWorld": "No puedes invocar el objeto fuera del mundo",
        "summon_success": "Objeto invocado correctamente",
        "summon_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "tag_description": "Gestiona las etiquetas almacenadas en entidades.",
        "tag_add_failed": "El destino ya tiene la etiqueta o tiene demasiadas etiquetas",
        "tag_add_success_single": "Se ha añadido la etiqueta '%1$s' a %2$s",
        "tag_add_success_multiple": "Se ha añadido la etiqueta '%1$s' a %2$d entidades",
        "tag_list_single_empty": "%s no tiene etiquetas",
        "tag_list_single_success": "%1$s tiene %2$d etiquetas: %3$s",
        "tag_list_multiple_empty": "No hay ninguna etiqueta en las %d entidades",
        "tag_list_multiple_success": "Las %1$d entidades tienen un total de %2$d etiquetas: %3$s",
        "tag_remove_failed": "El destino no tiene esta etiqueta",
        "tag_remove_success_single": "Se ha eliminado la etiqueta '%1$s' de %2$s",
        "tag_remove_success_multiple": "Se ha eliminado la etiqueta '%1$s' de %2$d entidades",
        "tell_description": "Envía un mensaje privado a uno o varios jugadores.",
        "tellraw_description": "Envía un mensaje JSON a los jugadores.",
        "tellraw_jsonException": "JSON no válido: %1$s",
        "tellraw_jsonStringException": "Datos de cadena json no válidos.",
        "tellraw_error_noData": "No se proporcionaron datos.",
        "tellraw_error_notArray": "El objeto rawtext debe contener una matriz. Ejemplo: \"rawtext\":[{..}]",
        "tellraw_error_textNotString": "El campo de texto en rawtext debe contener una cadena. Ejemplo: \"rawtext\":[{\"text\": \"text to display\"}]",
        "tellraw_error_translateNotString": "El campo de traducción en rawtext debe contener una clave de idioma. Ejemplo: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
        "tellraw_error_withNotArrayOrRawText": "con el campo en rawtext debe contener una matriz u otro objeto rawtext. Ejemplo 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Ejemplo 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
        "tellraw_error_itemIsNotObject": "El valor de Json en la matriz de rawtext no es un objeto. Ejemplo: \"rawtext\": [{ \"text\" : \"my text\" }]",
        "educlientinfo_description": "Consigue tu ID de propiedad y tu condición de anfitrión. Solo para modo creativo.",
        "testfor_description": "Cuenta las entidades (jugadores, criaturas, objetos, etc.) que se ajustan a las condiciones especificadas.",
        "testfor_failure": "%1$s no coincidió con la estructura de datos necesaria.",
        "testfor_success": "Se encontró %1$s.",
        "testfor_tagError": "Error al analizar la etiqueta de datos: %1$s",
        "testforblock_description": "Prueba si un bloque determinado está en una ubicación específica.",
        "testforblock_failed_data": "El bloque de %1$d,%2$d,%3$d no concuerda con el estado de bloque esperado.",
        "testforblock_failed_nbt": "El bloque %1$d, %2$d, %3$d no tiene las claves NBT necesarias.",
        "testforblock_failed_tile": "El bloque en %1$d, %2$d, %3$d es %4$s (se esperaba: %5$s).",
        "testforblock_failed_tileEntity": "El bloque en %1$d, %2$d, %3$d no es una entidad de iconos y no admite la coincidencia de etiquetas.",
        "testforblock_outOfWorld": "No se puede comprobar un bloque fuera del mundo",
        "testforblock_success": "Se encontró el bloque correctamente en %1$d, %2$d, %3$d.",
        "testforblocks_description": "Prueba si los bloques de dos regiones coinciden.",
        "tickingarea_description": "Añade, elimina o enumera áreas de marca.",
        "tickingarea_inuse": "%1$d/%2$d areas de marca en uso.",
        "tickingarea_noneExist_currentDimension": "No existe ninguna área de marca en la dimensión actual.",
        "tickingarea_add_bounds_success": "Se ha añadido el área de marca de %1$d a %2$d.",
        "tickingarea_add_circle_success": "Se ha añadido el área de marca centrada en %1$d con un radio de %2$d fragmentos.",
        "tickingarea_add_failure": "Ya se ha alcanzado el número máximo de áreas de marca (%1$d). No se pueden añadir más.",
        "tickingarea_add_conflictingname": "Ya existe un área de marca con el nombre %1$s.",
        "tickingarea_add_chunkfailure": "El área de marca contiene más de %1$d fragmentos. No se puede crear porque es demasiado grande.",
        "tickingarea_add_radiusfailure": "El tamaño del radio no puede ser superior a %1$d. No se puede crear el área de marca porque es demasiado grande.",
        "tickingarea_remove_success": "Área(s) de marca eliminada(s)",
        "tickingarea_remove_failure": "No existe ninguna área de marca que contenga la posición de bloque %1$d en la dimensión actual.",
        "tickingarea_remove_byname_failure": "No existe ninguna área de marca denominada %1$s en la dimensión actual.",
        "tickingarea_remove_all_success": "Área(s) de marca eliminada(s)",
        "tickingarea_remove_all_failure": "No existe ninguna área de marca en la dimensión actual.",
        "tickingarea_list_chunks": "fragmentos",
        "tickingarea_list_circle_radius": "Radio",
        "tickingarea_list_success_currentDimension": "Lista de todas las áreas de marca de la dimensión actual",
        "tickingarea_list_success_allDimensions": "Lista de todas las áreas de marca de todas las dimensiones",
        "tickingarea_list_failure_allDimensions": "No existe ninguna área de marca en ninguna dimensión.",
        "tickingarea_list_to": "hasta",
        "tickingarea_list_type_circle": "Círculo",
        "time_added": "Se agregó %1$d al tiempo.",
        "time_description": "Cambia o consulta el tiempo de juego del mundo.",
        "time_disabled": "El ajuste Siempre de día está activado en este nivel.",
        "time_query_day": "El día es %d.",
        "time_query_daytime": "Las horas de luz son %d.",
        "time_query_gametime": "La hora del juego es %d.",
        "time_set": "Establecer la hora en %1$d",
        "time_stop": "Hora %1$s",
        "title_description": "Controla los títulos de la pantalla.",
        "title_success": "El comando /title se ha ejecutado correctamente",
        "titleraw_description": "Controla los títulos de la pantalla con mensajes JSON.",
        "toggledownfall_description": "Activa o desactiva el tiempo atmosférico.",
        "tp_description": "Teletransporta entidades (jugadores, criaturas, etc.).",
        "tp_notSameDimension": "No puedes teletransportarse porque los jugadores no están en la misma dimensión",
        "tp_outOfWorld": "No se pueden teletransportar entidades fuera del mundo",
        "tp_permission": "No tienes permiso para utilizar este comando de barra oblicua.",
        "tp_safeTeleportFail": "No ha sido posible teletransportar a %1$s a %2$s porque la zona no está libre de bloques.",
        "tp_far": "No ha sido posible teletransportar a %1$s a la zona sin cargar de %2$s",
        "tp_success": "Se teletransportó a %1$s hacia %2$s.",
        "tp_successVictim": "Te teletransportaste hacia %1$s.",
        "tp_success_coordinates": "Se teletransportó a %1$s hacia %2$s, %3$s, %4$s.",
        "transferserver_description": "Transfiere un jugador a otro servidor.",
        "transferserver_successful": "Jugador transferido",
        "transferserver_invalid_port": "Puerto no válido (0-65535)",
        "trigger_description": "Define que se active un disparador.",
        "trigger_disabled": "El desencadenador %1$s no está habilitado.",
        "trigger_invalidMode": "Modo de desencadenador %1$s no válido",
        "trigger_invalidObjective": "Nombre de desencadenador %1$s no válido",
        "trigger_invalidPlayer": "Solo los jugadores pueden utilizar el comando /trigger",
        "trigger_success": "Cambió el desencadenador %1$s con %2$s %3$s.",
        "unban_failed": "No se pudo readmitir al jugador %1$s.",
        "unban_success": "Jugador readmitido: %1$s",
        "unbanip_invalid": "La IP que has introducido no es válida",
        "unbanip_success": "Dirección IP %1$s readmitida",
        "validategamelighting_description": "Valida la iluminación del juego en una región específica",
        "validategamelighting_checkRegionTooBig": "La región en la que hay que comprobar la iluminación es demasiado grande (%1$d > %2$d)",
        "validategamelighting_outOfWorld": "No se puede comprobar la iluminación fuera del mundo",
        "weather_clear": "Se ha cambiado el tiempo a soleado",
        "weather_description": "Establece el tiempo atmosférico.",
        "weather_disabled": "El Ciclo de tiempo atmosférico no está activado en este nivel.",
        "weather_query": "El tiempo atmosférico es: %s",
        "weather_query_clear": "despejado",
        "weather_query_rain": "lluvia",
        "weather_query_thunder": "tormenta",
        "weather_rain": "Se ha cambiado el tiempo a lluvioso",
        "weather_thunder": "Se ha cambiado el tiempo a lluvia y truenos",
        "whitelist_add_failed": "No se pudo agregar a %1$s a la lista de permitidos.",
        "whitelist_add_success": "Se agregó %1$s a la lista de permitidos.",
        "whitelist_description": "Gestiona la lista de permitidos del servidor.",
        "whitelist_disabled": "Lista de permitidos desactivada",
        "whitelist_enabled": "Lista de permitidos activada",
        "whitelist_list": "Hay %1$d (de %2$d vistos) jugadores en la lista de permitidos:",
        "whitelist_reloaded": "Lista de permitidos recargada desde el archivo.",
        "whitelist_remove_failed": "No se pudo quitar a %1$s de la lista de permitidos.",
        "whitelist_remove_success": "Se quitó a %1$s de la lista de permitidos.",
        "world_age_description": "Cambios o dudas en la edad del mundo (tiempo desde su creación).",
        "world_age_added": "Se ha añadido a la edad del mundo: %1$d",
        "world_age_query": "La edad del mundo es: %d",
        "world_age_set": "Establecer edad del mundo en: %1$d",
        "worldborder_center_success": "Establecer el centro del borde del mundo en %1$s, %2$s",
        "worldborder_damage_amount_success": "Establecer el daño del borde del mundo en %1$s por bloque (desde %2$s por bloque)",
        "worldborder_damage_buffer_success": "Establecer el búfer de daño del borde del mundo en %1$s bloques (desde %2$s bloques)",
        "worldborder_get_success": "El borde del mundo actualmente es de %1$s bloques de ancho.",
        "worldborder_set_success": "Establecer el borde del mundo en un ancho de %1$s bloques (desde %2$s bloques)",
        "worldborder_setSlowly_grow_success": "Ampliando el borde del mundo a %1$s bloques de distancia (desde %2$s bloques) durante %3$s segundos",
        "worldborder_setSlowly_shrink_success": "Disminuyendo el borde del mundo en %1$s bloques de ancho (desde %2$s bloques) durante %3$s segundos",
        "worldborder_warning_distance_success": "Establecer el aviso del borde del mundo en %1$s bloques de distancia (desde %2$s bloques)",
        "worldborder_warning_time_success": "Establecer el aviso del borde del mundo en %1$s segundos de distancia (desde %2$s segundos)",
        "worldbuilder_description": "Alterna el estado de creador de mundos del autor de la llamada.",
        "worldbuilder_success": "Se actualizó el estado de creador del mundo a %1$s.",
        "wsserver_description": "Intenta conectarse al servidor websocket en la URL especificada.",
        "wsserver_invalid_url": "La URL del servidor es inválida",
        "wsserver_request_existing": "Ya hay otra solicitud de conexión activa",
        "wsserver_request_failed": "No se pudo conectar al servidor: %1$s.",
        "wsserver_success": "Conexión establecida con el servidor: %1$s",
        "xp_description": "Añade o quita experiencia a un jugador.",
        "xp_failure_widthdrawXp": "No se puede dar a un jugador una cantidad negativa de experiencia",
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
            "Flecha imbuida"
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
            "Estandarte azul claro",
            "Estandarte magenta",
            "Estandarte naranja",
            "Estandarte blanco"
        ],
        "bed": [
            "Cama",
            "Cama blanca",
            "Cama naranja",
            "Cama magenta",
            "Cama azul claro",
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
            "Remolacha"
        ],
        "beetroot_soup": [
            "Sopa de remolacha"
        ],
        "blaze_powder": [
            "Polvo de llama"
        ],
        "blaze_rod": [
            "Vara de llama"
        ],
        "boat": [
            "Barco de roble",
            "Barco de roble",
            "Barco de abeto",
            "Barco de abedul",
            "Barco de la jungla",
            "Barco de acacia",
            "Barco de roble oscuro"
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
            "Cuenco"
        ],
        "bread": [
            "Pan"
        ],
        "brewing_stand": [
            "Soporte para pociones"
        ],
        "brick": [
            "Ladrillo"
        ],
        "bucket": [
            "Cubo"
        ],
        "bucketLava": [
            "Cubo de lava"
        ],
        "bucketWater": [
            "Cubo de agua"
        ],
        "bucketFish": [
            "Cubo de bacalao"
        ],
        "bucketSalmon": [
            "Cubo de salmón"
        ],
        "bucketTropical": [
            "Cubo de peces tropicales"
        ],
        "bucketPuffer": [
            "Cubo de peces globo"
        ],
        "bucketCustomFish": [
            "Cubo de"
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
            "Celeste"
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
            "Cerceta"
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
            "%1$s kob"
        ],
        "tropicalBodySunstreakSingle": [
            "%1$s quemado por el sol"
        ],
        "tropicalBodySnooperSingle": [
            "%1$s espía"
        ],
        "tropicalBodyDasherSingle": [
            "%1$s alegre"
        ],
        "tropicalBodyBrinelySingle": [
            "%1$s en salmuera"
        ],
        "tropicalBodySpottySingle": [
            "%1$s irregular"
        ],
        "tropicalBodyFlopperSingle": [
            "%1$s estafador"
        ],
        "tropicalBodyStripeySingle": [
            "%1$s a rayas"
        ],
        "tropicalBodyGlitterSingle": [
            "%1$s con brillo"
        ],
        "tropicalBodyBlockfishSingle": [
            "%1$s pez bloque"
        ],
        "tropicalBodyBettySingle": [
            "%1$s Betty"
        ],
        "tropicalBodyClayfishSingle": [
            "%1$s pez de arcilla"
        ],
        "tropicalBodyKobMulti": [
            "%1$s-%2$s kob"
        ],
        "tropicalBodySunstreakMulti": [
            "%1$s-%2$s quemado por el sol"
        ],
        "tropicalBodySnooperMulti": [
            "%1$s-%2$s espía"
        ],
        "tropicalBodyDasherMulti": [
            "%1$s-%2$s alegre"
        ],
        "tropicalBodyBrinelyMulti": [
            "%1$s-%2$s en salmuera"
        ],
        "tropicalBodySpottyMulti": [
            "%1$s-%2$s irregular"
        ],
        "tropicalBodyFlopperMulti": [
            "%1$s-%2$s estafador"
        ],
        "tropicalBodyStripeyMulti": [
            "%1$s-%2$s a rayas"
        ],
        "tropicalBodyGlitterMulti": [
            "%1$s-%2$s con brillo"
        ],
        "tropicalBodyBlockfishMulti": [
            "%1$s-%2$s pez bloque"
        ],
        "tropicalBodyBettyMulti": [
            "%1$s-%2$s Betty"
        ],
        "tropicalBodyClayfishMulti": [
            "%1$s-%2$s pez de arcilla"
        ],
        "tropicalSchoolAnemone": [
            "Anémona"
        ],
        "tropicalSchoolBlackTang": [
            "Pez cirujano negro"
        ],
        "tropicalSchoolBlueDory": [
            "Gallo azul"
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
            "Beta de algodón de azúcar"
        ],
        "tropicalSchoolDottyback": [
            "Estuario"
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
            "Mariposa decorada"
        ],
        "tropicalSchoolParrotfish": [
            "Pez loro"
        ],
        "tropicalSchoolQueenAngelFish": [
            "Ángel reina"
        ],
        "tropicalSchoolRedCichlid": [
            "Cíclido rojo"
        ],
        "tropicalSchoolRedLippedBlenny": [
            "Blénido de labios rojos"
        ],
        "tropicalSchoolRedSnapper": [
            "Pargo rojo"
        ],
        "tropicalSchoolThreadfin": [
            "Barbudo"
        ],
        "tropicalSchoolTomatoClown": [
            "Pez payaso tomate"
        ],
        "tropicalSchoolTriggerfish": [
            "Pez gatillo"
        ],
        "tropicalSchoolYellowTang": [
            "Pez cirujano amarillo"
        ],
        "tropicalSchoolYellowtailParrot": [
            "Loro de cola amarilla"
        ],
        "cake": [
            "Pastel"
        ],
        "camera": [
            "Cámara"
        ],
        "golden_carrot": [
            "Zanahoria dorada"
        ],
        "carrotOnAStick": [
            "Palo y zanahoria"
        ],
        "warped_fungus_on_a_stick": [
            "Hongos retorcidos en un palo"
        ],
        "carrot": [
            "Zanahoria"
        ],
        "cauldron": [
            "Caldero"
        ],
        "coal": [
            "Hulla",
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
            "Filete cocinado"
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
            "Comparador de redstone"
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
            "Repetidor de redstone"
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
            "Puerta carmesí"
        ],
        "warped_door": [
            "Puerta retorcida"
        ],
        "dragon_breath": [
            "Aliento de dragón"
        ],
        "dye": [
            "Bolsa de tinta",
            "Bolsa de tinta",
            "Tinte rojo",
            "Tinte verde",
            "Granos de cacao",
            "Lapislázuli",
            "Tinte morado",
            "Tinte cian",
            "Tinte gris claro",
            "Tinte gris",
            "Tinte rosa",
            "Tinte verde lima",
            "Tinte amarillo",
            "Tinte azul claro",
            "Tinte magenta",
            "Tinte naranja",
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
            "Libro encantado"
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
            "Chisquero de pedernal"
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
            "Azada de diamante"
        ],
        "golden_hoe": [
            "Azada de oro"
        ],
        "iron_hoe": [
            "Azada de hierro"
        ],
        "stone_hoe": [
            "Azada de piedra"
        ],
        "wooden_hoe": [
            "Azada de madera"
        ],
        "honey_bottle": [
            "Bote de miel"
        ],
        "honeycomb": [
            "Panal"
        ],
        "horsearmordiamond": [
            "Armadura para caballo de diamante"
        ],
        "horsearmorgold": [
            "Armadura de oro para caballo"
        ],
        "horsearmoriron": [
            "Armadura de hierro para caballo"
        ],
        "horsearmorleather": [
            "Armadura de cuero para caballo"
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
            "Fragmento de inframundita"
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
            "Azada de inframundita"
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
            "Rienda"
        ],
        "leather": [
            "Cuero"
        ],
        "leaves": [
            "Hojas",
            "Hojas de roble",
            "Hojas de abeto",
            "Hojas de abedul",
            "Hojas de la jungla",
            "Hojas de acacia",
            "Hojas de roble oscuro"
        ],
        "chainmail_leggings": [
            "Mallas de malla"
        ],
        "leather_leggings": [
            "Pantalones de cuero"
        ],
        "diamond_leggings": [
            "Mallas de diamante"
        ],
        "golden_leggings": [
            "Mallas de oro"
        ],
        "iron_leggings": [
            "Mallas de hierro"
        ],
        "nautilus_shell": [
            "Concha de Nautilus"
        ],
        "heart_of_the_sea": [
            "Corazón del mar"
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
            "Vagoneta con embudo"
        ],
        "tnt_minecart": [
            "Vagoneta con dinamita"
        ],
        "trident": [
            "Tridente"
        ],
        "mushroom_stew": [
            "Estofado de champiñones"
        ],
        "muttoncooked": [
            "Cordero cocinado"
        ],
        "muttonraw": [
            "Cordero crudo"
        ],
        "name_tag": [
            "Etiqueta de nombre"
        ],
        "netherbrick": [
            "Ladrillo de inframundo"
        ],
        "quartz": [
            "Cuarzo de inframundo"
        ],
        "nether_wart": [
            "Verruga de inframundo"
        ],
        "netherStar": [
            "Estrella de inframundo"
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
            "Portafolio"
        ],
        "potato": [
            "Patata"
        ],
        "baked_potato": [
            "Patata asada"
        ],
        "poisonous_potato": [
            "Patata venenosa"
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
            "Tarta de calabaza"
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
            "Estofado de conejo"
        ],
        "record": [
            "Disco de música"
        ],
        "redstone": [
            "Redstone"
        ],
        "reeds": [
            "Cañas de azúcar"
        ],
        "kelp": [
            "Alga marina"
        ],
        "dried_kelp": [
            "Alga marina seca"
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
            "Semillas de remolacha"
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
            "Señal de roble"
        ],
        "spruce_sign": [
            "Señal de abeto"
        ],
        "birch_sign": [
            "Señal de abedul"
        ],
        "jungle_sign": [
            "Señal de jungla"
        ],
        "acacia_sign": [
            "Señal de acacia"
        ],
        "darkoak_sign": [
            "Señal de roble oscuro"
        ],
        "crimson_sign": [
            "Señal carmesí"
        ],
        "warped_sign": [
            "Señal retorcida"
        ],
        "skull": [
            "Calavera de esqueleto",
            "Calavera de esqueleto",
            "Calavera de esqueleto Wither",
            "Cabeza de zombi",
            "Cabeza",
            "Cabeza de Creeper",
            "Cabeza de dragón"
        ],
        "slime_ball": [
            "Bola de limo"
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
            "Polvo de piedra brillante"
        ],
        "shield": [
            "Escudo"
        ],
        "shulker_shell": [
            "Caparazón de Shulker"
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
            "Raíl activador"
        ],
        "allow": [
            "Permitir"
        ],
        "deny": [
            "Rechazar"
        ],
        "border_block": [
            "Borde"
        ],
        "anvil": [
            "Yunque",
            "Yunque",
            null,
            null,
            null,
            "Yunque ligeramente dañado",
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
            "Lecho de roca"
        ],
        "conduit": [
            "Conducto"
        ],
        "invisibleBedrock": [
            "Cimiento invisible"
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
            "Bloque de hulla"
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
            "Bloque de redstone"
        ],
        "bookshelf": [
            "Estantería"
        ],
        "brick_block": [
            "Bloque de ladrillo"
        ],
        "brown_mushroom": [
            "Champiñón marrón"
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
            "Bloque de algas marinas secas"
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
            "Bloque de panales"
        ],
        "lodestone": [
            "Magnetita"
        ],
        "nether_sprouts": [
            "Brotes del Inframundo"
        ],
        "crimson_stem": [
            "Tallo carmesí"
        ],
        "warped_stem": [
            "Tallo retorcido"
        ],
        "stripped_crimson_stem": [
            "Tallo a rayas carmesí"
        ],
        "stripped_warped_stem": [
            "Tallo a rayas retorcido"
        ],
        "crimson_hyphae": [
            "Hifas carmesíes"
        ],
        "warped_hyphae": [
            "Hifas retorcidas"
        ],
        "stripped_crimson_hyphae": [
            "Hifas a rayas carmesíes"
        ],
        "stripped_warped_hyphae": [
            "Hifas a rayas retorcidas"
        ],
        "crimson_planks": [
            "Tablones carmesíes"
        ],
        "warped_planks": [
            "Tablones retorcidos"
        ],
        "crimson_trapdoor": [
            "Escotilla carmesí"
        ],
        "warped_trapdoor": [
            "Escotilla retorcida"
        ],
        "crimson_standing_sign": [
            "Señal carmesí"
        ],
        "warped_standing_sign": [
            "Señal retorcida"
        ],
        "crimson_wall_sign": [
            "Señal carmesí"
        ],
        "warped_wall_sign": [
            "Señal retorcida"
        ],
        "crimson_stairs": [
            "Escaleras carmesíes"
        ],
        "warped_stairs": [
            "Escaleras retorcidas"
        ],
        "crimson_fence": [
            "Valla carmesí"
        ],
        "warped_fence": [
            "Valla retorcida"
        ],
        "crimson_fence_gate": [
            "Puerta de valla carmesí"
        ],
        "warped_fence_gate": [
            "Puerta de valla retorcida"
        ],
        "crimson_button": [
            "Botón carmesí"
        ],
        "warped_button": [
            "Botón retorcido"
        ],
        "crimson_pressure_plate": [
            "Plato de presión carmesí"
        ],
        "warped_pressure_plate": [
            "Plato de presión retorcido"
        ],
        "crimson_slab": [
            "Losa carmesí"
        ],
        "warped_slab": [
            "Losa retorcida"
        ],
        "crimson_double_slab": [
            "Losa carmesí"
        ],
        "warped_double_slab": [
            "Losa retorcida"
        ],
        "shroomlight": [
            "Champiluz"
        ],
        "crimson_nylium": [
            "Nylium carmesí"
        ],
        "warped_nylium": [
            "Nylium retorcido"
        ],
        "basalt": [
            "Basalto"
        ],
        "polished_basalt": [
            "Basalto pulido"
        ],
        "blackstone": [
            "Rocanegra"
        ],
        "polished_blackstone_bricks": [
            "Ladrillos de rocanegra pulida"
        ],
        "cracked_polished_blackstone_bricks": [
            "Ladrillos de rocanegra agrietada pulida"
        ],
        "polished_blackstone_brick_stairs": [
            "Escaleras de ladrillo de rocanegra pulida"
        ],
        "blackstone_stairs": [
            "Escaleras de rocanegra"
        ],
        "blackstone_wall": [
            "Pared de rocanegra"
        ],
        "polished_blackstone_brick_wall": [
            "Pared de ladrillos de rocanegra pulida"
        ],
        "chiseled_polished_blackstone": [
            "Rocanegra cincelada y pulida"
        ],
        "gilded_blackstone": [
            "Rocanegra dorada"
        ],
        "blackstone_slab": [
            "Losa de rocanegra"
        ],
        "polished_blackstone_brick_slab": [
            "Losa de ladrillo de rocanegra pulida"
        ],
        "chain": [
            "Cadena"
        ],
        "soul_soil": [
            "Tierra de alma"
        ],
        "soul_fire": [
            "Fuego de alma"
        ],
        "polished_blackstone": [
            "Rocanegra pulida"
        ],
        "polished_blackstone_stairs": [
            "Escaleras de rocanegra pulida"
        ],
        "polished_blackstone_slab": [
            "Losa de rocanegra pulida"
        ],
        "polished_blackstone_pressure_plate": [
            "Plato de presión de rocanegra pulida"
        ],
        "polished_blackstone_button": [
            "Botón de rocanegra pulida"
        ],
        "polished_blackstone_wall": [
            "Pared de rocanegra pulida"
        ],
        "soul_campfire": [
            "Fogata de alma"
        ],
        "chiseled_nether_bricks": [
            "Ladrillos del Inframundo cincelados"
        ],
        "cracked_nether_bricks": [
            "Ladrillos del Inframundo agrietados"
        ],
        "quartz_bricks": [
            "Ladrillos de cuarzo"
        ],
        "trapped_chest": [
            "Cofre trampa"
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
            "Caja de Shulker azul claro"
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
            "Cristal tintado de blanco",
            "Cristal tintado de blanco",
            "Cristal tintado de naranja",
            "Cristal tintado de magenta",
            "Cristal tintado de azul claro",
            "Cristal tintado de amarillo",
            "Cristal tintado de verde lima",
            "Cristal tintado de rosa",
            "Cristal tintado de gris",
            "Cristal tintado de gris claro",
            "Cristal tintado de cian",
            "Cristal tintado de morado",
            "Cristal tintado de azul",
            "Cristal tintado de marrón",
            "Cristal tintado de verde",
            "Cristal tintado de rojo",
            "Cristal tintado de negro"
        ],
        "stained_glass_pane": [
            "Panel de cristal tintado de blanco",
            "Panel de cristal tintado de blanco",
            "Panel de cristal tintado de naranja",
            "Panel de cristal tintado de magenta",
            "Panel de cristal tintado de azul claro",
            "Panel de cristal tintado de amarillo",
            "Panel de cristal tintado de verde lima",
            "Panel de cristal tintado de rosa",
            "Panel de cristal tintado de gris",
            "Panel de cristal tintado de gris claro",
            "Panel de cristal tintado de cian",
            "Panel de cristal tintado de morado",
            "Panel de cristal tintado de azul",
            "Panel de cristal tintado de marrón",
            "Panel de cristal tintado de verde",
            "Panel de cristal tintado de rojo",
            "Panel de cristal tintado de negro"
        ],
        "clay": [
            "Bloque de arcilla"
        ],
        "hardened_clay": [
            "Terracota"
        ],
        "stained_hardened_clay": [
            "Terracota",
            "Terracota blanca",
            "Terracota naranja",
            "Terracota magenta",
            "Terracota azul claro",
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
            "Lana azul claro",
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
            "Pared de adoquines",
            "Pared de adoquines",
            "Pared de adoquines musgosa",
            "Pared de granito",
            "Pared de diorita",
            "Pared de andesita",
            "Pared de arenisca",
            "Pared de ladrillos",
            "Pared de ladrillos de piedra",
            "Pared de ladrillos de piedra musgosa",
            "Pared de ladrillos de piedra de End",
            "Pared de ladrillos de Inframundo",
            "Pared de prismarina",
            "Pared de arenisca roja",
            "Pared de ladrillos de Inframundo rojo"
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
            "Bloque de comandos repetido"
        ],
        "chain_command_block": [
            "Bloque de comandos encadenado"
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
            "Raíl detector"
        ],
        "dirt": [
            "Tierra",
            "Tierra",
            "Tierra basta"
        ],
        "podzol": [
            "Podsol"
        ],
        "purpur_block": [
            "Bloque de púrpura",
            "Bloque de púrpura",
            "Púrpura cincelado",
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
            "Lila",
            "Hierba alta doble",
            "Helecho grande",
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
            "Granja"
        ],
        "fletching_table": [
            "Mesa de emplumado"
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
            "Sosa",
            "Tulipán rojo",
            "Tulipán naranja",
            "Tulipán blanco",
            "Tulipán rosa",
            "Margarita",
            "Aciano",
            "Lirio del valle"
        ],
        "wither_rose": [
            "Rosa del Wither"
        ],
        "furnace": [
            "Horno"
        ],
        "glass": [
            "Cristal"
        ],
        "golden_rail": [
            "Raíl propulsado"
        ],
        "grass": [
            "Bloque de hierba"
        ],
        "grass_path": [
            "Sendero de hierba"
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
            "Embudo"
        ],
        "ice": [
            "Hielo"
        ],
        "packed_ice": [
            "Hielo compacto"
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
            "Escalera de mano"
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
            "Piedra brillante"
        ],
        "lit_pumpkin": [
            "Calabaza iluminada"
        ],
        "lockedchest": [
            "Cofre cerrado"
        ],
        "log2": [
            "Tronco de acacia",
            "Tronco de acacia",
            "Tronco de roble oscuro"
        ],
        "log": [
            "Tronco",
            "Tronco de roble",
            "Tronco de abeto",
            "Tronco de abedul",
            "Tronco de la jungla"
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
            "Ladrillo de piedra infestada",
            "Ladrillo de piedra musgosa infestada",
            "Ladrillo de piedra agrietada infestada",
            "Ladrillo de piedra cincelada infestada"
        ],
        "mushroom": [
            "Champiñón"
        ],
        "noteblock": [
            "Bloque de nota"
        ],
        "mycelium": [
            "Micelio"
        ],
        "nether_brick": [
            "Bloque de ladrillo de inframundo"
        ],
        "red_nether_brick": [
            "Ladrillo de inframundo rojo"
        ],
        "nether_brick_fence": [
            "Valla de inframundo"
        ],
        "quartz_ore": [
            "Mineral de cuarzo de inframundo"
        ],
        "netherreactor": [
            "Núcleo del reactor de inframundo"
        ],
        "nether_wart_block": [
            "Bloque de verruga de inframundo"
        ],
        "warped_wart_block": [
            "Bloque de verruga retorcido"
        ],
        "unlit_redstone_torch": [
            "Antorcha de redstone"
        ],
        "redstone_torch": [
            "Antorcha de redstone"
        ],
        "soul_torch": [
            "Antorcha de alma"
        ],
        "obsidian": [
            "Obsidiana"
        ],
        "coal_ore": [
            "Mineral de hulla"
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
            "Mineral de redstone"
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
            "Pistón adhesivo"
        ],
        "portal": [
            "Portal"
        ],
        "potatoes": [
            "Patatas"
        ],
        "stone_pressure_plate": [
            "Placa de presión de piedra"
        ],
        "wooden_pressure_plate": [
            "Plato de presión de roble"
        ],
        "acacia_pressure_plate": [
            "Plato de presión de acacia"
        ],
        "birch_pressure_plate": [
            "Plato de presión de abedul"
        ],
        "dark_oak_pressure_plate": [
            "Plato de presión de roble oscuro"
        ],
        "jungle_pressure_plate": [
            "Plato de presión de jungla"
        ],
        "spruce_pressure_plate": [
            "Plato de presión de abeto"
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
            "Raíl"
        ],
        "red_mushroom": [
            "Champiñón rojo"
        ],
        "crimson_fungus": [
            "Hongos carmesíes"
        ],
        "warped_fungus": [
            "Hongos retorcidos"
        ],
        "red_mushroom_block": [
            "Bloque de champiñón rojo"
        ],
        "red_sandstone": [
            "Arenisca roja",
            "Arenisca roja",
            "Arenisca roja cincelada",
            "Cortar arenisca roja",
            "Arenisca roja lisa"
        ],
        "redstone_wire": [
            "Polvo de redstone"
        ],
        "redstone_lamp": [
            "Lámpara de redstone"
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
            "Cortar arenisca",
            "Arenisca lisa"
        ],
        "sapling": [
            "Brote de roble",
            "Brote de roble",
            "Brote de abeto",
            "Brote de abedul",
            "Brote de jungla",
            "Brote de acacia",
            "Brote de roble oscuro"
        ],
        "seaLantern": [
            "Linterna del mar"
        ],
        "standing_sign": [
            "Señal"
        ],
        "spruce_standing_sign": [
            "Señal de abeto"
        ],
        "birch_standing_sign": [
            "Señal de abedul"
        ],
        "jungle_standing_sign": [
            "Señal de jungla"
        ],
        "acacia_standing_sign": [
            "Señal de acacia"
        ],
        "darkoak_standing_sign": [
            "Señal de roble oscuro"
        ],
        "slime": [
            "Bloque de limo"
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
            "Escaleras de ladrillos"
        ],
        "nether_brick_stairs": [
            "Escaleras de inframundo"
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
            "Escaleras de prismarina"
        ],
        "dark_prismarine_stairs": [
            "Escaleras de prismarina oscura"
        ],
        "prismarine_bricks_stairs": [
            "Escaleras de ladrillos de prismarina"
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
            "Escaleras de ladrillos de piedra musgosa"
        ],
        "smooth_red_sandstone_stairs": [
            "Escaleras de arenisca roja lisa"
        ],
        "smooth_sandstone_stairs": [
            "Escaleras de arenisca lisa"
        ],
        "end_brick_stairs": [
            "Escaleras de ladrillos de piedra de End"
        ],
        "mossy_cobblestone_stairs": [
            "Escaleras de adoquines musgosos"
        ],
        "red_nether_brick_stairs": [
            "Escaleras de Inframundo rojas"
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
            "Estandarte azul claro",
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
            "Cortapiedras"
        ],
        "stonecutter_block": [
            "Cortapiedras"
        ],
        "mossy_cobblestone": [
            "Adoquines musgosos"
        ],
        "double_stone_slab": [
            "Losa de piedra",
            "Losa de piedra",
            "Losa de arenisca",
            "Losa de madera",
            "Losa de adoquines",
            "Losa de ladrillos",
            "Losa de ladrillos de piedra",
            "Losa de cuarzo",
            "Losa de ladrillo de inframundo"
        ],
        "stone_slab": [
            "Losa de piedra",
            "Losa de piedra lisa",
            "Losa de arenisca",
            "Losa de madera",
            "Losa de adoquines",
            "Losa de ladrillos",
            "Losa de ladrillos de piedra",
            "Losa de cuarzo",
            "Losa de ladrillo de inframundo"
        ],
        "double_stone_slab2": [
            "Losa de arenisca roja",
            "Losa de arenisca roja"
        ],
        "stone_slab2": [
            "Losa de arenisca roja",
            "Losa de arenisca roja",
            "Pilar de púrpura",
            "Losa de prismarina",
            "Losa de ladrillos de prismarina",
            "Losa de prismarina oscura",
            "Losa de adoquines musgosos",
            "Losa de arenisca lisa",
            "Losa de ladrillos de Inframundo rojo"
        ],
        "stone_slab3": [
            "Losa de ladrillos de piedra de End",
            "Losa de ladrillos de piedra de End",
            "Losa de arenisca roja lisa",
            "Losa de andesita pulida",
            "Losa de andesita",
            "Losa de diorita",
            "Losa de diorita pulida",
            "Losa de granito",
            "Losa de granito pulido"
        ],
        "stone_slab4": [
            "Losa de ladrillos de piedra musgosa",
            "Losa de ladrillos de piedra musgosa",
            "Losa de cuarzo liso",
            "Losa de piedra",
            "Cortar losa de arenisca",
            "Cortar losa de arenisca roja"
        ],
        "coral_block": [
            "Bloque de coral de tubo",
            "Bloque de coral de tubo",
            "Bloque de coral de cerebro",
            "Bloque de coral de burbujas",
            "Bloque de coral de fuego",
            "Bloque de coral de cuerno",
            "Bloque de coral de tubo muerto",
            "Bloque de coral de cerebro muerto",
            "Bloque de coral de burbujas muerto",
            "Bloque de coral de fuego muerto",
            "Bloque de coral de cuerno muerto"
        ],
        "tallgrass": [
            "Hierba",
            "Hierba",
            "Helecho"
        ],
        "seagrass": [
            "Fondo marino",
            "Fondo marino"
        ],
        "sea_pickle": [
            "Escabeche marino"
        ],
        "turtle_egg": [
            "Huevo de tortuga marina"
        ],
        "coral": [
            "Coral de tubo",
            "Coral de tubo",
            "Coral de cerebro",
            "Coral de burbujas",
            "Coral de fuego",
            "Coral de cuerno",
            "Coral de tubo muerto",
            "Coral de cerebro muerto",
            "Coral de burbujas muerto",
            "Coral de fuego muerto",
            "Coral de cuerno muerto"
        ],
        "coral_fan": [
            "Abanico de coral de tubo",
            "Abanico de coral de tubo",
            "Abanico de coral de cerebro",
            "Abanico de coral de burbujas",
            "Abanico de coral de fuego",
            "Abanico de coral de cuerno"
        ],
        "coral_fan_dead": [
            "Abanico de coral de tubo muerto",
            "Abanico de coral de tubo muerto",
            "Abanico de coral de cerebro muerto",
            "Abanico de coral de burbujas muerto",
            "Abanico de coral de fuego muerto",
            "Abanico de coral de cuerno muerto"
        ],
        "glass_pane": [
            "Panel de cristal"
        ],
        "tnt": [
            "Dinamita"
        ],
        "snow_layer": [
            "Nieve superior"
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
            "Enredaderas enroscadas"
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
            "Telaraña"
        ],
        "heavy_weighted_pressure_plate": [
            "Plato de presión por peso (pesado)"
        ],
        "light_weighted_pressure_plate": [
            "Plato de presión por peso (ligero)"
        ],
        "end_stone": [
            "Piedra de End"
        ],
        "end_bricks": [
            "Ladrillos de piedra de End"
        ],
        "planks": [
            "Tablones de madera",
            "Tablones de madera de roble",
            "Tablones de madera de abeto",
            "Tablones de madera de abedul",
            "Tablones de madera de jungla",
            "Tablones de madera de acacia",
            "Tablones de madera de roble oscuro"
        ],
        "wooden_slab": [
            "Losa de madera",
            "Losa de madera de roble",
            "Losa de madera de abeto",
            "Losa de madera de abedul",
            "Losa de madera de la jungla",
            "Losa de madera de acacia",
            "Losa de madera de roble oscuro"
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
            "Alfombra azul claro",
            "Alfombra magenta",
            "Alfombra naranja",
            "Alfombra blanca"
        ],
        "crafting_table": [
            "Mesa de trabajo"
        ],
        "white_glazed_terracotta": [
            "Terracota acristalada blanca",
            "Terracota acristalada blanca"
        ],
        "orange_glazed_terracotta": [
            "Terracota acristalada naranja",
            "Terracota acristalada naranja"
        ],
        "magenta_glazed_terracotta": [
            "Terracota acristalada magenta",
            "Terracota acristalada magenta"
        ],
        "light_blue_glazed_terracotta": [
            "Terracota acristalada azul claro",
            "Terracota acristalada azul claro"
        ],
        "yellow_glazed_terracotta": [
            "Terracota acristalada amarilla",
            "Terracota acristalada amarilla"
        ],
        "lime_glazed_terracotta": [
            "Terracota acristalada verde lima",
            "Terracota acristalada verde lima"
        ],
        "pink_glazed_terracotta": [
            "Terracota acristalada rosa",
            "Terracota acristalada rosa"
        ],
        "gray_glazed_terracotta": [
            "Terracota acristalada gris",
            "Terracota acristalada gris"
        ],
        "silver_glazed_terracotta": [
            "Terracota acristalada gris claro",
            "Terracota acristalada gris claro"
        ],
        "cyan_glazed_terracotta": [
            "Terracota acristalada cian",
            "Terracota acristalada cian"
        ],
        "purple_glazed_terracotta": [
            "Terracota acristalada morada",
            "Terracota acristalada morada"
        ],
        "blue_glazed_terracotta": [
            "Terracota acristalada azul",
            "Terracota acristalada azul"
        ],
        "brown_glazed_terracotta": [
            "Terracota acristalada marrón",
            "Terracota acristalada marrón"
        ],
        "green_glazed_terracotta": [
            "Terracota acristalada verde",
            "Terracota acristalada verde"
        ],
        "red_glazed_terracotta": [
            "Terracota acristalada roja",
            "Terracota acristalada roja"
        ],
        "black_glazed_terracotta": [
            "Terracota acristalada negra",
            "Terracota acristalada negra"
        ],
        "concrete": [
            "Hormigón blanco",
            "Hormigón blanco",
            "Hormigón naranja",
            "Hormigón magenta",
            "Hormigón azul claro",
            "Hormigón amarillo",
            "Hormigón verde lima",
            "Hormigón rosa",
            "Hormigón gris",
            "Hormigón gris claro",
            "Hormigón cian",
            "Hormigón morado",
            "Hormigón azul",
            "Hormigón marrón",
            "Hormigón verde",
            "Hormigón rojo",
            "Hormigón negro"
        ],
        "glazedTerracottaWhite": [
            "Terracota acristalada blanca"
        ],
        "glazedTerracottaOrange": [
            "Terracota acristalada naranja"
        ],
        "glazedTerracottaMagenta": [
            "Terracota acristalada magenta"
        ],
        "glazedTerracottaLightBlue": [
            "Terracota acristalada azul claro"
        ],
        "glazedTerracottaYellow": [
            "Terracota acristalada amarilla"
        ],
        "glazedTerracottaLime": [
            "Terracota acristalada verde lima"
        ],
        "glazedTerracottaPink": [
            "Terracota acristalada rosa"
        ],
        "glazedTerracottaGray": [
            "Terracota acristalada gris"
        ],
        "glazedTerracottaSilver": [
            "Terracota acristalada gris claro"
        ],
        "glazedTerracottaCyan": [
            "Terracota acristalada cian"
        ],
        "glazedTerracottaPurple": [
            "Terracota acristalada morada"
        ],
        "glazedTerracottaBlue": [
            "Terracota acristalada azul"
        ],
        "glazedTerracottaBrown": [
            "Terracota acristalada marrón"
        ],
        "glazedTerracottaGreen": [
            "Terracota acristalada verde"
        ],
        "glazedTerracottaRed": [
            "Terracota acristalada roja"
        ],
        "glazedTerracottaBlack": [
            "Terracota acristalada negra"
        ],
        "concretePowder": [
            "Polvo de hormigón blanco",
            "Polvo de hormigón blanco",
            "Polvo de hormigón naranja",
            "Polvo de hormigón magenta",
            "Polvo de hormigón azul claro",
            "Polvo de hormigón amarillo",
            "Polvo de hormigón verde lima",
            "Polvo de hormigón rosa",
            "Polvo de hormigón gris",
            "Polvo de hormigón gris claro",
            "Polvo de hormigón cian",
            "Polvo de hormigón morado",
            "Polvo de hormigón azul",
            "Polvo de hormigón marrón",
            "Polvo de hormigón verde",
            "Polvo de hormigón rojo",
            "Polvo de hormigón negro"
        ],
        "stripped_spruce_log": [
            "Tronco de abeto sin corteza"
        ],
        "stripped_dark_oak_log": [
            "Tronco de roble oscuro sin corteza"
        ],
        "stripped_birch_log": [
            "Tronco de abedul sin corteza"
        ],
        "stripped_jungle_log": [
            "Tronco de la jungla sin corteza"
        ],
        "stripped_oak_log": [
            "Tronco de roble sin corteza"
        ],
        "stripped_acacia_log": [
            "Tronco de acacia sin corteza"
        ],
        "bamboo": [
            "Bambú"
        ],
        "scaffolding": [
            "Andamio"
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
            "Madera de roble sin corteza",
            "Madera de abeto sin corteza",
            "Madera de abedul sin corteza",
            "Madera de la jungla sin corteza",
            "Madera de acacia sin corteza",
            "Madera de roble oscuro sin corteza"
        ],
        "netherite_block": [
            "Bloque de inframundita"
        ],
        "ancient_debris": [
            "Escombros antiguos"
        ],
        "nether_gold_ore": [
            "Mineral de oro del Inframundo"
        ],
        "respawn_anchor": [
            "Ancla de regeneración"
        ],
        "crying_obsidian": [
            "Obsidiana plañidera"
        ]
    }
};
freeze(lang_data);
export = lang_data;
