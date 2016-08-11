# Guess The Number web edition
Different versions of the Guess The Number game for TechLadies pre-bootcamp workshop #2

Guess the Number is a basic ruby application built on top of Sinatra for the purposes of TechLadies pre-bootcamp workshop #2, which covers the basics of the web, HTML and CSS. We will also cover some basic Git concepts and how to deploy the app onto Heroku. Given that everyone may be using different machines with different operating systems, we will be using Cloud9 as our development environment.

## Resources used
- [GitHub](https://github.com)
- [Nitrous](https://www.nitrous.io/)
- [Heroku](https://www.heroku.com)

## Getting set up

### On GitHub
1. Sign up for a GitHub account.
2. Go to the [Guess The Number project repository](https://github.com/TechLadies/guess-the-number-sinatra) and fork it by clicking the Fork button in the top right corner (ask for help if you can't find it).
3. Leave this window open as you will need to perform further set up actions to integrate smoothly with Nitrous.

### On Nitrous
3. Sign up for a Nitrous account by clicking on the Sign Up button in the top right corner. It will take some time for your account to be set up.
4. Once it's done, click on your profile image in top right corner and select Account Settings.
5. Connect your account GitHub, and fill in the Name and Email field under Git Config. Remember to click on Save Changes.
6. Click on the Dashboard link in the top left corner to return to the Dashboard, then click on the Plus icon to create a new project.
7. Name your project, and choose the Ruby template, then click the Create Project button. This will take some time to complete.
8. Once it's done, click on Open IDE.

### On integrating with GitHub
4. Click on Git in the toolbar and select Clone from GitHub. Select guess-the-number-sinatra and click Clone.
5. When the terminal prompt asks "Are you sure you want to continue connecting (yes/no)?", type "yes" and press enter.
6. Your files should now appear under nitrous > code > guess-the-number-sinatra in the left sidebar.

### On running the development server
1. Run `bundle install` to install the required ruby dependencies.
2. Start the server by running `bundle exec ruby ./app.rb`
3. You should see something like this in the terminal
```
[2016-08-11 16:31:24] INFO  WEBrick 1.3.1
[2016-08-11 16:31:24] INFO  ruby 2.3.1 (2016-04-26) [x86_64-linux]
== Sinatra (v1.4.7) has taken the stage on 3000 for development with backup from WEBrick
[2016-08-11 16:31:24] INFO  WEBrick::HTTPServer#start: pid=683 port=3000
```
4. Click on Preview in the toolbar and select `Port 3000 - HTTP`. This should launch a separate window with the app running.
