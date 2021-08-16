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
<p>As soon as I was happy with my planning, I began working on the backend as my first step was to create a Django project containing my two apps. The project contains its own individual set of URLs which we would use to distinguish the API endpoints to retrieve any data in the frontend. The project has its own settings where I configured the apps, middleware, databases, our custom made user model, and authentications for the apps to use.

Django comes with an in-built CMS whereby an administrative user can directly add, update and delete database records. I used Django REST framework to build the API, as it has powerful functionality but allows for customisation.

In order to access Django’s CMS, a superuser is needed so I created one, also I created apps. For each app created, a URL, Model, and Views Python files are automatically created. These newly created apps needed to be included into the main project’s installed apps section to track changes.

Lastly in my setup I configured my database to be PostgreSQL. By default, Django uses SQLite. To change this, I modified the database section in the main project settings to use PostgreSQL.
</p>


<h3>Models</h3>

Once the project had been set up I went ahead in building my two apps. For each app I created a model, and registered them in their respective `admin.py` file. 
For the hanqout app, I created a total of four tables in the database, as shown in my ERD above. 
The hanqout app had four main models which held relationships with other models. The hanqoutClass, CommentClass, LocationClass and CategoryClass models.

1. Hanqout Model: 

```

    class Hanqout(models.Model):
    title = models.CharField(max_length=50, default=None)
    image = models.CharField(max_length=500, default=None)
    description = models.CharField(max_length=500, default=None)
    venue = models.CharField(max_length=200, default=None)
    date = models.CharField(max_length=200, default=None)
    time = models.CharField(max_length=200, default=None)
    price = models.CharField(max_length=200, default=None)
    keywords = models.CharField(max_length=200)
    worth_a_go = models.BooleanField(default=True, null=True)
    categories = models.ManyToManyField("categories.Category", related_name="hanqouts")
    locations = models.ManyToManyField("locations.Location", related_name="hanqouts")
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="hanqouts",
        on_delete = models.CASCADE
    )

    def __str__(self):
        return f"{self.title} - {self.description}"
        
```

* The Hanqout Class model consist of a title, image, description, venue, date, time, price, keywords, worth_a_go, categories and locations.

* A comment model was created and to be implemented as a bonus feature for users to comment on hanqouts (activities) but due to timeframe limitations wasn't implemented on the frontend.
* The model, had the following relationships:

  * A one-to-many relationship with comment model, signifying many comments to one hanqout;
  * A many-to-many relationship with location model, signifying there can be many locations to many hanqouts.
  * A many-to-many relationship with category model, signifying there can be many categories to many hanqouts.

2. Comment Model: 

```

   class Comment(models.Model):
     text = models.TextField(max_length=300)
     created_at = models.DateTimeField(auto_now_add=True) 
     hanqouts = models.ForeignKey( 
         "hanqout.Hanqout", # which model are we creating the realtionship with
         related_name="comments", # what name the field will have on the other model, comments on hanqouts,
         on_delete= models.CASCADE # if a hanqout is deleted, also delete the comments
     )
     owner = models.ForeignKey(
         "jwt_auth.User",
         related_name="comments",
         on_delete = models.CASCADE
     )

     def __str__(self):
         return f"Comments: {self.text}"

```

* The Comment Class model consist of a text, created_at, hanqouts and owner.

* The Comment Class model has a one to many relationship with hanqouts model and custom user model, from the JWT Auth App. This shows that each hanqout or user can have many comment classes. These comment classes can then be displayed on the indexpage on the front-end.


3. Category Model: 

```

   class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return f"Category: {self.name}"
        
```

* The Category Class model consist of a name. This model has a many to many relationship with the hanqout model which indicates that there are many hanqouts in many categories

4. Location Model: 

```

   class Location(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"Location: {self.name}"
        
```

* The Location Class model consist of a name too. This model has a many to many relationship with the hanqout model which indicates that there are many hanqouts in many categories








