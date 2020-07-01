
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
    id: "hu_HU" as LangId,
    commands:{
        "ability_description": "Beállítja egy játékos képességét.",
        "ability_noability": "A(z) „%1$s” nevű tulajdonság nem áll rendelkezésre",
        "ability_granted": "Megkaptad a(z) „%1$s” tulajdonságot",
        "ability_revoked": "Elveszítetted a(z) „%1$s” tulajdonságot",
        "ability_success": "Frissítetted a tulajdonságot",
        "achievement_alreadyHave": "%1$s játékos már rendelkezik ezzel a mérföldkővel: %2$s",
        "achievement_description": "Mérföldkő megadása egy játékosnak vagy elvétele tőle.",
        "achievement_dontHave": "%1$s játékos nem rendelkezik ezzel a mérföldkővel: %2$s",
        "achievement_give_success_all": "%1$s sikeresen megkapta az összes mérföldkövet",
        "achievement_give_success_one": "%1$s sikeresen megkapta ezt a statisztikát: %2$s",
        "achievement_statTooLow": "%1$s játékos nem rendelkezik ezzel a statisztikával: %2$s",
        "achievement_take_success_all": "%1$s játékostól sikeresen elvetted az összes mérföldkövet",
        "achievement_take_success_one": "%1$s játékostól sikeresen elvetted ezt a statisztikát: %2$s",
        "achievement_unknownAchievement": "Ismeretlen mérföldkő vagy statisztika: „%1$s”",
        "agent_attack_success": "Az ügynök sikeresen végrehajtotta az attack parancsot",
        "agent_attack_failed": "Az ügynöknek nem sikerült végrehajtania az attack parancsot",
        "agent_collect_success": "Az ügynök sikeresen végrehajtotta a detectredstone parancsot",
        "agent_collect_failed": "Az ügynöknek nem sikerült végrehajtania a detectredstone parancsot",
        "agent_createagent_success": "Ügynök létrehozva",
        "agent_createagent_failed": "Nem sikerült létrehozni az ügynököt",
        "agent_destroy_success": "Az ügynök megsemmisített egy blokkot",
        "agent_destroy_failed": "Az ügynöknek nem sikerült végrehajtania a destroy parancsot",
        "agent_detect_success": "Az ügynök sikeresen végrehajtotta a detect parancsot",
        "agent_detect_failed": "Az ügynöknek nem sikerült végrehajtania a detect parancsot",
        "agent_detectredstone_success": "Az ügynök sikeresen végrehajtotta a detectredstone parancsot",
        "agent_detectredstone_failed": "Az ügynöknek nem sikerült végrehajtania a detectredstone parancsot",
        "agent_drop_success": "Az ügynök sikeresen végrehajtotta a drop parancsot",
        "agent_drop_failed": "Az ügynöknek nem sikerült végrehajtania a detectredstone parancsot",
        "agent_dropall_success": "Az ügynök sikeresen végrehajtotta a dropall parancsot",
        "agent_dropall_failed": "Az ügynöknek nem sikerült végrehajtania a dropall parancsot",
        "agent_getitemcount_success": "Az ügynök sikeresen végrehajtotta a getitemcount parancsot",
        "agent_getitemcount_failed": "Az ügynöknek nem sikerült végrehajtania a getitemcount parancsot",
        "agent_getitemspace_success": "Az ügynök sikeresen végrehajtotta a getitemspace parancsot",
        "agent_getitemspace_failed": "Az ügynöknek nem sikerült végrehajtania a getitemspace parancsot",
        "agent_getitemdetail_success": "Az ügynök sikeresen végrehajtotta a getitemdetail parancsot",
        "agent_getitemdetail_failed": "Az ügynöknek nem sikerült végrehajtania a getitemdetail parancsot",
        "agent_getposition_success": "Az ügynök sikeresen végrehajtotta a getposition parancsot",
        "agent_getposition_failed": "Az ügynöknek nem sikerült végrehajtania a getposition parancsot",
        "agent_inspect_success": "Az ügynök sikeresen végrehajtotta az inspect parancsot",
        "agent_inspect_failed": "Az ügynöknek nem sikerült végrehajtania az inspect parancsot",
        "agent_inspectdata_success": "Az ügynök sikeresen végrehajtotta az inspect data parancsot",
        "agent_inspectdata_failed": "Az ügynöknek nem sikerült végrehajtania az inspect data parancsot",
        "agent_move_success": "Az ügynök sikeresen végrehajtotta a move parancsot",
        "agent_move_failed": "Az ügynököt nem sikerült mozgatni",
        "agent_outofrange": "Nem lehet kiadni a parancsot, az ügynök nincs a hatótávolságban",
        "agent_place_success": "Az ügynök sikeresen végrehajtotta a place parancsot",
        "agent_place_failed": "Az ügynöknek nem sikerült végrehajtania a place parancsot",
        "agent_setitem_success": "Az ügynök sikeresen végrehajtotta a set item parancsot",
        "agent_setitem_failed": "Az ügynöknek nem sikerült végrehajtania a set item parancsot",
        "agent_turn_success": "Az ügynök sikeresen végrehajtotta a turn parancsot",
        "agent_turn_failed": "Nem sikerült elfordítani az ügynököt",
        "agent_till_success": "Az ügynök sikeresen végrehajtotta a till parancsot",
        "agent_till_failed": "Az ügynöknek nem sikerült végrehajtania a till parancsot",
        "agent_tpagent_description": "Az ügynököd teleportálása.",
        "agent_tpagent_success": "Az ügynök sikeresen teleportált",
        "agent_tpagent_failed": "Az ügynöknek nem sikerült végrehajtania a teleport parancsot",
        "agent_transfer_success": "Az ügynök sikeresen végrehajtotta a transfer parancsot",
        "agent_transfer_failed": "Az ügynöknek nem sikerült végrehajtania a transfer parancsot",
        "always_day": "Nappal-éjszaka ciklus: %1$s",
        "always_day_locked": "Nappal-éjszaka ciklus zárolva",
        "always_day_unlocked": "Nappal-éjszaka ciklus feloldva",
        "ban_description": "A játékos felvétele a tiltólistára.",
        "autocomplete_a": "minden játékos",
        "autocomplete_c": "saját Agent",
        "autocomplete_e": "minden entitás",
        "autocomplete_p": "legközelebbi játékos",
        "autocomplete_r": "véletlenszerű játékos",
        "autocomplete_s": "te magad",
        "autocomplete_v": "minden Agent",
        "ban_failed": "Nem sikerült kitiltani azt a játékost: %1$s",
        "ban_success": "Kitiltottad ezt a játékost: %1$s",
        "banip_description": "IP-cím felvétele a tiltólistára.",
        "banip_invalid": "Érvénytelen IP-címet vagy olyan játékost adtál meg, aki nincs online",
        "banip_success": "Kitiltottad az IP-címet: %1$s",
        "banip_success_players": "Kitiltottad %2$s játékos IP-címét: %1$s",
        "banlist_ips": "Összesen %1$s IP-cím van kitiltva:",
        "banlist_players": "Összesen %1$s játékos van kitiltva:",
        "blockdata_description": "Blokk adatcímkéjének módosítása.",
        "blockdata_placeFailed": "Ide nem lehet blokkokat helyezni",
        "blockdata_destroyFailed": "Itt nem lehet ásni",
        "blockdata_failed": "Az adatcímke nem módosult: %1$s",
        "blockdata_notValid": "A célblokk nem adathordozó blokk",
        "blockdata_outOfWorld": "A világon kívüli blokkokat nem lehet módosítani",
        "blockdata_success": "Erre frissítetted a blokkadatokat: %1$s",
        "blockdata_tagError": "Nem sikerült elemezni az adatcímkét: %1$s",
        "bossbar_add_success": "[%1$s] egyedi főszörnysáv létrehozva",
        "bossbar_add_failure_invalid": "Érvénytelen főszörnysáv-azonosító. Az azonosítóknak névtér:azonosító (namespace:id) vagy azonosító (id) formátumban kell szerepelnie (amely alapértelmezésben a minecraft névtérre utal).",
        "bossbar_add_failure_exists": "'%1$s' azonosítóval már létezik főszörnysáv",
        "bossbar_description": "Főellenségsávokat hoz létre és módosít",
        "bossbar_get_max": "A(z) [%1$s] egyedi főszörnysáv maximális értéke: %2$d",
        "bossbar_get_players": "A(z) [%1$s] egyedi főszörnysáv %2$s online játékossal rendelkezik: %3$s",
        "bossbar_get_players_none": "A(z) [%1$s] egyedi főszörnysávnak jelenleg nincsenek online játékosai",
        "bossbar_get_players_one": "A(z) [%1$s] egyedi főszörnysáv 1 online játékossal rendelkezik: %2$s",
        "bossbar_get_value": "A (z) [%1$s] egyedi főszörnysáv értéke: %2$d",
        "bossbar_get_visible_true": "A(z) [%1$s] egyedi főszörnysáv jelenleg látható",
        "bossbar_get_visible_false": "A(z) [%1$s] egyedi főszörnysáv jelenleg rejtett",
        "bossbar_list": "Jelenleg %1$s egyedi főszörnysáv aktív: %2$s",
        "bossbar_list_none": "Nincs aktív főszörnysáv",
        "bossbar_list_one": "Jelenleg 1 egyedi főszörnysáv aktív: %1$s",
        "bossbar_notFound": "'%1$s' azonosítóval nem létezik főszörnysáv",
        "bossbar_remove": "[%1$s] egyedi főszörnysáv eltávolítva",
        "change_setting_description": "Futtatás közben módosítja egy dedikált kiszolgáló beállításait.",
        "change_setting_success": "%1$s módosult",
        "chunkinfo_compiled": "Összeállítottad a darabkát.",
        "chunkinfo_data": "Az első 64 csúcspont: %1$s",
        "chunkinfo_empty": "A darabka üres.",
        "chunkinfo_hasLayers": "A darabka rétegekkel rendelkezik: %1$s",
        "chunkinfo_hasNoRenderableLayers": "A darabka nem rendelkezik megjeleníthető rétegekkel.",
        "chunkinfo_isEmpty": "A darabka üres rétegekkel rendelkezik: %1$s",
        "chunkinfo_location": "Adattömb helye: (%1$d, %2$d, %3$d)",
        "chunkinfo_noChunk": "Nem található darabka a következő darabkahelyen: %1$d, %2$d, %3$d",
        "chunkinfo_notCompiled": "Nem állítottad össze a darabkát.",
        "chunkinfo_notEmpty": "A darabka nem üres.",
        "chunkinfo_vertices": "A(z) %1$s réteg puffere %2$d csúcspontot tartalmaz",
        "classroommode_description": "Az Oktatási mód elindításának és a hozzá való csatlakozásnak a megkísérlése.",
        "classroommode_success": "Oktatási mód elindításának megkísérlése…",
        "clear_description": "Tárgyak törlése a játékos leltárából.",
        "clear_failure": "Nem sikerült üríteni %1$s leltárát, nincs eltávolítható tárgy",
        "clear_failure_no_items": "Nem sikerült üríteni %1$s leltárát, nincs eltávolítható tárgy",
        "clear_success": "Ürítetted %1$s leltárát, eltávolítva %2$d tárgyat",
        "clear_tagError": "Nem sikerült elemezni az adatcímkét: %1$s",
        "clear_testing": "%1$s %2$d olyan tárggyal rendelkezik, amely megfelel a feltételeknek",
        "clearfixedinv_description": "Eltávolítja a leltár összes rögzített helyét.",
        "clearfixedinv_success": "Eltávolítottad a leltár rögzített helyét",
        "clone_description": "Egyik régióból a másikba klónozással blokkokat visz át.",
        "clone_failed": "Nem klónoztál egyetlen blokkot sem",
        "clone_filtered_error": "A felhasználásszűréshez meg kell adni a szűrőblokkot",
        "clone_noOverlap": "A forrás és a cél nem fedheti egymást",
        "clone_outOfWorld": "A világon kívüli blokkokhoz nem lehet hozzáférni",
        "clone_success": "%1$d blokkot klónoztál",
        "clone_tooManyBlocks": "Túl sok blokk van a megadott területen (%1$d > %2$d)",
        "closechat_description": "Bezárja a helyi játékos csevegőablakát, ha nyitva van.",
        "closechat_success": "Csevegés bezárva",
        "closechat_failure": "Csevegés nem volt nyitva",
        "closewebsocket_description": "Bezárja a websocket-kapcsolatot, ha nyitva van.",
        "code_description": "Elindítja a Code Buildert.",
        "code_success": "Elindította a Code Buildert.",
        "compare_failed": "A forrás és a cél nem egyeznek",
        "compare_outOfWorld": "A világon kívüli blokkokhoz nem lehet hozzáférni",
        "compare_success": "Összehasonlítottál %1$d blokkot",
        "compare_tooManyBlocks": "Túl sok blokk van a megadott területen (%1$d > %2$d)",
        "corruptworld_description": "Tönkreteszi a kiszolgálóra betöltött világot.",
        "corruptworld_success": "Sikeresen tönkretetted a világot.",
        "daylock_description": "Az éjszaka-nappal ciklus zárolása és feloldása.",
        "debug_description": "Hibakeresési munkamenet indítása vagy leállítása.",
        "debug_notStarted": "Nem lehet olyan profilkészítést leállítani, amely még nincs elindítva.",
        "debug_start": "Elindítottad a profilkészítés hibakeresését",
        "debug_stop": "%.2f másodperc (%1$d órajelciklus) után leállítottad a profilkészítés hibakeresését",
        "defaultgamemode_description": "Az alapértelmezett játékmód beállítása.",
        "defaultgamemode_success": "A világ alapértelmezett játékmódja most: %1$s",
        "deop_description": "Visszavonja egy játékos operátori jogát.",
        "deop_failed": "Nem sikerült megszüntetni az operátori jogosultságot (a jogosultsági szint túl magas): %s",
        "deop_success": "Üzemeltetői jog megvonva tőle: %s",
        "deop_message": "Megvonták az üzemeltetői jogodat",
        "difficulty_description": "A nehézségi szint beállítása.",
        "difficulty_usage": "/difficulty <új nehézségi fok>",
        "difficulty_success": "A játékot %1$s nehézségi szintűre állítottad",
        "downfall_success": "Be- vagy kikapcsoltad az esőt, illetve havazást",
        "effect_description": "Állapothatások hozzáadása vagy eltávolítása.",
        "effect_failure_notActive": "Nem sikerült ezt: %1$s elvenni ettől: %2$s, mert nem rendelkezik ezzel az hatással",
        "effect_failure_notActive_all": "Nem sikerült elvenni semmilyen hatást ettől: %1$s, mert nem rendelkezik ilyennel",
        "effect_failure_notAMob": "%1$s nem rendelkezhet hatással",
        "effect_notFound": "Nincs olyan mob, amely ezzel az azonosítójú hatással rendelkezne: %s",
        "effect_success": "%1$s * %2$d neki adva: %3$s %4$d másodpercig",
        "effect_success_removed": "Elvetted ezt: %1$s ettől: %2$s",
        "effect_success_removed_all": "Elvetted az összes hatást ettől: %1$s",
        "enchant_cantCombine": "%1$s nem kombinálható ezzel: %2$s",
        "enchant_invalidLevel": "%1$s nem támogatja a(z) %2$d. szintet",
        "enchant_cantEnchant": "A választott bűvölést nem lehet hozzáadni a célzott tárgyhoz: %1$s",
        "enchant_description": "Bűvölést ad egy játékos választott tárgyához.",
        "enchant_noItem": "A célnak nincs egyetlen tárgya sem: %1$s",
        "enchant_notFound": "Nincs ilyen azonosítójú bűvölés: %1$d",
        "enchant_success": "Sikerült a következő bűvölése: %1$s",
        "entitydata_description": "Entitás adatcímkéjének módosítása.",
        "entitydata_failed": "Az adatcímke nem módosult: %1$s",
        "entitydata_noPlayers": "%1$s játékos, ezért nem módosítható",
        "entitydata_success": "Az adatentitás erre frissült: %1$s",
        "entitydata_tagError": "Nem sikerült elemezni az adatcímkét: %1$s",
        "execute_allInvocationsFailed": "Az összes hívás sikertelen volt: „%1$s”",
        "execute_failed": "Nem sikerült végrehajtani ezt: „%1$s” ekként: %2$s",
        "execute_description": "Egy vagy több egység nevében végrehajt egy parancsot.",
        "fill_description": "Egy régiót teljesen vagy részben kitölt a meghatározott blokkal.",
        "fill_failed": "Nincsenek kitöltve blokkok",
        "fill_outOfWorld": "Nem lehet a világon kívül blokkokat elhelyezni",
        "fill_success": "%1$d blokk kitöltve",
        "fill_tagError": "Nem sikerült elemezni az adatcímkét: %1$s",
        "fill_tooManyBlocks": "Túl sok blokk van a megadott területen (%1$d > %2$d)",
        "fill_replace_auxvalue_invalid": "Érvénytelen csereadatérték a(z) %1$s blokkhoz",
        "function_description": "Lefuttatja a kapcsolódó függvényfájlban található parancsokat.",
        "function_functionNameNotFound": "A(z) %1$s függvény nem található.",
        "function_invalidCharacters": "’%s’ érvénytelen függvénycím, ’%s’ karakter nem megengedett függvények nevében.",
        "function_noEngineVersionSpecified": "A(z) %s funkció nem futtatható. Meg kell adnod a min_engine_version értékét a viselkedési csomag manifest.json fájljában.",
        "function_success": "%1$d függvénybejegyzés sikeresen végrehajtva.",
        "gamemode_description": "Beállítja egy játékos játékmódját.",
        "gamemode_success_other": "%2$s játékmódját erre állítottad: %1$s",
        "gamemode_success_self": "A saját játékmódodat erre állítottad: %1$s",
        "gamemode_fail_invalid": "A(z) „%1$s” játékmód érvénytelen",
        "gamerule_description": "Beállítja vagy lekérdezi egy játékmód értékét.",
        "gamerule_type_invalid": "A(z) „%1$s” játékszabály érvénytelen típust használ",
        "gamerule_type_nocheatsenabled": "A(z) „%1$s” játékszabály csak akkor használható, ha a csalások engedélyezve vannak a világban.",
        "gamerule_nopermission": "Csak a kiszolgáló tulajdonosa módosíthatja ezt: „%1$s”",
        "gamerule_norule": "Nem található a(z) „%1$s” játékszabály",
        "gamerule_success": "A(z) %1$s játékszabályt erre frissítetted: %2$s",
        "generic_async_initiated": "Elindítottad a(z) „%1$s” parancsot (%2$d. aszinkron lépés)",
        "generic_boolean_invalid": "„%1$s” nem igaz vagy hamis",
        "generic_chunk_notFound": "A megadott darabka nem található",
        "generic_componentError": "Nem sikerült elemezni a komponensek listáját",
        "generic_dimension_notFound": "A megadott dimenzió nem található",
        "generic_disabled": "Ezen a szinten nem engedélyezettek a csalások.",
        "generic_disabled_templateLocked": "A beállítások pillanatnyilag zárolva vannak. A módosításukhoz fel kell oldani a sablon világbeállításait a Játékbeállítások menüben.",
        "generic_double_tooBig": "A megadott szám (%.2f) túl nagy, legfeljebb %.2f lehet",
        "generic_double_tooSmall": "A megadott szám (%.2f) túl kicsi, legalább ennyinek kell lennie: %.2f",
        "generic_duplicateType": "Ismétlődő típusargumentumok",
        "generic_duplicateSelectorArgument": "Ismétlődő %s kiválasztóargumentumok",
        "generic_encryption_badkey": "Hibás nyilvános kulcsot adtál meg. A rendszer a PEM formázás után 120 bájtos kulcsot várt.",
        "generic_encryption_badsalt": "Hibás jelszósózást adtál meg. A rendszer az alap 64 bájtos kódolás előtt 16 bájtot várt.",
        "generic_encryption_required": "Titkosított munkamenet szükséges",
        "generic_entity_invalidType": "A(z) „%1$s” entitás érvénytelen",
        "generic_entity_invalidUuid": "A megadott UUID entitás érvénytelen formátumú",
        "generic_entity_notFound": "Az entitás nem található",
        "generic_exception": "Ismeretlen hiba lépett fel a parancs végrehajtása során",
        "generic_invalidAgentType": "Típusargumentum alkalmazva a csak Agent kiválasztóra",
        "generic_invalidcontext": "A megadott parancstípus környezete érvénytelen",
        "generic_invalidDevice": "A megadott parancsot (%s) ez az eszköz nem támogatja",
        "generic_invalidPlayerType": "Típusargumentumot alkalmaztál csak játékosra érvényes kiválasztóra",
        "generic_invalidType": "Ismeretlen típusargumentum",
        "generic_levelError": "A maximális szintnek magasabbnak kell lennie a minimálisnál",
        "generic_malformed_body": "A törzs hiányzik vagy helytelenül formázott",
        "generic_malformed_type": "Érvénytelen kéréstípus",
        "generic_notimplemented": "Nincs implementálva",
        "generic_num_invalid": "A(z) „%1$s” nem érvényes szám",
        "generic_num_tooBig": "A megadott szám (%1$d) túl nagy, legfeljebb %2$d lehet",
        "generic_num_tooSmall": "A megadott szám (%1$d) túl kicsi, legalább ennyinek kell lennie: %2$d",
        "generic_parameter_invalid": "„%1$s” nem érvényes paraméter",
        "generic_permission_selector": "<elégtelen jogosultság a kiválasztóbővítményhez>",
        "generic_player_notFound": "A játékos nem található",
        "generic_protocol_mismatch": "A megadott protokoll verziója nem egyezik a Minecraft protokollverziójával",
        "generic_radiusError": "A minimális kiválasztási sugárnak kisebbnek kell lennie a maximálisnál",
        "generic_radiusNegative": "A sugár nem lehet negatív",
        "generic_rotationError": "Az elforgatás kívül esik a megengedett tartományon",
        "generic_running": "A parancs már fut",
        "generic_step_failed": "A parancs lépése nem sikerült",
        "generic_syntax": "Szintaktikai hiba: Váratlan \"%2$s\": itt: \"%1$s>>%2$s<<%3$s\"",
        "generic_noTargetMatch": "Egyetlen cél sem felelt meg a kiválasztónak",
        "generic_targetNotPlayer": "A kiválasztónak játékos típusúnak kell lennie",
        "generic_tooManyNames": "Túl sok célnévargumentum",
        "generic_tooManyTargets": "Túl sok cél felelt meg a kiválasztónak",
        "generic_too_many_requests": "Túl sok parancsot adtál meg, várd meg, amíg az egyik véget ér",
        "generic_unknown": "Ismeretlen parancs: %s. Ellenőrizd, hogy létezik-e a parancs, és hogy van-e engedélyed a használatára.",
        "generic_usage": "Használat: %1$s",
        "generic_usage_noparam": "Használat:",
        "generic_version_mismatch": "A parancs megadott verziója nem létezik",
        "generic_version_missing": "A nem a csevegésen keresztül küldött parancsoknál meg kell határozni a parancs verzióját",
        "getchunkdata_description": "Lekéri a képpontokat egy bizonyos darabkához.",
        "getchunkdata_success": "Beérkeztek a darabka adatai",
        "getchunks_description": "Lekéri a betöltött darabkák listáját.",
        "getchunks_success": "Beérkezett a darabkák listája",
        "getlocalplayername_description": "A helyi játékos nevét adja vissza.",
        "getspawnpoint_description": "Lekéri a meghatározott játékos(ok) létrehozási pozícióját.",
        "gettopsolidblock_description": "Megadja a legfelső nem levegő blokk helyzetét a meghatározott hely alatt",
        "gettopsolidblock_notfound": "Nincs szilárd blokk a meghatározott hely alatt",
        "give_block_notFound": "Nincs %1$d nevű blokk",
        "give_description": "Egy tárgyat ad egy játékosnak.",
        "give_item_invalid": "Érvénytelen a parancs szintaxisa: nincs ilyen adatértékű %s",
        "give_item_notFound": "Nincs %1$d nevű tárgy",
        "give_map_invalidData": "Érvénytelenek a megadott térképadatok",
        "give_map_featureNotFound": "Nem sikerült létrehozni a felfedezési térképet. Az elem nem található ebben a dimenzióban",
        "give_success": "%1$s * %2$d neki adva: %3$s",
        "give_successRecipient": "Ezt kaptad: %1$s * %2$d",
        "give_tagError": "Nem sikerült elemezni az adatcímkét: %1$s",
        "help_description": "Megjeleníti a súgót vagy a parancsok listáját.",
        "help_footer": "Tipp: Parancsok begépelésekor használd a <tab> billentyűt a parancsok vagy az argumentumok automatikus kiegészítéséhez",
        "help_header": "--- %1$d/%2$d. súgóoldal mutatása (/help <oldalszám>) ---",
        "help_command_aliases": "%s (másképp %s):",
        "immutableworld_description": "Beállítja a világ nem módosítható állapotát.",
        "immutableworld_info": "immutableworld = %s",
        "kick_description": "Kirúg egy játékost a kiszolgálóról.",
        "kick_description_edu": "Eltávolít egy játékost a játékból.",
        "kick_not_found": "Nem sikerült megtalálni %1$s játékost",
        "kick_not_yourself": "Nem tudod magad törölni a játékból",
        "kick_success": "Kirúgtad %1$s játékost",
        "kick_success_reason": "Kirúgtad %1$s játékost ebből a játékból: „%2$s”",
        "kick_success_reasonedu": "%1$s eltávolítva %2$s játékból",
        "kick_no_host": "A házigazdát nem lehet kirúgni a játékból.",
        "kick_no_teacher": "A tanárokat nem lehet eltávolítani a játékból.",
        "kill_successful_edu": "%1$s eltávolítva",
        "kill_successful": "Megölted: %1$s",
        "kill_description_edu": "Eltávolítja az entitásokat (játékosokat, mobokat stb.).",
        "kill_description": "Megöli az entitásokat (játékosokat, mobokat stb.).",
        "list_description": "Listázza egy kiszolgáló játékosait.",
        "locate_description": "Megjeleníti a megadott típus legközelebbi szerkezetének koordinátáját.",
        "locate_fail_noplayer": "A parancs csak egy érvényes játékos által használható",
        "locate_fail_nostructurefound": "Ebben a dimenzióban nem található érvényes szerkezet",
        "locate_success": "A legközelebbi %1$s a következő blokknál van: %2$s, (y?), %3$s",
        "togglecontentlog_toggle": "Be/kikapcsolja a content log (tartalomnaplózás) parancsot",
        "togglecontentlog_enabled": "Content Log (tartalomnaplózás) bekapcsolva",
        "togglecontentlog_disabled": "Content Log (tartalomnaplózás) kikapcsolva",
        "me_description": "Üzenetet jeleníthetsz meg vele magadról.",
        "message_display_incoming": "%1$s ezt súgja: %2$s",
        "message_display_outgoing": "Ezt súgod %1$s játékosnak: %2$s",
        "message_sameTarget": "Önmagadnak nem küldhetsz privát üzenetet!",
        "mixer_description": "A Mixer interaktivitásának vezérlése",
        "mixer_error_unknown": "Ismeretlen Mixer-hiba lépett fel.",
        "mixer_error_notoken": "A Mixer interaktivitásának bekapcsolásához be kell jelentkezned a Microsoft-fiókodba.",
        "mixer_error_notsupported": "Az általad használt eszköz nem támogatja a Mixer interaktivitását.",
        "mixer_interactive_error": "Mixer-hiba lépett fel: %1$s",
        "mixer_scene_failed": "Nem létezik %1$s nevű jelenet. Ellenőrizd, hogy a jelenet nevét helyesen adtad-e meg.",
        "mixer_scene_success": "Erre módosítottad a jelenetet: %1$s",
        "mixer_start_success": "Elindul a Mixer interaktivitása: %1$s",
        "mixer_start_fail_invalidCode": "A(z) \"%1$s\" azonosítójú projekt nem található. Ellenőrizd, hogy helyes-e az azonosító vagy a megosztási kód.",
        "mixer_stop_success": "A Mixer interaktív szolgáltatása leállt.",
        "mixer_stop_fail": "Nincs leállítható interaktív munkamenet.",
        "mixer_status_notinitialized": "Az interaktivitás nincs inicializálva.",
        "mixer_status_enabled": "Interaktivitás bekapcsolva.",
        "mixer_status_initializing": "Az interaktivitás inicializálása folyamatban van.",
        "mixer_status_pending": "Az interaktivitás függőben van.",
        "mixer_status_disabled": "Az interaktivitás ki van kapcsolva.",
        "mixer_activatedbutton": "%1$s aktiválta ezt: %2$s.",
        "mobevent_description": "Szabályozza, milyen mobesemények futása engedélyezett.",
        "mobevent_eventsEnabledSetToTrue": "A mobesemények immár engedélyezettek. Azok az egyes események, amelyek hamisra vannak állítva, nem futnak le.",
        "mobevent_eventsEnabledSetToFalse": "A mobesemények immár nem engedélyezettek. Az egyes események nem futnak le.",
        "mobevent_eventsEnabledIsTrue": "A mobesemények engedélyezettek. Azok az egyes események, amelyek hamisra vannak állítva, nem futnak le.",
        "mobevent_eventsEnabledIsFalse": "A mobesemények nem engedélyezettek. Az egyes események nem futnak le.",
        "mobevent_eventSetToTrue": "%s mobesemény (azonosító: %s) igazra lett állítva.",
        "mobevent_eventSetToTrueButEventsDisabled": "%s mobesemény (azonosító: %s) igazra lett állítva, de a mobesemények nem engedélyezettek.",
        "mobevent_eventSetToFalse": "%s mobesemény (azonosító: %s) hamisra lett állítva.",
        "mobevent_eventIsTrue": "%s mobesemény (azonosító: %s) igazra van állítva.",
        "mobevent_eventIsTrueButEventsDisabled": "%s mobesemény (azonosító: %s) igazra van állítva, de a mobesemények nem engedélyezettek.",
        "mobevent_eventIsFalse": "%s mobesemény (azonosító: %s) hamisra van állítva.",
        "op_description": "Operátori jogot ad egy játékosnak.",
        "op_failed": "Nem sikerült üzemeltetői jogot adni neki (már rendelkezik ezzel vagy egy magasabb szintű joggal): %s",
        "op_success": "Üzemeltetői jogot adtál neki: %s",
        "op_message": "Üzemeltetői jogot kaptál",
        "origin_commandblock": "Parancsblokk",
        "origin_external": "Külső",
        "origin_devconsole": "Fejlesztői konzol",
        "origin_script": "Szkriptmotor",
        "origin_server": "Kiszolgáló",
        "origin_teacher": "Oktató",
        "ops_description": "Újratölti és alkalmazza az üzemeltetői engedélyeket.",
        "ops_reloaded": "Újratöltötted az üzemeltetői engedélyeket a fájlból.",
        "ops_set_success": "Sikeres az operátorszint beállítása %s játékos részére.",
        "permissions_description": "Újratölti és alkalmazza az engedélyeket.",
        "permissions_reloaded": "Engedélyek fájlból betöltve.",
        "permissions_set_failed": "A(z) %s. jogosultsági szint beállítása sikertelen %s játékos részére.",
        "permissions_set_success": "A(z) %s. jogosultsági szint beállítása sikeres %s játékos részére.",
        "permissions_save_failed": "A(z) %s. jogosultsági szint elmentése sikertelen %s játékos részére.",
        "permissions_save_success": "A(z) %s. jogosultsági szint elmentése sikeres %s játékos részére.",
        "spawnParticleEmitter_description": "Részecskeforrást hoz létre.",
        "particle_description": "Részecskék létrehozása.",
        "particle_notFound": "Ismeretlen hatásnév (%1$s)",
        "particle_success": "%1$s hatás lejátszása %2$d alkalommal",
        "players_list": "%1$d/%2$d játékos van online:",
        "players_list_names": "%s",
        "playsound_description": "Hang lejátszása.",
        "playsound_playerTooFar": "%1$s játékos túl messze van a hang meghallásához",
        "playsound_success": "Lejátszottad „%1$s” hangját neki: %2$s",
        "position_description": "Játékos koordinátáinak be- és kikapcsolása.",
        "publish_failed": "Nem sikerült hosztolni a helyi játékot",
        "publish_started": "A helyi játékot a következő porton hosztolod: %1$s",
        "querytarget_description": "Információkat kérdez le a meghatározott entitás vagy entitások átalakításáról, nevéről és azonosítójáról.",
        "querytarget_success": "Cél adatait: %1$s",
        "reload_description": "Újra betölt minden függvényfájlt az összes viselkedéscsomagból.",
        "reload_success": "A létező függvényfájlok újra betöltve. Indítsd újra a Minecraftot az ÚJ függvények ismételt betöltéséhez.",
        "replaceitem_description": "Készletekben lévő tárgyak lecserélése.",
        "replaceitem_failed": "Nem sikerült a(z) %s helyen található %d tárgyat ezzel helyettesíteni: %d * %s",
        "replaceitem_keepFailed": "A(z) %s. %d helyet már elfoglalja egy tárgy.",
        "replaceitem_noContainer": "Az ezen a helyen található blokk nem tároló: %s",
        "replaceitem_badSlotNumber": "Nem sikerült kicserélni a tárgyat a(z) %d. helyen, az értéknek %d és %d között kell lennie.",
        "replaceitem_success": "A(z) %s helyen található %d tárgyat erre cserélted: %d * %s",
        "replaceitem_success_entity": "A(z) %d. helyen található %s tárgyat (%s) erre cserélted: %d * %s",
        "replaceitem_tagError": "Nem sikerült elemezni az adatcímkét: %1$s",
        "save_description": "Vezérelheted vagy ellenőrizheted, hogy a játék miként menti az adatokat a lemezre.",
        "save_disabled": "Kikapcsoltad a világ automatikus mentését",
        "save_enabled": "Bekapcsoltad a világ automatikus mentését",
        "save_failed": "Nem sikerült menteni: %1$s",
        "save_start": "Mentés...",
        "save_success": "Mentetted a világot",
        "save_all_error": "Hiba lépett fel a szint tárolójának szüneteltetése során.",
        "save_all_success": "Mentetted az adatokat. A fájlok készen áll a másolásra.",
        "save_off_alreadyOff": "A mentés már ki van kapcsolva.",
        "save_on_alreadyOn": "A mentés már be van kapcsolva.",
        "save_on_notDone": "Egy korábbi mentés nem fejeződött be.",
        "save_on_description": "Bekapcsolja a kiszolgáló automatikus mentését.",
        "save_on_success": "Folytatja a szint módosításait.",
        "save_state_description": "Ellenőrzi, hogy befejeződött-e egy korábbi save-all művelet, és felsorolja az érintett fájlokat.",
        "say_description": "A csevegővel üzenet küld más játékosoknak.",
        "scoreboard_description": "Különféle célkitűzések pontszámait követi és jelzi ki.",
        "scoreboard_allMatchesFailed": "Minden találat sikertelen",
        "scoreboard_noMultiWildcard": "Csak egy felhasználói helyettesítő karakter használata megengedett",
        "scoreboard_objectiveNotFound": "Nem található „%1$s” nevű feladat",
        "scoreboard_objectiveReadOnly": "A(z) „%1$s” feladat csak olvasható, és nem állítható be",
        "scoreboard_objectives_add_alreadyExists": "Már létezik „%1$s” nevű feladat",
        "scoreboard_objectives_add_displayTooLong": "A „%1$s” feladat megjelenített neve túl hosszú, legfeljebb %2$d karakter hosszú lehet",
        "scoreboard_objectives_add_success": "Sikeresen hozzáadtad a(z) „%1$s” feladatot",
        "scoreboard_objectives_add_tooLong": "A „%1$s” feladat neve túl hosszú, legfeljebb %2$d karakter lehet",
        "scoreboard_objectives_add_wrongType": "A feladat kritériumának „%1$s” típusa érvénytelen",
        "scoreboard_objectives_add_needName": "A feladatnak nevet kell adni.",
        "scoreboard_objectives_description": "Az eredménytábla feladatok módosítása.",
        "scoreboard_objectives_list_count": "%1$d célkitűzés megjelenítése az eredménytáblán:",
        "scoreboard_objectives_list_empty": "Az eredménytáblán nincsenek feladatok",
        "scoreboard_objectives_list_entry": "- %1$s ekként jelentik meg: „%2$s”, és ilyen típusú: „%3$s”",
        "scoreboard_objectives_remove_success": "Sikeresen eltávolítottad a(z) „%1$s” feladatot",
        "scoreboard_objectives_setdisplay_invalidSlot": "Nincs „%1$s” megjelenítési hely",
        "scoreboard_objectives_setdisplay_successCleared": "Törölted a(z) „%1$s” feladatmegjelenítési helyet",
        "scoreboard_objectives_setdisplay_successSet": "A(z) „%1$s” helyen a megjelenített feladatot erre állítottad: „%2$s”",
        "scoreboard_players_add_success": "Hozzáadva %1$d ehhez: [%2$s] %3$s számára (most %4$d)",
        "scoreboard_players_add_multiple_success": "Hozzáadva %1$d [%2$s] %3$d entitáshoz",
        "scoreboard_players_nameNotFound": "Meg kell adni egy játékosnevet.",
        "scoreboard_players_enable_noTrigger": "A(z) %1$s feladat nem eseményindító",
        "scoreboard_players_enable_success": "Bekapcsoltad a(z) %1$s eseményindítót ehhez: %2$s",
        "scoreboard_players_list_count": "%1$d követett játékos megjelenítése az eredménytáblán:",
        "scoreboard_players_list_empty": "Az eredménytáblán nincsenek követett játékosok",
        "scoreboard_players_list_player_count": "A(z) %1$d követett feladat megjelenítése ehhez: %2$s:",
        "scoreboard_players_list_player_empty": "%1$s játékosnak nincsenek mentett eredményei",
        "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_players_operation_invalidOperation": "Érvénytelen művelet: %1$s",
        "scoreboard_players_operation_notFound": "Nem található %1$s eredmény ehhez: %2$s",
        "scoreboard_players_operation_success": "Fejlesztve [%1$s] %2$d entitáshoz",
        "scoreboard_players_offlinePlayerName": "Játékos offline",
        "scoreboard_players_random_invalidRange": "A minimum %1$d nem kisebb, mint maximumként megadott %2$d",
        "scoreboard_players_remove_success": "%1$d eltávolítva ebből: [%2$s] %3$s számára (most %4$d)",
        "scoreboard_players_remove_multiple_success": "Eltávolítva %1$d [%2$s] %3$d entitáshoz",
        "scoreboard_players_reset_success": "%1$s játékos eredményének visszaállítása",
        "scoreboard_players_resetscore_success": "%1$s játékos %2$s eredményének visszaállítása",
        "scoreboard_players_set_success": "[%1$s] beállítása %2$s számára ennyire %3$d",
        "scoreboard_players_set_multiple_success": "[%1$s] beállítása %2$d entitáshoz erre: %3$d",
        "scoreboard_players_set_tagError": "Nem sikerült elemezni az adatcímkét, oka: %1$s",
        "scoreboard_players_set_tagMismatch": "%1$s adatcímkéje nem egyezik",
        "scoreboard_players_score_notFound": "Nem található %1$s pontszám %2$s részére",
        "scoreboard_players_test_failed": "A(z) %1$d eredmény NEM ebben a tartományban van: %2$d – %3$d",
        "scoreboard_players_test_success": "A(z) %1$d eredmény ebben a tartományban van: %2$d – %3$d",
        "scoreboard_teamNotFound": "Nem található „%1$s” nevű csapat",
        "scoreboard_teams_add_alreadyExists": "Már létezik „%1$s” nevű csapat",
        "scoreboard_teams_add_displayTooLong": "A csapat „%1$s” megjelenített neve túl hosszú, legfeljebb %2$d karakter lehet",
        "scoreboard_teams_add_success": "Sikeresen hozzáadtad a(z) „%1$s” csapatot",
        "scoreboard_teams_add_tooLong": "A csapat „%1$s” neve túl hosszú, legfeljebb %2$d karakter lehet",
        "scoreboard_teams_empty_alreadyEmpty": "A(z) %1$s már üres, nem létező játékosok nem távolíthatók el",
        "scoreboard_teams_empty_success": "Eltávolítottad az összes (%1$d) játékost a(z) %2$s csapatból",
        "scoreboard_teams_join_failure": "Nem sikerült hozzáadni %1$d játékost a(z) %2$s csapathoz: %3$s",
        "scoreboard_teams_join_success": "%1$d játékos sikeresen hozzáadva a(z) %2$s csapathoz: %3$s",
        "scoreboard_teams_leave_failure": "Nem sikerült eltávolítani %1$d játékost a csapatból: %2$s",
        "scoreboard_teams_leave_noTeam": "Nem vagy egyetlen csapat tagja sem",
        "scoreboard_teams_leave_success": "Eltávolítottál %1$d játékost a csapatából: %2$s",
        "scoreboard_teams_list_count": "%1$d csapat megjelenítése az eredménytáblán:",
        "scoreboard_teams_list_empty": "Az eredménytáblán nincsenek regisztrált csapatok",
        "scoreboard_teams_list_entry": "- %1$s: „%2$s” %3$d játékossal rendelkezik",
        "scoreboard_teams_list_player_count": "%1$d játékos %2$s csapatban:",
        "scoreboard_teams_list_player_empty": "A(z) %1$s csapatban nincsenek játékosok",
        "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_teams_option_noValue": "A(z) %1$s opció érvényes értékei: %2$s",
        "scoreboard_teams_option_success": "A(z) %1$s opciót a(z) %2$s csapat számára erre állítottad: %3$s",
        "scoreboard_teams_remove_success": "Eltávolítottad a(z) %1$s csapatot",
        "seed_success": "Mag: %1$s",
        "setblock_description": "A blokkot egy másik blokkra cseréli.",
        "setblock_failed": "Nem lehet elhelyezni a blokkot",
        "setblock_noChange": "A blokkot nem sikerült elhelyezni",
        "setblock_notFound": "Nincs ilyen azonosítójú vagy nevű %1$s blokk",
        "setblock_outOfWorld": "Nem lehet a világon kívül elhelyezni blokkokat",
        "setblock_success": "Elhelyezted a blokkot",
        "setblock_tagError": "Nem sikerült elemezni az adatcímkét: %1$s",
        "setidletimeout_success": "Az üresjárati időtúllépést %1$d percre állítottad.",
        "setfixedinvslots_description": "Beállítja a rögzített leltárhelyek számát a kiszolgálón.",
        "setfixedinvslots_success": "A rögzített leltárhelyek számát erre állítottad: %1$d",
        "setfixedinvslot_description": "Egy rögzített helyre egy adott tárgyat állít be.",
        "setfixedinvslot_success": "A(z) %1$d rögzített leltárhelyét erre állítottad: %2$s",
        "globalpause_description": "Beállítja vagy lekéri a játék szüneteltetési állapotát az összes játékos számára.",
        "globalpause_success": "Szüneteltetési állapot beállítása vagy lekérése",
        "setmaxplayers_description": "Beállítja a játékosok maximális számát ehhez a játékmenethez.",
        "setmaxplayers_success": "A játékosok maximális számára erre állítja: %1$d.",
        "setmaxplayers_success_upperbound": "(A maximálisan engedélyezett kapcsolatoktól függ)",
        "setmaxplayers_success_lowerbound": "(A játékosok aktuális számától függ)",
        "setworldspawn_description": "Beállítja a világ létrehozási pontját.",
        "setworldspawn_success": "A világ létrehozási pontját erre állítottad: %1$d, %2$d, %3$d",
        "setworldspawn_wrongDimension": "A világ létrehozási pontját nem lehet beállítani ebben a dimenzióban",
        "spawnpoint_success_single": "%1$s létrehozási pontját erre állítottad: %2$d, %3$d, %4$d",
        "spawnpoint_description": "Beállítja egy játékos létrehozási pontját.",
        "spawnpoint_success_multiple_specific": "%1$s létrehozási pontját erre állítottad: %2$d, %3$d, %4$d",
        "spawnpoint_success_multiple_generic": "Beállítottad %1$s létrehozási pontját",
        "spawnpoint_wrongDimension": "A teremtődési pontot nem lehet beállítani ebben a dimenzióban",
        "spreadplayers_description": "Entitások teleportálása véletlenszerű helyek között.",
        "spreadplayers_failure_players": "Nem sikerült elosztani %1$s játékost %2$s,%3$s körül (túl sok játékos kerülne egy helyre, próbálj legfeljebb ennyit elosztani: %4$s)",
        "spreadplayers_failure_teams": "Nem sikerült elosztani %1$s csapatot %2$s,%3$s körül (túl sok játékos kerülne egy helyre, próbálj legfeljebb ennyit elosztani: %4$s)",
        "spreadplayers_info_players": "(A játékosok egymástól való átlagos távolsága %1$s blokk %2$s ismétlés után)",
        "spreadplayers_info_teams": "(A csapatok egymástól való átlagos távolsága %1$s blokk %2$s ismétlés után)",
        "spreadplayers_spreading_players": "%1$s játékos elosztása %2$s blokkra %3$s,%4$s körül (legalább %5$s blokk távolságra egymástól)",
        "spreadplayers_spreading_teams": "%1$s csapat elosztása %2$s blokkra %3$s,%4$s körül (legalább %5$s blokk távolságra egymástól)",
        "spreadplayers_success_players": "Sikeresen elosztottál %1$s játékost %2$s,%3$s körül",
        "spreadplayers_success_teams": "Sikeresen elosztottál %1$s csapatot %2$s,%3$s körül",
        "stats_cleared": "Törölted %1$s statisztikáit",
        "stats_failed": "Érvénytelen paraméterek",
        "stats_noCompatibleBlock": "Az ezen a helyen lévő blokk nem tudja követni a statisztikákat: %1$d, %2$d, %3$d",
        "stats_success": "%1$s statisztika tárolása ebben: %2$s, ezen: %3$s",
        "stop_description": "Leállítja a kiszolgálót.",
        "stop_start": "Kiszolgáló leállítása",
        "stopsound_description": "Hang leállítása.",
        "stopsound_success": "Elnémítottad a(z) %s hangot ennyi ideig: %s",
        "stopsound_success_all": "Elnémítottad az összes hangot ennyi ideig: %s",
        "summon_description": "Megidéz egy entitást.",
        "summon_failed": "Nem sikerült megidézni az objektumot",
        "summon_outOfWorld": "Nem lehet a világon kívüli objektumot megidézni",
        "summon_success": "Sikerült megidézni az objektumot",
        "summon_tagError": "Nem sikerült elemezni az adatcímkét: %1$s",
        "tag_description": "Kezeli az entitásokban tárolt címkéket.",
        "tag_add_failed": "A célnak már van ilyen címkéje, vagy túl sok a címke",
        "tag_add_success_single": "'%1$s' címke hozzáadva ehhez: %2$s",
        "tag_add_success_multiple": "'%1$s' címke hozzáadva %2$d entitáshoz",
        "tag_list_single_empty": "%s nem rendelkezik címkékkel",
        "tag_list_single_success": "%1$s %2$d címkével rendelkezik: %3$s",
        "tag_list_multiple_empty": "Nincsenek címkék a(z) %d entitásokon",
        "tag_list_multiple_success": "A(z) %1$d entitás összesen %2$d címkével rendelkezik: %3$s",
        "tag_remove_failed": "A célnak nincs ilyen címkéje",
        "tag_remove_success_single": "'%1$s' címke eltávolítva innen: %2$s",
        "tag_remove_success_multiple": "'%1$s' címke eltávolítva %2$d entitásról",
        "tell_description": "Privát üzenetet küld egy vagy több játékosnak.",
        "tellraw_description": "Egy JSON üzenetet küld a játékosoknak.",
        "tellraw_jsonException": "Érvénytelen json: %1$s",
        "tellraw_jsonStringException": "Érvénytelen json string-adatok.",
        "tellraw_error_noData": "Nincs adat megadva.",
        "tellraw_error_notArray": "A rawtext objektumnak tartalmaznia kell egy tömböt. Példa: \"rawtext\":[{..}]",
        "tellraw_error_textNotString": "a rawtext szövegmezőjének tartalmaznia kell egy stringet. Példa: \"rawtext\":[{\"text\": \"text to display\"}]",
        "tellraw_error_translateNotString": "a rawtext translate mezőjének tartalmaznia kell egy nyelvkulcsot. Példa: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
        "tellraw_error_withNotArrayOrRawText": "a rawtext with mezőjének tömböt vagy másik rawtext objektumot kell tartalmaznia Példa 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Példa 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
        "tellraw_error_itemIsNotObject": "A Json érték a rawtext tömbben nem volt objektum. Példa: \"rawtext\": [{ \"text\" : \"my text\" }]",
        "educlientinfo_description": "Bérlő azonosítójának és gazdaállapotának lekérése. Oktatási módhoz használandó.",
        "testfor_description": "A megadott feltételeknek megfelelő entitások (játékosok, mobok, tárgyak stb.) megszámlálása.",
        "testfor_failure": "%1$s nem a kívánt adatszerkezettel rendelkezik",
        "testfor_success": "Talált: %1$s",
        "testfor_tagError": "Nem sikerült elemezni az adatcímkét: %1$s",
        "testforblock_description": "Teszteli, hogy egy bizonyos blokk egy bizonyos helyen van-e.",
        "testforblock_failed_data": "A(z) %1$d,%2$d,%3$d helyen lévő blokk nem egyezik a várt blokkállapottal.",
        "testforblock_failed_nbt": "A(z) %1$d,%2$d,%3$d helyen lévő blokk nem rendelkezik a szükséges NBT-kulcsokkal.",
        "testforblock_failed_tile": "A(z) %1$d,%2$d,%3$d helyen lévő blokk: %4$s (várt: %5$s).",
        "testforblock_failed_tileEntity": "A(z) %1$d,%2$d,%3$d helyen lévő blokk nem mozaik entitás, azért nem támogatja a címkeegyeztetést.",
        "testforblock_outOfWorld": "Nem lehet a világon kívül blokkot tesztelni",
        "testforblock_success": "Sikeresen megtaláltad a(z) %1$d,%2$d,%3$d helyen lévő blokkot.",
        "testforblocks_description": "Teszteli, hogy két régió blokkjai megegyeznek-e.",
        "tickingarea_description": "Ketyegő területek hozzáadása, eltávolítása vagy felsorolása.",
        "tickingarea_inuse": "%1$d/%2$d ketyegő terület használatban.",
        "tickingarea_noneExist_currentDimension": "Nincsenek ketyegő területek a jelenlegi dimenzióban.",
        "tickingarea_add_bounds_success": "Ketyegő terület hozzáadva %1$d és %2$d között.",
        "tickingarea_add_circle_success": "Ketyegő terület hozzáadva. Középpont: %1$d, sugár: %2$d darabka.",
        "tickingarea_add_failure": "Már elérted a ketyegő területek maximális számát (%1$d). Több ketyegő terület nem adható hozzá.",
        "tickingarea_add_conflictingname": "Már létezik %1$s nevű ketyegő terület.",
        "tickingarea_add_chunkfailure": "A ketyegő terület több, mint %1$d darabkát tartalmaz, azaz túl nagy, és ezért nem lehet létrehozni.",
        "tickingarea_add_radiusfailure": "A sugár nem lehet nagyobb, mint %1$d. A ketyegő terület túl nagy, ezért nem lehet létrehozni.",
        "tickingarea_remove_success": "Ketyegő terület(ek) eltávolítva",
        "tickingarea_remove_failure": "Nincsen a(z) %1$d blokkpozíciót tartalmazó ketyegő terület a jelenlegi dimenzióban.",
        "tickingarea_remove_byname_failure": "Nincs %1$s nevű ketyegő terület a jelenlegi dimenzióban.",
        "tickingarea_remove_all_success": "Ketyegő terület(ek) eltávolítva",
        "tickingarea_remove_all_failure": "Nincsenek ketyegő területek a jelenlegi dimenzióban.",
        "tickingarea_list_chunks": "darabka",
        "tickingarea_list_circle_radius": "Sugár",
        "tickingarea_list_success_currentDimension": "A jelenlegi dimenzióban található ketyegő területek listája",
        "tickingarea_list_success_allDimensions": "A dimenziók bármelyikében található ketyegő területek listája",
        "tickingarea_list_failure_allDimensions": "Egyetlen dimenzióban sincs ketyegő terület.",
        "tickingarea_list_to": "-",
        "tickingarea_list_type_circle": "Kör",
        "time_added": "Hozzáadtad az időhöz: %1$d",
        "time_description": "A világ játékidejének módosítása vagy lekérdezése.",
        "time_disabled": "Ezen a szinten engedélyezve van a Mindig nappal beállítás.",
        "time_query_day": "A nap: %d",
        "time_query_daytime": "A napszak: %d",
        "time_query_gametime": "A játékidő: %d",
        "time_set": "Az időt erre állítottad: %1$d",
        "time_stop": "Idő: %1$s",
        "title_description": "Megadja a képernyők címét.",
        "title_success": "Sikeresen végrehajtotta a címzési parancsot",
        "titleraw_description": "JSON-üzenetekkel irányítja a képernyőcímeket.",
        "toggledownfall_description": "Be-és kikapcsolja az időjárást.",
        "tp_description": "Teleportálja az entitásokat (játékokokat, mobokat stb.).",
        "tp_notSameDimension": "Nem lehet teleportálni, mert a játékosok nem azonos dimenzióban vannak",
        "tp_outOfWorld": "Nem lehet a világon kívülre teleportálni entitásokat",
        "tp_permission": "Nincs engedélyed a perjeles parancs használatához",
        "tp_safeTeleportFail": "%1$s nem teleportálható a(z) %2$s helyszínre, mert a területen vannak még blokkok.",
        "tp_far": "%1$s nem teleportálható a(z) %2$s kirakodott területre",
        "tp_success": "%1$s játékost ide teleportáltad: %2$s",
        "tp_successVictim": "Ide teleportáltak: %1$s",
        "tp_success_coordinates": "%1$s entitást ide teleportáltad: %2$s, %3$s, %4$s",
        "transferserver_description": "Egy játékost áthelyez egy másik kiszolgálóra.",
        "transferserver_successful": "Áthelyezted a játékost",
        "transferserver_invalid_port": "Érvénytelen port (0­­–65535)",
        "trigger_description": "Aktiválandó eseményindító beállítása.",
        "trigger_disabled": "A(z) %1$s eseményindító nincs bekapcsolva",
        "trigger_invalidMode": "Érvénytelen az eseményindító módja: %1$s",
        "trigger_invalidObjective": "Érvénytelen az eseményindító neve: %1$s",
        "trigger_invalidPlayer": "Csak a játékosok használhatják a /trigger parancsot",
        "trigger_success": "A(z) %1$s eseményindító erre változott: %2$s %3$s",
        "unban_failed": "Nem sikerült feloldani %1$s játékos tiltását",
        "unban_success": "Feloldottad %1$s játékos tiltását",
        "unbanip_invalid": "Érvénytelen IP-címet adtál meg",
        "unbanip_success": "Feloldottad a következő IP-cím tiltását: %1$s",
        "validategamelighting_description": "A játék megvilágításának érvényesítése egy adott régióra",
        "validategamelighting_checkRegionTooBig": "A világítás ellenőrzéséhez kijelölt régió túl nagy! (%1$d > %2$d)",
        "validategamelighting_outOfWorld": "A világon kívül nem lehet ellenőrizni a világítást",
        "weather_clear": "Váltás jó időjárásra",
        "weather_description": "Bekapcsolja az időjárást.",
        "weather_disabled": "Az időjárásciklus nincs engedélyezve ezen a szinten.",
        "weather_query": "Az időjárás-állapot: %s",
        "weather_query_clear": "derült",
        "weather_query_rain": "esős",
        "weather_query_thunder": "viharos",
        "weather_rain": "Váltás esős időjárásra",
        "weather_thunder": "Váltás viharos időjárásra",
        "whitelist_add_failed": "Nem sikerült %1$s játékost hozzáadni a kivételek listájához",
        "whitelist_add_success": "%1$s játékost hozzáadtad a kivételek listájához",
        "whitelist_description": "Kezeli a kiszolgáló kivétellistáját.",
        "whitelist_disabled": "Kikapcsoltad a kivételek listáját",
        "whitelist_enabled": "Bekapcsoltad a kivételek listáját",
        "whitelist_list": "%1$d játékos van a kivételek listáján (a megjelenített %2$d közül):",
        "whitelist_reloaded": "Fájlból visszatöltötted a kivételek listáját.",
        "whitelist_remove_failed": "Nem sikerült eltávolítani %1$s játékost a kivételek listájáról",
        "whitelist_remove_success": "Eltávolítottad %1$s játékost a kivételek listájáról",
        "world_age_description": "Lekérdezi vagy megváltoztatja a világ korát (a teremtése óta eltelt időt).",
        "world_age_added": "%1$d hozzáadva a világ korához",
        "world_age_query": "A világ kora: %d",
        "world_age_set": "A világ korának beállítása erre: %1$d",
        "worldborder_center_success": "A világhatár középpontját ide állítottad: %1$s,%2$s",
        "worldborder_damage_amount_success": "A világhatár károsodásának értékét blokkonként %1$s értékre állítottad (blokkonként %2$s értékről)",
        "worldborder_damage_buffer_success": "A világhatár károsodásának pufferét %1$s blokkra állítottad (%2$s blokkról)",
        "worldborder_get_success": "A világhatár jelenleg %1$s blokk széles",
        "worldborder_set_success": "A világhatárt %1$s blokk szélességűre állítottad (%2$s blokkról)",
        "worldborder_setSlowly_grow_success": "A világhatárt %1$s blokk szélesre növelted (%2$s blokkról) %3$s másodperc alatt",
        "worldborder_setSlowly_shrink_success": "A világhatárt %1$s blokk szélesre csökkentetted (%2$s blokkról) %3$s másodperc alatt",
        "worldborder_warning_distance_success": "A világhatárral kapcsolatos figyelmeztetést %1$s blokk távolságra állítottad (%2$s blokkról)",
        "worldborder_warning_time_success": "A világhatárral kapcsolatos figyelmeztetést %1$s másodperc távolságra állítottad (%2$s másodpercről)",
        "worldbuilder_description": "A játékos Világépítő-állapotának be- és kikapcsolása.",
        "worldbuilder_success": "A világépítő állapota erre frissült: %1$s",
        "wsserver_description": "A megadott URL-en található websocket-kiszolgálóhoz próbál csatlakozni.",
        "wsserver_invalid_url": "A kiszolgáló megadott URL-je érvénytelen",
        "wsserver_request_existing": "Már fut egy másik kapcsolódási kérés",
        "wsserver_request_failed": "Nem lehet csatlakozni a kiszolgálóhoz: %1$s",
        "wsserver_success": "Létrejött a kapcsolat a kiszolgálóval: %1$s",
        "xp_description": "Játékostapasztalat hozzáadása vagy elvétele.",
        "xp_failure_widthdrawXp": "A játékosnak nem lehet negatív tapasztalat pontot adni",
        "xp_success": "%1$d tapasztalatot adtál neki: %2$s",
        "xp_success_levels": "%1$d szintet adtál neki: %2$s",
        "xp_success_negative_levels": "Elvettél %1$d szintet tőle: %2$s"
    },
    item:{
        "air": [
            "Levegő"
        ],
        "apple": [
            "Alma"
        ],
        "golden_apple": [
            "Aranyalma"
        ],
        "appleenchanted": [
            "Bűvös alma"
        ],
        "armor_stand": [
            "Páncéltartó állvány"
        ],
        "arrow": [
            "Nyíl"
        ],
        "tipped_arrow": [
            "Bájitalba áztatott nyíl"
        ],
        "banner": [
            "Fekete zászló",
            "Fekete zászló",
            "Vörös zászló",
            "Zöld zászló",
            "Barna zászló",
            "Kék zászló",
            "Lila zászló",
            "Türkiz zászló",
            "Világosszürke zászló",
            "Szürke zászló",
            "Rózsaszín zászló",
            "Limezöld zászló",
            "Sárga zászló",
            "Világoskék zászló",
            "Bíborvörös zászló",
            "Narancssárga zászló",
            "Fehér zászló"
        ],
        "bed": [
            "Ágy",
            "Fehér ágy",
            "Narancssárga ágy",
            "Bíborvörös ágy",
            "Világoskék ágy",
            "Sárga ágy",
            "Limezöld ágy",
            "Rózsaszín ágy",
            "Szürke ágy",
            "Világosszürke ágy",
            "Türkiz ágy",
            "Lila ágy",
            "Kék ágy",
            "Barna ágy",
            "Zöld ágy",
            "Piros ágy",
            "Fekete ágy"
        ],
        "bell": [
            "Harang"
        ],
        "steak": [
            "Szték"
        ],
        "beef": [
            "Nyers marhahús"
        ],
        "beetroot": [
            "Cékla"
        ],
        "beetroot_soup": [
            "Céklaleves"
        ],
        "blaze_powder": [
            "Őrlángpor"
        ],
        "blaze_rod": [
            "Lángrúd"
        ],
        "boat": [
            "Tölgyfa csónak",
            "Tölgyfa csónak",
            "Fenyőfa csónak",
            "Nyírfa csónak",
            "Trópusi fa csónak",
            "Akáciafa csónak",
            "Sötét tölgyfa csónak"
        ],
        "bone": [
            "Csont"
        ],
        "book": [
            "Könyv"
        ],
        "chainmail_boots": [
            "Lánccsizma"
        ],
        "leather_boots": [
            "Bőrcsizma"
        ],
        "diamond_boots": [
            "Gyémántcsizma"
        ],
        "golden_boots": [
            "Aranycsizma"
        ],
        "iron_boots": [
            "Vascsizma"
        ],
        "bow": [
            "Íj"
        ],
        "bowl": [
            "Tál"
        ],
        "bread": [
            "Kenyér"
        ],
        "brewing_stand": [
            "Főzőállvány"
        ],
        "brick": [
            "Tégla"
        ],
        "bucket": [
            "Vödör"
        ],
        "bucketLava": [
            "Lávásvödör"
        ],
        "bucketWater": [
            "Vizesvödör"
        ],
        "bucketFish": [
            "Egy vödör tőkehal"
        ],
        "bucketSalmon": [
            "Egy vödör lazac"
        ],
        "bucketTropical": [
            "Egy vödör trópusi hal"
        ],
        "bucketPuffer": [
            "Egy vödör gömbhal"
        ],
        "bucketCustomFish": [
            "Egy vödör"
        ],
        "tropicalColorWhite": [
            "Fehér"
        ],
        "tropicalColorOrange": [
            "Narancssárga"
        ],
        "tropicalColorMagenta": [
            "Bíborvörös"
        ],
        "tropicalColorSky": [
            "Égszínkék"
        ],
        "tropicalColorYellow": [
            "Sárga"
        ],
        "tropicalColorLime": [
            "Limezöld"
        ],
        "tropicalColorRose": [
            "Rozészín"
        ],
        "tropicalColorGray": [
            "Szürke"
        ],
        "tropicalColorSilver": [
            "Ezüst"
        ],
        "tropicalColorTeal": [
            "Zöldeskék"
        ],
        "tropicalColorPlum": [
            "Szilvakék"
        ],
        "tropicalColorBlue": [
            "Kék"
        ],
        "tropicalColorBrown": [
            "Barna"
        ],
        "tropicalColorGreen": [
            "Zöld"
        ],
        "tropicalColorRed": [
            "Vörös"
        ],
        "tropicalBodyKobSingle": [
            "%1$s Árnyhal"
        ],
        "tropicalBodySunstreakSingle": [
            "%1$s Napsugár"
        ],
        "tropicalBodySnooperSingle": [
            "%1$s Szimat"
        ],
        "tropicalBodyDasherSingle": [
            "%1$s Fürge"
        ],
        "tropicalBodyBrinelySingle": [
            "%1$s Tüskés"
        ],
        "tropicalBodySpottySingle": [
            "%1$s Foltos"
        ],
        "tropicalBodyFlopperSingle": [
            "%1$s Bukdács"
        ],
        "tropicalBodyStripeySingle": [
            "%1$s Csíkos"
        ],
        "tropicalBodyGlitterSingle": [
            "%1$s Csillám"
        ],
        "tropicalBodyBlockfishSingle": [
            "%1$s Blokkhal"
        ],
        "tropicalBodyBettySingle": [
            "%1$s Földszín"
        ],
        "tropicalBodyClayfishSingle": [
            "%1$s Agyaghal"
        ],
        "tropicalBodyKobMulti": [
            "%1$s-%2$s Árnyhal"
        ],
        "tropicalBodySunstreakMulti": [
            "%1$s-%2$s Napsugár"
        ],
        "tropicalBodySnooperMulti": [
            "%1$s-%2$s Szimat"
        ],
        "tropicalBodyDasherMulti": [
            "%1$s-%2$s Fürge"
        ],
        "tropicalBodyBrinelyMulti": [
            "%1$s-%2$s Tüskés"
        ],
        "tropicalBodySpottyMulti": [
            "%1$s-%2$s Foltos"
        ],
        "tropicalBodyFlopperMulti": [
            "%1$s-%2$s Bukdács"
        ],
        "tropicalBodyStripeyMulti": [
            "%1$s-%2$s Csíkos"
        ],
        "tropicalBodyGlitterMulti": [
            "%1$s-%2$s Csillám"
        ],
        "tropicalBodyBlockfishMulti": [
            "%1$s-%2$s Blokkhal"
        ],
        "tropicalBodyBettyMulti": [
            "%1$s-%2$s Földszín"
        ],
        "tropicalBodyClayfishMulti": [
            "%1$s-%2$s Agyaghal"
        ],
        "tropicalSchoolAnemone": [
            "Szellőrózsa"
        ],
        "tropicalSchoolBlackTang": [
            "Fekete doktorhal"
        ],
        "tropicalSchoolBlueDory": [
            "Kék kakashal"
        ],
        "tropicalSchoolButterflyFish": [
            "Pillangóhal"
        ],
        "tropicalSchoolCichlid": [
            "Bölcsőszájúhal"
        ],
        "tropicalSchoolClownfish": [
            "Bohóchal"
        ],
        "tropicalSchoolCottonCandyBetta": [
            "Vattacukor harcoshal"
        ],
        "tropicalSchoolDottyback": [
            "Pöttyöshátú"
        ],
        "tropicalSchoolEmperorRedSnapper": [
            "Császárvörös csattogóhal"
        ],
        "tropicalSchoolGoatfish": [
            "Kecskehal"
        ],
        "tropicalSchoolMoorishIdol": [
            "Mór bálvány"
        ],
        "tropicalSchoolOrnateButterfly": [
            "Díszes pillangó"
        ],
        "tropicalSchoolParrotfish": [
            "Papagájhal"
        ],
        "tropicalSchoolQueenAngelFish": [
            "Sertefogú hal"
        ],
        "tropicalSchoolRedCichlid": [
            "Vörös bölcsőszájúhal"
        ],
        "tropicalSchoolRedLippedBlenny": [
            "Vörösszájú nyálkáshal"
        ],
        "tropicalSchoolRedSnapper": [
            "Vörös csattogóhal"
        ],
        "tropicalSchoolThreadfin": [
            "Szemfoltos hal"
        ],
        "tropicalSchoolTomatoClown": [
            "Paradicsomszín bohóchal"
        ],
        "tropicalSchoolTriggerfish": [
            "Picasso hal"
        ],
        "tropicalSchoolYellowTang": [
            "Sárga doktorhal"
        ],
        "tropicalSchoolYellowtailParrot": [
            "Sárgafarkú papagájhal"
        ],
        "cake": [
            "Torta"
        ],
        "camera": [
            "Kamera"
        ],
        "golden_carrot": [
            "Aranyrépa"
        ],
        "carrotOnAStick": [
            "Répa horgászboton"
        ],
        "warped_fungus_on_a_stick": [
            "Deformált gomba nyárson"
        ],
        "carrot": [
            "Répa"
        ],
        "cauldron": [
            "Üst"
        ],
        "coal": [
            "Szén",
            null,
            "Faszén"
        ],
        "chainmail_chestplate": [
            "Láncing"
        ],
        "leather_chestplate": [
            "Bőrzubbony"
        ],
        "diamond_chestplate": [
            "Gyémánt mellvért"
        ],
        "golden_chestplate": [
            "Arany mellvért"
        ],
        "iron_chestplate": [
            "Vas mellvért"
        ],
        "chorus_fruit": [
            "Chorus gyümölcs"
        ],
        "chorus_fruit_popped": [
            "Kipukkadt chorus gyümölcs"
        ],
        "cooked_beef": [
            "Sült marhahús"
        ],
        "cooked_chicken": [
            "Sült csirke"
        ],
        "cooked_porkchop": [
            "Sült disznóhús"
        ],
        "chicken": [
            "Nyers csirkehús"
        ],
        "clay_ball": [
            "Agyag"
        ],
        "clock": [
            "Óra"
        ],
        "comparator": [
            "Vöröskő-összehasonlító"
        ],
        "compass": [
            "Iránytű"
        ],
        "lodestonecompass": [
            "Mágneses iránytű"
        ],
        "cookie": [
            "Csokis keksz"
        ],
        "crossbow": [
            "Nyílpuska"
        ],
        "diamond": [
            "Gyémánt"
        ],
        "repeater": [
            "Vöröskő-jelismétlő"
        ],
        "acacia_door": [
            "Akáciafa ajtó"
        ],
        "birch_door": [
            "Nyírfa ajtó"
        ],
        "dark_oak_door": [
            "Sötét tölgyfa ajtó"
        ],
        "iron_door": [
            "Vasajtó"
        ],
        "jungle_door": [
            "Trópusi fa ajtó"
        ],
        "wooden_door": [
            "Tölgyfa ajtó"
        ],
        "spruce_door": [
            "Fenyőfa ajtó"
        ],
        "crimson_door": [
            "Karmazsin ajtó"
        ],
        "warped_door": [
            "Deformált ajtó"
        ],
        "dragon_breath": [
            "Sárkánylehelet"
        ],
        "dye": [
            "Tintazsák",
            "Tintazsák",
            "Vörös festék",
            "Zöld festék",
            "Kakaóbab",
            "Lazurit",
            "Lila festék",
            "Türkiz festék",
            "Világosszürke festék",
            "Szürke festék",
            "Rózsaszín festék",
            "Limezöld festék",
            "Sárga festék",
            "Világoskék festék",
            "Bíborvörös festék",
            "Narancssárga festék",
            "Csontliszt",
            "Fekete festék",
            "Barna festék",
            "Kék festék",
            "Fehér festék"
        ],
        "egg": [
            "Tojás"
        ],
        "elytra": [
            "Elytra"
        ],
        "emerald": [
            "Smaragd"
        ],
        "emptyMap": [
            "Üres térkép"
        ],
        "emptyLocatorMap": [
            "Üres helymeghatározó térkép"
        ],
        "emptyPotion": [
            "Vizesüveg"
        ],
        "enchanted_book": [
            "Varázskönyv"
        ],
        "end_crystal": [
            "Vég-kristály"
        ],
        "end_rod": [
            "Vég-oszlop"
        ],
        "ender_eye": [
            "Végzet szeme"
        ],
        "ender_pearl": [
            "Bevégzőgyöngy"
        ],
        "experience_bottle": [
            "Tapasztalatpalack"
        ],
        "feather": [
            "Toll"
        ],
        "fermented_spider_eye": [
            "Erjesztett pókszem"
        ],
        "fireball": [
            "Tűztöltet"
        ],
        "fireworks": [
            "Tűzijáték-rakéta"
        ],
        "fireworksCharge": [
            "Tűzijátékcsillag"
        ],
        "clownfish": [
            "Trópusi hal"
        ],
        "cooked_fish": [
            "Főtt tőkehal"
        ],
        "fish": [
            "Nyers tőkehal"
        ],
        "pufferfish": [
            "Gömbhal"
        ],
        "cooked_salmon": [
            "Sült lazac"
        ],
        "salmon": [
            "Nyers lazac"
        ],
        "fishing_rod": [
            "Horgászbot"
        ],
        "flint": [
            "Kovakő"
        ],
        "flint_and_steel": [
            "Kovakő és acél"
        ],
        "flower_pot": [
            "Virágcserép"
        ],
        "frame": [
            "Elem kerete"
        ],
        "ghast_tear": [
            "Szellemkönny"
        ],
        "glass_bottle": [
            "Üvegpalack"
        ],
        "gold_nugget": [
            "Aranyrög"
        ],
        "iron_nugget": [
            "Vasrög"
        ],
        "diamond_axe": [
            "Gyémántbalta"
        ],
        "golden_axe": [
            "Aranybalta"
        ],
        "iron_axe": [
            "Vasbalta"
        ],
        "stone_axe": [
            "Kőbalta"
        ],
        "wooden_axe": [
            "Fabalta"
        ],
        "chainmail_helmet": [
            "Láncsisak"
        ],
        "leather_helmet": [
            "Bőrsisak"
        ],
        "diamond_helmet": [
            "Gyémántsisak"
        ],
        "golden_helmet": [
            "Aranysisak"
        ],
        "iron_helmet": [
            "Vassisak"
        ],
        "diamond_hoe": [
            "Gyémántkapa"
        ],
        "golden_hoe": [
            "Aranykapa"
        ],
        "iron_hoe": [
            "Vaskapa"
        ],
        "stone_hoe": [
            "Kőkapa"
        ],
        "wooden_hoe": [
            "Fakapa"
        ],
        "honey_bottle": [
            "Mézesüveg"
        ],
        "honeycomb": [
            "Méhsejt"
        ],
        "horsearmordiamond": [
            "Gyémánt lópáncél"
        ],
        "horsearmorgold": [
            "Arany lópáncél"
        ],
        "horsearmoriron": [
            "Vas lópáncél"
        ],
        "horsearmorleather": [
            "Bőr lópáncél"
        ],
        "gold_ingot": [
            "Aranyrúd"
        ],
        "iron_ingot": [
            "Vasrúd"
        ],
        "netherite_ingot": [
            "Alvilágérc rúd"
        ],
        "netherite_scrap": [
            "Alvilágérc hulladék"
        ],
        "netherite_sword": [
            "Alvilágérc kard"
        ],
        "netherite_pickaxe": [
            "Alvilágérc csákány"
        ],
        "netherite_axe": [
            "Alvilágérc fejsze"
        ],
        "netherite_shovel": [
            "Alvilágérc ásó"
        ],
        "netherite_hoe": [
            "Alvilágérc kapa"
        ],
        "netherite_boots": [
            "Alvilágérc csizma"
        ],
        "netherite_leggings": [
            "Alvilágérc lábszárvédő"
        ],
        "netherite_chestplate": [
            "Alvilágérc mellvért"
        ],
        "netherite_helmet": [
            "Alvilágérc sisak"
        ],
        "lead": [
            "Póráz"
        ],
        "leather": [
            "Bőr"
        ],
        "leaves": [
            "Levelek",
            "Tölgylevelek",
            "Fenyőtűk",
            "Nyírfalevelek",
            "Trópusifa-levelek",
            "Akácialevelek",
            "Sötéttölgy-levelek"
        ],
        "chainmail_leggings": [
            "Lánc lábszárvédő"
        ],
        "leather_leggings": [
            "Bőrnadrág"
        ],
        "diamond_leggings": [
            "Gyémánt lábszárvédő"
        ],
        "golden_leggings": [
            "Arany lábszárvédő"
        ],
        "iron_leggings": [
            "Vas lábszárvédő"
        ],
        "nautilus_shell": [
            "Nautilusz csigaház"
        ],
        "heart_of_the_sea": [
            "A tenger szíve"
        ],
        "magma_cream": [
            "Magmakrém"
        ],
        "map": [
            "Térkép"
        ],
        "melon": [
            "Dinnye"
        ],
        "milk": [
            "Tej"
        ],
        "minecart": [
            "Csille"
        ],
        "chest_minecart": [
            "Tárolócsille"
        ],
        "command_block_minecart": [
            "Parancsblokk-csille"
        ],
        "minecartFurnace": [
            "Csille kemencével"
        ],
        "hopper_minecart": [
            "Tölcséres csille"
        ],
        "tnt_minecart": [
            "Csille dinamittal"
        ],
        "trident": [
            "Szigony"
        ],
        "mushroom_stew": [
            "Gombaragu"
        ],
        "muttoncooked": [
            "Sült birkahús"
        ],
        "muttonraw": [
            "Nyers birkahús"
        ],
        "name_tag": [
            "Cédula"
        ],
        "netherbrick": [
            "Alvilági tégla"
        ],
        "quartz": [
            "Alvilági kvarc"
        ],
        "nether_wart": [
            "Alvilági bibircsók"
        ],
        "netherStar": [
            "Alvilági csillag"
        ],
        "painting": [
            "Festmény"
        ],
        "paper": [
            "Papír"
        ],
        "diamond_pickaxe": [
            "Gyémántcsákány"
        ],
        "golden_pickaxe": [
            "Aranycsákány"
        ],
        "iron_pickaxe": [
            "Vascsákány"
        ],
        "stone_pickaxe": [
            "Kőcsákány"
        ],
        "wooden_pickaxe": [
            "Facsákány"
        ],
        "porkchop_cooked": [
            "Sült disznóhús"
        ],
        "porkchop": [
            "Nyers disznóhús"
        ],
        "portfolio": [
            "Portfólió"
        ],
        "potato": [
            "Burgonya"
        ],
        "baked_potato": [
            "Sült burgonya"
        ],
        "poisonous_potato": [
            "Mérgező burgonya"
        ],
        "potion": [
            "Bájital"
        ],
        "prismarine_crystals": [
            "Prizmarinkristályok"
        ],
        "prismarine_shard": [
            "Prizmarinszilánk"
        ],
        "pumpkin_pie": [
            "Tökpite"
        ],
        "cooked_rabbit": [
            "Sült nyúlhús"
        ],
        "rabbit_foot": [
            "Nyúlláb"
        ],
        "rabbit_hide": [
            "Nyúlbőr"
        ],
        "rabbit": [
            "Nyers nyúlhús"
        ],
        "rabbit_stew": [
            "Nyúlragu"
        ],
        "record": [
            "Hanglemez"
        ],
        "redstone": [
            "Vöröskő"
        ],
        "reeds": [
            "Cukornád"
        ],
        "kelp": [
            "Hínár"
        ],
        "dried_kelp": [
            "Kiszáradt hínár"
        ],
        "rotten_flesh": [
            "Rohadt hús"
        ],
        "ruby": [
            "Rubin"
        ],
        "saddle": [
            "Nyereg"
        ],
        "wheat_seeds": [
            "Vetőmag"
        ],
        "beetroot_seeds": [
            "Céklamag"
        ],
        "melon_seeds": [
            "Dinnyemag"
        ],
        "pumpkin_seeds": [
            "Tökmag"
        ],
        "shears": [
            "Metszőolló"
        ],
        "diamond_shovel": [
            "Gyémántásó"
        ],
        "golden_shovel": [
            "Aranyásó"
        ],
        "iron_shovel": [
            "Vasásó"
        ],
        "stone_shovel": [
            "Kőásó"
        ],
        "wooden_shovel": [
            "Faásó"
        ],
        "sign": [
            "Tölgytábla"
        ],
        "spruce_sign": [
            "Fenyőtábla"
        ],
        "birch_sign": [
            "Nyírtábla"
        ],
        "jungle_sign": [
            "Dzsungel tábla"
        ],
        "acacia_sign": [
            "Akáctábla"
        ],
        "darkoak_sign": [
            "Sötét tölgy tábla"
        ],
        "crimson_sign": [
            "Karmazsin tábla"
        ],
        "warped_sign": [
            "Deformált tábla"
        ],
        "skull": [
            "Csontvázkoponya",
            "Csontvázkoponya",
            "Sorvasztócsontváz-koponya",
            "Zombifej",
            "Fej",
            "Creeper-fej",
            "Sárkányfej"
        ],
        "slime_ball": [
            "Nyálkagömb"
        ],
        "snowball": [
            "Hógolyó"
        ],
        "speckled_melon": [
            "Ragyogó dinnye"
        ],
        "spider_eye": [
            "Pókszem"
        ],
        "stick": [
            "Bot"
        ],
        "string": [
            "Fonál"
        ],
        "sugar": [
            "Cukor"
        ],
        "gunpowder": [
            "Puskapor"
        ],
        "diamond_sword": [
            "Gyémántkard"
        ],
        "golden_sword": [
            "Aranykard"
        ],
        "iron_sword": [
            "Vaskard"
        ],
        "stone_sword": [
            "Kőkard"
        ],
        "wooden_sword": [
            "Fakard"
        ],
        "wheat": [
            "Búza"
        ],
        "writable_book": [
            "Könyv és toll"
        ],
        "written_book": [
            "Megírt könyv"
        ],
        "glowstone_dust": [
            "Izzókőpor"
        ],
        "shield": [
            "Pajzs"
        ],
        "shulker_shell": [
            "Shulker-váz"
        ],
        "totem": [
            "Halhatatlanság toteme"
        ],
        "turtle_helmet": [
            "Teknőspáncél"
        ],
        "turtle_shell_piece": [
            "Szarulemez"
        ],
        "phantom_membrane": [
            "Fantomhártya"
        ],
        "sweet_berries": [
            "Édes bogyók"
        ],
        "suspicious_stew": [
            "Gyanús pörkölt"
        ],
        "banner_pattern": [
            "Lobogóminta"
        ],
        "acaciaFence": [
            "Akáciafa kerítés"
        ],
        "acacia_fence_gate": [
            "Akáciafa kerítéskapu"
        ],
        "activator_rail": [
            "Aktiváló sín"
        ],
        "allow": [
            "Engedélyezés"
        ],
        "deny": [
            "Tiltás"
        ],
        "border_block": [
            "Határ"
        ],
        "anvil": [
            "Üllő",
            "Üllő",
            null,
            null,
            null,
            "Kicsit sérült üllő",
            null,
            null,
            null,
            "Nagyon sérült üllő"
        ],
        "barrier": [
            "Akadály"
        ],
        "beacon": [
            "Jelzőfény"
        ],
        "beehive": [
            "Kaptár"
        ],
        "bee_nest": [
            "Méhkas"
        ],
        "target": [
            "Célpont"
        ],
        "bedrock": [
            "Alapkő"
        ],
        "conduit": [
            "Vízenergiablokk"
        ],
        "invisibleBedrock": [
            "Láthatatlan alapkőzet"
        ],
        "birchFence": [
            "Nyírfa kerítés"
        ],
        "birch_fence_gate": [
            "Nyírfa kerítéskapu"
        ],
        "blast_furnace": [
            "Olvasztókemence"
        ],
        "bone_block": [
            "Csontblokk"
        ],
        "coal_block": [
            "Szénblokk"
        ],
        "diamond_block": [
            "Gyémántblokk"
        ],
        "emerald_block": [
            "Smaragdblokk"
        ],
        "gold_block": [
            "Aranyblokk"
        ],
        "iron_block": [
            "Vasblokk"
        ],
        "lapis_block": [
            "Lazuritblokk"
        ],
        "redstone_block": [
            "Vöröskő blokk"
        ],
        "bookshelf": [
            "Könyvespolc"
        ],
        "brick_block": [
            "Téglablokk"
        ],
        "brown_mushroom": [
            "Barna gomba"
        ],
        "wooden_button": [
            "Tölgy gomb"
        ],
        "acacia_button": [
            "Akácfa gomb"
        ],
        "birch_button": [
            "Nyírfa gomb"
        ],
        "dark_oak_button": [
            "Sötét tölgy gomb"
        ],
        "jungle_button": [
            "Dzsungelfa gomb"
        ],
        "spruce_button": [
            "Lucfenyő gomb"
        ],
        "stone_button": [
            "Kőgomb"
        ],
        "cactus": [
            "Kaktusz"
        ],
        "dried_kelp_block": [
            "Kiszáradt hínárblokk"
        ],
        "carved_pumpkin": [
            "Faragott tök"
        ],
        "chest": [
            "Láda"
        ],
        "ender_chest": [
            "Végzetláda"
        ],
        "jigsaw": [
            "Kirakósblokk"
        ],
        "honey_block": [
            "Mézblokk"
        ],
        "honeycomb_block": [
            "Méhsejtblokk"
        ],
        "lodestone": [
            "Mágnes"
        ],
        "nether_sprouts": [
            "Alvilági rügyek"
        ],
        "crimson_stem": [
            "Karmazsin szár"
        ],
        "warped_stem": [
            "Deformált szár"
        ],
        "stripped_crimson_stem": [
            "Csíkos karmazsin szár"
        ],
        "stripped_warped_stem": [
            "Csíkos deformált szár"
        ],
        "crimson_hyphae": [
            "Karmazsin gombafonal"
        ],
        "warped_hyphae": [
            "Deformált gombafonal"
        ],
        "stripped_crimson_hyphae": [
            "Csíkos karmazsin gombafonal"
        ],
        "stripped_warped_hyphae": [
            "Csíkos deformált gombafonal"
        ],
        "crimson_planks": [
            "Karmazsin deszkák"
        ],
        "warped_planks": [
            "Deformált deszkák"
        ],
        "crimson_trapdoor": [
            "Karmazsin csapóajtó"
        ],
        "warped_trapdoor": [
            "Deformált csapóajtó"
        ],
        "crimson_standing_sign": [
            "Karmazsin tábla"
        ],
        "warped_standing_sign": [
            "Deformált tábla"
        ],
        "crimson_wall_sign": [
            "Karmazsin tábla"
        ],
        "warped_wall_sign": [
            "Deformált tábla"
        ],
        "crimson_stairs": [
            "Karmazsin lépcső"
        ],
        "warped_stairs": [
            "Deformált lépcső"
        ],
        "crimson_fence": [
            "Karmazsin kerítés"
        ],
        "warped_fence": [
            "Deformált kerítés"
        ],
        "crimson_fence_gate": [
            "Karmazsin kerítéskapu"
        ],
        "warped_fence_gate": [
            "Deformált kerítéskapu"
        ],
        "crimson_button": [
            "Karmazsin gomb"
        ],
        "warped_button": [
            "Deformált gomb"
        ],
        "crimson_pressure_plate": [
            "Karmazsin nyomólap"
        ],
        "warped_pressure_plate": [
            "Deformált nyomólap"
        ],
        "crimson_slab": [
            "Karmazsin lépcsőfok"
        ],
        "warped_slab": [
            "Deformált lépcsőfok"
        ],
        "crimson_double_slab": [
            "Karmazsin lépcsőfok"
        ],
        "warped_double_slab": [
            "Deformált lépcsőfok"
        ],
        "shroomlight": [
            "Világító gomba"
        ],
        "crimson_nylium": [
            "Karmazsin nylium"
        ],
        "warped_nylium": [
            "Deformált nylium"
        ],
        "basalt": [
            "Bazalt"
        ],
        "polished_basalt": [
            "Csiszolt bazalt"
        ],
        "blackstone": [
            "Feketekő"
        ],
        "polished_blackstone_bricks": [
            "Csiszolt feketekő téglák"
        ],
        "cracked_polished_blackstone_bricks": [
            "Töredezett csiszolt feketekő téglák"
        ],
        "polished_blackstone_brick_stairs": [
            "Csiszolt feketekő téglalépcső"
        ],
        "blackstone_stairs": [
            "Feketekő lépcső"
        ],
        "blackstone_wall": [
            "Feketekő fal"
        ],
        "polished_blackstone_brick_wall": [
            "Csiszolt feketekő téglafal"
        ],
        "chiseled_polished_blackstone": [
            "Vésett csiszolt feketekő"
        ],
        "gilded_blackstone": [
            "Aranyozott feketekő"
        ],
        "blackstone_slab": [
            "Feketekő lépcsőfok"
        ],
        "polished_blackstone_brick_slab": [
            "Csiszolt feketekő téglalépcsőfok"
        ],
        "chain": [
            "Lánc"
        ],
        "soul_soil": [
            "Lélektalaj"
        ],
        "soul_fire": [
            "Lélekfáklya"
        ],
        "polished_blackstone": [
            "Csiszolt feketekő"
        ],
        "polished_blackstone_stairs": [
            "Csiszolt feketekő lépcső"
        ],
        "polished_blackstone_slab": [
            "Csiszolt feketekő lépcsőfok"
        ],
        "polished_blackstone_pressure_plate": [
            "Csiszolt feketekő nyomólap"
        ],
        "polished_blackstone_button": [
            "Csiszolt feketekő gomb"
        ],
        "polished_blackstone_wall": [
            "Csiszolt feketekő fal"
        ],
        "soul_campfire": [
            "Lélektábortűz"
        ],
        "chiseled_nether_bricks": [
            "Vésett alvilági tégla"
        ],
        "cracked_nether_bricks": [
            "Töredezett alvilági tégla"
        ],
        "quartz_bricks": [
            "Kvarctéglák"
        ],
        "trapped_chest": [
            "Csapdaláda"
        ],
        "shulkerBoxWhite": [
            "Fehér Shulker-doboz"
        ],
        "shulkerBoxOrange": [
            "Narancssárga Shulker-doboz"
        ],
        "shulkerBoxMagenta": [
            "Bíborvörös Shulker-doboz"
        ],
        "shulkerBoxLightBlue": [
            "Világoskék Shulker-doboz"
        ],
        "shulkerBoxYellow": [
            "Sárga Shulker-doboz"
        ],
        "shulkerBoxLime": [
            "Limezöld Shulker-doboz"
        ],
        "shulkerBoxPink": [
            "Rózsaszín Shulker-doboz"
        ],
        "shulkerBoxGray": [
            "Szürke Shulker-doboz"
        ],
        "shulkerBoxSilver": [
            "Világosszürke Shulker-doboz"
        ],
        "shulkerBoxCyan": [
            "Türkiz Shulker-doboz"
        ],
        "shulkerBoxPurple": [
            "Lila Shulker-doboz"
        ],
        "shulkerBoxBlue": [
            "Kék Shulker-doboz"
        ],
        "shulkerBoxBrown": [
            "Barna Shulker-doboz"
        ],
        "shulkerBoxGreen": [
            "Zöld Shulker-doboz"
        ],
        "shulkerBoxRed": [
            "Piros Shulker-doboz"
        ],
        "shulkerBoxBlack": [
            "Fekete Shulker-doboz"
        ],
        "shulkerBox": [
            "Shulker-doboz"
        ],
        "chorus_flower": [
            "Chorusvirág"
        ],
        "chorus_plant": [
            "Chorus növény"
        ],
        "stained_glass": [
            "Fehér ólomüveg",
            "Fehér ólomüveg",
            "Narancssárga ólomüveg",
            "Bíborvörös ólomüveg",
            "Világoskék ólomüveg",
            "Sárga ólomüveg",
            "Limezöld ólomüveg",
            "Rózsaszín ólomüveg",
            "Szürke ólomüveg",
            "Világosszürke ólomüveg",
            "Türkiz ólomüveg",
            "Lila ólomüveg",
            "Kék ólomüveg",
            "Barna ólomüveg",
            "Zöld ólomüveg",
            "Piros ólomüveg",
            "Fekete ólomüveg"
        ],
        "stained_glass_pane": [
            "Fehér ólomüveg tábla",
            "Fehér ólomüveg tábla",
            "Narancssárga ólomüveg tábla",
            "Bíborvörös ólomüveg tábla",
            "Világoskék ólomüveg tábla",
            "Sárga ólomüveg tábla",
            "Limezöld ólomüveg tábla",
            "Rózsaszín ólomüveg tábla",
            "Szürke ólomüveg tábla",
            "Világosszürke ólomüveg tábla",
            "Türkiz ólomüveg tábla",
            "Lila ólomüveg tábla",
            "Kék ólomüveg tábla",
            "Barna ólomüveg tábla",
            "Zöld ólomüveg tábla",
            "Piros ólomüveg tábla",
            "Fekete ólomüveg tábla"
        ],
        "clay": [
            "Agyagblokk"
        ],
        "hardened_clay": [
            "Terrakotta"
        ],
        "stained_hardened_clay": [
            "Terrakotta",
            "Fehér terrakotta",
            "Narancssárga terrakotta",
            "Bíborvörös terrakotta",
            "Világoskék terrakotta",
            "Sárga terrakotta",
            "Limezöld terrakotta",
            "Rózsaszín terrakotta",
            "Szürke terrakotta",
            "Világosszürke terrakotta",
            "Türkiz terrakotta",
            "Lila terrakotta",
            "Kék terrakotta",
            "Barna terrakotta",
            "Zöld terrakotta",
            "Piros terrakotta",
            "Fekete terrakotta"
        ],
        "structure_block": [
            "Szerkezeti blokk"
        ],
        "structure_void": [
            "Szerkezeti üres hely"
        ],
        "wool": [
            "Gyapjú",
            "Fehér gyapjú",
            "Narancssárga gyapjú",
            "Bíborvörös gyapjú",
            "Világoskék gyapjú",
            "Sárga gyapjú",
            "Limezöld gyapjú",
            "Rózsaszín gyapjú",
            "Szürke gyapjú",
            "Világosszürke gyapjú",
            "Türkiz gyapjú",
            "Lila gyapjú",
            "Kék gyapjú",
            "Barna gyapjú",
            "Zöld gyapjú",
            "Vörös gyapjú",
            "Fekete gyapjú"
        ],
        "cobblestone_wall": [
            "Zúzottkőfal",
            "Zúzottkőfal",
            "Mohos zúzottkőfal",
            "Gránitfal",
            "Dioritfal",
            "Andezitfal",
            "Homokkőfal",
            "Téglafal",
            "Kőtéglafal",
            "Mohos kőtéglafal",
            "Végkőtégla fal",
            "Alvilági tégla fal",
            "Prizmarinfal",
            "Vörös homokkő fal",
            "Vörös alvilági tégla fal"
        ],
        "cocoa": [
            "Kakaó"
        ],
        "command_block": [
            "Parancsblokk"
        ],
        "composter": [
            "Komposztáló"
        ],
        "light_block": [
            "Fényblokk"
        ],
        "repeating_command_block": [
            "Ismétlés típusú parancsblokk"
        ],
        "chain_command_block": [
            "Lánc típusú parancsblokk"
        ],
        "darkOakFence": [
            "Sötét tölgyfa kerítés"
        ],
        "dark_oak_fence_gate": [
            "Sötét tölgyfa kerítéskapu"
        ],
        "daylight_detector": [
            "Napfényérzékelő"
        ],
        "deadbush": [
            "Száraz kóró"
        ],
        "detector_rail": [
            "Érzékelő sín"
        ],
        "dirt": [
            "Föld",
            "Föld",
            "Terméketlen föld"
        ],
        "podzol": [
            "Podzol"
        ],
        "purpur_block": [
            "Lila blokk",
            "Lila blokk",
            "Cizellált bíbor",
            "Lila oszlop"
        ],
        "dispenser": [
            "Adagoló"
        ],
        "doorWood": [
            "Faajtó"
        ],
        "double_plant": [
            "Növény",
            "Napraforgó",
            "Orgona",
            "Dupla magasfű",
            "Nagy páfrány",
            "Rózsabokor",
            "Bazsarózsa"
        ],
        "dragon_egg": [
            "Sárkánytojás"
        ],
        "dropper": [
            "Kidobó"
        ],
        "enchanting_table": [
            "Bűvölőasztal"
        ],
        "enderChest": [
            "Végzetláda"
        ],
        "end_portal_frame": [
            "Végportál"
        ],
        "farmland": [
            "Termőföld"
        ],
        "fletching_table": [
            "Íjkészítő asztal"
        ],
        "fence": [
            "Tölgyfa kerítés"
        ],
        "fence_gate": [
            "Tölgyfa kerítéskapu"
        ],
        "iron_bars": [
            "Vasrács"
        ],
        "fire": [
            "Tűz"
        ],
        "yellow_flower": [
            "Virág",
            "Pitypang"
        ],
        "red_flower": [
            "Virág",
            "Pipacs",
            "Kék orchidea",
            "Hagymavirág",
            "Türkizkék virág",
            "Piros tulipán",
            "Narancssárga tulipán",
            "Fehér tulipán",
            "Rózsaszín tulipán",
            "Margaréta",
            "Búzavirág",
            "Gyöngyvirág"
        ],
        "wither_rose": [
            "Sorvasztó rózsa"
        ],
        "furnace": [
            "Kemence"
        ],
        "glass": [
            "Üveg"
        ],
        "golden_rail": [
            "Elektromos sín"
        ],
        "grass": [
            "Fűblokk"
        ],
        "grass_path": [
            "Fűösvény"
        ],
        "gravel": [
            "Sóder"
        ],
        "hay_block": [
            "Szalmabála"
        ],
        "netherrack": [
            "Alvilágkő"
        ],
        "soul_sand": [
            "Lélekhomok"
        ],
        "hopper": [
            "Tölcsér"
        ],
        "ice": [
            "Jég"
        ],
        "packed_ice": [
            "Tömör jég"
        ],
        "blue_ice": [
            "Kék jég"
        ],
        "iron_trapdoor": [
            "Vas csapóajtó"
        ],
        "jukebox": [
            "Zenegép"
        ],
        "jungleFence": [
            "Trópusi fa kerítés"
        ],
        "jungle_fence_gate": [
            "Trópusi fa kerítéskapu"
        ],
        "ladder": [
            "Létra"
        ],
        "flowing_lava": [
            "Láva"
        ],
        "leaves2": [
            "Akácialevelek",
            "Akácialevelek",
            "Sötéttölgy-levelek"
        ],
        "lever": [
            "Kar"
        ],
        "glowstone": [
            "Izzókő"
        ],
        "lit_pumpkin": [
            "Töklámpás"
        ],
        "lockedchest": [
            "Bezárt láda"
        ],
        "log2": [
            "Akácrönk",
            "Akácrönk",
            "Sötéttölgy-rönk"
        ],
        "log": [
            "Rönk",
            "Tölgyrönk",
            "Fenyőrönk",
            "Nyírrönk",
            "Trópusifa-rönk"
        ],
        "magma": [
            "Magmablokk"
        ],
        "melon_block": [
            "Dinnye"
        ],
        "mob_spawner": [
            "Szörnyidéző"
        ],
        "monster_egg": [
            "Fertőzött kő",
            "Fertőzött kő",
            "Fertőzött zúzottkő",
            "Fertőzött kőtégla",
            "Fertőzött mohos kőtégla",
            "Fertőzött repedt kőtégla",
            "Fertőzött vésett kőtégla"
        ],
        "mushroom": [
            "Gomba"
        ],
        "noteblock": [
            "Hangblokk"
        ],
        "mycelium": [
            "Gombafonal"
        ],
        "nether_brick": [
            "Alvilági tégla blokk"
        ],
        "red_nether_brick": [
            "Vörös alvilági tégla"
        ],
        "nether_brick_fence": [
            "Alvilágitégla-kerítés"
        ],
        "quartz_ore": [
            "Alvilági kvarcérc"
        ],
        "netherreactor": [
            "Alvilági reaktormag"
        ],
        "nether_wart_block": [
            "Alvilágibibircsók-blokk"
        ],
        "warped_wart_block": [
            "Deformált bibircsókblokk"
        ],
        "unlit_redstone_torch": [
            "Vöröskő fáklya"
        ],
        "redstone_torch": [
            "Vöröskő fáklya"
        ],
        "soul_torch": [
            "Lélekfáklya"
        ],
        "obsidian": [
            "Obszidián"
        ],
        "coal_ore": [
            "Széntelér"
        ],
        "diamond_ore": [
            "Ásványi gyémánt"
        ],
        "emerald_ore": [
            "Ásványi smaragd"
        ],
        "gold_ore": [
            "Aranyérc"
        ],
        "iron_ore": [
            "Vasérc"
        ],
        "lapis_ore": [
            "Lazuritérc"
        ],
        "redstone_ore": [
            "Vöröskőérc"
        ],
        "oreRuby": [
            "Ásványi rubin"
        ],
        "observer": [
            "Megfigyelő"
        ],
        "piston": [
            "Dugattyú"
        ],
        "sticky_piston": [
            "Ragacsos dugattyú"
        ],
        "portal": [
            "Portál"
        ],
        "potatoes": [
            "Burgonya"
        ],
        "stone_pressure_plate": [
            "Kő nyomólap"
        ],
        "wooden_pressure_plate": [
            "Tölgy nyomólap"
        ],
        "acacia_pressure_plate": [
            "Akácfa nyomólap"
        ],
        "birch_pressure_plate": [
            "Nyírfa nyomólap"
        ],
        "dark_oak_pressure_plate": [
            "Sötét tölgy nyomólap"
        ],
        "jungle_pressure_plate": [
            "Dzsungelfa nyomólap"
        ],
        "spruce_pressure_plate": [
            "Lucfenyő nyomólap"
        ],
        "prismarine": [
            "Prizmarin",
            "Prizmarin",
            "Prizmarintéglák",
            "Sötét prizmarin"
        ],
        "pumpkin": [
            "Tök"
        ],
        "pumpkin_stem": [
            "Tökszár"
        ],
        "quartz_block": [
            "Kvarcblokk",
            "Kvarcblokk",
            "Vésett kvarcblokk",
            "Kvarcoszlop",
            "Sima kvarcblokk"
        ],
        "rail": [
            "Sín"
        ],
        "red_mushroom": [
            "Piros gomba"
        ],
        "crimson_fungus": [
            "Karmazsin gomba"
        ],
        "warped_fungus": [
            "Deformált gomba"
        ],
        "red_mushroom_block": [
            "Pirosgomba-blokk"
        ],
        "red_sandstone": [
            "Vörös homokkő",
            "Vörös homokkő",
            "Vésett vörös homokkő",
            "Vágott vörös homokkő",
            "Sima vörös homokkő"
        ],
        "redstone_wire": [
            "Vöröskőpor"
        ],
        "redstone_lamp": [
            "Vöröskő lámpa"
        ],
        "sand": [
            "Homok",
            "Homok",
            "Vörös homok"
        ],
        "sandstone": [
            "Homokkő",
            "Homokkő",
            "Vésett homokkő",
            "Vágott homokkő",
            "Sima homokkő"
        ],
        "sapling": [
            "Tölgycsemete",
            "Tölgycsemete",
            "Fenyőcsemete",
            "Nyírfacsemete",
            "Trópusifa-csemete",
            "Akáciacsemete",
            "Sötéttölgy-csemete"
        ],
        "seaLantern": [
            "Tengeri lámpás"
        ],
        "standing_sign": [
            "Tábla"
        ],
        "spruce_standing_sign": [
            "Fenyőtábla"
        ],
        "birch_standing_sign": [
            "Nyírtábla"
        ],
        "jungle_standing_sign": [
            "Dzsungel tábla"
        ],
        "acacia_standing_sign": [
            "Akáctábla"
        ],
        "darkoak_standing_sign": [
            "Sötét tölgy tábla"
        ],
        "slime": [
            "Nyálkablokk"
        ],
        "snow": [
            "Hó"
        ],
        "sponge": [
            "Szivacs",
            "Szivacs",
            "Vizes szivacs"
        ],
        "spruceFence": [
            "Fenyőfa kerítés"
        ],
        "spruce_fence_gate": [
            "Fenyőfa kerítéskapu"
        ],
        "brick_stairs": [
            "Téglalépcső"
        ],
        "nether_brick_stairs": [
            "Alvilágitégla-lépcső"
        ],
        "quartz_stairs": [
            "Kvarclépcső"
        ],
        "smooth_quartz_stairs": [
            "Sima kvarclépcső"
        ],
        "red_sandstone_stairs": [
            "Vörös homokkő lépcső"
        ],
        "sandstone_stairs": [
            "Homokkő"
        ],
        "stone_stairs": [
            "Zúzottkőlépcső"
        ],
        "normal_stone_stairs": [
            "Kőlépcső"
        ],
        "stone_brick_stairs": [
            "Kőtégla lépcső"
        ],
        "oak_stairs": [
            "Tölgyfa lépcső"
        ],
        "acacia_stairs": [
            "Akáciafa lépcső"
        ],
        "birch_stairs": [
            "Nyírfa lépcső"
        ],
        "dark_oak_stairs": [
            "Sötét tölgyfa lépcső"
        ],
        "jungle_stairs": [
            "Trópusi fa lépcső"
        ],
        "spruce_stairs": [
            "Fenyőfa lépcső"
        ],
        "purpur_stairs": [
            "Lila lépcső"
        ],
        "prismarine_stairs": [
            "Prizmarin lépcső"
        ],
        "dark_prismarine_stairs": [
            "Sötét prizmarin lépcső"
        ],
        "prismarine_bricks_stairs": [
            "Prizmarin tégla lépcső"
        ],
        "granite_stairs": [
            "Gránitlépcső"
        ],
        "diorite_stairs": [
            "Dioritlépcső"
        ],
        "andesite_stairs": [
            "Andezitlépcső"
        ],
        "polished_granite_stairs": [
            "Csiszolt gránitlépcső"
        ],
        "polished_diorite_stairs": [
            "Csiszolt dioritlépcső"
        ],
        "polished_andesite_stairs": [
            "Csiszolt andezitlépcső"
        ],
        "mossy_stone_brick_stairs": [
            "Mohos kőtégla lépcső"
        ],
        "smooth_red_sandstone_stairs": [
            "Sima vöröshomokkő lépcső"
        ],
        "smooth_sandstone_stairs": [
            "Sima homokkő lépcső"
        ],
        "end_brick_stairs": [
            "Végkőtégla lépcső"
        ],
        "mossy_cobblestone_stairs": [
            "Mohos zúzottkőlépcső"
        ],
        "red_nether_brick_stairs": [
            "Vörös alvilágitégla lépcső"
        ],
        "smooth_stone": [
            "Sima kő"
        ],
        "standing_banner": [
            "Zászló",
            "Fekete zászló",
            "Vörös zászló",
            "Zöld zászló",
            "Barna zászló",
            "Kék zászló",
            "Lila zászló",
            "Türkizkék zászló",
            "Világosszürke zászló",
            "Szürke zászló",
            "Rózsaszín zászló",
            "Limezöld zászló",
            "Sárga zászló",
            "Világoskék zászló",
            "Bíborvörös zászló",
            "Narancssárga zászló",
            "Zászló"
        ],
        "stone": [
            "Kő",
            "Kő",
            "Gránit",
            "Csiszolt gránit",
            "Diorit",
            "Csiszolt diorit",
            "Andezit",
            "Csiszolt andezit"
        ],
        "cobblestone": [
            "Zúzottkő"
        ],
        "stonebrick": [
            "Kőtégla",
            "Kőtégla",
            "Mohos kőtégla",
            "Vésett kőtégla"
        ],
        "stonecutter": [
            "Kőfaragó"
        ],
        "stonecutter_block": [
            "Kőfaragó"
        ],
        "mossy_cobblestone": [
            "Mohos zúzottkő"
        ],
        "double_stone_slab": [
            "Kő lépcsőfok",
            "Kő lépcsőfok",
            "Homokkő lépcsőfok",
            "Fa lépcsőfok",
            "Burkolatkő lépcsőfok",
            "Tégla lépcsőfok",
            "Kőtégla lépcsőfok",
            "Kvarc lépcsőfok",
            "Alvilági tégla lépcsőfok"
        ],
        "stone_slab": [
            "Kő lépcsőfok",
            "Sima kő lépcsőfok",
            "Homokkő lépcsőfok",
            "Fa lépcsőfok",
            "Burkolatkő lépcsőfok",
            "Tégla lépcsőfok",
            "Kőtégla lépcsőfok",
            "Kvarc lépcsőfok",
            "Alvilági tégla lépcsőfok"
        ],
        "double_stone_slab2": [
            "Vörös homokkő lépcsőfok",
            "Vörös homokkő lépcsőfok"
        ],
        "stone_slab2": [
            "Vörös homokkő lépcsőfok",
            "Vörös homokkő lépcsőfok",
            "Lila lépcsőfok",
            "Prizmarin lemez",
            "Prizmarin tégla lemez",
            "Sötét prizmarin lemez",
            "Mohos zúzottkő lépcsőfok",
            "Sima homokkő lépcsőfok",
            "Vörös alvilági tégla lépcsőfok"
        ],
        "stone_slab3": [
            "Végkőtégla lépcsőfok",
            "Végkőtégla lépcsőfok",
            "Sima vörös homokkő lépcsőfok",
            "Csiszolt andezit lépcsőfok",
            "Andezit lépcsőfok",
            "Diorit lépcsőfok",
            "Csiszolt diorit lépcsőfok",
            "Gránit lépcsőfok",
            "Csiszolt gránit lépcsőfok"
        ],
        "stone_slab4": [
            "Mohos kőtégla lépcsőfok",
            "Mohos kőtégla lépcsőfok",
            "Sima kvarc lépcsőfok",
            "Kő lépcsőfok",
            "Vágott homokkő lépcsőfok",
            "Vágott vörös homokkő lépcsőfok"
        ],
        "coral_block": [
            "Csöves korallblokk",
            "Csöves korallblokk",
            "Tekervényes korallblokk",
            "Buborékos korallblokk",
            "Tüzes korallblokk",
            "Kürtös korallblokk",
            "Elpusztult csöves korallblokk",
            "Elpusztult tekervényes korallblokk",
            "Elpusztult buborékos korallblokk",
            "Elpusztult tüzes korallblokk",
            "Elpusztult kürtös korallblokk"
        ],
        "tallgrass": [
            "Fű",
            "Fű",
            "Páfrány"
        ],
        "seagrass": [
            "Tengerifű",
            "Tengerifű"
        ],
        "sea_pickle": [
            "Tengeri uborka"
        ],
        "turtle_egg": [
            "Tengeriteknős-tojás"
        ],
        "coral": [
            "Csöves korall",
            "Csöves korall",
            "Tekervényes korall",
            "Buborékos korall",
            "Tüzes korall",
            "Kürtös korall",
            "Elpusztult csöves korall",
            "Elpusztult tekervényes korall",
            "Elpusztult buborékos korall",
            "Elpusztult tüzes korall",
            "Elpusztult kürtös korall"
        ],
        "coral_fan": [
            "Csöves legyezőkorall",
            "Csöves legyezőkorall",
            "Tekervényes legyezőkorall",
            "Buborékos legyezőkorall",
            "Tüzes legyezőkorall",
            "Kürtös legyezőkorall"
        ],
        "coral_fan_dead": [
            "Elpusztult csöves legyezőkorall",
            "Elpusztult csöves legyezőkorall",
            "Elpusztult tekervényes legyezőkorall",
            "Elpusztult buborékos legyezőkorall",
            "Elpusztult tüzes legyezőkorall",
            "Elpusztult kürtös legyezőkorall"
        ],
        "glass_pane": [
            "Üvegtábla"
        ],
        "tnt": [
            "Dinamit"
        ],
        "snow_layer": [
            "Felső hó"
        ],
        "torch": [
            "Fáklya"
        ],
        "trapdoor": [
            "Tölgy csapóajtó"
        ],
        "acacia_trapdoor": [
            "Akácfa csapóajtó"
        ],
        "birch_trapdoor": [
            "Nyírfa csapóajtó"
        ],
        "dark_oak_trapdoor": [
            "Sötét tölgy csapóajtó"
        ],
        "jungle_trapdoor": [
            "Dzsungelfa csapóajtó"
        ],
        "spruce_trapdoor": [
            "Lucfenyő csapóajtó"
        ],
        "tripWire": [
            "Botlódrót"
        ],
        "tripwire_hook": [
            "Botlódróthorog"
        ],
        "vine": [
            "Inda"
        ],
        "weeping_vines": [
            "Könnyező kacsok"
        ],
        "twisting_vines": [
            "Tekeredő kacsok"
        ],
        "flowing_water": [
            "Víz"
        ],
        "water": [
            "Víz"
        ],
        "waterlily": [
            "Tavirózsa"
        ],
        "web": [
            "Pókháló"
        ],
        "heavy_weighted_pressure_plate": [
            "Mérleg nyomólap (nehéz)"
        ],
        "light_weighted_pressure_plate": [
            "Mérleg nyomólap (könnyű)"
        ],
        "end_stone": [
            "Végkő"
        ],
        "end_bricks": [
            "Végkő tégla"
        ],
        "planks": [
            "Deszka",
            "Tölgyfa deszka",
            "Fenyőfa deszka",
            "Nyírfa deszka",
            "Trópusi fa deszka",
            "Akáciafa deszka",
            "Sötét tölgyfa deszka"
        ],
        "wooden_slab": [
            "Fa lépcsőfok",
            "Tölgyfa lépcsőfok",
            "Fenyőfa lépcsőfok",
            "Nyírfa lépcsőfok",
            "Trópusi fa lépcsőfok",
            "Akáciafa lépcsőfok",
            "Sötét tölgyfa lépcsőfok"
        ],
        "carpet": [
            "Szőnyeg",
            "Fekete szőnyeg",
            "Vörös szőnyeg",
            "Zöld szőnyeg",
            "Barna szőnyeg",
            "Kék szőnyeg",
            "Lila szőnyeg",
            "Türkiz szőnyeg",
            "Világosszürke szőnyeg",
            "Szürke szőnyeg",
            "Rózsaszín szőnyeg",
            "Limezöld szőnyeg",
            "Sárga szőnyeg",
            "Világoskék szőnyeg",
            "Bíborvörös szőnyeg",
            "Narancssárga szőnyeg",
            "Fehér szőnyeg"
        ],
        "crafting_table": [
            "Barkácsasztal"
        ],
        "white_glazed_terracotta": [
            "Fehér zománcozott terrakotta",
            "Fehér zománcozott terrakotta"
        ],
        "orange_glazed_terracotta": [
            "Narancssárga zománcozott terrakotta",
            "Narancssárga zománcozott terrakotta"
        ],
        "magenta_glazed_terracotta": [
            "Bíborvörös zománcozott terrakotta",
            "Bíborvörös zománcozott terrakotta"
        ],
        "light_blue_glazed_terracotta": [
            "Világoskék zománcozott terrakotta",
            "Világoskék zománcozott terrakotta"
        ],
        "yellow_glazed_terracotta": [
            "Sárga zománcozott terrakotta",
            "Sárga zománcozott terrakotta"
        ],
        "lime_glazed_terracotta": [
            "Limezöld zománcozott terrakotta",
            "Limezöld zománcozott terrakotta"
        ],
        "pink_glazed_terracotta": [
            "Rózsaszín zománcozott terrakotta",
            "Rózsaszín zománcozott terrakotta"
        ],
        "gray_glazed_terracotta": [
            "Szürke zománcozott terrakotta",
            "Szürke zománcozott terrakotta"
        ],
        "silver_glazed_terracotta": [
            "Világosszürke zománcozott terrakotta",
            "Világosszürke zománcozott terrakotta"
        ],
        "cyan_glazed_terracotta": [
            "Türkiz zománcozott terrakotta",
            "Türkiz zománcozott terrakotta"
        ],
        "purple_glazed_terracotta": [
            "Lila zománcozott terrakotta",
            "Lila zománcozott terrakotta"
        ],
        "blue_glazed_terracotta": [
            "Kék zománcozott terrakotta",
            "Kék zománcozott terrakotta"
        ],
        "brown_glazed_terracotta": [
            "Barna zománcozott terrakotta",
            "Barna zománcozott terrakotta"
        ],
        "green_glazed_terracotta": [
            "Zöld zománcozott terrakotta",
            "Zöld zománcozott terrakotta"
        ],
        "red_glazed_terracotta": [
            "Piros zománcozott terrakotta",
            "Piros zománcozott terrakotta"
        ],
        "black_glazed_terracotta": [
            "Fekete zománcozott terrakotta",
            "Fekete zománcozott terrakotta"
        ],
        "concrete": [
            "Fehér beton",
            "Fehér beton",
            "Narancssárga beton",
            "Bíborvörös beton",
            "Világoskék beton",
            "Sárga beton",
            "Limezöld beton",
            "Rózsaszín beton",
            "Szürke beton",
            "Világosszürke beton",
            "Türkiz beton",
            "Lila beton",
            "Kék beton",
            "Barna beton",
            "Zöld beton",
            "Piros beton",
            "Fekete beton"
        ],
        "glazedTerracottaWhite": [
            "Fehér zománcozott terrakotta"
        ],
        "glazedTerracottaOrange": [
            "Narancssárga zománcozott terrakotta"
        ],
        "glazedTerracottaMagenta": [
            "Bíborvörös zománcozott terrakotta"
        ],
        "glazedTerracottaLightBlue": [
            "Világoskék zománcozott terrakotta"
        ],
        "glazedTerracottaYellow": [
            "Sárga zománcozott terrakotta"
        ],
        "glazedTerracottaLime": [
            "Limezöld zománcozott terrakotta"
        ],
        "glazedTerracottaPink": [
            "Rózsaszín zománcozott terrakotta"
        ],
        "glazedTerracottaGray": [
            "Szürke zománcozott terrakotta"
        ],
        "glazedTerracottaSilver": [
            "Világosszürke zománcozott terrakotta"
        ],
        "glazedTerracottaCyan": [
            "Türkiz zománcozott terrakotta"
        ],
        "glazedTerracottaPurple": [
            "Lila zománcozott terrakotta"
        ],
        "glazedTerracottaBlue": [
            "Kék zománcozott terrakotta"
        ],
        "glazedTerracottaBrown": [
            "Barna zománcozott terrakotta"
        ],
        "glazedTerracottaGreen": [
            "Zöld zománcozott terrakotta"
        ],
        "glazedTerracottaRed": [
            "Piros zománcozott terrakotta"
        ],
        "glazedTerracottaBlack": [
            "Fekete zománcozott terrakotta"
        ],
        "concretePowder": [
            "Fehér cementpor",
            "Fehér cementpor",
            "Narancssárga cementpor",
            "Bíborvörös cementpor",
            "Világoskék cementpor",
            "Sárga cementpor",
            "Limezöld cementpor",
            "Rózsaszín cementpor",
            "Szürke cementpor",
            "Világosszürke cementpor",
            "Türkiz cementpor",
            "Lila cementpor",
            "Kék cementpor",
            "Barna cementpor",
            "Zöld cementpor",
            "Piros cementpor",
            "Fekete cementpor"
        ],
        "stripped_spruce_log": [
            "Gyalult fenyőrönk"
        ],
        "stripped_dark_oak_log": [
            "Gyalult sötéttölgy-rönk"
        ],
        "stripped_birch_log": [
            "Gyalult nyírrönk"
        ],
        "stripped_jungle_log": [
            "Gyalult trópusifa-rönk"
        ],
        "stripped_oak_log": [
            "Gyalult tölgyrönk"
        ],
        "stripped_acacia_log": [
            "Gyalult akácrönk"
        ],
        "bamboo": [
            "Bambusz"
        ],
        "scaffolding": [
            "Állványzat"
        ],
        "grindstone": [
            "Köszörűkő"
        ],
        "cartography_table": [
            "Térképész asztal"
        ],
        "lantern": [
            "Lámpás"
        ],
        "soul_lantern": [
            "Léleklámpás"
        ],
        "smoker": [
            "Füstölő"
        ],
        "smithing_table": [
            "Kovács asztal"
        ],
        "barrel": [
            "Hordó"
        ],
        "campfire": [
            "Tábortűz"
        ],
        "loom": [
            "Szövőszék"
        ],
        "lectern": [
            "Olvasópolc"
        ],
        "sweet_berry_bush": [
            "Édesbogyóbokor"
        ],
        "wood": [
            "Tölgyfa",
            "Tölgyfa",
            "Fenyőfa",
            "Nyírfa",
            "Trópusi fa",
            "Akáciafa",
            "Sötét tölgyfa",
            null,
            null,
            "Gyalult tölgy",
            "Gyalult fenyőfa",
            "Gyalult nyírfa",
            "Gyalult trópusi fa",
            "Gyalult akáciafa",
            "Gyalult sötét tölgyfa"
        ],
        "netherite_block": [
            "Alvilágérc blokk"
        ],
        "ancient_debris": [
            "Ősi törmelék"
        ],
        "nether_gold_ore": [
            "Alvilági aranyérc"
        ],
        "respawn_anchor": [
            "Újjászületési pont"
        ],
        "crying_obsidian": [
            "Könnyező obszidián"
        ]
    }
};
freeze(lang_data);
export = lang_data;
