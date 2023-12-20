export const Translations: Record<string, Record<string, string>> = {
  Genres: {
    horror: 'ужасы',
    comedy: 'комедия',
    action: 'боевик',
    fantasy: 'фэнтези',
  },
};
export const MOVIE_API = process.env.NEXT_PUBLIC_API_BASE_URL;
console.dir(process.env);
