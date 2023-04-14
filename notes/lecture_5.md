# Never ever keep any hardcoded string into our component file

- for example - In Image tag I wrote hardcoded string for image URL, It's not good practice.
```js
<img
            className='logo'
            src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png'
          />
 ```
 So, Where should I keep now then? It should keep into seperate file That is known as constant or config or utils somthing lke that </br>
 We will create utils folder -->> utils means utilities that will be use all across app.

 # Hooks
 It's normal javaSript function which is a utility function, It's give me some utility 
  - useState
  Whenever a state variable updates, React reRender my component.
  - React is good only DOM operation whenever We update anything into the component That's why react is fast.