export default function TourDetailSkeleton() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <div className="h-[55vh] min-h-[380px] bg-gradient-to-br from-slate-300 to-slate-200 animate-pulse" />

      <section className="py-14 section-light">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl p-7 border border-slate-100 space-y-4">
                <div className="w-40 h-7 bg-slate-200 rounded-2xl animate-pulse" />
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-full h-14 bg-slate-100 rounded-2xl animate-pulse" />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[0, 1].map(i => (
                  <div key={i} className="bg-white rounded-3xl p-7 border border-slate-100 space-y-4">
                    <div className="w-32 h-6 bg-slate-200 rounded-xl animate-pulse" />
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-full h-4 bg-slate-100 rounded-lg animate-pulse" />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* Right */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-7 space-y-6">
                <div className="w-20 h-4 bg-slate-200 rounded-lg animate-pulse" />
                <div className="w-40 h-10 bg-slate-200 rounded-2xl animate-pulse" />
                <div className="space-y-4 py-4 border-t border-b border-slate-100">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex justify-between">
                      <div className="w-24 h-4 bg-slate-100 rounded-lg animate-pulse" />
                      <div className="w-20 h-4 bg-slate-100 rounded-lg animate-pulse" />
                    </div>
                  ))}
                </div>
                <div className="w-full h-14 bg-green-100 rounded-2xl animate-pulse" />
                <div className="w-full h-12 bg-blue-50 rounded-2xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
