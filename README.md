## ng2 Retina
[![Test Coverage](https://codeclimate.com/github/matthiaskomarek/ng2-retina/badges/coverage.svg)](https://codeclimate.com/github/matthiaskomarek/ng2-retina/coverage)
[![Code Climate](https://codeclimate.com/github/matthiaskomarek/ng2-retina/badges/gpa.svg)](https://codeclimate.com/github/matthiaskomarek/ng2-retina)
[![Build Status](https://semaphoreci.com/api/v1/projects/ed01aba1-6b7a-4000-bf58-a3a96ca72a8d/660295/badge.svg)](https://semaphoreci.com/matthiaskomarek/ng2-retina)

Adds support for Retina displays. <br>
If the browser runs on a Retina resolution and the reference image is available in double resoltion. It loads the Retina Image from the server.

### Usage
Include the src/app/retina-image.ts file in your project.

Import the Directive in your App: <br>
```
import {NgRetina} from './retina-image';
```

Use the directive in your HTML:
```
<img [ngRetina]="'img/angular-logo.png'" alt="">
```

