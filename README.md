# Color_A_Word

## About 📋

The aim of this project is to create a front end web application, with a responsive UI,
which when given a word as input gives out a list of colors related to that word.

We have used JavaScript to fetch the color details from the API mentioned below in json format 
and displayed them in the form of a masonry grid of color cards using HTML and CSS.

We have also used online free hosting platform InfintyFree https://infinityfree.net to host this web application.</br>
Link to our web application: http://colourword.rf.gd

## Source: Color 📖

#### All Color Names 📚

Color Count: 29230

[JSON](https://unpkg.com/color-name-list/dist/colornames.json)
/ [JSON.min](https://unpkg.com/color-name-list/dist/colornames.min.json)
/ [CSV](https://unpkg.com/color-name-list/dist/colornames.csv)
/ [YML](https://unpkg.com/color-name-list/dist/colornames.yaml)
/ [JS](https://unpkg.com/color-name-list/dist/colornames.umd.js)
/ [XML](https://unpkg.com/color-name-list/dist/colornames.xml)
/ [HTML](https://unpkg.com/color-name-list/dist/colornames.html)
/ [SCSS](https://unpkg.com/color-name-list/dist/colornames.scss)

### API 🃏

```url
https://api.color.pizza/v1/{{hexvalue without the #}},{{more comma separated values}}
```

or

```url
https://api.color.pizza/v1/?values={{hexvalue without the #}},{{more comma separated values}}
```

#### Single Color

`curl` [https://api.color.pizza/v1/212121](https://api.color.pizza/v1/212121)

```javascript
{
  "colors": [{
    "name": "Lead",
    "hex": "#212121",
    "rgb": {"r": 33, "g": 33, "b": 33},
    "distance": 0, // its an exact match
    "luminance": 22.062320231562225,
    "requestedHex": "#212121",
  }]
}
```

#### Multiple Colors

`curl` [https://api.color.pizza/v1/212121,060606,ff0012,550055,123456](https://api.color.pizza/v1/212121,060606,ff0012,550055,123456)
or
`curl` [https://api.color.pizza/v1/?values=212121,060606,ff0012,550055,123456](https://api.color.pizza/v1/?values=212121,060606,ff0012,550055,123456)

#### All Named Colors

`curl` [https://api.color.pizza/v1/](https://api.color.pizza/v1/)

In this case colors is not an `object` but an `array` of `objects` sorted by color-name

#### Unique Color-Names

by adding `?noduplicates=true` every returned name will be unique.
The closest color, that was not returned previously will be returned:
`curl` [https://api.color.pizza/v1/?values=212121,212121&noduplicates=true](https://api.color.pizza/v1/?values=212121,212121&noduplicates=true)

```javascript
{
  "colors": [{
    "name": "Lead",
    "hex": "#212121",
    "rgb": { "r": 33, "g": 33, "b": 33 },
    "luminance": 22.062320231562225
  },{
    "name": "Abaddon Black",
    "hex": "#231f20",
    "rgb": { "r": 35, "g": 31, "b": 32 },
    "luminance": 21.30621829419759
  }]
}
```

#### Search for colors by name

```url
https://api.color.pizza/v1/names/{{query}}
```

or

```url
https://api.color.pizza/v1/names/?name={{query}}
```

Returns an `array` of color `objects` which match the given query, sorted by color-name:
`curl` [https://api.color.pizza/v1/names/red](https://api.color.pizza/v1/names/red)
