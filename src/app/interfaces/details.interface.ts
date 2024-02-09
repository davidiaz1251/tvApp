export interface Details {
    adult:                boolean;
    backdrop_path:        string;
    created_by:           any[];
    episode_run_time:     any[];
    first_air_date:       Date;
    genres:               any[];
    homepage:             string;
    id:                   number;
    in_production:        boolean;
    languages:            string[];
    last_air_date:        Date;
    last_episode_to_air:  any;
    name:                 string;
    next_episode_to_air:  any;
    networks:             any[];
    number_of_episodes:   number;
    number_of_seasons:    number;
    origin_country:       string[];
    original_language:    string;
    original_name:        string;
    overview:             string;
    popularity:           number;
    poster_path:          string;
    production_companies: any[];
    production_countries: any[];
    seasons:              any[];
    spoken_languages:     any[];
    status:               string;
    tagline:              string;
    type:                 string;
    vote_average:         number;
    vote_count:           number;
}

export interface Episode {
    _id:           string;
    air_date:      Date;
    episodes:      EpisodeElement[];
    name:          string;
    overview:      string;
    id:            number;
    poster_path:   string;
    season_number: number;
    vote_average:  number;
}

export interface EpisodeElement {
    air_date:        Date;
    episode_number:  number;
    id:              number;
    name:            string;
    overview:        string;
    production_code: string;
    runtime:         number;
    season_number:   number;
    show_id:         number;
    still_path:      null | string;
    vote_average:    number;
    vote_count:      number;
    crew:            any[];
    guest_stars:     any[];
}

