
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
    id: "ko_KR" as LangId,
    commands:{
        "ability_description": "플레이어 능력을 설정합니다.",
        "ability_noability": "'%1$s'은(는) 존재하지 않는 능력입니다",
        "ability_granted": "'%1$s' 능력이 부여되었습니다",
        "ability_revoked": "'%1$s' 능력이 취소되었습니다.",
        "ability_success": "능력이 업데이트되었습니다.",
        "achievement_alreadyHave": "%1$s님은 %2$s 도전 과제를 이미 달성했습니다",
        "achievement_description": "플레이어의 도전 과제를 추가하거나 제거합니다.",
        "achievement_dontHave": "%1$s님은 %2$s 도전 과제가 없습니다",
        "achievement_give_success_all": "%1$s님에게 모든 도전 과제가 추가되었습니다",
        "achievement_give_success_one": "%1$s님에게 %2$s 통계가 추가되었습니다",
        "achievement_statTooLow": "%1$s님은 %2$s 통계가 없습니다",
        "achievement_take_success_all": "%1$s님의 모든 도전 과제가 초기화되었습니다",
        "achievement_take_success_one": "%2$s님의 %1$s 통계가 삭제되었습니다",
        "achievement_unknownAchievement": "'%1$s'(은)는 확인되지 않은 도전 과제/통계입니다",
        "agent_attack_success": "Agent 공격 성공",
        "agent_attack_failed": "Agent 공격 실패",
        "agent_collect_success": "Agent 수집 성공",
        "agent_collect_failed": "Agent 수집 실패",
        "agent_createagent_success": "Agent 생성됨",
        "agent_createagent_failed": "Agent 생성 불가",
        "agent_destroy_success": "Agent가 블록 파괴함",
        "agent_destroy_failed": "Agent가 파괴에 실패",
        "agent_detect_success": "Agent가 탐지 성공",
        "agent_detect_failed": "Agent가 탐지 실패",
        "agent_detectredstone_success": "Agent가 detectredstone 성공",
        "agent_detectredstone_failed": "Agent가 detectredstone 실패",
        "agent_drop_success": "Agent 드롭 성공",
        "agent_drop_failed": "Agent 드롭 실패",
        "agent_dropall_success": "Agent가 dropall 성공",
        "agent_dropall_failed": "Agent가 dropall 실패",
        "agent_getitemcount_success": "Agent가 getitemcount 성공",
        "agent_getitemcount_failed": "Agent가 getitemcount 실패",
        "agent_getitemspace_success": "Agent가 getitemspace 성공",
        "agent_getitemspace_failed": "Agent가 getitemspace 실패",
        "agent_getitemdetail_success": "Agent가 getitemdetail 성공",
        "agent_getitemdetail_failed": "Agent가 getitemdetail 실패",
        "agent_getposition_success": "Agent 위치 가져오기 성공",
        "agent_getposition_failed": "Agent 위치 가져오기 실패",
        "agent_inspect_success": "Agent 검사하기 성공",
        "agent_inspect_failed": "Agent 검사하기 실패",
        "agent_inspectdata_success": "Agent 데이터 검사 성공",
        "agent_inspectdata_failed": "Agent 데이터 검사 실패",
        "agent_move_success": "Agent 이동 성공",
        "agent_move_failed": "Agent 이동 실패",
        "agent_outofrange": "Agent가 범위를 벗어나 명령을 전달할 수 없습니다",
        "agent_place_success": "Agent 배치 성공",
        "agent_place_failed": "Agent 배치 실패",
        "agent_setitem_success": "Agent 아이템 설정 성공",
        "agent_setitem_failed": "Agent 아이템 설정 실패",
        "agent_turn_success": "Agent 회전 성공",
        "agent_turn_failed": "Agent 회전 실패",
        "agent_till_success": "Agent 경작 성공",
        "agent_till_failed": "Agent 경작 실패",
        "agent_tpagent_description": "Agent를 순간이동합니다.",
        "agent_tpagent_success": "Agent 순간이동함",
        "agent_tpagent_failed": "Agent 순간이동 실패",
        "agent_transfer_success": "Agent 전송 성공",
        "agent_transfer_failed": "Agent 전송 실패",
        "always_day": "낮밤 주기 %1$s",
        "always_day_locked": "낮밤 주기 고정됨",
        "always_day_unlocked": "낮밤 주기 전환 적용됨",
        "ban_description": "플레이어를 차단 목록에 추가합니다.",
        "autocomplete_a": "모든 플레이어",
        "autocomplete_c": "내 Agent",
        "autocomplete_e": "모든 엔티티",
        "autocomplete_p": "가장 가까운 플레이어",
        "autocomplete_r": "임의의 플레이어",
        "autocomplete_s": "본인",
        "autocomplete_v": "전체 Agent",
        "ban_failed": "%1$s님을 차단할 수 없습니다",
        "ban_success": "%1$s님을 차단했습니다",
        "banip_description": "IP 주소를 차단 목록에 추가합니다.",
        "banip_invalid": "잘못된 IP 주소 또는 오프라인인 플레이어입니다",
        "banip_success": "IP 주소(%1$s)를 차단했습니다",
        "banip_success_players": "%2$s님 소유의 IP 주소(%1$s)를 차단했습니다",
        "banlist_ips": "차단한 IP 주소 총 %1$d개:",
        "banlist_players": "차단한 플레이어 총 %1$d명:",
        "blockdata_description": "블록의 데이터 태그를 수정합니다.",
        "blockdata_placeFailed": "여기엔 블록을 배치할 수 없습니다",
        "blockdata_destroyFailed": "여기는 파낼 수 없습니다",
        "blockdata_failed": "데이터 태그 변경 안 됨: %1$s",
        "blockdata_notValid": "과녁 블록이 데이터 홀더 블록이 아닙니다",
        "blockdata_outOfWorld": "월드 바깥의 블록을 변환할 수 없습니다",
        "blockdata_success": "블록 데이터 업데이트: %1$s",
        "blockdata_tagError": "데이터 태그 구문 분석 실패: %1$s",
        "bossbar_add_success": "생성된 커스텀 보스바 [%1$s]",
        "bossbar_add_failure_invalid": "사용할 수 없는 보스바 ID 입니다. ID는 namespace:id 나 id (Minecraft 기본 namespace)의 형태를 띠어야 합니다",
        "bossbar_add_failure_exists": "'%1$s' ID를 포함한 보스바가 이미 존재합니다",
        "bossbar_description": "보스 바 만들기 및 수정",
        "bossbar_get_max": "커스텀 보스바 [%1$s], %2$d 의 최대치 도달",
        "bossbar_get_players": "커스텀 보스바 [%1$s]에는 현재 %2$s 명의 플레이어가 접속중입니다: %3$s",
        "bossbar_get_players_none": "커스텀 보스바 [%1$s]에는 현재 플레이어가 접속중이지 않습니다",
        "bossbar_get_players_one": "커스텀 보스바 [%1$s]에는 현재 1명의 플레이어가 접속중입니다: %2$s",
        "bossbar_get_value": "커스텀 보스바 [%1$s], %2$d 값 도달",
        "bossbar_get_visible_true": "커스텀 보스바 [%1$s] 표시중",
        "bossbar_get_visible_false": "커스텀 보스바 [%1$s] 숨겨짐",
        "bossbar_list": "%1$s 개의 커스텀 보스바 활성화: %2$s",
        "bossbar_list_none": "활성화된 커스텀 보스바 없음",
        "bossbar_list_one": "커스텀 보스바 1개 활성화: %1$s",
        "bossbar_notFound": "'%1$s' ID 포함 보스바 없음",
        "bossbar_remove": "제거된 커스텀 보스바 [%1$s]",
        "change_setting_description": "실행 중 전용 서버의 설정을 변경합니다.",
        "change_setting_success": "%1$s 변경 완료",
        "chunkinfo_compiled": "청크가 변경되었습니다.",
        "chunkinfo_data": "최초 64개 꼭짓점: %1$s",
        "chunkinfo_empty": "청크가 비어있습니다.",
        "chunkinfo_hasLayers": "청크에 레이어 포함: %1$s",
        "chunkinfo_hasNoRenderableLayers": "청크 렌더링 가능한 층이 없습니다.",
        "chunkinfo_isEmpty": "청크에 빈 레이어 포함: %1$s",
        "chunkinfo_location": "청크 위치: (%1$d, %2$d, %3$d)",
        "chunkinfo_noChunk": "청크 위치 %1$d, %2$d, %3$d에 청크가 없습니다",
        "chunkinfo_notCompiled": "청크가 변경되지 않았습니다.",
        "chunkinfo_notEmpty": "청크가 비어 있지 않습니다.",
        "chunkinfo_vertices": "%1$s 레이어 버퍼는 %2$d개의 꼭짓점을 포함합니다",
        "classroommode_description": "클래스룸 모드 실행 및 연결을 시도합니다.",
        "classroommode_success": "클래스룸 모드 실행을 시도하는 중...",
        "clear_description": "플레이어 소지품에서 모든 아이템을 제거합니다.",
        "clear_failure": "%1$s님의 소지품을 삭제할 수 없습니다",
        "clear_failure_no_items": "%1$s님의 소지품을 삭제할 수 없습니다(삭제할 아이템 없음)",
        "clear_success": "%1$s님의 소지품에서 %2$d개의 아이템을 제거했습니다",
        "clear_tagError": "데이터 태그 구문 분석 실패: %1$s",
        "clear_testing": "기준에 일치하는 %1의 항목: %2개",
        "clearfixedinv_description": "모든 고정 소지품 슬롯을 제거합니다.",
        "clearfixedinv_success": "고정 소지품 제거됨",
        "clone_description": "한 지역의 블록을 다른 지역으로 복제합니다.",
        "clone_failed": "복제된 블럭이 없습니다",
        "clone_filtered_error": "필터 사용에는 필터 블록이 지정되어야 합니다",
        "clone_noOverlap": "원본 및 대상이 겹칠 수 없습니다",
        "clone_outOfWorld": "월드 바깥의 블록에 접근할 수 없습니다",
        "clone_success": "블록 복제: %1$d개",
        "clone_tooManyBlocks": "지정된 영역 내 블록 수가 너무 많습니다(%1$d > %2$d)",
        "closechat_description": "로컬 플레이어의 채팅 창이 열려 있으면 닫습니다.",
        "closechat_success": "채팅 종료",
        "closechat_failure": "채팅 창 열려 있지 않음",
        "closewebsocket_description": "웹 소켓 연결이 있을 경우 닫습니다.",
        "code_description": "Code Builder를 실행합니다.",
        "code_success": "Code Builder를 실행했습니다.",
        "compare_failed": "원본과 대상은 동일할 수 없습니다",
        "compare_outOfWorld": "월드 바깥의 블록에 접근할 수 없습니다",
        "compare_success": "블록 비교: %1$d",
        "compare_tooManyBlocks": "지정된 영역 내 블록 수가 너무 많습니다(%1$d > %2$d)",
        "corruptworld_description": "서버에 불러온 월드가 손상됩니다.",
        "corruptworld_success": "월드가 손상되었습니다.",
        "daylock_description": "낮밤 주기를 고정/전환으로 설정합니다.",
        "debug_description": "디버깅 세션을 시작하거나 중지합니다.",
        "debug_notStarted": "시작하지 않은 자료 수집은 중지할 수 없습니다!",
        "debug_start": "디버그 자료 수집 시작",
        "debug_stop": "%.2f초 후 디버그 자료 수집을 중지했습니다(%1$d틱)",
        "defaultgamemode_description": "기본 게임 모드를 설정합니다.",
        "defaultgamemode_success": "현재 월드의 기본 모드: %1$s",
        "deop_description": "플레이어의 운영자 상태를 해지합니다.",
        "deop_failed": "운영자 상태 해지 실패(권한 수준이 너무 높습니다): %s",
        "deop_success": "관리자 권한 취소됨: %s",
        "deop_message": "권한이 회수되었습니다.",
        "difficulty_description": "난이도를 설정합니다.",
        "difficulty_usage": "/difficulty <new difficulty>",
        "difficulty_success": "게임 난이도가 %1$s(으)로 설정되었습니다",
        "downfall_success": "날씨가 변경되었습니다",
        "effect_description": "상태 효과를 추가하거나 제거합니다.",
        "effect_failure_notActive": "%2$s은(는) %1$s 효과를 지니지 않아 제거할 수 없습니다",
        "effect_failure_notActive_all": "%1$s에게 현재 적용된 효과가 없어 취소할 수 없습니다",
        "effect_failure_notAMob": "%1$s은(는) 효과를 부여할 수 없습니다",
        "effect_notFound": "ID %s에 해당하는 몹 효과가 없습니다",
        "effect_success": "%3$s에 효과 %1$s * %2$d 만큼을 %4$d초 동안 주었습니다",
        "effect_success_removed": "%1$s의 %2$s 효과를 제거했습니다",
        "effect_success_removed_all": "%1$s에게 적용된 모든 효과를 취소했습니다",
        "enchant_cantCombine": "%1$s은(는) %2$s와(과) 결합할 수 없습니다",
        "enchant_invalidLevel": "%1$s은(는) %2$d 레벨을 지원하지 않습니다",
        "enchant_cantEnchant": "이 효과부여는 대상 %1$s 아이템에 추가할 수 없습니다",
        "enchant_description": "플레이어가 선택한 아이템에 효과를 부여합니다.",
        "enchant_noItem": "대상이 %1$s 아이템을 들고 있지 않습니다",
        "enchant_notFound": "ID %1$d에 해당하는 효과부여가 없습니다",
        "enchant_success": "%1$s 효과부여에 성공했습니다",
        "entitydata_description": "엔티티의 데이터 태그를 수정합니다.",
        "entitydata_failed": "데이터 태그 변경 안 됨: %1$s",
        "entitydata_noPlayers": "변경 불가: %1$s은(는) 플레이어입니다",
        "entitydata_success": "엔티티 데이터 업그레이드: %1$s",
        "entitydata_tagError": "데이터 태그 구문 분석 실패: %1$s",
        "execute_allInvocationsFailed": "모든 호출 실패: '%1$s'",
        "execute_failed": "'%1$s'을(를) %2$s(으)로 실행할 수 없습니다",
        "execute_description": "한 개 이상의 엔티티를 대신해 명령을 실행합니다",
        "fill_description": "한 지역 전체 또는 일부를 특정 블록으로 채웁니다.",
        "fill_failed": "채워진 블럭이 없습니다",
        "fill_outOfWorld": "월드 바깥에 블록을 놓을 수 없습니다",
        "fill_success": "블록 채움: %1$d개",
        "fill_tagError": "데이터 태그 구문 분석 실패: %1$s",
        "fill_tooManyBlocks": "지정된 영역 내 블록 수가 너무 많습니다(%1$d > %2$d)",
        "fill_replace_auxvalue_invalid": "%1$s 블록에 대한 데이터 교체 값이 유효하지 않습니다",
        "function_description": "해당하는 행동 파일 내에서 발견된 명령어를 실행합니다.",
        "function_functionNameNotFound": "%1$s 행동을 찾을 수 없습니다.",
        "function_invalidCharacters": "%s' 제목이 있는 행동이 올바르지 않습니다. '%s' 문자는 행동 이름에 허용되지 않습니다.",
        "function_noEngineVersionSpecified": "%s 함수를 실행할 수 없습니다. 행동 팩의 manifest.json에서 min_engine_version을 지정해야 합니다.",
        "function_success": "%1$d 행동 항목을 성공적으로 실행했습니다.",
        "gamemode_description": "플레이어의 게임 모드를 설정합니다.",
        "gamemode_success_other": "%2$s님의 게임 모드를 %1$s(으)로 변경했습니다.",
        "gamemode_success_self": "내 게임 모드를 %1$s(으)로 변경했습니다.",
        "gamemode_fail_invalid": "'%1$s'은(는) 유효하지 않은 게임 모드입니다",
        "gamerule_description": "게임 규칙 값을 설정 또는 쿼리합니다.",
        "gamerule_type_invalid": "게임 규칙 '%1$s'에 사용된 유형이 유효하지 않습니다",
        "gamerule_type_nocheatsenabled": "해당 월드에서 치트를 사용할 수 있을 때만 '%1$s' 게임 규칙을 사용할 수 있습니다.",
        "gamerule_nopermission": "'%1$s' 변경은 서버 관리자만 가능합니다",
        "gamerule_norule": "'%1$s'은(는) 존재하지 않는 규칙입니다",
        "gamerule_success": "게임 규칙 %1$s이(가) %2$s(으)로 업데이트되었습니다",
        "generic_async_initiated": "'%1$s' 명령 시작됨(비동기 %2$d 단계)",
        "generic_boolean_invalid": "'%1$s' 설정이 True 또는 False가 아닙니다",
        "generic_chunk_notFound": "지정한 청크를 찾을 수 없습니다.",
        "generic_componentError": "구성 요소 목록 구문 문석 실패",
        "generic_dimension_notFound": "지정한 차원을 찾을 수 없습니다.",
        "generic_disabled": "이 레벨에서는 치트를 사용할 수 없습니다.",
        "generic_disabled_templateLocked": "현재 설정이 잠겨 있습니다. 변경하려면 게임 설정에서 템플릿 월드 옵션을 잠금 해제하세요.",
        "generic_double_tooBig": "입력한 숫자(%.2f)가 너무 큽니다. 최대 %.2f 이하여야 합니다.",
        "generic_double_tooSmall": "입력한 숫자 (%.2f)가 너무 작습니다. 최소 %.2f 이상이여야 합니다",
        "generic_duplicateType": "형식 인수 복제",
        "generic_duplicateSelectorArgument": "%s 선택기 인수 복제",
        "generic_encryption_badkey": "잘못된 공개 키 입력: PEM 서식 후 120바이트의 키가 필요합니다.",
        "generic_encryption_badsalt": "잘못된 문자열 입력: Base64 인코딩 전 16바이트의 문자열이 필요합니다.",
        "generic_encryption_required": "암호화된 세션이 필요합니다",
        "generic_entity_invalidType": "'%1$s'은(는) 유효한 엔티티 형식이 아닙니다",
        "generic_entity_invalidUuid": "제공된 엔티티 UUID는 잘못된 형식입니다",
        "generic_entity_notFound": "엔티티를 찾을 수 없습니다",
        "generic_exception": "이 명령을 수행하는 동안 알 수 없는 오류가 발생했습니다",
        "generic_invalidAgentType": "Agent 전용 셀렉터에 적용된 인수를 입력하세요",
        "generic_invalidcontext": "입력된 명령어 유형에 제공된 컨텍스트가 잘못되었습니다",
        "generic_invalidDevice": "입력하신 %s은(는) 이 장치에서 지원되지 않는 명령어입니다.",
        "generic_invalidPlayerType": "형식 인수가 player-only(플레이어 전용) 선택기에 적용되었습니다",
        "generic_invalidType": "알 수 없는 형식 인수",
        "generic_levelError": "최대 레벨은 최소 레벨보다 커야 합니다",
        "generic_malformed_body": "본문이 빠져있거나 변형되었습니다",
        "generic_malformed_type": "유효하지 않은 요청 형식입니다",
        "generic_notimplemented": "적용되지 않았습니다.",
        "generic_num_invalid": "'%1$s'은(는) 유효한 숫자가 아닙니다",
        "generic_num_tooBig": "입력한 숫자(%1$d)가 너무 큽니다(허용치: 최대 %2$d)",
        "generic_num_tooSmall": "입력한 숫자(%1$d)가 너무 작습니다(허용치: 최소 %2$d)",
        "generic_parameter_invalid": "'%1$s' 은(는) 유효한 매개 변수가 아닙니다",
        "generic_permission_selector": "<선택기 확장에 필요한 권한 부족>",
        "generic_player_notFound": "플레이어를 찾을 수 없습니다",
        "generic_protocol_mismatch": "제공받은 프로토콜 버전은 Minecraft의 프로토콜 버전과 일치하지 않습니다",
        "generic_radiusError": "최소 선택기 범위는 최대 범위보다 작아야 합니다",
        "generic_radiusNegative": "범위는 양수만 허용됩니다",
        "generic_rotationError": "회전 범위 초과",
        "generic_running": "명령이 이미 실행 중입니다.",
        "generic_step_failed": "명령 단계 실패",
        "generic_syntax": "구문 오류: 예기치 않은 \"%2$s\": \"%1$s>>%2$s<<%3$s\" 위치",
        "generic_noTargetMatch": "선택기와 일치하는 결과가 없습니다",
        "generic_targetNotPlayer": "선택기는 player-type(플레이어 유형)이어야 합니다",
        "generic_tooManyNames": "대상 이름 인수가 너무 많습니다",
        "generic_tooManyTargets": "선택기와 일치하는 결과가 너무 많습니다",
        "generic_too_many_requests": "요청된 명령이 너무 많습니다. 다른 명령이 완료될 때까지 기다려 주십시오.",
        "generic_unknown": "알 수 없는 명령어: %s. 해당 명령어가 존재하는지 그리고 사용 권한이 있는지 확인해주세요.",
        "generic_usage": "사용법: %1$s",
        "generic_usage_noparam": "사용법:",
        "generic_version_mismatch": "이 명령에 대해서는 요청된 버전이 존재하지 않습니다.",
        "generic_version_missing": "채팅 외 경로로 제공되는 명령 호출은 해당 명령의 버전을 지정해야 합니다",
        "getchunkdata_description": "특정 청크의 픽셀을 얻습니다.",
        "getchunkdata_success": "청크를 받았습니다.",
        "getchunks_description": "불러온 청크 목록을 얻습니다.",
        "getchunks_success": "청크 목록을 받았습니다.",
        "getlocalplayername_description": "로컬 플레이어의 이름을 반환합니다.",
        "getspawnpoint_description": "지정된 플레이어의 생성 위치를 받습니다.",
        "gettopsolidblock_description": "지정된 위치에 있는 공기가 아닌 상단 블록의 위치를 가져옵니다.",
        "gettopsolidblock_notfound": "지정된 위치에 고체 블록 없음",
        "give_block_notFound": "이름 %1$d에 해당하는 블록이 없습니다",
        "give_description": "플레이어에게 아이템을 제공합니다.",
        "give_item_invalid": "잘못된 명령 구문: 해당 데이터 값의 %s 없음",
        "give_item_notFound": "이름 %1$d에 해당하는 아이템이 없습니다",
        "give_map_invalidData": "제공된 지도 데이터가 유효하지 않습니다",
        "give_map_featureNotFound": "탐험 지도를 만들 수 없습니다. 현재 차원에서 제공되지 않는 기능입니다.",
        "give_success": "%3$s에 %1$s * %2$d을(를) 적용했습니다",
        "give_successRecipient": "%1$s * %2$d이(가) 적용되었습니다",
        "give_tagError": "데이터 태그 구문 분석 실패: %1$s",
        "help_description": "도움말/명령어 목록을 제공합니다.",
        "help_footer": "팁: 명령을 입력하는 동안 <tab> 키를 사용하여 명령 또는 인수를 자동 완성 할 수 있습니다",
        "help_header": "--- 도움말 %1$d / %2$d 페이지 (/help <page>) ---",
        "help_command_aliases": "%s (%s도 해당):",
        "immutableworld_description": "월드 변경 불가 상태를 설정합니다.",
        "immutableworld_info": "immutableworld = %s",
        "kick_description": "플레이어를 서버에서 추방합니다.",
        "kick_description_edu": "게임에서 모든 플레이어를 제거합니다.",
        "kick_not_found": "%1$s님을 찾을 수 없습니다",
        "kick_not_yourself": "본인 자신은 게임에서 제거할 수 없습니다.",
        "kick_success": "%1$s님을 게임에서 추방했습니다",
        "kick_success_reason": "%1$s님을 '%2$s' 게임에서 추방했습니다",
        "kick_success_reasonedu": "%1$s님을 '%2$s' 게임에서 제거했습니다",
        "kick_no_host": "호스트는 게임에서 추방할 수 없습니다.",
        "kick_no_teacher": "교사는 게임에서 제거할 수 없습니다.",
        "kill_successful_edu": "%1$s 제거됨",
        "kill_successful": "%1$s님 사망",
        "kill_description_edu": "엔티티(플레이어, 몹 등)를 제거합니다.",
        "kill_description": "엔티티(플레이어, 몹 등)를 사망시킵니다.",
        "list_description": "서버의 플레이어 목록을 표시합니다.",
        "locate_description": "가장 가까운 해당 유형 건물의 위치를 표시합니다.",
        "locate_fail_noplayer": "이 명령은 유효한 플레이어만 사용할 수 있습니다",
        "locate_fail_nostructurefound": "이 차원에서 유효한 구조가 발견되지 않았습니다",
        "locate_success": "가장 가까운 %1$s의 블록 위치: %2$s, (y?), %3$s",
        "togglecontentlog_toggle": "콘텐츠 로그 명령 사용/사용 안 함",
        "togglecontentlog_enabled": "콘텐츠 로그 명령 사용",
        "togglecontentlog_disabled": "콘텐츠 로그 명령 사용 안 함",
        "me_description": "본인과 관련된 메시지를 표시합니다.",
        "message_display_incoming": "%1$s님의 메시지: %2$s",
        "message_display_outgoing": "%1$s님에게 보낸 메시지: %2$s",
        "message_sameTarget": "자기 자신에게는 메시지를 보낼 수 없습니다!",
        "mixer_description": "Mixer 방송 컨트롤",
        "mixer_error_unknown": "알 수 없는 Mixer 오류가 발생했습니다.",
        "mixer_error_notoken": "Mixer 상호 작용을 활성화하려면 Microsoft 계정에 로그인되어 있어야 합니다.",
        "mixer_error_notsupported": "사용 중인 장치에서 Mixer 방송을 지원하지 않습니다.",
        "mixer_interactive_error": "Mixer 오류 발생: %1$s",
        "mixer_scene_failed": "이름이 %1$s인 장면을 찾을 수 없습니다. 정확한 이름을 입력해주세요.",
        "mixer_scene_success": "장면이 %1$s(으)로 변경되었습니다",
        "mixer_start_success": "%1$s 후에 Mixer 방송이 시작됩니다",
        "mixer_start_fail_invalidCode": "ID가 '%1$s'인 프로젝트를 찾을 수 없습니다. ID나 공유 코드가 올바른지 확인해주세요.",
        "mixer_stop_success": "Mixer 방송이 중단되었습니다.",
        "mixer_stop_fail": "초기화할 방송 세션이 없습니다.",
        "mixer_status_notinitialized": "방송이 초기화되지 않았습니다.",
        "mixer_status_enabled": "방송이 사용 설정되었습니다.",
        "mixer_status_initializing": "방송이 시작됩니다.",
        "mixer_status_pending": "방송 대기 중입니다.",
        "mixer_status_disabled": "방송 사용 설정이 해제되었습니다.",
        "mixer_activatedbutton": "%1$s님이 %2$s(을) 활성화했습니다.",
        "mobevent_description": "실행할 수 있는 몹 이벤트를 제어합니다.",
        "mobevent_eventsEnabledSetToTrue": "몹 이벤트가 켜졌습니다. 거짓으로 설정된 개별 이벤트는 실행되지 않습니다.",
        "mobevent_eventsEnabledSetToFalse": "몹 이벤트가 꺼졌습니다. 개별 이벤트는 실행되지 않습니다.",
        "mobevent_eventsEnabledIsTrue": "몹 이벤트가 켜졌습니다. 거짓으로 설정된 개별 이벤트는 실행되지 않습니다.",
        "mobevent_eventsEnabledIsFalse": "몹 이벤트가 꺼졌습니다. 개별 이벤트는 실행되지 않습니다.",
        "mobevent_eventSetToTrue": "몹 이벤트 %s(id: %s)가 참으로 설정되었습니다.",
        "mobevent_eventSetToTrueButEventsDisabled": "몹 이벤트 %s(id: %s)가 참으로 설정되었지만, 몹 이벤트는 꺼졌습니다.",
        "mobevent_eventSetToFalse": "몹 이벤트 %s(id: %s)가 거짓으로 설정되었습니다.",
        "mobevent_eventIsTrue": "몹 이벤트 %s(id: %s)가 참으로 설정되었습니다.",
        "mobevent_eventIsTrueButEventsDisabled": "몹 이벤트 %s(id: %s)가 참으로 설정되었지만, 몹 이벤트는 꺼졌습니다.",
        "mobevent_eventIsFalse": "몹 이벤트 %s(id: %s)가 거짓으로 설정되었습니다.",
        "op_description": "플레이어에게 운영자 상태를 허용합니다.",
        "op_failed": "관리자 권한을 부여할 수 없음(이미 관리자 또는 그 이상의 권한 보유): %s",
        "op_success": "관리자 권한 부여됨: %s",
        "op_message": "권한이 부여되었습니다.",
        "origin_commandblock": "명령 블록",
        "origin_external": "외부",
        "origin_devconsole": "DevConsole",
        "origin_script": "Script Engine",
        "origin_server": "서버",
        "origin_teacher": "교사",
        "ops_description": "허용 권한을 다시 불러와 적용합니다.",
        "ops_reloaded": "파일에서 허용 목록을 다시 불러왔습니다.",
        "ops_set_success": "%s 플레이어에게 운영자 수준을 설정했습니다.",
        "permissions_description": "사용 권한을 다시 불러와 적용하세요.",
        "permissions_reloaded": "사용 권한을 파일에서 다시 불러왔습니다.",
        "permissions_set_failed": "%s 플레이어에게 권한 수준 %s레벨을 설정하지 못했습니다.",
        "permissions_set_success": "%s 플레이어에게 권한 수준 %s레벨을 설정했습니다.",
        "permissions_save_failed": "%s 플레이어에게 권한 수준 %s레벨을 저장하지 못했습니다.",
        "permissions_save_success": "%s 플레이어에게 권한 수준 %s레벨을 저장했습니다.",
        "spawnParticleEmitter_description": "입자 방출기를 만듭니다.",
        "particle_description": "입자를 생성합니다.",
        "particle_notFound": "알 수 없는 효과 이름 (%1$s)",
        "particle_success": "%1$s 효과를 %2$d번 플레이",
        "players_list": "%1$d/%2$d명 온라인:",
        "players_list_names": "%s",
        "playsound_description": "소리를 재생합니다.",
        "playsound_playerTooFar": "%1$s님이 너무 멀리 있어 소리를 들을 수 없습니다",
        "playsound_success": "%2$s님을 대상으로 '%1$s' 소리를 재생했습니다",
        "position_description": "플레이어 좌표를 켜짐/꺼짐 설정합니다.",
        "publish_failed": "로컬 게임을 호스트할 수 없습니다",
        "publish_started": "%1$s에서 호스팅되는 로컬 게임",
        "querytarget_description": "지정된 대상 엔티티 관련 변형, 이름 및 ID 정보를 획득합니다.",
        "querytarget_success": "대상 데이터: %1$s",
        "reload_description": "모든 행동 팩에서 모든 행동 파일을 다시 불러옵니다.",
        "reload_success": "기존 함수 파일들을 다시 불러왔습니다. 새 함수들을 다시 불러오려면 Minecraft를 다시 시작하세요.",
        "replaceitem_description": "소지품의 아이템을 교체합니다.",
        "replaceitem_failed": "%s 슬롯 %d 을(를) %d * %s (으)로 교체할 수 없습니다",
        "replaceitem_keepFailed": "%s 슬롯 %d을(를) 차지하는 항목이 이미 있습니다.",
        "replaceitem_noContainer": "블록 %s 이(가) 컨테이너가 아닙니다",
        "replaceitem_badSlotNumber": "%d 슬롯을 교체할 수 없습니다(허용 값: %d~%d).",
        "replaceitem_success": "%s 슬롯 %d 을(를) %d * %s (으)로 교체했습니다",
        "replaceitem_success_entity": "%s 슬롯 %d의 %s을(를) %d * %s(으)로 교체했습니다.",
        "replaceitem_tagError": "데이터 태그 구문 분석 실패: %1$s",
        "save_description": "게임에서 데이터를 디스크에 저장하는 방식을 제어하거나 확인합니다.",
        "save_disabled": "월드 자동 저장을 껐습니다",
        "save_enabled": "월드 자동 저장을 켰습니다",
        "save_failed": "저장 실패: %1$s",
        "save_start": "저장 중...",
        "save_success": "월드를 저장했습니다",
        "save_all_error": "레벨 저장 장치를 일시 중지하던 중 오류가 발생했습니다.",
        "save_all_success": "데이터를 저장했습니다. 이제 파일을 복사할 수 있습니다.",
        "save_off_alreadyOff": "저장 기능이 이미 꺼져 있습니다.",
        "save_on_alreadyOn": "저장 기능이 이미 켜져 있습니다.",
        "save_on_notDone": "지난 저장 작업이 완료되지 않았습니다.",
        "save_on_description": "자동 서버 저장을 활성화합니다.",
        "save_on_success": "레벨 변경이 재시작되었습니다.",
        "save_state_description": "지난 save-all 작업의 완료 여부를 확인하고 관련 파일을 목록으로 표시합니다.",
        "say_description": "채팅창의 메시지를 다른 플레이어에게 보냅니다.",
        "scoreboard_description": "다양한 목표에 대한 점수를 추적하고 표시합니다.",
        "scoreboard_allMatchesFailed": "모든 경기 실패",
        "scoreboard_noMultiWildcard": "하나의 사용자 와일드카드만 허용됩니다.",
        "scoreboard_objectiveNotFound": "이름 '%1$s'(으)로 검색된 목표가 없습니다.",
        "scoreboard_objectiveReadOnly": "'%1$s' 목표는 읽기 전용이며 설정할 수 없습니다.",
        "scoreboard_objectives_add_alreadyExists": "'%1$s'은(는) 이미 존재하는 목표 이름입니다.",
        "scoreboard_objectives_add_displayTooLong": "표시 이름 '%1$s'이(가) 너무 깁니다(최대 허용 길이: %2$d자).",
        "scoreboard_objectives_add_success": "새로운 목표 '%1$s'이(가) 추가되었습니다.",
        "scoreboard_objectives_add_tooLong": "이름 '%1$s'이(가) 너무 깁니다(최대 허용 길이: %2$d자).",
        "scoreboard_objectives_add_wrongType": "'%1$s'은(는) 유효하지 않은 목표 조건 유형입니다.",
        "scoreboard_objectives_add_needName": "목표에 이름이 필요합니다.",
        "scoreboard_objectives_description": "점수판 목표를 수정합니다.",
        "scoreboard_objectives_list_count": "점수판 목표 %1$d개:",
        "scoreboard_objectives_list_empty": "점수판에 목표가 없습니다.",
        "scoreboard_objectives_list_entry": "- %1$s: '%2$s'(으)로 표시되며 '%3$s' 유형임",
        "scoreboard_objectives_remove_success": "목표 '%1$s'이(가) 삭제되었습니다.",
        "scoreboard_objectives_setdisplay_invalidSlot": "'%1$s' 슬롯이 없습니다.",
        "scoreboard_objectives_setdisplay_successCleared": "'%1$s' 목표 슬롯이 삭제되었습니다.",
        "scoreboard_objectives_setdisplay_successSet": "'%1$s' 슬롯의 목표를 '%2$s'(으)로 설정했습니다.",
        "scoreboard_players_add_success": "%3$s 님의 [%2$s]에 %1$d점이 추가되었습니다(현재 %4$d점)",
        "scoreboard_players_add_multiple_success": "%3$d명의 [%2$s]에 %1$d점이 추가되었습니다",
        "scoreboard_players_nameNotFound": "플레이어 이름을 지정해야 합니다.",
        "scoreboard_players_enable_noTrigger": "목표 %1$s은(는) 트리거가 아닙니다.",
        "scoreboard_players_enable_success": "%2$s 트리거 %1$s이(가) 활성화되었습니다.",
        "scoreboard_players_list_count": "점수판에 있는 추적된 플레이어 %1$d명 표시:",
        "scoreboard_players_list_empty": "점수판에 추적된 플레이어가 없습니다.",
        "scoreboard_players_list_player_count": "추적된 %2$s 목표 %1$d개 표시:",
        "scoreboard_players_list_player_empty": "%1$s님은 기록된 점수가 없습니다.",
        "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_players_operation_invalidOperation": "%1$s은(는) 유효하지 않은 작업입니다.",
        "scoreboard_players_operation_notFound": "%2$s님의 %1$s 점수를 찾을 수 없습니다.",
        "scoreboard_players_operation_success": "%2$d명의 [%1$s]이(가) 업데이트되었습니다",
        "scoreboard_players_offlinePlayerName": "플레이어 오프라인",
        "scoreboard_players_random_invalidRange": "%1$d의 최소값은 %2$d의 최대값보다 작지 않습니다",
        "scoreboard_players_remove_success": "%3$s 님의 [%2$s]에서 %1$d점이 제거되었습니다(현재 %4$d점)",
        "scoreboard_players_remove_multiple_success": "%3$d명의 [%2$s]에서 %1$d점이 제거되었습니다",
        "scoreboard_players_reset_success": "%1$s 님의 점수를 초기화했습니다.",
        "scoreboard_players_resetscore_success": "%2$s 님의 %1$s 점수를 초기화했습니다.",
        "scoreboard_players_set_success": "%2$s 님의 [%1$s]이(가) %3$d점으로 설정되었습니다",
        "scoreboard_players_set_multiple_success": "%2$d명의 [%1$s]이(가) %3$d점으로 설정되었습니다",
        "scoreboard_players_set_tagError": "dataTag를 해석할 수 없습니다(이유: %1$s).",
        "scoreboard_players_set_tagMismatch": "dataTag가 %1$s와(과) 일치하지 않습니다.",
        "scoreboard_players_score_notFound": "%2$s에 대한 %1$s 점수를 찾을 수 없습니다.",
        "scoreboard_players_test_failed": "점수(%1$d)가 %2$d~%3$d 범위에 속하지 않습니다.",
        "scoreboard_players_test_success": "점수(%1$s)가 %2$s~%3$s 범위에 속합니다.",
        "scoreboard_teamNotFound": "이름 '%1$s'(으)로 검색된 팀이 없습니다.",
        "scoreboard_teams_add_alreadyExists": "'%1$s'은(는) 이미 존재하는 팀 이름입니다.",
        "scoreboard_teams_add_displayTooLong": "팀 표시 이름 '%1$s'이(가) 너무 깁니다(최대 허용 길이: %2$d자).",
        "scoreboard_teams_add_success": "새로운 팀 '%1$s'이(가) 추가되었습니다.",
        "scoreboard_teams_add_tooLong": "팀 이름 '%1$s'이(가) 너무 깁니다(최대 허용 길이: %2$d자).",
        "scoreboard_teams_empty_alreadyEmpty": "%1$s팀에 소속된 플레이어가 없어 제거할 수 없습니다.",
        "scoreboard_teams_empty_success": "'%2$s' 팀에서 플레이어 %1$d명을 모두 제거했습니다.",
        "scoreboard_teams_join_failure": "%2$s 팀에 추가하지 못한 플레이어 %1$d명: %3$s",
        "scoreboard_teams_join_success": "%2$s 팀에 추가된 플레이어 %1$d명: %3$s",
        "scoreboard_teams_leave_failure": "소속 팀에서 제거하지 못한 플레이어 %1$d명: %2$s",
        "scoreboard_teams_leave_noTeam": "소속된 팀이 없습니다.",
        "scoreboard_teams_leave_success": "소속 팀에서 제거한 플레이어 %1$d명: %2$s",
        "scoreboard_teams_list_count": "점수판에 있는 팀 %1$d개 표시:",
        "scoreboard_teams_list_empty": "점수판에 등록된 팀이 없습니다.",
        "scoreboard_teams_list_entry": "- %1$s: '%2$s' 팀 인원 : %3$s",
        "scoreboard_teams_list_player_count": "%2$s 팀의 플레이어 %1$d명 표시:",
        "scoreboard_teams_list_player_empty": "%1$s 팀은 소속된 플레이어가 없습니다.",
        "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_teams_option_noValue": "%1$s 옵션 유효값: %2$s",
        "scoreboard_teams_option_success": "%2$s 팀의 %1$s 옵션을 %3$s(으)로 설정했습니다.",
        "scoreboard_teams_remove_success": "%1$s 팀이 삭제되었습니다.",
        "seed_success": "시드: %1$s",
        "setblock_description": "블록을 다른 블록으로 변경합니다.",
        "setblock_failed": "블록 설치 불가",
        "setblock_noChange": "블록을 놓을 수 없습니다",
        "setblock_notFound": "ID/name %1$s에 해당하는 블록이 없습니다",
        "setblock_outOfWorld": "월드 바깥에 블록을 놓을 수 없습니다",
        "setblock_success": "블록 설치됨",
        "setblock_tagError": "데이터 태그 구문 분석 실패: %1$s",
        "setidletimeout_success": "유효 제한 시간이 %1$d분으로 설정되었습니다.",
        "setfixedinvslots_description": "서버의 고정 소지품 슬롯 수를 설정합니다.",
        "setfixedinvslots_success": "고정 소지품 슬롯 수가 %1$d개로 설정되었습니다",
        "setfixedinvslot_description": "특정 아이템에 고정 슬롯을 설정합니다.",
        "setfixedinvslot_success": "고정 소지품 슬롯(%1$d)이 %2$s(으)로 설정되었습니다",
        "globalpause_description": "모든 플레이어를 대상으로 게임 전체를 일시 중지 설정 또는 해제합니다.",
        "globalpause_success": "일시 중지 설정 또는 해제",
        "setmaxplayers_description": "게임 세션에서 허용할 최대 플레이어 수를 설정합니다.",
        "setmaxplayers_success": "최대 플레이어 수가 %1$d명으로 설정되었습니다.",
        "setmaxplayers_success_upperbound": "(허용된 최대 연결 수 기준)",
        "setmaxplayers_success_lowerbound": "(현재 플레이어 수 기준)",
        "setworldspawn_description": "월드 생성을 설정합니다.",
        "setworldspawn_success": "설정된 월드 생성 지점은 (%1$d, %2$d, %3$d)입니다",
        "setworldspawn_wrongDimension": "해당 차원에서는 월드 생성을 설정할 수 없습니다",
        "spawnpoint_success_single": "설정된 %1$s 생성 지점은 (%2$d, %3$d, %4$d)입니다",
        "spawnpoint_description": "플레이어의 생성 위치를 설정합니다.",
        "spawnpoint_success_multiple_specific": "설정된 %1$s 생성 지점은 (%2$d, %3$d, %4$d)입니다",
        "spawnpoint_success_multiple_generic": "%1$s 생성 지점 설정",
        "spawnpoint_wrongDimension": "해당 차원에서는 생성 지점을 설정할 수 없습니다",
        "spreadplayers_description": "엔티티를 임의의 위치로 순간이동합니다.",
        "spreadplayers_failure_players": "%2$s,%3$s 주변 영역으로 %1$s명의 플레이어를 분산할 수 없습니다(플레이어 수가 너무 많습니다. 최대 %4$s명으로 시도하세요)",
        "spreadplayers_failure_teams": "%2$s,%3$s 주변 영역으로 %1$s개 팀을 분산할 수 없습니다(플레이어 수가 너무 많습니다. 최대 %4$s명으로 시도하세요)",
        "spreadplayers_info_players": "(%2$s회 반복 후 플레이어 간 평균 거리는 %1$s블록입니다)",
        "spreadplayers_info_teams": "(%2$s회 반복 후 팀 간 평균 거리는 %1$s블록입니다)",
        "spreadplayers_spreading_players": "%1$s명의 플레이어를 %3$s,%4$s 지점에서 %2$s블록 영역으로 분산합니다(플레이어 간 최소 거리: %5$s블록)",
        "spreadplayers_spreading_teams": "%1$s개 팀을 %3$s,%4$s 지점에서 %2$s블록 영역으로 분산합니다(팀 간 최소 거리: %5$s블록)",
        "spreadplayers_success_players": "%1$s명의 플레이어를 %2$s,%3$s 주변 영역으로 분산했습니다",
        "spreadplayers_success_teams": "%1$s개 팀을 %2$s,%3$s 주변 영역으로 분산했습니다",
        "stats_cleared": "%1$s 통계가 삭제되었습니다",
        "stats_failed": "잘못된 매개 변수",
        "stats_noCompatibleBlock": "좌표 %1$d, %2$d, %3$d의 블록은 통계를 추적할 수 없습니다",
        "stats_success": "%2$s의 %1$s 통계를 %3$s에 저장 중",
        "stop_description": "서버를 중지합니다.",
        "stop_start": "서버 중지 중",
        "stopsound_description": "소리 재생을 중단합니다.",
        "stopsound_success": "%s %s 소리를 중단했습니다",
        "stopsound_success_all": "모든 %s 소리를 중단했습니다",
        "summon_description": "엔티티를 소환합니다.",
        "summon_failed": "사물을 소환할 수 없습니다",
        "summon_outOfWorld": "월드 바깥의 물체를 소환할 수 없습니다",
        "summon_success": "사물이 성공적으로 소환되었습니다",
        "summon_tagError": "데이터 태그 구문 분석 실패: %1$s",
        "tag_description": "객체에 저장된 태그를 관리합니다.",
        "tag_add_failed": "대상이 태그를 이미 가지고 있거나 너무 많이 가지고 있습니다",
        "tag_add_success_single": "'%1$s' 태그를 %2$s개 추가함",
        "tag_add_success_multiple": "'%1$s' 태그를 %2$d개 객체에 추가함",
        "tag_list_single_empty": "%s은(는) 태그가 없습니다:",
        "tag_list_single_success": "%1$s은(는) 태그가 %2$d개 있습니다: %3$s",
        "tag_list_multiple_empty": "%d개 객체에 태그가 없습니다",
        "tag_list_multiple_success": "%1$d개 객체가 총 %2$d개 태그를 가지고 있습니다: %3$s",
        "tag_remove_failed": "대상이 해당 태그가 없습니다",
        "tag_remove_success_single": "%2$s에서 '%1$s' 태그가 제거됨",
        "tag_remove_success_multiple": "%2$s 객체에서 '%1$s' 태그가 제거됨",
        "tell_description": "한 명 이상의 플레이어에게 쪽지를 보냅니다.",
        "tellraw_description": "플레이어들에게 JSON 메시지를 보냅니다.",
        "tellraw_jsonException": "유효하지 않은 json: %1$s",
        "tellraw_jsonStringException": "잘못된 json 문자열 데이터입니다.",
        "tellraw_error_noData": "제공된 데이터가 없습니다.",
        "tellraw_error_notArray": "원본 텍스트 객체는 배열을 포함해야 합니다. 예제: \"rawtext\":[{..}]",
        "tellraw_error_textNotString": "원본 텍스트의 텍스트 필드는 문자열을 포함해야 합니다. 예제: \"rawtext\":[{\"text\": \"text to display\"}]",
        "tellraw_error_translateNotString": "원본 텍스트의 번역 필드는 언어 키를 포함해야 합니다. 예제: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
        "tellraw_error_withNotArrayOrRawText": "rawtext에 필드가 있는 배열은 배열 또는 다른 rawtext 개체를 포함해야 합니다. 예 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  예 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
        "tellraw_error_itemIsNotObject": "원본 텍스트 문자열의 Json 값은 객체가 아닙니다. 예제: \"rawtext\": [{ \"text\" : \"my text\" }]",
        "educlientinfo_description": "테넌트 ID와 호스트 상태를 획득합니다. CM용입니다.",
        "testfor_description": "특정 조건에 부합하는 엔티티(플레이어, 몹, 아이템 등) 수를 계산합니다.",
        "testfor_failure": "%1$s이(가) 필요한 데이터 구조와 일치하지 않습니다",
        "testfor_success": "%1$s 검색됨",
        "testfor_tagError": "데이터 태그 구문 분석 실패: %1$s",
        "testforblock_description": "지정된 위치에 특정 블록이 있는지 테스트합니다.",
        "testforblock_failed_data": "좌표 %1$d,%2$d,%3$d의 블록이 예상된 블록 상태와 일치하지 않습니다.",
        "testforblock_failed_nbt": "좌표 %1$d,%2$d,%3$d의 블록에는 필요한 NBT 키가 없습니다.",
        "testforblock_failed_tile": "좌표 %1$d,%2$d,%3$d의 블록은 %4$s입니다(원래 예상 값: %5$s).",
        "testforblock_failed_tileEntity": "좌표 %1$d,%2$d,%3$d의 블록은 타일 엔티티가 아니며, 태그 매칭을 지원하지 않습니다.",
        "testforblock_outOfWorld": "월드 외부의 블럭은 테스트할 수 없습니다",
        "testforblock_success": "좌표 %1$d,%2$d,%3$d의 블록이 검색되었습니다.",
        "testforblocks_description": "두 지역의 블록이 일치하는지 테스트합니다.",
        "tickingarea_description": "적용 영역을 추가, 제거하거나 목록으로 표시합니다.",
        "tickingarea_inuse": "%1$d/%2$d 적용 영역이 사용 중입니다.",
        "tickingarea_noneExist_currentDimension": "이 차원에는 적용 영역이 존재하지 않습니다.",
        "tickingarea_add_bounds_success": "%1$d에서 %2$d(으)로 적용 영역을 추가했습니다.",
        "tickingarea_add_circle_success": "%1$d(을)를 중심으로 %2$d 청크 반경의 적용 영역을 추가했습니다.",
        "tickingarea_add_failure": "허용된 최대 적용 영역 개수(%1$d)가 초과되었습니다. 적용 영역을 더 이상 추가할 수 없습니다.",
        "tickingarea_add_conflictingname": "%1$s(은)는 이미 존재하는 적용 영역 이름입니다.",
        "tickingarea_add_chunkfailure": "적용 영역에 포함된 청크가 %1$d개 이상입니다. 적용 영역 크기가 지나치게 커 생성할 수 없습니다.",
        "tickingarea_add_radiusfailure": "반경 크기는 %1$d보다 작아야 합니다. 적용 영역이 지나치게 커 생성할 수 없습니다.",
        "tickingarea_remove_success": "제거된 적용 영역",
        "tickingarea_remove_failure": "이 차원에는 블록 위치 %1$d(을)를 포함하는 적용 영역이 존재하지 않습니다.",
        "tickingarea_remove_byname_failure": "이 차원에는 이름이 %1$s인 적용 영역이 없습니다.",
        "tickingarea_remove_all_success": "제거된 적용 영역",
        "tickingarea_remove_all_failure": "이 차원에는 적용 영역이 존재하지 않습니다.",
        "tickingarea_list_chunks": "청크",
        "tickingarea_list_circle_radius": "반경",
        "tickingarea_list_success_currentDimension": "이 차원에 존재하는 모든 적용 영역 목록",
        "tickingarea_list_success_allDimensions": "전 차원에 존재하는 모든 적용 영역 목록",
        "tickingarea_list_failure_allDimensions": "어떤 차원에도 결과 적용 영역이 존재하지 않습니다.",
        "tickingarea_list_to": "(으)로",
        "tickingarea_list_type_circle": "원",
        "time_added": "시간이 %1$d 추가되었습니다",
        "time_description": "월드 게임 시간 변경 또는 쿼리를 수행합니다.",
        "time_disabled": "'항상 낮' 설정을 사용하는 레벨입니다.",
        "time_query_day": "하루: %d",
        "time_query_daytime": "낮: %d",
        "time_query_gametime": "게임 시간: %d",
        "time_set": "시간을 %1$d으로 설정했습니다",
        "time_stop": "시간: %1$s",
        "title_description": "화면 타이틀을 제어합니다.",
        "title_success": "Title 명령어가 성공적으로 실행되었습니다",
        "titleraw_description": "JSON 메시지로 화면 타이틀을 제어합니다.",
        "toggledownfall_description": "날씨를 전환합니다.",
        "tp_description": "엔티티(플레이어, 몹 등)를 순간이동합니다.",
        "tp_notSameDimension": "플레이어가 다른 차원에 있어 순간이동을 할 수 없습니다",
        "tp_outOfWorld": "월드 밖으로 엔티티를 순간이동할 수 없습니다.",
        "tp_permission": "이 슬래시 명령어를 사용할 수 있는 권한이 없습니다.",
        "tp_safeTeleportFail": "블록이 방해가 되어 %1$을(를) %2$(으)로 순간이동할 수 없습니다.",
        "tp_far": "%1$을(를) %2$의 빈 지역에 순간이동할 수 없음",
        "tp_success": "%1$s님을 %2$s(으)로 순간이동했습니다",
        "tp_successVictim": "%1$s(으)로 순간이동했습니다.",
        "tp_success_coordinates": "%1$s님을 %2$s, %3$s, %4$s 좌표로 순간이동했습니다",
        "transferserver_description": "다른 서버로 플레이어를 이동합니다.",
        "transferserver_successful": "플레이어 이동 완료",
        "transferserver_invalid_port": "잘못된 포트(0-65535)",
        "trigger_description": "활성화할 트리거를 설정합니다.",
        "trigger_disabled": "%1$s은(는) 비활성화된 트리거입니다",
        "trigger_invalidMode": "유효하지 않은 트리거 모드 %1$s",
        "trigger_invalidObjective": "%1$s은(는) 유효하지 않은 트리거 이름입니다",
        "trigger_invalidPlayer": "플레이어만 /trigger 명령어를 사용할 수 있습니다",
        "trigger_success": "트리거 %1$s(이)가 %2$s %3$s(으)로 변경되었습니다",
        "unban_failed": "%1$s님을 차단 해제할 수 없습니다",
        "unban_success": "%1$s님의 차단을 해제했습니다",
        "unbanip_invalid": "입력된 IP 주소가 유효하지 않습니다",
        "unbanip_success": "IP 주소 %1$s의 차단을 해제했습니다",
        "validategamelighting_description": "지정된 지역의 게임 조명 확인",
        "validategamelighting_checkRegionTooBig": "조명을 확인할 지역이 너무 큽니다!(%1$d > %2$d)",
        "validategamelighting_outOfWorld": "월드 외부의 조명을 확인할 수 없습니다.",
        "weather_clear": "날씨가 맑아집니다",
        "weather_description": "날씨를 설정합니다.",
        "weather_disabled": "이 레벨에서는 '날씨 주기'를 사용하지 않습니다.",
        "weather_query": "날씨 상태: %s",
        "weather_query_clear": "맑음",
        "weather_query_rain": "비",
        "weather_query_thunder": "천둥",
        "weather_rain": "비가 내리기 시작합니다",
        "weather_thunder": "폭풍우가 몰아치기 시작합니다",
        "whitelist_add_failed": "%1$s님을 허용 목록에 추가할 수 없습니다",
        "whitelist_add_success": "%1$s님을 허용 목록에 추가했습니다",
        "whitelist_description": "서버 허용 목록을 관리합니다.",
        "whitelist_disabled": "허용 목록을 껐습니다",
        "whitelist_enabled": "허용 목록을 켰습니다",
        "whitelist_list": "허용 목록의 플레이어 총 %1$d명(%2$d명 만남):",
        "whitelist_reloaded": "파일에서 허용 목록을 다시 불러왔습니다.",
        "whitelist_remove_failed": "%1$s님을 허용 목록에서 제거할 수 없습니다",
        "whitelist_remove_success": "%1$s님을 허용 목록에서 제거했습니다",
        "world_age_description": "월드의 나이(생성 후 흐른 시간)를 변경 또는 쿼리합니다.",
        "world_age_added": "월드의 나이에 %1$d년을 더했습니다",
        "world_age_query": "월드의 나이는 %d년입니다",
        "world_age_set": "월드의 나이를 %1$d년으로 설정했습니다",
        "worldborder_center_success": "월드 경계 중심이 %1$s,%2$s 좌표로 설정되었습니다",
        "worldborder_damage_amount_success": "월드 경계 대미지가 블록당 %1$s(으)로 설정되었습니다(원래 설정: 블록당 %2$s)",
        "worldborder_damage_buffer_success": "월드 경계 대미지 버프가 %1$s블록으로 설정되었습니다(원래 설정: %2$s블럭)",
        "worldborder_get_success": "현재 월드 경계 너비는 %1$s블록입니다",
        "worldborder_set_success": "월드 경계 너비가 %1$s블록으로 설정되었습니다(원래 설정: %2$s블록)",
        "worldborder_setSlowly_grow_success": "%3$s초 동안 월드 경계 너비를 %1$s블록으로 확대합니다(원래 설정: %2$s블록)",
        "worldborder_setSlowly_shrink_success": "%3$s초 동안 월드 경계 너비를 %1$s블록으로 축소합니다(원래 설정: %2$s블록)",
        "worldborder_warning_distance_success": "월드 경계 경고를 표시하는 기준 지점이 %1$s블록으로 설정되었습니다(원래 설정: %2$s블록)",
        "worldborder_warning_time_success": "월드 경계 경고를 표시하는 기준 시간이 %1$s초 전으로 설정되었습니다(원래 설정: %2$s초)",
        "worldbuilder_description": "호출자의 월드 빌더 상태를 전환합니다.",
        "worldbuilder_success": "World Builder 상태 업데이트: %1$s",
        "wsserver_description": "지정된 URL의 웹소켓 서버에 연결을 시도합니다.",
        "wsserver_invalid_url": "지정된 URL이 올바르지 않습니다.",
        "wsserver_request_existing": "다른 연결 요청이 실행 중입니다.",
        "wsserver_request_failed": "%1$s 서버에 연결할 수 없습니다.",
        "wsserver_success": "%1$s 서버에 연결되었습니다",
        "xp_description": "플레이어의 경험치를 추가하거나 제거합니다.",
        "xp_failure_widthdrawXp": "0보다 작은 경험치를 지급할 수 없습니다",
        "xp_success": "%2$s님의 경험치가 %1$d 추가되었습니다",
        "xp_success_levels": "%2$s님의 경험치가 %1$d 레벨 추가되었습니다",
        "xp_success_negative_levels": "%2$s님의 경험치가 %1$d 레벨 감소되었습니다"
    },
    item:{
        "air": [
            "공기"
        ],
        "apple": [
            "사과"
        ],
        "golden_apple": [
            "황금 사과"
        ],
        "appleenchanted": [
            "효과부여 사과"
        ],
        "armor_stand": [
            "갑옷 거치대"
        ],
        "arrow": [
            "화살"
        ],
        "tipped_arrow": [
            "뾰족한 화살"
        ],
        "banner": [
            "배너",
            "검은색 배너",
            "빨간색 배너",
            "녹색 배너",
            "갈색 배너",
            "파란색 배너",
            "보라색 배너",
            "청록색 배너",
            "밝은 회색 배너",
            "회색 배너",
            "분홍색 배너",
            "연두색 배너",
            "노란색 배너",
            "밝은 파란색 배너",
            "자홍색 배너",
            "주황색 배너",
            "흰색 배너"
        ],
        "bed": [
            "침대",
            "흰색 침대",
            "주황색 침대",
            "자홍색 침대",
            "밝은 파란색 침대",
            "노란색 침대",
            "연두색 침대",
            "분홍색 침대",
            "회색 침대",
            "밝은 회색 침대",
            "청록색 침대",
            "보라색 침대",
            "파란색 침대",
            "갈색 침대",
            "녹색 침대",
            "빨간색 침대",
            "검은색 침대"
        ],
        "bell": [
            "종"
        ],
        "steak": [
            "스테이크"
        ],
        "beef": [
            "익히지 않은 소고기"
        ],
        "beetroot": [
            "비트"
        ],
        "beetroot_soup": [
            "비트 수프"
        ],
        "blaze_powder": [
            "블레이즈 가루"
        ],
        "blaze_rod": [
            "블레이즈 막대"
        ],
        "boat": [
            "보트",
            "참나무 보트",
            "전나무 보트",
            "자작나무 보트",
            "정글나무 보트",
            "아카시아나무 보트",
            "짙은 참나무 보트"
        ],
        "bone": [
            "뼈"
        ],
        "book": [
            "책"
        ],
        "chainmail_boots": [
            "사슬 부츠"
        ],
        "leather_boots": [
            "가죽 부츠"
        ],
        "diamond_boots": [
            "다이아몬드 부츠"
        ],
        "golden_boots": [
            "황금 부츠"
        ],
        "iron_boots": [
            "철 부츠"
        ],
        "bow": [
            "활"
        ],
        "bowl": [
            "그릇"
        ],
        "bread": [
            "빵"
        ],
        "brewing_stand": [
            "양조대"
        ],
        "brick": [
            "벽돌"
        ],
        "bucket": [
            "양동이"
        ],
        "bucketLava": [
            "용암 양동이"
        ],
        "bucketWater": [
            "물 양동이"
        ],
        "bucketFish": [
            "대구 양동이"
        ],
        "bucketSalmon": [
            "연어 양동이"
        ],
        "bucketTropical": [
            "열대어 양동이"
        ],
        "bucketPuffer": [
            "복어 양동이"
        ],
        "bucketCustomFish": [
            "다음 물고기로 가득찬 양동이:"
        ],
        "tropicalColorWhite": [
            "흰색"
        ],
        "tropicalColorOrange": [
            "주황색"
        ],
        "tropicalColorMagenta": [
            "자홍색"
        ],
        "tropicalColorSky": [
            "하늘색"
        ],
        "tropicalColorYellow": [
            "노란색"
        ],
        "tropicalColorLime": [
            "연두색"
        ],
        "tropicalColorRose": [
            "장미색"
        ],
        "tropicalColorGray": [
            "회색"
        ],
        "tropicalColorSilver": [
            "은색"
        ],
        "tropicalColorTeal": [
            "청록색"
        ],
        "tropicalColorPlum": [
            "자주색"
        ],
        "tropicalColorBlue": [
            "파란색"
        ],
        "tropicalColorBrown": [
            "갈색"
        ],
        "tropicalColorGreen": [
            "녹색"
        ],
        "tropicalColorRed": [
            "빨간색"
        ],
        "tropicalBodyKobSingle": [
            "%1$s 코브"
        ],
        "tropicalBodySunstreakSingle": [
            "%1$s 선스트레이크"
        ],
        "tropicalBodySnooperSingle": [
            "%1$s 스누퍼"
        ],
        "tropicalBodyDasherSingle": [
            "%1$s 대셔"
        ],
        "tropicalBodyBrinelySingle": [
            "%1$s 브라인리"
        ],
        "tropicalBodySpottySingle": [
            "%1$s 스포티"
        ],
        "tropicalBodyFlopperSingle": [
            "%1$s 플로퍼"
        ],
        "tropicalBodyStripeySingle": [
            "%1$s 스트라이피"
        ],
        "tropicalBodyGlitterSingle": [
            "%1$s 글리터"
        ],
        "tropicalBodyBlockfishSingle": [
            "%1$s 블록피시"
        ],
        "tropicalBodyBettySingle": [
            "%1$s 베티"
        ],
        "tropicalBodyClayfishSingle": [
            "%1$s 클레이피시"
        ],
        "tropicalBodyKobMulti": [
            "%1$s-%2$s 코브"
        ],
        "tropicalBodySunstreakMulti": [
            "%1$s-%2$s 선스트레이크"
        ],
        "tropicalBodySnooperMulti": [
            "%1$s-%2$s 스누퍼"
        ],
        "tropicalBodyDasherMulti": [
            "%1$s-%2$s 대셔"
        ],
        "tropicalBodyBrinelyMulti": [
            "%1$s-%2$s 브라인리"
        ],
        "tropicalBodySpottyMulti": [
            "%1$s-%2$s 스포티"
        ],
        "tropicalBodyFlopperMulti": [
            "%1$s-%2$s 플로퍼"
        ],
        "tropicalBodyStripeyMulti": [
            "%1$s-%2$s 스트라이피"
        ],
        "tropicalBodyGlitterMulti": [
            "%1$s-%2$s 글리터"
        ],
        "tropicalBodyBlockfishMulti": [
            "%1$s-%2$s 블록피시"
        ],
        "tropicalBodyBettyMulti": [
            "%1$s-%2$s 베티"
        ],
        "tropicalBodyClayfishMulti": [
            "%1$s-%2$s 클레이피시"
        ],
        "tropicalSchoolAnemone": [
            "아네모네"
        ],
        "tropicalSchoolBlackTang": [
            "블랙탱"
        ],
        "tropicalSchoolBlueDory": [
            "블루도리"
        ],
        "tropicalSchoolButterflyFish": [
            "나비고기"
        ],
        "tropicalSchoolCichlid": [
            "시클리드"
        ],
        "tropicalSchoolClownfish": [
            "흰동가리"
        ],
        "tropicalSchoolCottonCandyBetta": [
            "코튼캔디베타"
        ],
        "tropicalSchoolDottyback": [
            "도티백"
        ],
        "tropicalSchoolEmperorRedSnapper": [
            "황적퉁돔"
        ],
        "tropicalSchoolGoatfish": [
            "노랑촉수"
        ],
        "tropicalSchoolMoorishIdol": [
            "깃대돔"
        ],
        "tropicalSchoolOrnateButterfly": [
            "오르네이트 버터플라이"
        ],
        "tropicalSchoolParrotfish": [
            "비늘돔"
        ],
        "tropicalSchoolQueenAngelFish": [
            "퀸엔젤피시"
        ],
        "tropicalSchoolRedCichlid": [
            "레드시클리드"
        ],
        "tropicalSchoolRedLippedBlenny": [
            "붉은 입술 베도라치"
        ],
        "tropicalSchoolRedSnapper": [
            "붉돔"
        ],
        "tropicalSchoolThreadfin": [
            "날가지숭어"
        ],
        "tropicalSchoolTomatoClown": [
            "토마토클라운"
        ],
        "tropicalSchoolTriggerfish": [
            "쥐치무리"
        ],
        "tropicalSchoolYellowTang": [
            "옐로탱"
        ],
        "tropicalSchoolYellowtailParrot": [
            "옐로테일패럿"
        ],
        "cake": [
            "케이크"
        ],
        "camera": [
            "카메라"
        ],
        "golden_carrot": [
            "황금 당근"
        ],
        "carrotOnAStick": [
            "당근 낚싯대"
        ],
        "warped_fungus_on_a_stick": [
            "뒤틀린 버섯 낚싯대"
        ],
        "carrot": [
            "당근"
        ],
        "cauldron": [
            "가마솥"
        ],
        "coal": [
            "석탄",
            null,
            "숯"
        ],
        "chainmail_chestplate": [
            "사슬 흉갑"
        ],
        "leather_chestplate": [
            "가죽 조끼"
        ],
        "diamond_chestplate": [
            "다이아몬드 흉갑"
        ],
        "golden_chestplate": [
            "황금 흉갑"
        ],
        "iron_chestplate": [
            "철제 흉갑"
        ],
        "chorus_fruit": [
            "코러스 열매"
        ],
        "chorus_fruit_popped": [
            "터진 코러스 열매"
        ],
        "cooked_beef": [
            "구운 쇠고기"
        ],
        "cooked_chicken": [
            "익힌 닭고기"
        ],
        "cooked_porkchop": [
            "익힌 돼지고기"
        ],
        "chicken": [
            "익히지 않은 닭고기"
        ],
        "clay_ball": [
            "점토"
        ],
        "clock": [
            "시계"
        ],
        "comparator": [
            "레드스톤 비교 회로"
        ],
        "compass": [
            "나침반"
        ],
        "lodestonecompass": [
            "자석석 나침반"
        ],
        "cookie": [
            "쿠키"
        ],
        "crossbow": [
            "석궁"
        ],
        "diamond": [
            "다이아몬드"
        ],
        "repeater": [
            "레드스톤 탐지기"
        ],
        "acacia_door": [
            "아카시아나무 문"
        ],
        "birch_door": [
            "자작나무 문"
        ],
        "dark_oak_door": [
            "짙은 참나무 문"
        ],
        "iron_door": [
            "철문"
        ],
        "jungle_door": [
            "정글나무 문"
        ],
        "wooden_door": [
            "참나무 문"
        ],
        "spruce_door": [
            "전나무 문"
        ],
        "crimson_door": [
            "진홍색 문"
        ],
        "warped_door": [
            "뒤틀린 문"
        ],
        "dragon_breath": [
            "드래곤의 숨결"
        ],
        "dye": [
            "염료",
            "먹물 주머니",
            "빨간색 염료",
            "녹색 염료",
            "코코아 열매",
            "청금석",
            "보라색 염료",
            "청록색 염료",
            "밝은 회색 염료",
            "회색 염료",
            "분홍색 염료",
            "연두색 염료",
            "노란색 염료",
            "밝은 파란색 염료",
            "자홍색 염료",
            "주황색 염료",
            "뼛가루",
            "검은색 염료",
            "갈색 염료",
            "파란색 염료",
            "흰색 염료"
        ],
        "egg": [
            "달걀"
        ],
        "elytra": [
            "딱지날개"
        ],
        "emerald": [
            "에메랄드"
        ],
        "emptyMap": [
            "빈 지도"
        ],
        "emptyLocatorMap": [
            "빈 위치 정보 지도"
        ],
        "emptyPotion": [
            "물병"
        ],
        "enchanted_book": [
            "효과부여 책"
        ],
        "end_crystal": [
            "엔더 수정"
        ],
        "end_rod": [
            "엔더 막대"
        ],
        "ender_eye": [
            "엔더의 눈"
        ],
        "ender_pearl": [
            "엔더 진주"
        ],
        "experience_bottle": [
            "경험치 병"
        ],
        "feather": [
            "깃털"
        ],
        "fermented_spider_eye": [
            "발효된 거미 눈"
        ],
        "fireball": [
            "불쏘시개"
        ],
        "fireworks": [
            "폭죽 로켓"
        ],
        "fireworksCharge": [
            "폭죽 별"
        ],
        "clownfish": [
            "열대어"
        ],
        "cooked_fish": [
            "익힌 대구"
        ],
        "fish": [
            "날대구"
        ],
        "pufferfish": [
            "복어"
        ],
        "cooked_salmon": [
            "익힌 연어"
        ],
        "salmon": [
            "날 연어"
        ],
        "fishing_rod": [
            "낚싯대"
        ],
        "flint": [
            "부싯돌"
        ],
        "flint_and_steel": [
            "부싯돌과 부시"
        ],
        "flower_pot": [
            "화분"
        ],
        "frame": [
            "아이템 액자"
        ],
        "ghast_tear": [
            "가스트의 눈물"
        ],
        "glass_bottle": [
            "유리병"
        ],
        "gold_nugget": [
            "금덩이"
        ],
        "iron_nugget": [
            "철덩이"
        ],
        "diamond_axe": [
            "다이아몬드 도끼"
        ],
        "golden_axe": [
            "황금 도끼"
        ],
        "iron_axe": [
            "철제 도끼"
        ],
        "stone_axe": [
            "돌도끼"
        ],
        "wooden_axe": [
            "나무 도끼"
        ],
        "chainmail_helmet": [
            "사슬 투구"
        ],
        "leather_helmet": [
            "가죽 모자"
        ],
        "diamond_helmet": [
            "다이아몬드 투구"
        ],
        "golden_helmet": [
            "황금 투구"
        ],
        "iron_helmet": [
            "철제 투구"
        ],
        "diamond_hoe": [
            "다이아몬드 괭이"
        ],
        "golden_hoe": [
            "황금 괭이"
        ],
        "iron_hoe": [
            "철제 괭이"
        ],
        "stone_hoe": [
            "돌괭이"
        ],
        "wooden_hoe": [
            "나무 괭이"
        ],
        "honey_bottle": [
            "꿀병"
        ],
        "honeycomb": [
            "벌집"
        ],
        "horsearmordiamond": [
            "다이아몬드 말 방어구"
        ],
        "horsearmorgold": [
            "황금 말 방어구"
        ],
        "horsearmoriron": [
            "철제 말 방어구"
        ],
        "horsearmorleather": [
            "가죽 말 방어구"
        ],
        "gold_ingot": [
            "금괴"
        ],
        "iron_ingot": [
            "철괴"
        ],
        "netherite_ingot": [
            "네테라이트 주괴"
        ],
        "netherite_scrap": [
            "네테라이트 고철"
        ],
        "netherite_sword": [
            "네테라이트 검"
        ],
        "netherite_pickaxe": [
            "네테라이트 곡괭이"
        ],
        "netherite_axe": [
            "네테라이트 도끼"
        ],
        "netherite_shovel": [
            "네테라이트 삽"
        ],
        "netherite_hoe": [
            "네테라이트 괭이"
        ],
        "netherite_boots": [
            "네테라이트 부츠"
        ],
        "netherite_leggings": [
            "네테라이트 레깅스"
        ],
        "netherite_chestplate": [
            "네테라이트 가슴판"
        ],
        "netherite_helmet": [
            "네테라이트 헬멧"
        ],
        "lead": [
            "끈"
        ],
        "leather": [
            "가죽"
        ],
        "leaves": [
            "나뭇잎",
            "참나무 잎",
            "전나무 잎",
            "자작나무 잎",
            "정글나무 잎",
            "아카시아나무 잎",
            "짙은 참나무 잎"
        ],
        "chainmail_leggings": [
            "사슬 다리보호대"
        ],
        "leather_leggings": [
            "가죽 바지"
        ],
        "diamond_leggings": [
            "다이아몬드 다리보호대"
        ],
        "golden_leggings": [
            "황금 다리보호대"
        ],
        "iron_leggings": [
            "철제 다리보호대"
        ],
        "nautilus_shell": [
            "앵무조개"
        ],
        "heart_of_the_sea": [
            "바다의 심장"
        ],
        "magma_cream": [
            "마그마 크림"
        ],
        "map": [
            "지도"
        ],
        "melon": [
            "수박"
        ],
        "milk": [
            "우유"
        ],
        "minecart": [
            "광물 수레"
        ],
        "chest_minecart": [
            "상자 광물 수레"
        ],
        "command_block_minecart": [
            "커맨드 블록 광물 수레"
        ],
        "minecartFurnace": [
            "화로 광물 수레"
        ],
        "hopper_minecart": [
            "호퍼 광물 수레"
        ],
        "tnt_minecart": [
            "TNT 광물 수레"
        ],
        "trident": [
            "삼지창"
        ],
        "mushroom_stew": [
            "버섯 스튜"
        ],
        "muttoncooked": [
            "익힌 양고기"
        ],
        "muttonraw": [
            "익히지 않은 양고기"
        ],
        "name_tag": [
            "이름 태그"
        ],
        "netherbrick": [
            "네더 벽돌"
        ],
        "quartz": [
            "네더 석영"
        ],
        "nether_wart": [
            "네더 사마귀"
        ],
        "netherStar": [
            "네더의 별"
        ],
        "painting": [
            "그림 액자"
        ],
        "paper": [
            "종이"
        ],
        "diamond_pickaxe": [
            "다이아몬드 곡괭이"
        ],
        "golden_pickaxe": [
            "황금 곡괭이"
        ],
        "iron_pickaxe": [
            "철제 곡괭이"
        ],
        "stone_pickaxe": [
            "돌곡괭이"
        ],
        "wooden_pickaxe": [
            "나무 곡괭이"
        ],
        "porkchop_cooked": [
            "익힌 돼지고기"
        ],
        "porkchop": [
            "익히지 않은 돼지고기"
        ],
        "portfolio": [
            "포트폴리오"
        ],
        "potato": [
            "감자"
        ],
        "baked_potato": [
            "구운 감자"
        ],
        "poisonous_potato": [
            "독성 감자"
        ],
        "potion": [
            "포션"
        ],
        "prismarine_crystals": [
            "프리즈머린 수정"
        ],
        "prismarine_shard": [
            "프리즈머린 조각"
        ],
        "pumpkin_pie": [
            "호박 파이"
        ],
        "cooked_rabbit": [
            "익힌 토끼고기"
        ],
        "rabbit_foot": [
            "토끼의 발"
        ],
        "rabbit_hide": [
            "토끼 가죽"
        ],
        "rabbit": [
            "익히지 않은 토끼고기"
        ],
        "rabbit_stew": [
            "토끼 스튜"
        ],
        "record": [
            "음악 디스크"
        ],
        "redstone": [
            "레드스톤"
        ],
        "reeds": [
            "사탕수수"
        ],
        "kelp": [
            "다시마"
        ],
        "dried_kelp": [
            "말린 다시마"
        ],
        "rotten_flesh": [
            "썩은 고기"
        ],
        "ruby": [
            "루비"
        ],
        "saddle": [
            "안장"
        ],
        "wheat_seeds": [
            "씨앗"
        ],
        "beetroot_seeds": [
            "비트 씨앗"
        ],
        "melon_seeds": [
            "수박씨"
        ],
        "pumpkin_seeds": [
            "호박씨"
        ],
        "shears": [
            "가위"
        ],
        "diamond_shovel": [
            "다이아몬드 삽"
        ],
        "golden_shovel": [
            "황금 삽"
        ],
        "iron_shovel": [
            "철제 삽"
        ],
        "stone_shovel": [
            "돌삽"
        ],
        "wooden_shovel": [
            "나무 삽"
        ],
        "sign": [
            "참나무 표지판"
        ],
        "spruce_sign": [
            "전나무 표지판"
        ],
        "birch_sign": [
            "자작나무 표지판"
        ],
        "jungle_sign": [
            "정글나무 표지판"
        ],
        "acacia_sign": [
            "아카시아나무 표지판"
        ],
        "darkoak_sign": [
            "짙은 참나무 표지판"
        ],
        "crimson_sign": [
            "진홍색 표지판"
        ],
        "warped_sign": [
            "뒤틀린 표지판"
        ],
        "skull": [
            "머리",
            "스켈레톤 해골",
            "위더 스켈레톤 해골",
            "좀비의 머리",
            "머리",
            "크리퍼의 머리",
            "드래곤 머리"
        ],
        "slime_ball": [
            "슬라임 볼"
        ],
        "snowball": [
            "눈덩이"
        ],
        "speckled_melon": [
            "빛나는 수박"
        ],
        "spider_eye": [
            "거미 눈"
        ],
        "stick": [
            "막대"
        ],
        "string": [
            "실"
        ],
        "sugar": [
            "설탕"
        ],
        "gunpowder": [
            "화약"
        ],
        "diamond_sword": [
            "다이아몬드 검"
        ],
        "golden_sword": [
            "황금 검"
        ],
        "iron_sword": [
            "철제 검"
        ],
        "stone_sword": [
            "돌검"
        ],
        "wooden_sword": [
            "목검"
        ],
        "wheat": [
            "밀"
        ],
        "writable_book": [
            "책과 깃펜"
        ],
        "written_book": [
            "쓰여진 책"
        ],
        "glowstone_dust": [
            "발광석 가루"
        ],
        "shield": [
            "방패"
        ],
        "shulker_shell": [
            "셜커 껍질"
        ],
        "totem": [
            "불사의 토템"
        ],
        "turtle_helmet": [
            "거북 등딱지"
        ],
        "turtle_shell_piece": [
            "등딱지"
        ],
        "phantom_membrane": [
            "팬텀 멤브레인"
        ],
        "sweet_berries": [
            "달콤한 나무열매"
        ],
        "suspicious_stew": [
            "수상한 스튜"
        ],
        "banner_pattern": [
            "배너 무늬"
        ],
        "acaciaFence": [
            "아카시아나무 울타리"
        ],
        "acacia_fence_gate": [
            "아카시아나무 울타리 문"
        ],
        "activator_rail": [
            "작동기 레일"
        ],
        "allow": [
            "허용"
        ],
        "deny": [
            "거부"
        ],
        "border_block": [
            "경계"
        ],
        "anvil": [
            "모루",
            "모루",
            null,
            null,
            null,
            "약간 손상된 모루",
            null,
            null,
            null,
            "심각하게 손상된 모루"
        ],
        "barrier": [
            "방벽"
        ],
        "beacon": [
            "신호기"
        ],
        "beehive": [
            "벌통"
        ],
        "bee_nest": [
            "벌집"
        ],
        "target": [
            "과녁"
        ],
        "bedrock": [
            "기반암"
        ],
        "conduit": [
            "도관"
        ],
        "invisibleBedrock": [
            "투명 기반암"
        ],
        "birchFence": [
            "자작나무 울타리"
        ],
        "birch_fence_gate": [
            "자작나무 울타리 문"
        ],
        "blast_furnace": [
            "용광로"
        ],
        "bone_block": [
            "뼈 블록"
        ],
        "coal_block": [
            "석탄 블록"
        ],
        "diamond_block": [
            "다이아몬드 블록"
        ],
        "emerald_block": [
            "에메랄드 블록"
        ],
        "gold_block": [
            "황금 블록"
        ],
        "iron_block": [
            "철 블록"
        ],
        "lapis_block": [
            "청금석 블록"
        ],
        "redstone_block": [
            "레드스톤 블록"
        ],
        "bookshelf": [
            "책장"
        ],
        "brick_block": [
            "벽돌 블록"
        ],
        "brown_mushroom": [
            "갈색 버섯"
        ],
        "wooden_button": [
            "참나무 버튼"
        ],
        "acacia_button": [
            "아카시아나무 버튼"
        ],
        "birch_button": [
            "자작나무 버튼"
        ],
        "dark_oak_button": [
            "어두운 참나무 버튼"
        ],
        "jungle_button": [
            "정글나무 버튼"
        ],
        "spruce_button": [
            "전나무 버튼"
        ],
        "stone_button": [
            "돌 버튼"
        ],
        "cactus": [
            "선인장"
        ],
        "dried_kelp_block": [
            "말린 다시마 블록"
        ],
        "carved_pumpkin": [
            "조각한 호박"
        ],
        "chest": [
            "상자"
        ],
        "ender_chest": [
            "엔더 상자"
        ],
        "jigsaw": [
            "직소 블록"
        ],
        "honey_block": [
            "꿀 블록"
        ],
        "honeycomb_block": [
            "벌집 블록"
        ],
        "lodestone": [
            "자석석"
        ],
        "nether_sprouts": [
            "네더 새싹"
        ],
        "crimson_stem": [
            "진홍색 줄기"
        ],
        "warped_stem": [
            "뒤틀린 줄기"
        ],
        "stripped_crimson_stem": [
            "벗겨진 진홍색 줄기"
        ],
        "stripped_warped_stem": [
            "벗겨진 뒤틀린 줄기"
        ],
        "crimson_hyphae": [
            "진홍색 균사"
        ],
        "warped_hyphae": [
            "뒤틀린 균사"
        ],
        "stripped_crimson_hyphae": [
            "벗겨진 진홍색 균사"
        ],
        "stripped_warped_hyphae": [
            "벗겨진 뒤틀린 균사"
        ],
        "crimson_planks": [
            "진홍색 판자"
        ],
        "warped_planks": [
            "뒤틀린 판자"
        ],
        "crimson_trapdoor": [
            "진홍색 뚜껑문"
        ],
        "warped_trapdoor": [
            "뒤틀린 뚜껑문"
        ],
        "crimson_standing_sign": [
            "진홍색 표지판"
        ],
        "warped_standing_sign": [
            "뒤틀린 표지판"
        ],
        "crimson_wall_sign": [
            "진홍색 표지판"
        ],
        "warped_wall_sign": [
            "뒤틀린 표지판"
        ],
        "crimson_stairs": [
            "진홍색 계단"
        ],
        "warped_stairs": [
            "뒤틀린 계단"
        ],
        "crimson_fence": [
            "진홍색 울타리"
        ],
        "warped_fence": [
            "뒤틀린 울타리"
        ],
        "crimson_fence_gate": [
            "진홍색 울타리 문"
        ],
        "warped_fence_gate": [
            "뒤틀린 울타리 문"
        ],
        "crimson_button": [
            "진홍색 버튼"
        ],
        "warped_button": [
            "뒤틀린 버튼"
        ],
        "crimson_pressure_plate": [
            "진홍색 감압판"
        ],
        "warped_pressure_plate": [
            "뒤틀린 감압판"
        ],
        "crimson_slab": [
            "진홍색 판"
        ],
        "warped_slab": [
            "뒤틀린 판"
        ],
        "crimson_double_slab": [
            "진홍색 판"
        ],
        "warped_double_slab": [
            "뒤틀린 판"
        ],
        "shroomlight": [
            "쉬룸라이트"
        ],
        "crimson_nylium": [
            "진홍색 나일륨"
        ],
        "warped_nylium": [
            "뒤틀린 나일륨"
        ],
        "basalt": [
            "현무암"
        ],
        "polished_basalt": [
            "연마된 현무암"
        ],
        "blackstone": [
            "블랙스톤"
        ],
        "polished_blackstone_bricks": [
            "광택 블랙스톤 벽돌"
        ],
        "cracked_polished_blackstone_bricks": [
            "갈라진 광택 블랙스톤 벽돌"
        ],
        "polished_blackstone_brick_stairs": [
            "광택 블랙스톤 벽돌 계단"
        ],
        "blackstone_stairs": [
            "블랙스톤 계단"
        ],
        "blackstone_wall": [
            "블랙스톤 벽"
        ],
        "polished_blackstone_brick_wall": [
            "광택 블랙스톤 벽돌 벽"
        ],
        "chiseled_polished_blackstone": [
            "깎아놓은 광택 블랙스톤"
        ],
        "gilded_blackstone": [
            "금빛 블랙스톤"
        ],
        "blackstone_slab": [
            "블랙스톤 판"
        ],
        "polished_blackstone_brick_slab": [
            "광택 블랙스톤 벽돌 판"
        ],
        "chain": [
            "사슬"
        ],
        "soul_soil": [
            "영혼의 흙"
        ],
        "soul_fire": [
            "영혼의 불"
        ],
        "polished_blackstone": [
            "광택 블랙스톤"
        ],
        "polished_blackstone_stairs": [
            "광택 블랙스톤 계단"
        ],
        "polished_blackstone_slab": [
            "광택 블랙스톤 판"
        ],
        "polished_blackstone_pressure_plate": [
            "광택 블랙스톤 감압판"
        ],
        "polished_blackstone_button": [
            "광택 블랙스톤 버튼"
        ],
        "polished_blackstone_wall": [
            "광택 블랙스톤 벽"
        ],
        "soul_campfire": [
            "영혼의 모닥불"
        ],
        "chiseled_nether_bricks": [
            "깎아놓은 네더 벽돌"
        ],
        "cracked_nether_bricks": [
            "갈라진 네더 벽돌"
        ],
        "quartz_bricks": [
            "석영 벽돌"
        ],
        "trapped_chest": [
            "함정 상자"
        ],
        "shulkerBoxWhite": [
            "흰색 셜커 상자"
        ],
        "shulkerBoxOrange": [
            "주황색 셜커 상자"
        ],
        "shulkerBoxMagenta": [
            "자홍색 셜커 상자"
        ],
        "shulkerBoxLightBlue": [
            "밝은 파란색 셜커 상자"
        ],
        "shulkerBoxYellow": [
            "노란색 셜커 상자"
        ],
        "shulkerBoxLime": [
            "연두색 셜커 상자"
        ],
        "shulkerBoxPink": [
            "분홍색 셜커 상자"
        ],
        "shulkerBoxGray": [
            "회색 셜커 상자"
        ],
        "shulkerBoxSilver": [
            "밝은 회색 셜커 상자"
        ],
        "shulkerBoxCyan": [
            "청록색 셜커 상자"
        ],
        "shulkerBoxPurple": [
            "보라색 셜커 상자"
        ],
        "shulkerBoxBlue": [
            "파란색 셜커 상자"
        ],
        "shulkerBoxBrown": [
            "갈색 셜커 상자"
        ],
        "shulkerBoxGreen": [
            "녹색 셜커 상자"
        ],
        "shulkerBoxRed": [
            "빨간색 셜커 상자"
        ],
        "shulkerBoxBlack": [
            "검은색 셜커 상자"
        ],
        "shulkerBox": [
            "셜커 상자"
        ],
        "chorus_flower": [
            "코러스 꽃"
        ],
        "chorus_plant": [
            "코러스 식물"
        ],
        "stained_glass": [
            "흰색 스테인드글라스",
            "흰색 스테인드글라스",
            "주황색 스테인드글라스",
            "자홍색 스테인드글라스",
            "밝은 파란색 스테인드글라스",
            "노란색 스테인드글라스",
            "연두색 스테인드글라스",
            "분홍색 스테인드글라스",
            "회색 스테인드글라스",
            "밝은 회색 스테인드글라스",
            "청록색 스테인드글라스",
            "보라색 스테인드글라스",
            "파란색 스테인드글라스",
            "갈색 스테인드글라스",
            "녹색 스테인드글라스",
            "빨간색 스테인드글라스",
            "검은색 스테인드글라스"
        ],
        "stained_glass_pane": [
            "흰색 스테인드글라스 판유리",
            "흰색 스테인드글라스 판유리",
            "주황색 스테인드글라스 판유리",
            "자홍색 스테인드글라스 판유리",
            "밝은 파란색 스테인드글라스 판유리",
            "노란색 스테인드글라스 판유리",
            "연두색 스테인드글라스 판유리",
            "분홍색 스테인드글라스 판유리",
            "회색 스테인드글라스 판유리",
            "밝은 회색 스테인드글라스 판유리",
            "청록색 스테인드글라스 판유리",
            "보라색 스테인드글라스 판유리",
            "파란색 스테인드글라스 판유리",
            "갈색 스테인드글라스 판유리",
            "녹색 스테인드글라스 판유리",
            "빨간색 스테인드글라스 판유리",
            "검은색 스테인드글라스 판유리"
        ],
        "clay": [
            "점토 블록"
        ],
        "hardened_clay": [
            "테라코타"
        ],
        "stained_hardened_clay": [
            "테라코타",
            "흰색 테라코타",
            "주황색 테라코타",
            "자홍색 테라코타",
            "밝은 파란색 테라코타",
            "노란색 테라코타",
            "연두색 테라코타",
            "분홍색 테라코타",
            "회색 테라코타",
            "밝은 회색 테라코타",
            "청록색 테라코타",
            "보라색 테라코타",
            "파란색 테라코타",
            "갈색 테라코타",
            "녹색 테라코타",
            "빨간색 테라코타",
            "검은색 테라코타"
        ],
        "structure_block": [
            "구조물 블록"
        ],
        "structure_void": [
            "구조물 공허 공간"
        ],
        "wool": [
            "양털",
            "흰색 양털",
            "주황색 양털",
            "자홍색 양털",
            "밝은 파란색 양털",
            "노란색 양털",
            "연두색 양털",
            "분홍색 양털",
            "회색 양털",
            "밝은 회색 양털",
            "청록색 양털",
            "보라색 양털",
            "파란색 양털",
            "갈색 양털",
            "녹색 양털",
            "빨간색 양털",
            "검은색 양털"
        ],
        "cobblestone_wall": [
            "조약돌 벽",
            "조약돌 벽",
            "이끼 낀 조약돌 벽",
            "화강암 벽",
            "섬록암 벽",
            "안산암 벽",
            "사암 벽",
            "벽돌 벽",
            "석재 벽돌 벽",
            "이끼 낀 석재 벽돌 벽",
            "엔드 스톤 벽돌 벽",
            "네더 벽돌 벽",
            "프리즈머린 벽",
            "붉은 사암 벽",
            "붉은 네더 벽돌 벽"
        ],
        "cocoa": [
            "코코아"
        ],
        "command_block": [
            "커맨드 블록"
        ],
        "composter": [
            "퇴비"
        ],
        "light_block": [
            "조명 블록"
        ],
        "repeating_command_block": [
            "반복 커맨드 블록"
        ],
        "chain_command_block": [
            "체인 커맨드 블록"
        ],
        "darkOakFence": [
            "짙은 참나무 울타리"
        ],
        "dark_oak_fence_gate": [
            "짙은 참나무 울타리 문"
        ],
        "daylight_detector": [
            "일광 센서"
        ],
        "deadbush": [
            "마른 덤불"
        ],
        "detector_rail": [
            "탐지 레일"
        ],
        "dirt": [
            "흙",
            "흙",
            "거친 흙"
        ],
        "podzol": [
            "회백토"
        ],
        "purpur_block": [
            "보라보라 블록",
            "보라보라 블록",
            "깎아놓은 보라보라",
            "보라보라 기둥"
        ],
        "dispenser": [
            "디스펜서"
        ],
        "doorWood": [
            "나무 문"
        ],
        "double_plant": [
            "식물",
            "해바라기",
            "라일락",
            "큰 잔디",
            "큰 양치식물",
            "장미 덤불",
            "모란"
        ],
        "dragon_egg": [
            "드래곤 알"
        ],
        "dropper": [
            "드로퍼"
        ],
        "enchanting_table": [
            "효과부여대"
        ],
        "enderChest": [
            "엔더 상자"
        ],
        "end_portal_frame": [
            "엔더 포탈"
        ],
        "farmland": [
            "농지"
        ],
        "fletching_table": [
            "화살 제조대"
        ],
        "fence": [
            "참나무 울타리"
        ],
        "fence_gate": [
            "참나무 울타리 문"
        ],
        "iron_bars": [
            "철창"
        ],
        "fire": [
            "불"
        ],
        "yellow_flower": [
            "꽃",
            "민들레"
        ],
        "red_flower": [
            "꽃",
            "양귀비",
            "파란색 난초",
            "파꽃",
            "푸른 삼백초",
            "빨간색 튤립",
            "주황색 튤립",
            "흰색 튤립",
            "분홍색 튤립",
            "데이지",
            "수레국화",
            "계곡의 수련"
        ],
        "wither_rose": [
            "위더 장미"
        ],
        "furnace": [
            "화로"
        ],
        "glass": [
            "유리"
        ],
        "golden_rail": [
            "동력 레일"
        ],
        "grass": [
            "잔디 블록"
        ],
        "grass_path": [
            "잔디길"
        ],
        "gravel": [
            "자갈"
        ],
        "hay_block": [
            "건초 더미"
        ],
        "netherrack": [
            "네더랙"
        ],
        "soul_sand": [
            "영혼 모래"
        ],
        "hopper": [
            "호퍼"
        ],
        "ice": [
            "얼음"
        ],
        "packed_ice": [
            "단단한 얼음"
        ],
        "blue_ice": [
            "파란색 얼음"
        ],
        "iron_trapdoor": [
            "철제 바닥 문"
        ],
        "jukebox": [
            "주크박스"
        ],
        "jungleFence": [
            "정글나무 울타리"
        ],
        "jungle_fence_gate": [
            "정글나무 울타리 문"
        ],
        "ladder": [
            "사다리"
        ],
        "flowing_lava": [
            "용암"
        ],
        "leaves2": [
            "아카시아나무 잎",
            "아카시아나무 잎",
            "짙은 참나무 잎"
        ],
        "lever": [
            "손잡이"
        ],
        "glowstone": [
            "발광석"
        ],
        "lit_pumpkin": [
            "잭 오 랜턴"
        ],
        "lockedchest": [
            "잠긴 상자"
        ],
        "log2": [
            "잘린 아카시아나무",
            "잘린 아카시아나무",
            "잘린 짙은 참나무"
        ],
        "log": [
            "통나무",
            "잘린 참나무",
            "잘린 전나무",
            "잘린 자작나무",
            "잘린 정글나무"
        ],
        "magma": [
            "마그마 블록"
        ],
        "melon_block": [
            "수박"
        ],
        "mob_spawner": [
            "몬스터 생성기"
        ],
        "monster_egg": [
            "감염된 돌",
            "감염된 돌",
            "감염된 조약돌",
            "감염된 석재 벽돌",
            "감염된 이끼 낀 석재 벽돌",
            "감염된 갈라진 석재 벽돌",
            "감염된 깎아놓은 석재 벽돌"
        ],
        "mushroom": [
            "버섯"
        ],
        "noteblock": [
            "소리 블록"
        ],
        "mycelium": [
            "균사체"
        ],
        "nether_brick": [
            "네더 벽돌 블록"
        ],
        "red_nether_brick": [
            "빨간색 네더 벽돌"
        ],
        "nether_brick_fence": [
            "네더 벽돌 울타리"
        ],
        "quartz_ore": [
            "네더 석영 광석"
        ],
        "netherreactor": [
            "네더 반응기 코어"
        ],
        "nether_wart_block": [
            "네더 사마귀 블록"
        ],
        "warped_wart_block": [
            "뒤틀린 사마귀 블록"
        ],
        "unlit_redstone_torch": [
            "레드스톤 횃불"
        ],
        "redstone_torch": [
            "레드스톤 횃불"
        ],
        "soul_torch": [
            "영혼의 횃불"
        ],
        "obsidian": [
            "흑요석"
        ],
        "coal_ore": [
            "석탄 광석"
        ],
        "diamond_ore": [
            "다이아몬드 광석"
        ],
        "emerald_ore": [
            "에메랄드 광석"
        ],
        "gold_ore": [
            "황금 광석"
        ],
        "iron_ore": [
            "철광석"
        ],
        "lapis_ore": [
            "청금석 광석"
        ],
        "redstone_ore": [
            "레드스톤 광석"
        ],
        "oreRuby": [
            "루비 광석"
        ],
        "observer": [
            "관찰자"
        ],
        "piston": [
            "피스톤"
        ],
        "sticky_piston": [
            "끈끈이 피스톤"
        ],
        "portal": [
            "포탈"
        ],
        "potatoes": [
            "감자"
        ],
        "stone_pressure_plate": [
            "돌 감압판"
        ],
        "wooden_pressure_plate": [
            "참나무 감압판"
        ],
        "acacia_pressure_plate": [
            "아카시아나무 감압판"
        ],
        "birch_pressure_plate": [
            "자작나무 감압판"
        ],
        "dark_oak_pressure_plate": [
            "어두운 참나무 감압판"
        ],
        "jungle_pressure_plate": [
            "정글나무 감압판"
        ],
        "spruce_pressure_plate": [
            "전나무 감압판"
        ],
        "prismarine": [
            "프리즈머린",
            "프리즈머린",
            "프리즈머린 벽돌",
            "어두운 프리즈머린"
        ],
        "pumpkin": [
            "호박"
        ],
        "pumpkin_stem": [
            "호박 줄기"
        ],
        "quartz_block": [
            "석영 블록",
            "석영 블록",
            "깎아놓은 석영 블록",
            "석영 기둥 블록",
            "부드러운 석영 블록"
        ],
        "rail": [
            "레일"
        ],
        "red_mushroom": [
            "붉은 버섯"
        ],
        "crimson_fungus": [
            "진홍색 곰팡이"
        ],
        "warped_fungus": [
            "뒤틀린 곰팡이"
        ],
        "red_mushroom_block": [
            "붉은 버섯 블록"
        ],
        "red_sandstone": [
            "붉은 사암",
            "붉은 사암",
            "깎아놓은 붉은 사암",
            "다듬은 붉은 사암",
            "부드러운 붉은 사암"
        ],
        "redstone_wire": [
            "레드스톤 가루"
        ],
        "redstone_lamp": [
            "레드스톤 램프"
        ],
        "sand": [
            "모래",
            "모래",
            "붉은 모래"
        ],
        "sandstone": [
            "사암",
            "사암",
            "깎아놓은 사암",
            "다듬은 사암",
            "부드러운 사암"
        ],
        "sapling": [
            "묘목",
            "참나무 묘목",
            "전나무 묘목",
            "자작나무 묘목",
            "정글나무 묘목",
            "아카시아나무 묘목",
            "짙은 참나무 묘목"
        ],
        "seaLantern": [
            "바다 랜턴"
        ],
        "standing_sign": [
            "표지판"
        ],
        "spruce_standing_sign": [
            "전나무 표지판"
        ],
        "birch_standing_sign": [
            "자작나무 표지판"
        ],
        "jungle_standing_sign": [
            "정글나무 표지판"
        ],
        "acacia_standing_sign": [
            "아카시아나무 표지판"
        ],
        "darkoak_standing_sign": [
            "짙은 참나무 표지판"
        ],
        "slime": [
            "슬라임 블록"
        ],
        "snow": [
            "눈"
        ],
        "sponge": [
            "스펀지",
            "스펀지",
            "젖은 스펀지"
        ],
        "spruceFence": [
            "전나무 울타리"
        ],
        "spruce_fence_gate": [
            "전나무 울타리 문"
        ],
        "brick_stairs": [
            "벽돌 계단"
        ],
        "nether_brick_stairs": [
            "네더 벽돌 계단"
        ],
        "quartz_stairs": [
            "석영 계단"
        ],
        "smooth_quartz_stairs": [
            "부드러운 석영 계단"
        ],
        "red_sandstone_stairs": [
            "붉은 사암 계단"
        ],
        "sandstone_stairs": [
            "사암 계단"
        ],
        "stone_stairs": [
            "조약돌 계단"
        ],
        "normal_stone_stairs": [
            "석재 계단"
        ],
        "stone_brick_stairs": [
            "석재 벽돌 계단"
        ],
        "oak_stairs": [
            "참나무 계단"
        ],
        "acacia_stairs": [
            "아카시아나무 계단"
        ],
        "birch_stairs": [
            "자작나무 계단"
        ],
        "dark_oak_stairs": [
            "짙은 참나무 계단"
        ],
        "jungle_stairs": [
            "정글나무 계단"
        ],
        "spruce_stairs": [
            "전나무 계단"
        ],
        "purpur_stairs": [
            "보라보라 계단"
        ],
        "prismarine_stairs": [
            "프리즈머린 계단"
        ],
        "dark_prismarine_stairs": [
            "어두운 프리즈머린 계단"
        ],
        "prismarine_bricks_stairs": [
            "프리즈머린 벽돌 계단"
        ],
        "granite_stairs": [
            "화강암 계단"
        ],
        "diorite_stairs": [
            "섬록암 계단"
        ],
        "andesite_stairs": [
            "안산암 계단"
        ],
        "polished_granite_stairs": [
            "부드러운 화강암 계단"
        ],
        "polished_diorite_stairs": [
            "부드러운 섬록암 계단"
        ],
        "polished_andesite_stairs": [
            "부드러운 안산암 계단"
        ],
        "mossy_stone_brick_stairs": [
            "이끼 낀 석재 벽돌 계단"
        ],
        "smooth_red_sandstone_stairs": [
            "부드러운 붉은 사암 계단"
        ],
        "smooth_sandstone_stairs": [
            "부드러운 사암 계단"
        ],
        "end_brick_stairs": [
            "엔드 스톤 벽돌 계단"
        ],
        "mossy_cobblestone_stairs": [
            "이끼 낀 조약돌 계단"
        ],
        "red_nether_brick_stairs": [
            "붉은 네더 벽돌 계단"
        ],
        "smooth_stone": [
            "부드러운 석재"
        ],
        "standing_banner": [
            "배너",
            "검은색 배너",
            "빨간색 배너",
            "녹색 배너",
            "갈색 배너",
            "파란색 배너",
            "보라색 배너",
            "청록색 배너",
            "밝은 회색 배너",
            "회색 배너",
            "분홍색 배너",
            "연두색 배너",
            "노란색 배너",
            "밝은 파란색 배너",
            "자홍색 배너",
            "주황색 배너",
            "배너"
        ],
        "stone": [
            "돌",
            "돌",
            "화강암",
            "부드러운 화강암",
            "섬록암",
            "부드러운 섬록암",
            "안산암",
            "부드러운 안산암"
        ],
        "cobblestone": [
            "조약돌"
        ],
        "stonebrick": [
            "석재 벽돌",
            "석재 벽돌",
            "이끼 낀 석재 벽돌",
            "깎아놓은 석재 벽돌"
        ],
        "stonecutter": [
            "돌 절단기"
        ],
        "stonecutter_block": [
            "돌 절단기"
        ],
        "mossy_cobblestone": [
            "이끼 낀 조약돌"
        ],
        "double_stone_slab": [
            "돌판",
            "돌판",
            "사암 판",
            "판자 판",
            "조약돌 판",
            "벽돌 판",
            "석재 벽돌 판",
            "석영 판",
            "네더 벽돌 판"
        ],
        "stone_slab": [
            "돌판",
            "부드러운 석재 판",
            "사암 판",
            "판자 판",
            "조약돌 판",
            "벽돌 판",
            "석재 벽돌 판",
            "석영 판",
            "네더 벽돌 판"
        ],
        "double_stone_slab2": [
            "붉은 사암 판",
            "붉은 사암 판"
        ],
        "stone_slab2": [
            "붉은 사암 판",
            "붉은 사암 판",
            "보라보라 판",
            "프리즈머린 판",
            "프리즈머린 벽돌 판",
            "어두운 프리즈머린 판",
            "이끼 낀 조약돌 판",
            "부드러운 사암 판",
            "붉은 네더 벽돌 판"
        ],
        "stone_slab3": [
            "엔드 스톤 벽돌 판",
            "엔드 스톤 벽돌 판",
            "부드러운 붉은 사암 판",
            "부드러운 안산암 판",
            "안산암 판",
            "섬록암 판",
            "부드러운 섬록암 판",
            "화강암 판",
            "부드러운 화강암 판"
        ],
        "stone_slab4": [
            "이끼 낀 석재 벽돌 판",
            "이끼 낀 석재 벽돌 판",
            "부드러운 석영 판",
            "석재 판",
            "다듬은 사암 판",
            "다듬은 붉은 사암 판"
        ],
        "coral_block": [
            "튜브 산호 블록",
            "튜브 산호 블록",
            "뇌 산호 블록",
            "거품 산호 블록",
            "불꽃 산호 블록",
            "뿔 산호 블록",
            "죽은 튜브 산호 블록",
            "죽은 뇌 산호 블록",
            "죽은 거품 산호 블록",
            "죽은 불꽃 산호 블록",
            "죽은 뿔 산호 블록"
        ],
        "tallgrass": [
            "잔디",
            "잔디",
            "양치식물"
        ],
        "seagrass": [
            "해초",
            "해초"
        ],
        "sea_pickle": [
            "해삼"
        ],
        "turtle_egg": [
            "바다 거북 알"
        ],
        "coral": [
            "튜브 산호",
            "튜브 산호",
            "뇌 산호",
            "거품 산호",
            "불꽃 산호",
            "뿔 산호",
            "죽은 튜브 산호",
            "죽은 뇌 산호",
            "죽은 거품 산호",
            "죽은 불꽃 산호",
            "죽은 뿔 산호"
        ],
        "coral_fan": [
            "튜브 부채 산호",
            "튜브 부채 산호",
            "뇌 부채 산호",
            "거품 부채 산호",
            "불꽃 부채 산호",
            "뿔 부채 산호"
        ],
        "coral_fan_dead": [
            "죽은 튜브 부채 산호",
            "죽은 튜브 부채 산호",
            "죽은 뇌 부채 산호",
            "죽은 거품 부채 산호",
            "죽은 불꽃 부채 산호",
            "죽은 뿔 부채 산호"
        ],
        "glass_pane": [
            "판유리"
        ],
        "tnt": [
            "TNT"
        ],
        "snow_layer": [
            "쌓인 눈"
        ],
        "torch": [
            "횃불"
        ],
        "trapdoor": [
            "참나무 뚜껑문"
        ],
        "acacia_trapdoor": [
            "아카시아나무 뚜껑문"
        ],
        "birch_trapdoor": [
            "자작나무 뚜껑문"
        ],
        "dark_oak_trapdoor": [
            "어두운 참나무 뚜껑문"
        ],
        "jungle_trapdoor": [
            "정글나무 뚜껑문"
        ],
        "spruce_trapdoor": [
            "전나무 뚜껑문"
        ],
        "tripWire": [
            "트립와이어"
        ],
        "tripwire_hook": [
            "트립와이어 후크"
        ],
        "vine": [
            "덩굴"
        ],
        "weeping_vines": [
            "흐느끼는 덩굴"
        ],
        "twisting_vines": [
            "뒤틀린 덩굴"
        ],
        "flowing_water": [
            "물"
        ],
        "water": [
            "물"
        ],
        "waterlily": [
            "수련잎"
        ],
        "web": [
            "거미줄"
        ],
        "heavy_weighted_pressure_plate": [
            "무게 감압판(중형)"
        ],
        "light_weighted_pressure_plate": [
            "무게 감압판(경형)"
        ],
        "end_stone": [
            "엔드 스톤"
        ],
        "end_bricks": [
            "엔드 스톤 벽돌"
        ],
        "planks": [
            "판자",
            "참나무 목재",
            "전나무 목재",
            "자작나무 목재",
            "정글나무 목재",
            "아카시아나무 목재",
            "짙은 참나무 목재"
        ],
        "wooden_slab": [
            "나무 판",
            "참나무 판",
            "전나무 판",
            "자작나무 판",
            "정글나무 판",
            "아카시아나무 판",
            "짙은 참나무 판"
        ],
        "carpet": [
            "카펫",
            "검은색 카펫",
            "빨간색 카펫",
            "녹색 카펫",
            "갈색 카펫",
            "파란색 카펫",
            "보라색 카펫",
            "청록색 카펫",
            "밝은 회색 카펫",
            "회색 카펫",
            "분홍색 카펫",
            "연두색 카펫",
            "노란색 카펫",
            "밝은 파란색 카펫",
            "자홍색 카펫",
            "주황색 카펫",
            "흰색 카펫"
        ],
        "crafting_table": [
            "작업대"
        ],
        "white_glazed_terracotta": [
            "흰색 유광 테라코타",
            "흰색 유광 테라코타"
        ],
        "orange_glazed_terracotta": [
            "주황색 유광 테라코타",
            "주황색 유광 테라코타"
        ],
        "magenta_glazed_terracotta": [
            "자홍색 유광 테라코타",
            "자홍색 유광 테라코타"
        ],
        "light_blue_glazed_terracotta": [
            "밝은 파란색 유광 테라코타",
            "밝은 파란색 유광 테라코타"
        ],
        "yellow_glazed_terracotta": [
            "노란색 유광 테라코타",
            "노란색 유광 테라코타"
        ],
        "lime_glazed_terracotta": [
            "연두색 유광 테라코타",
            "연두색 유광 테라코타"
        ],
        "pink_glazed_terracotta": [
            "분홍색 유광 테라코타",
            "분홍색 유광 테라코타"
        ],
        "gray_glazed_terracotta": [
            "회색 유광 테라코타",
            "회색 유광 테라코타"
        ],
        "silver_glazed_terracotta": [
            "밝은 회색 유광 테라코타",
            "밝은 회색 유광 테라코타"
        ],
        "cyan_glazed_terracotta": [
            "청록색 유광 테라코타",
            "청록색 유광 테라코타"
        ],
        "purple_glazed_terracotta": [
            "보라색 유광 테라코타",
            "보라색 유광 테라코타"
        ],
        "blue_glazed_terracotta": [
            "파란색 유광 테라코타",
            "파란색 유광 테라코타"
        ],
        "brown_glazed_terracotta": [
            "갈색 유광 테라코타",
            "갈색 유광 테라코타"
        ],
        "green_glazed_terracotta": [
            "녹색 유광 테라코타",
            "녹색 유광 테라코타"
        ],
        "red_glazed_terracotta": [
            "빨간색 유광 테라코타",
            "빨간색 유광 테라코타"
        ],
        "black_glazed_terracotta": [
            "검은색 유광 테라코타",
            "검은색 유광 테라코타"
        ],
        "concrete": [
            "흰색 콘크리트",
            "흰색 콘크리트",
            "주황색 콘크리트",
            "자홍색 콘크리트",
            "밝은 파란색 콘크리트",
            "노란색 콘크리트",
            "연두색 콘크리트",
            "분홍색 콘크리트",
            "회색 콘크리트",
            "밝은 회색 콘크리트",
            "청록색 콘크리트",
            "보라색 콘크리트",
            "파란색 콘크리트",
            "갈색 콘크리트",
            "녹색 콘크리트",
            "빨간색 콘크리트",
            "검은색 콘크리트"
        ],
        "glazedTerracottaWhite": [
            "흰색 유광 테라코타"
        ],
        "glazedTerracottaOrange": [
            "주황색 유광 테라코타"
        ],
        "glazedTerracottaMagenta": [
            "자홍색 유광 테라코타"
        ],
        "glazedTerracottaLightBlue": [
            "밝은 파란색 유광 테라코타"
        ],
        "glazedTerracottaYellow": [
            "노란색 유광 테라코타"
        ],
        "glazedTerracottaLime": [
            "연두색 유광 테라코타"
        ],
        "glazedTerracottaPink": [
            "분홍색 유광 테라코타"
        ],
        "glazedTerracottaGray": [
            "회색 유광 테라코타"
        ],
        "glazedTerracottaSilver": [
            "밝은 회색 유광 테라코타"
        ],
        "glazedTerracottaCyan": [
            "청록색 유광 테라코타"
        ],
        "glazedTerracottaPurple": [
            "보라색 유광 테라코타"
        ],
        "glazedTerracottaBlue": [
            "파란색 유광 테라코타"
        ],
        "glazedTerracottaBrown": [
            "갈색 유광 테라코타"
        ],
        "glazedTerracottaGreen": [
            "녹색 유광 테라코타"
        ],
        "glazedTerracottaRed": [
            "빨간색 유광 테라코타"
        ],
        "glazedTerracottaBlack": [
            "검은색 유광 테라코타"
        ],
        "concretePowder": [
            "흰색 콘크리트 가루",
            "흰색 콘크리트 가루",
            "주황색 콘크리트 가루",
            "자홍색 콘크리트 가루",
            "밝은 파란색 콘크리트 가루",
            "노란색 콘크리트 가루",
            "연두색 콘크리트 가루",
            "분홍색 콘크리트 가루",
            "회색 콘크리트 가루",
            "밝은 회색 콘크리트 가루",
            "청록색 콘크리트 가루",
            "보라색 콘크리트 가루",
            "파란색 콘크리트 가루",
            "갈색 콘크리트 가루",
            "녹색 콘크리트 가루",
            "빨간색 콘크리트 가루",
            "검은색 콘크리트 가루"
        ],
        "stripped_spruce_log": [
            "벗겨진 전나무"
        ],
        "stripped_dark_oak_log": [
            "벗겨진 짙은 참나무"
        ],
        "stripped_birch_log": [
            "벗겨진 자작나무"
        ],
        "stripped_jungle_log": [
            "벗겨진 정글나무"
        ],
        "stripped_oak_log": [
            "벗겨진 참나무"
        ],
        "stripped_acacia_log": [
            "벗겨진 아카시아나무"
        ],
        "bamboo": [
            "대나무"
        ],
        "scaffolding": [
            "발판"
        ],
        "grindstone": [
            "숫돌"
        ],
        "cartography_table": [
            "지도 제작대"
        ],
        "lantern": [
            "랜턴"
        ],
        "soul_lantern": [
            "영혼의 불 랜턴"
        ],
        "smoker": [
            "발연물"
        ],
        "smithing_table": [
            "제련대"
        ],
        "barrel": [
            "배럴"
        ],
        "campfire": [
            "모닥불"
        ],
        "loom": [
            "베틀"
        ],
        "lectern": [
            "독서대"
        ],
        "sweet_berry_bush": [
            "달콤한 나무열매 덤불"
        ],
        "wood": [
            "참나무 원목",
            "참나무 원목",
            "전나무 원목",
            "자작나무 원목",
            "정글나무 원목",
            "아카시아나무 원목",
            "짙은 참나무 원목",
            null,
            null,
            "벗겨진 참나무 원목",
            "벗겨진 전나무 원목",
            "벗겨진 자작나무 원목",
            "벗겨진 정글나무 원목",
            "벗겨진 아카시아나무 원목",
            "벗겨진 짙은 참나무 원목"
        ],
        "netherite_block": [
            "네테라이트 블록"
        ],
        "ancient_debris": [
            "고대 잔해"
        ],
        "nether_gold_ore": [
            "네더 황금 광석"
        ],
        "respawn_anchor": [
            "재생성 앵커"
        ],
        "crying_obsidian": [
            "우는 흑요석"
        ],
        "spawn_egg": [
            "생성 알"
        ]
    }
};
freeze(lang_data);
export = lang_data;
