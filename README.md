<h1 align="center">
    <img src="https://github.com/user-attachments/assets/c74bdfd7-bf04-4935-a0ea-38eade4f9475" alt="logo" height="50px" align="center"/><br>
    JobJourney
</h1>

**This is a fork of the original project intented to deliver as TopicosTaller1. By: Juan José Botero, Mateo García & Samuel Villa**

# Table of contents
- [Table of contents](#table-of-contents)
- [About](#about)
  - [About JobJourney](#about-jobjourney)
- [How to install](#how-to-install)
- [License](#license)

# About
JobJourney is a web application developed by [Santiago Idárraga](https://github.com/sidarragac), [Mateo García](https://github.com/mgarciac10) and [Juan José Botero](https://github.com/JuanJoseBotero) as the project for the "Integrator Project I" taguth by professor Paola Vallejo.

## About JobJourney
JobJourney is for those who dont have an idea of how to start their professional career or how to continue it to reach their dream job. Our scope is to guide individuals in their professional development by providing personalized, structured career roadmaps build with AI.


# How to install/run
To keep a copy of our project, you can follow the next steps:
1. (Optional) Fork the repository.
2. Clone the repository.
  ```bash
    git clone https://github.com/sidarragac/JobJourney.git
  ```
  * Make sure you are in the folder:
  ```bash
    cd ./JobJourney
  ```
3. Create a Python virtual environment.
  ```bash
    python -m venv venv
  ```
4. Activate the virtual environment.
  ```bash
    ./venv/scripts/activate
  ``` 
5. Install the required libraries, using the ``` requirements.txt ``` file.
  ```bash
    pip install -r requirements.txt
  ```
6. Create a ```.env``` file on the root folder of your project. There, you must save your OpenAI API KEY[^1], Gemini API KEY, the Client ID, Client Secret and redirect URI of your Google project[^2] for the OAuth in the following format:
```.env
  OPENAI_API_KEY=<YOUR OPENAI API KEY>
  GEMINI_API_KEY=<YOUR GEMINI API KEY>
  GOOGLE_CLIENT_ID=<YOUR GOOGLE PROJECT CLIENT ID>
  GOOGLE_CLIENT_SECRET=<YOUR GOOGLE PROJECT CLIENT SECRET>
  GOOGLE_REDIRECT_URI=<YOUR GOOGLE PROJECT REDIRECT URI>
```
  * Up to this point, your folder should look like this:
  ```bash
    JobJourney
    ├───accounts                    
    ├───admin
    ├───analytics
    ├───roadMap
    ├───venv
    ├───.env
    ├───.gitignore
    ├───manage.py
    ├───README.md
    └───requirements.txt
  ```
7. Migrate the database.
  ```bash
    python manage.py migrate
  ```
  * This step will create ```db.sqlite3``` file. This is the database with all the required tables and relationships.
8. Create the database interests registers.
  ```bash
    python manage.py add_interests_db
  ```
  * This step will add all the required information about the interests to the database.
9. Create the database Social Media information.
  ```bash
    python manage.py add_socialMedias_db
  ```
  * This step will add all the required information about the social medias to the database.
10.  Run the development server.
  ```bash
    python manage.py runserver
  ```

# License
Copyright 2024, Santiago Idárraga, Juan José Botero, Mateo García. All rights reserved JobJourney.

[^1]: To know more about the OpenAI API, please visit the [OpenAI website](https://openai.com/api/). Please be aware that a $5 fee is required to get access to one key.
[^2]: To know more about the OAuth and it's requirements, visit the [Google website](https://developers.google.com/identity/protocols/oauth2) for the OAuth2 process.
