# East Baptist Church Website #

## Steps to Run the Code Locally
- Clone the code to your github repo by running this command:
**git clone https://github.com/idrissdjio/church-baptist.git**

- I assume that you now have the project folder open on your code editor, go on and install the dependencies by doing the following:
**npm install**
The above code will run the package.json, so make sure your terminal path is in the main folder.

- After installing, navigate to the source subfolder by doing the following:
**cd src**

- Now test the website locally by executing the index.js file, do the following:
**npm start**

- The above will run the website and you will see a localhost url to your terminal, copy it and paste in your browser.



## Do NOT make any push request like: git push origin

I will be making a couple of new updates on the github repo regularly, so whenever you want to start working, make sure to check if you have the updated version of the github repo. You can do by doing:
- git remote update
- git status
- To fetch latest change if you are not updated: git fetch origin


Whenever you are done with the code update, test it locally, make sure it doesn't break any other parts of the code. Follow these steps to pull your changes to the repo:
-  Create new branch: git checkout -b branch_name
- Add only the files you added with: git add .
- commit changes: git commit -m “description of the changes”
- make push request: git push origin branch_name
