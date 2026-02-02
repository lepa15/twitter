export default function PopularTopics() {
  return (
    <div className=" px-4 py-2 bg-white rounded-lg shadow-[0_5px_30px_0_rgba(0,0,0,0.05)] w-full max-w-80">
      <div className="font-bold text-[18px] leading-[178%] text-[#1d1e22]">Популярные темы</div>
      <ul className="mt-3 flex flex-col gap-1">
        <li>
          <p className="font-bold text-[18px] leading-[178%] text-[#1d1e22]">#javascript</p>
          <p className="mt-0.5 font-normal text-xs leading-4 text-slate-400">2 941 сообщение</p>
        </li>
        <li>
          <p className="font-bold text-[18px] leading-[178%] text-[#1d1e22]">#python3</p>
          <p className="mt-0.5 font-normal text-xs leading-4 text-slate-400">29 718 сообщений</p>
        </li>
        <li>
          <p className="font-bold text-[18px] leading-[178%] text-[#1d1e22]">#ruby</p>
          <p className="mt-0.5 font-normal text-xs leading-4 text-slate-400">958 186 сообщений</p>
        </li>
        <li>
          <p className="font-bold text-[18px] leading-[178%] text-[#1d1e22]">#как_научиться_коду?</p>
          <p className="mt-0.5 font-normal text-xs leading-4 text-slate-400">4 185 сообщений</p>
        </li>
        <li>
          <p className="font-bold text-[18px] leading-[178%] text-[#1d1e22]">#помогите_с_кодом</p>
          <p className="mt-0.5 font-normal text-xs leading-4 text-slate-400">482 сообщения</p>
        </li>
      </ul>
    </div>
  );
}
