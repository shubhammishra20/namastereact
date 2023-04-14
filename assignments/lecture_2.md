# What is npm ?
npm is packages manager where all the inbuild packages are hosted over there.
# What is parcel/webpack ? Why do we need it ?
parcel is npm package of bundler which is bundle our app and make fast our react app and do manythings for that like compress the file, minify, Tree shakin (remove comments or anthying whatever we are not using code in file), HMR (Hot Module Replacement),browserlist(Our app run depend up on browsers version or city basis --etc ) and save all the file in two folder ```.parcel.-cache``` and ```dist``` after run parcel command .
- Dev build command - npx parcel index.html(source file name)
- Production build - npx parcel build index.html
# What is '.parcel-cache' ?
'parcel-cache' is caching everything that we do.It is supporting HMR, watching all files if I do change in any files, it is update(render) only the same places where I did update anything, not render all files, So that next build develop faster.
# What is npx?
npx is executing the npm package command whatever we write in terminal like  ```npx 'package_name```  it will execute that package.
# What is devDependencies and dependencies?
- devDependencies is only used for development app
- dependencies is used in production also
# What is 'Hot Module Replacement'?
When we uapdate in any file then It is watching all the file and findout where I have changed inside our component or file. It will be reRender only updated part, where we did update or add anything. It will not reRender all the files.
# 5 superpowers of parcel
- Minification files
- Bundling Files -  When we have normal ```HTML CSS and JS file```, Our whole code needs to be ```bundle together```
- Compress Files (Remove space, Comment, Unused code ---etc)
- Differential Bundling - support older browser,your app can be open inside internet explorer,older version of internet explorer, google chrome, firefox and mobile browser --etc.
- Diagnostic(parcel give me does beautiful error display view and inside terminal also)
- Erroe Handling (its gives me better erroe suggestion)
- Right now my app is hosted on ```http``` we can ```https``` (Documnt link: https://parceljs.org/) 
- Tree Shaking - remove unused code
# What .gitignore? Why should we use that?
It is file to ignore the files whatever we can regenrate. it should have to use because If I have a very big files like node_modules, bundler(parcel) can be regenerate that's why we shoudn't be push on git.
# What is difference between package.json and package-lock.json?
package.json file is configuration for npm. Its keep track what version of package install our system.
package-lock.json is keeps track of exact version for all packages whatever We have installed.
# Why should we not modify package-lock.json
Because It's keeps track of exact version of our packages when we changing or adding or updating in our package.json file then It will autumatically update in package-lock.json file.
# What is node_module? Is it good idea to push on the git?
node_module is like database. whatever packages we have installed,Those packages and their dependencies in stored inside node_module.</br>
It is not good idea to push node_module on the git because we can regenerate that file.
# What is 'dist' folder?
Inside dist folder all the compressed, bundle, minify, Removed unused code --etc is stored ,from there Our app is run. </br>
after generating build when we go to the display or our computer screen whatever we see on UI side, Everything (whatever code developed ----> index.html, App.js, index.css --etc) comes from ```dist``` folder. and when we refresh the page or save file, it uses the ```.parcel-cache``` and ```dist``` folder to update using that ```HMR``` (Hot Modele Replacement).