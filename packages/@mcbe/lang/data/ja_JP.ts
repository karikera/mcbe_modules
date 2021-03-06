
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
    id: "ja_JP" as LangId,
    commands:{
        "ability_description": "プレイヤーの能力を設定する。",
        "ability_noability": "アビリティ '%1$s' を指定できません",
        "ability_granted": "アビリティ '%1$s' が付与されました",
        "ability_revoked": "アビリティ '%1$s' が取り消されました",
        "ability_success": "アビリティが更新されました",
        "achievement_alreadyHave": "プレイヤー %1$s は既に %2$s の実績を獲得しています",
        "achievement_description": "プレイヤーに実績を付与またはプレイヤーから実績をはく奪します",
        "achievement_dontHave": "プレイヤー %1$s は %2$s の実績を獲得していません",
        "achievement_give_success_all": "%1$s にすべての実績を与えました",
        "achievement_give_success_one": "%1$s に %2$s の統計情報を与えました",
        "achievement_statTooLow": "プレイヤー %1$s には %2$s の統計情報はありません",
        "achievement_take_success_all": "%1$s からすべての実績を獲得しました",
        "achievement_take_success_one": "%2$s から %1$s の統計情報を獲得しました",
        "achievement_unknownAchievement": "'%1$s' は不明な実績または統計情報です",
        "agent_attack_success": "エージェントの攻撃アクション成功",
        "agent_attack_failed": "エージェントの攻撃アクション失敗",
        "agent_collect_success": "エージェントの回収アクション成功",
        "agent_collect_failed": "エージェントの回収アクション失敗",
        "agent_createagent_success": "エージェントの作成完了",
        "agent_createagent_failed": "エージェントを作成できません",
        "agent_destroy_success": "エージェントがブロックを破壊しました",
        "agent_destroy_failed": "エージェントの破壊アクション失敗",
        "agent_detect_success": "エージェントの検知アクション成功",
        "agent_detect_failed": "エージェントの検知アクション失敗",
        "agent_detectredstone_success": "エージェントの detectredstone 成功",
        "agent_detectredstone_failed": "エージェントの detectredstone 失敗",
        "agent_drop_success": "エージェントの落とすアクション成功",
        "agent_drop_failed": "エージェントの落とすアクション失敗",
        "agent_dropall_success": "エージェントの dropall 成功",
        "agent_dropall_failed": "エージェントの dropall 失敗",
        "agent_getitemcount_success": "エージェントの getitemcount 成功",
        "agent_getitemcount_failed": "エージェントの getitemcount 失敗",
        "agent_getitemspace_success": "エージェントの getitemspace 成功",
        "agent_getitemspace_failed": "エージェントの getitemspace 失敗",
        "agent_getitemdetail_success": "エージェントの getitemdetail 成功",
        "agent_getitemdetail_failed": "エージェントの getitemdetail 失敗",
        "agent_getposition_success": "エージェントが位置の取得を完了しました",
        "agent_getposition_failed": "エージェントが位置の取得に失敗しました",
        "agent_inspect_success": "エージェントの検査アクション成功",
        "agent_inspect_failed": "エージェントの検査アクション失敗",
        "agent_inspectdata_success": "エージェントはデータの検査に成功しました",
        "agent_inspectdata_failed": "エージェントはデータの検査に失敗しました",
        "agent_move_success": "エージェントの移動成功",
        "agent_move_failed": "エージェントを動かせません",
        "agent_outofrange": "コマンドを与えられません。エージェントが範囲外です",
        "agent_place_success": "エージェントの置くアクション成功",
        "agent_place_failed": "エージェントの置くアクション失敗",
        "agent_setitem_success": "エージェントがアイテムの設定を完了しました",
        "agent_setitem_failed": "エージェントがアイテムの設定に失敗しました",
        "agent_turn_success": "エージェントの向きの変更成功",
        "agent_turn_failed": "エージェントの向きを変えられません",
        "agent_till_success": "エージェントの耕すアクション成功",
        "agent_till_failed": "エージェントの耕すアクション失敗",
        "agent_tpagent_description": "エージェントをテレポートします。",
        "agent_tpagent_success": "エージェントのテレポート完了",
        "agent_tpagent_failed": "エージェントのテレポート失敗",
        "agent_transfer_success": "エージェントの転送成功",
        "agent_transfer_failed": "エージェントの転送失敗",
        "always_day": "昼夜サイクル %1$s",
        "always_day_locked": "昼夜サイクルが停止しました",
        "always_day_unlocked": "昼夜サイクルが再開しました",
        "ban_description": "プレイヤーを BAN 一覧に追加します。",
        "autocomplete_a": "すべてのプレイヤー",
        "autocomplete_c": "自分の Agent",
        "autocomplete_e": "すべてのエンティティ",
        "autocomplete_p": "最も近いプレイヤー",
        "autocomplete_r": "ランダムなプレイヤー",
        "autocomplete_s": "自分自身",
        "autocomplete_v": "すべての Agent",
        "ban_failed": "プレイヤー %1$s をアクセス禁止にできませんでした",
        "ban_success": "プレイヤー %1$s をアクセス禁止にしました",
        "banip_description": "IP アドレスを BAN 一覧に追加します",
        "banip_invalid": "無効な IP アドレスが入力されたか、プレイヤーがオンラインになっていません",
        "banip_success": "IP アドレス %1$s をアクセス禁止にしました",
        "banip_success_players": "%2$s に属する IP アドレス %1$s をアクセス禁止にしました",
        "banlist_ips": "%1$d の IP アドレスがアクセスを禁止されています:",
        "banlist_players": "全部で %1$d 人のプレイヤーがアクセスを禁止されています:",
        "blockdata_description": "ブロックのデータ タグを変更します",
        "blockdata_placeFailed": "ここにはブロックを置けません",
        "blockdata_destroyFailed": "ここを掘ることはできません",
        "blockdata_failed": "データ タグは変更されませんでした: %1$s",
        "blockdata_notValid": "対象のブロックはデータを持たないブロックです",
        "blockdata_outOfWorld": "世界の範囲外のブロックは変更できません",
        "blockdata_success": "ブロックの情報を更新しました: %1$s",
        "blockdata_tagError": "データ タグの解析に失敗しました: %1$s",
        "bossbar_add_success": "カスタム ボスバー [%1$s] を作成しました",
        "bossbar_add_failure_invalid": "ボスバーの ID が無効です。ID は namespace:id または id (デフォルトは minecraft namespace) の形式である必要があります。",
        "bossbar_add_failure_exists": "'%1$s' という ID のボスバーは既に存在します",
        "bossbar_description": "ボス バーを作成および変更します",
        "bossbar_get_max": "カスタム ボスバー [%1$s] は %2$d の最大値を含みます",
        "bossbar_get_players": "カスタム ボスバー [%1$s] は、現在オンラインのプレイヤー %2$s 人を含みます: %3$s",
        "bossbar_get_players_none": "カスタム ボスバー [%1$s] に含まれる現在オンラインのプレイヤーは存在しません",
        "bossbar_get_players_one": "カスタム ボスバー [%1$s] は、現在オンラインのプレイヤー 1 人を含みます: %2$s",
        "bossbar_get_value": "カスタム ボスバー [%1$s] は %2$d の値を含みます",
        "bossbar_get_visible_true": "カスタム ボスバー [%1$s] は現在表示されています",
        "bossbar_get_visible_false": "カスタム ボスバー [%1$s] は現在非表示です",
        "bossbar_list": "%1$s 個のカスタム ボスバーが有効です: %2$s",
        "bossbar_list_none": "有効なカスタム ボスバーはありません",
        "bossbar_list_one": "1 個のカスタム ボスバーが有効です: %1$s",
        "bossbar_notFound": "'%1$s' という ID のボスバーは存在しません",
        "bossbar_remove": "カスタム ボスバー [%1$s] を削除しました",
        "change_setting_description": "専用サーバーの動作を止めずに、サーバーの設定を変更する。",
        "change_setting_success": "%1$s が変更されました",
        "chunkinfo_compiled": "詳細が変更されました。",
        "chunkinfo_data": "最初の 64 の頂点: %1$s",
        "chunkinfo_empty": "詳細は空です。",
        "chunkinfo_hasLayers": "チャンクにある層: %1$s",
        "chunkinfo_hasNoRenderableLayers": "詳細に描画可能なレイヤーがありません",
        "chunkinfo_isEmpty": "チャンクにある空の層: %1$s",
        "chunkinfo_location": "チャンクの座標: (%1$d, %2$d, %3$d)",
        "chunkinfo_noChunk": "チャンクが %1$d, %2$d, %3$d の位置に存在しません",
        "chunkinfo_notCompiled": "詳細は変更されませんでした。",
        "chunkinfo_notEmpty": "詳細が空ではありません。",
        "chunkinfo_vertices": "%1$s 層のバッファーには %2$d 個の頂点が含まれています",
        "classroommode_description": "教室モードの起動と接続を試みます。",
        "classroommode_success": "教室モードの起動を試みています...",
        "clear_description": "プレイヤーの持ち物にあるアイテムをすべて消去します",
        "clear_failure": "%1$s の持ち物は消去できません",
        "clear_failure_no_items": "%1$s の持ち物にはアイテムがないので消去できません",
        "clear_success": "%1$s の持ち物から %2$d 個のアイテムを削除しました",
        "clear_tagError": "データ タグの解析に失敗しました: %1$s",
        "clear_testing": "%1$s には、条件に一致するアイテムが %2$d 個あります",
        "clearfixedinv_description": "固定された持ち物スロットをすべて削除する。",
        "clearfixedinv_success": "固定された持ち物をクリアしました",
        "clone_description": "1 つの領域から別の領域にブロックを複製する。",
        "clone_failed": "複製したブロックはありません",
        "clone_filtered_error": "フィルターの使用にはフィルター ブロックの指定が必要です",
        "clone_noOverlap": "コピー元とコピー先を重ねることはできません",
        "clone_outOfWorld": "世界の外にあるブロックにはアクセスできません",
        "clone_success": "%1$d 個のブロックを複製しました",
        "clone_tooManyBlocks": "指定した領域にあるブロックが多すぎます (%1$d > %2$d)",
        "closechat_description": "ローカル プレイヤーとのチャット ウィンドウが開いている場合は閉じてください。",
        "closechat_success": "チャットを終了しました",
        "closechat_failure": "チャットが開かれていません",
        "closewebsocket_description": "websocket 接続がある場合、それを終了する。",
        "code_description": "コード ビルダーを起動します。",
        "code_success": "コード ビルダーを起動しました。",
        "compare_failed": "比較元と比較先が同一ではありません",
        "compare_outOfWorld": "世界の外にあるブロックにはアクセスできません",
        "compare_success": "%1$d 個のブロックを比較しました",
        "compare_tooManyBlocks": "指定した領域にあるブロックが多すぎます (%1$d > %2$d)",
        "corruptworld_description": "サーバーに読み込まれた世界を破損させます。",
        "corruptworld_success": "世界の破損が完了しました。",
        "daylock_description": "昼夜サイクルを停止および再開します。",
        "debug_description": "デバッグ セッションを開始/停止します",
        "debug_notStarted": "開始されていないプロファイリングを停止することは出来ません!",
        "debug_start": "デバッグ・プロファイリングを開始しました",
        "debug_stop": "デバッグ プロファイリングが %.2f 秒 (%1$d ティック) 後に停止します",
        "defaultgamemode_description": "デフォルトのゲーム モードを設定します",
        "defaultgamemode_success": "世界のデフォルトのゲームモードを %1$s にしました",
        "deop_description": "プレイヤーからオペレーターのステータスを取り消す。",
        "deop_failed": "除外できません (権限レベルが高すぎます): %s",
        "deop_success": "%s からオペレーター権限を剥奪しました",
        "deop_message": "管理者から降格させられました",
        "difficulty_description": "難易度を設定します",
        "difficulty_usage": "/difficulty <new difficulty>",
        "difficulty_success": "ゲームの難易度を %1$s にしました",
        "downfall_success": "切り替えに成功しました",
        "effect_description": "ステータス効果を追加/除去します",
        "effect_failure_notActive": "効果を受けていないので %2$s から %1$s を除去することができませんでした",
        "effect_failure_notActive_all": "%1$s は効果を受けていないので、除去できませんでした",
        "effect_failure_notAMob": "%1$s に効果を付与することはできません",
        "effect_notFound": "ID  %s というモブのエフェクトはありません",
        "effect_success": "%3$s に %1$s * %2$d を %4$d 秒間与えました",
        "effect_success_removed": "%2$s から %1$s を除去しました",
        "effect_success_removed_all": "%1$s からすべての効果を除去しました",
        "enchant_cantCombine": "%1$s は %2$s と組み合わせることはできません",
        "enchant_invalidLevel": "%1$s はレベル %2$d に対応していません",
        "enchant_cantEnchant": "選択中のエンチャントは対象のアイテムに付加できません: %1$s",
        "enchant_description": "選択中のプレイヤーのアイテムにエンチャントを付与する。",
        "enchant_noItem": "その目標はアイテムを持っていません: %1$s",
        "enchant_notFound": "ID %1$d に該当するエンチャントはありません",
        "enchant_success": "%1$s のエンチャントに成功しました",
        "entitydata_description": "エンティティのデータ タグを変更します",
        "entitydata_failed": "データ タグは変更されませんでした: %1$s",
        "entitydata_noPlayers": "%1$s はプレイヤーのため変更できません",
        "entitydata_success": "エンティティのデータを更新しました: %1$s",
        "entitydata_tagError": "データ タグの解析に失敗しました: %1$s",
        "execute_allInvocationsFailed": "すべての呼び出しに失敗しました: '%1$s'",
        "execute_failed": "'%1$s' を %2$s として実行できませんでした",
        "execute_description": "1 つ以上のエンティティに代わってコマンドを実行します。",
        "fill_description": "領域の一部または全体を指定したブロックで埋める。",
        "fill_failed": "ブロックを設置できません",
        "fill_outOfWorld": "世界の範囲外にブロックを設置することはできません",
        "fill_success": "%1$d 個のブロックで満たしました",
        "fill_tagError": "データ タグの解析に失敗しました: %1$s",
        "fill_tooManyBlocks": "指定した領域にあるブロックが多すぎます (%1$d > %2$d)",
        "fill_replace_auxvalue_invalid": "ブロック %1$s に対する無効なデータ値の置き換え",
        "function_description": "対応する関数ファイルで見つかったコマンドを実行します。",
        "function_functionNameNotFound": "関数 %1$s が見つかりません。",
        "function_invalidCharacters": "タイトル '%s' を持つ関数は無効です。キャラクター '%s' は関数名で使用できません。",
        "function_noEngineVersionSpecified": "関数 %s を実行できませんでした。ビヘイビアー パックの manifest.json の min_engine_version を指定してください。",
        "function_success": "関数のエントリ %1$d を実行しました。",
        "gamemode_description": "プレイヤーのゲーム モードを設定する。",
        "gamemode_success_other": "%2$s のゲームモードを %1$s に設定しました",
        "gamemode_success_self": "あなたのゲームモードを %1$s に設定しました",
        "gamemode_fail_invalid": "ゲーム モード '%1$s' は無効です",
        "gamerule_description": "ゲームルールの値を設定またはクエリする。",
        "gamerule_type_invalid": "ゲーム ルール '%1$s' に使用している型が無効です",
        "gamerule_type_nocheatsenabled": "ゲーム ルール '%1$s' は、世界でチートがオンになっている場合にのみ使用できます。",
        "gamerule_nopermission": "'%1$s' を変更できるのはサーバーの管理者のみです",
        "gamerule_norule": "ゲーム ルール '%1$s' を指定できません",
        "gamerule_success": "ゲーム ルール %1$s が %2$s に更新されました",
        "generic_async_initiated": "%1$s' のコマンドを開始しました (非同期ステップ %2$d)",
        "generic_boolean_invalid": "'%1$s' は true/false のいずれでもありません",
        "generic_chunk_notFound": "指定されたチャンクが見つかりません",
        "generic_componentError": "コンポーネント一覧の解析に失敗しました",
        "generic_dimension_notFound": "指定されたディメンションが見つかりません",
        "generic_disabled": "このレベルではチートは有効化されていません。",
        "generic_disabled_templateLocked": "設定は現在ロックされています。変更するには、ゲーム設定メニューの「テンプレート世界のオプション」のロックを解除してください。",
        "generic_double_tooBig": "入力した数値 (%.2f) は大きすぎます。%.2f 以下にしてください",
        "generic_double_tooSmall": "入力した数値 (%.2f) は小さすぎます。%.2f 以上にしてください",
        "generic_duplicateType": "型の引数が重複しています",
        "generic_duplicateSelectorArgument": "%s セレクターの引数が重複しています",
        "generic_encryption_badkey": "指定された公開キーが不正です。PEM 形式に変換した後は 120 バイト キーが必要です。",
        "generic_encryption_badsalt": "指定された salt 値が不正です。base 64 エンコード前には 16 バイトが必要です。",
        "generic_encryption_required": "暗号化されたセッションが必要です",
        "generic_entity_invalidType": "エンティティの種類 '%1$s' は無効です",
        "generic_entity_invalidUuid": "エンティティの提供するUUIDが無効な形式です",
        "generic_entity_notFound": "エンティティが見つかりません",
        "generic_exception": "コマンドを実行中に不明なエラーが発生しました",
        "generic_invalidAgentType": "型の引数が Agent のみのセレクターに適用されています",
        "generic_invalidcontext": "指定したコマンドの種類に与えられているコンテキストが無効です",
        "generic_invalidDevice": "入力したコマンド \"%s\" は、このデバイスでサポートされていません",
        "generic_invalidPlayerType": "型の引数がプレイヤーのみのセレクターに適用されています",
        "generic_invalidType": "型の引数が不明です",
        "generic_levelError": "最大レベルは最低レベルよりも高くする必要があります",
        "generic_malformed_body": "本文が存在しないかフォーマットが間違っています",
        "generic_malformed_type": "無効なリクエスト タイプ",
        "generic_notimplemented": "実装されていません",
        "generic_num_invalid": "'%1$s' は無効な数値です",
        "generic_num_tooBig": "入力した数値 (%1$d) は大きすぎます。%2$%d 以下の数値を入力してください",
        "generic_num_tooSmall": "入力した数値 (%1$d) は小さすぎます。%2$d 以上の数値を入力してください",
        "generic_parameter_invalid": "'%1$s' は無効なパラメーターです",
        "generic_permission_selector": "<セレクターを拡大するには権限が不十分です>",
        "generic_player_notFound": "指定されたプレイヤーが見つかりません",
        "generic_protocol_mismatch": "指定されたプロトコル バージョンが Minecraft のプロトコル バージョンと一致しません",
        "generic_radiusError": "セレクターの最小半径は、最大半径よりも小さくする必要があります",
        "generic_radiusNegative": "半径を負の値にすることはできません",
        "generic_rotationError": "範囲外です",
        "generic_running": "コマンドは既に実行中です",
        "generic_step_failed": "コマンド ステップ失敗",
        "generic_syntax": "構文エラー: \"%2$s\": at \"%1$s>>%2$s<<%3$s\" は無効です",
        "generic_noTargetMatch": "セレクターに合う対象がありません",
        "generic_targetNotPlayer": "セレクターはプレイヤーの型にする必要があります",
        "generic_tooManyNames": "目標の名前の引数が多すぎます",
        "generic_tooManyTargets": "セレクターに合う目標が多すぎます",
        "generic_too_many_requests": "コマンド リクエストが多過ぎます。1 つが終了するまで待ってください",
        "generic_unknown": "不明なコマンド: %s。このコマンドが存在し、これを使用する権限があることを確認してください",
        "generic_usage": "使用状況: %1$s",
        "generic_usage_noparam": "使用状況:",
        "generic_version_mismatch": "このコマンドのリクエストされたバージョンは存在しません",
        "generic_version_missing": "チャット以外からのコマンド呼び出しでは、コマンドのバージョンを指定する必要があります",
        "getchunkdata_description": "指定したチャンクのピクセルを取得する。",
        "getchunkdata_success": "チャンク データを受け取りました",
        "getchunks_description": "ロードされたチャンクの一覧を取得する。",
        "getchunks_success": "チャンク リストを受け取りました",
        "getlocalplayername_description": "ローカル プレイヤーの名前を返します。",
        "getspawnpoint_description": "指定したプレイヤー (複数可) の出現位置を取得する。",
        "gettopsolidblock_description": "指定した位置より下に存在する最も高い固体ブロックの位置を取得します",
        "gettopsolidblock_notfound": "指定した位置の下には固体ブロックがありません",
        "give_block_notFound": "%1$d という名前のブロックはありません",
        "give_description": "プレイヤーにアイテムを与える。",
        "give_item_invalid": "無効なコマンド構文: そのデータ値をもつ %s は存在しません",
        "give_item_notFound": "%1$d という名前のアイテムはありません",
        "give_map_invalidData": "与えられた地図データが無効です",
        "give_map_featureNotFound": "この空間に構造物が見つからないため、探検家の地図を作成できません。",
        "give_success": "%3$s に %1$s を %2$d 個与えました",
        "give_successRecipient": "%1$s を %2$d 個受け取りました",
        "give_tagError": "データ タグの解析に失敗しました: %1$s",
        "help_description": "コマンドのヘルプ/一覧を呼び出す。",
        "help_footer": "ヒント: コマンド入力中に <Tab> キーを押すとコマンドや引数が自動補完されます",
        "help_header": "--- ヘルプ ページの %1$d ／ %2$d ページを表示 (/help <ページ番号>) ---",
        "help_command_aliases": "%s (または %s):",
        "immutableworld_description": "世界の状態を不変に設定する。",
        "immutableworld_info": "immutableworld = %s",
        "kick_description": "プレイヤーをサーバーからキックする。",
        "kick_description_edu": "ゲームからプレイヤーを追放する。",
        "kick_not_found": "プレイヤー %1$s が見つかりませんでした",
        "kick_not_yourself": "自分自身をゲームから追放することはできません",
        "kick_success": "ゲームから %1$s を追放しました",
        "kick_success_reason": "ゲームから %1$s を追放しました: '%2$s'",
        "kick_success_reasonedu": "ゲームから %1$s を追放しました: '%2$s'",
        "kick_no_host": "ホストがゲームから追放されない場合があります。",
        "kick_no_teacher": "教師をゲームから削除することはできません。",
        "kill_successful_edu": "%1$s を削除しました",
        "kill_successful": "%1$s を倒しました",
        "kill_description_edu": "エンティティ (プレイヤー、モブなど) を削除する。",
        "kill_description": "エンティティ (プレイヤー、モブなど) を殺害する。",
        "list_description": "サーバー上のプレイヤーの一覧を表示する。",
        "locate_description": "指定した種類の構造物で最も近いものの座標を表示する。",
        "locate_fail_noplayer": "このコマンドは有効なプレイヤーしか使用できません",
        "locate_fail_nostructurefound": "このディメンションには有効なストラクチャがありません",
        "locate_success": "最も近くの %1$s は、ブロック %2$s、(y?)、%3$s にあります",
        "togglecontentlog_toggle": "コンテンツ ログ コマンドを有効化/無効化します",
        "togglecontentlog_enabled": "コンテンツ ログを有効化しました",
        "togglecontentlog_disabled": "コンテンツ ログを無効化しました",
        "me_description": "あなたに関するメッセージを表示します",
        "message_display_incoming": "%1$s にささやかれました: %2$s",
        "message_display_outgoing": "%1$s にささやきました: %2$s",
        "message_sameTarget": "自分自身にプライベートメッセージを送信することはできません!",
        "mixer_description": "Mixer の双方向配信管理",
        "mixer_error_unknown": "Mixer の不明なエラーが発生しました。",
        "mixer_error_notoken": "Mixer の双方向配信を有効にするには、Microsoft アカウントにサインインする必要があります。",
        "mixer_error_notsupported": "お使いのデバイスは、Mixer の双方向配信をサポートしていません。",
        "mixer_interactive_error": "Mixer のエラーが発生しました: %1$s",
        "mixer_scene_failed": "%1$s という名前のシーンが存在しません。シーン名が正しく入力されていることを確認してください。",
        "mixer_scene_success": "シーンは %1$s に変更されました",
        "mixer_start_success": "Mixer の双方向配信の開始: %1$s",
        "mixer_start_fail_invalidCode": "\"%1$s\" という ID のプロジェクトが見つかりません。ID または共有コードが正しいことを確認してください。",
        "mixer_stop_success": "Mixer の対話が停止しました。",
        "mixer_stop_fail": "停止する双方向配信セッションがありません。",
        "mixer_status_notinitialized": "双方向配信は初期化されていません。",
        "mixer_status_enabled": "双方向配信は有効です。",
        "mixer_status_initializing": "双方向配信を初期化しています。",
        "mixer_status_pending": "双方向配信は保留中です。",
        "mixer_status_disabled": "双方向配信は無効です。",
        "mixer_activatedbutton": "%1$s が %2$s をアクティブ化しました。",
        "mobevent_description": "実行を許可するモブ イベントを管理します。",
        "mobevent_eventsEnabledSetToTrue": "モブ イベントは現在オンになっています。false に設定されている個々のイベントは実行されません。",
        "mobevent_eventsEnabledSetToFalse": "モブ イベントは現在オフになっています。個々のイベントは実行されません。",
        "mobevent_eventsEnabledIsTrue": "モブ イベントはオンになっています。false に設定されている個々のイベントは実行されません。",
        "mobevent_eventsEnabledIsFalse": "モブ イベントはオフになっています。個々のイベントは実行されません。",
        "mobevent_eventSetToTrue": "モブ イベント %s (ID: %s) は true に設定されています。",
        "mobevent_eventSetToTrueButEventsDisabled": "モブ イベント %s (ID: %s) は true に設定されていますが、モブ イベントはオフになっています。",
        "mobevent_eventSetToFalse": "モブ イベント %s (ID: %s) は false に設定されています。",
        "mobevent_eventIsTrue": "モブ イベント %s (ID: %s) は true に設定されます。",
        "mobevent_eventIsTrueButEventsDisabled": "モブ イベント %s (ID: %s) は true に設定されますが、モブ イベントはオフになっています。",
        "mobevent_eventIsFalse": "モブ イベント %s (ID: %s) は false に設定されます。",
        "op_description": "プレイヤーにオペレーターのステータスを与える。",
        "op_failed": "%s にオペレーター権限を付与できませんでした (既にオペレーターであるか、それ以上の権限があります)",
        "op_success": "%s にオペレーター権限を付与しました",
        "op_message": "管理者に昇格しました",
        "origin_commandblock": "コマンドブロック",
        "origin_external": "外部",
        "origin_devconsole": "DevConsole",
        "origin_script": "スクリプト エンジン",
        "origin_server": "サーバー",
        "origin_teacher": "先生",
        "ops_description": "管理者権限をリロードして適用する。",
        "ops_reloaded": "ファイルから管理者をリロードしました。",
        "ops_set_success": "プレイヤー %s のオペレーター レベルを設定しました。",
        "permissions_description": "アクセス権をリロードして適用します。",
        "permissions_reloaded": "ファイルからアクセス権をリロードしました。",
        "permissions_set_failed": "プレイヤー %s にはオペレーター レベル %s を設定できません。",
        "permissions_set_success": "プレイヤー %s のオペレーター レベルを %s に設定しました。",
        "permissions_save_failed": "プレイヤー %s のオペレーター レベル %s を保存できません。",
        "permissions_save_success": "プレイヤー %s のオペレーター レベル %s を保存しました。",
        "spawnParticleEmitter_description": "パーティクル エミッタを作成します",
        "particle_description": "パーティクルを作成します",
        "particle_notFound": "効果の名前が不明です (%1$s)",
        "particle_success": "効果 %1$s を %2$d 回発生させます",
        "players_list": "%1$d/%2$d のプレイヤーがオンラインです:",
        "players_list_names": "%s",
        "playsound_description": "サウンドを再生します",
        "playsound_playerTooFar": "プレイヤー %1$s は効果音を聴くには離れすぎています",
        "playsound_success": "効果音 '%1$s' を %2$s に向けて再生しました",
        "position_description": "プレイヤーの座標表示のオン/オフを切り替えます。",
        "publish_failed": "ローカルゲームをホストできません",
        "publish_started": "ポート %1$s でローカル ゲームをホストしました",
        "querytarget_description": "対象となるエンティティのトランスフォーム、名前、ID 情報を取得する。",
        "querytarget_success": "対象となるデータ: %1$s",
        "reload_description": "すべてのビヘイビアー パックからすべての関数ファイルを再読み込みします。",
        "reload_success": "既存の関数ファイルが再読み込みされました。新しい関数を再読み込みするには、Minecraft を再起動してください。",
        "replaceitem_description": "持ち物内のアイテムを置き換えます",
        "replaceitem_failed": "%s スロット %d を %d * %s に置き換えることができません",
        "replaceitem_keepFailed": "%sスロット%dにはすでにアイテムがあります。",
        "replaceitem_noContainer": "%s にあるブロックはコンテナではありません",
        "replaceitem_badSlotNumber": "スロット %d を置き換えられませんでした。 %d ～ %d の間の値を指定する必要があります。",
        "replaceitem_success": "%s スロット %d を %d * %s に置き換えました",
        "replaceitem_success_entity": "スロット %s の %d にある %s を %d * %s に置き換えました",
        "replaceitem_tagError": "データ タグの解析に失敗しました: %1$s",
        "save_description": "HDD へのデータのセーブ方法を管理または確認します",
        "save_disabled": "世界の自動保存を無効にしました",
        "save_enabled": "世界の自動保存を有効にしました",
        "save_failed": "保存できませんでした: %1$s",
        "save_start": "保存中...",
        "save_success": "世界を保存しました",
        "save_all_error": "レベルのストレージを中断する際にエラーが発生しました。",
        "save_all_success": "データ保存完了。ファイルをコピーする準備ができました。",
        "save_off_alreadyOff": "保存は既に無効になっています。",
        "save_on_alreadyOn": "保存は既に有効になっています。",
        "save_on_notDone": "前のセーブが完了していません",
        "save_on_description": "サーバーの自動保存を有効にする。",
        "save_on_success": "レベルへの変更が維持されます。",
        "save_state_description": "前の save-all が完了しているかどうかを確認し、関連ファイルを一覧表示します",
        "say_description": "チャットで他のプレイヤーにメッセージを送信する。",
        "scoreboard_description": "さまざまな目標のスコアを追跡して表示します。",
        "scoreboard_allMatchesFailed": "一致するものはありませんでした",
        "scoreboard_noMultiWildcard": "1 ユーザーのみワイルドカードを使用できます",
        "scoreboard_objectiveNotFound": "'%1$s' ではオブジェクトは見つかりませんでした",
        "scoreboard_objectiveReadOnly": "オブジェクト '%1$s' は読み取り専用であり、設定することはできません",
        "scoreboard_objectives_add_alreadyExists": "'%1$s' というオブジェクトは既に存在します",
        "scoreboard_objectives_add_displayTooLong": "'%1$s' という表示名はオブジェクトには長すぎます。オブジェクト名は %2$d 文字までに収めてください",
        "scoreboard_objectives_add_success": "新しいオブジェクト '%1$s' を追加しました",
        "scoreboard_objectives_add_tooLong": "'%1$s' という表示名はオブジェクトには長すぎます。オブジェクト名は %2$d 文字までに収めてください",
        "scoreboard_objectives_add_wrongType": "'%1$s' は無効なオブジェクト条件の型です",
        "scoreboard_objectives_add_needName": "目標には名前が必要です。",
        "scoreboard_objectives_description": "スコアボードの目標を変更します。",
        "scoreboard_objectives_list_count": "スコアボードに %1$d 個のオブジェクトを表示:",
        "scoreboard_objectives_list_empty": "スコアボードにオブジェクトがありません",
        "scoreboard_objectives_list_entry": "- %1$s: '%2$s' と表示され、型は '%3$s' です",
        "scoreboard_objectives_remove_success": "オブジェクト '%1$s' を削除しました",
        "scoreboard_objectives_setdisplay_invalidSlot": "'%1$s' という表示スロットはありません",
        "scoreboard_objectives_setdisplay_successCleared": "オブジェクト表示スロット '%1$s' を空にしました",
        "scoreboard_objectives_setdisplay_successSet": "スロット '%1$s' の表示オブジェクトは、'%2$s' にセットされました",
        "scoreboard_players_add_success": "%3$s の [%2$s] に %1$d 追加しました (現在 %4$d)",
        "scoreboard_players_add_multiple_success": "%3$s 人の [%2$s] に %1$d 追加しました",
        "scoreboard_players_nameNotFound": "プレイヤーの名前が必要です。",
        "scoreboard_players_enable_noTrigger": "オブジェクト %1$s はトリガーではありません",
        "scoreboard_players_enable_success": "トリガー %1$s が %2$s に対して有効になりました",
        "scoreboard_players_list_count": "選択された %1$d 人のプレイヤーをスコアボードに表示:",
        "scoreboard_players_list_empty": "スコアボードには記録を追跡されたプレイヤーがいません",
        "scoreboard_players_list_player_count": "選択された %1$d 個のオブジェクトを %2$s に表示:",
        "scoreboard_players_list_player_empty": "プレイヤー %1$s にはスコアの記録はありません",
        "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_players_operation_invalidOperation": "%1$s は無効な操作です",
        "scoreboard_players_operation_notFound": "%2$s には %1$s のスコアはありません",
        "scoreboard_players_operation_success": "%2$d 人の [%1$s] を更新しました",
        "scoreboard_players_offlinePlayerName": "オフラインのプレイヤー",
        "scoreboard_players_random_invalidRange": "最小値である %1$d は最大値である %2$d 以下にします",
        "scoreboard_players_remove_success": "%3$s の [%2$s] から %1$d を除きました (現在 %4$d)",
        "scoreboard_players_remove_multiple_success": "%3$s 人の [%2$s] から %1$d を除きました",
        "scoreboard_players_reset_success": "プレイヤー %1$s のスコアをリセットしました",
        "scoreboard_players_resetscore_success": "プレイヤー %2$s のスコア %1$s をリセットしました",
        "scoreboard_players_set_success": "%2$s の %1$s を %3$d に設定しました",
        "scoreboard_players_set_multiple_success": "%2$s 人の %1$s を %3$d に設定しました",
        "scoreboard_players_set_tagError": "データ タグを解析できませんでした: %1$s",
        "scoreboard_players_set_tagMismatch": "データ タグが %1$s と一致しません",
        "scoreboard_players_score_notFound": "%2$s の %1$s のスコアが見つかりません",
        "scoreboard_players_test_failed": "スコア %1$d は %2$d ～ %3$d の範囲にありません",
        "scoreboard_players_test_success": "スコア %1$d は %2$d ～ %3$d の範囲内です",
        "scoreboard_teamNotFound": "'%1$s' ではチームが見つかりませんでした",
        "scoreboard_teams_add_alreadyExists": "'%1$s' という名前のチームは既に存在します",
        "scoreboard_teams_add_displayTooLong": "'%1$s' というチーム名は長すぎます。チーム名は %2$d 文字までに収めてください",
        "scoreboard_teams_add_success": "チーム '%1$s' を新たに追加しました",
        "scoreboard_teams_add_tooLong": "'%1$s' というチーム名は長すぎます。チーム名は %2$d 文字までに収めてください",
        "scoreboard_teams_empty_alreadyEmpty": "チーム %1$s は既に空であり、存在しないプレイヤーは削除できません",
        "scoreboard_teams_empty_success": "チーム %2$s から %1$d 人のプレイヤー全員を削除しました",
        "scoreboard_teams_join_failure": "%1$d 人のプレイヤーをチーム %2$s に追加できませんでした: %3$s",
        "scoreboard_teams_join_success": "%1$d 人のプレイヤーをチーム %2$s に追加しました: %3$s",
        "scoreboard_teams_leave_failure": "%1$d 人のプレイヤーを所属チームから削除できませんでした: %2$s",
        "scoreboard_teams_leave_noTeam": "あなたはどのチームにも参加していません",
        "scoreboard_teams_leave_success": "%1$d 人のプレイヤーを所属チームから削除しました: %2$s",
        "scoreboard_teams_list_count": "%1$d チームをスコアボードに表示しています:",
        "scoreboard_teams_list_empty": "スコアボードにチームが登録されていません",
        "scoreboard_teams_list_entry": "- %1$s: '%2$s' には %3$d のプレイヤーがいます",
        "scoreboard_teams_list_player_count": "チーム %2$s の %1$d 人のプレイヤーを表示しています:",
        "scoreboard_teams_list_player_empty": "チーム %1$s にはプレイヤーがいません",
        "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_teams_option_noValue": "オプション %1$s の有効な値: %2$s",
        "scoreboard_teams_option_success": "チーム %2$s のオプション %1$s を %3$s に設定しました",
        "scoreboard_teams_remove_success": "チーム %1$s を削除しました",
        "seed_success": "シード値: %1$s",
        "setblock_description": "ブロックを別のブロックに変更する。",
        "setblock_failed": "ブロックを配置できません",
        "setblock_noChange": "そのブロックは設置できません",
        "setblock_notFound": "%1$s という ID または名前のブロックはありません",
        "setblock_outOfWorld": "世界の範囲外にブロックを設置することはできません",
        "setblock_success": "ブロックを設置しました",
        "setblock_tagError": "データ タグの解析に失敗しました: %1$s",
        "setidletimeout_success": "無操作時のタイムアウトを %1$d 分後に設定しました。",
        "setfixedinvslots_description": "サーバーに固定された持ち物スロットの数を設定します。",
        "setfixedinvslots_success": "固定の持ち物スロットの数が %1$d に設定されました",
        "setfixedinvslot_description": "指定したアイテムに固定のスロットを設定する。",
        "setfixedinvslot_success": "固定の持ち物スロット %1$d が %2$s に設定されました",
        "globalpause_description": "全プレイヤーのゲームのポーズ状態を設定または取得する。",
        "globalpause_success": "ポーズ状態の設定または取得完了",
        "setmaxplayers_description": "このゲーム セッションでのプレイヤーの最大人数を設定します。",
        "setmaxplayers_success": "プレイヤーの最大人数を %1$d に設定します。",
        "setmaxplayers_success_upperbound": "(許可されている最大接続数にバインド済み)",
        "setmaxplayers_success_lowerbound": "(現在のプレイヤー数にバインド済み)",
        "setworldspawn_description": "世界の生成を設定する。",
        "setworldspawn_success": "(%1$d,%2$d,%3$d) に世界のスポーン地点を設定します",
        "setworldspawn_wrongDimension": "このディメンションでは世界の生成を設定できません",
        "spawnpoint_success_single": "%1$s のスポーン地点を (%2$d, %3$d, %4$d) に変更しました",
        "spawnpoint_description": "プレイヤーのスポーン位置を設定する。",
        "spawnpoint_success_multiple_specific": "%1$s のスポーン地点を (%2$d,%3$d,%4$d) に設定しました",
        "spawnpoint_success_multiple_generic": "%1$s のスポーン地点を設定しました",
        "spawnpoint_wrongDimension": "このディメンションではスポーン地点を設定できません",
        "spreadplayers_description": "ランダムな場所にエンティティをテレポートさせます",
        "spreadplayers_failure_players": "%1$s 人のプレイヤーを %2$s,%3$s の周りに散開させることはできませんでした (人数が多すぎます。%4$s 人以下で散開させてみてください)",
        "spreadplayers_failure_teams": "%1$s チームを %2$s,%3$s の周りに散開させることはできませんでした (人数が多すぎます。%4$s チーム以下で散開させてみてください)",
        "spreadplayers_info_players": "(%2$s 回繰り返した後、プレイヤー間の平均距離は %1$s ブロックになります)",
        "spreadplayers_info_teams": "(%2$s 回繰り返した後、チーム間の平均距離は %1$s ブロックになります)",
        "spreadplayers_spreading_players": "%1$s 人のプレイヤーを %2$s ブロックの範囲、%3$s,%4$s を中心とした場所に散開させます (プレイヤー間距離は最低 %5$s ブロック)",
        "spreadplayers_spreading_teams": "%1$s チームを %2$s ブロックの範囲、%3$s,%4$s を中心とした場所に散開させます (チーム間距離は最低 %5$s ブロック)",
        "spreadplayers_success_players": "%1$s 人のプレイヤーを %2$s,%3$s の周りに散開させました",
        "spreadplayers_success_teams": "%1$s チームを %2$s,%3$s の周りに散開させました",
        "stats_cleared": "%1$s の統計情報を消去しました",
        "stats_failed": "無効なパラメーターです",
        "stats_noCompatibleBlock": "%1$d, %2$d, %3$d にあるブロックの統計情報は追跡できません",
        "stats_success": "%3$s の %2$s における、%1$s の統計を保存しました",
        "stop_description": "サーバーを停止する。",
        "stop_start": "サーバーを停止しています",
        "stopsound_description": "サウンドを停止します",
        "stopsound_success": "サウンド %sを %s の間停止する。",
        "stopsound_success_all": "すべてのサウンドを %s の間停止する。",
        "summon_description": "エンティティを召喚する。",
        "summon_failed": "対象を召喚することができません",
        "summon_outOfWorld": "世界の範囲外から召喚することはできません",
        "summon_success": "対象の召喚に成功しました",
        "summon_tagError": "データ タグの解析に失敗しました: %1$s",
        "tag_description": "エンティティに保存されているタグを管理します。",
        "tag_add_failed": "ターゲットに既に指定のタグがあるか、タグが多すぎます",
        "tag_add_success_single": "タグ '%1$s' を %2$s に追加しました",
        "tag_add_success_multiple": "タグ '%1$s' を %2$s 個のエンティティに追加しました",
        "tag_list_single_empty": "%s にはタグがありません",
        "tag_list_single_success": "%1$s には %2$d 個のタグがあります: %3$s",
        "tag_list_multiple_empty": "%d 個のエンティティにはタグがありません",
        "tag_list_multiple_success": "%1$d 個のエンティティには合計で %2$d 個のタグがあります: %3$s",
        "tag_remove_failed": "ターゲットにはこのタグがありません",
        "tag_remove_success_single": "%2$s からタグ '%1$s' を削除しました",
        "tag_remove_success_multiple": "タグ '%1$s' を %2$s 個のエンティティから削除しました",
        "tell_description": "1 人または複数のプレイヤーにプライベート メッセージを送信する。",
        "tellraw_description": "プレイヤーに JSON メッセージを送信する。",
        "tellraw_jsonException": "無効な json: %1$s",
        "tellraw_jsonStringException": "無効な json 文字列データです。",
        "tellraw_error_noData": "データが入力されていません。",
        "tellraw_error_notArray": "Rawtext オブジェクトには、配列を含める必要があります。例: \"rawtext\": [{..}]",
        "tellraw_error_textNotString": "rawtext 内のテキスト フィールドには、文字列を含める必要があります。例: \"rawtext\": [{\"text\": \"text to display\"}]",
        "tellraw_error_translateNotString": "rawtext の translate フィールドには、言語キーを含める必要があります。例: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
        "tellraw_error_withNotArrayOrRawText": "rawtext の with フィールドには、配列または別の rawtext のオブジェクトを含める必要があります。例 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  例 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
        "tellraw_error_itemIsNotObject": "rawtext 配列の Json の値がオブジェクトではありません。例: \"rawtext\": [{ \"text\" : \"my text\" }]",
        "educlientinfo_description": "テナント ID とホスト ステータスを取得します (CM 向け機能)。",
        "testfor_description": "指定した条件に合うエンティティ (プレイヤー、モブ、アイテムなど) の数を数えます。",
        "testfor_failure": "%1$s は必要なデータ構造と一致しませんでした",
        "testfor_success": "%1$s が見つかりました",
        "testfor_tagError": "データ タグの解析に失敗しました: %1$s",
        "testforblock_description": "指定した場所に特定のブロックが存在するどうかをテストする。",
        "testforblock_failed_data": "%1$d、%2$d、%3$d にあるブロックと予想されるブロックの状態が一致しませんでした。",
        "testforblock_failed_nbt": "%1$d,%2$d,%3$d にあるブロックは要求された NBT キーを保有していませんでした。",
        "testforblock_failed_tile": "%1$d,%2$d,%3$d にあるブロックは %4$s です (予想では %5$s)。",
        "testforblock_failed_tileEntity": "%1$d,%2$d,%3$d にあるブロックはタイル エンティティではないため、タグマッチングを利用できません。",
        "testforblock_outOfWorld": "世界外ではブロックのテストはできません",
        "testforblock_success": "ブロックは %1$d, %2$d, %3$d で見つかりました。",
        "testforblocks_description": "2 つの領域内のブロックが一致するかどうかをテストする。",
        "tickingarea_description": "ティック領域を追加、削除、または一覧表示します",
        "tickingarea_inuse": "使用中のティック領域: %1$d/%2$d",
        "tickingarea_noneExist_currentDimension": "現在のディメンションにはティック領域が存在しません",
        "tickingarea_add_bounds_success": "ティック領域を %1$d から %2$d に追加しました",
        "tickingarea_add_circle_success": "%1$d を中心とした、半径 %2$d チャンクのティック領域を追加しました",
        "tickingarea_add_failure": "既にティック領域は最大 (%1$d) に達しているため、ティック領域を追加することはできません",
        "tickingarea_add_conflictingname": "%1$s という名前のティック領域は既に存在します",
        "tickingarea_add_chunkfailure": "ティック領域が広すぎるため、作成できません。含めるチャンクは %1$d 以下にしてください",
        "tickingarea_add_radiusfailure": "半径を %1$d より大きくすることはできません。ティック領域は広すぎるため、作成できません。",
        "tickingarea_remove_success": "ティック領域を削除しました",
        "tickingarea_remove_failure": "現在のディメンションには指定されたブロックの場所 (%1$d) を含むティック領域は存在しません",
        "tickingarea_remove_byname_failure": "現在のディメンションには %1$s という名前のティック領域は存在しません",
        "tickingarea_remove_all_success": "ティック領域を削除しました",
        "tickingarea_remove_all_failure": "現在のディメンションにはティック領域が存在しません",
        "tickingarea_list_chunks": "チャンク",
        "tickingarea_list_circle_radius": "半径",
        "tickingarea_list_success_currentDimension": "現在のディメンションに存在するすべてのティック領域のリスト",
        "tickingarea_list_success_allDimensions": "すべてのディメンションに存在するすべてのティック領域のリスト",
        "tickingarea_list_failure_allDimensions": "どのディメンションにもティック領域は存在しません",
        "tickingarea_list_to": "出力先:",
        "tickingarea_list_type_circle": "円",
        "time_added": "時間を %1$d 早めました",
        "time_description": "世界のゲーム時間を変更/クエリします",
        "time_disabled": "常時昼間は、このレベルで有効です",
        "time_query_day": "日付は %d です",
        "time_query_daytime": "時刻は %d です",
        "time_query_gametime": "ゲーム内時間は %d です",
        "time_set": "現在時刻を %1$d に設定します",
        "time_stop": "時間 %1$s",
        "title_description": "画面のタイトルを操作する。",
        "title_success": "titleコマンドは正常に実行されました",
        "titleraw_description": "JSON メッセージを使用して画面のタイトルを調整します。",
        "toggledownfall_description": "天気を切り替える。",
        "tp_description": "エンティティ (プレイヤー、モブなど) をテレポートさせる。",
        "tp_notSameDimension": "プレイヤーが同じ世界にいないためテレポートすることができません",
        "tp_outOfWorld": "エンティティを世界の外にテレポートさせることはできません",
        "tp_permission": "このスラッシュを含むコマンドを実行する権限がありません。",
        "tp_safeTeleportFail": "領域のブロックが片付けられていないため、%1$s を %2$s にテレポートできません。",
        "tp_far": "%1$s を %2$s の読み込まれていない領域にテレポートすることはできません",
        "tp_success": "%1$s は %2$s にテレポートしました",
        "tp_successVictim": "%1$s にテレポートしました",
        "tp_success_coordinates": "%1$s は %2$s,%3$s,%4$s にテレポートしました",
        "transferserver_description": "プレイヤーを別のサーバーに転送する。",
        "transferserver_successful": "転送されたプレイヤー",
        "transferserver_invalid_port": "無効なポート (0-65535)",
        "trigger_description": "起動するトリガーを設定します",
        "trigger_disabled": "トリガー %1$s は有効ではありません",
        "trigger_invalidMode": "トリガーモード %1$s は無効です",
        "trigger_invalidObjective": "トリガー名 %1$s は無効です",
        "trigger_invalidPlayer": "/trigger コマンドを使用できるのはプレイヤーのみです",
        "trigger_success": "トリガー %1$s により %2$s を %3$s に変更しました",
        "unban_failed": "プレイヤー %1$s のアクセス禁止を解除できませんでした",
        "unban_success": "プレイヤー %1$s のアクセス禁止を解除しました",
        "unbanip_invalid": "IPアドレスが無効です",
        "unbanip_success": "IP アドレス %1$s のアクセス禁止を解除しました",
        "validategamelighting_description": "指定した範囲のゲーム ライティングを検証する",
        "validategamelighting_checkRegionTooBig": "ライティングをチェックする範囲が大きすぎます！(%1$d > %2$d)",
        "validategamelighting_outOfWorld": "世界の外のライティングをチェックすることはできません",
        "weather_clear": "天候を晴れに変更しています",
        "weather_description": "天気を設定する。",
        "weather_disabled": "天候の変化は、このレベルで有効ではありません",
        "weather_query": "天候の状態: %s",
        "weather_query_clear": "晴れ",
        "weather_query_rain": "雨",
        "weather_query_thunder": "雷",
        "weather_rain": "天候を雨に変更しています",
        "weather_thunder": "天候を雷雨に変更しています",
        "whitelist_add_failed": "%1$s をホワイトリストに追加できませんでした",
        "whitelist_add_success": "%1$s をホワイトリストに追加しました",
        "whitelist_description": "サーバーのホワイトリストを管理する。",
        "whitelist_disabled": "ホワイトリストを無効にしました",
        "whitelist_enabled": "ホワイトリストを有効にしました",
        "whitelist_list": "ホワイトリストには %1$d 人 (サーバー全体では %2$d 人) のプレイヤーがいます:",
        "whitelist_reloaded": "ファイルからホワイトリストをリロードしました。",
        "whitelist_remove_failed": "ホワイトリストから %1$s を削除できませんでした",
        "whitelist_remove_success": "%1$s をホワイトリストから削除しました",
        "world_age_description": "世界の経過時間 (作成後の期間) を変更またはクエリします。",
        "world_age_added": "世界の経過時間に %1$d を加えました",
        "world_age_query": "世界の経過時間は %d です",
        "world_age_set": "世界の経過時間を %1$d に設定",
        "worldborder_center_success": "世界の境界の中心を %1$s,%2$s に設定しました",
        "worldborder_damage_amount_success": "世界の境界外のダメージを 1 ブロックあたり %1$s に設定しました (元の設定: %2$s)",
        "worldborder_damage_buffer_success": "世界の境界外の安全圏を %1$s ブロックに設定しました (元の設定: %2$s ブロック)",
        "worldborder_get_success": "世界の境界は現在 %1$s ブロック幅です",
        "worldborder_set_success": "世界の境界を %1$s ブロック幅に設定しました (元の設定: %2$s ブロック幅)",
        "worldborder_setSlowly_grow_success": "世界の境界を %3$s 秒間で %1$s ブロック幅に拡大します (元のブロック幅: %2$s)",
        "worldborder_setSlowly_shrink_success": "世界の境界を %3$s 秒間で %1$s ブロック幅に縮小します (元のブロック幅: %2$s)",
        "worldborder_warning_distance_success": "世界の境界の警告表示を %1$s ブロックの距離に設定しました (元の設定: %2$s ブロック)",
        "worldborder_warning_time_success": "世界の境界の警告表示時間を %1$s 秒に設定しました (元の設定: %2$s 秒)",
        "worldbuilder_description": "呼び出し元の世界ビルダーの状態を切り替えます。",
        "worldbuilder_success": "世界ビルダーの状態が %1$s に更新されました",
        "wsserver_description": "指定された URL の websocket サーバーへの接続を試行する。",
        "wsserver_invalid_url": "指定された URL は無効です",
        "wsserver_request_existing": "別の接続リクエストが進行中です",
        "wsserver_request_failed": "サーバーに接続できませんでした: %1$s",
        "wsserver_success": "サーバーへの接続を確立しました: %1$s",
        "xp_description": "プレイヤーの経験値を増加/減少させます",
        "xp_failure_widthdrawXp": "プレイヤーに負の経験値を与えることはできません",
        "xp_success": "%2$s に経験値 %1$d を与えました",
        "xp_success_levels": "%2$s に %1$d レベルを付与しました",
        "xp_success_negative_levels": "%2$s から %1$d レベルを剥奪しました"
    },
    item:{
        "air": [
            "空気"
        ],
        "apple": [
            "リンゴ"
        ],
        "golden_apple": [
            "金のリンゴ"
        ],
        "appleenchanted": [
            "エンチャントされたリンゴ"
        ],
        "armor_stand": [
            "防具立て"
        ],
        "arrow": [
            "矢"
        ],
        "tipped_arrow": [
            "効能付き矢"
        ],
        "banner": [
            "黒の旗",
            "黒の旗",
            "赤の旗",
            "緑の旗",
            "茶色の旗",
            "青の旗",
            "紫の旗",
            "水色の旗",
            "薄灰色の旗",
            "灰色の旗",
            "ピンクの旗",
            "黄緑の旗",
            "黄色の旗",
            "空色の旗",
            "赤紫の旗",
            "オレンジの旗",
            "白の旗"
        ],
        "bed": [
            "ベッド",
            "白のベッド",
            "オレンジのベッド",
            "赤紫のベッド",
            "空色のベッド",
            "黄色のベッド",
            "黄緑のベッド",
            "ピンクのベッド",
            "灰色のベッド",
            "薄灰色のベッド",
            "水色のベッド",
            "紫のベッド",
            "青のベッド",
            "茶色のベッド",
            "緑色のベッド",
            "赤のベッド",
            "黒のベッド"
        ],
        "bell": [
            "ベル"
        ],
        "steak": [
            "ステーキ"
        ],
        "beef": [
            "生の牛肉"
        ],
        "beetroot": [
            "ビートルート"
        ],
        "beetroot_soup": [
            "ビートルート スープ"
        ],
        "blaze_powder": [
            "ブレイズ パウダー"
        ],
        "blaze_rod": [
            "ブレイズ ロッド"
        ],
        "boat": [
            "樫の木のボート",
            "樫の木のボート",
            "トウヒのボート",
            "樺のボート",
            "ジャングルの木のボート",
            "アカシアのボート",
            "黒樫の木のボート"
        ],
        "bone": [
            "骨"
        ],
        "book": [
            "本"
        ],
        "chainmail_boots": [
            "チェーンブーツ"
        ],
        "leather_boots": [
            "革のブーツ"
        ],
        "diamond_boots": [
            "ダイヤモンドのブーツ"
        ],
        "golden_boots": [
            "金のブーツ"
        ],
        "iron_boots": [
            "鉄のブーツ"
        ],
        "bow": [
            "弓"
        ],
        "bowl": [
            "おわん"
        ],
        "bread": [
            "パン"
        ],
        "brewing_stand": [
            "調合台"
        ],
        "brick": [
            "レンガ"
        ],
        "bucket": [
            "バケツ"
        ],
        "bucketLava": [
            "溶岩バケツ"
        ],
        "bucketWater": [
            "水バケツ"
        ],
        "bucketFish": [
            "バケツ 1 杯のタラ"
        ],
        "bucketSalmon": [
            "バケツ 1 杯の鮭"
        ],
        "bucketTropical": [
            "バケツ 1 杯の熱帯魚"
        ],
        "bucketPuffer": [
            "バケツ 1 杯のフグ"
        ],
        "bucketCustomFish": [
            "バケツ 1 杯"
        ],
        "tropicalColorWhite": [
            "白"
        ],
        "tropicalColorOrange": [
            "オレンジ"
        ],
        "tropicalColorMagenta": [
            "赤紫"
        ],
        "tropicalColorSky": [
            "スカイブルー"
        ],
        "tropicalColorYellow": [
            "黄色"
        ],
        "tropicalColorLime": [
            "黄緑"
        ],
        "tropicalColorRose": [
            "ローズ"
        ],
        "tropicalColorGray": [
            "灰色"
        ],
        "tropicalColorSilver": [
            "銀"
        ],
        "tropicalColorTeal": [
            "青緑"
        ],
        "tropicalColorPlum": [
            "プラム"
        ],
        "tropicalColorBlue": [
            "青"
        ],
        "tropicalColorBrown": [
            "茶色"
        ],
        "tropicalColorGreen": [
            "緑"
        ],
        "tropicalColorRed": [
            "赤"
        ],
        "tropicalBodyKobSingle": [
            "%1$s のコーブ"
        ],
        "tropicalBodySunstreakSingle": [
            "%1$s のサンストリーク"
        ],
        "tropicalBodySnooperSingle": [
            "%1$s のスヌーパー"
        ],
        "tropicalBodyDasherSingle": [
            "%1$s のダッシャー"
        ],
        "tropicalBodyBrinelySingle": [
            "%1$s ブラインリー"
        ],
        "tropicalBodySpottySingle": [
            "%1$s スポッティ"
        ],
        "tropicalBodyFlopperSingle": [
            "%1$s のフロッパー"
        ],
        "tropicalBodyStripeySingle": [
            "%1$s のカゴカキダイ"
        ],
        "tropicalBodyGlitterSingle": [
            "%1$s のグリッター"
        ],
        "tropicalBodyBlockfishSingle": [
            "%1$s のブロックフィッシュ"
        ],
        "tropicalBodyBettySingle": [
            "%1$s のベティ"
        ],
        "tropicalBodyClayfishSingle": [
            "%1$s のクレイフィッシュ"
        ],
        "tropicalBodyKobMulti": [
            "%1$s-%2$s のコーブ"
        ],
        "tropicalBodySunstreakMulti": [
            "%1$s-%2$s のサンストリーク"
        ],
        "tropicalBodySnooperMulti": [
            "%1$s-%2$s のスヌーパー"
        ],
        "tropicalBodyDasherMulti": [
            "%1$s-%2$s のダッシャー"
        ],
        "tropicalBodyBrinelyMulti": [
            "%1$s-%2$s のブラインリー"
        ],
        "tropicalBodySpottyMulti": [
            "%1$s-%2$s のスポッティ"
        ],
        "tropicalBodyFlopperMulti": [
            "%1$s-%2$s のフロッパー"
        ],
        "tropicalBodyStripeyMulti": [
            "%1$s-%2$s のカゴカキダイ"
        ],
        "tropicalBodyGlitterMulti": [
            "%1$s-%2$s のグリッター"
        ],
        "tropicalBodyBlockfishMulti": [
            "%1$s-%2$s のブロックフィッシュ"
        ],
        "tropicalBodyBettyMulti": [
            "%1$s-%2$s のベティ"
        ],
        "tropicalBodyClayfishMulti": [
            "%1$s-%2$s のクレイフィッシュ"
        ],
        "tropicalSchoolAnemone": [
            "クマノミ"
        ],
        "tropicalSchoolBlackTang": [
            "クロハギ"
        ],
        "tropicalSchoolBlueDory": [
            "ナンヨウハギ"
        ],
        "tropicalSchoolButterflyFish": [
            "チョウチョウウオ"
        ],
        "tropicalSchoolCichlid": [
            "シクリッド"
        ],
        "tropicalSchoolClownfish": [
            "クマノミ"
        ],
        "tropicalSchoolCottonCandyBetta": [
            "わたあめベタ"
        ],
        "tropicalSchoolDottyback": [
            "メギス"
        ],
        "tropicalSchoolEmperorRedSnapper": [
            "コウテイ レッドスナッパー"
        ],
        "tropicalSchoolGoatfish": [
            "ヒメジ"
        ],
        "tropicalSchoolMoorishIdol": [
            "ツノダシ"
        ],
        "tropicalSchoolOrnateButterfly": [
            "豪華なチョウチョウウオ"
        ],
        "tropicalSchoolParrotfish": [
            "ブダイ"
        ],
        "tropicalSchoolQueenAngelFish": [
            "クイーン エンゼルフィッシュ"
        ],
        "tropicalSchoolRedCichlid": [
            "レッド シクリッド"
        ],
        "tropicalSchoolRedLippedBlenny": [
            "レッド リップド ブレニー"
        ],
        "tropicalSchoolRedSnapper": [
            "レッドスナッパー"
        ],
        "tropicalSchoolThreadfin": [
            "ツバメコノシロ"
        ],
        "tropicalSchoolTomatoClown": [
            "ハマクマノミ"
        ],
        "tropicalSchoolTriggerfish": [
            "モンガラカワハギ"
        ],
        "tropicalSchoolYellowTang": [
            "キイロハギ"
        ],
        "tropicalSchoolYellowtailParrot": [
            "キビレブダイ"
        ],
        "cake": [
            "ケーキ"
        ],
        "camera": [
            "カメラ"
        ],
        "golden_carrot": [
            "金のニンジン"
        ],
        "carrotOnAStick": [
            "ニンジン付きの棒"
        ],
        "warped_fungus_on_a_stick": [
            "ゆがんだきのこ付きの棒"
        ],
        "carrot": [
            "ニンジン"
        ],
        "cauldron": [
            "大釜"
        ],
        "coal": [
            "石炭",
            null,
            "木炭"
        ],
        "chainmail_chestplate": [
            "チェーンチェストプレート"
        ],
        "leather_chestplate": [
            "革の服"
        ],
        "diamond_chestplate": [
            "ダイヤモンドの胸当て"
        ],
        "golden_chestplate": [
            "金の胸当て"
        ],
        "iron_chestplate": [
            "鉄の胸当て"
        ],
        "chorus_fruit": [
            "コーラス フルーツ"
        ],
        "chorus_fruit_popped": [
            "焼いたコーラス フルーツ"
        ],
        "cooked_beef": [
            "調理した牛肉"
        ],
        "cooked_chicken": [
            "焼き鳥"
        ],
        "cooked_porkchop": [
            "調理した豚肉"
        ],
        "chicken": [
            "生の鶏肉"
        ],
        "clay_ball": [
            "粘土"
        ],
        "clock": [
            "時計"
        ],
        "comparator": [
            "レッドストーン コンパレーター"
        ],
        "compass": [
            "コンパス"
        ],
        "lodestonecompass": [
            "ロデストーン コンパス"
        ],
        "cookie": [
            "クッキー"
        ],
        "crossbow": [
            "クロスボウ"
        ],
        "diamond": [
            "ダイヤモンド"
        ],
        "repeater": [
            "レッドストーン反復装置"
        ],
        "acacia_door": [
            "アカシアのドア"
        ],
        "birch_door": [
            "樺の木のドア"
        ],
        "dark_oak_door": [
            "黒樫の木のドア"
        ],
        "iron_door": [
            "鉄のドア"
        ],
        "jungle_door": [
            "ジャングルの木のドア"
        ],
        "wooden_door": [
            "樫の木のドア"
        ],
        "spruce_door": [
            "トウヒの木のドア"
        ],
        "crimson_door": [
            "ドア (クリムゾン)"
        ],
        "warped_door": [
            "ゆがんだドア"
        ],
        "dragon_breath": [
            "ドラゴンの息"
        ],
        "dye": [
            "墨袋",
            "墨袋",
            "赤の染料",
            "緑の染料",
            "ココア ビーンズ",
            "ラピスラズリ",
            "紫の染料",
            "水色の染料",
            "薄灰色の染料",
            "灰色の染料",
            "ピンクの染料",
            "黄緑の染料",
            "黄色の染料",
            "空色の染料",
            "赤紫の染料",
            "オレンジの染料",
            "骨粉",
            "黒の染料",
            "茶色の染料",
            "青の染料",
            "白の染料"
        ],
        "egg": [
            "タマゴ"
        ],
        "elytra": [
            "エリトラ"
        ],
        "emerald": [
            "エメラルド"
        ],
        "emptyMap": [
            "空っぽの地図"
        ],
        "emptyLocatorMap": [
            "まっさらな地図"
        ],
        "emptyPotion": [
            "水のビン"
        ],
        "enchanted_book": [
            "エンチャントした本"
        ],
        "end_crystal": [
            "果てのクリスタル"
        ],
        "end_rod": [
            "果てのロッド"
        ],
        "ender_eye": [
            "エンダーアイ"
        ],
        "ender_pearl": [
            "エンダーパール"
        ],
        "experience_bottle": [
            "エンチャントのビン"
        ],
        "feather": [
            "羽根"
        ],
        "fermented_spider_eye": [
            "発酵したクモの目"
        ],
        "fireball": [
            "発火剤"
        ],
        "fireworks": [
            "ロケット花火"
        ],
        "fireworksCharge": [
            "花火の星"
        ],
        "clownfish": [
            "熱帯魚"
        ],
        "cooked_fish": [
            "焼いたタラ"
        ],
        "fish": [
            "生のタラ"
        ],
        "pufferfish": [
            "フグ"
        ],
        "cooked_salmon": [
            "調理した鮭"
        ],
        "salmon": [
            "生鮭"
        ],
        "fishing_rod": [
            "釣り竿"
        ],
        "flint": [
            "火打ち石"
        ],
        "flint_and_steel": [
            "火打ち石と打ち金"
        ],
        "flower_pot": [
            "植木鉢"
        ],
        "frame": [
            "額縁"
        ],
        "ghast_tear": [
            "ガストの涙"
        ],
        "glass_bottle": [
            "ガラスビン"
        ],
        "gold_nugget": [
            "金の塊"
        ],
        "iron_nugget": [
            "鉄塊"
        ],
        "diamond_axe": [
            "ダイヤモンドの斧"
        ],
        "golden_axe": [
            "金の斧"
        ],
        "iron_axe": [
            "鉄の斧"
        ],
        "stone_axe": [
            "石の斧"
        ],
        "wooden_axe": [
            "木の斧"
        ],
        "chainmail_helmet": [
            "チェーンヘルメット"
        ],
        "leather_helmet": [
            "革の帽子"
        ],
        "diamond_helmet": [
            "ダイヤモンドの兜"
        ],
        "golden_helmet": [
            "金の兜"
        ],
        "iron_helmet": [
            "鉄の兜"
        ],
        "diamond_hoe": [
            "ダイヤモンドのくわ"
        ],
        "golden_hoe": [
            "金のくわ"
        ],
        "iron_hoe": [
            "鉄のくわ"
        ],
        "stone_hoe": [
            "石のくわ"
        ],
        "wooden_hoe": [
            "木のくわ"
        ],
        "honey_bottle": [
            "ハニーボトル"
        ],
        "honeycomb": [
            "ハニカム"
        ],
        "horsearmordiamond": [
            "ダイヤモンドの馬鎧"
        ],
        "horsearmorgold": [
            "金の馬鎧"
        ],
        "horsearmoriron": [
            "鉄の馬鎧"
        ],
        "horsearmorleather": [
            "革の馬鎧"
        ],
        "gold_ingot": [
            "金の延べ棒"
        ],
        "iron_ingot": [
            "鉄の延べ棒"
        ],
        "netherite_ingot": [
            "ネテライト インゴット"
        ],
        "netherite_scrap": [
            "ネテライト スクラップ"
        ],
        "netherite_sword": [
            "ネテライトの剣"
        ],
        "netherite_pickaxe": [
            "ネテライトのつるはし"
        ],
        "netherite_axe": [
            "ネテライトの斧"
        ],
        "netherite_shovel": [
            "ネテライトのシャベル"
        ],
        "netherite_hoe": [
            "ネテライトの鍬"
        ],
        "netherite_boots": [
            "ネテライトのブーツ"
        ],
        "netherite_leggings": [
            "ネテライトのレギンス"
        ],
        "netherite_chestplate": [
            "ネテライトの胸当て"
        ],
        "netherite_helmet": [
            "ネテライトのヘルメット"
        ],
        "lead": [
            "首ひも"
        ],
        "leather": [
            "革"
        ],
        "leaves": [
            "葉っぱ",
            "樫の葉",
            "トウヒの葉",
            "樺の葉",
            "ジャングルの木の葉",
            "アカシアの葉",
            "黒樫の木の葉"
        ],
        "chainmail_leggings": [
            "チェーンレギンス"
        ],
        "leather_leggings": [
            "革のパンツ"
        ],
        "diamond_leggings": [
            "ダイヤモンドの脚甲"
        ],
        "golden_leggings": [
            "金の脚甲"
        ],
        "iron_leggings": [
            "鉄の脚甲"
        ],
        "nautilus_shell": [
            "オウムガイの殻"
        ],
        "heart_of_the_sea": [
            "海の中心"
        ],
        "magma_cream": [
            "マグマクリーム"
        ],
        "map": [
            "地図"
        ],
        "melon": [
            "スイカ"
        ],
        "milk": [
            "ミルク"
        ],
        "minecart": [
            "トロッコ"
        ],
        "chest_minecart": [
            "チェスト付きトロッコ"
        ],
        "command_block_minecart": [
            "コマンドブロック付きトロッコ"
        ],
        "minecartFurnace": [
            "かまど付きトロッコ"
        ],
        "hopper_minecart": [
            "ホッパー付きトロッコ"
        ],
        "tnt_minecart": [
            "TNT 付きトロッコ"
        ],
        "trident": [
            "トライデント"
        ],
        "mushroom_stew": [
            "きのこシチュー"
        ],
        "muttoncooked": [
            "調理した羊肉"
        ],
        "muttonraw": [
            "生の羊肉"
        ],
        "name_tag": [
            "名札"
        ],
        "netherbrick": [
            "ネザーレンガ"
        ],
        "quartz": [
            "ネザークォーツ"
        ],
        "nether_wart": [
            "ネザーウォート"
        ],
        "netherStar": [
            "ネザースター"
        ],
        "painting": [
            "絵"
        ],
        "paper": [
            "紙"
        ],
        "diamond_pickaxe": [
            "ダイヤモンドのツルハシ"
        ],
        "golden_pickaxe": [
            "金のツルハシ"
        ],
        "iron_pickaxe": [
            "鉄のツルハシ"
        ],
        "stone_pickaxe": [
            "石のツルハシ"
        ],
        "wooden_pickaxe": [
            "木のツルハシ"
        ],
        "porkchop_cooked": [
            "調理した豚肉"
        ],
        "porkchop": [
            "生の豚肉"
        ],
        "portfolio": [
            "ポートフォリオ"
        ],
        "potato": [
            "ジャガイモ"
        ],
        "baked_potato": [
            "ベイクド ポテト"
        ],
        "poisonous_potato": [
            "有毒なジャガイモ"
        ],
        "potion": [
            "ポーション"
        ],
        "prismarine_crystals": [
            "海結晶"
        ],
        "prismarine_shard": [
            "暗海晶の破片"
        ],
        "pumpkin_pie": [
            "パンプキン パイ"
        ],
        "cooked_rabbit": [
            "調理した兎肉"
        ],
        "rabbit_foot": [
            "ウサギの足"
        ],
        "rabbit_hide": [
            "ウサギの皮"
        ],
        "rabbit": [
            "生の兎肉"
        ],
        "rabbit_stew": [
            "ウサギシチュー"
        ],
        "record": [
            "音楽ディスク"
        ],
        "redstone": [
            "レッドストーン"
        ],
        "reeds": [
            "サトウキビ"
        ],
        "kelp": [
            "昆布"
        ],
        "dried_kelp": [
            "乾燥昆布"
        ],
        "rotten_flesh": [
            "腐肉"
        ],
        "ruby": [
            "ルビー"
        ],
        "saddle": [
            "鞍"
        ],
        "wheat_seeds": [
            "種"
        ],
        "beetroot_seeds": [
            "ビートルートの種"
        ],
        "melon_seeds": [
            "スイカの種"
        ],
        "pumpkin_seeds": [
            "カボチャの種"
        ],
        "shears": [
            "ハサミ"
        ],
        "diamond_shovel": [
            "ダイヤモンドのシャベル"
        ],
        "golden_shovel": [
            "金のシャベル"
        ],
        "iron_shovel": [
            "鉄のシャベル"
        ],
        "stone_shovel": [
            "石のシャベル"
        ],
        "wooden_shovel": [
            "木のシャベル"
        ],
        "sign": [
            "樫の看板"
        ],
        "spruce_sign": [
            "トウヒの看板"
        ],
        "birch_sign": [
            "樺の看板"
        ],
        "jungle_sign": [
            "ジャングルの木の看板"
        ],
        "acacia_sign": [
            "アカシアの看板"
        ],
        "darkoak_sign": [
            "黒樫の看板"
        ],
        "crimson_sign": [
            "看板 (クリムゾン)"
        ],
        "warped_sign": [
            "ゆがんだ看板"
        ],
        "skull": [
            "スケルトンの頭",
            "スケルトンの頭",
            "ウィザー スケルトンの頭",
            "ゾンビの頭",
            "ヘッド",
            "クリーパー ヘッド",
            "ドラゴンの頭"
        ],
        "slime_ball": [
            "スライムボール"
        ],
        "snowball": [
            "雪玉"
        ],
        "speckled_melon": [
            "輝くスイカ"
        ],
        "spider_eye": [
            "クモの目"
        ],
        "stick": [
            "棒"
        ],
        "string": [
            "糸"
        ],
        "sugar": [
            "砂糖"
        ],
        "gunpowder": [
            "火薬"
        ],
        "diamond_sword": [
            "ダイヤモンドの剣"
        ],
        "golden_sword": [
            "金の剣"
        ],
        "iron_sword": [
            "鉄の剣"
        ],
        "stone_sword": [
            "石の剣"
        ],
        "wooden_sword": [
            "木の剣"
        ],
        "wheat": [
            "小麦"
        ],
        "writable_book": [
            "本と羽ペン"
        ],
        "written_book": [
            "記入済みの本"
        ],
        "glowstone_dust": [
            "グロウストーンダスト"
        ],
        "shield": [
            "盾"
        ],
        "shulker_shell": [
            "シュルカーの殻"
        ],
        "totem": [
            "不死のトーテム"
        ],
        "turtle_helmet": [
            "亀の甲羅"
        ],
        "turtle_shell_piece": [
            "甲羅のかけら"
        ],
        "phantom_membrane": [
            "ファントムの皮膜"
        ],
        "sweet_berries": [
            "スイート ベリー"
        ],
        "suspicious_stew": [
            "あやしいシチュー"
        ],
        "banner_pattern": [
            "旗の模様"
        ],
        "acaciaFence": [
            "アカシアの木の柵"
        ],
        "acacia_fence_gate": [
            "アカシアの木の柵のゲート"
        ],
        "activator_rail": [
            "アクティベーター レール"
        ],
        "allow": [
            "許可"
        ],
        "deny": [
            "拒否"
        ],
        "border_block": [
            "ボーダー"
        ],
        "anvil": [
            "金床",
            "金床",
            null,
            null,
            null,
            "少し壊れた金床",
            null,
            null,
            null,
            "かなり壊れた金床"
        ],
        "barrier": [
            "バリアブロック"
        ],
        "beacon": [
            "ビーコン"
        ],
        "beehive": [
            "ハチの巣箱"
        ],
        "bee_nest": [
            "ハチの巣"
        ],
        "target": [
            "ターゲット"
        ],
        "bedrock": [
            "岩盤"
        ],
        "conduit": [
            "コンジット"
        ],
        "invisibleBedrock": [
            "不可視の岩盤"
        ],
        "birchFence": [
            "樺の木の柵"
        ],
        "birch_fence_gate": [
            "樺の木の柵のゲート"
        ],
        "blast_furnace": [
            "溶鉱炉"
        ],
        "bone_block": [
            "骨ブロック"
        ],
        "coal_block": [
            "石炭のブロック"
        ],
        "diamond_block": [
            "ダイヤモンドのブロック"
        ],
        "emerald_block": [
            "エメラルドのブロック"
        ],
        "gold_block": [
            "金のブロック"
        ],
        "iron_block": [
            "鉄のブロック"
        ],
        "lapis_block": [
            "ラピスラズリのブロック"
        ],
        "redstone_block": [
            "レッドストーンのブロック"
        ],
        "bookshelf": [
            "本棚"
        ],
        "brick_block": [
            "レンガ ブロック"
        ],
        "brown_mushroom": [
            "きのこ (茶色)"
        ],
        "wooden_button": [
            "樫の木のボタン"
        ],
        "acacia_button": [
            "アカシアのボタン"
        ],
        "birch_button": [
            "樺の木のボタン"
        ],
        "dark_oak_button": [
            "黒樫の木のボタン"
        ],
        "jungle_button": [
            "ジャングルの木のボタン"
        ],
        "spruce_button": [
            "トウヒの木のボタン"
        ],
        "stone_button": [
            "石のボタン"
        ],
        "cactus": [
            "サボテン"
        ],
        "dried_kelp_block": [
            "乾燥昆布ブロック"
        ],
        "carved_pumpkin": [
            "飾りカボチャ"
        ],
        "chest": [
            "チェスト"
        ],
        "ender_chest": [
            "エンダー チェスト"
        ],
        "jigsaw": [
            "ジグソウ ブロック"
        ],
        "honey_block": [
            "ハチのブロック"
        ],
        "honeycomb_block": [
            "ハニカム ブロック"
        ],
        "lodestone": [
            "ロデストーン"
        ],
        "nether_sprouts": [
            "ネザースプラウト"
        ],
        "crimson_stem": [
            "幹 (クリムゾン)"
        ],
        "warped_stem": [
            "ゆがんだ幹"
        ],
        "stripped_crimson_stem": [
            "皮のはがれたの幹 (クリムゾン)"
        ],
        "stripped_warped_stem": [
            "皮のはがれたゆがんだ幹"
        ],
        "crimson_hyphae": [
            "菌糸 (クリムゾン)"
        ],
        "warped_hyphae": [
            "ゆがんだ菌氏"
        ],
        "stripped_crimson_hyphae": [
            "皮のはがれた菌糸 (クリムゾン)"
        ],
        "stripped_warped_hyphae": [
            "皮のはがれたゆがんだ菌糸"
        ],
        "crimson_planks": [
            "木材 (クリムゾン)"
        ],
        "warped_planks": [
            "ゆがんだ木材"
        ],
        "crimson_trapdoor": [
            "トラップドア (クリムゾン)"
        ],
        "warped_trapdoor": [
            "ゆがんだトラップドア"
        ],
        "crimson_standing_sign": [
            "看板 (クリムゾン)"
        ],
        "warped_standing_sign": [
            "ゆがんだ看板"
        ],
        "crimson_wall_sign": [
            "看板 (クリムゾン)"
        ],
        "warped_wall_sign": [
            "ゆがんだ看板"
        ],
        "crimson_stairs": [
            "階段 (クリムゾン)"
        ],
        "warped_stairs": [
            "ゆがんだ階段"
        ],
        "crimson_fence": [
            "柵 (クリムゾン)"
        ],
        "warped_fence": [
            "ゆがんだ柵"
        ],
        "crimson_fence_gate": [
            "柵のゲート (クリムゾン)"
        ],
        "warped_fence_gate": [
            "ゆがんだ柵のゲート"
        ],
        "crimson_button": [
            "ボタン (クリムゾン)"
        ],
        "warped_button": [
            "ゆがんだボタン"
        ],
        "crimson_pressure_plate": [
            "重量感知板 (クリムゾン)"
        ],
        "warped_pressure_plate": [
            "ゆがんだ重量感知板"
        ],
        "crimson_slab": [
            "ハーフブロック (クリムゾン)"
        ],
        "warped_slab": [
            "ゆがんだハーフブロック"
        ],
        "crimson_double_slab": [
            "ハーフブロック (クリムゾン)"
        ],
        "warped_double_slab": [
            "ゆがんだハーフブロック"
        ],
        "shroomlight": [
            "きのこライト"
        ],
        "crimson_nylium": [
            "ニリウム (クリムゾン)"
        ],
        "warped_nylium": [
            "ゆがんだニリウム"
        ],
        "basalt": [
            "玄武岩"
        ],
        "polished_basalt": [
            "磨かれた玄武岩"
        ],
        "blackstone": [
            "ブラックストーン"
        ],
        "polished_blackstone_bricks": [
            "磨かれたブラックストーン レンガ"
        ],
        "cracked_polished_blackstone_bricks": [
            "ひび割れた磨かれたブラックストーンレンガ"
        ],
        "polished_blackstone_brick_stairs": [
            "磨かれたブラックストーン レンガの階段"
        ],
        "blackstone_stairs": [
            "ブラックストーンの階段"
        ],
        "blackstone_wall": [
            "ブラックストーン壁"
        ],
        "polished_blackstone_brick_wall": [
            "磨かれたブラックストーン レンガの壁"
        ],
        "chiseled_polished_blackstone": [
            "模様入り磨かれたブラックストーン"
        ],
        "gilded_blackstone": [
            "金色のブラックストーン"
        ],
        "blackstone_slab": [
            "ブラックストーンのハーフブロック"
        ],
        "polished_blackstone_brick_slab": [
            "磨かれたブラックストーン レンガのハーフブロック"
        ],
        "chain": [
            "チェーン"
        ],
        "soul_soil": [
            "ソウル土壌"
        ],
        "soul_fire": [
            "ソウル ファイア"
        ],
        "polished_blackstone": [
            "磨かれたブラックストーン"
        ],
        "polished_blackstone_stairs": [
            "磨かれたブラックストーンの階段"
        ],
        "polished_blackstone_slab": [
            "磨かれたブラックストーンのハーフブロック"
        ],
        "polished_blackstone_pressure_plate": [
            "磨かれたブラックストーンの重量感知板"
        ],
        "polished_blackstone_button": [
            "磨かれたブラックストーンのボタン"
        ],
        "polished_blackstone_wall": [
            "磨かれたブラックストーンの壁"
        ],
        "soul_campfire": [
            "ソウルたき火"
        ],
        "chiseled_nether_bricks": [
            "模様入りネザーレンガ"
        ],
        "cracked_nether_bricks": [
            "ひび割れたネザーレンガ"
        ],
        "quartz_bricks": [
            "クォーツ レンガ"
        ],
        "trapped_chest": [
            "トラップ チェスト"
        ],
        "shulkerBoxWhite": [
            "白のシュルカー ボックス"
        ],
        "shulkerBoxOrange": [
            "オレンジのシュルカー ボックス"
        ],
        "shulkerBoxMagenta": [
            "赤紫のシュルカー ボックス"
        ],
        "shulkerBoxLightBlue": [
            "空色のシュルカー ボックス"
        ],
        "shulkerBoxYellow": [
            "黄色のシュルカー ボックス"
        ],
        "shulkerBoxLime": [
            "黄緑のシュルカー ボックス"
        ],
        "shulkerBoxPink": [
            "ピンクのシュルカー ボックス"
        ],
        "shulkerBoxGray": [
            "灰色のシュルカー ボックス"
        ],
        "shulkerBoxSilver": [
            "薄灰色のシュルカー ボックス"
        ],
        "shulkerBoxCyan": [
            "水色のシュルカー ボックス"
        ],
        "shulkerBoxPurple": [
            "紫のシュルカー ボックス"
        ],
        "shulkerBoxBlue": [
            "青のシュルカー ボックス"
        ],
        "shulkerBoxBrown": [
            "茶色のシュルカー ボックス"
        ],
        "shulkerBoxGreen": [
            "緑のシュルカー ボックス"
        ],
        "shulkerBoxRed": [
            "赤のシュルカー ボックス"
        ],
        "shulkerBoxBlack": [
            "黒のシュルカー ボックス"
        ],
        "shulkerBox": [
            "シュルカー ボックス"
        ],
        "chorus_flower": [
            "コーラスの花"
        ],
        "chorus_plant": [
            "コーラス プラント"
        ],
        "stained_glass": [
            "白のステンドグラス",
            "白のステンドグラス",
            "オレンジのステンドグラス",
            "赤紫のステンドグラス",
            "空色の色付きガラス",
            "黄色のステンドグラス",
            "黄緑のステンドグラス",
            "ピンクのステンドグラス",
            "灰色のステンドグラス",
            "薄灰色のステンドグラス",
            "水色の色付きガラス",
            "紫のステンドグラス",
            "青のステンドグラス",
            "茶色のステンドグラス",
            "緑のステンドグラス",
            "赤のステンドグラス",
            "黒のステンドグラス"
        ],
        "stained_glass_pane": [
            "白のステンドグラス窓",
            "白のステンドグラス窓",
            "オレンジのステンドグラス窓",
            "赤紫のステンドグラス窓",
            "空色の色付きガラス板",
            "黄色のステンドグラス窓",
            "黄緑のステンドグラス窓",
            "ピンクのステンドグラス窓",
            "灰色のステンドグラス窓",
            "薄灰色のステンドグラス窓",
            "水色のステンドグラス窓",
            "紫のステンドグラス窓",
            "青のステンドグラス窓",
            "茶色のステンドグラス窓",
            "緑のステンドグラス窓",
            "赤のステンドグラス窓",
            "黒のステンドグラス窓"
        ],
        "clay": [
            "粘土ブロック"
        ],
        "hardened_clay": [
            "テラコッタ"
        ],
        "stained_hardened_clay": [
            "テラコッタ",
            "白のテラコッタ",
            "オレンジのテラコッタ",
            "赤紫のテラコッタ",
            "空色のテラコッタ",
            "黄色のテラコッタ",
            "黄緑のテラコッタ",
            "ピンクのテラコッタ",
            "灰色のテラコッタ",
            "薄灰色のテラコッタ",
            "水色のテラコッタ",
            "紫のテラコッタ",
            "青のテラコッタ",
            "茶色のテラコッタ",
            "緑のテラコッタ",
            "赤のテラコッタ",
            "黒のテラコッタ"
        ],
        "structure_block": [
            "ストラクチャー ブロック"
        ],
        "structure_void": [
            "ストラクチャー ヴォイド"
        ],
        "wool": [
            "ウール",
            "白のウール",
            "オレンジのウール",
            "赤紫のウール",
            "空色のウール",
            "黄色のウール",
            "黄緑のウール",
            "ピンクのウール",
            "灰色のウール",
            "薄灰色のウール",
            "水色のウール",
            "紫のウール",
            "青のウール",
            "茶色のウール",
            "緑のウール",
            "赤のウール",
            "黒のウール"
        ],
        "cobblestone_wall": [
            "丸石の壁",
            "丸石の壁",
            "苔の生えた丸石の壁",
            "花崗岩の壁",
            "閃緑岩の壁",
            "安山岩の壁",
            "砂岩の壁",
            "レンガの壁",
            "石レンガの壁",
            "苔の生えた石レンガの壁",
            "エンドストーンレンガの壁",
            "ネザーレンガの壁",
            "海晶ブロックの壁",
            "赤砂岩の壁",
            "赤いネザーレンガの壁"
        ],
        "cocoa": [
            "ココア"
        ],
        "command_block": [
            "コマンドブロック"
        ],
        "composter": [
            "コンポスター"
        ],
        "light_block": [
            "光ブロック"
        ],
        "repeating_command_block": [
            "コマンドブロックの反復"
        ],
        "chain_command_block": [
            "コマンドブロックのチェーン"
        ],
        "darkOakFence": [
            "黒樫の木の柵"
        ],
        "dark_oak_fence_gate": [
            "黒樫の木の柵のゲート"
        ],
        "daylight_detector": [
            "日照センサー"
        ],
        "deadbush": [
            "枯れ木"
        ],
        "detector_rail": [
            "感知レール"
        ],
        "dirt": [
            "土",
            "土",
            "荒れた土"
        ],
        "podzol": [
            "ポドゾル"
        ],
        "purpur_block": [
            "プルプァ ブロック",
            "プルプァ ブロック",
            "模様入りプルプァ",
            "プルプァの柱"
        ],
        "dispenser": [
            "発射装置"
        ],
        "doorWood": [
            "木のドア"
        ],
        "double_plant": [
            "植物",
            "ヒマワリ",
            "ライラック",
            "背の高い草",
            "大きなシダ",
            "バラの低木",
            "ボタン"
        ],
        "dragon_egg": [
            "ドラゴンの卵"
        ],
        "dropper": [
            "ドロッパー"
        ],
        "enchanting_table": [
            "エンチャントテーブル"
        ],
        "enderChest": [
            "エンダー チェスト"
        ],
        "end_portal_frame": [
            "エンドポータル"
        ],
        "farmland": [
            "農地"
        ],
        "fletching_table": [
            "矢細工台"
        ],
        "fence": [
            "樫の木の柵"
        ],
        "fence_gate": [
            "樫の木の柵のゲート"
        ],
        "iron_bars": [
            "鉄格子"
        ],
        "fire": [
            "火"
        ],
        "yellow_flower": [
            "花",
            "タンポポ"
        ],
        "red_flower": [
            "花",
            "ポピー",
            "ヒスイラン",
            "アリウム",
            "ヒナソウ",
            "赤のチューリップ",
            "オレンジのチューリップ",
            "白のチューリップ",
            "ピンクのチューリップ",
            "フランスギク",
            "ヤグルマギク",
            "スズラン"
        ],
        "wither_rose": [
            "ウィザーのバラ"
        ],
        "furnace": [
            "かまど"
        ],
        "glass": [
            "ガラス"
        ],
        "golden_rail": [
            "加速レール"
        ],
        "grass": [
            "草ブロック"
        ],
        "grass_path": [
            "草の道"
        ],
        "gravel": [
            "砂利"
        ],
        "hay_block": [
            "干し草の俵"
        ],
        "netherrack": [
            "ネザーレック"
        ],
        "soul_sand": [
            "ソウルサンド"
        ],
        "hopper": [
            "ホッパー"
        ],
        "ice": [
            "氷"
        ],
        "packed_ice": [
            "氷塊"
        ],
        "blue_ice": [
            "青の氷"
        ],
        "iron_trapdoor": [
            "鉄のトラップドア"
        ],
        "jukebox": [
            "ジュークボックス"
        ],
        "jungleFence": [
            "ジャングルの木の柵"
        ],
        "jungle_fence_gate": [
            "ジャングルの木の柵のゲート"
        ],
        "ladder": [
            "はしご"
        ],
        "flowing_lava": [
            "溶岩"
        ],
        "leaves2": [
            "アカシアの葉",
            "アカシアの葉",
            "黒樫の木の葉"
        ],
        "lever": [
            "レバー"
        ],
        "glowstone": [
            "グロウストーン"
        ],
        "lit_pumpkin": [
            "ジャック・オ・ランタン"
        ],
        "lockedchest": [
            "鍵つきチェスト"
        ],
        "log2": [
            "アカシアの丸太",
            "アカシアの丸太",
            "黒樫の丸太"
        ],
        "log": [
            "丸太",
            "樫の丸太",
            "トウヒの丸太",
            "樺の丸太",
            "ジャングルの木の丸太"
        ],
        "magma": [
            "マグマ ブロック"
        ],
        "melon_block": [
            "スイカ"
        ],
        "mob_spawner": [
            "モンスター スポーナー"
        ],
        "monster_egg": [
            "虫食い石",
            "虫食い石",
            "虫食い丸石",
            "虫食い石レンガ",
            "虫食いの苔の生えた石レンガ",
            "虫食いのひび割れた石レンガ",
            "虫食いの模様入り石レンガ"
        ],
        "mushroom": [
            "きのこ"
        ],
        "noteblock": [
            "音ブロック"
        ],
        "mycelium": [
            "菌糸"
        ],
        "nether_brick": [
            "ネザーレンガ ブロック"
        ],
        "red_nether_brick": [
            "赤いネザーレンガ"
        ],
        "nether_brick_fence": [
            "ネザーレンガの柵"
        ],
        "quartz_ore": [
            "ネザークォーツ鉱石"
        ],
        "netherreactor": [
            "闇のリアクター コア"
        ],
        "nether_wart_block": [
            "ネザーウォートブロック"
        ],
        "warped_wart_block": [
            "ゆがんだウォートブロック"
        ],
        "unlit_redstone_torch": [
            "レッドストーンのたいまつ"
        ],
        "redstone_torch": [
            "レッドストーンのたいまつ"
        ],
        "soul_torch": [
            "ソウルたいまつ"
        ],
        "obsidian": [
            "黒曜石"
        ],
        "coal_ore": [
            "石炭鉱石"
        ],
        "diamond_ore": [
            "ダイヤモンド鉱石"
        ],
        "emerald_ore": [
            "エメラルド鉱石"
        ],
        "gold_ore": [
            "金鉱石"
        ],
        "iron_ore": [
            "鉄鉱石"
        ],
        "lapis_ore": [
            "ラピスラズリ鉱石"
        ],
        "redstone_ore": [
            "レッドストーン鉱石"
        ],
        "oreRuby": [
            "ルビー鉱石"
        ],
        "observer": [
            "観察者"
        ],
        "piston": [
            "ピストン"
        ],
        "sticky_piston": [
            "吸着ピストン"
        ],
        "portal": [
            "ポータル"
        ],
        "potatoes": [
            "ジャガイモ"
        ],
        "stone_pressure_plate": [
            "石の感圧板"
        ],
        "wooden_pressure_plate": [
            "樫の木の重量感知板"
        ],
        "acacia_pressure_plate": [
            "アカシアの重量感知板"
        ],
        "birch_pressure_plate": [
            "樺の木の重量感知板"
        ],
        "dark_oak_pressure_plate": [
            "黒樫の木の重量感知板"
        ],
        "jungle_pressure_plate": [
            "ジャングルの木の重量感知板"
        ],
        "spruce_pressure_plate": [
            "トウヒの木の重量感知板"
        ],
        "prismarine": [
            "海晶ブロック",
            "海晶ブロック",
            "海晶レンガ",
            "暗海晶ブロック"
        ],
        "pumpkin": [
            "カボチャ"
        ],
        "pumpkin_stem": [
            "カボチャの茎"
        ],
        "quartz_block": [
            "クォーツのブロック",
            "クォーツのブロック",
            "模様入りクォーツのブロック",
            "柱状のクォーツのブロック",
            "なめらかなクォーツ ブロック"
        ],
        "rail": [
            "レール"
        ],
        "red_mushroom": [
            "キノコ (赤)"
        ],
        "crimson_fungus": [
            "きのこ (クリムゾン)"
        ],
        "warped_fungus": [
            "ゆがんだきのこ"
        ],
        "red_mushroom_block": [
            "きのこブロック (赤)"
        ],
        "red_sandstone": [
            "赤砂岩",
            "赤砂岩",
            "模様入りの赤砂岩",
            "カットされた赤砂岩",
            "滑らかな赤砂岩"
        ],
        "redstone_wire": [
            "レッドストーンの粉"
        ],
        "redstone_lamp": [
            "レッドストーン ランプ"
        ],
        "sand": [
            "砂",
            "砂",
            "赤砂"
        ],
        "sandstone": [
            "砂岩",
            "砂岩",
            "模様入り砂岩",
            "カットされた砂岩",
            "なめらかな砂岩"
        ],
        "sapling": [
            "樫の苗木",
            "樫の苗木",
            "トウヒの苗木",
            "樺の苗木",
            "ジャングルの苗木",
            "アカシアの苗木",
            "黒樫の苗木"
        ],
        "seaLantern": [
            "海のランタン"
        ],
        "standing_sign": [
            "看板"
        ],
        "spruce_standing_sign": [
            "トウヒの看板"
        ],
        "birch_standing_sign": [
            "樺の看板"
        ],
        "jungle_standing_sign": [
            "ジャングルの木の看板"
        ],
        "acacia_standing_sign": [
            "アカシアの看板"
        ],
        "darkoak_standing_sign": [
            "黒樫の看板"
        ],
        "slime": [
            "スライムブロック"
        ],
        "snow": [
            "雪"
        ],
        "sponge": [
            "スポンジ",
            "スポンジ",
            "ぬれたスポンジ"
        ],
        "spruceFence": [
            "トウヒの木の柵"
        ],
        "spruce_fence_gate": [
            "トウヒの木の柵のゲート"
        ],
        "brick_stairs": [
            "レンガ階段"
        ],
        "nether_brick_stairs": [
            "ネザーレンガ階段"
        ],
        "quartz_stairs": [
            "クォーツの階段"
        ],
        "smooth_quartz_stairs": [
            "なめらかなクォーツの階段"
        ],
        "red_sandstone_stairs": [
            "赤砂岩の階段"
        ],
        "sandstone_stairs": [
            "砂岩の階段"
        ],
        "stone_stairs": [
            "丸石の階段"
        ],
        "normal_stone_stairs": [
            "石の階段"
        ],
        "stone_brick_stairs": [
            "石レンガ階段"
        ],
        "oak_stairs": [
            "樫の階段"
        ],
        "acacia_stairs": [
            "アカシアの木の階段"
        ],
        "birch_stairs": [
            "樺の階段"
        ],
        "dark_oak_stairs": [
            "黒樫の木の階段"
        ],
        "jungle_stairs": [
            "ジャングルの木の階段"
        ],
        "spruce_stairs": [
            "トウヒの階段"
        ],
        "purpur_stairs": [
            "プルプァの階段"
        ],
        "prismarine_stairs": [
            "海晶ブロックの階段"
        ],
        "dark_prismarine_stairs": [
            "暗海晶ブロックの階段"
        ],
        "prismarine_bricks_stairs": [
            "海晶レンガの階段"
        ],
        "granite_stairs": [
            "花崗岩の階段"
        ],
        "diorite_stairs": [
            "閃緑岩の階段"
        ],
        "andesite_stairs": [
            "安山岩の階段"
        ],
        "polished_granite_stairs": [
            "磨かれた花崗岩の階段"
        ],
        "polished_diorite_stairs": [
            "磨かれた閃緑岩の階段"
        ],
        "polished_andesite_stairs": [
            "磨かれた安山岩の階段"
        ],
        "mossy_stone_brick_stairs": [
            "苔の生えた石レンガの階段"
        ],
        "smooth_red_sandstone_stairs": [
            "なめらかな赤砂岩の階段"
        ],
        "smooth_sandstone_stairs": [
            "なめらかな砂岩の階段"
        ],
        "end_brick_stairs": [
            "エンドストーンレンガの階段"
        ],
        "mossy_cobblestone_stairs": [
            "苔の生えた丸石の階段"
        ],
        "red_nether_brick_stairs": [
            "赤いネザーレンガの階段"
        ],
        "smooth_stone": [
            "なめらかな石"
        ],
        "standing_banner": [
            "旗",
            "黒の旗",
            "赤の旗",
            "緑の旗",
            "茶色の旗",
            "青の旗",
            "紫の旗",
            "水色の旗",
            "薄灰色の旗",
            "灰色の旗",
            "ピンクの旗",
            "黄緑の旗",
            "黄色の旗",
            "空色の旗",
            "赤紫の旗",
            "オレンジの旗",
            "旗"
        ],
        "stone": [
            "石",
            "石",
            "花崗岩",
            "磨かれた花崗岩",
            "閃緑岩",
            "磨かれた閃緑岩",
            "安山岩",
            "磨かれた安山岩"
        ],
        "cobblestone": [
            "丸石"
        ],
        "stonebrick": [
            "石レンガ",
            "石レンガ",
            "苔の生えた石レンガ",
            "模様入り石レンガ"
        ],
        "stonecutter": [
            "ストーン カッター"
        ],
        "stonecutter_block": [
            "ストーンカッター"
        ],
        "mossy_cobblestone": [
            "苔の生えた丸石"
        ],
        "double_stone_slab": [
            "石ハーフブロック",
            "石ハーフブロック",
            "砂岩ハーフブロック",
            "木材ハーフブロック",
            "丸石ハーフブロック",
            "レンガのハーフブロック",
            "石レンガハーフブロック",
            "クォーツのハーフブロック",
            "ネザーレンガのハーフブロック"
        ],
        "stone_slab": [
            "石ハーフブロック",
            "なめらかな石ハーフブロック",
            "砂岩ハーフブロック",
            "木材ハーフブロック",
            "丸石ハーフブロック",
            "レンガハーフブロック",
            "石レンガハーフブロック",
            "クォーツのハーフブロック",
            "ネザーレンガのハーフブロック"
        ],
        "double_stone_slab2": [
            "赤砂岩のハーフブロック",
            "赤砂岩のハーフブロック"
        ],
        "stone_slab2": [
            "赤砂岩のハーフブロック",
            "赤砂岩のハーフブロック",
            "プルプァのハーフブロック",
            "海晶ブロックのハーフブロック",
            "海晶レンガのハーフブロック",
            "暗海晶ブロックのハーフブロック",
            "苔の生えた丸石ハーフブロック",
            "なめらかな砂岩ハーフブロック",
            "赤いネザーレンガのハーフブロック"
        ],
        "stone_slab3": [
            "エンドストーンレンガ ハーフブロック",
            "エンドストーンレンガ ハーフブロック",
            "なめらかな赤砂岩ハーフブロック",
            "磨かれた安山岩ハーフブロック",
            "安山岩ハーフブロック",
            "閃緑岩ハーフブロック",
            "磨かれた閃緑岩ハーフブロック",
            "花崗岩ハーフブロック",
            "磨かれた花崗岩ハーフブロック"
        ],
        "stone_slab4": [
            "苔の生えた石レンガ ハーフブロック",
            "苔の生えた石レンガ ハーフブロック",
            "なめらかなクォーツ ハーフブロック",
            "石ハーフブロック",
            "カットされた砂岩ハーフブロック",
            "カットされた赤砂岩ハーフブロック"
        ],
        "coral_block": [
            "クダサンゴのブロック",
            "クダサンゴのブロック",
            "脳サンゴのブロック",
            "ミズタマサンゴのブロック",
            "アナサンゴモドキのブロック",
            "四放サンゴのブロック",
            "枯れたクダサンゴのブロック",
            "枯れた脳サンゴのブロック",
            "枯れたミズタマサンゴのブロック",
            "枯れたアナサンゴモドキのブロック",
            "枯れた四放サンゴのブロック"
        ],
        "tallgrass": [
            "草",
            "草",
            "シダ"
        ],
        "seagrass": [
            "海草",
            "海草"
        ],
        "sea_pickle": [
            "ナマコ"
        ],
        "turtle_egg": [
            "ウミガメのタマゴ"
        ],
        "coral": [
            "クダサンゴ",
            "クダサンゴ",
            "脳サンゴ",
            "ミズタマサンゴ",
            "アナサンゴモドキ",
            "四放サンゴ",
            "枯れたクダサンゴ",
            "枯れた脳サンゴ",
            "枯れたミズタマサンゴ",
            "枯れたアナサンゴモドキ",
            "枯れた四放サンゴ"
        ],
        "coral_fan": [
            "軟質クダサンゴ",
            "軟質クダサンゴ",
            "軟質脳サンゴ",
            "軟質ミズタマサンゴ",
            "軟質アナサンゴモドキ",
            "軟質四放サンゴ"
        ],
        "coral_fan_dead": [
            "枯れた軟質クダサンゴ",
            "枯れた軟質クダサンゴ",
            "枯れた軟質脳サンゴ",
            "枯れた軟質ミズタマサンゴ",
            "枯れた軟質アナサンゴモドキ",
            "枯れた軟質四放サンゴ"
        ],
        "glass_pane": [
            "ガラス板"
        ],
        "tnt": [
            "TNT 火薬"
        ],
        "snow_layer": [
            "積雪"
        ],
        "torch": [
            "たいまつ"
        ],
        "trapdoor": [
            "樫の木のトラップドア"
        ],
        "acacia_trapdoor": [
            "アカシアのトラップドア"
        ],
        "birch_trapdoor": [
            "樺の木のトラップドア"
        ],
        "dark_oak_trapdoor": [
            "黒樫の木のトラップドア"
        ],
        "jungle_trapdoor": [
            "ジャングルの木のトラップドア"
        ],
        "spruce_trapdoor": [
            "トウヒの木のトラップドア"
        ],
        "tripWire": [
            "トリップワイヤー"
        ],
        "tripwire_hook": [
            "トリップワイヤー フック"
        ],
        "vine": [
            "つた"
        ],
        "weeping_vines": [
            "ウィーピングつた"
        ],
        "twisting_vines": [
            "ねじれたつた"
        ],
        "flowing_water": [
            "水"
        ],
        "water": [
            "水"
        ],
        "waterlily": [
            "スイレンの葉"
        ],
        "web": [
            "クモの巣"
        ],
        "heavy_weighted_pressure_plate": [
            "重量感知板 (重)"
        ],
        "light_weighted_pressure_plate": [
            "重量感知板 (軽)"
        ],
        "end_stone": [
            "エンドストーン"
        ],
        "end_bricks": [
            "エンドストーンレンガ"
        ],
        "planks": [
            "木材",
            "樫の木材",
            "トウヒの木材",
            "樺の木材",
            "ジャングルの木の木材",
            "アカシアの木材",
            "黒樫の木材"
        ],
        "wooden_slab": [
            "木のハーフブロック",
            "樫のハーフブロック",
            "トウヒのハーフブロック",
            "樺のハーフブロック",
            "ジャングルの木のハーフブロック",
            "アカシアの木のハーフブロック",
            "黒樫の木のハーフブロック"
        ],
        "carpet": [
            "カーペット",
            "黒のカーペット",
            "赤のカーペット",
            "緑のカーペット",
            "茶色のカーペット",
            "青のカーペット",
            "紫のカーペット",
            "水色のカーペット",
            "薄灰色のカーペット",
            "灰色のカーペット",
            "ピンクのカーペット",
            "黄緑のカーペット",
            "黄色のカーペット",
            "空色のカーペット",
            "赤紫のカーペット",
            "オレンジのカーペット",
            "白のカーペット"
        ],
        "crafting_table": [
            "作業台"
        ],
        "white_glazed_terracotta": [
            "白の彩釉テラコッタ",
            "白の彩釉テラコッタ"
        ],
        "orange_glazed_terracotta": [
            "オレンジの彩釉テラコッタ",
            "オレンジの彩釉テラコッタ"
        ],
        "magenta_glazed_terracotta": [
            "赤紫の彩釉テラコッタ",
            "赤紫の彩釉テラコッタ"
        ],
        "light_blue_glazed_terracotta": [
            "空色の彩釉テラコッタ",
            "空色の彩釉テラコッタ"
        ],
        "yellow_glazed_terracotta": [
            "黄色の彩釉テラコッタ",
            "黄色の彩釉テラコッタ"
        ],
        "lime_glazed_terracotta": [
            "黄緑の彩釉テラコッタ",
            "黄緑の彩釉テラコッタ"
        ],
        "pink_glazed_terracotta": [
            "ピンクの彩釉テラコッタ",
            "ピンクの彩釉テラコッタ"
        ],
        "gray_glazed_terracotta": [
            "灰色の彩釉テラコッタ",
            "灰色の彩釉テラコッタ"
        ],
        "silver_glazed_terracotta": [
            "薄灰色の彩釉テラコッタ",
            "薄灰色の彩釉テラコッタ"
        ],
        "cyan_glazed_terracotta": [
            "水色の彩釉テラコッタ",
            "水色の彩釉テラコッタ"
        ],
        "purple_glazed_terracotta": [
            "紫の彩釉テラコッタ",
            "紫の彩釉テラコッタ"
        ],
        "blue_glazed_terracotta": [
            "青の彩釉テラコッタ",
            "青の彩釉テラコッタ"
        ],
        "brown_glazed_terracotta": [
            "茶色の彩釉テラコッタ",
            "茶色の彩釉テラコッタ"
        ],
        "green_glazed_terracotta": [
            "緑の彩釉テラコッタ",
            "緑の彩釉テラコッタ"
        ],
        "red_glazed_terracotta": [
            "赤の彩釉テラコッタ",
            "赤の彩釉テラコッタ"
        ],
        "black_glazed_terracotta": [
            "黒の彩釉テラコッタ",
            "黒の彩釉テラコッタ"
        ],
        "concrete": [
            "白のコンクリート",
            "白のコンクリート",
            "オレンジのコンクリート",
            "赤紫のコンクリート",
            "空色のコンクリート",
            "黄色のコンクリート",
            "黄緑のコンクリート",
            "ピンクのコンクリート",
            "灰色のコンクリート",
            "薄灰色のコンクリート",
            "水色のコンクリート",
            "紫のコンクリート",
            "青のコンクリート",
            "茶色のコンクリート",
            "緑のコンクリート",
            "赤のコンクリート",
            "黒のコンクリート"
        ],
        "glazedTerracottaWhite": [
            "白の彩釉テラコッタ"
        ],
        "glazedTerracottaOrange": [
            "オレンジの彩釉テラコッタ"
        ],
        "glazedTerracottaMagenta": [
            "赤紫の彩釉テラコッタ"
        ],
        "glazedTerracottaLightBlue": [
            "空色の彩釉テラコッタ"
        ],
        "glazedTerracottaYellow": [
            "黄色の彩釉テラコッタ"
        ],
        "glazedTerracottaLime": [
            "黄緑の彩釉テラコッタ"
        ],
        "glazedTerracottaPink": [
            "ピンクの彩釉テラコッタ"
        ],
        "glazedTerracottaGray": [
            "灰色の彩釉テラコッタ"
        ],
        "glazedTerracottaSilver": [
            "薄灰色の彩釉テラコッタ"
        ],
        "glazedTerracottaCyan": [
            "水色の彩釉テラコッタ"
        ],
        "glazedTerracottaPurple": [
            "紫の彩釉テラコッタ"
        ],
        "glazedTerracottaBlue": [
            "青の彩釉テラコッタ"
        ],
        "glazedTerracottaBrown": [
            "茶色の彩釉テラコッタ"
        ],
        "glazedTerracottaGreen": [
            "緑の彩釉テラコッタ"
        ],
        "glazedTerracottaRed": [
            "赤の彩釉テラコッタ"
        ],
        "glazedTerracottaBlack": [
            "黒の彩釉テラコッタ"
        ],
        "concretePowder": [
            "白のコンクリート パウダー",
            "白のコンクリート パウダー",
            "オレンジのコンクリート パウダー",
            "赤紫のコンクリート パウダー",
            "空色のコンクリート パウダー",
            "黄色のコンクリート パウダー",
            "黄緑のコンクリート パウダー",
            "ピンクのコンクリート パウダー",
            "灰色のコンクリート パウダー",
            "薄灰色のコンクリート パウダー",
            "水色のコンクリート パウダー",
            "紫のコンクリート パウダー",
            "青のコンクリート パウダー",
            "茶色のコンクリート パウダー",
            "緑のコンクリート パウダー",
            "赤のコンクリート パウダー",
            "黒のコンクリート パウダー"
        ],
        "stripped_spruce_log": [
            "皮のはがれたトウヒの丸太"
        ],
        "stripped_dark_oak_log": [
            "皮のはがれた黒樫の丸太"
        ],
        "stripped_birch_log": [
            "皮のはがれた樺の丸太"
        ],
        "stripped_jungle_log": [
            "皮のはがれたジャングルの丸太"
        ],
        "stripped_oak_log": [
            "皮のはがれた樫の丸太"
        ],
        "stripped_acacia_log": [
            "皮のはがれたアカシアの丸太"
        ],
        "bamboo": [
            "竹"
        ],
        "scaffolding": [
            "足場"
        ],
        "grindstone": [
            "石臼"
        ],
        "cartography_table": [
            "製図台"
        ],
        "lantern": [
            "ランタン"
        ],
        "soul_lantern": [
            "ソウル ランタン"
        ],
        "smoker": [
            "燻製器"
        ],
        "smithing_table": [
            "鍛冶台"
        ],
        "barrel": [
            "タル"
        ],
        "campfire": [
            "たき火"
        ],
        "loom": [
            "織機"
        ],
        "lectern": [
            "書見台"
        ],
        "sweet_berry_bush": [
            "スイート ベリーの茂み"
        ],
        "wood": [
            "樫の木",
            "樫の木",
            "トウヒの木",
            "樺の木",
            "ジャングルの木",
            "アカシアの原木",
            "黒樫の木",
            null,
            null,
            "皮のはがれた樫の木",
            "皮のはがれたトウヒの木",
            "皮のはがれた樺の木",
            "皮のはがれたジャングルの木",
            "皮のはがれたアカシアの原木",
            "皮のはがれた黒樫の木"
        ],
        "netherite_block": [
            "ネテライトのブロック"
        ],
        "ancient_debris": [
            "古代のがれき"
        ],
        "nether_gold_ore": [
            "ネザーゴールド鉱石"
        ],
        "respawn_anchor": [
            "リスポーン アンカー"
        ],
        "crying_obsidian": [
            "泣く黒曜石"
        ]
    }
};
freeze(lang_data);
export = lang_data;
