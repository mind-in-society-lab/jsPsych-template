# jsPsych-template
Template to deploy jsPsych using HTML/CSS/JS

## Overview
Here's an overview of the files in this template, use them as you need:
- [`index.html`](index.html) is the main file where you will place the fully programmed study inside of teh `<script>` tag. 

In the [`assets`](assets/) folder:
- [`audio`](assets/audio/) contains two sample audio files that can be used as attention checks.
- [`css`](assets/css/) contains various css stylesheets that can help you format your survey objects beyond the basic jsPsych styles.
- [`img`](assets/img/) contains some commonly used image assets for studies in our lab, namely, a stop sign and the social mobility ladder.
- [`scripts`](assets/scripts) contains some commonly used javascript for studies in our lab, namely, a dictionary of states and abbreviations.
- [`sample`](sample/) contains code snippets to integrate with prolific and sona.

## Launching Study
To launch a study:
- Program the study on [Cognition.run](https://cognition.run) with all needed assets.
- Create a new project on [Pavlovia Gitlab](https://gitlab.pavlovia.org) using this template (start project from template, then connect to GitHub using a PAT). 
- Clone the new repo to your local machine for editing.
- Copy over the study into the `<script>` tag of `index.html`, and follow the `TODO` instructions inside of the file to load up necessary assets. 
- Push the study to `remote` on Pavlovia, then switch the study to `Piloting` or `Running`. 
