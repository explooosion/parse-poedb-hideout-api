# parse-poedb-hideout-api
Parse poedb hideout name to other language.

## Parse 

1. Download api file from [https://poedb.tw/us/json.php/Hideouts/Hideouts](https://poedb.tw/us/json.php/Hideouts/Hideouts)

    *. You can change the locale by replace url `us` to ohter locale, example: `tw`, `cn`..etc

2. `npm install`

3. `node app.js`

4. Find the file `HideoutsParse.json` in your project.

## Properties

```json
{
    "data": [
        { 
            "CNAME": "藏身處-富饒之地", 
            "NAME": "Lush Hideout",
            "Icon : "...url"
        }
    ]
}
```