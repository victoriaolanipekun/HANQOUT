![image](https://user-images.githubusercontent.com/71145696/128151120-b3a88874-26e0-4e8c-b2e1-7dea3d5d3b3a.png)<h1> Project #3: Hanqout </h1>

![Screenshot 2021-08-09 at 18 21 43](https://user-images.githubusercontent.com/71145696/129551609-8248a1b5-0f20-491b-8e39-adc97d2fcea8.png)


<h1>Brief & Timeframe</h1>
Solo or Group? You are free to work alone or in a group. Both ways have their pros and cons. Remember if you are working in a team that you are all on the same page and working towards the same goal.

* Build a full-stack application by making your own backend and your own front-end
* Use a Python Django API using Django REST Framework to serve your data from a Postgres database
* Consume your API with a separate front-end built with React
* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
* Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
* Visually impressive design.
* React Hooks is optional for this project
* Time-frame: 9 days

<h1>Technologies used</h1>
* Python
* Django
* PostgreSQL
* React
* React Hooks
* Insomnia
* Axios
* Sass
* Bulma
* Git
* GitHub
* Figma
* Trello


<h1>Getting Started</h1>
<p>Repository link: https://github.com/victoriaolanipekun/HANQOUT</p>

To download the source code click the clone button. Run the following commands in the terminal:

* To install all the packages in the frontend directory:
```yarn```

* To run the app in your localhost:
In front :
```yarn start```

Backend:
To install all the packages in the root directory:

* Install Django and a shell in the root directory:
`pip install pipenv`
`pipenv install django`
`pipenv shell`
* Create the postgreSQL database:
`pipenv install psycopg2-binary` 
`createdb hanqout`
* Migrate everything from the backend:
`python manage.py migrate`  
* To seed your database run the following command, in the following order:
`python manage.py loaddata jwt_users/seeds.json`
`python manage.py loaddata locations/seeds.json`
`python manage.py loaddata comments/seeds.json`
`python manage.py loaddata categories/seeds.json`
`python manage.py loaddata hanqout/seeds.json`


<h1>Motivation & Introduction</h1>
<p>Welcome to Hanqout. This project was a birthed from my interest in how to care for developer's mental health. In my previous experience as a UI/UX designer I had always collaborated with developers and I had a glimpse of how time consuming coding was, however on switching my role to being a full stack developer I understood the demands and how much we developers love to code so I thought of building an application through which developers can hangout, relax and be refreshed to code again. This project was my fourth project for the Software Engineering Immersive course. 
 
This was a solo project and I had 9 days to build a fullstack MERN application using my own RESTful API with Python(Django) as the backend language and Javascript(React.js) for the frontend.
</p>

<h1>Preparation & Organisation</h1>
<h3>ERD Model</h3>
I began this project by building the below ERD model(Entity–relationship model). It was quite important that I understand the realtionships between my models and the attributes that each model would need to have.

![Screenshot 2021-08-16 at 13 27 58](https://user-images.githubusercontent.com/71145696/129563753-ced5b474-e1ef-4333-a8ef-aad6525e0080.png)





















