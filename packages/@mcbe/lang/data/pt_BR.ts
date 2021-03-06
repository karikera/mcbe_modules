
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
    id: "pt_BR" as LangId,
    commands:{
        "ability_description": "Define a habilidade de um jogador.",
        "ability_noability": "Nenhuma habilidade chamada '%1$s' está disponível",
        "ability_granted": "A habilidade '%1$s' foi concedida a você",
        "ability_revoked": "Seu acesso à habilidade '%1$s' foi revogado",
        "ability_success": "Habilidade atualizada",
        "achievement_alreadyHave": "O(A) jogador(a) '%1$s' já possui a conquista %2$s",
        "achievement_description": "Fornece ou remove uma conquista de um jogador.",
        "achievement_dontHave": "O(A) jogador(a) %1$s não possui a conquista %2$s",
        "achievement_give_success_all": "Todas as conquistas foram dadas com êxito para %1$s",
        "achievement_give_success_one": "%1$s recebeu com êxito a estatística %2$s",
        "achievement_statTooLow": "O(A) jogador(a) %1$s não tem a estatística %2$s",
        "achievement_take_success_all": "Todas as conquistas foram removidas com êxito de %1$s",
        "achievement_take_success_one": "A estatística %1$s foi removida com êxito de %2$s",
        "achievement_unknownAchievement": "Conquista ou estatística desconhecida '%1$s'",
        "agent_attack_success": "Agente atacou com sucesso",
        "agent_attack_failed": "Agente falhou no ataque",
        "agent_collect_success": "Agente coletou com sucesso",
        "agent_collect_failed": "Agente falhou ao coletar",
        "agent_createagent_success": "Agente criado",
        "agent_createagent_failed": "Não foi possível criar agente",
        "agent_destroy_success": "Agente destruiu um bloco",
        "agent_destroy_failed": "Agente falhou ao destruir um bloco",
        "agent_detect_success": "Agente detectou com sucesso",
        "agent_detect_failed": "Agente falhou ao detectar",
        "agent_detectredstone_success": "Agente detetour redstone com sucesso",
        "agent_detectredstone_failed": "Agente falhou ao detectar redstone",
        "agent_drop_success": "Agente derrubou com sucesso",
        "agent_drop_failed": "Agente falhou ao derrubar",
        "agent_dropall_success": "Agente derrubou tudo com sucesso",
        "agent_dropall_failed": "Agente falhou ao derrubar tudo",
        "agent_getitemcount_success": "Agente getitemcount bem-sucedido",
        "agent_getitemcount_failed": "Agente getitemcount falhou",
        "agent_getitemspace_success": "Agente getitemspace bem-sucedido",
        "agent_getitemspace_failed": "Agente getitemspace falhou",
        "agent_getitemdetail_success": "Agente getitemdetail bem-sucedido",
        "agent_getitemdetail_failed": "Agente getitemdetail falhou",
        "agent_getposition_success": "Agent executou getposition com sucesso",
        "agent_getposition_failed": "Agent falhou ao executar getposition",
        "agent_inspect_success": "Agente inspecionou com sucesso",
        "agent_inspect_failed": "Agente falhou ao inspecionar",
        "agent_inspectdata_success": "Agente inspecionou dados com sucesso",
        "agent_inspectdata_failed": "Agente falhou ao inspecionar dados",
        "agent_move_success": "Agente moveu com sucesso",
        "agent_move_failed": "Não foi possível mover o agente",
        "agent_outofrange": "Não foi possível enviar comando, agente fora do alcance",
        "agent_place_success": "Agente colocou com sucesso",
        "agent_place_failed": "Agente falhou ao colocar",
        "agent_setitem_success": "Agent executou set item com sucesso",
        "agent_setitem_failed": "Agent falhou ao executar set item",
        "agent_turn_success": "Agente virou com sucesso",
        "agent_turn_failed": "Não foi possível virar agente",
        "agent_till_success": "Agente arou com sucesso",
        "agent_till_failed": "Agente falhou ao arar",
        "agent_tpagent_description": "Teleportar seu Agente.",
        "agent_tpagent_success": "Agente teleportado",
        "agent_tpagent_failed": "Falha no teleporte do agente",
        "agent_transfer_success": "Transferência de agente bem-sucedida",
        "agent_transfer_failed": "Falha ao transferir agente",
        "always_day": "Ciclo dia/noite %1$s",
        "always_day_locked": "Ciclo dia/noite bloqueado",
        "always_day_unlocked": "Ciclo dia/noite desbloqueado",
        "ban_description": "Adiciona o jogador na lista de banimentos.",
        "autocomplete_a": "todos os jogadores",
        "autocomplete_c": "meu Agent",
        "autocomplete_e": "todas as entidades",
        "autocomplete_p": "jogador mais próximo",
        "autocomplete_r": "jogador aleatório",
        "autocomplete_s": "você mesmo",
        "autocomplete_v": "todos Agents",
        "ban_failed": "Não foi possível banir o(a) jogador(a) %1$s.",
        "ban_success": "%1$s foi banido(a)",
        "banip_description": "Adiciona o endereço de IP na lista de banimentos.",
        "banip_invalid": "Você digitou um IP inválido ou um(a) jogador(a) que não está online.",
        "banip_success": "Endereço IP banido %1$s",
        "banip_success_players": "Endereço IP banido %1$s pertencente a %2$s",
        "banlist_ips": "Existem %1$d endereços de IP banidos no total:",
        "banlist_players": "Existem %1$d jogadores(as) banidos(as) no total:",
        "blockdata_description": "Modifica a marca de dados de um bloco.",
        "blockdata_placeFailed": "Você não pode colocar blocos aqui",
        "blockdata_destroyFailed": "Você não pode cavar aqui",
        "blockdata_failed": "A tag de dados não mudou: %1$s",
        "blockdata_notValid": "O bloco de destino não armazena dados",
        "blockdata_outOfWorld": "Impossível alterar blocos fora do mundo",
        "blockdata_success": "Dados do bloco atualizados para: %1$s",
        "blockdata_tagError": "Análise da tag de dados falhou: %1$s",
        "bossbar_add_success": "Barra de chefão personalizada [%1$s]",
        "bossbar_add_failure_invalid": "A ID da barra de chefão é inválida. As IDs devem estar no formato namespace:id ou id (corresponde ao espaço do nome de Minecraft).",
        "bossbar_add_failure_exists": "Já existe uma barra de chefão com a ID '%1$s'",
        "bossbar_description": "Cria e modifica barras de chefe",
        "bossbar_get_max": "A barra de chefão personalizada [%1$s] tem o máximo de %2$d",
        "bossbar_get_players": "A barra de chefão personalizada [%1$s] tem %2$s jogadores online no momento: %3$s",
        "bossbar_get_players_none": "A barra de chefão personalizada [%1$s] não tem jogadores online no momento",
        "bossbar_get_players_one": "A barra de chefão personalizada [%1$s] tem 1 jogador online no momento: %2$s",
        "bossbar_get_value": "A barra de chefão personalizada [%1$s] tem o valor de %2$d",
        "bossbar_get_visible_true": "A barra de chefão personalizada [%1$s] está sendo exibida",
        "bossbar_get_visible_false": "A barra de chefão personalizada [%1$s] está oculta",
        "bossbar_list": "Existem %1$s barras de chefão personalizadas ativas: %2$s",
        "bossbar_list_none": "Não existem barras de chefão personalizadas ativas",
        "bossbar_list_one": "Existe 1 barra de chefão personalizada ativa: %1$s",
        "bossbar_notFound": "Não existe nenhuma barra de chefão personalizada com a ID '%1$s'",
        "bossbar_remove": "A barra de chefão personalizada [%1$s] foi removida",
        "change_setting_description": "Altera uma configuração no servidor dedicado com ele ativo.",
        "change_setting_success": "%1$s foi alterado(a)",
        "chunkinfo_compiled": "O chunk está compilado.",
        "chunkinfo_data": "Os primeiros 64 vértices são: %1$s",
        "chunkinfo_empty": "O chunk está vazio.",
        "chunkinfo_hasLayers": "O chunk tem as camadas: %1$s",
        "chunkinfo_hasNoRenderableLayers": "O chunk não tem camadas renderizáveis.",
        "chunkinfo_isEmpty": "O chunk tem as camadas vazias: %1$s",
        "chunkinfo_location": "Localização do chunk: (%1$d, %2$d, %3$d)",
        "chunkinfo_noChunk": "Nenhum chunk encontrado na posição de chunk %1$d, %2$d, %3$d",
        "chunkinfo_notCompiled": "A parte não está compilada.",
        "chunkinfo_notEmpty": "A parte não está vazia.",
        "chunkinfo_vertices": "O buffer da camada %1$s contém %2$d vértices.",
        "classroommode_description": "Tentativa de iniciar e se conectar ao Modo Sala de Aula.",
        "classroommode_success": "Tentando iniciar o Modo Sala de Aula...",
        "clear_description": "Limpa os itens do inventário do jogador.",
        "clear_failure": "Não foi possível limpar o inventário de %1$s",
        "clear_failure_no_items": "Não foi possível limpar o inventário de %1$s, não há itens para remover",
        "clear_success": "Inventário de %1$s limpo, removendo %2$d itens",
        "clear_tagError": "Análise da tag de dados falhou: %1$s",
        "clear_testing": "%1$s tem %2$d itens que correspondem ao critério",
        "clearfixedinv_description": "Remove todos os espaços fixos do inventário.",
        "clearfixedinv_success": "Limpa o inventário fixo",
        "clone_description": "Clona blocos de uma região para outra.",
        "clone_failed": "Nenhum bloco clonado",
        "clone_filtered_error": "Uso filtrado requer a especificação de um bloco de filtro",
        "clone_noOverlap": "Origem e destino não podem se sobrepor",
        "clone_outOfWorld": "Impossível acessar blocos fora do mundo",
        "clone_success": "%1$d blocos clonados",
        "clone_tooManyBlocks": "Blocos demais na área especificada (%1$d > %2$d)",
        "closechat_description": "Fecha a janela de bate-papo do jogador local se estiver aberta.",
        "closechat_success": "Bate-papo fechado",
        "closechat_failure": "O bate-papo não estava aberto",
        "closewebsocket_description": "Fecha a conexão de websocket, se houver uma.",
        "code_description": "Inicia o Criador de Código.",
        "code_success": "Criador de Código iniciado.",
        "compare_failed": "Origem e destino não são idênticos",
        "compare_outOfWorld": "Impossível acessar blocos fora do mundo",
        "compare_success": "%1$d blocos comparados",
        "compare_tooManyBlocks": "Blocos demais na área especificada (%1$d > %2$d)",
        "corruptworld_description": "Corrompe o mundo carregado no servidor.",
        "corruptworld_success": "O mundo foi corrompido.",
        "daylock_description": "Bloqueia e desbloqueia o ciclo dia-noite.",
        "debug_description": "Inicia ou interrompe uma sessão de depuração.",
        "debug_notStarted": "Não há como parar a criação de perfil se ainda nem começou!",
        "debug_start": "Criação de perfil de depuração iniciada",
        "debug_stop": "Criação de perfil debug interrompida após %.2f segundos (%1$d ticks)",
        "defaultgamemode_description": "Configura o modo de jogo padrão.",
        "defaultgamemode_success": "O modo de jogo padrão do mundo agora é %1$s",
        "deop_description": "Revoga o status do operador de um jogador.",
        "deop_failed": "Não é possível mudar a preferência (nível muito alto de permissão): %s",
        "deop_success": "Operador removido: %s",
        "deop_message": "Você foi removido como operador",
        "difficulty_description": "Configura o nível de dificuldade.",
        "difficulty_usage": "/difficulty <nova dificuldade>",
        "difficulty_success": "Dificuldade do jogo modificada para %1$s",
        "downfall_success": "Chuva/neve modificada",
        "effect_description": "Adicionar ou remover efeitos de status.",
        "effect_failure_notActive": "Não foi possível retirar %1$s de %2$s pois não há o efeito",
        "effect_failure_notActive_all": "Nenhum efeito pôde ser removido de %1$s, pois não há efeitos",
        "effect_failure_notAMob": "%1$s não pode ter efeitos",
        "effect_notFound": "Não há nenhum efeito de criatura com o ID %s",
        "effect_success": "Deu %1$s * %2$d para %3$s por %4$d segundos",
        "effect_success_removed": "%1$s retirado de %2$s",
        "effect_success_removed_all": "Todos os efeitos de %1$s foram removidos",
        "enchant_cantCombine": "%1$s não pode ser combinado com %2$s",
        "enchant_invalidLevel": "%1$s não suporta o nível %2$d",
        "enchant_cantEnchant": "O encantamento selecionado não pode ser adicionado ao item de destino: %1$s",
        "enchant_description": "Adiciona um encantamento ao item selecionado de um jogador.",
        "enchant_noItem": "O alvo não está segurando um item: %1$s",
        "enchant_notFound": "Não há um encantamento com o ID %1$d",
        "enchant_success": "Encantado com sucesso por %1$s",
        "entitydata_description": "Modifica a marca de dados de uma entidade.",
        "entitydata_failed": "A tag de dados não mudou: %1$s",
        "entitydata_noPlayers": "%1$s é um(a) jogador(a) e não pode ser alterado(a)",
        "entitydata_success": "Dados da entidade atualizados para: %1$s",
        "entitydata_tagError": "Análise da tag de dados falhou: %1$s",
        "execute_allInvocationsFailed": "Todas as invocações falharam: '%1$s'",
        "execute_failed": "Falha ao executar '%1$s' como %2$s",
        "execute_description": "Executa um comando por uma ou mais entidades.",
        "fill_description": "Preenche toda uma região ou partes dela com um bloco específico.",
        "fill_failed": "Nenhum bloco preenchido",
        "fill_outOfWorld": "Impossível colocar blocos fora do mundo",
        "fill_success": "%1$d blocos preenchidos",
        "fill_tagError": "Análise da tag de dados falhou: %1$s",
        "fill_tooManyBlocks": "Blocos demais na área especificada (%1$d > %2$d)",
        "fill_replace_auxvalue_invalid": "Valor de substituição de dados inválido para o bloco %1$s",
        "function_description": "Executa comandos encontrados no arquivo de função correspondente.",
        "function_functionNameNotFound": "Função %1$s não encontrada.",
        "function_invalidCharacters": "Função com título '%s' inválida, o caractere '%s' não é permitido em nomes de funções.",
        "function_noEngineVersionSpecified": "A função %s não pode ser executada. Você precisa especificar uma min_engine_version no manifest.json do pacote de comportamento.",
        "function_success": "Entradas da função %1$d executadas com êxito.",
        "gamemode_description": "Define o modo de jogo de um jogador.",
        "gamemode_success_other": "Modo de jogo de %2$s definido como %1$s",
        "gamemode_success_self": "Modo do próprio jogo definido como %1$s",
        "gamemode_fail_invalid": "O modo de jogo '%1$s' é inválido",
        "gamerule_description": "Define ou retorna um valor de regra",
        "gamerule_type_invalid": "Tipo inválido usado para a regra de jogo '%1$s'",
        "gamerule_type_nocheatsenabled": "A regra '%1$s' do jogo só poderá ser usada se os cheats estiverem ativados neste mundo.",
        "gamerule_nopermission": "Apenas donos de servidor podem alterar '%1$s'",
        "gamerule_norule": "Nenhuma regra de jogo chamada '%1$s' está disponível",
        "gamerule_success": "Regra de jogo %1$s foi atualizada para %2$s",
        "generic_async_initiated": "Comando '%1$s' iniciado (passo assíncrono %2$d)",
        "generic_boolean_invalid": "'%1$s' não é 'true' ou 'false'",
        "generic_chunk_notFound": "Chunk especificado não foi encontrado",
        "generic_componentError": "Falha na análise da lista de componentes",
        "generic_dimension_notFound": "Dimensão especificada não foi encontrada",
        "generic_disabled": "Cheats não estão habilitados neste nível.",
        "generic_disabled_templateLocked": "As configurações estão bloqueadas. Desbloqueie as Opções de Mundo Modelo nas Configurações do Jogo para alterá-las.",
        "generic_double_tooBig": "O número que você usou (%.2f) é muito grande, ele deve ser no máximo %.2f",
        "generic_double_tooSmall": "O número que você usou (%.2f) é muito pequeno, ele deve ser pelo menos %.2f",
        "generic_duplicateType": "Duplica os tipos de argumento",
        "generic_duplicateSelectorArgument": "Duplica o seletor de argumentos %s",
        "generic_encryption_badkey": "Chave pública incorreta fornecida. Chave esperada de 120 bytes após a formatação PEM.",
        "generic_encryption_badsalt": "Sal incorreto fornecido. Esperada uma codificação de 16 bytes antes da base 64.",
        "generic_encryption_required": "É necessária uma sessão criptografada",
        "generic_entity_invalidType": "O tipo de entidade '%1$s' é inválido",
        "generic_entity_invalidUuid": "O UUID da entidade fornecido está em um formato inválido",
        "generic_entity_notFound": "Essa entidade não pôde ser encontrada",
        "generic_exception": "Ocorreu um erro desconhecido ao tentar realizar este comando",
        "generic_invalidAgentType": "Tipo de argumento aplicado ao seletor de Agent único",
        "generic_invalidcontext": "Contexto inválido fornecido para determinado tipo de comando",
        "generic_invalidDevice": "O comando %s inserido não é compatível com esse dispositivo",
        "generic_invalidPlayerType": "Tipo de argumento aplicado ao seletor de jogador único",
        "generic_invalidType": "Tipo de argumento desconhecido",
        "generic_levelError": "O nível máximo tem que ser maior do que o nível mínimo",
        "generic_malformed_body": "Corpo ausente ou mal-formado",
        "generic_malformed_type": "Solicitaçao de tipo inválido",
        "generic_notimplemented": "Não implementado",
        "generic_num_invalid": "'%1$s' não é um número válido",
        "generic_num_tooBig": "O número que você usou (%1$d) é muito alto, precisa ser no máximo %2$d",
        "generic_num_tooSmall": "O número que você usou (%1$d) é muito baixo, precisa ser pelo menos %2$d",
        "generic_parameter_invalid": "'%1$s' não é um parâmetro válido",
        "generic_permission_selector": "<permissões insuficientes para a expansão do seletor>",
        "generic_player_notFound": "Esse(a) jogador(a) não pôde ser encontrado(a)",
        "generic_protocol_mismatch": "Versão de protocolo fornecida não combina com a versão de protocolo do Minecraft",
        "generic_radiusError": "O raio mínimo do seletor deve ser",
        "generic_radiusNegative": "O raio não pode ser negativo",
        "generic_rotationError": "Rotação fora de abrangência",
        "generic_running": "O comando já está sendo executado",
        "generic_step_failed": "Falha no passo de comando",
        "generic_syntax": "Erro de sintaxe: \"%2$s\": inesperado em \"%1$s»%2$s«%3$s\"",
        "generic_noTargetMatch": "Sem resultados para a busca",
        "generic_targetNotPlayer": "Seletor deve ser tipo de jogador",
        "generic_tooManyNames": "Muitos nomes de argumentos de destino",
        "generic_tooManyTargets": "Muitos destinos combinam com co seletor",
        "generic_too_many_requests": "Comandos excessivos na fila, aguarde a conclusão do próximo",
        "generic_unknown": "Comando desconhecido: %s. Verifique se o comando existe e se você tem permissão para usá-lo.",
        "generic_usage": "Uso: %1$s",
        "generic_usage_noparam": "Uso:",
        "generic_version_mismatch": "A versão solicitada não existe para este comando",
        "generic_version_missing": "As chamadas de comando que não são do bate-papo devem especificar a versão do comando",
        "getchunkdata_description": "Retorna pixels para um chunk específico.",
        "getchunkdata_success": "Dados de chunk recebidos",
        "getchunks_description": "Retorna lista de chunks carregados.",
        "getchunks_success": "Lista de chunks recebida",
        "getlocalplayername_description": "Retorna o nome do(a) jogador(a) local.",
        "getspawnpoint_description": "Retorna a posição de renascimento do(s) jogador(es) especificado(s).",
        "gettopsolidblock_description": "Pega a posição do primeiro bloco não aéreo abaixo da posição especificada",
        "gettopsolidblock_notfound": "Não há blocos sólidos abaixo da posição especificada",
        "give_block_notFound": "Não há nenhum bloco com o nome: %1$d",
        "give_description": "Dá um item a um jogador.",
        "give_item_invalid": "Sintaxe de comando inválida: não existe %s com esse valor de dados",
        "give_item_notFound": "Não há nenhum item com o nome: %1$d",
        "give_map_invalidData": "O mapa de dados fornecido é inválido",
        "give_map_featureNotFound": "Não foi possível criar o mapa de exploração. Recurso não disponível nesta dimensão",
        "give_success": "Deu %1$s * %2$d para %3$s",
        "give_successRecipient": "Você recebeu %1$s * %2$d",
        "give_tagError": "Análise da tag de dados falhou: %1$s",
        "help_description": "Fornece ajuda/lista de comandos.",
        "help_footer": "Dica: Use a tecla <tab> enquanto digita um comando para autocompletar o comando ou seus argumentos",
        "help_header": "--- Mostrando página %1$d de %2$d (/help <página>) ---",
        "help_command_aliases": "%s (também %s):",
        "immutableworld_description": "Define o estado imutável do mundo.",
        "immutableworld_info": "immutableworld = %s",
        "kick_description": "Expulsa um jogador do servidor.",
        "kick_description_edu": "Remove um jogador do jogo.",
        "kick_not_found": "Não foi possível encontrar o(a) jogador(a) %1$s",
        "kick_not_yourself": "Você não pode se remover do jogo",
        "kick_success": "%1$s foi expulso(a) do jogo",
        "kick_success_reason": "%1$s foi expulso(a) do jogo: '%2$s'",
        "kick_success_reasonedu": "Removeu %1$s do jogo: \"%2$s\"",
        "kick_no_host": "O anfitrião não pode ser expulso do jogo.",
        "kick_no_teacher": "Os professores não podem ser removidos do jogo.",
        "kill_successful_edu": "Removeu %1$s",
        "kill_successful": "%1$s eliminado(a)",
        "kill_description_edu": "Remove entidades (jogadores, criaturas, etc.).",
        "kill_description": "Mata entidades (jogadores, criaturas, etc.).",
        "list_description": "Lista os jogadores no servidor.",
        "locate_description": "Exibe as coordenadas para a estrutura mais próxima de um determinado tipo.",
        "locate_fail_noplayer": "O comando só pode ser usado por um jogador válido",
        "locate_fail_nostructurefound": "Nenhuma estrutura válida encontrada nesta dimensão",
        "locate_success": "O %1$s mais próximo está no bloco %2$s, (y?), %3$s",
        "togglecontentlog_toggle": "Ativa/Desativa o comando de registro de conteúdo",
        "togglecontentlog_enabled": "Registo de Conteúdo Ativado",
        "togglecontentlog_disabled": "Registro de Conteúdo Desativado",
        "me_description": "Exibe uma mensagem sobre você.",
        "message_display_incoming": "%1$s sussurrou para você: %2$s",
        "message_display_outgoing": "Você sussurrou para %1$s: %2$s",
        "message_sameTarget": "Você não pode enviar uma mensagem privada para si mesmo!",
        "mixer_description": "Controle de Interatividade do Mixer",
        "mixer_error_unknown": "Ocorreu um erro desconhecido no Mixer.",
        "mixer_error_notoken": "Você precisa entrar com a conta da Microsoft para ativar a interatividade do Mixer.",
        "mixer_error_notsupported": "O dispositivo que você está usando não é compatível com a Interatividade do Mixer.",
        "mixer_interactive_error": "Ocorreu um erro no Mixer: %1$s",
        "mixer_scene_failed": "Não existe nenhuma cena chamada %1$s. Verifique se você inseriu o nome da cena corretamente.",
        "mixer_scene_success": "A cena mudou para: %1$s",
        "mixer_start_success": "Iniciando Interatividade do Mixer: %1$s",
        "mixer_start_fail_invalidCode": "Não foi possível encontrar o projeto com o ID \"%1$s\". Verifique se o ID ou o código de compartilhamento está correto.",
        "mixer_stop_success": "A interação do Mixer foi interrompida.",
        "mixer_stop_fail": "Não há nenhuma sessão interativa para encerrar.",
        "mixer_status_notinitialized": "A Interatividade não foi iniciada.",
        "mixer_status_enabled": "A Interatividade está ativada.",
        "mixer_status_initializing": "Inicializando Interatividade.",
        "mixer_status_pending": "A Interatividade está pendente.",
        "mixer_status_disabled": "A Interatividade está desativada.",
        "mixer_activatedbutton": "%1$s ativou %2$s.",
        "mobevent_description": "Controla quais eventos de criaturas podem ser executados.",
        "mobevent_eventsEnabledSetToTrue": "Os eventos de criaturas agora estão ativados. Os eventos individuais que estão configurados como falsos não serão executados.",
        "mobevent_eventsEnabledSetToFalse": "Os eventos de criaturas agora estão desativados. Os eventos individuais não serão executados.",
        "mobevent_eventsEnabledIsTrue": "Os eventos de criaturas estão ativados. Os eventos individuais que estão configurados como falsos não serão executados.",
        "mobevent_eventsEnabledIsFalse": "Os eventos de criaturas estão desativados. Os eventos individuais não serão executados.",
        "mobevent_eventSetToTrue": "Evento de criatura %s (id: %s) configurado como verdadeiro.",
        "mobevent_eventSetToTrueButEventsDisabled": "Evento de criatura %s (id: %s) configurado como verdadeiro, mas os eventos de criaturas estão desativados.",
        "mobevent_eventSetToFalse": "Evento de criatura %s (id: %s) configurado como falso.",
        "mobevent_eventIsTrue": "O evento de criatura %s (id: %s) está configurado como verdadeiro.",
        "mobevent_eventIsTrueButEventsDisabled": "O evento de criatura %s (id: %s) está configurado como verdadeiro, mas os eventos de criaturas estão desativados.",
        "mobevent_eventIsFalse": "O evento de criatura %s (id: %s) está configurado como falso.",
        "op_description": "Atribui o status do operador a um jogador.",
        "op_failed": "Não foi possível definir operador (já é operador ou acima): %s",
        "op_success": "Operador definido: %s",
        "op_message": "Você foi listado como operador",
        "origin_commandblock": "CommandBlock",
        "origin_external": "Externo",
        "origin_devconsole": "DevConsole",
        "origin_script": "Mecanismo de Script",
        "origin_server": "Servidor",
        "origin_teacher": "Professor",
        "ops_description": "Recarrega e aplica permissões de operadores.",
        "ops_reloaded": "Operadores carregados do arquivo.",
        "ops_set_success": "Sucesso ao definir o nível de operador para o jogador %s.",
        "permissions_description": "Recarrega e aplica permissões.",
        "permissions_reloaded": "Permissões recarregadas do arquivo.",
        "permissions_set_failed": "Não foi possível definir o nível de permissão %s para o jogador %s.",
        "permissions_set_success": "Sucesso ao definir o nível de permissão %s para o jogador %s.",
        "permissions_save_failed": "Não foi possível salvar o nível de permissão %s para o jogador %s.",
        "permissions_save_success": "Sucesso ao salvar o nível de permissão %s para o jogador %s.",
        "spawnParticleEmitter_description": "Cria um emissor de partículas",
        "particle_description": "Cria partículas.",
        "particle_notFound": "Nome do efeito desconhecido (%1$s)",
        "particle_success": "Reproduzindo efeito %1$s por %2$d vezes",
        "players_list": "Existem %1$d/%2$d jogadores(as) online:",
        "players_list_names": "%s",
        "playsound_description": "Toca um som.",
        "playsound_playerTooFar": "O(A) jogador(a) %1$s está muito longe para ouvir o som",
        "playsound_success": "Som '%1$s' reproduzido para %2$s",
        "position_description": "Liga e desliga coordenadas para o jogador.",
        "publish_failed": "Não foi possível hospedar o jogo local",
        "publish_started": "Jogo local hospedado na porta %1$s",
        "querytarget_description": "Retorna transform, nome e informação de id sobre a(s) entidade(s) alvo.",
        "querytarget_success": "Dados do alvo: %1$s",
        "reload_description": "Recarrega todos os arquivos de função de todos os pacotes de comportamentos.",
        "reload_success": "Os arquivos de função existentes foram recarregados. Reinicie o Minecraft para recarregar NOVAS funções.",
        "replaceitem_description": "Substitui os itens nos inventários.",
        "replaceitem_failed": "Não foi possível substituir o slot %s %d por %d * %s",
        "replaceitem_keepFailed": "Já existe um item ocupando %s no espaço %d.",
        "replaceitem_noContainer": "O bloco em %s não é um recipiente",
        "replaceitem_badSlotNumber": "Não foi possível substituir o slot %d, deve ser um valor entre %d e %d.",
        "replaceitem_success": "Slot %s %d substituído por %d * %s",
        "replaceitem_success_entity": "Slot %s substituído %d de %s com %d * %s",
        "replaceitem_tagError": "Análise da tag de dados falhou: %1$s",
        "save_description": "Contola ou verifica os dados salvos do jogo no disco.",
        "save_disabled": "Salvamento automático do mundo desativado",
        "save_enabled": "Salvamento automático do mundo ativado",
        "save_failed": "Falha ao salvar: %1$s",
        "save_start": "Salvando...",
        "save_success": "Mundo salvo",
        "save_all_error": "Houve um erro ao tentar pausar o armazenamento de nível.",
        "save_all_success": "Dados salvos. Arquivos prontos para serem copiados.",
        "save_off_alreadyOff": "O salvamento já está desativado.",
        "save_on_alreadyOn": "O salvamento já está ativado.",
        "save_on_notDone": "Não há salvamento anterior.",
        "save_on_description": "Permite a gravação automática do servidor.",
        "save_on_success": "Mudanças ao nível foram resumidas.",
        "save_state_description": "Verifica se o salvamento anterior de tudo foi concluído e lista os arquivos envolvidos.",
        "say_description": "Envia uma mensagem a outros jogadores no bate-papo.",
        "scoreboard_description": "Tracks and displays scores for various objectives.",
        "scoreboard_allMatchesFailed": "Falhas em todas as correspondências",
        "scoreboard_noMultiWildcard": "Apenas um usuário curinga permitido",
        "scoreboard_objectiveNotFound": "Nenhum objetivo foi encontrado com o nome de '%1$s'",
        "scoreboard_objectiveReadOnly": "O objetivo '%1$s' é somente leitura e não pode ser alterado",
        "scoreboard_objectives_add_alreadyExists": "Um objetivo com o nome '%1$s' já existe",
        "scoreboard_objectives_add_displayTooLong": "O nome de exibição '%1$s' é muito longo para um objetivo; ele deve ter no máximo %2$d caracteres",
        "scoreboard_objectives_add_success": "Novo objetivo '%1$s' adicionado com sucesso",
        "scoreboard_objectives_add_tooLong": "O nome '%1$s' é muito longo para um objetivo; ele deve ter até %2$d caracteres",
        "scoreboard_objectives_add_wrongType": "Tipo de critério '%1$s' do objetivo inválido",
        "scoreboard_objectives_add_needName": "Um objetivo precisa de nome.",
        "scoreboard_objectives_description": "Modifique os objetivos da tabela de pontuação.",
        "scoreboard_objectives_list_count": "Mostrando %1$d objetivo(s) no placar:",
        "scoreboard_objectives_list_empty": "Não há objetivos no placar",
        "scoreboard_objectives_list_entry": "- %1$s: exibido como '%2$s' e é do tipo '%3$s'",
        "scoreboard_objectives_remove_success": "Objetivo '%1$s' removido com sucesso",
        "scoreboard_objectives_setdisplay_invalidSlot": "Slot de exibição '%1$s' não existe",
        "scoreboard_objectives_setdisplay_successCleared": "O slot de exibição de objetivo '%1$s' foi limpo",
        "scoreboard_objectives_setdisplay_successSet": "Defina objetivo de exibição no slot '%1$s' como '%2$s'",
        "scoreboard_players_add_success": "Adicionou %1$d a [%2$s] para %3$s (agora, %4$d)",
        "scoreboard_players_add_multiple_success": "Adicionou %1$d a [%2$s] para %3$d indivíduos",
        "scoreboard_players_nameNotFound": "É necessário inserir um nome de jogador.",
        "scoreboard_players_enable_noTrigger": "O objetivo %1$s não é um gatilho",
        "scoreboard_players_enable_success": "Gatilho %1$s habilitado para %2$s",
        "scoreboard_players_list_count": "Mostrando %1$d jogadores marcados no placar:",
        "scoreboard_players_list_empty": "Não existem jogadores marcados no placar",
        "scoreboard_players_list_player_count": "Mostrando %1$d objetivo(s) marcado(s) para %2$s:",
        "scoreboard_players_list_player_empty": "O jogador %1$s não tem pontuações registradas",
        "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_players_operation_invalidOperation": "Operação %1$s inválida",
        "scoreboard_players_operation_notFound": "Nenhuma pontuação %1$s para %2$s encontrada",
        "scoreboard_players_operation_success": "Atualizou [%1$s] para %2$d indivíduos",
        "scoreboard_players_offlinePlayerName": "Jogador Offline",
        "scoreboard_players_random_invalidRange": "Mínimo de %1$d não é menos que o máximo de %2$d",
        "scoreboard_players_remove_success": "Removeu %1$d de [%2$s] para %3$s (agora, %4$d)",
        "scoreboard_players_remove_multiple_success": "Removeu %1$d de [%2$s] para %3$d indivíduos",
        "scoreboard_players_reset_success": "Redefina as pontuações do jogador %1$s",
        "scoreboard_players_resetscore_success": "Redefina a pontuação de %1$s do jogador %2$s",
        "scoreboard_players_set_success": "Define [%1$s] de %2$s como %3$d",
        "scoreboard_players_set_multiple_success": "Define [%1$s] de %2$d indivíduos como %3$d",
        "scoreboard_players_set_tagError": "Não foi possível analisar dataTag, motivo: %1$s",
        "scoreboard_players_set_tagMismatch": "A dataTag não corresponde a %1$s",
        "scoreboard_players_score_notFound": "Nenhuma pontuação %1$s para %2$s encontrada",
        "scoreboard_players_test_failed": "Pontuação %1$d NÃO está na faixa de %2$d a %3$d",
        "scoreboard_players_test_success": "Pontuação %1$d está na faixa de %2$d a %3$d",
        "scoreboard_teamNotFound": "Nenhuma equipe foi encontrada com o nome de '%1$s'",
        "scoreboard_teams_add_alreadyExists": "Uma equipe com o nome '%1$s' já existe",
        "scoreboard_teams_add_displayTooLong": "O nome de exibição '%1$s' é muito longo para uma equipe; ele deve ter até %2$d caracteres",
        "scoreboard_teams_add_success": "Nova equipe '%1$s' adicionada com sucesso",
        "scoreboard_teams_add_tooLong": "O nome '%1$s' é muito longo para uma equipe; ele deve ter até %2$d caracteres",
        "scoreboard_teams_empty_alreadyEmpty": "A equipe %1$s já está vazia; não é possível remover jogadores inexistentes",
        "scoreboard_teams_empty_success": "Removido(s) %1$d jogador(es) da equipe %2$s",
        "scoreboard_teams_join_failure": "Não foi possível adicionar %1$d jogador(es) à equipe %2$s: %3$s",
        "scoreboard_teams_join_success": "Adicionado(s) %1$d jogador(es) à equipe %2$s: %3$s",
        "scoreboard_teams_leave_failure": "Não foi possível remover %1$d jogador(es) das equipes: %2$s",
        "scoreboard_teams_leave_noTeam": "Você não está em uma equipe",
        "scoreboard_teams_leave_success": "Removido(s) %1$d jogador(es) das equipes: %2$s",
        "scoreboard_teams_list_count": "Exibindo %1$d equipes no placar:",
        "scoreboard_teams_list_empty": "Não há equipes registradas no placar",
        "scoreboard_teams_list_entry": "- %1$s: '%2$s' possui %3$d jogadores",
        "scoreboard_teams_list_player_count": "Exibindo %1$d jogador(es) na equipe %2$s:",
        "scoreboard_teams_list_player_empty": "A equipe %1$s não possui jogadores",
        "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_teams_option_noValue": "Os valores válidos para a opção %1$s são: %2$s",
        "scoreboard_teams_option_success": "Defina a opção %1$s da equipe %2$s como %3$s",
        "scoreboard_teams_remove_success": "Equipe %1$s removida",
        "seed_success": "Semente: %1$s",
        "setblock_description": "Altera um bloco para outro bloco.",
        "setblock_failed": "Não foi possível colocar o bloco",
        "setblock_noChange": "O bloco não pôde ser colocado",
        "setblock_notFound": "Não existe um bloco com ID/nome %1$s",
        "setblock_outOfWorld": "Impossível colocar o bloco fora do mundo",
        "setblock_success": "Bloco colocado",
        "setblock_tagError": "Análise da tag de dados falhou: %1$s",
        "setidletimeout_success": "Definido com êxito o tempo de inatividade para %1$d minutos.",
        "setfixedinvslots_description": "Define o número de espaços fixos de inventário para o servidor.",
        "setfixedinvslots_success": "Número de slots fixos do inventário definidos para %1$d",
        "setfixedinvslot_description": "Associa um espaço fixado a um item específico.",
        "setfixedinvslot_success": "Slot de inventário fixo %1$d associado a %2$s",
        "globalpause_description": "Define ou retorna o estado pausado do jogo para todos os jogadores.",
        "globalpause_success": "Definir ou pegar estado de pausa",
        "setmaxplayers_description": "Define o número máximo de jogadores para essa sessão de jogo.",
        "setmaxplayers_success": "Define o máximo de jogadores em %1$d.",
        "setmaxplayers_success_upperbound": "(Dependente do máximo de conexões permitidas)",
        "setmaxplayers_success_lowerbound": "(Dependente do contador de jogares atual)",
        "setworldspawn_description": "Define a geração do mundo.",
        "setworldspawn_success": "Ponto de renascimento do mundo definido para (%1$d, %2$d, %3$d)",
        "setworldspawn_wrongDimension": "O renascimento do mundo não pode ser definido nesta dimensão",
        "spawnpoint_success_single": "Ponto de renascimento de %1$s definido para (%2$d, %3$d, %4$d)",
        "spawnpoint_description": "Define o ponto de geração para um jogador.",
        "spawnpoint_success_multiple_specific": "Definir ponto de renascimento de %1$s para (%2$d, %3$d, %4$d)",
        "spawnpoint_success_multiple_generic": "Definir ponto de renascimento para %1$s",
        "spawnpoint_wrongDimension": "O ponto de invocação não pode ser definido nesta dimensão",
        "spreadplayers_description": "Teletransporta as entidades para locais aleatórios.",
        "spreadplayers_failure_players": "Não foi possível espalhar %1$s jogadores(as) ao redor de %2$s,%3$s (são muitos para o espaço - tente usar propagação de no máximo %4$s)",
        "spreadplayers_failure_teams": "Não foi possível espalhar %1$s times ao redor de %2$s,%3$s (são muitos para o espaço - tente usar propagação de no máximo %4$s)",
        "spreadplayers_info_players": "(A distância média entre os/as jogadores/as é de %1$s blocos após %2$s iterações)",
        "spreadplayers_info_teams": "(A distância média entre os times é de %1$s blocos após %2$s iterações)",
        "spreadplayers_spreading_players": "Espalhando %1$s jogadores(as) %2$s blocos ao redor de %3$s,%4$s (mín. %5$s blocos de distância)",
        "spreadplayers_spreading_teams": "Espalhando %1$s times %2$s blocos ao redor de %3$s,%4$s (mín. %5$s blocos de distância)",
        "spreadplayers_success_players": "Espalhados com sucesso %1$s jogadores(as) ao redor de %2$s,%3$s",
        "spreadplayers_success_teams": "%1$s times espalhados com sucesso ao redor de %2$s,%3$s",
        "stats_cleared": "Status de %1$s limpo",
        "stats_failed": "Parâmetros inválidos",
        "stats_noCompatibleBlock": "O bloco em %1$d, %2$d, %3$d não pode rastrear status",
        "stats_success": "Armazenando status %1$s em %2$s de %3$s",
        "stop_description": "Interrompe o servidor.",
        "stop_start": "Parando o servidor",
        "stopsound_description": "Para um som.",
        "stopsound_success": "Som interrompido %s para %s",
        "stopsound_success_all": "Interrompe todos os sons para %s",
        "summon_description": "Invoca uma entidade.",
        "summon_failed": "Não foi possível invocar o objeto",
        "summon_outOfWorld": "Impossível invocar o objeto fora do mundo",
        "summon_success": "Objeto invocado com êxito",
        "summon_tagError": "Análise da tag de dados falhou: %1$s",
        "tag_description": "Gerencia as marcas armazenadas em entidades.",
        "tag_add_failed": "O destino já tem a marca ou tem marcas demais",
        "tag_add_success_single": "Adição da marca '%1$s' a %2$s",
        "tag_add_success_multiple": "Adição da marca '%1$s' para %2$d entidades",
        "tag_list_single_empty": "%s não tem marcas",
        "tag_list_single_success": "%1$s tem %2$d marcas: %3$s",
        "tag_list_multiple_empty": "Não há marcas nas %d entidades",
        "tag_list_multiple_success": "As %1$d entidades têm um total de %2$d marcas: %3$s",
        "tag_remove_failed": "O destino não tem esta marca",
        "tag_remove_success_single": "Remoção da marca '%1$s' de %2$s",
        "tag_remove_success_multiple": "Remoção da marca '%1$s' de %2$d entidades",
        "tell_description": "Envia uma mensagem privada a um ou mais jogadores.",
        "tellraw_description": "Envia uma mensagem JSON aos jogadores.",
        "tellraw_jsonException": "Json inválido: %1$s",
        "tellraw_jsonStringException": "Dados de segmento de JSON inválidos.",
        "tellraw_error_noData": "Nenhum dado foi fornecido.",
        "tellraw_error_notArray": "Objeto rawtext deve conter um array. Exemplo: \"rawtext\":[{..}]",
        "tellraw_error_textNotString": "O campo 'text' em rawtext deve conter uma string. Exemplo: \"rawtext\":[{\"text\": \"text to display\"}]",
        "tellraw_error_translateNotString": "O campo 'translate' em rawtext deve conter uma chave de linguagem. Exemplo: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
        "tellraw_error_withNotArrayOrRawText": "O campo with em rawtext deve conter um array ou outro objeto rawtext. Exemplo 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Exemplo 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
        "tellraw_error_itemIsNotObject": "O valor Json no array do rawtext não era um objeto. Exemplo: \"rawtext\": [{ \"text\" : \"my text\" }]",
        "educlientinfo_description": "Pegar a ID de tenant e o status do host. Para o CM.",
        "testfor_description": "Conta as entidades (jogadores, criaturas, itens, etc.) adequando-se às condições específicas.",
        "testfor_failure": "%1$s não coincide com a estrutura de dados necessária",
        "testfor_success": "%1$s encontrado(a)",
        "testfor_tagError": "Análise da tag de dados falhou: %1$s",
        "testforblock_description": "Testa se um determinado bloco está em um local específico.",
        "testforblock_failed_data": "O bloco em %1$d,%2$d,%3$d não correspondeu ao estado esperado do bloco.",
        "testforblock_failed_nbt": "O bloco em %1$d,%2$d,%3$d não tinha as chaves de NBT necessárias.",
        "testforblock_failed_tile": "O bloco em %1$d,%2$d,%3$d é %4$s (esperado: %5$s).",
        "testforblock_failed_tileEntity": "O bloco em %1$d,%2$d,%3$d não é uma entidade e não suporta a tag correspondente.",
        "testforblock_outOfWorld": "Impossível testar bloco fora do mundo",
        "testforblock_success": "Encontrado com êxito o bloco em %1$d,%2$d,%3$d.",
        "testforblocks_description": "Testa se os blocos em duas regiões se correspondem.",
        "tickingarea_description": "Adicionar, remover ou listar áreas de acionamento.",
        "tickingarea_inuse": "%1$d/%2$d áreas de acionamento em uso.",
        "tickingarea_noneExist_currentDimension": "Não existem áreas de acionamento nesta dimensão.",
        "tickingarea_add_bounds_success": "Área de acionamento adicionada de %1$d até %2$d.",
        "tickingarea_add_circle_success": "Área de acionamento centralizada em %1$d com raio de %2$d chunks.",
        "tickingarea_add_failure": "O número máximo de áreas de acionamento (%1$d) já foi atingido. Não é possível adicionar mais áreas de acionamento.",
        "tickingarea_add_conflictingname": "Já existe uma área de acionamento com o nome %1$s.",
        "tickingarea_add_chunkfailure": "A área de acionamento contém mais de %1$d chunks. Ela é grande demais e não pode ser criada.",
        "tickingarea_add_radiusfailure": "O raio não pode ter mais de %1$d, a área de acionamento é grande demais e não pode ser criada.",
        "tickingarea_remove_success": "Área(s) de acionamento removida(s)",
        "tickingarea_remove_failure": "Não existe nenhuma área de acionamento contendo a posição de bloco %1$d nesta dimensão.",
        "tickingarea_remove_byname_failure": "Não existe nenhuma área de acionamento chamada %1$s nesta dimensão.",
        "tickingarea_remove_all_success": "Área(s) de acionamento removida(s)",
        "tickingarea_remove_all_failure": "Não existem áreas de acionamento nesta dimensão.",
        "tickingarea_list_chunks": "chunks",
        "tickingarea_list_circle_radius": "Raio",
        "tickingarea_list_success_currentDimension": "Lista de todas as áreas de acionamento na dimensão atual",
        "tickingarea_list_success_allDimensions": "Lista de todas as áreas de acionamento em todas as dimensões",
        "tickingarea_list_failure_allDimensions": "Não existem áreas de acionamento em nenhuma dimensão.",
        "tickingarea_list_to": "para",
        "tickingarea_list_type_circle": "Círculo",
        "time_added": "Adicionado %1$d ao tempo",
        "time_description": "Altera ou consulta o horário do jogo do mundo.",
        "time_disabled": "Sempre Dia está habilitado neste nível.",
        "time_query_day": "Dia é %d",
        "time_query_daytime": "Durante o dia é %d",
        "time_query_gametime": "Tempo do jogo é %d",
        "time_set": "Tempo mudado para %1$d",
        "time_stop": "Tempo %1$s",
        "title_description": "Controla os títulos da tela.",
        "title_success": "Comando de título executado com sucesso",
        "titleraw_description": "Controla títulos de tela com mensagens de JSON.",
        "toggledownfall_description": "Alterna o clima.",
        "tp_description": "Teleporta entidades (jogadores, criaturas, etc.).",
        "tp_notSameDimension": "Não é possível teleportar pois os(as) jogadores(as) não estão na mesma dimensão",
        "tp_outOfWorld": "Não é possível teletransportar as entidades para fora do mundo",
        "tp_permission": "Você não tem permissão para usar este comando de barra.",
        "tp_safeTeleportFail": "Não foi possível teleportar %1$s para %2$s, pois a área não está livre de blocos.",
        "tp_far": "Não foi possível teleportar %1$s para a área descarregada em %2$s",
        "tp_success": "%1$s teletransportado(a) para %2$s",
        "tp_successVictim": "Você foi teleportado(a) para %1$s",
        "tp_success_coordinates": "Teletransportado(a) %1$s para  %2$s, %3$s, %4$s",
        "transferserver_description": "Transfere um jogador para outro servidor.",
        "transferserver_successful": "Jogador transferido",
        "transferserver_invalid_port": "Porta inválida (0-65535)",
        "trigger_description": "Configura um gatilho para ser ativado.",
        "trigger_disabled": "O gatilho %1$s não está habilitado",
        "trigger_invalidMode": "Modo de gatilho %1$s inválido",
        "trigger_invalidObjective": "Nome de gatilho %1$s inválido",
        "trigger_invalidPlayer": "Apenas jogadores(as) podem usar o comando /trigger",
        "trigger_success": "Gatilho %1$s alterado para %2$s %3$s",
        "unban_failed": "Não foi possível desbanir o(a) jogador(a) %1$s",
        "unban_success": "%1$s foi desbanido(a)",
        "unbanip_invalid": "Você digitou um endereço IP inválido",
        "unbanip_success": "Endereço IP desbanido: %1$s",
        "validategamelighting_description": "Validar a iluminação do jogo para uma região especificada",
        "validategamelighting_checkRegionTooBig": "Região para verificar a iluminação é muito grande! (%1$d > %2$d)",
        "validategamelighting_outOfWorld": "Não é possível verificar a iluminação fora do mundo",
        "weather_clear": "Mudando para tempo limpo",
        "weather_description": "Define o clima.",
        "weather_disabled": "O Ciclo Climático não está habilitado neste nível.",
        "weather_query": "A situação climárica é: %s",
        "weather_query_clear": "limpa",
        "weather_query_rain": "chuva",
        "weather_query_thunder": "trovão",
        "weather_rain": "Mudando para tempo chuvoso",
        "weather_thunder": "Mudando para chuva e trovões",
        "whitelist_add_failed": "Não foi possível adicionar %1$s à whitelist",
        "whitelist_add_success": "%1$s foi adicionado(a) à whitelist",
        "whitelist_description": "Gerencia a lista de permissões do servidor.",
        "whitelist_disabled": "Whitelist desativada",
        "whitelist_enabled": "Whitelist ativada",
        "whitelist_list": "Existem %1$d (de %2$d vistos) jogadores(as) na whitelist:",
        "whitelist_reloaded": "Whitelist recarregada a partir do arquivo",
        "whitelist_remove_failed": "Não foi possível remover %1$s da whitelist",
        "whitelist_remove_success": "%1$s foi removido(a) da whitelist",
        "world_age_description": "Altera ou consulta a idade do mundo (tempo desde a criação).",
        "world_age_added": "Adição de %1$d à idade do mundo",
        "world_age_query": "A idade do mundo é %d",
        "world_age_set": "Define a idade do mundo como %1$d",
        "worldborder_center_success": "Centro do limite do mundo definido para %1$s,%2$s",
        "worldborder_damage_amount_success": "Quantidade de dano do limite de mundo definida para %1$s por bloco (de %2$s por bloco)",
        "worldborder_damage_buffer_success": "Área segura contra dano de limite de mundo definida para %1$s blocos (de %2$s blocos)",
        "worldborder_get_success": "Atualmente o limite do mundo é de %1$s blocos de extensão",
        "worldborder_set_success": "Limite do mundo definido para %1$s blocos de extensão (de %2$s blocos)",
        "worldborder_setSlowly_grow_success": "Expandindo o limite do mundo para %1$s blocos de extensão (de %2$s blocos) em %3$s segundos",
        "worldborder_setSlowly_shrink_success": "Encolhendo o limite do mundo para %1$s blocos de extensão (de %2$s blocos) em %3$s segundos",
        "worldborder_warning_distance_success": "Aviso de limite de mundo definido para %1$s blocos de distância (de %2$s blocos)",
        "worldborder_warning_time_success": "Aviso de limite de mundo definido para %1$s segundos de distância (de %2$s segundos)",
        "worldbuilder_description": "Alternar status de Construtor de Mundo do chamador.",
        "worldbuilder_success": "Status de Construtor do Mundo atualizado para %1$s",
        "wsserver_description": "Tenta se conectar ao servidor websocket na URL fornecida.",
        "wsserver_invalid_url": "A URL fornecida é inválida",
        "wsserver_request_existing": "Outra solicitação de conexão já está em andamento",
        "wsserver_request_failed": "Não foi possível se conectar ao servidor: %1$s",
        "wsserver_success": "Conexão estabelecida com o servidor: %1$s",
        "xp_description": "Adiciona ou remove experiência a um jogador.",
        "xp_failure_widthdrawXp": "Não é possível dar pontos de experiência negativos ao(à) jogador(a)",
        "xp_success": "%1$d de experiência dada para %2$s",
        "xp_success_levels": "%1$d níveis dados para %2$s",
        "xp_success_negative_levels": "%1$d níveis retirados de %2$s"
    },
    item:{
        "air": [
            "Ar"
        ],
        "apple": [
            "Maçã"
        ],
        "golden_apple": [
            "Maçã Dourada"
        ],
        "appleenchanted": [
            "Maçã Encantada"
        ],
        "armor_stand": [
            "Suporte de Armaduras"
        ],
        "arrow": [
            "Flecha"
        ],
        "tipped_arrow": [
            "Flecha com ponta"
        ],
        "banner": [
            "Estandarte Preto",
            "Estandarte Preto",
            "Estandarte Vermelho",
            "Estandarte Verde",
            "Estandarte Marrom",
            "Estandarte Azul",
            "Estandarte Lilás",
            "Estandarte Ciano",
            "Estandarte Cinza Claro",
            "Estandarte Cinza",
            "Estandarte Rosa",
            "Estandarte Verde Limão",
            "Estandarte Amarelo",
            "Estandarte Azul Claro",
            "Estandarte Magenta",
            "Estandarte Laranja",
            "Estandarte Branco"
        ],
        "bed": [
            "Cama",
            "Cama Branca",
            "Cama Laranja",
            "Cama Magenta",
            "Cama Azul-claro",
            "Cama Amarela",
            "Cama Verde-limão",
            "Cama Rosa",
            "Cama Cinza",
            "Cama Cinza-claro",
            "Cama Ciano",
            "Cama Lilás",
            "Cama Azul",
            "Cama Marrom",
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
            "Pó de Chamas"
        ],
        "blaze_rod": [
            "Vara Incandescente"
        ],
        "boat": [
            "Barco de Carvalho",
            "Barco de Carvalho",
            "Barco de Abeto",
            "Barco de Bétula",
            "Barco de Selva",
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
            "Botas de Cota de Malha"
        ],
        "leather_boots": [
            "Botas de Couro"
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
            "Vasilha"
        ],
        "bread": [
            "Pão"
        ],
        "brewing_stand": [
            "Suporte de Poções"
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
            "Balde de bacalhau"
        ],
        "bucketSalmon": [
            "Balde de salmão"
        ],
        "bucketTropical": [
            "Balde de peixe tropical"
        ],
        "bucketPuffer": [
            "Balde de baiacu"
        ],
        "bucketCustomFish": [
            "Balde de"
        ],
        "tropicalColorWhite": [
            "Branco"
        ],
        "tropicalColorOrange": [
            "Laranja"
        ],
        "tropicalColorMagenta": [
            "Magenta"
        ],
        "tropicalColorSky": [
            "Azul-celeste"
        ],
        "tropicalColorYellow": [
            "Amarelo"
        ],
        "tropicalColorLime": [
            "Lima"
        ],
        "tropicalColorRose": [
            "Rosa"
        ],
        "tropicalColorGray": [
            "Cinza"
        ],
        "tropicalColorSilver": [
            "Prata"
        ],
        "tropicalColorTeal": [
            "Verde-azulado"
        ],
        "tropicalColorPlum": [
            "Ameixa"
        ],
        "tropicalColorBlue": [
            "Azul"
        ],
        "tropicalColorBrown": [
            "Marrom"
        ],
        "tropicalColorGreen": [
            "Verde"
        ],
        "tropicalColorRed": [
            "Vermelho"
        ],
        "tropicalBodyKobSingle": [
            "Kob %1$s"
        ],
        "tropicalBodySunstreakSingle": [
            "Raio de sol %1$s"
        ],
        "tropicalBodySnooperSingle": [
            "Xereta %1$s"
        ],
        "tropicalBodyDasherSingle": [
            "Corredor %1$s"
        ],
        "tropicalBodyBrinelySingle": [
            "Salmoura %1$s"
        ],
        "tropicalBodySpottySingle": [
            "Pintado %1$s"
        ],
        "tropicalBodyFlopperSingle": [
            "Vigarista %1$s"
        ],
        "tropicalBodyStripeySingle": [
            "Listrado %1$s"
        ],
        "tropicalBodyGlitterSingle": [
            "Brilhante %1$s"
        ],
        "tropicalBodyBlockfishSingle": [
            "Peixe bloco %1$s"
        ],
        "tropicalBodyBettySingle": [
            "Betty %1$s"
        ],
        "tropicalBodyClayfishSingle": [
            "Argilastim %1$s"
        ],
        "tropicalBodyKobMulti": [
            "Kob %1$s-%2$s"
        ],
        "tropicalBodySunstreakMulti": [
            "Raio de sol %1$s-%2$s"
        ],
        "tropicalBodySnooperMulti": [
            "Xereta %1$s-%2$s"
        ],
        "tropicalBodyDasherMulti": [
            "Corredor %1$s-%2$s"
        ],
        "tropicalBodyBrinelyMulti": [
            "Salmoura %1$s-%2$s"
        ],
        "tropicalBodySpottyMulti": [
            "Pintado %1$s-%2$s"
        ],
        "tropicalBodyFlopperMulti": [
            "Vigarista %1$s-%2$s"
        ],
        "tropicalBodyStripeyMulti": [
            "Listrado %1$s-%2$s"
        ],
        "tropicalBodyGlitterMulti": [
            "Brilhante %1$s-%2$s"
        ],
        "tropicalBodyBlockfishMulti": [
            "Peixe bloco %1$s-%2$s"
        ],
        "tropicalBodyBettyMulti": [
            "Betty %1$s-%2$s"
        ],
        "tropicalBodyClayfishMulti": [
            "Argilastim %1$s-%2$s"
        ],
        "tropicalSchoolAnemone": [
            "Anêmona"
        ],
        "tropicalSchoolBlackTang": [
            "Tang Preto"
        ],
        "tropicalSchoolBlueDory": [
            "Peixe-galo Azul"
        ],
        "tropicalSchoolButterflyFish": [
            "Peixe-borboleta"
        ],
        "tropicalSchoolCichlid": [
            "Ciclídeo"
        ],
        "tropicalSchoolClownfish": [
            "Peixe-palhaço"
        ],
        "tropicalSchoolCottonCandyBetta": [
            "Betta Algodão Doce"
        ],
        "tropicalSchoolDottyback": [
            "Dottyback"
        ],
        "tropicalSchoolEmperorRedSnapper": [
            "Imperador Cioba"
        ],
        "tropicalSchoolGoatfish": [
            "Goatfish"
        ],
        "tropicalSchoolMoorishIdol": [
            "Moorish Idol"
        ],
        "tropicalSchoolOrnateButterfly": [
            "Peixe-borboleta Ornamentado"
        ],
        "tropicalSchoolParrotfish": [
            "Peixe-papagaio"
        ],
        "tropicalSchoolQueenAngelFish": [
            "Peixe Anjo Rainha"
        ],
        "tropicalSchoolRedCichlid": [
            "Ciclídeo Vermelho"
        ],
        "tropicalSchoolRedLippedBlenny": [
            "Blenny de Lábios Vermelhos"
        ],
        "tropicalSchoolRedSnapper": [
            "Cioba"
        ],
        "tropicalSchoolThreadfin": [
            "Barbudo"
        ],
        "tropicalSchoolTomatoClown": [
            "Peixe-palhaço Tomate"
        ],
        "tropicalSchoolTriggerfish": [
            "Peixe-porco"
        ],
        "tropicalSchoolYellowTang": [
            "Tang Amarelo"
        ],
        "tropicalSchoolYellowtailParrot": [
            "Peixe-papagaio de Cauda Amarela"
        ],
        "cake": [
            "Bolo"
        ],
        "camera": [
            "Câmera"
        ],
        "golden_carrot": [
            "Cenoura Dourada"
        ],
        "carrotOnAStick": [
            "Cenoura no Palito"
        ],
        "warped_fungus_on_a_stick": [
            "Fungo Deformado no Graveto"
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
            "Peitoral de Cota de Malha"
        ],
        "leather_chestplate": [
            "Túnica de Couro"
        ],
        "diamond_chestplate": [
            "Peitoral de Diamante"
        ],
        "golden_chestplate": [
            "Peitoral de Ouro"
        ],
        "iron_chestplate": [
            "Peitoral de Ferro"
        ],
        "chorus_fruit": [
            "Fruta do Coro"
        ],
        "chorus_fruit_popped": [
            "Fruta do Coro Estourada"
        ],
        "cooked_beef": [
            "Bife"
        ],
        "cooked_chicken": [
            "Frango Cozido"
        ],
        "cooked_porkchop": [
            "Costeleta de Porco Cozida"
        ],
        "chicken": [
            "Frango Cru"
        ],
        "clay_ball": [
            "Argila"
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
            "Biscoito"
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
            "Porta de Selva"
        ],
        "wooden_door": [
            "Porta de Carvalho"
        ],
        "spruce_door": [
            "Porta de Abeto"
        ],
        "crimson_door": [
            "Porta Carmesim"
        ],
        "warped_door": [
            "Porta Distorcida"
        ],
        "dragon_breath": [
            "Baforada de Dragão"
        ],
        "dye": [
            "Bolsa de Tinta",
            "Bolsa de Tinta",
            "Corante Vermelho",
            "Corante Verde",
            "Sementes de Cacau",
            "Lápis-Lazúli",
            "Corante Lilás",
            "Corante Ciano",
            "Corante Cinza Claro",
            "Corante Cinza",
            "Corante Rosa",
            "Corante Verde Limão",
            "Corante Amarelo",
            "Corante Azul Claro",
            "Corante Magenta",
            "Corante Laranja",
            "Farelo de Osso",
            "Corante Preto",
            "Corante Marrom",
            "Corante Azul",
            "Corante Branco"
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
            "Mapa em Branco"
        ],
        "emptyLocatorMap": [
            "Mapa do Localizador Vazio"
        ],
        "emptyPotion": [
            "Garrafa de Água"
        ],
        "enchanted_book": [
            "Livro Encantado"
        ],
        "end_crystal": [
            "Cristal do End"
        ],
        "end_rod": [
            "Haste de Extremidade"
        ],
        "ender_eye": [
            "Olho de Ender"
        ],
        "ender_pearl": [
            "Pérola do End"
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
            "Bola de Fogo"
        ],
        "fireworks": [
            "Fogos de Artifício"
        ],
        "fireworksCharge": [
            "Estrela de Fogos de Artifício"
        ],
        "clownfish": [
            "Peixe tropical"
        ],
        "cooked_fish": [
            "Bacalhau Cozido"
        ],
        "fish": [
            "Bacalhau Cru"
        ],
        "pufferfish": [
            "Baiacu"
        ],
        "cooked_salmon": [
            "Salmão Cozido"
        ],
        "salmon": [
            "Salmão Cru"
        ],
        "fishing_rod": [
            "Vara de Pescar"
        ],
        "flint": [
            "Sílex"
        ],
        "flint_and_steel": [
            "Pederneira"
        ],
        "flower_pot": [
            "Vaso de Flor"
        ],
        "frame": [
            "Moldura"
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
            "Coifa de Cota de Malha"
        ],
        "leather_helmet": [
            "Capuz de Couro"
        ],
        "diamond_helmet": [
            "Elmo de Diamante"
        ],
        "golden_helmet": [
            "Elmo de Ouro"
        ],
        "iron_helmet": [
            "Elmo de Ferro"
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
            "Armadura de Couro para Cavalo"
        ],
        "gold_ingot": [
            "Barra de Ouro"
        ],
        "iron_ingot": [
            "Barra de Ferro"
        ],
        "netherite_ingot": [
            "Barra de Netherito"
        ],
        "netherite_scrap": [
            "Sucata de Netherito"
        ],
        "netherite_sword": [
            "Espada de Netherito"
        ],
        "netherite_pickaxe": [
            "Picareta de Netherito"
        ],
        "netherite_axe": [
            "Machado de Netherito"
        ],
        "netherite_shovel": [
            "Pá de Netherito"
        ],
        "netherite_hoe": [
            "Enxada de Netherito"
        ],
        "netherite_boots": [
            "Botas de Netherito"
        ],
        "netherite_leggings": [
            "Calças de Netherito"
        ],
        "netherite_chestplate": [
            "Peitoral de Netherito"
        ],
        "netherite_helmet": [
            "Capacete de Netherito"
        ],
        "lead": [
            "Laço"
        ],
        "leather": [
            "Couro"
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
            "Calça de Cota de Malha"
        ],
        "leather_leggings": [
            "Calças de Couro"
        ],
        "diamond_leggings": [
            "Calças de Diamante"
        ],
        "golden_leggings": [
            "Calças de Ouro"
        ],
        "iron_leggings": [
            "Calças de Ferro"
        ],
        "nautilus_shell": [
            "Concha de náutilo"
        ],
        "heart_of_the_sea": [
            "Coração do mar"
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
            "Carrinho de Minas"
        ],
        "chest_minecart": [
            "Carrinho com Baú"
        ],
        "command_block_minecart": [
            "Carrinho de Minas com Bloco de Comando"
        ],
        "minecartFurnace": [
            "Carrinho com Fornalha"
        ],
        "hopper_minecart": [
            "Carrinho com Funil"
        ],
        "tnt_minecart": [
            "Carrinho com Dinamite"
        ],
        "trident": [
            "Tridente"
        ],
        "mushroom_stew": [
            "Ensopado de Cogumelos"
        ],
        "muttoncooked": [
            "Carneiro Cozido"
        ],
        "muttonraw": [
            "Carneiro Cru"
        ],
        "name_tag": [
            "Etiqueta"
        ],
        "netherbrick": [
            "Tijolo do Nether"
        ],
        "quartz": [
            "Quartzo do Nether"
        ],
        "nether_wart": [
            "Fungo do Nether"
        ],
        "netherStar": [
            "Estrela do Nether"
        ],
        "painting": [
            "Pintura"
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
            "Costeleta de Porco Cozida"
        ],
        "porkchop": [
            "Carne de Porco Crua"
        ],
        "portfolio": [
            "Portfólio"
        ],
        "potato": [
            "Batata"
        ],
        "baked_potato": [
            "Batata Assada"
        ],
        "poisonous_potato": [
            "Batata Venenosa"
        ],
        "potion": [
            "Poção"
        ],
        "prismarine_crystals": [
            "Cristais de Prismarinho"
        ],
        "prismarine_shard": [
            "Fragmento de Prismarinho"
        ],
        "pumpkin_pie": [
            "Torta de Abóbora"
        ],
        "cooked_rabbit": [
            "Coelho Cozido"
        ],
        "rabbit_foot": [
            "Pé de Coelho"
        ],
        "rabbit_hide": [
            "Pele de Coelho"
        ],
        "rabbit": [
            "Coelho Cru"
        ],
        "rabbit_stew": [
            "Ensopado de Coelho"
        ],
        "record": [
            "Disco de Música"
        ],
        "redstone": [
            "Redstone"
        ],
        "reeds": [
            "Canas-de-Açúcar"
        ],
        "kelp": [
            "Alga"
        ],
        "dried_kelp": [
            "Alga Desidratada"
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
            "Tosquiadeira"
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
            "Placa de Carvalho"
        ],
        "spruce_sign": [
            "Placa de Abeto"
        ],
        "birch_sign": [
            "Placa de Bétula"
        ],
        "jungle_sign": [
            "Placa de Árvore da Selva"
        ],
        "acacia_sign": [
            "Placa de Acácia"
        ],
        "darkoak_sign": [
            "Placa de Carvalho Escuro"
        ],
        "crimson_sign": [
            "Placa Carmesim"
        ],
        "warped_sign": [
            "Placa Distorcida"
        ],
        "skull": [
            "Crânio de Esqueleto",
            "Crânio de Esqueleto",
            "Crânio de Esqueleto Wither",
            "Cabeça de Zumbi",
            "Cabeça",
            "Cabeça de Creeper",
            "Cabeça de Dragão"
        ],
        "slime_ball": [
            "Gosma de Slime"
        ],
        "snowball": [
            "Bola de Neve"
        ],
        "speckled_melon": [
            "Melancia Reluzente"
        ],
        "spider_eye": [
            "Olho de Aranha"
        ],
        "stick": [
            "Graveto"
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
            "Casca de Shulker"
        ],
        "totem": [
            "Totem da Eternidade"
        ],
        "turtle_helmet": [
            "Casco de Tartaruga"
        ],
        "turtle_shell_piece": [
            "Escama"
        ],
        "phantom_membrane": [
            "Membrana de Fantasma"
        ],
        "sweet_berries": [
            "Frutas Vermelhas Doces"
        ],
        "suspicious_stew": [
            "Sopa Suspeita"
        ],
        "banner_pattern": [
            "Padrão da Bandeira"
        ],
        "acaciaFence": [
            "Cerca de Acácia"
        ],
        "acacia_fence_gate": [
            "Portão de Acácia"
        ],
        "activator_rail": [
            "Trilho Ativador"
        ],
        "allow": [
            "Permitir"
        ],
        "deny": [
            "Negar"
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
            "Sinalizador"
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
            "Rocha Matriz"
        ],
        "conduit": [
            "Canal"
        ],
        "invisibleBedrock": [
            "Base invisível"
        ],
        "birchFence": [
            "Cerca de Bétula"
        ],
        "birch_fence_gate": [
            "Portão de Bétula"
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
            "Bloco de Esmeraldas"
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
            "Tijolos"
        ],
        "brown_mushroom": [
            "Cogumelo Marrom"
        ],
        "wooden_button": [
            "Botão de carvalho"
        ],
        "acacia_button": [
            "Botão de acácia"
        ],
        "birch_button": [
            "Botão de bétula"
        ],
        "dark_oak_button": [
            "Botão de carvalho escuro"
        ],
        "jungle_button": [
            "Botão de selva"
        ],
        "spruce_button": [
            "Botão de abeto"
        ],
        "stone_button": [
            "Botão de Pedra"
        ],
        "cactus": [
            "Cacto"
        ],
        "dried_kelp_block": [
            "Bloco de Alga Desidratada"
        ],
        "carved_pumpkin": [
            "Abóbora entalhada"
        ],
        "chest": [
            "Baú"
        ],
        "ender_chest": [
            "Baú do End"
        ],
        "jigsaw": [
            "Bloco de Quebra-Cabeça"
        ],
        "honey_block": [
            "Bloco de Mel"
        ],
        "honeycomb_block": [
            "Bloco de Favo de Mel"
        ],
        "lodestone": [
            "Magnetita"
        ],
        "nether_sprouts": [
            "Brotos de Nether"
        ],
        "crimson_stem": [
            "Caule Carmesim"
        ],
        "warped_stem": [
            "Caule Distorcido"
        ],
        "stripped_crimson_stem": [
            "Caule Carmesim Descascado"
        ],
        "stripped_warped_stem": [
            "Caule Distorcido Descascado"
        ],
        "crimson_hyphae": [
            "Hifas Carmesim"
        ],
        "warped_hyphae": [
            "Hifas Deformadas"
        ],
        "stripped_crimson_hyphae": [
            "Hifas Carmesim Descascadas"
        ],
        "stripped_warped_hyphae": [
            "Hifas Deformadas Descascadas"
        ],
        "crimson_planks": [
            "Tábuas Carmesim"
        ],
        "warped_planks": [
            "Tábuas Distorcidas"
        ],
        "crimson_trapdoor": [
            "Alçapão Carmesim"
        ],
        "warped_trapdoor": [
            "Alçapão Distorcido"
        ],
        "crimson_standing_sign": [
            "Placa Carmesim"
        ],
        "warped_standing_sign": [
            "Placa Distorcida"
        ],
        "crimson_wall_sign": [
            "Placa Carmesim"
        ],
        "warped_wall_sign": [
            "Placa Distorcida"
        ],
        "crimson_stairs": [
            "Escadas Carmesim"
        ],
        "warped_stairs": [
            "Escadas Distorcidas"
        ],
        "crimson_fence": [
            "Cerca Carmesim"
        ],
        "warped_fence": [
            "Cerca Distorcida"
        ],
        "crimson_fence_gate": [
            "Portão Carmesim"
        ],
        "warped_fence_gate": [
            "Portão Distorcido"
        ],
        "crimson_button": [
            "Botão Carmesim"
        ],
        "warped_button": [
            "Botão Distorcido"
        ],
        "crimson_pressure_plate": [
            "Placa de Pressão Carmesim"
        ],
        "warped_pressure_plate": [
            "Placa de Pressão Distorcida"
        ],
        "crimson_slab": [
            "Laje Carmesim"
        ],
        "warped_slab": [
            "Laje Distorcida"
        ],
        "crimson_double_slab": [
            "Laje Carmesim"
        ],
        "warped_double_slab": [
            "Laje Distorcida"
        ],
        "shroomlight": [
            "Cogubrilho"
        ],
        "crimson_nylium": [
            "Nicélio Carmesim"
        ],
        "warped_nylium": [
            "Nicélio Distorcido"
        ],
        "basalt": [
            "Basalto"
        ],
        "polished_basalt": [
            "Basalto Polido"
        ],
        "blackstone": [
            "Pedra-Negra"
        ],
        "polished_blackstone_bricks": [
            "Tijolos de Pedra-Negra Polida"
        ],
        "cracked_polished_blackstone_bricks": [
            "Tijolos de Pedra-Negra Polida Rachados"
        ],
        "polished_blackstone_brick_stairs": [
            "Escadas de Tijolos de Pedra-Negra Polida"
        ],
        "blackstone_stairs": [
            "Escadas de Pedra-Negra"
        ],
        "blackstone_wall": [
            "Parede de Pedra-Negra"
        ],
        "polished_blackstone_brick_wall": [
            "Parede de Tijolos de Pedra-Negra Polida"
        ],
        "chiseled_polished_blackstone": [
            "Pedra-Negra Polida Cinzelada"
        ],
        "gilded_blackstone": [
            "Pedra-Negra Dourada"
        ],
        "blackstone_slab": [
            "Laje de Pedra-Negra"
        ],
        "polished_blackstone_brick_slab": [
            "Laje de Tijolos de Pedra-Negra Polida"
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
            "Pedra-Negra Polida"
        ],
        "polished_blackstone_stairs": [
            "Escadas de Pedra-Negra Polida"
        ],
        "polished_blackstone_slab": [
            "Laje de Pedra-Negra Polida"
        ],
        "polished_blackstone_pressure_plate": [
            "Placa de Pressão de Pedra-Negra Polida"
        ],
        "polished_blackstone_button": [
            "Botão de Pedra-Negra Polida"
        ],
        "polished_blackstone_wall": [
            "Parede de Pedra-Negra Polida"
        ],
        "soul_campfire": [
            "Fogueira da Alma"
        ],
        "chiseled_nether_bricks": [
            "Tijolos do Nether Cinzelados"
        ],
        "cracked_nether_bricks": [
            "Tijolos do Nether Rachados"
        ],
        "quartz_bricks": [
            "Tijolos de Quartzo"
        ],
        "trapped_chest": [
            "Baú com Armadilha"
        ],
        "shulkerBoxWhite": [
            "Caixa de Shulker Branca"
        ],
        "shulkerBoxOrange": [
            "Caixa de Shulker Laranja"
        ],
        "shulkerBoxMagenta": [
            "Caixa de Shulker Magenta"
        ],
        "shulkerBoxLightBlue": [
            "Caixa de Shulker Azul-claro"
        ],
        "shulkerBoxYellow": [
            "Caixa de Shulker Amarela"
        ],
        "shulkerBoxLime": [
            "Caixa de Shulker Verde-limão"
        ],
        "shulkerBoxPink": [
            "Caixa de Shulker Rosa"
        ],
        "shulkerBoxGray": [
            "Caixa de Shulker Cinza"
        ],
        "shulkerBoxSilver": [
            "Caixa de Shulker Cinza Claro"
        ],
        "shulkerBoxCyan": [
            "Caixa de Shulker Ciano"
        ],
        "shulkerBoxPurple": [
            "Caixa de Shulker Lilás"
        ],
        "shulkerBoxBlue": [
            "Caixa de Shulker Azul"
        ],
        "shulkerBoxBrown": [
            "Caixa de Shulker Marrom"
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
            "Vidro Tingido de Laranja",
            "Vidro Tingido de Magenta",
            "Vidro Tingido de Azul Claro",
            "Vidro Tingido de Amarelo",
            "Vidro Tingido de Verde Limão",
            "Vidro Tingido de Rosa",
            "Vidro Tingido de Cinza",
            "Vidro Tingido de Cinza Claro",
            "Vidro Tingido de Ciano",
            "Vidro Tingido de Lilás",
            "Vidro Tingido de Azul",
            "Vidro Tingido de Marrom",
            "Vidro Tingido de Verde",
            "Vidro Tingido de Vermelho",
            "Vidro Tingido de Preto"
        ],
        "stained_glass_pane": [
            "Painel de Vidro Tingido de Branco",
            "Painel de Vidro Tingido de Branco",
            "Painel de Vidro Tingido de Laranja",
            "Painel de Vidro Tingido de Magenta",
            "Painel de Vidro Tingido de Azul Claro",
            "Painel de Vidro Tingido de Amarelo",
            "Painel de Vidro Tingido de Verde Limão",
            "Painel de Vidro Tingido de Rosa",
            "Painel de Vidro Tingido de Cinza",
            "Painel de Vidro Tingido de Cinza Claro",
            "Painel de Vidro Tingido de Ciano",
            "Painel de Vidro Tingido de Lilás",
            "Painel de Vidro Tingido de Azul",
            "Painel de Vidro Tingido de Marrom",
            "Painel de Vidro Tingido de Verde",
            "Painel de Vidro Tingido de Vermelho",
            "Painel de Vidro Tingido de Preto"
        ],
        "clay": [
            "Bloco de Argila"
        ],
        "hardened_clay": [
            "Terracota"
        ],
        "stained_hardened_clay": [
            "Terracota",
            "Terracota Branca",
            "Terracota Laranja",
            "Terracota Magenta",
            "Terracota Azul-clara",
            "Terracota Amarela",
            "Terracota Verde-limão",
            "Terracota Rosa",
            "Terracota Cinza",
            "Terracota Cinza-clara",
            "Terracota Ciano",
            "Terracota Lilás",
            "Terracota Azul",
            "Terracota Marrom",
            "Terracota Verde",
            "Terracota Vermelha",
            "Terracota Preta"
        ],
        "structure_block": [
            "Bloco de Estrutura"
        ],
        "structure_void": [
            "Estrutura Vazia"
        ],
        "wool": [
            "Lã",
            "Lã Branca",
            "Lã Laranja",
            "Lã Magenta",
            "Lã Azul Clara",
            "Lã Amarela",
            "Lã Verde Limão",
            "Lã Rosa",
            "Lã Cinza",
            "Lã Cinza Clara",
            "Lã Ciano",
            "Lã Lilás",
            "Lã Azul",
            "Lã Marrom",
            "Lã Verde",
            "Lã Vermelha",
            "Lã Preta"
        ],
        "cobblestone_wall": [
            "Parede de Pedregulho",
            "Parede de Pedregulho",
            "Parede de Pedregulho com Musgo",
            "Parede de Granito",
            "Parede de Diorito",
            "Parede de Andesito",
            "Parede de Arenito",
            "Parede de Tijolos",
            "Parede de Tijolos de Pedra",
            "Parede de Tijolos de Pedra com Musgo",
            "Parede de Tijolos de Pedra do End",
            "Parede de Tijolos do Nether",
            "Parede de Prismarinho",
            "Parede de Arenito Vermelho",
            "Parede de Tijolos Vermelhos do Nether"
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
            "Bloco de Luz"
        ],
        "repeating_command_block": [
            "Bloco de Comando de Repetição"
        ],
        "chain_command_block": [
            "Bloco de Comando da Cadeia"
        ],
        "darkOakFence": [
            "Cerca de Carvalho Escuro"
        ],
        "dark_oak_fence_gate": [
            "Portão de Carvalho Escuro"
        ],
        "daylight_detector": [
            "Sensor de Luz Solar"
        ],
        "deadbush": [
            "Arbusto Seco"
        ],
        "detector_rail": [
            "Trilho Detector"
        ],
        "dirt": [
            "Terra",
            "Terra",
            "Terra Grossa"
        ],
        "podzol": [
            "Podzol"
        ],
        "purpur_block": [
            "Bloco púrpura",
            "Bloco púrpura",
            "Púrpura Cinzelada",
            "Pilar púrpura"
        ],
        "dispenser": [
            "Ejetor"
        ],
        "doorWood": [
            "Porta de Madeira"
        ],
        "double_plant": [
            "Planta",
            "Girassol",
            "Lilás",
            "Grama Alta Dupla",
            "Samambaia Grande",
            "Roseira",
            "Peônia"
        ],
        "dragon_egg": [
            "Ovo de Dragão"
        ],
        "dropper": [
            "Liberador"
        ],
        "enchanting_table": [
            "Mesa de Encantamentos"
        ],
        "enderChest": [
            "Baú do End"
        ],
        "end_portal_frame": [
            "Portal do End"
        ],
        "farmland": [
            "Terra Arada"
        ],
        "fletching_table": [
            "Mesa de Arquearia"
        ],
        "fence": [
            "Cerca de Carvalho"
        ],
        "fence_gate": [
            "Portão de Carvalho"
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
            "Papoula",
            "Orquídea Azul",
            "Allium",
            "Azure Bluet",
            "Tulipa Vermelha",
            "Tulipa Laranja",
            "Tulipa Branca",
            "Tulipa Rosa",
            "Margarida",
            "Centáurea",
            "Lírio-do-vale"
        ],
        "wither_rose": [
            "Rosa do Wither"
        ],
        "furnace": [
            "Fornalha"
        ],
        "glass": [
            "Vidro"
        ],
        "golden_rail": [
            "Trilho Elétrico"
        ],
        "grass": [
            "Bloco de Grama"
        ],
        "grass_path": [
            "Caminho de Grama"
        ],
        "gravel": [
            "Cascalho"
        ],
        "hay_block": [
            "Fardo de Feno"
        ],
        "netherrack": [
            "Netherrack"
        ],
        "soul_sand": [
            "Areia de Almas"
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
            "Cerca de Selva"
        ],
        "jungle_fence_gate": [
            "Portão de Selva"
        ],
        "ladder": [
            "Escada de mão"
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
            "Tora de Acácia",
            "Tora de Acácia",
            "Tora de Carvalho Escuro"
        ],
        "log": [
            "Tora",
            "Tora de Carvalho",
            "Tora de Abeto",
            "Tora de Bétula",
            "Tora da Selva"
        ],
        "magma": [
            "Bloco de Magma"
        ],
        "melon_block": [
            "Melancia"
        ],
        "mob_spawner": [
            "Criador de Monstros"
        ],
        "monster_egg": [
            "Pedra Infestada",
            "Pedra Infestada",
            "Pedregulho Infestado",
            "Tijolo de Pedra Infestado",
            "Tijolo de Pedra com Musgo Infestado",
            "Tijolo de Pedra Rachado Infestado",
            "Tijolo de Pedra Cinzelado Infestado"
        ],
        "mushroom": [
            "Cogumelo"
        ],
        "noteblock": [
            "Bloco de Nota"
        ],
        "mycelium": [
            "Micélio"
        ],
        "nether_brick": [
            "Bloco de Tijolos do Nether"
        ],
        "red_nether_brick": [
            "Bloco de Tijolos Vermelhos do Nether"
        ],
        "nether_brick_fence": [
            "Cerca de Tijolos do Nether"
        ],
        "quartz_ore": [
            "Minério de Quartzo do Nether"
        ],
        "netherreactor": [
            "Núcleo do Reator do Nether"
        ],
        "nether_wart_block": [
            "Bloco de Fungo do Nether"
        ],
        "warped_wart_block": [
            "Bloco de Fungo Distorcido"
        ],
        "unlit_redstone_torch": [
            "Tocha de Redstone"
        ],
        "redstone_torch": [
            "Tocha de Redstone"
        ],
        "soul_torch": [
            "Tocha da Alma"
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
            "Pistão Aderente"
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
            "Placa de pressão de carvalho"
        ],
        "acacia_pressure_plate": [
            "Placa de pressão de acácia"
        ],
        "birch_pressure_plate": [
            "Placa de pressão de bétula"
        ],
        "dark_oak_pressure_plate": [
            "Placa de pressão de carvalho escuro"
        ],
        "jungle_pressure_plate": [
            "Placa de pressão de selva"
        ],
        "spruce_pressure_plate": [
            "Placa de pressão de abeto"
        ],
        "prismarine": [
            "Prismarinho",
            "Prismarinho",
            "Tijolos de Prismarinho",
            "Prismarinho Escuro"
        ],
        "pumpkin": [
            "Abóbora"
        ],
        "pumpkin_stem": [
            "Broto de Abóbora"
        ],
        "quartz_block": [
            "Bloco de Quartzo",
            "Bloco de Quartzo",
            "Bloco de Quartzo Cinzelado",
            "Pilar de Bloco de Quartzo",
            "Bloco de Quartzo Liso"
        ],
        "rail": [
            "Trilho"
        ],
        "red_mushroom": [
            "Cogumelo Vermelho"
        ],
        "crimson_fungus": [
            "Fungo Carmesim"
        ],
        "warped_fungus": [
            "Fungo Distorcido"
        ],
        "red_mushroom_block": [
            "Bloco de Cogumelo Vermelho"
        ],
        "red_sandstone": [
            "Arenito Vermelho",
            "Arenito Vermelho",
            "Arenito Vermelho Cinzelado",
            "Arenito Vermelho Cortado",
            "Arenito Vermelho Liso"
        ],
        "redstone_wire": [
            "Pó de Redstone"
        ],
        "redstone_lamp": [
            "Lâmpada de Redstone"
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
            "Arenito Liso"
        ],
        "sapling": [
            "Muda de Carvalho",
            "Muda de Carvalho",
            "Muda de Abeto",
            "Muda de Bétula",
            "Muda de Árvore da Selva",
            "Muda de Acácia",
            "Muda de Carvalho Escuro"
        ],
        "seaLantern": [
            "Lanterna do Mar"
        ],
        "standing_sign": [
            "Placa"
        ],
        "spruce_standing_sign": [
            "Placa de Abeto"
        ],
        "birch_standing_sign": [
            "Placa de Bétula"
        ],
        "jungle_standing_sign": [
            "Placa de Árvore da Selva"
        ],
        "acacia_standing_sign": [
            "Placa de Acácia"
        ],
        "darkoak_standing_sign": [
            "Placa de Carvalho Escuro"
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
            "Esponja Molhada"
        ],
        "spruceFence": [
            "Cerca de Abeto"
        ],
        "spruce_fence_gate": [
            "Portão de Abeto"
        ],
        "brick_stairs": [
            "Escada de Tijolos"
        ],
        "nether_brick_stairs": [
            "Escada de Tijolos do Nether"
        ],
        "quartz_stairs": [
            "Escada de Quartzo"
        ],
        "smooth_quartz_stairs": [
            "Escada de Quartzo Liso"
        ],
        "red_sandstone_stairs": [
            "Escada de Arenito Vermelho"
        ],
        "sandstone_stairs": [
            "Escada de Arenito"
        ],
        "stone_stairs": [
            "Escada de Pedregulho"
        ],
        "normal_stone_stairs": [
            "Escada de Pedra"
        ],
        "stone_brick_stairs": [
            "Escada de Tijolos de Pedra"
        ],
        "oak_stairs": [
            "Escada de Carvalho"
        ],
        "acacia_stairs": [
            "Escada de Acácia"
        ],
        "birch_stairs": [
            "Escada de Bétula"
        ],
        "dark_oak_stairs": [
            "Escada de Carvalho Escuro"
        ],
        "jungle_stairs": [
            "Escada de Madeira da Selva"
        ],
        "spruce_stairs": [
            "Escada de Abeto"
        ],
        "purpur_stairs": [
            "Escada púrpura"
        ],
        "prismarine_stairs": [
            "Escadas de Prismarinho"
        ],
        "dark_prismarine_stairs": [
            "Escadas de Prismarinho Escuro"
        ],
        "prismarine_bricks_stairs": [
            "Escada de Tijolos de Prismarinho"
        ],
        "granite_stairs": [
            "Escada de Granito"
        ],
        "diorite_stairs": [
            "Escada de Diorito"
        ],
        "andesite_stairs": [
            "Escada de Andesito"
        ],
        "polished_granite_stairs": [
            "Escada de Granito Polido"
        ],
        "polished_diorite_stairs": [
            "Escada de Diorito Polido"
        ],
        "polished_andesite_stairs": [
            "Escada de Andesito Polido"
        ],
        "mossy_stone_brick_stairs": [
            "Escada de Tijolos de Pedra com Musgo"
        ],
        "smooth_red_sandstone_stairs": [
            "Escada de Arenito Vermelho Liso"
        ],
        "smooth_sandstone_stairs": [
            "Escada de Arenito Liso"
        ],
        "end_brick_stairs": [
            "Escada de Tijolos de Pedra do End"
        ],
        "mossy_cobblestone_stairs": [
            "Escada de Pedregulho com Musgo"
        ],
        "red_nether_brick_stairs": [
            "Escada de Tijolos Vermelhos do Nether"
        ],
        "smooth_stone": [
            "Pedra Lisa"
        ],
        "standing_banner": [
            "Banner",
            "Estandarte Preto",
            "Estandarte Vermelho",
            "Estandarte Verde",
            "Estandarte Marrom",
            "Estandarte Azul",
            "Estandarte Lilás",
            "Estandarte Ciano",
            "Estandarte Cinza Claro",
            "Estandarte Cinza",
            "Estandarte Rosa",
            "Estandarte Verde Limão",
            "Estandarte Amarelo",
            "Estandarte Azul Claro",
            "Estandarte Magenta",
            "Estandarte Laranja",
            "Banner"
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
            "Pedregulho"
        ],
        "stonebrick": [
            "Tijolos de pedra",
            "Tijolos de Pedra",
            "Tijolos de Pedra com Musgo",
            "Tijolos de Pedra Cinzelado"
        ],
        "stonecutter": [
            "Cortador de Pedra"
        ],
        "stonecutter_block": [
            "Cortador de Pedra"
        ],
        "mossy_cobblestone": [
            "Pedregulho com Musgo"
        ],
        "double_stone_slab": [
            "Laje de Pedra",
            "Laje de Pedra",
            "Laje de Arenito",
            "Laje de Madeira",
            "Laje de Pedregulho",
            "Laje de Tijolos",
            "Laje de Blocos de Pedra",
            "Laje de Quartzo",
            "Laje de Tijolos do Nether"
        ],
        "stone_slab": [
            "Laje de Pedra",
            "Laje de Pedra Lisa",
            "Laje de Arenito",
            "Laje de Madeira",
            "Laje de Pedregulho",
            "Laje de Tijolos",
            "Laje de Tijolos de Pedra",
            "Laje de Quartzo",
            "Laje de Tijolos do Nether"
        ],
        "double_stone_slab2": [
            "Laje de Arenito Vermelho",
            "Laje de Arenito Vermelho"
        ],
        "stone_slab2": [
            "Laje de Arenito Vermelho",
            "Laje de Arenito Vermelho",
            "Laje púrpura",
            "Laje de Prismarinho",
            "Laje de Tijolos de Prismarinho",
            "Laje de Prismarinho Escuro",
            "Laje de Pedregulho com Musgo",
            "Laje de Arenito Liso",
            "Laje de Tijolos Vermelhos do Nether"
        ],
        "stone_slab3": [
            "Laje de Tijolos de Pedra do End",
            "Laje de Tijolos de Pedra do End",
            "Laje de Arenito Vermelho Liso",
            "Laje de Andesito Polido",
            "Laje de Andesito",
            "Laje de Diorito",
            "Laje de Diorito Polido",
            "Laje de Granito",
            "Laje de Granito Polido"
        ],
        "stone_slab4": [
            "Laje de Tijolos de Pedra com Musgo",
            "Laje de Tijolos de Pedra com Musgo",
            "Laje de Quartzo Liso",
            "Laje de Pedra",
            "Laje de Arenito Cortado",
            "Laje de Arenito Vermelho Cortado"
        ],
        "coral_block": [
            "Bloco de Coral de Tubo",
            "Bloco de Coral de Tubo",
            "Bloco de Coral-Cérebro",
            "Bloco de Coral-Bolha",
            "Bloco de Coral de Fogo",
            "Bloco de Coral de Chifre",
            "Bloco de Coral de Tubo Morto",
            "Bloco de Coral-Cérebro Morto",
            "Bloco de Coral-Bolha Morto",
            "Bloco de Coral de Fogo Morto",
            "Bloco de Coral de Chifre Morto"
        ],
        "tallgrass": [
            "Grama",
            "Grama",
            "Samambaia"
        ],
        "seagrass": [
            "Ervas marinhas",
            "Ervas marinhas"
        ],
        "sea_pickle": [
            "Pepino-do-mar"
        ],
        "turtle_egg": [
            "Ovo de Tartaruga Marinha"
        ],
        "coral": [
            "Coral de Tubo",
            "Coral de Tubo",
            "Coral-Cérebro",
            "Coral-Bolha",
            "Coral de Fogo",
            "Coral de Chifre",
            "Coral de Tubo Morto",
            "Coral-Cérebro Morto",
            "Coral-Bolha Morto",
            "Coral de Fogo Morto",
            "Coral de Chifre Morto"
        ],
        "coral_fan": [
            "Decoração de Coral de Tubo",
            "Decoração de Coral de Tubo",
            "Decoração de Coral-Cérebro",
            "Decoração de Coral-Bolha",
            "Decoração de Coral de Fogo",
            "Decoração de Coral de Chifre"
        ],
        "coral_fan_dead": [
            "Decoração de Coral de Tubo Morto",
            "Decoração de Coral de Tubo Morto",
            "Decoração de Coral-Cérebro Morto",
            "Decoração de Coral-Bolha Morto",
            "Decoração de Coral de Fogo Morto",
            "Decoração de Coral de Chifre Morto"
        ],
        "glass_pane": [
            "Painel de Vidro"
        ],
        "tnt": [
            "Dinamite"
        ],
        "snow_layer": [
            "Neve no Topo"
        ],
        "torch": [
            "Tocha"
        ],
        "trapdoor": [
            "Alçapão de carvalho"
        ],
        "acacia_trapdoor": [
            "Alçapão de acácia"
        ],
        "birch_trapdoor": [
            "Alçapão de bétula"
        ],
        "dark_oak_trapdoor": [
            "Alçapão de carvalho escuro"
        ],
        "jungle_trapdoor": [
            "Alçapão de selva"
        ],
        "spruce_trapdoor": [
            "Alçapão de abeto"
        ],
        "tripWire": [
            "Disparador"
        ],
        "tripwire_hook": [
            "Gancho Disparador"
        ],
        "vine": [
            "Vinhas"
        ],
        "weeping_vines": [
            "Trepadeiras Choronas"
        ],
        "twisting_vines": [
            "Vinhas Torcidas"
        ],
        "flowing_water": [
            "Água"
        ],
        "water": [
            "Água"
        ],
        "waterlily": [
            "Vitória-Régia"
        ],
        "web": [
            "Teia"
        ],
        "heavy_weighted_pressure_plate": [
            "Placa de Pressão de Peso (Pesada)"
        ],
        "light_weighted_pressure_plate": [
            "Placa de Pressão de Peso (Leve)"
        ],
        "end_stone": [
            "Pedra do End"
        ],
        "end_bricks": [
            "Tijolos de pedra do End"
        ],
        "planks": [
            "Tábuas",
            "Tábuas de Madeira de Carvalho",
            "Tábuas de Madeira de Abeto",
            "Tábuas de Madeira de Bétula",
            "Tábuas de Madeira da Selva",
            "Tábuas de Madeira de Acácia",
            "Tábuas de Madeira de Carvalho Escuro"
        ],
        "wooden_slab": [
            "Laje de Madeira",
            "Laje de Carvalho",
            "Laje de Abeto",
            "Laje de Bétula",
            "Laje de Madeira de Selva",
            "Laje de Acácia",
            "Laje de Carvalho Escuro"
        ],
        "carpet": [
            "Carpete",
            "Carpete Preto",
            "Carpete Vermelho",
            "Carpete Verde",
            "Carpete Marrom",
            "Carpete Azul",
            "Carpete Lilás",
            "Carpete Ciano",
            "Carpete Cinza Claro",
            "Carpete Cinza",
            "Carpete Rosa",
            "Carpete Verde Limão",
            "Carpete Amarelo",
            "Carpete Azul Claro",
            "Carpete Magenta",
            "Carpete Laranja",
            "Carpete Branco"
        ],
        "crafting_table": [
            "Bancada"
        ],
        "white_glazed_terracotta": [
            "Terracota Envidraçada Branca",
            "Terracota Envidraçada Branca"
        ],
        "orange_glazed_terracotta": [
            "Terracota Envidraçada Laranja",
            "Terracota Envidraçada Laranja"
        ],
        "magenta_glazed_terracotta": [
            "Terracota Envidraçada Magenta",
            "Terracota Envidraçada Magenta"
        ],
        "light_blue_glazed_terracotta": [
            "Terracota Envidraçada Azul-clara",
            "Terracota Envidraçada Azul-clara"
        ],
        "yellow_glazed_terracotta": [
            "Terracota Envidraçada Amarela",
            "Terracota Envidraçada Amarela"
        ],
        "lime_glazed_terracotta": [
            "Terracota Envidraçada Verde-limão",
            "Terracota Envidraçada Verde-limão"
        ],
        "pink_glazed_terracotta": [
            "Terracota Envidraçada Rosa",
            "Terracota Envidraçada Rosa"
        ],
        "gray_glazed_terracotta": [
            "Terracota Envidraçada Cinza",
            "Terracota Envidraçada Cinza"
        ],
        "silver_glazed_terracotta": [
            "Terracota Envidraçada Cinza-clara",
            "Terracota Envidraçada Cinza-clara"
        ],
        "cyan_glazed_terracotta": [
            "Terracota Envidraçada Ciano",
            "Terracota Envidraçada Ciano"
        ],
        "purple_glazed_terracotta": [
            "Terracota Envidraçada Lilás",
            "Terracota Envidraçada Lilás"
        ],
        "blue_glazed_terracotta": [
            "Terracota Envidraçada Azul",
            "Terracota Envidraçada Azul"
        ],
        "brown_glazed_terracotta": [
            "Terracota Envidraçada Marrom",
            "Terracota Envidraçada Marrom"
        ],
        "green_glazed_terracotta": [
            "Terracota Envidraçada Verde",
            "Terracota Envidraçada Verde"
        ],
        "red_glazed_terracotta": [
            "Terracota Envidraçada Vermelha",
            "Terracota Envidraçada Vermelha"
        ],
        "black_glazed_terracotta": [
            "Terracota Envidraçada Preta",
            "Terracota Envidraçada Preta"
        ],
        "concrete": [
            "Concreto Branco",
            "Concreto Branco",
            "Concreto Laranja",
            "Concreto Magenta",
            "Concreto Azul-claro",
            "Concreto Amarelo",
            "Concreto Verde-limão",
            "Concreto Rosa",
            "Concreto Cinza",
            "Concreto Cinza-claro",
            "Concreto Ciano",
            "Concreto Lilás",
            "Concreto Azul",
            "Concreto Marrom",
            "Concreto Verde",
            "Concreto Vermelho",
            "Concreto Preto"
        ],
        "glazedTerracottaWhite": [
            "Terracota Envidraçada Branca"
        ],
        "glazedTerracottaOrange": [
            "Terracota Envidraçada Laranja"
        ],
        "glazedTerracottaMagenta": [
            "Terracota Envidraçada Magenta"
        ],
        "glazedTerracottaLightBlue": [
            "Terracota Envidraçada Azul-clara"
        ],
        "glazedTerracottaYellow": [
            "Terracota Envidraçada Amarela"
        ],
        "glazedTerracottaLime": [
            "Terracota Envidraçada Verde-limão"
        ],
        "glazedTerracottaPink": [
            "Terracota Envidraçada Rosa"
        ],
        "glazedTerracottaGray": [
            "Terracota Envidraçada Cinza"
        ],
        "glazedTerracottaSilver": [
            "Terracota Envidraçada Cinza-clara"
        ],
        "glazedTerracottaCyan": [
            "Terracota Envidraçada Ciano"
        ],
        "glazedTerracottaPurple": [
            "Terracota Envidraçada Lilás"
        ],
        "glazedTerracottaBlue": [
            "Terracota Envidraçada Azul"
        ],
        "glazedTerracottaBrown": [
            "Terracota Envidraçada Marrom"
        ],
        "glazedTerracottaGreen": [
            "Terracota Envidraçada Verde"
        ],
        "glazedTerracottaRed": [
            "Terracota Envidraçada Vermelha"
        ],
        "glazedTerracottaBlack": [
            "Terracota Envidraçada Preta"
        ],
        "concretePowder": [
            "Pó de Concreto Branco",
            "Pó de Concreto Branco",
            "Pó de Concreto Laranja",
            "Pó de Concreto Magenta",
            "Pó de Concreto Azul-claro",
            "Pó de Concreto Amarelo",
            "Pó de Concreto Verde-limão",
            "Pó de Concreto Rosa",
            "Pó de Concreto Cinza",
            "Pó de Concreto Cinza-claro",
            "Pó de Concreto Ciano",
            "Pó de Concreto Lilás",
            "Pó de Concreto Azul",
            "Pó de Concreto Marrom",
            "Pó de Concreto Verde",
            "Pó de Concreto Vermelho",
            "Pó de Concreto Preto"
        ],
        "stripped_spruce_log": [
            "Tora de Abeto Descascada"
        ],
        "stripped_dark_oak_log": [
            "Tora de Carvalho Escuro Descascada"
        ],
        "stripped_birch_log": [
            "Tora de Bétula Descascada"
        ],
        "stripped_jungle_log": [
            "Tora da Selva Descascada"
        ],
        "stripped_oak_log": [
            "Tora de Carvalho Descascada"
        ],
        "stripped_acacia_log": [
            "Tora de Acácia Descascada"
        ],
        "bamboo": [
            "Bambu"
        ],
        "scaffolding": [
            "Andaime"
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
            "Lanterna da Alma"
        ],
        "smoker": [
            "Defumador"
        ],
        "smithing_table": [
            "Mesa de Ferraria"
        ],
        "barrel": [
            "Barril"
        ],
        "campfire": [
            "Fogueira"
        ],
        "loom": [
            "Tear"
        ],
        "lectern": [
            "Atril"
        ],
        "sweet_berry_bush": [
            "Arbusto de Frutas Vermelhas Doces"
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
            "Madeira de Carvalho Descascada",
            "Madeira de Abeto Descascada",
            "Madeira de Bétula Descascada",
            "Madeira da Selva Descascada",
            "Madeira de Acácia Descascada",
            "Madeira de Carvalho Escuro Descascada"
        ],
        "netherite_block": [
            "Bloco de Netherito"
        ],
        "ancient_debris": [
            "Detritos Ancestrais"
        ],
        "nether_gold_ore": [
            "Minério de Ouro do Nether"
        ],
        "respawn_anchor": [
            "Âncora de Renascimento"
        ],
        "crying_obsidian": [
            "Obsidiana Gritante"
        ]
    }
};
freeze(lang_data);
export = lang_data;
