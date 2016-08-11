# Guess The Number web edition
Different versions of the Guess The Number game for TechLadies pre-bootcamp workshop #2

Guess the Number is a basic ruby application built on top of Sinatra for the purposes of TechLadies pre-bootcamp workshop #2, which covers the basics of the web, HTML and CSS. We will also cover some basic Git concepts and how to deploy the app onto Heroku. Given that everyone may be using different machines with different operating systems, we will be using Cloud9 as our development environment.

## Resources used
- [GitHub](https://github.com)
- [Cloud9](https://c9.io)
- [Heroku](https://www.heroku.com)

## Getting set up

### On GitHub
1. Sign up for a GitHub account.
2. Go to the [Guess The Number project repository](https://github.com/TechLadies/guess-the-number-sinatra) and fork it by clicking the Fork button in the top right corner (ask for help if you can't find it).
3. Leave this window open as you will need to perform further set up actions to integrate smoothly with Cloud9.

### Integrating GitHub with Cloud9
3. Sign up for a Cloud9 account. Now that you have a GitHub account, you can sign up using that by clicking on the GitHub icon next to the Sign In button in the top right corner.
4. Click on the Gear icon in the top right corner to access your account settings. From the left sidebar, click on [SSH keys](https://c9.io/account/ssh). 
5. Copy all the text in the grey box.
6. Switch back to your GitHub window. Click on your profile image in the top right corner, and click on Settings (it's the second-last option).
7. From the left sidebar, click on "SSH and GPG keys". Click on the "New SSH key" button in the top right corner. Enter "Cloud9 IDE" in the title field. Then paste the text you copied from the grey box into the key field. Then click on the green "Add SSH key" button.
8. Click on your profile image in the top right corner, and click on "Your profile". From there, you can return to your Guess the Number project repository.

### On Cloud9
1. Switch back to the Cloud9 window. You should be able to access your Dashboard. Click on "Create a new workspace".
2. Name your project, and add a brief description if you wish.
3. Switch to the Guess The Number repository you cloned in the earlier section. Click on the green "Clone or Download" button on the right side.
4. Copy the URL which looks like `git@github.com:YOUR_USER_NAME/guess-the-number-sinatra.git`
5. Switch back to the Cloud9 window. Paste the URL you just copied in the "Clone from Git or Mercurial URL (optional)" field.
6. Choose the Ruby template (it's the one with a red Rails icon above the text Ruby) and click on the green Create Workspace button.
7. Test that things are working by running `ruby app.rb -p $PORT -o $IP` in the Terminal tab (tab title should begin with ruby - ...)
