# TypeScriptCourse
Learning the basics of typescript from the Udemy course

0. 'npm install --save-dev lite-server' - this is installing the lite-server for autorefresh the browser after executing tsc or tsc file.ts
1. 'npm start' - this will start the lite-server for the autorefresh browser page
2. then open the URL http://localhost:3000 from the Browsersync ->
[Browsersync] Access URLs:
 --------------------------------------
       Local: http://localhost:3000
3. In another terminal run the 'tsc xxx.ts' file which you want to execute

Configurate "Watch Mode" - this will eliminate the need to write 'tsc' to compile the code

4. 'tsc --watch' - to execute all non-excluded files in the project
   'tsc app.ts --watch' - to execute specific file in the project

To run all files in the project to execute automatically without the tsc app.ts command in terminal

5. 'tsc --init' - this will create a tsconfig.json file
6. 'tsc' - this will run all the .ts files in the project