
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
    id: "fr_CA" as LangId,
    commands:{
        "ability_description": "Définit une capacité d’un joueur.",
        "ability_noability": "Aucune capacité nommée \"%1$s\" n'est disponible",
        "ability_granted": "Vous avez reçu la capacité \"%1$s\"",
        "ability_revoked": "La capacité \"%1$s\" vous a été retirée",
        "ability_success": "Capacité mise à jour",
        "achievement_alreadyHave": "Le joueur %1$s a déjà obtenu le succès %2$s",
        "achievement_description": "Donne ou enlève un succès d'un joueur.",
        "achievement_dontHave": "Le joueur %1$s n'a pas encore obtenu le succès %2$s",
        "achievement_give_success_all": "Tous les succès ont été donnés correctement à %1$s",
        "achievement_give_success_one": "Le succès %1$s a été donné correctement à %2$s",
        "achievement_statTooLow": "Le joueur %1$s n'a pas la statistique %2$s",
        "achievement_take_success_all": "Tous les succès ont été retirés correctement au joueur %1$s",
        "achievement_take_success_one": "La statistique %1$s a été retirée correctement au joueur %2$s",
        "achievement_unknownAchievement": "Le succès ou la statistique \"%1$s\" est inconnu",
        "agent_attack_success": "Agent - attaquer : réussite",
        "agent_attack_failed": "Agent - attaquer : échec",
        "agent_collect_success": "Agent - récupérer : réussite",
        "agent_collect_failed": "Agent - récupérer : échec",
        "agent_createagent_success": "Agent créé",
        "agent_createagent_failed": "Impossible de créer l'agent",
        "agent_destroy_success": "L'agent a détruit un bloc",
        "agent_destroy_failed": "Échec de destruction de l'agent",
        "agent_detect_success": "Agent - détecter : réussite",
        "agent_detect_failed": "Agent - détecter : échec",
        "agent_detectredstone_success": "Agent - detectredstone : réussite",
        "agent_detectredstone_failed": "Agent - detectredstone : échec",
        "agent_drop_success": "Agent - lâcher : réussite",
        "agent_drop_failed": "Agent - lâcher : échec",
        "agent_dropall_success": "Agent - dropall : réussite",
        "agent_dropall_failed": "Agent - dropall : échec",
        "agent_getitemcount_success": "Agent - getitemcount : réussite",
        "agent_getitemcount_failed": "Agent - getitemcount : échec",
        "agent_getitemspace_success": "Agent - getitemspace : réussite",
        "agent_getitemspace_failed": "Agent - getitemspace : échec",
        "agent_getitemdetail_success": "Agent - getitemdetail : réussite",
        "agent_getitemdetail_failed": "Agent - getitemdetail : échec",
        "agent_getposition_success": "Agent - obtenir position : réussite",
        "agent_getposition_failed": "Agent - obtenir position : échec",
        "agent_inspect_success": "Agent - inspecter : réussite",
        "agent_inspect_failed": "Agent - inspecter : échec",
        "agent_inspectdata_success": "Agent - inspecter : réussite",
        "agent_inspectdata_failed": "Agent - inspecter : échec",
        "agent_move_success": "Agent - déplacer : réussite",
        "agent_move_failed": "Agent - déplacer : échec",
        "agent_outofrange": "Impossible de valider la commande : agent hors de portée",
        "agent_place_success": "Agent - placer : réussite",
        "agent_place_failed": "Agent - placer : échec",
        "agent_setitem_success": "Agent - définir objet : réussite",
        "agent_setitem_failed": "Agent - définir objet : échec",
        "agent_turn_success": "Agent - tourner : réussite",
        "agent_turn_failed": "Agent - tourner : échec",
        "agent_till_success": "Agent - faucher : réussite",
        "agent_till_failed": "Agent - faucher : échec",
        "agent_tpagent_description": "Téléporter votre agent.",
        "agent_tpagent_success": "Agent - téléporter : réussite",
        "agent_tpagent_failed": "Agent - téléporter : échec",
        "agent_transfer_success": "Agent - transférer : réussite",
        "agent_transfer_failed": "Agent - transférer : échec",
        "always_day": "Cycle jour-nuit %1$s",
        "always_day_locked": "Cycle jour-nuit verrouillé",
        "always_day_unlocked": "Cycle jour-nuit déverrouillé",
        "ban_description": "Ajoute un joueur à la liste des joueurs bannis.",
        "autocomplete_a": "tous les joueurs",
        "autocomplete_c": "mon agent",
        "autocomplete_e": "toutes les entités",
        "autocomplete_p": "joueur le plus proche",
        "autocomplete_r": "joueur aléatoire",
        "autocomplete_s": "vous-même",
        "autocomplete_v": "tous les agents",
        "ban_failed": "Impossible de bannir %1$s",
        "ban_success": "%1$s est maintenant banni(e)",
        "banip_description": "Ajoute l'adresse IP à la liste des adresses bannies.",
        "banip_invalid": "Vous avez entré une adresse IP invalide ou un joueur qui n'est pas en ligne",
        "banip_success": "L'adresse IP %1$s est maintenant bannie",
        "banip_success_players": "L'adresse IP %1$s appartenant à %2$s est maintenant bannie",
        "banlist_ips": "Il y a un total de %1$d adresses IP bannies :",
        "banlist_players": "Il y a un total de %1$d joueurs bannis :",
        "blockdata_description": "Modifie la balise de données d'un bloc.",
        "blockdata_placeFailed": "Vous ne pouvez pas placer des blocs ici",
        "blockdata_destroyFailed": "Vous ne pouvez pas creuser ici",
        "blockdata_failed": "La balise de données n'a pas changé : %1$s",
        "blockdata_notValid": "Le bloc ciblé n'est pas un bloc portant des données",
        "blockdata_outOfWorld": "Impossible de changer le bloc en dehors du monde",
        "blockdata_success": "Les données du bloc ont été mises à jour pour : %1$s",
        "blockdata_tagError": "L'analyse syntaxique de la balise de données a échoué : %1$s",
        "bossbar_add_success": "La barre de boss personnalisée [%1$s] a été créée",
        "bossbar_add_failure_invalid": "Identifiant de barre de boss invalide. Les identifiants doivent avoir la forme espace_de_nom:id ou id (par défaut espace_de_nom Minecraft).",
        "bossbar_add_failure_exists": "Une barre de boss avec l'identifiant « %1$s » existe déjà",
        "bossbar_description": "Crée et modifie les barres de boss",
        "bossbar_get_max": "La barre de boss personnalisée [%1$s] a un maximum de %2$d",
        "bossbar_get_players": "La barre de boss personnalisée [%1$s] a présentement %2$s joueurs en ligne : %3$s",
        "bossbar_get_players_none": "La barre de boss personnalisée [%1$s] n'a pas de joueurs en ligne présentement",
        "bossbar_get_players_one": "La barre de boss personnalisée [%1$s] a présentement 1 joueur en ligne : %2$s",
        "bossbar_get_value": "La barre de boss personnalisée [%1$s] a une valeur de %2$d",
        "bossbar_get_visible_true": "La barre de boss personnalisée [%1$s] est présentement affichée",
        "bossbar_get_visible_false": "La barre de boss personnalisée [%1$s] est présentement masquée",
        "bossbar_list": "Il y a %1$s barres de boss activées : %2$s",
        "bossbar_list_none": "Il n'y a pas de barres de boss activées",
        "bossbar_list_one": "Il y a 1 barre de boss activée : %1$s",
        "bossbar_notFound": "Aucune barre de boss avec l'identifiant « %1$s » n'existe",
        "bossbar_remove": "La barre de boss personnalisée [%1$s] a été supprimée",
        "change_setting_description": "Modifie un paramètre sur le serveur dédié en cours d'exécution.",
        "change_setting_success": "%1$s a subi une modification",
        "chunkinfo_compiled": "Le chunk est compilé.",
        "chunkinfo_data": "Les 64 premiers vertex sont : %1$s",
        "chunkinfo_empty": "Le chunk est vide.",
        "chunkinfo_hasLayers": "Le chunk a des couches : %1$s",
        "chunkinfo_hasNoRenderableLayers": "Le chunk n'a pas de couches qui peuvent être rendues.",
        "chunkinfo_isEmpty": "Le chunk a des couches vides : %1$s",
        "chunkinfo_location": "Emplacement du chunk : (%1$d, %2$d, %3$d)",
        "chunkinfo_noChunk": "Aucun chunk de trouvé à la position du chunk %1$d, %2$d, %3$d",
        "chunkinfo_notCompiled": "Le chunk n'est pas compilé.",
        "chunkinfo_notEmpty": "Le chunk n'est pas vide.",
        "chunkinfo_vertices": "Le tampon de la couche %1$s contient %2$d vertex",
        "classroommode_description": "Tenter de démarrer et de se connecter au mode Salle de classe.",
        "classroommode_success": "Tentative de démarrage du mode Salle de classe...",
        "clear_description": "Efface les objets de l'inventaire du joueur.",
        "clear_failure": "Impossible de vider l'inventaire de %1$s",
        "clear_failure_no_items": "Impossible de vider l'inventaire de %1$s, aucun objet à enlever",
        "clear_success": "L'inventaire de %1$s a été vidé, supprimant %2$d objets",
        "clear_tagError": "L'analyse syntaxique de la balise de données a échoué : %1$s",
        "clear_testing": "%1$s a %2$d objets qui correspondent au(x) critère(s)",
        "clearfixedinv_description": "Supprime tous les emplacements d'inventaire fixes.",
        "clearfixedinv_success": "Inventaire fixe vidé",
        "clone_description": "Clone les blocs d’une région à l’autre.",
        "clone_failed": "Aucun bloc n'a été cloné",
        "clone_filtered_error": "Vous devez spécifier un bloc de filtre pour utiliser le filtrage",
        "clone_noOverlap": "La source et la destination ne peuvent pas se chevaucher",
        "clone_outOfWorld": "Impossible d'accéder aux blocs en dehors du monde",
        "clone_success": "%1$d blocs ont été clonés",
        "clone_tooManyBlocks": "Trop de blocs dans la zone spécifiée (%1$d > %2$d)",
        "closechat_description": "Ferme la fenêtre de chat du joueur en mode local si elle est ouverte.",
        "closechat_success": "Chat fermé",
        "closechat_failure": "Le chat n'était pas ouvert",
        "closewebsocket_description": "Ferme la connexion WebSocket, le cas échéant.",
        "code_description": "Lance le Code Builder.",
        "code_success": "Code Builder lancé.",
        "compare_failed": "La source et la destination ne sont pas identiques",
        "compare_outOfWorld": "Impossible d'accéder aux blocs en dehors du monde",
        "compare_success": "%1$d blocs ont été comparés",
        "compare_tooManyBlocks": "Trop de blocs dans la zone spécifiée (%1$d > %2$d)",
        "corruptworld_description": "Corrompt le monde chargé sur le serveur.",
        "corruptworld_success": "Corruption du monde réussie.",
        "daylock_description": "Verrouille et déverrouille le cycle jour-nuit.",
        "debug_description": "Amorce ou arrête une session de débogage.",
        "debug_notStarted": "Impossible d'arrêter l'analyse si elle n'a pas commencé!",
        "debug_start": "Début du débogage",
        "debug_stop": "Le débogage s'est arrêté après %.2f secondes (%1$d tic-tac)",
        "defaultgamemode_description": "Définit le mode de jeu par défaut.",
        "defaultgamemode_success": "Le mode de jeu par défaut de ce monde est maintenant %1$s",
        "deop_description": "Révoque le statut d’opérateur d’un joueur.",
        "deop_failed": "Impossible d'enlever le statut d'opérateur (niveau de permission trop élevé) : %s",
        "deop_success": "%s a perdu ses droits d'opérateur",
        "deop_message": "Vous avez perdu vos privilèges d'opérateur",
        "difficulty_description": "Définit le niveau de difficulté.",
        "difficulty_usage": "/difficulty <new difficulty>",
        "difficulty_success": "La difficulté de la partie a été définie à %1$s",
        "downfall_success": "Météo changée",
        "effect_description": "Ajoute ou enlève les effets d'un statut.",
        "effect_failure_notActive": "Impossible de retirer l'effet %1$s sur %2$s puisqu'il ou elle ne l'a pas",
        "effect_failure_notActive_all": "Impossible de retirer des effets sur %1$s puisqu'il ou elle n'en a pas",
        "effect_failure_notAMob": "%1$s ne peut avoir d'effets",
        "effect_notFound": "Il n'y a pas d'effet mob avec l'ID %s",
        "effect_success": "A donné %1$s x %2$d à %3$s pendant %4$d secondes",
        "effect_success_removed": "L'effet %1$s sur %2$s a été retiré",
        "effect_success_removed_all": "Tous les effets sur %1$s ont été retirés",
        "enchant_cantCombine": "Le sort %1$s ne peut pas être combiné avec le sort %2$s",
        "enchant_invalidLevel": "%1$s ne supporte pas le niveau %2$d",
        "enchant_cantEnchant": "L'enchantement sélectionné ne peut pas être ajouté à l'objet ciblé : %1$s",
        "enchant_description": "Ajoute un enchantement à l'objet sélectionné par un joueur.",
        "enchant_noItem": "Le joueur ciblé ne tient pas d'objet : %1$s",
        "enchant_notFound": "Il n'y a pas d'enchantement de la sorte avec l'ID %1$d",
        "enchant_success": "L'enchantement a réussi pour %1$s",
        "entitydata_description": "Modifie la balise de données ou l'entité.",
        "entitydata_failed": "La balise de données n'a pas changé : %1$s",
        "entitydata_noPlayers": "%1$s est un joueur et ne peut pas être modifié",
        "entitydata_success": "Les données de l'entité ont été mises à jour pour : %1$s",
        "entitydata_tagError": "L'analyse syntaxique de la balise de données a échoué : %1$s",
        "execute_allInvocationsFailed": "Toutes les invocations ont échoué : \"%1$s\"",
        "execute_failed": "Échec de l'exécution de \"%1$s\" sur %2$s",
        "execute_description": "Exécute une commande au nom d'une ou plusieurs entités.",
        "fill_description": "Remplit une région en tout ou en partie avec un bloc en particulier.",
        "fill_failed": "Aucun bloc n'a été placé",
        "fill_outOfWorld": "Impossible de placer des blocs en dehors du monde",
        "fill_success": "%1$d blocs ont été placés",
        "fill_tagError": "L'analyse syntaxique de la balise de données a échoué : %1$s",
        "fill_tooManyBlocks": "Trop de blocs dans la zone spécifiée (%1$d > %2$d)",
        "fill_replace_auxvalue_invalid": "Valeur de donnée de remplacement invalide pour le bloc %1$s",
        "function_description": "Exécute les commandes trouvées dans le fichier de fonction correspondant.",
        "function_functionNameNotFound": "La fonction %1$s n'a pas été trouvée.",
        "function_invalidCharacters": "La fonction avec le titre « %s » n'est pas valide, le caractère « %s » n'est pas permis dans les noms de fonction.",
        "function_noEngineVersionSpecified": "La fonction %s n'a pu être exécutée. Vous devez préciser une min_engine_version dans le pack de comportements de manifest.json.",
        "function_success": "Exécution réussie de %1$d saisies de fonction.",
        "gamemode_description": "Définit un mode de jeu d’un joueur.",
        "gamemode_success_other": "Définir le mode de jeu de %2$s sur %1$s",
        "gamemode_success_self": "Définir son mode de jeu personnel sur %1$s",
        "gamemode_fail_invalid": "Mode de jeu \"%1$s\" non valide",
        "gamerule_description": "Définit ou interroge une valeur de règle de jeu.",
        "gamerule_type_invalid": "Type utilisé non valide pour la règle de jeu \"%1$s\"",
        "gamerule_type_nocheatsenabled": "La règle de jeu « %1$s » ne peut être utilisée que si les triches sont activées dans ce monde.",
        "gamerule_nopermission": "Seuls les propriétaires du serveur peuvent changer \"%1$s\"",
        "gamerule_norule": "Il n'y a aucune règle du jeu nommée \"%1$s\" de disponible",
        "gamerule_success": "Règle %1$s actualisée en %2$s",
        "generic_async_initiated": "Commande \"%1$s\" lancée (étape asynchrone %2$d)",
        "generic_boolean_invalid": "\"%1$s\" n'est pas vrai (true) ou faux (false)",
        "generic_chunk_notFound": "Tronçon spécifié introuvable",
        "generic_componentError": "L'analyse syntaxique de la liste des composants a échoué",
        "generic_dimension_notFound": "Dimension spécifiée introuvable",
        "generic_disabled": "Les commandes de triche ne sont pas activées dans ce niveau.",
        "generic_disabled_templateLocked": "Les paramètres sont présentement verrouillés. Déverrouillez les options de monde du modèle dans les paramètres de jeu pour les modifier.",
        "generic_double_tooBig": "La valeur que vous avez entrée (%.2f) est trop grande, elle doit être inférieure ou égale à %.2f",
        "generic_double_tooSmall": "Le nombre que vous avez entré (%.2f) est trop petit, il doit être supérieur ou égal à %.2f",
        "generic_duplicateType": "Dupliquer le type d'arguments",
        "generic_duplicateSelectorArgument": "Dupliquer %s arguments de sélecteur",
        "generic_encryption_badkey": "Clé publique incorrecte. Le formatage PEM devrait donner une clé de 120 bytes.",
        "generic_encryption_badsalt": "Salage incorrect. Un format de 16 bytes est attendu avant d'encoder en base 64.",
        "generic_encryption_required": "Une session chiffrée est requise",
        "generic_entity_invalidType": "Le type d'entité \"%1$s\" est invalide",
        "generic_entity_invalidUuid": "L'UUID de l'entité fourni est dans un format invalide",
        "generic_entity_notFound": "Cette entité n'a pas été trouvée",
        "generic_exception": "Une erreur inconnue s'est produite lors de la tentative pour exécuter cette commande",
        "generic_invalidAgentType": "Tapez l'argument qui s'applique au sélecteur agent seulement",
        "generic_invalidcontext": "Contexte fourni non valide pour le type de commande spécifié",
        "generic_invalidDevice": "La commande %s que vous avez entrée n'est pas prise en charge par cet appareil",
        "generic_invalidPlayerType": "Tapez l'argument qui s'applique au sélecteur joueur seulement",
        "generic_invalidType": "Type d'argument inconnu",
        "generic_levelError": "Le niveau maximum doit être plus grand que le niveau minimum",
        "generic_malformed_body": "Corps manquant ou incorrect",
        "generic_malformed_type": "Type de requête non valide",
        "generic_notimplemented": "Non intégré",
        "generic_num_invalid": "\"%1$s\" n'est pas un nombre valide",
        "generic_num_tooBig": "Le nombre que vous avez entré (%1$d) est trop élevé, il doit être inférieur ou égal à %2$d",
        "generic_num_tooSmall": "Le nombre que vous avez entré (%1$d) est trop petit, il doit être supérieur ou égal à %2$d",
        "generic_parameter_invalid": "\"%1$s\" n'est pas un paramètre valide",
        "generic_permission_selector": "<permissions insuffisantes pour l'élargissement du sélecteur>",
        "generic_player_notFound": "Ce joueur n'a pas été trouvé",
        "generic_protocol_mismatch": "La version du protocole fournie ne correspond pas à celle de Minecraft",
        "generic_radiusError": "Le rayon minimum du sélecteur doit être inférieur au rayon maximum",
        "generic_radiusNegative": "Le rayon ne peut être négatif",
        "generic_rotationError": "La rotation est hors de portée",
        "generic_running": "La commande est déjà en cours",
        "generic_step_failed": "Échec de l'étape de commande",
        "generic_syntax": "Erreur de syntaxe : résultat inattendu de « %2$s » : à « %1$s>>%2$s<<%3$s »",
        "generic_noTargetMatch": "Aucune cible n'a correspondu au sélecteur",
        "generic_targetNotPlayer": "Le sélecteur doit être par type de joueur",
        "generic_tooManyNames": "Trop d'arguments de noms cibles",
        "generic_tooManyTargets": "Trop d'arguments ont correspondu au sélecteur",
        "generic_too_many_requests": "Trop de commandes demandées, attendez que l'une aboutisse",
        "generic_unknown": "Commande inconnue : %s. Veuillez vérifier que cette commande existe et que vous avez la permission de l'utiliser.",
        "generic_usage": "Syntaxe : %1$s",
        "generic_usage_noparam": "Utilisation :",
        "generic_version_mismatch": "La version demandée n'existe pas pour cette commande",
        "generic_version_missing": "Les appels de commandes qui ne sont pas par chat doivent spécifier la version de la commande",
        "getchunkdata_description": "Renvoie les pixels d'un tronçon donné.",
        "getchunkdata_success": "Données de tronçon reçues",
        "getchunks_description": "Renvoie la liste des tronçons chargés.",
        "getchunks_success": "Liste des tronçons reçue",
        "getlocalplayername_description": "Retourne le nom du joueur local.",
        "getspawnpoint_description": "Renvoie la position d'apparition du ou des joueurs spécifiés.",
        "gettopsolidblock_description": "Obtient la position du bloc non aérien du dessus sous la position spécifiée",
        "gettopsolidblock_notfound": "Pas de blocs solides sous la position spécifiée",
        "give_block_notFound": "Il n'y a pas de bloc avec le nom %1$d",
        "give_description": "Donne un objet à un joueur.",
        "give_item_invalid": "Syntaxe de commande non valide : aucun %s avec cette valeur de donnée n’existe",
        "give_item_notFound": "Il n'y a pas d'objet avec le nom %1$d",
        "give_map_invalidData": "Données de carte fournies invalides",
        "give_map_featureNotFound": "La carte d'exploration n'a pu être créée. La fonctionnalité n'a pas été trouvée dans cette dimension",
        "give_success": "A donné %1$s * %2$d à %3$s",
        "give_successRecipient": "Vous avez reçu %1$s * %2$d",
        "give_tagError": "L'analyse syntaxique de la balise de données a échoué : %1$s",
        "help_description": "Fournit de l’aide ou une liste des commandes.",
        "help_footer": "Astuce : utilisez la touche <tab> lorsque vous écrivez une commande pour auto-compléter la commande ou ses arguments",
        "help_header": "--- Page d'aide %1$d de %2$d (/help (ou /?) <page>) ---",
        "help_command_aliases": "%s (aussi %s) :",
        "immutableworld_description": "Définit l’état d’immuabilité du monde.",
        "immutableworld_info": "immutableworld = %s",
        "kick_description": "Exclut un joueur du serveur.",
        "kick_description_edu": "Retire un joueur de la partie.",
        "kick_not_found": "Impossible de trouver le joueur %1$s",
        "kick_not_yourself": "Vous ne pouvez pas vous supprimer vous-même du jeu",
        "kick_success": "%1$s a été éjecté(e) de la partie",
        "kick_success_reason": "%1$s a été éjecté(e) de la partie : \"%2$s\"",
        "kick_success_reasonedu": "%1$s a été retiré(e) de la partie : « %2$s »",
        "kick_no_host": "L'hôte ne peut pas être exclu du jeu.",
        "kick_no_teacher": "Les enseignants ne peuvent pas être supprimés du jeu.",
        "kill_successful_edu": "Suppression de %1$s",
        "kill_successful": "%1$s pulvérisé(e)",
        "kill_description_edu": "Supprime les entités (joueurs, créatures, etc.).",
        "kill_description": "Tue les entités (joueurs, mobs, etc.).",
        "list_description": "Catalogue les joueurs sur le serveur.",
        "locate_description": "Affiche les coordonnées de la structure d’un type donné la plus proche.",
        "locate_fail_noplayer": "Cette commande n'est utilisable que par un lecteur valide",
        "locate_fail_nostructurefound": "Aucune structure valide trouvée dans cette dimension",
        "locate_success": "L'objet %1$s le plus proche est au bloc %2$s, (y?), %3$s",
        "togglecontentlog_toggle": "Active/désactive la commande du journal de contenu",
        "togglecontentlog_enabled": "Journal de contenu activé",
        "togglecontentlog_disabled": "Journal de contenu désactivé",
        "me_description": "Affiche un message à propos de vous.",
        "message_display_incoming": "%1$s vous chuchote : %2$s",
        "message_display_outgoing": "Vous chuchotez à %1$s le message : %2$s",
        "message_sameTarget": "Si vous voulez vous dire un message, dites-le dans votre tête, pas dans un jeu!",
        "mixer_description": "Commande d'interactivité de Mixer",
        "mixer_error_unknown": "Une erreur inconnue de Mixer s'est produite.",
        "mixer_error_notoken": "Vous devez être connecté avec un compte Microsoft pour activer l'interactivité Mixer.",
        "mixer_error_notsupported": "L'appareil que vous utilisez ne prend pas l'interactivité Mixer en charge.",
        "mixer_interactive_error": "Une erreur Mixer s'est produite : %1$s",
        "mixer_scene_failed": "Aucune scène du nom de %1$s n'existe. Assurez-vous d'avoir correctement entré le nom de la scène.",
        "mixer_scene_success": "La scène a été modifiée pour : %1$s",
        "mixer_start_success": "Mixer interactif commence : %1$s",
        "mixer_start_fail_invalidCode": "Impossible de trouver le projet avec l'ID « %1$s ». Assurez-vous que l'ID ou que le code de partage est correct.",
        "mixer_stop_success": "Mixer interactif s'est arrêté.",
        "mixer_stop_fail": "Il n'y a pas de session interactive à arrêter.",
        "mixer_status_notinitialized": "L'interactivité n'est pas initialisée.",
        "mixer_status_enabled": "L'interactivité est activée.",
        "mixer_status_initializing": "L'interactivité est en cours d'utilisation.",
        "mixer_status_pending": "L'interactivité est en attente.",
        "mixer_status_disabled": "L'interactivité est désactivée.",
        "mixer_activatedbutton": "%1$s a activé %2$s.",
        "mobevent_description": "Contrôle ce que les événements de créatures peuvent commander.",
        "mobevent_eventsEnabledSetToTrue": "Les événements de créatures sont maintenant activés. Les événements individuels dont la valeur est réglée à faux ne s'exécuteront pas.",
        "mobevent_eventsEnabledSetToFalse": "Les événements de créatures sont maintenant désactivés. Les événements individuels ne s'exécuteront pas.",
        "mobevent_eventsEnabledIsTrue": "Les événements de créatures sont activés. Les événements individuels dont la valeur est réglée à faux ne s'exécuteront pas.",
        "mobevent_eventsEnabledIsFalse": "Les événements de créatures sont désactivés. Les événements individuels ne s'exécuteront pas.",
        "mobevent_eventSetToTrue": "Valeur de l'événement de créature %s (ID : %s) réglée à vrai.",
        "mobevent_eventSetToTrueButEventsDisabled": "Valeur de l'événement de créature %s (ID : %s) réglée à vrai, mais les événements de créatures sont désactivés.",
        "mobevent_eventSetToFalse": "Valeur de l'événement de créature %s (ID : %s) réglée à faux.",
        "mobevent_eventIsTrue": "La valeur de l'événement de créature %s (ID : %s) est réglée à vrai.",
        "mobevent_eventIsTrueButEventsDisabled": "La valeur de l'événement de créature %s (ID : %s) est réglée à vrai, mais les événements de créatures sont désactivés.",
        "mobevent_eventIsFalse": "La valeur de l'événement de créature %s (ID : %s) est réglée à faux.",
        "op_description": "Accorde le statut d’opérateur à un joueur.",
        "op_failed": "Impossible de promouvoir %s au poste d'opérateur (déjà opérateur ou plus)",
        "op_success": "%s est maintenant opérateur",
        "op_message": "Vous avez obtenu les privilèges d'opérateur",
        "origin_commandblock": "Bloc de commande",
        "origin_external": "Externe",
        "origin_devconsole": "DevConsole",
        "origin_script": "Moteur de scripts",
        "origin_server": "Ajouter un serveur",
        "origin_teacher": "Enseignant",
        "ops_description": "Recharge et applique les autorisations d'opérateur.",
        "ops_reloaded": "Liste approuvée rechargée depuis le fichier.",
        "ops_set_success": "Configuration du niveau d'opérateur pour le joueur %s réussie.",
        "permissions_description": "Recharge et applique les permissions.",
        "permissions_reloaded": "Permissions rechargées depuis le fichier.",
        "permissions_set_failed": "Impossible de configurer le niveau de permission %s pour le joueur %s.",
        "permissions_set_success": "Configuration du niveau de permission %s pour le joueur %s réussie.",
        "permissions_save_failed": "Impossible de sauvegarder le niveau de permission %s pour le joueur %s.",
        "permissions_save_success": "Sauvegarde du niveau de permission %s pour le joueur %s réussie.",
        "spawnParticleEmitter_description": "Crée un émetteur de particules",
        "particle_description": "Crée des particules.",
        "particle_notFound": "Nom d'effet inconnu (%1$s)",
        "particle_success": "Animation de l'effet %1$s pendant %2$d fois",
        "players_list": "Il y a %1$d/%2$d joueur(s) connecté(s) :",
        "players_list_names": "%s",
        "playsound_description": "Joue un son.",
        "playsound_playerTooFar": "%1$s est trop loin pour entendre le son",
        "playsound_success": "Le son \"%1$s\" a été joué à %2$s",
        "position_description": "Active/désactive les coordonnées pour un joueur.",
        "publish_failed": "Impossible d'héberger la partie locale",
        "publish_started": "La partie locale est hébergée sur le port %1$s",
        "querytarget_description": "Renvoie les informations Transformation, Nom et ID de l'entité ou des entités ciblées.",
        "querytarget_success": "Données cibles : %1$s",
        "reload_description": "Recharge tous les fichiers de fonction de tous les packs de comportement.",
        "reload_success": "Les fichiers de fonction existants ont été rechargés. Redémarrez Minecraft pour recharger les NOUVELLES fonctions.",
        "replaceitem_description": "Remplace les objets dans les inventaires.",
        "replaceitem_failed": "Impossible de remplacer l'emplacement %s %d par %d * %s",
        "replaceitem_keepFailed": "Un objet occupe déjà cet %s emplacement %d.",
        "replaceitem_noContainer": "Le bloc situé au %s n'est pas un conteneur",
        "replaceitem_badSlotNumber": "La case %d ne peut être remplacée, la valeur doit se situer entre %d et %d.",
        "replaceitem_success": "L'emplacement %s %d a été remplacé par %d * %s",
        "replaceitem_success_entity": "L'emplacement %s %d de %s a été remplacé par %d * %s",
        "replaceitem_tagError": "L'analyse syntaxique de la balise de données a échoué : %1$s",
        "save_description": "Régler ou vérifier la sauvegarde de données du jeu sur le disque.",
        "save_disabled": "Sauvegarde automatique du monde désactivée",
        "save_enabled": "Sauvegarde automatique du monde activée",
        "save_failed": "La sauvegarde a échoué : %1$s",
        "save_start": "Sauvegarde en cours...",
        "save_success": "Monde sauvegardé",
        "save_all_error": "Une erreur s'est produite en tentant de mettre le stockage de niveau en pause.",
        "save_all_success": "Données sauvegardées. Les fichiers sont maintenant prêts à être copiés.",
        "save_off_alreadyOff": "La sauvegarde automatique est déjà désactivée.",
        "save_on_alreadyOn": "La sauvegarde automatique est déjà activée.",
        "save_on_notDone": "Une sauvegarde précédente n'a pas été complétée.",
        "save_on_description": "Active la sauvegarde automatique sur le serveur.",
        "save_on_success": "Les modifications du niveau sont rétablies.",
        "save_state_description": "Vérifie si une sauvegarde précédente de toutes les données est terminée et liste les fichiers associés.",
        "say_description": "Envoie un message sur le chat aux autres joueurs.",
        "scoreboard_description": "Fait le suivi et affiche les scores de différents objectifs.",
        "scoreboard_allMatchesFailed": "Toutes les correspondances ont échoué",
        "scoreboard_noMultiWildcard": "Seulement un joker est autorisé",
        "scoreboard_objectiveNotFound": "Aucun objectif nommé « %1$s » n'a été trouvé",
        "scoreboard_objectiveReadOnly": "L'objectif « %1$s » est en lecture seule et ne peut pas être défini",
        "scoreboard_objectives_add_alreadyExists": "Un objectif nommé « %1$s » existe déjà",
        "scoreboard_objectives_add_displayTooLong": "Le nom d'affichage « %1$s » est trop long pour un objectif, il ne peut pas dépasser %2$d caractères",
        "scoreboard_objectives_add_success": "Le nouvel objectif « %1$s » a été ajouté avec succès",
        "scoreboard_objectives_add_tooLong": "Le nom « %1$s » est trop long pour un objectif, il ne peut pas dépasser %2$d caractères",
        "scoreboard_objectives_add_wrongType": "Type de critère d'objectif invalide « %1$s »",
        "scoreboard_objectives_add_needName": "Un objectif doit avoir un nom.",
        "scoreboard_objectives_description": "Modifier les objectifs du tableau de score.",
        "scoreboard_objectives_list_count": "Affichage de %1$d objectif(s) au tableau de score :",
        "scoreboard_objectives_list_empty": "Il n'y a pas d'objectifs au tableau de score",
        "scoreboard_objectives_list_entry": "- %1$s : s'affiche en tant que « %2$s » et est de type « %3$s »",
        "scoreboard_objectives_remove_success": "L'objectif « %1$s » a été supprimé avec succès",
        "scoreboard_objectives_setdisplay_invalidSlot": "Il n'y a aucun emplacement d'affichage nommé « %1$s »",
        "scoreboard_objectives_setdisplay_successCleared": "L'objectif se trouvant dans l'emplacement d'affichage « %1$s » a été supprimé",
        "scoreboard_objectives_setdisplay_successSet": "Définir l'objectif de l'emplacement d'affichage « %1$s » à « %2$s »",
        "scoreboard_players_add_success": "Ajout de %1$d à l'objectif [%2$s] de %3$s (maintenant à %4$d)",
        "scoreboard_players_add_multiple_success": "Ajout de %1$d à l'objectif [%2$s] pour %3$d entités",
        "scoreboard_players_nameNotFound": "Un nom de joueur doit être fourni.",
        "scoreboard_players_enable_noTrigger": "L'objectif %1$s n'est pas un déclencheur",
        "scoreboard_players_enable_success": "Le déclencheur %1$s a été activé pour %2$s",
        "scoreboard_players_list_count": "Affichage de %1$d joueurs ciblés sur le tableau de score :",
        "scoreboard_players_list_empty": "Il n'y a pas de joueurs ciblés sur le tableau de score",
        "scoreboard_players_list_player_count": "Affichage de %1$d objectif(s) ciblé(s) pour %2$s :",
        "scoreboard_players_list_player_empty": "Le joueur %1$s n'a pas de scores enregistrés",
        "scoreboard_players_list_player_entry": "- %2$s : %1$d (%3$s)",
        "scoreboard_players_operation_invalidOperation": "Opération invalide %1$s",
        "scoreboard_players_operation_notFound": "Aucun score %1$s de trouvé pour %2$s",
        "scoreboard_players_operation_success": "Mise à jour de l'objectif [%1$s] pour %2$d entités",
        "scoreboard_players_offlinePlayerName": "Jouer hors ligne",
        "scoreboard_players_random_invalidRange": "Min. %1$d n'est pas moins que max. %2$d",
        "scoreboard_players_remove_success": "Suppression de %1$d de l'objectif [%2$s] de %3$s (maintenant à %4$d)",
        "scoreboard_players_remove_multiple_success": "Suppression de %1$d de l'objectif [%2$s] pour %3$d entités",
        "scoreboard_players_reset_success": "Réinitialisation des scores du joueur %1$s",
        "scoreboard_players_resetscore_success": "Réinitialisation du score %1$s du joueur%2$s",
        "scoreboard_players_set_success": "Réglage de l'objectif [%1$s] de %2$s à %3$d",
        "scoreboard_players_set_multiple_success": "Réglage de l'objectif [%1$s] à %2$d entités pour %3$d",
        "scoreboard_players_set_tagError": "L'analyse syntaxique de la balise de données a échoué : %1$s",
        "scoreboard_players_set_tagMismatch": "La balise de données ne correspond pas à %1$s",
        "scoreboard_players_score_notFound": "Aucun score %1$s de trouvé pour %2$s",
        "scoreboard_players_test_failed": "Le score %1$d n'est PAS dans l'écart de %2$d à %3$d",
        "scoreboard_players_test_success": "Le score %1$d est dans l'écart de %2$d à %3$d",
        "scoreboard_teamNotFound": "Aucune équipe nommée « %1$s » n'a été trouvée",
        "scoreboard_teams_add_alreadyExists": "Une équipe nommée « %1$s » existe déjà",
        "scoreboard_teams_add_displayTooLong": "Le nom d'affichage « %1$s » est trop long pour une équipe, il ne peut pas dépasser %2$d caractères",
        "scoreboard_teams_add_success": "La nouvelle équipe « %1$s » a été ajoutée avec succès",
        "scoreboard_teams_add_tooLong": "Le nom d'affichage « %1$s » est trop long pour une équipe, il ne peut pas dépasser %2$d caractères",
        "scoreboard_teams_empty_alreadyEmpty": "L'équipe %1$s est déjà vide, impossible de supprimer des joueurs inexistants",
        "scoreboard_teams_empty_success": "Suppression de %1$d joueur(s) (tous) de l'équipe %2$s",
        "scoreboard_teams_join_failure": "Impossible d'ajouter %1$d joueur(s) à l'équipe %2$s : %3$s",
        "scoreboard_teams_join_success": "Ajout de %1$d joueur(s) à l'équipe %2$s : %3$s",
        "scoreboard_teams_leave_failure": "Impossible de supprimer %1$d joueur(s) de leur équipe : %2$s",
        "scoreboard_teams_leave_noTeam": "Vous n'êtes pas dans une équipe",
        "scoreboard_teams_leave_success": "Suppression de %1$d joueur(s) de leur équipe : %2$s",
        "scoreboard_teams_list_count": "Affichage de %1$d équipes sur le tableau de score :",
        "scoreboard_teams_list_empty": "Il n'y a pas d'équipes inscrites sur le tableau de score",
        "scoreboard_teams_list_entry": "- %1$s : «%2$s » a %3$d joueurs",
        "scoreboard_teams_list_player_count": "Affichage de %1$d joueur(s) dans l'équipe %2$s :",
        "scoreboard_teams_list_player_empty": "L'équipe %1$s n'a pas de joueurs",
        "scoreboard_teams_list_player_entry": "- %2$s : %1$d (%3$s)",
        "scoreboard_teams_option_noValue": "Les valeurs valides pour l'option %1$s sont : %2$s",
        "scoreboard_teams_option_success": "Définir l'option %1$s pour l'équipe %2$s à %3$s",
        "scoreboard_teams_remove_success": "L'équipe %1$s a été supprimée",
        "seed_success": "Graine : %1$s",
        "setblock_description": "Change un bloc en un autre bloc.",
        "setblock_failed": "Impossible de placer le bloc",
        "setblock_noChange": "Le bloc n'a pas pu être placé",
        "setblock_notFound": "Il n'y a pas de bloc dont l'ID ou le nom est %1$s",
        "setblock_outOfWorld": "Impossible de placer le bloc en dehors du monde",
        "setblock_success": "Le bloc a été placé",
        "setblock_tagError": "L'analyse syntaxique de la balise de données a échoué : %1$s",
        "setidletimeout_success": "Le délai d'inactivité a été défini avec succès à %1$d minute(s).",
        "setfixedinvslots_description": "Définit le nombre d'emplacements d'inventaire fixes pour le serveur.",
        "setfixedinvslots_success": "Nombre d'emplacements d'inventaire fixes défini à %1$d",
        "setfixedinvslot_description": "Assigne un emplacement fixe à un objet spécifié.",
        "setfixedinvslot_success": "Emplacement d'inventaire fixe %1$d défini à %2$s",
        "globalpause_description": "Définit ou obtient l'état Pause du jeu pour tous les joueurs.",
        "globalpause_success": "État Pause défini ou obtenu",
        "setmaxplayers_description": "Fixe le nombre maximal de joueurs pour la séance de jeu.",
        "setmaxplayers_success": "Fixer le nombre maximal de joueurs à %1$d.",
        "setmaxplayers_success_upperbound": "(En fonction du nombre maximal de connexions autorisées)",
        "setmaxplayers_success_lowerbound": "(En fonction du nombre actuel de joueurs)",
        "setworldspawn_description": "Définit le monde d’apparition.",
        "setworldspawn_success": "Le point d'apparition du monde a été défini aux coordonnées (%1$d, %2$d, %3$d)",
        "setworldspawn_wrongDimension": "Le point d'apparition du monde ne peut être défini dans cette dimension",
        "spawnpoint_success_single": "Le point d'apparition de %1$s a été défini aux coordonnées (%2$d, %3$d, %4$d)",
        "spawnpoint_description": "Définit le point d’apparition d’un joueur.",
        "spawnpoint_success_multiple_specific": "Le point d'apparition pour %1$s a été défini aux coordonnées (%2$d, %3$d, %4$d)",
        "spawnpoint_success_multiple_generic": "Point d'apparition défini pour %1$s",
        "spawnpoint_wrongDimension": "Le point d'apparition ne peut être défini dans cette dimension",
        "spreadplayers_description": "Téléporte les entités dans des endroits aléatoires.",
        "spreadplayers_failure_players": "Impossible de disperser %1$s joueurs autour du point %2$s, %3$s (trop de joueurs pour l'espace - essayez de ne pas dépasser %4$s)",
        "spreadplayers_failure_teams": "Impossible de disperser %1$s équipes autour du point %2$s, %3$s (trop de joueurs pour l'espace - essayez de ne pas dépasser %4$s)",
        "spreadplayers_info_players": "(La distance moyenne entre les joueurs est de %1$s blocs après %2$s itérations)",
        "spreadplayers_info_teams": "(La distance moyenne entre les équipes est de %1$s blocs après %2$s itérations)",
        "spreadplayers_spreading_players": "Dispersion de %1$s joueurs sur %2$s blocs autour du point %3$s, %4$s (distance minimale de %5$s blocs)",
        "spreadplayers_spreading_teams": "Dispersion de %1$s équipes sur %2$s blocs autour du point %3$s, %4$s (distance minimale de %5$s blocs)",
        "spreadplayers_success_players": "Dispersion avec succès de %1$s joueurs autour du point %2$s, %3$s",
        "spreadplayers_success_teams": "Dispersion avec succès de %1$s équipes autour du point %2$s, %3$s",
        "stats_cleared": "%1$s statistiques ont été effacées",
        "stats_failed": "Paramètres invalides",
        "stats_noCompatibleBlock": "Le bloc aux coordonnées %1$d, %2$d, %3$d ne peut pas suivre de statistiques",
        "stats_success": "Stockage de la statistique %1$s dans %2$s sur %3$s",
        "stop_description": "Arrête le serveur.",
        "stop_start": "Arrêt du serveur",
        "stopsound_description": "Arrête un son.",
        "stopsound_success": "A arrêté le son %s pour %s",
        "stopsound_success_all": "A arrêté tous les sons pour %s",
        "summon_description": "Invoque une entité.",
        "summon_failed": "Impossible d'invoquer l'entité",
        "summon_outOfWorld": "Impossible d'invoquer l'entité en dehors du monde",
        "summon_success": "L'entité a été invoquée avec succès",
        "summon_tagError": "L'analyse syntaxique de la balise de données a échoué : %1$s",
        "tag_description": "Gère les balises stockées dans les entités.",
        "tag_add_failed": "La cible a déjà une balise ou bien elle en a trop",
        "tag_add_success_single": "Ajout de la balise « %1$s » à %2$s",
        "tag_add_success_multiple": "Ajout de la balise « %1$s » à %2$d entités",
        "tag_list_single_empty": "%s n'a pas de balises",
        "tag_list_single_success": "%1$s a %2$d balises : %3$s",
        "tag_list_multiple_empty": "Il n'y a pas de balises dans les %d entités",
        "tag_list_multiple_success": "Les %1$d entités ont un total de %2$d balises : %3$s",
        "tag_remove_failed": "La cible n'a pas cette balise",
        "tag_remove_success_single": "Suppression de la balise « %1$s » de %2$s",
        "tag_remove_success_multiple": "Suppression de la balise « %1$s » des %2$s entités",
        "tell_description": "Envoie un message privé à un ou plusieurs joueurs.",
        "tellraw_description": "Envoie un message JSON aux joueurs.",
        "tellraw_jsonException": "Message json non valide : %1$s",
        "tellraw_jsonStringException": "Donnée de la chaîne json invalide.",
        "tellraw_error_noData": "Aucune donnée n'a été fournie.",
        "tellraw_error_notArray": "Un objet en texte brut doit contenir une matrice. Exemple : \"rawtext\":[{..}]",
        "tellraw_error_textNotString": "le champ de texte en texte brut doit contenir une chaîne. Exemple : \"rawtext\":[{\"text\": \"text to display\"}]",
        "tellraw_error_translateNotString": "un champ de traduction en texte brut doit contenir un code de langue. Exemple : \"rawtext\":[{\"translate\": \"gui.ok\"}]",
        "tellraw_error_withNotArrayOrRawText": "avec le champ du texte brut qui doit contenir un tableau ou un autre objet de texte brut. Exemple 1 : \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Exemple 2 : \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
        "tellraw_error_itemIsNotObject": "La valeur Json contenue dans la matrice du texte brut n'était pas un objet. Exemple : \"rawtext\": [{ \"text\" : \"my text\" }]",
        "educlientinfo_description": "Obtenir l'ID client et le statut de l'hôte. Conçu pour le MC.",
        "testfor_description": "Compte les entités (joueurs, créatures, objets, etc.) qui correspondent aux conditions spécifiées.",
        "testfor_failure": "%1$s ne correspond pas à la structure de données requise",
        "testfor_success": "%1$s de trouvé(es)",
        "testfor_tagError": "LL'analyse syntaxique de la balise de données a échoué : %1$",
        "testforblock_description": "Vérifie si un certain bloc est dans un lieu spécifié.",
        "testforblock_failed_data": "Le bloc aux coordonnées %1$d,%2$d,%3$d ne correspondait pas à l'état attendu du bloc.",
        "testforblock_failed_nbt": "Le bloc aux coordonnées %1$d,%2$d,%3$d n'avait pas les clés NBT requises.",
        "testforblock_failed_tile": "Le bloc aux coordonnées %1$d,%2$d,%3$d est %4$s (prévu : %5$s).",
        "testforblock_failed_tileEntity": "Le bloc aux coordonnées %1$d,%2$d,%3$d n'est pas une entité de bloc et ne peut supporter la correspondance du tag.",
        "testforblock_outOfWorld": "Impossible de tester un bloc situé en dehors du monde",
        "testforblock_success": "Le bloc a été trouvé avec succès aux coordonnées %1$d,%2$d,%3$d.",
        "testforblocks_description": "Vérifie si les blocs de deux régions concordent.",
        "tickingarea_description": "Ajouter, supprimer ou lister des zones de ticks.",
        "tickingarea_inuse": "Les zones de ticks %1$d/%2$d sont utilisées.",
        "tickingarea_noneExist_currentDimension": "Aucune zone de ticks n'existe dans la dimension actuelle.",
        "tickingarea_add_bounds_success": "Une zone de ticks a été ajoutée de %1$d à %2$d.",
        "tickingarea_add_circle_success": "Une zone de ticks a été ajoutée, centrée à %1$d avec un rayon de %2$d morceaux.",
        "tickingarea_add_failure": "Le nombre maximal de zones de ticks (%1$d) a déjà été atteint. Impossible d'ajouter plus de zones de ticks.",
        "tickingarea_add_conflictingname": "Une zone de ticks du nom de %1$s existe déjà.",
        "tickingarea_add_chunkfailure": "La zone de ticks contient plus de %1$d morceaux. Elle est trop grande et ne peut donc pas être créée.",
        "tickingarea_add_radiusfailure": "Le rayon ne peut dépasser %1$d. La zone de ticks est trop grande et ne peut être créée.",
        "tickingarea_remove_success": "Zone(s) de ticks supprimée(s)",
        "tickingarea_remove_failure": "Aucune zone de ticks contenant le bloc à la position %1$d n'existe dans la dimension actuelle.",
        "tickingarea_remove_byname_failure": "Aucune zone de ticks nommée %1$s n'existe dans la dimension actuelle.",
        "tickingarea_remove_all_success": "Zone(s) de ticks supprimée(s)",
        "tickingarea_remove_all_failure": "Aucune zone de ticks n'existe dans la dimension actuelle.",
        "tickingarea_list_chunks": "tronçons",
        "tickingarea_list_circle_radius": "Rayon",
        "tickingarea_list_success_currentDimension": "Liste de toutes les zones de ticks dans la dimension actuelle",
        "tickingarea_list_success_allDimensions": "Liste de toutes les zones de ticks dans toutes les dimensions",
        "tickingarea_list_failure_allDimensions": "Aucune zone de ticks n'existe dans aucune dimension.",
        "tickingarea_list_to": "à",
        "tickingarea_list_type_circle": "Cercle",
        "time_added": "L'heure a été avancée de %1$d tick(s)",
        "time_description": "Modifie ou interroge le temps de jeu du monde.",
        "time_disabled": "Le paramètre Jour éternel est activé pour ce niveau.",
        "time_query_day": "Le jour est %d",
        "time_query_daytime": "La journée est %d",
        "time_query_gametime": "Le temps de jeu est %d",
        "time_set": "L'heure a été fixée à %1$d tick(s)",
        "time_stop": "Heure %1$s",
        "title_description": "Contrôle les titres de l’écran.",
        "title_success": "La commande pour le titre a été exécutée avec succès",
        "titleraw_description": "Contrôle les titres d'écran avec des messages JSON.",
        "toggledownfall_description": "Fait basculer la météo.",
        "tp_description": "Téléporte les entités (joueurs, mobs, etc.).",
        "tp_notSameDimension": "Impossible d'effectuer la téléportation car les joueurs ne sont pas dans la même dimension",
        "tp_outOfWorld": "La téléportation d'entités en dehors du monde est impossible",
        "tp_permission": "Vous n'avez pas la permission d'utiliser cette commande barre oblique.",
        "tp_safeTeleportFail": "Impossible de téléporter %1$s vers %2$s parce que la zone n'était pas dégagée de tout bloc.",
        "tp_far": "Impossible de téléporter %1$s vers la zone déchargée de %2$s",
        "tp_success": "%1$s s'est fait téléporter sur %2$s",
        "tp_successVictim": "Vous venez de vous téléporter à : %1$s",
        "tp_success_coordinates": "%1$s s'est fait téléporter aux coordonnées %2$s, %3$s, %4$s",
        "transferserver_description": "Transfère un joueur vers un autre serveur.",
        "transferserver_successful": "Joueur transféré",
        "transferserver_invalid_port": "Port non valide (0-65535)",
        "trigger_description": "Définit l'activation d'un déclencheur.",
        "trigger_disabled": "Le déclencheur %1$s n'est pas activé",
        "trigger_invalidMode": "Mode du déclencheur non valide : %1$s",
        "trigger_invalidObjective": "Nom du déclencheur non valide : %1$s",
        "trigger_invalidPlayer": "Seuls les joueurs peuvent utiliser la commande /trigger",
        "trigger_success": "Le déclencheur %1$s a été changé avec %2$s %3$s",
        "unban_failed": "Impossible de débannir %1$s",
        "unban_success": "%1$s est maintenant débanni(e)",
        "unbanip_invalid": "Vous avez entré une adresse IP invalide",
        "unbanip_success": "L'adresse IP %1$s est maintenant débannie",
        "validategamelighting_description": "Validation de l'éclairage en jeu pour une région précise",
        "validategamelighting_checkRegionTooBig": "La région dont il faut vérifier l'éclairage est trop grande! (%1$d > %2$d)",
        "validategamelighting_outOfWorld": "Impossible de vérifier l'éclairage en dehors du monde",
        "weather_clear": "Le ciel se dégage",
        "weather_description": "Définit la météo.",
        "weather_disabled": "Le paramètre Cycle météo n'est pas activé pour ce niveau.",
        "weather_query": "L'état de la météo est : %s",
        "weather_query_clear": "dégagé",
        "weather_query_rain": "pluie",
        "weather_query_thunder": "tonnerre",
        "weather_rain": "La pluie commence à tomber",
        "weather_thunder": "L'orage se lève",
        "whitelist_add_failed": "Impossible d'ajouter %1$s à la liste approuvée",
        "whitelist_add_success": "%1$s a été ajouté(e) à la liste approuvée",
        "whitelist_description": "Gère la liste approuvée du serveur.",
        "whitelist_disabled": "Liste approuvée désactivée",
        "whitelist_enabled": "Liste approuvée activée",
        "whitelist_list": "Il y a %1$d joueur(s) (sur %2$d détecté(s)) dans la liste approuvée :",
        "whitelist_reloaded": "Liste approuvée rechargée depuis le fichier.",
        "whitelist_remove_failed": "Impossible de retirer %1$s de la liste approuvée",
        "whitelist_remove_success": "%1$s a été retiré(e) de la liste approuvée",
        "world_age_description": "Modifie ou renseigne sur l'âge du monde (temps écoulé depuis sa création).",
        "world_age_added": "Ajout effectué de %1$d à l'âge du monde",
        "world_age_query": "L'âge du monde est de %d",
        "world_age_set": "Régler l'âge du monde à %1$d",
        "worldborder_center_success": "Le centre de la bordure du monde a été défini aux coordonnées %1$s, %2$s",
        "worldborder_damage_amount_success": "La quantité de points de dégâts causés par la bordure du monde est passée de %2$s par bloc à %1$s par bloc",
        "worldborder_damage_buffer_success": "La distance de tampon de dégâts de la bordure du monde est passée de %2$s bloc(s) à %1$s bloc(s)",
        "worldborder_get_success": "La bordure du monde est actuellement de %1$s bloc(s) de large",
        "worldborder_set_success": "La taille de la bordure du monde est passée de %2$s bloc(s) de large à %1$s bloc(s) de large",
        "worldborder_setSlowly_grow_success": "Agrandissement de la bordure du monde de %2$s bloc(s) de large à %1$s blocs de large durant %3$s secondes",
        "worldborder_setSlowly_shrink_success": "Rétrécissement de la bordure du monde de %2$s blocs de large à %1$s bloc(s) de large durant %3$s secondes",
        "worldborder_warning_distance_success": "La distance d'avertissement de la bordure du monde est passée de %2$s bloc(s) à %1$s bloc(s)",
        "worldborder_warning_time_success": "Le temps d'avertissement de la bordure du monde est passé de %2$s seconde(s) de distance à %1$s seconde(s) de distance",
        "worldbuilder_description": "Changer le statut de constructeur de mondes du visiteur.",
        "worldbuilder_success": "Le statut de constructeur de mondes a changé pour %1$s",
        "wsserver_description": "Tente de se connecter au serveur WebSocket à l'URL indiquée.",
        "wsserver_invalid_url": "L'URL serveur indiquée n'est pas valide",
        "wsserver_request_existing": "Une autre demande de connexion est active",
        "wsserver_request_failed": "Impossible de se connecter au serveur : %1$s",
        "wsserver_success": "Connexion établie au serveur : %1$s",
        "xp_description": "Ajoute ou enlève de l’expérience à un joueur.",
        "xp_failure_widthdrawXp": "Impossible de donner des points d'expérience négatifs au joueur",
        "xp_success": "Don de %1$d point(s) d’expérience à %2$s",
        "xp_success_levels": "Don de %1$d niveau(x) à %2$s",
        "xp_success_negative_levels": "Retrait de %1$d niveau(x) à %2$s"
    },
    item:{
        "air": [
            "Air"
        ],
        "apple": [
            "Pomme"
        ],
        "golden_apple": [
            "Pomme dorée"
        ],
        "appleenchanted": [
            "Pomme enchantée"
        ],
        "armor_stand": [
            "Porte-armure"
        ],
        "arrow": [
            "Flèche"
        ],
        "tipped_arrow": [
            "Flèche pointue"
        ],
        "banner": [
            "Bannière noire",
            "Bannière noire",
            "Bannière rouge",
            "Bannière verte",
            "Bannière brune",
            "Bannière bleue",
            "Bannière violette",
            "Bannière de cyan",
            "Bannière gris pâle",
            "Bannière grise",
            "Bannière rose",
            "Bannière vert lime",
            "Bannière jaune",
            "Bannière bleu pâle",
            "Bannière magenta",
            "Bannière orange",
            "Bannière blanche"
        ],
        "bed": [
            "Lit",
            "Lit blanc",
            "Lit orange",
            "Lit magenta",
            "Lit bleu pâle",
            "Lit jaune",
            "Lit vert lime",
            "Lit rose",
            "Lit gris",
            "Lit gris pâle",
            "Lit cyan",
            "Lit violet",
            "Lit bleu",
            "Lit brun",
            "Lit vert",
            "Lit rouge",
            "Lit noir"
        ],
        "bell": [
            "Cloche"
        ],
        "steak": [
            "Steak"
        ],
        "beef": [
            "Bœuf cru"
        ],
        "beetroot": [
            "Betterave"
        ],
        "beetroot_soup": [
            "Soupe de betteraves"
        ],
        "blaze_powder": [
            "Poudre de Blaze"
        ],
        "blaze_rod": [
            "Bâton de Blaze"
        ],
        "boat": [
            "Bateau en chêne",
            "Bateau en chêne",
            "Bateau en sapin",
            "Bateau en bouleau",
            "Bateau en bois tropical",
            "Bateau en acacia",
            "Bateau en chêne noir"
        ],
        "bone": [
            "Os"
        ],
        "book": [
            "Livre"
        ],
        "chainmail_boots": [
            "Bottes de mailles"
        ],
        "leather_boots": [
            "Bottes en cuir"
        ],
        "diamond_boots": [
            "Bottes en diamant"
        ],
        "golden_boots": [
            "Bottes en or"
        ],
        "iron_boots": [
            "Bottes en fer"
        ],
        "bow": [
            "Arc"
        ],
        "bowl": [
            "Bol"
        ],
        "bread": [
            "Pain"
        ],
        "brewing_stand": [
            "Stand d'alchimie"
        ],
        "brick": [
            "Brique"
        ],
        "bucket": [
            "Seau"
        ],
        "bucketLava": [
            "Seau de lave"
        ],
        "bucketWater": [
            "Seau d'eau"
        ],
        "bucketFish": [
            "Seau de morue"
        ],
        "bucketSalmon": [
            "Seau de saumon"
        ],
        "bucketTropical": [
            "Seau de poisson tropical"
        ],
        "bucketPuffer": [
            "Seau de poisson-globe"
        ],
        "bucketCustomFish": [
            "Seau de"
        ],
        "tropicalColorWhite": [
            "Blanc"
        ],
        "tropicalColorOrange": [
            "Orange"
        ],
        "tropicalColorMagenta": [
            "Magenta"
        ],
        "tropicalColorSky": [
            "Bleu ciel"
        ],
        "tropicalColorYellow": [
            "Jaune"
        ],
        "tropicalColorLime": [
            "Vert lime"
        ],
        "tropicalColorRose": [
            "Rose"
        ],
        "tropicalColorGray": [
            "Gris"
        ],
        "tropicalColorSilver": [
            "Argent"
        ],
        "tropicalColorTeal": [
            "Sarcelle"
        ],
        "tropicalColorPlum": [
            "Prune"
        ],
        "tropicalColorBlue": [
            "Bleu"
        ],
        "tropicalColorBrown": [
            "Brun"
        ],
        "tropicalColorGreen": [
            "Vert"
        ],
        "tropicalColorRed": [
            "Rouge"
        ],
        "tropicalBodyKobSingle": [
            "Cabillaud %1$s"
        ],
        "tropicalBodySunstreakSingle": [
            "Poisson zébré %1$s"
        ],
        "tropicalBodySnooperSingle": [
            "Poisson fouineur %1$s"
        ],
        "tropicalBodyDasherSingle": [
            "Poisson tornade %1$s"
        ],
        "tropicalBodyBrinelySingle": [
            "Poisson de mer %1$s"
        ],
        "tropicalBodySpottySingle": [
            "Poisson à pois %1$s"
        ],
        "tropicalBodyFlopperSingle": [
            "Poisson feinteur %1$s"
        ],
        "tropicalBodyStripeySingle": [
            "Poisson rayé %1$s"
        ],
        "tropicalBodyGlitterSingle": [
            "Poisson scintillant %1$s"
        ],
        "tropicalBodyBlockfishSingle": [
            "Poisson-bloc %1$s"
        ],
        "tropicalBodyBettySingle": [
            "Poisson combattant %1$s"
        ],
        "tropicalBodyClayfishSingle": [
            "Poisson d'argile %1$s"
        ],
        "tropicalBodyKobMulti": [
            "Cabillaud %1$s-%2$s"
        ],
        "tropicalBodySunstreakMulti": [
            "Poisson zébré %1$s-%2$s"
        ],
        "tropicalBodySnooperMulti": [
            "Poisson fouineur %1$s-%2$s"
        ],
        "tropicalBodyDasherMulti": [
            "Poisson tornade %1$s-%2$s"
        ],
        "tropicalBodyBrinelyMulti": [
            "Poisson de mer %1$s-%2$s"
        ],
        "tropicalBodySpottyMulti": [
            "Poisson à pois %1$s-%2$s"
        ],
        "tropicalBodyFlopperMulti": [
            "Poisson feinteur %1$s-%2$s"
        ],
        "tropicalBodyStripeyMulti": [
            "Poisson rayé %1$s-%2$s"
        ],
        "tropicalBodyGlitterMulti": [
            "Poisson scintillant %1$s-%2$s"
        ],
        "tropicalBodyBlockfishMulti": [
            "Poisson-bloc %1$s-%2$s"
        ],
        "tropicalBodyBettyMulti": [
            "Poisson combattant %1$s-%2$s"
        ],
        "tropicalBodyClayfishMulti": [
            "Poisson d'argile %1$s-%2$s"
        ],
        "tropicalSchoolAnemone": [
            "Anémone"
        ],
        "tropicalSchoolBlackTang": [
            "Poisson-chirurgien noir"
        ],
        "tropicalSchoolBlueDory": [
            "Poisson-chirurgien bleu"
        ],
        "tropicalSchoolButterflyFish": [
            "Poisson papillon"
        ],
        "tropicalSchoolCichlid": [
            "Cichlidé"
        ],
        "tropicalSchoolClownfish": [
            "Poisson clown"
        ],
        "tropicalSchoolCottonCandyBetta": [
            "Betta barbe à papa"
        ],
        "tropicalSchoolDottyback": [
            "Pseudochromidae"
        ],
        "tropicalSchoolEmperorRedSnapper": [
            "Vivaneau bourgeois"
        ],
        "tropicalSchoolGoatfish": [
            "Rouget"
        ],
        "tropicalSchoolMoorishIdol": [
            "Zancle cornu"
        ],
        "tropicalSchoolOrnateButterfly": [
            "Poisson-papillon orné"
        ],
        "tropicalSchoolParrotfish": [
            "Poisson-perroquet"
        ],
        "tropicalSchoolQueenAngelFish": [
            "Poisson-ange royal"
        ],
        "tropicalSchoolRedCichlid": [
            "Cichlidé rouge"
        ],
        "tropicalSchoolRedLippedBlenny": [
            "Gonelle à la bouche rouge"
        ],
        "tropicalSchoolRedSnapper": [
            "Vivaneau rouge"
        ],
        "tropicalSchoolThreadfin": [
            "Barbur"
        ],
        "tropicalSchoolTomatoClown": [
            "Poisson-clown rouge"
        ],
        "tropicalSchoolTriggerfish": [
            "Baliste"
        ],
        "tropicalSchoolYellowTang": [
            "Poisson-chirurgien jaune"
        ],
        "tropicalSchoolYellowtailParrot": [
            "Poisson-perroquet à queue jaune"
        ],
        "cake": [
            "Gâteau"
        ],
        "camera": [
            "Appareil photo"
        ],
        "golden_carrot": [
            "Carotte dorée"
        ],
        "carrotOnAStick": [
            "Carotte sur un bâton"
        ],
        "warped_fungus_on_a_stick": [
            "Champignon altéré sur un bâton"
        ],
        "carrot": [
            "Carotte"
        ],
        "cauldron": [
            "Chaudron"
        ],
        "coal": [
            "Charbon",
            null,
            "Charbon de bois"
        ],
        "chainmail_chestplate": [
            "Cotte de mailles"
        ],
        "leather_chestplate": [
            "Tunique en cuir"
        ],
        "diamond_chestplate": [
            "Plastron en diamant"
        ],
        "golden_chestplate": [
            "Plastron en or"
        ],
        "iron_chestplate": [
            "Plastron en fer"
        ],
        "chorus_fruit": [
            "Chorus"
        ],
        "chorus_fruit_popped": [
            "Chorus éclaté"
        ],
        "cooked_beef": [
            "Bœuf cuit"
        ],
        "cooked_chicken": [
            "Poulet cuit"
        ],
        "cooked_porkchop": [
            "Côtelette de porc cuite"
        ],
        "chicken": [
            "Poulet cru"
        ],
        "clay_ball": [
            "Argile"
        ],
        "clock": [
            "Horloge"
        ],
        "comparator": [
            "Comparateur de redstone"
        ],
        "compass": [
            "Boussole"
        ],
        "lodestonecompass": [
            "Compas de magnétite"
        ],
        "cookie": [
            "Biscuit"
        ],
        "crossbow": [
            "Arbalète"
        ],
        "diamond": [
            "Diamant"
        ],
        "repeater": [
            "Répéteur de redstone"
        ],
        "acacia_door": [
            "Porte en acacia"
        ],
        "birch_door": [
            "Porte en bouleau"
        ],
        "dark_oak_door": [
            "Porte en chêne noir"
        ],
        "iron_door": [
            "Porte en fer"
        ],
        "jungle_door": [
            "Porte en bois tropical"
        ],
        "wooden_door": [
            "Porte en chêne"
        ],
        "spruce_door": [
            "Porte en sapin"
        ],
        "crimson_door": [
            "Porte carmin"
        ],
        "warped_door": [
            "Porte altérée"
        ],
        "dragon_breath": [
            "Souffle de dragon"
        ],
        "dye": [
            "Poche d'encre",
            "Poche d'encre",
            "Teinture rouge",
            "Teinture verte",
            "Fèves de cacao",
            "Lapis-lazuli",
            "Teinture violette",
            "Teinture cyan",
            "Teinture gris pâle",
            "Teinture grise",
            "Teinture rose",
            "Teinture vert lime",
            "Teinture jaune",
            "Teinture bleu pâle",
            "Teinture magenta",
            "Teinture orange",
            "Poudre d'os",
            "Teinture noire",
            "Teinture brune",
            "Teinture bleue",
            "Teinture blanche"
        ],
        "egg": [
            "Œuf"
        ],
        "elytra": [
            "Élytres"
        ],
        "emerald": [
            "Émeraude"
        ],
        "emptyMap": [
            "Carte vierge"
        ],
        "emptyLocatorMap": [
            "Localisateur de cartes vide"
        ],
        "emptyPotion": [
            "Bouteille d'eau"
        ],
        "enchanted_book": [
            "Livre enchanté"
        ],
        "end_crystal": [
            "Cristal de l'Ender"
        ],
        "end_rod": [
            "Barre de l'Ender"
        ],
        "ender_eye": [
            "Œil de l'Ender"
        ],
        "ender_pearl": [
            "Perle de l'Ender"
        ],
        "experience_bottle": [
            "Fiole d'expérience"
        ],
        "feather": [
            "Plume"
        ],
        "fermented_spider_eye": [
            "Œil d'araignée fermenté"
        ],
        "fireball": [
            "Charge de feu"
        ],
        "fireworks": [
            "Fusée de feu d'artifice"
        ],
        "fireworksCharge": [
            "Étoile de feu d'artifice"
        ],
        "clownfish": [
            "Poisson tropical"
        ],
        "cooked_fish": [
            "Morue cuite"
        ],
        "fish": [
            "Morue crue"
        ],
        "pufferfish": [
            "Poisson-globe"
        ],
        "cooked_salmon": [
            "Saumon cuit"
        ],
        "salmon": [
            "Saumon cru"
        ],
        "fishing_rod": [
            "Canne à pêche"
        ],
        "flint": [
            "Silex"
        ],
        "flint_and_steel": [
            "Briquet à silex"
        ],
        "flower_pot": [
            "Pot de fleurs"
        ],
        "frame": [
            "Cadre"
        ],
        "ghast_tear": [
            "Larme de Ghast"
        ],
        "glass_bottle": [
            "Bouteille en verre"
        ],
        "gold_nugget": [
            "Pépite d'or"
        ],
        "iron_nugget": [
            "Pépite de fer"
        ],
        "diamond_axe": [
            "Hache en diamant"
        ],
        "golden_axe": [
            "Hache en or"
        ],
        "iron_axe": [
            "Hache en fer"
        ],
        "stone_axe": [
            "Hache en pierre"
        ],
        "wooden_axe": [
            "Hache en bois"
        ],
        "chainmail_helmet": [
            "Casque de mailles"
        ],
        "leather_helmet": [
            "Calotte en cuir"
        ],
        "diamond_helmet": [
            "Casque en diamant"
        ],
        "golden_helmet": [
            "Casque en or"
        ],
        "iron_helmet": [
            "Casque en fer"
        ],
        "diamond_hoe": [
            "Houe en diamant"
        ],
        "golden_hoe": [
            "Houe en or"
        ],
        "iron_hoe": [
            "Houe en fer"
        ],
        "stone_hoe": [
            "Houe en pierre"
        ],
        "wooden_hoe": [
            "Houe en bois"
        ],
        "honey_bottle": [
            "Bouteille de miel"
        ],
        "honeycomb": [
            "Rayon de miel"
        ],
        "horsearmordiamond": [
            "Armure pour cheval en diamant"
        ],
        "horsearmorgold": [
            "Armure pour cheval en or"
        ],
        "horsearmoriron": [
            "Armure pour cheval en fer"
        ],
        "horsearmorleather": [
            "Armure pour cheval en cuir"
        ],
        "gold_ingot": [
            "Lingot d'or"
        ],
        "iron_ingot": [
            "Lingot de fer"
        ],
        "netherite_ingot": [
            "Lingot de netherite"
        ],
        "netherite_scrap": [
            "Fragment de netherite"
        ],
        "netherite_sword": [
            "Épée en netherite"
        ],
        "netherite_pickaxe": [
            "Pioche en netherite"
        ],
        "netherite_axe": [
            "Hache en netherite"
        ],
        "netherite_shovel": [
            "Pelle en netherite"
        ],
        "netherite_hoe": [
            "Houe en netherite"
        ],
        "netherite_boots": [
            "Bottes en netherite"
        ],
        "netherite_leggings": [
            "Jambières en netherite"
        ],
        "netherite_chestplate": [
            "Plastron en netherite"
        ],
        "netherite_helmet": [
            "Casque en netherite"
        ],
        "lead": [
            "Laisse"
        ],
        "leather": [
            "Cuir"
        ],
        "leaves": [
            "Feuilles",
            "Feuilles de chêne",
            "Feuilles de sapin",
            "Feuilles de bouleau",
            "Feuilles de bois tropical",
            "Feuilles d'acacia",
            "Feuilles de chêne noir"
        ],
        "chainmail_leggings": [
            "Jambières de mailles"
        ],
        "leather_leggings": [
            "Pantalon en cuir"
        ],
        "diamond_leggings": [
            "Jambières en diamant"
        ],
        "golden_leggings": [
            "Jambières en or"
        ],
        "iron_leggings": [
            "Jambières en fer"
        ],
        "nautilus_shell": [
            "Coque de nautile"
        ],
        "heart_of_the_sea": [
            "Au cœur de la mer"
        ],
        "magma_cream": [
            "Crème de magma"
        ],
        "map": [
            "Carte"
        ],
        "melon": [
            "Melon"
        ],
        "milk": [
            "Lait"
        ],
        "minecart": [
            "Wagonnet"
        ],
        "chest_minecart": [
            "Wagonnet de stockage"
        ],
        "command_block_minecart": [
            "Wagonnet avec bloc de commande"
        ],
        "minecartFurnace": [
            "Wagonnet à vapeur"
        ],
        "hopper_minecart": [
            "Wagonnet à entonnoir"
        ],
        "tnt_minecart": [
            "Wagonnet à TNT"
        ],
        "trident": [
            "Trident"
        ],
        "mushroom_stew": [
            "Ragoût de champignons"
        ],
        "muttoncooked": [
            "Mouton cuit"
        ],
        "muttonraw": [
            "Mouton cru"
        ],
        "name_tag": [
            "Étiquette"
        ],
        "netherbrick": [
            "Brique du Nether"
        ],
        "quartz": [
            "Quartz du Nether"
        ],
        "nether_wart": [
            "Verrues du Nether"
        ],
        "netherStar": [
            "Étoile du Nether"
        ],
        "painting": [
            "Peinture"
        ],
        "paper": [
            "Papier"
        ],
        "diamond_pickaxe": [
            "Pioche en diamant"
        ],
        "golden_pickaxe": [
            "Pioche en or"
        ],
        "iron_pickaxe": [
            "Pioche en fer"
        ],
        "stone_pickaxe": [
            "Pioche en pierre"
        ],
        "wooden_pickaxe": [
            "Pioche en bois"
        ],
        "porkchop_cooked": [
            "Côtelette de porc cuite"
        ],
        "porkchop": [
            "Côtelette de porc crue"
        ],
        "portfolio": [
            "Portefeuille"
        ],
        "potato": [
            "Patate"
        ],
        "baked_potato": [
            "Patate cuite"
        ],
        "poisonous_potato": [
            "Patate empoisonnée"
        ],
        "potion": [
            "Potion"
        ],
        "prismarine_crystals": [
            "Cristaux de prismarin"
        ],
        "prismarine_shard": [
            "Éclat de prismarin"
        ],
        "pumpkin_pie": [
            "Tarte à la citrouille"
        ],
        "cooked_rabbit": [
            "Lapin cuit"
        ],
        "rabbit_foot": [
            "Patte de lapin"
        ],
        "rabbit_hide": [
            "Peau de lapin"
        ],
        "rabbit": [
            "Lapin cru"
        ],
        "rabbit_stew": [
            "Ragoût de lapin"
        ],
        "record": [
            "Disque de musique"
        ],
        "redstone": [
            "Redstone"
        ],
        "reeds": [
            "Cannes à sucre"
        ],
        "kelp": [
            "Varech"
        ],
        "dried_kelp": [
            "Varech séché"
        ],
        "rotten_flesh": [
            "Chair putréfiée"
        ],
        "ruby": [
            "Rubis"
        ],
        "saddle": [
            "Selle"
        ],
        "wheat_seeds": [
            "Graines"
        ],
        "beetroot_seeds": [
            "Graines de betteraves"
        ],
        "melon_seeds": [
            "Graines de melon"
        ],
        "pumpkin_seeds": [
            "Graines de citrouille"
        ],
        "shears": [
            "Cisailles"
        ],
        "diamond_shovel": [
            "Pelle en diamant"
        ],
        "golden_shovel": [
            "Pelle en or"
        ],
        "iron_shovel": [
            "Pelle en fer"
        ],
        "stone_shovel": [
            "Pelle en pierre"
        ],
        "wooden_shovel": [
            "Pelle en bois"
        ],
        "sign": [
            "Panneau en chêne"
        ],
        "spruce_sign": [
            "Panneau en épinette"
        ],
        "birch_sign": [
            "Panneau en bouleau"
        ],
        "jungle_sign": [
            "Panneau en bois tropical"
        ],
        "acacia_sign": [
            "Panneau en acacia"
        ],
        "darkoak_sign": [
            "Panneau en chêne noir"
        ],
        "crimson_sign": [
            "Panneau carmin"
        ],
        "warped_sign": [
            "Panneau altéré"
        ],
        "skull": [
            "Crâne de squelette",
            "Crâne de squelette",
            "Crâne de squelette de Wither",
            "Tête de zombie",
            "Tête",
            "Tête de Creeper",
            "Tête de dragon"
        ],
        "slime_ball": [
            "Boule de gélatine"
        ],
        "snowball": [
            "Boule de neige"
        ],
        "speckled_melon": [
            "Melon scintillant"
        ],
        "spider_eye": [
            "Œil d'araignée"
        ],
        "stick": [
            "Bâton"
        ],
        "string": [
            "Fil"
        ],
        "sugar": [
            "Sucre"
        ],
        "gunpowder": [
            "Poudre à canon"
        ],
        "diamond_sword": [
            "Épée en diamant"
        ],
        "golden_sword": [
            "Épée en or"
        ],
        "iron_sword": [
            "Épée en fer"
        ],
        "stone_sword": [
            "Tailleur de pierre"
        ],
        "wooden_sword": [
            "Épée en bois"
        ],
        "wheat": [
            "Blé"
        ],
        "writable_book": [
            "Le livre et la plume"
        ],
        "written_book": [
            "Manuscrit"
        ],
        "glowstone_dust": [
            "Poudre lumineuse"
        ],
        "shield": [
            "Bouclier"
        ],
        "shulker_shell": [
            "Carapace de shulker"
        ],
        "totem": [
            "Totem d'immortalité"
        ],
        "turtle_helmet": [
            "Carapace de tortue"
        ],
        "turtle_shell_piece": [
            "Scutelle"
        ],
        "phantom_membrane": [
            "Membrane de revenant"
        ],
        "sweet_berries": [
            "Baies sucrées"
        ],
        "suspicious_stew": [
            "Ragoût suspect"
        ],
        "banner_pattern": [
            "Motif de bannière"
        ],
        "acaciaFence": [
            "Clôture en acacia"
        ],
        "acacia_fence_gate": [
            "Porte de clôture en acacia"
        ],
        "activator_rail": [
            "Rails déclencheurs"
        ],
        "allow": [
            "Autoriser"
        ],
        "deny": [
            "Refuser"
        ],
        "border_block": [
            "Bordure"
        ],
        "anvil": [
            "Enclume",
            "Enclume",
            null,
            null,
            null,
            "Enclume légèrement endommagée",
            null,
            null,
            null,
            "Enclume très endommagée"
        ],
        "barrier": [
            "Barrière"
        ],
        "beacon": [
            "Balise"
        ],
        "beehive": [
            "Ruche"
        ],
        "bee_nest": [
            "Nid d'abeilles"
        ],
        "target": [
            "Cible"
        ],
        "bedrock": [
            "Socle"
        ],
        "conduit": [
            "Tuyau"
        ],
        "invisibleBedrock": [
            "Lit invisible"
        ],
        "birchFence": [
            "Clôture en bouleau"
        ],
        "birch_fence_gate": [
            "Porte de clôture en bouleau"
        ],
        "blast_furnace": [
            "Haut fourneau"
        ],
        "bone_block": [
            "Bloc d'os"
        ],
        "coal_block": [
            "Bloc de charbon"
        ],
        "diamond_block": [
            "Bloc de diamant"
        ],
        "emerald_block": [
            "Bloc d'émeraude"
        ],
        "gold_block": [
            "Bloc d'or"
        ],
        "iron_block": [
            "Bloc de fer"
        ],
        "lapis_block": [
            "Bloc de lapis-lazuli"
        ],
        "redstone_block": [
            "Bloc de redstone"
        ],
        "bookshelf": [
            "Bibliothèque"
        ],
        "brick_block": [
            "Bloc de briques"
        ],
        "brown_mushroom": [
            "Champignon brun"
        ],
        "wooden_button": [
            "Bouton de chêne"
        ],
        "acacia_button": [
            "Bouton d'acacia"
        ],
        "birch_button": [
            "Bouton de bouleau"
        ],
        "dark_oak_button": [
            "Bouton de chêne noir"
        ],
        "jungle_button": [
            "Bouton de bois tropical"
        ],
        "spruce_button": [
            "Bouton de sapin"
        ],
        "stone_button": [
            "Bouton de pierre"
        ],
        "cactus": [
            "Cactus"
        ],
        "dried_kelp_block": [
            "Bloc de varech séché"
        ],
        "carved_pumpkin": [
            "Citrouille sculptée"
        ],
        "chest": [
            "Coffre"
        ],
        "ender_chest": [
            "Coffre de l'Ender"
        ],
        "jigsaw": [
            "Bloc casse-tête"
        ],
        "honey_block": [
            "Bloc de miel"
        ],
        "honeycomb_block": [
            "Bloc de rayon de miel"
        ],
        "lodestone": [
            "Magnétite"
        ],
        "nether_sprouts": [
            "Pousses du Nether"
        ],
        "crimson_stem": [
            "Tige carmin"
        ],
        "warped_stem": [
            "Tige altérée"
        ],
        "stripped_crimson_stem": [
            "Tige carmin dénudée"
        ],
        "stripped_warped_stem": [
            "Tige altérée dénudée"
        ],
        "crimson_hyphae": [
            "Hyphe carmin"
        ],
        "warped_hyphae": [
            "Hyphe altérée"
        ],
        "stripped_crimson_hyphae": [
            "Hyphe carmin dénudée"
        ],
        "stripped_warped_hyphae": [
            "Hyphe altérée dénudée"
        ],
        "crimson_planks": [
            "Planches carmin"
        ],
        "warped_planks": [
            "Planches altérées"
        ],
        "crimson_trapdoor": [
            "Trappe carmin"
        ],
        "warped_trapdoor": [
            "Trappe altérée"
        ],
        "crimson_standing_sign": [
            "Panneau carmin"
        ],
        "warped_standing_sign": [
            "Panneau altéré"
        ],
        "crimson_wall_sign": [
            "Panneau carmin"
        ],
        "warped_wall_sign": [
            "Panneau altéré"
        ],
        "crimson_stairs": [
            "Escaliers carmin"
        ],
        "warped_stairs": [
            "Escaliers altérés"
        ],
        "crimson_fence": [
            "Clôture carmin"
        ],
        "warped_fence": [
            "Clôture altérée"
        ],
        "crimson_fence_gate": [
            "Porte de clôture carmin"
        ],
        "warped_fence_gate": [
            "Porte de clôture altérée"
        ],
        "crimson_button": [
            "Bouton carmin"
        ],
        "warped_button": [
            "Bouton altéré"
        ],
        "crimson_pressure_plate": [
            "Plaque de pression carmin"
        ],
        "warped_pressure_plate": [
            "Plaque de pression altérée"
        ],
        "crimson_slab": [
            "Dalle carmin"
        ],
        "warped_slab": [
            "Dalle altérée"
        ],
        "crimson_double_slab": [
            "Dalle carmin"
        ],
        "warped_double_slab": [
            "Dalle altérée"
        ],
        "shroomlight": [
            "Champilampe"
        ],
        "crimson_nylium": [
            "Nylium carmin"
        ],
        "warped_nylium": [
            "Nylium altéré"
        ],
        "basalt": [
            "Basalte"
        ],
        "polished_basalt": [
            "Basalte poli"
        ],
        "blackstone": [
            "Roche noire"
        ],
        "polished_blackstone_bricks": [
            "Briques de roche noire polie"
        ],
        "cracked_polished_blackstone_bricks": [
            "Briques de roche noire polie craquelée"
        ],
        "polished_blackstone_brick_stairs": [
            "Escaliers en briques de roche noire polie"
        ],
        "blackstone_stairs": [
            "Escaliers en roche noire"
        ],
        "blackstone_wall": [
            "Mur de roche noire"
        ],
        "polished_blackstone_brick_wall": [
            "Mur en briques de roche noire polie"
        ],
        "chiseled_polished_blackstone": [
            "Briques de roche noire ciselée"
        ],
        "gilded_blackstone": [
            "Roche noire dorée"
        ],
        "blackstone_slab": [
            "Dalle de roche noire"
        ],
        "polished_blackstone_brick_slab": [
            "Dalle en briques de roche noire polie"
        ],
        "chain": [
            "Chaîne"
        ],
        "soul_soil": [
            "Terre des âmes"
        ],
        "soul_fire": [
            "Feu des âmes"
        ],
        "polished_blackstone": [
            "Roche noire polie"
        ],
        "polished_blackstone_stairs": [
            "Escaliers de roche noire polie"
        ],
        "polished_blackstone_slab": [
            "Dalle de roche noire polie"
        ],
        "polished_blackstone_pressure_plate": [
            "Plaque de pression en roche noire polie"
        ],
        "polished_blackstone_button": [
            "Bouton de roche noire polie"
        ],
        "polished_blackstone_wall": [
            "Mur de roche noire polie"
        ],
        "soul_campfire": [
            "Feu de camp des âmes"
        ],
        "chiseled_nether_bricks": [
            "Briques du Nether ciselées"
        ],
        "cracked_nether_bricks": [
            "Briques du Nether craquelées"
        ],
        "quartz_bricks": [
            "Briques de quartz"
        ],
        "trapped_chest": [
            "Coffre piégé"
        ],
        "shulkerBoxWhite": [
            "Boîte de Shulker blanche"
        ],
        "shulkerBoxOrange": [
            "Boîte de Shulker orange"
        ],
        "shulkerBoxMagenta": [
            "Boîte de Shulker magenta"
        ],
        "shulkerBoxLightBlue": [
            "Boîte de Shulker bleu pâle"
        ],
        "shulkerBoxYellow": [
            "Boîte de Shulker jaune"
        ],
        "shulkerBoxLime": [
            "Boîte de Shulker vert lime"
        ],
        "shulkerBoxPink": [
            "Boîte de Shulker rose"
        ],
        "shulkerBoxGray": [
            "Boîte de Shulker grise"
        ],
        "shulkerBoxSilver": [
            "Boîte de Shulker gris pâle"
        ],
        "shulkerBoxCyan": [
            "Boîte de Shulker cyan"
        ],
        "shulkerBoxPurple": [
            "Boîte de Shulker violette"
        ],
        "shulkerBoxBlue": [
            "Boîte de Shulker bleue"
        ],
        "shulkerBoxBrown": [
            "Boîte de Shulker brune"
        ],
        "shulkerBoxGreen": [
            "Boîte de Shulker verte"
        ],
        "shulkerBoxRed": [
            "Boîte de Shulker rouge"
        ],
        "shulkerBoxBlack": [
            "Boîte de Shulker noire"
        ],
        "shulkerBox": [
            "Boîte de Shulker"
        ],
        "chorus_flower": [
            "Fleur de chorus"
        ],
        "chorus_plant": [
            "Plante de chorus"
        ],
        "stained_glass": [
            "Verre blanc",
            "Verre blanc",
            "Verre orange",
            "Verre magenta",
            "Verre teinté bleu pâle",
            "Verre jaune",
            "Verre vert clair",
            "Verre rose",
            "Verre gris",
            "Verre gris clair",
            "Verre cyan",
            "Verre violet",
            "Verre bleu",
            "Verre marron",
            "Verre vert",
            "Verre rouge",
            "Verre noir"
        ],
        "stained_glass_pane": [
            "Vitre blanche",
            "Vitre blanche",
            "Vitre orange",
            "Vitre magenta",
            "Vitre teintée en verre bleu pâle",
            "Vitre jaune",
            "Vitre vert clair",
            "Vitre rose",
            "Vitre grise",
            "Vitre gris clair",
            "Vitre cyan",
            "Vitre violette",
            "Vitre bleue",
            "Vitre marron",
            "Vitre verte",
            "Vitre rouge",
            "Vitre noire"
        ],
        "clay": [
            "Bloc d'argile"
        ],
        "hardened_clay": [
            "Terre cuite"
        ],
        "stained_hardened_clay": [
            "Terre cuite",
            "Terre cuite blanche",
            "Terre cuite orange",
            "Terre cuite magenta",
            "Terre cuite bleu pâle",
            "Terre cuite jaune",
            "Terre cuite vert lime",
            "Terre cuite rose",
            "Terre cuite grise",
            "Terre cuite gris pâle",
            "Terre cuite cyan",
            "Terre cuite violette",
            "Terre cuite bleue",
            "Terre cuite brune",
            "Terre cuite verte",
            "Terre cuite rouge",
            "Terre cuite noire"
        ],
        "structure_block": [
            "Bloc de structure"
        ],
        "structure_void": [
            "Vide de structure"
        ],
        "wool": [
            "Laine",
            "Laine blanche",
            "Laine orange",
            "Laine magenta",
            "Laine bleu pâle",
            "Laine jaune",
            "Laine vert lime",
            "Laine rose",
            "Laine grise",
            "Laine gris pâle",
            "Laine cyan",
            "Laine violette",
            "Laine bleue",
            "Laine brune",
            "Laine verte",
            "Laine rouge",
            "Laine noire"
        ],
        "cobblestone_wall": [
            "Mur en pavé",
            "Mur en pavé",
            "Muret moussu",
            "Mur en granite",
            "Mur en diorite",
            "Mur en andésite",
            "Mur en grès",
            "Mur en briques",
            "Mur en briques de pierre",
            "Mur en briques de pierre moussue",
            "Mur en briques de pierre de l'End",
            "Mur en briques du Nether",
            "Mur en prismarin",
            "Mur en grès rouge",
            "Mur en briques du Nether rouges"
        ],
        "cocoa": [
            "Cacao"
        ],
        "command_block": [
            "Bloc de commande"
        ],
        "composter": [
            "Composteur"
        ],
        "light_block": [
            "Bloc de lumière"
        ],
        "repeating_command_block": [
            "Répétition du bloc de commande"
        ],
        "chain_command_block": [
            "Chaîne du bloc de commande"
        ],
        "darkOakFence": [
            "Clôture en chêne noir"
        ],
        "dark_oak_fence_gate": [
            "Porte de clôture en chêne noir"
        ],
        "daylight_detector": [
            "Capteur de lumière du jour"
        ],
        "deadbush": [
            "Buisson mort"
        ],
        "detector_rail": [
            "Rails détecteurs"
        ],
        "dirt": [
            "Terre",
            "Terre",
            "Saleté grossière"
        ],
        "podzol": [
            "Podzol"
        ],
        "purpur_block": [
            "Bloc de purpur",
            "Bloc de purpur",
            "Pierre pourpre ciselée",
            "Bloc de purpur sculpté"
        ],
        "dispenser": [
            "Distributeur"
        ],
        "doorWood": [
            "Porte en bois"
        ],
        "double_plant": [
            "Grandes plantes",
            "Tournesol",
            "Lilas",
            "Très hautes herbes",
            "Grande fougère",
            "Rosier",
            "Pivoines"
        ],
        "dragon_egg": [
            "Œuf de Dragon"
        ],
        "dropper": [
            "Droppeur"
        ],
        "enchanting_table": [
            "Table d'enchantement"
        ],
        "enderChest": [
            "Coffre Ender"
        ],
        "end_portal_frame": [
            "Portail de l'End"
        ],
        "farmland": [
            "Terre labourée"
        ],
        "fletching_table": [
            "Table d'archerie"
        ],
        "fence": [
            "Clôture en chêne"
        ],
        "fence_gate": [
            "Porte de clôture en chêne"
        ],
        "iron_bars": [
            "Barreaux en fer"
        ],
        "fire": [
            "Feu"
        ],
        "yellow_flower": [
            "Fleur",
            "Pissenlit"
        ],
        "red_flower": [
            "Fleur",
            "Coquelicot",
            "Orchidées bleues",
            "Allium",
            "Bleuets azurs",
            "Tulipe rouge",
            "Tulipe orange",
            "Tulipe blanche",
            "Tulipe rose",
            "Marguerite",
            "Centaurée bleuet",
            "Muguet"
        ],
        "wither_rose": [
            "Rose de Wither"
        ],
        "furnace": [
            "Fourneau"
        ],
        "glass": [
            "Verre"
        ],
        "golden_rail": [
            "Rails propulseurs"
        ],
        "grass": [
            "Bloc d'herbe"
        ],
        "grass_path": [
            "Chemin d'herbe"
        ],
        "gravel": [
            "Gravier"
        ],
        "hay_block": [
            "Botte de paille"
        ],
        "netherrack": [
            "Roche du Nether"
        ],
        "soul_sand": [
            "Sable des âmes"
        ],
        "hopper": [
            "Entonnoir"
        ],
        "ice": [
            "Glace"
        ],
        "packed_ice": [
            "Glace compactée"
        ],
        "blue_ice": [
            "Glace bleue"
        ],
        "iron_trapdoor": [
            "Trappe en fer"
        ],
        "jukebox": [
            "Jukebox"
        ],
        "jungleFence": [
            "Clôture en bois tropical"
        ],
        "jungle_fence_gate": [
            "Porte de clôture en bois tropical"
        ],
        "ladder": [
            "Échelle"
        ],
        "flowing_lava": [
            "Lave"
        ],
        "leaves2": [
            "Feuilles d'acacia",
            "Feuilles d'acacia",
            "Feuilles de chêne noir"
        ],
        "lever": [
            "Levier"
        ],
        "glowstone": [
            "Pierre lumineuse"
        ],
        "lit_pumpkin": [
            "Citrouille d'Halloween"
        ],
        "lockedchest": [
            "Coffre verrouillé"
        ],
        "log2": [
            "Tronc d'acacia",
            "Tronc d'acacia",
            "Tronc de chêne noir"
        ],
        "log": [
            "Tronc",
            "Tronc de chêne",
            "Tronc d'épinette",
            "Tronc de bouleau",
            "Tronc de bois tropical"
        ],
        "magma": [
            "Bloc de magma"
        ],
        "melon_block": [
            "Melon"
        ],
        "mob_spawner": [
            "Générateur de monstres"
        ],
        "monster_egg": [
            "Pierre infestée",
            "Pierre infestée",
            "Pavé infesté",
            "Brique de pierre infestée",
            "Brique de pierre moussue infestée",
            "Brique de pierre craquelée infestée",
            "Brique de pierre ciselée infestée"
        ],
        "mushroom": [
            "Champignon"
        ],
        "noteblock": [
            "Bloc sonore"
        ],
        "mycelium": [
            "Mycélium"
        ],
        "nether_brick": [
            "Bloc de briques du Nether"
        ],
        "red_nether_brick": [
            "Brique du Nether rouge"
        ],
        "nether_brick_fence": [
            "Clôture en briques du Nether"
        ],
        "quartz_ore": [
            "Minerai de quartz du Nether"
        ],
        "netherreactor": [
            "Cœur du réacteur du Nether"
        ],
        "nether_wart_block": [
            "Bloc de verrues du Nether"
        ],
        "warped_wart_block": [
            "Bloc de verrue altérée"
        ],
        "unlit_redstone_torch": [
            "Torche de redstone"
        ],
        "redstone_torch": [
            "Torche de redstone"
        ],
        "soul_torch": [
            "Torche des âmes"
        ],
        "obsidian": [
            "Obsidienne"
        ],
        "coal_ore": [
            "Minerai de charbon"
        ],
        "diamond_ore": [
            "Minerai de diamant"
        ],
        "emerald_ore": [
            "Minerai d'émeraude"
        ],
        "gold_ore": [
            "Minerai d'or"
        ],
        "iron_ore": [
            "Minerai de fer"
        ],
        "lapis_ore": [
            "Minerai de lapis-lazuli"
        ],
        "redstone_ore": [
            "Minerai de redstone"
        ],
        "oreRuby": [
            "Minerai de rubis"
        ],
        "observer": [
            "Observateur"
        ],
        "piston": [
            "Piston"
        ],
        "sticky_piston": [
            "Piston collant"
        ],
        "portal": [
            "Portail"
        ],
        "potatoes": [
            "Patates"
        ],
        "stone_pressure_plate": [
            "Plaque de pression en pierre"
        ],
        "wooden_pressure_plate": [
            "Plaque de pression en chêne"
        ],
        "acacia_pressure_plate": [
            "Plaque de pression en acacia"
        ],
        "birch_pressure_plate": [
            "Plaque de pression en bouleau"
        ],
        "dark_oak_pressure_plate": [
            "Plaque de pression en chêne noir"
        ],
        "jungle_pressure_plate": [
            "Plaque de pression en bois tropical"
        ],
        "spruce_pressure_plate": [
            "Plaque de pression en sapin"
        ],
        "prismarine": [
            "Prismarin",
            "Prismarin",
            "Briques de prismarin",
            "Prismarin sombre"
        ],
        "pumpkin": [
            "Citrouille"
        ],
        "pumpkin_stem": [
            "Tige de citrouille"
        ],
        "quartz_block": [
            "Bloc de quartz",
            "Bloc de quartz",
            "Bloc de quartz ciselé",
            "Bloc de pilier de quartz",
            "Bloc de quartz lisse"
        ],
        "rail": [
            "Rails"
        ],
        "red_mushroom": [
            "Champignon rouge"
        ],
        "crimson_fungus": [
            "Champignon carmin"
        ],
        "warped_fungus": [
            "Champignon altéré"
        ],
        "red_mushroom_block": [
            "Bloc de champignon rouge"
        ],
        "red_sandstone": [
            "Grès rouge",
            "Grès rouge",
            "Grès rouge ciselé",
            "Grès rouge taillé",
            "Grès rouge lisse"
        ],
        "redstone_wire": [
            "Poudre de redstone"
        ],
        "redstone_lamp": [
            "Lampe à redstone"
        ],
        "sand": [
            "Sable",
            "Sable",
            "Sable rouge"
        ],
        "sandstone": [
            "Grès",
            "Grès",
            "Grès ciselé",
            "Grès taillé",
            "Grès lisse"
        ],
        "sapling": [
            "Pousse de chêne",
            "Pousse de chêne",
            "Pousse d'épicéa",
            "Pousse de bouleau",
            "Pousse de bois tropical",
            "Pousse d'acacia",
            "Pousse de chêne noir"
        ],
        "seaLantern": [
            "Lanterne de mer"
        ],
        "standing_sign": [
            "Panneau"
        ],
        "spruce_standing_sign": [
            "Panneau en épinette"
        ],
        "birch_standing_sign": [
            "Panneau en bouleau"
        ],
        "jungle_standing_sign": [
            "Panneau en bois tropical"
        ],
        "acacia_standing_sign": [
            "Panneau en acacia"
        ],
        "darkoak_standing_sign": [
            "Panneau en chêne noir"
        ],
        "slime": [
            "Bloc de gélatine"
        ],
        "snow": [
            "Neige"
        ],
        "sponge": [
            "Éponge",
            "Éponge",
            "Éponge mouillée"
        ],
        "spruceFence": [
            "Clôture en sapin"
        ],
        "spruce_fence_gate": [
            "Porte de clôture en sapin"
        ],
        "brick_stairs": [
            "Escaliers en briques"
        ],
        "nether_brick_stairs": [
            "Escaliers en briques du Nether"
        ],
        "quartz_stairs": [
            "Escaliers en quartz"
        ],
        "smooth_quartz_stairs": [
            "Escaliers en quartz lisse"
        ],
        "red_sandstone_stairs": [
            "Escaliers en grès rouge"
        ],
        "sandstone_stairs": [
            "Escaliers en grès"
        ],
        "stone_stairs": [
            "Escaliers en pavé"
        ],
        "normal_stone_stairs": [
            "Escaliers en pierre"
        ],
        "stone_brick_stairs": [
            "Escaliers en briques de pierre"
        ],
        "oak_stairs": [
            "Escaliers en bois de chêne"
        ],
        "acacia_stairs": [
            "Escaliers en bois d'acacia"
        ],
        "birch_stairs": [
            "Escaliers en bois de bouleau"
        ],
        "dark_oak_stairs": [
            "Escaliers en bois de chêne noir"
        ],
        "jungle_stairs": [
            "Escaliers en bois tropical"
        ],
        "spruce_stairs": [
            "Escaliers en bois de sapin"
        ],
        "purpur_stairs": [
            "Escalier en purpur"
        ],
        "prismarine_stairs": [
            "Escaliers en prismarin"
        ],
        "dark_prismarine_stairs": [
            "Escaliers en prismarin sombre"
        ],
        "prismarine_bricks_stairs": [
            "Escaliers en briques de prismarin"
        ],
        "granite_stairs": [
            "Escaliers en granite"
        ],
        "diorite_stairs": [
            "Escaliers en diorite"
        ],
        "andesite_stairs": [
            "Escaliers en andésite"
        ],
        "polished_granite_stairs": [
            "Escaliers en granite poli"
        ],
        "polished_diorite_stairs": [
            "Escaliers en diorite polie"
        ],
        "polished_andesite_stairs": [
            "Escaliers en andésite polie"
        ],
        "mossy_stone_brick_stairs": [
            "Escaliers en briques de pierre moussue"
        ],
        "smooth_red_sandstone_stairs": [
            "Escaliers en grès rouge lisse"
        ],
        "smooth_sandstone_stairs": [
            "Escaliers en grès lisse"
        ],
        "end_brick_stairs": [
            "Escaliers en briques de pierre de l'End"
        ],
        "mossy_cobblestone_stairs": [
            "Escaliers en pavé moussu"
        ],
        "red_nether_brick_stairs": [
            "Escaliers en briques du Nether rouges"
        ],
        "smooth_stone": [
            "Pierre lisse"
        ],
        "standing_banner": [
            "Bannière",
            "Bannière noire",
            "Bannière rouge",
            "Bannière verte",
            "Bannière brune",
            "Bannière bleue",
            "Bannière violette",
            "Bannière cyan",
            "Bannière gris pâle",
            "Bannière grise",
            "Bannière rose",
            "Bannière vert lime",
            "Bannière jaune",
            "Bannière bleu pâle",
            "Bannière magenta",
            "Bannière orange",
            "Bannière"
        ],
        "stone": [
            "Pierre",
            "Pierre",
            "Granite",
            "Granite poli",
            "Diorite",
            "Diorite polie",
            "Andésite",
            "Andésite polie"
        ],
        "cobblestone": [
            "Pavé"
        ],
        "stonebrick": [
            "Briques de pierre",
            "Briques de pierre",
            "Briques de pierre moussue",
            "Pierre ciselée"
        ],
        "stonecutter": [
            "Scie à pierre"
        ],
        "stonecutter_block": [
            "Scie à pierre"
        ],
        "mossy_cobblestone": [
            "Pavé moussu"
        ],
        "double_stone_slab": [
            "Dalle en pierre",
            "Dalle en pierre",
            "Dalle de grès",
            "Dalle en bois",
            "Dalle de pavé",
            "Dalle de briques",
            "Dalle de briques de pierre",
            "Dalle de quartz",
            "Dalle de briques du Nether"
        ],
        "stone_slab": [
            "Dalle en pierre",
            "Dalle en pierre lisse",
            "Dalle de grès",
            "Dalle en bois",
            "Dalle de pavé",
            "Dalle de briques",
            "Dalle de briques de pierre",
            "Dalle de quartz",
            "Dalle de briques du Nether"
        ],
        "double_stone_slab2": [
            "Dalle de grès rouge",
            "Dalle de grès rouge"
        ],
        "stone_slab2": [
            "Dalle de grès rouge",
            "Dalle de grès rouge",
            "Dalle de purpur",
            "Dalles de prismarin",
            "Dalles de briques de prismarin",
            "Dalles de prismarin sombre",
            "Dalle en pavé moussu",
            "Dalle de grès lisse",
            "Dalle en briques du Nether rouges"
        ],
        "stone_slab3": [
            "Dalle en briques de pierre de l'End",
            "Dalle en briques de pierre de l'End",
            "Dalle de grès rouge lisse",
            "Dalle en andésite polie",
            "Dalle en andésite",
            "Dalle en diorite",
            "Dalle en diorite polie",
            "Dalle en granite",
            "Dalle en granite poli"
        ],
        "stone_slab4": [
            "Dalle en briques de pierre moussue",
            "Dalle en briques de pierre moussue",
            "Dalle en quartz lisse",
            "Dalle en pierre",
            "Dalle de grès taillé",
            "Dalle de grès rouge taillé"
        ],
        "coral_block": [
            "Bloc de corail tubulaire",
            "Bloc de corail tubulaire",
            "Bloc de corail cerveau",
            "Bloc de corail bulles",
            "Bloc de corail de feu",
            "Bloc de corail tétracoralliaire",
            "Bloc de corail tubulaire mort",
            "Bloc de corail cerveau mort",
            "Bloc de corail bulles mort",
            "Bloc de corail de feu mort",
            "Bloc de corail tétracoralliaire mort"
        ],
        "tallgrass": [
            "Herbe",
            "Herbe",
            "Fougère"
        ],
        "seagrass": [
            "Herbier marin",
            "Herbier marin"
        ],
        "sea_pickle": [
            "Concombre de mer"
        ],
        "turtle_egg": [
            "Œuf de tortue de mer"
        ],
        "coral": [
            "Corail tubulaire",
            "Corail tubulaire",
            "Corail cerveau",
            "Corail bulles",
            "Corail de feu",
            "Corail tétracoralliaire",
            "Corail tube mort",
            "Corail cerveau mort",
            "Corail bulles mort",
            "Corail de feu mort",
            "Corne de coraux morts"
        ],
        "coral_fan": [
            "Éventail de mer tubulaire",
            "Éventail de mer tubulaire",
            "Éventail de mer cerveau",
            "Éventail de mer bulles",
            "Éventail de mer de feu",
            "Éventail de mer tétracoralliaire"
        ],
        "coral_fan_dead": [
            "Éventail de mer tubulaire mort",
            "Éventail de mer tubulaire mort",
            "Éventail de mer cerveau mort",
            "Éventail de mer bulles mort",
            "Éventail de mer de feu mort",
            "Éventail de mer tétracoralliaire mort"
        ],
        "glass_pane": [
            "Panneau en verre"
        ],
        "tnt": [
            "TNT"
        ],
        "snow_layer": [
            "Neige haute"
        ],
        "torch": [
            "Torche"
        ],
        "trapdoor": [
            "Trappe en chêne"
        ],
        "acacia_trapdoor": [
            "Trappe en acacia"
        ],
        "birch_trapdoor": [
            "Trappe en bouleau"
        ],
        "dark_oak_trapdoor": [
            "Trappe en chêne noir"
        ],
        "jungle_trapdoor": [
            "Trappe en bois tropical"
        ],
        "spruce_trapdoor": [
            "Trappe en sapin"
        ],
        "tripWire": [
            "Fil de détente"
        ],
        "tripwire_hook": [
            "Crochet"
        ],
        "vine": [
            "Lianes"
        ],
        "weeping_vines": [
            "Lianes pleureuses"
        ],
        "twisting_vines": [
            "Lianes tordues"
        ],
        "flowing_water": [
            "Eau"
        ],
        "water": [
            "Eau"
        ],
        "waterlily": [
            "Nénuphar"
        ],
        "web": [
            "Toile d'araignée"
        ],
        "heavy_weighted_pressure_plate": [
            "Plaque de pression pondérée (lourd)"
        ],
        "light_weighted_pressure_plate": [
            "Plaque de pression pondérée (léger)"
        ],
        "end_stone": [
            "Pierre End"
        ],
        "end_bricks": [
            "Briques de pierre de l'Ender"
        ],
        "planks": [
            "Planches de bois",
            "Planches en bois de chêne",
            "Planches en bois de sapin",
            "Planches en bois de bouleau",
            "Planches en bois tropical",
            "Planches en bois d'acacia",
            "Planches en bois de chêne noir"
        ],
        "wooden_slab": [
            "Dalles en bois",
            "Dalle en bois de chêne",
            "Dalle en bois de sapin",
            "Dalle en bois de bouleau",
            "Dalle en bois tropical",
            "Dalle en bois d'acacia",
            "Dalle en bois de chêne noir"
        ],
        "carpet": [
            "Tapis",
            "Tapis noir",
            "Tapis rouge",
            "Tapis vert",
            "Tapis brun",
            "Tapis bleu",
            "Tapis violet",
            "Tapis cyan",
            "Tapis gris pâle",
            "Tapis gris",
            "Tapis rose",
            "Tapis vert lime",
            "Tapis jaune",
            "Tapis bleu pâle",
            "Tapis magenta",
            "Tapis orange",
            "Tapis blanc"
        ],
        "crafting_table": [
            "Établi"
        ],
        "white_glazed_terracotta": [
            "Terre cuite blanche émaillée",
            "Terre cuite blanche émaillée"
        ],
        "orange_glazed_terracotta": [
            "Terre cuite orange émaillée",
            "Terre cuite orange émaillée"
        ],
        "magenta_glazed_terracotta": [
            "Terre cuite magenta émaillée",
            "Terre cuite magenta émaillée"
        ],
        "light_blue_glazed_terracotta": [
            "Terre cuite bleu pâle émaillée",
            "Terre cuite bleu pâle émaillée"
        ],
        "yellow_glazed_terracotta": [
            "Terre cuite jaune émaillée",
            "Terre cuite jaune émaillée"
        ],
        "lime_glazed_terracotta": [
            "Terre cuite vert lime émaillée",
            "Terre cuite vert lime émaillée"
        ],
        "pink_glazed_terracotta": [
            "Terre cuite rose émaillée",
            "Terre cuite rose émaillée"
        ],
        "gray_glazed_terracotta": [
            "Terre cuite grise émaillée",
            "Terre cuite grise émaillée"
        ],
        "silver_glazed_terracotta": [
            "Terre cuite gris pâle émaillée",
            "Terre cuite gris pâle émaillée"
        ],
        "cyan_glazed_terracotta": [
            "Terre cuite cyan émaillée",
            "Terre cuite cyan émaillée"
        ],
        "purple_glazed_terracotta": [
            "Terre cuite violette émaillée",
            "Terre cuite violette émaillée"
        ],
        "blue_glazed_terracotta": [
            "Terre cuite bleue émaillée",
            "Terre cuite bleue émaillée"
        ],
        "brown_glazed_terracotta": [
            "Terre cuite brune émaillée",
            "Terre cuite brune émaillée"
        ],
        "green_glazed_terracotta": [
            "Terre cuite verte émaillée",
            "Terre cuite verte émaillée"
        ],
        "red_glazed_terracotta": [
            "Terre cuite rouge émaillée",
            "Terre cuite rouge émaillée"
        ],
        "black_glazed_terracotta": [
            "Terre cuite noire émaillée",
            "Terre cuite noire émaillée"
        ],
        "concrete": [
            "Béton blanc",
            "Béton blanc",
            "Béton orange",
            "Béton magenta",
            "Béton bleu pâle",
            "Béton jaune",
            "Béton vert lime",
            "Béton rose",
            "Béton gris",
            "Béton gris pâle",
            "Béton cyan",
            "Béton violet",
            "Béton bleu",
            "Béton brun",
            "Béton vert",
            "Béton rouge",
            "Béton noir"
        ],
        "glazedTerracottaWhite": [
            "Terre cuite blanche émaillée"
        ],
        "glazedTerracottaOrange": [
            "Terre cuite orange émaillée"
        ],
        "glazedTerracottaMagenta": [
            "Terre cuite magenta émaillée"
        ],
        "glazedTerracottaLightBlue": [
            "Terre cuite bleu pâle émaillée"
        ],
        "glazedTerracottaYellow": [
            "Terre cuite jaune émaillée"
        ],
        "glazedTerracottaLime": [
            "Terre cuite vert lime émaillée"
        ],
        "glazedTerracottaPink": [
            "Terre cuite rose émaillée"
        ],
        "glazedTerracottaGray": [
            "Terre cuite grise émaillée"
        ],
        "glazedTerracottaSilver": [
            "Terre cuite gris pâle émaillée"
        ],
        "glazedTerracottaCyan": [
            "Terre cuite cyan émaillée"
        ],
        "glazedTerracottaPurple": [
            "Terre cuite violette émaillée"
        ],
        "glazedTerracottaBlue": [
            "Terre cuite bleue émaillée"
        ],
        "glazedTerracottaBrown": [
            "Terre cuite brune émaillée"
        ],
        "glazedTerracottaGreen": [
            "Terre cuite verte émaillée"
        ],
        "glazedTerracottaRed": [
            "Terre cuite rouge émaillée"
        ],
        "glazedTerracottaBlack": [
            "Terre cuite noire émaillée"
        ],
        "concretePowder": [
            "Poudre de béton blanche",
            "Poudre de béton blanche",
            "Poudre de béton orange",
            "Poudre de béton magenta",
            "Poudre de béton bleu pâle",
            "Poudre de béton jaune",
            "Poudre de béton vert lime",
            "Poudre de béton rose",
            "Poudre de béton grise",
            "Poudre de béton gris pâle",
            "Poudre de béton cyan",
            "Poudre de béton violette",
            "Poudre de béton bleue",
            "Poudre de béton brune",
            "Poudre de béton verte",
            "Poudre de béton rouge",
            "Poudre de béton noire"
        ],
        "stripped_spruce_log": [
            "Tronc d'épinette écorcé"
        ],
        "stripped_dark_oak_log": [
            "Tronc de chêne noir écorcé"
        ],
        "stripped_birch_log": [
            "Tronc de bouleau écorcé"
        ],
        "stripped_jungle_log": [
            "Tronc de bois tropical écorcé"
        ],
        "stripped_oak_log": [
            "Tronc de chêne écorcé"
        ],
        "stripped_acacia_log": [
            "Tronc d'acacia écorcé"
        ],
        "bamboo": [
            "Bambou"
        ],
        "scaffolding": [
            "Échafaudage"
        ],
        "grindstone": [
            "Meule"
        ],
        "cartography_table": [
            "Table de cartographie"
        ],
        "lantern": [
            "Lanterne"
        ],
        "soul_lantern": [
            "Lanterne des âmes"
        ],
        "smoker": [
            "Fumoir"
        ],
        "smithing_table": [
            "Table de forge"
        ],
        "barrel": [
            "Tonneau"
        ],
        "campfire": [
            "Feu de camp"
        ],
        "loom": [
            "Métier à tisser"
        ],
        "lectern": [
            "Pupitre"
        ],
        "sweet_berry_bush": [
            "Buisson de baies sucrées"
        ],
        "wood": [
            "Bois de chêne",
            "Bois de chêne",
            "Bois d'épinette",
            "Bois de bouleau",
            "Bois tropical",
            "Bois d'acacia",
            "Bois de chêne noir",
            null,
            null,
            "Bois de chêne écorcé",
            "Bois d'épinette écorcé",
            "Bois de bouleau écorcé",
            "Bois tropical écorcé",
            "Bois d'acacia écorcé",
            "Bois de chêne noir écorcé"
        ],
        "netherite_block": [
            "Bloc de netherite"
        ],
        "ancient_debris": [
            "Débris antiques"
        ],
        "nether_gold_ore": [
            "Minerai d'or du Nether"
        ],
        "respawn_anchor": [
            "Ancre de réapparition"
        ],
        "crying_obsidian": [
            "Obsidienne pleureuse"
        ]
    }
};
freeze(lang_data);
export = lang_data;
