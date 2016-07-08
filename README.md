sugo-demo-interface
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_com_shield_url]][bd_travis_com_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sugo-demo-interface
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sugo-demo-interface
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sugo-demo-interface.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sugo-demo-interface
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sugo-demo-interface.svg?token=aeFzCpBZebyaRijpCFmm
[bd_license_url]: https://github.com/realglobe-Inc/sugo-demo-interface/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sugo-demo-interface
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sugo-demo-interface.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sugo-demo-interface.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sugo-demo-interface
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sugo-demo-interface.svg
[bd_npm_url]: http://www.npmjs.org/package/sugo-demo-interface
[bd_npm_shield_url]: http://img.shields.io/npm/v/sugo-demo-interface.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Demo SUGO-Interface

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/00.Requirements.md.hbs" Start -->

<a name="section-doc-guides-00-requirements-md"></a>
Requirements
-----

<a href="https://nodejs.org">
  <img src="https://realglobe-inc.github.io/sugos-assets/images/nodejs-banner.png"
       alt="Node.js"
       height="40"
       style="height:40px"
  /></a>
<a href="https://docs.npmjs.com/">
  <img src="https://realglobe-inc.github.io/sugos-assets/images/npm-banner.png"
       alt="NPM"
       height="40"
       style="height:40px"
  /></a>

+ [Node.js ( >=6 )][node_download_url]
+ [npm ( >=3 )][npm_url]

[node_download_url]: https://nodejs.org/en/download/
[npm_url]: https://docs.npmjs.com/


<!-- Section from "doc/guides/00.Requirements.md.hbs" End -->

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>
Installation
-----

```bash
$ npm install sugo-demo-interface --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>
Usage
---------

Register interface to SUGO-Spot

```javascript
#!/usr/bin/env node

/**
 * Example usage of the terminal
 */
'use strict'

const sugoDemoInterface = require('sugo-demo-interface')
const sugoSpot = require('sugo-spot')
const co = require('co')

co(function * () {
  let spot = sugoSpot('http://my-sugo-cloud.example.com/spots', {
    key: 'my-spot-01',
    interfaces: {
      // Register the interface
      myInterface01: sugoDemoInterface({})
    }
  })
  yield spot.connect()
}).catch((err) => console.error(err))

```

Then, call the interface from remote terminal.

```javascript
#!/usr/bin/env node

/**
 * Example control from remote terminal
 */
'use strict'

const co = require('co')
const assert = require('assert')
const sugoTerminal = require('sugo-terminal')

co(function * () {
  let terminal = sugoTerminal('http://my-sugo-cloud.example.com/terminals', {})
  let spot = terminal.connect('my-spot-01')

  // Access to the interface
  let myInterface01 = spot.myInterface01()

  // Send ping
  let pong = yield myInterface01.ping()
  assert.ok(pong)
}).catch((err) => console.error(err))

```

<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Methods.md.hbs" Start -->

<a name="section-doc-guides-03-methods-md"></a>
Methods
---------

The following methods are available from remote terminals for the interface.

+ [.ping(pong) -> string](#method-ping)
+ [.assert() -> boolean](#method-assert)

<a name="method-ping"></a>
### .ping(pong) -> <code>string</code>

Test the reachability of an interface.

| Param | Type | Description |
| ----- | ---- | ----------- |
| pong  | <code>string</code> | Pong message to return |

<a name="method-assert"></a>
### .assert() -> <code>boolean</code>

Test if the spot fulfills system requirements



<!-- Section from "doc/guides/03.Methods.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/realglobe-Inc/sugo-demo-interface/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [SUGOS](https://github.com/realglobe-Inc/sugos)

<!-- Links End -->
