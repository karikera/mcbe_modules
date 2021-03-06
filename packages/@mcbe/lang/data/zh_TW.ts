
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
    id: "zh_TW" as LangId,
    commands:{
        "ability_description": "可設定玩家的能力。",
        "ability_noability": "沒有名為「'%1$s'」的技能",
        "ability_granted": "已授與你「'%1$s'」技能",
        "ability_revoked": "已撤銷你的「'%1$s'」技能",
        "ability_success": "技能已更新",
        "achievement_alreadyHave": "玩家 %1$s 已經取得 %2$s 成就",
        "achievement_description": "送出一個成就給某位玩家或從某位玩家身上移除一個成就。",
        "achievement_dontHave": "玩家 %1$s 未取得 %2$s 成就",
        "achievement_give_success_all": "成功地將所有成就給予 %1$s",
        "achievement_give_success_one": "成功給予 %1$s 統計值 %2$s",
        "achievement_statTooLow": "玩家 %1$s 沒有 %2$s 統計值",
        "achievement_take_success_all": "已成功從 %1$s 上取得所有成就",
        "achievement_take_success_one": "已成功取得統計項目 %1$s，玩家為 %2$s",
        "achievement_unknownAchievement": "未知的成就或統計 '%1$s'",
        "agent_attack_success": "Agent攻擊成功",
        "agent_attack_failed": "Agent攻擊失敗",
        "agent_collect_success": "Agent收集成功",
        "agent_collect_failed": "Agent收集失敗",
        "agent_createagent_success": "已建立Agent",
        "agent_createagent_failed": "無法建立Agent",
        "agent_destroy_success": "Agent已破壞一方塊",
        "agent_destroy_failed": "Agent破壞失敗",
        "agent_detect_success": "Agent偵測成功",
        "agent_detect_failed": "Agent偵測失敗",
        "agent_detectredstone_success": "Agent detectredstone成功",
        "agent_detectredstone_failed": "Agent detectredstone失敗",
        "agent_drop_success": "Agent掉物成功",
        "agent_drop_failed": "Agent掉物失敗",
        "agent_dropall_success": "Agent dropall成功",
        "agent_dropall_failed": "Agent dropall失敗",
        "agent_getitemcount_success": "Agent getitemcount成功",
        "agent_getitemcount_failed": "Agent getitemcount失敗",
        "agent_getitemspace_success": "Agent getitemspace成功",
        "agent_getitemspace_failed": "Agent getitemspace失敗",
        "agent_getitemdetail_success": "Agent getitemdetail成功",
        "agent_getitemdetail_failed": "Agent getitemdetail失敗",
        "agent_getposition_success": "Agent 取得成功",
        "agent_getposition_failed": "Agent 取得失敗",
        "agent_inspect_success": "Agent檢查成功",
        "agent_inspect_failed": "Agent檢查失敗",
        "agent_inspectdata_success": "Agent 檢查資料成功",
        "agent_inspectdata_failed": "Agent 檢查資料失敗",
        "agent_move_success": "Agent移動成功",
        "agent_move_failed": "無法移動Agent",
        "agent_outofrange": "無法發出指令，Agent超出範圍",
        "agent_place_success": "Agent放置成功",
        "agent_place_failed": "Agent放置失敗",
        "agent_setitem_success": "Agent 設定物品成功",
        "agent_setitem_failed": "Agent 無法設定物品",
        "agent_turn_success": "Agent轉向成功",
        "agent_turn_failed": "無法將Agent轉向",
        "agent_till_success": "Agent耕耘成功",
        "agent_till_failed": "Agent耕耘失敗",
        "agent_tpagent_description": "傳送你的 Agent。",
        "agent_tpagent_success": "Agent已傳送",
        "agent_tpagent_failed": "Agent傳送失敗",
        "agent_transfer_success": "Agent轉移成功",
        "agent_transfer_failed": "Agent轉移失敗",
        "always_day": "日夜交替 %1$s",
        "always_day_locked": "關閉日夜交替",
        "always_day_unlocked": "開啟日夜交替",
        "ban_description": "新增玩家至封鎖名單。",
        "autocomplete_a": "所有玩家",
        "autocomplete_c": "我的 Agent",
        "autocomplete_e": "全部實體",
        "autocomplete_p": "最親近玩家",
        "autocomplete_r": "隨機玩家",
        "autocomplete_s": "自己",
        "autocomplete_v": "所有 Agent",
        "ban_failed": "無法封鎖玩家 %1$s",
        "ban_success": "封鎖 %1$s 玩家",
        "banip_description": "新增 IP 位址至封鎖名單。",
        "banip_invalid": "您輸入了一個無效的 IP 位址或是玩家並不在線上",
        "banip_success": "封鎖的 IP 位址 %1$s",
        "banip_success_players": "封鎖的 IP 位址 %1$s 屬於 %2$s",
        "banlist_ips": "共有 %1$d 個被封鎖的 IP 位址：",
        "banlist_players": "共有 %1$d 個被封鎖的玩家：",
        "blockdata_description": "修改方塊的數據標籤。",
        "blockdata_placeFailed": "這裡無法放置方塊",
        "blockdata_destroyFailed": "這裡無法挖掘",
        "blockdata_failed": "資料標記未變更：%1$s",
        "blockdata_notValid": "目標方塊不是資料擁有者方塊",
        "blockdata_outOfWorld": "無法變更外部世界方塊",
        "blockdata_success": "方塊資料值已更新為：%1$s",
        "blockdata_tagError": "資料標籤解析失敗：%1$s",
        "bossbar_add_success": "已建立自訂 bossbar [%1$s]",
        "bossbar_add_failure_invalid": "無效的 bossbar ID。ID 應為格式命名空間：id 或 id (預設為 Minecraft 命名空間)。",
        "bossbar_add_failure_exists": "ID [%1$s] 的 bossbar 已存在",
        "bossbar_description": "建立並修改頭目血條",
        "bossbar_get_max": "自訂 bossbar [%1$s] 最多為 %2$d",
        "bossbar_get_players": "自訂 bossbar [%1$s] 目前有 %2$s 名玩家在線上：%3$s",
        "bossbar_get_players_none": "自訂 bossbar [%1$s] 目前沒有玩家在線上",
        "bossbar_get_players_one": "自訂 bossbar [%1$s] 目前有 1 名玩家在線上：%2$s",
        "bossbar_get_value": "自訂 bossbar [%1$s] 目前的數值為 %2$d",
        "bossbar_get_visible_true": "自訂 bossbar [%1$s]目前已顯示",
        "bossbar_get_visible_false": "自訂 bossbar [%1$s]目前已隱藏",
        "bossbar_list": "%1$s 個自訂 bossbar 已啟用：%2$s",
        "bossbar_list_none": "沒有已啟用的自訂 bossbar",
        "bossbar_list_one": "1 個自訂 bossbar 已啟用：%1$s",
        "bossbar_notFound": "沒有 ID 為 [%1$s] 的 bossbar 存在",
        "bossbar_remove": "已移除自訂 bossbar [%1$s]",
        "change_setting_description": "在專屬伺服器執行時變更其上的設定。",
        "change_setting_success": "%1$s 已變更",
        "chunkinfo_compiled": "此方塊已被編譯。",
        "chunkinfo_data": "首 64 個頂點為：%1$s",
        "chunkinfo_empty": "此方塊為空心。",
        "chunkinfo_hasLayers": "此區塊有圖層：%1$s",
        "chunkinfo_hasNoRenderableLayers": "此方塊並沒有可呈現的圖層。",
        "chunkinfo_isEmpty": "此區塊沒有圖層：%1$s",
        "chunkinfo_location": "區塊位置: (%1$d, %2$d, %3$d)",
        "chunkinfo_noChunk": "在位置 %1$d, %2$d, %3$d 上找不到區塊",
        "chunkinfo_notCompiled": "此方塊未經編譯。",
        "chunkinfo_notEmpty": "此方塊並非空心。",
        "chunkinfo_vertices": "%1$s 圖層的緩衝區域上有 %2$d 個頂點",
        "classroommode_description": "嘗試執行並連接至課堂模式。",
        "classroommode_success": "嘗試執行課堂模式……",
        "clear_description": "從玩家物品欄中清除物品。",
        "clear_failure": "無法清空 %1$s 的物品欄",
        "clear_failure_no_items": "無法清空 %1$s 的物品欄，無物可清除",
        "clear_success": "已清空 %1$s 的物品欄，移除了 %2$d 個物品",
        "clear_tagError": "資料標籤解析失敗：%1$s",
        "clear_testing": "%1$s 身上有 %2$d 個物品符合此條件",
        "clearfixedinv_description": "移除所有固定物品欄。",
        "clearfixedinv_success": "已清除固定物品欄",
        "clone_description": "將方塊從某個地區複製到另一個地區。",
        "clone_failed": "沒有複製任何方塊",
        "clone_filtered_error": "採取過濾用法時需要指定過濾方塊",
        "clone_noOverlap": "來源地不能與目的地重疊",
        "clone_outOfWorld": "無法進入位於世界外的方塊",
        "clone_success": "已複製 %1$d 個方塊",
        "clone_tooManyBlocks": "指定區域內的方塊數量太多 (%1$d > %2$d)",
        "closechat_description": "如果本機玩家的聊天視窗開啟則關閉。",
        "closechat_success": "聊天已關閉",
        "closechat_failure": "聊天並未開啟",
        "closewebsocket_description": "關閉 WebSocket 連線 (如有的話)。",
        "code_description": "執行程式碼生成器。",
        "code_success": "已執行程式碼生成器。",
        "compare_failed": "來源地與目的地不同",
        "compare_outOfWorld": "無法進入位於世界外的方塊",
        "compare_success": "已比對 %1$d 個方塊",
        "compare_tooManyBlocks": "指定區域內的方塊數量太多 (%1$d > %2$d)",
        "corruptworld_description": "損毀在伺服器中載入的世界。",
        "corruptworld_success": "成功損毀世界。",
        "daylock_description": "開啟與關閉日夜交替。",
        "debug_description": "開始或停止除錯工作階段。",
        "debug_notStarted": "不能在開始分析以前就停止！",
        "debug_start": "開始除錯分析",
        "debug_stop": "%.2f 秒 (%1$d 刻) 後停止除錯分析",
        "defaultgamemode_description": "設定預設遊戲模式。",
        "defaultgamemode_success": "現在這世界的預設遊戲模式為 %1$s",
        "deop_description": "撤銷玩家的操作者狀態。",
        "deop_failed": "無法取消權限 (權限等級太高)：%s",
        "deop_success": "已取消權限：%s",
        "deop_message": "您的權限已取消",
        "difficulty_description": "設定難渡等級。",
        "difficulty_usage": "/difficulty <new difficulty>",
        "difficulty_success": "已將遊戲難度設為 %1$s",
        "downfall_success": "已切換天氣",
        "effect_description": "新增或移除狀態效果。",
        "effect_failure_notActive": "無法將 %1$s 從 %2$s 身上移除，因為其身上無此效果",
        "effect_failure_notActive_all": "無法移除 %1$s 的效果，因為他們身上沒有任何效果",
        "effect_failure_notAMob": "%1$s 無法有效果",
        "effect_notFound": "沒有 ID 為 %s 的生物特殊效果",
        "effect_success": "已對 %3$s 加上 %4$d 秒的 %1$s * %2$d",
        "effect_success_removed": "將 %1$s 從 %2$s 身上移除了",
        "effect_success_removed_all": "已解除 %1$s 身上所有效果",
        "enchant_cantCombine": "%1$s 無法和 %2$s 結合",
        "enchant_invalidLevel": "%1$s 不支援等級 %2$d",
        "enchant_cantEnchant": "所選附魔無法加到目標物品：%1$s",
        "enchant_description": "可對玩家選定的物品增加一個附加能力。",
        "enchant_noItem": "目標未持有物品：%1$s",
        "enchant_notFound": "並不存在 ID 為 %1$d 的附魔",
        "enchant_success": "%1$s 的附魔成功",
        "entitydata_description": "修改實體的數據標籤。",
        "entitydata_failed": "資料標記未變更：%1$s",
        "entitydata_noPlayers": "%1$s 是一位玩家，所以無法變更",
        "entitydata_success": "實體資料標記已更新為：%1$s",
        "entitydata_tagError": "資料標籤解析失敗：%1$s",
        "execute_allInvocationsFailed": "無法進行任何援引：'%1$s'",
        "execute_failed": "無法執行 '%1$s' 為 %2$s",
        "execute_description": "可代表一或多個實體執行指令。",
        "fill_description": "以特定方塊填滿某個地區的所有或部分地方。",
        "fill_failed": "沒有填滿的方塊",
        "fill_outOfWorld": "無法將方塊放置在世界邊界之外",
        "fill_success": "已填滿 %1$d 個方塊",
        "fill_tagError": "資料標籤解析失敗：%1$s",
        "fill_tooManyBlocks": "指定區域內的方塊數量太多 (%1$d > %2$d)",
        "fill_replace_auxvalue_invalid": "方塊 %1$s 的取代數據值無效",
        "function_description": "執行在對應功能檔中找到的指令。",
        "function_functionNameNotFound": "找不到功能 %1$s。",
        "function_invalidCharacters": "標題為「%s」的功能無效，功能名稱中不允許使用「%s」字元。",
        "function_noEngineVersionSpecified": "無法執行功能 %s。您必須在行為模式包的 manifest.json 中指定一個 min_engine_version。",
        "function_success": "已成功執行 %1$d 個功能項目。",
        "gamemode_description": "可設定玩家的遊戲模式。",
        "gamemode_success_other": "將 %2$ 的遊戲模式設定為 %1$s",
        "gamemode_success_self": "將自己的遊戲模式設定至 %1$s",
        "gamemode_fail_invalid": "遊戲模式「'%1$s'」無效",
        "gamerule_description": "可設定或查詢遊戲規則值。",
        "gamerule_type_invalid": "遊戲規則「'%1$s'」使用的類型無效",
        "gamerule_type_nocheatsenabled": "遊戲規則「%1$s」只有在密技於此世界中啟用後才可使用。",
        "gamerule_nopermission": "只有伺服器擁有人才可更改 '%1$s'",
        "gamerule_norule": "沒有名為「'%1$s'」的遊戲規則",
        "gamerule_success": "遊戲規則「%1$s」已更新為「%2$s」",
        "generic_async_initiated": "%1$s' 的指令已開始 (非同步步驟 %2$d)",
        "generic_boolean_invalid": "%1$s' 不是 true 或 false",
        "generic_chunk_notFound": "未找到指定區塊",
        "generic_componentError": "零件清單解析失敗",
        "generic_dimension_notFound": "未找到指定向度",
        "generic_disabled": "此等級未啟用密技。",
        "generic_disabled_templateLocked": "設定目前已經鎖定。在「遊戲設定」選單中解鎖範本世界選項以變更。",
        "generic_double_tooBig": "您所輸入的數字 (%.2f) 過大，最大為 %.2f",
        "generic_double_tooSmall": "您所輸入的數字 (%.2f) 過小，最少為 %.2f",
        "generic_duplicateType": "重複類型參數",
        "generic_duplicateSelectorArgument": "重複 %s 選擇器參數",
        "generic_encryption_badkey": "提供的公開金鑰有誤，PEM 格式化後金鑰預期應為 120 位元。",
        "generic_encryption_badsalt": "提供的 Salt 值有誤，base 64 編碼前預期應為 16 位元。",
        "generic_encryption_required": "需要加密單元",
        "generic_entity_invalidType": "實體類型 '%1$s' 無效",
        "generic_entity_invalidUuid": "提供的實體 UUID 格式無效",
        "generic_entity_notFound": "找不到該實體",
        "generic_exception": "嘗試執行此指令時發生未知錯誤",
        "generic_invalidAgentType": "類型參數適用於 Agent 專用選擇器",
        "generic_invalidcontext": "為該指令類型提供的內容無效",
        "generic_invalidDevice": "此裝置不支援使用您輸入的指令 %s",
        "generic_invalidPlayerType": "類型參數適用於玩家專用選擇器",
        "generic_invalidType": "未知類型參數",
        "generic_levelError": "最大等級必須大於最小等級",
        "generic_malformed_body": "本體欠缺或變形",
        "generic_malformed_type": "無效的要求類型",
        "generic_notimplemented": "未實行",
        "generic_num_invalid": "%1$s' 不是一個有效的數字",
        "generic_num_tooBig": "您所輸入的數字 (%1$d) 過大，最大為 %2$d。",
        "generic_num_tooSmall": "您所輸入的數目 (%1$d) 過小，最少為 %2$d。",
        "generic_parameter_invalid": "%1$s' 參數無效",
        "generic_permission_selector": "<權限不足，無法擴大選擇器>",
        "generic_player_notFound": "找不到該玩家",
        "generic_protocol_mismatch": "所提供的協定版本與 Minecraft 的協定版本不符",
        "generic_radiusError": "最小選擇器半徑必須小於最大",
        "generic_radiusNegative": "半徑不可于負數",
        "generic_rotationError": "旋轉超出範圍",
        "generic_running": "此指令已執行中",
        "generic_step_failed": "指令步驟失敗",
        "generic_syntax": "語法錯誤：預期外的「%2$s」：於「%1$s>>%2$s<<%3$s」",
        "generic_noTargetMatch": "無符合選擇器的目標",
        "generic_targetNotPlayer": "選擇器必須為玩家類型",
        "generic_tooManyNames": "過多目標名稱參數",
        "generic_tooManyTargets": "過多目標符合選擇器",
        "generic_too_many_requests": "提出的指令過多，請等候一個完成",
        "generic_unknown": "不明的指令：%s。請確認該指令是否存在，以及您是否具備使用該指令的權限。",
        "generic_usage": "用法：%1$s",
        "generic_usage_noparam": "用法：",
        "generic_version_mismatch": "此指令無此要求的版本存在",
        "generic_version_missing": "不是來自聊天的指令呼叫，應指明指令的版本",
        "getchunkdata_description": "為特定區塊取得像素。",
        "getchunkdata_success": "已收到區塊資料",
        "getchunks_description": "取得已載入的區塊清單。",
        "getchunks_success": "已收到區塊清單",
        "getlocalplayername_description": "恢復本機玩家名稱",
        "getspawnpoint_description": "取得指定玩家的增生位置。",
        "gettopsolidblock_description": "取得指定位置下方的頂端非空中方塊位置",
        "gettopsolidblock_notfound": "指定位置下方沒有堅固方塊",
        "give_block_notFound": "沒有名稱為 %1$d 的方塊",
        "give_description": "可將物品給玩家。",
        "give_item_invalid": "無效的指令語法：該資料值無此等 %s 存在",
        "give_item_notFound": "沒有名稱為 %1$d 的物品",
        "give_map_invalidData": "提供的地圖數據無效",
        "give_map_featureNotFound": "無法製作探索地圖。此維度找不到此功能",
        "give_success": "已將 %1$s * %2$d 給予 %3$s",
        "give_successRecipient": "您已給 %1$s * %2$d",
        "give_tagError": "資料標籤解析失敗：%1$s",
        "help_description": "提供說明/指令清單。",
        "help_footer": "提示：輸入指令時請使用 <Tab> 鍵來自動完成指令或參數",
        "help_header": "--- 顯示說明第 %1$d 頁 (共 %2$d 頁) (/help <頁數>) ---",
        "help_command_aliases": "%s (also %s)：",
        "immutableworld_description": "可設定世界的不可變化狀態。",
        "immutableworld_info": "immutableworld = %s",
        "kick_description": "將玩家踢出伺服器。",
        "kick_description_edu": "從遊戲中移除玩家。",
        "kick_not_found": "找不到玩家 %1$s",
        "kick_not_yourself": "您無法從遊戲中將自己移除",
        "kick_success": "%1$s 從遊戲中被踢出",
        "kick_success_reason": "%1$s 從遊戲中被踢出：'%2$s'",
        "kick_success_reasonedu": "已從以下遊戲中移除 %1$s：「%2$s」",
        "kick_no_host": "主辦者不會被踢出遊戲。",
        "kick_no_teacher": "教師不會從遊戲中移除。",
        "kill_successful_edu": "已移除 %1$s",
        "kill_successful": "已刪除 %1$s",
        "kill_description_edu": "移除實體 (玩家、生物等)。",
        "kill_description": "殺死實體 (玩家、生物等)。",
        "list_description": "列出伺服器上的玩家。",
        "locate_description": "針對指定的類型，取得距離最近結構的座標。",
        "locate_fail_noplayer": "此指令限由有效玩家使用",
        "locate_fail_nostructurefound": "未於此向度找到有效結構",
        "locate_success": "最近的 %1$s 是在方塊 %2$s, (y?), %3$s",
        "togglecontentlog_toggle": "啟用/停用內容記錄指令",
        "togglecontentlog_enabled": "內容記錄已啟用",
        "togglecontentlog_disabled": "內容記錄已停用",
        "me_description": "顯示有關自己的訊息。",
        "message_display_incoming": "%1$s 悄悄對您說：%2$s",
        "message_display_outgoing": "您悄悄對 %1$s 說：%2$s",
        "message_sameTarget": "您不能傳送私訊給自己！",
        "mixer_description": "Mixer 互動控制",
        "mixer_error_unknown": "發生未知 Mixer 錯誤。",
        "mixer_error_notoken": "您必須以 Microsoft 帳戶登入才能啟用 Mixer 互動功能。",
        "mixer_error_notsupported": "您使用的裝置不支援 Mixer 互動功能。",
        "mixer_interactive_error": "發生 Mixer 錯誤：%1$s",
        "mixer_scene_failed": "沒有 %1$s 的暱稱。請確認您輸入正確的暱稱。",
        "mixer_scene_success": "暱稱已變更為：%1$s",
        "mixer_start_success": "Mixer 互動功能啟用：%1$s",
        "mixer_start_fail_invalidCode": "找不到 ID 為「%1$s」的項目。請確認 ID 或共用代碼正確無誤。",
        "mixer_stop_success": "Mixer 互動功能已經停用。",
        "mixer_stop_fail": "沒有可停用的互動工作階段。",
        "mixer_status_notinitialized": "互動功能沒有啟用。",
        "mixer_status_enabled": "互動功能已經啟用。",
        "mixer_status_initializing": "互動功能正在初始化。",
        "mixer_status_pending": "互動功能正等待處理。",
        "mixer_status_disabled": "互動功能已經停用。",
        "mixer_activatedbutton": "%1$s 已啟用 %2$s。",
        "mobevent_description": "控制允許執行哪些生物活動。",
        "mobevent_eventsEnabledSetToTrue": "生物活動現在已經啟用。設定為 False 的個別活動不會執行。",
        "mobevent_eventsEnabledSetToFalse": "生物活動現在已經停用。個別活動將不會執行。",
        "mobevent_eventsEnabledIsTrue": "生物活動已經啟用。設定為 False 的個別活動不會執行。",
        "mobevent_eventsEnabledIsFalse": "生物活動已經停用。個別活動將不會執行。",
        "mobevent_eventSetToTrue": "生物活動 %s (ID：%s) 設為 True。",
        "mobevent_eventSetToTrueButEventsDisabled": "生物活動 %s (ID：%s) 設為 True，但生物活動已經停用。",
        "mobevent_eventSetToFalse": "生物活動 %s (ID：%s) 設為 False。",
        "mobevent_eventIsTrue": "生物活動 %s (ID：%s) 設為 True。",
        "mobevent_eventIsTrueButEventsDisabled": "生物活動 %s (ID：%s) 設為 True，但生物活動已經停用。",
        "mobevent_eventIsFalse": "生物活動 %s (ID：%s) 設為 False。",
        "op_description": "授予玩家操作者狀態。",
        "op_failed": "無法提供權限 (已是操作者或更高層級)：%s",
        "op_success": "已提供權限：%s",
        "op_message": "您已獲得權限",
        "origin_commandblock": "指令方塊",
        "origin_external": "外部",
        "origin_devconsole": "DevConsole",
        "origin_script": "Script Engine",
        "origin_server": "伺服器",
        "origin_teacher": "教師",
        "ops_description": "可重新載入並套用權限許可。",
        "ops_reloaded": "權限已自檔案重新載入。",
        "ops_set_success": "設定玩家 %s 的操作者指令成功。",
        "permissions_description": "可重新載入並套用權限許可。",
        "permissions_reloaded": "權限已自檔案重新載入。",
        "permissions_set_failed": "無法為玩家 %s 設定權限等級 %s。",
        "permissions_set_success": "設定玩家 %s 的權限等級 %s 成功。",
        "permissions_save_failed": "無法儲存玩家 %s 的權限等級 %s。",
        "permissions_save_success": "儲存玩家 %s 的權限等級 %s 成功。",
        "spawnParticleEmitter_description": "建立顆粒發射器",
        "particle_description": "創建粒子。",
        "particle_notFound": "未知的效果名稱 (%1$s)",
        "particle_success": "正在應用「%1$s」效果共 %2$d 次",
        "players_list": "共有 %1$d/%2$d 玩家在線上：",
        "players_list_names": "%s",
        "playsound_description": "播放音效。",
        "playsound_playerTooFar": "玩家 %1$s 距離太遠，聽不到音效",
        "playsound_success": "播放 '%1$s' 音效給 %2$s 聽",
        "position_description": "開啟/關閉玩家座標。",
        "publish_failed": "無法主持本機遊戲",
        "publish_started": "在 %1$s 網路埠上主持的本機遊戲",
        "querytarget_description": "取得指定目標實體的轉型、名稱和 ID 資訊。",
        "querytarget_success": "目標資料：%1$s",
        "reload_description": "從所有行為模式包中重新載入所有功能檔。",
        "reload_success": "現有的功能檔已經重新載入。重新啟動 Minecraft 以重新載入新功能。",
        "replaceitem_description": "取代物品欄中的物品。",
        "replaceitem_failed": "無法將 %s 物品槽 %d 取代成 %d * %s",
        "replaceitem_keepFailed": "已經有一個物品佔用 %s 槽 %d。",
        "replaceitem_noContainer": "在 %s 的方塊不是容器",
        "replaceitem_badSlotNumber": "無法取代 %d，數值必須介於 %d 和 %d 之間",
        "replaceitem_success": "已將 %s 物品欄 %d 取代成 %d * %s",
        "replaceitem_success_entity": "已將 %s 物品欄 %d 的 %s 取代成 %d * %s",
        "replaceitem_tagError": "資料標籤解析失敗：%1$s",
        "save_description": "控制或檢查遊戲儲存資料至磁碟的方式。",
        "save_disabled": "關閉地圖自動存檔功能",
        "save_enabled": "開啓地圖自動存檔功能",
        "save_failed": "存檔失敗：%1$s",
        "save_start": "儲存中...",
        "save_success": "世界儲存完畢",
        "save_all_error": "嘗試暫停等級儲存時發生錯誤。",
        "save_all_success": "資料已儲存，檔案現已可供複製。",
        "save_off_alreadyOff": "儲存功能已經關閉。",
        "save_on_alreadyOn": "儲存功能已經開啟。",
        "save_on_notDone": "之前的儲存尚未完成。",
        "save_on_description": "啟用自動伺服器儲存。",
        "save_on_success": "變更等級現已繼續。",
        "save_state_description": "檢查是否之前的全部儲存已經完成，並列出包含在內的檔案。",
        "say_description": "在聊天中傳訊息給其他玩家。",
        "scoreboard_description": "追蹤並顯示各種目標物件。",
        "scoreboard_allMatchesFailed": "所有配對均失敗",
        "scoreboard_noMultiWildcard": "僅限一個使用者萬用字元",
        "scoreboard_objectiveNotFound": "無法找到名稱為「%1$s」的物件",
        "scoreboard_objectiveReadOnly": "物件「%1$s」是唯讀並且無法設置",
        "scoreboard_objectives_add_alreadyExists": "名稱為「%1$s」的物件已經存在",
        "scoreboard_objectives_add_displayTooLong": "物件顯示名稱「%1$s」過長，最多只能有 %2$d 個字元",
        "scoreboard_objectives_add_success": "已成功添加新物件「%1$s」",
        "scoreboard_objectives_add_tooLong": "物件名稱「%1$s」過長，最多只能有 %2$d 個字元",
        "scoreboard_objectives_add_wrongType": "無效的物件條件類型「%1$s」",
        "scoreboard_objectives_add_needName": "一個物件需要名稱。",
        "scoreboard_objectives_description": "修改計分板物件。",
        "scoreboard_objectives_list_count": "顯示計分板上 %1$d 個物件：",
        "scoreboard_objectives_list_empty": "記分板上沒有物件",
        "scoreboard_objectives_list_entry": "- %1$s：顯示為「%2$s」，類型為「%3$s」",
        "scoreboard_objectives_remove_success": "已成功移除物件「%1$s」",
        "scoreboard_objectives_setdisplay_invalidSlot": "沒有為「%1$s」的顯示位置",
        "scoreboard_objectives_setdisplay_successCleared": "已清空「%1$s」物件顯示位置",
        "scoreboard_objectives_setdisplay_successSet": "已將物件顯示位置從「%1$s」設定為「%2$s」",
        "scoreboard_players_add_success": "已新增 %1$d 至 %3$s 的 [%2$s] (現為 %4$d)",
        "scoreboard_players_add_multiple_success": "已新增 %1$d 至 %3$s 個實體的 [%2$s]",
        "scoreboard_players_nameNotFound": "必須為玩家命名。",
        "scoreboard_players_enable_noTrigger": "物件 %1$s 並非觸發類型",
        "scoreboard_players_enable_success": "已為 %2$s 啟用觸發項目 %1$s",
        "scoreboard_players_list_count": "顯示計分板上追蹤的 %1$d 個玩家：",
        "scoreboard_players_list_empty": "記分板上沒有可追蹤的玩家",
        "scoreboard_players_list_player_count": "正為 %2$s 顯示 %1$d 個追蹤的物件：",
        "scoreboard_players_list_player_empty": "玩家 %1$s 沒有記錄分數",
        "scoreboard_players_list_player_entry": "- %2$s：%1$d (%3$s)",
        "scoreboard_players_operation_invalidOperation": "操作 %1$s 無效",
        "scoreboard_players_operation_notFound": "無法找到分數 %1$s，玩家為 %2$s",
        "scoreboard_players_operation_success": "已更新 %2$d 個實體的 [%1$s]",
        "scoreboard_players_offlinePlayerName": "玩家離線",
        "scoreboard_players_random_invalidRange": "最少 %1$d 沒有少於最多 %2$d",
        "scoreboard_players_remove_success": "已從 [%2$s] 移除 %3$s 的 %1$d (現為 %4$d)",
        "scoreboard_players_remove_multiple_success": "已從 [%2$s] 移除 %3$d 個實體的 %1$d",
        "scoreboard_players_reset_success": "已重置玩家 %1$s 的分數",
        "scoreboard_players_resetscore_success": "已重置分數 %1$s，玩家為 %2$s",
        "scoreboard_players_set_success": "設定 %2$s 的 [%1$s] 至 %3$d",
        "scoreboard_players_set_multiple_success": "設定 %2$d 個實體的 [%1$s] 至 %3$d",
        "scoreboard_players_set_tagError": "無法解析此 dataTag，原因為：%1$s",
        "scoreboard_players_set_tagMismatch": "此 dataTag 並不符合 %1$s",
        "scoreboard_players_score_notFound": "無法找到分數 %1$s，玩家為 %2$s",
        "scoreboard_players_test_failed": "分數 %1$d 並非介於 %2$d 至 %3$d 的範圍內",
        "scoreboard_players_test_success": "分數 %1$d 介於 %2$d 至 %3$d 的範圍內",
        "scoreboard_teamNotFound": "找不到名稱為「%1$s」的隊伍",
        "scoreboard_teams_add_alreadyExists": "名稱為「%1$s」的隊伍已經存在",
        "scoreboard_teams_add_displayTooLong": "隊伍顯示名稱「%1$s」過長，最多只能有 %2$d 個字元",
        "scoreboard_teams_add_success": "已成功添加新隊伍「%1$s」",
        "scoreboard_teams_add_tooLong": "隊伍名稱「%1$s」過長，最多只能有 %2$d 個字元",
        "scoreboard_teams_empty_alreadyEmpty": "隊伍 %1$s 已空，無法移除不存在的玩家",
        "scoreboard_teams_empty_success": "移除了隊伍 %2$s 内的全部 %1$d 個玩家",
        "scoreboard_teams_join_failure": "無法給隊伍 %2$s 添加 %1$d 個玩家：%3$s",
        "scoreboard_teams_join_success": "已將 %1$d 個玩家添加到隊伍 %2$s：%3$s",
        "scoreboard_teams_leave_failure": "無法從他們的隊伍中移除 %1$d 個玩家：%2$s",
        "scoreboard_teams_leave_noTeam": "您不屬於任何一隊",
        "scoreboard_teams_leave_success": "已從他們的隊伍中移除 %1$d 個玩家：%2$s",
        "scoreboard_teams_list_count": "顯示計分板上 %1$d 個隊伍：",
        "scoreboard_teams_list_empty": "記分板上沒有註冊的隊伍",
        "scoreboard_teams_list_entry": "- %1$s：「%2$s」有 %3$d 個玩家",
        "scoreboard_teams_list_player_count": "顯示隊伍 %2$s 中 %1$d 個玩家：",
        "scoreboard_teams_list_player_empty": "隊伍 %1$s 沒有玩家",
        "scoreboard_teams_list_player_entry": "- %2$s：%1$d (%3$s)",
        "scoreboard_teams_option_noValue": "選項 %1$s 的有效數值為：%2$s",
        "scoreboard_teams_option_success": "將選項 %1$s 在隊伍 %2$s 上設定為 %3$s",
        "scoreboard_teams_remove_success": "已移除隊伍 %1$s",
        "seed_success": "種子：%1$s",
        "setblock_description": "將某個方塊變更為另一個方塊。",
        "setblock_failed": "無法放置方塊",
        "setblock_noChange": "無法放置此方塊",
        "setblock_notFound": "ID 或名稱為 %1$s 的方塊並不存在",
        "setblock_outOfWorld": "無法將方塊放置在世界邊界之外",
        "setblock_success": "方塊已放置",
        "setblock_tagError": "資料標籤解析失敗：%1$s",
        "setidletimeout_success": "成功設置閒置踢出時間為 %1$d 分鐘。",
        "setfixedinvslots_description": "為伺服器設定固定物品欄的數目。",
        "setfixedinvslots_success": "固定物品欄數量設為 %1$d",
        "setfixedinvslot_description": "可設定固定欄位給指定的物品。",
        "setfixedinvslot_success": "固定物品欄 [%1$d] 設為 %2$s",
        "globalpause_description": "可為所有玩家設定或取得遊戲的暫停狀態。",
        "globalpause_success": "已設定或取得暫停狀態",
        "setmaxplayers_description": "設定此局遊戲的最多玩家人數。",
        "setmaxplayers_success": "將最多玩家人數設為%1$d人。",
        "setmaxplayers_success_upperbound": "（依允許連線人數上限而定）",
        "setmaxplayers_success_lowerbound": "（依目前玩家人數而定）",
        "setworldspawn_description": "可設定世界增生。",
        "setworldspawn_success": "設定世界的增生點為 (%1$d, %2$d, %3$d)",
        "setworldspawn_wrongDimension": "世界增生點無法設定在這個範圍內",
        "spawnpoint_success_single": "設定 %1$s 的增生點為 (%2$d, %3$d, %4$d)",
        "spawnpoint_description": "可為玩家設定增生點。",
        "spawnpoint_success_multiple_specific": "將 %1$s 的增生點設為 (%2$d, %3$d, %4$d)",
        "spawnpoint_success_multiple_generic": "設定 %1$s 的增生點",
        "spawnpoint_wrongDimension": "起始點無法設定在這個範圍內",
        "spreadplayers_description": "傳送實體至隨機位置。",
        "spreadplayers_failure_players": "未能分散 %1$s 個玩家；分散中心座標為 (%2$s,%3$s) (可能原因：玩家間空間太少，請嘗試調整最大分散範圍至 %4$s)",
        "spreadplayers_failure_teams": "未能分散 %1$s 個隊伍；分散中心座標為 (%2$s,%3$s) (可能原因：玩家間空間太少，請嘗試調整最大分散範圍至 %4$s)",
        "spreadplayers_info_players": "(玩家間平均相距 %1$s 個方塊；相應反覆運算次數為 %2$s)",
        "spreadplayers_info_teams": "(隊伍間平均相距 %1$s 個方塊；相應反覆運算次數為 %2$s)",
        "spreadplayers_spreading_players": "正在分散 %1$s 個玩家；分散距離中心點 %2$s 個方塊；中心座標為 (%3$s,%4$s)；最少分散距離為 %5$s 個方塊",
        "spreadplayers_spreading_teams": "正在分散 %1$s 個隊伍；分散距離中心點 %2$s 個方塊；中心座標為 (%3$s,%4$s)；最少分散距離為 %5$s 個方塊",
        "spreadplayers_success_players": "已成功分散 %1$s 個玩家；分散中心座標為 (%2$s,%3$s)",
        "spreadplayers_success_teams": "已成功分散 %1$s 個隊伍；分散中心座標為 (%2$s,%3$s)",
        "stats_cleared": "已清空 %1$s 項統計資料",
        "stats_failed": "參數無效",
        "stats_noCompatibleBlock": "在 %1$d, %2$d, %3$d 的方塊無法追蹤統計資料。",
        "stats_success": "正在儲存 %1$s 項統計資料到 %2$s，對象實體為 %3$s",
        "stop_description": "可停止伺服器。",
        "stop_start": "正在停止伺服器",
        "stopsound_description": "停止播放一種音效。",
        "stopsound_success": "已停止音效 %s 共 %s 秒",
        "stopsound_success_all": "已停止所有音效共 %s 秒",
        "summon_description": "召喚某個實體。",
        "summon_failed": "召喚物體失敗",
        "summon_outOfWorld": "無法召喚在世界外的物體",
        "summon_success": "召喚成功",
        "summon_tagError": "資料標籤解析失敗：%1$s",
        "tag_description": "管理實體中儲存的標籤。",
        "tag_add_failed": "目標已有標籤或有太多標籤",
        "tag_add_success_single": "已新增標籤「%1$s」至 %2$s",
        "tag_add_success_multiple": "已新增標籤「%1$s」至 %2$d 個實體",
        "tag_list_single_empty": "%s 沒有標籤",
        "tag_list_single_success": "%1$s 有 %2$d 個標籤：%3$s",
        "tag_list_multiple_empty": "%d 個實體沒有標籤",
        "tag_list_multiple_success": "%1$d 個實體共有 %2$d 個標籤：%3$s",
        "tag_remove_failed": "目標沒有此標籤",
        "tag_remove_success_single": "已從 %2$s 移除標籤「%1$s」",
        "tag_remove_success_multiple": "已從 %2$d 個實體移除標籤「%1$s」",
        "tell_description": "傳送私訊給一個或多個玩家。",
        "tellraw_description": "傳送 JSON 訊息給玩家。",
        "tellraw_jsonException": "無效的 json：%1$s",
        "tellraw_jsonStringException": "無效的 json 字串資料。",
        "tellraw_error_noData": "沒有提供資料。",
        "tellraw_error_notArray": "Rawtext 物件必須包含陣列。範例：\"rawtext\":[{..}]",
        "tellraw_error_textNotString": "Rawtext 的文字欄位必須包含字串。範例：\"rawtext\":[{\"text\": \"text to display\"}]",
        "tellraw_error_translateNotString": "Rawtext 的翻譯欄位必須包含一種語言機碼。範例：\"rawtext\":[{\"translate\": \"gui.ok\"}]",
        "tellraw_error_withNotArrayOrRawText": "rawtext 中的欄位必須包含一個陣列或另一個 rawtext 物件。範例 1：「rawtext」:[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}] 範例 2：「rawtext」:[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
        "tellraw_error_itemIsNotObject": "Rawtext 陣列中的 Json 值不是物件。範例：\"rawtext\": [{ \"text\" : \"my text\" }]",
        "educlientinfo_description": "取得用戶 ID 和主機狀態。此適用於 CM。",
        "testfor_description": "計算符合指定條件的實體 (玩家、生物、物品等) 數目。",
        "testfor_failure": "%1$s 並不符合資料值結構的要求",
        "testfor_success": "找到 %1$s",
        "testfor_tagError": "資料標籤解析失敗：%1$s",
        "testforblock_description": "測試特定方塊是否位於指定的位置。",
        "testforblock_failed_data": "%1$d、%2$d、%3$d 的方塊與預期的方塊狀態不相符。",
        "testforblock_failed_nbt": "在 %1$d,%2$d,%3$d 的方塊沒有所需的 NBT 值。",
        "testforblock_failed_tile": "在 %1$d,%2$d,%3$d 的方塊是 %4$s (預期：%5$s)。",
        "testforblock_failed_tileEntity": "在 %1$d,%2$d,%3$d 的方塊不是實體，不支援資料標記。",
        "testforblock_outOfWorld": "無法測試位於世界外的方塊",
        "testforblock_success": "在 %1$d,%2$d,%3$d 成功找到該方塊。",
        "testforblocks_description": "測試兩個地區內的方塊是否相符。",
        "tickingarea_description": "新增、移除或列出自動刷新區域。",
        "tickingarea_inuse": "%1$d 個自動刷新區域正在使用中 (共 %2$d 個)。",
        "tickingarea_noneExist_currentDimension": "目前的向度中沒有任何自動刷新區域。",
        "tickingarea_add_bounds_success": "已從 %1$d 將自動刷新區域新增至 %2$d。",
        "tickingarea_add_circle_success": "已新增位於 %1$d 中央且半徑為 %2$d 個方塊的自動刷新區域。",
        "tickingarea_add_failure": "自動刷新區域的數量已達上限 (%1$d 個)。您無法新增更多的自動刷新區域。",
        "tickingarea_add_conflictingname": "已有名稱為「%1$s」的自動刷新區域。",
        "tickingarea_add_chunkfailure": "自動刷新區域範圍過大 (包含超過 %1$d 方塊)，因此無法建立。",
        "tickingarea_add_radiusfailure": "半徑不得大於 %1$d，自動刷新區域過大，因此無法建立。",
        "tickingarea_remove_success": "已移除自動刷新區域",
        "tickingarea_remove_failure": "目前的向度中沒有任何包含方塊位置 %1$d 的自動刷新區域。",
        "tickingarea_remove_byname_failure": "目前的向度中沒有名稱為「%1$s」的自動刷新區域。",
        "tickingarea_remove_all_success": "已移除自動刷新區域",
        "tickingarea_remove_all_failure": "目前的向度中沒有任何自動刷新區域。",
        "tickingarea_list_chunks": "區塊",
        "tickingarea_list_circle_radius": "半徑",
        "tickingarea_list_success_currentDimension": "列出目前向度中的所有自動刷新區域",
        "tickingarea_list_success_allDimensions": "列出所有向度中的所有自動刷新區域",
        "tickingarea_list_failure_allDimensions": "所有向度中都沒有任何自動刷新區域。",
        "tickingarea_list_to": "至",
        "tickingarea_list_type_circle": "圓圈",
        "time_added": "時間增加了 %1$d。",
        "time_description": "變更或查詢世界遊戲時間。",
        "time_disabled": "已在此關卡啟用「永為白晝」。",
        "time_query_day": "白天為 %d",
        "time_query_daytime": "白天時間為 %d",
        "time_query_gametime": "遊戲時間為 %d",
        "time_set": "將時間設為 %1$d",
        "time_stop": "時間 %1$s",
        "title_description": "控制畫面標題。",
        "title_success": "Title command successfully executed",
        "titleraw_description": "使用 JSON 訊息控制畫面標題。",
        "toggledownfall_description": "切換天氣。",
        "tp_description": "傳送實體 (玩家、生物等)。",
        "tp_notSameDimension": "因玩家處在不同世界而無法傳送",
        "tp_outOfWorld": "無法傳送實體至世界之外",
        "tp_permission": "您沒有使用此指令的權限。",
        "tp_safeTeleportFail": "由於區域裡還有方塊，所以無法傳送%1$s至%2$s。",
        "tp_far": "無法傳送%1$s至%2$s未載入的區域",
        "tp_success": "傳送 %1$s 到 %2$s",
        "tp_successVictim": "已將您傳送至 %1$s",
        "tp_success_coordinates": "傳送 %1$s 到 %2$s, %3$s, %4$s",
        "transferserver_description": "轉移一位玩家到另一個伺服器。",
        "transferserver_successful": "已轉移的玩家",
        "transferserver_invalid_port": "無效的埠 (0-65535)",
        "trigger_description": "設定要啟用的觸發點。",
        "trigger_disabled": "尚未啟用觸發項目 %1$s",
        "trigger_invalidMode": "觸發模式 %1$s 無效",
        "trigger_invalidObjective": "觸發項目名稱 %1$s 無效",
        "trigger_invalidPlayer": "只有玩家才可使用 /trigger 指令",
        "trigger_success": "觸發項目 %1$s 已更改成 %2$s %3$s",
        "unban_failed": "無法取消封鎖玩家 %1$s",
        "unban_success": "取消封鎖玩家 %1$s",
        "unbanip_invalid": "您輸入了一個無效的 IP 位址",
        "unbanip_success": "解除封鎖 IP 位址 %1$s",
        "validategamelighting_description": "驗證指定區域的遊戲照明",
        "validategamelighting_checkRegionTooBig": "要檢查的照明區域太大！(%1$d > %2$d)",
        "validategamelighting_outOfWorld": "無法檢查世界以外的照明",
        "weather_clear": "變更為晴天",
        "weather_description": "設定天氣。",
        "weather_disabled": "未在此關卡啟用「天氣循環」。",
        "weather_query": "天氣狀態：%s",
        "weather_query_clear": "清澈",
        "weather_query_rain": "雨天",
        "weather_query_thunder": "雷雨",
        "weather_rain": "變更為雨天",
        "weather_thunder": "變更為雷雨",
        "whitelist_add_failed": "無法將 %1$s 加到允許清單",
        "whitelist_add_success": "將 %1$s 加入允許清單",
        "whitelist_description": "管理伺服器允許清單。",
        "whitelist_disabled": "關閉允許清單",
        "whitelist_enabled": "開啟允許清單",
        "whitelist_list": "共有 %1$d 位允許清單玩家 (全體玩家共 %2$d 位)：",
        "whitelist_reloaded": "允許清單已自檔案重新載入。",
        "whitelist_remove_failed": "無法從允許清單移除 %1$s",
        "whitelist_remove_success": "將 %1$s 從允許清單中移除",
        "world_age_description": "變更或查詢世界的年齡 (建立至今的時間長度)。",
        "world_age_added": "世界的年齡已增加 %1$d",
        "world_age_query": "世界年齡為 %d",
        "world_age_set": "將世界的年齡設為 %1$d",
        "worldborder_center_success": "世界邊界中心設定為 %1$s,%2$s",
        "worldborder_damage_amount_success": "已將世界邊界傷害值設定為每方塊 %1$s (每方塊從 %2$s 起)",
        "worldborder_damage_buffer_success": "已將世界邊界傷害緩衝區域設定為 %1$s 個方塊 (從 %2$s 個方塊起)",
        "worldborder_get_success": "世界邊界目前為 %1$s 個方塊寬",
        "worldborder_set_success": "世界邊界設定為 %1$s 個方塊塊寬 (從 %2$s 個方塊起)",
        "worldborder_setSlowly_grow_success": "世界邊界正在增加至 %1$s 個方塊寬 (從 %2$s 個方塊起)，需時 %3$s 秒",
        "worldborder_setSlowly_shrink_success": "世界邊界正在縮小至 %1$s 個方塊寬 (從 %2$s 個方塊起)，需時 %3$s 秒",
        "worldborder_warning_distance_success": "已將世界邊界警示設定為 %1$s 個方塊以外 (從 %2$s 個方塊起)",
        "worldborder_warning_time_success": "已將世界邊界警告訊號設定為 %1$s 秒以外 (從 %2$s 秒起)",
        "worldbuilder_description": "切換訪客的創世者狀態。",
        "worldbuilder_success": "創世者狀態更新至 %1$s",
        "wsserver_description": "可嘗試連線到所提供 URL 上的 WebSocket 伺服器。",
        "wsserver_invalid_url": "所提供的伺服器 URL 無效",
        "wsserver_request_existing": "有另一連線要求正在執行",
        "wsserver_request_failed": "無法連接到伺服器：%1$s",
        "wsserver_success": "已建立連線到伺服器：%1$s",
        "xp_description": "增加或移除玩家經驗點數。",
        "xp_failure_widthdrawXp": "無法賦予玩家負經驗點數",
        "xp_success": "已將 %1$d 經驗值賦予 %2$s",
        "xp_success_levels": "已將 %1$d 等級賦予 %2$s",
        "xp_success_negative_levels": "從 %2$s 取得 %1$d 等級"
    },
    item:{
        "air": [
            "空氣"
        ],
        "apple": [
            "蘋果"
        ],
        "golden_apple": [
            "金蘋果"
        ],
        "appleenchanted": [
            "魔法蘋果"
        ],
        "armor_stand": [
            "盔甲座"
        ],
        "arrow": [
            "箭"
        ],
        "tipped_arrow": [
            "尖銳箭"
        ],
        "banner": [
            "黑色旗幟",
            "黑色旗幟",
            "紅色旗幟",
            "綠色旗幟",
            "棕色旗幟",
            "藍色旗幟",
            "紫色旗幟",
            "青綠色旗幟",
            "淺灰色旗幟",
            "灰色旗幟",
            "粉紅色旗幟",
            "淡黃綠色旗幟",
            "黃色旗幟",
            "淺藍色旗幟",
            "洋紅色旗幟",
            "橙色旗幟",
            "白色旗幟"
        ],
        "bed": [
            "床舖",
            "白色床舖",
            "橙色床舖",
            "洋紅色床舖",
            "淺藍色床舖",
            "黃色床舖",
            "淡黃綠色床舖",
            "粉紅色床舖",
            "灰色床舖",
            "淺灰色床舖",
            "青綠色床舖",
            "紫色床舖",
            "藍色床舖",
            "棕色床舖",
            "綠色床舖",
            "紅色床舖",
            "黑色床舖"
        ],
        "bell": [
            "鈴鐺"
        ],
        "steak": [
            "牛排"
        ],
        "beef": [
            "生牛肉"
        ],
        "beetroot": [
            "甜菜根"
        ],
        "beetroot_soup": [
            "甜菜湯"
        ],
        "blaze_powder": [
            "烈焰粉"
        ],
        "blaze_rod": [
            "烈焰棒"
        ],
        "boat": [
            "橡木船",
            "橡木船",
            "杉木船",
            "樺木船",
            "叢林船",
            "相思木船",
            "黑橡木船"
        ],
        "bone": [
            "骨頭"
        ],
        "book": [
            "書本"
        ],
        "chainmail_boots": [
            "鎖鏈靴"
        ],
        "leather_boots": [
            "皮靴"
        ],
        "diamond_boots": [
            "鑽石靴"
        ],
        "golden_boots": [
            "黃金靴"
        ],
        "iron_boots": [
            "鐵靴"
        ],
        "bow": [
            "弓"
        ],
        "bowl": [
            "碗"
        ],
        "bread": [
            "麵包"
        ],
        "brewing_stand": [
            "釀製台"
        ],
        "brick": [
            "磚塊"
        ],
        "bucket": [
            "桶子"
        ],
        "bucketLava": [
            "熔岩桶"
        ],
        "bucketWater": [
            "水桶"
        ],
        "bucketFish": [
            "一籃鱈魚"
        ],
        "bucketSalmon": [
            "一籃鮭魚"
        ],
        "bucketTropical": [
            "一籃熱帶魚"
        ],
        "bucketPuffer": [
            "一籃河豚"
        ],
        "bucketCustomFish": [
            "一籃"
        ],
        "tropicalColorWhite": [
            "白色"
        ],
        "tropicalColorOrange": [
            "橙色"
        ],
        "tropicalColorMagenta": [
            "洋紅色"
        ],
        "tropicalColorSky": [
            "天藍色"
        ],
        "tropicalColorYellow": [
            "黃色"
        ],
        "tropicalColorLime": [
            "淡黃綠色"
        ],
        "tropicalColorRose": [
            "玫瑰色"
        ],
        "tropicalColorGray": [
            "灰色"
        ],
        "tropicalColorSilver": [
            "銀色"
        ],
        "tropicalColorTeal": [
            "藍綠色"
        ],
        "tropicalColorPlum": [
            "梅紅色"
        ],
        "tropicalColorBlue": [
            "藍色"
        ],
        "tropicalColorBrown": [
            "棕色"
        ],
        "tropicalColorGreen": [
            "綠色"
        ],
        "tropicalColorRed": [
            "紅色"
        ],
        "tropicalBodyKobSingle": [
            "%1$s 柯布魚"
        ],
        "tropicalBodySunstreakSingle": [
            "%1$s 太陽紋魚"
        ],
        "tropicalBodySnooperSingle": [
            "%1$s 偷窺魚"
        ],
        "tropicalBodyDasherSingle": [
            "%1$s 衝刺魚"
        ],
        "tropicalBodyBrinelySingle": [
            "%1$s 布林利魚"
        ],
        "tropicalBodySpottySingle": [
            "%1$s 斑點魚"
        ],
        "tropicalBodyFlopperSingle": [
            "%1$s  跳動魚"
        ],
        "tropicalBodyStripeySingle": [
            "%1$s 細刺魚"
        ],
        "tropicalBodyGlitterSingle": [
            "%1$s 閃光魚"
        ],
        "tropicalBodyBlockfishSingle": [
            "%1$s 方塊魚"
        ],
        "tropicalBodyBettySingle": [
            "%1$s 貝蒂魚"
        ],
        "tropicalBodyClayfishSingle": [
            "%1$s 黏土魚"
        ],
        "tropicalBodyKobMulti": [
            "%1$s-%2$s 柯布魚"
        ],
        "tropicalBodySunstreakMulti": [
            "%1$s-%2$s 太陽紋魚"
        ],
        "tropicalBodySnooperMulti": [
            "%1$s-%2$s 偷窺魚"
        ],
        "tropicalBodyDasherMulti": [
            "%1$s-%2$s 衝刺魚"
        ],
        "tropicalBodyBrinelyMulti": [
            "%1$s-%2$s 布林利魚"
        ],
        "tropicalBodySpottyMulti": [
            "%1$s-%2$s 斑點魚"
        ],
        "tropicalBodyFlopperMulti": [
            "%1$s-%2$s 跳動魚"
        ],
        "tropicalBodyStripeyMulti": [
            "%1$s-%2$s 細刺魚"
        ],
        "tropicalBodyGlitterMulti": [
            "%1$s-%2$s 閃光魚"
        ],
        "tropicalBodyBlockfishMulti": [
            "%1$s-%2$s 方塊魚"
        ],
        "tropicalBodyBettyMulti": [
            "%1$s-%2$s 貝蒂魚"
        ],
        "tropicalBodyClayfishMulti": [
            "%1$s-%2$s 黏土魚"
        ],
        "tropicalSchoolAnemone": [
            "海葵"
        ],
        "tropicalSchoolBlackTang": [
            "黑面粗皮鯛"
        ],
        "tropicalSchoolBlueDory": [
            "擬刺尾鯛"
        ],
        "tropicalSchoolButterflyFish": [
            "蝶魚"
        ],
        "tropicalSchoolCichlid": [
            "慈鯛"
        ],
        "tropicalSchoolClownfish": [
            "小丑魚"
        ],
        "tropicalSchoolCottonCandyBetta": [
            "棉花糖測試版"
        ],
        "tropicalSchoolDottyback": [
            "擬雀鯛"
        ],
        "tropicalSchoolEmperorRedSnapper": [
            "川紋笛鯛"
        ],
        "tropicalSchoolGoatfish": [
            "秋姑魚"
        ],
        "tropicalSchoolMoorishIdol": [
            "馬夫魚"
        ],
        "tropicalSchoolOrnateButterfly": [
            "紅獅子魚"
        ],
        "tropicalSchoolParrotfish": [
            "鸚嘴魚"
        ],
        "tropicalSchoolQueenAngelFish": [
            "皇后神仙魚"
        ],
        "tropicalSchoolRedCichlid": [
            "紅鯛"
        ],
        "tropicalSchoolRedLippedBlenny": [
            "紅色唇指魚"
        ],
        "tropicalSchoolRedSnapper": [
            "紅鯛魚"
        ],
        "tropicalSchoolThreadfin": [
            "午仔魚"
        ],
        "tropicalSchoolTomatoClown": [
            "白條小丑魚"
        ],
        "tropicalSchoolTriggerfish": [
            "剝皮魚"
        ],
        "tropicalSchoolYellowTang": [
            "黃面粗皮鯛"
        ],
        "tropicalSchoolYellowtailParrot": [
            "黃尾鸚嘴魚"
        ],
        "cake": [
            "蛋糕"
        ],
        "camera": [
            "攝影機"
        ],
        "golden_carrot": [
            "金色胡蘿蔔"
        ],
        "carrotOnAStick": [
            "胡蘿蔔釣竿"
        ],
        "warped_fungus_on_a_stick": [
            "詭異菌類釣竿"
        ],
        "carrot": [
            "胡蘿蔔"
        ],
        "cauldron": [
            "水槽"
        ],
        "coal": [
            "煤塊",
            null,
            "木炭"
        ],
        "chainmail_chestplate": [
            "鎖鏈護甲"
        ],
        "leather_chestplate": [
            "皮衣"
        ],
        "diamond_chestplate": [
            "鑽石護甲"
        ],
        "golden_chestplate": [
            "黃金護甲"
        ],
        "iron_chestplate": [
            "鐵護甲"
        ],
        "chorus_fruit": [
            "歌萊果"
        ],
        "chorus_fruit_popped": [
            "爆開的歌萊果"
        ],
        "cooked_beef": [
            "烤牛肉"
        ],
        "cooked_chicken": [
            "熟雞肉"
        ],
        "cooked_porkchop": [
            "熟豬肉"
        ],
        "chicken": [
            "生雞肉"
        ],
        "clay_ball": [
            "黏土"
        ],
        "clock": [
            "時鐘"
        ],
        "comparator": [
            "紅石比較器"
        ],
        "compass": [
            "指南針"
        ],
        "lodestonecompass": [
            "磁石羅盤"
        ],
        "cookie": [
            "餅乾"
        ],
        "crossbow": [
            "十字弓"
        ],
        "diamond": [
            "鑽石"
        ],
        "repeater": [
            "紅石中繼器"
        ],
        "acacia_door": [
            "相思木門"
        ],
        "birch_door": [
            "樺木門"
        ],
        "dark_oak_door": [
            "黑橡木門"
        ],
        "iron_door": [
            "鐵門"
        ],
        "jungle_door": [
            "叢林木門"
        ],
        "wooden_door": [
            "橡木門"
        ],
        "spruce_door": [
            "杉木門"
        ],
        "crimson_door": [
            "深紅門"
        ],
        "warped_door": [
            "扭曲門"
        ],
        "dragon_breath": [
            "龍的吐息"
        ],
        "dye": [
            "墨囊",
            "墨囊",
            "紅色染料",
            "綠色染料",
            "可可豆",
            "青金石",
            "紫色染料",
            "青綠色染料",
            "淺灰色染料",
            "灰色染料",
            "粉紅色染料",
            "淡黃綠色染料",
            "黃色染料",
            "淺藍色染料",
            "洋紅色染料",
            "橙色染料",
            "骨粉",
            "黑色染料",
            "棕色染料",
            "藍色染料",
            "白色染料"
        ],
        "egg": [
            "蛋"
        ],
        "elytra": [
            "鞘翅"
        ],
        "emerald": [
            "翡翠"
        ],
        "emptyMap": [
            "空白地圖"
        ],
        "emptyLocatorMap": [
            "無定位地圖"
        ],
        "emptyPotion": [
            "水瓶"
        ],
        "enchanted_book": [
            "附魔書"
        ],
        "end_crystal": [
            "終界晶體"
        ],
        "end_rod": [
            "終界燭"
        ],
        "ender_eye": [
            "終界之眼"
        ],
        "ender_pearl": [
            "終界珍珠"
        ],
        "experience_bottle": [
            "經驗藥水瓶"
        ],
        "feather": [
            "羽毛"
        ],
        "fermented_spider_eye": [
            "發酵蜘蛛眼"
        ],
        "fireball": [
            "火彈"
        ],
        "fireworks": [
            "煙火火箭"
        ],
        "fireworksCharge": [
            "煙火星"
        ],
        "clownfish": [
            "熱帶魚"
        ],
        "cooked_fish": [
            "熟鱈魚"
        ],
        "fish": [
            "生鱈魚"
        ],
        "pufferfish": [
            "河豚"
        ],
        "cooked_salmon": [
            "熟鮭魚片"
        ],
        "salmon": [
            "生鮭魚"
        ],
        "fishing_rod": [
            "釣魚竿"
        ],
        "flint": [
            "打火石"
        ],
        "flint_and_steel": [
            "打火鐮"
        ],
        "flower_pot": [
            "花盆"
        ],
        "frame": [
            "物品框架"
        ],
        "ghast_tear": [
            "幽靈之淚"
        ],
        "glass_bottle": [
            "玻璃瓶"
        ],
        "gold_nugget": [
            "碎金塊"
        ],
        "iron_nugget": [
            "鐵粒"
        ],
        "diamond_axe": [
            "鑽石斧"
        ],
        "golden_axe": [
            "黃金斧"
        ],
        "iron_axe": [
            "鐵斧"
        ],
        "stone_axe": [
            "石斧"
        ],
        "wooden_axe": [
            "木斧"
        ],
        "chainmail_helmet": [
            "鎖鏈盔"
        ],
        "leather_helmet": [
            "皮帽"
        ],
        "diamond_helmet": [
            "鑽石盔"
        ],
        "golden_helmet": [
            "黃金盔"
        ],
        "iron_helmet": [
            "鐵盔"
        ],
        "diamond_hoe": [
            "鑽石鋤"
        ],
        "golden_hoe": [
            "黃金鋤"
        ],
        "iron_hoe": [
            "鐵鋤"
        ],
        "stone_hoe": [
            "石鋤"
        ],
        "wooden_hoe": [
            "木鋤"
        ],
        "honey_bottle": [
            "蜂蜜瓶"
        ],
        "honeycomb": [
            "蜂巢"
        ],
        "horsearmordiamond": [
            "鑽石馬鎧"
        ],
        "horsearmorgold": [
            "黃金馬鎧"
        ],
        "horsearmoriron": [
            "鐵馬鎧"
        ],
        "horsearmorleather": [
            "皮馬鎧"
        ],
        "gold_ingot": [
            "黃金錠塊"
        ],
        "iron_ingot": [
            "鐵錠塊"
        ],
        "netherite_ingot": [
            "獄髓錠塊"
        ],
        "netherite_scrap": [
            "獄髓廢料"
        ],
        "netherite_sword": [
            "獄髓劍"
        ],
        "netherite_pickaxe": [
            "獄髓鎬"
        ],
        "netherite_axe": [
            "獄髓斧"
        ],
        "netherite_shovel": [
            "獄髓鏟"
        ],
        "netherite_hoe": [
            "獄髓鋤頭"
        ],
        "netherite_boots": [
            "獄髓靴"
        ],
        "netherite_leggings": [
            "獄髓緊身褲"
        ],
        "netherite_chestplate": [
            "獄髓胸板"
        ],
        "netherite_helmet": [
            "獄髓頭盔"
        ],
        "lead": [
            "繩索"
        ],
        "leather": [
            "皮革"
        ],
        "leaves": [
            "樹葉",
            "橡樹樹葉",
            "杉樹樹葉",
            "樺樹樹葉",
            "叢林樹葉",
            "相思樹葉",
            "黑橡樹葉"
        ],
        "chainmail_leggings": [
            "鎖鏈護脛"
        ],
        "leather_leggings": [
            "皮褲"
        ],
        "diamond_leggings": [
            "鑽石護脛"
        ],
        "golden_leggings": [
            "黃金護脛"
        ],
        "iron_leggings": [
            "鐵護脛"
        ],
        "nautilus_shell": [
            "鸚鵡螺殼"
        ],
        "heart_of_the_sea": [
            "海洋之心"
        ],
        "magma_cream": [
            "熔岩球"
        ],
        "map": [
            "地圖"
        ],
        "melon": [
            "西瓜"
        ],
        "milk": [
            "牛奶"
        ],
        "minecart": [
            "礦車"
        ],
        "chest_minecart": [
            "運輸礦車"
        ],
        "command_block_minecart": [
            "指令方塊礦車"
        ],
        "minecartFurnace": [
            "動力礦車"
        ],
        "hopper_minecart": [
            "漏斗礦車"
        ],
        "tnt_minecart": [
            "炸藥礦車"
        ],
        "trident": [
            "三叉戟"
        ],
        "mushroom_stew": [
            "燉蘑菇"
        ],
        "muttoncooked": [
            "熟羊肉"
        ],
        "muttonraw": [
            "生羊肉"
        ],
        "name_tag": [
            "名牌"
        ],
        "netherbrick": [
            "地獄磚塊"
        ],
        "quartz": [
            "地獄石英"
        ],
        "nether_wart": [
            "地獄結節"
        ],
        "netherStar": [
            "地獄星"
        ],
        "painting": [
            "圖畫"
        ],
        "paper": [
            "紙張"
        ],
        "diamond_pickaxe": [
            "鑽石鎬"
        ],
        "golden_pickaxe": [
            "黃金鎬"
        ],
        "iron_pickaxe": [
            "鐵鎬"
        ],
        "stone_pickaxe": [
            "石鎬"
        ],
        "wooden_pickaxe": [
            "木鎬"
        ],
        "porkchop_cooked": [
            "熟豬肉"
        ],
        "porkchop": [
            "生豬肉"
        ],
        "portfolio": [
            "個人資料"
        ],
        "potato": [
            "馬鈴薯"
        ],
        "baked_potato": [
            "烤馬鈴薯"
        ],
        "poisonous_potato": [
            "有毒馬鈴薯"
        ],
        "potion": [
            "藥水"
        ],
        "prismarine_crystals": [
            "海磷晶體"
        ],
        "prismarine_shard": [
            "海磷碎片"
        ],
        "pumpkin_pie": [
            "南瓜派"
        ],
        "cooked_rabbit": [
            "熟兔肉"
        ],
        "rabbit_foot": [
            "兔子腳"
        ],
        "rabbit_hide": [
            "兔子皮"
        ],
        "rabbit": [
            "生兔肉"
        ],
        "rabbit_stew": [
            "兔肉湯"
        ],
        "record": [
            "唱片"
        ],
        "redstone": [
            "紅石"
        ],
        "reeds": [
            "甘蔗"
        ],
        "kelp": [
            "大海帶"
        ],
        "dried_kelp": [
            "乾海帶"
        ],
        "rotten_flesh": [
            "腐肉"
        ],
        "ruby": [
            "紅寶石"
        ],
        "saddle": [
            "鞍座"
        ],
        "wheat_seeds": [
            "種子"
        ],
        "beetroot_seeds": [
            "甜菜種子"
        ],
        "melon_seeds": [
            "西瓜子"
        ],
        "pumpkin_seeds": [
            "南瓜子"
        ],
        "shears": [
            "羊毛剪"
        ],
        "diamond_shovel": [
            "鑽石鏟"
        ],
        "golden_shovel": [
            "黃金鏟"
        ],
        "iron_shovel": [
            "鐵鏟"
        ],
        "stone_shovel": [
            "石鏟"
        ],
        "wooden_shovel": [
            "木鏟"
        ],
        "sign": [
            "橡木牌子"
        ],
        "spruce_sign": [
            "杉木牌子"
        ],
        "birch_sign": [
            "樺木牌子"
        ],
        "jungle_sign": [
            "叢林木牌子"
        ],
        "acacia_sign": [
            "相思木牌子"
        ],
        "darkoak_sign": [
            "黑橡木牌子"
        ],
        "crimson_sign": [
            "深紅標誌"
        ],
        "warped_sign": [
            "扭曲標誌"
        ],
        "skull": [
            "骷髏頭顱",
            "骷髏頭顱",
            "凋靈骷髏頭顱",
            "殭屍頭顱",
            "頭顱",
            "苦力怕頭顱",
            "龍頭顱"
        ],
        "slime_ball": [
            "史萊姆球"
        ],
        "snowball": [
            "雪球"
        ],
        "speckled_melon": [
            "發光西瓜"
        ],
        "spider_eye": [
            "蜘蛛眼"
        ],
        "stick": [
            "木棍"
        ],
        "string": [
            "絲線"
        ],
        "sugar": [
            "砂糖"
        ],
        "gunpowder": [
            "火藥"
        ],
        "diamond_sword": [
            "鑽石劍"
        ],
        "golden_sword": [
            "黃金劍"
        ],
        "iron_sword": [
            "鐵劍"
        ],
        "stone_sword": [
            "石劍"
        ],
        "wooden_sword": [
            "木劍"
        ],
        "wheat": [
            "小麥"
        ],
        "writable_book": [
            "書本和羽毛筆"
        ],
        "written_book": [
            "完成的書本"
        ],
        "glowstone_dust": [
            "閃石塵"
        ],
        "shield": [
            "盾"
        ],
        "shulker_shell": [
            "界伏蚌殼"
        ],
        "totem": [
            "不死圖騰"
        ],
        "turtle_helmet": [
            "龜殼"
        ],
        "turtle_shell_piece": [
            "鱗甲"
        ],
        "phantom_membrane": [
            "幻影薄膜"
        ],
        "sweet_berries": [
            "甜莓"
        ],
        "suspicious_stew": [
            "可疑燉肉"
        ],
        "banner_pattern": [
            "旗幟樣式"
        ],
        "acaciaFence": [
            "相思木柵欄"
        ],
        "acacia_fence_gate": [
            "相思木柵欄門"
        ],
        "activator_rail": [
            "啟動軌道"
        ],
        "allow": [
            "允許"
        ],
        "deny": [
            "拒絕"
        ],
        "border_block": [
            "邊界"
        ],
        "anvil": [
            "鐵砧",
            "鐵砧",
            null,
            null,
            null,
            "輕微損耗的鐵砧",
            null,
            null,
            null,
            "嚴重損耗的鐵砧"
        ],
        "barrier": [
            "屏障"
        ],
        "beacon": [
            "燈塔"
        ],
        "beehive": [
            "蜂窩"
        ],
        "bee_nest": [
            "蜂巢"
        ],
        "target": [
            "目標"
        ],
        "bedrock": [
            "基岩"
        ],
        "conduit": [
            "導管"
        ],
        "invisibleBedrock": [
            "隱形方塊"
        ],
        "birchFence": [
            "樺木柵欄"
        ],
        "birch_fence_gate": [
            "樺木柵欄門"
        ],
        "blast_furnace": [
            "高爐"
        ],
        "bone_block": [
            "骨頭方塊"
        ],
        "coal_block": [
            "煤炭方塊"
        ],
        "diamond_block": [
            "鑽石方塊"
        ],
        "emerald_block": [
            "翡翠方塊"
        ],
        "gold_block": [
            "黃金方塊"
        ],
        "iron_block": [
            "鐵方塊"
        ],
        "lapis_block": [
            "青金石方塊"
        ],
        "redstone_block": [
            "紅石方塊"
        ],
        "bookshelf": [
            "書架"
        ],
        "brick_block": [
            "磚塊方塊"
        ],
        "brown_mushroom": [
            "棕色蘑菇"
        ],
        "wooden_button": [
            "橡木按鈕"
        ],
        "acacia_button": [
            "相思木按鈕"
        ],
        "birch_button": [
            "樺木按鈕"
        ],
        "dark_oak_button": [
            "黑橡木按鈕"
        ],
        "jungle_button": [
            "叢林按鈕"
        ],
        "spruce_button": [
            "杉木按鈕"
        ],
        "stone_button": [
            "石頭按鈕"
        ],
        "cactus": [
            "仙人掌"
        ],
        "dried_kelp_block": [
            "乾海帶方塊"
        ],
        "carved_pumpkin": [
            "雕刻南瓜"
        ],
        "chest": [
            "箱子"
        ],
        "ender_chest": [
            "終界箱"
        ],
        "jigsaw": [
            "拼圖方塊"
        ],
        "honey_block": [
            "蜂蜜方塊"
        ],
        "honeycomb_block": [
            "蜂巢方塊"
        ],
        "lodestone": [
            "磁石"
        ],
        "nether_sprouts": [
            "獄髓芽"
        ],
        "crimson_stem": [
            "深紅莖"
        ],
        "warped_stem": [
            "扭曲莖"
        ],
        "stripped_crimson_stem": [
            "剝皮深紅莖"
        ],
        "stripped_warped_stem": [
            "剝皮扭曲莖"
        ],
        "crimson_hyphae": [
            "深紅菌絲體"
        ],
        "warped_hyphae": [
            "詭異菌絲體"
        ],
        "stripped_crimson_hyphae": [
            "去皮深紅菌絲體"
        ],
        "stripped_warped_hyphae": [
            "去皮詭異菌絲體"
        ],
        "crimson_planks": [
            "深紅木板"
        ],
        "warped_planks": [
            "扭曲木板"
        ],
        "crimson_trapdoor": [
            "深紅色地板門"
        ],
        "warped_trapdoor": [
            "扭曲陷阱門"
        ],
        "crimson_standing_sign": [
            "深紅標誌"
        ],
        "warped_standing_sign": [
            "扭曲標誌"
        ],
        "crimson_wall_sign": [
            "深紅標誌"
        ],
        "warped_wall_sign": [
            "扭曲標誌"
        ],
        "crimson_stairs": [
            "深紅樓梯"
        ],
        "warped_stairs": [
            "扭曲樓梯"
        ],
        "crimson_fence": [
            "深紅柵欄"
        ],
        "warped_fence": [
            "扭曲柵欄"
        ],
        "crimson_fence_gate": [
            "深紅柵欄門"
        ],
        "warped_fence_gate": [
            "扭曲柵欄門"
        ],
        "crimson_button": [
            "深紅按鈕"
        ],
        "warped_button": [
            "扭曲按鈕"
        ],
        "crimson_pressure_plate": [
            "深紅壓板"
        ],
        "warped_pressure_plate": [
            "扭曲壓板"
        ],
        "crimson_slab": [
            "深紅岩板"
        ],
        "warped_slab": [
            "扭曲岩板"
        ],
        "crimson_double_slab": [
            "深紅岩板"
        ],
        "warped_double_slab": [
            "扭曲岩板"
        ],
        "shroomlight": [
            "菌光體"
        ],
        "crimson_nylium": [
            "深紅菌絲石"
        ],
        "warped_nylium": [
            "扭曲菌絲石"
        ],
        "basalt": [
            "玄武岩"
        ],
        "polished_basalt": [
            "拋光玄武岩"
        ],
        "blackstone": [
            "黑石"
        ],
        "polished_blackstone_bricks": [
            "拋光黑石磚塊"
        ],
        "cracked_polished_blackstone_bricks": [
            "裂開的拋光黑石磚塊"
        ],
        "polished_blackstone_brick_stairs": [
            "拋光黑石磚塊梯"
        ],
        "blackstone_stairs": [
            "黑石樓梯"
        ],
        "blackstone_wall": [
            "黑石牆壁"
        ],
        "polished_blackstone_brick_wall": [
            "拋光黑石磚牆"
        ],
        "chiseled_polished_blackstone": [
            "刻紋拋光黑石"
        ],
        "gilded_blackstone": [
            "鍍金黑石"
        ],
        "blackstone_slab": [
            "黑石板"
        ],
        "polished_blackstone_brick_slab": [
            "拋光黑石磚塊板"
        ],
        "chain": [
            "鎖鏈"
        ],
        "soul_soil": [
            "靈魂土壤"
        ],
        "soul_fire": [
            "靈魂火燈"
        ],
        "polished_blackstone": [
            "拋光黑石"
        ],
        "polished_blackstone_stairs": [
            "拋光黑石樓梯"
        ],
        "polished_blackstone_slab": [
            "拋光黑石板"
        ],
        "polished_blackstone_pressure_plate": [
            "拋光黑石壓板"
        ],
        "polished_blackstone_button": [
            "拋光黑石按鈕"
        ],
        "polished_blackstone_wall": [
            "拋光黑石牆"
        ],
        "soul_campfire": [
            "靈魂篝火"
        ],
        "chiseled_nether_bricks": [
            "刻紋地獄磚塊"
        ],
        "cracked_nether_bricks": [
            "裂開的地獄磚塊"
        ],
        "quartz_bricks": [
            "石英磚塊"
        ],
        "trapped_chest": [
            "陷阱箱"
        ],
        "shulkerBoxWhite": [
            "白色界伏蚌盒"
        ],
        "shulkerBoxOrange": [
            "橙色界伏蚌盒"
        ],
        "shulkerBoxMagenta": [
            "洋紅色界伏蚌盒"
        ],
        "shulkerBoxLightBlue": [
            "淺藍色界伏蚌盒"
        ],
        "shulkerBoxYellow": [
            "黃色界伏蚌盒"
        ],
        "shulkerBoxLime": [
            "淡黃綠色界伏蚌盒"
        ],
        "shulkerBoxPink": [
            "粉紅色界伏蚌盒"
        ],
        "shulkerBoxGray": [
            "灰色界伏蚌盒"
        ],
        "shulkerBoxSilver": [
            "淺灰色界伏蚌盒"
        ],
        "shulkerBoxCyan": [
            "青綠色界伏蚌盒"
        ],
        "shulkerBoxPurple": [
            "紫色界伏蚌盒"
        ],
        "shulkerBoxBlue": [
            "藍色界伏蚌盒"
        ],
        "shulkerBoxBrown": [
            "棕色界伏蚌盒"
        ],
        "shulkerBoxGreen": [
            "綠色界伏蚌盒"
        ],
        "shulkerBoxRed": [
            "紅色界伏蚌盒"
        ],
        "shulkerBoxBlack": [
            "黑色界伏蚌盒"
        ],
        "shulkerBox": [
            "界伏蚌盒"
        ],
        "chorus_flower": [
            "歌萊花"
        ],
        "chorus_plant": [
            "歌萊株"
        ],
        "stained_glass": [
            "白色彩繪玻璃",
            "白色彩繪玻璃",
            "橙色彩繪玻璃",
            "洋紅色彩繪玻璃",
            "淺藍色彩繪玻璃",
            "黃色彩繪玻璃",
            "淡黃綠色彩繪玻璃",
            "粉紅色彩繪玻璃",
            "灰色彩繪玻璃",
            "淺灰色彩繪玻璃",
            "青綠色彩繪玻璃",
            "紫色彩繪玻璃",
            "藍色彩繪玻璃",
            "棕色彩繪玻璃",
            "綠色彩繪玻璃",
            "紅色彩繪玻璃",
            "黑色彩繪玻璃"
        ],
        "stained_glass_pane": [
            "白色彩繪玻璃窗格",
            "白色彩繪玻璃窗格",
            "橙色彩繪玻璃窗格",
            "洋紅色彩繪玻璃窗格",
            "淺藍色彩繪玻璃片",
            "黃色彩繪玻璃窗格",
            "淡黃綠色彩繪玻璃窗格",
            "粉紅色彩繪玻璃窗格",
            "灰色彩繪玻璃窗格",
            "淺灰色彩繪玻璃窗格",
            "青綠色彩繪玻璃窗格",
            "紫色彩繪玻璃窗格",
            "藍色彩繪玻璃窗格",
            "棕色彩繪玻璃窗格",
            "綠色彩繪玻璃窗格",
            "紅色彩繪玻璃窗格",
            "黑色彩繪玻璃窗格"
        ],
        "clay": [
            "黏土方塊"
        ],
        "hardened_clay": [
            "陶瓦"
        ],
        "stained_hardened_clay": [
            "陶瓦",
            "白色陶瓦",
            "橙色陶瓦",
            "洋紅色陶瓦",
            "淺藍色陶瓦",
            "黃色陶瓦",
            "淡黃綠色陶瓦",
            "粉紅色陶瓦",
            "灰色陶瓦",
            "淺灰色陶瓦",
            "青綠色陶瓦",
            "紫色陶瓦",
            "藍色陶瓦",
            "棕色陶瓦",
            "綠色陶瓦",
            "紅色陶瓦",
            "黑色陶瓦"
        ],
        "structure_block": [
            "結構方塊"
        ],
        "structure_void": [
            "結構空位"
        ],
        "wool": [
            "羊毛",
            "白色羊毛",
            "橙色羊毛",
            "洋紅色羊毛",
            "淺藍色羊毛",
            "黃色羊毛",
            "淡黃綠色羊毛",
            "粉紅色羊毛",
            "灰色羊毛",
            "淺灰色羊毛",
            "青綠色羊毛",
            "紫色羊毛",
            "藍色羊毛",
            "棕色羊毛",
            "綠色羊毛",
            "紅色羊毛",
            "黑色羊毛"
        ],
        "cobblestone_wall": [
            "鵝卵石牆",
            "鵝卵石牆",
            "青苔卵石牆",
            "花崗岩牆",
            "閃長岩牆",
            "安山岩牆",
            "沙岩牆",
            "磚牆",
            "石磚牆",
            "青苔石磚牆",
            "終界石磚牆",
            "地獄磚牆",
            "海磷石牆",
            "紅沙岩牆",
            "紅色地獄磚牆"
        ],
        "cocoa": [
            "可可"
        ],
        "command_block": [
            "指令方塊"
        ],
        "composter": [
            "堆肥"
        ],
        "light_block": [
            "照明方塊"
        ],
        "repeating_command_block": [
            "重複指令方塊"
        ],
        "chain_command_block": [
            "鎖鏈指令方塊"
        ],
        "darkOakFence": [
            "黑橡木柵欄"
        ],
        "dark_oak_fence_gate": [
            "黑橡木柵欄門"
        ],
        "daylight_detector": [
            "陽光感測器"
        ],
        "deadbush": [
            "枯灌木"
        ],
        "detector_rail": [
            "偵測器軌道"
        ],
        "dirt": [
            "泥土",
            "泥土",
            "粗泥"
        ],
        "podzol": [
            "灰壤"
        ],
        "purpur_block": [
            "紫珀塊",
            "紫珀塊",
            "缺角紫珀塊",
            "紫珀柱"
        ],
        "dispenser": [
            "發射器"
        ],
        "doorWood": [
            "木門"
        ],
        "double_plant": [
            "植物",
            "向日葵",
            "紫丁香",
            "芒草",
            "大型蕨類",
            "玫瑰叢",
            "牡丹花"
        ],
        "dragon_egg": [
            "龍蛋"
        ],
        "dropper": [
            "投擲器"
        ],
        "enchanting_table": [
            "附魔台"
        ],
        "enderChest": [
            "終界箱"
        ],
        "end_portal_frame": [
            "終界入口"
        ],
        "farmland": [
            "農地"
        ],
        "fletching_table": [
            "製箭台"
        ],
        "fence": [
            "橡木柵欄"
        ],
        "fence_gate": [
            "橡木柵欄門"
        ],
        "iron_bars": [
            "鐵欄杆"
        ],
        "fire": [
            "火"
        ],
        "yellow_flower": [
            "花朵",
            "蒲公英"
        ],
        "red_flower": [
            "花朵",
            "罌粟",
            "藍色蝴蝶蘭",
            "紫紅球花",
            "雛草",
            "紅色鬱金香",
            "橙色鬱金香",
            "白色鬱金香",
            "粉紅色鬱金香",
            "雛菊",
            "矢車菊",
            "空谷百合"
        ],
        "wither_rose": [
            "凋零玫瑰"
        ],
        "furnace": [
            "熔爐"
        ],
        "glass": [
            "玻璃"
        ],
        "golden_rail": [
            "動力軌道"
        ],
        "grass": [
            "青草方塊"
        ],
        "grass_path": [
            "草徑"
        ],
        "gravel": [
            "礫石"
        ],
        "hay_block": [
            "乾草捆"
        ],
        "netherrack": [
            "地獄石"
        ],
        "soul_sand": [
            "魂沙"
        ],
        "hopper": [
            "漏斗"
        ],
        "ice": [
            "冰塊"
        ],
        "packed_ice": [
            "冰磚"
        ],
        "blue_ice": [
            "藍冰"
        ],
        "iron_trapdoor": [
            "鐵製地板門"
        ],
        "jukebox": [
            "點唱機"
        ],
        "jungleFence": [
            "叢林木柵欄"
        ],
        "jungle_fence_gate": [
            "叢林木柵欄門"
        ],
        "ladder": [
            "梯子"
        ],
        "flowing_lava": [
            "熔岩"
        ],
        "leaves2": [
            "相思樹葉",
            "相思樹葉",
            "黑橡樹葉"
        ],
        "lever": [
            "拉桿"
        ],
        "glowstone": [
            "閃石"
        ],
        "lit_pumpkin": [
            "南瓜燈"
        ],
        "lockedchest": [
            "上鎖的箱子"
        ],
        "log2": [
            "相思樹原木",
            "相思樹原木",
            "黑橡樹原木"
        ],
        "log": [
            "原木",
            "橡樹原木",
            "杉樹原木",
            "樺樹原木",
            "叢林原木"
        ],
        "magma": [
            "熔岩方塊"
        ],
        "melon_block": [
            "西瓜"
        ],
        "mob_spawner": [
            "怪物產生器"
        ],
        "monster_egg": [
            "蛀蝕石頭",
            "蛀蝕石頭",
            "蛀蝕鵝卵石",
            "蛀蝕石磚塊",
            "蛀蝕青苔石磚塊",
            "蛀蝕裂開的石磚塊",
            "蛀蝕刻紋石磚塊"
        ],
        "mushroom": [
            "蘑菇"
        ],
        "noteblock": [
            "音符方塊"
        ],
        "mycelium": [
            "菌絲體"
        ],
        "nether_brick": [
            "地獄磚塊方塊"
        ],
        "red_nether_brick": [
            "紅色地獄磚塊"
        ],
        "nether_brick_fence": [
            "地獄磚塊柵欄"
        ],
        "quartz_ore": [
            "地獄石英礦"
        ],
        "netherreactor": [
            "地獄反應核"
        ],
        "nether_wart_block": [
            "地獄結節方塊"
        ],
        "warped_wart_block": [
            "扭曲結節方塊"
        ],
        "unlit_redstone_torch": [
            "紅石火把"
        ],
        "redstone_torch": [
            "紅石火把"
        ],
        "soul_torch": [
            "靈魂火把"
        ],
        "obsidian": [
            "黑曜石"
        ],
        "coal_ore": [
            "煤礦石"
        ],
        "diamond_ore": [
            "鑽石礦石"
        ],
        "emerald_ore": [
            "翡翠原礦"
        ],
        "gold_ore": [
            "黃金礦石"
        ],
        "iron_ore": [
            "鐵礦石"
        ],
        "lapis_ore": [
            "青金石礦石"
        ],
        "redstone_ore": [
            "紅石礦"
        ],
        "oreRuby": [
            "紅寶石礦"
        ],
        "observer": [
            "觀察者"
        ],
        "piston": [
            "活塞"
        ],
        "sticky_piston": [
            "黏性活塞"
        ],
        "portal": [
            "入口"
        ],
        "potatoes": [
            "馬鈴薯"
        ],
        "stone_pressure_plate": [
            "石製壓力板"
        ],
        "wooden_pressure_plate": [
            "橡木壓板"
        ],
        "acacia_pressure_plate": [
            "相思木壓板"
        ],
        "birch_pressure_plate": [
            "樺木壓板"
        ],
        "dark_oak_pressure_plate": [
            "黑橡木壓板"
        ],
        "jungle_pressure_plate": [
            "叢林壓板"
        ],
        "spruce_pressure_plate": [
            "杉木壓板"
        ],
        "prismarine": [
            "海磷石",
            "海磷石",
            "海磷石磚",
            "暗海磷石"
        ],
        "pumpkin": [
            "南瓜"
        ],
        "pumpkin_stem": [
            "南瓜莖"
        ],
        "quartz_block": [
            "石英方塊",
            "石英方塊",
            "刻紋石英方塊",
            "柱狀石英方塊",
            "平順石英方塊"
        ],
        "rail": [
            "軌道"
        ],
        "red_mushroom": [
            "紅蘑菇"
        ],
        "crimson_fungus": [
            "深紅真菌"
        ],
        "warped_fungus": [
            "扭曲真菌"
        ],
        "red_mushroom_block": [
            "紅蘑菇方塊"
        ],
        "red_sandstone": [
            "紅沙岩",
            "紅沙岩",
            "刻紋紅沙岩",
            "切割紅沙岩",
            "平滑紅沙岩"
        ],
        "redstone_wire": [
            "紅石塵"
        ],
        "redstone_lamp": [
            "紅石燈"
        ],
        "sand": [
            "沙子",
            "沙子",
            "紅沙"
        ],
        "sandstone": [
            "沙岩",
            "沙岩",
            "刻紋沙岩",
            "切割沙岩",
            "平滑沙岩"
        ],
        "sapling": [
            "橡樹樹苗",
            "橡樹樹苗",
            "杉樹樹苗",
            "樺樹樹苗",
            "叢林木樹苗",
            "相思木樹苗",
            "黑橡木樹苗"
        ],
        "seaLantern": [
            "海燈籠"
        ],
        "standing_sign": [
            "牌子"
        ],
        "spruce_standing_sign": [
            "杉木牌子"
        ],
        "birch_standing_sign": [
            "樺木牌子"
        ],
        "jungle_standing_sign": [
            "叢林木牌子"
        ],
        "acacia_standing_sign": [
            "相思木牌子"
        ],
        "darkoak_standing_sign": [
            "黑橡木牌子"
        ],
        "slime": [
            "史萊姆方塊"
        ],
        "snow": [
            "白雪"
        ],
        "sponge": [
            "海綿",
            "海綿",
            "濕海綿"
        ],
        "spruceFence": [
            "杉木柵欄"
        ],
        "spruce_fence_gate": [
            "杉木柵欄門"
        ],
        "brick_stairs": [
            "磚塊梯"
        ],
        "nether_brick_stairs": [
            "地獄磚塊梯"
        ],
        "quartz_stairs": [
            "石英階梯"
        ],
        "smooth_quartz_stairs": [
            "平順石英階梯"
        ],
        "red_sandstone_stairs": [
            "紅沙岩樓梯"
        ],
        "sandstone_stairs": [
            "沙岩梯"
        ],
        "stone_stairs": [
            "鵝卵石樓梯"
        ],
        "normal_stone_stairs": [
            "石梯"
        ],
        "stone_brick_stairs": [
            "石磚塊梯"
        ],
        "oak_stairs": [
            "橡樹木梯"
        ],
        "acacia_stairs": [
            "相思木樓梯"
        ],
        "birch_stairs": [
            "樺樹木梯"
        ],
        "dark_oak_stairs": [
            "黑橡木樓梯"
        ],
        "jungle_stairs": [
            "叢林木梯"
        ],
        "spruce_stairs": [
            "杉樹木梯"
        ],
        "purpur_stairs": [
            "紫珀梯"
        ],
        "prismarine_stairs": [
            "海磷石階梯"
        ],
        "dark_prismarine_stairs": [
            "暗海磷石階梯"
        ],
        "prismarine_bricks_stairs": [
            "海磷石磚塊梯"
        ],
        "granite_stairs": [
            "花崗岩階梯"
        ],
        "diorite_stairs": [
            "閃長岩階梯"
        ],
        "andesite_stairs": [
            "安山岩階梯"
        ],
        "polished_granite_stairs": [
            "平滑花崗岩階梯"
        ],
        "polished_diorite_stairs": [
            "平滑閃長岩階梯"
        ],
        "polished_andesite_stairs": [
            "平滑安山岩階梯"
        ],
        "mossy_stone_brick_stairs": [
            "青苔石頭磚塊梯"
        ],
        "smooth_red_sandstone_stairs": [
            "平順紅沙岩階梯"
        ],
        "smooth_sandstone_stairs": [
            "平順沙岩階梯"
        ],
        "end_brick_stairs": [
            "終界石磚塊梯"
        ],
        "mossy_cobblestone_stairs": [
            "青苔鵝卵石階梯"
        ],
        "red_nether_brick_stairs": [
            "紅色地獄磚塊梯"
        ],
        "smooth_stone": [
            "平順石頭"
        ],
        "standing_banner": [
            "旗幟",
            "黑色旗幟",
            "紅色旗幟",
            "綠色旗幟",
            "棕色旗幟",
            "藍色旗幟",
            "紫色旗幟",
            "青綠色旗幟",
            "淺灰色旗幟",
            "灰色旗幟",
            "粉紅色旗幟",
            "淡黃綠色旗幟",
            "黃色旗幟",
            "淺藍色旗幟",
            "洋紅色旗幟",
            "橙色旗幟",
            "旗幟"
        ],
        "stone": [
            "石頭",
            "石頭",
            "花崗岩",
            "平滑花崗岩",
            "閃長岩",
            "平滑閃長岩",
            "安山岩",
            "平滑安山岩"
        ],
        "cobblestone": [
            "鵝卵石"
        ],
        "stonebrick": [
            "石磚塊",
            "石磚塊",
            "青苔石磚",
            "刻紋石磚塊"
        ],
        "stonecutter": [
            "切石機"
        ],
        "stonecutter_block": [
            "切石機"
        ],
        "mossy_cobblestone": [
            "青苔鵝卵石"
        ],
        "double_stone_slab": [
            "石板",
            "石板",
            "沙岩板",
            "木板",
            "鵝卵石板",
            "磚塊板",
            "石磚塊板",
            "石英板",
            "地獄磚塊板"
        ],
        "stone_slab": [
            "石板",
            "平順石板",
            "沙岩板",
            "木板",
            "鵝卵石板",
            "磚塊板",
            "石磚塊板",
            "石英板",
            "地獄磚塊板"
        ],
        "double_stone_slab2": [
            "紅沙岩板",
            "紅沙岩板"
        ],
        "stone_slab2": [
            "紅沙岩板",
            "紅沙岩板",
            "紫珀板",
            "海磷石板",
            "海磷石磚塊板",
            "暗海磷石板",
            "青苔鵝卵石板",
            "平順沙岩板",
            "紅色地獄磚塊板"
        ],
        "stone_slab3": [
            "終界石磚塊板",
            "終界石磚塊板",
            "平滑紅沙岩板",
            "平滑安山岩板",
            "安山岩板",
            "閃長岩板",
            "平滑閃長岩板",
            "花崗岩板",
            "平滑花崗岩板"
        ],
        "stone_slab4": [
            "青苔石磚塊板",
            "青苔石磚塊板",
            "平順石英板",
            "石板",
            "切割沙岩板",
            "切割紅沙岩板"
        ],
        "coral_block": [
            "管狀珊瑚方塊",
            "管狀珊瑚方塊",
            "腦狀珊瑚方塊",
            "氣泡珊瑚方塊",
            "火珊瑚方塊",
            "角狀珊瑚方塊",
            "死亡管狀珊瑚方塊",
            "死亡腦狀珊瑚方塊",
            "死亡氣泡珊瑚方塊",
            "死亡火珊瑚方塊",
            "死亡角狀珊瑚方塊"
        ],
        "tallgrass": [
            "草",
            "草",
            "蕨"
        ],
        "seagrass": [
            "海草",
            "海草"
        ],
        "sea_pickle": [
            "火體蟲"
        ],
        "turtle_egg": [
            "海龜蛋"
        ],
        "coral": [
            "管狀珊瑚",
            "管狀珊瑚",
            "腦狀珊瑚",
            "氣泡珊瑚",
            "火珊瑚",
            "角狀珊瑚",
            "死亡管狀珊瑚",
            "死亡腦狀珊瑚",
            "死亡氣泡珊瑚",
            "死亡火珊瑚",
            "死亡角狀珊瑚"
        ],
        "coral_fan": [
            "管狀珊瑚扇",
            "管狀珊瑚扇",
            "腦狀珊瑚扇",
            "氣泡珊瑚扇",
            "火珊瑚扇",
            "角狀珊瑚扇"
        ],
        "coral_fan_dead": [
            "死亡管狀珊瑚扇",
            "死亡管狀珊瑚扇",
            "死亡腦狀珊瑚扇",
            "死亡氣泡珊瑚扇",
            "死亡火珊瑚扇",
            "死亡角狀珊瑚扇"
        ],
        "glass_pane": [
            "玻璃片"
        ],
        "tnt": [
            "炸藥"
        ],
        "snow_layer": [
            "頂峰之雪"
        ],
        "torch": [
            "火把"
        ],
        "trapdoor": [
            "橡木地板門"
        ],
        "acacia_trapdoor": [
            "相思木地板門"
        ],
        "birch_trapdoor": [
            "樺木地板門"
        ],
        "dark_oak_trapdoor": [
            "黑橡木地板門"
        ],
        "jungle_trapdoor": [
            "叢林地板門"
        ],
        "spruce_trapdoor": [
            "杉木地板門"
        ],
        "tripWire": [
            "絆線"
        ],
        "tripwire_hook": [
            "絆線鉤"
        ],
        "vine": [
            "藤蔓"
        ],
        "weeping_vines": [
            "哭泣藤蔓"
        ],
        "twisting_vines": [
            "扭曲藤蔓"
        ],
        "flowing_water": [
            "水"
        ],
        "water": [
            "水"
        ],
        "waterlily": [
            "睡蓮"
        ],
        "web": [
            "蜘蛛網"
        ],
        "heavy_weighted_pressure_plate": [
            "測重壓力板（重型）"
        ],
        "light_weighted_pressure_plate": [
            "測重壓力板（輕型）"
        ],
        "end_stone": [
            "終界石"
        ],
        "end_bricks": [
            "終界石磚塊"
        ],
        "planks": [
            "木材",
            "橡木材",
            "杉木材",
            "樺木材",
            "叢林木材",
            "相思木材",
            "黑橡木材"
        ],
        "wooden_slab": [
            "木板",
            "橡樹木板",
            "杉樹木板",
            "樺樹木板",
            "叢林木板",
            "相思木板",
            "黑橡木板"
        ],
        "carpet": [
            "地毯",
            "黑色地毯",
            "紅色地毯",
            "綠色地毯",
            "棕色地毯",
            "藍色地毯",
            "紫色地毯",
            "青綠地毯",
            "淺灰地毯",
            "灰色地毯",
            "粉紅地毯",
            "淡黃綠地毯",
            "黃色地毯",
            "淺藍地毯",
            "洋紅地毯",
            "橙色地毯",
            "白色地毯"
        ],
        "crafting_table": [
            "精製台"
        ],
        "white_glazed_terracotta": [
            "白色帶釉陶瓦",
            "白色帶釉陶瓦"
        ],
        "orange_glazed_terracotta": [
            "橙色帶釉陶瓦",
            "橙色帶釉陶瓦"
        ],
        "magenta_glazed_terracotta": [
            "洋紅色帶釉陶瓦",
            "洋紅色帶釉陶瓦"
        ],
        "light_blue_glazed_terracotta": [
            "淺藍色帶釉陶瓦",
            "淺藍色帶釉陶瓦"
        ],
        "yellow_glazed_terracotta": [
            "黃色帶釉陶瓦",
            "黃色帶釉陶瓦"
        ],
        "lime_glazed_terracotta": [
            "淡黃綠色帶釉陶瓦",
            "淡黃綠色帶釉陶瓦"
        ],
        "pink_glazed_terracotta": [
            "粉紅色帶釉陶瓦",
            "粉紅色帶釉陶瓦"
        ],
        "gray_glazed_terracotta": [
            "灰色帶釉陶瓦",
            "灰色帶釉陶瓦"
        ],
        "silver_glazed_terracotta": [
            "淺灰色帶釉陶瓦",
            "淺灰色帶釉陶瓦"
        ],
        "cyan_glazed_terracotta": [
            "青綠色帶釉陶瓦",
            "青綠色帶釉陶瓦"
        ],
        "purple_glazed_terracotta": [
            "紫色帶釉陶瓦",
            "紫色帶釉陶瓦"
        ],
        "blue_glazed_terracotta": [
            "藍色帶釉陶瓦",
            "藍色帶釉陶瓦"
        ],
        "brown_glazed_terracotta": [
            "棕色帶釉陶瓦",
            "棕色帶釉陶瓦"
        ],
        "green_glazed_terracotta": [
            "綠色帶釉陶瓦",
            "綠色帶釉陶瓦"
        ],
        "red_glazed_terracotta": [
            "紅色帶釉陶瓦",
            "紅色帶釉陶瓦"
        ],
        "black_glazed_terracotta": [
            "黑色帶釉陶瓦",
            "黑色帶釉陶瓦"
        ],
        "concrete": [
            "白色混凝土",
            "白色混凝土",
            "橙色混凝土",
            "洋紅色混凝土",
            "淺藍色混凝土",
            "黃色混凝土",
            "淡黃綠色混凝土",
            "粉紅色混凝土",
            "灰色混凝土",
            "淺灰色混凝土",
            "青綠色混凝土",
            "紫色混凝土",
            "藍色混凝土",
            "棕色混凝土",
            "綠色混凝土",
            "紅色混凝土",
            "黑色混凝土"
        ],
        "glazedTerracottaWhite": [
            "白色帶釉陶瓦"
        ],
        "glazedTerracottaOrange": [
            "橙色帶釉陶瓦"
        ],
        "glazedTerracottaMagenta": [
            "洋紅色帶釉陶瓦"
        ],
        "glazedTerracottaLightBlue": [
            "淺藍色帶釉陶瓦"
        ],
        "glazedTerracottaYellow": [
            "黃色帶釉陶瓦"
        ],
        "glazedTerracottaLime": [
            "淡黃綠色帶釉陶瓦"
        ],
        "glazedTerracottaPink": [
            "粉紅色帶釉陶瓦"
        ],
        "glazedTerracottaGray": [
            "灰色帶釉陶瓦"
        ],
        "glazedTerracottaSilver": [
            "淺灰色帶釉陶瓦"
        ],
        "glazedTerracottaCyan": [
            "青綠色帶釉陶瓦"
        ],
        "glazedTerracottaPurple": [
            "紫色帶釉陶瓦"
        ],
        "glazedTerracottaBlue": [
            "藍色帶釉陶瓦"
        ],
        "glazedTerracottaBrown": [
            "棕色帶釉陶瓦"
        ],
        "glazedTerracottaGreen": [
            "綠色帶釉陶瓦"
        ],
        "glazedTerracottaRed": [
            "紅色帶釉陶瓦"
        ],
        "glazedTerracottaBlack": [
            "黑色帶釉陶瓦"
        ],
        "concretePowder": [
            "白色混凝土粉末",
            "白色混凝土粉末",
            "橙色混凝土粉末",
            "洋紅色混凝土粉末",
            "淺藍色混凝土粉末",
            "黃色混凝土粉末",
            "淡黃綠色混凝土粉末",
            "粉紅色混凝土粉末",
            "灰色混凝土粉末",
            "淺灰色混凝土粉末",
            "青綠色混凝土粉末",
            "紫色混凝土粉末",
            "藍色混凝土粉末",
            "棕色混凝土粉末",
            "綠色混凝土粉末",
            "紅色混凝土粉末",
            "黑色混凝土粉末"
        ],
        "stripped_spruce_log": [
            "條紋杉樹原木"
        ],
        "stripped_dark_oak_log": [
            "條紋黑橡樹原木"
        ],
        "stripped_birch_log": [
            "條紋樺樹原木"
        ],
        "stripped_jungle_log": [
            "條紋叢林原木"
        ],
        "stripped_oak_log": [
            "條紋橡樹原木"
        ],
        "stripped_acacia_log": [
            "條紋相思樹原木"
        ],
        "bamboo": [
            "竹子"
        ],
        "scaffolding": [
            "支架"
        ],
        "grindstone": [
            "砂輪"
        ],
        "cartography_table": [
            "製圖桌"
        ],
        "lantern": [
            "燈籠"
        ],
        "soul_lantern": [
            "靈魂燈籠"
        ],
        "smoker": [
            "煙燻台"
        ],
        "smithing_table": [
            "打鐵台"
        ],
        "barrel": [
            "木桶"
        ],
        "campfire": [
            "營火"
        ],
        "loom": [
            "織布機"
        ],
        "lectern": [
            "講台"
        ],
        "sweet_berry_bush": [
            "甜莓叢"
        ],
        "wood": [
            "橡樹木頭",
            "橡樹木頭",
            "杉樹木頭",
            "樺樹木頭",
            "叢林木頭",
            "相思樹木頭",
            "黑橡樹木頭",
            null,
            null,
            "條紋橡樹木頭",
            "條紋杉樹木頭",
            "條紋樺樹木頭",
            "條紋叢林木頭",
            "條紋相思樹木頭",
            "條紋黑橡樹木頭"
        ],
        "netherite_block": [
            "獄髓方塊"
        ],
        "ancient_debris": [
            "古代碎片"
        ],
        "nether_gold_ore": [
            "地獄金礦"
        ],
        "respawn_anchor": [
            "重生錨"
        ],
        "crying_obsidian": [
            "哭泣黑曜石"
        ]
    }
};
freeze(lang_data);
export = lang_data;
