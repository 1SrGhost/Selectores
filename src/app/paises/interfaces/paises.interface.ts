export interface iPaisSmall {
  name: string;
  alpha3Code: string;
}

export interface iPais {
  name:           string;
  topLevelDomain: string[];
  alpha2Code:     string;
  alpha3Code:     string;
  callingCodes:   string[];
  capital:        string;
  altSpellings:   string[];
  region:         string;
  subregion:      string;
  population:     number;
  latlng:         number[];
  demonym:        string;
  area:           number;
  gini:           number;
  timezones:      string[];
  borders:        string[];
  nativeName:     string;
  numericCode:    string;
  currencies:     iCurrency[];
  languages:      iLanguage[];
  translations:   iTranslations;
  flag:           string;
  regionalBlocs:  iRegionalBloc[];
  cioc:           string;
}

export interface iCurrency {
  code:   string;
  name:   string;
  symbol: string;
}

export interface iLanguage {
  iso639_1:   string;
  iso639_2:   string;
  name:       string;
  nativeName: string;
}

export interface iRegionalBloc {
  acronym:       string;
  name:          string;
  otherAcronyms: string[];
  otherNames:    string[];
}

export interface iTranslations {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
}
