
# Algorithms - Recommendation Engine

This is an app built using React JS + Django, It gives movie 
Recommendations to the users based on their watch history



## Overview

[Documentation](https://drive.google.com/file/d/1xuck8aw-W0NbDo46B4s-RqU4nwqI8Jxg/view?usp=sharing)


## Run Locally

Make sure you have python 3.9 or above( preferably 3.10.1 ) and nodejs( v16.13.1 or above ) on your Local machine

Clone the project

```bash
  git clone https://github.com/Haneef99/Algorithms_Engage2022.git
```
Head into the directory where these folders are located and execute the following commands in the command prompt

First you need to start the python virtual environment

```bash
  env\Scripts\activate
```
Then

```bash
  cd movieapi

  python manage.py runserver

```
execute these above commands to get the API running. The Django development server starts at  [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

make sure don't quit the server because the app utilizes the API maintained by this server.

now open ```recomsys_engage2022``` folder and run the following command

```bash
  npm start
```

That's it the app starts on the port 3000 [http://localhost:3000/](http://localhost:3000/)

