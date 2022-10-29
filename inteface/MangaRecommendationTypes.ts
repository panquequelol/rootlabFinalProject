export interface Jpg {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Webp {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Images {
  jpg: Jpg;
  webp: Webp;
}

export interface Entry {
  mal_id: number;
  url: string;
  images: Images;
  title: string;
}

export default interface MangaRecommendation {
  entry: Entry;
  url: string;
  votes: number;
}