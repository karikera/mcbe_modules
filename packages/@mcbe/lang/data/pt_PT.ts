
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
    id: "pt_PT" as LangId,
    commands:{
        "ability_description": "Define a habilidade de um jogador.",
        "ability_noability": "Não está disponível qualquer capacidade chamada '%1$s'",
        "ability_granted": "A capacidade '%1$s' foi-te concedida",
        "ability_revoked": "A capacidade '%1$s' foi-te retirada",
        "ability_success": "A habilidade foi atualizada",
        "achievement_alreadyHave": "O jogador %1$s já conseguiu a conquista %2$s",
        "achievement_description": "Dá ou remove uma conquista a um jogador.",
        "achievement_dontHave": "O jogador %1$s não tem a conquista %2$s",
        "achievement_give_success_all": "Atribuídas todas as conquistas com êxito a %1$s",
        "achievement_give_success_one": "Atribuído %1$s à estatística %2$s com êxito",
        "achievement_statTooLow": "O jogador %1$s não tem a estatística %2$s",
        "achievement_take_success_all": "Retiradas todas as conquistas de %1$s com êxito",
        "achievement_take_success_one": "A estatística %1$s foi retirada de %2$s com êxito",
        "achievement_unknownAchievement": "Conquista ou estatística desconhecida '%1$s'",
        "agent_attack_success": "Ataque do Agente bem-sucedido",
        "agent_attack_failed": "O Agente não conseguiu atacar",
        "agent_collect_success": "Recolha do Agente bem-sucedida",
        "agent_collect_failed": "O Agente não conseguiu recolher",
        "agent_createagent_success": "Agente criado",
        "agent_createagent_failed": "Não foi possível criar Agente",
        "agent_destroy_success": "O Agente destruiu um bloco",
        "agent_destroy_failed": "O Agente não conseguiu destruir",
        "agent_detect_success": "Deteção do Agente bem-sucedida",
        "agent_detect_failed": "O Agente não conseguiu detetar",
        "agent_detectredstone_success": "Detectredstone do Agente bem-sucedido",
        "agent_detectredstone_failed": "O Agente não conseguiu detectredstone",
        "agent_drop_success": "O Agente conseguiu largar",
        "agent_drop_failed": "O Agente não conseguiu largar",
        "agent_dropall_success": "Dropall do Agente bem-sucedido",
        "agent_dropall_failed": "O Agente não conseguiu dropall",
        "agent_getitemcount_success": "Getitemcount do Agente bem-sucedido",
        "agent_getitemcount_failed": "O Agente não conseguiu getitemcount",
        "agent_getitemspace_success": "Getitemspace do Agente bem-sucedido",
        "agent_getitemspace_failed": "O Agente não conseguiu getitemspace",
        "agent_getitemdetail_success": "Getitemdetail do Agente bem-sucedido",
        "agent_getitemdetail_failed": "O Agente não conseguiu getitemdetail",
        "agent_getposition_success": "Agente obter posição bem-sucedido",
        "agent_getposition_failed": "Agente obter posição falhado",
        "agent_inspect_success": "Inspeção do Agente bem-sucedida",
        "agent_inspect_failed": "O Agente não conseguiu inspecionar",
        "agent_inspectdata_success": "O agente inspecionou os dados com êxito",
        "agent_inspectdata_failed": "O agente não conseguiu inspecionar os dados",
        "agent_move_success": "Movimento do Agente bem-sucedido",
        "agent_move_failed": "Não foi possível mover o Agente",
        "agent_outofrange": "Não é possível emitir comando, o Agente está fora de alcance",
        "agent_place_success": "Colocação do Agente bem-sucedida",
        "agent_place_failed": "O Agente não conseguiu colocar",
        "agent_setitem_success": "Item definido pelo Agente bem-sucedido",
        "agent_setitem_failed": "O Agente falhou em definir o item",
        "agent_turn_success": "Viragem do Agente bem-sucedida",
        "agent_turn_failed": "Não foi possível virar o Agente",
        "agent_till_success": "Cultivo do Agente bem-sucedido",
        "agent_till_failed": "O Agente não conseguiu cultivar",
        "agent_tpagent_description": "Teletransporta o teu Agente.",
        "agent_tpagent_success": "Agente teletransportado",
        "agent_tpagent_failed": "Não foi possível teletransportar o Agente",
        "agent_transfer_success": "Transferência do Agente bem-sucedida",
        "agent_transfer_failed": "O Agente não conseguiu transferir",
        "always_day": "Ciclo Dia-Noite %1$s",
        "always_day_locked": "Ciclo Dia-Noite bloqueado",
        "always_day_unlocked": "Ciclo Dia-Noite desbloqueado",
        "ban_description": "Adiciona o jogador à lista de exclusões.",
        "autocomplete_a": "todos os jogadores",
        "autocomplete_c": "o meu Agent",
        "autocomplete_e": "todas as entidades",
        "autocomplete_p": "jogador mais próximo",
        "autocomplete_r": "jogador aleatório",
        "autocomplete_s": "tu mesmo",
        "autocomplete_v": "todos os Agents",
        "ban_failed": "Não foi possível banir o jogador %1$s",
        "ban_success": "Jogador %1$s banido",
        "banip_description": "Adiciona o endereço IP à lista de exclusões.",
        "banip_invalid": "Introduziste um endereço IP inválido ou um jogador que não está online",
        "banip_success": "Endereço IP %1$s banido",
        "banip_success_players": "Endereço IP %1$s banido pertencente a %2$s",
        "banlist_ips": "Existe um total de %1$d endereços IP banidos:",
        "banlist_players": "Existe um total de %1$d jogadores banidos:",
        "blockdata_description": "Modifica a etiqueta de dados de um bloco.",
        "blockdata_placeFailed": "Não podes colocar blocos aqui",
        "blockdata_destroyFailed": "Não podes escavar aqui",
        "blockdata_failed": "A etiqueta de dados não foi alterada: %1$s",
        "blockdata_notValid": "O bloco-alvo não pode conter dados",
        "blockdata_outOfWorld": "Impossível mudar um bloco fora do mundo",
        "blockdata_success": "Dados do bloco atualizados para: %1$s",
        "blockdata_tagError": "Falha ao analisar etiqueta de dados: %1$s",
        "bossbar_add_success": "Barra de bosses personalizada criada [%1$s]",
        "bossbar_add_failure_invalid": "ID de barra de bosses inválido. Os IDs devem ter a forma namespace:id ou id (padrões do espaço de nome do minecraft).",
        "bossbar_add_failure_exists": "Já existe uma barra de bosses com o ID \"%1$s\"",
        "bossbar_description": "Cria e modifica as barras de bosses",
        "bossbar_get_max": "A barra de bosses personalizada [%1$s] tem um máximo de %2$d",
        "bossbar_get_players": "A barra de bosses personalizada [%1$s] tem %2$s jogadores online neste momento: %3$s",
        "bossbar_get_players_none": "A barra de bosses personalizada [%1$s] não tem jogadores online neste momento.",
        "bossbar_get_players_one": "A barra de bosses personalizada [%1$s] tem 1 jogador online neste momento: %2$s",
        "bossbar_get_value": "A barra de bosses personalizada [%1$s] tem um valor de %2$d",
        "bossbar_get_visible_true": "A barra de bosses personalizada [%1$s] está apresentada neste momento",
        "bossbar_get_visible_false": "A barra de bosses personalizada [%1$s] está oculta neste momento",
        "bossbar_list": "Há %1$s uma barra de bosses personalizada ativa: %2$s",
        "bossbar_list_none": "Não há barras de bosses personalizadas ativas",
        "bossbar_list_one": "Há 1 barra de bosses personalizada ativa: %1$s",
        "bossbar_notFound": "Não há barra de bosses existentes com o ID \"%1$s\"",
        "bossbar_remove": "Barra de bosses personalizada [%1$s] removida",
        "change_setting_description": "Muda uma definição no servidor dedicado enquanto está em execução.",
        "change_setting_success": "%1$s foi alterado",
        "chunkinfo_compiled": "O chunk está compilado.",
        "chunkinfo_data": "Os primeiros 64 vértices são: %1$s",
        "chunkinfo_empty": "O chunk está vazio.",
        "chunkinfo_hasLayers": "A porção tem camadas: %1$s",
        "chunkinfo_hasNoRenderableLayers": "O chunk não tem camadas renderizáveis.",
        "chunkinfo_isEmpty": "A porção tem camadas vazias: %1$s",
        "chunkinfo_location": "Localização da porção: (%1$d, %2$d, %3$d)",
        "chunkinfo_noChunk": "Não foi encontrada qualquer porção na posição de porção %1$d, %2$d, %3$d",
        "chunkinfo_notCompiled": "O chunk não está compilado.",
        "chunkinfo_notEmpty": "O chunk não está vazio.",
        "chunkinfo_vertices": "A proteção da camada %1$s contém %2$d vértices",
        "classroommode_description": "Tentativa de executar e ligar ao Modo de Sala de Aula.",
        "classroommode_success": "A tentar executar o Modo de Sala de Aula...",
        "clear_description": "Limpa itens do inventário do jogador.",
        "clear_failure": "Não foi possível apagar o inventário de %1$s",
        "clear_failure_no_items": "Não foi possível apagar o inventário de %1$s; nenhum item para remover",
        "clear_success": "Apagado o inventário de %1$s; a remover %2$d itens",
        "clear_tagError": "Falha ao analisar etiqueta de dados: %1$s",
        "clear_testing": "%1$s tem %2$d itens que correspondem ao critério",
        "clearfixedinv_description": "Remove todos os Compartimentos de Inventário Fixo.",
        "clearfixedinv_success": "O Inventário Fixo foi limpo",
        "clone_description": "Clona blocos de uma região para outra.",
        "clone_failed": "Nenhum bloco clonado",
        "clone_filtered_error": "Para a utilização filtrada é necessário especificar um bloco de filtro",
        "clone_noOverlap": "A fonte e o destino não podem cruzar-se",
        "clone_outOfWorld": "Não podes aceder a blocos fora do mundo",
        "clone_success": "%1$d blocos clonados",
        "clone_tooManyBlocks": "Demasiados blocos na área especificada (%1$d > %2$d)",
        "closechat_description": "Caso esteja aberta, fecha a janela de chat do jogador local.",
        "closechat_success": "Chat fechado",
        "closechat_failure": "O chat não foi aberto",
        "closewebsocket_description": "Fecha a ligação por websocket, se houver.",
        "code_description": "Inicia o Criador de Código.",
        "code_success": "Criador de Código iniciado.",
        "compare_failed": "A fonte e o destino não são idênticos",
        "compare_outOfWorld": "Não podes aceder a blocos fora do mundo",
        "compare_success": "%1$d blocos comparados",
        "compare_tooManyBlocks": "Demasiados blocos na área especificada (%1$d > %2$d)",
        "corruptworld_description": "Corrompe o mundo carregado no servidor.",
        "corruptworld_success": "Mundo corrompido com êxito.",
        "daylock_description": "Bloqueia e desbloqueia o ciclo dia-noite.",
        "debug_description": "Inicia ou termina uma sessão de depuração.",
        "debug_notStarted": "Não dá para parar o profiling quando nós ainda nem sequer começámos!",
        "debug_start": "A depuração foi iniciada",
        "debug_stop": "Criação de perfis de depuração interrompida após %.2f segundos (%1$d ticks)",
        "defaultgamemode_description": "Define o modo de jogo padrão.",
        "defaultgamemode_success": "O modo de jogo padrão do mundo é agora %1$s",
        "deop_description": "Revoga o estado de operador de um jogador.",
        "deop_failed": "Não foi possível remover moderação do jogador (nível de permissão demasiado elevado): %s",
        "deop_success": "%s deixou de ser moderador",
        "deop_message": "Deixaste de ser moderador",
        "difficulty_description": "Define o limite de dificuldade.",
        "difficulty_usage": "/difficulty <new difficulty>",
        "difficulty_success": "Definir dificuldade do jogo como %1$s",
        "downfall_success": "Precipitação alterada",
        "effect_description": "Adiciona ou remove efeitos de estado.",
        "effect_failure_notActive": "Não foi possível remover %1$s de %2$s porque ele não tem esse efeito ativo",
        "effect_failure_notActive_all": "Não foi possível retirar quaisquer efeitos de %1$s, uma vez que não têm nenhum",
        "effect_failure_notAMob": "%1$s não pode ter efeitos",
        "effect_notFound": "Não existe tal efeito para criaturas com a ID %s",
        "effect_success": "Deu %1$s * %2$d a %3$s durante %4$d segundo(s)",
        "effect_success_removed": "Foi retirado %1$s a %2$s",
        "effect_success_removed_all": "Removidos todos os efeitos de %1$s",
        "enchant_cantCombine": "%1$s não pode ser combinado com %2$s",
        "enchant_invalidLevel": "%1$s não suporta o nível %2$d",
        "enchant_cantEnchant": "O encantamento selecionado não pode ser adicionado ao item pretendido: %1$s",
        "enchant_description": "Adiciona um encantamento ao item selecionado pelo jogador.",
        "enchant_noItem": "O destino não possui um item: %1$s",
        "enchant_notFound": "Não existe qualquer encantamento com o ID %1$d",
        "enchant_success": "Encantamento com êxito para %1$s",
        "entitydata_description": "Modifica a etiqueta de dados de uma entidade.",
        "entitydata_failed": "A etiqueta de dados não foi alterada: %1$s",
        "entitydata_noPlayers": "%1$s é um jogador e não pode ser alterado",
        "entitydata_success": "Dados de entidade atualizados para: %1$s",
        "entitydata_tagError": "Falha ao analisar etiqueta de dados: %1$s",
        "execute_allInvocationsFailed": "Todas as evocações falharam: '%1$s'",
        "execute_failed": "Falha ao executar '%1$s' como %2$s",
        "execute_description": "Executa um comando em nome de uma ou mais entidades.",
        "fill_description": "Preenche todas as partes de uma região com um determinado bloco.",
        "fill_failed": "Nenhum bloco preenchido",
        "fill_outOfWorld": "Não podes colocar blocos fora do mundo",
        "fill_success": "%1$d blocos preenchidos",
        "fill_tagError": "Falha ao analisar etiqueta de dados: %1$s",
        "fill_tooManyBlocks": "Demasiados blocos na área especificada (%1$d > %2$d)",
        "fill_replace_auxvalue_invalid": "Valor de dados de substituição inválidos para o bloco %1$s",
        "function_description": "Executa os comandos encontrados no ficheiro de função correspondente.",
        "function_functionNameNotFound": "Função %1$s não encontrada.",
        "function_invalidCharacters": "A função com o título \"%s\" é inválida, o carater \"%s\" não é permitido nos nomes de funções.",
        "function_noEngineVersionSpecified": "Não foi possível executar a função %s. Tens de especificar uma min_engine_version no pack de comportamentos manifest.json.",
        "function_success": "Entradas de função %1$d executadas com êxito.",
        "gamemode_description": "Define o modo de jogo de um jogador.",
        "gamemode_success_other": "Definir o modo de jogo de %2$s para %1$s",
        "gamemode_success_self": "Definir o próprio modo de jogo para %1$s",
        "gamemode_fail_invalid": "O modo de jogo '%1$s' é inválido",
        "gamerule_description": "Define ou questiona um valor da regra de jogo.",
        "gamerule_type_invalid": "Utilizado tipo inválido para a regra do jogo '%1$s'",
        "gamerule_type_nocheatsenabled": "A regra de jogo \"%1$s\" apenas pode ser usada se os cheats estiverem ativados neste mundo.",
        "gamerule_nopermission": "Só os proprietários do servidor podem mudar '%1$s'",
        "gamerule_norule": "Não está disponível qualquer regra do jogo chamada '%1$s'",
        "gamerule_success": "A regra do jogo %1$s foi atualizada para %2$s",
        "generic_async_initiated": "Comando '%1$s' iniciado (passo assíncrono %2$d)",
        "generic_boolean_invalid": "'%1$s' não é verdadeiro nem falso",
        "generic_chunk_notFound": "Não foi possível encontrar o chunk especificado",
        "generic_componentError": "Falha na análise da lista de componentes",
        "generic_dimension_notFound": "Não foi possível encontrar a dimensão especificada",
        "generic_disabled": "As cheats não estão ativadas neste nível.",
        "generic_disabled_templateLocked": "As definições estão atualmente bloqueadas. Desbloqueia as Opções de Mundo Modelo no menu Definições do Jogo para alterá-las.",
        "generic_double_tooBig": "O número que introduziste (%.2f) é demasiado grande, não deve ultrapassar %.2f",
        "generic_double_tooSmall": "O número que introduziste (%.2f) é demasiado pequeno, deve ser pelo menos %.2f",
        "generic_duplicateType": "Duplicar argumentos de tipo",
        "generic_duplicateSelectorArgument": "Duplicar argumentos do selector %s",
        "generic_encryption_badkey": "Fornecida chave pública incorreta. Esperada chave de 120 bytes após a formatação de PEM.",
        "generic_encryption_badsalt": "Fornecido salt incorreto. Esperados 16 bytes antes da codificação base 64.",
        "generic_encryption_required": "Necessária sessão encriptada",
        "generic_entity_invalidType": "O tipo de entidade '%1$s' é inválido",
        "generic_entity_invalidUuid": "O UUID de entidade fornecido está num formato inválido",
        "generic_entity_notFound": "Essa entidade não foi encontrada",
        "generic_exception": "Ocorreu um erro desconhecido ao tentar executar este comando",
        "generic_invalidAgentType": "Introduz o argumento aplicado ao selector de apenas Agent",
        "generic_invalidcontext": "Contexto inválido fornecido para o tipo de comando indicado",
        "generic_invalidDevice": "O comando que introduziste, %s, não é suportado neste dispositivo.",
        "generic_invalidPlayerType": "Introduzir argumento aplicado a selector apenas jogador",
        "generic_invalidType": "Argumento de tipo desconhecido",
        "generic_levelError": "O nível máximo tem de ser superior ao nível mínimo",
        "generic_malformed_body": "Falta o corpo, ou este está deformado",
        "generic_malformed_type": "Tipo de pedido inválido",
        "generic_notimplemented": "Não implementado",
        "generic_num_invalid": "'%1$s' não é um número válido",
        "generic_num_tooBig": "O número que introduziste (%1&d) é demasiado grande; pode ter, no máximo, %2$d",
        "generic_num_tooSmall": "O número que introduziste (%1&d) é demasiado pequeno; tem de ter, pelo menos, %2$d",
        "generic_parameter_invalid": "'%1$s' não é um parâmetro válido",
        "generic_permission_selector": "<permissões insuficientes para expansão do selector>",
        "generic_player_notFound": "Não foi possível encontrar esse jogador",
        "generic_protocol_mismatch": "A versão do protocolo fornecida não corresponde à versão do protocolo de Minecraft",
        "generic_radiusError": "O raio do selector mínimo tem de ser inferior ao máximo",
        "generic_radiusNegative": "O raio não pode ser negativo",
        "generic_rotationError": "Rotação fora do intervalo",
        "generic_running": "Este comando já está em execução",
        "generic_step_failed": "Não foi possível executar o comando",
        "generic_syntax": "Erro de sintaxe: \"%2$s\" não previsto: em \"%1$s>>%2$s<<%3$s\"",
        "generic_noTargetMatch": "Nenhum destino correspondeu à pesquisa",
        "generic_targetNotPlayer": "O seletor tem de ser do tipo jogador",
        "generic_tooManyNames": "Demasiados argumentos de nome de destino",
        "generic_tooManyTargets": "Demasiados destinos a corresponder ao seletor",
        "generic_too_many_requests": "Foram solicitados demasiados comandos, espera até que um seja concluído",
        "generic_unknown": "Comando desconhecido: %s. Confirma se o comando existe e se tens permissão para o usares.",
        "generic_usage": "Utilização: %1$s",
        "generic_usage_noparam": "Uso:",
        "generic_version_mismatch": "A versão solicitada não existe para este comando",
        "generic_version_missing": "As solicitações de comandos que não sejam de chat devem especificar a versão do comando",
        "getchunkdata_description": "Obtém píxeis para um determinado chunk.",
        "getchunkdata_success": "Dados de chunk recebidos",
        "getchunks_description": "Obtém uma lista dos chunks que são carregados.",
        "getchunks_success": "Lista de chunks recebida",
        "getlocalplayername_description": "Devolve o nome do jogador local.",
        "getspawnpoint_description": "Obtém a posição de geração do(s) jogador(es) especificado(s).",
        "gettopsolidblock_description": "Obtém a posição do bloco não aéreo superior abaixo da posição especificada",
        "gettopsolidblock_notfound": "Não existem blocos sólidos em baixo da posição especificada",
        "give_block_notFound": "Não existe qualquer bloco com o nome %1$d",
        "give_description": "Dá um item a um jogador.",
        "give_item_invalid": "Sintaxe de comando inválida: não existe %s com esse valor de dados",
        "give_item_notFound": "Não existe qualquer item com o nome %1$d",
        "give_map_invalidData": "Fornecidos dados de mapa inválidos",
        "give_map_featureNotFound": "Não foi possível criar um mapa de exploração. Funcionalidade não encontrada nesta dimensão",
        "give_success": "Deu %1$s * %2$d a %3$s",
        "give_successRecipient": "Recebeste %1$s * %2$d",
        "give_tagError": "Falha ao analisar etiqueta de dados: %1$s",
        "help_description": "Disponibiliza ajuda/lista de comandos.",
        "help_footer": "Dica: Usa a tecla <tab> ao escrever um comando para o auto-completar ou os seus argumentos",
        "help_header": "--- A apresentar a página de ajuda %1$d de %2$d (/help <page>) ---",
        "help_command_aliases": "%s (também %s):",
        "immutableworld_description": "Define o estado imutável do mundo.",
        "immutableworld_info": "immutableworld = %s",
        "kick_description": "Expulsa um jogador do servidor.",
        "kick_description_edu": "Remove um jogador do jogo.",
        "kick_not_found": "Não foi possível encontrar o jogador %1$s",
        "kick_not_yourself": "Não te podes remover do jogo",
        "kick_success": "%1$s foi expulso do jogo",
        "kick_success_reason": "%1$s foi expulso do jogo: '%2$s'",
        "kick_success_reasonedu": "%1$s foi removido do jogo: '%2$s'",
        "kick_no_host": "O anfitrião não pode ser expulso do jogo.",
        "kick_no_teacher": "Os professores não podem ser removidos do jogo.",
        "kill_successful_edu": "%1$s removido",
        "kill_successful": "%1$s foi morto",
        "kill_description_edu": "Remove entidades (jogadores, criaturas, etc.).",
        "kill_description": "Mata entidades (jogadores, criaturas, etc.).",
        "list_description": "Enumera jogadores no servidor.",
        "locate_description": "Apresenta as coordenadas para a estrutura mais próxima de um determinado tipo.",
        "locate_fail_noplayer": "O comando só pode ser utilizado por um jogador válido",
        "locate_fail_nostructurefound": "Não foi encontrada qualquer estrutura válida nesta dimensão",
        "locate_success": "%1$s mais próximo(a) está num bloco %2$s, (y?), %3$s",
        "togglecontentlog_toggle": "Ativa/Desativa o comando de registo de conteúdos",
        "togglecontentlog_enabled": "Registo de Conteúdos Ativado",
        "togglecontentlog_disabled": "Registo de Conteúdos Desativado",
        "me_description": "Apresenta uma mensagem sobre ti.",
        "message_display_incoming": "%1$s sussurra-te: %2$s",
        "message_display_outgoing": "Sussurraste para %1$s: %2$s",
        "message_sameTarget": "Não podes mandar uma mensagem privada para ti mesmo!",
        "mixer_description": "Controlo de Interatividade do Mixer",
        "mixer_error_unknown": "Ocorreu um erro desconhecido no Mixer.",
        "mixer_error_notoken": "Tens de ter sessão iniciada com uma Conta Microsoft para ativares a interatividade do Mixer.",
        "mixer_error_notsupported": "O dispositivo que estás a utilizar não suporta a interatividade do Mixer.",
        "mixer_interactive_error": "Ocorreu um erro no Mixer: %1$s",
        "mixer_scene_failed": "Não existe nenhuma cena chamada %1$s. Certifica-te de que introduziste o nome da cena corretamente.",
        "mixer_scene_success": "Cena alterada para: %1$s",
        "mixer_start_success": "Interação do Mixer a iniciar: %1$s",
        "mixer_start_fail_invalidCode": "Não foi possível encontrar o projeto com o ID \"%1$s\". Certifica-te de que o ID ou código de partilha está correto.",
        "mixer_stop_success": "Interatividade do Mixer interrompida.",
        "mixer_stop_fail": "Não há nenhuma sessão interativa para parar.",
        "mixer_status_notinitialized": "A interatividade não foi inicializada.",
        "mixer_status_enabled": "A interatividade está ativada.",
        "mixer_status_initializing": "A interatividade está a ser inicializada.",
        "mixer_status_pending": "A interatividade está pendente.",
        "mixer_status_disabled": "A interatividade está desativada.",
        "mixer_activatedbutton": "%1$s ativou %2$s.",
        "mobevent_description": "Controla que eventos de criaturas podem ser executados.",
        "mobevent_eventsEnabledSetToTrue": "Agora, os Eventos de Criatura estão ativados. Os eventos individuais definidos como falsos não serão executados.",
        "mobevent_eventsEnabledSetToFalse": "Agora, os Eventos de Criatura estão desativados. Os eventos individuais não serão executados.",
        "mobevent_eventsEnabledIsTrue": "Os Eventos de Criatura estão ativados. Os eventos individuais definidos como falsos não serão executados.",
        "mobevent_eventsEnabledIsFalse": "Os Eventos de Criatura estão desativados. Os eventos individuais não serão executados.",
        "mobevent_eventSetToTrue": "O Evento de Criatura %s (id: %s) está definido como verdadeiro.",
        "mobevent_eventSetToTrueButEventsDisabled": "O Evento de Criatura %s (id: %s) está definido como verdadeiro, mas os Eventos de Criatura estão desativados.",
        "mobevent_eventSetToFalse": "O Evento de Criatura %s (id: %s) está definido como falso.",
        "mobevent_eventIsTrue": "Evento de Criatura %s (id: %s) definido como verdadeiro.",
        "mobevent_eventIsTrueButEventsDisabled": "Evento de Criatura %s (id: %s) definido como verdadeiro, mas os Eventos de Criatura estão desativados.",
        "mobevent_eventIsFalse": "Evento de Criatura %s (id: %s) definido como falso.",
        "op_description": "Concede o estado de operador a um jogador.",
        "op_failed": "Não foi possível elevar a moderador (já é moderador ou superior): %s",
        "op_success": "%s é agora moderador",
        "op_message": "És agora moderador",
        "origin_commandblock": "Bloco de Comando",
        "origin_external": "Exterior",
        "origin_devconsole": "DevConsole",
        "origin_script": "Motor de Scripts",
        "origin_server": "Servidor",
        "origin_teacher": "Professor",
        "ops_description": "Recarrega e aplica permissões de moderação.",
        "ops_reloaded": "Moderadores recarregados do ficheiro.",
        "ops_set_success": "Nível de operador do jogador %s definido com êxito.",
        "permissions_description": "Recarrega e aplica permissões.",
        "permissions_reloaded": "Permissões recarregadas do ficheiro.",
        "permissions_set_failed": "Não foi possível definir o nível de permissão %s para o jogador %s.",
        "permissions_set_success": "Nível de permissão %s do jogador %s definido com êxito.",
        "permissions_save_failed": "Não foi possível guardar o nível de permissão %s para o jogador %s.",
        "permissions_save_success": "Nível de permissão %s do jogador %s guardado com êxito.",
        "spawnParticleEmitter_description": "Cria um emissor de partículas",
        "particle_description": "Cria partículas.",
        "particle_notFound": "Nome de efeito desconhecido (%1$s)",
        "particle_success": "A reproduzir o efeito %1$s %2$d vezes",
        "players_list": "Existem %1$d/%2$d jogadores online:",
        "players_list_names": "%s",
        "playsound_description": "Reproduz um som.",
        "playsound_playerTooFar": "O jogador %1$s está demasiado longe para ouvir o som",
        "playsound_success": "Reproduzido som '%1$s' para %2$s",
        "position_description": "Ativar/Desativar coordenadas para jogador.",
        "publish_failed": "Incapaz de hospedar um jogo local",
        "publish_started": "Jogo local alojado na porta %1$s",
        "querytarget_description": "Obtém informações de transformação, de nome e de ID sobre a entidade ou entidades pretendidas.",
        "querytarget_success": "Dados pretendidos: %1$s",
        "reload_description": "Recarrega todos os ficheiros de função de todos os packs de comportamentos.",
        "reload_success": "Os ficheiros de função existentes foram carregados novamente. Reinicia o Minecraft para voltar a carregar as funções NOVAS.",
        "replaceitem_description": "Substitui itens em inventários.",
        "replaceitem_failed": "Não foi possível substituir %s compartimento %d por %d * %s",
        "replaceitem_keepFailed": "Já existe um item que ocupa %s ranhura %d.",
        "replaceitem_noContainer": "O bloco em %s não é um recipiente",
        "replaceitem_badSlotNumber": "Não foi possível substituir o espaço %d; tem de ser um valor entre %d e %d.",
        "replaceitem_success": "%s compartimento %d substituído por %d * %s",
        "replaceitem_success_entity": "Substituído %s espaço %d de %s com %d * %s",
        "replaceitem_tagError": "Falha ao analisar etiqueta de dados: %1$s",
        "save_description": "Controla ou verifica a forma como o jogo guarda dados no disco.",
        "save_disabled": "Função guardar mundo automaticamente desligada",
        "save_enabled": "Função guardar mundo automaticamente ligada",
        "save_failed": "A gravação falhou: %1$s",
        "save_start": "A guardar...",
        "save_success": "O mundo foi guardado",
        "save_all_error": "Ocorreu um erro enquanto tentávamos colocar o armazenamento de nível em pausa.",
        "save_all_success": "Dados guardados. Os ficheiros podem agora ser copiados.",
        "save_off_alreadyOff": "A gravação de mundo está desligada.",
        "save_on_alreadyOn": "A gravação do mundo já está ligada.",
        "save_on_notDone": "Não foi concluída uma gravação anterior.",
        "save_on_description": "Ativa a gravação automática de dados de servidor.",
        "save_on_success": "As mudanças no nível foram retomadas.",
        "save_state_description": "Verifica se uma gravação de tudo anterior foi concluída e lista os ficheiros envolvidos.",
        "say_description": "Envia uma mensagem no chat a outros jogadores.",
        "scoreboard_description": "Segue e apresenta resultados de vários objetivos.",
        "scoreboard_allMatchesFailed": "Todas as correspondências falharam",
        "scoreboard_noMultiWildcard": "Só é permitido um asterisco",
        "scoreboard_objectiveNotFound": "Não foi encontrado qualquer objetivo com o nome '%1$s'",
        "scoreboard_objectiveReadOnly": "O objetivo '%1$s' é apenas de leitura e não pode ser definido",
        "scoreboard_objectives_add_alreadyExists": "Já existe um objetivo com o nome '%1$s'",
        "scoreboard_objectives_add_displayTooLong": "O nome de apresentação '%1$s' é demasiado comprido para um objetivo; pode ter, no máximo, %2$d caracteres",
        "scoreboard_objectives_add_success": "Novo objetivo '%1$s' adicionado­ com êxito",
        "scoreboard_objectives_add_tooLong": "O nome '%1$s' é demasiado comprido para um objetivo; pode ter, no máximo, %2$d caracteres",
        "scoreboard_objectives_add_wrongType": "Tipo de critérios de objetivos inválidos '%1$s'",
        "scoreboard_objectives_add_needName": "Um objetivo necessita um nome.",
        "scoreboard_objectives_description": "Modificar objetivos do quadro de pontuações.",
        "scoreboard_objectives_list_count": "A mostrar %1$d objetivo(s) no quadro de pontuações:",
        "scoreboard_objectives_list_empty": "Não existe nenhum objetivo no quadro de pontuaçõest",
        "scoreboard_objectives_list_entry": "- %1$s: é apresentado como '%2$s' e é do tipo '%3$s'",
        "scoreboard_objectives_remove_success": "Objetivo '%1$s' removido com êxito",
        "scoreboard_objectives_setdisplay_invalidSlot": "O espaço de apresentação '%1$s' não existe",
        "scoreboard_objectives_setdisplay_successCleared": "Apagado espaço de apresentação de objetivos '%1$s'",
        "scoreboard_objectives_setdisplay_successSet": "Definir objetivo de apresentação no espaço '%1$s' como '%2$s'",
        "scoreboard_players_add_success": "%1$d adicionado a [%2$s] para %3$s (atual %4$d)",
        "scoreboard_players_add_multiple_success": "%1$d adicionado a [%2$s] para %3$d pessoas",
        "scoreboard_players_nameNotFound": "Deve ser dado um nome ao jogador.",
        "scoreboard_players_enable_noTrigger": "O objetivo %1$s não é um acionador",
        "scoreboard_players_enable_success": "Ativado acionador %1$s para %2$s",
        "scoreboard_players_list_count": "A mostrar %1$d jogadores monitorizados no quadro de pontuações:",
        "scoreboard_players_list_empty": "Não existe nenhum jogador a ser monitorizado no quadro de pontuações",
        "scoreboard_players_list_player_count": "A mostrar %1$d objetivo(s) monitorizado(s) para %2$s:",
        "scoreboard_players_list_player_empty": "O jogador %1$s não tem qualquer pontuação registada",
        "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_players_operation_invalidOperation": "Operação inválida %1$s",
        "scoreboard_players_operation_notFound": "Não foi encontrada pontuação %1$s para %2$s",
        "scoreboard_players_operation_success": "[%1$s] atualizado para %2$d pessoas",
        "scoreboard_players_offlinePlayerName": "Jogador Offline",
        "scoreboard_players_random_invalidRange": "O min %1$d não é inferior ao max %2$d",
        "scoreboard_players_remove_success": "%1$d removido de [%2$s] para %3$s (atual %4$d)",
        "scoreboard_players_remove_multiple_success": "%1$d removido de [%2$s] para %3$d pessoas",
        "scoreboard_players_reset_success": "Repor pontuações do jogador %1$s",
        "scoreboard_players_resetscore_success": "Repor pontuação %1$s do jogador %2$s",
        "scoreboard_players_set_success": "Definir [%1$s] para %2$s como %3$d",
        "scoreboard_players_set_multiple_success": "Definir [%1$s] para %2$d pessoas como %3$d",
        "scoreboard_players_set_tagError": "Não foi possível analisar dataTag; motivo: %1$s",
        "scoreboard_players_set_tagMismatch": "A dataTag não corresponde para %1$s",
        "scoreboard_players_score_notFound": "Não foi encontrada pontuação %1$s para %2$s",
        "scoreboard_players_test_failed": "A pontuação %1$d NÃO está no intervalo de %2$d a %3$d",
        "scoreboard_players_test_success": "A pontuação %1$d está no intervalo de %2$d a %3$d",
        "scoreboard_teamNotFound": "Não foi encontrada qualquer equipa com o nome '%1$s'",
        "scoreboard_teams_add_alreadyExists": "Já existe uma equipa com o nome '%1$s'",
        "scoreboard_teams_add_displayTooLong": "O nome de apresentação '%1$s' é demasiado comprido para uma equipa; pode ter, no máximo, %2$d caracteres",
        "scoreboard_teams_add_success": "Nova equipa '%1$s' adicionada com êxito",
        "scoreboard_teams_add_tooLong": "O nome '%1$s' é demasiado comprido para uma equipa; pode ter, no máximo, %2$d caracteres",
        "scoreboard_teams_empty_alreadyEmpty": "A equipa %1$s já está vazia; não é possível remover jogadores não-existentes",
        "scoreboard_teams_empty_success": "Removidos todos os %1$d jogadores da equipa %2$s",
        "scoreboard_teams_join_failure": "Não foi possível adicionar %1$d jogador(es) à equipa %2$s: %3$s",
        "scoreboard_teams_join_success": "Adicionados %1$d jogador(es) à equipa %2$s: %3$s",
        "scoreboard_teams_leave_failure": "Não foi possível remover %1$d jogador(es) das respetivas equipas: %2$s",
        "scoreboard_teams_leave_noTeam": "Não estás numa equipa",
        "scoreboard_teams_leave_success": "Removidos %1$d jogador(es) das respetivas equipas: %2$s",
        "scoreboard_teams_list_count": "A mostrar %1$d equipas no quadro de pontuações:",
        "scoreboard_teams_list_empty": "Não existe nenhuma equipa registada no quadro de pontuações",
        "scoreboard_teams_list_entry": "- %1$s: '%2$s' tem %3$s jogadores",
        "scoreboard_teams_list_player_count": "A mostrar %1$d jogador(es) na equipa %2$s:",
        "scoreboard_teams_list_player_empty": "A equipa %1$s não tem jogadores",
        "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_teams_option_noValue": "Os valores válidos para a opção %1$s são: %2$s",
        "scoreboard_teams_option_success": "Definir a opção %1$s da equipa %2$s como %3$s",
        "scoreboard_teams_remove_success": "Removida a equipa %1$s",
        "seed_success": "Semente: %1$s",
        "setblock_description": "Muda um bloco para outro.",
        "setblock_failed": "Impossível colocar o bloco",
        "setblock_noChange": "O bloco não pôde ser colocado",
        "setblock_notFound": "Não existe qualquer bloco com o ID/nome %1$s",
        "setblock_outOfWorld": "Impossível colocar um bloco fora do mundo",
        "setblock_success": "Bloco colocado",
        "setblock_tagError": "Falha ao analisar etiqueta de dados: %1$s",
        "setidletimeout_success": "Definido com êxito tempo limite de inatividade para %1$d minutos.",
        "setfixedinvslots_description": "Define o número de compartimentos de inventário fixos para o servidor.",
        "setfixedinvslots_success": "Número de Espaços de Inventário Fixos definido como %1$d",
        "setfixedinvslot_description": "Define um compartimento fixo para um item especificado.",
        "setfixedinvslot_success": "Espaço de Inventário Fixo %1$d definido como %2$s",
        "globalpause_description": "Define ou coloca o jogo em estado de pausa para todos os jogadores.",
        "globalpause_success": "Definido ou colocado em estado de pausa",
        "setmaxplayers_description": "Define o número máximo de jogadores para esta sessão de jogo.",
        "setmaxplayers_success": "Definir limite máximo de jogadores para %1$d.",
        "setmaxplayers_success_upperbound": "(Limitado a ligações máximas permitidas)",
        "setmaxplayers_success_lowerbound": "(Limitado à contagem de jogadores atuais)",
        "setworldspawn_description": "Define o ponto de geração no mundo.",
        "setworldspawn_success": "Definir ponto de geração do mundo como (%1$d, %2$d, %3$d)",
        "setworldspawn_wrongDimension": "O mundo gerado não pode ser definido nesta dimensão",
        "spawnpoint_success_single": "Definir ponto de geração de %1$s como (%2$d, %3$d, %4$d)",
        "spawnpoint_description": "Define o ponto de geração de um jogador.",
        "spawnpoint_success_multiple_specific": "Definir ponto de geração de %1$s como (%2$d, %3$d, %4$d)",
        "spawnpoint_success_multiple_generic": "Definir ponto de geração de %1$s",
        "spawnpoint_wrongDimension": "O ponto de geração não pode ser definido nesta dimensão",
        "spreadplayers_description": "Teleporta entidades para localizações aleatórias.",
        "spreadplayers_failure_players": "Não foi possível espalhar %1$s jogadores por %2$s,%3$s (demasiados jogadores para o espaço - tenta espalhar no máximo %4$s)",
        "spreadplayers_failure_teams": "Não foi possível espalhar %1$s equipas por %2$s,%3$s (demasiados jogadores para o espaço - tenta espalhar no máximo %4$s)",
        "spreadplayers_info_players": "(A distância média entre jogadores é de %1$s blocos de distância após %2$s iterações)",
        "spreadplayers_info_teams": "(A distância média entre equipas é de %1$s blocos de distância entre %2$s iterações)",
        "spreadplayers_spreading_players": "A espalhar %1$s jogadores em %2$s blocos por %3$s,%4$s (mínimo de %5$s blocos de distância)",
        "spreadplayers_spreading_teams": "A espalhar %1$s equipas em %2$s blocos por %3$s,%4$s (mínimo de %5$s blocos de distância)",
        "spreadplayers_success_players": "Espalhados %1$s jogadores por %2$s,%3$s com êxito",
        "spreadplayers_success_teams": "Espalhadas %1$s equipas por %2$s,%3$s com êxito",
        "stats_cleared": "Apagadas %1$s estatísticas",
        "stats_failed": "Parâmetros inválidos",
        "stats_noCompatibleBlock": "O bloco em %1$d, %2$d, %3$d não pode seguir estatísticas",
        "stats_success": "A armazenar %1$s estatísticas em %2$s a %3$s",
        "stop_description": "Pára o servidor.",
        "stop_start": "A parar o servidor",
        "stopsound_description": "Para um som.",
        "stopsound_success": "Interrompido o som %s durante %s",
        "stopsound_success_all": "Interrompidos todos os sons durante %s",
        "summon_description": "Invoca uma entidade.",
        "summon_failed": "Impossível invocar o objeto",
        "summon_outOfWorld": "Impossível invocar o objeto fora do mundo",
        "summon_success": "Objeto invocado com sucesso",
        "summon_tagError": "Falha ao analisar etiqueta de dados: %1$s",
        "tag_description": "Tags das mensagens armazenadas nas entidades.",
        "tag_add_failed": "O destino já tem tag ou tem demasiadas tags",
        "tag_add_success_single": "Tag adicionada \"%1$s\" a %2$s",
        "tag_add_success_multiple": "Tag adicionada \"%1$s\" a %2$d entidades",
        "tag_list_single_empty": "%s não tem tags",
        "tag_list_single_success": "%1$s tem %2$d tags: %3$s",
        "tag_list_multiple_empty": "Não existem tags em %d entidades",
        "tag_list_multiple_success": "%1$d entidades têm um total de %2$d tags: %3$s",
        "tag_remove_failed": "O destino não tem esta tag",
        "tag_remove_success_single": "Tag removida \"%1$s\" de %2$s",
        "tag_remove_success_multiple": "Tag removida de \"%1$s\" de %2$d entidades",
        "tell_description": "Envia uma mensagem privada a um ou a mais jogadores.",
        "tellraw_description": "Envia uma mensagem JSON aos jogadores.",
        "tellraw_jsonException": "Json inválido: %1$s",
        "tellraw_jsonStringException": "Dados da cadeia de ligação json inválidos.",
        "tellraw_error_noData": "Não foram fornecidos dados.",
        "tellraw_error_notArray": "O objeto de texto não processado tem de conter uma matriz. Exemplo: \"rawtext\":[{..}]",
        "tellraw_error_textNotString": "o campo de texto em texto não processado tem de conter uma string. Exemplo: \"rawtext\":[{\"text\": \"text to display\"}]",
        "tellraw_error_translateNotString": "o campo de tradução em texto não processado tem de conter uma chave de linguagem. Exemplo: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
        "tellraw_error_withNotArrayOrRawText": "com o campo em texto não processado tem de conter uma matriz ou outro objeto de texto não processado. Exemplo 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Exemplo 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
        "tellraw_error_itemIsNotObject": "O valor JSON em matriz de texto não processado não era um objeto. Exemplo: \"rawtext\": [{ \"text\" : \"my text\" }]",
        "educlientinfo_description": "Obter ID de inquilino e estado de anfitrião. Destinados ao MC.",
        "testfor_description": "Conta entidades (jogadores, criaturas, itens, etc.) que correspondem às condições especificadas.",
        "testfor_failure": "%1$s não correspondeu à estrutura de dados necessária",
        "testfor_success": "Encontrados %1$s",
        "testfor_tagError": "Falha ao analisar etiqueta de dados: %1$s",
        "testforblock_description": "Testa se um determinado bloco se encontra num determinado local.",
        "testforblock_failed_data": "O bloco em %1$d,%2$d,%3$d não corresponde ao estado de bloco esperado.",
        "testforblock_failed_nbt": "O bloco em %1$d,%2$d,%3$d não tinha as chaves NBT necessárias.",
        "testforblock_failed_tile": "O bloco em %1$d,%2$d,%3$d é %4$s (previsto: %5$s).",
        "testforblock_failed_tileEntity": "O bloco em %1$d,%2$d,%3$d não é uma entidade de mosaico e não consegue suportar a correspondência de etiquetas.",
        "testforblock_outOfWorld": "Não é possível testar para bloco fora do mundo",
        "testforblock_success": "Bloco encontrado com êxito em %1$d,%2$d,%3$d.",
        "testforblocks_description": "Testa se os blocos em duas regiões coincidem uns com os outros.",
        "tickingarea_description": "Adicionar, remover ou listar áreas de seleção.",
        "tickingarea_inuse": "%1$d/%2$d áreas de seleção em utilização.",
        "tickingarea_noneExist_currentDimension": "Não existem áreas de seleção na dimensão atual.",
        "tickingarea_add_bounds_success": "Adicionada área de seleção de %1$d a %2$d.",
        "tickingarea_add_circle_success": "Adicionada área de seleção centrada em %1$d com um raio de %2$d porções.",
        "tickingarea_add_failure": "O número máximo de áreas de seleção (%1$d) já foi atingido. Não é possível adicionar mais áreas de seleção.",
        "tickingarea_add_conflictingname": "Já existe uma área de seleção com o nome %1$s.",
        "tickingarea_add_chunkfailure": "A área de seleção contém mais de %1$d porções. A área de seleção é demasiado grande e não pode ser criada.",
        "tickingarea_add_radiusfailure": "O raio não pode ser superior a %1$d. A área de seleção é demasiado grande e não pode ser criada.",
        "tickingarea_remove_success": "Área(s) de seleção removida(s)",
        "tickingarea_remove_failure": "Não existem áreas de seleção com a posição do bloco %1$d na dimensão atual.",
        "tickingarea_remove_byname_failure": "Não existem áreas com o nome %1$s na dimensão atual.",
        "tickingarea_remove_all_success": "Área(s) de seleção removida(s)",
        "tickingarea_remove_all_failure": "Não existem áreas de seleção na dimensão atual.",
        "tickingarea_list_chunks": "segmentos",
        "tickingarea_list_circle_radius": "Raio",
        "tickingarea_list_success_currentDimension": "Lista de todas as áreas de seleção na dimensão atual",
        "tickingarea_list_success_allDimensions": "Lista de todas as áreas de seleção em todas as dimensões",
        "tickingarea_list_failure_allDimensions": "Não existem áreas de seleção em dimensão alguma.",
        "tickingarea_list_to": "para",
        "tickingarea_list_type_circle": "Círculo",
        "time_added": "Adicionados %1$d ao tempo",
        "time_description": "Altera ou consulta o tempo de jogo do mundo.",
        "time_disabled": "Sempre Dia está ativado neste nível.",
        "time_query_day": "O dia é %d",
        "time_query_daytime": "A hora é %d",
        "time_query_gametime": "A hora do jogo é %d",
        "time_set": "Definir hora como %1$d",
        "time_stop": "Tempo %1$s",
        "title_description": "Controla os títulos do ecrã.",
        "title_success": "Comando de título executado com sucesso",
        "titleraw_description": "Controla os títulos de ecrã com mensagens JSON.",
        "toggledownfall_description": "Ativa ou desativa o clima.",
        "tp_description": "Teletransporta entidades (jogadores, criaturas, etc.).",
        "tp_notSameDimension": "Não foi possível teletransportar porque os jogadores não estão na mesma dimensão",
        "tp_outOfWorld": "Não é possível teleportar entidades para fora do mundo",
        "tp_permission": "Não tens permissão para usar este comando slash.",
        "tp_safeTeleportFail": "Não foi possível teletransportar %1$s para %2$s porque a área não estava desimpedida de blocos.",
        "tp_far": "Não foi possível teletransportar %1$s para a área não carregada em %2$s",
        "tp_success": "Teletransporte de %1$s para %2$s",
        "tp_successVictim": "Foste teletransportado para %1$s",
        "tp_success_coordinates": "Teletransporte de %1$s para %2$s, %3$s, %4$s",
        "transferserver_description": "Transfere um jogador para outro servidor.",
        "transferserver_successful": "Jogador transferido",
        "transferserver_invalid_port": "Porta Inválida (0-65535)",
        "trigger_description": "Define um acionador a ativar.",
        "trigger_disabled": "O ativador %1$s não está ativado",
        "trigger_invalidMode": "Modo de ativador inválido %1$s",
        "trigger_invalidObjective": "Nome de ativador inválido %1$s",
        "trigger_invalidPlayer": "Apenas os jogadores podem usar o comando /trigger",
        "trigger_success": "O ativador %1$s foi alterado com %2$s %3$s",
        "unban_failed": "Não foi possível anular o banimento do jogador %1$s",
        "unban_success": "Anulação de banimento de jogador %1$s",
        "unbanip_invalid": "Introduziste um endereço IP inválido",
        "unbanip_success": "Endereço IP não banido %1$s",
        "validategamelighting_description": "Validar a iluminação do jogo para uma região especificada",
        "validategamelighting_checkRegionTooBig": "Região para verificar se a iluminação é demasiado grande! (%1$d > %2$d)",
        "validategamelighting_outOfWorld": "Não foi possível verificar a iluminação fora do mundo",
        "weather_clear": "Mudar para céu limpo",
        "weather_description": "Define o clima.",
        "weather_disabled": "O Ciclo Atmosférico não está ativado neste nível.",
        "weather_query": "O estado do tempo é: %s",
        "weather_query_clear": "limpo",
        "weather_query_rain": "chuva",
        "weather_query_thunder": "trovoada",
        "weather_rain": "Mudar para clima chuvoso",
        "weather_thunder": "Mudar para chuva e trovões",
        "whitelist_add_failed": "Não foi possível adicionar %1$s à lista de permissões",
        "whitelist_add_success": "Adicionado %1$s à lista de permissões",
        "whitelist_description": "Gere a lista de autorizações do servidor.",
        "whitelist_disabled": "Lista de autorizações desativada",
        "whitelist_enabled": "Lista de autorizações ativada",
        "whitelist_list": "Existem %1$d jogadores colocados na lista de permissões (entre %2$d vistos):",
        "whitelist_reloaded": "Lista de autorizações recarregada do ficheiro.",
        "whitelist_remove_failed": "Não foi possível remover %1$s da lista de permissões",
        "whitelist_remove_success": "Removido %1$s da lista de permissões",
        "world_age_description": "Altera ou consulta a idade do mundo (tempo desde a criação).",
        "world_age_added": "%1$d adicionado à idade do mundo",
        "world_age_query": "Idade do mundo: %d",
        "world_age_set": "Definir idade do mundo como %1$d",
        "worldborder_center_success": "Definir centro da fronteira do mundo como %1$s,%2$s",
        "worldborder_damage_amount_success": "Definir quantidade de danos na fronteira do mundo como %1$s por bloco (a partir de %2$s por bloco)",
        "worldborder_damage_buffer_success": "Definir proteção contra danos na fronteira do mundo para %1$s blocos (a partir de %2$s blocos)",
        "worldborder_get_success": "A fronteira do mundo tem atualmente %1$s blocos de largura",
        "worldborder_set_success": "Definir fronteira do mundo para %1$s blocos de largura (a partir de %2$s blocos)",
        "worldborder_setSlowly_grow_success": "A aumentar a fronteira do mundo para %1$s blocos de largura (desde %2$s blocos) em %3$s segundos",
        "worldborder_setSlowly_shrink_success": "A diminuir a fronteira do mundo para %1$s blocos de largura (a partir de %2$s blocos) em mais de %3s segundos",
        "worldborder_warning_distance_success": "Definir aviso de fronteira do mundo para %1$s blocos de distância (a partir de %2$s blocos)",
        "worldborder_warning_time_success": "Definir aviso de fronteira do mundo para %1$s segundos de distância (a partir de %2$s segundos)",
        "worldbuilder_description": "Alterar estado de chamador do Construtor de Mundos.",
        "worldbuilder_success": "Estado do Construtor de Mundos atualizado para %1$s",
        "wsserver_description": "Tenta ligar ao servidor websocket no URL fornecido.",
        "wsserver_invalid_url": "O URL de servidor é inválido",
        "wsserver_request_existing": "Outro pedido de ligação está atualmente em execução",
        "wsserver_request_failed": "Não foi possível ligar ao servidor: %1$s",
        "wsserver_success": "Ligação estabelecida ao servidor: %1$s",
        "xp_description": "Adiciona ou remove a experiência do jogador.",
        "xp_failure_widthdrawXp": "Não é possível atribuir pontos de experiência negativos ao jogador",
        "xp_success": "Deu %1$d experiência a %2$s",
        "xp_success_levels": "Deu %1$d níveis a %2$s",
        "xp_success_negative_levels": "Retirados %1$d níveis de %2$s"
    },
    item:{
        "air": [
            "Ar"
        ],
        "apple": [
            "Maçã"
        ],
        "golden_apple": [
            "Maçã de Ouro"
        ],
        "appleenchanted": [
            "Maçã Encantada"
        ],
        "armor_stand": [
            "Suporte para Armadura"
        ],
        "arrow": [
            "Flecha"
        ],
        "tipped_arrow": [
            "Flecha"
        ],
        "banner": [
            "Estandarte Negro",
            "Estandarte Negro",
            "Estandarte Vermelho",
            "Estandarte Verde",
            "Estandarte Castanho",
            "Estandarte Azul",
            "Estandarte Roxo",
            "Estandarte Ciano",
            "Estandarte Cinzento-Claro",
            "Estandarte Cinzento",
            "Estandarte Cor-de-Rosa",
            "Estandarte Verde-Lima",
            "Estandarte Amarelo",
            "Estandarte Azul-Claro",
            "Estandarte Magenta",
            "Estandarte Cor de Laranja",
            "Estandarte Branco"
        ],
        "bed": [
            "Cama",
            "Cama Branca",
            "Cama Cor de Laranja",
            "Cama Magenta",
            "Cama Azul-Clara",
            "Cama Amarela",
            "Cama Verde-Lima",
            "Cama Rosa",
            "Cama Cinzenta",
            "Cama Cinzenta-Clara",
            "Cama Ciano",
            "Cama Roxa",
            "Cama Azul",
            "Cama Castanha",
            "Cama Verde",
            "Cama Vermelha",
            "Cama Preta"
        ],
        "bell": [
            "Sino"
        ],
        "steak": [
            "Bife"
        ],
        "beef": [
            "Bife Cru"
        ],
        "beetroot": [
            "Beterraba"
        ],
        "beetroot_soup": [
            "Sopa de Beterraba"
        ],
        "blaze_powder": [
            "Pó de Blaze"
        ],
        "blaze_rod": [
            "Varinha de Blaze"
        ],
        "boat": [
            "Barco de Carvalho",
            "Barco de Carvalho",
            "Barco de Abeto",
            "Barco de Bétula",
            "Barco da Selva",
            "Barco de Acácia",
            "Barco de Carvalho Escuro"
        ],
        "bone": [
            "Osso"
        ],
        "book": [
            "Livro"
        ],
        "chainmail_boots": [
            "Botas de Malha"
        ],
        "leather_boots": [
            "Botas de Cabedal"
        ],
        "diamond_boots": [
            "Botas de Diamante"
        ],
        "golden_boots": [
            "Botas de Ouro"
        ],
        "iron_boots": [
            "Botas de Ferro"
        ],
        "bow": [
            "Arco"
        ],
        "bowl": [
            "Tigela"
        ],
        "bread": [
            "Pão"
        ],
        "brewing_stand": [
            "Posto de Poções"
        ],
        "brick": [
            "Tijolo"
        ],
        "bucket": [
            "Balde"
        ],
        "bucketLava": [
            "Balde de Lava"
        ],
        "bucketWater": [
            "Balde de Água"
        ],
        "bucketFish": [
            "Balde de Bacalhau"
        ],
        "bucketSalmon": [
            "Balde de Salmão"
        ],
        "bucketTropical": [
            "Balde de Peixe Tropical"
        ],
        "bucketPuffer": [
            "Balde de Peixe Balão"
        ],
        "bucketCustomFish": [
            "Balde de"
        ],
        "tropicalColorWhite": [
            "Branco"
        ],
        "tropicalColorOrange": [
            "Cor de Laranja"
        ],
        "tropicalColorMagenta": [
            "Magenta"
        ],
        "tropicalColorSky": [
            "Azul-Celeste"
        ],
        "tropicalColorYellow": [
            "Amarelo"
        ],
        "tropicalColorLime": [
            "Verde-Lima"
        ],
        "tropicalColorRose": [
            "Rosa"
        ],
        "tropicalColorGray": [
            "Cinzento"
        ],
        "tropicalColorSilver": [
            "Prata"
        ],
        "tropicalColorTeal": [
            "Azul-Petróleo"
        ],
        "tropicalColorPlum": [
            "Ameixa"
        ],
        "tropicalColorBlue": [
            "Azul"
        ],
        "tropicalColorBrown": [
            "Castanho"
        ],
        "tropicalColorGreen": [
            "Verde"
        ],
        "tropicalColorRed": [
            "Vermelho"
        ],
        "tropicalBodyKobSingle": [
            "Roncadeira-Austral %1$s"
        ],
        "tropicalBodySunstreakSingle": [
            "SunStreak %1$s"
        ],
        "tropicalBodySnooperSingle": [
            "Snooper %1$s"
        ],
        "tropicalBodyDasherSingle": [
            "Dasher %1$s"
        ],
        "tropicalBodyBrinelySingle": [
            "Brinely %1$s"
        ],
        "tropicalBodySpottySingle": [
            "Spotty %1$s"
        ],
        "tropicalBodyFlopperSingle": [
            "Flopper %1$s"
        ],
        "tropicalBodyStripeySingle": [
            "Stripey %1$s"
        ],
        "tropicalBodyGlitterSingle": [
            "Glitter %1$s"
        ],
        "tropicalBodyBlockfishSingle": [
            "Peixe-bloco %1$s"
        ],
        "tropicalBodyBettySingle": [
            "Betty %1$s"
        ],
        "tropicalBodyClayfishSingle": [
            "Lagostim %1$s"
        ],
        "tropicalBodyKobMulti": [
            "Roncadeira-Austral %1$s-%2$s"
        ],
        "tropicalBodySunstreakMulti": [
            "SunStreaks %1$s-%2$s"
        ],
        "tropicalBodySnooperMulti": [
            "Snoopers %1$s-%2$s"
        ],
        "tropicalBodyDasherMulti": [
            "Dashers %1$s-%2$s"
        ],
        "tropicalBodyBrinelyMulti": [
            "Brienlys %1$s-%2$s"
        ],
        "tropicalBodySpottyMulti": [
            "Spottys %1$s-%2$s"
        ],
        "tropicalBodyFlopperMulti": [
            "Floppers %1$s-%2$s"
        ],
        "tropicalBodyStripeyMulti": [
            "Stripeys %1$s-%2$s"
        ],
        "tropicalBodyGlitterMulti": [
            "Glitters %1$s-%2$s"
        ],
        "tropicalBodyBlockfishMulti": [
            "Peixes-bloco %1$s-%2$s"
        ],
        "tropicalBodyBettyMulti": [
            "Bettys %1$s-%2$s"
        ],
        "tropicalBodyClayfishMulti": [
            "Lagostins %1$s-%2$s"
        ],
        "tropicalSchoolAnemone": [
            "Anémona"
        ],
        "tropicalSchoolBlackTang": [
            "Peixe Tang Preto"
        ],
        "tropicalSchoolBlueDory": [
            "Cirurgião-patela"
        ],
        "tropicalSchoolButterflyFish": [
            "Borboleta-bicuda"
        ],
        "tropicalSchoolCichlid": [
            "Ciclídeo"
        ],
        "tropicalSchoolClownfish": [
            "Peixe-palhaço"
        ],
        "tropicalSchoolCottonCandyBetta": [
            "Betta de Cauda Dupla Colorido"
        ],
        "tropicalSchoolDottyback": [
            "Pseudochromidae"
        ],
        "tropicalSchoolEmperorRedSnapper": [
            "Lutjanus sebae"
        ],
        "tropicalSchoolGoatfish": [
            "Mullidae"
        ],
        "tropicalSchoolMoorishIdol": [
            "Zanclidae"
        ],
        "tropicalSchoolOrnateButterfly": [
            "Peixe-borboleta"
        ],
        "tropicalSchoolParrotfish": [
            "Peixe-papagaio"
        ],
        "tropicalSchoolQueenAngelFish": [
            "Peixe-anjo-rainha"
        ],
        "tropicalSchoolRedCichlid": [
            "Ciclídeo Vermelho"
        ],
        "tropicalSchoolRedLippedBlenny": [
            "Ophioblennius atlanticus"
        ],
        "tropicalSchoolRedSnapper": [
            "Cioba Vermelha"
        ],
        "tropicalSchoolThreadfin": [
            "Polynemidae"
        ],
        "tropicalSchoolTomatoClown": [
            "Peixe-palhaço-tomate"
        ],
        "tropicalSchoolTriggerfish": [
            "Peixe-porco"
        ],
        "tropicalSchoolYellowTang": [
            "Cirurgião-amarelo"
        ],
        "tropicalSchoolYellowtailParrot": [
            "Sparisoma Rubripinne"
        ],
        "cake": [
            "Bolo"
        ],
        "camera": [
            "Câmara"
        ],
        "golden_carrot": [
            "Cenoura Dourada"
        ],
        "carrotOnAStick": [
            "Cenoura num Pau"
        ],
        "warped_fungus_on_a_stick": [
            "Fungo Deformado num Pau"
        ],
        "carrot": [
            "Cenoura"
        ],
        "cauldron": [
            "Caldeirão"
        ],
        "coal": [
            "Carvão",
            null,
            "Carvão Vegetal"
        ],
        "chainmail_chestplate": [
            "Couraça de Malha"
        ],
        "leather_chestplate": [
            "Túnica de Cabedal"
        ],
        "diamond_chestplate": [
            "Couraça de Diamante"
        ],
        "golden_chestplate": [
            "Couraça de Ouro"
        ],
        "iron_chestplate": [
            "Couraça de Ferro"
        ],
        "chorus_fruit": [
            "Fruta de Coro"
        ],
        "chorus_fruit_popped": [
            "Fruta de Coro Rebentada"
        ],
        "cooked_beef": [
            "Bife cozinhado"
        ],
        "cooked_chicken": [
            "Frango Cozinhado"
        ],
        "cooked_porkchop": [
            "Costeleta de Porco Cozinhada"
        ],
        "chicken": [
            "Frango Cru"
        ],
        "clay_ball": [
            "Barro"
        ],
        "clock": [
            "Relógio"
        ],
        "comparator": [
            "Comparador de Redstone"
        ],
        "compass": [
            "Bússola"
        ],
        "lodestonecompass": [
            "Bússola de Magnetita"
        ],
        "cookie": [
            "Bolacha"
        ],
        "crossbow": [
            "Besta"
        ],
        "diamond": [
            "Diamante"
        ],
        "repeater": [
            "Repetidor de Redstone"
        ],
        "acacia_door": [
            "Porta de Acácia"
        ],
        "birch_door": [
            "Porta de Bétula"
        ],
        "dark_oak_door": [
            "Porta de Carvalho Escuro"
        ],
        "iron_door": [
            "Porta de Ferro"
        ],
        "jungle_door": [
            "Porta da Selva"
        ],
        "wooden_door": [
            "Porta de Carvalho"
        ],
        "spruce_door": [
            "Porta de Abeto"
        ],
        "crimson_door": [
            "Porta de Carmesim"
        ],
        "warped_door": [
            "Porta Deformada"
        ],
        "dragon_breath": [
            "Bafo de Dragão"
        ],
        "dye": [
            "Saco de Tinta",
            "Saco de Tinta",
            "Tinta Vermelha",
            "Tinta Verde",
            "Grãos de Cacau",
            "Lápis-Lazúli",
            "Tinta Roxa",
            "Tinta Ciano",
            "Tinta Cinzento-Clara",
            "Tinta Cinzenta",
            "Tinta Cor-de-Rosa",
            "Tinta Verde-Lima",
            "Tinta Amarela",
            "Tinta Azul-Clara",
            "Tinta Magenta",
            "Tinta Cor de Laranja",
            "Farinha de Ossos",
            "Tinta Preta",
            "Tinta Castanha",
            "Tinta Azul",
            "Tinta Branca"
        ],
        "egg": [
            "Ovo"
        ],
        "elytra": [
            "Élitro"
        ],
        "emerald": [
            "Esmeralda"
        ],
        "emptyMap": [
            "Mapa Vazio"
        ],
        "emptyLocatorMap": [
            "Mapa de Localização Vazio"
        ],
        "emptyPotion": [
            "Frasco de Água"
        ],
        "enchanted_book": [
            "Livro de Encantamentos"
        ],
        "end_crystal": [
            "Cristal do Fim"
        ],
        "end_rod": [
            "Varinha do Fim"
        ],
        "ender_eye": [
            "Olho de Ender"
        ],
        "ender_pearl": [
            "Pérola de Ender"
        ],
        "experience_bottle": [
            "Frasco de Encantamentos"
        ],
        "feather": [
            "Pena"
        ],
        "fermented_spider_eye": [
            "Olho de Aranha Fermentado"
        ],
        "fireball": [
            "Carga de Fogo"
        ],
        "fireworks": [
            "Foguete de Fogo-de-Artifício"
        ],
        "fireworksCharge": [
            "Fogo-de-Artifício com Estrelas"
        ],
        "clownfish": [
            "Peixe Tropical"
        ],
        "cooked_fish": [
            "Bacalhau Cozinhado"
        ],
        "fish": [
            "Bacalhau Cru"
        ],
        "pufferfish": [
            "Peixe Balão"
        ],
        "cooked_salmon": [
            "Salmão Cozido"
        ],
        "salmon": [
            "Salmão Cru"
        ],
        "fishing_rod": [
            "Cana de Pesca"
        ],
        "flint": [
            "Sílex"
        ],
        "flint_and_steel": [
            "Sílex e Aço"
        ],
        "flower_pot": [
            "Vaso de Flores"
        ],
        "frame": [
            "Moldura para Objetos"
        ],
        "ghast_tear": [
            "Lágrima de Ghast"
        ],
        "glass_bottle": [
            "Garrafa de Vidro"
        ],
        "gold_nugget": [
            "Pepita de Ouro"
        ],
        "iron_nugget": [
            "Pepita de Ferro"
        ],
        "diamond_axe": [
            "Machado de Diamante"
        ],
        "golden_axe": [
            "Machado de Ouro"
        ],
        "iron_axe": [
            "Machado de Ferro"
        ],
        "stone_axe": [
            "Machado de Pedra"
        ],
        "wooden_axe": [
            "Machado de Madeira"
        ],
        "chainmail_helmet": [
            "Capacete de Malha"
        ],
        "leather_helmet": [
            "Capacete de Cabedal"
        ],
        "diamond_helmet": [
            "Capacete de Diamante"
        ],
        "golden_helmet": [
            "Capacete de Ouro"
        ],
        "iron_helmet": [
            "Capacete de Ferro"
        ],
        "diamond_hoe": [
            "Enxada de Diamante"
        ],
        "golden_hoe": [
            "Enxada de Ouro"
        ],
        "iron_hoe": [
            "Enxada de Ferro"
        ],
        "stone_hoe": [
            "Enxada de Pedra"
        ],
        "wooden_hoe": [
            "Enxada de Madeira"
        ],
        "honey_bottle": [
            "Garrafa de Mel"
        ],
        "honeycomb": [
            "Favo de mel"
        ],
        "horsearmordiamond": [
            "Armadura de Diamante para Cavalo"
        ],
        "horsearmorgold": [
            "Armadura de Ouro para Cavalo"
        ],
        "horsearmoriron": [
            "Armadura de Ferro para Cavalo"
        ],
        "horsearmorleather": [
            "Armadura de Cabedal para Cavalo"
        ],
        "gold_ingot": [
            "Lingote de Ouro"
        ],
        "iron_ingot": [
            "Lingote de Ferro"
        ],
        "netherite_ingot": [
            "Lingote do Submundo"
        ],
        "netherite_scrap": [
            "Sucata do Submundo"
        ],
        "netherite_sword": [
            "Espada do Submundo"
        ],
        "netherite_pickaxe": [
            "Picareta do Submundo"
        ],
        "netherite_axe": [
            "Machado do Submundo"
        ],
        "netherite_shovel": [
            "Pá do Submundo"
        ],
        "netherite_hoe": [
            "Enxada do Submundo"
        ],
        "netherite_boots": [
            "Botas do Submundo"
        ],
        "netherite_leggings": [
            "Perneiras do Submundo"
        ],
        "netherite_chestplate": [
            "Protetor de Peito do Submundo"
        ],
        "netherite_helmet": [
            "Capacete do Submundo"
        ],
        "lead": [
            "Corda-guia"
        ],
        "leather": [
            "Cabedal"
        ],
        "leaves": [
            "Folhas",
            "Folhas de Carvalho",
            "Folhas de Abeto",
            "Folhas de Bétula",
            "Folhas da Selva",
            "Folhas de Acácia",
            "Folhas de Carvalho Escuro"
        ],
        "chainmail_leggings": [
            "Perneiras de Malha"
        ],
        "leather_leggings": [
            "Calças de Cabedal"
        ],
        "diamond_leggings": [
            "Perneiras de Diamante"
        ],
        "golden_leggings": [
            "Perneiras de Ouro"
        ],
        "iron_leggings": [
            "Perneiras de Ferro"
        ],
        "nautilus_shell": [
            "Concha de Nautilóide"
        ],
        "heart_of_the_sea": [
            "Coração do Mar"
        ],
        "magma_cream": [
            "Creme de Magma"
        ],
        "map": [
            "Mapa"
        ],
        "melon": [
            "Melancia"
        ],
        "milk": [
            "Leite"
        ],
        "minecart": [
            "Vagoneta"
        ],
        "chest_minecart": [
            "Vagoneta com Baú"
        ],
        "command_block_minecart": [
            "Vagoneta com Bloco de Comando"
        ],
        "minecartFurnace": [
            "Vagoneta com Fornalha"
        ],
        "hopper_minecart": [
            "Vagoneta com Funil"
        ],
        "tnt_minecart": [
            "Vagoneta com TNT"
        ],
        "trident": [
            "Tridente"
        ],
        "mushroom_stew": [
            "Guisado de Cogumelos"
        ],
        "muttoncooked": [
            "Carne de Carneiro Cozida"
        ],
        "muttonraw": [
            "Carne de Carneiro Crua"
        ],
        "name_tag": [
            "Etiqueta de Nome"
        ],
        "netherbrick": [
            "Tijolo do Submundo"
        ],
        "quartz": [
            "Quartzo do Submundo"
        ],
        "nether_wart": [
            "Fungo do Submundo"
        ],
        "netherStar": [
            "Estrela do Submundo"
        ],
        "painting": [
            "Quadro"
        ],
        "paper": [
            "Papel"
        ],
        "diamond_pickaxe": [
            "Picareta de Diamante"
        ],
        "golden_pickaxe": [
            "Picareta de Ouro"
        ],
        "iron_pickaxe": [
            "Picareta de Ferro"
        ],
        "stone_pickaxe": [
            "Picareta de Pedra"
        ],
        "wooden_pickaxe": [
            "Picareta de Madeira"
        ],
        "porkchop_cooked": [
            "Costeleta de Porco Cozinhada"
        ],
        "porkchop": [
            "Costeleta de Porco Crua"
        ],
        "portfolio": [
            "Portefólio"
        ],
        "potato": [
            "Batata"
        ],
        "baked_potato": [
            "Batata Cozida"
        ],
        "poisonous_potato": [
            "Batata Venenosa"
        ],
        "potion": [
            "Poção"
        ],
        "prismarine_crystals": [
            "Cristais de Prismarine"
        ],
        "prismarine_shard": [
            "Pedaço de Prismarine"
        ],
        "pumpkin_pie": [
            "Tarte de Abóbora"
        ],
        "cooked_rabbit": [
            "Coelho Cozido"
        ],
        "rabbit_foot": [
            "Pata de Coelho"
        ],
        "rabbit_hide": [
            "Pele de Coelho"
        ],
        "rabbit": [
            "Coelho Cru"
        ],
        "rabbit_stew": [
            "Guisado de Coelho"
        ],
        "record": [
            "Disco de Música"
        ],
        "redstone": [
            "Redstone"
        ],
        "reeds": [
            "Canas-de-açúcar"
        ],
        "kelp": [
            "Algas"
        ],
        "dried_kelp": [
            "Algas Secas"
        ],
        "rotten_flesh": [
            "Carne Podre"
        ],
        "ruby": [
            "Rubi"
        ],
        "saddle": [
            "Sela"
        ],
        "wheat_seeds": [
            "Sementes"
        ],
        "beetroot_seeds": [
            "Sementes de Beterraba"
        ],
        "melon_seeds": [
            "Sementes de Melancia"
        ],
        "pumpkin_seeds": [
            "Sementes de Abóbora"
        ],
        "shears": [
            "Tesoura"
        ],
        "diamond_shovel": [
            "Pá de Diamante"
        ],
        "golden_shovel": [
            "Pá de Ouro"
        ],
        "iron_shovel": [
            "Pá de Ferro"
        ],
        "stone_shovel": [
            "Pá de Pedra"
        ],
        "wooden_shovel": [
            "Pá de Madeira"
        ],
        "sign": [
            "Tabuleta de Carvalho"
        ],
        "spruce_sign": [
            "Tabuleta de Abeto"
        ],
        "birch_sign": [
            "Tabuleta de Bétula"
        ],
        "jungle_sign": [
            "Tabuleta de Selva"
        ],
        "acacia_sign": [
            "Tabuleta de Acácia"
        ],
        "darkoak_sign": [
            "Tabuleta de Carvalho Escuro"
        ],
        "crimson_sign": [
            "Tabuleta de Carmesim"
        ],
        "warped_sign": [
            "Tabuleta Deformada"
        ],
        "skull": [
            "Caveira de Esqueleto",
            "Caveira de Esqueleto",
            "Caveira do Esqueleto Wither",
            "Cabeça de Morto-Vivo",
            "Cabeça",
            "Cabeça de Creeper",
            "Cabeça de Dragão"
        ],
        "slime_ball": [
            "Bola de Slime"
        ],
        "snowball": [
            "Bola de Neve"
        ],
        "speckled_melon": [
            "Melancia Brilhante"
        ],
        "spider_eye": [
            "Olho de Aranha"
        ],
        "stick": [
            "Pau"
        ],
        "string": [
            "Fio"
        ],
        "sugar": [
            "Açúcar"
        ],
        "gunpowder": [
            "Pólvora"
        ],
        "diamond_sword": [
            "Espada de Diamante"
        ],
        "golden_sword": [
            "Espada de Ouro"
        ],
        "iron_sword": [
            "Espada de Ferro"
        ],
        "stone_sword": [
            "Espada de Pedra"
        ],
        "wooden_sword": [
            "Espada de Madeira"
        ],
        "wheat": [
            "Trigo"
        ],
        "writable_book": [
            "Livro e Pena"
        ],
        "written_book": [
            "Livro Escrito"
        ],
        "glowstone_dust": [
            "Pó de Pedra Luminosa"
        ],
        "shield": [
            "Escudo"
        ],
        "shulker_shell": [
            "Carapaça de Shulker"
        ],
        "totem": [
            "Totem de Ressuscitação"
        ],
        "turtle_helmet": [
            "Carapaça de Tartaruga"
        ],
        "turtle_shell_piece": [
            "Escama"
        ],
        "phantom_membrane": [
            "Membrana de Fantasma"
        ],
        "sweet_berries": [
            "Frutos Vermelhos Doces"
        ],
        "suspicious_stew": [
            "Guisado Suspeito"
        ],
        "banner_pattern": [
            "Padrão de Estandarte"
        ],
        "acaciaFence": [
            "Cerca de Acácia"
        ],
        "acacia_fence_gate": [
            "Portão de Cerca de Acácia"
        ],
        "activator_rail": [
            "Carril Ativador"
        ],
        "allow": [
            "Permitir"
        ],
        "deny": [
            "Recusar"
        ],
        "border_block": [
            "Fronteira"
        ],
        "anvil": [
            "Bigorna",
            "Bigorna",
            null,
            null,
            null,
            "Bigorna Ligeiramente Danificada",
            null,
            null,
            null,
            "Bigorna Muito Danificada"
        ],
        "barrier": [
            "Barreira"
        ],
        "beacon": [
            "Farol"
        ],
        "beehive": [
            "Colmeia"
        ],
        "bee_nest": [
            "Ninho de Abelhas"
        ],
        "target": [
            "Alvo"
        ],
        "bedrock": [
            "Rocha-Mãe"
        ],
        "conduit": [
            "Canal"
        ],
        "invisibleBedrock": [
            "Rocha-Mãe Invisível"
        ],
        "birchFence": [
            "Cerca de Bétula"
        ],
        "birch_fence_gate": [
            "Portão de Cerca de Bétula"
        ],
        "blast_furnace": [
            "Fornalha Potente"
        ],
        "bone_block": [
            "Bloco de Ossos"
        ],
        "coal_block": [
            "Bloco de Carvão"
        ],
        "diamond_block": [
            "Bloco de Diamante"
        ],
        "emerald_block": [
            "Bloco de Esmeralda"
        ],
        "gold_block": [
            "Bloco de Ouro"
        ],
        "iron_block": [
            "Bloco de Ferro"
        ],
        "lapis_block": [
            "Bloco de Lápis-Lazúli"
        ],
        "redstone_block": [
            "Bloco de Redstone"
        ],
        "bookshelf": [
            "Estante de Livros"
        ],
        "brick_block": [
            "Bloco de Tijolo"
        ],
        "brown_mushroom": [
            "Cogumelo Castanho"
        ],
        "wooden_button": [
            "Botão de Carvalho"
        ],
        "acacia_button": [
            "Botão de Acácia"
        ],
        "birch_button": [
            "Botão de Bétula"
        ],
        "dark_oak_button": [
            "Botão de Carvalho Escuro"
        ],
        "jungle_button": [
            "Botão de Selva"
        ],
        "spruce_button": [
            "Botão de Abeto"
        ],
        "stone_button": [
            "Botão Pedra"
        ],
        "cactus": [
            "Cato"
        ],
        "dried_kelp_block": [
            "Bloco de Algas Secas"
        ],
        "carved_pumpkin": [
            "Abóbora Esculpida"
        ],
        "chest": [
            "Baú"
        ],
        "ender_chest": [
            "Baú de Ender"
        ],
        "jigsaw": [
            "Bloco Quebra-Cabeças"
        ],
        "honey_block": [
            "Bloco de Mel"
        ],
        "honeycomb_block": [
            "Bloco de Favo de mel"
        ],
        "lodestone": [
            "Magnetita"
        ],
        "nether_sprouts": [
            "Rebentos do Submundo"
        ],
        "crimson_stem": [
            "Caule de Carmesim"
        ],
        "warped_stem": [
            "Caule Deformado"
        ],
        "stripped_crimson_stem": [
            "Caule de Carmesim Arrancado"
        ],
        "stripped_warped_stem": [
            "Caule Deformado Arrancado"
        ],
        "crimson_hyphae": [
            "Hifas de Carmesim"
        ],
        "warped_hyphae": [
            "Hifas Deformadas"
        ],
        "stripped_crimson_hyphae": [
            "Hifas de Carmesim Arrancadas"
        ],
        "stripped_warped_hyphae": [
            "Hifas Deformadas Arrancadas"
        ],
        "crimson_planks": [
            "Tábuas de Carmesim"
        ],
        "warped_planks": [
            "Tábuas Deformadas"
        ],
        "crimson_trapdoor": [
            "Alçapão de Carmesim"
        ],
        "warped_trapdoor": [
            "Alçapão Deformado"
        ],
        "crimson_standing_sign": [
            "Tabuleta de Carmesim"
        ],
        "warped_standing_sign": [
            "Tabuleta Deformada"
        ],
        "crimson_wall_sign": [
            "Tabuleta de Carmesim"
        ],
        "warped_wall_sign": [
            "Tabuleta Deformada"
        ],
        "crimson_stairs": [
            "Escadas de Carmesim"
        ],
        "warped_stairs": [
            "Escadas Deformadas"
        ],
        "crimson_fence": [
            "Cerca de Carmesim"
        ],
        "warped_fence": [
            "Cerca Deformada"
        ],
        "crimson_fence_gate": [
            "Portão de Cerca de Carmesim"
        ],
        "warped_fence_gate": [
            "Portão de Cerca Deformado"
        ],
        "crimson_button": [
            "Botão de Carmesim"
        ],
        "warped_button": [
            "Botão Deformado"
        ],
        "crimson_pressure_plate": [
            "Placa de Pressão de Carmesim"
        ],
        "warped_pressure_plate": [
            "Placa de Pressão Deformada"
        ],
        "crimson_slab": [
            "Laje de Carmesim"
        ],
        "warped_slab": [
            "Laje Deformada"
        ],
        "crimson_double_slab": [
            "Laje de Carmesim"
        ],
        "warped_double_slab": [
            "Laje Deformada"
        ],
        "shroomlight": [
            "Luz de Cogumelo"
        ],
        "crimson_nylium": [
            "Nylium de Carmesim"
        ],
        "warped_nylium": [
            "Nylium Deformado"
        ],
        "basalt": [
            "Basalto"
        ],
        "polished_basalt": [
            "Basalto Polido"
        ],
        "blackstone": [
            "Pedra Negra"
        ],
        "polished_blackstone_bricks": [
            "Tijolos de Pedra Negra Polida"
        ],
        "cracked_polished_blackstone_bricks": [
            "Tijolos de Pedra Negra Polidos Rachados"
        ],
        "polished_blackstone_brick_stairs": [
            "Escadas de Tijolo de Pedra Negra Polida"
        ],
        "blackstone_stairs": [
            "Escadas de Pedra Negra"
        ],
        "blackstone_wall": [
            "Parede de Pedra Negra"
        ],
        "polished_blackstone_brick_wall": [
            "Parede de Tijolo de Pedra Negra Polida"
        ],
        "chiseled_polished_blackstone": [
            "Pedra Negra Polida Cinzelada"
        ],
        "gilded_blackstone": [
            "Pedra Negra de Ouro"
        ],
        "blackstone_slab": [
            "Laje de Pedra Negra"
        ],
        "polished_blackstone_brick_slab": [
            "Laje de Tijolo de Pedra Negra Polida"
        ],
        "chain": [
            "Corrente"
        ],
        "soul_soil": [
            "Terra da Alma"
        ],
        "soul_fire": [
            "Fogo da Alma"
        ],
        "polished_blackstone": [
            "Pedra Negra Polida"
        ],
        "polished_blackstone_stairs": [
            "Escadas de Pedra Negra Polida"
        ],
        "polished_blackstone_slab": [
            "Laje de Pedra Negra Polida"
        ],
        "polished_blackstone_pressure_plate": [
            "Placa de Pressão de Pedra Negra Polida"
        ],
        "polished_blackstone_button": [
            "Botão de Pedra Negra Polida"
        ],
        "polished_blackstone_wall": [
            "Parede de Pedra Negra Polida"
        ],
        "soul_campfire": [
            "Fogueira das Almas"
        ],
        "chiseled_nether_bricks": [
            "Tijolos do Submundo Cinzelados"
        ],
        "cracked_nether_bricks": [
            "Tijolos do Submundo Rachados"
        ],
        "quartz_bricks": [
            "Tijolos de Quartzo"
        ],
        "trapped_chest": [
            "Baú Armadilhado"
        ],
        "shulkerBoxWhite": [
            "Caixa de Shulker Branca"
        ],
        "shulkerBoxOrange": [
            "Caixa de Shulker Cor de Laranja"
        ],
        "shulkerBoxMagenta": [
            "Caixa de Shulker Magenta"
        ],
        "shulkerBoxLightBlue": [
            "Caixa de Shulker Azul-Clara"
        ],
        "shulkerBoxYellow": [
            "Caixa de Shulker Amarela"
        ],
        "shulkerBoxLime": [
            "Caixa de Shulker Verde-Lima"
        ],
        "shulkerBoxPink": [
            "Caixa de Shulker Rosa"
        ],
        "shulkerBoxGray": [
            "Caixa de Shulker Cinzenta"
        ],
        "shulkerBoxSilver": [
            "Caixa de Shulker Cinzenta-Clara"
        ],
        "shulkerBoxCyan": [
            "Caixa de Shulker Ciano"
        ],
        "shulkerBoxPurple": [
            "Caixa de Shulker Roxa"
        ],
        "shulkerBoxBlue": [
            "Caixa de Shulker Azul"
        ],
        "shulkerBoxBrown": [
            "Caixa de Shulker Castanha"
        ],
        "shulkerBoxGreen": [
            "Caixa de Shulker Verde"
        ],
        "shulkerBoxRed": [
            "Caixa de Shulker Vermelha"
        ],
        "shulkerBoxBlack": [
            "Caixa de Shulker Preta"
        ],
        "shulkerBox": [
            "Caixa de Shulker"
        ],
        "chorus_flower": [
            "Flor de Coro"
        ],
        "chorus_plant": [
            "Planta de Coro"
        ],
        "stained_glass": [
            "Vidro Tingido de Branco",
            "Vidro Tingido de Branco",
            "Vidro Tingido de Cor de Laranja",
            "Vidro Tingido de Magenta",
            "Vidro Tingido de Azul-claro",
            "Vidro Tingido de Amarelo",
            "Vidro Tingido de Verde-Lima",
            "Vidro Tingido de Cor-de-Rosa",
            "Vidro Tingido de Cinzento",
            "Vidro Tingido de Cinzento-Claro",
            "Vidro Tingido de Ciano",
            "Vidro Tingido de Roxo",
            "Vidro Tingido de Azul",
            "Vidro Tingido de Castanho",
            "Vidro Tingido de Verde",
            "Vidro Tingido de Vermelho",
            "Vidro Tingido de Preto"
        ],
        "stained_glass_pane": [
            "Painel de Vidro Tingido de Branco",
            "Painel de Vidro Tingido de Branco",
            "Painel de Vidro Tingido de Cor de Laranja",
            "Painel de Vidro Tingido de Magenta",
            "Painel de Vidro Tingido de Azul-claro",
            "Painel de Vidro Tingido de Amarelo",
            "Painel de Vidro Tingido de Verde-Lima",
            "Painel de Vidro Tingido de Cor-de-Rosa",
            "Painel de Vidro Tingido de Cinzento",
            "Painel de Vidro Tingido de Cinzento-Claro",
            "Painel de Vidro Tingido de Ciano",
            "Painel de Vidro Tingido de Roxo",
            "Painel de Vidro Tingido de Azul",
            "Painel de Vidro Tingido de Castanho",
            "Painel de Vidro Tingido de Verde",
            "Painel de Vidro Tingido de Vermelho",
            "Painel de Vidro Tingido de Preto"
        ],
        "clay": [
            "Bloco de Barro"
        ],
        "hardened_clay": [
            "Terracota"
        ],
        "stained_hardened_clay": [
            "Terracota",
            "Terracota Branca",
            "Terracota Vidrada Cor de Laranja",
            "Terracota Magenta",
            "Terracota Azul-Clara",
            "Terracota Amarela",
            "Terracota Verde-Lima",
            "Terracota Rosa",
            "Terracota Cinzenta",
            "Terracota Cinzenta-Clara",
            "Terracota Ciano",
            "Terracota Roxa",
            "Terracota Azul",
            "Terracota Castanha",
            "Terracota Verde",
            "Terracota Vermelha",
            "Terracota Preta"
        ],
        "structure_block": [
            "Bloco de Estrutura"
        ],
        "structure_void": [
            "Estrutura Nula"
        ],
        "wool": [
            "Lã",
            "Lã Branca",
            "Lã Cor de Laranja",
            "Lã Magenta",
            "Lã Azul-Clara",
            "Lã Amarela",
            "Lã Verde-Lima",
            "Lã Cor-de-Rosa",
            "Lã Cinzenta",
            "Lã Cinzento-Clara",
            "Lã Ciano",
            "Lã Roxa",
            "Lã Azul",
            "Lã Castanha",
            "Lã Verde",
            "Lã Vermelha",
            "Lã Preta"
        ],
        "cobblestone_wall": [
            "Parede de Pedra Arredondada",
            "Parede de Pedra Arredondada",
            "Parede de Pedra Arredondada com Musgo",
            "Parede de Granito",
            "Parede de Diorito",
            "Parede de Andesito",
            "Parede de Arenito",
            "Parede de Tijolo",
            "Parede de Tijolo de Pedra",
            "Parede de Tijolo de Pedra com Musgo",
            "Parede de Tijolo de Pedra do Fim",
            "Parede de Tijolo do Submundo",
            "Parede de Prismarine",
            "Parede de Arenito Vermelho",
            "Parede de Tijolo Vermelho do Submundo"
        ],
        "cocoa": [
            "Cacau"
        ],
        "command_block": [
            "Bloco de Comando"
        ],
        "composter": [
            "Compostador"
        ],
        "light_block": [
            "Bloco Leve"
        ],
        "repeating_command_block": [
            "Bloco de Comando de Repetição"
        ],
        "chain_command_block": [
            "Bloco de Comando Encadeado"
        ],
        "darkOakFence": [
            "Cerca de Carvalho Escuro"
        ],
        "dark_oak_fence_gate": [
            "Portão de Cerca de Carvalho Escuro"
        ],
        "daylight_detector": [
            "Sensor de Luz do Dia"
        ],
        "deadbush": [
            "Arbusto Seco"
        ],
        "detector_rail": [
            "Carril Detetor"
        ],
        "dirt": [
            "Terra",
            "Terra",
            "Terra Infértil"
        ],
        "podzol": [
            "Lama"
        ],
        "purpur_block": [
            "Bloco Púrpura",
            "Bloco Púrpura",
            "Púrpura Cinzelada",
            "Pilar Púrpura"
        ],
        "dispenser": [
            "Distribuidor"
        ],
        "doorWood": [
            "Porta de Madeira"
        ],
        "double_plant": [
            "Planta",
            "Girassol",
            "Lilás",
            "Erva Muito Alta",
            "Samambaia Grande",
            "Roseira",
            "Peónia"
        ],
        "dragon_egg": [
            "Ovo de Dragão"
        ],
        "dropper": [
            "Dropper"
        ],
        "enchanting_table": [
            "Mesa de Encantamentos"
        ],
        "enderChest": [
            "Baú de Ender"
        ],
        "end_portal_frame": [
            "Portal do Fim"
        ],
        "farmland": [
            "Terra de Cultivo"
        ],
        "fletching_table": [
            "Mesa de Arco e Flecha"
        ],
        "fence": [
            "Cerca de Carvalho"
        ],
        "fence_gate": [
            "Portão de Cerca de Carvalho"
        ],
        "iron_bars": [
            "Barras de Ferro"
        ],
        "fire": [
            "Fogo"
        ],
        "yellow_flower": [
            "Flor",
            "Dente-de-Leão"
        ],
        "red_flower": [
            "Flor",
            "Papoila",
            "Orquídea Azul",
            "Alho Silvestre",
            "Azure Bluet",
            "Tulipa Vermelha",
            "Tulipa Cor de Laranja",
            "Tulipa Branca",
            "Tulipa Cor-de-Rosa",
            "Margarida",
            "Centáurea",
            "Lírio-do-vale"
        ],
        "wither_rose": [
            "Rosa de Wither"
        ],
        "furnace": [
            "Fornalha"
        ],
        "glass": [
            "Vidro"
        ],
        "golden_rail": [
            "Carril com Propulsão"
        ],
        "grass": [
            "Bloco de Erva"
        ],
        "grass_path": [
            "Caminho de Relva"
        ],
        "gravel": [
            "Gravilha"
        ],
        "hay_block": [
            "Fardo de Palha"
        ],
        "netherrack": [
            "Rocha do Submundo"
        ],
        "soul_sand": [
            "Areia Movediça"
        ],
        "hopper": [
            "Funil"
        ],
        "ice": [
            "Gelo"
        ],
        "packed_ice": [
            "Gelo Compactado"
        ],
        "blue_ice": [
            "Gelo Azul"
        ],
        "iron_trapdoor": [
            "Alçapão de Ferro"
        ],
        "jukebox": [
            "Jukebox"
        ],
        "jungleFence": [
            "Cerca da Selva"
        ],
        "jungle_fence_gate": [
            "Portão de Cerca da Selva"
        ],
        "ladder": [
            "Escadote"
        ],
        "flowing_lava": [
            "Lava"
        ],
        "leaves2": [
            "Folhas de Acácia",
            "Folhas de Acácia",
            "Folhas de Carvalho Escuro"
        ],
        "lever": [
            "Alavanca"
        ],
        "glowstone": [
            "Pedra Luminosa"
        ],
        "lit_pumpkin": [
            "Abóbora de Halloween"
        ],
        "lockedchest": [
            "Baú Trancado"
        ],
        "log2": [
            "Toro de Acácia",
            "Toro de Acácia",
            "Toro de Carvalho Escuro"
        ],
        "log": [
            "Toro",
            "Toro de Carvalho",
            "Toro de Abeto",
            "Toro de Bétula",
            "Toro da Selva"
        ],
        "magma": [
            "Bloco de Magma"
        ],
        "melon_block": [
            "Melancia"
        ],
        "mob_spawner": [
            "Gerador de Monstros"
        ],
        "monster_egg": [
            "Pedra Infestada",
            "Pedra Infestada",
            "Pedra Arredondada Infestada",
            "Tijolo de Pedra Infestado",
            "Tijolo de Pedra com Musgo Infestado",
            "Tijolo de Pedra Rachada Infestado",
            "Tijolo de Pedra Cinzelado Infestado"
        ],
        "mushroom": [
            "Cogumelo"
        ],
        "noteblock": [
            "Bloco Musical"
        ],
        "mycelium": [
            "Micélio"
        ],
        "nether_brick": [
            "Bloco de Tijolo do Submundo"
        ],
        "red_nether_brick": [
            "Tijolo Vermelho do Submundo"
        ],
        "nether_brick_fence": [
            "Cerca de Tijolo do Submundo"
        ],
        "quartz_ore": [
            "Minério de Quartzo do Submundo"
        ],
        "netherreactor": [
            "Núcleo do Reator do Submundo"
        ],
        "nether_wart_block": [
            "Bloco de Fungo do Submundo"
        ],
        "warped_wart_block": [
            "Bloco de Fungos Deformado"
        ],
        "unlit_redstone_torch": [
            "Tocha de Redstone"
        ],
        "redstone_torch": [
            "Tocha de Redstone"
        ],
        "soul_torch": [
            "Tocha das Almas"
        ],
        "obsidian": [
            "Obsidiana"
        ],
        "coal_ore": [
            "Minério de Carvão"
        ],
        "diamond_ore": [
            "Minério de Diamante"
        ],
        "emerald_ore": [
            "Minério de Esmeralda"
        ],
        "gold_ore": [
            "Minério de Ouro"
        ],
        "iron_ore": [
            "Minério de Ferro"
        ],
        "lapis_ore": [
            "Minério de Lápis-Lazúli"
        ],
        "redstone_ore": [
            "Minério de Redstone"
        ],
        "oreRuby": [
            "Minério de Rubi"
        ],
        "observer": [
            "Observador"
        ],
        "piston": [
            "Pistão"
        ],
        "sticky_piston": [
            "Pistão Pegajoso"
        ],
        "portal": [
            "Portal"
        ],
        "potatoes": [
            "Batatas"
        ],
        "stone_pressure_plate": [
            "Placa de Pressão de Pedra"
        ],
        "wooden_pressure_plate": [
            "Placa de Pressão de Carvalho"
        ],
        "acacia_pressure_plate": [
            "Placa de Pressão de Acácia"
        ],
        "birch_pressure_plate": [
            "Placa de Pressão de Bétula"
        ],
        "dark_oak_pressure_plate": [
            "Placa de Pressão de Carvalho Escuro"
        ],
        "jungle_pressure_plate": [
            "Placa de Pressão de Selva"
        ],
        "spruce_pressure_plate": [
            "Placa de Pressão de Abeto"
        ],
        "prismarine": [
            "Prismarine",
            "Prismarine",
            "Tijolos de Prismarine",
            "Prismarine Escuro"
        ],
        "pumpkin": [
            "Abóbora"
        ],
        "pumpkin_stem": [
            "Caule de Abóbora"
        ],
        "quartz_block": [
            "Bloco de Quartzo",
            "Bloco de Quartzo",
            "Bloco de Quartzo Cinzelado",
            "Bloco de Pilar em Quartzo",
            "Bloco de Quartzo Macio"
        ],
        "rail": [
            "Carril"
        ],
        "red_mushroom": [
            "Cogumelo Vermelho"
        ],
        "crimson_fungus": [
            "Fungos de Carmesim"
        ],
        "warped_fungus": [
            "Fungos Deformados"
        ],
        "red_mushroom_block": [
            "Bloco de Cogumelo Vermelho"
        ],
        "red_sandstone": [
            "Arenito Vermelho",
            "Arenito Vermelho",
            "Arenito Vermelho Cinzelado",
            "Arenito Vermelho Cortado",
            "Arenito Vermelho Macio"
        ],
        "redstone_wire": [
            "Pó de Redstone"
        ],
        "redstone_lamp": [
            "Candeeiro de Redstone"
        ],
        "sand": [
            "Areia",
            "Areia",
            "Areia Vermelha"
        ],
        "sandstone": [
            "Arenito",
            "Arenito",
            "Arenito Cinzelado",
            "Arenito Cortado",
            "Arenito Macio"
        ],
        "sapling": [
            "Rebento de Carvalho",
            "Rebento de Carvalho",
            "Rebento de Abeto",
            "Rebento de Bétula",
            "Rebento da Selva",
            "Rebento de Acácia",
            "Rebento de Carvalho Escuro"
        ],
        "seaLantern": [
            "Lanterna Aquática"
        ],
        "standing_sign": [
            "Tabuleta"
        ],
        "spruce_standing_sign": [
            "Tabuleta de Abeto"
        ],
        "birch_standing_sign": [
            "Tabuleta de Bétula"
        ],
        "jungle_standing_sign": [
            "Tabuleta de Selva"
        ],
        "acacia_standing_sign": [
            "Tabuleta de Acácia"
        ],
        "darkoak_standing_sign": [
            "Tabuleta de Carvalho Escuro"
        ],
        "slime": [
            "Bloco de Slime"
        ],
        "snow": [
            "Neve"
        ],
        "sponge": [
            "Esponja",
            "Esponja",
            "Esponja Húmida"
        ],
        "spruceFence": [
            "Cerca de Abeto"
        ],
        "spruce_fence_gate": [
            "Portão de Cerca de Abeto"
        ],
        "brick_stairs": [
            "Escadas de Tijolo"
        ],
        "nether_brick_stairs": [
            "Escadas de Tijolo do Submundo"
        ],
        "quartz_stairs": [
            "Escadas de Quartzo"
        ],
        "smooth_quartz_stairs": [
            "Escadas de Quartzo Macio"
        ],
        "red_sandstone_stairs": [
            "Escadas de Arenito Vermelho"
        ],
        "sandstone_stairs": [
            "Escadas de Arenito"
        ],
        "stone_stairs": [
            "Escadas de Pedra Arredondada"
        ],
        "normal_stone_stairs": [
            "Escadas de Pedra"
        ],
        "stone_brick_stairs": [
            "Escadas de Tijolo de Pedra"
        ],
        "oak_stairs": [
            "Escadas de Madeira de Carvalho"
        ],
        "acacia_stairs": [
            "Escadas de Madeira de Acácia"
        ],
        "birch_stairs": [
            "Escadas de Madeira de Bétula"
        ],
        "dark_oak_stairs": [
            "Escadas de Madeira de Carvalho Escuro"
        ],
        "jungle_stairs": [
            "Escadas de Madeira da Selva"
        ],
        "spruce_stairs": [
            "Escadas de Madeira de Abeto"
        ],
        "purpur_stairs": [
            "Escadas Púrpura"
        ],
        "prismarine_stairs": [
            "Escadas de Prismarine"
        ],
        "dark_prismarine_stairs": [
            "Escadas de Prismarine Escuro"
        ],
        "prismarine_bricks_stairs": [
            "Escadas de Tijolo de Prismarine"
        ],
        "granite_stairs": [
            "Escadas de Granito"
        ],
        "diorite_stairs": [
            "Escadas de Diorito"
        ],
        "andesite_stairs": [
            "Escadas de Andesito"
        ],
        "polished_granite_stairs": [
            "Escadas de Granito Polido"
        ],
        "polished_diorite_stairs": [
            "Escadas de Diorito Polido"
        ],
        "polished_andesite_stairs": [
            "Escadas de Andesito Polido"
        ],
        "mossy_stone_brick_stairs": [
            "Escadas de Tijolo de Pedra com Musgo"
        ],
        "smooth_red_sandstone_stairs": [
            "Escadas de Arenito Vermelho Macio"
        ],
        "smooth_sandstone_stairs": [
            "Escadas de Arenito Macio"
        ],
        "end_brick_stairs": [
            "Escadas de Tijolo de Pedra do Fim"
        ],
        "mossy_cobblestone_stairs": [
            "Escadas de Pedra Arredondada com Musgo"
        ],
        "red_nether_brick_stairs": [
            "Escadas de Tijolo Vermelho do Submundo"
        ],
        "smooth_stone": [
            "Pedra Macia"
        ],
        "standing_banner": [
            "Estandarte",
            "Estandarte Negro",
            "Estandarte Vermelho",
            "Estandarte Verde",
            "Estandarte Castanho",
            "Estandarte Azul",
            "Estandarte Roxo",
            "Estandarte Ciano",
            "Estandarte Cinzento-Claro",
            "Estandarte Cinzento",
            "Estandarte Rosa",
            "Estandarte Verde-Lima",
            "Estandarte Amarelo",
            "Estandarte Azul-Claro",
            "Estandarte Magenta",
            "Estandarte Cor de Laranja",
            "Estandarte"
        ],
        "stone": [
            "Pedra",
            "Pedra",
            "Granito",
            "Granito Polido",
            "Diorito",
            "Diorito Polido",
            "Andesito",
            "Andesito Polido"
        ],
        "cobblestone": [
            "Pedra Arredondada"
        ],
        "stonebrick": [
            "Tijolos de Pedra",
            "Tijolos de Pedra",
            "Tijolos de Pedra com Musgo",
            "Tijolos de Pedra Cinzelados"
        ],
        "stonecutter": [
            "Cortador de Pedras"
        ],
        "stonecutter_block": [
            "Cortador de Pedras"
        ],
        "mossy_cobblestone": [
            "Pedra Arredondada com Musgo"
        ],
        "double_stone_slab": [
            "Laje de Pedra",
            "Laje de Pedra",
            "Laje de Arenito",
            "Laje em Madeira",
            "Laje de Pedra Arredondada",
            "Laje de Tijolos",
            "Laje de Tijolos de Pedra",
            "Laje de Quartzo",
            "Laje de Tijolo do Submundo"
        ],
        "stone_slab": [
            "Laje de Pedra",
            "Laje de Pedra Macia",
            "Laje de Arenito",
            "Laje em Madeira",
            "Laje de Pedra Arredondada",
            "Laje de Tijolos",
            "Laje de Tijolos de Pedra",
            "Laje de Quartzo",
            "Laje de Tijolo do Submundo"
        ],
        "double_stone_slab2": [
            "Laje de Arenito Vermelho",
            "Laje de Arenito Vermelho"
        ],
        "stone_slab2": [
            "Laje de Arenito Vermelho",
            "Laje de Arenito Vermelho",
            "Laje Púrpura",
            "Laje de Prismarine",
            "Laje de Tijolos de Prismarine",
            "Laje de Prismarine Escuro",
            "Laje de Pedra Arredondada com Musgo",
            "Laje de Arenito Macio",
            "Laje de Tijolo Vermelho do Submundo"
        ],
        "stone_slab3": [
            "Laje de Tijolo de Pedra do Fim",
            "Laje de Tijolo de Pedra do Fim",
            "Laje de Arenito Vermelho Macio",
            "Laje de Andesito Polido",
            "Laje de Andesito",
            "Laje de Diorito",
            "Laje de Diorito Polido",
            "Laje de Granito",
            "Laje de Granito Polido"
        ],
        "stone_slab4": [
            "Laje de Tijolo de Pedra com Musgo",
            "Laje de Tijolo de Pedra com Musgo",
            "Laje de Quartzo Macio",
            "Laje de Pedra",
            "Laje de Arenito Cortada",
            "Laje de Arenito Vermelho Cortada"
        ],
        "coral_block": [
            "Bloco de Tubipora",
            "Bloco de Tubipora",
            "Bloco de Coral Cérebro",
            "Bloco de Plerogyra Sinuosa",
            "Bloco de Millepora",
            "Bloco de Rugosa",
            "Bloco de Tubipora Morto",
            "Bloco de Coral Cérebro Morto",
            "Bloco de Plerogyra Sinuosa Morto",
            "Bloco de Millepora Morto",
            "Bloco de Rugosa Morto"
        ],
        "tallgrass": [
            "Relva",
            "Relva",
            "Samambaia"
        ],
        "seagrass": [
            "Erva Marinha",
            "Erva Marinha"
        ],
        "sea_pickle": [
            "Pepino-do-Mar"
        ],
        "turtle_egg": [
            "Ovo de Tartaruga Marinha"
        ],
        "coral": [
            "Tubipora",
            "Tubipora",
            "Coral Cérebro",
            "Plerogyra Sinuosa",
            "Millepora",
            "Rugosa",
            "Tubipora Mole Morto",
            "Coral Cérebro Morto",
            "Plerogyra Sinuosa Mole Morto",
            "Millepora Mole Morto",
            "Rugosa Mole Morto"
        ],
        "coral_fan": [
            "Tubipora Mole",
            "Tubipora Mole",
            "Coral Cérebro Mole",
            "Plerogyra Sinuosa Mole",
            "Millepora Mole",
            "Rugosa Mole"
        ],
        "coral_fan_dead": [
            "Tubipora Mole Morto",
            "Tubipora Mole Morto",
            "Coral Cérebro Mole Morto",
            "Plerogyra Sinuosa Mole Morto",
            "Millepora Mole Morto",
            "Rugosa Mole Morto"
        ],
        "glass_pane": [
            "Painel de Vidro"
        ],
        "tnt": [
            "TNT"
        ],
        "snow_layer": [
            "Neve no Topo"
        ],
        "torch": [
            "Tocha"
        ],
        "trapdoor": [
            "Alçapão de Carvalho"
        ],
        "acacia_trapdoor": [
            "Alçapão de Acácia"
        ],
        "birch_trapdoor": [
            "Alçapão de Bétula"
        ],
        "dark_oak_trapdoor": [
            "Alçapão de Carvalho Escuro"
        ],
        "jungle_trapdoor": [
            "Alçapão de Selva"
        ],
        "spruce_trapdoor": [
            "Alçapão de Abeto"
        ],
        "tripWire": [
            "Fio de Armadilha"
        ],
        "tripwire_hook": [
            "Gancho para Fio de Armadilha"
        ],
        "vine": [
            "Heras"
        ],
        "weeping_vines": [
            "Heras Chorosas"
        ],
        "twisting_vines": [
            "Heras Torcidas"
        ],
        "flowing_water": [
            "Água"
        ],
        "water": [
            "Água"
        ],
        "waterlily": [
            "Folha de Nenúfar"
        ],
        "web": [
            "Teia de Aranha"
        ],
        "heavy_weighted_pressure_plate": [
            "Placa de Pressão (Pesada)"
        ],
        "light_weighted_pressure_plate": [
            "Placa de Pressão (Leve)"
        ],
        "end_stone": [
            "Pedra do Fim"
        ],
        "end_bricks": [
            "Tijolos de Pedra do Fim"
        ],
        "planks": [
            "Tábuas de Madeira",
            "Tábuas de Madeira de Carvalho",
            "Tábuas de Madeira de Abeto",
            "Tábuas de Madeira de Bétula",
            "Tábuas de Madeira da Selva",
            "Tábuas de Madeira de Acácia",
            "Tábuas de Madeira de Carvalho Escuro"
        ],
        "wooden_slab": [
            "Laje de Madeira",
            "Laje de Madeira de Carvalho",
            "Laje de Madeira de Abeto",
            "Laje de Madeira de Bétula",
            "Laje de Madeira da Selva",
            "Laje de Madeira de Acácia",
            "Laje de Madeira de Carvalho Escuro"
        ],
        "carpet": [
            "Tapete",
            "Tapete Preto",
            "Tapete Vermelho",
            "Tapete Verde",
            "Tapete Castanho",
            "Tapete Azul",
            "Tapete Roxo",
            "Tapete Ciano",
            "Tapete Cinzento-Claro",
            "Tapete Cinzento",
            "Tapete Cor-de-Rosa",
            "Tapete Verde-Lima",
            "Tapete Amarelo",
            "Tapete Azul-Claro",
            "Tapete Magenta",
            "Tapete Cor de Laranja",
            "Tapete Branco"
        ],
        "crafting_table": [
            "Mesa de Trabalho"
        ],
        "white_glazed_terracotta": [
            "Terracota Vidrada Branca",
            "Terracota Vidrada Branca"
        ],
        "orange_glazed_terracotta": [
            "Terracota Vidrada Cor de Laranja",
            "Terracota Vidrada Cor de Laranja"
        ],
        "magenta_glazed_terracotta": [
            "Terracota Vidrada Magenta",
            "Terracota Vidrada Magenta"
        ],
        "light_blue_glazed_terracotta": [
            "Terracota Vidrada Azul-Clara",
            "Terracota Vidrada Azul-Clara"
        ],
        "yellow_glazed_terracotta": [
            "Terracota Vidrada Amarela",
            "Terracota Vidrada Amarela"
        ],
        "lime_glazed_terracotta": [
            "Terracota Vidrada Verde-Lima",
            "Terracota Vidrada Verde-Lima"
        ],
        "pink_glazed_terracotta": [
            "Terracota Vidrada Rosa",
            "Terracota Vidrada Rosa"
        ],
        "gray_glazed_terracotta": [
            "Terracota Vidrada Cinzenta",
            "Terracota Vidrada Cinzenta"
        ],
        "silver_glazed_terracotta": [
            "Terracota Vidrada Cinzenta-Clara",
            "Terracota Vidrada Cinzenta-Clara"
        ],
        "cyan_glazed_terracotta": [
            "Terracota Vidrada Ciano",
            "Terracota Vidrada Ciano"
        ],
        "purple_glazed_terracotta": [
            "Terracota Vidrada Roxa",
            "Terracota Vidrada Roxa"
        ],
        "blue_glazed_terracotta": [
            "Terracota Vidrada Azul",
            "Terracota Vidrada Azul"
        ],
        "brown_glazed_terracotta": [
            "Terracota Vidrada Castanha",
            "Terracota Vidrada Castanha"
        ],
        "green_glazed_terracotta": [
            "Terracota Vidrada Verde",
            "Terracota Vidrada Verde"
        ],
        "red_glazed_terracotta": [
            "Terracota Vidrada Vermelha",
            "Terracota Vidrada Vermelha"
        ],
        "black_glazed_terracotta": [
            "Terracota Vidrada Preta",
            "Terracota Vidrada Preta"
        ],
        "concrete": [
            "Betão Branco",
            "Betão Branco",
            "Betão Cor de Laranja",
            "Betão Magenta",
            "Betão Azul-Claro",
            "Betão Amarelo",
            "Betão Verde-Lima",
            "Betão Rosa",
            "Betão Cinzento",
            "Betão Cinzento-Claro",
            "Betão Ciano",
            "Betão Roxo",
            "Betão Azul",
            "Betão Castanho",
            "Betão Verde",
            "Betão Vermelho",
            "Betão Preto"
        ],
        "glazedTerracottaWhite": [
            "Terracota Vidrada Branca"
        ],
        "glazedTerracottaOrange": [
            "Terracota Vidrada Cor de Laranja"
        ],
        "glazedTerracottaMagenta": [
            "Terracota Vidrada Magenta"
        ],
        "glazedTerracottaLightBlue": [
            "Terracota Vidrada Azul-Clara"
        ],
        "glazedTerracottaYellow": [
            "Terracota Vidrada Amarela"
        ],
        "glazedTerracottaLime": [
            "Terracota Vidrada Verde-Lima"
        ],
        "glazedTerracottaPink": [
            "Terracota Vidrada Rosa"
        ],
        "glazedTerracottaGray": [
            "Terracota Vidrada Cinzenta"
        ],
        "glazedTerracottaSilver": [
            "Terracota Vidrada Cinzenta-Clara"
        ],
        "glazedTerracottaCyan": [
            "Terracota Vidrada Ciano"
        ],
        "glazedTerracottaPurple": [
            "Terracota Vidrada Roxa"
        ],
        "glazedTerracottaBlue": [
            "Terracota Vidrada Azul"
        ],
        "glazedTerracottaBrown": [
            "Terracota Vidrada Castanha"
        ],
        "glazedTerracottaGreen": [
            "Terracota Vidrada Verde"
        ],
        "glazedTerracottaRed": [
            "Terracota Vidrada Vermelha"
        ],
        "glazedTerracottaBlack": [
            "Terracota Vidrada Preta"
        ],
        "concretePowder": [
            "Pó de Betão Branco",
            "Pó de Betão Branco",
            "Pó de Betão Cor de Laranja",
            "Pó de Betão Magenta",
            "Pó de Betão Azul-Claro",
            "Pó de Betão Amarelo",
            "Pó de Betão Verde-Lima",
            "Pó de Betão Rosa",
            "Pó de Betão Cinzento",
            "Pó de Betão Cinzento-Claro",
            "Pó de Betão Ciano",
            "Pó de Betão Roxo",
            "Pó de Betão Azul",
            "Pó de Betão Castanho",
            "Pó de Betão Verde",
            "Pó de Betão Vermelho",
            "Pó de Betão Preto"
        ],
        "stripped_spruce_log": [
            "Toro de Abeto Despojado"
        ],
        "stripped_dark_oak_log": [
            "Toro de Carvalho Escuro Despojado"
        ],
        "stripped_birch_log": [
            "Toro de Bétula Despojado"
        ],
        "stripped_jungle_log": [
            "Toro da Selva Despojado"
        ],
        "stripped_oak_log": [
            "Toro de Carvalho Despojado"
        ],
        "stripped_acacia_log": [
            "Toro de Acácia Despojado"
        ],
        "bamboo": [
            "Bambu"
        ],
        "scaffolding": [
            "Armação"
        ],
        "grindstone": [
            "Rebolo"
        ],
        "cartography_table": [
            "Mesa de Cartografia"
        ],
        "lantern": [
            "Lanterna"
        ],
        "soul_lantern": [
            "Lanterna das Almas"
        ],
        "smoker": [
            "Forno Defumador"
        ],
        "smithing_table": [
            "Mesa de Ferrar"
        ],
        "barrel": [
            "Barril"
        ],
        "campfire": [
            "Fogueira"
        ],
        "loom": [
            "Feixe"
        ],
        "lectern": [
            "Atril"
        ],
        "sweet_berry_bush": [
            "Arbusto de Frutos Vermelhos Doces"
        ],
        "wood": [
            "Madeira de Carvalho",
            "Madeira de Carvalho",
            "Madeira de Abeto",
            "Madeira de Bétula",
            "Madeira da Selva",
            "Madeira de Acácia",
            "Madeira de Carvalho Escuro",
            null,
            null,
            "Madeira de Carvalho Despojada",
            "Madeira de Abeto Despojada",
            "Madeira de Bétula Despojada",
            "Madeira da Selva Despojada",
            "Madeira de Acácia Despojada",
            "Madeira de Carvalho Escuro Despojada"
        ],
        "netherite_block": [
            "Bloco do Submundo"
        ],
        "ancient_debris": [
            "Detritos Ancestrais"
        ],
        "nether_gold_ore": [
            "Minério de Ouro do Submundo"
        ],
        "respawn_anchor": [
            "Âncora de Regeneração"
        ],
        "crying_obsidian": [
            "Obsidiana Gritante"
        ]
    }
};
freeze(lang_data);
export = lang_data;
