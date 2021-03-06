
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
    id: "de_DE" as LangId,
    commands:{
        "ability_description": "Legt eine Fähigkeit eines Spielers fest.",
        "ability_noability": "Keine Fähigkeit namens '%1$s' vorhanden",
        "ability_granted": "Dir wurde die Fähigkeit '%1$s' gewährt",
        "ability_revoked": "Dir wude die Fähigkeit '%1$s' entzogen",
        "ability_success": "Fähigkeit wurde aktualisiert.",
        "achievement_alreadyHave": "Spieler %1$s hat den Erfolg %2$s bereits",
        "achievement_description": "Vergibt oder entfernt einen Erfolg für einen Spieler.",
        "achievement_dontHave": "Spieler %1$s hat den Erfolg %2$s nicht",
        "achievement_give_success_all": "Alle Erfolge wurden an %1$s gegeben",
        "achievement_give_success_one": "Spieler %1$s hat den Wert '%2$s' erhalten",
        "achievement_statTooLow": "Spieler %1$s hat den Wert %2$s nicht",
        "achievement_take_success_all": "%1$s wurden alle Erfolge entzogen",
        "achievement_take_success_one": "Der Wert %1$s wurde %2$s entzogen",
        "achievement_unknownAchievement": "Unbekannte Statistik oder unbekannter Erfolg '%1$s'",
        "agent_attack_success": "Agent: Attacke erfolgreich",
        "agent_attack_failed": "Agent: Attacke fehlgeschlagen",
        "agent_collect_success": "Agent: Sammeln erfolgreich",
        "agent_collect_failed": "Agent: Sammeln fehlgeschlagen",
        "agent_createagent_success": "Agent: Erstellen erfolgreich",
        "agent_createagent_failed": "Agent: Erstellen fehlgeschlagen",
        "agent_destroy_success": "Block von Agent zerstört",
        "agent_destroy_failed": "Agent: Zerstören fehlgeschlagen",
        "agent_detect_success": "Agent: Aufspüren erfolgreich",
        "agent_detect_failed": "Agent: Aufspüren fehlgeschlagen",
        "agent_detectredstone_success": "Agent: detectredstone erfolgreich",
        "agent_detectredstone_failed": "Agent: detectredstone fehlgeschlagen",
        "agent_drop_success": "Agent: Ablegen erfolgreich",
        "agent_drop_failed": "Agent: Ablegen fehlgeschlagen",
        "agent_dropall_success": "Agent: dropall erfolgreich",
        "agent_dropall_failed": "Agent: dropall fehlgeschlagen",
        "agent_getitemcount_success": "Agent: getitemcount erfolgreich",
        "agent_getitemcount_failed": "Agent: getitemcount fehlgeschlagen",
        "agent_getitemspace_success": "Agent: getitemspace erfolgreich",
        "agent_getitemspace_failed": "Agent: getitemspace fehlgeschlagen",
        "agent_getitemdetail_success": "Agent: getitemdetail erfolgreich",
        "agent_getitemdetail_failed": "Agent: getitemdetail fehlgeschlagen",
        "agent_getposition_success": "Agent: getposition erfolgreich",
        "agent_getposition_failed": "Agent: getposition fehlgeschlagen",
        "agent_inspect_success": "Agent: Inspizieren erfolgreich",
        "agent_inspect_failed": "Agent: inspizieren fehlgeschlagen",
        "agent_inspectdata_success": "Datenprüfung durch Agent erfolgreich",
        "agent_inspectdata_failed": "Datenprüfung durch Agent fehlgeschlagen",
        "agent_move_success": "Agent: Bewegen erfolgreich",
        "agent_move_failed": "Agent: Bewegen fehlgeschlagen",
        "agent_outofrange": "Befehl kann nicht ausgeführt werden, da Agent außer Reichweite ist.",
        "agent_place_success": "Agent: Platzieren erfolgreich",
        "agent_place_failed": "Agent: Platzieren fehlgeschlagen",
        "agent_setitem_success": "Agent: Festlegen von Gegenstand erfolgreich",
        "agent_setitem_failed": "Agent: Festlegen von Gegenstand fehlgeschlagen",
        "agent_turn_success": "Agent: Drehen erfolgreich",
        "agent_turn_failed": "Agent: Drehen fehlgeschlagen",
        "agent_till_success": "Agent: Umpflügen erfolgreich",
        "agent_till_failed": "Agent: Umpflügen fehlgeschlagen",
        "agent_tpagent_description": "Deinen Agenten teleportieren.",
        "agent_tpagent_success": "Agent: Teleportieren erfolgreich",
        "agent_tpagent_failed": "Agent: Teleportieren fehlgeschlagen",
        "agent_transfer_success": "Agent: Übertragen erfolgreich",
        "agent_transfer_failed": "Agent: Übertragen fehlgeschlagen",
        "always_day": "Tag/Nacht-Zyklus %1$s",
        "always_day_locked": "Tag/Nacht-Zyklus gesperrt",
        "always_day_unlocked": "Tag/Nacht-Zyklus entsperrt",
        "ban_description": "Fügt den Spieler zur Bannliste hinzu.",
        "autocomplete_a": "alle Spieler",
        "autocomplete_c": "my Agent",
        "autocomplete_e": "alle Entitäten",
        "autocomplete_p": "nahester Spieler",
        "autocomplete_r": "zufälliger Spieler",
        "autocomplete_s": "du selbst",
        "autocomplete_v": "all Agents",
        "ban_failed": "Spieler %1$s konnte nicht gesperrt werden",
        "ban_success": "Spieler %1$s wurde gesperrt",
        "banip_description": "Fügt die IP-Adresse zur Bannliste hinzu.",
        "banip_invalid": "Du hast eine ungültige IP-Adresse eingegeben oder der Spieler ist nicht online",
        "banip_success": "IP-Adresse %1$s wurde gesperrt",
        "banip_success_players": "IP-Adresse %1$s von %2$s wurde gesperrt",
        "banlist_ips": "Es gibt %1$d gesperrte IP-Adressen:",
        "banlist_players": "Es gibt insgesamt %1$d gesperrte Spieler:",
        "blockdata_description": "Ändern das Daten-Tag eines Blocks.",
        "blockdata_placeFailed": "Du kannst hier keine Blöcke platzieren",
        "blockdata_destroyFailed": "Du kannst hier nicht graben",
        "blockdata_failed": "Der Daten-Tag hat sich nicht geändert: %1$s",
        "blockdata_notValid": "Der Ziel-Block kann keine NBT-Daten besitzen",
        "blockdata_outOfWorld": "Kann Block nicht außerhalb der geladenen Welt verändern",
        "blockdata_success": "Blockdaten aktualisiert auf: %1$s",
        "blockdata_tagError": "Analysieren von Daten-Tag fehlgeschlagen: %1$s",
        "bossbar_add_success": "Benutzerdefinierte Bossbar [%1$s] erstellt",
        "bossbar_add_failure_invalid": "Ungültige Bossbar-ID. IDs müssen dem Format Namespace:ID oder ID (Standard: Minecraft-Namespace) entsprechen.",
        "bossbar_add_failure_exists": "Eine Bossbar mit der ID '%1$s' existiert bereits",
        "bossbar_description": "Erstellt und ändert Lebensanzeigen von Bossen",
        "bossbar_get_max": "Benutzerdefinierte Bossbar [%1$s] hat ein Maximum von %2$d",
        "bossbar_get_players": "Benutzerdefinierte Bossbar [%1$s] hat derzeit %2$s Spieler online: %3$s",
        "bossbar_get_players_none": "Benutzerdefinierte Bossbar [%1$s] hat derzeit keine Spieler online",
        "bossbar_get_players_one": "Benutzerdefinierte Bossbar [%1$s] hat derzeit einen Spieler online: %2$s",
        "bossbar_get_value": "Benutzerdefinierte Bossbar [%1$s] hat einen Wert von %2$d",
        "bossbar_get_visible_true": "Benutzerdefinierte Bossbar [%1$s] wird derzeit angezeigt",
        "bossbar_get_visible_false": "Benutzerdefinierte Bossbar [%1$s] wird derzeit ausgeblendet",
        "bossbar_list": "Es sind %1$s benutzerdefinierte Bossbars aktiv: %2$s",
        "bossbar_list_none": "Es sind keine benutzerdefinierten Bossbars aktiv",
        "bossbar_list_one": "Es ist 1 benutzerdefinierte Bossbar aktiv: %1$s",
        "bossbar_notFound": "Es existiert keine Bossbar mit der ID '%1$s'",
        "bossbar_remove": "Benutzerdefinierte Bossbar [%1$s] entfernt",
        "change_setting_description": "Ändert eine Einstellung auf dem dedizierten Server, während er ausgeführt wird.",
        "change_setting_success": "%1$s wurde geändert",
        "chunkinfo_compiled": "Chunk ist kompiliert.",
        "chunkinfo_data": "Die ersten 64 Eckpunkte sind: %1$s",
        "chunkinfo_empty": "Chunk ist leer.",
        "chunkinfo_hasLayers": "Der Chunk hat Schichten: %1$s",
        "chunkinfo_hasNoRenderableLayers": "Chunk hat keine darstellbaren Schichten.",
        "chunkinfo_isEmpty": "Der Chunk hat leere Schichten: %1$s",
        "chunkinfo_location": "Chunk-Position: (%1$d, %2$d, %3$d)",
        "chunkinfo_noChunk": "Keinen Chunk bei Position %1$d, %2$d, %3$d gefunden",
        "chunkinfo_notCompiled": "Chunk ist nicht kompiliert.",
        "chunkinfo_notEmpty": "Chunk ist nicht leer.",
        "chunkinfo_vertices": "Der Layer-Puffer von %1$s enthält %2$d Eckpunkte",
        "classroommode_description": "Starten und Verbinden im Klassenraummodus.",
        "classroommode_success": "Start im Klassenraumodus wird versucht ...",
        "clear_description": "Entfernt Gegenstände aus dem Spielerinventar.",
        "clear_failure": "Das Inventar von %1$s konnte nicht geleert werden",
        "clear_failure_no_items": "Das Inventar von %1$s konnte nicht geleert werden, da es bereits leer war",
        "clear_success": "Inventar von %1$s geleert, %2$d Gegenstände entfernt",
        "clear_tagError": "Analysieren von Daten-Tag fehlgeschlagen: %1$s",
        "clear_testing": "%1$s hat %2d Gegenstände, die den Kriterien entsprechen",
        "clearfixedinv_description": "Entfernt alle festen Inventarslots.",
        "clearfixedinv_success": "Festes Inventar gelöscht",
        "clone_description": "Klont Blöcke aus einer Region in eine andere.",
        "clone_failed": "Keine Blöcke kopiert",
        "clone_filtered_error": "Gefilterte Nutzung benötigt einen Filterblock, um präzisiert zu werden.",
        "clone_noOverlap": "Quelle und Ziel können sich nicht überschneiden",
        "clone_outOfWorld": "Auf Blöcke außerhalb der geladenen Welt kann nicht zugegriffen werden",
        "clone_success": "%1$d Blöcke kopiert",
        "clone_tooManyBlocks": "Zu viele Blöcke im angegebenen Bereich (%1$d > %2$d)",
        "closechat_description": "Schließt das Chatfenster des lokalen Spielers, wenn es geöffnet ist.",
        "closechat_success": "Chat geschlossen",
        "closechat_failure": "Chat war nicht geöffnet",
        "closewebsocket_description": "Schließt eine eventuell vorhandene Websocket-Verbindung.",
        "code_description": "Startet den Code-Builder.",
        "code_success": "Code-Builder gestartet.",
        "compare_failed": "Quelle und Ziel sind nicht identisch",
        "compare_outOfWorld": "Auf Blöcke außerhalb der geladenen Welt kann nicht zugegriffen werden",
        "compare_success": "%1$d Blöcke verglichen",
        "compare_tooManyBlocks": "Zu viele Blöcke im angegebenen Bereich (%1$d > %2$d)",
        "corruptworld_description": "Korrumpiert die auf dem Server geladene Welt.",
        "corruptworld_success": "Welt erfolgreich korrumpiert.",
        "daylock_description": "Sperrt bzw. entsperrt den Tag/Nacht-Zyklus",
        "debug_description": "Startet oder beendet eine Debugging-Sitzung.",
        "debug_notStarted": "Kann Debug-Aufzeichnung nicht beenden, ohne sie gestartet zu haben!",
        "debug_start": "Starte Debug-Aufzeichung",
        "debug_stop": "Debug-Aufzeichnung nach %.2f Sekunden (%1$d Ticks) gestoppt",
        "defaultgamemode_description": "Legt den Standardspielmodus fest",
        "defaultgamemode_success": "Der Standard-Spielmodus der Welt ist nun %1$s",
        "deop_description": "Zieht den Operator-Status eines Spielers zurück.",
        "deop_failed": "Op-Entfernung nicht möglich (Berechtigungsstufe zu hoch): %s",
        "deop_success": "Operator-Status aufgehoben: %s",
        "deop_message": "Du bist kein Operator mehr.",
        "difficulty_description": "Legt den Schwierigkeitsgrad fest.",
        "difficulty_usage": "/difficulty <neuer Schwierigkeitsgrad>",
        "difficulty_success": "Schwierigkeitsgrad auf %1$s gesetzt",
        "downfall_success": "Niederschlag umgestellt",
        "effect_description": "Statuseffekte hinzufügen oder entfernen",
        "effect_failure_notActive": "%1$s liegt bei %2$s nicht vor und konnte daher nicht entfernt werden",
        "effect_failure_notActive_all": "Es konnten keine Effekte von %1$s entfernt werden, da keine vorhanden waren",
        "effect_failure_notAMob": "%1$s kann keine Effekte haben",
        "effect_notFound": "Es gibt keinen Kreatur-Effekt mit der ID %s",
        "effect_success": "%1$s * %2$d an %3$s für %4$d Sekunden gegeben",
        "effect_success_removed": "%1$s von %2$s entfernt",
        "effect_success_removed_all": "Alle Effekte von %1$s entfernt",
        "enchant_cantCombine": "%1$s ist nicht kombinierbar mit %2$s",
        "enchant_invalidLevel": "%1$s unterstützt Stufe %2$d nicht",
        "enchant_cantEnchant": "Die gewählte Verzauberung kann nicht zu diesem Gegenstand hinzugefügt werden: %1$s",
        "enchant_description": "Fügt eine Verzauberung zum ausgewählten Gegenstand eines Spielers hinzu.",
        "enchant_noItem": "Das Ziel hält keinen Gegenstand: %1$s",
        "enchant_notFound": "Es gibt keine Verzauberung mit der ID %1$d",
        "enchant_success": "Verzauberung %1$s erfolgreich",
        "entitydata_description": "Ändert das Daten-Tag einer Entität.",
        "entitydata_failed": "Der Daten-Tag hat sich nicht geändert: %1$s",
        "entitydata_noPlayers": "%1$s ist ein Spieler und kann nicht geändert werden",
        "entitydata_success": "Objektdaten aktualisiert auf: %1$s",
        "entitydata_tagError": "Analysieren von Daten-Tag fehlgeschlagen: %1$s",
        "execute_allInvocationsFailed": "Alle Aufrufe fehlgeschlagen: '%1$s'",
        "execute_failed": "Fehler beim Ausführen von '%1$s' als %2$s",
        "execute_description": "Führt einen Befehl im Auftrag von einer oder mehrerer Entitäten durch.",
        "fill_description": "Füllt alle Teile einer Region mit einem bestimmten Block.",
        "fill_failed": "Keine Blöcke platziert",
        "fill_outOfWorld": "Kann Block nicht außerhalb der geladenen Welt platzieren",
        "fill_success": "%1$d Blöcke platziert",
        "fill_tagError": "Analysieren von Daten-Tag fehlgeschlagen: %1$s",
        "fill_tooManyBlocks": "Zu viele Blöcke im angegebenen Bereich (%1$d > %2$d)",
        "fill_replace_auxvalue_invalid": "Ungültiger Datenwert zum Ersetzen von Block %1$s angegeben",
        "function_description": "Führt Befehle aus der entsprechenden Funktionsdatei aus.",
        "function_functionNameNotFound": "Die Funktion %1$s wurde nicht gefunden.",
        "function_invalidCharacters": "Die Funktion mit dem Namen \"%s\" ist ungültig. Das Zeichen \"%s\" ist in Funktionsnamen nicht erlaubt.",
        "function_noEngineVersionSpecified": "Die Funktion %s konnte nicht ausgeführt werden. Du musst eine min_engine_version in der Datei manifest.json des Verhaltenspakets angeben.",
        "function_success": "%1$d Funktionen wurden erfolgreich ausgeführt.",
        "gamemode_description": "Legt den Spielmodus eines Spielers fest.",
        "gamemode_success_other": "Der Spielmodus von %2$s wurde auf %1$s gesetzt",
        "gamemode_success_self": "Dein Spielmodus wurde auf %1$s gesetzt",
        "gamemode_fail_invalid": "Spielmodus '%1$s' ist ungültig",
        "gamerule_description": "Setzt einen Spielregelwert fest oder fragt ihn ab.",
        "gamerule_type_invalid": "Ungültiger Typ für Spielregel '%1$s' verwendet",
        "gamerule_type_nocheatsenabled": "Die Spielregel \"%1$s\" kann nur verwendet werden, wenn Cheats in dieser Welt aktiviert sind.",
        "gamerule_nopermission": "Nur Serverbesitzer können '%1$s' ändern",
        "gamerule_norule": "Keine Spielregel '%1$s' vorhanden",
        "gamerule_success": "Spielregel %1$s wurde auf %2$s aktualisiert",
        "generic_async_initiated": "Befehl '%1$s' gestartet (async. Schritt %2$d)",
        "generic_boolean_invalid": "'%1$s' ist nicht 'true' oder 'false'",
        "generic_chunk_notFound": "Angegebenen Chunk nicht gefunden",
        "generic_componentError": "Analysieren der Komponentenliste fehlgeschlagen",
        "generic_dimension_notFound": "Angegebene Dimension nicht gefunden",
        "generic_disabled": "Cheats sind in diesem Level nicht erlaubt.",
        "generic_disabled_templateLocked": "Im Moment sind die Einstellungen gesperrt. Entsperre die Vorlagen-Weltoptionen im Menü \"Spieleinstellungen\", um sie zu bearbeiten.",
        "generic_double_tooBig": "Die eingegebene Zahl (%.2f) ist zu groß, sie darf höchstens %.2f betragen",
        "generic_double_tooSmall": "Die eingegebene Zahl (%.2f) ist zu klein, sie muss mindestens %.2f betragen",
        "generic_duplicateType": "Typargumente duplizieren",
        "generic_duplicateSelectorArgument": "%s Selektorargumente duplizieren",
        "generic_encryption_badkey": "Falscher öffentlicher Schlüssel. Nach der PEM-Formatierung wird ein Schlüssel mit 120 Byte Länge erwartet.",
        "generic_encryption_badsalt": "Falscher Salt-Wert. Vor der Base64-Codierung muss der Wert 16 Byte lang sein.",
        "generic_encryption_required": "Verschlüsselte Sitzung erforderlich",
        "generic_entity_invalidType": "Objekttyp '%1$s' ist ungültig",
        "generic_entity_invalidUuid": "Die angegebene Objekt-UUID hat ein ungültiges Format",
        "generic_entity_notFound": "Dieses Objekt kann nicht gefunden werden",
        "generic_exception": "Bei der Ausführung dieses Befehls trat ein unbekannter Fehler auf",
        "generic_invalidAgentType": "Typ-Argument, das auf den reinen Agenten-Selektor angewendet wird",
        "generic_invalidcontext": "Ungültiger Kontext für den Befehlstyp angegeben",
        "generic_invalidDevice": "Dein eingegebener Befehl (%s) wird auf diesem Gerät nicht unterstützt",
        "generic_invalidPlayerType": "Typ-Argument auf Nur-Spieler-Selektor angewendet",
        "generic_invalidType": "Unbekanntes Typ-Argument",
        "generic_levelError": "Die Maximalstufe muss über der Mindeststufe liegen",
        "generic_malformed_body": "Körper fehlt oder ist deformiert.",
        "generic_malformed_type": "Ungültige Anfrage",
        "generic_notimplemented": "Nicht durchgeführt",
        "generic_num_invalid": "'%1$s' ist keine gültige Zahl",
        "generic_num_tooBig": "Die eingegebene Zahl (%1$d) ist zu groß. Sie darf höchstens %2$d betragen",
        "generic_num_tooSmall": "Die eingegebene Zahl (%1$d) ist zu klein. Sie muss mindestens %2$d betragen",
        "generic_parameter_invalid": "'%1$s' ist kein gültiger Parameter",
        "generic_permission_selector": "<unzureichende Berechtigungen für Selektor-Erweiterung>",
        "generic_player_notFound": "Dieser Spieler konnte nicht gefunden werden",
        "generic_protocol_mismatch": "Angegebene Protokollversion stimmt nicht mit der Protokollversion von Minecraft überein.",
        "generic_radiusError": "Der minimale Selektor-Radius muss kleiner als der maximale Radius sein",
        "generic_radiusNegative": "Der Radius kann nicht negativ sein",
        "generic_rotationError": "Rotation außerhalb des Bereichs",
        "generic_running": "Der Befehl läuft bereits",
        "generic_step_failed": "Befehlsschritt fehlgeschlagen",
        "generic_syntax": "Syntaxfehler: Unerwartetes \"%2$s\": at \"%1$s>>%2$s<<%3$s\"",
        "generic_noTargetMatch": "Keine Ziele entsprechen dem Selektor",
        "generic_targetNotPlayer": "Selektor muss vom Typ Spieler sein",
        "generic_tooManyNames": "Zu viele Argumente für den Zielnamen",
        "generic_tooManyTargets": "Zu viele Ziele entsprechen dem Selektor",
        "generic_too_many_requests": "Es wurden zu viele Befehle angefordert. Warte, bis einer ausgeführt ist.",
        "generic_unknown": "Unbekannter Befehl: %s. Prüfe, ob der Befehl vorhanden ist und du über die Berechtigung zur Nutzung verfügst.",
        "generic_usage": "Syntax: %1$s",
        "generic_usage_noparam": "Verwendung:",
        "generic_version_mismatch": "Die angeforderte Version existiert nicht für diesen Befehl.",
        "generic_version_missing": "Befehlsaufrufe, die nicht über den Chat laufen, müssen die Version des Befehls angeben",
        "getchunkdata_description": "Ruft die Pixel für einen bestimmten Chunk ab.",
        "getchunkdata_success": "Chunk-Daten empfangen",
        "getchunks_description": "Ruft eine Liste geladener Chunks ab.",
        "getchunks_success": "Chunk-Liste empfangen",
        "getlocalplayername_description": "Gibt den lokalen Spielernamen zurück.",
        "getspawnpoint_description": "Ruft die Spawnposition der angegebenen Spieler ab.",
        "gettopsolidblock_description": "Liefert die Position des obersten Blocks, der nicht aus Luft besteht, unterhalb der angegebenen Position.",
        "gettopsolidblock_notfound": "Keine festen Blöcke unter der angegebenen Position",
        "give_block_notFound": "Es gibt keinen Block mit dem Namen %1$d",
        "give_description": "Gibt einem Spieler einen Gegenstand.",
        "give_item_invalid": "Ungültige Befehlssyntax: %s mit diesem Datenwert nicht vorhanden",
        "give_item_notFound": "Es gibt keinen Gegenstand mit Namen %1$d",
        "give_map_invalidData": "Ungültige Kartendaten angegeben",
        "give_map_featureNotFound": "Erkundungskarte konnte nicht erstellt werden. Feature nicht in dieser Dimension gefunden.",
        "give_success": "%1$s * %2$d an %3$s gegeben",
        "give_successRecipient": "Du hast %1$s * %2$d erhalten",
        "give_tagError": "Analysieren von Daten-Tag fehlgeschlagen: %1$s",
        "help_description": "Stellt eine Hilfe/Liste der Befehle bereit.",
        "help_footer": "Tipp: Benutze die Tabulatortaste zur automatischen Vervollständigung von Befehlen oder ihrer Argumente",
        "help_header": "--- Hilfeseite %1$d von %2$d (/help <Seite>) ---",
        "help_command_aliases": "%s (sowie %s):",
        "immutableworld_description": "Legt den Unveränderlichkeitsstatus der Welt fest.",
        "immutableworld_info": "immutableworld = %s",
        "kick_description": "Wirft einen Spieler vom Server.",
        "kick_description_edu": "Entfernt einen Spieler aus dem Spiel.",
        "kick_not_found": "Spieler %1$s konnte nicht gefunden werden",
        "kick_not_yourself": "Du darfst dich nicht selbst aus dem Spiel entfernen.",
        "kick_success": "%1$s wurde aus dem Spiel geworfen",
        "kick_success_reason": "%1$s wurde aus dem Spiel geworfen: '%2$s'",
        "kick_success_reasonedu": "%1$s wurde aus dem Spiel entfernt: '%2$s'",
        "kick_no_host": "Der Host darf nicht aus dem Spiel geworfen werden.",
        "kick_no_teacher": "Lehrer dürfen nicht aus dem Spiel entfernt werden.",
        "kill_successful_edu": "%1$s entfernt",
        "kill_successful": "%1$s getötet",
        "kill_description_edu": "Entfernt Entitäten (Spieler, Kreaturen etc.)",
        "kill_description": "Killt Entitäten (Spieler, Kreaturen etc.)",
        "list_description": "Listet die Spieler auf dem Server auf.",
        "locate_description": "Zeigt die Koordinaten der nächsten Struktur eines bestimmten Typs an.",
        "locate_fail_noplayer": "Der Befehl kann nur von einem gültigen Spieler gegeben werden.",
        "locate_fail_nostructurefound": "Keine gültige Struktur in dieser Dimension gefunden",
        "locate_success": "Nächstgelegene/r/s %1$s ist bei Block %2$s, (y?), %3$s",
        "togglecontentlog_toggle": "Aktiviert/deaktiviert den \"content log\"-Befehl",
        "togglecontentlog_enabled": "\"Content Log\" aktiviert",
        "togglecontentlog_disabled": "\"Content Log\" deaktiviert",
        "me_description": "Zeigt eine Mitteilung über dich selbst an.",
        "message_display_incoming": "%1$s flüstert dir zu: %2$s",
        "message_display_outgoing": "Du flüsterst %1$s zu: %2$s",
        "message_sameTarget": "Du kannst keine Selbstgespräche führen!",
        "mixer_description": "Mixer-Interaktivitätssteuerung",
        "mixer_error_unknown": "Ein unbekannter Mixer-Fehler ist aufgetreten.",
        "mixer_error_notoken": "Du musst bei einem Microsoft-Konto angemeldet sein, um die Mixer-Interaktivität zu aktivieren.",
        "mixer_error_notsupported": "Das verwendete Gerät unterstützt die Mixer-Interaktivität nicht.",
        "mixer_interactive_error": "Ein Mixer-Fehler ist aufgetreten: %1$s",
        "mixer_scene_failed": "Es existiert keine Szene namens %1$s. Überprüfe, ob du den Szenennamen korrekt eingegeben hast.",
        "mixer_scene_success": "Szene geändert zu: %1$s",
        "mixer_start_success": "Mixer-Interaktivität startet: %1$s",
        "mixer_start_fail_invalidCode": "Projekt mit ID %1$s konnte nicht gefunden werden. Überprüfe, ob ID und Share-Code korrekt sind.",
        "mixer_stop_success": "Mixer-Interaktion angehalten.",
        "mixer_stop_fail": "Keine interaktive Sitzung zum Anhalten.",
        "mixer_status_notinitialized": "Interaktivität ist nicht initialisiert.",
        "mixer_status_enabled": "Interaktivität ist aktiviert.",
        "mixer_status_initializing": "Interaktivität ist initialisiert.",
        "mixer_status_pending": "Interaktivität ist anhängig.",
        "mixer_status_disabled": "Interaktivität ist deaktiviert.",
        "mixer_activatedbutton": "%1$s hat %2$s aktiviert.",
        "mobevent_description": "Regelt, welche Kreaturen-Ereignisse auftreten können.",
        "mobevent_eventsEnabledSetToTrue": "Kreaturen-Ereignisse sind jetzt aktiviert. Individuelle Ereignisse, die nicht aktiviert wurden, finden niemals statt.",
        "mobevent_eventsEnabledSetToFalse": "Kreaturen-Ereignisse sind jetzt deaktiviert. Individuelle Ereignisse finden nicht statt.",
        "mobevent_eventsEnabledIsTrue": "Kreaturen-Ereignisse sind aktiviert. Individuelle Ereignisse, die nicht aktiviert wurden, finden niemals statt.",
        "mobevent_eventsEnabledIsFalse": "Kreaturen-Ereignisse sind deaktiviert. Individuelle Ereignisse finden nicht statt.",
        "mobevent_eventSetToTrue": "Kreaturen-Ereignis %s (ID: %s) auf \"true\" gesetzt.",
        "mobevent_eventSetToTrueButEventsDisabled": "Kreaturen-Ereignis %s (ID: %s) auf \"true\" gesetzt, aber Kreaturen-Ereignisse sind deaktiviert.",
        "mobevent_eventSetToFalse": "Kreaturen-Ereignis %s (ID: %s) auf \"false\" gesetzt.",
        "mobevent_eventIsTrue": "Kreaturen-Ereignis %s (ID: %s) wurde auf \"true\" gesetzt.",
        "mobevent_eventIsTrueButEventsDisabled": "Kreaturen-Ereignis %s (ID: %s) wurde auf \"true\" gesetzt, aber Kreaturen-Ereignisse sind deaktiviert.",
        "mobevent_eventIsFalse": "Kreaturen-Ereignis %s (ID: %s) wurde auf \"false\" gesetzt.",
        "op_description": "Gewährt einem Spieler den Operator-Status.",
        "op_failed": "Operator-Status konnte nicht erteilt werden (bereits Operator oder höher): %s",
        "op_success": "Operator-Status erteilt: %s",
        "op_message": "Du wurdest zum Operator ernannt.",
        "origin_commandblock": "Befehlsblock",
        "origin_external": "Extern",
        "origin_devconsole": "DevConsole",
        "origin_script": "Text-Engine",
        "origin_server": "Server",
        "origin_teacher": "Lehrer",
        "ops_description": "Lädt und erteilt Operator-Rechte neu",
        "ops_reloaded": "Operator aus Datei neu geladen.",
        "ops_set_success": "Operator-Berechtigung für Spieler %s erfolgreich eingestellt.",
        "permissions_description": "Lädt neu und erteilt Rechte",
        "permissions_reloaded": "Rechte aus Datei neu geladen.",
        "permissions_set_failed": "Berechtigungsstufe %s für Spieler %s konnte nicht eingestellt werden.",
        "permissions_set_success": "Berechtigungsstufe %s für Spieler %s erfolgreich eingestellt.",
        "permissions_save_failed": "Berechtigungsstufe %s für Spieler %s konnte nicht gespeichert werden.",
        "permissions_save_success": "Berechtigungsstufe %s für Spieler %s erfolgreich gespeichert.",
        "spawnParticleEmitter_description": "Erzeugt einen Partikelemitter",
        "particle_description": "Erstellt Partikel.",
        "particle_notFound": "Unbekannter Effektname %1$s",
        "particle_success": "Effekt wird %2$d mal für %1$s abgespielt",
        "players_list": "Es sind %1$d/%2$d Spieler online:",
        "players_list_names": "%s",
        "playsound_description": "Gibt einen Sound wieder.",
        "playsound_playerTooFar": "Spieler %1$s ist zu weit entfernt, um das Geräusch zu hören",
        "playsound_success": "Geräusch '%1$s' für %2$s abgespielt",
        "position_description": "Schaltet die Koordinaten für Spieler ein/aus.",
        "publish_failed": "Es konnte kein LAN-Spiel erstellt werden",
        "publish_started": "LAN-Spiel unter Port %1$s erreichbar",
        "querytarget_description": "Ruf Transform, Name und ID einer Zielentität oder von Zielentitäten ab.",
        "querytarget_success": "Zieldaten: %1$s",
        "reload_description": "Lädt alle Funktionsdateien aus allen Verhaltenspaketen neu.",
        "reload_success": "Die bestehenden Funktionsdateien wurden neu geladen. Starte Minecraft neu, um NEUE Funktionen neu zu laden.",
        "replaceitem_description": "Ersetzt Gegenstände im Inventar.",
        "replaceitem_failed": "%s Slot %d konnte nicht mit %d * %s ersetzt werden",
        "replaceitem_keepFailed": "Es befindet sich bereits ein Gegenstand auf dem %s Slot %d.",
        "replaceitem_noContainer": "Der Block bei %s ist kein Container",
        "replaceitem_badSlotNumber": "Platz %d konnte nicht ausgetauscht werden. Wert muss zwischen %d und %d liegen.",
        "replaceitem_success": "%s Slot %d durch %d * %s ersetzt",
        "replaceitem_success_entity": "%s Slot %d von %s mit %d * %s ersetzt",
        "replaceitem_tagError": "Analysieren von Daten-Tag fehlgeschlagen: %1$s",
        "save_description": "Steuern oder prüfen, wie das Spiel Daten auf der Festplatte speichert.",
        "save_disabled": "Automatisches Speichern der Welt ausgeschaltet",
        "save_enabled": "Automatisches Speichern der Welt eingeschaltet",
        "save_failed": "Speichern fehlgeschlagen: %1$s",
        "save_start": "Wird gespeichert ...",
        "save_success": "Die Welt wurde gespeichert",
        "save_all_error": "Beim Pausieren des Levelspeichers ist ein Fehler aufgetreten.",
        "save_all_success": "Daten gespeichert. Dateien sind jetzt kopierbereit.",
        "save_off_alreadyOff": "Speichern ist bereits inaktiv.",
        "save_on_alreadyOn": "Speichern ist bereits aktiv.",
        "save_on_notDone": "Ein vorheriger Speichervorgang wurde nicht abgeschlossen.",
        "save_on_description": "Aktiviert die automatische Serverspeicherung.",
        "save_on_success": "Änderungen am Level werden fortgesetzt.",
        "save_state_description": "Prüft, ob der vorherige \"Alles speichern\"-Vorgang abgeschlossen ist, und führt die entsprechenden Dateien auf.",
        "say_description": "Sendet eine Chatnachricht an andere Spieler.",
        "scoreboard_description": "Verfolgt und zeigt Punkte für verschiedene Ziele an.",
        "scoreboard_allMatchesFailed": "Alle Suchergebnisse fehlgeschlagen",
        "scoreboard_noMultiWildcard": "Nur ein Platzhalter für Spieler erlaubt",
        "scoreboard_objectiveNotFound": "Es wurde kein Ziel mit dem Namen \"%1$s\" gefunden'",
        "scoreboard_objectiveReadOnly": "Das Ziel \"%1$s\" kann nur ausgelesen und nicht verändert werden",
        "scoreboard_objectives_add_alreadyExists": "Es ist bereits ein Ziel mit dem Namen \"%1$s\" vorhanden",
        "scoreboard_objectives_add_displayTooLong": "Der Anzeigename \"%1$s\" ist zu lang für ein Ziel. Er darf maximal %2$d Zeichen lang sein.",
        "scoreboard_objectives_add_success": "Neues Ziel \"%1$s\" wurde hinzugefügt",
        "scoreboard_objectives_add_tooLong": "Der Name \"%1$s\" ist zu lang für ein Ziel. Er darf maximal %2$d Zeichen lang sein",
        "scoreboard_objectives_add_wrongType": "Ungültiger Zielkriterientyp \"%1$s\"",
        "scoreboard_objectives_add_needName": "Ein Ziel braucht einen Namen.",
        "scoreboard_objectives_description": "Ändern von Anzeigetafelzielen.",
        "scoreboard_objectives_list_count": "Zeige %1$d Ziel(e) auf der Anzeigetafel an:",
        "scoreboard_objectives_list_empty": "Es sind keine Ziele auf der Anzeigetafel eingetragen",
        "scoreboard_objectives_list_entry": "- %1$s: wird als \"%2$s\" angezeigt und hat den Typ \"%3$s\"",
        "scoreboard_objectives_remove_success": "Ziel \"%1$s\" wurde entfernt",
        "scoreboard_objectives_setdisplay_invalidSlot": "Kein Anzeigeslot \"%1$s\" vorhanden",
        "scoreboard_objectives_setdisplay_successCleared": "Ziel-Anzeigeslot \"%1$s\" wurde gelöscht",
        "scoreboard_objectives_setdisplay_successSet": "Das angezeigte Ziel in Slot \"%1$s\" wurde auf \"%2$s\" gesetzt",
        "scoreboard_players_add_success": "Für %3$s %1$d zu [%2$s] hinzugefügt (neu: %4$d)",
        "scoreboard_players_add_multiple_success": "Für %3$d Entitäten %1$d zu [%2$s] hinzugefügt",
        "scoreboard_players_nameNotFound": "Es muss ein Spielername angegeben werden.",
        "scoreboard_players_enable_noTrigger": "Ziel %1$s ist kein Auslöser",
        "scoreboard_players_enable_success": "Auslöser %1$s für %2$s aktiviert",
        "scoreboard_players_list_count": "Zeige %1$d erfasste Spieler auf der Anzeigetafel an:",
        "scoreboard_players_list_empty": "Derzeit werden keine Spieler von der Anzeigetafel erfasst",
        "scoreboard_players_list_player_count": "Zeige %1$d erfasste(s) Ziel(e) für %2$s an:",
        "scoreboard_players_list_player_empty": "Für Spieler %1$s wurden keine Punkte erfasst",
        "scoreboard_players_list_player_entry": "- %2$s: %1$s (%3$s)",
        "scoreboard_players_operation_invalidOperation": "Ungültiger Vorgang %1$s",
        "scoreboard_players_operation_notFound": "Keine Punktzahl %1$s für %2$s gefunden",
        "scoreboard_players_operation_success": "[%1$s] für %2$d Entitäten aktualisiert",
        "scoreboard_players_offlinePlayerName": "Spieler offline",
        "scoreboard_players_random_invalidRange": "Min. %1$d ist nicht kleiner als Max. %2$d",
        "scoreboard_players_remove_success": "Für %3$s %1$d aus [%2$s] entfernt (neu: %4$d)",
        "scoreboard_players_remove_multiple_success": "Für %3$d Entitäten %1$d aus [%2$s] entfernt",
        "scoreboard_players_reset_success": "Punktestände von Spieler %1$s wurden zurückgesetzt",
        "scoreboard_players_resetscore_success": "Punktestand %1$s von Spieler %2$s wurde zurückgesetzt",
        "scoreboard_players_set_success": "[%1$s] für %2$s auf %3$d festgelegt",
        "scoreboard_players_set_multiple_success": "[%1$s] für %2$d Entitäten auf %3$d festgelegt",
        "scoreboard_players_set_tagError": "dataTag konnte aus folgendem Grund nicht analysiert werden: %1$s",
        "scoreboard_players_set_tagMismatch": "Die dataTag-Werte für %1$s stimmen nicht überein",
        "scoreboard_players_score_notFound": "Kein %1$s Ergebnis für %2$s gefunden",
        "scoreboard_players_test_failed": "Punktestand %1$d liegt NICHT zwischen %2$d und %3$d",
        "scoreboard_players_test_success": "Punktestand %1$d liegt zwischen %2$d und %3$d",
        "scoreboard_teamNotFound": "Es wurde kein Team mit dem Namen \"%1$s\" gefunden",
        "scoreboard_teams_add_alreadyExists": "Es ist bereits ein Team mit dem Namen \"%1$s\" vorhanden",
        "scoreboard_teams_add_displayTooLong": "Der Anzeigename \"%1$s\" ist zu lang für ein Team. Er darf maximal %2$d Zeichen lang sein",
        "scoreboard_teams_add_success": "Neues Team \"%1$s\" hinzugefügt",
        "scoreboard_teams_add_tooLong": "Der Name \"%1$s\" ist zu lang für ein Team. Er darf maximal %2$d Zeichen lang sein",
        "scoreboard_teams_empty_alreadyEmpty": "Team %1$s ist bereits leer. Es können keine Spieler entfernt werden",
        "scoreboard_teams_empty_success": "Alle %1$d Spieler wurden aus Team %2$s entfernt",
        "scoreboard_teams_join_failure": "%1$d Spieler konnte(n) dem Team %2$s nicht hinzugefügt werden: %3$s",
        "scoreboard_teams_join_success": "%1$d Spieler zum Team %2$s hinzugefügt: %3$s",
        "scoreboard_teams_leave_failure": "%1$d Spieler konnten nicht aus ihren Teams entfernt werden: %2$s",
        "scoreboard_teams_leave_noTeam": "Du bist in keinem Team",
        "scoreboard_teams_leave_success": "%1$d Spieler wurden aus ihren Teams entfernt: %2$s",
        "scoreboard_teams_list_count": "Zeige %1$d Teams auf der Anzeigetafel an:",
        "scoreboard_teams_list_empty": "Derzeit sind keine Teams auf der Anzeigetafel registriert",
        "scoreboard_teams_list_entry": "- %1$s: \"%2$s\" hat %3$s Spieler",
        "scoreboard_teams_list_player_count": "Zeige %1$d Spieler von Team %2$s an:",
        "scoreboard_teams_list_player_empty": "Team %1$s hat keine Spieler",
        "scoreboard_teams_list_player_entry": "- %2$s: %1$s (%3$s)",
        "scoreboard_teams_option_noValue": "Gültige Werte für Option %1$s: %2$s",
        "scoreboard_teams_option_success": "Option %1$s für Team %2$s auf %3$s gesetzt",
        "scoreboard_teams_remove_success": "Team %1$s wurde entfernt",
        "seed_success": "Seed: %1$s",
        "setblock_description": "Ändert einen Block in einen anderen Block.",
        "setblock_failed": "Kann Block nicht platzieren",
        "setblock_noChange": "Der Block konnte nicht platziert werden",
        "setblock_notFound": "Es gibt keinen Block mit der ID/dem Namen %1$s",
        "setblock_outOfWorld": "Kann Block nicht außerhalb der geladenen Welt platzieren",
        "setblock_success": "Block platziert",
        "setblock_tagError": "Analysieren von Daten-Tag fehlgeschlagen: %1$s",
        "setidletimeout_success": "Die Leerlaufzeit wurde auf %1$d Minuten gesetzt.",
        "setfixedinvslots_description": "Legt die Anzahl der festen Inventarslots für den Server fest.",
        "setfixedinvslots_success": "Anzahl der Spalten des festen Inventars auf %1$d festgelegt",
        "setfixedinvslot_description": "Teilt einem bestimmten Gegenstand einen festen Slot zu.",
        "setfixedinvslot_success": "Inventarspalte %1$d auf %2$s festgelegt",
        "globalpause_description": "Legt den Pausenmodus für das gesamte Spiel und alle Spieler fest oder ruft diesen ab.",
        "globalpause_success": "Pausemodus einstellen",
        "setmaxplayers_description": "Legt die maximale Anzahl der Spieler für diese Spielesession fest.",
        "setmaxplayers_success": "Max. Anzahl der Spieler auf %1$d festlegen.",
        "setmaxplayers_success_upperbound": "(Abhängig von der Anzahl maximal zulässiger Verbindungen)",
        "setmaxplayers_success_lowerbound": "(Abhängig von der aktuellen Spieleranzahl)",
        "setworldspawn_description": "Legt den Welt-Spawn fest.",
        "setworldspawn_success": "Der Welt-Spawnpunkt wurde auf (%1$d, %2$d, %3$d) gesetzt",
        "setworldspawn_wrongDimension": "Der Welt-Spawn kann in dieser Dimension nicht festgelegt werden",
        "spawnpoint_success_single": "Spawnpunkt von %1$s auf (%2$d, %3$d, %4$d) gesetzt",
        "spawnpoint_description": "Legt den Spawnpunkt eines Spielers fest.",
        "spawnpoint_success_multiple_specific": "Spawnpunkt für %1$s auf (%2$d, %3$d, %4$d) gesetzt",
        "spawnpoint_success_multiple_generic": "Spawnpunkt für %1$s gesetzt",
        "spawnpoint_wrongDimension": "Der Spawn-Punkt kann in dieser Dimension nicht festgelegt werden.",
        "spreadplayers_description": "Teleportiert Entitäten an zufällige Positionen.",
        "spreadplayers_failure_players": "%1$s Spieler konnten nicht um Position %2$s,%3$s verteilt werden (zu viele Spieler für den Bereich - versuche es mit höchstens %4$s)",
        "spreadplayers_failure_teams": "%1$s Teams konnten nicht um die Position %2$s,%3$s verteilt werden (zu viele Spieler für den Bereich - versuche es mit höchstens %4$s)",
        "spreadplayers_info_players": "(Die durchschnittliche Entfernung zwischen Spielern beträgt nach %2$s Durchläufen %1$s Blöcke)",
        "spreadplayers_info_teams": "(Die durchschnittliche Entfernung zwischen Teams beträgt nach %2$s Durchläufen %1$s Blöcke)",
        "spreadplayers_spreading_players": "%1$s Spieler innerhalb von %2$s Blöcken um %3$s,%4$s verteilen (min. %5$s Blöcke auseinander)",
        "spreadplayers_spreading_teams": "%1$s Teams innerhalb von %2$s Blöcken um %3$s,%4$s verteilen (min. %5$s Blöcke auseinander)",
        "spreadplayers_success_players": "%1$s Spieler wurden erfolgreich um %2$s,%3$s verteilt",
        "spreadplayers_success_teams": "%1$s Teams wurden erfolgreich um %2$s,%3$s verteilt",
        "stats_cleared": "Werte %1$s gelöscht",
        "stats_failed": "Ungültige Parameter",
        "stats_noCompatibleBlock": "Block bei %1$d, %2$d, %3$d kann Werte nicht nachverfolgen",
        "stats_success": "%1$s-Werte in %2$s auf %3$s gespeichert",
        "stop_description": "Stoppt den Server.",
        "stop_start": "Server wird gestoppt",
        "stopsound_description": "Beendet einen Sound.",
        "stopsound_success": "Sound %s für %s angehalten",
        "stopsound_success_all": "Alle Sounds für %s angehalten",
        "summon_description": "Beschwört eine Entität.",
        "summon_failed": "Kann Objekt nicht erzeugen",
        "summon_outOfWorld": "Kann Objekt nicht außerhalb der geladenen Welt erzeugen",
        "summon_success": "Objekt erfolgreich erzeugt",
        "summon_tagError": "Analysieren von Daten-Tag fehlgeschlagen: %1$s",
        "tag_description": "Verwaltet in Entitäten gespeicherte Tags.",
        "tag_add_failed": "Das Ziel hat diesen Tag schon oder hat zu viele Tags",
        "tag_add_success_single": "Tag '%1$s' zu %2$s hinzugefügt",
        "tag_add_success_multiple": "Tag '%1$s' zu %2$d Entitäten hinzugefügt",
        "tag_list_single_empty": "%s hat keine Tags",
        "tag_list_single_success": "%1$s hat %2$d Tags: %3$s",
        "tag_list_multiple_empty": "Keine der %d Entitäten hat Tags",
        "tag_list_multiple_success": "Die %1$d Entitäten haben insgesamt %2$d Tags: %3$s",
        "tag_remove_failed": "Das Ziel hat diesen Tag nicht",
        "tag_remove_success_single": "Tag '%1$s' von %2$s entfernt",
        "tag_remove_success_multiple": "Tag '%1$s' von %2$d Entitäten entfernt",
        "tell_description": "Sendet eine private Nachricht an einen oder mehrere Spieler.",
        "tellraw_description": "Übermittelt eine JSON-Nachricht an Spieler.",
        "tellraw_jsonException": "Ungültige JSON: %1$s",
        "tellraw_jsonStringException": "Ungültige JSON-Daten in Zeichenfolge.",
        "tellraw_error_noData": "Es wurden keine Daten angegeben.",
        "tellraw_error_notArray": "Rawtext-Objekte müssen ein Array enthalten. Beispiel: \"rawtext\":[{..}]",
        "tellraw_error_textNotString": "Textfelder in Rawtext müssen einen String enthalten. Beispiel: \"rawtext\":[{\"text\": \"text to display\"}]",
        "tellraw_error_translateNotString": "Übersetzungsfelder in Rawtext müssen einen Sprachcode enthalten. Beispiel: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
        "tellraw_error_withNotArrayOrRawText": "mit Feld in Rawtext muss ein Array oder ein anderes Rawtest-Objekt enthalten. Beispiel 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Beispiel 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
        "tellraw_error_itemIsNotObject": "Der JSON-Wert im Rawtext-Array war kein Objekt. Beispiel: \"rawtext\": [{ \"text\" : \"my text\" }]",
        "educlientinfo_description": "Tenant-ID und Host-Status erhalten. Für CM gedacht.",
        "testfor_description": "Zählt Entitäten (Spieler, Kreaturen, Gegenstände etc.), die den festgelegten Bedingungen entsprechen.",
        "testfor_failure": "%1$s entspricht nicht der erforderlichen Datenstruktur",
        "testfor_success": "%1$s gefunden",
        "testfor_tagError": "Analysieren von Daten-Tag fehlgeschlagen: %1$s",
        "testforblock_description": "Testet, ob sich ein bestimmter Block an einer bestimmten Position befindet.",
        "testforblock_failed_data": "Der Block bei %1$d, %2$d, %3$d entspricht nicht dem erwarteten Blockstatus.",
        "testforblock_failed_nbt": "Der Block bei %1$d, %2$d, %3$d hat nicht die erforderlichen NBT-Schlüssel.",
        "testforblock_failed_tile": "Der Block bei %1$d, %2$d, %3$d ist %4$s (erwartet: %5$s).",
        "testforblock_failed_tileEntity": "Der Block bei %1$d, %2$d, %3$d ist kein Blockobjekt und unterstützt keinen Tag-Vergleich.",
        "testforblock_outOfWorld": "Kann nicht auf Block außerhalb der geladenen Welt testen",
        "testforblock_success": "Block bei %1$d, %2$d, %3$d gefunden.",
        "testforblocks_description": "Testet, ob die Blöcke in zwei Regionen übereinstimmen.",
        "tickingarea_description": "Ticking-Bereiche hinzufügen, entfernen oder auflisten.",
        "tickingarea_inuse": "%1$d/%2$d Ticking-Bereiche in Verwendung.",
        "tickingarea_noneExist_currentDimension": "In der aktuellen Dimension sind keine Ticking-Bereiche vorhanden.",
        "tickingarea_add_bounds_success": "Ticking-Bereich von %1$d bis %2$d hinzugefügt.",
        "tickingarea_add_circle_success": "Ticking-Bereich mit Zentrum bei %1$d und einem Radius von %2$d Chunks hinzugefügt.",
        "tickingarea_add_failure": "Die maximale Anzahl an Ticking-Bereichen (%1$d) wurde erreicht. Es können keine weiteren Ticking-Bereiche erstellt werden.",
        "tickingarea_add_conflictingname": "Es ist bereits ein Ticking-Bereich mit dem Namen %1$s vorhanden.",
        "tickingarea_add_chunkfailure": "Der Ticking-Bereich umfasst mehr als %1$d Chunks. Er ist zu groß und kann nicht erstellt werden.",
        "tickingarea_add_radiusfailure": "Der Radius kann nicht größer als %1$d sein. Der Ticking-Bereich ist zu groß. Er kann nicht erstellt werden.",
        "tickingarea_remove_success": "Entfernte(r) Ticking-Bereich(e)",
        "tickingarea_remove_failure": "In der aktuellen Dimension ist kein Ticking-Bereich mit der Block-Position %1$d vorhanden.",
        "tickingarea_remove_byname_failure": "In der aktuellen Dimension ist kein Ticking-Bereich mit dem Namen %1$s vorhanden.",
        "tickingarea_remove_all_success": "Entfernte(r) Ticking-Bereich(e)",
        "tickingarea_remove_all_failure": "In der aktuellen Dimension sind keine Ticking-Bereiche vorhanden.",
        "tickingarea_list_chunks": "Chunks",
        "tickingarea_list_circle_radius": "Radius",
        "tickingarea_list_success_currentDimension": "Liste aller Ticking-Bereiche in der aktuellen Dimension",
        "tickingarea_list_success_allDimensions": "Liste aller Ticking-Bereiche in allen Dimensionen",
        "tickingarea_list_failure_allDimensions": "In keiner Dimension sind Ticking-Bereiche vorhanden.",
        "tickingarea_list_to": "bis",
        "tickingarea_list_type_circle": "Kreis",
        "time_added": "Zeit um %1$d erhöht",
        "time_description": "Ändert die Spielzeit der Welt oder fragt diese ab.",
        "time_disabled": "In diesem Level ist \"Immer Tag\" aktiviert.",
        "time_query_day": "Tag ist %d",
        "time_query_daytime": "Tagedauer ist %d",
        "time_query_gametime": "Spielzeit ist %d",
        "time_set": "Zeit auf %1$d gesetzt",
        "time_stop": "Zeit %1$s",
        "title_description": "Steuert Bildschirmtitel.",
        "title_success": "Title-Befehl erfolgreich ausgeführt",
        "titleraw_description": "Steuert Bildschirmtitel mit JSON-Nachrichten.",
        "toggledownfall_description": "Schaltet das Wetter um.",
        "tp_description": "Teleportiert Entitäten (Spieler, Kreaturen etc.)",
        "tp_notSameDimension": "Teleportieren nicht möglich, da die Spieler nicht in der gleichen Dimension sind",
        "tp_outOfWorld": "Kann Entitäten außerhalb der Welt nicht teleportieren",
        "tp_permission": "Du hast nicht die Berechtigung, diesen Slash-Befehl zu verwenden",
        "tp_safeTeleportFail": "Ein Teleportieren von %1$s nach %2$s war nicht möglich, da der Bereich nicht frei von Blöcken war.",
        "tp_far": "Ein Teleportieren von %1$s zum Entladungsbereich bei %2$s war nicht möglich.",
        "tp_success": "%1$s wurde zu %2$s teleportiert",
        "tp_successVictim": "Du wurdest zu %1$s teleportiert",
        "tp_success_coordinates": "%1$s wurde zu %2$s, %3$s ,%4$s teleportiert",
        "transferserver_description": "Transferiert einen Spieler auf einen anderen Server.",
        "transferserver_successful": "Transferierter Spieler",
        "transferserver_invalid_port": "Ungültiger Port (0-65535)",
        "trigger_description": "Legt einen zu aktivierenden Trigger fest",
        "trigger_disabled": "Auslöser %1$s ist nicht aktiviert",
        "trigger_invalidMode": "Ungültiger Auslösermodus %1$s",
        "trigger_invalidObjective": "Ungültiger Auslösername %1$s",
        "trigger_invalidPlayer": "Nur Spieler können den Befehl /trigger benutzen",
        "trigger_success": "Auslöser %1$s mit %2$s %3$s geändert",
        "unban_failed": "Spieler %1$s konnte nicht entsperrt werden",
        "unban_success": "Spieler %1$s wurde entsperrt",
        "unbanip_invalid": "Du hast eine ungültige IP-Adresse eingegeben",
        "unbanip_success": "IP-Adresse %1$s entsperrt",
        "validategamelighting_description": "Beleuchtung des Spiels für eine bestimmte Region überprüfen.",
        "validategamelighting_checkRegionTooBig": "Für Beleuchtung zu überprüfende Region ist zu groß! (%1$d > %2$d)",
        "validategamelighting_outOfWorld": "Beleuchtung außerhalb der Welt kann nicht überprüft werden.",
        "weather_clear": "Wechsle zu schönem Wetter",
        "weather_description": "Legt das Wetter fest.",
        "weather_disabled": "In diesem Level ist \"Wetterzyklus\" nicht aktiviert.",
        "weather_query": "Wetterstatus: %s",
        "weather_query_clear": "Klar",
        "weather_query_rain": "Regen",
        "weather_query_thunder": "Gewitter",
        "weather_rain": "Wechsle zu Regenwetter",
        "weather_thunder": "Wechsle zu Gewitter",
        "whitelist_add_failed": "%1$s konnte nicht zur Whitelist hinzugefügt werden",
        "whitelist_add_success": "%1$s wurde zur Whitelist hinzugefügt",
        "whitelist_description": "Verwaltet die Server-Whitelist.",
        "whitelist_disabled": "Whitelist wurde deaktiviert",
        "whitelist_enabled": "Die Whitelist wurde aktiviert",
        "whitelist_list": "Es sind %1$d (von %2$d) Spieler auf der Whitelist:",
        "whitelist_reloaded": "Whitelist aus Datei neu geladen.",
        "whitelist_remove_failed": "%1$s konnte nicht von der Whitelist entfernt werden",
        "whitelist_remove_success": "%1$s wurde von der Whitelist entfernt",
        "world_age_description": "Ändert die Spielzeit der Welt (Zeit seit Erstellung) oder fragt sie ab.",
        "world_age_added": "Der Spielzeit der Welt %1$d hinzugefügt.",
        "world_age_query": "Spielzeit der Welt: %d",
        "world_age_set": "Spielzeit der Welt auf %1$d setzen",
        "worldborder_center_success": "Zentrum der Weltbarriere auf %1$s,%2$s gesetzt",
        "worldborder_damage_amount_success": "Schaden außerhalb der Weltbarriere auf %1$s pro Block gesetzt (von %2$s pro Block)",
        "worldborder_damage_buffer_success": "Puffer für Schaden durch Weltbarriere auf %1$s Blöcke gesetzt (von %2$s Blöcken)",
        "worldborder_get_success": "Weltbarriere ist im Moment %1$s Blöcke breit",
        "worldborder_set_success": "Weltbarriere auf Breite von %1$s Blöcken gesetzt (von %2$s Blöcken)",
        "worldborder_setSlowly_grow_success": "Vergrößere Weltbarriere auf eine Breite von %1$s Blöcken (von ursprünglich %2$s Blöcken) in %3$s Sekunden",
        "worldborder_setSlowly_shrink_success": "Weltbarriere auf eine Breite von %1$s Blöcken (von ursprünglich %2$s Blöcken) in %3$s Sekunden verkleinert",
        "worldborder_warning_distance_success": "Warndistanz für Weltbarriere auf %1$s Blöcke gesetzt (von %2$s Blöcken)",
        "worldborder_warning_time_success": "Warnzeit der Weltbarriere auf %1$s Sekunden gesetzt (von %2$s Sekunden)",
        "worldbuilder_description": "World-Builder-Status auf \"Caller\" ändern",
        "worldbuilder_success": "Weltbarrierestatus auf %1$s aktualisiert",
        "wsserver_description": "Versucht über die angegebene URL auf den Websocket-Server zuzugreifen.",
        "wsserver_invalid_url": "Die angegebene Server-URL ist ungültig",
        "wsserver_request_existing": "Ein anderer Verbindungsversuch ist gerade aktiv",
        "wsserver_request_failed": "Verbindung zum Server fehlgeschlagen: %1$s",
        "wsserver_success": "Verbindung zum Server hergestellt: %1$s",
        "xp_description": "Gibt einem Spieler Erfahrung oder entfernt diese.",
        "xp_failure_widthdrawXp": "Spielern kann keine negative Anzahl an Erfahrungspunkten gegeben werden",
        "xp_success": "%1$d Erfahrung an %2$s gegeben",
        "xp_success_levels": "%1$d Stufen an %2$s gegeben",
        "xp_success_negative_levels": "%1$d Erfahrungslevel von %2$s entfernt"
    },
    item:{
        "air": [
            "Luft"
        ],
        "apple": [
            "Apfel"
        ],
        "golden_apple": [
            "Goldener Apfel"
        ],
        "appleenchanted": [
            "Verzauberter Apfel"
        ],
        "armor_stand": [
            "Rüstungsständer"
        ],
        "arrow": [
            "Pfeil"
        ],
        "tipped_arrow": [
            "Angespitzter Pfeil"
        ],
        "banner": [
            "Schwarzes Banner",
            "Schwarzes Banner",
            "Rotes Banner",
            "Grünes Banner",
            "Braunes Banner",
            "Blaues Banner",
            "Violettes Banner",
            "Türkises Banner",
            "Hellgraues Banner",
            "Graues Banner",
            "Rosa Banner",
            "Hellgrünes Banner",
            "Gelbes Banner",
            "Hellblaues Banner",
            "Magenta Banner",
            "Oranges Banner",
            "Weißes Banner"
        ],
        "bed": [
            "Bett",
            "Weißes Bett",
            "Oranges Bett",
            "Magenta Bett",
            "Hellblaues Bett",
            "Gelbes Bett",
            "Hellgrünes Bett",
            "Rosa Bett",
            "Graues Bett",
            "Hellgraues Bett",
            "Türkises Bett",
            "Violettes Bett",
            "Blaues Bett",
            "Braunes Bett",
            "Grünes Bett",
            "Rotes Bett",
            "Schwarzes Bett"
        ],
        "bell": [
            "Glocke"
        ],
        "steak": [
            "Steak"
        ],
        "beef": [
            "Rohes Rindfleisch"
        ],
        "beetroot": [
            "Rote Bete"
        ],
        "beetroot_soup": [
            "Rote-Bete-Suppe"
        ],
        "blaze_powder": [
            "Lohenstaub"
        ],
        "blaze_rod": [
            "Lohenrute"
        ],
        "boat": [
            "Eichenboot",
            "Eichenboot",
            "Fichtenboot",
            "Birkenboot",
            "Tropenbaumboot",
            "Akazienboot",
            "Schwarzeichenboot"
        ],
        "bone": [
            "Knochen"
        ],
        "book": [
            "Buch"
        ],
        "chainmail_boots": [
            "Kettenstiefel"
        ],
        "leather_boots": [
            "Lederstiefel"
        ],
        "diamond_boots": [
            "Diamantstiefel"
        ],
        "golden_boots": [
            "Goldstiefel"
        ],
        "iron_boots": [
            "Eisenstiefel"
        ],
        "bow": [
            "Bogen"
        ],
        "bowl": [
            "Schüssel"
        ],
        "bread": [
            "Brot"
        ],
        "brewing_stand": [
            "Braustand"
        ],
        "brick": [
            "Ziegel"
        ],
        "bucket": [
            "Eimer"
        ],
        "bucketLava": [
            "Lavaeimer"
        ],
        "bucketWater": [
            "Wassereimer"
        ],
        "bucketFish": [
            "Eimer voll Kabeljau"
        ],
        "bucketSalmon": [
            "Eimer voll Lachs"
        ],
        "bucketTropical": [
            "Eimer voll Tropenfisch"
        ],
        "bucketPuffer": [
            "Eimer voll Kugelfisch"
        ],
        "bucketCustomFish": [
            "Eimer voll"
        ],
        "tropicalColorWhite": [
            "Weiß"
        ],
        "tropicalColorOrange": [
            "Orange"
        ],
        "tropicalColorMagenta": [
            "Magenta"
        ],
        "tropicalColorSky": [
            "Himmel"
        ],
        "tropicalColorYellow": [
            "Gelb"
        ],
        "tropicalColorLime": [
            "Hellgrün"
        ],
        "tropicalColorRose": [
            "Rose"
        ],
        "tropicalColorGray": [
            "Grau"
        ],
        "tropicalColorSilver": [
            "Silber"
        ],
        "tropicalColorTeal": [
            "Aquamarin"
        ],
        "tropicalColorPlum": [
            "Pflaumenblau"
        ],
        "tropicalColorBlue": [
            "Blau"
        ],
        "tropicalColorBrown": [
            "Braun"
        ],
        "tropicalColorGreen": [
            "Grün"
        ],
        "tropicalColorRed": [
            "Rot"
        ],
        "tropicalBodyKobSingle": [
            "%1$s Kabeljau"
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
            "%1$s Spotty"
        ],
        "tropicalBodyFlopperSingle": [
            "%1$s Flopper"
        ],
        "tropicalBodyStripeySingle": [
            "%1$s Stripey"
        ],
        "tropicalBodyGlitterSingle": [
            "%1$s Glitter"
        ],
        "tropicalBodyBlockfishSingle": [
            "%1$s Blockfish"
        ],
        "tropicalBodyBettySingle": [
            "%1$s Betty"
        ],
        "tropicalBodyClayfishSingle": [
            "%1$s Clayfish"
        ],
        "tropicalBodyKobMulti": [
            "%1$s-%2$s Kabeljau"
        ],
        "tropicalBodySunstreakMulti": [
            "%1$s-%2$s SunStreak"
        ],
        "tropicalBodySnooperMulti": [
            "%1$s-%2$s Snooper"
        ],
        "tropicalBodyDasherMulti": [
            "%1$s-%2$s Flitzer"
        ],
        "tropicalBodyBrinelyMulti": [
            "%1$s-%2$s Brinely"
        ],
        "tropicalBodySpottyMulti": [
            "%1$s-%2$s Spotty"
        ],
        "tropicalBodyFlopperMulti": [
            "%1$s-%2$s Flopper"
        ],
        "tropicalBodyStripeyMulti": [
            "%1$s-%2$s Stripey"
        ],
        "tropicalBodyGlitterMulti": [
            "%1$s-%2$s Glitter"
        ],
        "tropicalBodyBlockfishMulti": [
            "%1$s-%2$s Blockfish"
        ],
        "tropicalBodyBettyMulti": [
            "%1$s-%2$s Betty"
        ],
        "tropicalBodyClayfishMulti": [
            "%1$s-%2$s Clayfish"
        ],
        "tropicalSchoolAnemone": [
            "Anemone"
        ],
        "tropicalSchoolBlackTang": [
            "Schwarzer Segelflossen-Doktorfisch"
        ],
        "tropicalSchoolBlueDory": [
            "Paletten-Doktorfisch"
        ],
        "tropicalSchoolButterflyFish": [
            "Falterfisch"
        ],
        "tropicalSchoolCichlid": [
            "Buntbarsch"
        ],
        "tropicalSchoolClownfish": [
            "Clownfisch"
        ],
        "tropicalSchoolCottonCandyBetta": [
            "Kampffisch"
        ],
        "tropicalSchoolDottyback": [
            "Zwergbarsch"
        ],
        "tropicalSchoolEmperorRedSnapper": [
            "Kaiserschnapper"
        ],
        "tropicalSchoolGoatfish": [
            "Meerbarbe"
        ],
        "tropicalSchoolMoorishIdol": [
            "Halfterfisch"
        ],
        "tropicalSchoolOrnateButterfly": [
            "Orangestreifen-Falterfisch"
        ],
        "tropicalSchoolParrotfish": [
            "Papageienfisch"
        ],
        "tropicalSchoolQueenAngelFish": [
            "Königin-Engelfisch"
        ],
        "tropicalSchoolRedCichlid": [
            "Roter Zebrafisch"
        ],
        "tropicalSchoolRedLippedBlenny": [
            "Rotlippenbandfisch"
        ],
        "tropicalSchoolRedSnapper": [
            "Roter Schnapper"
        ],
        "tropicalSchoolThreadfin": [
            "Fadenflosser"
        ],
        "tropicalSchoolTomatoClown": [
            "Weißbinden-Glühkohlen-Anemonenfisch"
        ],
        "tropicalSchoolTriggerfish": [
            "Drückerfisch"
        ],
        "tropicalSchoolYellowTang": [
            "Gelber Segelflossen-Doktorfisch"
        ],
        "tropicalSchoolYellowtailParrot": [
            "Gelbschwanz-Papageienfisch"
        ],
        "cake": [
            "Kuchen"
        ],
        "camera": [
            "Kamera"
        ],
        "golden_carrot": [
            "Goldene Karotte"
        ],
        "carrotOnAStick": [
            "Karottenangel"
        ],
        "warped_fungus_on_a_stick": [
            "Wirrpilz auf einem Stock"
        ],
        "carrot": [
            "Karotte"
        ],
        "cauldron": [
            "Kessel"
        ],
        "coal": [
            "Kohle",
            null,
            "Holzkohle"
        ],
        "chainmail_chestplate": [
            "Kettenbrustplatte"
        ],
        "leather_chestplate": [
            "Ledertunika"
        ],
        "diamond_chestplate": [
            "Diamantbrustplatte"
        ],
        "golden_chestplate": [
            "Goldbrustplatte"
        ],
        "iron_chestplate": [
            "Eisenbrustplatte"
        ],
        "chorus_fruit": [
            "Chorusfrucht"
        ],
        "chorus_fruit_popped": [
            "Geplatzte Chorusfrucht"
        ],
        "cooked_beef": [
            "Gebratenes Rindfleisch"
        ],
        "cooked_chicken": [
            "Gebratenes Hühnchen"
        ],
        "cooked_porkchop": [
            "Gebratenes Schweinekotelett"
        ],
        "chicken": [
            "Rohes Hühnchen"
        ],
        "clay_ball": [
            "Ton"
        ],
        "clock": [
            "Uhr"
        ],
        "comparator": [
            "Redstone-Vergleicher"
        ],
        "compass": [
            "Kompass"
        ],
        "lodestonecompass": [
            "Leitsteinkompass"
        ],
        "cookie": [
            "Keks"
        ],
        "crossbow": [
            "Armbrust"
        ],
        "diamond": [
            "Diamant"
        ],
        "repeater": [
            "Redstone-Verstärker"
        ],
        "acacia_door": [
            "Akazientür"
        ],
        "birch_door": [
            "Birkentür"
        ],
        "dark_oak_door": [
            "Schwarzeichentür"
        ],
        "iron_door": [
            "Eisentür"
        ],
        "jungle_door": [
            "Tropenbaumtür"
        ],
        "wooden_door": [
            "Eichentür"
        ],
        "spruce_door": [
            "Fichtentür"
        ],
        "crimson_door": [
            "Karmesintür"
        ],
        "warped_door": [
            "Wirrtür"
        ],
        "dragon_breath": [
            "Drachenatem"
        ],
        "dye": [
            "Tintenbeutel",
            "Tintenbeutel",
            "Roter Farbstoff",
            "Grüner Farbstoff",
            "Kakaobohnen",
            "Lapislazuli",
            "Violetter Farbstoff",
            "Türkiser Farbstoff",
            "Hellgrauer Farbstoff",
            "Grauer Farbstoff",
            "Rosa Farbstoff",
            "Hellgrüner Farbstoff",
            "Gelber Farbstoff",
            "Hellblauer Farbstoff",
            "Magenta Farbstoff",
            "Oranger Farbstoff",
            "Knochenmehl",
            "Schwarzer Farbstoff",
            "Brauner Farbstoff",
            "Blauer Farbstoff",
            "Weißer Farbstoff"
        ],
        "egg": [
            "Ei"
        ],
        "elytra": [
            "Elytren"
        ],
        "emerald": [
            "Smaragd"
        ],
        "emptyMap": [
            "Leere Karte"
        ],
        "emptyLocatorMap": [
            "Leere Locator-Karte"
        ],
        "emptyPotion": [
            "Wasserflasche"
        ],
        "enchanted_book": [
            "Zauberbuch"
        ],
        "end_crystal": [
            "Enderkristall"
        ],
        "end_rod": [
            "Endstab"
        ],
        "ender_eye": [
            "Enderauge"
        ],
        "ender_pearl": [
            "Enderperle"
        ],
        "experience_bottle": [
            "Erfahrungsfläschchen"
        ],
        "feather": [
            "Feder"
        ],
        "fermented_spider_eye": [
            "Fermentiertes Spinnenauge"
        ],
        "fireball": [
            "Feuerkugel"
        ],
        "fireworks": [
            "Feuerwerksrakete"
        ],
        "fireworksCharge": [
            "Feuerwerksstern"
        ],
        "clownfish": [
            "Tropenfisch"
        ],
        "cooked_fish": [
            "Gekochter Kabeljau"
        ],
        "fish": [
            "Roher Kabeljau"
        ],
        "pufferfish": [
            "Kugelfisch"
        ],
        "cooked_salmon": [
            "Gebratener Lachs"
        ],
        "salmon": [
            "Roher Lachs"
        ],
        "fishing_rod": [
            "Angel"
        ],
        "flint": [
            "Feuerstein"
        ],
        "flint_and_steel": [
            "Feuerzeug"
        ],
        "flower_pot": [
            "Blumentopf"
        ],
        "frame": [
            "Gegenstandsrahmen"
        ],
        "ghast_tear": [
            "Ghastträne"
        ],
        "glass_bottle": [
            "Glasflasche"
        ],
        "gold_nugget": [
            "Goldklumpen"
        ],
        "iron_nugget": [
            "Eisenklumpen"
        ],
        "diamond_axe": [
            "Diamantaxt"
        ],
        "golden_axe": [
            "Goldaxt"
        ],
        "iron_axe": [
            "Eisenaxt"
        ],
        "stone_axe": [
            "Steinaxt"
        ],
        "wooden_axe": [
            "Holzaxt"
        ],
        "chainmail_helmet": [
            "Kettenhaube"
        ],
        "leather_helmet": [
            "Lederkappe"
        ],
        "diamond_helmet": [
            "Diamanthelm"
        ],
        "golden_helmet": [
            "Goldhelm"
        ],
        "iron_helmet": [
            "Eisenhelm"
        ],
        "diamond_hoe": [
            "Diamanthacke"
        ],
        "golden_hoe": [
            "Goldhacke"
        ],
        "iron_hoe": [
            "Eisenhacke"
        ],
        "stone_hoe": [
            "Steinhacke"
        ],
        "wooden_hoe": [
            "Holzhacke"
        ],
        "honey_bottle": [
            "Honigflasche"
        ],
        "honeycomb": [
            "Honigwabe"
        ],
        "horsearmordiamond": [
            "Diamant-Pferderüstung"
        ],
        "horsearmorgold": [
            "Gold-Pferderüstung"
        ],
        "horsearmoriron": [
            "Eisen-Pferderüstung"
        ],
        "horsearmorleather": [
            "Leder-Pferderüstung"
        ],
        "gold_ingot": [
            "Goldbarren"
        ],
        "iron_ingot": [
            "Eisenbarren"
        ],
        "netherite_ingot": [
            "Netherit-Barren"
        ],
        "netherite_scrap": [
            "Netherit-Schrott"
        ],
        "netherite_sword": [
            "Netherit-Schwert"
        ],
        "netherite_pickaxe": [
            "Netherit-Spitzhacke"
        ],
        "netherite_axe": [
            "Netherit-Axt"
        ],
        "netherite_shovel": [
            "Netherit-Schaufel"
        ],
        "netherite_hoe": [
            "Netherit-Hacke"
        ],
        "netherite_boots": [
            "Netherit-Stiefel"
        ],
        "netherite_leggings": [
            "Netherit-Hose"
        ],
        "netherite_chestplate": [
            "Netherit-Brustplatte"
        ],
        "netherite_helmet": [
            "Netherit-Helm"
        ],
        "lead": [
            "Leine"
        ],
        "leather": [
            "Leder"
        ],
        "leaves": [
            "Blätter",
            "Eichenblätter",
            "Fichtennadeln",
            "Birkenblätter",
            "Tropenbaumblätter",
            "Akazienblätter",
            "Schwarzeichenblätter"
        ],
        "chainmail_leggings": [
            "Kettenhose"
        ],
        "leather_leggings": [
            "Lederhose"
        ],
        "diamond_leggings": [
            "Diamanthose"
        ],
        "golden_leggings": [
            "Goldhose"
        ],
        "iron_leggings": [
            "Eisenhose"
        ],
        "nautilus_shell": [
            "Nautilusmuschel"
        ],
        "heart_of_the_sea": [
            "Herz des Meeres"
        ],
        "magma_cream": [
            "Magmacreme"
        ],
        "map": [
            "Karte"
        ],
        "melon": [
            "Melone"
        ],
        "milk": [
            "Milch"
        ],
        "minecart": [
            "Lore"
        ],
        "chest_minecart": [
            "Güterlore"
        ],
        "command_block_minecart": [
            "Lore mit Befehlsblock"
        ],
        "minecartFurnace": [
            "Angetriebene Lore"
        ],
        "hopper_minecart": [
            "Trichterlore"
        ],
        "tnt_minecart": [
            "TNT-Lore"
        ],
        "trident": [
            "Dreizack"
        ],
        "mushroom_stew": [
            "Pilzsuppe"
        ],
        "muttoncooked": [
            "Gebratenes Hammelfleisch"
        ],
        "muttonraw": [
            "Rohes Hammelfleisch"
        ],
        "name_tag": [
            "Namensschild"
        ],
        "netherbrick": [
            "Netherziegel"
        ],
        "quartz": [
            "Netherquarz"
        ],
        "nether_wart": [
            "Netherwarze"
        ],
        "netherStar": [
            "Netherstern"
        ],
        "painting": [
            "Gemälde"
        ],
        "paper": [
            "Papier"
        ],
        "diamond_pickaxe": [
            "Diamantspitzhacke"
        ],
        "golden_pickaxe": [
            "Goldspitzhacke"
        ],
        "iron_pickaxe": [
            "Eisenspitzhacke"
        ],
        "stone_pickaxe": [
            "Steinspitzhacke"
        ],
        "wooden_pickaxe": [
            "Holzspitzhacke"
        ],
        "porkchop_cooked": [
            "Gebratenes Schweinekotelett"
        ],
        "porkchop": [
            "Rohes Schweinekotelett"
        ],
        "portfolio": [
            "Portfolio"
        ],
        "potato": [
            "Kartoffel"
        ],
        "baked_potato": [
            "Ofenkartoffel"
        ],
        "poisonous_potato": [
            "Giftige Kartoffel"
        ],
        "potion": [
            "Trank"
        ],
        "prismarine_crystals": [
            "Prismarinkristalle"
        ],
        "prismarine_shard": [
            "Prismarinscherbe"
        ],
        "pumpkin_pie": [
            "Kürbiskuchen"
        ],
        "cooked_rabbit": [
            "Gebratenes Kaninchen"
        ],
        "rabbit_foot": [
            "Hasenpfote"
        ],
        "rabbit_hide": [
            "Kaninchenfell"
        ],
        "rabbit": [
            "Rohes Kaninchen"
        ],
        "rabbit_stew": [
            "Kaninchenragout"
        ],
        "record": [
            "Schallplatte"
        ],
        "redstone": [
            "Redstone"
        ],
        "reeds": [
            "Zuckerrohr"
        ],
        "kelp": [
            "Seetang"
        ],
        "dried_kelp": [
            "Getrockneter Seetang"
        ],
        "rotten_flesh": [
            "Verrottetes Fleisch"
        ],
        "ruby": [
            "Rubin"
        ],
        "saddle": [
            "Sattel"
        ],
        "wheat_seeds": [
            "Samen"
        ],
        "beetroot_seeds": [
            "Rote-Bete-Samen"
        ],
        "melon_seeds": [
            "Melonenkerne"
        ],
        "pumpkin_seeds": [
            "Kürbiskerne"
        ],
        "shears": [
            "Schere"
        ],
        "diamond_shovel": [
            "Diamantschaufel"
        ],
        "golden_shovel": [
            "Goldschaufel"
        ],
        "iron_shovel": [
            "Eisenschaufel"
        ],
        "stone_shovel": [
            "Steinschaufel"
        ],
        "wooden_shovel": [
            "Holzschaufel"
        ],
        "sign": [
            "Eichenschild"
        ],
        "spruce_sign": [
            "Fichtenschild"
        ],
        "birch_sign": [
            "Birkenschild"
        ],
        "jungle_sign": [
            "Tropenholzschild"
        ],
        "acacia_sign": [
            "Akazienschild"
        ],
        "darkoak_sign": [
            "Dunkeleichenschild"
        ],
        "crimson_sign": [
            "Karmesinschild"
        ],
        "warped_sign": [
            "Wirrschild"
        ],
        "skull": [
            "Skelettschädel",
            "Skelettschädel",
            "Witherskelettschädel",
            "Zombiekopf",
            "Kopf",
            "Creeper-Kopf",
            "Enderdrachenkopf"
        ],
        "slime_ball": [
            "Schleimball"
        ],
        "snowball": [
            "Schneeball"
        ],
        "speckled_melon": [
            "Funkelnde Melone"
        ],
        "spider_eye": [
            "Spinnenauge"
        ],
        "stick": [
            "Stock"
        ],
        "string": [
            "Faden"
        ],
        "sugar": [
            "Zucker"
        ],
        "gunpowder": [
            "Schießpulver"
        ],
        "diamond_sword": [
            "Diamantschwert"
        ],
        "golden_sword": [
            "Goldschwert"
        ],
        "iron_sword": [
            "Eisenschwert"
        ],
        "stone_sword": [
            "Steinschwert"
        ],
        "wooden_sword": [
            "Holzschwert"
        ],
        "wheat": [
            "Weizen"
        ],
        "writable_book": [
            "Buch und Feder"
        ],
        "written_book": [
            "Beschriebenes Buch"
        ],
        "glowstone_dust": [
            "Glowstone-Staub"
        ],
        "shield": [
            "Schild"
        ],
        "shulker_shell": [
            "Shulkerhülle"
        ],
        "totem": [
            "Totem der Unsterblichkeit"
        ],
        "turtle_helmet": [
            "Schildkrötenpanzer"
        ],
        "turtle_shell_piece": [
            "Hornschuppe"
        ],
        "phantom_membrane": [
            "Phantommembrane"
        ],
        "sweet_berries": [
            "Süße Beeren"
        ],
        "suspicious_stew": [
            "Verdächtige Suppe"
        ],
        "banner_pattern": [
            "Bannermuster"
        ],
        "acaciaFence": [
            "Akazienzaun"
        ],
        "acacia_fence_gate": [
            "Akazienzauntor"
        ],
        "activator_rail": [
            "Aktivierungsschiene"
        ],
        "allow": [
            "Erlauben"
        ],
        "deny": [
            "Verweigern"
        ],
        "border_block": [
            "Grenze"
        ],
        "anvil": [
            "Amboss",
            "Amboss",
            null,
            null,
            null,
            "Leicht beschädigter Amboss",
            null,
            null,
            null,
            "Stark beschädigter Amboss"
        ],
        "barrier": [
            "Barriere"
        ],
        "beacon": [
            "Leuchtfeuer"
        ],
        "beehive": [
            "Bienenstock"
        ],
        "bee_nest": [
            "Bienennest"
        ],
        "target": [
            "Ziel"
        ],
        "bedrock": [
            "Grundgestein"
        ],
        "conduit": [
            "Aquisator"
        ],
        "invisibleBedrock": [
            "Unsichtbares Grundgestein"
        ],
        "birchFence": [
            "Birkenzaun"
        ],
        "birch_fence_gate": [
            "Birkenzauntor"
        ],
        "blast_furnace": [
            "Schmelzofen"
        ],
        "bone_block": [
            "Knochenblock"
        ],
        "coal_block": [
            "Kohleblock"
        ],
        "diamond_block": [
            "Diamantblock"
        ],
        "emerald_block": [
            "Smaragdblock"
        ],
        "gold_block": [
            "Goldblock"
        ],
        "iron_block": [
            "Eisenblock"
        ],
        "lapis_block": [
            "Lapislazuliblock"
        ],
        "redstone_block": [
            "Redstone-Block"
        ],
        "bookshelf": [
            "Bücherregal"
        ],
        "brick_block": [
            "Ziegelblock"
        ],
        "brown_mushroom": [
            "Brauner Pilz"
        ],
        "wooden_button": [
            "Eichenschalter"
        ],
        "acacia_button": [
            "Akazienschalter"
        ],
        "birch_button": [
            "Birkenschalter"
        ],
        "dark_oak_button": [
            "Schwarzeichenschalter"
        ],
        "jungle_button": [
            "Tropenbaumschalter"
        ],
        "spruce_button": [
            "Fichtenschalter"
        ],
        "stone_button": [
            "Steinschalter"
        ],
        "cactus": [
            "Kaktus"
        ],
        "dried_kelp_block": [
            "Getrockneter Seetangblock"
        ],
        "carved_pumpkin": [
            "Geschnitzter Kürbis"
        ],
        "chest": [
            "Truhe"
        ],
        "ender_chest": [
            "Endertruhe"
        ],
        "jigsaw": [
            "Verbundblock"
        ],
        "honey_block": [
            "Honigblock"
        ],
        "honeycomb_block": [
            "Honigwabenblock"
        ],
        "lodestone": [
            "Magnet"
        ],
        "nether_sprouts": [
            "Netherspross"
        ],
        "crimson_stem": [
            "Karmesinstamm"
        ],
        "warped_stem": [
            "Wirrstamm"
        ],
        "stripped_crimson_stem": [
            "Abgezogener Karmesinstamm"
        ],
        "stripped_warped_stem": [
            "Abgezogener Wirrstamm"
        ],
        "crimson_hyphae": [
            "Karmesinhyphe"
        ],
        "warped_hyphae": [
            "Wirrhyphe"
        ],
        "stripped_crimson_hyphae": [
            "Gestreifte Karmesinhyphe"
        ],
        "stripped_warped_hyphae": [
            "Gestreifte Wirrhyphe"
        ],
        "crimson_planks": [
            "Karmesinbretter"
        ],
        "warped_planks": [
            "Wirrbretter"
        ],
        "crimson_trapdoor": [
            "Karmesinfalltür"
        ],
        "warped_trapdoor": [
            "Wirrfalltür"
        ],
        "crimson_standing_sign": [
            "Karmesinschild"
        ],
        "warped_standing_sign": [
            "Wirrschild"
        ],
        "crimson_wall_sign": [
            "Karmesinschild"
        ],
        "warped_wall_sign": [
            "Wirrschild"
        ],
        "crimson_stairs": [
            "Karmesintreppe"
        ],
        "warped_stairs": [
            "Wirrtreppe"
        ],
        "crimson_fence": [
            "Karmesinzaun"
        ],
        "warped_fence": [
            "Wirrzaun"
        ],
        "crimson_fence_gate": [
            "Karmesinzauntor"
        ],
        "warped_fence_gate": [
            "Wirrzauntor"
        ],
        "crimson_button": [
            "Karmesinknopf"
        ],
        "warped_button": [
            "Wirrknopf"
        ],
        "crimson_pressure_plate": [
            "Karmesindruckplatte"
        ],
        "warped_pressure_plate": [
            "Wirrdruckplatte"
        ],
        "crimson_slab": [
            "Karmesinstufe"
        ],
        "warped_slab": [
            "Wirrstufe"
        ],
        "crimson_double_slab": [
            "Karmesinstufe"
        ],
        "warped_double_slab": [
            "Wirrstufe"
        ],
        "shroomlight": [
            "Pilzlicht"
        ],
        "crimson_nylium": [
            "Karmesinnetzel"
        ],
        "warped_nylium": [
            "Wirrnetzel"
        ],
        "basalt": [
            "Basalt"
        ],
        "polished_basalt": [
            "Polierter Basalt"
        ],
        "blackstone": [
            "Schwarzstein"
        ],
        "polished_blackstone_bricks": [
            "Polierte Schwarzsteinziegel"
        ],
        "cracked_polished_blackstone_bricks": [
            "Rissige polierte Schwarzsteinziegel"
        ],
        "polished_blackstone_brick_stairs": [
            "Polierte Schwarzsteinziegeltreppe"
        ],
        "blackstone_stairs": [
            "Schwarzsteintreppe"
        ],
        "blackstone_wall": [
            "Schwarzsteinmauer"
        ],
        "polished_blackstone_brick_wall": [
            "Polierte Schwarzsteinziegelmauer"
        ],
        "chiseled_polished_blackstone": [
            "Gemeißelter polierter Schwarzstein"
        ],
        "gilded_blackstone": [
            "Vergoldeter Schwarzstein"
        ],
        "blackstone_slab": [
            "Schwarzsteinstufe"
        ],
        "polished_blackstone_brick_slab": [
            "Polierte Schwarzsteinziegelstufen"
        ],
        "chain": [
            "Verketten"
        ],
        "soul_soil": [
            "Seelenerde"
        ],
        "soul_fire": [
            "Seelenfeuer"
        ],
        "polished_blackstone": [
            "Polierter Schwarzstein"
        ],
        "polished_blackstone_stairs": [
            "Polierte Schwarzsteintreppe"
        ],
        "polished_blackstone_slab": [
            "Polierte Schwarzsteinstufe"
        ],
        "polished_blackstone_pressure_plate": [
            "Polierte Schwarzsteindruckplatte"
        ],
        "polished_blackstone_button": [
            "Polierter Schwarzsteinknopf"
        ],
        "polished_blackstone_wall": [
            "Polierte Schwarzsteinmauer"
        ],
        "soul_campfire": [
            "Seelenlagerfeuer"
        ],
        "chiseled_nether_bricks": [
            "Gemeißelte Netherziegel"
        ],
        "cracked_nether_bricks": [
            "Rissige Netherziegel"
        ],
        "quartz_bricks": [
            "Quarzziegel"
        ],
        "trapped_chest": [
            "Redstone-Truhe"
        ],
        "shulkerBoxWhite": [
            "Weiße Shulkerkiste"
        ],
        "shulkerBoxOrange": [
            "Orange Shulkerkiste"
        ],
        "shulkerBoxMagenta": [
            "Magenta Shulkerkiste"
        ],
        "shulkerBoxLightBlue": [
            "Hellblaue Shulkerkiste"
        ],
        "shulkerBoxYellow": [
            "Gelbe Shulkerkiste"
        ],
        "shulkerBoxLime": [
            "Hellgrüne Shulkerkiste"
        ],
        "shulkerBoxPink": [
            "Rosa Shulkerkiste"
        ],
        "shulkerBoxGray": [
            "Graue Shulkerkiste"
        ],
        "shulkerBoxSilver": [
            "Hellgraue Shulkerkiste"
        ],
        "shulkerBoxCyan": [
            "Türkise Shulkerkiste"
        ],
        "shulkerBoxPurple": [
            "Violette Shulkerkiste"
        ],
        "shulkerBoxBlue": [
            "Blaue Shulkerkiste"
        ],
        "shulkerBoxBrown": [
            "Braune Shulkerkiste"
        ],
        "shulkerBoxGreen": [
            "Grüne Shulkerkiste"
        ],
        "shulkerBoxRed": [
            "Rote Shulkerkiste"
        ],
        "shulkerBoxBlack": [
            "Schwarze Shulkerkiste"
        ],
        "shulkerBox": [
            "Shulkerkiste"
        ],
        "chorus_flower": [
            "Chorusblüte"
        ],
        "chorus_plant": [
            "Choruspflanze"
        ],
        "stained_glass": [
            "Weißes Glas",
            "Weißes Glas",
            "Oranges Glas",
            "Magenta Glas",
            "Hellblaues Glas",
            "Gelbes Glas",
            "Hellgrünes Glas",
            "Rosa Glas",
            "Graues Glas",
            "Hellgraues Glas",
            "Türkises Glas",
            "Violettes Glas",
            "Blaues Glas",
            "Braunes Glas",
            "Grünes Glas",
            "Rotes Glas",
            "Schwarzes Glas"
        ],
        "stained_glass_pane": [
            "Weiße Glasscheibe",
            "Weiße Glasscheibe",
            "Orange Glasscheibe",
            "Magenta Glasscheibe",
            "Hellblaue Glasscheibe",
            "Gelbe Glasscheibe",
            "Hellgrüne Glasscheibe",
            "Rosa Glasscheibe",
            "Graue Glasscheibe",
            "Hellgraue Glasscheibe",
            "Türkise Glasscheibe",
            "Violette Glasscheibe",
            "Blaue Glasscheibe",
            "Braune Glasscheibe",
            "Grüne Glasscheibe",
            "Rote Glasscheibe",
            "Schwarze Glasscheibe"
        ],
        "clay": [
            "Tonblock"
        ],
        "hardened_clay": [
            "Keramik"
        ],
        "stained_hardened_clay": [
            "Keramik",
            "Weiße Keramik",
            "Orange Keramik",
            "Magenta Keramik",
            "Hellblaue Keramik",
            "Gelbe Keramik",
            "Hellgrüne Keramik",
            "Rosa Keramik",
            "Graue Keramik",
            "Hellgraue Keramik",
            "Türkise Keramik",
            "Violette Keramik",
            "Blaue Keramik",
            "Braune Keramik",
            "Grüne Keramik",
            "Rote Keramik",
            "Schwarze Keramik"
        ],
        "structure_block": [
            "Konstruktionsblock"
        ],
        "structure_void": [
            "Konstruktionsleere"
        ],
        "wool": [
            "Wolle",
            "Weiße Wolle",
            "Orange Wolle",
            "Magenta Wolle",
            "Hellblaue Wolle",
            "Gelbe Wolle",
            "Hellgrüne Wolle",
            "Rosa Wolle",
            "Graue Wolle",
            "Hellgraue Wolle",
            "Türkise Wolle",
            "Violette Wolle",
            "Blaue Wolle",
            "Braune Wolle",
            "Grüne Wolle",
            "Rote Wolle",
            "Schwarze Wolle"
        ],
        "cobblestone_wall": [
            "Bruchsteinmauer",
            "Bruchsteinmauer",
            "Bemooste Bruchsteinmauer",
            "Granitmauer",
            "Dioritmauer",
            "Andesitmauer",
            "Sandsteinmauer",
            "Ziegelmauer",
            "Steinziegelmauer",
            "Bemooste Steinziegelmauer",
            "Endsteinziegelmauer",
            "Netherziegelmauer",
            "Prismarinmauer",
            "Rote Sandsteinmauer",
            "Rote Netherziegelmauer"
        ],
        "cocoa": [
            "Kakao"
        ],
        "command_block": [
            "Befehlsblock"
        ],
        "composter": [
            "Kompostierer"
        ],
        "light_block": [
            "Heller Block"
        ],
        "repeating_command_block": [
            "Wiederholender Befehlsblock"
        ],
        "chain_command_block": [
            "Befehlsblock verketten"
        ],
        "darkOakFence": [
            "Schwarzeichenzaun"
        ],
        "dark_oak_fence_gate": [
            "Schwarzeichenzauntor"
        ],
        "daylight_detector": [
            "Tageslichtsensor"
        ],
        "deadbush": [
            "Toter Strauch"
        ],
        "detector_rail": [
            "Detektor-Schiene"
        ],
        "dirt": [
            "Erde",
            "Erde",
            "Grobe Erde"
        ],
        "podzol": [
            "Podsol"
        ],
        "purpur_block": [
            "Purpurblock",
            "Purpurblock",
            "Gemeißelter Purpurblock",
            "Purpursäule"
        ],
        "dispenser": [
            "Spender"
        ],
        "doorWood": [
            "Holztür"
        ],
        "double_plant": [
            "Pflanze",
            "Sonnenblume",
            "Flieder",
            "Doppelt hohes Gras",
            "Großer Farn",
            "Rosenstrauch",
            "Pfingstrose"
        ],
        "dragon_egg": [
            "Drachenei"
        ],
        "dropper": [
            "Auswurfblock"
        ],
        "enchanting_table": [
            "Zaubertisch"
        ],
        "enderChest": [
            "Endertruhe"
        ],
        "end_portal_frame": [
            "Endportal"
        ],
        "farmland": [
            "Ackerland"
        ],
        "fletching_table": [
            "Bognertisch"
        ],
        "fence": [
            "Eichenzaun"
        ],
        "fence_gate": [
            "Eichenzauntor"
        ],
        "iron_bars": [
            "Eisengitter"
        ],
        "fire": [
            "Feuer"
        ],
        "yellow_flower": [
            "Blume",
            "Löwenzahn"
        ],
        "red_flower": [
            "Blume",
            "Mohn",
            "Blaue Orchidee",
            "Sternlauch",
            "Porzellansternchen",
            "Rote Tulpe",
            "Orange Tulpe",
            "Weiße Tulpe",
            "Rosa Tulpe",
            "Margerite",
            "Kornblume",
            "Maiglöckchen"
        ],
        "wither_rose": [
            "Wither-Rose"
        ],
        "furnace": [
            "Ofen"
        ],
        "glass": [
            "Glas"
        ],
        "golden_rail": [
            "Antriebsschiene"
        ],
        "grass": [
            "Grasblock"
        ],
        "grass_path": [
            "Graspfad"
        ],
        "gravel": [
            "Kies"
        ],
        "hay_block": [
            "Heuballen"
        ],
        "netherrack": [
            "Netherstein"
        ],
        "soul_sand": [
            "Seelensand"
        ],
        "hopper": [
            "Trichter"
        ],
        "ice": [
            "Eis"
        ],
        "packed_ice": [
            "Packeis"
        ],
        "blue_ice": [
            "Blaues Eis"
        ],
        "iron_trapdoor": [
            "Eisenfalltür"
        ],
        "jukebox": [
            "Plattenspieler"
        ],
        "jungleFence": [
            "Tropenbaumzaun"
        ],
        "jungle_fence_gate": [
            "Tropenbaumzauntor"
        ],
        "ladder": [
            "Leiter"
        ],
        "flowing_lava": [
            "Lava"
        ],
        "leaves2": [
            "Akazienblätter",
            "Akazienblätter",
            "Schwarzeichenblätter"
        ],
        "lever": [
            "Hebel"
        ],
        "glowstone": [
            "Glowstone"
        ],
        "lit_pumpkin": [
            "Kürbislaterne"
        ],
        "lockedchest": [
            "Verschlossene Truhe"
        ],
        "log2": [
            "Akazienstamm",
            "Akazienstamm",
            "Schwarzeichenstamm"
        ],
        "log": [
            "Stamm",
            "Eichenstamm",
            "Fichtenstamm",
            "Birkenstamm",
            "Tropenbaumstamm"
        ],
        "magma": [
            "Magmablock"
        ],
        "melon_block": [
            "Melone"
        ],
        "mob_spawner": [
            "Monsterspawner"
        ],
        "monster_egg": [
            "Verseuchter Stein",
            "Verseuchter Stein",
            "Verseuchter Bruchstein",
            "Verseuchter Steinziegel",
            "Verseuchter bemooster Steinziegel",
            "Verseuchter rissiger Steinziegel",
            "Verseuchter gemeißelter Steinziegel"
        ],
        "mushroom": [
            "Pilz"
        ],
        "noteblock": [
            "Notenblock"
        ],
        "mycelium": [
            "Myzel"
        ],
        "nether_brick": [
            "Netherziegelblock"
        ],
        "red_nether_brick": [
            "Roter Netherziegel"
        ],
        "nether_brick_fence": [
            "Netherziegelzaun"
        ],
        "quartz_ore": [
            "Netherquarzerz"
        ],
        "netherreactor": [
            "Netherreaktorkern"
        ],
        "nether_wart_block": [
            "Netherwarzenblock"
        ],
        "warped_wart_block": [
            "Wirrwarzenblock"
        ],
        "unlit_redstone_torch": [
            "Redstone-Fackel"
        ],
        "redstone_torch": [
            "Redstone-Fackel"
        ],
        "soul_torch": [
            "Seelenfackel"
        ],
        "obsidian": [
            "Obsidian"
        ],
        "coal_ore": [
            "Steinkohle"
        ],
        "diamond_ore": [
            "Diamanterz"
        ],
        "emerald_ore": [
            "Smaragderz"
        ],
        "gold_ore": [
            "Golderz"
        ],
        "iron_ore": [
            "Eisenerz"
        ],
        "lapis_ore": [
            "Lapislazulierz"
        ],
        "redstone_ore": [
            "Redstone-Erz"
        ],
        "oreRuby": [
            "Rubinerz"
        ],
        "observer": [
            "Beobachter"
        ],
        "piston": [
            "Kolben"
        ],
        "sticky_piston": [
            "Haftender Kolben"
        ],
        "portal": [
            "Portal"
        ],
        "potatoes": [
            "Kartoffeln"
        ],
        "stone_pressure_plate": [
            "Steindruckplatte"
        ],
        "wooden_pressure_plate": [
            "Eichendruckplatte"
        ],
        "acacia_pressure_plate": [
            "Akaziendruckplatte"
        ],
        "birch_pressure_plate": [
            "Birkendruckplatte"
        ],
        "dark_oak_pressure_plate": [
            "Schwarzeichendruckplatte"
        ],
        "jungle_pressure_plate": [
            "Tropenbaumdruckplatte"
        ],
        "spruce_pressure_plate": [
            "Fichtendruckplatte"
        ],
        "prismarine": [
            "Prismarin",
            "Prismarin",
            "Prismarinziegel",
            "Dunkler Prismarin"
        ],
        "pumpkin": [
            "Kürbis"
        ],
        "pumpkin_stem": [
            "Kürbispflanze"
        ],
        "quartz_block": [
            "Quarzblock",
            "Quarzblock",
            "Gemeißelter Quarzblock",
            "Säulen-Quarzblock",
            "Glatter Quarzblock"
        ],
        "rail": [
            "Schiene"
        ],
        "red_mushroom": [
            "Roter Pilz"
        ],
        "crimson_fungus": [
            "Karmesinpilz"
        ],
        "warped_fungus": [
            "Wirrpilz"
        ],
        "red_mushroom_block": [
            "Roter Pilzblock"
        ],
        "red_sandstone": [
            "Roter Sandstein",
            "Roter Sandstein",
            "Gemeißelter roter Sandstein",
            "Geschnittener roter Sandstein",
            "Glatter roter Sandstein"
        ],
        "redstone_wire": [
            "Redstone-Staub"
        ],
        "redstone_lamp": [
            "Redstone-Lampe"
        ],
        "sand": [
            "Sand",
            "Sand",
            "Roter Sand"
        ],
        "sandstone": [
            "Sandstein",
            "Sandstein",
            "Gemeißelter Sandstein",
            "Geschnittener Sandstein",
            "Glatter Sandstein"
        ],
        "sapling": [
            "Eichensetzling",
            "Eichensetzling",
            "Fichtensetzling",
            "Birkensetzling",
            "Tropenbaumsetzling",
            "Akaziensetzling",
            "Schwarzeichensetzling"
        ],
        "seaLantern": [
            "Seelaterne"
        ],
        "standing_sign": [
            "Schild"
        ],
        "spruce_standing_sign": [
            "Fichtenschild"
        ],
        "birch_standing_sign": [
            "Birkenschild"
        ],
        "jungle_standing_sign": [
            "Tropenholzschild"
        ],
        "acacia_standing_sign": [
            "Akazienschild"
        ],
        "darkoak_standing_sign": [
            "Dunkeleichenschild"
        ],
        "slime": [
            "Schleimblock"
        ],
        "snow": [
            "Schnee"
        ],
        "sponge": [
            "Schwamm",
            "Schwamm",
            "Nasser Schwamm"
        ],
        "spruceFence": [
            "Fichtenzaun"
        ],
        "spruce_fence_gate": [
            "Fichtenzauntor"
        ],
        "brick_stairs": [
            "Ziegeltreppe"
        ],
        "nether_brick_stairs": [
            "Netherziegeltreppe"
        ],
        "quartz_stairs": [
            "Quarztreppe"
        ],
        "smooth_quartz_stairs": [
            "Glatte Quarztreppe"
        ],
        "red_sandstone_stairs": [
            "Rote Sandsteintreppe"
        ],
        "sandstone_stairs": [
            "Sandsteintreppe"
        ],
        "stone_stairs": [
            "Bruchsteintreppe"
        ],
        "normal_stone_stairs": [
            "Steintreppe"
        ],
        "stone_brick_stairs": [
            "Steinziegeltreppe"
        ],
        "oak_stairs": [
            "Eichenholztreppe"
        ],
        "acacia_stairs": [
            "Akazienholztreppe"
        ],
        "birch_stairs": [
            "Birkenholztreppe"
        ],
        "dark_oak_stairs": [
            "Schwarzeichentreppe"
        ],
        "jungle_stairs": [
            "Tropenholztreppe"
        ],
        "spruce_stairs": [
            "Fichtenholztreppe"
        ],
        "purpur_stairs": [
            "Purpurtreppe"
        ],
        "prismarine_stairs": [
            "Prismarintreppe"
        ],
        "dark_prismarine_stairs": [
            "Dunkle Prismarintreppe"
        ],
        "prismarine_bricks_stairs": [
            "Prismarinziegeltreppe"
        ],
        "granite_stairs": [
            "Granittreppe"
        ],
        "diorite_stairs": [
            "Diorittreppe"
        ],
        "andesite_stairs": [
            "Andesittreppe"
        ],
        "polished_granite_stairs": [
            "Polierte Granittreppe"
        ],
        "polished_diorite_stairs": [
            "Polierte Diorittreppe"
        ],
        "polished_andesite_stairs": [
            "Polierte Andesittreppe"
        ],
        "mossy_stone_brick_stairs": [
            "Bemooste Steinziegeltreppe"
        ],
        "smooth_red_sandstone_stairs": [
            "Glatte rote Sandsteintreppe"
        ],
        "smooth_sandstone_stairs": [
            "Glatte Sandsteintreppe"
        ],
        "end_brick_stairs": [
            "Endsteinziegeltreppe"
        ],
        "mossy_cobblestone_stairs": [
            "Bemooste Bruchsteintreppe"
        ],
        "red_nether_brick_stairs": [
            "Rote Netherziegeltreppe"
        ],
        "smooth_stone": [
            "Glatter Stein"
        ],
        "standing_banner": [
            "Banner",
            "Schwarzes Banner",
            "Rotes Banner",
            "Grünes Banner",
            "Braunes Banner",
            "Blaues Banner",
            "Violettes Banner",
            "Türkises Banner",
            "Hellgraues Banner",
            "Graues Banner",
            "Rosa Banner",
            "Hellgrünes Banner",
            "Gelbes Banner",
            "Hellblaues Banner",
            "Magenta Banner",
            "Oranges Banner",
            "Banner"
        ],
        "stone": [
            "Stein",
            "Stein",
            "Granit",
            "Polierter Granit",
            "Diorit",
            "Polierter Diorit",
            "Andesit",
            "Polierter Andesit"
        ],
        "cobblestone": [
            "Bruchstein"
        ],
        "stonebrick": [
            "Steinziegel",
            "Steinziegel",
            "Bemooste Steinziegel",
            "Gemeißelte Steinziegel"
        ],
        "stonecutter": [
            "Steinsäge"
        ],
        "stonecutter_block": [
            "Steinsäge"
        ],
        "mossy_cobblestone": [
            "Bemooster Bruchstein"
        ],
        "double_stone_slab": [
            "Steinstufe",
            "Steinstufe",
            "Sandsteinstufe",
            "Holzstufe",
            "Bruchsteinstufe",
            "Ziegelstufe",
            "Steinziegelstufe",
            "Quarzstufe",
            "Netherziegelstufe"
        ],
        "stone_slab": [
            "Steinstufe",
            "Glatte Steinstufe",
            "Sandsteinstufe",
            "Holzstufe",
            "Bruchsteinstufe",
            "Ziegelstufe",
            "Steinziegelstufe",
            "Quarzstufe",
            "Netherziegelstufe"
        ],
        "double_stone_slab2": [
            "Rote Sandsteinstufe",
            "Rote Sandsteinstufe"
        ],
        "stone_slab2": [
            "Rote Sandsteinstufe",
            "Rote Sandsteinstufe",
            "Purpurstufe",
            "Prismarinstufe",
            "Prismarinziegelstufe",
            "Dunkle Prismarinstufe",
            "Bemooste Bruchsteinstufe",
            "Glatte Sandsteinstufe",
            "Rote Netherziegelstufe"
        ],
        "stone_slab3": [
            "Endsteinziegelstufe",
            "Endsteinziegelstufe",
            "Glatte rote Sandsteinstufe",
            "Polierte Andesitstufe",
            "Andesitstufe",
            "Dioritstufe",
            "Polierte Dioritstufe",
            "Granitstufe",
            "Polierte Granitstufe"
        ],
        "stone_slab4": [
            "Bemooste Steinziegelstufe",
            "Bemooste Steinziegelstufe",
            "Glatte Quarzstufe",
            "Steinstufe",
            "Geschnittene Sandsteinstufe",
            "Geschnittene rote Sandsteinstufe"
        ],
        "coral_block": [
            "Kelchkorallenblock",
            "Kelchkorallenblock",
            "Hirnkorallenblock",
            "Blasenkorallenblock",
            "Feuerkorallenblock",
            "Stachelkorallenblock",
            "Toter Kelchkorallenblock",
            "Toter Hirnkorallenblock",
            "Toter Blasenkorallenblock",
            "Toter Feuerkorallenblock",
            "Toter Stachelkorallenblock"
        ],
        "tallgrass": [
            "Gras",
            "Gras",
            "Farn"
        ],
        "seagrass": [
            "Seegras",
            "Seegras"
        ],
        "sea_pickle": [
            "Seegurke"
        ],
        "turtle_egg": [
            "Meeresschildkrötenei"
        ],
        "coral": [
            "Kelchkoralle",
            "Kelchkoralle",
            "Hirnkoralle",
            "Blasenkoralle",
            "Feuerkoralle",
            "Stachelkoralle",
            "Tote Kelchkoralle",
            "Tote Hirnkoralle",
            "Tote Blasenkoralle",
            "Tote Feuerkoralle",
            "Tote Stachelkoralle"
        ],
        "coral_fan": [
            "Kelchkorallenfächer",
            "Kelchkorallenfächer",
            "Hirnkorallenfächer",
            "Blasenkorallenfächer",
            "Feuerkorallenfächer",
            "Stachelkorallenfächer"
        ],
        "coral_fan_dead": [
            "Toter Kelchkorallenfächer",
            "Toter Kelchkorallenfächer",
            "Toter Hirnkorallenfächer",
            "Toter Blasenkorallenfächer",
            "Toter Feuerkorallenfächer",
            "Toter Stachelkorallenfächer"
        ],
        "glass_pane": [
            "Glasscheibe"
        ],
        "tnt": [
            "TNT"
        ],
        "snow_layer": [
            "Schnee"
        ],
        "torch": [
            "Fackel"
        ],
        "trapdoor": [
            "Eichenfalltür"
        ],
        "acacia_trapdoor": [
            "Akazienfalltür"
        ],
        "birch_trapdoor": [
            "Birkenfalltür"
        ],
        "dark_oak_trapdoor": [
            "Schwarzeichenfalltür"
        ],
        "jungle_trapdoor": [
            "Tropenbaumfalltür"
        ],
        "spruce_trapdoor": [
            "Fichtenfalltür"
        ],
        "tripWire": [
            "Stolperdraht"
        ],
        "tripwire_hook": [
            "Stolperdrahthaken"
        ],
        "vine": [
            "Ranken"
        ],
        "weeping_vines": [
            "Trauerranken"
        ],
        "twisting_vines": [
            "Verdrehte Ranken"
        ],
        "flowing_water": [
            "Wasser"
        ],
        "water": [
            "Wasser"
        ],
        "waterlily": [
            "Seerosenblatt"
        ],
        "web": [
            "Spinnennetz"
        ],
        "heavy_weighted_pressure_plate": [
            "Beschwerte Druckplatte (schwer)"
        ],
        "light_weighted_pressure_plate": [
            "Beschwerte Druckplatte (leicht)"
        ],
        "end_stone": [
            "Endstein"
        ],
        "end_bricks": [
            "Endsteinziegel"
        ],
        "planks": [
            "Holzbretter",
            "Eichenholzbretter",
            "Fichtenholzbretter",
            "Birkenholzbretter",
            "Tropenholzbretter",
            "Akazienholzbretter",
            "Schwarzeichenholzbretter"
        ],
        "wooden_slab": [
            "Holzstufe",
            "Eichenholzstufe",
            "Fichtenholzstufe",
            "Birkenholzstufe",
            "Tropenholzstufe",
            "Akazienholzstufe",
            "Schwarzeichenstufe"
        ],
        "carpet": [
            "Teppich",
            "Schwarzer Teppich",
            "Roter Teppich",
            "Grüner Teppich",
            "Brauner Teppich",
            "Blauer Teppich",
            "Violetter Teppich",
            "Türkiser Teppich",
            "Hellgrauer Teppich",
            "Grauer Teppich",
            "Rosa Teppich",
            "Hellgrüner Teppich",
            "Gelber Teppich",
            "Hellblauer Teppich",
            "Magenta Teppich",
            "Oranger Teppich",
            "Weißer Teppich"
        ],
        "crafting_table": [
            "Werkbank"
        ],
        "white_glazed_terracotta": [
            "Weiße glasierte Keramik",
            "Weiße glasierte Keramik"
        ],
        "orange_glazed_terracotta": [
            "Orange glasierte Keramik",
            "Orange glasierte Keramik"
        ],
        "magenta_glazed_terracotta": [
            "Magenta glasierte Keramik",
            "Magenta glasierte Keramik"
        ],
        "light_blue_glazed_terracotta": [
            "Hellblaue glasierte Keramik",
            "Hellblaue glasierte Keramik"
        ],
        "yellow_glazed_terracotta": [
            "Gelbe glasierte Keramik",
            "Gelbe glasierte Keramik"
        ],
        "lime_glazed_terracotta": [
            "Hellgrüne glasierte Keramik",
            "Hellgrüne glasierte Keramik"
        ],
        "pink_glazed_terracotta": [
            "Rosa glasierte Keramik",
            "Rosa glasierte Keramik"
        ],
        "gray_glazed_terracotta": [
            "Graue glasierte Keramik",
            "Graue glasierte Keramik"
        ],
        "silver_glazed_terracotta": [
            "Hellgraue glasierte Keramik",
            "Hellgraue glasierte Keramik"
        ],
        "cyan_glazed_terracotta": [
            "Türkise glasierte Keramik",
            "Türkise glasierte Keramik"
        ],
        "purple_glazed_terracotta": [
            "Violette glasierte Keramik",
            "Violette glasierte Keramik"
        ],
        "blue_glazed_terracotta": [
            "Blaue glasierte Keramik",
            "Blaue glasierte Keramik"
        ],
        "brown_glazed_terracotta": [
            "Braune glasierte Keramik",
            "Braune glasierte Keramik"
        ],
        "green_glazed_terracotta": [
            "Grüne glasierte Keramik",
            "Grüne glasierte Keramik"
        ],
        "red_glazed_terracotta": [
            "Rote glasierte Keramik",
            "Rote glasierte Keramik"
        ],
        "black_glazed_terracotta": [
            "Schwarze glasierte Keramik",
            "Schwarze glasierte Keramik"
        ],
        "concrete": [
            "Weißer Beton",
            "Weißer Beton",
            "Oranger Beton",
            "Magenta Beton",
            "Hellblauer Beton",
            "Gelber Beton",
            "Hellgrüner Beton",
            "Rosa Beton",
            "Grauer Beton",
            "Hellgrauer Beton",
            "Türkiser Zement",
            "Violetter Beton",
            "Blauer Zement",
            "Brauner Zement",
            "Grüner Beton",
            "Roter Beton",
            "Schwarzer Beton"
        ],
        "glazedTerracottaWhite": [
            "Weiße glasierte Keramik"
        ],
        "glazedTerracottaOrange": [
            "Orange glasierte Keramik"
        ],
        "glazedTerracottaMagenta": [
            "Magenta glasierte Keramik"
        ],
        "glazedTerracottaLightBlue": [
            "Hellblaue glasierte Keramik"
        ],
        "glazedTerracottaYellow": [
            "Gelbe glasierte Keramik"
        ],
        "glazedTerracottaLime": [
            "Hellgrüne glasierte Keramik"
        ],
        "glazedTerracottaPink": [
            "Rosa glasierte Keramik"
        ],
        "glazedTerracottaGray": [
            "Graue glasierte Keramik"
        ],
        "glazedTerracottaSilver": [
            "Hellgraue glasierte Keramik"
        ],
        "glazedTerracottaCyan": [
            "Türkise glasierte Keramik"
        ],
        "glazedTerracottaPurple": [
            "Violette glasierte Keramik"
        ],
        "glazedTerracottaBlue": [
            "Blaue glasierte Keramik"
        ],
        "glazedTerracottaBrown": [
            "Braune glasierte Keramik"
        ],
        "glazedTerracottaGreen": [
            "Grüne glasierte Keramik"
        ],
        "glazedTerracottaRed": [
            "Rote glasierte Keramik"
        ],
        "glazedTerracottaBlack": [
            "Schwarze glasierte Keramik"
        ],
        "concretePowder": [
            "Weißer Trockenbeton",
            "Weißer Trockenbeton",
            "Oranger Trockenbeton",
            "Magenta Trockenbeton",
            "Hellblauer Trockenbeton",
            "Gelber Trockenbeton",
            "Hellgrüner Trockenbeton",
            "Rosa Trockenbeton",
            "Grauer Trockenbeton",
            "Hellgrauer Trockenbeton",
            "Türkiser Trockenzement",
            "Violetter Trockenbeton",
            "Blauer Trockenzement",
            "Brauner Trockenzement",
            "Grüner Trockenbeton",
            "Roter Trockenbeton",
            "Schwarzer Trockenbeton"
        ],
        "stripped_spruce_log": [
            "Abgezogener Fichtenholzstamm"
        ],
        "stripped_dark_oak_log": [
            "Abgezogener Schwarzeichenholzstamm"
        ],
        "stripped_birch_log": [
            "Abgezogener Birkenholzstamm"
        ],
        "stripped_jungle_log": [
            "Abgezogener Tropenholzstamm"
        ],
        "stripped_oak_log": [
            "Abgezogener Eichenholzstamm"
        ],
        "stripped_acacia_log": [
            "Abgezogener Akazienholzstamm"
        ],
        "bamboo": [
            "Bambus"
        ],
        "scaffolding": [
            "Gerüst"
        ],
        "grindstone": [
            "Schleifstein"
        ],
        "cartography_table": [
            "Kartentisch"
        ],
        "lantern": [
            "Laterne"
        ],
        "soul_lantern": [
            "Seelenlaterne"
        ],
        "smoker": [
            "Räucherofen"
        ],
        "smithing_table": [
            "Schmiedetisch"
        ],
        "barrel": [
            "Fass"
        ],
        "campfire": [
            "Lagerfeuer"
        ],
        "loom": [
            "Webstuhl"
        ],
        "lectern": [
            "Lesepult"
        ],
        "sweet_berry_bush": [
            "Süßbeerenstrauch"
        ],
        "wood": [
            "Eichenholz",
            "Eichenholz",
            "Fichtenholz",
            "Birkenholz",
            "Tropenholz",
            "Akazienholz",
            "Schwarzeichenholz",
            null,
            null,
            "Abgezogenes Eichenholz",
            "Abgezogenes Fichtenholz",
            "Abgezogenes Birkenholz",
            "Abgezogenes Tropenholz",
            "Abgezogenes Akazienholz",
            "Abgezogenes Schwarzeichenholz"
        ],
        "netherite_block": [
            "Netherit-Block"
        ],
        "ancient_debris": [
            "Antiker Schutt"
        ],
        "nether_gold_ore": [
            "Nethergolderz"
        ],
        "respawn_anchor": [
            "Respawn-Anker"
        ],
        "crying_obsidian": [
            "Weinender Obsidian"
        ]
    }
};
freeze(lang_data);
export = lang_data;
