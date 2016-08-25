# Image auto refresh server

## Introduction

Say you have a program that generates an image file.
Once the build script is executed, you want to immediately see the results.
This server will automatically push an image to your browser when it has changed.

## Requirements

[Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/).

## Installation and usage

    $ git clone https://github.com/ivarref/image-png-auto-refresh-server.git

    $ cd image-png-auto-refresh-server

    $ npm install

    $ npm run start

At this point you should get an error message like this:

    Failed to compile.

    Error in ./src/App.js
    Module not found: ./image.png in (...)/image-png-auto-refresh-server/src
     @ ./src/App.js 13:13-35

Now you must configure your image build script to copy the generated image to `image-png-auto-refresh-server/src/image.png`.

After you've executed the build script, your browser should automatically refresh the image and show it at [http://localhost:3000/](http://localhost:3000/).

