# What is Polcompballvalues?
PolcompballValues is a quiz aimed at members of the Polcompball community, in particular the discord server, that attempts to assign percentages for 28 different values based on common differentating factors of the community's population.

## Where is the old version of Polcompballvalues?
The old version is available on [this link](https://polcompballvalues.github.io/legacy/) with the code hosted on [this repository](https://github.com/Polcompballvalues/legacy).

## Where can I see which users I can get matched with if I take the test?
You can see the current available user scores in the [user gallery](https://polcompballvalues.github.io/gallery.html).

## How do I get added to the user gallery?
You can be added by taking the test and selecting the "Submit Your Scores" option at the bottom of the page, this will take you to a page with a text box and a "Send" button, simply enter the name you want to be added as to the test and click the senf button.

## Who worked on this test?
You can see the full list of involved members in the [credits](https://polcompballvalues.github.io/credits.html) page.

## What are the .sass, .coffee and .ts in this repository?
As you might be aware the web has been standardized on 3 main technologies, HTML, CSS and Javascript, but many alternative languages exist that provide compatibility with existing web technologies while building upon them with various quality of life improvements:

>Sass is a stylesheet language that compiles to css that offers improcements such as a cleaner syntax with less reliance on brackets, nesting, modules and many more.

>Coffeescript is similarly a scripting language that is designed to be compiled to javascript that offers a cleaner and more human-readable syntax with less reliance on brackets to ouline functions and the ability to use plain words such as "is" instead of the traditional "==" operator.

>Typescript is a superset of javascript that provides a way to assign types to variables and make sure these do not get changed, which comes in helpful in guaranteeing the desired outcomes if  your javascript code is doing some less-than-orthodox things with variables.

### How do I compile the .sass, .coffee and .ts files in the repo?
To compile these files into regular css and javascript you'll need to install node.js and the following packages (sass, coffeescript and typescript) and then run the compile commands of each, if you're on windows running the compile.ps1 file in the utilities folder will compile all the files for you, otherwise below there's a set of commands for the default versions of each environment:
```coffeescript
#installing the packages
npm i -g sass coffee typescript
#compiling the files
sass style.sass style.css
coffee -c -b script.coffee
tsc script.ts
```


