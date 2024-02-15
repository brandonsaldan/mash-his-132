export default function EntertainmentValue() {
  return (
    <div className="bg-[#f7f6ed]">
      <div className="mx-auto sm:max-w-5xl 2xl:max-w-7xl px-6 sm:px-8 lg:px-0 fadeInUp-animation">
        <div>
          <div className="h-96 w-full rounded-2xl overflow-hidden">
            <img className="w-full h-full object-cover" src="/assets/entertainment-banner.webp" />
          </div>
        </div>
      </div>
      <div className="relative isolate pt-8 fadeInUp-animation">
        <div className="mx-auto sm:max-w-5xl 2xl:max-w-7xl">
          <div className="px-8">
            <h1 className="text-4xl font-semibold tracking-tight text-[#333333] sm:text-3xl">
              Entertainment Value
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              M*A*S*H offers a unique blend of dark humor, sharp wit, and poignant drama that continues to captivate audiences decades after its release. The film's irreverent portrayal of the chaos and absurdity of war, coupled with its memorable characters and clever dialogue make it a timeless classic.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Beyond its comedic elements, M*A*S*H explores deeper themes of camaraderie, morality, and the human cost of war. The camaraderie among the staff of the 4077th Mobile Army Surgical Hospital provides moments of warmth and humanity amidst an otherwise brutal and unjust war.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The film received major critical acclaim upon its release and has since been recognized as one of the greatest comedies of the 1970s. The film holds an 84% approval rating on <a href="https://www.rottentomatoes.com/m/mash" className="text-[#39bc9f] hover:text-[#63cfb7] transition-colors">Rotten Tomatoes</a>, based on 58 reviews, with an average rating of 8.30/10. M*A*S*H was <a href="https://www.imdb.com/title/tt0066026/awards/" className="text-[#39bc9f] hover:text-[#63cfb7] transition-colors">nominated</a> for five Academy Awards, including Best Picture, and won the Palme d'Or at the 1970 Cannes Film Festival. It also inspired the <a href="https://www.imdb.com/title/tt0068098/" className="text-[#39bc9f] hover:text-[#63cfb7] transition-colors">long-running television series of the same name</a>, which further solidified its place in global popular culture.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}