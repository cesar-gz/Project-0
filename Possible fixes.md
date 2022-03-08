I am not sure if any of this will work for you guys but its worth a shot to see what works or not

- if you have around 11,000 json files that pop up when you type "git status", that are "untracked" or "modifed" files, you can "git clean -f" to delete them
- "git restore [copy and paste the path of the "modified" file here without the brackets]" will get rid of those "modifed" files warning that git gives you
- I tried adding a git ignore so that git doesnt track the .eslintcache that apparently generates the 11,000 files whenever something compiles

some things I saw when I went through the video again that may or may not help
- you can try to install these packages in your terminal, in the C:\ ... \Project-0\frontend directory, and then try to "npm start" to see if the website pops up for you

- npm install bootstrap
- npm install axios
- npm install react-router-dom
    - also worth typing "npm uninstall react-router-dom"
    - then try to reinstall by typing "npm install react-router-dom@5"
    - or "npm install react-router-dom@5.2.0"