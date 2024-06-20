
function Brand() {
  return (
    <div className="pb-10 mx-20">
      <div>
        <h1 className="font-semibold text-center text-6xl text-slate-700 pb-10 px-32">A brand and product designer working with clients globally</h1>
      </div>
      
        <ul className="flex flex-nowrap justify-center">
        <li className="mx-2">Expertise</li>
        <li className="mx-2 rounded-full bg-slate-200 px-3">Branding</li>
        <li className="mx-2 rounded-full bg-slate-200 px-3">Product</li>
        <li className="mx-2 rounded-full bg-slate-200 px-3">Desing sysetems</li>
        </ul>
        <div className="grid grid-cols-2 justify-items-center gap-4 px-10 mt-20">
          <img src="/Images/logo3x.png" width={500} className="rounded-xl mb-6"/>
          <img src="/Images/logo4x.png" width={500} className="rounded-xl mb-6"/>
          <img src="/Images/logo7x.png" width={500} className="rounded-xl mb-6"/>
          <img src="/Images/logo6x.png" width={500} className="rounded-xl"/>
          <img src="/Images/logo9x.png" width={500} className="rounded-xl"/>
          <img src="/Images/logo2x.png" width={500} className="rounded-xl"/>
        </div>

        <div className="mb-12 mt-36">
          <h2 className="text-center">Let's work together</h2>
          <h3 className="text-slate-400 text-center">Get in touch</h3>
        </div>
      
    </div>
  )
}

export default Brand;
