# Push code on the git

1- ```git init```

2- I will first of all my main branch is "master", We just create main branch as a "main" .</br>
  ``` git branch -M main``` </br> //creating default branch as a main instead of master

3- git add . </br>

4- git commit -m "message" </br>

5- local git does not know what is "Remote", So first of all i will have to configure  </br>
  ```git remote add origin git@github.com:User/UserRepo.git``` </br>
  So, I am adding remote So this steps I have to do once to setup our local to remot repositery. When I enter url that's mean I have added "origin" </br>

6- ```git push origin main ``` 
# npm
npm is a standard repositery for all the packages, its one of the biggest package mamagers. any package we need to include our project, we can use npm. All the packages hosted over there
# Package.json
Package is a configuration for npm,Its keep a track of what version of package install into our system. npm will take care all what is version of the package (library, depedencies) and Where will take care? It will take care in package.json.
# Most important package 'bundler'
```What is a bundler? ``` When we have normal ```HTML CSS and JS file```, Our whole code needs to be ```bundle together```, Our whole code needs to be ```minified```, Our whole code needs to be ```Cached```, Our whole code needs to be ```compressed```, Our whole code needs to be ```cleand ```before it can be sent to ```production```.</br>
bundler Ex -  webPack, parcel --etc   These are bundlers. </br>
When we create a ``` create react app ``` that ```create react app``` behind the scenes uses ```webpack``` bundler </br>
In this project we are using ```parcel``` bundler , parcel is one of the  best library out there which we will use in our app, parcel will ignite our app, </br>
Right now suppose app as a skeleton with bones, parcel will give it muscles to it, parcel will give it strength to our app.
# Dependencies in package.json
There are two types of packages or two types of dependencies that we can install </br>
     One is the ```Dev dependencies``` and one are the ```normal dependencies``` </br>

1- ```Dev dependencies``` : it means it is generally required for in a development app </br>

2  ```Normal dependencies``` : It is used in production also </br>

```Parcel``` - </br>
        This parcel is bundler, minification, chunking is done,  where?, is not done on production, We will do this in a development phase, So we will install parcel as a Dev dependencies and this is how we tell npm —-> ```npm install  -D  parcel```  —---> -D for Dev dependencies.
# package-lock.json
```package-lock.json``` keep a track of exact version for all the dependecies that is being install </br>
Supppose if today 2.8.5 (parcel version) release, My ```package.json``` will stay like this ---> ```"parcel": "^2.8.3"``` or my package.json can have point ```"^2.8.3"``` but ```package-lock.json``` kind of locks the exact version and keeps a record of it and package.json can have ```caret(^) or tild (~)```</br>

