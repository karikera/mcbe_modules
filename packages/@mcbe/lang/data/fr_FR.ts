
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
    id: "fr_FR" as LangId,
    commands:{
        "ability_description": "Définir la capacité d'un joueur.",
        "ability_noability": "Aucune capacité nommée \"%1$s\" n'est disponible",
        "ability_granted": "Vous avez reçu la capacité \"%1$s\"",
        "ability_revoked": "La capacité \"%1$s\" vous a été retirée",
        "ability_success": "Capacité mise à jour",
        "achievement_alreadyHave": "Le joueur %1$s a déjà obtenu le succès %2$s",
        "achievement_description": "Donne ou enlève un succès au joueur.",
        "achievement_dontHave": "Le joueur %1$s n'a pas encore obtenu le succès %2$s",
        "achievement_give_success_all": "%1$s a obtenu tous les succès",
        "achievement_give_success_one": "%1$s a obtenu la statistique %2$s",
        "achievement_statTooLow": "Le joueur %1$s n'a pas obtenu la statistique %2$s",
        "achievement_take_success_all": "Tous les succès de %1$s ont été correctement retirés",
        "achievement_take_success_one": "La statistique %1$s a correctement été retirée de %2$s",
        "achievement_unknownAchievement": "Le succès ou la statistique \"%1$s\" est inconnue",
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
        "agent_getposition_success": "Agent getposition réussite",
        "agent_getposition_failed": "Agent getposition échec",
        "agent_inspect_success": "Agent - inspecter : réussite",
        "agent_inspect_failed": "Agent - inspecter : échec",
        "agent_inspectdata_success": "Agent - inspecter données : réussite",
        "agent_inspectdata_failed": "Agent - inspecter données : échec",
        "agent_move_success": "Agent - déplacer : réussite",
        "agent_move_failed": "Agent - déplacer : échec",
        "agent_outofrange": "Impossible de valider la commande : agent hors de portée",
        "agent_place_success": "Agent - placer : réussite",
        "agent_place_failed": "Agent - placer : échec",
        "agent_setitem_success": "Agent placer article réussite",
        "agent_setitem_failed": "L'agent n'est pas parvenu à placer l'article",
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
        "ban_description": "Ajoute un joueur à la liste des bannis.",
        "autocomplete_a": "tous les joueurs",
        "autocomplete_c": "mon Agent",
        "autocomplete_e": "toutes les entités",
        "autocomplete_p": "joueur le plus proche",
        "autocomplete_r": "joueur au hasard",
        "autocomplete_s": "soi-même",
        "autocomplete_v": "tous les Agents",
        "ban_failed": "Impossible de bannir le joueur %1$s",
        "ban_success": "Joueur %1$s banni",
        "banip_description": "Ajoute l'adresse IP à la liste des bannis.",
        "banip_invalid": "Vous avez entré une adresse IP invalide ou un joueur qui n'est pas connecté",
        "banip_success": "Adresse IP %1$s bannie",
        "banip_success_players": "Adresse IP %1$s appartenant à %2$s bannie",
        "banlist_ips": "Il y a un total de %1$s adresse(s) IP bannie(s) :",
        "banlist_players": "Il y a un total de %1$s joueur(s) banni(s) :",
        "blockdata_description": "Modifie les tags NBT d'un bloc.",
        "blockdata_placeFailed": "Vous ne pouvez pas placer des blocs ici",
        "blockdata_destroyFailed": "Vous ne pouvez pas creuser ici",
        "blockdata_failed": "Les données n'ont pas changé : %1$s",
        "blockdata_notValid": "Le bloc ciblé n'est pas un bloc supportant des données supplémentaires",
        "blockdata_outOfWorld": "Impossible de changer un bloc en dehors du monde",
        "blockdata_success": "Les données du bloc ont été mises à jour : %1$s",
        "blockdata_tagError": "L'analyse syntaxique des \"data tag\" a échoué : %1$s",
        "bossbar_add_success": "Barre de boss [%1$s] créée",
        "bossbar_add_failure_invalid": "ID de barre de boss non valide. Les ID doivent être de la forme : espace de noms:id ou id (espace de noms minecraft par défaut).",
        "bossbar_add_failure_exists": "Une barre de boss avec l'ID '%1$s' existe déjà",
        "bossbar_description": "Crée et modifie les barres de boss",
        "bossbar_get_max": "La barre de boss personnalisée [%1$s] a déjà un maximum de %2$d",
        "bossbar_get_players": "La barre de boss personnalisée [%1$s] a %2$s joueurs actuellement en ligne : %3$s",
        "bossbar_get_players_none": "La barre de boss personnalisée [%1$s] n'a pas de joueurs actuellement en ligne",
        "bossbar_get_players_one": "La barre de boss personnalisée [%1$s] a actuellement 1 joueur en ligne : %2$s",
        "bossbar_get_value": "La barre de boss personnalisée [%1$s] a une valeur de %2$d",
        "bossbar_get_visible_true": "La barre de boss personnalisée [%1$s] est actuellement affichée",
        "bossbar_get_visible_false": "La barre de boss personnalisée [%1$s] est actuellement masquée",
        "bossbar_list": "Il y a %1$s barres de boss personnalisées actives : %2$s",
        "bossbar_list_none": "Il n'y a pas de barre de boss personnalisée active",
        "bossbar_list_one": "Il y a une barre de boss personnalisée active : %1$s",
        "bossbar_notFound": "Il n'y a pas de barre de boss avec l'ID '%1$s'",
        "bossbar_remove": "Barre de boss [%1$s] supprimée",
        "change_setting_description": "Modifie un paramètre sur le serveur dédié en cours d'exécution.",
        "change_setting_success": "Vous avez modifié %1$s",
        "chunkinfo_compiled": "Le tronçon est compilé.",
        "chunkinfo_data": "Les 64 premiers vertex sont : %1$s",
        "chunkinfo_empty": "Le tronçon est vide.",
        "chunkinfo_hasLayers": "Le tronçon a les couches : %1$s",
        "chunkinfo_hasNoRenderableLayers": "Le tronçon n'a pas de couches qui peuvent être rendues.",
        "chunkinfo_isEmpty": "Le tronçon a des couches vides : %1$s",
        "chunkinfo_location": "Emplacement du tronçon : (%1$d, %2$d, %3$d)",
        "chunkinfo_noChunk": "Pas de tronçon trouvé à la position du tronçon %1$d, %2$d, %3$d",
        "chunkinfo_notCompiled": "Le tronçon n'est pas compilé.",
        "chunkinfo_notEmpty": "Le tronçon n'est pas vide.",
        "chunkinfo_vertices": "Le buffer de la couche %1$s contient %2$s vertex",
        "classroommode_description": "Tentative de lancement et de connexion au mode Classe.",
        "classroommode_success": "Tentative de lancement du mode Classe...",
        "clear_description": "Enlève les objets de l'inventaire du joueur.",
        "clear_failure": "Impossible de vider l'inventaire de %1$s car il ne contient aucun objet",
        "clear_failure_no_items": "Impossible de vider l'inventaire de %1$s car il ne contient aucun objet",
        "clear_success": "L'inventaire de %1$s a été vidé, supprimant %2$s objet(s)",
        "clear_tagError": "L'analyse syntaxique des \"data tag\" a échoué : %1$s",
        "clear_testing": "%1$s a %2$d objets qui correspondent au(x) critère(s)",
        "clearfixedinv_description": "Supprime tous les emplacements d'inventaire fixes.",
        "clearfixedinv_success": "Inventaire fixe vidé",
        "clone_description": "Clone les blocs d'un endroit vers un autre.",
        "clone_failed": "Aucun bloc copié",
        "clone_filtered_error": "Vous devez spécifier un bloc de filtre pour utiliser le filtrage",
        "clone_noOverlap": "La source et la destination ne peuvent pas se chevaucher",
        "clone_outOfWorld": "Impossible d'accéder aux blocs en dehors du monde",
        "clone_success": "%1$s blocs copiés",
        "clone_tooManyBlocks": "Trop de blocs dans la zone spécifiée (%1$d > %2$d)",
        "closechat_description": "Ferme la fenêtre de tchat ou le lecteur local si celui-ci est ouvert.",
        "closechat_success": "Tchat fermé",
        "closechat_failure": "Le tchat n'était pas ouvert",
        "closewebsocket_description": "Ferme la connexion WebSocket, le cas échéant.",
        "code_description": "Lancement de Code Builder.",
        "code_success": "Code Builder lancé.",
        "compare_failed": "La source et la destination ne sont pas identiques",
        "compare_outOfWorld": "Impossible d'accéder aux blocs en dehors du monde",
        "compare_success": "%1$d blocs comparés",
        "compare_tooManyBlocks": "Trop de blocs dans la zone spécifiée (%1$d > %2$d)",
        "corruptworld_description": "Corrompt le monde chargé sur le serveur.",
        "corruptworld_success": "Le monde a bien été corrompu.",
        "daylock_description": "Verrouille et déverrouille le cycle jour-nuit.",
        "debug_description": "Démarre ou arrête une session de débogage.",
        "debug_notStarted": "Impossible d'arrêter l'analyse si elle n'a pas commencé !",
        "debug_start": "Début du débogage",
        "debug_stop": "Le débogage s'est arrêté après %.2f secondes (%1$d ticks)",
        "defaultgamemode_description": "Définit le mode de jeu par défaut.",
        "defaultgamemode_success": "Désormais, le mode de jeu de ce monde par défaut est : %1$s",
        "deop_description": "Révoque le statut d'opérateur d'un joueur.",
        "deop_failed": "Impossible de révoquer le statut d'opérateur (niveau d'autorisation trop élevé) : %s",
        "deop_success": "%s a perdu ses privilèges d'opérateur",
        "deop_message": "Vous avez perdu vos privilèges d'opérateur",
        "difficulty_description": "Définit le niveau de difficulté.",
        "difficulty_usage": "/difficulty <new difficulty>",
        "difficulty_success": "La difficulté a été changée en %1$s",
        "downfall_success": "Inversion des intempéries",
        "effect_description": "Applique ou annule des effets.",
        "effect_failure_notActive": "Impossible de supprimer l'effet %1$s du joueur %2$s car il n'en a pas",
        "effect_failure_notActive_all": "Impossible de supprimer les effets du joueur %1$s car il n'en a pas",
        "effect_failure_notAMob": "Aucun effet ne peut être appliqué à %1$s",
        "effect_notFound": "Il n'y a pas de créature ayant pour ID %s",
        "effect_success": "Don de l'effet %1$s * %2$d à %3$s pendant %4$d secondes",
        "effect_success_removed": "Retrait de l'effet %1$s à %2$s",
        "effect_success_removed_all": "Retrait de tous les effets de %1$s",
        "enchant_cantCombine": "%1$s ne peut pas être combiné avec %2$s",
        "enchant_invalidLevel": "%1$s ne prend pas en charge le niveau %2$d",
        "enchant_cantEnchant": "L'enchantement sélectionné ne peut pas être ajouté à l'objet cible : %1$s",
        "enchant_description": "Ajoute un enchantement à l'objet sélectionné par un joueur.",
        "enchant_noItem": "La cible n'a pas d'objet en main : %1$s",
        "enchant_notFound": "Il n'y a pas d'enchantement avec l'ID %1$d",
        "enchant_success": "Enchantement réussi pour %1$s",
        "entitydata_description": "Modifie le tag NBT d'une entité.",
        "entitydata_failed": "Les données n'ont pas changé : %1$s",
        "entitydata_noPlayers": "%1$s est un joueur et ne peut pas être modifié",
        "entitydata_success": "Les données de l'entité ont été mises à jour : %1$s",
        "entitydata_tagError": "L'analyse syntaxique des \"data tag\" a échoué : %1$s",
        "execute_allInvocationsFailed": "Toutes les invocations ont échoué : \"%1$s\"",
        "execute_failed": "Impossible d'exécuter \"%1$s\" en tant que %2$s",
        "execute_description": "Exécute une commande au nom d'une ou plusieurs entités.",
        "fill_description": "Remplit une zone avec un bloc spécifique.",
        "fill_failed": "Aucun bloc n'a été placé",
        "fill_outOfWorld": "Impossible de placer des blocs en dehors du monde",
        "fill_success": "%1$d blocs placés",
        "fill_tagError": "L'analyse syntaxique des \"data tag\" a échoué : %1$s",
        "fill_tooManyBlocks": "Trop de blocs dans la zone spécifiée (%1$d > %2$d)",
        "fill_replace_auxvalue_invalid": "Valeur des données saisies invalide pour le bloc %1$s",
        "function_description": "Exécuter les commandes trouvées dans le fichier fonction correspondant.",
        "function_functionNameNotFound": "Fonction %1$s non trouvée.",
        "function_invalidCharacters": "La fonction avec le titre « %s » n'est pas valide. Le caractère « %s » n'est pas autorisé dans les noms de fonctions.",
        "function_noEngineVersionSpecified": "La fonction %s n'a pas pu être exécutée. Vous devez spécifier une valeur min_engine_version dans le fichier manifest.json du pack de comportements.",
        "function_success": "Les entrées de la fonction %1$d ont été exécutées avec succès.",
        "gamemode_description": "Définit le mode de jeu d'un joueur.",
        "gamemode_success_other": "Définir le mode de jeu de %2$s sur %1$s",
        "gamemode_success_self": "Définir son mode de jeu personnel sur %1$s",
        "gamemode_fail_invalid": "Mode de jeu \"%1$s\" non valide",
        "gamerule_description": "Définit ou interroge une valeur de règle de jeu.",
        "gamerule_type_invalid": "Type invalide utilisé pour la règle '%1$s'",
        "gamerule_type_nocheatsenabled": "La règle « %1$s » peut être utilisée uniquement lorsque les commandes de triche sont activées dans ce monde.",
        "gamerule_nopermission": "Seuls les propriétaires du serveur peuvent changer \"%1$s\"",
        "gamerule_norule": "Aucune règle nommée \"%1$s\" n'est disponible",
        "gamerule_success": "Règle %1$s actualisée en %2$s",
        "generic_async_initiated": "Commande \"%1$s\" lancée (étape asynchrone %2$d)",
        "generic_boolean_invalid": "\"%1$s\" n'est ni true ni false",
        "generic_chunk_notFound": "Tronçon spécifié introuvable",
        "generic_componentError": "Échec de l'analyse de la liste du composant",
        "generic_dimension_notFound": "Dimension spécifiée introuvable",
        "generic_disabled": "Les commandes de triche ne sont pas activées dans ce niveau.",
        "generic_disabled_templateLocked": "Les paramètres sont verrouillés. Déverrouillez les options de monde du modèle depuis le menu Paramètres de jeu pour les modifier.",
        "generic_double_tooBig": "La valeur que vous avez entrée (%.2f) est trop grande, elle doit être inférieure ou égale à %.2f",
        "generic_double_tooSmall": "Le nombre que vous avez entré (%.2f) est trop petit, il doit être supérieur ou égal à %.2f",
        "generic_duplicateType": "Dupliquer les arguments de type",
        "generic_duplicateSelectorArgument": "Dupliquer les arguments du sélecteur %s",
        "generic_encryption_badkey": "Clé publique donnée incorrecte. Clé de 120 octets attendue après le formatage PEM.",
        "generic_encryption_badsalt": "Mauvais Salt donné. 16 octets attendu avant l'encodage base 64.",
        "generic_encryption_required": "Session chiffrée requise",
        "generic_entity_invalidType": "Le type d'entité \"%1$s\" n'est pas valide",
        "generic_entity_invalidUuid": "Le format de l'UUID d'entité spécifié n'est pas valide",
        "generic_entity_notFound": "Cette entité est introuvable",
        "generic_exception": "Cette commande a échoué suite à une erreur inconnue",
        "generic_invalidAgentType": "Argument de type appliqué à un sélecteur \"Agent uniquement\"",
        "generic_invalidcontext": "Contexte invalide fourni pour le type de commande donné",
        "generic_invalidDevice": "La commande que vous avez saisie, %s, n'est pas prise en charge sur cet appareil",
        "generic_invalidPlayerType": "Argument de type appliqué à un sélecteur \"joueur uniquement\"",
        "generic_invalidType": "Type d'argument inconnu",
        "generic_levelError": "Le niveau max doit être supérieur au niveau min",
        "generic_malformed_body": "Corps manquant ou incorrect",
        "generic_malformed_type": "Type de requête non valide",
        "generic_notimplemented": "Non intégré",
        "generic_num_invalid": "\"%1$s\" n'est pas un nombre valide",
        "generic_num_tooBig": "Le nombre que vous avez entré (%1$d) est trop grand, il doit être inférieur ou égal à %2$d",
        "generic_num_tooSmall": "Le nombre que vous avez entré (%1$d) est trop petit, il doit être supérieur ou égal à %2$d",
        "generic_parameter_invalid": "\"%1$s\" n'est pas un paramètre valide",
        "generic_permission_selector": "<autorisations insuffisantes pour l'expansion du sélecteur>",
        "generic_player_notFound": "Le joueur n'a pas été trouvé",
        "generic_protocol_mismatch": "La version du protocole fournie ne correspond pas à celle de Minecraft",
        "generic_radiusError": "Le rayon minimum du sélecteur doit être inférieur au rayon maximum",
        "generic_radiusNegative": "Le rayon ne peut pas être négatif",
        "generic_rotationError": "Rotation hors de portée",
        "generic_running": "La commande est déjà en cours",
        "generic_step_failed": "Échec de l'étape de commande",
        "generic_syntax": "Erreur de syntaxe : élément inattendu « %2$s » : dans « %1$s>>%2$s<<%3$s »",
        "generic_noTargetMatch": "Aucune cible ne correspondait au sélecteur",
        "generic_targetNotPlayer": "Le sélecteur doit être de type \"joueur\"",
        "generic_tooManyNames": "Trop d'arguments de noms cibles",
        "generic_tooManyTargets": "Trop de cibles correspondent au sélecteur",
        "generic_too_many_requests": "Trop de commandes demandées, attendez que l'une aboutisse",
        "generic_unknown": "Commande inconnue : %s. Veuillez vérifier que la commande existe et que vous avez l'autorisation de l'utiliser.",
        "generic_usage": "Syntaxe : %1$s",
        "generic_usage_noparam": "Utilisation :",
        "generic_version_mismatch": "La version demandée n'existe pas pour cette commande",
        "generic_version_missing": "Les appels de commandes ne provenant pas du tchat doivent spécifier la version de la commande",
        "getchunkdata_description": "Renvoie les pixels d'un tronçon donné.",
        "getchunkdata_success": "Données de tronçon reçues",
        "getchunks_description": "Renvoie la liste des tronçons chargés.",
        "getchunks_success": "Liste des tronçons reçue",
        "getlocalplayername_description": "Renvoie le nom du joueur local.",
        "getspawnpoint_description": "Renvoie la position d'apparition du ou des joueurs spécifiés.",
        "gettopsolidblock_description": "Renvoie la position du bloc solide le plus haut en dessous de la position spécifiée",
        "gettopsolidblock_notfound": "Aucun bloc solide en dessous de la position spécifiée",
        "give_block_notFound": "Aucun bloc au nom de %1$d",
        "give_description": "Donne un objet à un joueur.",
        "give_item_invalid": "Syntaxe de commande invalide : %s n'existe pas avec cette valeur de données",
        "give_item_notFound": "Aucun objet au nom de %1$d",
        "give_map_invalidData": "Données de carte saisies invalides",
        "give_map_featureNotFound": "Impossible de créer une carte d'exploration. La fonctionnalité n'a pas été trouvée dans cette dimension",
        "give_success": "Don de l'effet %1$s * %2$d à %3$s",
        "give_successRecipient": "Vous avez reçu %1$s * %2$d",
        "give_tagError": "L'analyse syntaxique des \"data tag\" a échoué : %1$s",
        "help_description": "Affiche la liste des commandes disponibles.",
        "help_footer": "Astuce : utilisez la touche <tab> en tapant une commande pour compléter la commande ou ses paramètres automatiquement",
        "help_header": "--- Affichage de la page d'aide %1$d sur %2$d (/help <page>) ---",
        "help_command_aliases": "%s (aussi %s) :",
        "immutableworld_description": "Définit le statut immuable du monde.",
        "immutableworld_info": "immutableworld = %s",
        "kick_description": "Exclut un joueur du serveur.",
        "kick_description_edu": "Retire un joueur de la partie.",
        "kick_not_found": "Impossible de trouver le joueur %1$s",
        "kick_not_yourself": "Vous ne pouvez pas vous retirer de la partie.",
        "kick_success": "%1$s a été éjecté(e) du jeu",
        "kick_success_reason": "%1$s a été éjecté(e) du jeu : \"%2$s\"",
        "kick_success_reasonedu": "%1$s a été retiré de la partie : \"%2$s\"",
        "kick_no_host": "L'hôte ne peut pas être expulsé de la partie.",
        "kick_no_teacher": "Les enseignants ne peuvent pas être retirés de la partie.",
        "kill_successful_edu": "Retiré : %1$s",
        "kill_successful": "%1$s a été tué(e)",
        "kill_description_edu": "Retire toutes les entités (joueurs, créatures, etc.).",
        "kill_description": "Tue toutes les entités (joueurs, créatures, etc.).",
        "list_description": "Affiche la liste des joueurs en ligne.",
        "locate_description": "Affiche les coordonnées de la structure la plus proche pour un type donné.",
        "locate_fail_noplayer": "Cette commande n'est utilisable que par un lecteur valide",
        "locate_fail_nostructurefound": "Aucune structure valide trouvée dans cette dimension",
        "locate_success": "L'objet %1$s le plus proche est situé au bloc %2$s, (y?), %3$s",
        "togglecontentlog_toggle": "Activer/désactiver la commande de journalisation du contenu",
        "togglecontentlog_enabled": "Journalisation du contenu activée",
        "togglecontentlog_disabled": "Journalisation du contenu désactivée",
        "me_description": "Affiche un message à propos de vous.",
        "message_display_incoming": "%1$s vous chuchote : %2$s",
        "message_display_outgoing": "Vous chuchotez à %1$s : %2$s",
        "message_sameTarget": "Vous ne pouvez pas vous envoyer de message privé !",
        "mixer_description": "Commande d'interactivité Mixer",
        "mixer_error_unknown": "Une erreur Mixer inconnue est survenue.",
        "mixer_error_notoken": "Pour activer l'interactivité Mixer, vous devez vous connecter à un compte Microsoft.",
        "mixer_error_notsupported": "L'appareil que vous utilisez ne prend pas en charge l'interactivité Mixer.",
        "mixer_interactive_error": "Une erreur Mixer est survenue : %1$s",
        "mixer_scene_failed": "Il n'y a aucune scène nommée %1$s. Vérifiez que vous avez correctement saisi le nom de la scène.",
        "mixer_scene_success": "Scène renommée : %1$s",
        "mixer_start_success": "Démarrage de Mixer interactif : %1$s",
        "mixer_start_fail_invalidCode": "Impossible de trouver le projet avec l'ID « %1$s ». Assurez-vous que l'ID ou le code de partage est correct.",
        "mixer_stop_success": "L'interactivité Mixer s'est interrompue.",
        "mixer_stop_fail": "Aucune session interactive à arrêter.",
        "mixer_status_notinitialized": "L'interactivité n'est pas initialisée.",
        "mixer_status_enabled": "L'interactivité est activée.",
        "mixer_status_initializing": "L'interactivité est en cours d'initialisation.",
        "mixer_status_pending": "L'interactivité est en attente.",
        "mixer_status_disabled": "L'interactivité est désactivée.",
        "mixer_activatedbutton": "%1$s a activé %2$s.",
        "mobevent_description": "Contrôle les événements que les créatures peuvent exécuter.",
        "mobevent_eventsEnabledSetToTrue": "Les événements de créatures sont désormais activés. Les événements individuels réglés sur Faux ne seront pas exécutés.",
        "mobevent_eventsEnabledSetToFalse": "Les événements de créatures sont désormais désactivés. Les événements individuels ne seront pas exécutés.",
        "mobevent_eventsEnabledIsTrue": "Les événements de créatures sont activés. Les événements individuels réglés sur Faux ne seront pas exécutés.",
        "mobevent_eventsEnabledIsFalse": "Les événements de créatures sont désactivés. Les événements individuels ne seront pas exécutés.",
        "mobevent_eventSetToTrue": "Événement de créature %s (id : %s) défini sur Vrai.",
        "mobevent_eventSetToTrueButEventsDisabled": "Événement de créatures %s (id : %s) défini sur Vrai, mais les événements de créatures sont désactivés.",
        "mobevent_eventSetToFalse": "Événement de créatures %s (id : %s) défini sur Faux.",
        "mobevent_eventIsTrue": "L'événement de créatures %s (id : %s) est défini sur Vrai.",
        "mobevent_eventIsTrueButEventsDisabled": "L'événement de créatures %s (id : %s) est défini sur Vrai, mais les événements de créatures sont désactivés.",
        "mobevent_eventIsFalse": "L'événement de créatures %s (id : %s) est défini sur Faux.",
        "op_description": "Donne le statut d'opérateur à un joueur.",
        "op_failed": "Impossible de promouvoir %s au poste d'opérateur (déjà opérateur ou plus)",
        "op_success": "%s promu opérateur",
        "op_message": "Vous avez obtenu les privilèges d'opérateur",
        "origin_commandblock": "Bloc de commande",
        "origin_external": "Externe",
        "origin_devconsole": "Console de développement",
        "origin_script": "Moteur de scripts",
        "origin_server": "Serveur",
        "origin_teacher": "Enseignant",
        "ops_description": "Recharge et applique les autorisations d'opérateur.",
        "ops_reloaded": "Opérateurs rechargés depuis le fichier.",
        "ops_set_success": "Définition du niveau opérateur du joueur %s réussie.",
        "permissions_description": "Recharge et applique les permissions.",
        "permissions_reloaded": "Permissions rechargées depuis le fichier.",
        "permissions_set_failed": "Impossible de définir le niveau d'autorisation %s pour le joueur %s.",
        "permissions_set_success": "Définition du niveau d'autorisation %s pour le joueur %s réussie.",
        "permissions_save_failed": "Impossible d'enregistrer le niveau d'autorisation %s pour le joueur %s.",
        "permissions_save_success": "Enregistrement du niveau d'autorisation %s pour le joueur %s réussi.",
        "spawnParticleEmitter_description": "Crée un émetteur de particules",
        "particle_description": "Fait apparaître des particules.",
        "particle_notFound": "Nom d'effet inconnu (%1$s)",
        "particle_success": "L'effet %1$s apparaît %2$d fois",
        "players_list": "Il y a %1$d/%2$d joueur(s) connecté(s) :",
        "players_list_names": "%s",
        "playsound_description": "Joue un son.",
        "playsound_playerTooFar": "Le joueur %1$s est trop loin pour entendre le son",
        "playsound_success": "Son \"%1$s\" joué à %2$s",
        "position_description": "Active/désactive les coordonnées d'un joueur.",
        "publish_failed": "Impossible d'héberger le jeu local",
        "publish_started": "Jeu local hébergé sur le port %1$s",
        "querytarget_description": "Renvoie les informations Transformation, Nom et ID de l'entité ou des entités ciblées.",
        "querytarget_success": "Données cibles : %1$s",
        "reload_description": "Recharge tous les fichiers fonction de tous les packs de comportement.",
        "reload_success": "Les fichiers de fonctions existants ont été rechargés. Relancez Minecraft pour recharger les NOUVELLES fonctions.",
        "replaceitem_description": "Remplace les objets des inventaires.",
        "replaceitem_failed": "Impossible de remplacer l'emplacement %s %d par %d * %s",
        "replaceitem_keepFailed": "Un objet occupe déjà : emplacement %s %d.",
        "replaceitem_noContainer": "Le bloc en %s n'est pas un conteneur",
        "replaceitem_badSlotNumber": "Impossible de remplacer l'emplacement %d, il doit s'agir d'une valeur entre %d et %d.",
        "replaceitem_success": "L'emplacement %s %d a été remplacé par %d * %s",
        "replaceitem_success_entity": "L'emplacement %s %d de %s a été remplacé par %d * %s",
        "replaceitem_tagError": "L'analyse syntaxique des \"data tag\" a échoué : %1$s",
        "save_description": "Contrôle ou vérifie la sauvegarde des données de la partie sur le disque.",
        "save_disabled": "Sauvegarde automatique du monde désactivée",
        "save_enabled": "Sauvegarde automatique du monde activée",
        "save_failed": "Échec de la sauvegarde : %1$s",
        "save_start": "Sauvegarde...",
        "save_success": "Monde sauvegardé",
        "save_all_error": "Une erreur s'est produite en tentant de mettre le stockage de niveau en pause.",
        "save_all_success": "Données sauvegardées. Les fichiers sont maintenant prêts à être copiés.",
        "save_off_alreadyOff": "La sauvegarde automatique est déjà désactivée.",
        "save_on_alreadyOn": "La sauvegarde automatique est déjà activée.",
        "save_on_notDone": "Une sauvegarde précédente ne s'est pas terminée.",
        "save_on_description": "Permet la sauvegarde automatique du serveur.",
        "save_on_success": "Les modifications du niveau sont rétablies.",
        "save_state_description": "Vérifie si une précédente sauvegarde save-all a eu lieu et affiche la liste des fichiers concernés.",
        "say_description": "Envoie un message à d'autres joueurs via le tchat.",
        "scoreboard_description": "Suit et affiche les résultats de différents objectifs.",
        "scoreboard_allMatchesFailed": "Toutes les opérations ont échoué",
        "scoreboard_noMultiWildcard": "Un seul joker est autorisé",
        "scoreboard_objectiveNotFound": "Aucun objectif du nom de \"%1$s\" n'a été trouvé",
        "scoreboard_objectiveReadOnly": "L'objectif \"%1$s\" est en lecture seule et ne peut pas être défini",
        "scoreboard_objectives_add_alreadyExists": "Un objectif avec le nom \"%1$s\" existe déjà",
        "scoreboard_objectives_add_displayTooLong": "Le nom d'affichage \"%1$s\" est trop long pour un objectif, il peut contenir au maximum %2$d caractères",
        "scoreboard_objectives_add_success": "Un nouvel objectif \"%1$s\" a été ajouté avec succès",
        "scoreboard_objectives_add_tooLong": "Le nom \"%1$s\" est trop long pour un objectif, il peut contenir au maximum %2$d caractères",
        "scoreboard_objectives_add_wrongType": "Critère d'objectif invalide \"%1$s\"",
        "scoreboard_objectives_add_needName": "L'objectif doit être nommé.",
        "scoreboard_objectives_description": "Modifier le classement des objectifs.",
        "scoreboard_objectives_list_count": "Affichage de %1$d objectif(s) sur le tableau de score :",
        "scoreboard_objectives_list_empty": "Il n'y a pas d'objectif sur le tableau de score",
        "scoreboard_objectives_list_entry": "- %1$s : s'affiche en tant que \"%2$s\" et est de type \"%3$s\"",
        "scoreboard_objectives_remove_success": "L'objectif \"%1$s\" a été supprimé avec succès",
        "scoreboard_objectives_setdisplay_invalidSlot": "Aucun emplacement d'affichage appelé \"%1$s\"",
        "scoreboard_objectives_setdisplay_successCleared": "L'objectif à l'emplacement d'affichage \"%1$s\" a été supprimé",
        "scoreboard_objectives_setdisplay_successSet": "L'objectif dans l'emplacement \"%1$s\" a été défini à \"%2$s\"",
        "scoreboard_players_add_success": "Score de %1$d ajouté à [%2$s] pour %3$s (désormais : %4$d)",
        "scoreboard_players_add_multiple_success": "Score de %1$d ajouté à [%2$s] pour %3$d entités",
        "scoreboard_players_nameNotFound": "Le nom du joueur doit être indiqué.",
        "scoreboard_players_enable_noTrigger": "L'objectif %1$s n'est pas un déclencheur",
        "scoreboard_players_enable_success": "Déclencheur %1$s activé pour %2$s",
        "scoreboard_players_list_count": "Affichage de %1$d joueurs ciblés sur le tableau de score :",
        "scoreboard_players_list_empty": "Il n'y a pas de joueur ciblé sur le tableau de score",
        "scoreboard_players_list_player_count": "Affichage de %1$d objectif(s) ciblé(s) pour %2$s :",
        "scoreboard_players_list_player_empty": "Le joueur %1$s n'a aucun score enregistré",
        "scoreboard_players_list_player_entry": "- %2$s : %1$d (%3$s)",
        "scoreboard_players_operation_invalidOperation": "Opération invalide %1$s",
        "scoreboard_players_operation_notFound": "Pas de score %1$s trouvé pour %2$s",
        "scoreboard_players_operation_success": "[%1$s] mis à jour pour %2$d entités",
        "scoreboard_players_offlinePlayerName": "Joueur hors ligne",
        "scoreboard_players_random_invalidRange": "La valeur minimum %1$d est supérieure ou égale au maximum %2$d",
        "scoreboard_players_remove_success": "Score de %1$d supprimé de [%2$s] pour %3$s (désormais : %4$d)",
        "scoreboard_players_remove_multiple_success": "Score de %1$d supprimé de [%2$s] pour %3$d entités",
        "scoreboard_players_reset_success": "Scores du joueur %1$s réinitialisés",
        "scoreboard_players_resetscore_success": "Score %1$s du joueur %2$s réinitialisé",
        "scoreboard_players_set_success": "[%1$s] défini pour %2$s à %3$d",
        "scoreboard_players_set_multiple_success": "[%1$s] défini pour %2$d entités à %3$d",
        "scoreboard_players_set_tagError": "Impossible d'analyser le(s) dataTag, raison : %1$s",
        "scoreboard_players_set_tagMismatch": "Le dataTag ne correspond pas à %1$s",
        "scoreboard_players_score_notFound": "Pas de résultat %1$s trouvé pour %2$s",
        "scoreboard_players_test_failed": "Le score de %1$d n'est PAS dans l'intervalle %2$d à %3$d",
        "scoreboard_players_test_success": "Le score de %1$d est dans l'intervalle %2$d à %3$d",
        "scoreboard_teamNotFound": "Aucune équipe du nom de \"%1$s\" n'a été trouvée",
        "scoreboard_teams_add_alreadyExists": "Une équipe avec le nom \"%1$s\" existe déjà",
        "scoreboard_teams_add_displayTooLong": "Le nom d'affichage \"%1$s\" est trop long pour une équipe, il peut contenir au maximum %2$d caractères",
        "scoreboard_teams_add_success": "Une nouvelle équipe \"%1$s\" a été ajoutée avec succès",
        "scoreboard_teams_add_tooLong": "Le nom \"%1$s\" est trop long pour une équipe, il peut contenir au maximum %2$d caractères",
        "scoreboard_teams_empty_alreadyEmpty": "L'équipe %1$s est déjà vide, il est impossible de supprimer des joueurs inexistants",
        "scoreboard_teams_empty_success": "%1$d joueur(s) a/ont été supprimé(s) de l'équipe %2$s",
        "scoreboard_teams_join_failure": "Impossible d'ajouter %1$d joueur(s) à l'équipe %2$s : %3$s",
        "scoreboard_teams_join_success": "%1$d joueur(s) a/ont été ajouté(s) à l'équipe %2$s : %3$s",
        "scoreboard_teams_leave_failure": "Impossible de supprimer %1$d joueur(s) de leur(s) équipe(s) : %2$s",
        "scoreboard_teams_leave_noTeam": "Vous n'êtes dans aucune équipe",
        "scoreboard_teams_leave_success": "%1$d joueur(s) a/ont été supprimé(s) de son/leur équipe : %2$s",
        "scoreboard_teams_list_count": "Affichage de %1$d équipes sur le tableau de score :",
        "scoreboard_teams_list_empty": "Il n'y a aucune équipe inscrite sur le tableau de score",
        "scoreboard_teams_list_entry": "- %1$s : \"%2$s\" a %3$d joueurs",
        "scoreboard_teams_list_player_count": "Affichage de %1$d joueur(s) dans l'équipe %2$s :",
        "scoreboard_teams_list_player_empty": "L'équipe %1$s ne comporte aucun joueur",
        "scoreboard_teams_list_player_entry": "- %2$s : %1$d (%3$s)",
        "scoreboard_teams_option_noValue": "Les valeurs valides pour l'option %1$s sont : %2$s",
        "scoreboard_teams_option_success": "L'option %1$s pour l'équipe %2$s a été définie à %3$s",
        "scoreboard_teams_remove_success": "L'équipe %1$s a été supprimée",
        "seed_success": "Graine : %1$s",
        "setblock_description": "Remplace un bloc par un autre.",
        "setblock_failed": "Impossible de placer le bloc",
        "setblock_noChange": "Le bloc n'a pas pu être placé",
        "setblock_notFound": "Il n'y a pas de bloc ayant pour ID/nom %1$s",
        "setblock_outOfWorld": "Impossible de placer le bloc en dehors du monde",
        "setblock_success": "Bloc placé",
        "setblock_tagError": "L'analyse syntaxique des \"data tag\" a échoué : %1$s",
        "setidletimeout_success": "Le délai d'inactivité a été défini à %1$d minutes avec succès.",
        "setfixedinvslots_description": "Définit le nombre d'emplacements d'inventaire fixes pour le serveur.",
        "setfixedinvslots_success": "Nombre d'emplacements d'inventaire fixes défini à %1$d",
        "setfixedinvslot_description": "Assigne un emplacement fixe à un objet spécifié.",
        "setfixedinvslot_success": "Emplacement d'inventaire fixe %1$d assigné à %2$s",
        "globalpause_description": "Définir ou obtenir l'état Pause du jeu pour tous les joueurs.",
        "globalpause_success": "État Pause défini ou obtenu",
        "setmaxplayers_description": "Définit le nombre maximum de joueurs pour cette session de jeu.",
        "setmaxplayers_success": "Nombre de joueurs maximum défini à %1$d",
        "setmaxplayers_success_upperbound": "(Limité au nombre maximum de connexions autorisées)",
        "setmaxplayers_success_lowerbound": "(Limité au nombre actuel de joueurs)",
        "setworldspawn_description": "Définit le point d'apparition du monde.",
        "setworldspawn_success": "Définir le point d'apparition du monde : (%1$d, %2$d, %3$d)",
        "setworldspawn_wrongDimension": "L'apparition de monde ne peut pas être définie dans cette dimension",
        "spawnpoint_success_single": "Définir le point d'apparition de %1$s en (%2$d, %3$d, %4$d)",
        "spawnpoint_description": "Définit le point d'apparition d'un joueur.",
        "spawnpoint_success_multiple_specific": "Définir le point d'apparition pour %1$s en (%2$d, %3$d, %4$d)",
        "spawnpoint_success_multiple_generic": "Point d'apparition défini pour %1$s",
        "spawnpoint_wrongDimension": "Le point d'apparition ne peut pas être défini dans cette dimension",
        "spreadplayers_description": "Téléporte les entités dans des endroits aléatoires.",
        "spreadplayers_failure_players": "Impossible de disperser %1$s joueurs autour de %2$s,%3$s (trop de joueurs pour l'espace - essayez de ne pas dépasser %4$s)",
        "spreadplayers_failure_teams": "Impossible de disperser %1$s équipes autour de %2$s,%3$s (trop de joueurs pour l'espace - essayez de ne pas dépasser %4$s)",
        "spreadplayers_info_players": "(La distance moyenne entre les joueurs est de %1$s blocs après %2$s itérations)",
        "spreadplayers_info_teams": "(La distance moyenne entre les équipes est de %1$s blocs après %2$s itérations)",
        "spreadplayers_spreading_players": "Dispersion de %1$s joueurs à %2$s blocs autour de %3$s,%4$s (min %5$s blocs de distance)",
        "spreadplayers_spreading_teams": "Dispersion de %1$s équipes à %2$s blocs autour de %3$s,%4$s (min %5$s blocs de distance)",
        "spreadplayers_success_players": "Dispersion avec succès de %1$s joueurs autour de %2$s,%3$s",
        "spreadplayers_success_teams": "Dispersion avec succès de %1$s équipes autour de %2$s,%3$s",
        "stats_cleared": "%1$s statistiques effacées",
        "stats_failed": "Paramètres invalides",
        "stats_noCompatibleBlock": "Le bloc en %1$d, %2$d, %3$d ne peut pas suivre de statistiques",
        "stats_success": "Enregistrement de la statistique %1$s dans %2$s sur %3$s",
        "stop_description": "Arrête le serveur.",
        "stop_start": "Arrêt du serveur",
        "stopsound_description": "Arrête un son.",
        "stopsound_success": "Coupe le son %s pour %s",
        "stopsound_success_all": "Coupe tous les sons pour %s",
        "summon_description": "Fait apparaître une entité.",
        "summon_failed": "Impossible d'invoquer l'entité",
        "summon_outOfWorld": "Impossible d'invoquer l'entité en dehors du monde",
        "summon_success": "Entité invoquée avec succès",
        "summon_tagError": "L'analyse syntaxique des \"data tag\" a échoué : %1$s",
        "tag_description": "Gère les étiquettes contenues dans les entités.",
        "tag_add_failed": "La cible a déjà l'étiquette ou a trop d'étiquettes",
        "tag_add_success_single": "Étiquette \"%1$s\" ajoutée à %2$s",
        "tag_add_success_multiple": "Étiquette '%1$s' ajoutée à %2$d entités",
        "tag_list_single_empty": "%s n'a pas d'étiquette",
        "tag_list_single_success": "%1$s a %2$d étiquettes : %3$s",
        "tag_list_multiple_empty": "Les %d entités n'ont pas d'étiquette",
        "tag_list_multiple_success": "Les %1$d entités ont un total de %2$d étiquettes : %3$s",
        "tag_remove_failed": "La cible n'a pas cette étiquette",
        "tag_remove_success_single": "Étiquette '%1$s' retirée de %2$s",
        "tag_remove_success_multiple": "Étiquette '%1$s' retirée de %2$d entités",
        "tell_description": "Envoie un message à un ou plusieurs joueurs.",
        "tellraw_description": "Envoie un message JSON aux joueurs.",
        "tellraw_jsonException": "Message json non valide : %1$s",
        "tellraw_jsonStringException": "Chaîne de données json non valide.",
        "tellraw_error_noData": "Aucune donnée fournie.",
        "tellraw_error_notArray": "L'objet en texte brut doit contenir un tableau. Exemple : \"rawtext\":[{..}]",
        "tellraw_error_textNotString": "Le champ de texte en texte brut doit contenir une chaîne. Exemple : \"rawtext\":[{\"text\": \"text to display\"}]",
        "tellraw_error_translateNotString": "Le champ de traduction en texte brut doit une clé de langue. Exemple : \"rawtext\":[{\"translate\": \"gui.ok\"}]",
        "tellraw_error_withNotArrayOrRawText": "le champ « avec » en texte brut doit contenir un tableau ou un autre objet en texte brut. Exemple 1 : \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Exemple 2 : \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
        "tellraw_error_itemIsNotObject": "La valeur JSON en texte brut dans le tableau ne doit pas être un objet. Exemple : \"rawtext\": [{ \"text\" : \"my text\" }]",
        "educlientinfo_description": "Obtenir l'ID client et le statut de l'hôte. Conçu pour le MC.",
        "testfor_description": "Compte les entités (joueurs, créatures, objets, etc.) qui correspondent aux conditions indiquées.",
        "testfor_failure": "%1$s ne correspond pas à la structure de données requise",
        "testfor_success": "%1$s trouvé(e)(s)",
        "testfor_tagError": "L'analyse syntaxique des \"data tag\" a échoué : %1$s",
        "testforblock_description": "Teste si un bloc se trouve dans un endroit spécifié.",
        "testforblock_failed_data": "Le bloc aux coordonnées %1$d, %2$d, %3$d ne correspondait pas au statut de bloc attendu.",
        "testforblock_failed_nbt": "Le bloc aux coordonnées %1$d, %2$d, %3$d n'a pas les clés NBT requises.",
        "testforblock_failed_tile": "Le bloc aux coordonnées %1$d, %2$d, %3$d est %4$s (attendu : %5$s)",
        "testforblock_failed_tileEntity": "Le bloc aux coordonnées %1$d, %2$d, %3$d n'est pas une entité de bloc et ne peut supporter la correspondance de valeur.",
        "testforblock_outOfWorld": "Impossible de tester un bloc situé en dehors du monde",
        "testforblock_success": "Le bloc a bien été trouvé aux coordonnées %1$d, %2$d, %3$d",
        "testforblocks_description": "Teste si les blocs de deux zones correspondent.",
        "tickingarea_description": "Ajouter, supprimer ou afficher les zones persistantes.",
        "tickingarea_inuse": "Zones persistantes utilisées : %1$d/%2$d.",
        "tickingarea_noneExist_currentDimension": "Il n'y a aucune zone persistante dans la dimension actuelle.",
        "tickingarea_add_bounds_success": "Zone persistante ajoutée de %1$d à %2$d.",
        "tickingarea_add_circle_success": "Zone persistante ajoutée et centrée en %1$d avec un rayon de %2$d tronçons.",
        "tickingarea_add_failure": "Le nombre maximal de zones persistantes (%1$d) a déjà été atteint. Impossible d'ajouter des zones supplémentaires.",
        "tickingarea_add_conflictingname": "Il y existe déjà une zone persistante avec le nom %1$s.",
        "tickingarea_add_chunkfailure": "La zone persistante contient plus de %1$d tronçons, elle est trop grande et ne peut être créée.",
        "tickingarea_add_radiusfailure": "Le rayon ne peut pas être supérieur à %1$d. La zone persistante est trop grande et ne peut être créée.",
        "tickingarea_remove_success": "Zone(s) persistante(s) supprimée(s)",
        "tickingarea_remove_failure": "Il n'existe aucune zone persistante avec la position de bloc %1$d dans la dimension actuelle.",
        "tickingarea_remove_byname_failure": "Il n'existe aucune zone persistante avec le nom %1$s dans la dimension actuelle.",
        "tickingarea_remove_all_success": "Zone(s) persistante(s) supprimée(s)",
        "tickingarea_remove_all_failure": "Il n'y a aucune zone persistante dans la dimension actuelle.",
        "tickingarea_list_chunks": "tronçons",
        "tickingarea_list_circle_radius": "Rayon",
        "tickingarea_list_success_currentDimension": "Affichage de toutes les zones persistantes de la dimension actuelle",
        "tickingarea_list_success_allDimensions": "Affichage de toutes les zones persistantes pour l'ensemble des dimensions",
        "tickingarea_list_failure_allDimensions": "Il n'y a aucune zone persistante dans l'ensemble des dimensions.",
        "tickingarea_list_to": "vers",
        "tickingarea_list_type_circle": "Cercle",
        "time_added": "Heure avancée de %1$d",
        "time_description": "Modifie ou affiche l'heure du monde du jeu.",
        "time_disabled": "Jour éternel est activé dans ce niveau.",
        "time_query_day": "Le jour est %d",
        "time_query_daytime": "L'heure de la journée est %d",
        "time_query_gametime": "L'heure du jeu est %d",
        "time_set": "Heure fixée à %1$d",
        "time_stop": "Heure %1$s",
        "title_description": "Contrôle les titres sur l'écran.",
        "title_success": "La commande a été exécutée avec succès",
        "titleraw_description": "Contrôle les titres sur l'écran avec des messages JSON.",
        "toggledownfall_description": "Inverse la météo.",
        "tp_description": "Téléporte des entités (joueurs, créatures, etc.).",
        "tp_notSameDimension": "Impossible d'effectuer la téléportation car les joueurs ne sont pas dans la même dimension",
        "tp_outOfWorld": "Impossible de téléporter les entités en dehors du monde",
        "tp_permission": "Vous n'avez pas la permission d'utiliser cette commande slash.",
        "tp_safeTeleportFail": "Impossible de téléporter %1$s vers %2$s, car les blocs de la zone ne sont pas dégagés.",
        "tp_far": "Impossible de téléporter %1$s vers la zone non chargée %2$s",
        "tp_success": "%1$s s'est fait téléporter vers %2$s",
        "tp_successVictim": "Vous venez de vous téléporter à %1$s",
        "tp_success_coordinates": "%1$s s'est fait téléporter vers %2$s, %3$s, %4$s",
        "transferserver_description": "Transfert un joueur vers un autre serveur.",
        "transferserver_successful": "Joueur transféré",
        "transferserver_invalid_port": "Port non valide (0-65535)",
        "trigger_description": "Définit un déclencheur à activer.",
        "trigger_disabled": "Le déclencheur %1$s n'est pas activé",
        "trigger_invalidMode": "Mode du déclencheur non valide %1$s",
        "trigger_invalidObjective": "Nom de déclencheur invalide %1$s",
        "trigger_invalidPlayer": "Seuls les joueurs peuvent utiliser la commande /trigger",
        "trigger_success": "Le déclencheur %1$s a été changé avec %2$s %3$s",
        "unban_failed": "Impossible de débannir le joueur %1$s",
        "unban_success": "Joueur %1$s débanni",
        "unbanip_invalid": "Vous avez entré une adresse IP invalide",
        "unbanip_success": "Adresse IP %1$s débannie",
        "validategamelighting_description": "Valider l'éclairage en jeu pour une région spécifiée",
        "validategamelighting_checkRegionTooBig": "Vérifier la région, car l'éclairage est trop important ! (%1$d > %2$d)",
        "validategamelighting_outOfWorld": "Impossible de vérifier l'éclairage en dehors du monde",
        "weather_clear": "Changement pour un ciel dégagé",
        "weather_description": "Définit la météo.",
        "weather_disabled": "Cycle météorologique n'est pas activé dans ce niveau.",
        "weather_query": "La météo est définie sur : %s",
        "weather_query_clear": "clair",
        "weather_query_rain": "pluie",
        "weather_query_thunder": "orage",
        "weather_rain": "Changement pour un temps pluvieux",
        "weather_thunder": "Changement pour de la pluie et de l'orage",
        "whitelist_add_failed": "Impossible d'ajouter %1$s à la liste blanche",
        "whitelist_add_success": "%1$s a été ajouté(e) à la liste blanche",
        "whitelist_description": "Gérer la liste blanche du serveur.",
        "whitelist_disabled": "Liste blanche désactivée",
        "whitelist_enabled": "Liste blanche activée",
        "whitelist_list": "Il y a %1$d joueur(s) (sur %2$d détecté(s)) dans la liste blanche :",
        "whitelist_reloaded": "Liste blanche rechargée depuis le fichier.",
        "whitelist_remove_failed": "Impossible de retirer %1$s de la liste blanche",
        "whitelist_remove_success": "%1$s a été retiré(e) de la liste blanche",
        "world_age_description": "Modifie ou recherche l'âge du monde (temps depuis la création).",
        "world_age_added": "Ajouté à l'âge du monde : %1$d",
        "world_age_query": "L'âge du monde est : %d",
        "world_age_set": "Définir l'âge du monde sur : %1$d",
        "worldborder_center_success": "Le centre de la bordure du monde a été défini en %1$s, %2$s",
        "worldborder_damage_amount_success": "La quantité de dégâts causés par la bordure du monde a été définie à %1$s par bloc (auparavant %2$s par bloc)",
        "worldborder_damage_buffer_success": "Le tampon de dégâts de la bordure du monde a été défini à %1$s blocs (auparavant %2$s blocs)",
        "worldborder_get_success": "La bordure du monde est actuellement de %1$s blocs de large",
        "worldborder_set_success": "La bordure du monde a été réglée sur %1$s blocs de large (depuis %2$s blocs)",
        "worldborder_setSlowly_grow_success": "Agrandissement de la bordure du monde à %1$s blocs de large (depuis %2$s blocs) en %3$s secondes",
        "worldborder_setSlowly_shrink_success": "Rétrécissement de la bordure du monde à %1$s blocs de large (depuis %2$s blocs) en %3$s secondes",
        "worldborder_warning_distance_success": "L'avertissement de la bordure du monde a été défini à %1$s blocs de distance (auparavant %2$s blocs)",
        "worldborder_warning_time_success": "L'avertissement de la bordure du monde a été défini à %1$s secondes (auparavant %2$s secondes)",
        "worldbuilder_description": "Basculer l'état de l'appelant du constructeur de monde.",
        "worldbuilder_success": "État du constructeur de monde mis à jour à %1$s",
        "wsserver_description": "Tente de se connecter au serveur WebSocket à l'URL indiquée.",
        "wsserver_invalid_url": "L'URL serveur indiquée n'est pas valide",
        "wsserver_request_existing": "Une autre demande de connexion est active",
        "wsserver_request_failed": "Échec de connexion au serveur : %1$s",
        "wsserver_success": "Connexion établie au serveur : %1$s",
        "xp_description": "Donne ou enlève de l'expérience à un joueur.",
        "xp_failure_widthdrawXp": "Impossible de donner des points d'expérience négatifs au joueur",
        "xp_success": "Don de %1$d point(s) d’expérience à %2$s",
        "xp_success_levels": "Don de %1$d niveaux à %2$s",
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
            "Bannière marron",
            "Bannière bleue",
            "Bannière violette",
            "Bannière cyan",
            "Bannière gris clair",
            "Bannière grise",
            "Bannière rose",
            "Bannière vert clair",
            "Bannière jaune",
            "Bannière bleu clair",
            "Bannière magenta",
            "Bannière orange",
            "Bannière blanche"
        ],
        "bed": [
            "Lit",
            "Lit blanc",
            "Lit orange",
            "Lit magenta",
            "Lit bleu ciel",
            "Lit jaune",
            "Lit vert clair",
            "Lit rose",
            "Lit gris",
            "Lit gris clair",
            "Lit cyan",
            "Lit violet",
            "Lit bleu",
            "Lit marron",
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
            "Poudre de blaze"
        ],
        "blaze_rod": [
            "Bâton de blaze"
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
            "Alambic"
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
            "Seau de morues"
        ],
        "bucketSalmon": [
            "Seau de saumons"
        ],
        "bucketTropical": [
            "Seau de poissons tropicaux"
        ],
        "bucketPuffer": [
            "Seau de poissons-globes"
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
            "Vert clair"
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
            "Bleu canard"
        ],
        "tropicalColorPlum": [
            "Prune"
        ],
        "tropicalColorBlue": [
            "Bleu"
        ],
        "tropicalColorBrown": [
            "Marron"
        ],
        "tropicalColorGreen": [
            "Vert"
        ],
        "tropicalColorRed": [
            "Rouge"
        ],
        "tropicalBodyKobSingle": [
            "Kob %1$s"
        ],
        "tropicalBodySunstreakSingle": [
            "Héliorai %1$s"
        ],
        "tropicalBodySnooperSingle": [
            "Fouineur %1$s"
        ],
        "tropicalBodyDasherSingle": [
            "Fonceur %1$s"
        ],
        "tropicalBodyBrinelySingle": [
            "Saumuret %1$s"
        ],
        "tropicalBodySpottySingle": [
            "Truiton %1$s"
        ],
        "tropicalBodyFlopperSingle": [
            "Flopper %1$s"
        ],
        "tropicalBodyStripeySingle": [
            "Bigareu %1$s"
        ],
        "tropicalBodyGlitterSingle": [
            "Constèle %1$s"
        ],
        "tropicalBodyBlockfishSingle": [
            "Cubécaille %1$s"
        ],
        "tropicalBodyBettySingle": [
            "Betty %1$s"
        ],
        "tropicalBodyClayfishSingle": [
            "Argilécaille %1$s"
        ],
        "tropicalBodyKobMulti": [
            "Kob %1$s-%2$s"
        ],
        "tropicalBodySunstreakMulti": [
            "Héliorai %1$s-%2$s"
        ],
        "tropicalBodySnooperMulti": [
            "Fouineur %1$s-%2$s"
        ],
        "tropicalBodyDasherMulti": [
            "Fonceur %1$s-%2$s"
        ],
        "tropicalBodyBrinelyMulti": [
            "Saumuret %1$s-%2$s"
        ],
        "tropicalBodySpottyMulti": [
            "Truiton %1$s-%2$s"
        ],
        "tropicalBodyFlopperMulti": [
            "Flopper %1$s-%2$s"
        ],
        "tropicalBodyStripeyMulti": [
            "Bigareu %1$s-%2$s"
        ],
        "tropicalBodyGlitterMulti": [
            "Constèle %1$s-%2$s"
        ],
        "tropicalBodyBlockfishMulti": [
            "Cubécaille %1$s-%2$s"
        ],
        "tropicalBodyBettyMulti": [
            "Betty %1$s-%2$s"
        ],
        "tropicalBodyClayfishMulti": [
            "Argilécaille %1$s-%2$s"
        ],
        "tropicalSchoolAnemone": [
            "Anémone"
        ],
        "tropicalSchoolBlackTang": [
            "Chirurgien à rostre"
        ],
        "tropicalSchoolBlueDory": [
            "Chirurgien bleu"
        ],
        "tropicalSchoolButterflyFish": [
            "Poisson-papillon"
        ],
        "tropicalSchoolCichlid": [
            "Cichlidé"
        ],
        "tropicalSchoolClownfish": [
            "Poisson-clown"
        ],
        "tropicalSchoolCottonCandyBetta": [
            "Combattant"
        ],
        "tropicalSchoolDottyback": [
            "Pseudochromis"
        ],
        "tropicalSchoolEmperorRedSnapper": [
            "Vivaneau empereur rouge"
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
            "Zebra rouge"
        ],
        "tropicalSchoolRedLippedBlenny": [
            "Blennie à lèvre rouge"
        ],
        "tropicalSchoolRedSnapper": [
            "Vivaneau"
        ],
        "tropicalSchoolThreadfin": [
            "Alectis"
        ],
        "tropicalSchoolTomatoClown": [
            "Poisson-clown rouge"
        ],
        "tropicalSchoolTriggerfish": [
            "Baliste"
        ],
        "tropicalSchoolYellowTang": [
            "Chirurgien jaune"
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
            "Poulet rôti"
        ],
        "cooked_porkchop": [
            "Viande de porc cuite"
        ],
        "chicken": [
            "Poulet cru"
        ],
        "clay_ball": [
            "Argile"
        ],
        "clock": [
            "Montre"
        ],
        "comparator": [
            "Comparateur de redstone"
        ],
        "compass": [
            "Boussole"
        ],
        "lodestonecompass": [
            "Boussole en magnétite"
        ],
        "cookie": [
            "Cookie"
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
            "Colorant rouge",
            "Colorant vert",
            "Fèves de cacao",
            "Lapis-lazuli",
            "Colorant violet",
            "Colorant bleu cyan",
            "Colorant gris clair",
            "Colorant gris",
            "Colorant rose",
            "Colorant vert clair",
            "Colorant jaune",
            "Colorant bleu ciel",
            "Colorant magenta",
            "Colorant orange",
            "Poudre d'os",
            "Colorant noir",
            "Colorant marron",
            "Colorant bleu",
            "Colorant blanc"
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
            "Carte vide"
        ],
        "emptyLocatorMap": [
            "Carte de localisation vide"
        ],
        "emptyPotion": [
            "Fiole d'eau"
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
            "Salve de feu"
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
            "Larme de ghast"
        ],
        "glass_bottle": [
            "Fiole"
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
            "Coiffe en cuir"
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
            "Pot de miel"
        ],
        "honeycomb": [
            "Rayon de miel"
        ],
        "horsearmordiamond": [
            "Caparaçon en diamant"
        ],
        "horsearmorgold": [
            "Caparaçon en or"
        ],
        "horsearmoriron": [
            "Caparaçon en fer"
        ],
        "horsearmorleather": [
            "Caparaçon en cuir"
        ],
        "gold_ingot": [
            "Lingot d'or"
        ],
        "iron_ingot": [
            "Lingot de fer"
        ],
        "netherite_ingot": [
            "Lingot de Netherite"
        ],
        "netherite_scrap": [
            "Fragment de Netherite"
        ],
        "netherite_sword": [
            "Épée en Netherite"
        ],
        "netherite_pickaxe": [
            "Pioche en Netherite"
        ],
        "netherite_axe": [
            "Hache en Netherite"
        ],
        "netherite_shovel": [
            "Pelle en Netherite"
        ],
        "netherite_hoe": [
            "Houe en Netherite"
        ],
        "netherite_boots": [
            "Bottes en Netherite"
        ],
        "netherite_leggings": [
            "Jambières en Netherite"
        ],
        "netherite_chestplate": [
            "Plastron en Netherite"
        ],
        "netherite_helmet": [
            "Casque en Netherite"
        ],
        "lead": [
            "Laisse"
        ],
        "leather": [
            "Cuir"
        ],
        "leaves": [
            "Feuillage",
            "Feuilles de chêne",
            "Feuilles de sapin",
            "Feuilles de bouleau",
            "Feuilles tropicales",
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
            "Coquille de nautile"
        ],
        "heart_of_the_sea": [
            "Cœur de l'océan"
        ],
        "magma_cream": [
            "Crème de magma"
        ],
        "map": [
            "Carte"
        ],
        "melon": [
            "Pastèque"
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
            "Wagonnet motorisé"
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
            "Badge"
        ],
        "netherbrick": [
            "Brique du Nether"
        ],
        "quartz": [
            "Quartz du Nether"
        ],
        "nether_wart": [
            "Verrue du Nether"
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
            "Viande de porc cuite"
        ],
        "porkchop": [
            "Viande de porc crue"
        ],
        "portfolio": [
            "Album photo"
        ],
        "potato": [
            "Pomme de terre"
        ],
        "baked_potato": [
            "Pomme de terre cuite"
        ],
        "poisonous_potato": [
            "Pomme de terre empoisonnée"
        ],
        "potion": [
            "Potion"
        ],
        "prismarine_crystals": [
            "Cristaux de prismarine"
        ],
        "prismarine_shard": [
            "Éclat de prismarine"
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
            "Disque"
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
            "Graines de pastèque"
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
            "Panneau en sapin"
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
            "Crâne de wither squelette",
            "Tête de zombie",
            "Tête",
            "Tête de creeper",
            "Tête de dragon"
        ],
        "slime_ball": [
            "Boule de slime"
        ],
        "snowball": [
            "Boule de neige"
        ],
        "speckled_melon": [
            "Pastèque scintillante"
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
            "Épée en pierre"
        ],
        "wooden_sword": [
            "Épée en bois"
        ],
        "wheat": [
            "Blé"
        ],
        "writable_book": [
            "Livre vierge"
        ],
        "written_book": [
            "Livre édité"
        ],
        "glowstone_dust": [
            "Poudre de pierre lumineuse"
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
            "Écaille de tortue"
        ],
        "phantom_membrane": [
            "Membrane de Phantom"
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
            "Portail en acacia"
        ],
        "activator_rail": [
            "Rail activateur"
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
            "Barrière invisible"
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
            "Adminium"
        ],
        "conduit": [
            "Conduit"
        ],
        "invisibleBedrock": [
            "Bedrock invisible"
        ],
        "birchFence": [
            "Clôture en bouleau"
        ],
        "birch_fence_gate": [
            "Portail en bouleau"
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
            "Bouton en chêne"
        ],
        "acacia_button": [
            "Bouton en acacia"
        ],
        "birch_button": [
            "Bouton en bouleau"
        ],
        "dark_oak_button": [
            "Bouton en chêne noir"
        ],
        "jungle_button": [
            "Bouton en bois tropical"
        ],
        "spruce_button": [
            "Bouton en sapin"
        ],
        "stone_button": [
            "Bouton en pierre"
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
            "Bloc Rayon de miel"
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
            "Tige carmin dépouillée"
        ],
        "stripped_warped_stem": [
            "Tige altérée dépouillée"
        ],
        "crimson_hyphae": [
            "Hyphes carmin"
        ],
        "warped_hyphae": [
            "Hyphes altérées"
        ],
        "stripped_crimson_hyphae": [
            "Hyphes carmin dénudées"
        ],
        "stripped_warped_hyphae": [
            "Hyphes altérées dénudées"
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
            "Portail carmin"
        ],
        "warped_fence_gate": [
            "Portail altéré"
        ],
        "crimson_button": [
            "Bouton carmin"
        ],
        "warped_button": [
            "Bouton altéré"
        ],
        "crimson_pressure_plate": [
            "Plaque de détection carmin"
        ],
        "warped_pressure_plate": [
            "Plaque de détection altérée"
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
            "Pierre noire"
        ],
        "polished_blackstone_bricks": [
            "Pierre noire taillée polie"
        ],
        "cracked_polished_blackstone_bricks": [
            "Pierre noire taillée craquelée"
        ],
        "polished_blackstone_brick_stairs": [
            "Escaliers en pierre noire taillée polie"
        ],
        "blackstone_stairs": [
            "Escaliers en pierre noire"
        ],
        "blackstone_wall": [
            "Muret en pierre noire"
        ],
        "polished_blackstone_brick_wall": [
            "Muret en pierre noire taillée polie"
        ],
        "chiseled_polished_blackstone": [
            "Pierre noire polie sculptée"
        ],
        "gilded_blackstone": [
            "Pierre noire dorée"
        ],
        "blackstone_slab": [
            "Dalle en pierre noire"
        ],
        "polished_blackstone_brick_slab": [
            "Dalle en pierre noire taillée polie"
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
            "Pierre noire polie"
        ],
        "polished_blackstone_stairs": [
            "Escaliers en pierre noire polie"
        ],
        "polished_blackstone_slab": [
            "Dalle en pierre noire polie"
        ],
        "polished_blackstone_pressure_plate": [
            "Plaque de détection en pierre noire polie"
        ],
        "polished_blackstone_button": [
            "Bouton en pierre noire polie"
        ],
        "polished_blackstone_wall": [
            "Muret en pierre noire polie"
        ],
        "soul_campfire": [
            "Feu de camp des âmes"
        ],
        "chiseled_nether_bricks": [
            "Briques du Nether sculptées"
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
            "Boîte de Shulker bleu ciel"
        ],
        "shulkerBoxYellow": [
            "Boîte de Shulker jaune"
        ],
        "shulkerBoxLime": [
            "Boîte de Shulker vert clair"
        ],
        "shulkerBoxPink": [
            "Boîte de Shulker rose"
        ],
        "shulkerBoxGray": [
            "Boîte de Shulker grise"
        ],
        "shulkerBoxSilver": [
            "Boîte de Shulker gris clair"
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
            "Boîte de Shulker marron"
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
            "Verre bleu ciel",
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
            "Vitre bleu ciel",
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
            "Terre cuite bleu ciel",
            "Terre cuite jaune",
            "Terre cuite vert clair",
            "Terre cuite rose",
            "Terre cuite grise",
            "Terre cuite gris clair",
            "Terre cuite cyan",
            "Terre cuite violette",
            "Terre cuite bleue",
            "Terre cuite marron",
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
            "Laine bleu ciel",
            "Laine jaune",
            "Laine vert clair",
            "Laine rose",
            "Laine grise",
            "Laine gris clair",
            "Laine cyan",
            "Laine violette",
            "Laine bleue",
            "Laine marron",
            "Laine verte",
            "Laine rouge",
            "Laine noire"
        ],
        "cobblestone_wall": [
            "Muret de pierres",
            "Muret de pierres",
            "Muret moussu",
            "Muret de granite",
            "Muret de diorite",
            "Muret d'andésite",
            "Muret de grès",
            "Muret en briques",
            "Muret en pierre taillée",
            "Muret en briques de pierres moussues",
            "Muret en briques de l'Ender",
            "Muret en briques du Nether",
            "Muret en prismarine",
            "Muret en grès rouge",
            "Muret en briques rouges du Nether"
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
            "Bloc lumineux"
        ],
        "repeating_command_block": [
            "Bloc de commande à répétition"
        ],
        "chain_command_block": [
            "Bloc de commande en chaîne"
        ],
        "darkOakFence": [
            "Clôture en chêne noir"
        ],
        "dark_oak_fence_gate": [
            "Portail en chêne noir"
        ],
        "daylight_detector": [
            "Capteur de lumière"
        ],
        "deadbush": [
            "Arbuste mort"
        ],
        "detector_rail": [
            "Rail de détection"
        ],
        "dirt": [
            "Terre",
            "Terre",
            "Terre stérile"
        ],
        "podzol": [
            "Podzol"
        ],
        "purpur_block": [
            "Bloc de purpur",
            "Bloc de purpur",
            "Purpur ciselé",
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
            "Pivoine"
        ],
        "dragon_egg": [
            "Œuf de Dragon"
        ],
        "dropper": [
            "Dropper"
        ],
        "enchanting_table": [
            "Table d'enchantement"
        ],
        "enderChest": [
            "Coffre de l'Ender"
        ],
        "end_portal_frame": [
            "Portail de l'Ender"
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
            "Portail en chêne"
        ],
        "iron_bars": [
            "Barreaux de fer"
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
            "Orchidée bleue",
            "Allium",
            "Houstonie",
            "Tulipe rouge",
            "Tulipe orange",
            "Tulipe blanche",
            "Tulipe rose",
            "Marguerite",
            "Bleuet",
            "Muguet"
        ],
        "wither_rose": [
            "Rose de Wither"
        ],
        "furnace": [
            "Four"
        ],
        "glass": [
            "Verre"
        ],
        "golden_rail": [
            "Rail de propulsion"
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
            "Botte de foin"
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
            "Juke-box"
        ],
        "jungleFence": [
            "Clôture en bois tropical"
        ],
        "jungle_fence_gate": [
            "Portail en bois tropical"
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
            "Citrouille-lanterne"
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
            "Tronc de sapin",
            "Tronc de bouleau",
            "Tronc de bois tropical"
        ],
        "magma": [
            "Bloc de magma"
        ],
        "melon_block": [
            "Pastèque"
        ],
        "mob_spawner": [
            "Générateur de monstres"
        ],
        "monster_egg": [
            "Pierre infestée",
            "Pierre infestée",
            "Pierre taillée infestée",
            "Brique de pierre infestée",
            "Brique de pierre moussue infestée",
            "Brique de pierre craquelée infestée",
            "Brique de pierre sculptée infestée"
        ],
        "mushroom": [
            "Champignon"
        ],
        "noteblock": [
            "Bloc musical"
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
            "Clôture en brique du Nether"
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
            "Bloc de verrues altérées"
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
            "Pommes de terre"
        ],
        "stone_pressure_plate": [
            "Plaque de détection en pierre"
        ],
        "wooden_pressure_plate": [
            "Plaque de détection en chêne"
        ],
        "acacia_pressure_plate": [
            "Plaque de détection en acacia"
        ],
        "birch_pressure_plate": [
            "Plaque de détection en bouleau"
        ],
        "dark_oak_pressure_plate": [
            "Plaque de détection en chêne noir"
        ],
        "jungle_pressure_plate": [
            "Plaque de détection en bois tropical"
        ],
        "spruce_pressure_plate": [
            "Plaque de détection en sapin"
        ],
        "prismarine": [
            "Prismarine",
            "Prismarine",
            "Briques de prismarine",
            "Prismarine sombre"
        ],
        "pumpkin": [
            "Citrouille"
        ],
        "pumpkin_stem": [
            "Queue de citrouille"
        ],
        "quartz_block": [
            "Bloc de quartz",
            "Bloc de quartz",
            "Bloc de quartz sculpté",
            "Bloc de pilier en quartz",
            "Bloc de quartz lisse"
        ],
        "rail": [
            "Rail"
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
            "Bloc de champignons rouges"
        ],
        "red_sandstone": [
            "Grès rouge",
            "Grès rouge",
            "Grès rouge sculpté",
            "Grès rouge taillé",
            "Grès rouge poli"
        ],
        "redstone_wire": [
            "Poudre de redstone"
        ],
        "redstone_lamp": [
            "Lampe de redstone"
        ],
        "sand": [
            "Sable",
            "Sable",
            "Sable rouge"
        ],
        "sandstone": [
            "Grès",
            "Grès",
            "Grès sculpté",
            "Grès taillé",
            "Grès poli"
        ],
        "sapling": [
            "Pousse de chêne",
            "Pousse de chêne",
            "Pousse de sapin",
            "Pousse de bouleau",
            "Pousse tropicale",
            "Pousse d'acacia",
            "Pousse de chêne noir"
        ],
        "seaLantern": [
            "Lanterne aquatique"
        ],
        "standing_sign": [
            "Panneau"
        ],
        "spruce_standing_sign": [
            "Panneau en sapin"
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
            "Bloc de slime"
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
            "Portail en sapin"
        ],
        "brick_stairs": [
            "Escalier en briques"
        ],
        "nether_brick_stairs": [
            "Escalier en brique du Nether"
        ],
        "quartz_stairs": [
            "Escalier en quartz"
        ],
        "smooth_quartz_stairs": [
            "Escalier en quartz lisse"
        ],
        "red_sandstone_stairs": [
            "Escalier en grès rouge"
        ],
        "sandstone_stairs": [
            "Escalier en grès"
        ],
        "stone_stairs": [
            "Escalier en pierre taillée"
        ],
        "normal_stone_stairs": [
            "Escalier en pierre"
        ],
        "stone_brick_stairs": [
            "Escalier en briques de pierre"
        ],
        "oak_stairs": [
            "Escalier en chêne"
        ],
        "acacia_stairs": [
            "Escalier en acacia"
        ],
        "birch_stairs": [
            "Escalier en bouleau"
        ],
        "dark_oak_stairs": [
            "Escalier en chêne noir"
        ],
        "jungle_stairs": [
            "Escalier en bois tropical"
        ],
        "spruce_stairs": [
            "Escalier en sapin"
        ],
        "purpur_stairs": [
            "Escalier en purpur"
        ],
        "prismarine_stairs": [
            "Escaliers en prismarine"
        ],
        "dark_prismarine_stairs": [
            "Escaliers en prismarine sombre"
        ],
        "prismarine_bricks_stairs": [
            "Escaliers en prismarine taillée"
        ],
        "granite_stairs": [
            "Escalier en granite"
        ],
        "diorite_stairs": [
            "Escalier en diorite"
        ],
        "andesite_stairs": [
            "Escalier en andésite"
        ],
        "polished_granite_stairs": [
            "Escalier en granite poli"
        ],
        "polished_diorite_stairs": [
            "Escalier en diorite polie"
        ],
        "polished_andesite_stairs": [
            "Escalier en andésite polie"
        ],
        "mossy_stone_brick_stairs": [
            "Escalier en briques de pierres moussues"
        ],
        "smooth_red_sandstone_stairs": [
            "Escalier en grès rouge poli"
        ],
        "smooth_sandstone_stairs": [
            "Escalier en grès poli"
        ],
        "end_brick_stairs": [
            "Escalier en briques de l'Ender"
        ],
        "mossy_cobblestone_stairs": [
            "Escalier en pierre moussue"
        ],
        "red_nether_brick_stairs": [
            "Escalier en briques rouges du Nether"
        ],
        "smooth_stone": [
            "Pierre lisse"
        ],
        "standing_banner": [
            "Bannière",
            "Bannière noire",
            "Bannière rouge",
            "Bannière verte",
            "Bannière marron",
            "Bannière bleue",
            "Bannière violette",
            "Bannière cyan",
            "Bannière gris clair",
            "Bannière grise",
            "Bannière rose",
            "Bannière vert clair",
            "Bannière jaune",
            "Bannière bleu ciel",
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
            "Pierre taillée"
        ],
        "stonebrick": [
            "Briques de pierre",
            "Briques de pierre",
            "Briques de pierre moussues",
            "Briques de pierre sculptées"
        ],
        "stonecutter": [
            "Scie à pierre"
        ],
        "stonecutter_block": [
            "Scie à pierre"
        ],
        "mossy_cobblestone": [
            "Pierre moussue"
        ],
        "double_stone_slab": [
            "Dalle de pierre",
            "Dalle de pierre",
            "Dalle de grès",
            "Dalle de bois",
            "Dalle de pierre taillée",
            "Dalle en briques",
            "Dalle en briques de pierre",
            "Dalle de quartz",
            "Dalle en briques du Nether"
        ],
        "stone_slab": [
            "Dalle de pierre",
            "Dalle de pierre lisse",
            "Dalle de grès",
            "Dalle de bois",
            "Dalle de pierre taillée",
            "Dalle en briques",
            "Dalle en briques de pierre",
            "Dalle de quartz",
            "Dalle en briques du Nether"
        ],
        "double_stone_slab2": [
            "Dalle en grès rouge",
            "Dalle en grès rouge"
        ],
        "stone_slab2": [
            "Dalle en grès rouge",
            "Dalle en grès rouge",
            "Dalle de purpur",
            "Dalle de prismarine",
            "Dalle de prismarine taillée",
            "Dalle de prismarine sombre",
            "Dalle de pierre moussue",
            "Dalle de grès poli",
            "Dalle en briques rouges du Nether"
        ],
        "stone_slab3": [
            "Dalle en brique de l'Ender",
            "Dalle en brique de l'Ender",
            "Dalle de grès rouge poli",
            "Dalle en andésite polie",
            "Dalle en andésite",
            "Dalle en diorite",
            "Dalle en diorite polie",
            "Dalle en granite",
            "Dalle en granite poli"
        ],
        "stone_slab4": [
            "Dalle en brique de pierre moussue",
            "Dalle en brique de pierre moussue",
            "Dalle de quartz lisse",
            "Dalle de pierre",
            "Dalle de grès taillé",
            "Dalle de grès rouge taillé"
        ],
        "coral_block": [
            "Bloc de corail tube",
            "Bloc de corail tube",
            "Bloc de corail cerveau",
            "Bloc de corail bulles",
            "Bloc de corail de feu",
            "Bloc de corne de coraux",
            "Bloc de corail tube mort",
            "Bloc de corail cerveau mort",
            "Bloc de corail bulles mort",
            "Bloc de corail de feu mort",
            "Bloc de corne de coraux mort"
        ],
        "tallgrass": [
            "Hautes herbes",
            "Hautes herbes",
            "Fougère"
        ],
        "seagrass": [
            "Herbe marine",
            "Herbe marine"
        ],
        "sea_pickle": [
            "Concombre de mer"
        ],
        "turtle_egg": [
            "Œuf de tortue de mer"
        ],
        "coral": [
            "Corail tube",
            "Corail tube",
            "Corail cerveau",
            "Corail bulles",
            "Corail de feu",
            "Corne de coraux",
            "Corail tube mort",
            "Corail cerveau mort",
            "Corail bulles mort",
            "Corail de feu mort",
            "Corne de coraux morts"
        ],
        "coral_fan": [
            "Colonie de corail tube",
            "Colonie de corail tube",
            "Colonie de corail cerveau",
            "Colonie de corail bulles",
            "Colonie de corail de feu",
            "Colonie de corne de coraux"
        ],
        "coral_fan_dead": [
            "Colonie de corail tube mort",
            "Colonie de corail tube mort",
            "Colonie de corail cerveau mort",
            "Colonie de corail bulles mort",
            "Colonie de corail de feu mort",
            "Colonie de corne de coraux mort"
        ],
        "glass_pane": [
            "Vitre"
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
            "Lierre"
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
            "Plaque de détection lestée (lourde)"
        ],
        "light_weighted_pressure_plate": [
            "Plaque de détection lestée (légère)"
        ],
        "end_stone": [
            "Pierre de l'Ender"
        ],
        "end_bricks": [
            "Briques de pierre de l'Ender"
        ],
        "planks": [
            "Planches",
            "Planches de chêne",
            "Planches de sapin",
            "Planches de bouleau",
            "Planches de bois tropical",
            "Planches d'acacia",
            "Planches de chêne noir"
        ],
        "wooden_slab": [
            "Dalle en bois",
            "Dalle de chêne",
            "Dalle de sapin",
            "Dalle de bouleau",
            "Dalle de bois tropical",
            "Dalle d'acacia",
            "Dalle de chêne noir"
        ],
        "carpet": [
            "Tapis",
            "Tapis noir",
            "Tapis rouge",
            "Tapis vert",
            "Tapis marron",
            "Tapis bleu",
            "Tapis violet",
            "Tapis cyan",
            "Tapis gris clair",
            "Tapis gris",
            "Tapis rose",
            "Tapis vert clair",
            "Tapis jaune",
            "Tapis bleu clair",
            "Tapis magenta",
            "Tapis orange",
            "Tapis blanc"
        ],
        "crafting_table": [
            "Établi"
        ],
        "white_glazed_terracotta": [
            "Terre cuite émaillée blanche",
            "Terre cuite émaillée blanche"
        ],
        "orange_glazed_terracotta": [
            "Terre cuite émaillée orange",
            "Terre cuite émaillée orange"
        ],
        "magenta_glazed_terracotta": [
            "Terre cuite émaillée magenta",
            "Terre cuite émaillée magenta"
        ],
        "light_blue_glazed_terracotta": [
            "Terre cuite émaillée bleu ciel",
            "Terre cuite émaillée bleu ciel"
        ],
        "yellow_glazed_terracotta": [
            "Terre cuite émaillée jaune",
            "Terre cuite émaillée jaune"
        ],
        "lime_glazed_terracotta": [
            "Terre cuite émaillée vert clair",
            "Terre cuite émaillée vert clair"
        ],
        "pink_glazed_terracotta": [
            "Terre cuite émaillée rose",
            "Terre cuite émaillée rose"
        ],
        "gray_glazed_terracotta": [
            "Terre cuite émaillée grise",
            "Terre cuite émaillée grise"
        ],
        "silver_glazed_terracotta": [
            "Terre cuite émaillée gris clair",
            "Terre cuite émaillée gris clair"
        ],
        "cyan_glazed_terracotta": [
            "Terre cuite émaillée cyan",
            "Terre cuite émaillée cyan"
        ],
        "purple_glazed_terracotta": [
            "Terre cuite émaillée violette",
            "Terre cuite émaillée violette"
        ],
        "blue_glazed_terracotta": [
            "Terre cuite émaillée bleue",
            "Terre cuite émaillée bleue"
        ],
        "brown_glazed_terracotta": [
            "Terre cuite émaillée marron",
            "Terre cuite émaillée marron"
        ],
        "green_glazed_terracotta": [
            "Terre cuite émaillée verte",
            "Terre cuite émaillée verte"
        ],
        "red_glazed_terracotta": [
            "Terre cuite émaillée rouge",
            "Terre cuite émaillée rouge"
        ],
        "black_glazed_terracotta": [
            "Terre cuite émaillée noire",
            "Terre cuite émaillée noire"
        ],
        "concrete": [
            "Béton blanc",
            "Béton blanc",
            "Béton orange",
            "Béton magenta",
            "Béton bleu ciel",
            "Béton jaune",
            "Béton vert clair",
            "Béton rose",
            "Béton gris",
            "Béton gris clair",
            "Béton cyan",
            "Béton violet",
            "Béton bleu",
            "Béton marron",
            "Béton vert",
            "Béton rouge",
            "Béton noir"
        ],
        "glazedTerracottaWhite": [
            "Terre cuite émaillée blanche"
        ],
        "glazedTerracottaOrange": [
            "Terre cuite émaillée orange"
        ],
        "glazedTerracottaMagenta": [
            "Terre cuite émaillée magenta"
        ],
        "glazedTerracottaLightBlue": [
            "Terre cuite émaillée bleu ciel"
        ],
        "glazedTerracottaYellow": [
            "Terre cuite émaillée jaune"
        ],
        "glazedTerracottaLime": [
            "Terre cuite émaillée vert clair"
        ],
        "glazedTerracottaPink": [
            "Terre cuite émaillée rose"
        ],
        "glazedTerracottaGray": [
            "Terre cuite émaillée grise"
        ],
        "glazedTerracottaSilver": [
            "Terre cuite émaillée gris clair"
        ],
        "glazedTerracottaCyan": [
            "Terre cuite émaillée cyan"
        ],
        "glazedTerracottaPurple": [
            "Terre cuite émaillée violette"
        ],
        "glazedTerracottaBlue": [
            "Terre cuite émaillée bleue"
        ],
        "glazedTerracottaBrown": [
            "Terre cuite émaillée marron"
        ],
        "glazedTerracottaGreen": [
            "Terre cuite émaillée verte"
        ],
        "glazedTerracottaRed": [
            "Terre cuite émaillée rouge"
        ],
        "glazedTerracottaBlack": [
            "Terre cuite émaillée noire"
        ],
        "concretePowder": [
            "Poudre de béton blanche",
            "Poudre de béton blanche",
            "Poudre de béton orange",
            "Poudre de béton magenta",
            "Poudre de béton bleu ciel",
            "Poudre de béton jaune",
            "Poudre de béton vert clair",
            "Poudre de béton rose",
            "Poudre de béton grise",
            "Poudre de béton gris clair",
            "Poudre de béton cyan",
            "Poudre de béton violette",
            "Poudre de béton bleue",
            "Poudre de béton marron",
            "Poudre de béton verte",
            "Poudre de béton rouge",
            "Poudre de béton noire"
        ],
        "stripped_spruce_log": [
            "Tronc de sapin écorcé"
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
            "Bois de sapin",
            "Bois de bouleau",
            "Bois tropical",
            "Bois d'acacia",
            "Bois de chêne noir",
            null,
            null,
            "Bois de chêne écorcé",
            "Bois de sapin écorcé",
            "Bois de bouleau écorcé",
            "Bois tropical écorcé",
            "Bois d'acacia écorcé",
            "Bois de chêne noir écorcé"
        ],
        "netherite_block": [
            "Bloc de Netherite"
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
