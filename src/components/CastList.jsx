import { FaImdb } from "react-icons/fa";

const people = [
  {
    name: 'Robert Altman',
    role: 'Director',
    imageUrl:
      '/assets/cast/altman.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0000265/',
  },
  {
    name: 'Donald Sutherland',
    role: 'Capt. Benjamin Franklin "Hawkeye" Pierce Jr',
    imageUrl:
      '/assets/cast/sutherland.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0000661/',
  },
  {
    name: 'Elliott Gould',
    role: 'Capt. John Francis "Trapper John" McIntyre',
    imageUrl:
      '/assets/cast/gould.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0001285/',
  },
  {
    name: 'Tom Skerritt',
    role: 'Capt. Augustus "Duke" Forrest',
    imageUrl:
      '/assets/cast/skerritt.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0000643/',
  },
  {
    name: 'Sally Kellerman',
    role: 'Major Margaret "Hot Lips" Houlihan',
    imageUrl:
      '/assets/cast/kellerman.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0001419/',
  },
  {
    name: 'Robert Duvall',
    role: 'Major Frank Burns',
    imageUrl:
      '/assets/cast/duvall.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0000380/',
  },
  {
    name: 'Roger Bowen',
    role: 'Lt. Col. Henry Braymore Blake',
    imageUrl:
      '/assets/cast/bowen.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0100911/',
  },
  {
    name: 'René Auberjonois',
    role: 'Father John Mulcahy',
    imageUrl:
      '/assets/cast/auberjonois.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0041281/',
  },
  {
    name: 'David Arkin',
    role: 'Sergeant First Class Wade Douglas Vollmer',
    imageUrl:
      '/assets/cast/placeholder.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0035069/',
  },
  {
    name: 'Jo Ann Pflug',
    role: 'Lt. Maria "Dish" Schneider',
    imageUrl:
      '/assets/cast/pflug.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0679539/',
  },
  {
    name: 'John Schuck',
    role: 'Capt. Walter "The Painless Pole" Waldowski',
    imageUrl:
      '/assets/cast/schuck.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0775870/',
  },
  {
    name: 'Carl Gottlieb',
    role: 'Capt. John "Ugly John" Black',
    imageUrl:
      '/assets/cast/gottlieb.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0331956/',
  },
  {
    name: 'Danny Goldman',
    role: 'Capt. Dennis Murrhardt',
    imageUrl:
      '/assets/cast/goldman.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0325761/',
  },
  {
    name: 'Corey Fischer',
    role: 'Capt. Patrick "Band-Aid" Bandini',
    imageUrl:
      '/assets/cast/fischer.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0278862/',
  },
  {
    name: 'Indus Arthur',
    role: 'Lt. Leslie',
    imageUrl:
      '/assets/cast/arthur.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0037774/',
  },
  {
    name: 'Dawne Damon',
    role: 'Lt. Wilma "Scorch" Storch',
    imageUrl:
      '/assets/cast/placeholder.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0198923/',
  },
  {
    name: 'Tamara Horrocks',
    role: 'Capt. Bridget "Knocko" McCarthy',
    imageUrl:
      '/assets/cast/placeholder.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0000661/',
  },
  {
    name: 'Gary Burghoff',
    role: 'Cpl. Walter "Radar" O’Reilly',
    imageUrl:
      '/assets/cast/burghoff.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0121400/?',
  },
  {
    name: 'Ken Prymus',
    role: 'Pfc. Seidman',
    imageUrl:
      '/assets/cast/prymus.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0699368/?',
  },
  {
    name: 'Fred Williamson',
    role: 'Capt. Oliver Harmon "Spearchucker" Jones',
    imageUrl:
      '/assets/cast/williamson.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0004365/',
  },
  {
    name: 'Michael Murphy',
    role: 'Capt. Ezekiel Bradbury "Me Lay" Marston V',
    imageUrl:
      '/assets/cast/murphy.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0614526/',
  },
  {
    name: 'Timothy Brown',
    role: 'Cpl. Judson',
    imageUrl:
      '/assets/cast/brown.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0114790/',
  },
  {
    name: 'Bud Cort',
    role: 'Pvt. Warren Boone',
    imageUrl:
      '/assets/cast/cort.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0001069/',
  },
  {
    name: 'George Wood',
    role: 'Brig. Gen. Charlie Hammond',
    imageUrl:
      '/assets/cast/wood.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0939707/',
  },
  {
    name: 'Kim Atwood',
    role: 'Ho-Jon',
    imageUrl:
      '/assets/cast/placeholder.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0041191/',
  },
  {
    name: 'Dale Ishimoto',
    role: 'Korean Doctor',
    imageUrl:
      '/assets/cast/ishimoto.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0411113/',
  },
  {
    name: 'Bobby Troup',
    role: 'Sgt. Gorman',
    imageUrl:
      '/assets/cast/troup.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0873757/',
  },
  {
    name: 'Marvin Miller',
    role: 'PA Announcer',
    imageUrl:
      '/assets/cast/placeholder.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0588922/',
  },
  {
    name: 'Ben Davidson',
    role: 'Football Opponent #88',
    imageUrl:
      '/assets/cast/placeholder.webp',
    imdbUrl: 'https://www.imdb.com/name/nm0203234/',
  },
  // More people...
]

export default function Example() {
  return (
    <div className="bg-[#f7f6ed] py-24 sm:py-1">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li className="fadeInUp-animation" key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover shadow-lg" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a href={person.imdbUrl} className="text-gray-400 hover:text-gray-500 transition-colors">
                    <FaImdb className="h-6 w-6" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}