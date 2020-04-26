import React from 'react';

/* 
Registration complete
Your API key is: 60b5ca9165374ce1987da329db6a4e4c

For help getting started please look at our getting started guide.

We post API status updates and other news on our Twitter feed, so please follow us there if that's important to you:

*/



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
            return(
            (country === "United Kingdom") ?
            <option value={country} key={i} selected="selected" >{country}</option> :
            <option value={country} key={i}>{country}</option>
            )
        }
    )
    )
}
}

export const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"]