
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
    id: "en_US" as LangId,
    commands:{
        "ability_description": "Sets a player's ability.",
        "ability_noability": "No ability called '%1$s' is available",
        "ability_granted": "The '%1$s' ability has been granted to you",
        "ability_revoked": "The '%1$s' ability has been revoked from you",
        "ability_success": "Ability has been updated",
        "achievement_alreadyHave": "Player %1$s already has achievement %2$s",
        "achievement_description": "Gives or removes an achievement from a player.",
        "achievement_dontHave": "Player %1$s doesn't have achievement %2$s",
        "achievement_give_success_all": "Successfully given all achievements to %1$s",
        "achievement_give_success_one": "Successfully given %1$s the stat %2$s",
        "achievement_statTooLow": "Player %1$s does not have the stat %2$s",
        "achievement_take_success_all": "Successfully taken all achievements from %1$s",
        "achievement_take_success_one": "Successfully taken the stat %1$s from %2$s",
        "achievement_unknownAchievement": "Unknown achievement or statistic '%1$s'",
        "agent_attack_success": "Agent attack successful",
        "agent_attack_failed": "Agent failed to attack",
        "agent_collect_success": "Agent collect successful",
        "agent_collect_failed": "Agent failed to collect",
        "agent_createagent_success": "Created Agent",
        "agent_createagent_failed": "Unable to create Agent",
        "agent_destroy_success": "Agent destroyed a block",
        "agent_destroy_failed": "Agent destroy failed",
        "agent_detect_success": "Agent detect successful",
        "agent_detect_failed": "Agent failed to detect",
        "agent_detectredstone_success": "Agent detectredstone successful",
        "agent_detectredstone_failed": "Agent failed to detectredstone",
        "agent_drop_success": "Agent drop successful",
        "agent_drop_failed": "Agent failed to drop",
        "agent_dropall_success": "Agent dropall successful",
        "agent_dropall_failed": "Agent failed to dropall",
        "agent_getitemcount_success": "Agent getitemcount successful",
        "agent_getitemcount_failed": "Agent failed to getitemcount",
        "agent_getitemspace_success": "Agent getitemspace successful",
        "agent_getitemspace_failed": "Agent failed to getitemspace",
        "agent_getitemdetail_success": "Agent getitemdetail successful",
        "agent_getitemdetail_failed": "Agent failed to getitemdetail",
        "agent_getposition_success": "Agent getposition successful",
        "agent_getposition_failed": "Agent getposition failed",
        "agent_inspect_success": "Agent inspect successful",
        "agent_inspect_failed": "Agent failed to inspect",
        "agent_inspectdata_success": "Agent inspect data successful",
        "agent_inspectdata_failed": "Agent failed to inspect data",
        "agent_move_success": "Agent move successful",
        "agent_move_failed": "Unable to move Agent",
        "agent_outofrange": "Cannot issue command, Agent is out of range",
        "agent_place_success": "Agent place successful",
        "agent_place_failed": "Agent failed to place",
        "agent_setitem_success": "Agent set item successful",
        "agent_setitem_failed": "Agent failed to set item",
        "agent_turn_success": "Agent turn successful",
        "agent_turn_failed": "Unable to turn Agent",
        "agent_till_success": "Agent till successful",
        "agent_till_failed": "Agent failed to till",
        "agent_tpagent_description": "Teleport your Agent.",
        "agent_tpagent_success": "Agent teleported",
        "agent_tpagent_failed": "Agent failed to teleport",
        "agent_transfer_success": "Agent transfer successful",
        "agent_transfer_failed": "Agent failed to transfer",
        "always_day": "Day-Night cycle %1$s",
        "always_day_locked": "Day-Night cycle locked",
        "always_day_unlocked": "Day-Night cycle unlocked",
        "ban_description": "Adds player to banlist.",
        "autocomplete_a": "all players",
        "autocomplete_c": "my Agent",
        "autocomplete_e": "all entities",
        "autocomplete_p": "closest player",
        "autocomplete_r": "random player",
        "autocomplete_s": "yourself",
        "autocomplete_v": "all Agents",
        "ban_failed": "Could not ban player %1$s",
        "ban_success": "Banned player %1$s",
        "banip_description": "Adds IP address to banlist.",
        "banip_invalid": "You have entered an invalid IP address or a player that is not online",
        "banip_success": "Banned IP address %1$s",
        "banip_success_players": "Banned IP address %1$s belonging to %2$s",
        "banlist_ips": "There are %1$d total banned IP addresses:",
        "banlist_players": "There are %1$d total banned players:",
        "blockdata_description": "Modifies the data tag of a block.",
        "blockdata_placeFailed": "You cannot place blocks here",
        "blockdata_destroyFailed": "You cannot dig here",
        "blockdata_failed": "The data tag did not change: %1$s",
        "blockdata_notValid": "The target block is not a data holder block",
        "blockdata_outOfWorld": "Cannot change block outside of the world",
        "blockdata_success": "Block data updated to: %1$s",
        "blockdata_tagError": "Data tag parsing failed: %1$s",
        "bossbar_add_success": "Created custom bossbar [%1$s]",
        "bossbar_add_failure_invalid": "Invalid bossbar ID. IDs should be of the form namespace:id or id (defaults to minecraft namespace).",
        "bossbar_add_failure_exists": "A bossbar already exists with the ID '%1$s'",
        "bossbar_description": "Creates and modifies boss bars",
        "bossbar_get_max": "Custom bossbar [%1$s] has a maximum of %2$d",
        "bossbar_get_players": "Custom bossbar [%1$s] has %2$s players currently online: %3$s",
        "bossbar_get_players_none": "Custom bossbar [%1$s] has no players currently online",
        "bossbar_get_players_one": "Custom bossbar [%1$s] has 1 player currently online: %2$s",
        "bossbar_get_value": "Custom bossbar [%1$s] has a value of %2$d",
        "bossbar_get_visible_true": "Custom bossbar [%1$s] is currently shown",
        "bossbar_get_visible_false": "Custom bossbar [%1$s] is currently hidden",
        "bossbar_list": "There are %1$s custom bossbars active: %2$s",
        "bossbar_list_none": "There are no custom bossbars active",
        "bossbar_list_one": "There is 1 custom bossbar active: %1$s",
        "bossbar_notFound": "No bossbar exists with the ID '%1$s'",
        "bossbar_remove": "Removed custom bossbar [%1$s]",
        "change_setting_description": "Changes a setting on the dedicated server while it's running.",
        "change_setting_success": "%1$s has been changed",
        "chunkinfo_compiled": "Chunk is compiled.",
        "chunkinfo_data": "First 64 vertices are: %1$s",
        "chunkinfo_empty": "Chunk is empty.",
        "chunkinfo_hasLayers": "Chunk has layers: %1$s",
        "chunkinfo_hasNoRenderableLayers": "Chunk has no renderable layers.",
        "chunkinfo_isEmpty": "Chunk has empty layers: %1$s",
        "chunkinfo_location": "Chunk location: (%1$d, %2$d, %3$d)",
        "chunkinfo_noChunk": "No chunk found at chunk position %1$d, %2$d, %3$d",
        "chunkinfo_notCompiled": "Chunk is not compiled.",
        "chunkinfo_notEmpty": "Chunk is not empty.",
        "chunkinfo_vertices": "%1$s layer's buffer contains %2$d vertices",
        "classroommode_description": "Attempt to launch and connect to Classroom Mode.",
        "classroommode_success": "Attempting to launch Classroom Mode...",
        "clear_description": "Clears items from player inventory.",
        "clear_failure": "Could not clear the inventory of %1$s",
        "clear_failure_no_items": "Could not clear the inventory of %1$s, no items to remove",
        "clear_success": "Cleared the inventory of %1$s, removing %2$d items",
        "clear_tagError": "Data tag parsing failed: %1$s",
        "clear_testing": "%1$s has %2$d items that match the criteria",
        "clearfixedinv_description": "Removes all Fixed Inventory Slots.",
        "clearfixedinv_success": "Cleared the Fixed Inventory",
        "clone_description": "Clones blocks from one region to another.",
        "clone_failed": "No blocks cloned",
        "clone_filtered_error": "Filtered usage requires a filter block to be specified",
        "clone_noOverlap": "Source and destination can not overlap",
        "clone_outOfWorld": "Cannot access blocks outside of the world",
        "clone_success": "%1$d blocks cloned",
        "clone_tooManyBlocks": "Too many blocks in the specified area (%1$d > %2$d)",
        "closechat_description": "Closes the chat window of the local player if it is open.",
        "closechat_success": "Chat closed",
        "closechat_failure": "Chat was not open",
        "closewebsocket_description": "Closes websocket connection if there is one.",
        "code_description": "Launches Code Builder.",
        "code_success": "Launched Code Builder.",
        "compare_failed": "Source and destination are not identical",
        "compare_outOfWorld": "Cannot access blocks outside of the world",
        "compare_success": "%1$d blocks compared",
        "compare_tooManyBlocks": "Too many blocks in the specified area (%1$d > %2$d)",
        "corruptworld_description": "Corrupts the world loaded on the server.",
        "corruptworld_success": "Successfully corrupted the world.",
        "daylock_description": "Locks and unlocks the day-night cycle.",
        "debug_description": "Starts or stops a debugging session.",
        "debug_notStarted": "Can't stop profiling when we haven't started yet!",
        "debug_start": "Started debug profiling",
        "debug_stop": "Stopped debug profiling after %.2f seconds (%1$d ticks)",
        "defaultgamemode_description": "Sets the default game mode.",
        "defaultgamemode_success": "The world's default game mode is now %1$s",
        "deop_description": "Revokes operator status from a player.",
        "deop_failed": "Could not de-op (permission level too high): %s",
        "deop_success": "De-opped: %s",
        "deop_message": "You have been de-opped",
        "difficulty_description": "Sets the difficulty level.",
        "difficulty_usage": "/difficulty <new difficulty>",
        "difficulty_success": "Set game difficulty to %1$s",
        "downfall_success": "Toggled downfall",
        "effect_description": "Add or remove status effects.",
        "effect_failure_notActive": "Couldn't take %1$s from %2$s as they do not have the effect",
        "effect_failure_notActive_all": "Couldn't take any effects from %1$s as they do not have any",
        "effect_failure_notAMob": "%1$s cannot have effects",
        "effect_notFound": "There is no such mob effect with ID %s",
        "effect_success": "Gave %1$s * %2$d to %3$s for %4$d seconds",
        "effect_success_removed": "Took %1$s from %2$s",
        "effect_success_removed_all": "Took all effects from %1$s",
        "enchant_cantCombine": "%1$s can't be combined with %2$s",
        "enchant_invalidLevel": "%1$s does not support level %2$d",
        "enchant_cantEnchant": "The selected enchantment can't be added to the target item: %1$s",
        "enchant_description": "Adds an enchantment to a player's selected item.",
        "enchant_noItem": "The target doesn't hold an item: %1$s",
        "enchant_notFound": "There is no such enchantment with ID %1$d",
        "enchant_success": "Enchanting succeeded for %1$s",
        "entitydata_description": "Modifies the data tag of an entity.",
        "entitydata_failed": "The data tag did not change: %1$s",
        "entitydata_noPlayers": "%1$s is a player and cannot be changed",
        "entitydata_success": "Entity data updated to: %1$s",
        "entitydata_tagError": "Data tag parsing failed: %1$s",
        "execute_allInvocationsFailed": "All invocations failed: '%1$s'",
        "execute_failed": "Failed to execute '%1$s' as %2$s",
        "execute_description": "Executes a command on behalf of one or more entities.",
        "fill_description": "Fills all or parts of a region with a specific block.",
        "fill_failed": "No blocks filled",
        "fill_outOfWorld": "Cannot place blocks outside of the world",
        "fill_success": "%1$d blocks filled",
        "fill_tagError": "Data tag parsing failed: %1$s",
        "fill_tooManyBlocks": "Too many blocks in the specified area (%1$d > %2$d)",
        "fill_replace_auxvalue_invalid": "Invalid replace data value for block %1$s",
        "function_description": "Runs commands found in the corresponding function file.",
        "function_functionNameNotFound": "Function %1$s not found.",
        "function_invalidCharacters": "Function with title '%s' is invalid, character '%s' is not allowed in function names.",
        "function_noEngineVersionSpecified": "Function %s could not be run. You must specify a min_engine_version in the behavior pack's manifest.json.",
        "function_success": "Successfully executed %1$d function entries.",
        "gamemode_description": "Sets a player's game mode.",
        "gamemode_success_other": "Set %2$s's game mode to %1$s",
        "gamemode_success_self": "Set own game mode to %1$s",
        "gamemode_fail_invalid": "Game mode '%1$s' is invalid",
        "gamerule_description": "Sets or queries a game rule value.",
        "gamerule_type_invalid": "Invalid type used for game rule '%1$s'",
        "gamerule_type_nocheatsenabled": "Game rule '%1$s' can only be used if cheats are enabled in this world.",
        "gamerule_nopermission": "Only server owners can change '%1$s'",
        "gamerule_norule": "No game rule called '%1$s' is available",
        "gamerule_success": "Game rule %1$s has been updated to %2$s",
        "generic_async_initiated": "'%1$s' command started (async step %2$d)",
        "generic_boolean_invalid": "'%1$s' is not true or false",
        "generic_chunk_notFound": "Specified chunk not found",
        "generic_componentError": "Component list parsing failed",
        "generic_dimension_notFound": "Specified dimension not found",
        "generic_disabled": "Cheats aren't enabled in this level.",
        "generic_disabled_templateLocked": "Settings are currently locked. Unlock Template World Options in the Game Settings menu to change them.",
        "generic_double_tooBig": "The number you have entered (%.2f) is too big, it must be at most %.2f",
        "generic_double_tooSmall": "The number you have entered (%.2f) is too small, it must be at least %.2f",
        "generic_duplicateType": "Duplicate type arguments",
        "generic_duplicateSelectorArgument": "Duplicate %s selector arguments",
        "generic_encryption_badkey": "Bad public key given. Expected 120 byte key after PEM formatting.",
        "generic_encryption_badsalt": "Bad salt given. Expected a 16 bytes before base 64 encoding.",
        "generic_encryption_required": "Encrypted session required",
        "generic_entity_invalidType": "Entity type '%1$s' is invalid",
        "generic_entity_invalidUuid": "The entity UUID provided is in an invalid format",
        "generic_entity_notFound": "That entity cannot be found",
        "generic_exception": "An unknown error occurred while attempting to perform this command",
        "generic_invalidAgentType": "Type argument applied to Agent-only selector",
        "generic_invalidcontext": "Invalid context provided for given command type",
        "generic_invalidDevice": "The command you entered, %s, is not supported on this device",
        "generic_invalidPlayerType": "Type argument applied to player-only selector",
        "generic_invalidType": "Unknown type argument",
        "generic_levelError": "Max level has to be larger than min level",
        "generic_malformed_body": "Body is missing or malformed",
        "generic_malformed_type": "Invalid request type",
        "generic_notimplemented": "Not implemented",
        "generic_num_invalid": "'%1$s' is not a valid number",
        "generic_num_tooBig": "The number you have entered (%1$d) is too big, it must be at most %2$d",
        "generic_num_tooSmall": "The number you have entered (%1$d) is too small, it must be at least %2$d",
        "generic_parameter_invalid": "'%1$s' is not a valid parameter",
        "generic_permission_selector": "<insufficient permissions for selector expansion>",
        "generic_player_notFound": "That player cannot be found",
        "generic_protocol_mismatch": "Provided protocol version doesn't match Minecraft's protocol version",
        "generic_radiusError": "Minimum selector radius must be smaller than maximum",
        "generic_radiusNegative": "Radius cannot be negative",
        "generic_rotationError": "Rotation out of range",
        "generic_running": "The command is already running",
        "generic_step_failed": "Command step failed",
        "generic_syntax": "Syntax error: Unexpected \"%2$s\": at \"%1$s>>%2$s<<%3$s\"",
        "generic_noTargetMatch": "No targets matched selector",
        "generic_targetNotPlayer": "Selector must be player-type",
        "generic_tooManyNames": "Too many target name arguments",
        "generic_tooManyTargets": "Too many targets matched selector",
        "generic_too_many_requests": "Too many commands have been requested, wait for one to be done",
        "generic_unknown": "Unknown command: %s. Please check that the command exists and that you have permission to use it.",
        "generic_usage": "Usage: %1$s",
        "generic_usage_noparam": "Usage:",
        "generic_version_mismatch": "The requested version doesn't exist for this command",
        "generic_version_missing": "Command calls not from chat should specify the command's version",
        "getchunkdata_description": "Gets pixels for a specific chunk.",
        "getchunkdata_success": "Chunk data received",
        "getchunks_description": "Gets list of chunks that are loaded.",
        "getchunks_success": "Chunk list received",
        "getlocalplayername_description": "Returns the local player name.",
        "getspawnpoint_description": "Gets the spawn position of the specified player(s).",
        "gettopsolidblock_description": "Gets the position of the top non-air block below the specified position",
        "gettopsolidblock_notfound": "No solid blocks under specified position",
        "give_block_notFound": "There is no such block with name %1$d",
        "give_description": "Gives an item to a player.",
        "give_item_invalid": "Invalid command syntax: no such %s exists with that data value",
        "give_item_notFound": "There is no such item with name %1$d",
        "give_map_invalidData": "Invalid map data provided",
        "give_map_featureNotFound": "Could not make exploration map. Feature not found on this dimension",
        "give_success": "Gave %1$s * %2$d to %3$s",
        "give_successRecipient": "You have been given %1$s * %2$d",
        "give_tagError": "Data tag parsing failed: %1$s",
        "help_description": "Provides help/list of commands.",
        "help_footer": "Tip: Use the <tab> key while typing a command to auto-complete the command or its arguments",
        "help_header": "--- Showing help page %1$d of %2$d (/help <page>) ---",
        "help_command_aliases": "%s (also %s):",
        "immutableworld_description": "Sets the immutable state of the world.",
        "immutableworld_info": "immutableworld = %s",
        "kick_description": "Kicks a player from the server.",
        "kick_description_edu": "Removes a player from the game.",
        "kick_not_found": "Could not find player %1$s",
        "kick_not_yourself": "You may not remove yourself from the game",
        "kick_success": "Kicked %1$s from the game",
        "kick_success_reason": "Kicked %1$s from the game: '%2$s'",
        "kick_success_reasonedu": "Removed %1$s from the game: '%2$s'",
        "kick_no_host": "The host may not be kicked from the game.",
        "kick_no_teacher": "Teachers may not be removed from the game.",
        "kill_successful_edu": "Removed %1$s",
        "kill_successful": "Killed %1$s",
        "kill_description_edu": "Removes entities (players, mobs, etc.).",
        "kill_description": "Kills entities (players, mobs, etc.).",
        "list_description": "Lists players on the server.",
        "locate_description": "Displays the coordinates for the closest structure of a given type.",
        "locate_fail_noplayer": "The command can only be used by a valid player",
        "locate_fail_nostructurefound": "No valid structure found in this dimension",
        "locate_success": "The nearest %1$s is at block %2$s, (y?), %3$s",
        "togglecontentlog_toggle": "Enables/Disables the content log command",
        "togglecontentlog_enabled": "Content Log Enabled",
        "togglecontentlog_disabled": "Content Log Disabled",
        "me_description": "Displays a message about yourself.",
        "message_display_incoming": "%1$s whispers to you: %2$s",
        "message_display_outgoing": "You whisper to %1$s: %2$s",
        "message_sameTarget": "You can't send a private message to yourself!",
        "mixer_description": "Mixer Interactivity control",
        "mixer_error_unknown": "An unknown Mixer error occurred.",
        "mixer_error_notoken": "You need to be signed in with a Microsoft Account to enable Mixer interactivity.",
        "mixer_error_notsupported": "The device you are using does not support Mixer interactivity.",
        "mixer_interactive_error": "A Mixer error has occurred: %1$s",
        "mixer_scene_failed": "No scene named %1$s exists. Make sure you have entered the scene name correctly.",
        "mixer_scene_success": "Scene changed to: %1$s",
        "mixer_start_success": "Mixer interactive starting: %1$s",
        "mixer_start_fail_invalidCode": "Could not find project with ID \"%1$s\". Make sure the ID or share code is correct.",
        "mixer_stop_success": "Mixer interactive stopped.",
        "mixer_stop_fail": "No interactive session to stop.",
        "mixer_status_notinitialized": "Interactivity is not initialized.",
        "mixer_status_enabled": "Interactivity is enabled.",
        "mixer_status_initializing": "Interactivity is initializing.",
        "mixer_status_pending": "Interactivity is pending.",
        "mixer_status_disabled": "Interactivity is disabled.",
        "mixer_activatedbutton": "%1$s activated %2$s.",
        "mobevent_description": "Controls what mob events are allowed to run.",
        "mobevent_eventsEnabledSetToTrue": "Mob Events are now enabled. Individual events which are set to false will not run.",
        "mobevent_eventsEnabledSetToFalse": "Mob Events are now disabled. Individual events will not run.",
        "mobevent_eventsEnabledIsTrue": "Mob Events are enabled. Individual events which are set to false will not run.",
        "mobevent_eventsEnabledIsFalse": "Mob Events are disabled. Individual events will not run.",
        "mobevent_eventSetToTrue": "Mob Event %s (id: %s) set to true.",
        "mobevent_eventSetToTrueButEventsDisabled": "Mob Event %s (id: %s) set to true, but Mob Events are disabled.",
        "mobevent_eventSetToFalse": "Mob Event %s (id: %s) set to false.",
        "mobevent_eventIsTrue": "Mob Event %s (id: %s) is set to true.",
        "mobevent_eventIsTrueButEventsDisabled": "Mob Event %s (id: %s) is set to true, but Mob Events are disabled.",
        "mobevent_eventIsFalse": "Mob Event %s (id: %s) is set to false.",
        "op_description": "Grants operator status to a player.",
        "op_failed": "Could not op (already op or higher): %s",
        "op_success": "Opped: %s",
        "op_message": "You have been opped",
        "origin_commandblock": "CommandBlock",
        "origin_external": "External",
        "origin_devconsole": "DevConsole",
        "origin_script": "Script Engine",
        "origin_server": "Server",
        "origin_teacher": "Teacher",
        "ops_description": "Reloads and applies Op permissions.",
        "ops_reloaded": "Ops reloaded from file.",
        "ops_set_success": "Succeeded in setting operator level for player %s.",
        "permissions_description": "Reloads and applies permissions.",
        "permissions_reloaded": "Permissions reloaded from file.",
        "permissions_set_failed": "Could not set permission level %s for player %s.",
        "permissions_set_success": "Succeeded in setting permission level %s for player %s.",
        "permissions_save_failed": "Could not save permission level %s for player %s.",
        "permissions_save_success": "Succeeded in saving permission level %s for player %s.",
        "spawnParticleEmitter_description": "Creates a particle emitter",
        "particle_description": "Creates particles.",
        "particle_notFound": "Unknown effect name (%1$s)",
        "particle_success": "Playing effect %1$s for %2$d times",
        "players_list": "There are %1$d/%2$d players online:",
        "players_list_names": "%s",
        "playsound_description": "Plays a sound.",
        "playsound_playerTooFar": "Player %1$s is too far away to hear the sound",
        "playsound_success": "Played sound '%1$s' to %2$s",
        "position_description": "Toggles on/off coordinates for player.",
        "publish_failed": "Unable to host local game",
        "publish_started": "Local game hosted on port %1$s",
        "querytarget_description": "Gets transform, name, and id information about the given target entity or entities.",
        "querytarget_success": "Target data: %1$s",
        "reload_description": "Reloads all function files from all behavior packs.",
        "reload_success": "Existing function files have been reloaded. Restart Minecraft to reload NEW functions.",
        "replaceitem_description": "Replaces items in inventories.",
        "replaceitem_failed": "Could not replace %s slot %d with %d * %s",
        "replaceitem_keepFailed": "There is already an item occupying %s slot %d.",
        "replaceitem_noContainer": "Block at %s is not a container",
        "replaceitem_badSlotNumber": "Could not replace slot %d, must be a value between %d and %d.",
        "replaceitem_success": "Replaced %s slot %d with %d * %s",
        "replaceitem_success_entity": "Replaced %s slot %d of %s with %d * %s",
        "replaceitem_tagError": "Data tag parsing failed: %1$s",
        "save_description": "Control or check how the game saves data to disk.",
        "save_disabled": "Turned off world auto-saving",
        "save_enabled": "Turned on world auto-saving",
        "save_failed": "Saving failed: %1$s",
        "save_start": "Saving...",
        "save_success": "Saved the world",
        "save_all_error": "An error occurred when trying to pause the level storage.",
        "save_all_success": "Data saved. Files are now ready to be copied.",
        "save_off_alreadyOff": "Saving is already turned off.",
        "save_on_alreadyOn": "Saving is already turned on.",
        "save_on_notDone": "A previous save has not been completed.",
        "save_on_description": "Enables automatic server saves.",
        "save_on_success": "Changes to the level are resumed.",
        "save_state_description": "Checks if a previous save-all has finished and lists the files involved.",
        "say_description": "Sends a message in the chat to other players.",
        "scoreboard_description": "Tracks and displays scores for various objectives.",
        "scoreboard_allMatchesFailed": "All matches failed",
        "scoreboard_noMultiWildcard": "Only one user wildcard allowed",
        "scoreboard_objectiveNotFound": "No objective was found by the name '%1$s'",
        "scoreboard_objectiveReadOnly": "The objective '%1$s' is read-only and cannot be set",
        "scoreboard_objectives_add_alreadyExists": "An objective with the name '%1$s' already exists",
        "scoreboard_objectives_add_displayTooLong": "The display name '%1$s' is too long for an objective, it can be at most %2$d characters long",
        "scoreboard_objectives_add_success": "Added new objective '%1$s' successfully",
        "scoreboard_objectives_add_tooLong": "The name '%1$s' is too long for an objective, it can be at most %2$d characters long",
        "scoreboard_objectives_add_wrongType": "Invalid objective criteria type '%1$s'",
        "scoreboard_objectives_add_needName": "An objective needs a name.",
        "scoreboard_objectives_description": "Modify scoreboard objectives.",
        "scoreboard_objectives_list_count": "Showing %1$d objective(s) on scoreboard:",
        "scoreboard_objectives_list_empty": "There are no objectives on the scoreboard",
        "scoreboard_objectives_list_entry": "- %1$s: displays as '%2$s' and is type '%3$s'",
        "scoreboard_objectives_remove_success": "Removed objective '%1$s' successfully",
        "scoreboard_objectives_setdisplay_invalidSlot": "No such display slot '%1$s'",
        "scoreboard_objectives_setdisplay_successCleared": "Cleared objective display slot '%1$s'",
        "scoreboard_objectives_setdisplay_successSet": "Set the display objective in slot '%1$s' to '%2$s'",
        "scoreboard_players_add_success": "Added %1$d to [%2$s] for %3$s (now %4$d)",
        "scoreboard_players_add_multiple_success": "Added %1$d to [%2$s] for %3$d entities",
        "scoreboard_players_nameNotFound": "A player name must be given.",
        "scoreboard_players_enable_noTrigger": "Objective %1$s is not a trigger",
        "scoreboard_players_enable_success": "Enabled trigger %1$s for %2$s",
        "scoreboard_players_list_count": "Showing %1$d tracked players on the scoreboard:",
        "scoreboard_players_list_empty": "There are no tracked players on the scoreboard",
        "scoreboard_players_list_player_count": "Showing %1$d tracked objective(s) for %2$s:",
        "scoreboard_players_list_player_empty": "Player %1$s has no scores recorded",
        "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_players_operation_invalidOperation": "Invalid operation %1$s",
        "scoreboard_players_operation_notFound": "No %1$s score for %2$s found",
        "scoreboard_players_operation_success": "Updated [%1$s] for %2$d entities",
        "scoreboard_players_offlinePlayerName": "Player Offline",
        "scoreboard_players_random_invalidRange": "Min %1$d is not less than max %2$d",
        "scoreboard_players_remove_success": "Removed %1$d from [%2$s] for %3$s (now %4$d)",
        "scoreboard_players_remove_multiple_success": "Removed %1$d from [%2$s] for %3$d entities",
        "scoreboard_players_reset_success": "Reset scores of player %1$s",
        "scoreboard_players_resetscore_success": "Reset score %1$s of player %2$s",
        "scoreboard_players_set_success": "Set [%1$s] for %2$s to %3$d",
        "scoreboard_players_set_multiple_success": "Set [%1$s] for %2$d entities to %3$d",
        "scoreboard_players_set_tagError": "Could not parse dataTag, reason: %1$s",
        "scoreboard_players_set_tagMismatch": "The dataTag does not match for %1$s",
        "scoreboard_players_score_notFound": "No %1$s score for %2$s found",
        "scoreboard_players_test_failed": "Score %1$d is NOT in range %2$d to %3$d",
        "scoreboard_players_test_success": "Score %1$d is in range %2$d to %3$d",
        "scoreboard_teamNotFound": "No team was found by the name '%1$s'",
        "scoreboard_teams_add_alreadyExists": "A team with the name '%1$s' already exists",
        "scoreboard_teams_add_displayTooLong": "The display name '%1$s' is too long for a team, it can be at most %2$d characters long",
        "scoreboard_teams_add_success": "Added new team '%1$s' successfully",
        "scoreboard_teams_add_tooLong": "The name '%1$s' is too long for a team, it can be at most %2$d characters long",
        "scoreboard_teams_empty_alreadyEmpty": "Team %1$s is already empty, cannot remove nonexistant players",
        "scoreboard_teams_empty_success": "Removed all %1$d player(s) from team %2$s",
        "scoreboard_teams_join_failure": "Could not add %1$d player(s) to team %2$s: %3$s",
        "scoreboard_teams_join_success": "Added %1$d player(s) to team %2$s: %3$s",
        "scoreboard_teams_leave_failure": "Could not remove %1$d player(s) from their teams: %2$s",
        "scoreboard_teams_leave_noTeam": "You are not in a team",
        "scoreboard_teams_leave_success": "Removed %1$d player(s) from their teams: %2$s",
        "scoreboard_teams_list_count": "Showing %1$d teams on the scoreboard:",
        "scoreboard_teams_list_empty": "There are no teams registered on the scoreboard",
        "scoreboard_teams_list_entry": "- %1$s: '%2$s' has %3$d players",
        "scoreboard_teams_list_player_count": "Showing %1$d player(s) in team %2$s:",
        "scoreboard_teams_list_player_empty": "Team %1$s has no players",
        "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_teams_option_noValue": "Valid values for option %1$s are: %2$s",
        "scoreboard_teams_option_success": "Set option %1$s for team %2$s to %3$s",
        "scoreboard_teams_remove_success": "Removed team %1$s",
        "seed_success": "Seed: %1$s",
        "setblock_description": "Changes a block to another block.",
        "setblock_failed": "Unable to place block",
        "setblock_noChange": "The block couldn't be placed",
        "setblock_notFound": "There is no such block with ID/name %1$s",
        "setblock_outOfWorld": "Cannot place block outside of the world",
        "setblock_success": "Block placed",
        "setblock_tagError": "Data tag parsing failed: %1$s",
        "setidletimeout_success": "Successfully set the idle timeout to %1$d minutes.",
        "setfixedinvslots_description": "Sets the number of fixed inventory slots for the server.",
        "setfixedinvslots_success": "Number of Fixed Inventory Slots set to %1$d",
        "setfixedinvslot_description": "Sets a fixed slot to a specified item.",
        "setfixedinvslot_success": "Fixed Inventory Slot %1$d set to %2$s",
        "globalpause_description": "Sets or gets the paused state of the game for all players.",
        "globalpause_success": "Set or got pause state",
        "setmaxplayers_description": "Sets the maximum number of players for this game session.",
        "setmaxplayers_success": "Set max players to %1$d.",
        "setmaxplayers_success_upperbound": "(Bound to maximum allowed connections)",
        "setmaxplayers_success_lowerbound": "(Bound to current player count)",
        "setworldspawn_description": "Sets the world spawn.",
        "setworldspawn_success": "Set the world spawn point to (%1$d, %2$d, %3$d)",
        "setworldspawn_wrongDimension": "The world spawn can not be set in this dimension",
        "spawnpoint_success_single": "Set %1$s's spawn point to (%2$d, %3$d, %4$d)",
        "spawnpoint_description": "Sets the spawn point for a player.",
        "spawnpoint_success_multiple_specific": "Set spawn point for %1$s to (%2$d, %3$d, %4$d)",
        "spawnpoint_success_multiple_generic": "Set spawn point for %1$s",
        "spawnpoint_wrongDimension": "The spawn point cannot be set in this dimension",
        "spreadplayers_description": "Teleports entities to random locations.",
        "spreadplayers_failure_players": "Could not spread %1$s players around %2$s,%3$s (too many players for space - try using spread of at most %4$s)",
        "spreadplayers_failure_teams": "Could not spread %1$s teams around %2$s,%3$s (too many players for space - try using spread of at most %4$s)",
        "spreadplayers_info_players": "(Average distance between players is %1$s blocks apart after %2$s iterations)",
        "spreadplayers_info_teams": "(Average distance between teams is %1$s blocks apart after %2$s iterations)",
        "spreadplayers_spreading_players": "Spreading %1$s players %2$s blocks around %3$s,%4$s (min %5$s blocks apart)",
        "spreadplayers_spreading_teams": "Spreading %1$s teams %2$s blocks around %3$s,%4$s (min %5$s blocks apart)",
        "spreadplayers_success_players": "Successfully spread %1$s players around %2$s,%3$s",
        "spreadplayers_success_teams": "Successfully spread %1$s teams around %2$s,%3$s",
        "stats_cleared": "Cleared %1$s stats",
        "stats_failed": "Invalid parameters",
        "stats_noCompatibleBlock": "Block at %1$d, %2$d, %3$d can not track stats",
        "stats_success": "Storing %1$s stats in %2$s on %3$s",
        "stop_description": "Stops the server.",
        "stop_start": "Stopping the server",
        "stopsound_description": "Stops a sound.",
        "stopsound_success": "Stopped sound %s for %s",
        "stopsound_success_all": "Stopped all sounds for %s",
        "summon_description": "Summons an entity.",
        "summon_failed": "Unable to summon object",
        "summon_outOfWorld": "Cannot summon the object out of the world",
        "summon_success": "Object successfully summoned",
        "summon_tagError": "Data tag parsing failed: %1$s",
        "tag_description": "Manages tags stored in entities.",
        "tag_add_failed": "Target either already has the tag or has too many tags",
        "tag_add_success_single": "Added tag '%1$s' to %2$s",
        "tag_add_success_multiple": "Added tag '%1$s' to %2$d entities",
        "tag_list_single_empty": "%s has no tags",
        "tag_list_single_success": "%1$s has %2$d tags: %3$s",
        "tag_list_multiple_empty": "There are no tags on the %d entities",
        "tag_list_multiple_success": "The %1$d entities have %2$d total tags: %3$s",
        "tag_remove_failed": "Target does not have this tag",
        "tag_remove_success_single": "Removed tag '%1$s' from %2$s",
        "tag_remove_success_multiple": "Removed tag '%1$s' from %2$d entities",
        "tell_description": "Sends a private message to one or more players.",
        "tellraw_description": "Sends a JSON message to players.",
        "tellraw_jsonException": "Invalid json: %1$s",
        "tellraw_jsonStringException": "Invalid json string data.",
        "tellraw_error_noData": "No data was provided.",
        "tellraw_error_notArray": "Rawtext object must contain an array. Example: \"rawtext\":[{..}]",
        "tellraw_error_textNotString": "text field in rawtext must contain a string. Example: \"rawtext\":[{\"text\": \"text to display\"}]",
        "tellraw_error_translateNotString": "translate field in rawtext must contain a language key. Example: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
        "tellraw_error_withNotArrayOrRawText": "with field in rawtext must contain a array or another rawtext object. Example 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Example 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
        "tellraw_error_itemIsNotObject": "Json value in rawtext array was not an object. Example: \"rawtext\": [{ \"text\" : \"my text\" }]",
        "educlientinfo_description": "Get tenant ID and host status. Intended for CM.",
        "testfor_description": "Counts entities (players, mobs, items, etc.) matching specified conditions.",
        "testfor_failure": "%1$s did not match the required data structure",
        "testfor_success": "Found %1$s",
        "testfor_tagError": "Data tag parsing failed: %1$s",
        "testforblock_description": "Tests whether a certain block is in a specific location.",
        "testforblock_failed_data": "The block at %1$d,%2$d,%3$d did not match the expected block state.",
        "testforblock_failed_nbt": "The block at %1$d,%2$d,%3$d did not have the required NBT keys.",
        "testforblock_failed_tile": "The block at %1$d,%2$d,%3$d is %4$s (expected: %5$s).",
        "testforblock_failed_tileEntity": "The block at %1$d,%2$d,%3$d is not a tile entity and cannot support tag matching.",
        "testforblock_outOfWorld": "Cannot test for block outside of the world",
        "testforblock_success": "Successfully found the block at %1$d,%2$d,%3$d.",
        "testforblocks_description": "Tests whether the blocks in two regions match.",
        "tickingarea_description": "Add, remove, or list ticking areas.",
        "tickingarea_inuse": "%1$d/%2$d ticking areas in use.",
        "tickingarea_noneExist_currentDimension": "No ticking areas exist in the current dimension.",
        "tickingarea_add_bounds_success": "Added ticking area from %1$d to %2$d.",
        "tickingarea_add_circle_success": "Added ticking area centered at %1$d with a radius of %2$d chunks.",
        "tickingarea_add_failure": "Max number of ticking areas (%1$d) has already been reached. Cannot add more ticking areas.",
        "tickingarea_add_conflictingname": "A ticking area with the name %1$s already exists.",
        "tickingarea_add_chunkfailure": "Ticking area contains more than %1$d chunks, ticking area is too large and cannot be created.",
        "tickingarea_add_radiusfailure": "Radius cannot be larger than %1$d, ticking area is too large and cannot be created.",
        "tickingarea_remove_success": "Removed ticking area(s)",
        "tickingarea_remove_failure": "No ticking areas containing the block position %1$d exist in the current dimension.",
        "tickingarea_remove_byname_failure": "No ticking areas named %1$s exist in the current dimension.",
        "tickingarea_remove_all_success": "Removed ticking area(s)",
        "tickingarea_remove_all_failure": "No ticking areas exist in the current dimension.",
        "tickingarea_list_chunks": "chunks",
        "tickingarea_list_circle_radius": "Radius",
        "tickingarea_list_success_currentDimension": "List of all ticking areas in current dimension",
        "tickingarea_list_success_allDimensions": "List of all ticking areas in all dimensions",
        "tickingarea_list_failure_allDimensions": "No ticking areas exist in any dimension.",
        "tickingarea_list_to": "to",
        "tickingarea_list_type_circle": "Circle",
        "time_added": "Added %1$d to the time",
        "time_description": "Changes or queries the world's game time.",
        "time_disabled": "Always Day is enabled in this level.",
        "time_query_day": "Day is %d",
        "time_query_daytime": "Daytime is %d",
        "time_query_gametime": "Gametime is %d",
        "time_set": "Set the time to %1$d",
        "time_stop": "Time %1$s",
        "title_description": "Controls screen titles.",
        "title_success": "Title command successfully executed",
        "titleraw_description": "Controls screen titles with JSON messages.",
        "toggledownfall_description": "Toggles the weather.",
        "tp_description": "Teleports entities (players, mobs, etc.).",
        "tp_notSameDimension": "Unable to teleport because players are not in the same dimension",
        "tp_outOfWorld": "Cannot teleport entities outside of the world",
        "tp_permission": "You do not have permission to use this slash command.",
        "tp_safeTeleportFail": "Unable to teleport %1$s to %2$s because the area wasn't clear of blocks.",
        "tp_far": "Unable to teleport %1$s to the unloaded area at %2$s",
        "tp_success": "Teleported %1$s to %2$s",
        "tp_successVictim": "You have been teleported to %1$s",
        "tp_success_coordinates": "Teleported %1$s to %2$s, %3$s, %4$s",
        "transferserver_description": "Transfers a player to another server.",
        "transferserver_successful": "Transferred player",
        "transferserver_invalid_port": "Invalid port (0-65535)",
        "trigger_description": "Sets a trigger to be activated.",
        "trigger_disabled": "Trigger %1$s is not enabled",
        "trigger_invalidMode": "Invalid trigger mode %1$s",
        "trigger_invalidObjective": "Invalid trigger name %1$s",
        "trigger_invalidPlayer": "Only players can use the /trigger command",
        "trigger_success": "Trigger %1$s changed with %2$s %3$s",
        "unban_failed": "Could not unban player %1$s",
        "unban_success": "Unbanned player %1$s",
        "unbanip_invalid": "You have entered an invalid IP address",
        "unbanip_success": "Unbanned IP address %1$s",
        "validategamelighting_description": "Validate game lighting for a specified region",
        "validategamelighting_checkRegionTooBig": "Region to check for lighting is too big! (%1$d > %2$d)",
        "validategamelighting_outOfWorld": "Cannot check lighting outside of the world",
        "weather_clear": "Changing to clear weather",
        "weather_description": "Sets the weather.",
        "weather_disabled": "Weather Cycle isn't enabled in this level.",
        "weather_query": "Weather state is: %s",
        "weather_query_clear": "clear",
        "weather_query_rain": "rain",
        "weather_query_thunder": "thunder",
        "weather_rain": "Changing to rainy weather",
        "weather_thunder": "Changing to rain and thunder",
        "whitelist_add_failed": "Could not add %1$s to the whitelist",
        "whitelist_add_success": "Added %1$s to the whitelist",
        "whitelist_description": "Manages the server whitelist.",
        "whitelist_disabled": "Turned off the whitelist",
        "whitelist_enabled": "Turned on the whitelist",
        "whitelist_list": "There are %1$d (out of %2$d seen) whitelisted players:",
        "whitelist_reloaded": "Whitelist reloaded from file.",
        "whitelist_remove_failed": "Could not remove %1$s from the whitelist",
        "whitelist_remove_success": "Removed %1$s from the whitelist",
        "world_age_description": "Changes or queries the world's age (time since creation).",
        "world_age_added": "Added %1$d to the world's age",
        "world_age_query": "World age is %d",
        "world_age_set": "Set the world's age to %1$d",
        "worldborder_center_success": "Set world border center to %1$s,%2$s",
        "worldborder_damage_amount_success": "Set world border damage amount to %1$s per block (from %2$s per block)",
        "worldborder_damage_buffer_success": "Set world border damage buffer to %1$s blocks (from %2$s blocks)",
        "worldborder_get_success": "World border is currently %1$s blocks wide",
        "worldborder_set_success": "Set world border to %1$s blocks wide (from %2$s blocks)",
        "worldborder_setSlowly_grow_success": "Growing world border to %1$s blocks wide (up from %2$s blocks) over %3$s seconds",
        "worldborder_setSlowly_shrink_success": "Shrinking world border to %1$s blocks wide (down from %2$s blocks) over %3$s seconds",
        "worldborder_warning_distance_success": "Set world border warning to %1$s blocks away (from %2$s blocks)",
        "worldborder_warning_time_success": "Set world border warning to %1$s seconds away (from %2$s seconds)",
        "worldbuilder_description": "Toggle World Builder status of caller.",
        "worldbuilder_success": "World Builder status updated to %1$s",
        "wsserver_description": "Attempts to connect to the websocket server on the provided URL.",
        "wsserver_invalid_url": "The provided server URL is invalid",
        "wsserver_request_existing": "Another connection request is currently running",
        "wsserver_request_failed": "Could not connect to server: %1$s",
        "wsserver_success": "Connection established to server: %1$s",
        "xp_description": "Adds or removes player experience.",
        "xp_failure_widthdrawXp": "Cannot give player negative experience points",
        "xp_success": "Gave %1$d experience to %2$s",
        "xp_success_levels": "Gave %1$d levels to %2$s",
        "xp_success_negative_levels": "Taken %1$d levels from %2$s"
    },
    item:{
        "air": [
            "Air"
        ],
        "apple": [
            "Apple"
        ],
        "golden_apple": [
            "Golden Apple"
        ],
        "appleenchanted": [
            "Enchanted Apple"
        ],
        "armor_stand": [
            "Armor Stand"
        ],
        "arrow": [
            "Arrow"
        ],
        "tipped_arrow": [
            "Tipped Arrow"
        ],
        "banner": [
            "Banner",
            "Black Banner",
            "Red Banner",
            "Green Banner",
            "Brown Banner",
            "Blue Banner",
            "Purple Banner",
            "Cyan Banner",
            "Light Gray Banner",
            "Gray Banner",
            "Pink Banner",
            "Lime Banner",
            "Yellow Banner",
            "Light Blue Banner",
            "Magenta Banner",
            "Orange Banner",
            "White Banner"
        ],
        "bed": [
            "Bed",
            "White Bed",
            "Orange Bed",
            "Magenta Bed",
            "Light Blue Bed",
            "Yellow Bed",
            "Lime Bed",
            "Pink Bed",
            "Gray Bed",
            "Light Gray Bed",
            "Cyan Bed",
            "Purple Bed",
            "Blue Bed",
            "Brown Bed",
            "Green Bed",
            "Red Bed",
            "Black Bed"
        ],
        "bell": [
            "Bell"
        ],
        "steak": [
            "Steak"
        ],
        "beef": [
            "Raw Beef"
        ],
        "beetroot": [
            "Beetroot"
        ],
        "beetroot_soup": [
            "Beetroot Soup"
        ],
        "blaze_powder": [
            "Blaze Powder"
        ],
        "blaze_rod": [
            "Blaze Rod"
        ],
        "boat": [
            "Boat",
            "Oak Boat",
            "Spruce Boat",
            "Birch Boat",
            "Jungle Boat",
            "Acacia Boat",
            "Dark Oak Boat"
        ],
        "bone": [
            "Bone"
        ],
        "book": [
            "Book"
        ],
        "chainmail_boots": [
            "Chain Boots"
        ],
        "leather_boots": [
            "Leather Boots"
        ],
        "diamond_boots": [
            "Diamond Boots"
        ],
        "golden_boots": [
            "Golden Boots"
        ],
        "iron_boots": [
            "Iron Boots"
        ],
        "bow": [
            "Bow"
        ],
        "bowl": [
            "Bowl"
        ],
        "bread": [
            "Bread"
        ],
        "brewing_stand": [
            "Brewing Stand"
        ],
        "brick": [
            "Brick"
        ],
        "bucket": [
            "Bucket"
        ],
        "bucketLava": [
            "Lava Bucket"
        ],
        "bucketWater": [
            "Water Bucket"
        ],
        "bucketFish": [
            "Bucket of Cod"
        ],
        "bucketSalmon": [
            "Bucket of Salmon"
        ],
        "bucketTropical": [
            "Bucket of Tropical Fish"
        ],
        "bucketPuffer": [
            "Bucket of Pufferfish"
        ],
        "bucketCustomFish": [
            "Bucket of"
        ],
        "tropicalColorWhite": [
            "White"
        ],
        "tropicalColorOrange": [
            "Orange"
        ],
        "tropicalColorMagenta": [
            "Magenta"
        ],
        "tropicalColorSky": [
            "Sky"
        ],
        "tropicalColorYellow": [
            "Yellow"
        ],
        "tropicalColorLime": [
            "Lime"
        ],
        "tropicalColorRose": [
            "Rose"
        ],
        "tropicalColorGray": [
            "Gray"
        ],
        "tropicalColorSilver": [
            "Silver"
        ],
        "tropicalColorTeal": [
            "Teal"
        ],
        "tropicalColorPlum": [
            "Plum"
        ],
        "tropicalColorBlue": [
            "Blue"
        ],
        "tropicalColorBrown": [
            "Brown"
        ],
        "tropicalColorGreen": [
            "Green"
        ],
        "tropicalColorRed": [
            "Red"
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
            "Black Tang"
        ],
        "tropicalSchoolBlueDory": [
            "Blue Dory"
        ],
        "tropicalSchoolButterflyFish": [
            "Butterfly Fish"
        ],
        "tropicalSchoolCichlid": [
            "Chichlid"
        ],
        "tropicalSchoolClownfish": [
            "Clownfish"
        ],
        "tropicalSchoolCottonCandyBetta": [
            "Cotton Candy Betta"
        ],
        "tropicalSchoolDottyback": [
            "Dottyback"
        ],
        "tropicalSchoolEmperorRedSnapper": [
            "Emperor Red Snapper"
        ],
        "tropicalSchoolGoatfish": [
            "Goatfish"
        ],
        "tropicalSchoolMoorishIdol": [
            "Moorish Idol"
        ],
        "tropicalSchoolOrnateButterfly": [
            "Ornate Butterfly"
        ],
        "tropicalSchoolParrotfish": [
            "Parrotfish"
        ],
        "tropicalSchoolQueenAngelFish": [
            "Queen Angel Fish"
        ],
        "tropicalSchoolRedCichlid": [
            "Red Cichlid"
        ],
        "tropicalSchoolRedLippedBlenny": [
            "Red Lipped Blenny"
        ],
        "tropicalSchoolRedSnapper": [
            "Red Snapper"
        ],
        "tropicalSchoolThreadfin": [
            "Threadfin"
        ],
        "tropicalSchoolTomatoClown": [
            "Tomato Clown"
        ],
        "tropicalSchoolTriggerfish": [
            "Triggerfish"
        ],
        "tropicalSchoolYellowTang": [
            "Yellow Tang"
        ],
        "tropicalSchoolYellowtailParrot": [
            "Yellowtail Parrot"
        ],
        "cake": [
            "Cake"
        ],
        "camera": [
            "Camera"
        ],
        "golden_carrot": [
            "Golden Carrot"
        ],
        "carrotOnAStick": [
            "Carrot on a Stick"
        ],
        "warped_fungus_on_a_stick": [
            "Warped Fungus on a Stick"
        ],
        "carrot": [
            "Carrot"
        ],
        "cauldron": [
            "Cauldron"
        ],
        "coal": [
            "Coal",
            null,
            "Charcoal"
        ],
        "chainmail_chestplate": [
            "Chain Chestplate"
        ],
        "leather_chestplate": [
            "Leather Tunic"
        ],
        "diamond_chestplate": [
            "Diamond Chestplate"
        ],
        "golden_chestplate": [
            "Golden Chestplate"
        ],
        "iron_chestplate": [
            "Iron Chestplate"
        ],
        "chorus_fruit": [
            "Chorus Fruit"
        ],
        "chorus_fruit_popped": [
            "Popped Chorus Fruit"
        ],
        "cooked_beef": [
            "Cooked Beef"
        ],
        "cooked_chicken": [
            "Cooked Chicken"
        ],
        "cooked_porkchop": [
            "Cooked Porkchop"
        ],
        "chicken": [
            "Raw Chicken"
        ],
        "clay_ball": [
            "Clay"
        ],
        "clock": [
            "Clock"
        ],
        "comparator": [
            "Redstone Comparator"
        ],
        "compass": [
            "Compass"
        ],
        "lodestonecompass": [
            "Lodestone Compass"
        ],
        "cookie": [
            "Cookie"
        ],
        "crossbow": [
            "Crossbow"
        ],
        "diamond": [
            "Diamond"
        ],
        "repeater": [
            "Redstone Repeater"
        ],
        "acacia_door": [
            "Acacia Door"
        ],
        "birch_door": [
            "Birch Door"
        ],
        "dark_oak_door": [
            "Dark Oak Door"
        ],
        "iron_door": [
            "Iron Door"
        ],
        "jungle_door": [
            "Jungle Door"
        ],
        "wooden_door": [
            "Oak Door"
        ],
        "spruce_door": [
            "Spruce Door"
        ],
        "crimson_door": [
            "Crimson Door"
        ],
        "warped_door": [
            "Warped Door"
        ],
        "dragon_breath": [
            "Dragon's Breath"
        ],
        "dye": [
            "Dye",
            "Ink Sac",
            "Red Dye",
            "Green Dye",
            "Cocoa Beans",
            "Lapis Lazuli",
            "Purple Dye",
            "Cyan Dye",
            "Light Gray Dye",
            "Gray Dye",
            "Pink Dye",
            "Lime Dye",
            "Yellow Dye",
            "Light Blue Dye",
            "Magenta Dye",
            "Orange Dye",
            "Bone Meal",
            "Black Dye",
            "Brown Dye",
            "Blue Dye",
            "White Dye"
        ],
        "egg": [
            "Egg"
        ],
        "elytra": [
            "Elytra"
        ],
        "emerald": [
            "Emerald"
        ],
        "emptyMap": [
            "Empty Map"
        ],
        "emptyLocatorMap": [
            "Empty Locator Map"
        ],
        "emptyPotion": [
            "Water Bottle"
        ],
        "enchanted_book": [
            "Enchanted Book"
        ],
        "end_crystal": [
            "End Crystal"
        ],
        "end_rod": [
            "End Rod"
        ],
        "ender_eye": [
            "Eye of Ender"
        ],
        "ender_pearl": [
            "Ender Pearl"
        ],
        "experience_bottle": [
            "Bottle o' Enchanting"
        ],
        "feather": [
            "Feather"
        ],
        "fermented_spider_eye": [
            "Fermented Spider Eye"
        ],
        "fireball": [
            "Fire Charge"
        ],
        "fireworks": [
            "Firework Rocket"
        ],
        "fireworksCharge": [
            "Firework Star"
        ],
        "clownfish": [
            "Tropical Fish"
        ],
        "cooked_fish": [
            "Cooked Cod"
        ],
        "fish": [
            "Raw Cod"
        ],
        "pufferfish": [
            "Pufferfish"
        ],
        "cooked_salmon": [
            "Cooked Salmon"
        ],
        "salmon": [
            "Raw Salmon"
        ],
        "fishing_rod": [
            "Fishing Rod"
        ],
        "flint": [
            "Flint"
        ],
        "flint_and_steel": [
            "Flint and Steel"
        ],
        "flower_pot": [
            "Flower Pot"
        ],
        "frame": [
            "Item Frame"
        ],
        "ghast_tear": [
            "Ghast Tear"
        ],
        "glass_bottle": [
            "Glass Bottle"
        ],
        "gold_nugget": [
            "Gold Nugget"
        ],
        "iron_nugget": [
            "Iron Nugget"
        ],
        "diamond_axe": [
            "Diamond Axe"
        ],
        "golden_axe": [
            "Golden Axe"
        ],
        "iron_axe": [
            "Iron Axe"
        ],
        "stone_axe": [
            "Stone Axe"
        ],
        "wooden_axe": [
            "Wooden Axe"
        ],
        "chainmail_helmet": [
            "Chain Helmet"
        ],
        "leather_helmet": [
            "Leather Cap"
        ],
        "diamond_helmet": [
            "Diamond Helmet"
        ],
        "golden_helmet": [
            "Golden Helmet"
        ],
        "iron_helmet": [
            "Iron Helmet"
        ],
        "diamond_hoe": [
            "Diamond Hoe"
        ],
        "golden_hoe": [
            "Golden Hoe"
        ],
        "iron_hoe": [
            "Iron Hoe"
        ],
        "stone_hoe": [
            "Stone Hoe"
        ],
        "wooden_hoe": [
            "Wooden Hoe"
        ],
        "honey_bottle": [
            "Honey Bottle"
        ],
        "honeycomb": [
            "Honeycomb"
        ],
        "horsearmordiamond": [
            "Diamond Horse Armor"
        ],
        "horsearmorgold": [
            "Gold Horse Armor"
        ],
        "horsearmoriron": [
            "Iron Horse Armor"
        ],
        "horsearmorleather": [
            "Leather Horse Armor"
        ],
        "gold_ingot": [
            "Gold Ingot"
        ],
        "iron_ingot": [
            "Iron Ingot"
        ],
        "netherite_ingot": [
            "Netherite Ingot"
        ],
        "netherite_scrap": [
            "Netherite Scrap"
        ],
        "netherite_sword": [
            "Netherite Sword"
        ],
        "netherite_pickaxe": [
            "Netherite Pickaxe"
        ],
        "netherite_axe": [
            "Netherite Axe"
        ],
        "netherite_shovel": [
            "Netherite Shovel"
        ],
        "netherite_hoe": [
            "Netherite Hoe"
        ],
        "netherite_boots": [
            "Netherite Boots"
        ],
        "netherite_leggings": [
            "Netherite Leggings"
        ],
        "netherite_chestplate": [
            "Netherite Chestplate"
        ],
        "netherite_helmet": [
            "Netherite Helmet"
        ],
        "lead": [
            "Lead"
        ],
        "leather": [
            "Leather"
        ],
        "leaves": [
            "Leaves",
            "Oak Leaves",
            "Spruce Leaves",
            "Birch Leaves",
            "Jungle Leaves",
            "Acacia Leaves",
            "Dark Oak Leaves"
        ],
        "chainmail_leggings": [
            "Chain Leggings"
        ],
        "leather_leggings": [
            "Leather Pants"
        ],
        "diamond_leggings": [
            "Diamond Leggings"
        ],
        "golden_leggings": [
            "Golden Leggings"
        ],
        "iron_leggings": [
            "Iron Leggings"
        ],
        "nautilus_shell": [
            "Nautilus Shell"
        ],
        "heart_of_the_sea": [
            "Heart of the Sea"
        ],
        "magma_cream": [
            "Magma Cream"
        ],
        "map": [
            "Map"
        ],
        "melon": [
            "Melon"
        ],
        "milk": [
            "Milk"
        ],
        "minecart": [
            "Minecart"
        ],
        "chest_minecart": [
            "Minecart with Chest"
        ],
        "command_block_minecart": [
            "Minecart with Command Block"
        ],
        "minecartFurnace": [
            "Minecart with Furnace"
        ],
        "hopper_minecart": [
            "Minecart with Hopper"
        ],
        "tnt_minecart": [
            "Minecart with TNT"
        ],
        "trident": [
            "Trident"
        ],
        "mushroom_stew": [
            "Mushroom Stew"
        ],
        "muttoncooked": [
            "Cooked Mutton"
        ],
        "muttonraw": [
            "Raw Mutton"
        ],
        "name_tag": [
            "Name Tag"
        ],
        "netherbrick": [
            "Nether Brick"
        ],
        "quartz": [
            "Nether Quartz"
        ],
        "nether_wart": [
            "Nether Wart"
        ],
        "netherStar": [
            "Nether Star"
        ],
        "painting": [
            "Painting"
        ],
        "paper": [
            "Paper"
        ],
        "diamond_pickaxe": [
            "Diamond Pickaxe"
        ],
        "golden_pickaxe": [
            "Golden Pickaxe"
        ],
        "iron_pickaxe": [
            "Iron Pickaxe"
        ],
        "stone_pickaxe": [
            "Stone Pickaxe"
        ],
        "wooden_pickaxe": [
            "Wooden Pickaxe"
        ],
        "porkchop_cooked": [
            "Cooked Porkchop"
        ],
        "porkchop": [
            "Raw Porkchop"
        ],
        "portfolio": [
            "Portfolio"
        ],
        "potato": [
            "Potato"
        ],
        "baked_potato": [
            "Baked Potato"
        ],
        "poisonous_potato": [
            "Poisonous Potato"
        ],
        "potion": [
            "Potion"
        ],
        "prismarine_crystals": [
            "Prismarine Crystals"
        ],
        "prismarine_shard": [
            "Prismarine Shard"
        ],
        "pumpkin_pie": [
            "Pumpkin Pie"
        ],
        "cooked_rabbit": [
            "Cooked Rabbit"
        ],
        "rabbit_foot": [
            "Rabbit's Foot"
        ],
        "rabbit_hide": [
            "Rabbit Hide"
        ],
        "rabbit": [
            "Raw Rabbit"
        ],
        "rabbit_stew": [
            "Rabbit Stew"
        ],
        "record": [
            "Music Disc"
        ],
        "redstone": [
            "Redstone"
        ],
        "reeds": [
            "Sugar Canes"
        ],
        "kelp": [
            "Kelp"
        ],
        "dried_kelp": [
            "Dried Kelp"
        ],
        "rotten_flesh": [
            "Rotten Flesh"
        ],
        "ruby": [
            "Ruby"
        ],
        "saddle": [
            "Saddle"
        ],
        "wheat_seeds": [
            "Seeds"
        ],
        "beetroot_seeds": [
            "Beetroot Seeds"
        ],
        "melon_seeds": [
            "Melon Seeds"
        ],
        "pumpkin_seeds": [
            "Pumpkin Seeds"
        ],
        "shears": [
            "Shears"
        ],
        "diamond_shovel": [
            "Diamond Shovel"
        ],
        "golden_shovel": [
            "Golden Shovel"
        ],
        "iron_shovel": [
            "Iron Shovel"
        ],
        "stone_shovel": [
            "Stone Shovel"
        ],
        "wooden_shovel": [
            "Wooden Shovel"
        ],
        "sign": [
            "Oak Sign"
        ],
        "spruce_sign": [
            "Spruce Sign"
        ],
        "birch_sign": [
            "Birch Sign"
        ],
        "jungle_sign": [
            "Jungle Sign"
        ],
        "acacia_sign": [
            "Acacia Sign"
        ],
        "darkoak_sign": [
            "Dark Oak Sign"
        ],
        "crimson_sign": [
            "Crimson Sign"
        ],
        "warped_sign": [
            "Warped Sign"
        ],
        "skull": [
            "Head",
            "Skeleton Skull",
            "Wither Skeleton Skull",
            "Zombie Head",
            "Head",
            "Creeper Head",
            "Dragon Head"
        ],
        "slime_ball": [
            "Slimeball"
        ],
        "snowball": [
            "Snowball"
        ],
        "speckled_melon": [
            "Glistering Melon"
        ],
        "spider_eye": [
            "Spider Eye"
        ],
        "stick": [
            "Stick"
        ],
        "string": [
            "String"
        ],
        "sugar": [
            "Sugar"
        ],
        "gunpowder": [
            "Gunpowder"
        ],
        "diamond_sword": [
            "Diamond Sword"
        ],
        "golden_sword": [
            "Golden Sword"
        ],
        "iron_sword": [
            "Iron Sword"
        ],
        "stone_sword": [
            "Stone Sword"
        ],
        "wooden_sword": [
            "Wooden Sword"
        ],
        "wheat": [
            "Wheat"
        ],
        "writable_book": [
            "Book & Quill"
        ],
        "written_book": [
            "Written Book"
        ],
        "glowstone_dust": [
            "Glowstone Dust"
        ],
        "shield": [
            "Shield"
        ],
        "shulker_shell": [
            "Shulker Shell"
        ],
        "totem": [
            "Totem of Undying"
        ],
        "turtle_helmet": [
            "Turtle Shell"
        ],
        "turtle_shell_piece": [
            "Scute"
        ],
        "phantom_membrane": [
            "Phantom Membrane"
        ],
        "sweet_berries": [
            "Sweet Berries"
        ],
        "suspicious_stew": [
            "Suspicious Stew"
        ],
        "banner_pattern": [
            "Banner Pattern"
        ],
        "acaciaFence": [
            "Acacia Fence"
        ],
        "acacia_fence_gate": [
            "Acacia Fence Gate"
        ],
        "activator_rail": [
            "Activator Rail"
        ],
        "allow": [
            "Allow"
        ],
        "deny": [
            "Deny"
        ],
        "border_block": [
            "Border"
        ],
        "anvil": [
            "Anvil",
            "Anvil",
            null,
            null,
            null,
            "Slightly Damaged Anvil",
            null,
            null,
            null,
            "Very Damaged Anvil"
        ],
        "barrier": [
            "Barrier"
        ],
        "beacon": [
            "Beacon"
        ],
        "beehive": [
            "Beehive"
        ],
        "bee_nest": [
            "Bee Nest"
        ],
        "target": [
            "Target"
        ],
        "bedrock": [
            "Bedrock"
        ],
        "conduit": [
            "Conduit"
        ],
        "invisibleBedrock": [
            "Invisible Bedrock"
        ],
        "birchFence": [
            "Birch Fence"
        ],
        "birch_fence_gate": [
            "Birch Fence Gate"
        ],
        "blast_furnace": [
            "Blast Furnace"
        ],
        "bone_block": [
            "Bone Block"
        ],
        "coal_block": [
            "Block of Coal"
        ],
        "diamond_block": [
            "Block of Diamond"
        ],
        "emerald_block": [
            "Block of Emerald"
        ],
        "gold_block": [
            "Block of Gold"
        ],
        "iron_block": [
            "Block of Iron"
        ],
        "lapis_block": [
            "Lapis Lazuli Block"
        ],
        "redstone_block": [
            "Block of Redstone"
        ],
        "bookshelf": [
            "Bookshelf"
        ],
        "brick_block": [
            "Brick Block"
        ],
        "brown_mushroom": [
            "Brown Mushroom"
        ],
        "wooden_button": [
            "Oak Button"
        ],
        "acacia_button": [
            "Acacia Button"
        ],
        "birch_button": [
            "Birch Button"
        ],
        "dark_oak_button": [
            "Dark Oak Button"
        ],
        "jungle_button": [
            "Jungle Button"
        ],
        "spruce_button": [
            "Spruce Button"
        ],
        "stone_button": [
            "Stone Button"
        ],
        "cactus": [
            "Cactus"
        ],
        "dried_kelp_block": [
            "Dried Kelp Block"
        ],
        "carved_pumpkin": [
            "Carved Pumpkin"
        ],
        "chest": [
            "Chest"
        ],
        "ender_chest": [
            "Ender Chest"
        ],
        "jigsaw": [
            "Jigsaw Block"
        ],
        "honey_block": [
            "Honey Block"
        ],
        "honeycomb_block": [
            "Honeycomb Block"
        ],
        "lodestone": [
            "Lodestone"
        ],
        "nether_sprouts": [
            "Nether Sprouts"
        ],
        "crimson_stem": [
            "Crimson Stem"
        ],
        "warped_stem": [
            "Warped Stem"
        ],
        "stripped_crimson_stem": [
            "Stripped Crimson Stem"
        ],
        "stripped_warped_stem": [
            "Stripped Warped Stem"
        ],
        "crimson_hyphae": [
            "Crimson Hyphae"
        ],
        "warped_hyphae": [
            "Warped Hyphae"
        ],
        "stripped_crimson_hyphae": [
            "Stripped Crimson Hyphae"
        ],
        "stripped_warped_hyphae": [
            "Stripped Warped Hyphae"
        ],
        "crimson_planks": [
            "Crimson Planks"
        ],
        "warped_planks": [
            "Warped Planks"
        ],
        "crimson_trapdoor": [
            "Crimson Trapdoor"
        ],
        "warped_trapdoor": [
            "Warped Trapdoor"
        ],
        "crimson_standing_sign": [
            "Crimson Sign"
        ],
        "warped_standing_sign": [
            "Warped Sign"
        ],
        "crimson_wall_sign": [
            "Crimson Sign"
        ],
        "warped_wall_sign": [
            "Warped Sign"
        ],
        "crimson_stairs": [
            "Crimson Stairs"
        ],
        "warped_stairs": [
            "Warped Stairs"
        ],
        "crimson_fence": [
            "Crimson Fence"
        ],
        "warped_fence": [
            "Warped Fence"
        ],
        "crimson_fence_gate": [
            "Crimson Fence Gate"
        ],
        "warped_fence_gate": [
            "Warped Fence Gate"
        ],
        "crimson_button": [
            "Crimson Button"
        ],
        "warped_button": [
            "Warped Button"
        ],
        "crimson_pressure_plate": [
            "Crimson Pressure Plate"
        ],
        "warped_pressure_plate": [
            "Warped Pressure Plate"
        ],
        "crimson_slab": [
            "Crimson Slab"
        ],
        "warped_slab": [
            "Warped Slab"
        ],
        "crimson_double_slab": [
            "Crimson Slab"
        ],
        "warped_double_slab": [
            "Warped Slab"
        ],
        "shroomlight": [
            "Shroomlight"
        ],
        "crimson_nylium": [
            "Crimson Nylium"
        ],
        "warped_nylium": [
            "Warped Nylium"
        ],
        "basalt": [
            "Basalt"
        ],
        "polished_basalt": [
            "Polished Basalt"
        ],
        "blackstone": [
            "Blackstone"
        ],
        "polished_blackstone_bricks": [
            "Polished Blackstone Bricks"
        ],
        "cracked_polished_blackstone_bricks": [
            "Cracked Polished Blackstone Bricks"
        ],
        "polished_blackstone_brick_stairs": [
            "Polished Blackstone Brick Stairs"
        ],
        "blackstone_stairs": [
            "Blackstone Stairs"
        ],
        "blackstone_wall": [
            "Blackstone Wall"
        ],
        "polished_blackstone_brick_wall": [
            "Polished Blackstone Brick Wall"
        ],
        "chiseled_polished_blackstone": [
            "Chiseled Polished Blackstone"
        ],
        "gilded_blackstone": [
            "Gilded Blackstone"
        ],
        "blackstone_slab": [
            "Blackstone Slab"
        ],
        "polished_blackstone_brick_slab": [
            "Polished Blackstone Brick Slab"
        ],
        "chain": [
            "Chain"
        ],
        "soul_soil": [
            "Soul Soil"
        ],
        "soul_fire": [
            "Soul Fire"
        ],
        "polished_blackstone": [
            "Polished Blackstone"
        ],
        "polished_blackstone_stairs": [
            "Polished Blackstone Stairs"
        ],
        "polished_blackstone_slab": [
            "Polished Blackstone Slab"
        ],
        "polished_blackstone_pressure_plate": [
            "Polished Blackstone Pressure Plate"
        ],
        "polished_blackstone_button": [
            "Polished Blackstone Button"
        ],
        "polished_blackstone_wall": [
            "Polished Blackstone Wall"
        ],
        "soul_campfire": [
            "Soul Campfire"
        ],
        "chiseled_nether_bricks": [
            "Chiseled Nether Bricks"
        ],
        "cracked_nether_bricks": [
            "Cracked Nether Bricks"
        ],
        "quartz_bricks": [
            "Quartz Bricks"
        ],
        "trapped_chest": [
            "Trapped Chest"
        ],
        "shulkerBoxWhite": [
            "White Shulker Box"
        ],
        "shulkerBoxOrange": [
            "Orange Shulker Box"
        ],
        "shulkerBoxMagenta": [
            "Magenta Shulker Box"
        ],
        "shulkerBoxLightBlue": [
            "Light Blue Shulker Box"
        ],
        "shulkerBoxYellow": [
            "Yellow Shulker Box"
        ],
        "shulkerBoxLime": [
            "Lime Shulker Box"
        ],
        "shulkerBoxPink": [
            "Pink Shulker Box"
        ],
        "shulkerBoxGray": [
            "Gray Shulker Box"
        ],
        "shulkerBoxSilver": [
            "Light Gray Shulker Box"
        ],
        "shulkerBoxCyan": [
            "Cyan Shulker Box"
        ],
        "shulkerBoxPurple": [
            "Purple Shulker Box"
        ],
        "shulkerBoxBlue": [
            "Blue Shulker Box"
        ],
        "shulkerBoxBrown": [
            "Brown Shulker Box"
        ],
        "shulkerBoxGreen": [
            "Green Shulker Box"
        ],
        "shulkerBoxRed": [
            "Red Shulker Box"
        ],
        "shulkerBoxBlack": [
            "Black Shulker Box"
        ],
        "shulkerBox": [
            "Shulker Box"
        ],
        "chorus_flower": [
            "Chorus Flower"
        ],
        "chorus_plant": [
            "Chorus Plant"
        ],
        "stained_glass": [
            "White Stained Glass",
            "White Stained Glass",
            "Orange Stained Glass",
            "Magenta Stained Glass",
            "Light Blue Stained Glass",
            "Yellow Stained Glass",
            "Lime Stained Glass",
            "Pink Stained Glass",
            "Gray Stained Glass",
            "Light Gray Stained Glass",
            "Cyan Stained Glass",
            "Purple Stained Glass",
            "Blue Stained Glass",
            "Brown Stained Glass",
            "Green Stained Glass",
            "Red Stained Glass",
            "Black Stained Glass"
        ],
        "stained_glass_pane": [
            "White Stained Glass Pane",
            "White Stained Glass Pane",
            "Orange Stained Glass Pane",
            "Magenta Stained Glass Pane",
            "Light Blue Stained Glass Pane",
            "Yellow Stained Glass Pane",
            "Lime Stained Glass Pane",
            "Pink Stained Glass Pane",
            "Gray Stained Glass Pane",
            "Light Gray Stained Glass Pane",
            "Cyan Stained Glass Pane",
            "Purple Stained Glass Pane",
            "Blue Stained Glass Pane",
            "Brown Stained Glass Pane",
            "Green Stained Glass Pane",
            "Red Stained Glass Pane",
            "Black Stained Glass Pane"
        ],
        "clay": [
            "Clay Block"
        ],
        "hardened_clay": [
            "Terracotta"
        ],
        "stained_hardened_clay": [
            "Terracotta",
            "White Terracotta",
            "Orange Terracotta",
            "Magenta Terracotta",
            "Light Blue Terracotta",
            "Yellow Terracotta",
            "Lime Terracotta",
            "Pink Terracotta",
            "Gray Terracotta",
            "Light Gray Terracotta",
            "Cyan Terracotta",
            "Purple Terracotta",
            "Blue Terracotta",
            "Brown Terracotta",
            "Green Terracotta",
            "Red Terracotta",
            "Black Terracotta"
        ],
        "structure_block": [
            "Structure Block"
        ],
        "structure_void": [
            "Structure Void"
        ],
        "wool": [
            "Wool",
            "White Wool",
            "Orange Wool",
            "Magenta Wool",
            "Light Blue Wool",
            "Yellow Wool",
            "Lime Wool",
            "Pink Wool",
            "Gray Wool",
            "Light Gray Wool",
            "Cyan Wool",
            "Purple Wool",
            "Blue Wool",
            "Brown Wool",
            "Green Wool",
            "Red Wool",
            "Black Wool"
        ],
        "cobblestone_wall": [
            "Cobblestone Wall",
            "Cobblestone Wall",
            "Mossy Cobblestone Wall",
            "Granite Wall",
            "Diorite Wall",
            "Andesite Wall",
            "Sandstone Wall",
            "Brick Wall",
            "Stone Brick Wall",
            "Mossy Stone Brick Wall",
            "End Stone Brick Wall",
            "Nether Brick Wall",
            "Prismarine Wall",
            "Red Sandstone Wall",
            "Red Nether Brick Wall"
        ],
        "cocoa": [
            "Cocoa"
        ],
        "command_block": [
            "Command Block"
        ],
        "composter": [
            "Composter"
        ],
        "light_block": [
            "Light Block"
        ],
        "repeating_command_block": [
            "Repeating Command Block"
        ],
        "chain_command_block": [
            "Chain Command Block"
        ],
        "darkOakFence": [
            "Dark Oak Fence"
        ],
        "dark_oak_fence_gate": [
            "Dark Oak Fence Gate"
        ],
        "daylight_detector": [
            "Daylight Sensor"
        ],
        "deadbush": [
            "Dead Bush"
        ],
        "detector_rail": [
            "Detector Rail"
        ],
        "dirt": [
            "Dirt",
            "Dirt",
            "Coarse Dirt"
        ],
        "podzol": [
            "Podzol"
        ],
        "purpur_block": [
            "Purpur Block",
            "Purpur Block",
            "Chiseled Purpur",
            "Purpur Pillar"
        ],
        "dispenser": [
            "Dispenser"
        ],
        "doorWood": [
            "Wooden Door"
        ],
        "double_plant": [
            "Plant",
            "Sunflower",
            "Lilac",
            "Double Tallgrass",
            "Large Fern",
            "Rose Bush",
            "Peony"
        ],
        "dragon_egg": [
            "Dragon Egg"
        ],
        "dropper": [
            "Dropper"
        ],
        "enchanting_table": [
            "Enchantment Table"
        ],
        "enderChest": [
            "Ender Chest"
        ],
        "end_portal_frame": [
            "End Portal"
        ],
        "farmland": [
            "Farmland"
        ],
        "fletching_table": [
            "Fletching Table"
        ],
        "fence": [
            "Oak Fence"
        ],
        "fence_gate": [
            "Oak Fence Gate"
        ],
        "iron_bars": [
            "Iron Bars"
        ],
        "fire": [
            "Fire"
        ],
        "yellow_flower": [
            "Flower",
            "Dandelion"
        ],
        "red_flower": [
            "Flower",
            "Poppy",
            "Blue Orchid",
            "Allium",
            "Azure Bluet",
            "Red Tulip",
            "Orange Tulip",
            "White Tulip",
            "Pink Tulip",
            "Oxeye Daisy",
            "Cornflower",
            "Lily of the Valley"
        ],
        "wither_rose": [
            "Wither Rose"
        ],
        "furnace": [
            "Furnace"
        ],
        "glass": [
            "Glass"
        ],
        "golden_rail": [
            "Powered Rail"
        ],
        "grass": [
            "Grass Block"
        ],
        "grass_path": [
            "Grass Path"
        ],
        "gravel": [
            "Gravel"
        ],
        "hay_block": [
            "Hay Bale"
        ],
        "netherrack": [
            "Netherrack"
        ],
        "soul_sand": [
            "Soul Sand"
        ],
        "hopper": [
            "Hopper"
        ],
        "ice": [
            "Ice"
        ],
        "packed_ice": [
            "Packed Ice"
        ],
        "blue_ice": [
            "Blue Ice"
        ],
        "iron_trapdoor": [
            "Iron Trapdoor"
        ],
        "jukebox": [
            "Jukebox"
        ],
        "jungleFence": [
            "Jungle Fence"
        ],
        "jungle_fence_gate": [
            "Jungle Fence Gate"
        ],
        "ladder": [
            "Ladder"
        ],
        "flowing_lava": [
            "Lava"
        ],
        "leaves2": [
            "Acacia Leaves",
            "Acacia Leaves",
            "Dark Oak Leaves"
        ],
        "lever": [
            "Lever"
        ],
        "glowstone": [
            "Glowstone"
        ],
        "lit_pumpkin": [
            "Jack o'Lantern"
        ],
        "lockedchest": [
            "Locked chest"
        ],
        "log2": [
            "Acacia Log",
            "Acacia Log",
            "Dark Oak Log"
        ],
        "log": [
            "Log",
            "Oak Log",
            "Spruce Log",
            "Birch Log",
            "Jungle Log"
        ],
        "magma": [
            "Magma Block"
        ],
        "melon_block": [
            "Melon"
        ],
        "mob_spawner": [
            "Monster Spawner"
        ],
        "monster_egg": [
            "Infested Stone",
            "Infested Stone",
            "Infested Cobblestone",
            "Infested Stone Brick",
            "Infested Mossy Stone Brick",
            "Infested Cracked Stone Brick",
            "Infested Chiseled Stone Brick"
        ],
        "mushroom": [
            "Mushroom"
        ],
        "noteblock": [
            "Note Block"
        ],
        "mycelium": [
            "Mycelium"
        ],
        "nether_brick": [
            "Nether Brick Block"
        ],
        "red_nether_brick": [
            "Red Nether Brick"
        ],
        "nether_brick_fence": [
            "Nether Brick Fence"
        ],
        "quartz_ore": [
            "Nether Quartz Ore"
        ],
        "netherreactor": [
            "Nether Reactor Core"
        ],
        "nether_wart_block": [
            "Nether Wart Block"
        ],
        "warped_wart_block": [
            "Warped Wart Block"
        ],
        "unlit_redstone_torch": [
            "Redstone Torch"
        ],
        "redstone_torch": [
            "Redstone Torch"
        ],
        "soul_torch": [
            "Soul Torch"
        ],
        "obsidian": [
            "Obsidian"
        ],
        "coal_ore": [
            "Coal Ore"
        ],
        "diamond_ore": [
            "Diamond Ore"
        ],
        "emerald_ore": [
            "Emerald Ore"
        ],
        "gold_ore": [
            "Gold Ore"
        ],
        "iron_ore": [
            "Iron Ore"
        ],
        "lapis_ore": [
            "Lapis Lazuli Ore"
        ],
        "redstone_ore": [
            "Redstone Ore"
        ],
        "oreRuby": [
            "Ruby Ore"
        ],
        "observer": [
            "Observer"
        ],
        "piston": [
            "Piston"
        ],
        "sticky_piston": [
            "Sticky Piston"
        ],
        "portal": [
            "Portal"
        ],
        "potatoes": [
            "Potatoes"
        ],
        "stone_pressure_plate": [
            "Stone Pressure Plate"
        ],
        "wooden_pressure_plate": [
            "Oak Pressure Plate"
        ],
        "acacia_pressure_plate": [
            "Acacia Pressure Plate"
        ],
        "birch_pressure_plate": [
            "Birch Pressure Plate"
        ],
        "dark_oak_pressure_plate": [
            "Dark Oak Pressure Plate"
        ],
        "jungle_pressure_plate": [
            "Jungle Pressure Plate"
        ],
        "spruce_pressure_plate": [
            "Spruce Pressure Plate"
        ],
        "prismarine": [
            "Prismarine",
            "Prismarine",
            "Prismarine Bricks",
            "Dark Prismarine"
        ],
        "pumpkin": [
            "Pumpkin"
        ],
        "pumpkin_stem": [
            "Pumpkin Stem"
        ],
        "quartz_block": [
            "Block of Quartz",
            "Block of Quartz",
            "Chiseled Quartz Block",
            "Pillar Quartz Block",
            "Smooth Quartz Block"
        ],
        "rail": [
            "Rail"
        ],
        "red_mushroom": [
            "Red Mushroom"
        ],
        "crimson_fungus": [
            "Crimson Fungus"
        ],
        "warped_fungus": [
            "Warped Fungus"
        ],
        "red_mushroom_block": [
            "Red Mushroom Block"
        ],
        "red_sandstone": [
            "Red Sandstone",
            "Red Sandstone",
            "Chiseled Red Sandstone",
            "Cut Red Sandstone",
            "Smooth Red Sandstone"
        ],
        "redstone_wire": [
            "Redstone Dust"
        ],
        "redstone_lamp": [
            "Redstone Lamp"
        ],
        "sand": [
            "Sand",
            "Sand",
            "Red Sand"
        ],
        "sandstone": [
            "Sandstone",
            "Sandstone",
            "Chiseled Sandstone",
            "Cut Sandstone",
            "Smooth Sandstone"
        ],
        "sapling": [
            "Sapling",
            "Oak Sapling",
            "Spruce Sapling",
            "Birch Sapling",
            "Jungle Sapling",
            "Acacia Sapling",
            "Dark Oak Sapling"
        ],
        "seaLantern": [
            "Sea Lantern"
        ],
        "standing_sign": [
            "Sign"
        ],
        "spruce_standing_sign": [
            "Spruce Sign"
        ],
        "birch_standing_sign": [
            "Birch Sign"
        ],
        "jungle_standing_sign": [
            "Jungle Sign"
        ],
        "acacia_standing_sign": [
            "Acacia Sign"
        ],
        "darkoak_standing_sign": [
            "Dark Oak Sign"
        ],
        "slime": [
            "Slime Block"
        ],
        "snow": [
            "Snow"
        ],
        "sponge": [
            "Sponge",
            "Sponge",
            "Wet Sponge"
        ],
        "spruceFence": [
            "Spruce Fence"
        ],
        "spruce_fence_gate": [
            "Spruce Fence Gate"
        ],
        "brick_stairs": [
            "Brick Stairs"
        ],
        "nether_brick_stairs": [
            "Nether Brick Stairs"
        ],
        "quartz_stairs": [
            "Quartz Stairs"
        ],
        "smooth_quartz_stairs": [
            "Smooth Quartz Stairs"
        ],
        "red_sandstone_stairs": [
            "Red Sandstone Stairs"
        ],
        "sandstone_stairs": [
            "Sandstone Stairs"
        ],
        "stone_stairs": [
            "Cobblestone Stairs"
        ],
        "normal_stone_stairs": [
            "Stone Stairs"
        ],
        "stone_brick_stairs": [
            "Stone Brick Stairs"
        ],
        "oak_stairs": [
            "Oak Wood Stairs"
        ],
        "acacia_stairs": [
            "Acacia Wood Stairs"
        ],
        "birch_stairs": [
            "Birch Wood Stairs"
        ],
        "dark_oak_stairs": [
            "Dark Oak Wood Stairs"
        ],
        "jungle_stairs": [
            "Jungle Wood Stairs"
        ],
        "spruce_stairs": [
            "Spruce Wood Stairs"
        ],
        "purpur_stairs": [
            "Purpur Stairs"
        ],
        "prismarine_stairs": [
            "Prismarine Stairs"
        ],
        "dark_prismarine_stairs": [
            "Dark Prismarine Stairs"
        ],
        "prismarine_bricks_stairs": [
            "Prismarine Brick Stairs"
        ],
        "granite_stairs": [
            "Granite Stairs"
        ],
        "diorite_stairs": [
            "Diorite Stairs"
        ],
        "andesite_stairs": [
            "Andesite Stairs"
        ],
        "polished_granite_stairs": [
            "Polished Granite Stairs"
        ],
        "polished_diorite_stairs": [
            "Polished Diorite Stairs"
        ],
        "polished_andesite_stairs": [
            "Polished Andesite Stairs"
        ],
        "mossy_stone_brick_stairs": [
            "Mossy Stone Brick Stairs"
        ],
        "smooth_red_sandstone_stairs": [
            "Smooth Red Sandstone Stairs"
        ],
        "smooth_sandstone_stairs": [
            "Smooth Sandstone Stairs"
        ],
        "end_brick_stairs": [
            "End Stone Brick Stairs"
        ],
        "mossy_cobblestone_stairs": [
            "Mossy Cobblestone Stairs"
        ],
        "red_nether_brick_stairs": [
            "Red Nether Brick Stairs"
        ],
        "smooth_stone": [
            "Smooth Stone"
        ],
        "standing_banner": [
            "Banner",
            "Black Banner",
            "Red Banner",
            "Green Banner",
            "Brown Banner",
            "Blue Banner",
            "Purple Banner",
            "Cyan Banner",
            "Light Gray Banner",
            "Gray Banner",
            "Pink Banner",
            "Lime Banner",
            "Yellow Banner",
            "Light Blue Banner",
            "Magenta Banner",
            "Orange Banner",
            "Banner"
        ],
        "stone": [
            "Stone",
            "Stone",
            "Granite",
            "Polished Granite",
            "Diorite",
            "Polished Diorite",
            "Andesite",
            "Polished Andesite"
        ],
        "cobblestone": [
            "Cobblestone"
        ],
        "stonebrick": [
            "Stone Bricks",
            "Stone Bricks",
            "Mossy Stone Bricks",
            "Chiseled Stone Bricks"
        ],
        "stonecutter": [
            "Stonecutter"
        ],
        "stonecutter_block": [
            "Stonecutter"
        ],
        "mossy_cobblestone": [
            "Mossy Cobblestone"
        ],
        "double_stone_slab": [
            "Stone Slab",
            "Stone Slab",
            "Sandstone Slab",
            "Wooden Slab",
            "Cobblestone Slab",
            "Bricks Slab",
            "Stone Bricks Slab",
            "Quartz Slab",
            "Nether Brick Slab"
        ],
        "stone_slab": [
            "Stone Slab",
            "Smooth Stone Slab",
            "Sandstone Slab",
            "Wooden Slab",
            "Cobblestone Slab",
            "Bricks Slab",
            "Stone Bricks Slab",
            "Quartz Slab",
            "Nether Brick Slab"
        ],
        "double_stone_slab2": [
            "Red Sandstone Slab",
            "Red Sandstone Slab"
        ],
        "stone_slab2": [
            "Red Sandstone Slab",
            "Red Sandstone Slab",
            "Purpur Slab",
            "Prismarine Slab",
            "Prismarine Bricks Slab",
            "Dark Prismarine Slab",
            "Mossy Cobblestone Slab",
            "Smooth Sandstone Slab",
            "Red Nether Brick Slab"
        ],
        "stone_slab3": [
            "End Stone Brick Slab",
            "End Stone Brick Slab",
            "Smooth Red Sandstone Slab",
            "Polished Andesite Slab",
            "Andesite Slab",
            "Diorite Slab",
            "Polished Diorite Slab",
            "Granite Slab",
            "Polished Granite Slab"
        ],
        "stone_slab4": [
            "Mossy Stone Brick Slab",
            "Mossy Stone Brick Slab",
            "Smooth Quartz Slab",
            "Stone Slab",
            "Cut Sandstone Slab",
            "Cut Red Sandstone Slab"
        ],
        "coral_block": [
            "Tube Coral Block",
            "Tube Coral Block",
            "Brain Coral Block",
            "Bubble Coral Block",
            "Fire Coral Block",
            "Horn Coral Block",
            "Dead Tube Coral Block",
            "Dead Brain Coral Block",
            "Dead Bubble Coral Block",
            "Dead Fire Coral Block",
            "Dead Horn Coral Block"
        ],
        "tallgrass": [
            "Grass",
            "Grass",
            "Fern"
        ],
        "seagrass": [
            "Seagrass",
            "Seagrass"
        ],
        "sea_pickle": [
            "Sea Pickle"
        ],
        "turtle_egg": [
            "Sea Turtle Egg"
        ],
        "coral": [
            "Tube Coral",
            "Tube Coral",
            "Brain Coral",
            "Bubble Coral",
            "Fire Coral",
            "Horn Coral",
            "Dead Tube Coral",
            "Dead Brain Coral",
            "Dead Bubble Coral",
            "Dead Fire Coral",
            "Dead Horn Coral"
        ],
        "coral_fan": [
            "Tube Coral Fan",
            "Tube Coral Fan",
            "Brain Coral Fan",
            "Bubble Coral Fan",
            "Fire Coral Fan",
            "Horn Coral Fan"
        ],
        "coral_fan_dead": [
            "Dead Tube Coral Fan",
            "Dead Tube Coral Fan",
            "Dead Brain Coral Fan",
            "Dead Bubble Coral Fan",
            "Dead Fire Coral Fan",
            "Dead Horn Coral Fan"
        ],
        "glass_pane": [
            "Glass Pane"
        ],
        "tnt": [
            "TNT"
        ],
        "snow_layer": [
            "Top Snow"
        ],
        "torch": [
            "Torch"
        ],
        "trapdoor": [
            "Oak Trapdoor"
        ],
        "acacia_trapdoor": [
            "Acacia Trapdoor"
        ],
        "birch_trapdoor": [
            "Birch Trapdoor"
        ],
        "dark_oak_trapdoor": [
            "Dark Oak Trapdoor"
        ],
        "jungle_trapdoor": [
            "Jungle Trapdoor"
        ],
        "spruce_trapdoor": [
            "Spruce Trapdoor"
        ],
        "tripWire": [
            "Tripwire"
        ],
        "tripwire_hook": [
            "Tripwire Hook"
        ],
        "vine": [
            "Vines"
        ],
        "weeping_vines": [
            "Weeping Vines"
        ],
        "twisting_vines": [
            "Twisting Vines"
        ],
        "flowing_water": [
            "Water"
        ],
        "water": [
            "Water"
        ],
        "waterlily": [
            "Lily Pad"
        ],
        "web": [
            "Cobweb"
        ],
        "heavy_weighted_pressure_plate": [
            "Weighted Pressure Plate (Heavy)"
        ],
        "light_weighted_pressure_plate": [
            "Weighted Pressure Plate (Light)"
        ],
        "end_stone": [
            "End Stone"
        ],
        "end_bricks": [
            "End Stone Bricks"
        ],
        "planks": [
            "Wooden Planks",
            "Oak Wood Planks",
            "Spruce Wood Planks",
            "Birch Wood Planks",
            "Jungle Wood Planks",
            "Acacia Wood Planks",
            "Dark Oak Wood Planks"
        ],
        "wooden_slab": [
            "Wood Slab",
            "Oak Wood Slab",
            "Spruce Wood Slab",
            "Birch Wood Slab",
            "Jungle Wood Slab",
            "Acacia Wood Slab",
            "Dark Oak Wood Slab"
        ],
        "carpet": [
            "Carpet",
            "Black Carpet",
            "Red Carpet",
            "Green Carpet",
            "Brown Carpet",
            "Blue Carpet",
            "Purple Carpet",
            "Cyan Carpet",
            "Light Gray Carpet",
            "Gray Carpet",
            "Pink Carpet",
            "Lime Carpet",
            "Yellow Carpet",
            "Light Blue Carpet",
            "Magenta Carpet",
            "Orange Carpet",
            "White Carpet"
        ],
        "crafting_table": [
            "Crafting Table"
        ],
        "white_glazed_terracotta": [
            "White Glazed Terracotta",
            "White Glazed Terracotta"
        ],
        "orange_glazed_terracotta": [
            "Orange Glazed Terracotta",
            "Orange Glazed Terracotta"
        ],
        "magenta_glazed_terracotta": [
            "Magenta Glazed Terracotta",
            "Magenta Glazed Terracotta"
        ],
        "light_blue_glazed_terracotta": [
            "Light Blue Glazed Terracotta",
            "Light Blue Glazed Terracotta"
        ],
        "yellow_glazed_terracotta": [
            "Yellow Glazed Terracotta",
            "Yellow Glazed Terracotta"
        ],
        "lime_glazed_terracotta": [
            "Lime Glazed Terracotta",
            "Lime Glazed Terracotta"
        ],
        "pink_glazed_terracotta": [
            "Pink Glazed Terracotta",
            "Pink Glazed Terracotta"
        ],
        "gray_glazed_terracotta": [
            "Gray Glazed Terracotta",
            "Gray Glazed Terracotta"
        ],
        "silver_glazed_terracotta": [
            "Light Gray Glazed Terracotta",
            "Light Gray Glazed Terracotta"
        ],
        "cyan_glazed_terracotta": [
            "Cyan Glazed Terracotta",
            "Cyan Glazed Terracotta"
        ],
        "purple_glazed_terracotta": [
            "Purple Glazed Terracotta",
            "Purple Glazed Terracotta"
        ],
        "blue_glazed_terracotta": [
            "Blue Glazed Terracotta",
            "Blue Glazed Terracotta"
        ],
        "brown_glazed_terracotta": [
            "Brown Glazed Terracotta",
            "Brown Glazed Terracotta"
        ],
        "green_glazed_terracotta": [
            "Green Glazed Terracotta",
            "Green Glazed Terracotta"
        ],
        "red_glazed_terracotta": [
            "Red Glazed Terracotta",
            "Red Glazed Terracotta"
        ],
        "black_glazed_terracotta": [
            "Black Glazed Terracotta",
            "Black Glazed Terracotta"
        ],
        "concrete": [
            "White Concrete",
            "White Concrete",
            "Orange Concrete",
            "Magenta Concrete",
            "Light Blue Concrete",
            "Yellow Concrete",
            "Lime Concrete",
            "Pink Concrete",
            "Gray Concrete",
            "Light Gray Concrete",
            "Cyan Concrete",
            "Purple Concrete",
            "Blue Concrete",
            "Brown Concrete",
            "Green Concrete",
            "Red Concrete",
            "Black Concrete"
        ],
        "glazedTerracottaWhite": [
            "White Glazed Terracotta"
        ],
        "glazedTerracottaOrange": [
            "Orange Glazed Terracotta"
        ],
        "glazedTerracottaMagenta": [
            "Magenta Glazed Terracotta"
        ],
        "glazedTerracottaLightBlue": [
            "Light Blue Glazed Terracotta"
        ],
        "glazedTerracottaYellow": [
            "Yellow Glazed Terracotta"
        ],
        "glazedTerracottaLime": [
            "Lime Glazed Terracotta"
        ],
        "glazedTerracottaPink": [
            "Pink Glazed Terracotta"
        ],
        "glazedTerracottaGray": [
            "Gray Glazed Terracotta"
        ],
        "glazedTerracottaSilver": [
            "Light Gray Glazed Terracotta"
        ],
        "glazedTerracottaCyan": [
            "Cyan Glazed Terracotta"
        ],
        "glazedTerracottaPurple": [
            "Purple Glazed Terracotta"
        ],
        "glazedTerracottaBlue": [
            "Blue Glazed Terracotta"
        ],
        "glazedTerracottaBrown": [
            "Brown Glazed Terracotta"
        ],
        "glazedTerracottaGreen": [
            "Green Glazed Terracotta"
        ],
        "glazedTerracottaRed": [
            "Red Glazed Terracotta"
        ],
        "glazedTerracottaBlack": [
            "Black Glazed Terracotta"
        ],
        "concretePowder": [
            "White Concrete Powder",
            "White Concrete Powder",
            "Orange Concrete Powder",
            "Magenta Concrete Powder",
            "Light Blue Concrete Powder",
            "Yellow Concrete Powder",
            "Lime Concrete Powder",
            "Pink Concrete Powder",
            "Gray Concrete Powder",
            "Light Gray Concrete Powder",
            "Cyan Concrete Powder",
            "Purple Concrete Powder",
            "Blue Concrete Powder",
            "Brown Concrete Powder",
            "Green Concrete Powder",
            "Red Concrete Powder",
            "Black Concrete Powder"
        ],
        "stripped_spruce_log": [
            "Stripped Spruce Log"
        ],
        "stripped_dark_oak_log": [
            "Stripped Dark Oak Log"
        ],
        "stripped_birch_log": [
            "Stripped Birch Log"
        ],
        "stripped_jungle_log": [
            "Stripped Jungle Log"
        ],
        "stripped_oak_log": [
            "Stripped Oak Log"
        ],
        "stripped_acacia_log": [
            "Stripped Acacia Log"
        ],
        "bamboo": [
            "Bamboo"
        ],
        "scaffolding": [
            "Scaffolding"
        ],
        "grindstone": [
            "Grindstone"
        ],
        "cartography_table": [
            "Cartography Table"
        ],
        "lantern": [
            "Lantern"
        ],
        "soul_lantern": [
            "Soul Lantern"
        ],
        "smoker": [
            "Smoker"
        ],
        "smithing_table": [
            "Smithing Table"
        ],
        "barrel": [
            "Barrel"
        ],
        "campfire": [
            "Campfire"
        ],
        "loom": [
            "Loom"
        ],
        "lectern": [
            "Lectern"
        ],
        "sweet_berry_bush": [
            "Sweet Berry Bush"
        ],
        "wood": [
            "Oak Wood",
            "Oak Wood",
            "Spruce Wood",
            "Birch Wood",
            "Jungle Wood",
            "Acacia Wood",
            "Dark Oak Wood",
            null,
            null,
            "Stripped Oak Wood",
            "Stripped Spruce Wood",
            "Stripped Birch Wood",
            "Stripped Jungle Wood",
            "Stripped Acacia Wood",
            "Stripped Dark Oak Wood"
        ],
        "netherite_block": [
            "Block of Netherite"
        ],
        "ancient_debris": [
            "Ancient Debris"
        ],
        "nether_gold_ore": [
            "Nether Gold Ore"
        ],
        "respawn_anchor": [
            "Respawn Anchor"
        ],
        "crying_obsidian": [
            "Crying Obsidian"
        ],
        "spawn_egg": [
            "Spawn Egg"
        ]
    }
};
freeze(lang_data);
export = lang_data;