Why this package-lock.json usefull ? </br>
So 'package.json' keeps a approxe version of it and 'package-lock.json' has exact ```2.8.5``` version. </br>
What is this integrity in package-lock.json?</br>
Integrity is basically ```hash```. A ```sha512``` is hash</br>
Why is this ```hash``` present over there? </br>
This ```hash``` is because (we listend a lot of developer say's, Its (code) working on my local but its not  working on my production) basically to avoid that package-lock.json, keeps a hash to verify that whatever is there right now in my dev machine, is the same version which is being deployed on to the production.
# node_modules
This node_modules contains all the code that we fetch from npm. When we did ```npm install -D parcel``` what happend was it just went to the production and it took some timing and it was fetching all the code of 'parcel' puting in inside 'node_modules'</br>
node_modules kind of like a database it contains the actual data of that dependencies of those packages that our project need</br>
But inside node_modules is there many dependencies why did come over there? </br>
Because our project need to 'parcel', our project has dependencies 'parcel. Now parcel as a project has its own dependencies and those dependencies can have its own dependencies, those dependencies can have there its own dependencies..., This is known as transitive dependencies</br>
It means parcel need a lot of dependencies. </br>
that means node_modules collection of dependencies.
# How do ignite our app?
We will use ```parcel``` to ignite our app.</br>
How do we do that?</br>
We will write command ```npx parcel index.html``` , Basically we are bulding our app using parcel. Here ```index.html``` the source file of our project. </br>
parcel basically goes to the source (```index.html```) build a development and build for our app. and host the development build on port '1234'</br>
When we enter ```npx parcel index.html``` that command, parcel has basically created a server for us, an our app available at ```http://localhost:1234``` and it took ```582 ms``` to build it </br>
It means our app now hosted on the (```http://localhost:1234```) server. parcel is doing for us and it has given ```1234``` port and it has hosting our app on server.</br>
What is the meaning of this command ```npx parcel index.html``` ?</br>
Just like we have ```npm``` ,Similarly we have somthing know as ```npx```. </>
When we do 'npm' Its means we are just calling the command of npm </br>
```npx``` means executing a package. 'npm' commands are different If we have to install a package then we need to ```npm install``` and install a package. but suppose if we want to execute a package, we just write ```npx parcel index.html```. </br>
```npx``` any package name, It will execute that package.
# CDN link is not preferred way to bring React and ReactDOM in our project? Why ?
If i will fetch from CDN, It will make a network call to 'unpkg.com' and it will get React from 'unpkg.com'. </br>
We don't want make an other network call to get React , We will have it already in my node_modules. that's why we will install it.</br>
The 2nd thing today React version 18 after some time will 19,20---etc then what will happen is? We will have to keep changing 'URL',So it better to just have it inside 'package.json',Then It is easier to manage all our dependencies and it is very easy to manage React also as one of the dependencies inside our npm package.json .</br>
Now we will install React as a package to our code (```npm install react```) </br>
Similarly we will also install ReactDOM (```npm install react-dom```)
# parcel work
- Create Dev Build
- Create Local Server
- Doing automatically Refracing our page Its called ```HMR``` = Hot Module Replacement
- File Watching Algorithm  (When I am editing or adding somthing in our code that time It is happening and that's why my page is automatically reload means build its once again)- Writen in C++
- Caching - faster Build (Where it is Caching things up? When we build our project, parcel quickly 'sneaked' our project and it also took some space, It is known as ``` .parcel-cache``` ,So will have files those are binary files, 'parcel cache' caching everything that we do. It is supporting HMR, watching these file, So that next Build developed faster)
- Image Optimization (The most expensive thing in our web browser is to load images in our page)</br>
- suppose if I create Production Build-----------<br>
- Minification files
- Bundling Files
- Compress Files (Remove space, Comment, Unused code ---etc)
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser,your app can be open inside internet explorer,older version of internet explorer, google chrome, firefox and mobile browser --etc.
- Diagnostic(parcel give me does beautiful error display view and inside terminal also)
- Erroe Handling (its gives me better erroe suggestion)
- Right now my app is hosted on ```http``` we can ```https``` (Documnt link: https://parceljs.org/) 
- Tree Shaking - remove unused code
- Different 'dev' and 'production' bundles (production Build takes a little more time than Bulding it a for dev.Some optimizations are more on production Build than less optimization on dev Build)
# How do we create Production Build?
Using command ```npx parcel build index.html```, When run the command into terminal then we will get erroe becuase inside package.json we have defined by default path ```"main": "App.js"```</br>
That's why getting error ```/namer-default: Target "main" declares an output file path of "App.js" which does not match the compiled bundle type "html".```</br>
We will have to remove that line (```"main": "App.js"```) from package.json .</br>
When it builds a production ready app, where does that build goes up?</br>
When we do ```npx parcel build index.html```----->> it wiil bundle, it will minify,compress,it will all the crazy stuff and it will put all those files inside the new folder which is ```dist``` folder . and it build 3 files</br>
Suppose if our app will have 10 or 20 files, It will compress everything, minify everything to these 3 files. and now these 3 files will contain all the code that we write, These 3 files are the production ready code for our app. </br>
after generating build when we go to the display or our computer screen whatever where we saw on UI side, All things (whatever code developrd ----> index.html, App.js, index.css --etc) come from ```dist``` folder. and when we refresh the page or save file, it is uses the ```.parcel-cache``` and ```dist``` folder to update using that ```HMR``` (Hot Modele Replacement).
# let's make our app compatible for the older versions of the browsers.
So for that we will use somthing known as ```browserslist```.</br>
So now we have to tell our project that what all browsers should our app be supported in.</br>
How do we configure it? </br>
We will cofigure in package.json, In package.json we will add ```browserslist```.</br>
we will adding like ```"browserslis":["last 2 Chrome version", "last 2 Firefox version"]```. Now it will work on last Chrome and Firefox version.</br>
Does that mean it will only work on Chrome and Firefox now? Will it not work in Edge?</br>
No, This means that when we will give that configuraion like ```"browserslis":["last 2 Chrome version", "last 2 Firefox version"]```, This means that it will definitely or 100% of the time will work in Chrome and Firefox 2 versions, It might or might not work in rest of the browsers but it will definitely work in whatever configuration given in package.json. We can also configure our app country specific.</br>
How does it happen?</br>
parcel takes care of this along with browserslist.
# ------**parcel is beast**--------







