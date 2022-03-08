I am not sure if any of this will work for you guys but its worth a shot to see what works or not

- if you have around 11,000 json files that pop up when you type "git status", that are "untracked" or "modifed" files, you can "git clean -f" to delete them
- "git restore [copy and paste the path of the "modified" file here without the brackets]" will get rid of those "modifed" files warning preventing
- I tried adding a git ignore so that git doesnt track the .eslintcache that apparently generates the 11,000 files whenever something compiles

some things I saw when I went through the video again that may or may not help
- you can try install these in your terminal and then try to "npm start"

- npm install bootstrap
- npm install axios
- npm react-router-dom
    - also try to uninstall npm react-router-dom
    - then try to install npm react-router-dom@5
    - or try to install npm-react-router-dom@5.2.0