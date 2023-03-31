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