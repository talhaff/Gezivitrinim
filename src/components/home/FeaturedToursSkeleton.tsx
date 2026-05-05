export default function FeaturedToursSkeleton() {
  return (
    <section className="py-20 section-light">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header skeleton */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="w-40 h-6 bg-slate-200 rounded-full animate-pulse" />
            <div className="w-64 h-10 bg-slate-200 rounded-2xl animate-pulse" />
            <div className="w-48 h-10 bg-slate-200 rounded-2xl animate-pulse" />
          </div>
          <div className="w-32 h-6 bg-slate-200 rounded-full animate-pulse" />
        </div>

        {/* Cards grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card-tour animate-pulse">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-100 rounded-t-3xl" />
              <div className="p-5 space-y-3">
                <div className="w-3/4 h-5 bg-slate-200 rounded-xl" />
                <div className="w-1/2 h-4 bg-slate-100 rounded-xl" />
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="w-24 h-7 bg-slate-200 rounded-xl" />
                  <div className="w-16 h-8 bg-slate-100 rounded-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
