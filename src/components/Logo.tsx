import logo from '../assets/logo.jpg'

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <img
        src={logo}
        alt="Klinik Pergigian Dr Hawa logo"
        className="w-10 h-10 rounded-full flex-shrink-0 object-cover"
      />
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-extrabold tracking-tight ${light ? 'text-white' : 'text-[#1A1A2E]'}`}>
          Dr Hawa
        </span>
        <span className="text-[10px] font-medium tracking-wide text-gray-400">
          KLINIK PERGIGIAN
        </span>
      </span>
    </span>
  )
}
