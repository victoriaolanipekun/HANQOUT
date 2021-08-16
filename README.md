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
I began this project by building the below ERD model(Entity–relationship model). It was quite important that I understood the realtionships between my models and the attributes that each model would need to have.

![Screenshot 2021-08-16 at 13 27 58](https://user-images.githubusercontent.com/71145696/129563753-ced5b474-e1ef-4333-a8ef-aad6525e0080.png)

<h3>Wireframe</h3>
Then I created a UI wireframe for the project, as this is a super useful step in the planning stage. It helps me visualize the upcoming project and although I gave myself room for change, it was a great point of reference.

![wireframe](https://user-images.githubusercontent.com/71145696/129609718-9891c041-99bf-4a48-8c01-0d7cb5408f85.png)

<h3>Project Management</h3>
<p>I decided to manage the project sprints and development using Trello by breaking it up into several sprints with deadlines in days. The features were also listed in order of priority to help me focus while I build</p>

![Screenshot 2021-08-16 at 20 17 18](https://user-images.githubusercontent.com/71145696/129617705-e902d474-b312-4f91-bb89-195ab436da45.png)


<h1>Process</h1>
<h3>Backend</h3>
<p>As soon as I was happy with my planning, I began working on the backend as my first step was to create a Django project containing my four apps. The project contains its own individual set of URLs which we would use to distinguish the API endpoints to retrieve any data in the frontend. The project has its own settings where I configured the apps, middleware, databases, our custom made user model, and authentications for the apps to use.

Django comes with an in-built CMS whereby an administrative user can directly add, update and delete database records. I used Django REST framework to build the API, as it has powerful functionality but allows for customisation.

In order to access Django’s CMS, a superuser is needed so I created one, also I created apps. For each app created, a URL, Model, and Views Python files are automatically created. These newly created apps needed to be included into the main project’s installed apps section to track changes.

Lastly in my setup I configured my database to be PostgreSQL. By default, Django uses SQLite. To change this, I modified the database section in the main project settings to use PostgreSQL by providing the database name and altering my engine to be PostgreSQL.
</p>














