const prompT = require('prompt-sync')();
import fs from 'fs';

const realName = prompT("What name you want to use for saudation? (e.g. Gustavo) ");
const githubUsername = prompT('What is your username in GitHub? (YOUR username, what apears in the link, when you go to your profile) ');
const theme = prompT('Which theme you what to use? (https://github.com/anuraghazra/github-readme-stats#themes) ');
var includeAllCommits = prompT('Want to include all commits? (Need to enable to read private commits) (y/n) ')
var wantIcons = prompT('Want to show icons in Stats? (y/n) ');

/*
 * TODO: Add badges and ask if user whant's wich;
 *
const whatInstagramsBadge = prompT('\nWant Instagram\'s badge? (y/n)') 
switch (whatInstagramsBadge )  {
  case 'y': {
    const instagramUsername = prompT('\nWhat are your instagram username? ');
    break;
  }
  case 'n': {
    ;
  }
  default:
    throw "whatInstagramsBadge: Invalid Response!";

}
*/

// TODO: Make icons to each language, more specific the https://devicon.dev/ icons;

switch (includeAllCommits) {
  case 'y': {
    includeAllCommits = "true"
    break;
  }
  case 'n': {
    includeAllCommits = "true"
    break;
  }
  default:
    throw "includeAllCommits: Invalid Response";
}

switch (wantIcons) {
  case 'y': {
    wantIcons = "true"
    break;
  }
  case 'n': {
    wantIcons
  }

}

const mdContent: string = `
### Opa! Prazer, ${realName}

<div align="center">
  <a href="https://github.com/${githubUsername}">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=${wantIcons}&theme=${theme}&include_all_commits=${includeAllCommits}&count_private=true"/>
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&langs_count=7&theme=${theme}"/>
</div>
`
console.log(mdContent);
const whantToWrite = prompT(`There is the output, whant to write the ${githubUsername}.md file? (y/n) `);

switch (whantToWrite) {
  case 'y': {
    try {
      fs.writeFileSync(`build/${githubUsername}.md`, mdContent);
      console.log("Writed with success, exiting...");
    } catch (err) {
      console.error(err);
    }

    break;
  }

  case 'n': {
    console.log("Ok, exiting...");
    break;
  }

  default: {
    throw "wantToWrite: Invalid input!";
  }
}
