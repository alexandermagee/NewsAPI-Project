import React from 'react';

export const countryCodes = {
    countries : {
Argentina:
"ar",
Australia:
"au",
Austria:
"at",
Belgium:
"be",
Brazil:
"br",
Bulgaria:
"bg",
Canada:
"ca",
China:
"cn",
Colombia:
"co",
Cuba:
"cu",
["Czech Republic"]:
"cz",
Egypt:
"eg",
France:
"fr",
Germany:
"de",
Greece:
"gr",
["Hong Kong"]:
"hk",
Hungary:
"hu",
India:
"in",
Indonesia:
"id",
Ireland:
"ie",
Israel:
"il",
Italy:
"it",
Japan:
"jp",
Latvia:
"lv",
Lithuania:
"lt",
Malaysia:
"my",
Mexico:
"mx",
Morocco:
"ma",
Netherlands:
"nl",
["New Zealand"]:
"nz",
Nigeria:
"ng",
Norway:
"no",
Philippines:
"ph",
Poland:
"pl",
Portugal:
"pt",
Romania:
"ro",
Russia:
"ru",
["Saudi Arabia"]:
"sa",
Serbia:
"rs",
Singapore:
"sg",
Slovakia:
"sk",
Slovenia:
"si",
["South Africa"]:
"za",
["South Korea"]:
"kr",
Sweden:
"se",
Switzerland:
"ch",
Taiwan:
"tw",
Thailand:
"th",
Turkey:
"tr",
UAE:
"ae",
Ukraine:
"ua",
["United Kingdom"]:
"gb",
["United States"]:
"us",
Venuzuela:
"ve" },

get list () {
    return (
        Object.keys(this.countries).map((country,i) => {
           return <option value={country} key={i} >{country}</option>
        }
    )
    )
}
}

//export const category 