
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
    id: "it_IT" as LangId,
    commands:{
        "ability_description": "Imposta l'abilità di un giocatore.",
        "ability_noability": "Non è disponibile nessuna abilità chiamata \"%1$s\"",
        "ability_granted": "Hai ottenuto l'abilità \"%1$s\"",
        "ability_revoked": "L'abilità \"%1$s\" ti è stata revocata",
        "ability_success": "L'abilità è stata aggiornata",
        "achievement_alreadyHave": "Il giocatore %1$s ha già ottenuto l'obiettivo %2$s",
        "achievement_description": "Assegna o rimuove un obiettivo da un giocatore.",
        "achievement_dontHave": "Il giocatore %1$s non ha ottenuto l'obiettivo %2$s",
        "achievement_give_success_all": "%1$s ha ottenuto tutti gli obiettivi",
        "achievement_give_success_one": "La statistica %2$s è stata assegnata a %1$s",
        "achievement_statTooLow": "Il giocatore %1$s non ha la statistica %2$s",
        "achievement_take_success_all": "Tutti gli obiettivi sono stati ottenuti da %1$s",
        "achievement_take_success_one": "La statistica %1$s è stata ottenuta da %2$s",
        "achievement_unknownAchievement": "Obiettivo o statistica \"%1$s\" sconosciuto",
        "agent_attack_success": "Agente: attacco riuscito",
        "agent_attack_failed": "Agente: attacco fallito",
        "agent_collect_success": "Agente: raccolta riuscita",
        "agent_collect_failed": "Agente: raccolta fallita",
        "agent_createagent_success": "Agente creato",
        "agent_createagent_failed": "Impossibile creare agente",
        "agent_destroy_success": "L'agente ha distrutto un blocco",
        "agent_destroy_failed": "Agente: distruzione fallita",
        "agent_detect_success": "Agente: rilevazione riuscita",
        "agent_detect_failed": "Agente: rilevazione fallita",
        "agent_detectredstone_success": "Agente: detectredstone riuscito",
        "agent_detectredstone_failed": "Agente: detectredstone fallito",
        "agent_drop_success": "Agente: rilascio riuscito",
        "agent_drop_failed": "Agente: rilascio fallito",
        "agent_dropall_success": "Agente: dropall riuscito",
        "agent_dropall_failed": "Agente: dropall fallito",
        "agent_getitemcount_success": "Agente: getitemcount riuscito",
        "agent_getitemcount_failed": "Agente: getitemcount fallito",
        "agent_getitemspace_success": "Agente: getitemspace riuscito",
        "agent_getitemspace_failed": "Agente: getitemspace fallito",
        "agent_getitemdetail_success": "Agente: getitemdetail riuscito",
        "agent_getitemdetail_failed": "Agente: getitemdetail fallito",
        "agent_getposition_success": "Agente getposition riuscito",
        "agent_getposition_failed": "Agente getposition fallito",
        "agent_inspect_success": "Agente: ispezione riuscita",
        "agent_inspect_failed": "Agente: ispezione fallita",
        "agent_inspectdata_success": "Agente: ispezione dati riuscita",
        "agent_inspectdata_failed": "L'agente ha fallito l'ispezione dei dati",
        "agent_move_success": "Agente: movimento riuscito",
        "agent_move_failed": "Agente: movimento fallito",
        "agent_outofrange": "Impossibile impartire comando, agente fuori portata",
        "agent_place_success": "Agente: posizionamento riuscito",
        "agent_place_failed": "Agente: posizionamento fallito",
        "agent_setitem_success": "Agente imposta oggetto riuscito",
        "agent_setitem_failed": "Agente imposta oggetto fallito",
        "agent_turn_success": "Agente: svolta riuscita",
        "agent_turn_failed": "Agente: svolta fallita",
        "agent_till_success": "Agente: aratura riuscita",
        "agent_till_failed": "Agente: aratura fallita",
        "agent_tpagent_description": "Teletrasporta l'agente",
        "agent_tpagent_success": "Agente: teletrasporto riuscito",
        "agent_tpagent_failed": "Agente: teletrasporto fallito",
        "agent_transfer_success": "Agente: trasferimento riuscito",
        "agent_transfer_failed": "Agente: trasferimento fallito",
        "always_day": "Ciclo giorno-notte %1$s",
        "always_day_locked": "Ciclo giorno-notte bloccato",
        "always_day_unlocked": "Ciclo giorno-notte sbloccato",
        "ban_description": "Aggiunge il giocatore all'elenco delle persone bloccate.",
        "autocomplete_a": "tutti i giocatori",
        "autocomplete_c": "il mio Agent",
        "autocomplete_e": "tutte le entità",
        "autocomplete_p": "giocatore più vicino",
        "autocomplete_r": "giocatore a caso",
        "autocomplete_s": "te stesso",
        "autocomplete_v": "tutti gli Agent",
        "ban_failed": "Impossibile bandire il giocatore %1$s",
        "ban_success": "Il giocatore %1$s è stato bandito",
        "banip_description": "Aggiunge un indirizzo IP all'elenco delle persone bloccate.",
        "banip_invalid": "Hai inserito un indirizzo IP non valido o il nome di un giocatore non connesso",
        "banip_success": "L'indirizzo IP %1$s è stato inibito",
        "banip_success_players": "L'indirizzo IP %1$s appartenente a %2$s è stato inibito",
        "banlist_ips": "%1$d indirizzi IP inibiti:",
        "banlist_players": "%1$d giocatori banditi:",
        "blockdata_description": "Modifica il tag di dati di un blocco.",
        "blockdata_placeFailed": "Qui non puoi piazzare blocchi",
        "blockdata_destroyFailed": "Qui non puoi scavare",
        "blockdata_failed": "I dati NBT non sono cambiati: %1$s",
        "blockdata_notValid": "Il blocco destinatario non può contenere dati NBT",
        "blockdata_outOfWorld": "Impossibile cambiare il blocco al di fuori del mondo",
        "blockdata_success": "I dati del blocco sono stati aggiornati a: %1$s",
        "blockdata_tagError": "L'analisi sintattica dei dati NBT è fallita: %1$s",
        "bossbar_add_success": "Barra dei boss personalizzata [%1$s] creata",
        "bossbar_add_failure_invalid": "ID della barra dei boss non valido. Gli ID dovrebbero essere scritti come namespace:id o id (in automatico per i namespace di Minecraft).",
        "bossbar_add_failure_exists": "Esiste già una barra dei boss con l'ID '%1$s'",
        "bossbar_description": "Crea e modifica le barre dei boss",
        "bossbar_get_max": "La barra dei boss personalizzata [%1$s] ha un massimo di %2$d",
        "bossbar_get_players": "La barra dei boss personalizzata [%1$s] ha %2$s giocatori attualmente online: %3$s",
        "bossbar_get_players_none": "La barra dei boss personalizzata [%1$s] al momento non ha giocatori online",
        "bossbar_get_players_one": "La barra dei boss personalizzata [%1$s] ha 1 giocatore attualmente online: %2$s",
        "bossbar_get_value": "La barra dei boss personalizzata [%1$s] ha un valore di %2$d",
        "bossbar_get_visible_true": "La barra dei boss personalizzata [%1$s] è al momento visibile",
        "bossbar_get_visible_false": "La barra dei boss personalizzata [%1$s] è al momento nascosta",
        "bossbar_list": "Ci sono %1$s barre dei boss personalizzate attive: %2$s",
        "bossbar_list_none": "Non ci sono barre dei boss personalizzate attive",
        "bossbar_list_one": "C'è 1 barra dei boss personalizzata attiva: %1$s",
        "bossbar_notFound": "Non esiste una barra dei boss con l'ID '%1$s'",
        "bossbar_remove": "Barra dei boss personalizzata [%1$s] rimossa",
        "change_setting_description": "Modifica un'impostazione sul server dedicato mentre è in esecuzione.",
        "change_setting_success": "Modifica effettuata: %1$s",
        "chunkinfo_compiled": "Il trancio è compilato.",
        "chunkinfo_data": "I primi 64 vertici sono: %1$s",
        "chunkinfo_empty": "Il trancio è vuoto.",
        "chunkinfo_hasLayers": "Il trancio ha i livelli: %1$s",
        "chunkinfo_hasNoRenderableLayers": "Il trancio non ha livelli rendibili.",
        "chunkinfo_isEmpty": "Il trancio ha livelli vuoti: %1$s",
        "chunkinfo_location": "Posizione del trancio: (%1$d, %2$d, %3$d)",
        "chunkinfo_noChunk": "Nessun trancio trovato alla posizione %1$d, %2$d, %3$d",
        "chunkinfo_notCompiled": "Il trancio non è compilato.",
        "chunkinfo_notEmpty": "Il trancio non è vuoto.",
        "chunkinfo_vertices": "La memoria di transito del livello %1$s contiene %2$d vertici",
        "classroommode_description": "Tentativo di avvio e connessione alla modalità Classe.",
        "classroommode_success": "Tentativo di avvio della modalità Classe...",
        "clear_description": "Rimuove elementi dall'inventario del giocatore.",
        "clear_failure": "Impossibile svuotare l'inventario di %1$s",
        "clear_failure_no_items": "Impossibile svuotare l'inventario di %1$s: nessun oggetto da rimuovere",
        "clear_success": "L'inventario di %1$s è stato svuotato, rimuovendo %2$d oggetti",
        "clear_tagError": "L'analisi sintattica dei dati NBT è fallita: %1$s",
        "clear_testing": "%1$s ha %2$d oggetti che corrispondono ai criteri",
        "clearfixedinv_description": "Rimuove tutti gli slot d'inventario fissi.",
        "clearfixedinv_success": "Slot d'inventario fissi rimossi",
        "clone_description": "Clona blocchi da una regione all'altra.",
        "clone_failed": "Nessun blocco è stato clonato",
        "clone_filtered_error": "L'utilizzo filtrato richiede di specificare un blocco filtro",
        "clone_noOverlap": "Origine e destinazione non possono coincidere",
        "clone_outOfWorld": "Impossibile accedere a blocchi al di fuori del mondo",
        "clone_success": "Blocchi clonati: %1$d",
        "clone_tooManyBlocks": "Troppi blocchi nell'area specificata (%1$d > %2$d)",
        "closechat_description": "Chiude la finestra di chat del giocatore locale se è aperta.",
        "closechat_success": "Chat chiusa",
        "closechat_failure": "La chat non era aperta",
        "closewebsocket_description": "Interrompe la connessione WebSocket, se attiva.",
        "code_description": "Avvia Code Builder.",
        "code_success": "Avviato Code Builder.",
        "compare_failed": "Origine e destinazione non sono identici",
        "compare_outOfWorld": "Impossibile accedere a blocchi al di fuori del mondo",
        "compare_success": "Blocchi comparati: %1$d",
        "compare_tooManyBlocks": "Troppi blocchi nell'area specificata (%1$d > %2$d)",
        "corruptworld_description": "Danneggia il mondo caricato sul server.",
        "corruptworld_success": "Il mondo è stato danneggiato.",
        "daylock_description": "Blocca e sblocca il ciclo giorno-notte.",
        "debug_description": "Avvia o arresta una sessione di debug.",
        "debug_notStarted": "Impossibile interrompere l'analisi quando non è ancora cominciata!",
        "debug_start": "L'analisi di debug è stata avviata",
        "debug_stop": "L'analisi di debug è stata interrotta dopo %.2f secondi (%1$d tick)",
        "defaultgamemode_description": "Imposta la modalità di gioco normale.",
        "defaultgamemode_success": "Ora la modalità predefinita del mondo è %1$s",
        "deop_description": "Revoca lo stato di operatore da un giocatore.",
        "deop_failed": "Impossibile usare de-op (livello permessi troppo alto): %s",
        "deop_success": "%s non è più un operatore",
        "deop_message": "Non sei più un operatore",
        "difficulty_description": "Imposta il livello di difficoltà.",
        "difficulty_usage": "/difficulty <new difficulty>",
        "difficulty_success": "La difficoltà di gioco è stata impostata su %1$s",
        "downfall_success": "Le precipitazioni sono state attivate/disattivate",
        "effect_description": "Aggiunge o rimuove gli effetti di stato.",
        "effect_failure_notActive": "Impossibile rimuovere %1$s da %2$s poiché non possiede quest'effetto",
        "effect_failure_notActive_all": "Impossibile rimuovere qualsiasi effetto da %1$s, in quanto non ne possiede",
        "effect_failure_notAMob": "%1$s non può avere effetti",
        "effect_notFound": "Nessun effetto creatura con ID %s esistente",
        "effect_success": "L'effetto %1$s * %2$d è stato assegnato a %3$s per %4$d secondi",
        "effect_success_removed": "L'effetto %1$s è stato rimosso da %2$s",
        "effect_success_removed_all": "Tutti gli effetti sono stati rimossi da %1$s",
        "enchant_cantCombine": "%1$s non può essere combinato con %2$s",
        "enchant_invalidLevel": "%1$s non supporta il livello %2$d",
        "enchant_cantEnchant": "L'incantesimo selezionato non può essere aggiunto all'elemento di destinazione: %1$s",
        "enchant_description": "Aggiunge un incantesimo a un oggetto selezionato del giocatore.",
        "enchant_noItem": "La destinazione non ha un elemento: %1$s",
        "enchant_notFound": "Nessun incantesimo con ID %1$d",
        "enchant_success": "L'incantesimo è riuscito per %1$s",
        "entitydata_description": "Modifica il tag di dati di un'entità.",
        "entitydata_failed": "I dati NBT non sono cambiati: %1$s",
        "entitydata_noPlayers": "%1$s è un giocatore e non può essere modificato",
        "entitydata_success": "I dati dell'entità sono stati aggiornati a: %1$s",
        "entitydata_tagError": "L'analisi sintattica dei dati NBT è fallita: %1$s",
        "execute_allInvocationsFailed": "Tutte le invocazioni sono fallite: \"%1$s\"",
        "execute_failed": "Impossibile far eseguire \"%1$s\" a %2$s",
        "execute_description": "Esegue un comando per conto di una o più entità.",
        "fill_description": "Riempie un'intera regione o parte di essa con un blocco specifico.",
        "fill_failed": "Nessun blocco è stato riempito",
        "fill_outOfWorld": "Impossibile piazzare blocchi al di fuori del mondo",
        "fill_success": "Blocchi riempiti: %1$d",
        "fill_tagError": "L'analisi sintattica dei dati NBT è fallita: %1$s",
        "fill_tooManyBlocks": "Troppi blocchi nell'area specificata (%1$d > %2$d)",
        "fill_replace_auxvalue_invalid": "Sostituzione del valore dati del blocco %1$s invalida",
        "function_description": "Esegue i comandi contenuti nel corrispettivo file funzione.",
        "function_functionNameNotFound": "Funzione %1$s non trovata.",
        "function_invalidCharacters": "La funzione chiamata '%s' non è valida, il carattere '%s' non è consentito nei nomi di funzione.",
        "function_noEngineVersionSpecified": "Impossibile eseguire la funzione %s. Devi specificare un valore min_engine_version nel file manifest.json del pacchetto di comportamenti.",
        "function_success": "%1$d istruzioni funzione eseguite correttamente.",
        "gamemode_description": "Imposta la modalità di gioco di un giocatore.",
        "gamemode_success_other": "La modalità di gioco di %2$s è stata impostata su %1$s",
        "gamemode_success_self": "La propria modalità di gioco è stata impostata su %1$s",
        "gamemode_fail_invalid": "La modalità di gioco \"%1$s\" non è valida",
        "gamerule_description": "Imposta o richiedi una regola di gioco.",
        "gamerule_type_invalid": "Tipo non valido usato per la regola di gioco \"%1$s\"",
        "gamerule_type_nocheatsenabled": "La regola del gioco '%1$s' può essere usata solo se vengono attivati i trucchi in questo mondo.",
        "gamerule_nopermission": "Solo i proprietari del server possono cambiare \"%1$s\"",
        "gamerule_norule": "Non è disponibile alcuna regola di gioco chiamata \"%1$s\"",
        "gamerule_success": "La regola di gioco %1$s è stata aggiornata a %2$s",
        "generic_async_initiated": "Comando \"%1$s\" avviato (passaggio asincrono %2$d)",
        "generic_boolean_invalid": "\"%1$s\" non è \"true\" o \"false\"",
        "generic_chunk_notFound": "Impossibile trovare il trancio indicato",
        "generic_componentError": "Analisi sintattica lista componenti fallita",
        "generic_dimension_notFound": "Impossibile trovare la dimensione indicata",
        "generic_disabled": "In questo livello non sono attivi i trucchi.",
        "generic_disabled_templateLocked": "Al momento le impostazioni sono bloccate. Per modificarle, sblocca le opzioni del modello del mondo di gioco nel menu delle impostazioni di gioco.",
        "generic_double_tooBig": "Il numero che hai inserito (%.2f) è troppo alto, dev'essere al massimo %.2f",
        "generic_double_tooSmall": "Il numero che hai inserito (%s) è troppo basso, dev'essere almeno %s",
        "generic_duplicateType": "Duplica argomenti di tipo",
        "generic_duplicateSelectorArgument": "Duplica %s argomenti di selettore",
        "generic_encryption_badkey": "È stata fornita una chiave pubblica non valida. È richiesta una chiave di 120 byte dopo la formattazione PEM.",
        "generic_encryption_badsalt": "È stato fornito un sale non valido. È richiesto un sale di 16 byte prima della codifica Base64.",
        "generic_encryption_required": "Sessione criptata richiesta",
        "generic_entity_invalidType": "Il tipo di entità \"%1$s\" non è valido",
        "generic_entity_invalidUuid": "L'UUID dell'entità è in un formato non valido",
        "generic_entity_notFound": "L'entità non è stata trovata",
        "generic_exception": "Si è verificato un errore sconosciuto nel tentativo di eseguire questo comando",
        "generic_invalidAgentType": "Argomento di tipo applicato al selettore di solo Agent",
        "generic_invalidcontext": "Contesto non valido fornito per il tipo di comando specificato",
        "generic_invalidDevice": "Il comando che hai inserito, %s, non è supportato da questo dispositivo",
        "generic_invalidPlayerType": "Argomento di tipo applicato al selettore per soli giocatori",
        "generic_invalidType": "Argomento di tipo sconosciuto",
        "generic_levelError": "Il livello massimo deve essere più grande del livello minimo",
        "generic_malformed_body": "Corpo mancante o malformato",
        "generic_malformed_type": "Tipo richiesta non valido",
        "generic_notimplemented": "Non implementato",
        "generic_num_invalid": "\"%1$s\" non è un numero valido",
        "generic_num_tooBig": "Il numero che hai inserito (%1$d) è troppo alto (massimo: %2$d)",
        "generic_num_tooSmall": "Il numero che hai inserito (%1$d) è troppo basso (minimo: %2$d)",
        "generic_parameter_invalid": "\"%1$s\" non è un parametro valido",
        "generic_permission_selector": "<autorizzazioni insufficienti per l'espansione del selettore>",
        "generic_player_notFound": "Il giocatore non è stato trovato",
        "generic_protocol_mismatch": "La versione del protocollo fornita non corrisponde a quella di Minecraft",
        "generic_radiusError": "Il raggio minimo del selettore deve essere inferiore al raggio massimo",
        "generic_radiusNegative": "Il raggio non può essere negativo",
        "generic_rotationError": "Rotazione non compresa nell'intervallo",
        "generic_running": "Questo comando è già in esecuzione",
        "generic_step_failed": "Impossibile eseguire passaggio comando",
        "generic_syntax": "Errore di sintassi: \"%2$s\": non atteso a \"%1$s>>%2$s<<%3$s\"",
        "generic_noTargetMatch": "Nessuna destinazione corrispondente al selettore",
        "generic_targetNotPlayer": "Il selettore deve essere di tipo giocatore",
        "generic_tooManyNames": "Troppi argomenti di nome di destinazione",
        "generic_tooManyTargets": "Troppe destinazioni corrispondono al selettore",
        "generic_too_many_requests": "Sono stati impartiti troppi comandi, attendi l'esecuzione",
        "generic_unknown": "Comando sconosciuto: %s. Verifica che il comando esista e di avere l'autorizzazione a usarlo.",
        "generic_usage": "Utilizzo: %1$s",
        "generic_usage_noparam": "Utilizzo:",
        "generic_version_mismatch": "Questo comando non dispone della versione richiesta",
        "generic_version_missing": "Per i comandi non impartiti attraverso la chat è necessario specificare la versione del comando",
        "getchunkdata_description": "Ottieni i pixel di un trancio specifico.",
        "getchunkdata_success": "Dati trancio ricevuti",
        "getchunks_description": "Ottieni un elenco dei tranci caricati.",
        "getchunks_success": "Elenco tranci ricevuto",
        "getlocalplayername_description": "Restituisce il nome del giocatore locale.",
        "getspawnpoint_description": "Ottieni la posizione di generazione dei giocatori specificati.",
        "gettopsolidblock_description": "Ottiene la posizione del blocco non di aria sotto alla posizione specificata.",
        "gettopsolidblock_notfound": "Non ci sono blocchi solidi sotto alla posizione specificata",
        "give_block_notFound": "Nessun blocco con nome %1$d",
        "give_description": "Assegna un oggetto a un giocatore.",
        "give_item_invalid": "Sintassi comando non valida: %s con valore dati specificato inesistente",
        "give_item_notFound": "Nessun oggetto con nome %1$d",
        "give_map_invalidData": "Dati mappa forniti non validi",
        "give_map_featureNotFound": "Impossibile creare la mappa esplorazione. Funzionalità non trovata in questa dimensione",
        "give_success": "L'effetto %1$s * %2$d è stato assegnato a %3$s",
        "give_successRecipient": "Hai ricevuto %1$s * %2$d",
        "give_tagError": "L'analisi sintattica dei dati NBT è fallita: %1$s",
        "help_description": "Fornisce aiuto/elenco di comandi.",
        "help_footer": "Suggerimento: usa il tasto <tab> mentre scrivi un comando per completare automaticamente il comando o i suoi parametri",
        "help_header": "--- Pagina di aiuto %1$d di %2$d (/help <pagina>) ---",
        "help_command_aliases": "%s (anche %s):",
        "immutableworld_description": "Imposta lo stato immutabile del mondo.",
        "immutableworld_info": "immutableworld = %s",
        "kick_description": "Espelle un giocatore dal server.",
        "kick_description_edu": "Rimuove un giocatore dalla partita.",
        "kick_not_found": "Impossibile trovare il giocatore %1$s",
        "kick_not_yourself": "Non puoi rimuoverti dalla partita",
        "kick_success": "%1$s è stato espulso dalla partita",
        "kick_success_reason": "%1$s è stato espulso dalla partita: \"%2$s\"",
        "kick_success_reasonedu": "%1$s è stato rimosso dalla partita: \"%2$s\"",
        "kick_no_host": "L'host non può essere espulso dalla partita.",
        "kick_no_teacher": "Gli insegnanti non possono essere rimossi dalla partita.",
        "kill_successful_edu": "Rimosso %1$s",
        "kill_successful": "%1$s è stato ucciso",
        "kill_description_edu": "Rimuove entità (giocatori, creature, ecc.).",
        "kill_description": "Uccide entità (giocatori, creature e altro).",
        "list_description": "Elenca giocatori sul server.",
        "locate_description": "Visualizza le coordinate per la struttura più vicina di un determinato tipo.",
        "locate_fail_noplayer": "Comando utilizzabile solo da un giocatore valido",
        "locate_fail_nostructurefound": "Nessuna struttura valida rilevata in questa dimensione",
        "locate_success": "%1$s meno distante presso il blocco %2$s, (y?), %3$s",
        "togglecontentlog_toggle": "Attiva/disattiva il comando registro dei contenuti",
        "togglecontentlog_enabled": "Registro dei contenuti attivato",
        "togglecontentlog_disabled": "Registro dei contenuti disattivato",
        "me_description": "Visualizza un messaggio personale.",
        "message_display_incoming": "%1$s ti ha sussurrato: %2$s",
        "message_display_outgoing": "Hai sussurrato a %1$s: %2$s",
        "message_sameTarget": "Non puoi inviare un messaggio privato a te stesso!",
        "mixer_description": "Controllo interattività Mixer",
        "mixer_error_unknown": "Si è verificato un errore Mixer sconosciuto.",
        "mixer_error_notoken": "Devi aver eseguito l'accesso a un account Microsoft per abilitare l'interattività Mixer.",
        "mixer_error_notsupported": "Il dispositivo che stai usando non supporta l'interattività Mixer.",
        "mixer_interactive_error": "Si è verificato un errore Mixer: %1$s",
        "mixer_scene_failed": "Non esiste alcuna scena denominata %1$s. Assicurati di aver immesso il nome di scena corretto.",
        "mixer_scene_success": "Scena modificata in: %1$s",
        "mixer_start_success": "Avvio interattività Mixer: %1$s",
        "mixer_start_fail_invalidCode": "Impossibile trovare il progetto con ID \"%1$s\". Assicurati che l'ID o il codice di condivisione sia corretto.",
        "mixer_stop_success": "Interattività Mixer interrotta.",
        "mixer_stop_fail": "Nessuna sessione interattiva da arrestare.",
        "mixer_status_notinitialized": "Interattività non inizializzata.",
        "mixer_status_enabled": "Interattività abilitata.",
        "mixer_status_initializing": "Interattività in fase di inizializzazione.",
        "mixer_status_pending": "Interattività in sospeso.",
        "mixer_status_disabled": "Interattività disabilitata.",
        "mixer_activatedbutton": "%1$s attivati %2$s.",
        "mobevent_description": "Controlla quali eventi creatura possono essere eseguiti.",
        "mobevent_eventsEnabledSetToTrue": "Adesso gli eventi creatura sono attivi. Non verranno eseguiti determinati eventi impostati su \"false\".",
        "mobevent_eventsEnabledSetToFalse": "Adesso gli eventi creatura sono disattivati. Non verranno eseguiti determinati eventi.",
        "mobevent_eventsEnabledIsTrue": "Gli eventi creatura sono attivi. Non verranno eseguiti determinati eventi impostati su \"false\".",
        "mobevent_eventsEnabledIsFalse": "Gli eventi creatura sono disattivati. Non verranno eseguiti determinati eventi.",
        "mobevent_eventSetToTrue": "Evento creatura %s (id: %s) impostato su \"true\".",
        "mobevent_eventSetToTrueButEventsDisabled": "Evento creatura %s (id: %s) impostato su \"true\", ma gli eventi creatura sono disattivati.",
        "mobevent_eventSetToFalse": "Evento creatura %s (id: %s) impostato su \"false\".",
        "mobevent_eventIsTrue": "L'evento creatura %s (id: %s) è impostato su \"true\".",
        "mobevent_eventIsTrueButEventsDisabled": "L'evento creatura %s (id: %s) è impostato su \"true\", ma gli eventi creatura sono disattivati.",
        "mobevent_eventIsFalse": "L'evento creatura %s (id: %s) è impostato su \"false\".",
        "op_description": "Concede a un giocatore lo stato di operatore.",
        "op_failed": "Impossibile rendere operatore (possiede già permessi da operatore o superiori): %s",
        "op_success": "%s è ora un operatore",
        "op_message": "Ora sei un operatore",
        "origin_commandblock": "Blocco di comando",
        "origin_external": "Esterno",
        "origin_devconsole": "DevConsole",
        "origin_script": "Script Engine",
        "origin_server": "Server",
        "origin_teacher": "Insegnante",
        "ops_description": "Ricarica e applica permessi da operatore.",
        "ops_reloaded": "Gli operatori sono stati aggiornati dal file.",
        "ops_set_success": "Impostazione del livello da operatore per il giocatore %s riuscita.",
        "permissions_description": "Ricarica e applica permessi.",
        "permissions_reloaded": "Permessi aggiornati dal file.",
        "permissions_set_failed": "Non è stato possibile impostare il livello %s di permesso per il giocatore %s.",
        "permissions_set_success": "Impostazione del livello %s di permesso per il giocatore %s riuscita.",
        "permissions_save_failed": "Non è stato possibile salvare il livello %s di permesso per il giocatore %s.",
        "permissions_save_success": "Salvataggio del livello %s di permesso per il giocatore %s riuscito.",
        "spawnParticleEmitter_description": "Crea un emettitore di particelle",
        "particle_description": "Crea particelle.",
        "particle_notFound": "Nome dell'effetto sconosciuto (%1$s)",
        "particle_success": "L'effetto %1$s è stato riprodotto %2$d volte",
        "players_list": "%1$d/%2$d giocatori connessi:",
        "players_list_names": "%s",
        "playsound_description": "Riproduce un file audio.",
        "playsound_playerTooFar": "Il giocatore %1$s è troppo lontano per sentire il suono",
        "playsound_success": "Il suono \"%1$s\" è stato riprodotto a %2$s",
        "position_description": "Attiva/disattiva le coordinate per il giocatore.",
        "publish_failed": "Impossibile ospitare la partita locale",
        "publish_started": "La partita locale è ospitata sulla porta %1$s",
        "querytarget_description": "Ottiene informazioni su trasformazione, nome e ID per una o più entità di destinazione.",
        "querytarget_success": "Dati bersaglio: %1$s",
        "reload_description": "Ricarica tutti i file funzione dai pacchetti di comportamenti.",
        "reload_success": "Sono stati ricaricati file funzione esistenti. Riavvia Minecraft per ricaricare NUOVE funzioni.",
        "replaceitem_description": "Sostituisce elementi negli inventari.",
        "replaceitem_failed": "Impossibile sostituire lo slot %s %d con %d * %s",
        "replaceitem_keepFailed": "Esiste già un elemento che occupa %d slot %s.",
        "replaceitem_noContainer": "Il blocco a %s non è un contenitore",
        "replaceitem_badSlotNumber": "Impossibile sostituire lo slot %d: il valore deve essere compreso tra %d e %d.",
        "replaceitem_success": "Lo slot %s %d è stato sostituito con %d * %s",
        "replaceitem_success_entity": "Sostituite %s slot %d di %s con %d *%s",
        "replaceitem_tagError": "L'analisi sintattica dei dati NBT è fallita: %1$s",
        "save_description": "Controlla o verifica come il gioco salva dati su disco.",
        "save_disabled": "Il salvataggio automatico del mondo è stato disattivato",
        "save_enabled": "Il salvataggio automatico del mondo è stato attivato",
        "save_failed": "Il salvataggio è fallito: %1$s",
        "save_start": "Salvataggio...",
        "save_success": "Il mondo è stato salvato",
        "save_all_error": "Si è verificato un errore durante il tentativo di mettere in pausa la memorizzazione del livello.",
        "save_all_success": "Dati salvati. I file sono pronti per essere copiati.",
        "save_off_alreadyOff": "Il salvataggio è già disattivato",
        "save_on_alreadyOn": "Il salvataggio è già attivato.",
        "save_on_notDone": "Un salvataggio precedente non è stato completato.",
        "save_on_description": "Abilita il salvataggio automatico server.",
        "save_on_success": "Le modifiche al livello sono state riavviate.",
        "save_state_description": "Verifica se un precedente salva-tutto è stato completato ed elenca i file interessati.",
        "say_description": "Invia un messaggio in chat ad altri giocatori.",
        "scoreboard_description": "Traccia e mostra i punteggi per vari traguardi.",
        "scoreboard_allMatchesFailed": "Nessuna operazione è riuscita",
        "scoreboard_noMultiWildcard": "È permesso un solo utente jolly",
        "scoreboard_objectiveNotFound": "Non è stato trovato alcun traguardo con il nome \"%1$s\"",
        "scoreboard_objectiveReadOnly": "Il traguardo \"%1$s\" è di sola lettura e non può essere impostato",
        "scoreboard_objectives_add_alreadyExists": "Esiste già un traguardo con il nome \"%1$s\"",
        "scoreboard_objectives_add_displayTooLong": "Il nome da visualizzare \"%1$s\" è troppo lungo per un traguardo (massimo: %2$d caratteri)",
        "scoreboard_objectives_add_success": "Il nuovo traguardo \"%1$s\" è stato aggiunto",
        "scoreboard_objectives_add_tooLong": "Il nome \"%1$s\" è troppo lungo per un traguardo (massimo: %2$d caratteri)",
        "scoreboard_objectives_add_wrongType": "Tipo di criterio del traguardo non valido: \"%1$s\"",
        "scoreboard_objectives_add_needName": "Ogni traguardo ha bisogno di un nome.",
        "scoreboard_objectives_description": "Modifica i traguardi del tabellone.",
        "scoreboard_objectives_list_count": "Visualizzazione di %1$d traguardo/i sul tabellone:",
        "scoreboard_objectives_list_empty": "Non ci sono traguardi sul tabellone",
        "scoreboard_objectives_list_entry": "- %1$s: viene visualizzato come \"%2$s\" ed è del tipo \"%3$s\"",
        "scoreboard_objectives_remove_success": "Il traguardo \"%1$s\" è stato rimosso",
        "scoreboard_objectives_setdisplay_invalidSlot": "Nessuna posizione per visualizzazione chiamata \"%1$s\"",
        "scoreboard_objectives_setdisplay_successCleared": "La posizione per visualizzazione di traguardi \"%1$s\" è stata svuotata",
        "scoreboard_objectives_setdisplay_successSet": "La visualizzazione del traguardo \"%1$s\" è stata impostata nella posizione \"%2$s\"",
        "scoreboard_players_add_success": "Il punteggio di [%2$s] è stato incrementato di %1$d per %3$s (ora è %4$d)",
        "scoreboard_players_add_multiple_success": "Il punteggio di [%2$s] è stato incrementato di %1$d per %3$d entità",
        "scoreboard_players_nameNotFound": "Serve il nome del giocatore.",
        "scoreboard_players_enable_noTrigger": "Il traguardo %1$s non è un trigger",
        "scoreboard_players_enable_success": "Il trigger %1$s è stato abilitato per %2$s",
        "scoreboard_players_list_count": "Visualizzazione di %1$d giocatori segnati sul tabellone:",
        "scoreboard_players_list_empty": "Non ci sono giocatori segnati sul tabellone",
        "scoreboard_players_list_player_count": "Visualizzazione di %1$d trguardo/i segnato/i per %2$s:",
        "scoreboard_players_list_player_empty": "Il giocatore %1$s non ha punteggi registrati",
        "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_players_operation_invalidOperation": "Operazione %1$s non valida",
        "scoreboard_players_operation_notFound": "Nessun punteggio di %1$s è stato trovato per %2$s",
        "scoreboard_players_operation_success": "[%1$s] è stato aggiornato per %2$d entità",
        "scoreboard_players_offlinePlayerName": "Giocatore offline",
        "scoreboard_players_random_invalidRange": "Il valore minimo %1$d non è inferiore al valore massimo %2$d",
        "scoreboard_players_remove_success": "Il punteggio di [%2$s] è stato ridotto di %1$d per %3$s (ora è %4$d)",
        "scoreboard_players_remove_multiple_success": "Il punteggio di [%2$s] è stato ridotto di %1$d per %3$d entità",
        "scoreboard_players_reset_success": "Azzera i punteggi del giocatore %1$s",
        "scoreboard_players_resetscore_success": "Azzera il punteggio %1$s del giocatore %2$s",
        "scoreboard_players_set_success": "Il punteggio di [%1$s] è stato impostato a %3$d per %2$s",
        "scoreboard_players_set_multiple_success": "Il punteggio di [%1$s] è stato impostato a %3$d per %2$d entità",
        "scoreboard_players_set_tagError": "Impossibile analizzare i dati NBT per il seguente motivo: %1$s",
        "scoreboard_players_set_tagMismatch": "I dati NBT non corrispondono per %1$s",
        "scoreboard_players_score_notFound": "Nessun punteggio di %1$s è stato trovato per %2$s",
        "scoreboard_players_test_failed": "Il punteggio %1$d NON è compreso tra %2$d e %3$d",
        "scoreboard_players_test_success": "Il punteggio %1$d è compreso tra %2$d e %3$d",
        "scoreboard_teamNotFound": "Non è stata trovata alcuna squadra con il nome \"%1$s\"",
        "scoreboard_teams_add_alreadyExists": "Esiste già una squadra con il nome \"%1$s\"",
        "scoreboard_teams_add_displayTooLong": "Il nome da visualizzare \"%1$s\" è troppo lungo per una squadra (massimo: %2$d caratteri)",
        "scoreboard_teams_add_success": "La nuova squadra \"%1$s\" è stata aggiunta",
        "scoreboard_teams_add_tooLong": "Il nome \"%1$s\" è troppo lungo per una squadra (massimo: %2$d caratteri)",
        "scoreboard_teams_empty_alreadyEmpty": "La squadra %1$s è già vuota, non è possibile rimuovere dei giocatori inesistenti",
        "scoreboard_teams_empty_success": "Tutti i giocatori (%1$d) sono stati rimossi dalla squadra %2$s",
        "scoreboard_teams_join_failure": "Impossibile aggiungere %1$d giocatore/i alla squadra %2$s: %3$s",
        "scoreboard_teams_join_success": "La squadra %2$s ha accolto %1$d giocatore/i: %3$s",
        "scoreboard_teams_leave_failure": "Impossibile rimuovere %1$d giocatore/i dalla squadra di appartenenza: %2$s",
        "scoreboard_teams_leave_noTeam": "Non sei in una squadra",
        "scoreboard_teams_leave_success": "%1$d giocatore/i rimosso/i dalla squadra di appartenenza: %2$s",
        "scoreboard_teams_list_count": "Visualizzazione di %1$d squadre sul tabellone:",
        "scoreboard_teams_list_empty": "Non ci sono squadre registrate sul tabellone",
        "scoreboard_teams_list_entry": "- %1$s: \"%2$s\" ha %3$s giocatori",
        "scoreboard_teams_list_player_count": "Visualizzazione di %1$d giocatore/i nella squadra %2$s:",
        "scoreboard_teams_list_player_empty": "La squadra %1$s non ha giocatori",
        "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_teams_option_noValue": "I valori validi per l'opzione %1$s sono: %2$s",
        "scoreboard_teams_option_success": "L'opzione %1$s per la squadra %2$s è stata impostata su %3$s",
        "scoreboard_teams_remove_success": "La squadra %1$s è stata rimossa",
        "seed_success": "Seme: %1$s",
        "setblock_description": "Modifica un blocco in un altro.",
        "setblock_failed": "Impossibile piazzare il blocco",
        "setblock_noChange": "Il blocco non può essere piazzato",
        "setblock_notFound": "Nessun blocco con ID/nome %1$s",
        "setblock_outOfWorld": "Impossibile piazzare il blocco al di fuori del mondo",
        "setblock_success": "Il blocco è stato piazzato",
        "setblock_tagError": "L'analisi sintattica dei dati NBT è fallita: %1$s",
        "setidletimeout_success": "Il tempo d'inattività è stato impostato a %1$d minuti",
        "setfixedinvslots_description": "Imposta il numero degli slot d'inventario fissi per il server.",
        "setfixedinvslots_success": "Numero degli slot d'inventario fissi impostato su %1$d",
        "setfixedinvslot_description": "Imposta uno slot fisso su un oggetto specificato.",
        "setfixedinvslot_success": "Slot d'inventario fisso %1$d associato a %2$s",
        "globalpause_description": "Imposta o ottiene lo stato di pausa della partita per tutti i giocatori.",
        "globalpause_success": "Imposta o ottieni stato di pausa",
        "setmaxplayers_description": "Imposta il numero massimo di giocatori per questa sessione di gioco.",
        "setmaxplayers_success": "Imposta il numero massimo di giocatori su %1$d.",
        "setmaxplayers_success_upperbound": "(Collegato alle connessioni massime consentite)",
        "setmaxplayers_success_lowerbound": "(Collegato al numero di giocatori attuale)",
        "setworldspawn_description": "Imposta la generazione del mondo.",
        "setworldspawn_success": "Imposta il punto di generazione del mondo su (%1$d, %2$d, %3$d)",
        "setworldspawn_wrongDimension": "Impossibile impostare la generazione del mondo in questa dimensione",
        "spawnpoint_success_single": "Imposta il punto di generazione di %1$s su (%2$d, %3$d, %4$d)",
        "spawnpoint_description": "Imposta il punto di generazione di un giocatore.",
        "spawnpoint_success_multiple_specific": "Imposta il punto di generazione per %1$s su (%2$d, %3$d, %4$d)",
        "spawnpoint_success_multiple_generic": "Imposta il punto di generazione per %1$s",
        "spawnpoint_wrongDimension": "Impossibile impostare il punto di generazione in questa dimensione",
        "spreadplayers_description": "Teletrasporta entità in posizioni casuali.",
        "spreadplayers_failure_players": "Impossibile distribuire %1$s giocatori attorno a %2$s,%3$s (troppi giocatori per l'area: prova a usare una distribuzione massima di %4$s)",
        "spreadplayers_failure_teams": "Impossibile distribuire %1$s squadre attorno a %2$s,%3$s (troppi giocatori per l'area: prova a usare una distribuzione massima di %4$s)",
        "spreadplayers_info_players": "(La distanza media tra i giocatori è di %1$s blocchi dopo %2$s iterazioni)",
        "spreadplayers_info_teams": "(La distanza media tra le squadre è di %1$s blocchi dopo %2$s iterazioni)",
        "spreadplayers_spreading_players": "Distribuzione di %1$s giocatori in %2$s blocchi attorno a %3$s,%4$s (separati da minimo %5$s blocchi)",
        "spreadplayers_spreading_teams": "Distribuzione di %1$s squadre in %2$s blocchi attorno a %3$s,%4$s (separati da minimo %5$s blocchi)",
        "spreadplayers_success_players": "%1$s giocatori sono stati distribuiti attorno a %2$s,%3$s",
        "spreadplayers_success_teams": "%1$s squadre sono state distribuite attorno a %2$s,%3$s",
        "stats_cleared": "%1$s statistiche sono state rimosse",
        "stats_failed": "Parametri non validi",
        "stats_noCompatibleBlock": "Il blocco in %1$d, %2$d, %3$d non può tenere traccia delle statistiche",
        "stats_success": "%1$s statistiche sono state archiviate in %2$s su %3$s",
        "stop_description": "Arresta il server.",
        "stop_start": "Il server sta per essere arrestato",
        "stopsound_description": "Interrompe un file audio.",
        "stopsound_success": "Suono %s arrestato per %s",
        "stopsound_success_all": "Arrestati tutti i suoni per %s",
        "summon_description": "Convoca un'entità.",
        "summon_failed": "Impossibile evocare l'oggetto",
        "summon_outOfWorld": "Impossibile evocare l'oggetto al di fuori del mondo",
        "summon_success": "L'oggetto è stato evocato con successo",
        "summon_tagError": "L'analisi sintattica dei dati NBT è fallita: %1$s",
        "tag_description": "Gestisci tag salvati come entità.",
        "tag_add_failed": "Il bersaglio ha già quel tag o ne ha troppi",
        "tag_add_success_single": "Aggiunto il tag '%1$s' a %2$s",
        "tag_add_success_multiple": "Aggiunto il tag '%1$s' alle %2$d entità",
        "tag_list_single_empty": "%s non ha tag",
        "tag_list_single_success": "%1$s ha %2$d tag: %3$s",
        "tag_list_multiple_empty": "Non ci sono tag sulle %d entità",
        "tag_list_multiple_success": "Le %1$d entità hanno %2$d tag in totale: %3$s",
        "tag_remove_failed": "Il bersaglio non ha questo tag",
        "tag_remove_success_single": "Rimosso il tag '%1$s' da %2$s",
        "tag_remove_success_multiple": "Rimosso il tag '%1$s' da %2$d entità",
        "tell_description": "Invia un messaggio privato a uno o più giocatori.",
        "tellraw_description": "Invia un messaggio JSON ai giocatori.",
        "tellraw_jsonException": "Json non valido: %1$s",
        "tellraw_jsonStringException": "Stringa di dati json non valida.",
        "tellraw_error_noData": "Nessun dato fornito.",
        "tellraw_error_notArray": "Gli oggetti rawtext devono contenere un array. Per esempio: \"rawtext\":[{..}]",
        "tellraw_error_textNotString": "Il campo \"text\" nel rawtext deve contenere una stringa. Per esempio: \"rawtext\":[{\"text\": \"text to display\"}]",
        "tellraw_error_translateNotString": "Il campo \"translate\" nel rawtext deve contenere una lingua. Per esempio: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
        "tellraw_error_withNotArrayOrRawText": "Il campo \"with\" in rawtext deve contenere un array o un altro oggetto rawtext. Esempio 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Esempio 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
        "tellraw_error_itemIsNotObject": "Il valore \"JSON\" nell'array del rawtext non era un oggetto. Per esempio: \"rawtext\": [{ \"text\" : \"my text\" }]",
        "educlientinfo_description": "Ottieni ID utente e stato ospite. Funzione per CM.",
        "testfor_description": "Conta le entità (giocatori, creature, elementi, ecc.) che corrispondono a determinate condizioni.",
        "testfor_failure": "%1$s non corrisponde alla struttura dati richiesta",
        "testfor_success": "%1$s trovato",
        "testfor_tagError": "L'analisi sintattica dei dati NBT è fallita: %1$s",
        "testforblock_description": "Verifica se un determinato blocco si trova in una posizione specifica.",
        "testforblock_failed_data": "Il blocco in %1$d,%2$d,%3$d non aveva lo stato blocco previsto.",
        "testforblock_failed_nbt": "Il blocco in %1$d,%2$d,%3$d non aveva le chiavi NBT richieste.",
        "testforblock_failed_tile": "Il blocco in %1$d,%2$d,%3$d è %4$s (previsto: %5$s).",
        "testforblock_failed_tileEntity": "Il blocco in %1$d,%2$d,%3$d non è un'entità a blocco e non può supportare il riconoscimento dei tag.",
        "testforblock_outOfWorld": "Impossibile controllare blocchi al di fuori dal mondo",
        "testforblock_success": "Blocco in %1$d,%2$d,%3$d trovato.",
        "testforblocks_description": "Verifica la corrispondenza dei blocchi in due regioni.",
        "tickingarea_description": "Aggiungi, rimuovi o elenca aree spuntabili.",
        "tickingarea_inuse": "%1$d aree spuntabili su %2$d in uso.",
        "tickingarea_noneExist_currentDimension": "Non esistono aree spuntabili nella dimensione attuale.",
        "tickingarea_add_bounds_success": "Aggiunta area spuntabile da %1$d a %2$d.",
        "tickingarea_add_circle_success": "Aggiunta area spuntabile centrata su %1$d con un raggio di %2$d blocchi.",
        "tickingarea_add_failure": "È stato già raggiunto il numero massimo di aree spuntabili (%1$d). Non è possibile aggiungerne altre.",
        "tickingarea_add_conflictingname": "Esiste già un'area spuntabile col nome %1$s.",
        "tickingarea_add_chunkfailure": "L'area spuntabile contiene più di %1$d blocchi. È troppo grande e non può essere creata.",
        "tickingarea_add_radiusfailure": "Il raggio non può essere superiore a %1$d. L'area spuntabile è troppo ampia e non può essere creata.",
        "tickingarea_remove_success": "Aree spuntabili rimosse",
        "tickingarea_remove_failure": "Non esistono aree spuntabili contenenti la posizione blocco %1$d nella dimensione attuale.",
        "tickingarea_remove_byname_failure": "Non esistono aree spuntabili col nome %1$s nella dimensione attuale.",
        "tickingarea_remove_all_success": "Aree spuntabili rimosse",
        "tickingarea_remove_all_failure": "Non esistono aree spuntabili nella dimensione attuale.",
        "tickingarea_list_chunks": "tranci",
        "tickingarea_list_circle_radius": "Raggio",
        "tickingarea_list_success_currentDimension": "Lista di tutte le aree spuntabili nella dimensione attuale",
        "tickingarea_list_success_allDimensions": "Lista di tutte le aree spuntabili in tutte le dimensioni",
        "tickingarea_list_failure_allDimensions": "Non esistono aree spuntabili in nessuna dimensione.",
        "tickingarea_list_to": "a",
        "tickingarea_list_type_circle": "Cerchio",
        "time_added": "Il tempo è stato incrementato di %1$d tick",
        "time_description": "Modifica o richiede il tempo di gioco del mondo.",
        "time_disabled": "Sempre giorno è attivato in questo livello.",
        "time_query_day": "Giorno: %d",
        "time_query_daytime": "Ora del giorno: %d",
        "time_query_gametime": "Tempo di gioco: %d",
        "time_set": "Imposta l'orario su %1$d",
        "time_stop": "Tempo: %1$s",
        "title_description": "Controlla i titoli delle schermate.",
        "title_success": "Il comando è stato eseguito con successo",
        "titleraw_description": "Controlla i titoli delle schermate tramite messaggi JSON.",
        "toggledownfall_description": "Attiva/Disattiva il meteo.",
        "tp_description": "Teletrasporta entità (giocatori, creature e altro).",
        "tp_notSameDimension": "Impossibile eseguire il teletrasporto, poiché i giocatori non si trovano nella stessa dimensione",
        "tp_outOfWorld": "Impossibile teletrasportare entità al di fuori del mondo",
        "tp_permission": "Non hai il permesso di usare questo comando slash.",
        "tp_safeTeleportFail": "Impossibile teletrasportare %1$s a %2$s perché l'area non era libera dai blocchi.",
        "tp_far": "Impossibile teletrasportare %1$s all'area non caricata %2$s",
        "tp_success": "%1$s è stato teletrasportato presso: %2$s",
        "tp_successVictim": "Sei stato teletrasportato presso: %1$s",
        "tp_success_coordinates": "%1$s è stato teletrasportato presso: %2$s, %3$s, %4$s",
        "transferserver_description": "Trasferisce un giocatore a un altro server.",
        "transferserver_successful": "Giocatore trasferito",
        "transferserver_invalid_port": "Porta non valida (0-65535)",
        "trigger_description": "Imposta un trigger da attivare.",
        "trigger_disabled": "Il trigger %1$s non è abilitato",
        "trigger_invalidMode": "Modalità di trigger %1$s non valida",
        "trigger_invalidObjective": "Nome del trigger %1$s non valido",
        "trigger_invalidPlayer": "Solo i giocatori possono usare il comando /trigger",
        "trigger_success": "Il trigger %1$s è stato cambiato con %2$s %3$s",
        "unban_failed": "Impossibile riammettere il giocatore %1$s",
        "unban_success": "Il giocatore %1$s è stato riammesso",
        "unbanip_invalid": "Hai inserito un indirizzo IP non valido",
        "unbanip_success": "L'indirizzo IP %1$s è stato riabilitato",
        "validategamelighting_description": "Convalida l'illuminazione del gioco per un'area specificata",
        "validategamelighting_checkRegionTooBig": "L'area per cui controllare l'illuminazione è troppo grande! (%1$d > %2$d)",
        "validategamelighting_outOfWorld": "Impossibile controllare l'illuminazione al di fuori del mondo",
        "weather_clear": "Il meteo è stato cambiato in sereno",
        "weather_description": "Imposta il meteo.",
        "weather_disabled": "Meteo variabile non è attivato in questo livello.",
        "weather_query": "Il meteo è: %s",
        "weather_query_clear": "cielo sereno",
        "weather_query_rain": "pioggia",
        "weather_query_thunder": "tuoni",
        "weather_rain": "Il meteo è stato cambiato in piovoso",
        "weather_thunder": "Il meteo è stato cambiato in pioggia e tuoni",
        "whitelist_add_failed": "Impossibile aggiungere %1$s alla lista bianca",
        "whitelist_add_success": "%1$s è stato aggiunto alla lista bianca",
        "whitelist_description": "Gestisce la lista bianca del server.",
        "whitelist_disabled": "La lista bianca è stata disattivata",
        "whitelist_enabled": "La lista bianca è stata attivata",
        "whitelist_list": "%1$d giocatori (su %2$d visti) sulla lista bianca:",
        "whitelist_reloaded": "La lista bianca è stata aggiornata dal file.",
        "whitelist_remove_failed": "Impossibile rimuovere %1$s dalla lista bianca",
        "whitelist_remove_success": "%1$s è stato rimosso dalla lista bianca",
        "world_age_description": "Modifica o richiede l'età del mondo (tempo trascorso dalla creazione).",
        "world_age_added": "Aggiunto all'età del mondo: %1$d",
        "world_age_query": "L'età del mondo è %d",
        "world_age_set": "Imposta l'età del mondo a %1$d",
        "worldborder_center_success": "Il centro del confine del mondo è stato impostato a %1$s,%2$s",
        "worldborder_damage_amount_success": "La quantità di danno per blocco al confine del mondo è stata impostata a %1$s (precedentemente a %2$s per blocco)",
        "worldborder_damage_buffer_success": "La zona sicura al confine del mondo è stata impostata a %1$s blocchi (precedentemente %2$s blocchi)",
        "worldborder_get_success": "Attualmente il confine del mondo è largo %1$s blocchi",
        "worldborder_set_success": "Il confine del mondo è stato impostato a una larghezza di %1$s blocchi (precedentemente di %2$s blocchi)",
        "worldborder_setSlowly_grow_success": "Il confine del mondo si sta espandendo per diventare largo %1$s blocchi (partendo da %2$s blocchi) in %3$s secondi",
        "worldborder_setSlowly_shrink_success": "Il confine del mondo si sta stringendo per diventare largo %1$s blocchi (partendo da %2$s blocchi) in %3$s secondi",
        "worldborder_warning_distance_success": "L'avvertimento del confine del mondo è stato impostato a %1$s blocchi di distanza (precedentemente a %2$s blocchi)",
        "worldborder_warning_time_success": "L'avvertimento del confine del mondo è stato impostato a %1$s secondi (precedentemente a %2$s secondi)",
        "worldbuilder_description": "Attiva/disattiva stato di costruttore del mondo per il visitatore.",
        "worldbuilder_success": "Stato costruttore del mondo aggiornato a %1$s",
        "wsserver_description": "Tenta la connessione al server WebSocket all'URL indicato.",
        "wsserver_invalid_url": "L'URL del server indicato non è valido",
        "wsserver_request_existing": "È in esecuzione un'altra richiesta di connessione",
        "wsserver_request_failed": "Impossibile connettersi al server: %1$s",
        "wsserver_success": "Connessione stabilita con il server: %1$s",
        "xp_description": "Aggiunge o rimuove esperienza a un giocatore.",
        "xp_failure_widthdrawXp": "Impossibile dare a un giocatore punti esperienza negativi",
        "xp_success": "%1$d punti esperienza sono stati assegnati a %2$s",
        "xp_success_levels": "%1$d livelli sono stati assegnati a %2$s",
        "xp_success_negative_levels": "%1$d livelli sono stati rimossi da %2$s"
    },
    item:{
        "air": [
            "Aria"
        ],
        "apple": [
            "Mela"
        ],
        "golden_apple": [
            "Mela d'oro"
        ],
        "appleenchanted": [
            "Mela incantata"
        ],
        "armor_stand": [
            "Supporto per armatura"
        ],
        "arrow": [
            "Freccia"
        ],
        "tipped_arrow": [
            "Freccia modificata"
        ],
        "banner": [
            "Stendardo nero",
            "Stendardo nero",
            "Stendardo rosso",
            "Stendardo verde",
            "Stendardo marrone",
            "Stendardo blu",
            "Stendardo viola",
            "Stendardo ciano",
            "Stendardo grigio chiaro",
            "Stendardo grigio",
            "Stendardo rosa",
            "Stendardo lime",
            "Stendardo giallo",
            "Stendardo azzurro",
            "Stendardo magenta",
            "Stendardo arancione",
            "Stendardo bianco"
        ],
        "bed": [
            "Letto",
            "Letto bianco",
            "Letto arancione",
            "Letto magenta",
            "Letto azzurro",
            "Letto giallo",
            "Letto lime",
            "Letto rosa",
            "Letto grigio",
            "Letto grigio chiaro",
            "Letto ciano",
            "Letto viola",
            "Letto blu",
            "Letto marrone",
            "Letto verde",
            "Letto rosso",
            "Letto nero"
        ],
        "bell": [
            "Campana"
        ],
        "steak": [
            "Bistecca"
        ],
        "beef": [
            "Manzo crudo"
        ],
        "beetroot": [
            "Barbabietola"
        ],
        "beetroot_soup": [
            "Minestra di barbabietole"
        ],
        "blaze_powder": [
            "Polvere di Blaze"
        ],
        "blaze_rod": [
            "Verga di Blaze"
        ],
        "boat": [
            "Barca in quercia",
            "Barca in quercia",
            "Barca in abete",
            "Barca in betulla",
            "Barca della giungla",
            "Barca in acacia",
            "Barca in rovere"
        ],
        "bone": [
            "Osso"
        ],
        "book": [
            "Libro"
        ],
        "chainmail_boots": [
            "Stivali di maglia metallica"
        ],
        "leather_boots": [
            "Stivali di cuoio"
        ],
        "diamond_boots": [
            "Stivali di diamante"
        ],
        "golden_boots": [
            "Stivali d'oro"
        ],
        "iron_boots": [
            "Stivali di ferro"
        ],
        "bow": [
            "Arco"
        ],
        "bowl": [
            "Ciotola"
        ],
        "bread": [
            "Pane"
        ],
        "brewing_stand": [
            "Alambicco"
        ],
        "brick": [
            "Mattone"
        ],
        "bucket": [
            "Secchio"
        ],
        "bucketLava": [
            "Secchio di lava"
        ],
        "bucketWater": [
            "Secchio d'acqua"
        ],
        "bucketFish": [
            "Secchio di merluzzi"
        ],
        "bucketSalmon": [
            "Secchio di salmoni"
        ],
        "bucketTropical": [
            "Secchio di pesci tropicali"
        ],
        "bucketPuffer": [
            "Secchio di pesci palla"
        ],
        "bucketCustomFish": [
            "Secchio di"
        ],
        "tropicalColorWhite": [
            "Bianco"
        ],
        "tropicalColorOrange": [
            "Arancione"
        ],
        "tropicalColorMagenta": [
            "Magenta"
        ],
        "tropicalColorSky": [
            "Celeste"
        ],
        "tropicalColorYellow": [
            "Giallo"
        ],
        "tropicalColorLime": [
            "Lime"
        ],
        "tropicalColorRose": [
            "Rosa"
        ],
        "tropicalColorGray": [
            "Grigio"
        ],
        "tropicalColorSilver": [
            "Argento"
        ],
        "tropicalColorTeal": [
            "Turchese"
        ],
        "tropicalColorPlum": [
            "Prugna"
        ],
        "tropicalColorBlue": [
            "Blu"
        ],
        "tropicalColorBrown": [
            "Marrone"
        ],
        "tropicalColorGreen": [
            "Verde"
        ],
        "tropicalColorRed": [
            "Rosso"
        ],
        "tropicalBodyKobSingle": [
            "Ombrina %1$s"
        ],
        "tropicalBodySunstreakSingle": [
            "Raggio di sole %1$s"
        ],
        "tropicalBodySnooperSingle": [
            "Ficcanaso %1$s"
        ],
        "tropicalBodyDasherSingle": [
            "Scheggia %1$s"
        ],
        "tropicalBodyBrinelySingle": [
            "Pelago %1$s"
        ],
        "tropicalBodySpottySingle": [
            "Macchia %1$s"
        ],
        "tropicalBodyFlopperSingle": [
            "Pinna %1$s"
        ],
        "tropicalBodyStripeySingle": [
            "Striscia %1$s"
        ],
        "tropicalBodyGlitterSingle": [
            "Glitter %1$s"
        ],
        "tropicalBodyBlockfishSingle": [
            "Bloccafisso %1$s"
        ],
        "tropicalBodyBettySingle": [
            "Betta %1$s"
        ],
        "tropicalBodyClayfishSingle": [
            "Pesce argilla %1$s"
        ],
        "tropicalBodyKobMulti": [
            "Ombrina %1$s-%2$s"
        ],
        "tropicalBodySunstreakMulti": [
            "Raggio di sole %1$s-%2$s"
        ],
        "tropicalBodySnooperMulti": [
            "Ficcanaso %1$s-%2$s"
        ],
        "tropicalBodyDasherMulti": [
            "Scheggia %1$s-%2$s"
        ],
        "tropicalBodyBrinelyMulti": [
            "Pelago %1$s-%2$s"
        ],
        "tropicalBodySpottyMulti": [
            "Macchia %1$s-%2$s"
        ],
        "tropicalBodyFlopperMulti": [
            "Pinna %1$s-%2$s"
        ],
        "tropicalBodyStripeyMulti": [
            "Striscia %1$s-%2$s"
        ],
        "tropicalBodyGlitterMulti": [
            "Glitter %1$s-%2$s"
        ],
        "tropicalBodyBlockfishMulti": [
            "Bloccafisso %1$s-%2$s"
        ],
        "tropicalBodyBettyMulti": [
            "Betta %1$s-%2$s"
        ],
        "tropicalBodyClayfishMulti": [
            "Pesce argilla %1$s-%2$s"
        ],
        "tropicalSchoolAnemone": [
            "Anemone"
        ],
        "tropicalSchoolBlackTang": [
            "Pesce chirurgo nero"
        ],
        "tropicalSchoolBlueDory": [
            "Pesce San Pietro blu"
        ],
        "tropicalSchoolButterflyFish": [
            "Pesce farfalla"
        ],
        "tropicalSchoolCichlid": [
            "Ciclide"
        ],
        "tropicalSchoolClownfish": [
            "Pesce pagliaccio"
        ],
        "tropicalSchoolCottonCandyBetta": [
            "Pesce combattente rosa"
        ],
        "tropicalSchoolDottyback": [
            "Pseudocromide"
        ],
        "tropicalSchoolEmperorRedSnapper": [
            "Dentice imperatore"
        ],
        "tropicalSchoolGoatfish": [
            "Triglia"
        ],
        "tropicalSchoolMoorishIdol": [
            "Idolo moresco"
        ],
        "tropicalSchoolOrnateButterfly": [
            "Pesce farfalla ornato"
        ],
        "tropicalSchoolParrotfish": [
            "Pesce pappagallo"
        ],
        "tropicalSchoolQueenAngelFish": [
            "Pesce angelo regina"
        ],
        "tropicalSchoolRedCichlid": [
            "Ciclide rosso"
        ],
        "tropicalSchoolRedLippedBlenny": [
            "Bavosa rossa"
        ],
        "tropicalSchoolRedSnapper": [
            "Dentice"
        ],
        "tropicalSchoolThreadfin": [
            "Pesce capitano"
        ],
        "tropicalSchoolTomatoClown": [
            "Pesce pagliaccio pomodoro"
        ],
        "tropicalSchoolTriggerfish": [
            "Pesce balestra"
        ],
        "tropicalSchoolYellowTang": [
            "Pesce chirurgo giallo"
        ],
        "tropicalSchoolYellowtailParrot": [
            "Pesce pappagallo pinna gialla"
        ],
        "cake": [
            "Torta"
        ],
        "camera": [
            "Fotocamera"
        ],
        "golden_carrot": [
            "Carota d'oro"
        ],
        "carrotOnAStick": [
            "Bastone e carota"
        ],
        "warped_fungus_on_a_stick": [
            "Fungo deformato su un bastone"
        ],
        "carrot": [
            "Carota"
        ],
        "cauldron": [
            "Calderone"
        ],
        "coal": [
            "Carbone",
            null,
            "Carbonella"
        ],
        "chainmail_chestplate": [
            "Corsaletto di maglia metallica"
        ],
        "leather_chestplate": [
            "Giubba di cuoio"
        ],
        "diamond_chestplate": [
            "Corsaletto di diamante"
        ],
        "golden_chestplate": [
            "Corsaletto d'oro"
        ],
        "iron_chestplate": [
            "Corsaletto di ferro"
        ],
        "chorus_fruit": [
            "Frutto Chorus"
        ],
        "chorus_fruit_popped": [
            "Frutto Chorus esploso"
        ],
        "cooked_beef": [
            "Manzo cotto"
        ],
        "cooked_chicken": [
            "Pollo cotto"
        ],
        "cooked_porkchop": [
            "Costoletta di maiale cotta"
        ],
        "chicken": [
            "Pollo crudo"
        ],
        "clay_ball": [
            "Argilla"
        ],
        "clock": [
            "Orologio"
        ],
        "comparator": [
            "Comparatore di pietrarossa"
        ],
        "compass": [
            "Bussola"
        ],
        "lodestonecompass": [
            "Bussola magnetica"
        ],
        "cookie": [
            "Biscotto"
        ],
        "crossbow": [
            "Balestra"
        ],
        "diamond": [
            "Diamante"
        ],
        "repeater": [
            "Ripetitore di pietrarossa"
        ],
        "acacia_door": [
            "Porta di acacia"
        ],
        "birch_door": [
            "Porta di betulla"
        ],
        "dark_oak_door": [
            "Porta di rovere"
        ],
        "iron_door": [
            "Porta di ferro"
        ],
        "jungle_door": [
            "Porta della giungla"
        ],
        "wooden_door": [
            "Porta di quercia"
        ],
        "spruce_door": [
            "Porta di abete"
        ],
        "crimson_door": [
            "Porta cremisi"
        ],
        "warped_door": [
            "Porta deformata"
        ],
        "dragon_breath": [
            "Alito di drago"
        ],
        "dye": [
            "Sacca d'inchiostro",
            "Sacca d'inchiostro",
            "Tintura rossa",
            "Tintura verde",
            "Fave di cacao",
            "Lapislazzulo",
            "Tintura viola",
            "Tintura ciano",
            "Tintura grigio chiaro",
            "Tintura grigia",
            "Tintura rosa",
            "Tintura lime",
            "Tintura gialla",
            "Tintura azzurra",
            "Tintura magenta",
            "Tintura arancione",
            "Farina d'ossa",
            "Tintura nera",
            "Tintura marrone",
            "Tintura blu",
            "Tintura bianca"
        ],
        "egg": [
            "Uovo"
        ],
        "elytra": [
            "Elitre"
        ],
        "emerald": [
            "Smeraldo"
        ],
        "emptyMap": [
            "Mappa vuota"
        ],
        "emptyLocatorMap": [
            "Mappa esploratore vuota"
        ],
        "emptyPotion": [
            "Ampolla d'acqua"
        ],
        "enchanted_book": [
            "Libro incantato"
        ],
        "end_crystal": [
            "Cristallo dell'End"
        ],
        "end_rod": [
            "Verga dell'End"
        ],
        "ender_eye": [
            "Occhio di Ender"
        ],
        "ender_pearl": [
            "Perla di Ender"
        ],
        "experience_bottle": [
            "Ampolla magica"
        ],
        "feather": [
            "Piuma"
        ],
        "fermented_spider_eye": [
            "Occhio di ragno fermentato"
        ],
        "fireball": [
            "Scarica di fuoco"
        ],
        "fireworks": [
            "Razzo d'artificio"
        ],
        "fireworksCharge": [
            "Stella d'artificio"
        ],
        "clownfish": [
            "Pesce tropicale"
        ],
        "cooked_fish": [
            "Merluzzo cotto"
        ],
        "fish": [
            "Merluzzo crudo"
        ],
        "pufferfish": [
            "Pesce palla"
        ],
        "cooked_salmon": [
            "Salmone cotto"
        ],
        "salmon": [
            "Salmone crudo"
        ],
        "fishing_rod": [
            "Canna da pesca"
        ],
        "flint": [
            "Pietra focaia"
        ],
        "flint_and_steel": [
            "Pietra focaia e acciarino"
        ],
        "flower_pot": [
            "Vaso di fiori"
        ],
        "frame": [
            "Espositore"
        ],
        "ghast_tear": [
            "Lacrima di Ghast"
        ],
        "glass_bottle": [
            "Ampolla di vetro"
        ],
        "gold_nugget": [
            "Pepita d'oro"
        ],
        "iron_nugget": [
            "Pepita di ferro"
        ],
        "diamond_axe": [
            "Ascia di diamante"
        ],
        "golden_axe": [
            "Ascia d'oro"
        ],
        "iron_axe": [
            "Ascia di ferro"
        ],
        "stone_axe": [
            "Ascia di pietra"
        ],
        "wooden_axe": [
            "Ascia di legno"
        ],
        "chainmail_helmet": [
            "Elmo di maglia metallica"
        ],
        "leather_helmet": [
            "Berretto di cuoio"
        ],
        "diamond_helmet": [
            "Elmo di diamante"
        ],
        "golden_helmet": [
            "Elmo d'oro"
        ],
        "iron_helmet": [
            "Elmo di ferro"
        ],
        "diamond_hoe": [
            "Zappa di diamante"
        ],
        "golden_hoe": [
            "Zappa d'oro"
        ],
        "iron_hoe": [
            "Zappa di ferro"
        ],
        "stone_hoe": [
            "Zappa di pietra"
        ],
        "wooden_hoe": [
            "Zappa di legno"
        ],
        "honey_bottle": [
            "Ampolla di miele"
        ],
        "honeycomb": [
            "Favo"
        ],
        "horsearmordiamond": [
            "Bardatura di diamante"
        ],
        "horsearmorgold": [
            "Bardatura d'oro"
        ],
        "horsearmoriron": [
            "Bardatura di ferro"
        ],
        "horsearmorleather": [
            "Bardatura di cuoio"
        ],
        "gold_ingot": [
            "Lingotto d'oro"
        ],
        "iron_ingot": [
            "Lingotto di ferro"
        ],
        "netherite_ingot": [
            "Lingotto di Netherite"
        ],
        "netherite_scrap": [
            "Frammento di Netherite"
        ],
        "netherite_sword": [
            "Spada di Netherite"
        ],
        "netherite_pickaxe": [
            "Piccozza di Netherite"
        ],
        "netherite_axe": [
            "Ascia di Netherite"
        ],
        "netherite_shovel": [
            "Pala di Netherite"
        ],
        "netherite_hoe": [
            "Zappa di Netherite"
        ],
        "netherite_boots": [
            "Stivali di Netherite"
        ],
        "netherite_leggings": [
            "Gambali di Netherite"
        ],
        "netherite_chestplate": [
            "Corsaletto di Netherite"
        ],
        "netherite_helmet": [
            "Elmo di Netherite"
        ],
        "lead": [
            "Guinzaglio"
        ],
        "leather": [
            "Cuoio"
        ],
        "leaves": [
            "Foglie",
            "Foglie di quercia",
            "Foglie d'abete",
            "Foglie di betulla",
            "Foglie della giungla",
            "Foglie di acacia",
            "Foglie di rovere"
        ],
        "chainmail_leggings": [
            "Gambali di maglia metallica"
        ],
        "leather_leggings": [
            "Gambiera di cuoio"
        ],
        "diamond_leggings": [
            "Gambali di diamante"
        ],
        "golden_leggings": [
            "Gambali d'oro"
        ],
        "iron_leggings": [
            "Gambali di ferro"
        ],
        "nautilus_shell": [
            "Conchiglia di nautilo"
        ],
        "heart_of_the_sea": [
            "Cuore del mare"
        ],
        "magma_cream": [
            "Crema di magma"
        ],
        "map": [
            "Mappa"
        ],
        "melon": [
            "Cocomero"
        ],
        "milk": [
            "Secchio di latte"
        ],
        "minecart": [
            "Vagonetto"
        ],
        "chest_minecart": [
            "Vagonetto con cassa"
        ],
        "command_block_minecart": [
            "Vagonetto con blocco di comando"
        ],
        "minecartFurnace": [
            "Vagonetto propulsore"
        ],
        "hopper_minecart": [
            "Vagonetto con tramoggia"
        ],
        "tnt_minecart": [
            "Vagonetto con tritolo"
        ],
        "trident": [
            "Tridente"
        ],
        "mushroom_stew": [
            "Zuppa di funghi"
        ],
        "muttoncooked": [
            "Carne ovina cotta"
        ],
        "muttonraw": [
            "Carne ovina cruda"
        ],
        "name_tag": [
            "Targhetta nome"
        ],
        "netherbrick": [
            "Mattone del Nether"
        ],
        "quartz": [
            "Quarzo del Nether"
        ],
        "nether_wart": [
            "Verruca del Nether"
        ],
        "netherStar": [
            "Stella del Nether"
        ],
        "painting": [
            "Dipinto"
        ],
        "paper": [
            "Carta"
        ],
        "diamond_pickaxe": [
            "Piccozza di diamante"
        ],
        "golden_pickaxe": [
            "Piccozza d'oro"
        ],
        "iron_pickaxe": [
            "Piccozza di ferro"
        ],
        "stone_pickaxe": [
            "Piccozza di pietra"
        ],
        "wooden_pickaxe": [
            "Piccozza di legno"
        ],
        "porkchop_cooked": [
            "Costoletta di maiale cotta"
        ],
        "porkchop": [
            "Costoletta di maiale cruda"
        ],
        "portfolio": [
            "Portfolio"
        ],
        "potato": [
            "Patata"
        ],
        "baked_potato": [
            "Patata arrostita"
        ],
        "poisonous_potato": [
            "Patata velenosa"
        ],
        "potion": [
            "Pozione"
        ],
        "prismarine_crystals": [
            "Cristalli di prismarino"
        ],
        "prismarine_shard": [
            "Scheggia di prismarino"
        ],
        "pumpkin_pie": [
            "Torta di zucca"
        ],
        "cooked_rabbit": [
            "Coniglio cotto"
        ],
        "rabbit_foot": [
            "Zampa di coniglio"
        ],
        "rabbit_hide": [
            "Pelle di coniglio"
        ],
        "rabbit": [
            "Coniglio crudo"
        ],
        "rabbit_stew": [
            "Stufato di coniglio"
        ],
        "record": [
            "Disco musicale"
        ],
        "redstone": [
            "Pietrarossa"
        ],
        "reeds": [
            "Canne da zucchero"
        ],
        "kelp": [
            "Alga"
        ],
        "dried_kelp": [
            "Alga essiccata"
        ],
        "rotten_flesh": [
            "Carne marcia"
        ],
        "ruby": [
            "Rubino"
        ],
        "saddle": [
            "Sella"
        ],
        "wheat_seeds": [
            "Semi di grano"
        ],
        "beetroot_seeds": [
            "Semi di barbabietola"
        ],
        "melon_seeds": [
            "Semi di cocomero"
        ],
        "pumpkin_seeds": [
            "Semi di zucca"
        ],
        "shears": [
            "Cesoie"
        ],
        "diamond_shovel": [
            "Pala di diamante"
        ],
        "golden_shovel": [
            "Pala d'oro"
        ],
        "iron_shovel": [
            "Pala di ferro"
        ],
        "stone_shovel": [
            "Pala di pietra"
        ],
        "wooden_shovel": [
            "Pala di legno"
        ],
        "sign": [
            "Insegna di quercia"
        ],
        "spruce_sign": [
            "Insegna di abete"
        ],
        "birch_sign": [
            "Insegna di betulla"
        ],
        "jungle_sign": [
            "Insegna giungla"
        ],
        "acacia_sign": [
            "Insegna di acacia"
        ],
        "darkoak_sign": [
            "Insegna di quercia scura"
        ],
        "crimson_sign": [
            "Insegna cremisi"
        ],
        "warped_sign": [
            "Insegna deformata"
        ],
        "skull": [
            "Teschio di scheletro",
            "Teschio di scheletro",
            "Teschio di scheletro Wither",
            "Testa di zombi",
            "Testa",
            "Testa di Creeper",
            "Testa di drago"
        ],
        "slime_ball": [
            "Palla di gelatina"
        ],
        "snowball": [
            "Palla di neve"
        ],
        "speckled_melon": [
            "Cocomero scintillante"
        ],
        "spider_eye": [
            "Occhio di ragno"
        ],
        "stick": [
            "Bastone"
        ],
        "string": [
            "Corda"
        ],
        "sugar": [
            "Zucchero"
        ],
        "gunpowder": [
            "Polvere da sparo"
        ],
        "diamond_sword": [
            "Spada di diamante"
        ],
        "golden_sword": [
            "Spada d'oro"
        ],
        "iron_sword": [
            "Spada di ferro"
        ],
        "stone_sword": [
            "Spada di pietra"
        ],
        "wooden_sword": [
            "Spada di legno"
        ],
        "wheat": [
            "Grano"
        ],
        "writable_book": [
            "Libro e penna d'oca"
        ],
        "written_book": [
            "Libro scritto"
        ],
        "glowstone_dust": [
            "Polvere di luminite"
        ],
        "shield": [
            "Scudo"
        ],
        "shulker_shell": [
            "Guscio di Shulker"
        ],
        "totem": [
            "Totem della non-morte"
        ],
        "turtle_helmet": [
            "Guscio di tartaruga"
        ],
        "turtle_shell_piece": [
            "Squama"
        ],
        "phantom_membrane": [
            "Membrana fantasma"
        ],
        "sweet_berries": [
            "Bacche dolci"
        ],
        "suspicious_stew": [
            "Zuppa sospetta"
        ],
        "banner_pattern": [
            "Motivo dello stendardo"
        ],
        "acaciaFence": [
            "Recinzione di acacia"
        ],
        "acacia_fence_gate": [
            "Cancello recinzione di acacia"
        ],
        "activator_rail": [
            "Binario attivatore"
        ],
        "allow": [
            "Consenti"
        ],
        "deny": [
            "Impedisci"
        ],
        "border_block": [
            "Confine"
        ],
        "anvil": [
            "Incudine",
            "Incudine",
            null,
            null,
            null,
            "Incudine leggermente danneggiata",
            null,
            null,
            null,
            "Incudine molto danneggiata"
        ],
        "barrier": [
            "Barriera"
        ],
        "beacon": [
            "Faro"
        ],
        "beehive": [
            "Alveare"
        ],
        "bee_nest": [
            "Nido di api"
        ],
        "target": [
            "Bersaglio"
        ],
        "bedrock": [
            "Substrato roccioso"
        ],
        "conduit": [
            "Condotto"
        ],
        "invisibleBedrock": [
            "Base invisibile"
        ],
        "birchFence": [
            "Recinzione di betulla"
        ],
        "birch_fence_gate": [
            "Cancello recinzione di betulla"
        ],
        "blast_furnace": [
            "Altoforno"
        ],
        "bone_block": [
            "Blocco di osso"
        ],
        "coal_block": [
            "Blocco di carbone"
        ],
        "diamond_block": [
            "Blocco di diamante"
        ],
        "emerald_block": [
            "Blocco di smeraldo"
        ],
        "gold_block": [
            "Blocco d'oro"
        ],
        "iron_block": [
            "Blocco di ferro"
        ],
        "lapis_block": [
            "Blocco di lapislazzulo"
        ],
        "redstone_block": [
            "Blocco di pietrarossa"
        ],
        "bookshelf": [
            "Scaffale"
        ],
        "brick_block": [
            "Blocco di mattone"
        ],
        "brown_mushroom": [
            "Fungo marrone"
        ],
        "wooden_button": [
            "Pulsante di quercia"
        ],
        "acacia_button": [
            "Pulsante di acacia"
        ],
        "birch_button": [
            "Pulsante di betulla"
        ],
        "dark_oak_button": [
            "Pulsante di quercia scuro"
        ],
        "jungle_button": [
            "Pulsante della giungla"
        ],
        "spruce_button": [
            "Pulsante di abete"
        ],
        "stone_button": [
            "Pulsante di pietra"
        ],
        "cactus": [
            "Cactus"
        ],
        "dried_kelp_block": [
            "Blocco di alga essiccata"
        ],
        "carved_pumpkin": [
            "Zucca intagliata"
        ],
        "chest": [
            "Cassa"
        ],
        "ender_chest": [
            "Cassa di Ender"
        ],
        "jigsaw": [
            "Blocco mosaico"
        ],
        "honey_block": [
            "Blocco di miele"
        ],
        "honeycomb_block": [
            "Blocco favo"
        ],
        "lodestone": [
            "Magnetite"
        ],
        "nether_sprouts": [
            "Germogli del Nether"
        ],
        "crimson_stem": [
            "Gambo cremisi"
        ],
        "warped_stem": [
            "Gambo deformato"
        ],
        "stripped_crimson_stem": [
            "Gambo cremisi spellato"
        ],
        "stripped_warped_stem": [
            "Gambo spellato deformato"
        ],
        "crimson_hyphae": [
            "Ifa cremisi"
        ],
        "warped_hyphae": [
            "Ifa deformata"
        ],
        "stripped_crimson_hyphae": [
            "Ifa cremisi scortecciata"
        ],
        "stripped_warped_hyphae": [
            "Ifa scortecciata deformata"
        ],
        "crimson_planks": [
            "Assi cremisi"
        ],
        "warped_planks": [
            "Assi deformate"
        ],
        "crimson_trapdoor": [
            "Botola cremisi"
        ],
        "warped_trapdoor": [
            "Botola deformata"
        ],
        "crimson_standing_sign": [
            "Insegna cremisi"
        ],
        "warped_standing_sign": [
            "Insegna deformata"
        ],
        "crimson_wall_sign": [
            "Insegna cremisi"
        ],
        "warped_wall_sign": [
            "Insegna deformata"
        ],
        "crimson_stairs": [
            "Scale cremisi"
        ],
        "warped_stairs": [
            "Scale deformate"
        ],
        "crimson_fence": [
            "Recinzione cremisi"
        ],
        "warped_fence": [
            "Recinzione deformata"
        ],
        "crimson_fence_gate": [
            "Cancello recinzione cremisi"
        ],
        "warped_fence_gate": [
            "Cancello recinzione deformato"
        ],
        "crimson_button": [
            "Pulsante cremisi"
        ],
        "warped_button": [
            "Pulsante deformato"
        ],
        "crimson_pressure_plate": [
            "Pedana a pressione cremisi"
        ],
        "warped_pressure_plate": [
            "Pedana a pressione deformata"
        ],
        "crimson_slab": [
            "Lastra cremisi"
        ],
        "warped_slab": [
            "Lastra deformata"
        ],
        "crimson_double_slab": [
            "Lastra cremisi"
        ],
        "warped_double_slab": [
            "Lastra deformata"
        ],
        "shroomlight": [
            "Fungolume"
        ],
        "crimson_nylium": [
            "Nylium cremisi"
        ],
        "warped_nylium": [
            "Nylium deformato"
        ],
        "basalt": [
            "Basalto"
        ],
        "polished_basalt": [
            "Basalto levigato"
        ],
        "blackstone": [
            "Pietranera"
        ],
        "polished_blackstone_bricks": [
            "Mattoni di pietranera levigati"
        ],
        "cracked_polished_blackstone_bricks": [
            "Mattoni di pietranera levigati lesionati"
        ],
        "polished_blackstone_brick_stairs": [
            "Scale di mattoni di pietranera levigati"
        ],
        "blackstone_stairs": [
            "Scale di pietranera"
        ],
        "blackstone_wall": [
            "Muro di pietranera"
        ],
        "polished_blackstone_brick_wall": [
            "Muro di mattoni di pietranera levigati"
        ],
        "chiseled_polished_blackstone": [
            "Pietranera levigata e cesellata"
        ],
        "gilded_blackstone": [
            "Pietranera dorata"
        ],
        "blackstone_slab": [
            "Lastra di pietranera"
        ],
        "polished_blackstone_brick_slab": [
            "Lastra di mattoni di pietranera levigati"
        ],
        "chain": [
            "Catena"
        ],
        "soul_soil": [
            "Terra delle anime"
        ],
        "soul_fire": [
            "Fuoco delle anime"
        ],
        "polished_blackstone": [
            "Pietranera levigata"
        ],
        "polished_blackstone_stairs": [
            "Scale di pietranera levigata"
        ],
        "polished_blackstone_slab": [
            "Lastra di pietranera levigata"
        ],
        "polished_blackstone_pressure_plate": [
            "Pedana a pressione di pietranera levigata"
        ],
        "polished_blackstone_button": [
            "Pulsante di pietranera levigata"
        ],
        "polished_blackstone_wall": [
            "Muro di pietranera levigata"
        ],
        "soul_campfire": [
            "Falò dell'anima"
        ],
        "chiseled_nether_bricks": [
            "Mattoni del Nether cesellati"
        ],
        "cracked_nether_bricks": [
            "Mattoni del Nether lesionati"
        ],
        "quartz_bricks": [
            "Mattoni di quarzo"
        ],
        "trapped_chest": [
            "Cassa intrappolata"
        ],
        "shulkerBoxWhite": [
            "Cassa Shulker bianca"
        ],
        "shulkerBoxOrange": [
            "Cassa Shulker arancione"
        ],
        "shulkerBoxMagenta": [
            "Cassa Shulker magenta"
        ],
        "shulkerBoxLightBlue": [
            "Cassa Shulker azzurra"
        ],
        "shulkerBoxYellow": [
            "Cassa Shulker gialla"
        ],
        "shulkerBoxLime": [
            "Cassa Shulker lime"
        ],
        "shulkerBoxPink": [
            "Cassa Shulker rosa"
        ],
        "shulkerBoxGray": [
            "Cassa Shulker grigia"
        ],
        "shulkerBoxSilver": [
            "Cassa Shulker grigio chiaro"
        ],
        "shulkerBoxCyan": [
            "Cassa Shulker ciano"
        ],
        "shulkerBoxPurple": [
            "Cassa Shulker viola"
        ],
        "shulkerBoxBlue": [
            "Cassa Shulker blu"
        ],
        "shulkerBoxBrown": [
            "Cassa Shulker marrone"
        ],
        "shulkerBoxGreen": [
            "Cassa Shulker verde"
        ],
        "shulkerBoxRed": [
            "Cassa Shulker rossa"
        ],
        "shulkerBoxBlack": [
            "Cassa Shulker nera"
        ],
        "shulkerBox": [
            "Cassa Shulker"
        ],
        "chorus_flower": [
            "Fiore Chorus"
        ],
        "chorus_plant": [
            "Pianta Chorus"
        ],
        "stained_glass": [
            "Vetro colorato bianco",
            "Vetro colorato bianco",
            "Vetro colorato arancione",
            "Vetro colorato magenta",
            "Vetro colorato azzurro",
            "Vetro colorato giallo",
            "Vetro colorato lime",
            "Vetro colorato rosa",
            "Vetro colorato grigio",
            "Vetro colorato grigio chiaro",
            "Vetro colorato ciano",
            "Vetro colorato viola",
            "Vetro colorato blu",
            "Vetro colorato marrone",
            "Vetro colorato verde",
            "Vetro colorato rosso",
            "Vetro colorato nero"
        ],
        "stained_glass_pane": [
            "Lastra di vetro colorato bianco",
            "Lastra di vetro colorato bianco",
            "Lastra di vetro colorato arancione",
            "Lastra di vetro colorato magenta",
            "Lastra di vetro colorato azzurro",
            "Lastra di vetro colorato giallo",
            "Lastra di vetro colorato lime",
            "Lastra di vetro colorato rosa",
            "Lastra di vetro colorato grigio",
            "Lastra di vetro colorato grigio chiaro",
            "Lastra di vetro colorato ciano",
            "Lastra di vetro colorato viola",
            "Lastra di vetro colorato blu",
            "Lastra di vetro colorato marrone",
            "Lastra di vetro colorato verde",
            "Lastra di vetro colorato rosso",
            "Lastra di vetro colorato nero"
        ],
        "clay": [
            "Blocco di argilla"
        ],
        "hardened_clay": [
            "Terracotta"
        ],
        "stained_hardened_clay": [
            "Terracotta",
            "Terracotta bianca",
            "Terracotta arancione",
            "Terracotta magenta",
            "Terracotta azzurra",
            "Terracotta gialla",
            "Terracotta lime",
            "Terracotta rosa",
            "Terracotta grigia",
            "Terracotta grigio chiaro",
            "Terracotta ciano",
            "Terracotta viola",
            "Terracotta blu",
            "Terracotta marrone",
            "Terracotta verde",
            "Terracotta rossa",
            "Terracotta nera"
        ],
        "structure_block": [
            "Blocco struttura"
        ],
        "structure_void": [
            "Vuoto struttura"
        ],
        "wool": [
            "Lana",
            "Lana bianca",
            "Lana arancione",
            "Lana magenta",
            "Lana azzurra",
            "Lana gialla",
            "Lana lime",
            "Lana rosa",
            "Lana grigia",
            "Lana grigio chiaro",
            "Lana ciano",
            "Lana viola",
            "Lana blu",
            "Lana marrone",
            "Lana verde",
            "Lana rossa",
            "Lana nera"
        ],
        "cobblestone_wall": [
            "Muro di ciottoli",
            "Muro di ciottoli",
            "Muro di ciottoli muschioso",
            "Muro di granito",
            "Muro di diorite",
            "Muro di andesite",
            "Muro di arenaria",
            "Muro di mattoni",
            "Muro di mattoni di pietra",
            "Muro di mattoni di pietra muschiosi",
            "Muro di mattoni di pietra dell'End",
            "Muro di mattoni del Nether",
            "Muro di prismarino",
            "Muro di arenaria rossa",
            "Muro di mattoni del Nether rossi"
        ],
        "cocoa": [
            "Cacao"
        ],
        "command_block": [
            "Blocco di comando"
        ],
        "composter": [
            "Bidone di compostaggio"
        ],
        "light_block": [
            "Blocco luce"
        ],
        "repeating_command_block": [
            "Blocco di comando ricorrente"
        ],
        "chain_command_block": [
            "Blocco di comando a catena"
        ],
        "darkOakFence": [
            "Recinzione di rovere"
        ],
        "dark_oak_fence_gate": [
            "Cancello recinzione di rovere"
        ],
        "daylight_detector": [
            "Sensore luce diurna"
        ],
        "deadbush": [
            "Cespuglio secco"
        ],
        "detector_rail": [
            "Binario rilevatore"
        ],
        "dirt": [
            "Terra",
            "Terra",
            "Terra brulla"
        ],
        "podzol": [
            "Podsòl"
        ],
        "purpur_block": [
            "Blocco di porpora",
            "Blocco di porpora",
            "Porpora cesellata",
            "Pilastro di porpora"
        ],
        "dispenser": [
            "Distributore"
        ],
        "doorWood": [
            "Porta di legno"
        ],
        "double_plant": [
            "Piante alte",
            "Girasole",
            "Lilla",
            "Erba altissima",
            "Felce grande",
            "Rosaio",
            "Peonia"
        ],
        "dragon_egg": [
            "Uovo di drago"
        ],
        "dropper": [
            "Sgancio"
        ],
        "enchanting_table": [
            "Tavolo per incantesimi"
        ],
        "enderChest": [
            "Cassa di Ender"
        ],
        "end_portal_frame": [
            "Telaio per portale dell'End"
        ],
        "farmland": [
            "Zolla"
        ],
        "fletching_table": [
            "Tavolo da arcaio"
        ],
        "fence": [
            "Recinzione di quercia"
        ],
        "fence_gate": [
            "Cancello recinzione di quercia"
        ],
        "iron_bars": [
            "Barre di ferro"
        ],
        "fire": [
            "Fuoco"
        ],
        "yellow_flower": [
            "Fiore",
            "Dente di leone"
        ],
        "red_flower": [
            "Fiore",
            "Papavero",
            "Orchidea blu",
            "Allium",
            "Asperula",
            "Tulipano rosso",
            "Tulipano arancione",
            "Tulipano bianco",
            "Tulipano rosa",
            "Margherita",
            "Fiordaliso",
            "Mughetto"
        ],
        "wither_rose": [
            "Rosa di Wither"
        ],
        "furnace": [
            "Fornace"
        ],
        "glass": [
            "Vetro"
        ],
        "golden_rail": [
            "Binario alimentato"
        ],
        "grass": [
            "Blocco d'erba"
        ],
        "grass_path": [
            "Sentiero erboso"
        ],
        "gravel": [
            "Ghiaia"
        ],
        "hay_block": [
            "Balla di fieno"
        ],
        "netherrack": [
            "Roccia del Nether"
        ],
        "soul_sand": [
            "Sabbia delle anime"
        ],
        "hopper": [
            "Tramoggia"
        ],
        "ice": [
            "Ghiaccio"
        ],
        "packed_ice": [
            "Ghiaccio compatto"
        ],
        "blue_ice": [
            "Ghiaccio blu"
        ],
        "iron_trapdoor": [
            "Botola di ferro"
        ],
        "jukebox": [
            "Jukebox"
        ],
        "jungleFence": [
            "Recinzione della giungla"
        ],
        "jungle_fence_gate": [
            "Cancello recinzione della giungla"
        ],
        "ladder": [
            "Scala a pioli"
        ],
        "flowing_lava": [
            "Lava"
        ],
        "leaves2": [
            "Foglie di acacia",
            "Foglie di acacia",
            "Foglie di rovere"
        ],
        "lever": [
            "Leva"
        ],
        "glowstone": [
            "Luminite"
        ],
        "lit_pumpkin": [
            "Zucca di Halloween"
        ],
        "lockedchest": [
            "Cassa chiusa"
        ],
        "log2": [
            "Tronco di acacia",
            "Tronco di acacia",
            "Tronco di rovere"
        ],
        "log": [
            "Tronco",
            "Tronco di quercia",
            "Tronco di abete",
            "Tronco di betulla",
            "Tronco della giungla"
        ],
        "magma": [
            "Blocco di magma"
        ],
        "melon_block": [
            "Cocomero"
        ],
        "mob_spawner": [
            "Generatore di mostri"
        ],
        "monster_egg": [
            "Pietra infestata",
            "Pietra infestata",
            "Ciottoli infestati",
            "Mattone di pietra infestato",
            "Mattone di pietra muschioso infestato",
            "Mattone di pietra lesionato infestato",
            "Mattone di pietra cesellato infestato"
        ],
        "mushroom": [
            "Fungo"
        ],
        "noteblock": [
            "Blocco sonoro"
        ],
        "mycelium": [
            "Micelio"
        ],
        "nether_brick": [
            "Blocco di Mattone del Nether"
        ],
        "red_nether_brick": [
            "Mattone del Nether rosso"
        ],
        "nether_brick_fence": [
            "Recinzione del Nether"
        ],
        "quartz_ore": [
            "Minerale di quarzo del Nether"
        ],
        "netherreactor": [
            "Nucleo del reattore Nether"
        ],
        "nether_wart_block": [
            "Blocco di verruca del Nether"
        ],
        "warped_wart_block": [
            "Blocco di verruca deformata"
        ],
        "unlit_redstone_torch": [
            "Torcia di pietrarossa"
        ],
        "redstone_torch": [
            "Torcia di pietrarossa"
        ],
        "soul_torch": [
            "Torcia dell'anima"
        ],
        "obsidian": [
            "Ossidiana"
        ],
        "coal_ore": [
            "Minerale di carbone"
        ],
        "diamond_ore": [
            "Minerale di diamante"
        ],
        "emerald_ore": [
            "Minerale di smeraldo"
        ],
        "gold_ore": [
            "Minerale d'oro"
        ],
        "iron_ore": [
            "Minerale di ferro"
        ],
        "lapis_ore": [
            "Minerale di lapislazzulo"
        ],
        "redstone_ore": [
            "Minerale di pietrarossa"
        ],
        "oreRuby": [
            "Minerale di rubino"
        ],
        "observer": [
            "Osservatore"
        ],
        "piston": [
            "Pistone"
        ],
        "sticky_piston": [
            "Pistone appiccicoso"
        ],
        "portal": [
            "Portale"
        ],
        "potatoes": [
            "Patate"
        ],
        "stone_pressure_plate": [
            "Pedana a pressione di pietra"
        ],
        "wooden_pressure_plate": [
            "Pedana a pressione di quercia"
        ],
        "acacia_pressure_plate": [
            "Pedana a pressione di acacia"
        ],
        "birch_pressure_plate": [
            "Pedana a pressione di betulla"
        ],
        "dark_oak_pressure_plate": [
            "Pedana a pressione di quercia scura"
        ],
        "jungle_pressure_plate": [
            "Pedana a pressione della giungla"
        ],
        "spruce_pressure_plate": [
            "Pedana a pressione di abete"
        ],
        "prismarine": [
            "Prismarino",
            "Prismarino",
            "Mattoni di prismarino",
            "Prismarino cupo"
        ],
        "pumpkin": [
            "Zucca"
        ],
        "pumpkin_stem": [
            "Picciolo di zucca"
        ],
        "quartz_block": [
            "Blocco di quarzo",
            "Blocco di quarzo",
            "Blocco di quarzo cesellato",
            "Blocco portante di quarzo",
            "Blocco di quarzo levigato"
        ],
        "rail": [
            "Binario"
        ],
        "red_mushroom": [
            "Fungo rosso"
        ],
        "crimson_fungus": [
            "Fungo cremisi"
        ],
        "warped_fungus": [
            "Fungo deformato"
        ],
        "red_mushroom_block": [
            "Blocco fungo rosso"
        ],
        "red_sandstone": [
            "Arenaria rossa",
            "Arenaria rossa",
            "Arenaria rossa cesellata",
            "Arenaria rossa tagliata",
            "Arenaria rossa levigata"
        ],
        "redstone_wire": [
            "Polvere di pietrarossa"
        ],
        "redstone_lamp": [
            "Lampada di pietrarossa"
        ],
        "sand": [
            "Sabbia",
            "Sabbia",
            "Sabbia rossa"
        ],
        "sandstone": [
            "Arenaria",
            "Arenaria",
            "Arenaria cesellata",
            "Arenaria tagliata",
            "Arenaria levigata"
        ],
        "sapling": [
            "Arboscello di quercia",
            "Arboscello di quercia",
            "Arboscello di abete",
            "Arboscello di betulla",
            "Arboscello della giungla",
            "Arboscello di acacia",
            "Arboscello di rovere"
        ],
        "seaLantern": [
            "Lanterna marina"
        ],
        "standing_sign": [
            "Cartello"
        ],
        "spruce_standing_sign": [
            "Insegna di abete"
        ],
        "birch_standing_sign": [
            "Insegna di betulla"
        ],
        "jungle_standing_sign": [
            "Insegna giungla"
        ],
        "acacia_standing_sign": [
            "Insegna di acacia"
        ],
        "darkoak_standing_sign": [
            "Insegna di quercia scura"
        ],
        "slime": [
            "Blocco di gelatina"
        ],
        "snow": [
            "Neve"
        ],
        "sponge": [
            "Spugna",
            "Spugna",
            "Spugna bagnata"
        ],
        "spruceFence": [
            "Recinzione di abete"
        ],
        "spruce_fence_gate": [
            "Cancello recinzione di abete"
        ],
        "brick_stairs": [
            "Scala di mattoni"
        ],
        "nether_brick_stairs": [
            "Scala di mattoni del Nether"
        ],
        "quartz_stairs": [
            "Scala di quarzo"
        ],
        "smooth_quartz_stairs": [
            "Scale di quarzo levigato"
        ],
        "red_sandstone_stairs": [
            "Scale d'arenaria rossa"
        ],
        "sandstone_stairs": [
            "Scale d'arenaria"
        ],
        "stone_stairs": [
            "Scale di ciottoli"
        ],
        "normal_stone_stairs": [
            "Scale di pietra"
        ],
        "stone_brick_stairs": [
            "Scala di mattoni di pietra"
        ],
        "oak_stairs": [
            "Scala di legno di quercia"
        ],
        "acacia_stairs": [
            "Scala di legno di acacia"
        ],
        "birch_stairs": [
            "Scala di legno di betulla"
        ],
        "dark_oak_stairs": [
            "Scala di legno di rovere"
        ],
        "jungle_stairs": [
            "Scala di legno della giungla"
        ],
        "spruce_stairs": [
            "Scala di legno di abete"
        ],
        "purpur_stairs": [
            "Scale di porpora"
        ],
        "prismarine_stairs": [
            "Scala di prismarino"
        ],
        "dark_prismarine_stairs": [
            "Scala di prismarino cupo"
        ],
        "prismarine_bricks_stairs": [
            "Scala di mattoni di prismarino"
        ],
        "granite_stairs": [
            "Scale di granito"
        ],
        "diorite_stairs": [
            "Scale di diorite"
        ],
        "andesite_stairs": [
            "Scale di andesite"
        ],
        "polished_granite_stairs": [
            "Scale di granito levigato"
        ],
        "polished_diorite_stairs": [
            "Scale di diorite levigata"
        ],
        "polished_andesite_stairs": [
            "Scale di andesite levigata"
        ],
        "mossy_stone_brick_stairs": [
            "Scale di mattoni di pietra muschiosi"
        ],
        "smooth_red_sandstone_stairs": [
            "Scale di arenaria rossa levigata"
        ],
        "smooth_sandstone_stairs": [
            "Scale di arenaria levigata"
        ],
        "end_brick_stairs": [
            "Scale di mattoni di pietra dell'End"
        ],
        "mossy_cobblestone_stairs": [
            "Scale di ciottoli muschiosi"
        ],
        "red_nether_brick_stairs": [
            "Scale di mattoni del Nether rossi"
        ],
        "smooth_stone": [
            "Pietra levigata"
        ],
        "standing_banner": [
            "Stendardo",
            "Stendardo nero",
            "Stendardo rosso",
            "Stendardo verde",
            "Stendardo marrone",
            "Stendardo blu",
            "Stendardo viola",
            "Stendardo ciano",
            "Stendardo grigio chiaro",
            "Stendardo grigio",
            "Stendardo rosa",
            "Stendardo lime",
            "Stendardo giallo",
            "Stendardo azzurro",
            "Stendardo magenta",
            "Stendardo arancione",
            "Stendardo"
        ],
        "stone": [
            "Pietra",
            "Pietra",
            "Granito",
            "Granito levigato",
            "Diorite",
            "Diorite levigata",
            "Andesite",
            "Andesite levigata"
        ],
        "cobblestone": [
            "Ciottoli"
        ],
        "stonebrick": [
            "Mattoni di pietra",
            "Mattoni di pietra",
            "Mattoni di pietra muschiosi",
            "Mattoni di pietra cesellati"
        ],
        "stonecutter": [
            "Tagliapietra"
        ],
        "stonecutter_block": [
            "Tagliapietra"
        ],
        "mossy_cobblestone": [
            "Ciottoli muschiosi"
        ],
        "double_stone_slab": [
            "Lastra di pietra",
            "Lastra di pietra",
            "Lastra d'arenaria",
            "Lastra di legno",
            "Lastra di ciottoli",
            "Lastra di mattoni",
            "Lastra di mattoni di pietra",
            "Lastra di quarzo",
            "Lastra di mattoni del Nether"
        ],
        "stone_slab": [
            "Lastra di pietra",
            "Lastra di pietra levigata",
            "Lastra d'arenaria",
            "Lastra di legno",
            "Lastra di ciottoli",
            "Lastra di mattoni",
            "Lastra di mattoni di pietra",
            "Lastra di quarzo",
            "Lastra di mattoni del Nether"
        ],
        "double_stone_slab2": [
            "Lastra d'arenaria rossa",
            "Lastra d'arenaria rossa"
        ],
        "stone_slab2": [
            "Lastra d'arenaria rossa",
            "Lastra d'arenaria rossa",
            "Lastra di porpora",
            "Lastra di prismarino",
            "Lastra di mattoni di prismarino",
            "Lastra di prismarino cupo",
            "Lastra di ciottoli muschiosi",
            "Lastra d'arenaria levigata",
            "Lastra di mattoni del Nether rossi"
        ],
        "stone_slab3": [
            "Lastra di pietra dell'End",
            "Lastra di pietra dell'End",
            "Lastra d'arenaria rossa levigata",
            "Lastra di andesite levigata",
            "Lastra di andesite",
            "Lastra di diorite",
            "Lastra di diorite levigata",
            "Lastra di granito",
            "Lastra di granito levigato"
        ],
        "stone_slab4": [
            "Lastra di mattoni di pietra muschiosi",
            "Lastra di mattoni di pietra muschiosi",
            "Lastra di quarzo levigato",
            "Lastra di pietra",
            "Lastra d'arenaria tagliata",
            "Lastra d'arenaria rossa tagliata"
        ],
        "coral_block": [
            "Blocco di corallo blu",
            "Blocco di corallo blu",
            "Blocco di corallo rosa",
            "Blocco di corallo viola",
            "Blocco di corallo rosso",
            "Blocco di corallo giallo",
            "Blocco di corallo blu morto",
            "Blocco di corallo rosa morto",
            "Blocco di corallo viola morto",
            "Blocco di corallo rosso morto",
            "Blocco di corallo giallo morto"
        ],
        "tallgrass": [
            "Erba",
            "Erba",
            "Felce"
        ],
        "seagrass": [
            "Prateria di mare",
            "Prateria di mare"
        ],
        "sea_pickle": [
            "Cetriolo di mare"
        ],
        "turtle_egg": [
            "Uovo di tartaruga marina"
        ],
        "coral": [
            "Corallo blu",
            "Corallo blu",
            "Corallo rosa",
            "Corallo viola",
            "Corallo rosso",
            "Corallo giallo",
            "Corallo blu morto",
            "Corallo rosa morto",
            "Corallo viola morto",
            "Corallo rosso morto",
            "Corallo giallo morto"
        ],
        "coral_fan": [
            "Corallo a ventaglio blu",
            "Corallo a ventaglio blu",
            "Corallo a ventaglio rosa",
            "Corallo a ventaglio viola",
            "Corallo a ventaglio rosso",
            "Corallo a ventaglio giallo"
        ],
        "coral_fan_dead": [
            "Corallo a ventaglio blu morto",
            "Corallo a ventaglio blu morto",
            "Corallo a ventaglio rosa morto",
            "Corallo a ventaglio viola morto",
            "Corallo a ventaglio rosso morto",
            "Corallo a ventaglio giallo morto"
        ],
        "glass_pane": [
            "Lastra di vetro"
        ],
        "tnt": [
            "Tritolo"
        ],
        "snow_layer": [
            "Strati di neve superiore"
        ],
        "torch": [
            "Torcia"
        ],
        "trapdoor": [
            "Botola di quercia"
        ],
        "acacia_trapdoor": [
            "Botola di acacia"
        ],
        "birch_trapdoor": [
            "Botola di betulla"
        ],
        "dark_oak_trapdoor": [
            "Botola di quercia scura"
        ],
        "jungle_trapdoor": [
            "Botola della giungla"
        ],
        "spruce_trapdoor": [
            "Botola di abete"
        ],
        "tripWire": [
            "Filo"
        ],
        "tripwire_hook": [
            "Gancio a filo"
        ],
        "vine": [
            "Rampicante"
        ],
        "weeping_vines": [
            "Rampicanti piangenti"
        ],
        "twisting_vines": [
            "Rampicanti contorti"
        ],
        "flowing_water": [
            "Acqua"
        ],
        "water": [
            "Acqua"
        ],
        "waterlily": [
            "Ninfea"
        ],
        "web": [
            "Ragnatela"
        ],
        "heavy_weighted_pressure_plate": [
            "Pedana a pressione con peso (pesante)"
        ],
        "light_weighted_pressure_plate": [
            "Pedana a pressione con peso (leggera)"
        ],
        "end_stone": [
            "Pietra dell'End"
        ],
        "end_bricks": [
            "Mattoni di pietra dell'End"
        ],
        "planks": [
            "Assi di legno",
            "Assi di legno di quercia",
            "Assi di legno di abete",
            "Assi di legno di betulla",
            "Assi di legno della giungla",
            "Assi di legno di acacia",
            "Assi di legno di rovere"
        ],
        "wooden_slab": [
            "Lastra di legno",
            "Lastra di legno di quercia",
            "Lastra di legno di abete",
            "Lastra di legno di betulla",
            "Lastra di legno della giungla",
            "Lastra di legno di acacia",
            "Lastra di legno di rovere"
        ],
        "carpet": [
            "Tappeto",
            "Tappeto nero",
            "Tappeto rosso",
            "Tappeto verde",
            "Tappeto marrone",
            "Tappeto blu",
            "Tappeto viola",
            "Tappeto ciano",
            "Tappeto grigio chiaro",
            "Tappeto grigio",
            "Tappeto rosa",
            "Tappeto lime",
            "Tappeto giallo",
            "Tappeto azzurro",
            "Tappeto magenta",
            "Tappeto arancione",
            "Tappeto bianco"
        ],
        "crafting_table": [
            "Banco da lavoro"
        ],
        "white_glazed_terracotta": [
            "Terracotta smaltata bianca",
            "Terracotta smaltata bianca"
        ],
        "orange_glazed_terracotta": [
            "Terracotta smaltata arancione",
            "Terracotta smaltata arancione"
        ],
        "magenta_glazed_terracotta": [
            "Terracotta smaltata magenta",
            "Terracotta smaltata magenta"
        ],
        "light_blue_glazed_terracotta": [
            "Terracotta smaltata azzurra",
            "Terracotta smaltata azzurra"
        ],
        "yellow_glazed_terracotta": [
            "Terracotta smaltata gialla",
            "Terracotta smaltata gialla"
        ],
        "lime_glazed_terracotta": [
            "Terracotta smaltata lime",
            "Terracotta smaltata lime"
        ],
        "pink_glazed_terracotta": [
            "Terracotta smaltata rosa",
            "Terracotta smaltata rosa"
        ],
        "gray_glazed_terracotta": [
            "Terracotta smaltata grigia",
            "Terracotta smaltata grigia"
        ],
        "silver_glazed_terracotta": [
            "Terracotta smaltata grigio chiaro",
            "Terracotta smaltata grigio chiaro"
        ],
        "cyan_glazed_terracotta": [
            "Terracotta smaltata ciano",
            "Terracotta smaltata ciano"
        ],
        "purple_glazed_terracotta": [
            "Terracotta smaltata viola",
            "Terracotta smaltata viola"
        ],
        "blue_glazed_terracotta": [
            "Terracotta smaltata blu",
            "Terracotta smaltata blu"
        ],
        "brown_glazed_terracotta": [
            "Terracotta smaltata marrone",
            "Terracotta smaltata marrone"
        ],
        "green_glazed_terracotta": [
            "Terracotta smaltata verde",
            "Terracotta smaltata verde"
        ],
        "red_glazed_terracotta": [
            "Terracotta smaltata rossa",
            "Terracotta smaltata rossa"
        ],
        "black_glazed_terracotta": [
            "Terracotta smaltata nera",
            "Terracotta smaltata nera"
        ],
        "concrete": [
            "Calcestruzzo bianco",
            "Calcestruzzo bianco",
            "Calcestruzzo arancione",
            "Calcestruzzo magenta",
            "Calcestruzzo azzurro",
            "Calcestruzzo giallo",
            "Calcestruzzo lime",
            "Calcestruzzo rosa",
            "Calcestruzzo grigio",
            "Calcestruzzo grigio chiaro",
            "Calcestruzzo ciano",
            "Calcestruzzo viola",
            "Calcestruzzo blu",
            "Calcestruzzo marrone",
            "Calcestruzzo verde",
            "Calcestruzzo rosso",
            "Calcestruzzo nero"
        ],
        "glazedTerracottaWhite": [
            "Terracotta smaltata bianca"
        ],
        "glazedTerracottaOrange": [
            "Terracotta smaltata arancione"
        ],
        "glazedTerracottaMagenta": [
            "Terracotta smaltata magenta"
        ],
        "glazedTerracottaLightBlue": [
            "Terracotta smaltata azzurra"
        ],
        "glazedTerracottaYellow": [
            "Terracotta smaltata gialla"
        ],
        "glazedTerracottaLime": [
            "Terracotta smaltata lime"
        ],
        "glazedTerracottaPink": [
            "Terracotta smaltata rosa"
        ],
        "glazedTerracottaGray": [
            "Terracotta smaltata grigia"
        ],
        "glazedTerracottaSilver": [
            "Terracotta smaltata grigio chiaro"
        ],
        "glazedTerracottaCyan": [
            "Terracotta smaltata ciano"
        ],
        "glazedTerracottaPurple": [
            "Terracotta smaltata viola"
        ],
        "glazedTerracottaBlue": [
            "Terracotta smaltata blu"
        ],
        "glazedTerracottaBrown": [
            "Terracotta smaltata marrone"
        ],
        "glazedTerracottaGreen": [
            "Terracotta smaltata verde"
        ],
        "glazedTerracottaRed": [
            "Terracotta smaltata rossa"
        ],
        "glazedTerracottaBlack": [
            "Terracotta smaltata nera"
        ],
        "concretePowder": [
            "Polvere di calcestruzzo bianca",
            "Polvere di calcestruzzo bianca",
            "Polvere di calcestruzzo arancione",
            "Polvere di calcestruzzo magenta",
            "Polvere di calcestruzzo azzurra",
            "Polvere di calcestruzzo gialla",
            "Polvere di calcestruzzo lime",
            "Polvere di calcestruzzo rosa",
            "Polvere di calcestruzzo grigia",
            "Polvere di calcestruzzo grigio chiaro",
            "Polvere di calcestruzzo ciano",
            "Polvere di calcestruzzo viola",
            "Polvere di calcestruzzo blu",
            "Polvere di calcestruzzo marrone",
            "Polvere di calcestruzzo verde",
            "Polvere di calcestruzzo rossa",
            "Polvere di calcestruzzo nera"
        ],
        "stripped_spruce_log": [
            "Tronco di abete scortecciato"
        ],
        "stripped_dark_oak_log": [
            "Tronco di rovere scortecciato"
        ],
        "stripped_birch_log": [
            "Tronco di betulla scortecciato"
        ],
        "stripped_jungle_log": [
            "Tronco della giungla scortecciato"
        ],
        "stripped_oak_log": [
            "Tronco di quercia scortecciato"
        ],
        "stripped_acacia_log": [
            "Tronco di acacia scortecciato"
        ],
        "bamboo": [
            "Bamboo"
        ],
        "scaffolding": [
            "Impalcatura"
        ],
        "grindstone": [
            "Mola"
        ],
        "cartography_table": [
            "Tavolo da cartografo"
        ],
        "lantern": [
            "Lanterna"
        ],
        "soul_lantern": [
            "Lanterna dell'anima"
        ],
        "smoker": [
            "Affumicatore"
        ],
        "smithing_table": [
            "Tavolo da fabbro"
        ],
        "barrel": [
            "Barile"
        ],
        "campfire": [
            "Falò"
        ],
        "loom": [
            "Telaio"
        ],
        "lectern": [
            "Leggio"
        ],
        "sweet_berry_bush": [
            "Cespuglio di bacche dolci"
        ],
        "wood": [
            "Legno di quercia",
            "Legno di quercia",
            "Legno di abete",
            "Legno di betulla",
            "Legno della giungla",
            "Legno di acacia",
            "Legno di rovere",
            null,
            null,
            "Legno di quercia scortecciato",
            "Legno di abete scortecciato",
            "Legno di betulla scortecciato",
            "Legno della giungla scortecciato",
            "Legno di acacia scortecciato",
            "Legno di rovere scortecciato"
        ],
        "netherite_block": [
            "Blocco di Netherite"
        ],
        "ancient_debris": [
            "Antichi detriti"
        ],
        "nether_gold_ore": [
            "Minerale d'oro del Nether"
        ],
        "respawn_anchor": [
            "Ancora di rigenerazione"
        ],
        "crying_obsidian": [
            "Ossidiana piangente"
        ]
    }
};
freeze(lang_data);
export = lang_data;
