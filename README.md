#  react-sanity-imageApp-guide

1.create two folder Client(React)ad Server(Sanity)

<img width="151" alt="Screenshot 2022-04-04 at 15 21 07" src="https://user-images.githubusercontent.com/74420607/161564396-1b56330c-4c99-4c19-a012-cbc106618500.png">
<hr/>

2. let's install sanity and set our app configuration asnwering on question on the terminal 

<img width="362" alt="Screenshot 2022-04-04 at 15 22 45" src="https://user-images.githubusercontent.com/74420607/161564724-8bc204dc-7903-4c75-b134-447b217ace7b.png">
<hr/>

3. command: <br/>
  
  (sanity manage to run the sanity studio manager)
                    
<img width="1364" alt="Screenshot 2022-04-04 at 15 27 55" src="https://user-images.githubusercontent.com/74420607/161565808-7ecdaa8d-f34f-4b1d-add0-d15a7f82e3d1.png">

  (sanity start to run the sanity app)

<img width="1440" alt="Screenshot 2022-04-04 at 15 30 50" src="https://user-images.githubusercontent.com/74420607/161566435-da3ec474-4bf3-4174-8e66-abe690c01659.png">
<hr/>

4.lets'create a schema call user.js inside schema folder and we can see how the sanity manage app will create the table structure with the data we set on the schema

<img width="352" alt="Screenshot 2022-04-04 at 15 34 13" src="https://user-images.githubusercontent.com/74420607/161567083-00ca9a29-2a4a-43ec-8941-63c0a5f758a5.png">

<img width="577" alt="Screenshot 2022-04-07 at 17 27 54" src="https://user-images.githubusercontent.com/74420607/162251941-41f5fb5a-9645-4bb9-a779-f206e5b83c63.png">



<hr/>
5.dont forget to import every schema we create on this page

<img width="599" alt="Screenshot 2022-04-04 at 15 36 11" src="https://user-images.githubusercontent.com/74420607/161567519-02830b5a-00db-4b4f-ab5b-a09bd67e14f4.png">
 
<hr/>
6.let's create all the other schema using the same fiel structure

-pin.js

<img width="155" alt="Screenshot 2022-04-04 at 15 40 12" src="https://user-images.githubusercontent.com/74420607/161568356-ae4621c6-3f68-484a-b910-24406ac82788.png">

-comment.js

<img width="198" alt="Screenshot 2022-04-04 at 15 41 40" src="https://user-images.githubusercontent.com/74420607/161568664-a56999ca-9a76-4563-951a-7a26b0fb7a62.png">

and so on with the rest of schemas we need

<hr/>
7. After set the backend lets focus on fornt end

-the website we use to retreive the necessary info for our google login components

link:https://www.console.cloud.google.com 

in the website we go on API section and we select credentails

<img width="288" alt="Screenshot 2022-04-07 at 18 08 55" src="https://user-images.githubusercontent.com/74420607/162258926-760b4c72-de0c-4693-803a-ae27ec2c1611.png">

-we click on '+ create credentail /Oauth client id',click on set consense screen select external user type(set app name,email and developer contact info at the bottom) and we can save and continue

-back on the dashboard we select 'oauth consens screen ' we pusblish the app and conferm
-again we go on credential, again on '+create credential/ oauth client id ',choose application type,add the origin source(localhost;3000 for example),click create and we will see our client id info that we will put in a .env file for security purpose.





