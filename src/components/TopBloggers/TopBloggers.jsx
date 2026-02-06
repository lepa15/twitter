export default function TopBloggers() {
  return (
    <div className=" px-4 py-2 bg-white rounded-lg shadow-[0_5px_30px_0_rgba(0,0,0,0.05)] w-full max-w-80">
      <h1 className="font-bold text-[18px] leading-[178%] text-[#1d1e22]">Интересные блогеры</h1>
      <div className="flex flex-col">
        <div className="py-2 flex justify-between items-center gap-8">
          <div className="flex gap-4">
            <div className="w-[48px] h-[48px] shrink-0">
              <img className="w-full h-auto"
                src="/Habr.svg" alt="Habr Logo"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="min-w-0 truncate max-w-28 font-bold text-base leading-tight text-slate-900">Хабр Научпоп</p>
              <p className="font-normal text-sm leading-4 text-slate-400">@habr_popsci</p>
            </div>
          </div>
          <button className="read-button">Читать</button>
        </div>
        <div className="py-2 flex justify-between items-center">
          <div className="flex gap-4">
            <div className="w-[48px] h-[48px] shrink-0">
              <img className="w-full h-auto"
                   src="/MatchTV.svg" alt="MatchTV Logo"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="min-w-0 truncate max-w-28 font-bold text-base leading-tight text-slate-900">Матч ТВ</p>
              <p className="font-normal text-sm leading-4 text-slate-400">@MatchTV</p>
            </div>
          </div>
          <button className="read-button">Читать</button>
        </div>
        <div className="py-2 flex justify-between items-center">
          <div className="flex gap-4">
            <div className="w-[48px] h-[48px] shrink-0">
              <img className="w-full h-auto"
                   src="/PopMech.svg" alt="PopMech Logo"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="min-w-0 truncate max-w-28 font-bold text-base leading-tight text-slate-900">Популярная меха...</p>
              <p className="font-normal text-sm leading-4 text-slate-400">@PopMechanica</p>
            </div>
          </div>
          <button className="read-button">Читать</button>
        </div>
      </div>
    </div>
  );
}
