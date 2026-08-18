import { Signal, AgendaItem } from '../types.ts';
import { BETTING_HOUSES } from '../constants.tsx';

export const VIP_GROUP_URL = 'https://chat.whatsapp.com/EzFnzLKzWxiHV55xZzYtvk?s=cl&p=a&ilr=1';

const getHouseUrl = (houseNameOrId: string): string => {
  const match = BETTING_HOUSES.find(
    h => h.name.toLowerCase() === houseNameOrId.toLowerCase() || h.id.toLowerCase() === houseNameOrId.toLowerCase()
  );
  return match?.url || 'https://txunabet.co.mz';
};

/**
 * Formatação Profissional e Limpa de Sinal Individual
 */
export const formatSingleSignalCopy = (sig: Signal, explicitHouseUrl?: string): string => {
  const houseUrl = explicitHouseUrl || getHouseUrl(sig.house);
  const houseName = sig.house.toUpperCase();
  const target = sig.multiplier;

  return (
    `📋 ENTRADA CONFIRMADA - ${houseName}\n\n` +
    `🎯 Estratégia: Alvo Principal com Proteção em 1.50x\n` +
    `⚠️ Gestão: Máximo 1 Gale de Recuperação\n\n` +
    `⏰ Horário Confirmado:\n` +
    `01. ${sig.time} ➔ ${target}\n\n` +
    `🔗 Jogue aqui: ${houseUrl}\n` +
    `📲 Grupo VIP Oficial: ${VIP_GROUP_URL}    BOT HACKER B55`
  );
};

/**
 * Formatação Profissional e Compacta de Lista de Sinais
 */
export const formatSignalListCopy = (
  signals: Signal[],
  houseName: string,
  explicitHouseUrl?: string,
  maxItems: number = 30
): string => {
  const houseUrl = explicitHouseUrl || getHouseUrl(houseName);
  const listItems = signals.slice(0, maxItems);

  const formattedRows = listItems
    .map((sig, idx) => {
      const num = (idx + 1).toString().padStart(2, '0');
      return `${num}. ${sig.time} ➔ ${sig.multiplier}`;
    })
    .join('\n');

  return (
    `📋 LISTA DE ENTRADAS - ${houseName.toUpperCase()}\n\n` +
    `🎯 Estratégia: Alvo Principal com Proteção em 1.50x\n` +
    `⚠️ Gestão: Máximo 1 Gale de Recuperação\n\n` +
    `⏰ Horários Confirmados:\n` +
    `${formattedRows}\n\n` +
    `🔗 Jogue aqui: ${houseUrl}\n` +
    `📲 Grupo VIP Oficial: ${VIP_GROUP_URL}    BOT HACKER B55`
  );
};

/**
 * Formatação Rápida de Status de Gráfico da Casa
 */
export const formatQuickAgendaCopy = (item: AgendaItem): string => {
  const houseUrl = getHouseUrl(item.id || item.house);
  const houseName = item.house.toUpperCase();
  const timeNow = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  return (
    `📊 STATUS DO MERCADO - ${houseName}\n\n` +
    `📈 Índice Pagador: ${item.paying.toFixed(0)}%\n` +
    `📉 Retenção: ${item.reclining.toFixed(0)}%\n` +
    `🎯 Situação: ${item.graphStatus}\n` +
    `⏰ Horário: ${timeNow}\n\n` +
    `🔗 Jogue aqui: ${houseUrl}\n` +
    `📲 Grupo VIP Oficial: ${VIP_GROUP_URL}    BOT HACKER B55`
  );
};

/**
 * Formatação Completa / Elite de Análise de Mercado & Insight do Mentor
 */
export const formatEliteAgendaCopy = (item: AgendaItem): string => {
  const houseUrl = getHouseUrl(item.id || item.house);
  const houseName = item.house.toUpperCase();
  const timeNow = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  return (
    `📋 ANÁLISE DE MERCADO - ${houseName}\n\n` +
    `📈 Ciclo Pagador: ${item.paying.toFixed(0)}% (${item.graphStatus})\n` +
    `💡 Parecer Técnico: "${item.efronInsight}"\n` +
    `⏰ Atualizado às: ${timeNow}\n\n` +
    `🔗 Jogue aqui: ${houseUrl}\n` +
    `📲 Grupo VIP Oficial: ${VIP_GROUP_URL}    BOT HACKER B55`
  );
};

/**
 * Relatório Geral de Radar das Casas de Moçambique
 */
export const formatAllAgendaReportCopy = (items: AgendaItem[]): string => {
  const timeNow = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  const formattedItems = items
    .map(item => {
      const url = getHouseUrl(item.id || item.house);
      return `• ${item.house.toUpperCase()} ➔ ${item.paying.toFixed(0)}% Payout (${item.graphStatus})\n  🔗 ${url}`;
    })
    .join('\n\n');

  return (
    `📊 RADAR DE HORÁRIOS - MOÇAMBIQUE\n\n` +
    `⏰ Atualizado às: ${timeNow}\n\n` +
    `Status das Plataformas:\n` +
    `${formattedItems}\n\n` +
    `📲 Grupo VIP Oficial: ${VIP_GROUP_URL}    BOT HACKER B55`
  );
};

/**
 * Orientação e Mensagem do Mentor DARK
 */
export const formatMentorAdviceCopy = (adviceText: string): string => {
  return (
    `🧠 DIRETRIZ DO MENTOR\n\n` +
    `"${adviceText}"\n\n` +
    `📲 Grupo VIP Oficial: ${VIP_GROUP_URL}    BOT HACKER B55`
  );
};

/**
 * Convite do Grupo VIP / Link do Sistema
 */
export const formatVipInviteCopy = (): string => {
  return (
    `💎 SALA VIP DARK BOT\n\n` +
    `Robô de operações para Aviator em Moçambique.\n\n` +
    `• Entradas com proteção em 1.50x e máx 1 gale\n` +
    `• Sinais para Txuna Bet, Elephant Bet, Premier Bet, 888bet e Placard\n\n` +
    `📲 Acesse agora o Grupo VIP:\n` +
    `${VIP_GROUP_URL}    BOT HACKER B55`
  );
};
