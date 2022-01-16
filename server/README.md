# Quora for College (Backend/ Server)
<h1 align="center"> 🏫 Quora for College API 🏫 </h1>

<a href="https://github.com/kaiwalyakoparkar/quora-for-college"><img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103"></a>
<a href="https://github.com/kaiwalyakoparkar/quora-for-college"><img src="https://img.shields.io/badge/Built%20by-developers%20%3C%2F%3E-0059b3"></a>
<a href="https://github.com/kaiwalyakoparkar/quora-for-college"><img src="https://img.shields.io/static/v1.svg?label=Contributions&message=Welcome&color=yellow"></a>
<a href="https://github.com/kaiwalyakoparkar/"><img src="https://img.shields.io/badge/Maintained%3F-yes-brightgreen.svg?v=103"></a>

## 💡 Inspiration -


## Ways to use this API -
1. [Pulling the API container image](https://ghcr.io/kaiwalyakoparkar/quora-for-college-api:latest)
2. [Forking/Clonning and running Scripts](#🍴 Forking/Clonning and running Scripts -)

## 🍴 Forking/Clonning and running Scripts -

## 🐳 Pulling the API container image -

## 🛤 Routes Available -

### ✨ Questions Routes

**🚩 1. `/api/v1/questions`**
Gets all the questions in the database. The typical response looks like

*Example 1*
An ideal request will look like
`http://localhost:8080/api/v1/questions`

And ideal response will look like
```json


```

**🚩 2. `/api/v1/questions/<question id>`**
Gets specific question from large questions data. The question id here is given by the database.

*Example 1*
An ideal request will look like
`http://localhost:8080/api/v1/questions/61b35a39074e61abf2b0f0d4`

And ideal respons will look like
```json

```

**🚩 3. `/api/v1/questions?page=<page-no>&limit=<no-of questions>`**
This will give you no-of question provided in *limit* field and you can increment the page no to get the next *limit* frame data.

*Example 1*
An ideal request will look like (PAGE 1)
`http://localhost:8080/api/v1/questions?page=1&limit=5`
And ideal respons will look like
```json

```

*Example 2*
An ideal request will look like (PAGE 3)
`http://localhost:8080/api/v1/questions?page=3&limit=5`
And ideal respons will look like (As there are only 13 questions and we are showing 5 per page)
```json

```

**🚩 4. `api/v1/questions?fields=name`**
This will give all *names* of the questions. It will exclude all other fields in the object

*Example 1*
An ideal request will look like 
`http://localhost:8080/api/v1/questions?fields=name`
And ideal respons will look like 
```json

```

*Example 2*
An ideal request will look like 
`http://localhost:8080/api/v1/questions?fields=category`
And ideal respons will look like 
```json

```

### ✨ Answers Routes

### ✨ Users Routes

## 🙌 Want to contribute?
If you would like to contribute to this api please go ahead and read [COC](../CODE_OF_CONDUCT.md) and [Contributing Guideline](../CONTRIBUTING.md). Once you read through them agree to policies of this question go ahead with **question setup & Contribution** steps below

### Pre-requisites

1. NodeJs installed in local environment.
2. Git installed in local environment.
3. GitHub account.

### question setup & Contribution steps

1. Fork the question
![forking the question](https://i.imgur.com/qbVouuV.png)

2. Once you are in your fork the url should look something like
`https://github.com/<YOUR-USERNAME>/LearnScape/`

3. Go to preferred folder in your computer and paste the following command (Only one of it if you don't have ssh setup then go with HTTP command)
   - HTTP
   `git clone https://github.com/<YOUR-USERNAME>/LearnScape.git`
   - SSH
   `git clone git@github.com:<YOUR-USERNAME>/LearnScape.git`

4. Now enter the folder by running the following command
`cd LearnScape/api`

5. Now you are in the `/api` folder

6. Now do ahead and create a new branch and move to the branch
`git checkout -b fix-issue-<ISSUE-NUMBER>`

7. Now run `npm i` and once it's done do your fixes and changes.

8. After done you can now push this changes. for doing that follow the following command chain
   - `git status` (Shows the changed files)
   - `git add .` (Will add all the files to staging area)
   - `git commit -m "feat/docs/fix: :emoji-name: <EXPLAIN-YOUR_CHANGES>"`
   - `git push origin fix-issue-<ISSUE-NUMBER>`

9. After this go to your forked GitHub repository and go to `Pull Request` section. Now you might be able to see a pop up saying **Pull Request**. Click on the popup and you will be redirected to pull request page

10. Now fill in the form template of the pull request

11. Click on **Submit**

12. Hurrey! You just did your contribution to this question 🎉

