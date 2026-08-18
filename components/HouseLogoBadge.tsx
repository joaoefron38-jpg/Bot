import React from 'react';

interface HouseLogoBadgeProps {
  houseId: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const HouseLogoBadge: React.FC<HouseLogoBadgeProps> = ({ houseId, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-7 h-7 text-[10px]',
    md: 'w-10 h-10 text-xs',
    lg: 'w-14 h-14 text-sm',
    xl: 'w-20 h-20 text-lg'
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;

  switch (houseId) {
    case 'elephant':
      return (
        <div className={`relative rounded-2xl flex items-center justify-center font-black tracking-tighter bg-gradient-to-br from-[#FF6B00] via-[#E05300] to-[#8F2800] text-white shadow-md border border-orange-400/30 overflow-hidden ${currentSize} ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none" />
          <svg className="w-2/3 h-2/3 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.5 8.5C18.5 5 15.5 3 11 3C6.5 3 3 6.5 3 11c0 3 1.5 5.5 4 7v3h3v-3h2v3h3v-3c2.5-1 4-3.5 4-6.5c0-.5 0-1-.5-1.5zm-8.5 7c-2.5 0-4.5-2-4.5-4.5S8.5 6.5 11 6.5s4.5 2 4.5 4.5s-2 4.5-4.5 4.5z" opacity="0.3"/>
            <path d="M12 4C7.58 4 4 7.58 4 12c0 2.61 1.26 4.93 3.2 6.39L7 21h3v-2h4v2h3l-.2-2.61C18.74 16.93 20 14.61 20 12c0-4.42-3.58-8-8-8zm-3 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
          </svg>
          <span className="absolute bottom-0.5 text-[6px] font-black uppercase tracking-wider text-orange-200">ELEPHANT</span>
        </div>
      );

    case 'txunabet':
      return (
        <div className={`relative rounded-2xl flex items-center justify-center font-black tracking-tighter bg-gradient-to-br from-[#FFD000] via-[#FF8800] to-[#D62200] text-black shadow-md border border-yellow-400/40 overflow-hidden ${currentSize} ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 to-transparent pointer-events-none" />
          <div className="flex flex-col items-center justify-center">
            <span className="font-black italic text-[11px] leading-none tracking-tighter text-black drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">TXUNA</span>
            <span className="text-[6px] font-black uppercase tracking-widest text-red-950 bg-yellow-300/80 px-1 rounded-sm mt-0.5">BET.MZ</span>
          </div>
        </div>
      );

    case 'premier':
      return (
        <div className={`relative rounded-2xl flex items-center justify-center font-black tracking-tighter bg-gradient-to-br from-[#E50914] via-[#B8000A] to-[#600005] text-white shadow-md border border-red-400/30 overflow-hidden ${currentSize} ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none" />
          <div className="flex flex-col items-center justify-center">
            <svg className="w-4 h-4 text-amber-300 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
            </svg>
            <span className="text-[7px] font-black uppercase tracking-tight text-white leading-none mt-0.5">PREMIER</span>
          </div>
        </div>
      );

    case '888bet':
      return (
        <div className={`relative rounded-2xl flex items-center justify-center font-black tracking-tighter bg-gradient-to-br from-[#1E1E24] via-[#111115] to-[#050507] text-[#FF5F00] shadow-md border border-orange-500/30 overflow-hidden ${currentSize} ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/15 to-transparent pointer-events-none" />
          <div className="flex flex-col items-center justify-center">
            <span className="font-black text-sm tracking-tighter text-[#FF6A00] drop-shadow-[0_0_8px_rgba(255,106,0,0.5)]">888</span>
            <span className="text-[6px] font-black uppercase tracking-widest text-zinc-400 leading-none">BET</span>
          </div>
        </div>
      );

    case 'placard':
      return (
        <div className={`relative rounded-2xl flex items-center justify-center font-black tracking-tighter bg-gradient-to-br from-[#0055FF] via-[#003CB8] to-[#001D66] text-white shadow-md border border-blue-400/30 overflow-hidden ${currentSize} ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none" />
          <div className="flex flex-col items-center justify-center">
            <span className="font-black italic text-xs text-white leading-none tracking-tight">PLACARD</span>
            <span className="text-[6px] font-black uppercase tracking-widest text-blue-200">.CO.MZ</span>
          </div>
        </div>
      );

    case 'betway':
      return (
        <div className={`relative rounded-2xl flex items-center justify-center font-black tracking-tighter bg-gradient-to-br from-[#18181B] via-[#09090B] to-[#000000] text-white shadow-md border border-emerald-500/30 overflow-hidden ${currentSize} ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/15 to-transparent pointer-events-none" />
          <div className="flex items-center gap-0.5">
            <span className="font-black text-xs text-white lowercase tracking-tighter">betway</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
        </div>
      );

    case 'olabet':
      return (
        <div className={`relative rounded-2xl flex items-center justify-center font-black tracking-tighter bg-gradient-to-br from-[#00C853] via-[#009624] to-[#004D40] text-white shadow-md border border-emerald-400/30 overflow-hidden ${currentSize} ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none" />
          <div className="flex flex-col items-center justify-center">
            <span className="font-black text-xs text-white uppercase tracking-tight">OLÁ</span>
            <span className="text-[6px] font-black uppercase tracking-widest text-emerald-200 bg-black/30 px-1 rounded-sm">BET</span>
          </div>
        </div>
      );

    case 'jogabet':
      return (
        <div className={`relative rounded-2xl flex items-center justify-center font-black tracking-tighter bg-gradient-to-br from-[#059669] via-[#047857] to-[#064E3B] text-white shadow-md border border-emerald-400/30 overflow-hidden ${currentSize} ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none" />
          <div className="flex flex-col items-center justify-center">
            <span className="font-black text-xs text-white uppercase tracking-tight">JOGA</span>
            <span className="text-[6px] font-black uppercase tracking-widest text-emerald-200">BET.MZ</span>
          </div>
        </div>
      );

    case '1xbet':
      return (
        <div className={`relative rounded-2xl flex items-center justify-center font-black tracking-tighter bg-gradient-to-br from-[#0088CC] via-[#005599] to-[#002D62] text-white shadow-md border border-sky-400/30 overflow-hidden ${currentSize} ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/25 to-transparent pointer-events-none" />
          <div className="flex items-center gap-0.5">
            <span className="font-black text-xs text-sky-300">1X</span>
            <span className="font-black text-xs text-white">BET</span>
          </div>
        </div>
      );

    case '888starz':
      return (
        <div className={`relative rounded-2xl flex items-center justify-center font-black tracking-tighter bg-gradient-to-br from-[#B91C1C] via-[#6B21A8] to-[#1E1B4B] text-white shadow-md border border-red-400/30 overflow-hidden ${currentSize} ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none" />
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-0.5">
              <span className="font-black text-xs text-red-400">888</span>
              <span className="text-amber-300 text-[10px]">★</span>
            </div>
            <span className="text-[5px] font-black uppercase tracking-widest text-white/80">STARZ</span>
          </div>
        </div>
      );

    case 'betyetu':
      return (
        <div className={`relative rounded-2xl flex items-center justify-center font-black tracking-tighter bg-gradient-to-br from-[#DC2626] via-[#991B1B] to-[#450A0A] text-white shadow-md border border-rose-400/30 overflow-hidden ${currentSize} ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none" />
          <div className="flex flex-col items-center justify-center">
            <span className="font-black text-xs text-white tracking-tighter">BETYETU</span>
            <span className="text-[5px] font-black uppercase tracking-widest text-rose-200">MZ</span>
          </div>
        </div>
      );

    default:
      return (
        <div className={`relative rounded-2xl flex items-center justify-center font-black tracking-tighter bg-gradient-to-br from-zinc-800 to-zinc-950 text-accent shadow-md border border-white/10 overflow-hidden ${currentSize} ${className}`}>
          <span className="font-black text-xs uppercase">{houseId.substring(0, 3)}</span>
        </div>
      );
  }
};
