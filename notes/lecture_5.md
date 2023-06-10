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
 Hook's is just normal function nothing fancy thing but it has a specific function for it or every Hook specific function for it.</br>
 It's normal javaSript function which is a utility function, It's give me some utility </br>
 - What is function of the useState? use to create state variable.
 ```js const[set, setData] = useState() ==>>> It's like noemal javaScript function.``` </br>
- This function returns a array
                    - The first element of this array is our variable name EX- ```set``` is local state variable in above example but How can I modify that variable (set)? Using function given in above Example ```(setData())``` which is provided by useState Hook.
   - Every component in react maintains a state, So we can put some variable on to that state and Every time we have to create some local variable we need to useState inside react.</br>
 - Whenever a state variable updates, React reRender my component(reRender Component using diff algorithm or reconciliation - This algorithm manipulate the data where only which part we need to change).
  - React is good only DOM operation whenever We update anything into the component That's why react is fast.
  There is one way data binding in react, So if I
 have to make a normal variable like ```js const searchText = "KFC"``` I can't do it.If I write ```const searchText = "KFC"``` like this, It will go inside input value ```value = {searchText}``` and show on the UI side in the input box but It will not work, It won't update in itself, we can't edit or write data inside input box.</br>
 Why It is good thing that it does not update (one way data binding)?</br>
 When we updated two way- What happens is? Our app become unpredictable because we might be using ```searchText``` so many places That's why we don't know Where in Our app this variable(```searchText```) is getting modified.</br>
 And two way it will not be good for Optimization also. So that is why React set that if We have to create local variable - Created using a ```useState``` Hook variable.
 - when we use ```useState``` Hook- We can write and read on the UI in input box, This is two way binding use by  ```useState```Because we are writing the value as well as reading the value, both at the same time. If we try to build same thing in javaScript It will be very non-performant.