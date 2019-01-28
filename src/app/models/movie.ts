export interface MovieList {
  VODs: Movie[];
}

export interface Movie {
  ID: string;
  name: string;

  introduce?: string;

}
