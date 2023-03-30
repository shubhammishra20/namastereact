# What is Emmet?
It allows you to type shortcuts that are then expanded into full pieces of code.//
Example - If I type 'html5' inside the 'index.html' then hit the enter key after that expand all the basic code inside html code.
# Difference between library and framework?
React is a small javaScript library. We can ipmorted like a javaScript file into our code and its give me super powers. We can use react in our Existing application projects, No matter it is using jQuery or it is using somthing else. If we have jQuery application--- no matter, We can import react and start using it.
Framework come with alot of baggage along with it, React does not come up with alot of baggage
# What is CDN. Why do we use CDN?
CDN is content delivery network, also called a content distribution network. These are the website where this react has been hoisted and we are just pulling react from there into our project.
So, Basically CDN is place where that react library is hoisted. So we are just fetching that react, we putting into the our code using CDN link.
Why do we use CDN? Because CDN is save temporary copy of data inside our memory in the all over world (different locaton or country) that's why if anyone accessing my website then they can easly get (very fast get the data and good user experience) data From their nearest location.
# Why is react known as React?
And it's called React because it reacts. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they're doing things like mouse clicking, submitting and typing.
# What is cross-origin inside script tag?
cross-origin is a browser proprty. that's why when we want to any third party website or link or server access in our code then we could not access because this is browser privacy policy. When we add 'crossorigin' in 'script' tag then browser give permission (set by Header in our request) and after that we get the access of link or website and can use it.
CrossOrigin enables cross-origin resource sharing only for this specific method. By default, its allows all origins, all headers, and the HTTP methods. 
# What is difference between React and ReactDOM?
First file is the react.development.js. This is the core file of react or core react framework algorithm which is written inside it.

The second one is react dom .This is the react library which is useful for dom operations or this is react dom which we need to modify the dom. That’s why we have injected two file.

The main file react.development.js is the core react thing and the other one is kind of like bridge between these react and browsers, So its like react dom which is like a bridge to connect to the dom