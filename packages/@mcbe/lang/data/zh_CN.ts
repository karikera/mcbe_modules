
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
    id: "zh_CN" as LangId,
    commands:{
        "ability_description": "设置一名玩家的能力。",
        "ability_noability": "不存在名为 '%1$s' 的技能",
        "ability_granted": "已赋予你 '%1$s' 技能",
        "ability_revoked": "已从你身上撤销 '%1$s' 技能",
        "ability_success": "技能已更新",
        "achievement_alreadyHave": "玩家 %1$s 已经获得了 %2$s 成就",
        "achievement_description": "授予或删除某位玩家的成就。",
        "achievement_dontHave": "玩家 %1$s 还未获得 %2$s 成就",
        "achievement_give_success_all": "成功将所有成就授予 %1$s",
        "achievement_give_success_one": "成功地给予了 %1$s 统计数据 %2$s",
        "achievement_statTooLow": "玩家 %1$s 并没有统计数据 %2$s",
        "achievement_take_success_all": "成功从 %1$s 中解锁了所有成就",
        "achievement_take_success_one": "成功从 %2$s 中获得了统计数据 %1$s",
        "achievement_unknownAchievement": "未知的成就或统计数据 '%1$s'",
        "agent_attack_success": "Agent 攻击成功",
        "agent_attack_failed": "Agent 攻击失败",
        "agent_collect_success": "Agent 收集成功",
        "agent_collect_failed": "Agent 收集失败",
        "agent_createagent_success": "已创建 Agent",
        "agent_createagent_failed": "无法创建 Agent",
        "agent_destroy_success": "Agent 摧毁了一个方块",
        "agent_destroy_failed": "Agent 摧毁失败",
        "agent_detect_success": "Agent 探测成功",
        "agent_detect_failed": "Agent 探测失败",
        "agent_detectredstone_success": "Agent detectredstone 成功",
        "agent_detectredstone_failed": "Agent detectredstone 失败",
        "agent_drop_success": "Agent 掉落成功",
        "agent_drop_failed": "Agent 掉落失败",
        "agent_dropall_success": "Agent dropall 成功",
        "agent_dropall_failed": "Agent dropall 失败",
        "agent_getitemcount_success": "Agent getitemcount 成功",
        "agent_getitemcount_failed": "Agent getitemcount 失败",
        "agent_getitemspace_success": "Agent getitemspace 成功",
        "agent_getitemspace_failed": "Agent getitemspace 失败",
        "agent_getitemdetail_success": "Agent getitemdetail 成功",
        "agent_getitemdetail_failed": "Agent getitemdetail 失败",
        "agent_getposition_success": "Agent 获得位置成功",
        "agent_getposition_failed": "Agent 获得位置失败",
        "agent_inspect_success": "Agent 检查成功",
        "agent_inspect_failed": "Agent 检查失败",
        "agent_inspectdata_success": "代理检查数据成功",
        "agent_inspectdata_failed": "代理检查数据失败",
        "agent_move_success": "Agent 移动成功",
        "agent_move_failed": "无法移动 Agent",
        "agent_outofrange": "无法发出命令，Agent 超出范围",
        "agent_place_success": "Agent 放置成功",
        "agent_place_failed": "Agent 放置失败",
        "agent_setitem_success": "Agent 设置物品成功",
        "agent_setitem_failed": "Agent 设置物品失败",
        "agent_turn_success": "Agent 转动成功",
        "agent_turn_failed": "无法转动 Agent",
        "agent_till_success": "Agent 耕种成功",
        "agent_till_failed": "Agent 耕种失败",
        "agent_tpagent_description": "传送您的 Agent。",
        "agent_tpagent_success": "Agent 已传送",
        "agent_tpagent_failed": "Agent 传送失败",
        "agent_transfer_success": "Agent 转移成功",
        "agent_transfer_failed": "Agent 转移失败",
        "always_day": "昼夜更替 %1$s",
        "always_day_locked": "昼夜更替已锁定",
        "always_day_unlocked": "昼夜更替已解锁",
        "ban_description": "将玩家添加到黑名单。",
        "autocomplete_a": "所有玩家",
        "autocomplete_c": "我的 Agent",
        "autocomplete_e": "所有实体",
        "autocomplete_p": "最近的玩家",
        "autocomplete_r": "随机玩家",
        "autocomplete_s": "您自己",
        "autocomplete_v": "所有 Agent",
        "ban_failed": "无法封禁玩家 %1$s",
        "ban_success": "已封禁玩家 %1$s",
        "banip_description": "将 IP 地址添加到黑名单。",
        "banip_invalid": "你输入了一个无效的 IP 地址或者此玩家不在线",
        "banip_success": "已封禁 IP 地址 %1$s",
        "banip_success_players": "已封禁的 IP 地址 %1$s 属于 %2$s",
        "banlist_ips": "总共有 %1$d 个被封禁的IP地址：",
        "banlist_players": "总共有 %1$d 个被封禁的玩家：",
        "blockdata_description": "修改方块的数据标签。",
        "blockdata_placeFailed": "此处不能放置方块",
        "blockdata_destroyFailed": "此处不能挖掘",
        "blockdata_failed": "数据标签未更改：%1$s",
        "blockdata_notValid": "目标模块不是数据持有模块",
        "blockdata_outOfWorld": "无法更改世界外的方块",
        "blockdata_success": "方块数据更新为：%1$s",
        "blockdata_tagError": "数据标签解析失败：%1$s",
        "bossbar_add_success": "已创建自定义 Boss 条 [%1$s]",
        "bossbar_add_failure_invalid": "无效的 Boss 条 ID。ID 应该为 namespace:id 或 id 形式（默认为《我的世界》namespace）。",
        "bossbar_add_failure_exists": "一个 ID 为 '%1$s' 的 Boss 条已经存在",
        "bossbar_description": "创建和修改 Boss 条",
        "bossbar_get_max": "自定义 Boss 条 [%1$s] 最多有 %2$d",
        "bossbar_get_players": "自定义 Boss 条 [%1$s] 当前有 %2$s 名玩家在线：%3$s",
        "bossbar_get_players_none": "自定义 Boss 条 [%1$s] 当前没有玩家在线",
        "bossbar_get_players_one": "自定义 Boss 条 [%1$s] 当前有 1 名玩家在线：%2$s",
        "bossbar_get_value": "自定义 Boss 条 [%1$s] 有一个 %2$d 的值",
        "bossbar_get_visible_true": "自定义 Boss 条 [%1$s] 当前显示",
        "bossbar_get_visible_false": "自定义 Boss 条 [%1$s] 当前隐藏",
        "bossbar_list": "有 %1$s 个自定义 Boss 条处于活跃状态：%2$s",
        "bossbar_list_none": "没有自定义 Boss 条处于活跃状态",
        "bossbar_list_one": "有 1 个自定义 Boss 条处于活跃状态：%1$s",
        "bossbar_notFound": "ID 为 '%1$s' 的 Boss 条不存在",
        "bossbar_remove": "已移除自定义 Boss 条 [%1$s]",
        "change_setting_description": "当专用服务器运行时在上面更改设定。",
        "change_setting_success": "%1$s 已更改",
        "chunkinfo_compiled": "区块已编译。",
        "chunkinfo_data": "前 64 个顶点为：%1$s",
        "chunkinfo_empty": "区块是空的。",
        "chunkinfo_hasLayers": "区块含有 %1$s 个层面",
        "chunkinfo_hasNoRenderableLayers": "区块没有可渲染层。",
        "chunkinfo_isEmpty": "区块有 %1$s 个空层面",
        "chunkinfo_location": "区块位置：(%1$d, %2$d, %3$d)",
        "chunkinfo_noChunk": "区块位置 %1$d, %2$d, %3$d 上未找到区块",
        "chunkinfo_notCompiled": "区块未编译。",
        "chunkinfo_notEmpty": "区块非空。",
        "chunkinfo_vertices": "%1$s 层的缓冲包含了 %2$d 个点",
        "classroommode_description": "尝试启动并连接到教室模式。",
        "classroommode_success": "正在尝试启动教室模式……",
        "clear_description": "清除玩家物品栏中的物品。",
        "clear_failure": "无法清除 %1$s 的物品栏",
        "clear_failure_no_items": "无法清除 %1$s 的物品栏，没有可清除的物品",
        "clear_success": "清除了 %1$s 的物品栏，删除了 %2$d 个物品",
        "clear_tagError": "数据标签解析失败：%1$s",
        "clear_testing": "%1$s 有 %2$d 个与条件匹配的物品",
        "clearfixedinv_description": "移除所有固定物品栏槽位。",
        "clearfixedinv_success": "已清除固定物品栏",
        "clone_description": "将一个地区的方块克隆到另一个地区。",
        "clone_failed": "未复制方块",
        "clone_filtered_error": "过滤用法需要选定一个过滤方块",
        "clone_noOverlap": "源坐标和目标坐标不能重叠",
        "clone_outOfWorld": "无法访问世界外的方块",
        "clone_success": "%1$d 个方块已复制",
        "clone_tooManyBlocks": "选定区域内的方块太多 (%1$d > %2$d)",
        "closechat_description": "会关闭本地玩家打开状态下的聊天窗口。",
        "closechat_success": "聊天已关闭",
        "closechat_failure": "聊天未打开",
        "closewebsocket_description": "如有 WebSocket 连接时将其关闭。",
        "code_description": "启动代码编辑器。",
        "code_success": "已启动代码编辑器。",
        "compare_failed": "源坐标和目标坐标不相同",
        "compare_outOfWorld": "无法访问世界外的方块",
        "compare_success": "已比较 %1$d 个方块",
        "compare_tooManyBlocks": "选定区域内的方块太多 (%1$d > %2$d)",
        "corruptworld_description": "破坏服务器上加载的世界。",
        "corruptworld_success": "被成功破坏的世界。",
        "daylock_description": "锁定和解锁昼夜更替。",
        "debug_description": "启动或停止调试会话。",
        "debug_notStarted": "尚未开始，无法停止分析！",
        "debug_start": "开始调试分析",
        "debug_stop": "在 %.2f 秒 (%1$d 刻) 后停止调试分析",
        "defaultgamemode_description": "设置默认的游戏模式。",
        "defaultgamemode_success": "世界的默认游戏模式现为 %1$s",
        "deop_description": "撤销一名玩家的操作员状态。",
        "deop_failed": "无法撤销（权限级别过高）：%s",
        "deop_success": "已夺去 %s 的管理员权限",
        "deop_message": "你已被夺去 OP 权限",
        "difficulty_description": "设置难度等级。",
        "difficulty_usage": "/difficulty <new difficulty>",
        "difficulty_success": "将游戏难度设置为 %1$s",
        "downfall_success": "天气已切换",
        "effect_description": "添加或删除状态效果。",
        "effect_failure_notActive": "无法从 %2$s 身上消除 %1$s，因为没有此效果",
        "effect_failure_notActive_all": "无法从 %1$s 身上消除任何效果，因为什么效果都没有",
        "effect_failure_notAMob": "%1$s 不能拥有效果",
        "effect_notFound": "没有 ID 为 %s 的生物状态效果",
        "effect_success": "给予 %3$s 时长为 %4$d 秒的 %1$s * %2$d 效果",
        "effect_success_removed": "消除了 %2$s 身上的 %1$s",
        "effect_success_removed_all": "已消除 %1$s 身上的全部效果",
        "enchant_cantCombine": "%1$s 无法和 %2$s 结合",
        "enchant_invalidLevel": "%1$s 不支持等级 %2$d",
        "enchant_cantEnchant": "不能向目标物品添加选定附魔：%1$s",
        "enchant_description": "对玩家选定的物品增加一项附魔",
        "enchant_noItem": "目标没有拿着物品：%1$s",
        "enchant_notFound": "没有 ID 为 %1$d 的魔咒",
        "enchant_success": "%1$s 附魔成功",
        "entitydata_description": "修改实体的数据标签。",
        "entitydata_failed": "数据标签未更改：%1$s",
        "entitydata_noPlayers": "%1$s 是一位玩家，不能更改",
        "entitydata_success": "实体数据已更新：%1$s",
        "entitydata_tagError": "数据标签解析失败：%1$s",
        "execute_allInvocationsFailed": "全部调用失败：'%1$s'",
        "execute_failed": "将 '%1$s' 执行为 %2$s 失败",
        "execute_description": "代表一个或多个实体执行命令",
        "fill_description": "用特定方块填充全部或部分地区。",
        "fill_failed": "未填充方块",
        "fill_outOfWorld": "无法在世界外放置方块",
        "fill_success": "%1$d 个方块已填充",
        "fill_tagError": "数据标签解析失败：%1$s",
        "fill_tooManyBlocks": "选定区域内的方块太多 (%1$d > %2$d)",
        "fill_replace_auxvalue_invalid": "方块 %1$s 的替换数据值无效",
        "function_description": "运行在相应的功能文件中找到的命令。",
        "function_functionNameNotFound": "未找到 %1$s 功能。",
        "function_invalidCharacters": "标题为“%s”的函数无效，函数名称中不允许使用字符“%s”。",
        "function_noEngineVersionSpecified": "无法运行 %s 功能。您必须在行为包的 manifest.json 上指定一个 min_engine_version。",
        "function_success": "成功执行 %1$d 个功能项。",
        "gamemode_description": "设置一名玩家的游戏模式。",
        "gamemode_success_other": "将 %2$s 的游戏模式设置为 %1$s",
        "gamemode_success_self": "将自己的游戏模式设置为 %1$s",
        "gamemode_fail_invalid": "游戏模式 '%1$s' 无效",
        "gamerule_description": "设置或查询游戏规则价值。",
        "gamerule_type_invalid": "无效的游戏规则类型 '%1$s'",
        "gamerule_type_nocheatsenabled": "只有这个世界启用作弊时，游戏规则 '%1$s' 才能使用。",
        "gamerule_nopermission": "只有服务器所有人才能修改 '%1$s'",
        "gamerule_norule": "不存在叫做 '%1$s' 的游戏规则",
        "gamerule_success": "游戏规则 %1$s 已更新为 %2$s",
        "generic_async_initiated": "'%1$s' 的命令已开始（异步步骤 %2$d）",
        "generic_boolean_invalid": "'%1$s' 不是个布尔值参数",
        "generic_chunk_notFound": "未找到指定区块",
        "generic_componentError": "组件列表解析失败",
        "generic_dimension_notFound": "未找到指定维度",
        "generic_disabled": "此等级未启用作弊。",
        "generic_disabled_templateLocked": "设置当前已锁定。您可以在“游戏设置”菜单中解锁“模板世界选项”来更改它们。",
        "generic_double_tooBig": "你输入的数字 (%.2f) 太大了，最高只能为 %.2f",
        "generic_double_tooSmall": "你输入的数字 (%.2f)太小了，至少需要为 %.2f",
        "generic_duplicateType": "重复的类型参数",
        "generic_duplicateSelectorArgument": "重复的 %s 选择器参数",
        "generic_encryption_badkey": "提供的公钥错误。PEM 格式化之后预期为 120 字节的密钥。",
        "generic_encryption_badsalt": "提供的加密盐错误。基础的 64 编码之前预期为 16 字节。",
        "generic_encryption_required": "需要加密的会话",
        "generic_entity_invalidType": "实体类型 '%1$s' 是无效的",
        "generic_entity_invalidUuid": "提供的实体 UUID 格式无效",
        "generic_entity_notFound": "无法找到此实体",
        "generic_exception": "在执行此指令时出现了未知的错误",
        "generic_invalidAgentType": "适用于仅 Agent 选择器的类型参数",
        "generic_invalidcontext": "对给定命令类型的上下文无效",
        "generic_invalidDevice": "您输入的命令 %s 在此设备上不受支持",
        "generic_invalidPlayerType": "适用于仅玩家选择器的类型参数",
        "generic_invalidType": "未知的类型参数",
        "generic_levelError": "最高等级必须高于最低等级",
        "generic_malformed_body": "正文缺失或变形",
        "generic_malformed_type": "无效请求类型",
        "generic_notimplemented": "未执行",
        "generic_num_invalid": "'%1$s' 不是一个有效的数字",
        "generic_num_tooBig": "你输入的数字 (%1$d) 太大了，它最高只能为 %2$d",
        "generic_num_tooSmall": "你输入的数字 (%1$d) 太小了，它至少需要为 %2$d",
        "generic_parameter_invalid": "'%1$s' 为无效参数",
        "generic_permission_selector": "<选择器扩展权限不足>",
        "generic_player_notFound": "无法找到该玩家",
        "generic_protocol_mismatch": "所提供的协议版本与《我的世界》协议版本不符",
        "generic_radiusError": "最小选择器半径必须小于最大选择器半径",
        "generic_radiusNegative": "半径不能为负数",
        "generic_rotationError": "旋转值超出范围",
        "generic_running": "命令已在运行",
        "generic_step_failed": "命令步骤失败",
        "generic_syntax": "语法错误：意外的“%2$s”：出现在“%1$s>>%2$s<<%3$s”",
        "generic_noTargetMatch": "没有与选择器匹配的目标",
        "generic_targetNotPlayer": "选择器必须为玩家类型",
        "generic_tooManyNames": "目标名称参数过多",
        "generic_tooManyTargets": "与选择器匹配的目标过多",
        "generic_too_many_requests": "已请求太多指令，请等待一个指令完成",
        "generic_unknown": "未知的命令：%s。请检查命令是否存在，以及您对它是否拥有使用权限。",
        "generic_usage": "用法：%1$s",
        "generic_usage_noparam": "使用：",
        "generic_version_mismatch": "该指令不存在请求的版本",
        "generic_version_missing": "来自聊天框以外的命令调用应指定命令版本",
        "getchunkdata_description": "获取特定区块的像素。",
        "getchunkdata_success": "区块数据已接收",
        "getchunks_description": "获取已加载的区块列表。",
        "getchunks_success": "区块列表已接收",
        "getlocalplayername_description": "返回本地玩家名称。",
        "getspawnpoint_description": "获取特定玩家的生成位置。",
        "gettopsolidblock_description": "会获得特定位置下方的顶部非空气区块的位置",
        "gettopsolidblock_notfound": "特定位置下方没有固体区块",
        "give_block_notFound": "没有这种 %1$d 名字的方块",
        "give_description": "将物品给予一名玩家。",
        "give_item_invalid": "命令语法无效: 不存在具有该数值的 %s",
        "give_item_notFound": "没有这种 %1$d 名字的物品",
        "give_map_invalidData": "提供的地图数据无效",
        "give_map_featureNotFound": "无法制作探险地图。在此维度上找不到特征",
        "give_success": "给予 %3$s  %1$s * %2$d 效果",
        "give_successRecipient": "你已被给予 %1$s * %2$d",
        "give_tagError": "数据标签解析失败：%1$s",
        "help_description": "提供帮助/命令列表。",
        "help_footer": "小提示： 在输入命令时可以使用  <tab>  键来自动补全命令或参数",
        "help_header": "--- 显示帮助手册总 %2$d 页中的第 %1$d  页 (/help <页码>) ---",
        "help_command_aliases": "%s（也称为 %s）：",
        "immutableworld_description": "设置世界的不可变状态。",
        "immutableworld_info": "immutableworld = %s",
        "kick_description": "从服务器踢出一名玩家。",
        "kick_description_edu": "会从游戏中移除一位玩家。",
        "kick_not_found": "无法找到玩家 %1$s",
        "kick_not_yourself": "您无法将自己从游戏中移除",
        "kick_success": "已将 %1$s 踢出游戏",
        "kick_success_reason": "已将 %1$s 踢出游戏：'%2$s'",
        "kick_success_reasonedu": "已将 %1$s 移除出游戏：'%2$s'",
        "kick_no_host": "主办者不会被踢出游戏。",
        "kick_no_teacher": "不能将教师从游戏中移除。",
        "kill_successful_edu": "已移除 %1$s",
        "kill_successful": "已清除 %1$s",
        "kill_description_edu": "移除实体（玩家、生物等）。",
        "kill_description": "击杀实体（玩家、生物等）。",
        "list_description": "列出服务器上的玩家。",
        "locate_description": "显示距离最近的给定类型的建筑位置。",
        "locate_fail_noplayer": "命令只能由有效玩家使用",
        "locate_fail_nostructurefound": "此维度中未找到有效结构",
        "locate_success": "最近的 %1$s 位于方块 %2$s, (y?), %3$s",
        "togglecontentlog_toggle": "开启/关闭内容日志命令",
        "togglecontentlog_enabled": "内容日志已开启",
        "togglecontentlog_disabled": "内容日志已关闭",
        "me_description": "显示一条关于您自己的消息。",
        "message_display_incoming": "%1$s 悄悄地对你说：%2$s",
        "message_display_outgoing": "你悄悄地对 %1$s 说：%2$s",
        "message_sameTarget": "你不能向自己发出私人信息！",
        "mixer_description": "Mixer 交互性控制",
        "mixer_error_unknown": "发生未知的 Mixer 错误。",
        "mixer_error_notoken": "您需要用 Microsoft 账户登录，才能打开 Mixer 交互。",
        "mixer_error_notsupported": "您使用的设备不支持 Mixer 交互性。",
        "mixer_interactive_error": "发生 Mixer 错误：%1$s",
        "mixer_scene_failed": "不存在名为 %1$s 的场景。请确保正确输入了场景名称。",
        "mixer_scene_success": "场景已更改为：%1$s",
        "mixer_start_success": "Mixer 交互性开始：%1$s",
        "mixer_start_fail_invalidCode": "无法找到 ID 为“%1$s”的项目。请确保 ID 或共享代码正确。",
        "mixer_stop_success": "Mixer 交互性已停止。",
        "mixer_stop_fail": "不存在要停止的交互会话。",
        "mixer_status_notinitialized": "交互性未初始化。",
        "mixer_status_enabled": "交互性已启用。",
        "mixer_status_initializing": "交互性正在初始化。",
        "mixer_status_pending": "交互性正在等待中。",
        "mixer_status_disabled": "交互性已禁用。",
        "mixer_activatedbutton": "%1$s 已激活 %2$s。",
        "mobevent_description": "会控制允许哪些生物事件运行。",
        "mobevent_eventsEnabledSetToTrue": "生物事件已启用。设置为 \"false\" 的单独事件将不会运行。",
        "mobevent_eventsEnabledSetToFalse": "生物事件已禁用。单独事件将不会运行。",
        "mobevent_eventsEnabledIsTrue": "生物事件已启用。设置为 \"false\" 的单独事件将不会运行。",
        "mobevent_eventsEnabledIsFalse": "生物事件已启用。设置为 \"false\" 的单独事件将不会运行。",
        "mobevent_eventSetToTrue": "生物事件%s (id:%s) 设置为 \"true\"。",
        "mobevent_eventSetToTrueButEventsDisabled": "生物事件%s (id:%s) 设置为 \"true\"，但是生物事件已禁用。",
        "mobevent_eventSetToFalse": "生物事件%s (id:%s) 设置为 \"false\"。",
        "mobevent_eventIsTrue": "生物事件%s (id:%s) 设置为 \"true\"。",
        "mobevent_eventIsTrueButEventsDisabled": "生物事件%s (id:%s) 设置为 \"true\"，但是生物事件已禁用。",
        "mobevent_eventIsFalse": "生物事件%s (id:%s) 设置为 \"false\"。",
        "op_description": "授予一名玩家操作员状态。",
        "op_failed": "无法夺得权限（已夺得或具有更高权限）：%s",
        "op_success": "已将 %s 设为管理员",
        "op_message": "你已夺得权限",
        "origin_commandblock": "命令方块",
        "origin_external": "外部",
        "origin_devconsole": "DevConsole",
        "origin_script": "脚本引擎",
        "origin_server": "服务器",
        "origin_teacher": "老师",
        "ops_description": "重新加载并应用权限许可。",
        "ops_reloaded": "已从文件重新加载权限。",
        "ops_set_success": "为玩家%s设置操作员级别成功。",
        "permissions_description": "重新加载并应用许可。",
        "permissions_reloaded": "已从文件重新加载许可。",
        "permissions_set_failed": "无法将权限级别%s设置给玩家%s。",
        "permissions_set_success": "将权限级别%s设置给玩家%s成功。",
        "permissions_save_failed": "无法将权限级别%s保存给玩家%s。",
        "permissions_save_success": "将权限级别%s保存给玩家%s成功。",
        "spawnParticleEmitter_description": "制作一个粒子发射器",
        "particle_description": "创建粒子。",
        "particle_notFound": "未知的效果名称 (%1$s)",
        "particle_success": "播放 %1$s 效果 %2$d 次",
        "players_list": "目前有 %1$d/%2$d 个玩家在线：",
        "players_list_names": "%s",
        "playsound_description": "播放声音。",
        "playsound_playerTooFar": "玩家 %1$s 离得太远了，无法听到这声音",
        "playsound_success": "向 %2$s 播放声音 '%1$s",
        "position_description": "打开/关闭玩家的坐标。",
        "publish_failed": "无法建立本地游戏",
        "publish_started": "本地游戏已在端口 %1$s 上开启",
        "querytarget_description": "获取单个或多个给定目标实体的转型、名称和 id 信息。",
        "querytarget_success": "目标数据：%1$s",
        "reload_description": "从所有行为包中重新加载所有功能文件。",
        "reload_success": "现有功能文件已重新加载。重启《我的世界》以重新加载新功能。",
        "replaceitem_description": "替换物品栏中的物品。",
        "replaceitem_failed": "无法将 %s 号物品栏的物品 %d 替换成 %d * %s",
        "replaceitem_keepFailed": "已有一个物品占用 %s 物品栏 %d。",
        "replaceitem_noContainer": "位于 %s 的方块不是容器",
        "replaceitem_badSlotNumber": "无法替换槽位 %d，必须是 %d 和 %d 之间的值。",
        "replaceitem_success": "将 %s 号物品栏的物品 %d 替换为了 %d * %s",
        "replaceitem_success_entity": "已将 %s 的 %s 槽位中的 %d 替换为 %d * %s",
        "replaceitem_tagError": "数据标签解析失败：%1$s",
        "save_description": "控制或检查游戏数据保存到磁盘的方式。",
        "save_disabled": "世界自动保存已关闭",
        "save_enabled": "世界自动保存已启用",
        "save_failed": "保存失败：%1$s",
        "save_start": "保存中……",
        "save_success": "已保存世界",
        "save_all_error": "尝试暂停等级存储时发生错误。",
        "save_all_success": "数据已保存。文件现已可供复制。",
        "save_off_alreadyOff": "已关闭世界保存。",
        "save_on_alreadyOn": "已打开世界保存、",
        "save_on_notDone": "上一个保存尚未完成。",
        "save_on_description": "启用服务器自动保存。",
        "save_on_success": "等级修改已恢复。",
        "save_state_description": "检查上一个全部保存是否已完成并列出所涉及的文件。",
        "say_description": "在聊天框中向其他玩家发送信息。",
        "scoreboard_description": "跟踪和显示各种目标的得分。",
        "scoreboard_allMatchesFailed": "没有匹配的对象",
        "scoreboard_noMultiWildcard": "仅允许使用一个用户通配符",
        "scoreboard_objectiveNotFound": "没有找到名称为 '%1$s' 的目标",
        "scoreboard_objectiveReadOnly": "无法设置只读目标 '%1$s'",
        "scoreboard_objectives_add_alreadyExists": "已存在名为 '%1$s' 的目标",
        "scoreboard_objectives_add_displayTooLong": "'%1$s' 作为目标的显示名太长了，它最多只能有 %2$d 个字",
        "scoreboard_objectives_add_success": "已成功添加新目标 '%1$s'",
        "scoreboard_objectives_add_tooLong": "'%1$s' 作为目标名太长了，它最多只能有 %2$d 个字",
        "scoreboard_objectives_add_wrongType": "无效的目标标准类型 '%1$s'",
        "scoreboard_objectives_add_needName": "目标需要一个名称。",
        "scoreboard_objectives_description": "修改记分板目标。",
        "scoreboard_objectives_list_count": "记分板正在显示 %1$d 个目标",
        "scoreboard_objectives_list_empty": "记分板上没有目标",
        "scoreboard_objectives_list_entry": "- %1$s：显示为 '%2$s'，类型为 '%3$s'",
        "scoreboard_objectives_remove_success": "成功地移除了目标 '%1$s'",
        "scoreboard_objectives_setdisplay_invalidSlot": "没有名称为 '%1$s' 的显示区",
        "scoreboard_objectives_setdisplay_successCleared": "已清空目标显示区 '%1$s'",
        "scoreboard_objectives_setdisplay_successSet": "将显示区中的显示目标从 '%1$s' 设置为 '%2$s'",
        "scoreboard_players_add_success": "已为 %3$s 添加%1$d 到 [%2$s] （现在为 %4$d）",
        "scoreboard_players_add_multiple_success": "已为 %3$d 项目添加%1$d 到 [%2$s]",
        "scoreboard_players_nameNotFound": "必须提供玩家姓名。",
        "scoreboard_players_enable_noTrigger": "目标 %1$s 不是触发因子",
        "scoreboard_players_enable_success": "已对 %2$s 启用触发因子 %1$s",
        "scoreboard_players_list_count": "记分板上正在显示 %1$d 个被追踪的玩家：",
        "scoreboard_players_list_empty": "记分板上没有追踪的玩家",
        "scoreboard_players_list_player_count": "正在为 %2$s 显示 %1$d 个追踪目标：",
        "scoreboard_players_list_player_empty": "玩家 %1$s 没有分数记录",
        "scoreboard_players_list_player_entry": "- %2$s: %1$s (%3$s)",
        "scoreboard_players_operation_invalidOperation": "操作 %1$s 无效",
        "scoreboard_players_operation_notFound": "未找到 %2$s 的 %1$s 分数",
        "scoreboard_players_operation_success": "已为 %2$d 项目更新 [%1$s]",
        "scoreboard_players_offlinePlayerName": "玩家离线",
        "scoreboard_players_random_invalidRange": "最小值 %1$d 不小于最大值 %2$d",
        "scoreboard_players_remove_success": "已为 %3$s 从 [%2$s] 中移除 %1$d（现在为 %4$d）",
        "scoreboard_players_remove_multiple_success": "已为 %3$s 项目从 [%2$s] 中移除 %1$d",
        "scoreboard_players_reset_success": "已重置玩家 %1$s 的分数",
        "scoreboard_players_resetscore_success": "已重置玩家 %2$s 的 %1$s 分数",
        "scoreboard_players_set_success": "将 %2$s 的 [%1$s] 设定为 %3$d",
        "scoreboard_players_set_multiple_success": "将 %2$d 的 [%1$s] 设定为 %3$d",
        "scoreboard_players_set_tagError": "无法解析数据标签，原因：%1$s",
        "scoreboard_players_set_tagMismatch": "数据标签与 %1$s 不匹配",
        "scoreboard_players_score_notFound": "未找到 %2$s 的 %1$s 分数",
        "scoreboard_players_test_failed": "分数 %1$d 不在 %2$d 到 %3$d 范围内",
        "scoreboard_players_test_success": "分数 %1$d 在 %2$d 到 %3$d 范围内",
        "scoreboard_teamNotFound": "没有找到队名为 '%1$s' 的队伍",
        "scoreboard_teams_add_alreadyExists": "名为 '%1$s' 的队伍已经存在",
        "scoreboard_teams_add_displayTooLong": "'%1$s' 作为队伍的显示名太长了，它最多只能有 %2$d 个字",
        "scoreboard_teams_add_success": "已成功添加新队伍 '%1$s'",
        "scoreboard_teams_add_tooLong": "'%1$s' 作为队名太长了，它最多只能有 %2$d 个字",
        "scoreboard_teams_empty_alreadyEmpty": "队伍 %1$s 已空，无法移除不存在的玩家",
        "scoreboard_teams_empty_success": "已移除队伍 %2$s 内的全部 %1$d 个玩家",
        "scoreboard_teams_join_failure": "无法向队伍 %2$s 添加 %1$d 个玩家：%3$s",
        "scoreboard_teams_join_success": "将 %1$d 个玩家添加至队伍 %2$s: %3$s",
        "scoreboard_teams_leave_failure": "无法从他们队伍中移除 %1$d 个玩家：%2$s",
        "scoreboard_teams_leave_noTeam": "你不在队伍中",
        "scoreboard_teams_leave_success": "从他们的队伍里移除了 %1$d 个玩家：%2$s",
        "scoreboard_teams_list_count": "记分板上正在显示 %1$d 个队伍：",
        "scoreboard_teams_list_empty": "无记分板上注册的队伍",
        "scoreboard_teams_list_entry": "- %1$s：'%2$s' 有 %3$d 个玩家",
        "scoreboard_teams_list_player_count": "正在显示队伍 %2$s 中的 %1$d 个玩家：",
        "scoreboard_teams_list_player_empty": "队伍 %1$s 没有玩家",
        "scoreboard_teams_list_player_entry": "- %2$s: %1$s (%3$s)",
        "scoreboard_teams_option_noValue": "选项 %1$s 的有效数值有：%2$s",
        "scoreboard_teams_option_success": "将队伍 %2$s  的选项 %1$s 设置为 %3$s",
        "scoreboard_teams_remove_success": "已移除队伍 %1$s",
        "seed_success": "种子：%1$s",
        "setblock_description": "将一个方块更改为另一种方块。",
        "setblock_failed": "无法放置方块",
        "setblock_noChange": "该方块无法放置",
        "setblock_notFound": "没有 ID/名称为 %1$s 的方块",
        "setblock_outOfWorld": "无法在世界外放置方块",
        "setblock_success": "方块已放置",
        "setblock_tagError": "数据标签解析失败：%1$s",
        "setidletimeout_success": "成功地将空闲时限设为 %1$d 分钟。",
        "setfixedinvslots_description": "设置服务器的固定物品栏槽位。",
        "setfixedinvslots_success": "固定物品栏槽位设置为 %1$d",
        "setfixedinvslot_description": "将固定槽位设置为特定物品。",
        "setfixedinvslot_success": "固定物品栏槽位 %1$d 设置为 %2$s",
        "globalpause_description": "设置或取得所有玩家的全游戏暂停状态。",
        "globalpause_success": "已设置或取得暂停状态",
        "setmaxplayers_description": "设置此游戏会话的最大玩家数量。",
        "setmaxplayers_success": "设置最大玩家数为 %1$d。",
        "setmaxplayers_success_upperbound": "（绑定到最大允许连接数）",
        "setmaxplayers_success_lowerbound": "（绑定到当前玩家数）",
        "setworldspawn_description": "设置世界的生成。",
        "setworldspawn_success": "将世界的生成点设置为 (%1$d, %2$d, %3$d)",
        "setworldspawn_wrongDimension": "不能在这个维度设置世界生成",
        "spawnpoint_success_single": "将 %1$s's 的生成点设置为 (%2$d, %3$d, %4$d)",
        "spawnpoint_description": "设置玩家的生成点。",
        "spawnpoint_success_multiple_specific": "将 %1$s 的生成点设置为 (%2$d, %3$d, %4$d)",
        "spawnpoint_success_multiple_generic": "设置 %1$s 的生成点",
        "spawnpoint_wrongDimension": "不能在这个维度设置出生点",
        "spreadplayers_description": "将实体传送到随机位置。",
        "spreadplayers_failure_players": "无法将 %1$s 个玩家扩散至 %2$s,%3$s 周围（玩家数量过多 - 最大玩家数为 %4$s）",
        "spreadplayers_failure_teams": "无法将 %1$s 个队伍扩散至 %2$s,%3$s 周围（玩家数量过多 - 最大队伍数为 %4$s）",
        "spreadplayers_info_players": "(玩家间的平均距离在迭代 %2$s 次后为 %1$s 个方块)",
        "spreadplayers_info_teams": "(队伍间的平均距离在迭代 %2$s 次后为 %1$s 个方块)",
        "spreadplayers_spreading_players": "正在将 %1$s 个玩家扩散至距离 %3$s,%4$s 周围 %2$s 个方块（最小距离 %5$s 个方块）",
        "spreadplayers_spreading_teams": "正在将 %1$s 个队伍扩散至距离 %3$s,%4$s 周围 %2$s 个方块（最小距离 %5$s 个方块）",
        "spreadplayers_success_players": "已将 %1$s 个玩家成功扩散至 %2$s,%3$s 周围",
        "spreadplayers_success_teams": "已将 %1$s 个队伍成功扩散至 %2$s,%3$s 周围",
        "stats_cleared": "已清除 %1$s 的统计信息",
        "stats_failed": "无效的参数",
        "stats_noCompatibleBlock": "无法对 %1$d, %2$d, %3$d 坐标的方块跟踪统计",
        "stats_success": "正在将 %1$s 的统计信息储存在 %3$s 的 %2$s 上",
        "stop_description": "关闭服务器。",
        "stop_start": "正在关闭服务器",
        "stopsound_description": "停止播放声音。",
        "stopsound_success": "停止 %s 声音，持续 %s",
        "stopsound_success_all": "停止所有声音，持续 %s",
        "summon_description": "召唤一个实体。",
        "summon_failed": "无法召唤对象",
        "summon_outOfWorld": "无法在世界外召唤对象",
        "summon_success": "对象已成功召唤",
        "summon_tagError": "数据标签解析失败：%1$s",
        "tag_description": "管理存储在实体中的标签。",
        "tag_add_failed": "目标已有该标签，或已有太多标签",
        "tag_add_success_single": "已添加标签“%1$s” 至 %2$s",
        "tag_add_success_multiple": "已添加标签“%1$s” 至 %2$d 个实体",
        "tag_list_single_empty": "%s 没有标签",
        "tag_list_single_success": "%1$s 有 %2$d 个标签：%3$s",
        "tag_list_multiple_empty": "%d 个实体上没有标签",
        "tag_list_multiple_success": "%1$d 个实体上总计有 %2$d 个标签：%3$s",
        "tag_remove_failed": "目标没有该标签",
        "tag_remove_success_single": "已移除 %2$s上的标签“%1$s”",
        "tag_remove_success_multiple": "已移除 %2$d 个实体上的标签“%1$s”",
        "tell_description": "向一名或多名玩家发送私密消息。",
        "tellraw_description": "向其他玩家发送 JSON 消息。",
        "tellraw_jsonException": "无效的 json：%1$s",
        "tellraw_jsonStringException": "无效的 JSON 字符串数据。",
        "tellraw_error_noData": "未提供任何数据。",
        "tellraw_error_notArray": "原始文本对象必须包含一个数组。示例：\"rawtext\":[{..}]",
        "tellraw_error_textNotString": "原始文本中的“text”域必须包含一个字符串。示例：\"rawtext\":[{\"text\": \"text to display\"}]",
        "tellraw_error_translateNotString": "原始文本中的“translate”域必须包含一个语言关键词。示例：\"rawtext\":[{\"translate\": \"gui.ok\"}]",
        "tellraw_error_withNotArrayOrRawText": "原始文本中的与字段必须包含一个数组或另一个原始文本对象。示例 1：\"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  示例 2：\"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
        "tellraw_error_itemIsNotObject": "原始文本数组中的 JSON 值不是对象。示例：\"rawtext\": [{ \"text\" : \"my text\" }]",
        "educlientinfo_description": "获取租户 ID 和主机状态。供 CM 使用。",
        "testfor_description": "计数与指定条件相匹配的实体（玩家、生物、物品等）。",
        "testfor_failure": "%1$s 与要求的数据结构不匹配",
        "testfor_success": "发现 %1$s",
        "testfor_tagError": "数据标签解析失败：%1$s",
        "testforblock_description": "测试某个方块是否位于特定位置。",
        "testforblock_failed_data": "位于 %1$d,%2$d,%3$d 的方块与预期的方块状态不匹配。",
        "testforblock_failed_nbt": "位于 %1$d,%2$d,%3$d 的方块并没有所需的 NBT 标签。",
        "testforblock_failed_tile": "位于 %1$d,%2$d,%3$d 的方块为 %4$s ( 预定：%5$s)",
        "testforblock_failed_tileEntity": "位于 %1$d,%2$d,%3$d 的方块不拥有实体附加值且不支持标签配对。",
        "testforblock_outOfWorld": "无法测试位于世界外的方块",
        "testforblock_success": "成功找到了位于 %1$d,%2$d,%3$d 的方块。",
        "testforblocks_description": "测试两个地区的方块是否匹配。",
        "tickingarea_description": "添加、删除或列出常加载区域。",
        "tickingarea_inuse": "%1$d/%2$d 常加载区域正在使用。",
        "tickingarea_noneExist_currentDimension": "当前维度中不存在任何常加载区域。",
        "tickingarea_add_bounds_success": "已将常加载区域从 %1$d 添加到 %2$d。",
        "tickingarea_add_circle_success": "已添加常加载区域，中心位于 %1$d，区块半径为 %2$d。",
        "tickingarea_add_failure": "已达到常加载区域的最大数量 (%1$d)。无法再添加更多常加载区域。",
        "tickingarea_add_conflictingname": "名为 %1$s 的常加载区域已存在。",
        "tickingarea_add_chunkfailure": "常加载区域包含 %1$d 个以上区块，常加载区域过大，无法创建。",
        "tickingarea_add_radiusfailure": "半径不能大于 %1$d，常加载区域过大，无法创建。",
        "tickingarea_remove_success": "已删除常加载区域",
        "tickingarea_remove_failure": "当前维度中不存在任何包含方块位置 %1$d 的常加载区域。",
        "tickingarea_remove_byname_failure": "当前维度中不存在任何名为 %1$s 的常加载区域。",
        "tickingarea_remove_all_success": "已删除常加载区域",
        "tickingarea_remove_all_failure": "当前维度中不存在任何常加载区域。",
        "tickingarea_list_chunks": "区块",
        "tickingarea_list_circle_radius": "半径",
        "tickingarea_list_success_currentDimension": "当前维度中的所有常加载区域的列表",
        "tickingarea_list_success_allDimensions": "所有维度中的所有常加载区域的列表",
        "tickingarea_list_failure_allDimensions": "任何维度中都不存在任何常加载区域。",
        "tickingarea_list_to": "到",
        "tickingarea_list_type_circle": "圆形",
        "time_added": "将时间调快了 %1$d",
        "time_description": "更改或查询世界的游戏时间。",
        "time_disabled": "在此等级中启用了“终为白日”。",
        "time_query_day": "日期为 %d",
        "time_query_daytime": "白天为 %d",
        "time_query_gametime": "游戏时间为 %d",
        "time_set": "将时间设为 %1$d",
        "time_stop": "时间 %1$s",
        "title_description": "控制屏幕标题。",
        "title_success": "标题命令执行成功",
        "titleraw_description": "使用 JSON 消息控制屏幕标题。",
        "toggledownfall_description": "切换天气。",
        "tp_description": "传送实体（玩家、生物等）。",
        "tp_notSameDimension": "无法传送，因为目标玩家不存在于同一个维度",
        "tp_outOfWorld": "无法传送世界外的实体",
        "tp_permission": "您没有使用此斜杠命令的权限。",
        "tp_safeTeleportFail": "无法将 %1$s 传送到 %2$s，因为该区域有障碍。",
        "tp_far": "无法将 %1$s 传送到 %2$s 的未加载区域",
        "tp_success": "已将 %1$s 传送至 %2$s",
        "tp_successVictim": "您已被传送至 %1$s",
        "tp_success_coordinates": "已将 %1$s 传送至 %2$s, %3$s, %4$s",
        "transferserver_description": "将玩家转移至另一个服务器。",
        "transferserver_successful": "已转移的玩家",
        "transferserver_invalid_port": "无效端口(0-65535)",
        "trigger_description": "设置触发器以供激活。",
        "trigger_disabled": "触发因子 %1$s 没有启用",
        "trigger_invalidMode": "触发模式 %1$s 无效",
        "trigger_invalidObjective": "触发因子名称 %1$s 无效",
        "trigger_invalidPlayer": "只有玩家能使用/trigger命令",
        "trigger_success": "触发因子 %1$s 已随 %2$s %3$s 改变",
        "unban_failed": "无法解除玩家 %1$s 的封禁",
        "unban_success": "已解封玩家 %1$s",
        "unbanip_invalid": "你输入了一个无效的IP地址",
        "unbanip_success": "已解封 IP 地址 %1$s",
        "validategamelighting_description": "验证游戏内指定区域的照明系统",
        "validategamelighting_checkRegionTooBig": "用于检查照明系统的区域过大!（%1$d>%2$d）",
        "validategamelighting_outOfWorld": "无法检查世界以外的照明系统",
        "weather_clear": "更换到晴朗天气",
        "weather_description": "设置天气。",
        "weather_disabled": "未在此等级中启用“天气更替”。",
        "weather_query": "天气状态是：%s",
        "weather_query_clear": "不下雨",
        "weather_query_rain": "下雨",
        "weather_query_thunder": "雷阵雨",
        "weather_rain": "更换到下雨天",
        "weather_thunder": "更换到雷雨天",
        "whitelist_add_failed": "无法将 %1$s 添加到白名单中",
        "whitelist_add_success": "已将 %1$s 加入白名单",
        "whitelist_description": "管理服务器允许列表。",
        "whitelist_disabled": "白名单验证已关闭",
        "whitelist_enabled": "白名单验证已启用",
        "whitelist_list": "现在白名单中有 %1$d 个 ( 于可见的 %2$d 人中 ) 玩家：",
        "whitelist_reloaded": "已从文件重新读取白名单。",
        "whitelist_remove_failed": "无法从白名单中移除 %1$s",
        "whitelist_remove_success": "已将 %1$s 移出白名单",
        "world_age_description": "改变或查询世界的年龄（自创建以来的时间）。",
        "world_age_added": "该世界的年龄增加 %1$d",
        "world_age_query": "世界年龄为 %d",
        "world_age_set": "将世界年龄设置为 %1$d",
        "worldborder_center_success": "将世界边界的中心设置为 %1$s,%2$s",
        "worldborder_damage_amount_success": "将世界边界伤害设置为每方块 %1$s（原为每方块 %2$s）",
        "worldborder_damage_buffer_success": "将世界边界伤害缓存设为 %1$s 个方块（原为 %2$s 个方块）",
        "worldborder_get_success": "当前世界边界宽度为 %1$s 个方块",
        "worldborder_set_success": "设置世界边界的宽度为 %1$s 个方块（原为 %2$s 个方块）",
        "worldborder_setSlowly_grow_success": "正将世界边界宽度逐渐增加为 %1$s 个方块（原为 %2$s 个方块），时间 %3$s 秒",
        "worldborder_setSlowly_shrink_success": "正将世界边界宽度逐渐缩小为 %1$s 个方块（原为 %2$s 个方块），时间 %3$s 秒",
        "worldborder_warning_distance_success": "将世界边界警告设置到 %1$s 个方块的距离（原为 %2$s 个方块）",
        "worldborder_warning_time_success": "将世界边界警告设置到 %1$s 秒的距离（原为 %2$s 秒）",
        "worldbuilder_description": "切换世界建造者调用方状态。",
        "worldbuilder_success": "世界建造者状态更新为 %1$s",
        "wsserver_description": "尝试在所提供的 URL 上连接到 WebSocket 服务器。",
        "wsserver_invalid_url": "所提供的服务器 URL 无效",
        "wsserver_request_existing": "另一项连接要求目前正在运行",
        "wsserver_request_failed": "无法连接到服务器：%1$s",
        "wsserver_success": "已建立服务器连接：%1$s",
        "xp_description": "添加或删除玩家经验值。",
        "xp_failure_widthdrawXp": "无法向玩家给予负经验值",
        "xp_success": "已将 %1$d 的经验给予 %2$s",
        "xp_success_levels": "给予 %2$s %1$d 级经验",
        "xp_success_negative_levels": "从 %2$s 身上拿走了 %1$d 级经验"
    },
    item:{
        "air": [
            "空气"
        ],
        "apple": [
            "苹果"
        ],
        "golden_apple": [
            "金苹果"
        ],
        "appleenchanted": [
            "附魔苹果"
        ],
        "armor_stand": [
            "盔甲架"
        ],
        "arrow": [
            "箭"
        ],
        "tipped_arrow": [
            "锐箭"
        ],
        "banner": [
            "黑色旗帜",
            "黑色旗帜",
            "红色旗帜",
            "绿色旗帜",
            "棕色旗帜",
            "蓝色旗帜",
            "紫色旗帜",
            "青色旗帜",
            "淡灰色旗帜",
            "灰色旗帜",
            "粉红色旗帜",
            "黄绿色旗帜",
            "黄色旗帜",
            "淡蓝色旗帜",
            "品红色旗帜",
            "橙色旗帜",
            "白色旗帜"
        ],
        "bed": [
            "床",
            "白床",
            "橙床",
            "品红床",
            "淡蓝床",
            "黄床",
            "黄绿床",
            "粉床",
            "灰床",
            "淡灰床",
            "青床",
            "紫床",
            "蓝床",
            "棕床",
            "绿床",
            "红床",
            "黑床"
        ],
        "bell": [
            "钟"
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
            "甜菜根汤"
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
            "云杉木船",
            "桦木船",
            "丛林木船",
            "金合欢船",
            "黑橡木船"
        ],
        "bone": [
            "骨头"
        ],
        "book": [
            "书"
        ],
        "chainmail_boots": [
            "链甲靴子"
        ],
        "leather_boots": [
            "皮革靴子"
        ],
        "diamond_boots": [
            "钻石靴子"
        ],
        "golden_boots": [
            "金靴子"
        ],
        "iron_boots": [
            "铁靴子"
        ],
        "bow": [
            "弓"
        ],
        "bowl": [
            "碗"
        ],
        "bread": [
            "面包"
        ],
        "brewing_stand": [
            "酿造台"
        ],
        "brick": [
            "砖"
        ],
        "bucket": [
            "桶"
        ],
        "bucketLava": [
            "岩浆桶"
        ],
        "bucketWater": [
            "水桶"
        ],
        "bucketFish": [
            "桶装鳕鱼"
        ],
        "bucketSalmon": [
            "桶装鲑鱼"
        ],
        "bucketTropical": [
            "桶装热带鱼"
        ],
        "bucketPuffer": [
            "桶装河豚"
        ],
        "bucketCustomFish": [
            "桶装"
        ],
        "tropicalColorWhite": [
            "白色"
        ],
        "tropicalColorOrange": [
            "橙色"
        ],
        "tropicalColorMagenta": [
            "品红色"
        ],
        "tropicalColorSky": [
            "天蓝色"
        ],
        "tropicalColorYellow": [
            "黄色"
        ],
        "tropicalColorLime": [
            "黄绿色"
        ],
        "tropicalColorRose": [
            "玫瑰色"
        ],
        "tropicalColorGray": [
            "灰色"
        ],
        "tropicalColorSilver": [
            "银色"
        ],
        "tropicalColorTeal": [
            "水鸭色"
        ],
        "tropicalColorPlum": [
            "紫红色"
        ],
        "tropicalColorBlue": [
            "蓝色"
        ],
        "tropicalColorBrown": [
            "棕色"
        ],
        "tropicalColorGreen": [
            "绿色"
        ],
        "tropicalColorRed": [
            "红色"
        ],
        "tropicalBodyKobSingle": [
            "%1$s 科布鱼"
        ],
        "tropicalBodySunstreakSingle": [
            "%1$s 阳光条纹鱼"
        ],
        "tropicalBodySnooperSingle": [
            "%1$s 刺探者"
        ],
        "tropicalBodyDasherSingle": [
            "%1$s 猛冲者"
        ],
        "tropicalBodyBrinelySingle": [
            "%1$s 布林利鱼"
        ],
        "tropicalBodySpottySingle": [
            "%1$s 斑点鱼"
        ],
        "tropicalBodyFlopperSingle": [
            "%1$s 翻翻鱼"
        ],
        "tropicalBodyStripeySingle": [
            "%1$s 条纹鱼"
        ],
        "tropicalBodyGlitterSingle": [
            "%1$s 闪光鱼"
        ],
        "tropicalBodyBlockfishSingle": [
            "%1$s 方块鱼"
        ],
        "tropicalBodyBettySingle": [
            "%1$s 贝蒂鱼"
        ],
        "tropicalBodyClayfishSingle": [
            "%1$s 粘土鱼"
        ],
        "tropicalBodyKobMulti": [
            "%1$s-%2$s 科布鱼"
        ],
        "tropicalBodySunstreakMulti": [
            "%1$s-%2$s 阳光条纹鱼"
        ],
        "tropicalBodySnooperMulti": [
            "%1$s-%2$s 刺探者"
        ],
        "tropicalBodyDasherMulti": [
            "%1$s-%2$s 猛冲者"
        ],
        "tropicalBodyBrinelyMulti": [
            "%1$s-%2$s 布林利鱼"
        ],
        "tropicalBodySpottyMulti": [
            "%1$s-%2$s 斑点鱼"
        ],
        "tropicalBodyFlopperMulti": [
            "%1$s-%2$s 翻翻鱼"
        ],
        "tropicalBodyStripeyMulti": [
            "%1$s-%2$s 条纹鱼"
        ],
        "tropicalBodyGlitterMulti": [
            "%1$s-%2$s 闪光鱼"
        ],
        "tropicalBodyBlockfishMulti": [
            "%1$s-%2$s 方块鱼"
        ],
        "tropicalBodyBettyMulti": [
            "%1$s-%2$s 贝蒂鱼"
        ],
        "tropicalBodyClayfishMulti": [
            "%1$s-%2$s 粘土鱼"
        ],
        "tropicalSchoolAnemone": [
            "海葵"
        ],
        "tropicalSchoolBlackTang": [
            "长鼻高鳍刺尾鱼"
        ],
        "tropicalSchoolBlueDory": [
            "拟刺尾鲷"
        ],
        "tropicalSchoolButterflyFish": [
            "蝶鱼"
        ],
        "tropicalSchoolCichlid": [
            "慈鲷"
        ],
        "tropicalSchoolClownfish": [
            "海葵鱼"
        ],
        "tropicalSchoolCottonCandyBetta": [
            "棉花糖斗鱼"
        ],
        "tropicalSchoolDottyback": [
            "拟雀鲷"
        ],
        "tropicalSchoolEmperorRedSnapper": [
            "川纹笛鲷"
        ],
        "tropicalSchoolGoatfish": [
            "须鲷"
        ],
        "tropicalSchoolMoorishIdol": [
            "镰鱼"
        ],
        "tropicalSchoolOrnateButterfly": [
            "华丽蝴蝶鱼"
        ],
        "tropicalSchoolParrotfish": [
            "鹦嘴鱼"
        ],
        "tropicalSchoolQueenAngelFish": [
            "额斑刺蝶鱼"
        ],
        "tropicalSchoolRedCichlid": [
            "红慈鲷"
        ],
        "tropicalSchoolRedLippedBlenny": [
            "红唇鳚鱼"
        ],
        "tropicalSchoolRedSnapper": [
            "红鲷鱼"
        ],
        "tropicalSchoolThreadfin": [
            "马鲅"
        ],
        "tropicalSchoolTomatoClown": [
            "白条双锯鱼"
        ],
        "tropicalSchoolTriggerfish": [
            "鳞鲀"
        ],
        "tropicalSchoolYellowTang": [
            "黄高鳍刺尾鱼"
        ],
        "tropicalSchoolYellowtailParrot": [
            "黄尾鹦嘴鱼"
        ],
        "cake": [
            "蛋糕"
        ],
        "camera": [
            "摄像机"
        ],
        "golden_carrot": [
            "金萝卜"
        ],
        "carrotOnAStick": [
            "萝卜钓竿"
        ],
        "warped_fungus_on_a_stick": [
            "扭曲真菌钓竿"
        ],
        "carrot": [
            "胡萝卜"
        ],
        "cauldron": [
            "炼药锅"
        ],
        "coal": [
            "煤炭",
            null,
            "木炭"
        ],
        "chainmail_chestplate": [
            "链甲胸甲"
        ],
        "leather_chestplate": [
            "皮革胸甲"
        ],
        "diamond_chestplate": [
            "钻石胸甲"
        ],
        "golden_chestplate": [
            "金胸甲"
        ],
        "iron_chestplate": [
            "铁胸甲"
        ],
        "chorus_fruit": [
            "共鸣果"
        ],
        "chorus_fruit_popped": [
            "爆裂共鸣果"
        ],
        "cooked_beef": [
            "熟牛肉"
        ],
        "cooked_chicken": [
            "熟鸡肉"
        ],
        "cooked_porkchop": [
            "熟猪排"
        ],
        "chicken": [
            "生鸡肉"
        ],
        "clay_ball": [
            "粘土"
        ],
        "clock": [
            "钟"
        ],
        "comparator": [
            "红石比较器"
        ],
        "compass": [
            "指南针"
        ],
        "lodestonecompass": [
            "磁石指南针"
        ],
        "cookie": [
            "曲奇"
        ],
        "crossbow": [
            "弩"
        ],
        "diamond": [
            "钻石"
        ],
        "repeater": [
            "红石中继器"
        ],
        "acacia_door": [
            "金合欢木门"
        ],
        "birch_door": [
            "桦木门"
        ],
        "dark_oak_door": [
            "深色橡木门"
        ],
        "iron_door": [
            "铁门"
        ],
        "jungle_door": [
            "丛林木门"
        ],
        "wooden_door": [
            "橡木门"
        ],
        "spruce_door": [
            "云杉木门"
        ],
        "crimson_door": [
            "绯红门"
        ],
        "warped_door": [
            "扭曲门"
        ],
        "dragon_breath": [
            "龙息"
        ],
        "dye": [
            "墨囊",
            "墨囊",
            "红色染料",
            "绿色染料",
            "可可豆",
            "青金石",
            "紫色染料",
            "青色染料",
            "淡灰色染料",
            "灰色染料",
            "粉红色染料",
            "黄绿色染料",
            "黄色染料",
            "淡蓝色染料",
            "品红色染料",
            "橙色染料",
            "骨粉",
            "黑色染料",
            "棕色染料",
            "蓝色染料",
            "白色染料"
        ],
        "egg": [
            "鸡蛋"
        ],
        "elytra": [
            "翅鞘"
        ],
        "emerald": [
            "绿宝石"
        ],
        "emptyMap": [
            "空白地图"
        ],
        "emptyLocatorMap": [
            "空的定位器地图"
        ],
        "emptyPotion": [
            "水瓶"
        ],
        "enchanted_book": [
            "附魔书"
        ],
        "end_crystal": [
            "末地水晶"
        ],
        "end_rod": [
            "末地棒"
        ],
        "ender_eye": [
            "末影之眼"
        ],
        "ender_pearl": [
            "末影珍珠"
        ],
        "experience_bottle": [
            "附魔之瓶"
        ],
        "feather": [
            "羽毛"
        ],
        "fermented_spider_eye": [
            "发酵蛛眼"
        ],
        "fireball": [
            "火焰弹"
        ],
        "fireworks": [
            "焰火火箭"
        ],
        "fireworksCharge": [
            "焰火之星"
        ],
        "clownfish": [
            "热带鱼"
        ],
        "cooked_fish": [
            "熟鳕鱼"
        ],
        "fish": [
            "生鳕鱼"
        ],
        "pufferfish": [
            "河豚"
        ],
        "cooked_salmon": [
            "熟鲑鱼"
        ],
        "salmon": [
            "生鲑鱼"
        ],
        "fishing_rod": [
            "钓鱼竿"
        ],
        "flint": [
            "燧石"
        ],
        "flint_and_steel": [
            "打火石"
        ],
        "flower_pot": [
            "花盆"
        ],
        "frame": [
            "物品展示框"
        ],
        "ghast_tear": [
            "恶魂之泪"
        ],
        "glass_bottle": [
            "玻璃瓶"
        ],
        "gold_nugget": [
            "金粒"
        ],
        "iron_nugget": [
            "铁粒"
        ],
        "diamond_axe": [
            "钻石斧"
        ],
        "golden_axe": [
            "金斧"
        ],
        "iron_axe": [
            "铁斧"
        ],
        "stone_axe": [
            "石斧"
        ],
        "wooden_axe": [
            "木斧"
        ],
        "chainmail_helmet": [
            "链甲头盔"
        ],
        "leather_helmet": [
            "皮革帽子"
        ],
        "diamond_helmet": [
            "钻石头盔"
        ],
        "golden_helmet": [
            "金头盔"
        ],
        "iron_helmet": [
            "铁头盔"
        ],
        "diamond_hoe": [
            "钻石锄"
        ],
        "golden_hoe": [
            "金锄"
        ],
        "iron_hoe": [
            "铁锄"
        ],
        "stone_hoe": [
            "石锄"
        ],
        "wooden_hoe": [
            "木锄"
        ],
        "honey_bottle": [
            "蜂蜜瓶子"
        ],
        "honeycomb": [
            "蜂房"
        ],
        "horsearmordiamond": [
            "钻石马甲"
        ],
        "horsearmorgold": [
            "金马甲"
        ],
        "horsearmoriron": [
            "铁马甲"
        ],
        "horsearmorleather": [
            "皮马甲"
        ],
        "gold_ingot": [
            "金锭"
        ],
        "iron_ingot": [
            "铁锭"
        ],
        "netherite_ingot": [
            "下界合金锭"
        ],
        "netherite_scrap": [
            "下界合金碎片"
        ],
        "netherite_sword": [
            "下界合金剑"
        ],
        "netherite_pickaxe": [
            "下界合金镐"
        ],
        "netherite_axe": [
            "下界合金斧头"
        ],
        "netherite_shovel": [
            "下界合金锹"
        ],
        "netherite_hoe": [
            "下界合金锄头"
        ],
        "netherite_boots": [
            "下界合金靴子"
        ],
        "netherite_leggings": [
            "下界合金护腿"
        ],
        "netherite_chestplate": [
            "下界合金胸甲"
        ],
        "netherite_helmet": [
            "下界合金头盔"
        ],
        "lead": [
            "拴绳"
        ],
        "leather": [
            "皮革"
        ],
        "leaves": [
            "树叶",
            "橡树叶",
            "云杉叶",
            "桦树叶",
            "丛林树叶",
            "金合欢树叶",
            "深色像树叶"
        ],
        "chainmail_leggings": [
            "链甲护腿"
        ],
        "leather_leggings": [
            "皮革裤子"
        ],
        "diamond_leggings": [
            "钻石护腿"
        ],
        "golden_leggings": [
            "金护腿"
        ],
        "iron_leggings": [
            "铁护腿"
        ],
        "nautilus_shell": [
            "鹦鹉螺壳"
        ],
        "heart_of_the_sea": [
            "海洋之心"
        ],
        "magma_cream": [
            "岩浆膏"
        ],
        "map": [
            "地图"
        ],
        "melon": [
            "西瓜"
        ],
        "milk": [
            "牛奶"
        ],
        "minecart": [
            "矿车"
        ],
        "chest_minecart": [
            "运输矿车"
        ],
        "command_block_minecart": [
            "带有命令块的《我的世界》"
        ],
        "minecartFurnace": [
            "动力矿车"
        ],
        "hopper_minecart": [
            "漏斗矿车"
        ],
        "tnt_minecart": [
            "TNT矿车"
        ],
        "trident": [
            "三叉戟"
        ],
        "mushroom_stew": [
            "蘑菇煲"
        ],
        "muttoncooked": [
            "熟羊肉"
        ],
        "muttonraw": [
            "生羊肉"
        ],
        "name_tag": [
            "命名牌"
        ],
        "netherbrick": [
            "地狱砖"
        ],
        "quartz": [
            "地狱石英"
        ],
        "nether_wart": [
            "地狱疣"
        ],
        "netherStar": [
            "地狱之星"
        ],
        "painting": [
            "画"
        ],
        "paper": [
            "纸"
        ],
        "diamond_pickaxe": [
            "钻石镐"
        ],
        "golden_pickaxe": [
            "金镐"
        ],
        "iron_pickaxe": [
            "铁镐"
        ],
        "stone_pickaxe": [
            "石镐"
        ],
        "wooden_pickaxe": [
            "木镐"
        ],
        "porkchop_cooked": [
            "熟猪排"
        ],
        "porkchop": [
            "生猪排"
        ],
        "portfolio": [
            "个人资料"
        ],
        "potato": [
            "马铃薯"
        ],
        "baked_potato": [
            "烤马铃薯"
        ],
        "poisonous_potato": [
            "毒马铃薯"
        ],
        "potion": [
            "药水"
        ],
        "prismarine_crystals": [
            "海晶砂粒"
        ],
        "prismarine_shard": [
            "海晶碎片"
        ],
        "pumpkin_pie": [
            "南瓜派"
        ],
        "cooked_rabbit": [
            "熟兔肉"
        ],
        "rabbit_foot": [
            "兔子腿"
        ],
        "rabbit_hide": [
            "兔子皮"
        ],
        "rabbit": [
            "生兔肉"
        ],
        "rabbit_stew": [
            "兔肉煲"
        ],
        "record": [
            "音乐唱片"
        ],
        "redstone": [
            "红石"
        ],
        "reeds": [
            "甘蔗"
        ],
        "kelp": [
            "海带"
        ],
        "dried_kelp": [
            "干海带"
        ],
        "rotten_flesh": [
            "腐肉"
        ],
        "ruby": [
            "红宝石"
        ],
        "saddle": [
            "鞍"
        ],
        "wheat_seeds": [
            "种子"
        ],
        "beetroot_seeds": [
            "甜菜根种子"
        ],
        "melon_seeds": [
            "西瓜种子"
        ],
        "pumpkin_seeds": [
            "南瓜种子"
        ],
        "shears": [
            "剪刀"
        ],
        "diamond_shovel": [
            "钻石锹"
        ],
        "golden_shovel": [
            "金锹"
        ],
        "iron_shovel": [
            "铁锹"
        ],
        "stone_shovel": [
            "石锹"
        ],
        "wooden_shovel": [
            "木锹"
        ],
        "sign": [
            "橡木告示牌"
        ],
        "spruce_sign": [
            "云杉木告示牌"
        ],
        "birch_sign": [
            "桦木告示牌"
        ],
        "jungle_sign": [
            "丛林告示牌"
        ],
        "acacia_sign": [
            "金合欢木告示牌"
        ],
        "darkoak_sign": [
            "深色橡木告示牌"
        ],
        "crimson_sign": [
            "绯红告示牌"
        ],
        "warped_sign": [
            "扭曲告示牌"
        ],
        "skull": [
            "骷髅头颅",
            "骷髅头颅",
            "凋灵骷髅头颅",
            "僵尸的头",
            "头颅",
            "爬行者的头",
            "龙首"
        ],
        "slime_ball": [
            "粘液球"
        ],
        "snowball": [
            "雪球"
        ],
        "speckled_melon": [
            "闪烁的西瓜"
        ],
        "spider_eye": [
            "蜘蛛眼"
        ],
        "stick": [
            "木棍"
        ],
        "string": [
            "蛛丝"
        ],
        "sugar": [
            "糖"
        ],
        "gunpowder": [
            "火药"
        ],
        "diamond_sword": [
            "钻石剑"
        ],
        "golden_sword": [
            "金剑"
        ],
        "iron_sword": [
            "铁剑"
        ],
        "stone_sword": [
            "石剑"
        ],
        "wooden_sword": [
            "木剑"
        ],
        "wheat": [
            "小麦"
        ],
        "writable_book": [
            "书和羽毛"
        ],
        "written_book": [
            "成书"
        ],
        "glowstone_dust": [
            "萤石粉"
        ],
        "shield": [
            "护盾"
        ],
        "shulker_shell": [
            "潜匿之贝壳"
        ],
        "totem": [
            "不死图腾"
        ],
        "turtle_helmet": [
            "海龟壳"
        ],
        "turtle_shell_piece": [
            "鳞甲"
        ],
        "phantom_membrane": [
            "幻影薄膜"
        ],
        "sweet_berries": [
            "甜莓"
        ],
        "suspicious_stew": [
            "可疑的炖肉"
        ],
        "banner_pattern": [
            "旗帜图案"
        ],
        "acaciaFence": [
            "金合欢木围墙"
        ],
        "acacia_fence_gate": [
            "金合欢木围墙门"
        ],
        "activator_rail": [
            "激活铁轨"
        ],
        "allow": [
            "允许"
        ],
        "deny": [
            "拒绝"
        ],
        "border_block": [
            "边框"
        ],
        "anvil": [
            "铁砧",
            "铁砧",
            null,
            null,
            null,
            "轻微损坏的铁砧",
            null,
            null,
            null,
            "严重损坏的铁砧"
        ],
        "barrier": [
            "屏障"
        ],
        "beacon": [
            "信标"
        ],
        "beehive": [
            "蜂窝"
        ],
        "bee_nest": [
            "蜂巢"
        ],
        "target": [
            "目标"
        ],
        "bedrock": [
            "基岩"
        ],
        "conduit": [
            "导管"
        ],
        "invisibleBedrock": [
            "隐形基岩"
        ],
        "birchFence": [
            "桦木围墙"
        ],
        "birch_fence_gate": [
            "桦木围墙门"
        ],
        "blast_furnace": [
            "高炉"
        ],
        "bone_block": [
            "骨头方块"
        ],
        "coal_block": [
            "煤炭块"
        ],
        "diamond_block": [
            "钻石块"
        ],
        "emerald_block": [
            "绿宝石块"
        ],
        "gold_block": [
            "金块"
        ],
        "iron_block": [
            "铁块"
        ],
        "lapis_block": [
            "青金石块"
        ],
        "redstone_block": [
            "红石块"
        ],
        "bookshelf": [
            "书架"
        ],
        "brick_block": [
            "砖块"
        ],
        "brown_mushroom": [
            "棕色蘑菇"
        ],
        "wooden_button": [
            "橡树按钮"
        ],
        "acacia_button": [
            "金合欢按钮"
        ],
        "birch_button": [
            "桦树按钮"
        ],
        "dark_oak_button": [
            "深色橡树按钮"
        ],
        "jungle_button": [
            "丛林按钮"
        ],
        "spruce_button": [
            "云杉按钮"
        ],
        "stone_button": [
            "石头按钮"
        ],
        "cactus": [
            "仙人掌"
        ],
        "dried_kelp_block": [
            "干海带区块"
        ],
        "carved_pumpkin": [
            "雕刻南瓜"
        ],
        "chest": [
            "箱子"
        ],
        "ender_chest": [
            "末影箱"
        ],
        "jigsaw": [
            "线锯方块"
        ],
        "honey_block": [
            "蜂蜜方块"
        ],
        "honeycomb_block": [
            "蜂房方块"
        ],
        "lodestone": [
            "磁石"
        ],
        "nether_sprouts": [
            "地狱芽"
        ],
        "crimson_stem": [
            "绯红茎"
        ],
        "warped_stem": [
            "扭曲茎"
        ],
        "stripped_crimson_stem": [
            "去皮绯红茎"
        ],
        "stripped_warped_stem": [
            "去皮扭曲茎"
        ],
        "crimson_hyphae": [
            "绯红菌丝"
        ],
        "warped_hyphae": [
            "扭曲菌丝"
        ],
        "stripped_crimson_hyphae": [
            "去皮绯红菌丝"
        ],
        "stripped_warped_hyphae": [
            "去皮扭曲菌丝"
        ],
        "crimson_planks": [
            "绯红木板"
        ],
        "warped_planks": [
            "扭曲木板"
        ],
        "crimson_trapdoor": [
            "绯红活板门"
        ],
        "warped_trapdoor": [
            "扭曲活板门"
        ],
        "crimson_standing_sign": [
            "绯红告示牌"
        ],
        "warped_standing_sign": [
            "扭曲告示牌"
        ],
        "crimson_wall_sign": [
            "绯红告示牌"
        ],
        "warped_wall_sign": [
            "扭曲告示牌"
        ],
        "crimson_stairs": [
            "绯红阶梯"
        ],
        "warped_stairs": [
            "扭曲阶梯"
        ],
        "crimson_fence": [
            "绯红围墙"
        ],
        "warped_fence": [
            "扭曲围墙"
        ],
        "crimson_fence_gate": [
            "绯红围墙大门"
        ],
        "warped_fence_gate": [
            "扭曲围墙大门"
        ],
        "crimson_button": [
            "绯红按钮"
        ],
        "warped_button": [
            "扭曲按钮"
        ],
        "crimson_pressure_plate": [
            "绯红压力板"
        ],
        "warped_pressure_plate": [
            "扭曲压力板"
        ],
        "crimson_slab": [
            "绯红台阶"
        ],
        "warped_slab": [
            "扭曲台阶"
        ],
        "crimson_double_slab": [
            "绯红台阶"
        ],
        "warped_double_slab": [
            "扭曲台阶"
        ],
        "shroomlight": [
            "菌光体"
        ],
        "crimson_nylium": [
            "绯红菌岩"
        ],
        "warped_nylium": [
            "扭曲菌岩"
        ],
        "basalt": [
            "玄武岩"
        ],
        "polished_basalt": [
            "平滑玄武岩"
        ],
        "blackstone": [
            "黑石"
        ],
        "polished_blackstone_bricks": [
            "磨制黑石砖"
        ],
        "cracked_polished_blackstone_bricks": [
            "裂磨制黑石砖"
        ],
        "polished_blackstone_brick_stairs": [
            "磨制黑石砖块阶梯"
        ],
        "blackstone_stairs": [
            "黑石阶梯"
        ],
        "blackstone_wall": [
            "黑石墙"
        ],
        "polished_blackstone_brick_wall": [
            "磨制黑石砖墙"
        ],
        "chiseled_polished_blackstone": [
            "錾制磨制黑石"
        ],
        "gilded_blackstone": [
            "镀金黑石"
        ],
        "blackstone_slab": [
            "黑石台阶"
        ],
        "polished_blackstone_brick_slab": [
            "磨制黑石砖块台阶"
        ],
        "chain": [
            "链"
        ],
        "soul_soil": [
            "灵魂土壤"
        ],
        "soul_fire": [
            "灵魂火"
        ],
        "polished_blackstone": [
            "磨制黑石"
        ],
        "polished_blackstone_stairs": [
            "磨制黑石阶梯"
        ],
        "polished_blackstone_slab": [
            "磨制黑石台阶"
        ],
        "polished_blackstone_pressure_plate": [
            "磨制黑石压力板"
        ],
        "polished_blackstone_button": [
            "磨制黑石按钮"
        ],
        "polished_blackstone_wall": [
            "磨制黑石墙"
        ],
        "soul_campfire": [
            "灵魂营火"
        ],
        "chiseled_nether_bricks": [
            "錾制地狱砖"
        ],
        "cracked_nether_bricks": [
            "裂地狱砖"
        ],
        "quartz_bricks": [
            "石英砖"
        ],
        "trapped_chest": [
            "陷阱箱"
        ],
        "shulkerBoxWhite": [
            "白色潜匿之贝箱子"
        ],
        "shulkerBoxOrange": [
            "橙色潜匿之贝箱子"
        ],
        "shulkerBoxMagenta": [
            "品红色潜匿之贝箱子"
        ],
        "shulkerBoxLightBlue": [
            "淡蓝色潜匿之贝箱子"
        ],
        "shulkerBoxYellow": [
            "黄色潜匿之贝箱子"
        ],
        "shulkerBoxLime": [
            "黄绿色潜匿之贝箱子"
        ],
        "shulkerBoxPink": [
            "粉红色潜匿之贝箱子"
        ],
        "shulkerBoxGray": [
            "灰色潜匿之贝箱子"
        ],
        "shulkerBoxSilver": [
            "淡灰色潜匿之贝箱子"
        ],
        "shulkerBoxCyan": [
            "青色潜匿之贝箱子"
        ],
        "shulkerBoxPurple": [
            "紫色潜匿之贝箱子"
        ],
        "shulkerBoxBlue": [
            "蓝色潜匿之贝箱子"
        ],
        "shulkerBoxBrown": [
            "棕色潜匿之贝箱子"
        ],
        "shulkerBoxGreen": [
            "绿色潜匿之贝箱子"
        ],
        "shulkerBoxRed": [
            "红色潜匿之贝箱子"
        ],
        "shulkerBoxBlack": [
            "黑色潜匿之贝箱子"
        ],
        "shulkerBox": [
            "潜匿之贝箱子"
        ],
        "chorus_flower": [
            "共鸣花"
        ],
        "chorus_plant": [
            "共鸣植物"
        ],
        "stained_glass": [
            "白色玻璃",
            "白色玻璃",
            "橙色玻璃",
            "品红色玻璃",
            "淡蓝色玻璃",
            "黄色玻璃",
            "黄绿色玻璃",
            "粉红色玻璃",
            "灰色玻璃",
            "淡灰色玻璃",
            "青色玻璃",
            "紫色玻璃",
            "蓝色玻璃",
            "棕色玻璃",
            "绿色玻璃",
            "红色玻璃",
            "黑色玻璃"
        ],
        "stained_glass_pane": [
            "白色玻璃板",
            "白色玻璃板",
            "橙色玻璃板",
            "品红色玻璃板",
            "淡蓝色玻璃板",
            "黄色玻璃板",
            "黄绿色玻璃板",
            "粉红色玻璃板",
            "灰色玻璃板",
            "淡灰色玻璃板",
            "青色玻璃板",
            "紫色玻璃板",
            "蓝色玻璃板",
            "棕色玻璃板",
            "绿色玻璃板",
            "红色玻璃板",
            "黑色玻璃板"
        ],
        "clay": [
            "粘土块"
        ],
        "hardened_clay": [
            "陶瓦"
        ],
        "stained_hardened_clay": [
            "陶瓦",
            "白色陶瓦",
            "橙色陶瓦",
            "品红色陶瓦",
            "淡蓝色陶瓦",
            "黄色陶瓦",
            "黄绿色陶瓦",
            "粉红色陶瓦",
            "灰色陶瓦",
            "淡灰色陶瓦",
            "青色陶瓦",
            "紫色陶瓦",
            "蓝色陶瓦",
            "棕色陶瓦",
            "绿色陶瓦",
            "红色陶瓦",
            "黑色陶瓦"
        ],
        "structure_block": [
            "建筑方块"
        ],
        "structure_void": [
            "建筑空隙"
        ],
        "wool": [
            "羊毛",
            "白色羊毛",
            "橙色羊毛",
            "品红色羊毛",
            "淡蓝色羊毛",
            "黄色羊毛",
            "黄绿色羊毛",
            "粉红色羊毛",
            "灰色羊毛",
            "淡灰色羊毛",
            "青色羊毛",
            "紫色羊毛",
            "蓝色羊毛",
            "棕色羊毛",
            "绿色羊毛",
            "红色羊毛",
            "黑色羊毛"
        ],
        "cobblestone_wall": [
            "圆石墙",
            "圆石墙",
            "苔石墙",
            "花岗岩墙",
            "闪长岩墙",
            "安山岩墙",
            "沙石墙",
            "砖墙",
            "石砖墙",
            "苔石砖墙",
            "末地石砖墙",
            "地狱砖墙",
            "海晶石墙",
            "红沙石墙",
            "红色地狱砖墙"
        ],
        "cocoa": [
            "可可"
        ],
        "command_block": [
            "命令块"
        ],
        "composter": [
            "堆肥箱"
        ],
        "light_block": [
            "光明方块"
        ],
        "repeating_command_block": [
            "重复命令块"
        ],
        "chain_command_block": [
            "链命令块"
        ],
        "darkOakFence": [
            "深色橡木围墙"
        ],
        "dark_oak_fence_gate": [
            "深色橡木围墙门"
        ],
        "daylight_detector": [
            "阳光传感器"
        ],
        "deadbush": [
            "枯死的灌木"
        ],
        "detector_rail": [
            "探测铁轨"
        ],
        "dirt": [
            "泥土",
            "泥土",
            "砂土"
        ],
        "podzol": [
            "灰化土"
        ],
        "purpur_block": [
            "紫珀方块",
            "紫珀方块",
            "錾制紫珀",
            "紫珀柱子"
        ],
        "dispenser": [
            "发射器"
        ],
        "doorWood": [
            "木门"
        ],
        "double_plant": [
            "植物",
            "向日葵",
            "丁香",
            "高草丛",
            "大型蕨",
            "玫瑰丛",
            "牡丹"
        ],
        "dragon_egg": [
            "龙蛋"
        ],
        "dropper": [
            "投掷器"
        ],
        "enchanting_table": [
            "附魔台"
        ],
        "enderChest": [
            "末影箱"
        ],
        "end_portal_frame": [
            "末地传送门"
        ],
        "farmland": [
            "农田"
        ],
        "fletching_table": [
            "造箭台"
        ],
        "fence": [
            "橡木围墙"
        ],
        "fence_gate": [
            "橡木围墙门"
        ],
        "iron_bars": [
            "铁栏杆"
        ],
        "fire": [
            "火"
        ],
        "yellow_flower": [
            "花",
            "蒲公英"
        ],
        "red_flower": [
            "花",
            "玫瑰",
            "兰花",
            "绒球葱",
            "茜草花",
            "红色郁金香",
            "橙色郁金香",
            "白色郁金香",
            "粉红色郁金香",
            "滨菊",
            "矢车菊",
            "幽谷百合"
        ],
        "wither_rose": [
            "枯萎的玫瑰"
        ],
        "furnace": [
            "熔炉"
        ],
        "glass": [
            "玻璃"
        ],
        "golden_rail": [
            "动力铁轨"
        ],
        "grass": [
            "草方块"
        ],
        "grass_path": [
            "绿茵小道"
        ],
        "gravel": [
            "砂砾"
        ],
        "hay_block": [
            "干草捆"
        ],
        "netherrack": [
            "地狱岩"
        ],
        "soul_sand": [
            "灵魂沙"
        ],
        "hopper": [
            "漏斗"
        ],
        "ice": [
            "冰"
        ],
        "packed_ice": [
            "浮冰"
        ],
        "blue_ice": [
            "蓝色冰"
        ],
        "iron_trapdoor": [
            "铁陷阱门"
        ],
        "jukebox": [
            "唱片机"
        ],
        "jungleFence": [
            "丛林木围墙"
        ],
        "jungle_fence_gate": [
            "丛林木围墙门"
        ],
        "ladder": [
            "梯子"
        ],
        "flowing_lava": [
            "岩浆"
        ],
        "leaves2": [
            "金合欢树叶",
            "金合欢树叶",
            "深色像树叶"
        ],
        "lever": [
            "拉杆"
        ],
        "glowstone": [
            "萤石"
        ],
        "lit_pumpkin": [
            "南瓜灯"
        ],
        "lockedchest": [
            "上锁的箱子"
        ],
        "log2": [
            "金合欢原木",
            "金合欢原木",
            "深色橡树原木"
        ],
        "log": [
            "原木",
            "橡树原木",
            "云杉原木",
            "桦树原木",
            "丛林原木"
        ],
        "magma": [
            "岩浆方块"
        ],
        "melon_block": [
            "西瓜"
        ],
        "mob_spawner": [
            "刷怪箱"
        ],
        "monster_egg": [
            "怪物石头",
            "怪物石头",
            "怪物圆石",
            "怪物石砖",
            "怪物苔石砖",
            "怪物裂石砖",
            "怪物錾制石砖"
        ],
        "mushroom": [
            "蘑菇"
        ],
        "noteblock": [
            "音符盒"
        ],
        "mycelium": [
            "菌丝"
        ],
        "nether_brick": [
            "地狱砖块"
        ],
        "red_nether_brick": [
            "红色地狱砖"
        ],
        "nether_brick_fence": [
            "地狱砖围墙"
        ],
        "quartz_ore": [
            "地狱石英矿石"
        ],
        "netherreactor": [
            "地狱反应核"
        ],
        "nether_wart_block": [
            "地狱疣方块"
        ],
        "warped_wart_block": [
            "扭曲疣方块"
        ],
        "unlit_redstone_torch": [
            "红石火把"
        ],
        "redstone_torch": [
            "红石火把"
        ],
        "soul_torch": [
            "灵魂火把"
        ],
        "obsidian": [
            "黑曜石"
        ],
        "coal_ore": [
            "煤矿石"
        ],
        "diamond_ore": [
            "钻石矿石"
        ],
        "emerald_ore": [
            "绿宝石矿石"
        ],
        "gold_ore": [
            "金矿石"
        ],
        "iron_ore": [
            "铁矿石"
        ],
        "lapis_ore": [
            "青金石矿石"
        ],
        "redstone_ore": [
            "红石矿石"
        ],
        "oreRuby": [
            "红宝石矿石"
        ],
        "observer": [
            "观察者"
        ],
        "piston": [
            "活塞"
        ],
        "sticky_piston": [
            "粘性活塞"
        ],
        "portal": [
            "传送门"
        ],
        "potatoes": [
            "马铃薯"
        ],
        "stone_pressure_plate": [
            "石质压力板"
        ],
        "wooden_pressure_plate": [
            "压力板"
        ],
        "acacia_pressure_plate": [
            "金合欢压力板"
        ],
        "birch_pressure_plate": [
            "桦树压力板"
        ],
        "dark_oak_pressure_plate": [
            "深色橡树压力板"
        ],
        "jungle_pressure_plate": [
            "丛林压力板"
        ],
        "spruce_pressure_plate": [
            "云杉压力板"
        ],
        "prismarine": [
            "海晶石",
            "海晶石",
            "海晶石砖",
            "暗海晶石"
        ],
        "pumpkin": [
            "南瓜"
        ],
        "pumpkin_stem": [
            "南瓜梗"
        ],
        "quartz_block": [
            "石英块",
            "石英块",
            "錾制石英块",
            "竖纹石英块",
            "平滑石英块"
        ],
        "rail": [
            "铁轨"
        ],
        "red_mushroom": [
            "红蘑菇"
        ],
        "crimson_fungus": [
            "绯红真菌"
        ],
        "warped_fungus": [
            "扭曲真菌"
        ],
        "red_mushroom_block": [
            "红蘑菇方块"
        ],
        "red_sandstone": [
            "红沙石",
            "红沙石",
            "錾制红沙石",
            "切割红沙石",
            "平滑红沙石"
        ],
        "redstone_wire": [
            "红石粉"
        ],
        "redstone_lamp": [
            "红石灯"
        ],
        "sand": [
            "沙子",
            "沙子",
            "红沙"
        ],
        "sandstone": [
            "沙石",
            "沙石",
            "錾制沙石",
            "切割沙石",
            "平滑沙石"
        ],
        "sapling": [
            "橡树苗",
            "橡树苗",
            "云杉树苗",
            "桦树苗",
            "丛林树苗",
            "金合欢树苗",
            "深色橡树苗"
        ],
        "seaLantern": [
            "海晶灯"
        ],
        "standing_sign": [
            "告示牌"
        ],
        "spruce_standing_sign": [
            "云杉木告示牌"
        ],
        "birch_standing_sign": [
            "桦木告示牌"
        ],
        "jungle_standing_sign": [
            "丛林告示牌"
        ],
        "acacia_standing_sign": [
            "金合欢木告示牌"
        ],
        "darkoak_standing_sign": [
            "深色橡木告示牌"
        ],
        "slime": [
            "粘液块"
        ],
        "snow": [
            "雪"
        ],
        "sponge": [
            "海绵",
            "海绵",
            "湿海绵"
        ],
        "spruceFence": [
            "云杉围墙"
        ],
        "spruce_fence_gate": [
            "云杉围墙门"
        ],
        "brick_stairs": [
            "砖块阶梯"
        ],
        "nether_brick_stairs": [
            "地狱砖阶梯"
        ],
        "quartz_stairs": [
            "石英阶梯"
        ],
        "smooth_quartz_stairs": [
            "平滑石英阶梯"
        ],
        "red_sandstone_stairs": [
            "红沙石阶梯"
        ],
        "sandstone_stairs": [
            "沙石阶梯"
        ],
        "stone_stairs": [
            "石阶梯"
        ],
        "normal_stone_stairs": [
            "石质阶梯"
        ],
        "stone_brick_stairs": [
            "石砖阶梯"
        ],
        "oak_stairs": [
            "橡木阶梯"
        ],
        "acacia_stairs": [
            "金合欢木阶梯"
        ],
        "birch_stairs": [
            "桦木阶梯"
        ],
        "dark_oak_stairs": [
            "深色橡木阶梯"
        ],
        "jungle_stairs": [
            "丛林木阶梯"
        ],
        "spruce_stairs": [
            "云杉木阶梯"
        ],
        "purpur_stairs": [
            "紫珀阶梯"
        ],
        "prismarine_stairs": [
            "海晶石阶梯"
        ],
        "dark_prismarine_stairs": [
            "暗海晶石阶梯"
        ],
        "prismarine_bricks_stairs": [
            "海晶石砖阶梯"
        ],
        "granite_stairs": [
            "花岗岩阶梯"
        ],
        "diorite_stairs": [
            "闪长岩阶梯"
        ],
        "andesite_stairs": [
            "安山岩阶梯"
        ],
        "polished_granite_stairs": [
            "磨制花岗岩阶梯"
        ],
        "polished_diorite_stairs": [
            "磨制闪长岩阶梯"
        ],
        "polished_andesite_stairs": [
            "磨制安山岩阶梯"
        ],
        "mossy_stone_brick_stairs": [
            "苔石砖阶梯"
        ],
        "smooth_red_sandstone_stairs": [
            "平滑红沙石阶梯"
        ],
        "smooth_sandstone_stairs": [
            "平滑沙石阶梯"
        ],
        "end_brick_stairs": [
            "末地石砖阶梯"
        ],
        "mossy_cobblestone_stairs": [
            "苔圆石阶梯"
        ],
        "red_nether_brick_stairs": [
            "红色地狱砖阶梯"
        ],
        "smooth_stone": [
            "平滑石"
        ],
        "standing_banner": [
            "旗帜",
            "黑色旗帜",
            "红色旗帜",
            "绿色旗帜",
            "棕色旗帜",
            "蓝色旗帜",
            "紫色旗帜",
            "青色旗帜",
            "淡灰色旗帜",
            "灰色旗帜",
            "粉红色旗帜",
            "黄绿色旗帜",
            "黄色旗帜",
            "淡蓝色旗帜",
            "品红色旗帜",
            "橙色旗帜",
            "旗帜"
        ],
        "stone": [
            "石头",
            "石头",
            "花岗岩",
            "磨制花岗岩",
            "闪长岩",
            "磨制闪长岩",
            "安山岩",
            "磨制安山岩"
        ],
        "cobblestone": [
            "圆石"
        ],
        "stonebrick": [
            "石砖",
            "石砖",
            "苔石砖",
            "錾制石砖"
        ],
        "stonecutter": [
            "切石机"
        ],
        "stonecutter_block": [
            "切石机"
        ],
        "mossy_cobblestone": [
            "苔圆石"
        ],
        "double_stone_slab": [
            "石台阶",
            "石台阶",
            "沙石台阶",
            "木台阶",
            "圆石台阶",
            "砖台阶",
            "石砖台阶",
            "石英台阶",
            "地狱砖台阶"
        ],
        "stone_slab": [
            "石台阶",
            "平滑石台阶",
            "沙石台阶",
            "木台阶",
            "圆石台阶",
            "砖台阶",
            "石砖台阶",
            "石英台阶",
            "地狱砖台阶"
        ],
        "double_stone_slab2": [
            "红沙石台阶",
            "红沙石台阶"
        ],
        "stone_slab2": [
            "红沙石台阶",
            "红沙石台阶",
            "紫珀台阶",
            "海晶石台阶",
            "海晶石砖台阶",
            "暗海晶石台阶",
            "苔圆石台阶",
            "平滑沙石台阶",
            "红色地狱砖台阶"
        ],
        "stone_slab3": [
            "末地石砖台阶",
            "末地石砖台阶",
            "平滑红沙石台阶",
            "磨制安山岩台阶",
            "安山岩台阶",
            "闪长岩台阶",
            "磨制闪长岩台阶",
            "花岗岩台阶",
            "磨制花岗岩台阶"
        ],
        "stone_slab4": [
            "苔石砖台阶",
            "苔石砖台阶",
            "平滑石英台阶",
            "石台阶",
            "切割沙石台阶",
            "切割红沙石台阶"
        ],
        "coral_block": [
            "管珊瑚区块",
            "管珊瑚区块",
            "脑珊瑚区块",
            "泡珊瑚区块",
            "火珊瑚区块",
            "角珊瑚区块",
            "死亡管珊瑚区块",
            "死亡脑珊瑚区块",
            "死亡泡珊瑚区块",
            "死亡火珊瑚区块",
            "死亡角珊瑚区块"
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
            "海泡菜"
        ],
        "turtle_egg": [
            "海龟蛋"
        ],
        "coral": [
            "管珊瑚",
            "管珊瑚",
            "脑珊瑚",
            "泡珊瑚",
            "火珊瑚",
            "角珊瑚",
            "死亡管珊瑚",
            "死亡脑珊瑚",
            "死亡泡珊瑚",
            "死亡火珊瑚",
            "死亡角珊瑚"
        ],
        "coral_fan": [
            "管珊瑚扇",
            "管珊瑚扇",
            "脑珊瑚扇",
            "泡珊瑚扇",
            "火珊瑚扇",
            "角珊瑚扇"
        ],
        "coral_fan_dead": [
            "死亡管珊瑚扇",
            "死亡管珊瑚扇",
            "死亡脑珊瑚扇",
            "死亡泡珊瑚扇",
            "死亡火珊瑚扇",
            "死亡角珊瑚扇"
        ],
        "glass_pane": [
            "玻璃板"
        ],
        "tnt": [
            "TNT"
        ],
        "snow_layer": [
            "顶层雪"
        ],
        "torch": [
            "火把"
        ],
        "trapdoor": [
            "橡树活板门"
        ],
        "acacia_trapdoor": [
            "金合欢活板门"
        ],
        "birch_trapdoor": [
            "桦树活板门"
        ],
        "dark_oak_trapdoor": [
            "深色橡树活板门"
        ],
        "jungle_trapdoor": [
            "丛林活板门"
        ],
        "spruce_trapdoor": [
            "云杉活板门"
        ],
        "tripWire": [
            "绊线"
        ],
        "tripwire_hook": [
            "绊线钩"
        ],
        "vine": [
            "藤蔓"
        ],
        "weeping_vines": [
            "垂泪藤"
        ],
        "twisting_vines": [
            "缠怨藤"
        ],
        "flowing_water": [
            "水"
        ],
        "water": [
            "水"
        ],
        "waterlily": [
            "睡莲"
        ],
        "web": [
            "蜘蛛网"
        ],
        "heavy_weighted_pressure_plate": [
            "重力压力板（重型）"
        ],
        "light_weighted_pressure_plate": [
            "重力压力板（轻型）"
        ],
        "end_stone": [
            "末地石"
        ],
        "end_bricks": [
            "末地石砖"
        ],
        "planks": [
            "木板",
            "橡木木板",
            "云杉树木板",
            "桦木板",
            "丛林树木板",
            "金合欢木板",
            "深色橡木木板"
        ],
        "wooden_slab": [
            "木台阶",
            "橡木台阶",
            "云杉木台阶",
            "桦木台阶",
            "丛林木台阶",
            "金合欢木台阶",
            "深色橡木台阶"
        ],
        "carpet": [
            "地毯",
            "黑色地毯",
            "红色地毯",
            "绿色地毯",
            "棕色地毯",
            "蓝色地毯",
            "紫色地毯",
            "青色地毯",
            "淡灰色地毯",
            "灰色地毯",
            "粉红色地毯",
            "黄绿色地毯",
            "黄色地毯",
            "淡蓝色地毯",
            "品红色地毯",
            "橙色地毯",
            "白色地毯"
        ],
        "crafting_table": [
            "工作台"
        ],
        "white_glazed_terracotta": [
            "白色带釉陶瓦",
            "白色带釉陶瓦"
        ],
        "orange_glazed_terracotta": [
            "橙色带釉陶瓦",
            "橙色带釉陶瓦"
        ],
        "magenta_glazed_terracotta": [
            "品红色带釉陶瓦",
            "品红色带釉陶瓦"
        ],
        "light_blue_glazed_terracotta": [
            "淡蓝色带釉陶瓦",
            "淡蓝色带釉陶瓦"
        ],
        "yellow_glazed_terracotta": [
            "黄色带釉陶瓦",
            "黄色带釉陶瓦"
        ],
        "lime_glazed_terracotta": [
            "黄绿色带釉陶瓦",
            "黄绿色带釉陶瓦"
        ],
        "pink_glazed_terracotta": [
            "粉红色带釉陶瓦",
            "粉红色带釉陶瓦"
        ],
        "gray_glazed_terracotta": [
            "灰色带釉陶瓦",
            "灰色带釉陶瓦"
        ],
        "silver_glazed_terracotta": [
            "淡灰色带釉陶瓦",
            "淡灰色带釉陶瓦"
        ],
        "cyan_glazed_terracotta": [
            "青色带釉陶瓦",
            "青色带釉陶瓦"
        ],
        "purple_glazed_terracotta": [
            "紫色带釉陶瓦",
            "紫色带釉陶瓦"
        ],
        "blue_glazed_terracotta": [
            "蓝色带釉陶瓦",
            "蓝色带釉陶瓦"
        ],
        "brown_glazed_terracotta": [
            "棕色带釉陶瓦",
            "棕色带釉陶瓦"
        ],
        "green_glazed_terracotta": [
            "绿色带釉陶瓦",
            "绿色带釉陶瓦"
        ],
        "red_glazed_terracotta": [
            "红色带釉陶瓦",
            "红色带釉陶瓦"
        ],
        "black_glazed_terracotta": [
            "黑色带釉陶瓦",
            "黑色带釉陶瓦"
        ],
        "concrete": [
            "白色混凝土",
            "白色混凝土",
            "橙色混凝土",
            "品红色混凝土",
            "淡蓝色混凝土",
            "黄色混凝土",
            "黄绿色混凝土",
            "粉红色混凝土",
            "灰色混凝土",
            "淡灰色混凝土",
            "青色混凝土",
            "紫色混凝土",
            "蓝色混凝土",
            "棕色混凝土",
            "绿色混凝土",
            "红色混凝土",
            "黑色混凝土"
        ],
        "glazedTerracottaWhite": [
            "白色带釉陶瓦"
        ],
        "glazedTerracottaOrange": [
            "橙色带釉陶瓦"
        ],
        "glazedTerracottaMagenta": [
            "品红色带釉陶瓦"
        ],
        "glazedTerracottaLightBlue": [
            "淡蓝色带釉陶瓦"
        ],
        "glazedTerracottaYellow": [
            "黄色带釉陶瓦"
        ],
        "glazedTerracottaLime": [
            "黄绿色带釉陶瓦"
        ],
        "glazedTerracottaPink": [
            "粉红色带釉陶瓦"
        ],
        "glazedTerracottaGray": [
            "灰色带釉陶瓦"
        ],
        "glazedTerracottaSilver": [
            "淡灰色带釉陶瓦"
        ],
        "glazedTerracottaCyan": [
            "青色带釉陶瓦"
        ],
        "glazedTerracottaPurple": [
            "紫色带釉陶瓦"
        ],
        "glazedTerracottaBlue": [
            "蓝色带釉陶瓦"
        ],
        "glazedTerracottaBrown": [
            "棕色带釉陶瓦"
        ],
        "glazedTerracottaGreen": [
            "绿色带釉陶瓦"
        ],
        "glazedTerracottaRed": [
            "红色带釉陶瓦"
        ],
        "glazedTerracottaBlack": [
            "黑色带釉陶瓦"
        ],
        "concretePowder": [
            "白色混凝土粉末",
            "白色混凝土粉末",
            "橙色混凝土粉末",
            "品红色混凝土粉末",
            "淡蓝色混凝土粉末",
            "黄色混凝土粉末",
            "黄绿色混凝土粉末",
            "粉红色混凝土粉末",
            "灰色混凝土粉末",
            "淡灰色混凝土粉末",
            "青色混凝土粉末",
            "紫色混凝土粉末",
            "蓝色混凝土粉末",
            "棕色混凝土粉末",
            "绿色混凝土粉末",
            "红色混凝土粉末",
            "黑色混凝土粉末"
        ],
        "stripped_spruce_log": [
            "去皮云杉原木"
        ],
        "stripped_dark_oak_log": [
            "去皮深色橡树原木"
        ],
        "stripped_birch_log": [
            "去皮桦树原木"
        ],
        "stripped_jungle_log": [
            "去皮丛林原木"
        ],
        "stripped_oak_log": [
            "去皮橡树原木"
        ],
        "stripped_acacia_log": [
            "去皮金合欢原木"
        ],
        "bamboo": [
            "竹子"
        ],
        "scaffolding": [
            "脚手架"
        ],
        "grindstone": [
            "磨石"
        ],
        "cartography_table": [
            "制图台"
        ],
        "lantern": [
            "灯"
        ],
        "soul_lantern": [
            "灵魂灯"
        ],
        "smoker": [
            "火炉"
        ],
        "smithing_table": [
            "锻造台"
        ],
        "barrel": [
            "木桶"
        ],
        "campfire": [
            "营火"
        ],
        "loom": [
            "织布机"
        ],
        "lectern": [
            "讲台"
        ],
        "sweet_berry_bush": [
            "甜莓灌木丛"
        ],
        "wood": [
            "橡木",
            "橡木",
            "云杉木",
            "桦木",
            "丛林木",
            "金合欢木",
            "深色橡木",
            null,
            null,
            "条形橡木",
            "条形云杉木",
            "条形桦木",
            "条形丛林木",
            "条形金合欢木",
            "条形深色橡木"
        ],
        "netherite_block": [
            "下界合金块"
        ],
        "ancient_debris": [
            "远古残骸"
        ],
        "nether_gold_ore": [
            "地狱金矿石"
        ],
        "respawn_anchor": [
            "重生锚"
        ],
        "crying_obsidian": [
            "哭泣的黑曜石"
        ]
    }
};
freeze(lang_data);
export = lang_data;
