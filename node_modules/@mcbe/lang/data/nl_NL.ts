
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
    id: "nl_NL" as LangId,
    commands:{
        "ability_description": "Stelt de vaardigheid van een speler in.",
        "ability_noability": "Er is geen vaardigheid met de naam '%1$s' beschikbaar",
        "ability_granted": "De vaardigheid '%1$s' is aan jou toegekend",
        "ability_revoked": "De vaardigheid '%1$s' is van je afgenomen",
        "ability_success": "Vaardigheid is bijgewerkt",
        "achievement_alreadyHave": "Speler %1$s heeft de achievement %2$s al",
        "achievement_description": "Hiermee krijgt of verliest een speler een achievement.",
        "achievement_dontHave": "Speler %1$s heeft de achievement %2$s niet",
        "achievement_give_success_all": "Alle achievements zijn aan %1$s gegeven",
        "achievement_give_success_one": "De statistiek %1$s is aan %2$s gegeven",
        "achievement_statTooLow": "Speler %1$s heeft de statistiek %2$s niet",
        "achievement_take_success_all": "Alle achievements zijn afgenomen van %1$s",
        "achievement_take_success_one": "De statistiek %1$s is afgenomen van %2$s",
        "achievement_unknownAchievement": "Onbekende achievement of statistiek '%1$s'",
        "agent_attack_success": "Agentaanval gelukt",
        "agent_attack_failed": "Agentaanval mislukt",
        "agent_collect_success": "Agent ophalen gelukt",
        "agent_collect_failed": "Agent ophalen mislukt",
        "agent_createagent_success": "Agent gemaakt",
        "agent_createagent_failed": "Kan agent niet maken",
        "agent_destroy_success": "Agent heeft een blok vernietigd",
        "agent_destroy_failed": "Agent vernietigen mislukt",
        "agent_detect_success": "Agent detecteren gelukt",
        "agent_detect_failed": "Agent detecteren mislukt",
        "agent_detectredstone_success": "Agent detectredstone gelukt",
        "agent_detectredstone_failed": "Agent detectredstone mislukt",
        "agent_drop_success": "Agent laten vallen gelukt",
        "agent_drop_failed": "Agent laten vallen mislukt",
        "agent_dropall_success": "Agent dropall gelukt",
        "agent_dropall_failed": "Agent dropall mislukt",
        "agent_getitemcount_success": "Agent getitemcount gelukt",
        "agent_getitemcount_failed": "Agent getitemcount mislukt",
        "agent_getitemspace_success": "Agent getitemspace gelukt",
        "agent_getitemspace_failed": "Agent getitemspace mislukt",
        "agent_getitemdetail_success": "Agent getitemdetail gelukt",
        "agent_getitemdetail_failed": "Agent getitemdetail mislukt",
        "agent_getposition_success": "Agent getposition gelukt",
        "agent_getposition_failed": "Agent getposition mislukt",
        "agent_inspect_success": "Agent inspecteren gelukt",
        "agent_inspect_failed": "Agent inspecteren mislukt",
        "agent_inspectdata_success": "Agent heeft gegevens geïnspecteerd",
        "agent_inspectdata_failed": "Agent heeft gegevens niet kunnen inspecteren",
        "agent_move_success": "Agent verplaatsen gelukt",
        "agent_move_failed": "Kan agent niet verplaatsen",
        "agent_outofrange": "Kan commando niet uitvoeren. Agent is buiten bereik",
        "agent_place_success": "Agent plaatsen gelukt",
        "agent_place_failed": "Agent plaatsen mislukt",
        "agent_setitem_success": "Agent set item gelukt",
        "agent_setitem_failed": "Agent set item mislukt",
        "agent_turn_success": "Agent draaien gelukt",
        "agent_turn_failed": "Agent draaien mislukt",
        "agent_till_success": "Agent verbouwen gelukt",
        "agent_till_failed": "Agent verbouwen mislukt",
        "agent_tpagent_description": "Teleporteer je agent.",
        "agent_tpagent_success": "Agent geteleporteerd",
        "agent_tpagent_failed": "Agent teleporteren mislukt",
        "agent_transfer_success": "Agent overzetten gelukt",
        "agent_transfer_failed": "Agent overzetten mislukt",
        "always_day": "Dag-/nachtcyclus %1$s",
        "always_day_locked": "Dag-/nachtcyclus vergrendeld",
        "always_day_unlocked": "Dag-/nachtcyclus ontgrendeld",
        "ban_description": "Zet een speler op de banlijst.",
        "autocomplete_a": "alle spelers",
        "autocomplete_c": "mijn Agent",
        "autocomplete_e": "alle entiteiten",
        "autocomplete_p": "dichtstbijzijnde speler",
        "autocomplete_r": "willekeurige speler",
        "autocomplete_s": "jezelf",
        "autocomplete_v": "alle Agents",
        "ban_failed": "Kan speler %1$s niet verbannen",
        "ban_success": "Speler %1$s verbannen",
        "banip_description": "Hiermee zet je een IP-adres op de banlijst.",
        "banip_invalid": "Je hebt een ongeldig IP-adres of een speler die niet online is opgegeven",
        "banip_success": "IP-adres %1$s verbannen",
        "banip_success_players": "IP-adres %1$s van %2$s verbannen",
        "banlist_ips": "Er zijn in totaal %1$d verbannen IP-adressen:",
        "banlist_players": "Er zijn in totaal %1$d verbannen speler:",
        "blockdata_description": "Hiermee wijzig je het gegevenslabel van een blok.",
        "blockdata_placeFailed": "Je kunt hier geen blokken plaatsen",
        "blockdata_destroyFailed": "Je kunt hier niet graven",
        "blockdata_failed": "De gegevenslabel is niet gewijzigd: %1$s",
        "blockdata_notValid": "Het doelblok is geen gegevenshouderblok",
        "blockdata_outOfWorld": "Kan blok niet wijzigen buiten de wereld",
        "blockdata_success": "Blokgegevens bijgewerkt naar: %1$s",
        "blockdata_tagError": "Parseren van gegevenslabel is mislukt: %1$s",
        "bossbar_add_success": "Speciale baasbalk gemaakt [%1$s]",
        "bossbar_add_failure_invalid": "Ongeldige baasbalk-id. Id's moeten de vorm naamruimte:id of id hebben (standaard is Minecraft-naamruimte).",
        "bossbar_add_failure_exists": "Er bestaat al een baasbalk met de id '%1$s'",
        "bossbar_description": "Hiermee maak je en bewerk je baasbalken",
        "bossbar_get_max": "Speciale baasbalk [%1$s] heeft een maximum van %2$d",
        "bossbar_get_players": "Er zijn momenteel %2$s spelers online voor speciale baasbalk [%1$s]: %3$s",
        "bossbar_get_players_none": "Er zijn momenteel geen spelers online voor speciale baasbalk [%1$s]",
        "bossbar_get_players_one": "Er is momenteel 1 speler online voor speciale baasbalk [%1$s]: %2$s",
        "bossbar_get_value": "Speciale baasbalk [%1$s] heeft een waarde van %2$d",
        "bossbar_get_visible_true": "Speciale baasbalk [%1$s] wordt momenteel getoond",
        "bossbar_get_visible_false": "Speciale baasbalk [%1$s] wordt momenteel verborgen",
        "bossbar_list": "Er zijn %1$s speciale baasbalken actief: %2$s",
        "bossbar_list_none": "Er zijn geen speciale baasbalken actief",
        "bossbar_list_one": "Er is 1 speciale baasbalk actief: %1$s",
        "bossbar_notFound": "Er bestaan geen baasbalken met de id '%1$s'",
        "bossbar_remove": "Speciale baasbalk [%1$s] verwijderd",
        "change_setting_description": "Wijzigt een instelling op een eigen server terwijl deze wordt uitgevoerd.",
        "change_setting_success": "%1$s is gewijzigd",
        "chunkinfo_compiled": "Segment is gecompileerd.",
        "chunkinfo_data": "Eerste 64 hoekpunten zijn: %1$s",
        "chunkinfo_empty": "Segment is leeg.",
        "chunkinfo_hasLayers": "Segment heeft lagen: %1$s",
        "chunkinfo_hasNoRenderableLayers": "Segment heeft geen lagen om te renderen.",
        "chunkinfo_isEmpty": "Segment heeft lege lagen: %1$s",
        "chunkinfo_location": "Segmentlocatie: (%1$d, %2$d, %3$d)",
        "chunkinfo_noChunk": "Geen segment gevonden op segmentpositie %1$d, %2$d, %3$d",
        "chunkinfo_notCompiled": "Segment is niet gecompileerd.",
        "chunkinfo_notEmpty": "Segment is niet leeg.",
        "chunkinfo_vertices": "De buffer van de %1$s-laag bevat %2$d hoekpunten",
        "classroommode_description": "Bezig met starten van en verbinden met de Classroom Mode.",
        "classroommode_success": "Bezig met starten van Classroom Mode...",
        "clear_description": "Hiermee wis je voorwerpen uit de inventaris van een speler.",
        "clear_failure": "Kan de inventaris van %1$s niet wissen",
        "clear_failure_no_items": "Kan de inventaris van %1$s niet wissen; geen items om te verwijderen",
        "clear_success": "De inventaris van %1$s is gewist; %2$d items worden verwijderd",
        "clear_tagError": "Parseren van gegevenslabel is mislukt: %1$s",
        "clear_testing": "%1$s bevat %2$d voorwerpen die overeenkomen met de criteria",
        "clearfixedinv_description": "Verwijdert alle vaste inventarisslots.",
        "clearfixedinv_success": "Het vaste inventarisslot is gewist",
        "clone_description": "Kloont blokken van de ene regio naar de andere.",
        "clone_failed": "Geen blokken gekloond",
        "clone_filtered_error": "Filtergebruik vereist dat er een filterblokkering is opgegeven",
        "clone_noOverlap": "Bron en bestemming mogen elkaar niet overlappen",
        "clone_outOfWorld": "Geen toegang mogelijk tot blokken buiten de wereld",
        "clone_success": "%1$d blokken gekloond",
        "clone_tooManyBlocks": "Te veel blokken in het opgegeven gebied (%1$d > %2$d)",
        "closechat_description": "Sluit het chatvenster van de lokale speler indien geopend.",
        "closechat_success": "Chat gesloten",
        "closechat_failure": "Chat was niet geopend",
        "closewebsocket_description": "Sluit websocket-verbinding indien aanwezig.",
        "code_description": "Code Builder wordt gestart.",
        "code_success": "Code Builder is gestart.",
        "compare_failed": "Bron en bestemming zijn niet identiek",
        "compare_outOfWorld": "Geen toegang mogelijk tot blokken buiten de wereld",
        "compare_success": "%1$d blokken vergeleken",
        "compare_tooManyBlocks": "Te veel blokken in het opgegeven gebied (%1$d > %2$d)",
        "corruptworld_description": "Beschadigt de wereld die op de server is geladen.",
        "corruptworld_success": "Wereld beschadigd.",
        "daylock_description": "Vergrendelt en ontgrendelt de dag-/nachtcyclus.",
        "debug_description": "Hiermee start of stop je een foutopsporingssessie.",
        "debug_notStarted": "Kan niet stoppen met profileren als we nog niet zijn begonnen!",
        "debug_start": "Foutopsporingsprofilering gestart",
        "debug_stop": "Foutopsporingsprofilering gestopt na %.2f seconden (%1$d tikken)",
        "defaultgamemode_description": "Hiermee stel je het standaardspeltype in.",
        "defaultgamemode_success": "Het standaardspeltype voor de wereld is nu %1$s",
        "deop_description": "Trekt de operatorstatus van een speler in.",
        "deop_failed": "Opheffen als operator niet mogelijk (te hoog machtigingsniveau): %s",
        "deop_success": "OP-rechten ingetrokken voor: %s",
        "deop_message": "Je OP-rechten zijn ingetrokken",
        "difficulty_description": "Hiermee stel je de moeilijkheidsgraad in.",
        "difficulty_usage": "/difficulty <new difficulty>",
        "difficulty_success": "Stel de moeilijkheid in op %1$s",
        "downfall_success": "Schakelen tussen neerslag",
        "effect_description": "Hiermee kun je statuseffecten toevoegen of verwijderen.",
        "effect_failure_notActive": "Kan %1$s niet uit %2$s halen omdat dat geen effect heeft",
        "effect_failure_notActive_all": "Kan geen effecten uit %1$s halen omdat ze er geen hebben",
        "effect_failure_notAMob": "%1$s kan geen effecten hebben",
        "effect_notFound": "Er is geen dergelijk mobeffect met id %s",
        "effect_success": "Gaf %1$s * %2$d aan %3$s voor %4$d seconden",
        "effect_success_removed": "%1$s van %2$s afgepakt",
        "effect_success_removed_all": "Alle effecten van %1$s afgepakt",
        "enchant_cantCombine": "%1$s kan niet worden gecombineerd met %2$s",
        "enchant_invalidLevel": "%1$s ondersteunt niveau %2$d niet",
        "enchant_cantEnchant": "De geselecteerde betovering kan niet worden toegevoegd aan het doelvoorwerp: %1$s",
        "enchant_description": "Voegt een betovering toe aan het geselecteerde item van de speler.",
        "enchant_noItem": "Het doelwit houdt geen voorwerp vast: %1$s",
        "enchant_notFound": "Id %1$d beschikt niet over deze betovering",
        "enchant_success": "Betovering geslaagd voor %1$s",
        "entitydata_description": "Hiermee wijzig je het gegevenslabel van een entiteit.",
        "entitydata_failed": "De gegevenslabel is niet gewijzigd: %1$s",
        "entitydata_noPlayers": "%1$s is een speler en kan niet worden gewijzigd",
        "entitydata_success": "Entiteitsgegevens bijgewerkt naar: %1$s",
        "entitydata_tagError": "Parseren van gegevenslabel is mislukt: %1$s",
        "execute_allInvocationsFailed": "Alle aanroepen zijn mislukt: '%1$s'",
        "execute_failed": "Kan '%1$s' niet uitvoeren als %2$s",
        "execute_description": "Hiermee wordt een commando uitgevoerd namens een of meer entiteiten.",
        "fill_description": "Vult de hele of delen van een regio met een bepaald blok.",
        "fill_failed": "Geen blokken gevuld",
        "fill_outOfWorld": "Kan geen blokken plaatsen buiten de wereld",
        "fill_success": "%1$d blokken gevuld",
        "fill_tagError": "Parseren van gegevenslabel is mislukt: %1$s",
        "fill_tooManyBlocks": "Te veel blokken in het opgegeven gebied (%1$d > %2$d)",
        "fill_replace_auxvalue_invalid": "Ongeldige vervangingsgegevenswaarde voor blok %1$s",
        "function_description": "Hiermee worden opdrachten uitgevoerd die in het overeenkomende functiebestand worden gevonden.",
        "function_functionNameNotFound": "Functie %1$s niet gevonden.",
        "function_invalidCharacters": "Functie met titel '%s' is ongeldig; teken '%s' is niet toegestaan in functienamen.",
        "function_noEngineVersionSpecified": "Functie %s kan niet worden uitgevoerd. Je moet een min_engine_version opgeven in de manifest.json van het gedragspakket.",
        "function_success": "%1$d functie-items uitgevoerd.",
        "gamemode_description": "Stelt de spelmodus van een speler in.",
        "gamemode_success_other": "Het speltype van %2$s instellen op %1$s",
        "gamemode_success_self": "Eigen speltype instellen op %1$s",
        "gamemode_fail_invalid": "Spelmodus '%1$s' is ongeldig",
        "gamerule_description": "Stelt een spelregelwaarde in of voert er een query op uit.",
        "gamerule_type_invalid": "Ongeldig type gebruikt voor spelregel '%1$s'",
        "gamerule_type_nocheatsenabled": "Spelregel '%1$s' kan alleen worden gebruikt als cheats in deze wereld zijn ingeschakeld.",
        "gamerule_nopermission": "Alleen eigenaren van een server kunnen '%1$s' wijzigen",
        "gamerule_norule": "Er is geen spelregel met de naam '%1$s' beschikbaar",
        "gamerule_success": "Spelregel %1$s is bijgewerkt naar %2$s",
        "generic_async_initiated": "Commando '%1$s' is gestart (asynchrone stap %2$d)",
        "generic_boolean_invalid": "'%1$s' is niet waar of onwaar",
        "generic_chunk_notFound": "Opgegeven segment is niet gevonden",
        "generic_componentError": "Parseren van onderdelenlijst mislukt",
        "generic_dimension_notFound": "Opgegeven dimensie is niet gevonden",
        "generic_disabled": "Cheats zijn niet ingeschakeld in dit niveau.",
        "generic_disabled_templateLocked": "Instellingen zijn momenteel vergrendeld. Ontgrendel de sjabloonwereldopties vanuit de spelinstellingen om deze te wijzigen.",
        "generic_double_tooBig": "Het getal dat je hebt ingevoerd (%.2f) is te groot. Het mag maximaal %.2f zijn",
        "generic_double_tooSmall": "Het getal dat je hebt ingevoerd (%.2f) is te klein. Het moet minimaal %.2f zijn",
        "generic_duplicateType": "Dubbele typeargumenten",
        "generic_duplicateSelectorArgument": "Dubbele selectorargumenten voor %s",
        "generic_encryption_badkey": "Ongeldige openbare sleutel verstrekt. Sleutel van 120 byte verwacht na PEM-formattering.",
        "generic_encryption_badsalt": "Ongeldige salt verstrekt. 16 bytes verwacht vóór base 64-codering.",
        "generic_encryption_required": "Versleutelde sessie vereist",
        "generic_entity_invalidType": "Type entiteit '%1$s' is ongeldig",
        "generic_entity_invalidUuid": "De opgegeven entiteit UUID heeft een ongeldige indeling",
        "generic_entity_notFound": "Kan die entiteit niet vinden",
        "generic_exception": "Er is een onbekende fout opgetreden bij het uitvoeren van dit commando",
        "generic_invalidAgentType": "Typeargument toegepast op alleen-Agent-selector",
        "generic_invalidcontext": "Ongeldige context voor opgegeven commandotype",
        "generic_invalidDevice": "De ingevoerde opdracht, %s, wordt niet ondersteund op dit apparaat",
        "generic_invalidPlayerType": "Typeargument toegepast op spelerselector",
        "generic_invalidType": "Onbekend typeargument",
        "generic_levelError": "Maximumniveau moet hoger zijn dan minimumniveau",
        "generic_malformed_body": "Lichaam ontbreekt of is misvormd",
        "generic_malformed_type": "Ongeldig aanvraagtype",
        "generic_notimplemented": "Niet geïmplementeerd",
        "generic_num_invalid": "'%1$s' is geen geldig getal",
        "generic_num_tooBig": "Het getal dat je hebt ingevoerd (%1$d) is te groot. Het mag maximaal %2$d zijn",
        "generic_num_tooSmall": "Het getal dat je hebt ingevoerd (%1$d) is te klein. Het moet minimaal %2$d zijn",
        "generic_parameter_invalid": "'%1$s' is geen geldige parameter",
        "generic_permission_selector": "<onvoldoende machtigingen voor selectoruitbreiding>",
        "generic_player_notFound": "Kan deze speler niet vinden",
        "generic_protocol_mismatch": "De opgegeven protocolversie komt niet overeen met de protocolversie van Minecraft",
        "generic_radiusError": "Minimale selectorstraal moet kleiner zijn dat het maximum",
        "generic_radiusNegative": "Straal kan niet negatief zijn",
        "generic_rotationError": "Rotatie buiten bereik",
        "generic_running": "Het commando wordt al uitgevoerd",
        "generic_step_failed": "Commandostap is mislukt",
        "generic_syntax": "Syntaxisfout: onverwachte '%2$s': op '%1$s>>%2$s<<%3$s'",
        "generic_noTargetMatch": "Geen doelen die overeenkomen met selector",
        "generic_targetNotPlayer": "Selector moet spelertype zijn",
        "generic_tooManyNames": "Teveel doelnaamargumenten",
        "generic_tooManyTargets": "Te veel doelen die overeenkomen met selector",
        "generic_too_many_requests": "Er zijn te veel commando's aangevraagd. Wacht tot er een is voltooid",
        "generic_unknown": "Onbekende opdracht: %s. Controleer of de opdracht bestaat en of je gemachtigd bent deze te gebruiken.",
        "generic_usage": "Verbruik: %1$s",
        "generic_usage_noparam": "Verbruik:",
        "generic_version_mismatch": "De aangevraagde versie bestaat niet voor dit commando",
        "generic_version_missing": "Commandoaanroepen die niet via chat gaan moeten een commandoversie opgeven",
        "getchunkdata_description": "Haalt pixels op voor een specifiek segment.",
        "getchunkdata_success": "Segmentgegevens ontvangen",
        "getchunks_description": "Haalt lijsten van segmenten die worden geladen.",
        "getchunks_success": "Segmentlijst ontvangen",
        "getlocalplayername_description": "Geeft als resultaat de naam van de lokale speler.",
        "getspawnpoint_description": "Haalt de spawnpositie op van de opgegeven speler(s).",
        "gettopsolidblock_description": "Verkrijg de positie van het bovenste niet-luchtblok onder de opgegeven positie",
        "gettopsolidblock_notfound": "Geen vaste blokken onder de opgegeven positie",
        "give_block_notFound": "Blok met de naam %1$d bestaat niet",
        "give_description": "Geeft een item aan een speler.",
        "give_item_invalid": "Ongeldige commandosyntaxis: er bestaat geen dergelijke %s met die gegevenswaarde",
        "give_item_notFound": "Item met de naam %1$d bestaat niet",
        "give_map_invalidData": "Ongeldige kaartgegevens opgegeven",
        "give_map_featureNotFound": "Kan geen verkenningskaart maken. Functie niet gevonden in deze dimensie",
        "give_success": "Gaf %1$s * %2$d aan %3$s",
        "give_successRecipient": "Je hebt %1$s * %2$d ontvangen",
        "give_tagError": "Parseren van gegevenslabel is mislukt: %1$s",
        "help_description": "Biedt hulp/lijst met commando's.",
        "help_footer": "Tip: gebruik de <tab>-toets bij het typen van een commando om het commando of de argumenten automatisch aan te vullen",
        "help_header": "--- Help-pagina %1$d van %2$d weergeven (/help <page>) ---",
        "help_command_aliases": "%s (ook %s):",
        "immutableworld_description": "Stelt de onveranderlijke staat van de wereld in.",
        "immutableworld_info": "immutableworld = %s",
        "kick_description": "Verwijdert een speler uit de server.",
        "kick_description_edu": "Verwijdert een speler uit het spel.",
        "kick_not_found": "Kan speler %1$s niet vinden",
        "kick_not_yourself": "Je kunt jezelf niet uit het spel verwijderen",
        "kick_success": "%1$s is uit het spel verwijderd",
        "kick_success_reason": "%1$s is verwijderd uit het spel: '%2$s'",
        "kick_success_reasonedu": "%1$s is verwijderd uit het spel: %2$s",
        "kick_no_host": "De host mag niet uit het spel worden verwijderd.",
        "kick_no_teacher": "Leraren mogen niet uit het spel worden verwijderd.",
        "kill_successful_edu": "%1$s verwijderd",
        "kill_successful": "%1$s gedood",
        "kill_description_edu": "Verwijdert entiteiten (spelers, mobs, etc.).",
        "kill_description": "Doodt entiteiten (spelers, mobs, etc.).",
        "list_description": "Toont de spelers op de server.",
        "locate_description": "Toont de coördinaten van het dichtstbijzijnde gebouw van een bepaald type.",
        "locate_fail_noplayer": "Het commando kan alleen worden gebruikt door een geldige speler",
        "locate_fail_nostructurefound": "Geen geldige structuur gevonden in deze dimensie",
        "locate_success": "De dichtstbijzijnde %1$s ligt bij blok %2$s, (y?), %3$s",
        "togglecontentlog_toggle": "Hiermee schakel je de contentlogboekopdracht in/uit",
        "togglecontentlog_enabled": "Contentlogboek ingeschakeld",
        "togglecontentlog_disabled": "Contentlogboek uitgeschakeld",
        "me_description": "Hiermee laat je een bericht over jezelf zien.",
        "message_display_incoming": "%1$s fluistert je toe: %2$s",
        "message_display_outgoing": "Jij fluistert %1$s iets toe: %2$s",
        "message_sameTarget": "Je kunt geen privébericht naar jezelf sturen!",
        "mixer_description": "Mixer Interactivity-besturing",
        "mixer_error_unknown": "Er is een onbekende Mixer-fout opgetreden.",
        "mixer_error_notoken": "Je moet zijn aangemeld met een geldig Microsoft-account om Mixer-interactiviteit in te schakelen.",
        "mixer_error_notsupported": "Het apparaat dat je gebruikt, ondersteunt geen Mixer-interactiviteit.",
        "mixer_interactive_error": "Er is een Mixer-fout opgetreden: %1$s",
        "mixer_scene_failed": "Er bestaat geen scène genaamd %1$s. Controleer of je de naam van de scène correct hebt ingevoerd.",
        "mixer_scene_success": "Scène gewijzigd in: %1$s",
        "mixer_start_success": "Mixer-interactiviteit gestart: %1$s",
        "mixer_start_fail_invalidCode": "Kan geen project met id '%1$s' vinden. Controleer of de id of deelcode juist zijn.",
        "mixer_stop_success": "Mixer interactive gestopt.",
        "mixer_stop_fail": "Er is geen interactieve sessie om te stoppen.",
        "mixer_status_notinitialized": "Interactiviteit niet gestart.",
        "mixer_status_enabled": "Interactivity ingeschakeld.",
        "mixer_status_initializing": "Interactiviteit wordt gestart.",
        "mixer_status_pending": "Interactiviteit in behandeling.",
        "mixer_status_disabled": "Interactiviteit uitgeschakeld.",
        "mixer_activatedbutton": "%1$s heeft %2$s geactiveerd.",
        "mobevent_description": "Bepaalt welke mobgebeurtenissen mogen plaatsvinden.",
        "mobevent_eventsEnabledSetToTrue": "Mobgebeurtenissen zijn nu ingeschakeld. Afzonderlijke gebeurtenissen die zijn ingesteld op onwaar, vinden niet plaats.",
        "mobevent_eventsEnabledSetToFalse": "Mobgebeurtenissen zijn nu uitgeschakeld. Afzonderlijke gebeurtenissen vinden niet plaats.",
        "mobevent_eventsEnabledIsTrue": "Mobgebeurtenissen zijn ingeschakeld. Afzonderlijke gebeurtenissen die zijn ingesteld op onwaar, vinden niet plaats.",
        "mobevent_eventsEnabledIsFalse": "Mobgebeurtenissen zijn uitgeschakeld. Afzonderlijke gebeurtenissen vinden niet plaats.",
        "mobevent_eventSetToTrue": "Mobgebeurtenis %s (id: %s) ingesteld op waar.",
        "mobevent_eventSetToTrueButEventsDisabled": "Mobgebeurtenis %s (id: %s) ingesteld op waar, maar mobgebeurtenissen zijn uitgeschakeld.",
        "mobevent_eventSetToFalse": "Mobgebeurtenis %s (id: %s) ingesteld op onwaar.",
        "mobevent_eventIsTrue": "Mobgebeurtenis %s (id: %s) is ingesteld op waar.",
        "mobevent_eventIsTrueButEventsDisabled": "Mobgebeurtenis %s (id: %s) is ingesteld op waar, maar mobgebeurtenissen zijn uitgeschakeld.",
        "mobevent_eventIsFalse": "Mobgebeurtenis %s (id: %s) is ingesteld op onwaar.",
        "op_description": "Kent de operatorstatus aan een speler toe.",
        "op_failed": "Kan geen OP-rechten toekennen (is al OP of hoger): %s",
        "op_success": "OP-rechten toegekend: %s",
        "op_message": "OP-rechten zijn aan jou toegekend",
        "origin_commandblock": "CommandBlock",
        "origin_external": "Extern",
        "origin_devconsole": "DevConsole",
        "origin_script": "Scriptprogramma",
        "origin_server": "Server",
        "origin_teacher": "Leraar",
        "ops_description": "OP-rechten opnieuw laden en toekennen.",
        "ops_reloaded": "OP-rechten opnieuw geladen uit bestand.",
        "ops_set_success": "Operatorniveau ingesteld voor speler %s.",
        "permissions_description": "Hiermee worden machtigingen opnieuw geladen en toegekend.",
        "permissions_reloaded": "Machtigingen opnieuw geladen uit bestand.",
        "permissions_set_failed": "Kan machtigingsniveau %s niet instellen voor speler %s.",
        "permissions_set_success": "Machtigingsniveau %s ingesteld voor speler %s.",
        "permissions_save_failed": "Kan machtigingsniveau %s niet opslaan voor speler %s.",
        "permissions_save_success": "Machtigingsniveau %s opgeslagen voor speler %s.",
        "spawnParticleEmitter_description": "Maakt een particle emitter",
        "particle_description": "Hiermee maak je deeltjes.",
        "particle_notFound": "Onbekende effectnaam (%1$s)",
        "particle_success": "Effect %1$s wordt %2$d keer gespeeld",
        "players_list": "Er zijn %1$d/%2$d spelers online:",
        "players_list_names": "%s",
        "playsound_description": "Hiermee speel je een geluid af.",
        "playsound_playerTooFar": "Speler %1$s is te ver weg om het geluid te horen",
        "playsound_success": "Geluid '%1$s' afgespeeld voor %2$s",
        "position_description": "Schakelt coördinaten voor speler in/uit.",
        "publish_failed": "Kan lokale spel niet hosten",
        "publish_started": "Lokale spel gehost op poort %1$s",
        "querytarget_description": "Haalt informatie op over transformatie, naam en id voor de opgegeven doelentiteit(en).",
        "querytarget_success": "Doelgegevens: %1$s",
        "reload_description": "Hiermee worden alle functiebestanden van alle gedragspakketten opnieuw geladen.",
        "reload_success": "Bestaande functiebestanden zijn opnieuw geladen. Start Minecraft opnieuw op om de NIEUWE functies te laden.",
        "replaceitem_description": "Hiermee vervang je voorwerpen in inventarissen.",
        "replaceitem_failed": "Kan %s slot %d niet vervangen door %d * %s",
        "replaceitem_keepFailed": "Er bevindt zich al een voorwerp %s-vak %d.",
        "replaceitem_noContainer": "Blok op %s is geen container",
        "replaceitem_badSlotNumber": "Kan slot %d niet vervangen. Moet een waarde zijn tussen %d en %d.",
        "replaceitem_success": "%s slot %d vervangen door %d * %s",
        "replaceitem_success_entity": "%s slot %d van %s vervangen door %d * %s",
        "replaceitem_tagError": "Parseren van gegevenslabel is mislukt: %1$s",
        "save_description": "Hiermee controleer je hoe het spel gegevens naar de schijf opslaat.",
        "save_disabled": "Automatisch opslaan van de wereld is uitgeschakeld",
        "save_enabled": "Automatisch opslaan van de wereld is ingeschakeld",
        "save_failed": "Opslaan mislukt: %1$s",
        "save_start": "Opslaan...",
        "save_success": "Slaat de wereld op",
        "save_all_error": "Er is een fout opgetreden bij het pauzeren van de niveauopslag.",
        "save_all_success": "Gegevens opgeslagen. Bestanden kunnen nu worden gekopieerd.",
        "save_off_alreadyOff": "Opslaan is al uitgeschakeld.",
        "save_on_alreadyOn": "Opslaan is al ingeschakeld.",
        "save_on_notDone": "Een eerder proces van opslaan is niet voltooid.",
        "save_on_description": "Schakelt automatische serveropslag in.",
        "save_on_success": "Wijzigingen in het niveau worden hervat.",
        "save_state_description": "Hiermee controleer je of een eerder proces van alles opslaan is voltooid en geef je alle betrokken bestanden weer.",
        "say_description": "Stuurt een bericht in de chat naar andere spelers.",
        "scoreboard_description": "Hiermee houd je de score bij en toon je deze voor bepaalde doelen.",
        "scoreboard_allMatchesFailed": "Alle overeenkomsten zijn mislukt",
        "scoreboard_noMultiWildcard": "Slechts één jokerteken van de gebruiker toegestaan",
        "scoreboard_objectiveNotFound": "Geen doel met de naam '%1$s' gevonden",
        "scoreboard_objectiveReadOnly": "Het doel '%1$s' is alleen-lezen en kan niet worden ingesteld",
        "scoreboard_objectives_add_alreadyExists": "Er bestaat al een doel met de naam '%1$s'",
        "scoreboard_objectives_add_displayTooLong": "De weergavenaam '%1$s' is te lang voor een doel. Deze mag maximaal %2$d tekens bevatten",
        "scoreboard_objectives_add_success": "Nieuw doel '%1$s' is toegevoegd",
        "scoreboard_objectives_add_tooLong": "De naam '%1$s' is te lang voor een doel. Deze mag maximaal %2$d tekens bevatten",
        "scoreboard_objectives_add_wrongType": "Ongeldig criteriumtype '%1$s' voor doel",
        "scoreboard_objectives_add_needName": "Een doel moet een naam hebben.",
        "scoreboard_objectives_description": "Wijzig de scoreborddoelen.",
        "scoreboard_objectives_list_count": "%1$d doel(en) weergegeven op het scorebord:",
        "scoreboard_objectives_list_empty": "Eer worden geen doelen op het scorebord weergegeven",
        "scoreboard_objectives_list_entry": "- %1$s: wordt weergegeven als '%2$s' en is type '%3$s'",
        "scoreboard_objectives_remove_success": "Doel '%1$s' is verwijderd",
        "scoreboard_objectives_setdisplay_invalidSlot": "Geen dergelijk weergavevak '%1$s'",
        "scoreboard_objectives_setdisplay_successCleared": "Weergavevak '%1$s' voor doel is gewist",
        "scoreboard_objectives_setdisplay_successSet": "Hiermee stel je de weergave van het doel in vak '%1$s' in op '%2$s'",
        "scoreboard_players_add_success": "%1$d toegevoegd aan [%2$s] voor %3$s (nu %4$d)",
        "scoreboard_players_add_multiple_success": "%1$d toegevoegd aan [%2$s] voor %3$d entiteiten",
        "scoreboard_players_nameNotFound": "Je moet een spelernaam opgeven.",
        "scoreboard_players_enable_noTrigger": "Doel %1$s is geen trigger",
        "scoreboard_players_enable_success": "Trigger %1$s is ingeschakeld voor %2$s",
        "scoreboard_players_list_count": "Geeft %1$d gevolgde spelers weer op het scorebord:",
        "scoreboard_players_list_empty": "Er worden geen gevolgde spelers op het scorebord weergegeven",
        "scoreboard_players_list_player_count": "Geeft %1$d gevolgde doel(en) weer voor %2$s:",
        "scoreboard_players_list_player_empty": "Er zijn geen scores vastgelegd voor speler %1$s",
        "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_players_operation_invalidOperation": "Ongeldige bewerking %1$s",
        "scoreboard_players_operation_notFound": "Geen %1$s-score voor %2$s gevonden",
        "scoreboard_players_operation_success": "[%1$s] bijgewerkt voor %2$d entiteiten",
        "scoreboard_players_offlinePlayerName": "Speler offline",
        "scoreboard_players_random_invalidRange": "Minimum %1$d is niet minder dan maximum %2$d",
        "scoreboard_players_remove_success": "%1$d verwijderd uit [%2$s] voor %3$s (nu %4$d)",
        "scoreboard_players_remove_multiple_success": "%1$d verwijderd uit [%2$s] voor %3$d entiteiten",
        "scoreboard_players_reset_success": "Scores van %1$s resetten",
        "scoreboard_players_resetscore_success": "Score %1$s van speler %2$s resetten",
        "scoreboard_players_set_success": "[%1$s] ingesteld op %3$d voor %2$s",
        "scoreboard_players_set_multiple_success": "[%1$s] ingesteld op to %3$d voor %2$d entiteiten",
        "scoreboard_players_set_tagError": "Kan dataTag niet parseren, reden: %1$s",
        "scoreboard_players_set_tagMismatch": "De dataTag komt niet overeen voor %1$s",
        "scoreboard_players_score_notFound": "Geen %1$s-score voor %2$s gevonden",
        "scoreboard_players_test_failed": "Score %1$d ligt NIET binnen het bereik van %2$d tot %3$d",
        "scoreboard_players_test_success": "Score %1$d ligt binnen het bereik van %2$d tot %3$d",
        "scoreboard_teamNotFound": "Geen team met de naam '%1$s' gevonden",
        "scoreboard_teams_add_alreadyExists": "Er bestaat al een team met de naam '%1$s'",
        "scoreboard_teams_add_displayTooLong": "De weergavenaam '%1$s' is te lang voor een team. Deze mag maximaal %2$d tekens bevatten",
        "scoreboard_teams_add_success": "Nieuw team '%1$s' is toegevoegd",
        "scoreboard_teams_add_tooLong": "De naam '%1$s' is te lang voor een team. Deze mag maximaal %2$d tekens bevatten",
        "scoreboard_teams_empty_alreadyEmpty": "Team %1$s is al leeg. Kan geen niet-bestaande spelers verwijderen",
        "scoreboard_teams_empty_success": "Alle %1$d spelers uit team %2$s verwijderd",
        "scoreboard_teams_join_failure": "Kan %1$d speler(s) niet toevoegen aan team %2$s: %3$s",
        "scoreboard_teams_join_success": "%1$d speler(s) toegevoegd aan team %2$s: %3$s",
        "scoreboard_teams_leave_failure": "Kan %1$d speler(s) niet verwijderen uit hun teams: %2$s",
        "scoreboard_teams_leave_noTeam": "Je zit niet in een team",
        "scoreboard_teams_leave_success": "%1$d speler(s) verwijderd uit hun teams: %2$s",
        "scoreboard_teams_list_count": "Er worden %1$d teams op het scorebord weergegeven:",
        "scoreboard_teams_list_empty": "Er zijn geen teams op het scorebord geregistreerd",
        "scoreboard_teams_list_entry": "- %1$s: '%2$s' heeft %3$d spelers",
        "scoreboard_teams_list_player_count": "Er worden %1$d speler(s) weergegeven in team %2$s:",
        "scoreboard_teams_list_player_empty": "Team %1$s heeft geen spelers",
        "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_teams_option_noValue": "Geldige waarden voor optie %1$s zijn: %2$s",
        "scoreboard_teams_option_success": "Optie %1$s voor team %2$s instellen op %3$s",
        "scoreboard_teams_remove_success": "Team %1$s verwijderd",
        "seed_success": "Seed: %1$s",
        "setblock_description": "Wijzigt een blok in een ander blok.",
        "setblock_failed": "Kan blok niet plaatsen",
        "setblock_noChange": "Het blok kan niet worden geplaatst",
        "setblock_notFound": "Er bestaat geen blok met id/naam %1$s",
        "setblock_outOfWorld": "Kan blok niet buiten de wereld plaatsen",
        "setblock_success": "Blok geplaatst",
        "setblock_tagError": "Parseren van gegevenslabel is mislukt: %1$s",
        "setidletimeout_success": "Time-out voor inactiviteit is ingesteld op %1$d minuten.",
        "setfixedinvslots_description": "Stelt het aantal vaste inventarisvakken in voor de server.",
        "setfixedinvslots_success": "Aantal vaste inventarisslots ingesteld op %1$d",
        "setfixedinvslot_description": "Stelt een vaste slot in voor een bepaald item.",
        "setfixedinvslot_success": "Vaste inventarisslot %1$d is ingesteld op %2$s",
        "globalpause_description": "Stelt pauzestatus in of haalt deze op van het spel voor alle spelers.",
        "globalpause_success": "Pauzestatus ingesteld of opgehaald",
        "setmaxplayers_description": "Hiermee stel je het maximumaantal spelers voor deze spelsessie in.",
        "setmaxplayers_success": "Stel het max. aantal spelers in op %1$d.",
        "setmaxplayers_success_upperbound": "(Gebonden aan maximumaantal toegestane verbindingen)",
        "setmaxplayers_success_lowerbound": "(Gebonden aan huidig speleraantal)",
        "setworldspawn_description": "Stelt het spawnen van de wereld in.",
        "setworldspawn_success": "Spawnpunt van de wereld ingesteld op (%1$d, %2$d, %3$d)",
        "setworldspawn_wrongDimension": "Het spawnpunt van de wereld kan niet in deze dimensie worden ingesteld",
        "spawnpoint_success_single": "Spawnpunt van %1$s ingesteld op (%2$d, %3$d, %4$d)",
        "spawnpoint_description": "Stelt het spawnpunt van een speler in.",
        "spawnpoint_success_multiple_specific": "Spawnpunt voor %1$s ingesteld op (%2$d, %3$d, %4$d)",
        "spawnpoint_success_multiple_generic": "Stel spawnpunt in voor %1$s",
        "spawnpoint_wrongDimension": "Het spawnpunt kan niet in deze dimensie worden ingesteld",
        "spreadplayers_description": "Hiermee teleporteer je entiteiten naar willekeurige locaties.",
        "spreadplayers_failure_players": "Kan %1$s spelers niet verspreiden rondom %2$s,%3$s (te veel spelers voor de ruimte - gebruik een verspreiding van maximaal %4$s)",
        "spreadplayers_failure_teams": "Kan %1$s teams niet verspreiden rondom %2$s,%3$s (te veel spelers voor de ruimte - gebruik een verspreiding van maximaal %4$s)",
        "spreadplayers_info_players": "(Gemiddelde afstand tussen spelers is %1$s blokken uit elkaar na %2$s herhalingen)",
        "spreadplayers_info_teams": "(Gemiddelde afstand tussen teams is %1$s blokken uit elkaar na %2$s herhalingen)",
        "spreadplayers_spreading_players": "%1$s spelers %2$s blokken verspreiden rondom %3$s,%4$s (min. %5$s blokken uit elkaar)",
        "spreadplayers_spreading_teams": "%1$s teams %2$s blokken verspreiden rondom %3$s,%4$s (min. %5$s blokken uit elkaar)",
        "spreadplayers_success_players": "%1$s spelers zijn verspreid rondom %2$s,%3$s",
        "spreadplayers_success_teams": "%1$s teams zijn verspreid rondom %2$s,%3$s",
        "stats_cleared": "%1$s statistieken gewist",
        "stats_failed": "Ongeldige parameters",
        "stats_noCompatibleBlock": "Blok op %1$d, %2$d, %3$d kan geen statistieken bijhouden",
        "stats_success": "%1$s statistieken opslaan in %2$s op %3$s",
        "stop_description": "Stopt de server.",
        "stop_start": "De server wordt stopgezet",
        "stopsound_description": "Hiermee stop je een geluid.",
        "stopsound_success": "Geluid %s voor %s gestopt",
        "stopsound_success_all": "Alle geluiden voor %s gestopt",
        "summon_description": "Roept een entiteit op.",
        "summon_failed": "Kan het object niet oproepen",
        "summon_outOfWorld": "Kan het object niet buiten de wereld oproepen",
        "summon_success": "Object is opgeroepen",
        "summon_tagError": "Parseren van gegevenslabel is mislukt: %1$s",
        "tag_description": "Beheert labels die in entiteiten zijn opgeslagen.",
        "tag_add_failed": "Doel heeft de label al of er zijn teveel labels",
        "tag_add_success_single": "Label '%1$s' toegevoegd aan %2$s",
        "tag_add_success_multiple": "Label '%1$s' toegevoegd aan %2$d entiteiten",
        "tag_list_single_empty": "%s heeft geen labels",
        "tag_list_single_success": "%1$s heeft %2$d labels: %3$s",
        "tag_list_multiple_empty": "%d entiteiten hebben geen labels",
        "tag_list_multiple_success": "%1$d entiteiten hebben in totaal %2$d labels: %3$s",
        "tag_remove_failed": "Doel heeft deze label niet",
        "tag_remove_success_single": "Label '%1$s' verwijderd van %2$s",
        "tag_remove_success_multiple": "Label '%1$s' verwijderd van %2$d entiteiten",
        "tell_description": "Stuurt een privébericht naar één of meerdere spelers.",
        "tellraw_description": "Stuurt een JSON-bericht naar spelers.",
        "tellraw_jsonException": "Ongeldige JSON: %1$s",
        "tellraw_jsonStringException": "Ongeldige JSON-reeksgegevens.",
        "tellraw_error_noData": "Er zijn geen gegevens opgegeven.",
        "tellraw_error_notArray": "Rawtext-object moet een array bevatten. Bijvoorbeeld: \"rawtext\":[{..}]",
        "tellraw_error_textNotString": "text-veld in rawtext moet een reeks bevatten. Bijvoorbeeld: \"rawtext\":[{\"text\": \"text to display\"}]",
        "tellraw_error_translateNotString": "translate-veld in rawtext moet een taalsleutel bevatten. Bijvoorbeeld: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
        "tellraw_error_withNotArrayOrRawText": "met veld met onbewerkte tekst moet een matrix of een ander object met onbewerkte tekst bevatten. Voorbeeld 1: \"onbewerkte tekst\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Voorbeeld 2: \"onbewerkte tekst\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
        "tellraw_error_itemIsNotObject": "JSON-waarde in rawtext-array is geen object. Bijvoorbeeld: \"rawtext\": [{ \"text\" : \"my text\" }]",
        "educlientinfo_description": "Haal tenant-id en hoststatus op. Bedoeld voor CM.",
        "testfor_description": "Hiermee tel je het aantal entiteiten (spelers, mobs, voorwerpen, enz.) dat aan bepaalde voorwaarden voldoet.",
        "testfor_failure": "%1$s komt niet overeen met de vereiste gegevensstructuur",
        "testfor_success": "%1$s gevonden",
        "testfor_tagError": "Parseren van gegevenslabel is mislukt: %1$s",
        "testforblock_description": "Controleert of een bepaald blok zich op een bepaalde locatie bevindt.",
        "testforblock_failed_data": "Het blok op %1$d,%2$d,%3$d komt niet overeen met de verwachte blokstatus.",
        "testforblock_failed_nbt": "Het blok op %1$d,%2$d,%3$d had niet de vereiste NBT-sleutels.",
        "testforblock_failed_tile": "Het blok op %1$d,%2$d,%3$d is %4$s (verwacht: %5$s).",
        "testforblock_failed_tileEntity": "Het blok op %1$d,%2$d,%3$d is geen tegelentiteit en biedt geen ondersteuning voor labelmatching.",
        "testforblock_outOfWorld": "Kan niet testen op blokken buiten de wereld",
        "testforblock_success": "Blok is gevonden op %1$d,%2$d,%3$d.",
        "testforblocks_description": "Controleert of de blokken in twee regio's overeenkomen.",
        "tickingarea_description": "Tikgebieden toevoegen, verwijderen of weergeven.",
        "tickingarea_inuse": "%1$d/%2$d tikgebieden in gebruik.",
        "tickingarea_noneExist_currentDimension": "Er bestaan geen tikgebieden in de huidige dimensie.",
        "tickingarea_add_bounds_success": "Tikgebied toegevoegd van %1$d naar %2$d.",
        "tickingarea_add_circle_success": "Tikgebied toegevoegd en gecentreerd op %1$d met een straal van %2$d segmenten.",
        "tickingarea_add_failure": "Maximumaantal tikgebieden (%1$d) is al bereikt. Kan geen tikgebieden meer toevoegen.",
        "tickingarea_add_conflictingname": "Er bestaat al een tikgebied met de naam %1$s.",
        "tickingarea_add_chunkfailure": "Tikgebied bevat meer dan %1$d segmenten, waardoor het te groot is en niet kan worden gemaakt.",
        "tickingarea_add_radiusfailure": "Straal mag maximaal %1$d zijn. Tikgebied is te groot en kan niet worden gemaakt.",
        "tickingarea_remove_success": "Tikgebied(en) verwijderd",
        "tickingarea_remove_failure": "Er bestaan in de huidige dimensie geen tikgebieden met de blokpositie %1$d.",
        "tickingarea_remove_byname_failure": "Er bestaan in de huidige dimensie geen tikgebieden met de naam %1$s.",
        "tickingarea_remove_all_success": "Tikgebied(en) verwijderd",
        "tickingarea_remove_all_failure": "Er bestaan geen tikgebieden in de huidige dimensie.",
        "tickingarea_list_chunks": "segmenten",
        "tickingarea_list_circle_radius": "Straal",
        "tickingarea_list_success_currentDimension": "Lijst van alle tikgebieden in de huidige dimensie",
        "tickingarea_list_success_allDimensions": "Lijst van alle tikgebieden in alle dimensies",
        "tickingarea_list_failure_allDimensions": "Geen enkele dimensie bevat tikgebieden.",
        "tickingarea_list_to": "naar",
        "tickingarea_list_type_circle": "Cirkel",
        "time_added": "%1$d toegevoegd aan de tijd",
        "time_description": "Hiermee kun je de speltijd van de wereld wijzigen of opvragen.",
        "time_disabled": "Altijd dag is ingeschakeld voor dit level.",
        "time_query_day": "Dag is %d",
        "time_query_daytime": "Tijd van de dag is %d",
        "time_query_gametime": "Speltijd is %d",
        "time_set": "Tijd ingesteld op %1$d",
        "time_stop": "Tijd %1$s",
        "title_description": "Bepaalt schermtitels.",
        "title_success": "Title-commando is uitgevoerd",
        "titleraw_description": "Bepaalt schermtitels met JSON-berichten.",
        "toggledownfall_description": "Schakelt het weer in en uit.",
        "tp_description": "Teleporteert entiteiten (spelers, mobs, etc.).",
        "tp_notSameDimension": "Kan niet teleporteren omdat spelers zich niet in dezelfde dimensie bevinden",
        "tp_outOfWorld": "Kan entiteiten niet buiten de wereld teleporteren",
        "tp_permission": "Je bent niet gemachtigd om deze slashopdracht te gebruiken.",
        "tp_safeTeleportFail": "Kan %1$s niet teleporteren naar %2$s omdat er zich blokken in het gebied bevinden.",
        "tp_far": "Kan %1$s niet teleporteren naar het niet-geladen gebied bij %2$s",
        "tp_success": "%1$s geteleporteerd naar %2$s",
        "tp_successVictim": "Je bent geteleporteerd naar %1$s",
        "tp_success_coordinates": "%1$s geteleporteerd naar %2$s, %3$s, %4$s",
        "transferserver_description": "Brengt een speler over naar een andere server.",
        "transferserver_successful": "Overgebrachte speler",
        "transferserver_invalid_port": "Ongeldige poort (0-65535)",
        "trigger_description": "Hiermee stel je een te activeren trigger in.",
        "trigger_disabled": "Trigger %1$s is niet ingeschakeld",
        "trigger_invalidMode": "Ongeldige triggermodus %1$s",
        "trigger_invalidObjective": "Ongeldige triggernaam %1$s",
        "trigger_invalidPlayer": "Alleen spelers mogen het commando /trigger gebruiken",
        "trigger_success": "Trigger %1$s gewijzigd met %2$s %3$s",
        "unban_failed": "Kan verbanning speler %1$s niet ongedaan maken",
        "unban_success": "Verbanning speler %1$s ongedaan gemaakt",
        "unbanip_invalid": "Je hebt een ongeldig IP-adres ingevoerd",
        "unbanip_success": "Verbanning IP-adres %1$s ongedaan gemaakt",
        "validategamelighting_description": "Spelverlichting voor een bepaald gebied valideren",
        "validategamelighting_checkRegionTooBig": "Gebied om te controleren op verlichting is te groot. (%1$d > %2$d)",
        "validategamelighting_outOfWorld": "Kan niet controleren op verlichting buiten de wereld",
        "weather_clear": "Veranderen naar helder weer",
        "weather_description": "Stelt het weer in.",
        "weather_disabled": "Weercyclus is niet ingeschakeld voor dit level.",
        "weather_query": "Het weer is: %s",
        "weather_query_clear": "helder",
        "weather_query_rain": "regen",
        "weather_query_thunder": "onweer",
        "weather_rain": "Veranderen naar regenachtig weer",
        "weather_thunder": "Veranderen naar regen en onweer",
        "whitelist_add_failed": "Kan %1$s niet toevoegen aan de goedgekeurde lijst",
        "whitelist_add_success": "%1$s toegevoegd aan de goedgekeurde lijst",
        "whitelist_description": "Beheert de goedgekeurde lijst van de server.",
        "whitelist_disabled": "De goedgekeurde lijst is uitgeschakeld",
        "whitelist_enabled": "De goedgekeurde lijst is ingeschakeld",
        "whitelist_list": "Er zijn %1$d (van de %2$d zichtbare) spelers van de goedgekeurde lijst:",
        "whitelist_reloaded": "Goedgekeurde lijst is opnieuw geladen uit bestand.",
        "whitelist_remove_failed": "Kan %1$s niet verwijderen van de goedgekeurde lijst",
        "whitelist_remove_success": "%1$s is verwijderd van de goedgekeurde lijst",
        "world_age_description": "Verandert de leeftijd van de wereld of vraagt deze op (tijd sinds aanmaakdatum).",
        "world_age_added": "%1$d toegevoegd aan leeftijd van de wereld",
        "world_age_query": "Leeftijd van de wereld is %d",
        "world_age_set": "De leeftijd van de wereld instellen op %1$d",
        "worldborder_center_success": "Midden van wereldkader instellen op %1$s,%2$s",
        "worldborder_damage_amount_success": "Hoeveelheid schade aan wereldkader instellen op %1$s per blok (van %2$s per blok)",
        "worldborder_damage_buffer_success": "Schadebuffer voor wereldkader instellen op %1$s blokken (van %2$s blokken)",
        "worldborder_get_success": "Wereldkader is momenteel %1$s blokken breed",
        "worldborder_set_success": "Wereldkader instellen op %1$s blokken breed (van %2$s blokken)",
        "worldborder_setSlowly_grow_success": "Wereldkader vergroten naar %1$s blokken breed (vanaf %2$s blokken) gedurende %3$s seconden",
        "worldborder_setSlowly_shrink_success": "Wereldkader verkleinen naar %1$s blokken breed (vanaf %2$s blokken) gedurende %3$s seconden",
        "worldborder_warning_distance_success": "Waarschuwing voor wereldkader instellen op %1$s blokken afstand (vanaf %2$s blokken)",
        "worldborder_warning_time_success": "Waarschuwing voor wereldkader instellen op %1$s seconden afstand (vanaf %2$s seconden)",
        "worldbuilder_description": "Schakel wereldbouwerstatus van aanroeper in-/uit.",
        "worldbuilder_success": "Status van wereldbouwer bijgewerkt naar %1$s",
        "wsserver_description": "Probeert een verbinding te maken met de websocket-server via de opgegeven URL.",
        "wsserver_invalid_url": "De opgegevens server-URL is ongeldig",
        "wsserver_request_existing": "Er wordt momenteel een andere verbindingsaanvraag uitgevoerd",
        "wsserver_request_failed": "Kan geen verbinding maken met server: %1$s",
        "wsserver_success": "Verbinding gemaakt met: %1$s",
        "xp_description": "Hiermee geef je ervaring aan een speler of neem je deze af.",
        "xp_failure_widthdrawXp": "Kan speler geen negatieve ervaringspunten geven",
        "xp_success": "%1$d ervaring gegeven aan %2$s",
        "xp_success_levels": "%1$d niveaus gegevens aan %2$s",
        "xp_success_negative_levels": "%1$d niveaus afgenomen van %2$s"
    },
    item:{
        "air": [
            "Lucht"
        ],
        "apple": [
            "Appel"
        ],
        "golden_apple": [
            "Gouden appel"
        ],
        "appleenchanted": [
            "Betoverde appel"
        ],
        "armor_stand": [
            "Harnashouder"
        ],
        "arrow": [
            "Pijl"
        ],
        "tipped_arrow": [
            "Pijlpunt"
        ],
        "banner": [
            "Zwarte banier",
            "Zwarte banier",
            "Rode banier",
            "Groene banier",
            "Bruin banier",
            "Blauwe banier",
            "Paarse banier",
            "Cyaanblauwe banier",
            "Lichtgrijze banier",
            "Grijze banier",
            "Roze banier",
            "Limoengroene banier",
            "Gele banier",
            "Lichtblauwe banier",
            "Magenta banier",
            "Oranje banier",
            "Witte banier"
        ],
        "bed": [
            "Bed",
            "Wit bed",
            "Oranje bed",
            "Magenta bed",
            "Lichtblauw bed",
            "Geel bed",
            "Limoengroen bed",
            "Roze bed",
            "Grijs bed",
            "Lichtgrijs bed",
            "Cyaanblauw bed",
            "Paars bed",
            "Blauw bed",
            "Bruin bed",
            "Groen bed",
            "Rood bed",
            "Zwart bed"
        ],
        "bell": [
            "Bel"
        ],
        "steak": [
            "Steak"
        ],
        "beef": [
            "Rauwe biefstuk"
        ],
        "beetroot": [
            "Biet"
        ],
        "beetroot_soup": [
            "Bietensoep"
        ],
        "blaze_powder": [
            "Blaze-poeder"
        ],
        "blaze_rod": [
            "Blaze-staaf"
        ],
        "boat": [
            "Eiken boot",
            "Eiken boot",
            "Sparren boot",
            "Berken boot",
            "Junglehouten boot",
            "Acacia boot",
            "Donkereiken boot"
        ],
        "bone": [
            "Bot"
        ],
        "book": [
            "Boek"
        ],
        "chainmail_boots": [
            "Maliënlaarzen"
        ],
        "leather_boots": [
            "Leren laarzen"
        ],
        "diamond_boots": [
            "Diamanten laarzen"
        ],
        "golden_boots": [
            "Gouden laarzen"
        ],
        "iron_boots": [
            "IJzeren laarzen"
        ],
        "bow": [
            "Boog"
        ],
        "bowl": [
            "Kom"
        ],
        "bread": [
            "Brood"
        ],
        "brewing_stand": [
            "Brouwstandaard"
        ],
        "brick": [
            "Baksteen"
        ],
        "bucket": [
            "Emmer"
        ],
        "bucketLava": [
            "Lava-emmer"
        ],
        "bucketWater": [
            "Wateremmer"
        ],
        "bucketFish": [
            "Emmer kabeljauw"
        ],
        "bucketSalmon": [
            "Emmer zalm"
        ],
        "bucketTropical": [
            "Emmer tropische vis"
        ],
        "bucketPuffer": [
            "Emmer kogelvis"
        ],
        "bucketCustomFish": [
            "Emmer"
        ],
        "tropicalColorWhite": [
            "Wit"
        ],
        "tropicalColorOrange": [
            "Oranje"
        ],
        "tropicalColorMagenta": [
            "Magenta"
        ],
        "tropicalColorSky": [
            "Hemelblauw"
        ],
        "tropicalColorYellow": [
            "Geel"
        ],
        "tropicalColorLime": [
            "Limoengroen"
        ],
        "tropicalColorRose": [
            "Roze"
        ],
        "tropicalColorGray": [
            "Grijs"
        ],
        "tropicalColorSilver": [
            "Zilver"
        ],
        "tropicalColorTeal": [
            "Groenblauw"
        ],
        "tropicalColorPlum": [
            "Donkerpaars"
        ],
        "tropicalColorBlue": [
            "Blauw"
        ],
        "tropicalColorBrown": [
            "Bruin"
        ],
        "tropicalColorGreen": [
            "Groen"
        ],
        "tropicalColorRed": [
            "Rood"
        ],
        "tropicalBodyKobSingle": [
            "%1$s kob"
        ],
        "tropicalBodySunstreakSingle": [
            "%1$s zonnestreep"
        ],
        "tropicalBodySnooperSingle": [
            "%1$s snuffel"
        ],
        "tropicalBodyDasherSingle": [
            "%1$s sprinter"
        ],
        "tropicalBodyBrinelySingle": [
            "%1$s pekeltje"
        ],
        "tropicalBodySpottySingle": [
            "%1$s vlekje"
        ],
        "tropicalBodyFlopperSingle": [
            "%1$s flapper"
        ],
        "tropicalBodyStripeySingle": [
            "%1$s streepje"
        ],
        "tropicalBodyGlitterSingle": [
            "%1$s glitter"
        ],
        "tropicalBodyBlockfishSingle": [
            "%1$s blokvis"
        ],
        "tropicalBodyBettySingle": [
            "%1$s betty"
        ],
        "tropicalBodyClayfishSingle": [
            "%1$s kleivis"
        ],
        "tropicalBodyKobMulti": [
            "%1$s-%2$s kobben"
        ],
        "tropicalBodySunstreakMulti": [
            "%1$s-%2$s zonnestrepen"
        ],
        "tropicalBodySnooperMulti": [
            "%1$s-%2$s snuffels"
        ],
        "tropicalBodyDasherMulti": [
            "%1$s-%2$s sprinters"
        ],
        "tropicalBodyBrinelyMulti": [
            "%1$s-%2$s pekeltjes"
        ],
        "tropicalBodySpottyMulti": [
            "%1$s-%2$s vlekjes"
        ],
        "tropicalBodyFlopperMulti": [
            "%1$s-%2$s flappers"
        ],
        "tropicalBodyStripeyMulti": [
            "%1$s-%2$s streepjes"
        ],
        "tropicalBodyGlitterMulti": [
            "%1$s-%2$s glitters"
        ],
        "tropicalBodyBlockfishMulti": [
            "%1$s-%2$s blokvissen"
        ],
        "tropicalBodyBettyMulti": [
            "%1$s-%2$s betty's"
        ],
        "tropicalBodyClayfishMulti": [
            "%1$s-%2$s kleivissen"
        ],
        "tropicalSchoolAnemone": [
            "Anemoon"
        ],
        "tropicalSchoolBlackTang": [
            "Zwarte zeilvindoktersvis"
        ],
        "tropicalSchoolBlueDory": [
            "Blauwe Dory"
        ],
        "tropicalSchoolButterflyFish": [
            "Koraalvlinder"
        ],
        "tropicalSchoolCichlid": [
            "Chichliden"
        ],
        "tropicalSchoolClownfish": [
            "Clownvis"
        ],
        "tropicalSchoolCottonCandyBetta": [
            "Roze betta splendens"
        ],
        "tropicalSchoolDottyback": [
            "Dwergzeebaars"
        ],
        "tropicalSchoolEmperorRedSnapper": [
            "Rode keizersnapper"
        ],
        "tropicalSchoolGoatfish": [
            "Zeebarbel"
        ],
        "tropicalSchoolMoorishIdol": [
            "Maskerwimpelvis"
        ],
        "tropicalSchoolOrnateButterfly": [
            "Sierlijke koraalvlinder"
        ],
        "tropicalSchoolParrotfish": [
            "Papegaaivis"
        ],
        "tropicalSchoolQueenAngelFish": [
            "Koningin engelvis"
        ],
        "tropicalSchoolRedCichlid": [
            "Rode chichliden"
        ],
        "tropicalSchoolRedLippedBlenny": [
            "Roodlippige vleermuisvis"
        ],
        "tropicalSchoolRedSnapper": [
            "Rode snapper"
        ],
        "tropicalSchoolThreadfin": [
            "Draadvis"
        ],
        "tropicalSchoolTomatoClown": [
            "Rode anemoonvis"
        ],
        "tropicalSchoolTriggerfish": [
            "Trekkervis"
        ],
        "tropicalSchoolYellowTang": [
            "Gele zeilvindoktersvis"
        ],
        "tropicalSchoolYellowtailParrot": [
            "Gele papegaaivis"
        ],
        "cake": [
            "Taart"
        ],
        "camera": [
            "Camera"
        ],
        "golden_carrot": [
            "Gouden wortel"
        ],
        "carrotOnAStick": [
            "Wortel aan een stokje"
        ],
        "warped_fungus_on_a_stick": [
            "Warblauwe zwam aan een stok"
        ],
        "carrot": [
            "Wortel"
        ],
        "cauldron": [
            "Ketel"
        ],
        "coal": [
            "Steenkool",
            null,
            "Houtskool"
        ],
        "chainmail_chestplate": [
            "Maliënborstplaat"
        ],
        "leather_chestplate": [
            "Leren tuniek"
        ],
        "diamond_chestplate": [
            "Diamanten borstplaat"
        ],
        "golden_chestplate": [
            "Gouden borstplaat"
        ],
        "iron_chestplate": [
            "IJzeren borstplaat"
        ],
        "chorus_fruit": [
            "Koorfruit"
        ],
        "chorus_fruit_popped": [
            "Rijp koorfruit"
        ],
        "cooked_beef": [
            "Gebakken biefstuk"
        ],
        "cooked_chicken": [
            "Gebakken kip"
        ],
        "cooked_porkchop": [
            "Gebakken karbonade"
        ],
        "chicken": [
            "Rauwe kip"
        ],
        "clay_ball": [
            "Klei"
        ],
        "clock": [
            "Klok"
        ],
        "comparator": [
            "Redstone-comparator"
        ],
        "compass": [
            "Kompas"
        ],
        "lodestonecompass": [
            "Zeilsteenkompas"
        ],
        "cookie": [
            "Koekje"
        ],
        "crossbow": [
            "Kruisboog"
        ],
        "diamond": [
            "Diamant"
        ],
        "repeater": [
            "Redstone-herhaler"
        ],
        "acacia_door": [
            "Acacia deur"
        ],
        "birch_door": [
            "Berken deur"
        ],
        "dark_oak_door": [
            "Donkereiken deur"
        ],
        "iron_door": [
            "IJzeren deur"
        ],
        "jungle_door": [
            "Junglehouten deur"
        ],
        "wooden_door": [
            "Eiken deur"
        ],
        "spruce_door": [
            "Sparren deur"
        ],
        "crimson_door": [
            "Karmijnrode deur"
        ],
        "warped_door": [
            "Warblauwe deur"
        ],
        "dragon_breath": [
            "Drakenadem"
        ],
        "dye": [
            "Inktzak",
            "Inktzak",
            "Rode verf",
            "Groene verf",
            "Cacaobonen",
            "Lapis lazuli",
            "Paarse kleurstof",
            "Cyaanblauwe kleurstof",
            "Lichtgrijze kleurstof",
            "Grijze kleurstof",
            "Roze kleurstof",
            "Limoengroene kleurstof",
            "Gele verf",
            "Lichtblauwe kleurstof",
            "Magenta kleurstof",
            "Oranje kleurstof",
            "Beendermeel",
            "Zwarte verf",
            "Bruine verf",
            "Blauwe verf",
            "Witte verf"
        ],
        "egg": [
            "Ei"
        ],
        "elytra": [
            "Elytra"
        ],
        "emerald": [
            "Smaragd"
        ],
        "emptyMap": [
            "Lege kaart"
        ],
        "emptyLocatorMap": [
            "Lege zoekkaart"
        ],
        "emptyPotion": [
            "Waterflesje"
        ],
        "enchanted_book": [
            "Betoverd boek"
        ],
        "end_crystal": [
            "End-kristal"
        ],
        "end_rod": [
            "End-staaf"
        ],
        "ender_eye": [
            "Enderoog"
        ],
        "ender_pearl": [
            "Enderparel"
        ],
        "experience_bottle": [
            "Betoverfles"
        ],
        "feather": [
            "Veer"
        ],
        "fermented_spider_eye": [
            "Kolkend spinnenoog"
        ],
        "fireball": [
            "Vuurlading"
        ],
        "fireworks": [
            "Vuurwerkraket"
        ],
        "fireworksCharge": [
            "Vuurwerkster"
        ],
        "clownfish": [
            "Tropische vis"
        ],
        "cooked_fish": [
            "Gekookte kabeljauw"
        ],
        "fish": [
            "Rauwe kabeljauw"
        ],
        "pufferfish": [
            "Kogelvis"
        ],
        "cooked_salmon": [
            "Gebakken zalm"
        ],
        "salmon": [
            "Rauwe zalm"
        ],
        "fishing_rod": [
            "Vishengel"
        ],
        "flint": [
            "Vuursteen"
        ],
        "flint_and_steel": [
            "Vuursteen en staal"
        ],
        "flower_pot": [
            "Bloempot"
        ],
        "frame": [
            "Itemframe"
        ],
        "ghast_tear": [
            "Ghast-traan"
        ],
        "glass_bottle": [
            "Glazen fles"
        ],
        "gold_nugget": [
            "Goudklompje"
        ],
        "iron_nugget": [
            "IJzerklompje"
        ],
        "diamond_axe": [
            "Diamanten bijl"
        ],
        "golden_axe": [
            "Gouden bijl"
        ],
        "iron_axe": [
            "IJzeren bijl"
        ],
        "stone_axe": [
            "Stenen bijl"
        ],
        "wooden_axe": [
            "Houten bijl"
        ],
        "chainmail_helmet": [
            "Maliënhelm"
        ],
        "leather_helmet": [
            "Leren kap"
        ],
        "diamond_helmet": [
            "Diamanten helm"
        ],
        "golden_helmet": [
            "Gouden helm"
        ],
        "iron_helmet": [
            "IJzeren helm"
        ],
        "diamond_hoe": [
            "Diamanten schoffel"
        ],
        "golden_hoe": [
            "Gouden schoffel"
        ],
        "iron_hoe": [
            "IJzeren schoffel"
        ],
        "stone_hoe": [
            "Stenen schoffel"
        ],
        "wooden_hoe": [
            "Houten schoffel"
        ],
        "honey_bottle": [
            "Fles honing"
        ],
        "honeycomb": [
            "Honingraat"
        ],
        "horsearmordiamond": [
            "Diamanten paardenpantser"
        ],
        "horsearmorgold": [
            "Gouden paardenpantser"
        ],
        "horsearmoriron": [
            "IJzeren paardenpantser"
        ],
        "horsearmorleather": [
            "Leren paardenpantser"
        ],
        "gold_ingot": [
            "Goudstaaf"
        ],
        "iron_ingot": [
            "IJzerstaaf"
        ],
        "netherite_ingot": [
            "Netherietstaaf"
        ],
        "netherite_scrap": [
            "Netherieten schroot"
        ],
        "netherite_sword": [
            "Netherieten zwaard"
        ],
        "netherite_pickaxe": [
            "Netherieten pikhouweel"
        ],
        "netherite_axe": [
            "Netherieten bijl"
        ],
        "netherite_shovel": [
            "Netherieten spade"
        ],
        "netherite_hoe": [
            "Netherieten schoffel"
        ],
        "netherite_boots": [
            "Netherieten laarzen"
        ],
        "netherite_leggings": [
            "Netherieten beenbeschermers"
        ],
        "netherite_chestplate": [
            "Netherieten borstplaat"
        ],
        "netherite_helmet": [
            "Netherieten helm"
        ],
        "lead": [
            "Lijntje"
        ],
        "leather": [
            "Leer"
        ],
        "leaves": [
            "Bladeren",
            "Eikenbladeren",
            "Sparrenbladeren",
            "Berkenbladeren",
            "Junglebladeren",
            "Acaciabladeren",
            "Donkereikenbladeren"
        ],
        "chainmail_leggings": [
            "Maliënbeenbeschermer"
        ],
        "leather_leggings": [
            "Leren broek"
        ],
        "diamond_leggings": [
            "Diamanten beenbeschermer"
        ],
        "golden_leggings": [
            "Gouden beenbeschermer"
        ],
        "iron_leggings": [
            "IJzeren beenbeschermer"
        ],
        "nautilus_shell": [
            "Nautilus-schelp"
        ],
        "heart_of_the_sea": [
            "Hart van de zee"
        ],
        "magma_cream": [
            "Magmaroom"
        ],
        "map": [
            "Kaart"
        ],
        "melon": [
            "Meloen"
        ],
        "milk": [
            "Melk"
        ],
        "minecart": [
            "Mijnkarretje"
        ],
        "chest_minecart": [
            "Mijnkarretje met kist"
        ],
        "command_block_minecart": [
            "Mijnkarretje met commandoblok"
        ],
        "minecartFurnace": [
            "Mijnkarretje met oven"
        ],
        "hopper_minecart": [
            "Mijnkarretje met trechter"
        ],
        "tnt_minecart": [
            "Mijnkarretje met TNT"
        ],
        "trident": [
            "Drietand"
        ],
        "mushroom_stew": [
            "Paddenstoelenstoofschotel"
        ],
        "muttoncooked": [
            "Gebakken schapenvlees"
        ],
        "muttonraw": [
            "Rauw schapenvlees"
        ],
        "name_tag": [
            "Naamkaartje"
        ],
        "netherbrick": [
            "Nether-baksteen"
        ],
        "quartz": [
            "Nether-kwarts"
        ],
        "nether_wart": [
            "Nether-kruid"
        ],
        "netherStar": [
            "Nether-ster"
        ],
        "painting": [
            "Schilderij"
        ],
        "paper": [
            "Papier"
        ],
        "diamond_pickaxe": [
            "Diamanten pikhouweel"
        ],
        "golden_pickaxe": [
            "Gouden pikhouweel"
        ],
        "iron_pickaxe": [
            "IJzeren pikhouweel"
        ],
        "stone_pickaxe": [
            "Stenen pikhouweel"
        ],
        "wooden_pickaxe": [
            "Houten pikhouweel"
        ],
        "porkchop_cooked": [
            "Gebakken karbonade"
        ],
        "porkchop": [
            "Rauwe karbonade"
        ],
        "portfolio": [
            "Portfolio"
        ],
        "potato": [
            "Aardappel"
        ],
        "baked_potato": [
            "Gebakken aardappel"
        ],
        "poisonous_potato": [
            "Giftige aardappel"
        ],
        "potion": [
            "Drankje"
        ],
        "prismarine_crystals": [
            "Prismarien kristallen"
        ],
        "prismarine_shard": [
            "Prismarien scherf"
        ],
        "pumpkin_pie": [
            "Pompoentaart"
        ],
        "cooked_rabbit": [
            "Gebakken konijn"
        ],
        "rabbit_foot": [
            "Konijnenpootje"
        ],
        "rabbit_hide": [
            "Konijnenhuid"
        ],
        "rabbit": [
            "Rauw konijn"
        ],
        "rabbit_stew": [
            "Konijnenstoofschotel"
        ],
        "record": [
            "Muziekplaat"
        ],
        "redstone": [
            "Redstone"
        ],
        "reeds": [
            "Suikerriet"
        ],
        "kelp": [
            "Kelp"
        ],
        "dried_kelp": [
            "Gedroogde kelp"
        ],
        "rotten_flesh": [
            "Rot vlees"
        ],
        "ruby": [
            "Robijn"
        ],
        "saddle": [
            "Zadel"
        ],
        "wheat_seeds": [
            "Zaden"
        ],
        "beetroot_seeds": [
            "Bietenzaden"
        ],
        "melon_seeds": [
            "Meloenzaden"
        ],
        "pumpkin_seeds": [
            "Pompoenzaden"
        ],
        "shears": [
            "Schaar"
        ],
        "diamond_shovel": [
            "Diamanten spade"
        ],
        "golden_shovel": [
            "Gouden spade"
        ],
        "iron_shovel": [
            "IJzeren spade"
        ],
        "stone_shovel": [
            "Stenen spade"
        ],
        "wooden_shovel": [
            "Houten spade"
        ],
        "sign": [
            "Eiken bord"
        ],
        "spruce_sign": [
            "Sparren bord"
        ],
        "birch_sign": [
            "Berken bord"
        ],
        "jungle_sign": [
            "Junglehouten bord"
        ],
        "acacia_sign": [
            "Acacia bord"
        ],
        "darkoak_sign": [
            "Donkereiken bord"
        ],
        "crimson_sign": [
            "Karmijnrood bord"
        ],
        "warped_sign": [
            "Warblauw bord"
        ],
        "skull": [
            "Skeletschedel",
            "Skeletschedel",
            "Witherschedel",
            "Zombiehoofd",
            "Hoofd",
            "Creeperhoofd",
            "Drakenkop"
        ],
        "slime_ball": [
            "Slijmbal"
        ],
        "snowball": [
            "Sneeuwbal"
        ],
        "speckled_melon": [
            "Glansmeloen"
        ],
        "spider_eye": [
            "Spinnenoog"
        ],
        "stick": [
            "Stok"
        ],
        "string": [
            "Draad"
        ],
        "sugar": [
            "Suiker"
        ],
        "gunpowder": [
            "Buskruit"
        ],
        "diamond_sword": [
            "Diamanten zwaard"
        ],
        "golden_sword": [
            "Gouden zwaard"
        ],
        "iron_sword": [
            "IJzeren zwaard"
        ],
        "stone_sword": [
            "Stenen zwaard"
        ],
        "wooden_sword": [
            "Houten zwaard"
        ],
        "wheat": [
            "Tarwe"
        ],
        "writable_book": [
            "Boek en veer"
        ],
        "written_book": [
            "Geschreven boek"
        ],
        "glowstone_dust": [
            "Gloeisteenstof"
        ],
        "shield": [
            "Schild"
        ],
        "shulker_shell": [
            "Sjoelkerschelp"
        ],
        "totem": [
            "Totem van Onsterfelijkheid"
        ],
        "turtle_helmet": [
            "Schildpadschild"
        ],
        "turtle_shell_piece": [
            "Hoornschild"
        ],
        "phantom_membrane": [
            "Fantoommembraan"
        ],
        "sweet_berries": [
            "Zoete bessen"
        ],
        "suspicious_stew": [
            "Schimmige stoofschotel"
        ],
        "banner_pattern": [
            "Vlagpatroon"
        ],
        "acaciaFence": [
            "Acacia hek"
        ],
        "acacia_fence_gate": [
            "Acacia poortje"
        ],
        "activator_rail": [
            "Activatiespoor"
        ],
        "allow": [
            "Toestaan"
        ],
        "deny": [
            "Weigeren"
        ],
        "border_block": [
            "Grens"
        ],
        "anvil": [
            "Aambeeld",
            "Aambeeld",
            null,
            null,
            null,
            "Licht beschadigd aambeeld",
            null,
            null,
            null,
            "Zwaar beschadigd aambeeld"
        ],
        "barrier": [
            "Barrière"
        ],
        "beacon": [
            "Baken"
        ],
        "beehive": [
            "Bijenkorf"
        ],
        "bee_nest": [
            "Bijennest"
        ],
        "target": [
            "Doel"
        ],
        "bedrock": [
            "Bodemsteen"
        ],
        "conduit": [
            "Geleider"
        ],
        "invisibleBedrock": [
            "Onzichtbare bodemsteen"
        ],
        "birchFence": [
            "Berken hek"
        ],
        "birch_fence_gate": [
            "Berken poortje"
        ],
        "blast_furnace": [
            "Hoogoven"
        ],
        "bone_block": [
            "Bottenblok"
        ],
        "coal_block": [
            "Steenkoolblok"
        ],
        "diamond_block": [
            "Diamantblok"
        ],
        "emerald_block": [
            "Smaragdblok"
        ],
        "gold_block": [
            "Goudblok"
        ],
        "iron_block": [
            "IJzerblok"
        ],
        "lapis_block": [
            "Lapis lazuli-blok"
        ],
        "redstone_block": [
            "Redstoneblok"
        ],
        "bookshelf": [
            "Boekenplank"
        ],
        "brick_block": [
            "Baksteenblok"
        ],
        "brown_mushroom": [
            "Bruine paddenstoel"
        ],
        "wooden_button": [
            "Eiken knop"
        ],
        "acacia_button": [
            "Acaciaknop"
        ],
        "birch_button": [
            "Berken knop"
        ],
        "dark_oak_button": [
            "Donkereiken knop"
        ],
        "jungle_button": [
            "Junglehouten knop"
        ],
        "spruce_button": [
            "Sparhouten knop"
        ],
        "stone_button": [
            "Stenen knop"
        ],
        "cactus": [
            "Cactus"
        ],
        "dried_kelp_block": [
            "Gedroogde-kelpblok"
        ],
        "carved_pumpkin": [
            "Uitgesneden pompoen"
        ],
        "chest": [
            "Kist"
        ],
        "ender_chest": [
            "Enderkist"
        ],
        "jigsaw": [
            "Puzzelblok"
        ],
        "honey_block": [
            "Honingblok"
        ],
        "honeycomb_block": [
            "Honingraatblok"
        ],
        "lodestone": [
            "Zeilsteen"
        ],
        "nether_sprouts": [
            "Netherspruit"
        ],
        "crimson_stem": [
            "Karmijnrode stam"
        ],
        "warped_stem": [
            "Warblauwe stam"
        ],
        "stripped_crimson_stem": [
            "Geschaafde karmijnrode stam"
        ],
        "stripped_warped_stem": [
            "Geschaafde warblauwe stam"
        ],
        "crimson_hyphae": [
            "Karmijnrode zwamdraad"
        ],
        "warped_hyphae": [
            "Warblauwe zwamdraad"
        ],
        "stripped_crimson_hyphae": [
            "Geschaafde karmijnrode zwamdraad"
        ],
        "stripped_warped_hyphae": [
            "Geschaafde warblauwe zwamdraad"
        ],
        "crimson_planks": [
            "Karmijnrode planken"
        ],
        "warped_planks": [
            "Warblauwe planken"
        ],
        "crimson_trapdoor": [
            "Karmijnrood valluik"
        ],
        "warped_trapdoor": [
            "Warblauw valluik"
        ],
        "crimson_standing_sign": [
            "Karmijnrood bord"
        ],
        "warped_standing_sign": [
            "Warblauw bord"
        ],
        "crimson_wall_sign": [
            "Karmijnrood bord"
        ],
        "warped_wall_sign": [
            "Warblauw bord"
        ],
        "crimson_stairs": [
            "Karmijnrode trap"
        ],
        "warped_stairs": [
            "Warblauwe trap"
        ],
        "crimson_fence": [
            "Karmijnrood hek"
        ],
        "warped_fence": [
            "Warblauw hek"
        ],
        "crimson_fence_gate": [
            "Karmijnrood hekpoortje"
        ],
        "warped_fence_gate": [
            "Warblauw hekpoortje"
        ],
        "crimson_button": [
            "Karmijnrode knop"
        ],
        "warped_button": [
            "Warblauwe knop"
        ],
        "crimson_pressure_plate": [
            "Karmijnrode drukplaat"
        ],
        "warped_pressure_plate": [
            "Warblauwe drukplaat"
        ],
        "crimson_slab": [
            "Karmijnrode plaat"
        ],
        "warped_slab": [
            "Warblauwe plaat"
        ],
        "crimson_double_slab": [
            "Karmijnrode plaat"
        ],
        "warped_double_slab": [
            "Warblauwe plaat"
        ],
        "shroomlight": [
            "Gloeizwam"
        ],
        "crimson_nylium": [
            "Karmijnrode nylium"
        ],
        "warped_nylium": [
            "Warblauwe nylium"
        ],
        "basalt": [
            "Basalt"
        ],
        "polished_basalt": [
            "Gepolijst basalt"
        ],
        "blackstone": [
            "Zwartsteen"
        ],
        "polished_blackstone_bricks": [
            "Gepolijste zwartblokstenen"
        ],
        "cracked_polished_blackstone_bricks": [
            "Gescheurde gepolijste zwartblokstenen"
        ],
        "polished_blackstone_brick_stairs": [
            "Gepolijste zwartblokstenen trap"
        ],
        "blackstone_stairs": [
            "Zwartstenen trap"
        ],
        "blackstone_wall": [
            "Zwartstenen muur"
        ],
        "polished_blackstone_brick_wall": [
            "Gepolijste zwartblokstenen muur"
        ],
        "chiseled_polished_blackstone": [
            "Gebeitelde gepolijste zwartsteen"
        ],
        "gilded_blackstone": [
            "Vergulde zwartsteen"
        ],
        "blackstone_slab": [
            "Zwartstenen plaat"
        ],
        "polished_blackstone_brick_slab": [
            "Gepolijste zwartblokstenen plaat"
        ],
        "chain": [
            "Ketting"
        ],
        "soul_soil": [
            "Zielgrond"
        ],
        "soul_fire": [
            "Zielenvuur"
        ],
        "polished_blackstone": [
            "Gepolijste zwartsteen"
        ],
        "polished_blackstone_stairs": [
            "Gepolijste zwartstenen trap"
        ],
        "polished_blackstone_slab": [
            "Gepolijste zwartstenen plaat"
        ],
        "polished_blackstone_pressure_plate": [
            "Gepolijste zwartstenen drukplaat"
        ],
        "polished_blackstone_button": [
            "Gepolijste zwartstenen knop"
        ],
        "polished_blackstone_wall": [
            "Gepolijste zwartstenen muur"
        ],
        "soul_campfire": [
            "Zielenkampvuur"
        ],
        "chiseled_nether_bricks": [
            "Gebeitelde Nether-bakstenen"
        ],
        "cracked_nether_bricks": [
            "Gebarsten Nether-bakstenen"
        ],
        "quartz_bricks": [
            "Kwartsbakstenen"
        ],
        "trapped_chest": [
            "Valkist"
        ],
        "shulkerBoxWhite": [
            "Witte Sjoelkerdoos"
        ],
        "shulkerBoxOrange": [
            "Oranje Sjoelkerdoos"
        ],
        "shulkerBoxMagenta": [
            "Magenta Sjoelkerdoos"
        ],
        "shulkerBoxLightBlue": [
            "Lichtblauwe Sjoelkerdoos"
        ],
        "shulkerBoxYellow": [
            "Gele Sjoelkerdoos"
        ],
        "shulkerBoxLime": [
            "Limoengroene Sjoelkerdoos"
        ],
        "shulkerBoxPink": [
            "Roze Sjoelkerdoos"
        ],
        "shulkerBoxGray": [
            "Grijze Sjoelkerdoos"
        ],
        "shulkerBoxSilver": [
            "Lichtgrijze Sjoelkerdoos"
        ],
        "shulkerBoxCyan": [
            "Cyaanblauwe Sjoelkerdoos"
        ],
        "shulkerBoxPurple": [
            "Paarse Sjoelkerdoos"
        ],
        "shulkerBoxBlue": [
            "Blauwe Sjoelkerdoos"
        ],
        "shulkerBoxBrown": [
            "Bruine Sjoelkerdoos"
        ],
        "shulkerBoxGreen": [
            "Groene Sjoelkerdoos"
        ],
        "shulkerBoxRed": [
            "Rode Sjoelkerdoos"
        ],
        "shulkerBoxBlack": [
            "Zwarte Sjoelkerdoos"
        ],
        "shulkerBox": [
            "Sjoelkerdoos"
        ],
        "chorus_flower": [
            "Koorbloem"
        ],
        "chorus_plant": [
            "Koorplant"
        ],
        "stained_glass": [
            "Wit gebrandschilderd glas",
            "Wit gebrandschilderd glas",
            "Oranje gebrandschilderd glas",
            "Magenta gebrandschilderd glas",
            "Lichtblauw gebrandschilderd glas",
            "Geel gebrandschilderd glas",
            "Limoengroen gebrandschilderd glas",
            "Roze gebrandschilderd glas",
            "Grijs gebrandschilderd glas",
            "Lichtgrijs gebrandschilderd glas",
            "Cyaanblauw gebrandschilderd glas",
            "Paars gebrandschilderd glas",
            "Blauw gebrandschilderd glas",
            "Bruin gebrandschilderd glas",
            "Groen gebrandschilderd glas",
            "Rood gebrandschilderd glas",
            "Zwart gebrandschilderd glas"
        ],
        "stained_glass_pane": [
            "Witte gebrandschilderde ruit",
            "Witte gebrandschilderde ruit",
            "Oranje gebrandschilderde ruit",
            "Magenta gebrandschilderde ruit",
            "Lichtblauwe gebrandschilderde glasplaat",
            "Gele gebrandschilderde ruit",
            "Limoengroene gebrandschilderde ruit",
            "Roze gebrandschilderde ruit",
            "Grijze gebrandschilderde ruit",
            "Lichtgrijze gebrandschilderde ruit",
            "Cyaanblauwe gebrandschilderde ruit",
            "Paarse gebrandschilderde ruit",
            "Blauwe gebrandschilderde ruit",
            "Bruine gebrandschilderde ruit",
            "Groene gebrandschilderde ruit",
            "Rode gebrandschilderde ruit",
            "Zwarte gebrandschilderde ruit"
        ],
        "clay": [
            "Kleiblok"
        ],
        "hardened_clay": [
            "Terracotta"
        ],
        "stained_hardened_clay": [
            "Terracotta",
            "Witte terracotta",
            "Oranje terracotta",
            "Magenta terracotta",
            "Lichtblauwe terracotta",
            "Gele terracotta",
            "Limoengroene terracotta",
            "Roze terracotta",
            "Grijze terracotta",
            "Lichtgrijze terracotta",
            "Cyaanblauwe terracotta",
            "Paarse terracotta",
            "Blauwe terracotta",
            "Bruine terracotta",
            "Groene terracotta",
            "Rode terracotta",
            "Zwarte terracotta"
        ],
        "structure_block": [
            "Constructieblok"
        ],
        "structure_void": [
            "Constructieleegte"
        ],
        "wool": [
            "Wol",
            "Witte wol",
            "Oranje wol",
            "Magenta wol",
            "Lichtblauwe wol",
            "Gele wol",
            "Limoengroene wol",
            "Roze wol",
            "Grijze wol",
            "Lichtgrijze wol",
            "Cyaanblauwe wol",
            "Paarse wol",
            "Blauwe wol",
            "Bruine wol",
            "Groene wol",
            "Rode wol",
            "Zwarte wol"
        ],
        "cobblestone_wall": [
            "Keimuur",
            "Keimuur",
            "Bemoste keimuur",
            "Granieten muur",
            "Diorieten muur",
            "Andesieten muur",
            "Zandstenen muur",
            "Bakstenen muur",
            "Blokstenen muur",
            "Bemoste bakstenen muur",
            "End-blokstenen muur",
            "Nether-bakstenen muur",
            "Prismarienen muur",
            "Roodzandstenen muur",
            "Rode Nether-bakstenen muur"
        ],
        "cocoa": [
            "Cacao"
        ],
        "command_block": [
            "Commandoblok"
        ],
        "composter": [
            "Composteerder"
        ],
        "light_block": [
            "Lichtblok"
        ],
        "repeating_command_block": [
            "Herhalend commandoblok"
        ],
        "chain_command_block": [
            "Ketencommandoblok"
        ],
        "darkOakFence": [
            "Donkereiken hek"
        ],
        "dark_oak_fence_gate": [
            "Donkereiken poortje"
        ],
        "daylight_detector": [
            "Daglichtsensor"
        ],
        "deadbush": [
            "Dode struik"
        ],
        "detector_rail": [
            "Detectorspoor"
        ],
        "dirt": [
            "Aarde",
            "Aarde",
            "Grove aarde"
        ],
        "podzol": [
            "Podzol"
        ],
        "purpur_block": [
            "Purpur-blok",
            "Purpur-blok",
            "Gebeitelde paarsblok",
            "Purpur-pilaar"
        ],
        "dispenser": [
            "Automaat"
        ],
        "doorWood": [
            "Houten deur"
        ],
        "double_plant": [
            "Planten",
            "Zonnebloem",
            "Sering",
            "Dubbelhoog gras",
            "Grote varen",
            "Rozenstruik",
            "Pioenroos"
        ],
        "dragon_egg": [
            "Drakenei"
        ],
        "dropper": [
            "Dropper"
        ],
        "enchanting_table": [
            "Betoverblok"
        ],
        "enderChest": [
            "Enderkist"
        ],
        "end_portal_frame": [
            "End-portaal"
        ],
        "farmland": [
            "Akkerland"
        ],
        "fletching_table": [
            "Pijl-en-boogwerkbank"
        ],
        "fence": [
            "Eiken hek"
        ],
        "fence_gate": [
            "Eiken poortje"
        ],
        "iron_bars": [
            "IJzerstaven"
        ],
        "fire": [
            "Vuur"
        ],
        "yellow_flower": [
            "Bloem",
            "Paardenbloem"
        ],
        "red_flower": [
            "Bloem",
            "Klaproos",
            "Blauwe orchidee",
            "Look",
            "Porseleinsterretje",
            "Rode tulp",
            "Oranje tulp",
            "Witte tulp",
            "Roze tulp",
            "Madeliefje",
            "Korenbloem",
            "Lelietje-van-dalen"
        ],
        "wither_rose": [
            "Wither-roos"
        ],
        "furnace": [
            "Oven"
        ],
        "glass": [
            "Glas"
        ],
        "golden_rail": [
            "Elektrisch spoor"
        ],
        "grass": [
            "Grasblok"
        ],
        "grass_path": [
            "Graspad"
        ],
        "gravel": [
            "Grind"
        ],
        "hay_block": [
            "Hooibaal"
        ],
        "netherrack": [
            "Nether-steen"
        ],
        "soul_sand": [
            "Zielzand"
        ],
        "hopper": [
            "Trechter"
        ],
        "ice": [
            "IJs"
        ],
        "packed_ice": [
            "Pakijs"
        ],
        "blue_ice": [
            "Blauw ijs"
        ],
        "iron_trapdoor": [
            "IJzeren valluik"
        ],
        "jukebox": [
            "Jukebox"
        ],
        "jungleFence": [
            "Junglehouten hek"
        ],
        "jungle_fence_gate": [
            "Junglehouten poortje"
        ],
        "ladder": [
            "Ladder"
        ],
        "flowing_lava": [
            "Lava"
        ],
        "leaves2": [
            "Acaciabladeren",
            "Acaciabladeren",
            "Donkereikenbladeren"
        ],
        "lever": [
            "Hendel"
        ],
        "glowstone": [
            "Gloeisteen"
        ],
        "lit_pumpkin": [
            "Dwaallicht"
        ],
        "lockedchest": [
            "Gesloten kist"
        ],
        "log2": [
            "Acacia stronk",
            "Acacia stronk",
            "Donkereiken stronk"
        ],
        "log": [
            "Stronk",
            "Eiken stronk",
            "Sparren stronk",
            "Berken stronk",
            "Junglehouten stronk"
        ],
        "magma": [
            "Magmablok"
        ],
        "melon_block": [
            "Meloen"
        ],
        "mob_spawner": [
            "Monsterspawner"
        ],
        "monster_egg": [
            "Geïnfesteerde steen",
            "Geïnfesteerde steen",
            "Geïnfesteerde kei",
            "Geïnfesteerde bloksteen",
            "Geïnfesteerde bemoste bloksteen",
            "Geïnfesteerde gebarsten bloksteen",
            "Geïnfesteerde gebeitelde bloksteen"
        ],
        "mushroom": [
            "Paddenstoel"
        ],
        "noteblock": [
            "Nootblok"
        ],
        "mycelium": [
            "Mycelium"
        ],
        "nether_brick": [
            "Nether-baksteenblok"
        ],
        "red_nether_brick": [
            "Rode Nether-baksteen"
        ],
        "nether_brick_fence": [
            "Nether-baksteenhek"
        ],
        "quartz_ore": [
            "Nether-kwartserts"
        ],
        "netherreactor": [
            "Nether-reactorkern"
        ],
        "nether_wart_block": [
            "Nether-kruidblok"
        ],
        "warped_wart_block": [
            "Warblauw kruidblok"
        ],
        "unlit_redstone_torch": [
            "Redstone-fakkel"
        ],
        "redstone_torch": [
            "Redstone-fakkel"
        ],
        "soul_torch": [
            "Zielenfakkel"
        ],
        "obsidian": [
            "Lavaglas"
        ],
        "coal_ore": [
            "Steenkoolerts"
        ],
        "diamond_ore": [
            "Diamanterts"
        ],
        "emerald_ore": [
            "Smaragderts"
        ],
        "gold_ore": [
            "Gouderts"
        ],
        "iron_ore": [
            "IJzererts"
        ],
        "lapis_ore": [
            "Lapis lazuli-erts"
        ],
        "redstone_ore": [
            "Redstone-erts"
        ],
        "oreRuby": [
            "Robijnerts"
        ],
        "observer": [
            "Observant"
        ],
        "piston": [
            "Zuiger"
        ],
        "sticky_piston": [
            "Plakzuiger"
        ],
        "portal": [
            "Portaal"
        ],
        "potatoes": [
            "Aardappelen"
        ],
        "stone_pressure_plate": [
            "Stenen drukplaat"
        ],
        "wooden_pressure_plate": [
            "Eiken drukplaat"
        ],
        "acacia_pressure_plate": [
            "Acaciahouten drukplaat"
        ],
        "birch_pressure_plate": [
            "Berken drukplaat"
        ],
        "dark_oak_pressure_plate": [
            "Donkereiken drukplaat"
        ],
        "jungle_pressure_plate": [
            "Junglehouten drukplaat"
        ],
        "spruce_pressure_plate": [
            "Sparhouten drukplaat"
        ],
        "prismarine": [
            "Prismarien",
            "Prismarien",
            "Prismarien bakstenen",
            "Donkere prismarien"
        ],
        "pumpkin": [
            "Pompoen"
        ],
        "pumpkin_stem": [
            "Pompoensteel"
        ],
        "quartz_block": [
            "Kwartsblok",
            "Kwartsblok",
            "Gebeiteld kwartsblok",
            "Kwartspilaar",
            "Glad kwartsblok"
        ],
        "rail": [
            "Spoor"
        ],
        "red_mushroom": [
            "Rode paddenstoel"
        ],
        "crimson_fungus": [
            "Karmijnrode schimmel"
        ],
        "warped_fungus": [
            "Warblauwe schimmel"
        ],
        "red_mushroom_block": [
            "Rode-paddenstoelblok"
        ],
        "red_sandstone": [
            "Rood zandsteen",
            "Rood zandsteen",
            "Gebeiteld rood zandsteen",
            "Gesneden rood zandsteen",
            "Gladde rode zandsteen"
        ],
        "redstone_wire": [
            "Redstone-stof"
        ],
        "redstone_lamp": [
            "Redstone-lamp"
        ],
        "sand": [
            "Zand",
            "Zand",
            "Rood zand"
        ],
        "sandstone": [
            "Zandsteen",
            "Zandsteen",
            "Gebeiteld zandsteen",
            "Gesneden zandsteen",
            "Gladde zandsteen"
        ],
        "sapling": [
            "Jonge eik",
            "Jonge eik",
            "Jonge spar",
            "Jonge berk",
            "Jonge jungleboom",
            "Jonge acacia",
            "Donkere jonge eik"
        ],
        "seaLantern": [
            "Zeelantaarn"
        ],
        "standing_sign": [
            "Signeren"
        ],
        "spruce_standing_sign": [
            "Sparren bord"
        ],
        "birch_standing_sign": [
            "Berken bord"
        ],
        "jungle_standing_sign": [
            "Junglehouten bord"
        ],
        "acacia_standing_sign": [
            "Acacia bord"
        ],
        "darkoak_standing_sign": [
            "Donkereiken bord"
        ],
        "slime": [
            "Slijmblok"
        ],
        "snow": [
            "Sneeuw"
        ],
        "sponge": [
            "Spons",
            "Spons",
            "Natte spons"
        ],
        "spruceFence": [
            "Sparren hek"
        ],
        "spruce_fence_gate": [
            "Sparren poortje"
        ],
        "brick_stairs": [
            "Baksteentrap"
        ],
        "nether_brick_stairs": [
            "Nether-baksteentrap"
        ],
        "quartz_stairs": [
            "Kwartstrap"
        ],
        "smooth_quartz_stairs": [
            "Gladde kwartstrap"
        ],
        "red_sandstone_stairs": [
            "Rode zandsteentrap"
        ],
        "sandstone_stairs": [
            "Zandstenen trap"
        ],
        "stone_stairs": [
            "Keistenen trap"
        ],
        "normal_stone_stairs": [
            "Stenen trap"
        ],
        "stone_brick_stairs": [
            "Stenen baksteentrap"
        ],
        "oak_stairs": [
            "Eikenhouten trap"
        ],
        "acacia_stairs": [
            "Acaciahouten trap"
        ],
        "birch_stairs": [
            "Berkenhouten trap"
        ],
        "dark_oak_stairs": [
            "Donkereikenhouten trap"
        ],
        "jungle_stairs": [
            "Junglehouten trap"
        ],
        "spruce_stairs": [
            "Sparrenhouten trap"
        ],
        "purpur_stairs": [
            "Purpur-trap"
        ],
        "prismarine_stairs": [
            "Prismarienen trap"
        ],
        "dark_prismarine_stairs": [
            "Donkerprismarienen trap"
        ],
        "prismarine_bricks_stairs": [
            "Prismarienen baksteentrap"
        ],
        "granite_stairs": [
            "Granieten trap"
        ],
        "diorite_stairs": [
            "Diorieten trap"
        ],
        "andesite_stairs": [
            "Andesieten trap"
        ],
        "polished_granite_stairs": [
            "Gepolijste granieten trap"
        ],
        "polished_diorite_stairs": [
            "Gepolijste diorieten trap"
        ],
        "polished_andesite_stairs": [
            "Gepolijste andesieten trap"
        ],
        "mossy_stone_brick_stairs": [
            "Bemoste blokstenen trap"
        ],
        "smooth_red_sandstone_stairs": [
            "Gladde rode zandstenen trap"
        ],
        "smooth_sandstone_stairs": [
            "Gladde zandstenen trap"
        ],
        "end_brick_stairs": [
            "End-blokstenen trap"
        ],
        "mossy_cobblestone_stairs": [
            "Bemoste keistenen trap"
        ],
        "red_nether_brick_stairs": [
            "Rode Nether-bakstenen trap"
        ],
        "smooth_stone": [
            "Gladde steen"
        ],
        "standing_banner": [
            "Vlag",
            "Zwarte vlag",
            "Rode vlag",
            "Groene vlag",
            "Bruin vlag",
            "Blauwe vlag",
            "Paarse vlag",
            "Cyaanblauwe vlag",
            "Lichtgrijze vlag",
            "Grijze vlag",
            "Roze vlag",
            "Limoengroene vlag",
            "Gele vlag",
            "Lichtblauwe vlag",
            "Magenta vlag",
            "Oranje vlag",
            "Vlag"
        ],
        "stone": [
            "Steen",
            "Steen",
            "Graniet",
            "Gepolijst graniet",
            "Dioriet",
            "Gepolijst dioriet",
            "Andesiet",
            "Gepolijst andesiet"
        ],
        "cobblestone": [
            "Keien"
        ],
        "stonebrick": [
            "Stenen bakstenen",
            "Stenen bakstenen",
            "Bemoste stenen bakstenen",
            "Gebeitelde stenen bakstenen"
        ],
        "stonecutter": [
            "Steenzaag"
        ],
        "stonecutter_block": [
            "Steenzaag"
        ],
        "mossy_cobblestone": [
            "Bemoste keisteen"
        ],
        "double_stone_slab": [
            "Steenplaat",
            "Steenplaat",
            "Zandsteenplaat",
            "Houten plaat",
            "Keienplaat",
            "Baksteenplaat",
            "Stenen baksteenplaat",
            "Kwartsplaat",
            "Nether-baksteenplaat"
        ],
        "stone_slab": [
            "Steenplaat",
            "Gladde steenplaat",
            "Zandsteenplaat",
            "Houten plaat",
            "Keienplaat",
            "Baksteenplaat",
            "Stenen baksteenplaat",
            "Kwartsplaat",
            "Nether-baksteenplaat"
        ],
        "double_stone_slab2": [
            "Rode zandsteenplaat",
            "Rode zandsteenplaat"
        ],
        "stone_slab2": [
            "Rode zandsteenplaat",
            "Rode zandsteenplaat",
            "Purpur-plaat",
            "Prismarienen plaat",
            "Prismarienen baksteenplaat",
            "Donkerprismarienen plaat",
            "Bemoste keistenen plaat",
            "Gladde zandsteenplaat",
            "Rode Nether-bakstenen plaat"
        ],
        "stone_slab3": [
            "End-blokstenen plaat",
            "End-blokstenen plaat",
            "Gladde rode zandsteenplaat",
            "Gepolijste andesieten plaat",
            "Andesieten plaat",
            "Diorieten plaat",
            "Gepolijste diorieten plaat",
            "Granieten plaat",
            "Gepolijste granieten plaat"
        ],
        "stone_slab4": [
            "Bemoste blokstenen plaat",
            "Bemoste blokstenen plaat",
            "Gladde kwartsplaat",
            "Steenplaat",
            "Gesneden zandsteenplaat",
            "Gesneden rode zandsteenplaat"
        ],
        "coral_block": [
            "Tubevormig koraalblok",
            "Tubevormig koraalblok",
            "Hersenvormig koraalblok",
            "Belvormig koraalblok",
            "Vlamvormig koraalblok",
            "Hoornvormig koraalblok",
            "Dood tubevormig koraalblok",
            "Dood hersenvormig koraalblok",
            "Dood belvormig koraalblok",
            "Dood vlamvormig koraalblok",
            "Dood hoornvormig koraalblok"
        ],
        "tallgrass": [
            "Gras",
            "Gras",
            "Varen"
        ],
        "seagrass": [
            "Zeegras",
            "Zeegras"
        ],
        "sea_pickle": [
            "Zeekomkommer"
        ],
        "turtle_egg": [
            "Zeeschildpadei"
        ],
        "coral": [
            "Tubevormig koraal",
            "Tubevormig koraal",
            "Hersenvormig koraal",
            "Belvormig koraal",
            "Vlamvormig koraal",
            "Hoornvormig koraal",
            "Dood tubevormig koraal",
            "Dood hersenvormig koraal",
            "Dode belvormige koraal",
            "Dood vlamvormig koraal",
            "Dode hoornvormige koraal"
        ],
        "coral_fan": [
            "Tubevormige koraalwaaier",
            "Tubevormige koraalwaaier",
            "Hersenvormige koraalwaaier",
            "Belvormige koraalwaaier",
            "Vlamvormige koraalwaaier",
            "Hoornvormige koraalwaaier"
        ],
        "coral_fan_dead": [
            "Dode tubevormige koraalwaaier",
            "Dode tubevormige koraalwaaier",
            "Dode hersenvormige koraalwaaier",
            "Dode belvormige koraalwaaier",
            "Dode vlamvormige koraalwaaier",
            "Dode hoornvormige koraalwaaier"
        ],
        "glass_pane": [
            "Glasplaat"
        ],
        "tnt": [
            "TNT"
        ],
        "snow_layer": [
            "Sneeuwtop"
        ],
        "torch": [
            "Fakkel"
        ],
        "trapdoor": [
            "Eiken valluik"
        ],
        "acacia_trapdoor": [
            "Acaciahouten valluik"
        ],
        "birch_trapdoor": [
            "Berken valluik"
        ],
        "dark_oak_trapdoor": [
            "Donkereiken valluik"
        ],
        "jungle_trapdoor": [
            "Junglehouten valluik"
        ],
        "spruce_trapdoor": [
            "Sparhouten valluik"
        ],
        "tripWire": [
            "Struikeldraad"
        ],
        "tripwire_hook": [
            "Struikeldraadhaak"
        ],
        "vine": [
            "Ranken"
        ],
        "weeping_vines": [
            "Treurranken"
        ],
        "twisting_vines": [
            "Kronkelranken"
        ],
        "flowing_water": [
            "Water"
        ],
        "water": [
            "Water"
        ],
        "waterlily": [
            "Plompenblad"
        ],
        "web": [
            "Spinnenweb"
        ],
        "heavy_weighted_pressure_plate": [
            "Drukgevoelige drukplaat (zwaar)"
        ],
        "light_weighted_pressure_plate": [
            "Drukgevoelige drukplaat (licht)"
        ],
        "end_stone": [
            "End-steen"
        ],
        "end_bricks": [
            "End-stenen bakstenen"
        ],
        "planks": [
            "Houten planken",
            "Eikenhouten planken",
            "Sparrenhouten planken",
            "Berkenhouten planken",
            "Junglehouten planken",
            "Acaciahouten planken",
            "Donkereikenhouten planken"
        ],
        "wooden_slab": [
            "Houten plaat",
            "Eikenhouten plaat",
            "Sparrenhouten plaat",
            "Berkenhouten plaat",
            "Junglehouten plaat",
            "Acaciahouten plaat",
            "Donkereikenhouten plaat"
        ],
        "carpet": [
            "Tapijt",
            "Zwart tapijt",
            "Rood tapijt",
            "Groen tapijt",
            "Bruin tapijt",
            "Blauw tapijt",
            "Paars tapijt",
            "Cyaanblauw tapijt",
            "Lichtgrijs tapijt",
            "Grijs tapijt",
            "Roze tapijt",
            "Limoengroen tapijt",
            "Geel tapijt",
            "Lichtblauw tapijt",
            "Magenta tapijt",
            "Oranje tapijt",
            "Wit tapijt"
        ],
        "crafting_table": [
            "Werkbank"
        ],
        "white_glazed_terracotta": [
            "Wit geglazuurde terracotta",
            "Wit geglazuurde terracotta"
        ],
        "orange_glazed_terracotta": [
            "Oranje geglazuurde terracotta",
            "Oranje geglazuurde terracotta"
        ],
        "magenta_glazed_terracotta": [
            "Magenta geglazuurde terracotta",
            "Magenta geglazuurde terracotta"
        ],
        "light_blue_glazed_terracotta": [
            "Lichtblauw geglazuurde terracotta",
            "Lichtblauw geglazuurde terracotta"
        ],
        "yellow_glazed_terracotta": [
            "Geel geglazuurde terracotta",
            "Geel geglazuurde terracotta"
        ],
        "lime_glazed_terracotta": [
            "Limoengroen geglazuurde terracotta",
            "Limoengroen geglazuurde terracotta"
        ],
        "pink_glazed_terracotta": [
            "Roze geglazuurde terracotta",
            "Roze geglazuurde terracotta"
        ],
        "gray_glazed_terracotta": [
            "Grijs geglazuurde terracotta",
            "Grijs geglazuurde terracotta"
        ],
        "silver_glazed_terracotta": [
            "Lichtgrijs geglazuurde terracotta",
            "Lichtgrijs geglazuurde terracotta"
        ],
        "cyan_glazed_terracotta": [
            "Cyaanblauw geglazuurde terracotta",
            "Cyaanblauw geglazuurde terracotta"
        ],
        "purple_glazed_terracotta": [
            "Paars geglazuurde terracotta",
            "Paars geglazuurde terracotta"
        ],
        "blue_glazed_terracotta": [
            "Blauw geglazuurde terracotta",
            "Blauw geglazuurde terracotta"
        ],
        "brown_glazed_terracotta": [
            "Bruin geglazuurde terracotta",
            "Bruin geglazuurde terracotta"
        ],
        "green_glazed_terracotta": [
            "Groen geglazuurde terracotta",
            "Groen geglazuurde terracotta"
        ],
        "red_glazed_terracotta": [
            "Rood geglazuurde terracotta",
            "Rood geglazuurde terracotta"
        ],
        "black_glazed_terracotta": [
            "Zwart geglazuurde terracotta",
            "Zwart geglazuurde terracotta"
        ],
        "concrete": [
            "Wit beton",
            "Wit beton",
            "Oranje beton",
            "Magenta beton",
            "Lichtblauw beton",
            "Geel beton",
            "Limoengroen beton",
            "Roze beton",
            "Grijs beton",
            "Lichtgrijs beton",
            "Cyaanblauw beton",
            "Paars beton",
            "Blauw beton",
            "Bruin beton",
            "Groen beton",
            "Rood beton",
            "Zwart beton"
        ],
        "glazedTerracottaWhite": [
            "Wit geglazuurde terracotta"
        ],
        "glazedTerracottaOrange": [
            "Oranje geglazuurde terracotta"
        ],
        "glazedTerracottaMagenta": [
            "Magenta geglazuurde terracotta"
        ],
        "glazedTerracottaLightBlue": [
            "Lichtblauw geglazuurde terracotta"
        ],
        "glazedTerracottaYellow": [
            "Geel geglazuurde terracotta"
        ],
        "glazedTerracottaLime": [
            "Limoengroen geglazuurde terracotta"
        ],
        "glazedTerracottaPink": [
            "Roze geglazuurde terracotta"
        ],
        "glazedTerracottaGray": [
            "Grijs geglazuurde terracotta"
        ],
        "glazedTerracottaSilver": [
            "Lichtgrijs geglazuurde terracotta"
        ],
        "glazedTerracottaCyan": [
            "Cyaanblauw geglazuurde terracotta"
        ],
        "glazedTerracottaPurple": [
            "Paars geglazuurde terracotta"
        ],
        "glazedTerracottaBlue": [
            "Blauw geglazuurde terracotta"
        ],
        "glazedTerracottaBrown": [
            "Bruin geglazuurde terracotta"
        ],
        "glazedTerracottaGreen": [
            "Groen geglazuurde terracotta"
        ],
        "glazedTerracottaRed": [
            "Rood geglazuurde terracotta"
        ],
        "glazedTerracottaBlack": [
            "Zwart geglazuurde terracotta"
        ],
        "concretePowder": [
            "Wit betonpoeder",
            "Wit betonpoeder",
            "Oranje betonpoeder",
            "Magenta betonpoeder",
            "Lichtblauw betonpoeder",
            "Geel betonpoeder",
            "Limoengroen betonpoeder",
            "Roze betonpoeder",
            "Grijs betonpoeder",
            "Lichtgrijs betonpoeder",
            "Cyaanblauw betonpoeder",
            "Paars betonpoeder",
            "Blauw betonpoeder",
            "Bruin betonpoeder",
            "Groen betonpoeder",
            "Rood betonpoeder",
            "Zwart betonpoeder"
        ],
        "stripped_spruce_log": [
            "Geschaafde sparren stronk"
        ],
        "stripped_dark_oak_log": [
            "Geschaafde donkereiken stronk"
        ],
        "stripped_birch_log": [
            "Geschaafde berken stronk"
        ],
        "stripped_jungle_log": [
            "Geschaafde junglehouten stronk"
        ],
        "stripped_oak_log": [
            "Geschaafde eiken stronk"
        ],
        "stripped_acacia_log": [
            "Geschaafde acacia stronk"
        ],
        "bamboo": [
            "Bamboe"
        ],
        "scaffolding": [
            "Steiger"
        ],
        "grindstone": [
            "Slijpsteen"
        ],
        "cartography_table": [
            "Kaartenwerkbank"
        ],
        "lantern": [
            "Lantaarn"
        ],
        "soul_lantern": [
            "Zielenlantaarn"
        ],
        "smoker": [
            "Rookoven"
        ],
        "smithing_table": [
            "Smeedwerkbank"
        ],
        "barrel": [
            "Vat"
        ],
        "campfire": [
            "Kampvuur"
        ],
        "loom": [
            "Weefgetouw"
        ],
        "lectern": [
            "Lessenaar"
        ],
        "sweet_berry_bush": [
            "Zoetebessenstruik"
        ],
        "wood": [
            "Eikenhout",
            "Eikenhout",
            "Sparrenhout",
            "Berkenhout",
            "Junglehout",
            "Acaciahout",
            "Donker eikenhout",
            null,
            null,
            "Geschaafd eikenhout",
            "Geschaafd sparrenhout",
            "Geschaafd berkenhout",
            "Geschaafd junglehout",
            "Geschaafd acaciahout",
            "Geschaafd donker eikenhout"
        ],
        "netherite_block": [
            "Blok Netheriet"
        ],
        "ancient_debris": [
            "Eeuwenoud puin"
        ],
        "nether_gold_ore": [
            "Nether-gouderts"
        ],
        "respawn_anchor": [
            "Respawnanker"
        ],
        "crying_obsidian": [
            "Huilend lavaglas"
        ]
    }
};
freeze(lang_data);
export = lang_data;
