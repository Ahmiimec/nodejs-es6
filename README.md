<p class="has-line-data" data-line-start="0" data-line-end="1">***Dockerfile needs to be created  ( to create personalized image )</p>
<ul>
<li class="has-line-data" data-line-start="1" data-line-end="2">A base image is required ( could be custom even )</li>
<li class="has-line-data" data-line-start="2" data-line-end="4">package is copied separately compared to files , so that the layers get cached for better optimization</li>
</ul>
<p class="has-line-data" data-line-start="4" data-line-end="5">***Once this is done ( build docker image )</p>
<ul>
<li class="has-line-data" data-line-start="5" data-line-end="6">build using ‘docker build .’</li>
<li class="has-line-data" data-line-start="6" data-line-end="7">build with name using ‘docker build -t name .’</li>
<li class="has-line-data" data-line-start="7" data-line-end="8">list all running docker images by ‘docker image ls’</li>
<li class="has-line-data" data-line-start="8" data-line-end="10">delete docker image instance using ‘docker image rm id’</li>
</ul>
<p class="has-line-data" data-line-start="10" data-line-end="11">*** Once you have docker image created ( Now create docker container )</p>
<ul>
<li class="has-line-data" data-line-start="11" data-line-end="12">using this command ‘docker run -d --name newnamecontainer nameofimage’</li>
<li class="has-line-data" data-line-start="12" data-line-end="13">use the -d flag for making container to start in detached mode ( which is exited from the cli )</li>
<li class="has-line-data" data-line-start="13" data-line-end="15">use ‘docker ps’ to list all the containers</li>
</ul>
<p class="has-line-data" data-line-start="15" data-line-end="16">*** After building and trying to access it through localhost:port ( It will miserably fail )</p>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">We used expose 5000 in dockerfile ( it is only for description purpose , can be removed no issues )</li>
<li class="has-line-data" data-line-start="17" data-line-end="18">Docker can talk outside , but cannot let others communicate back in</li>
<li class="has-line-data" data-line-start="18" data-line-end="19">thats why localhost cant access docker container</li>
<li class="has-line-data" data-line-start="19" data-line-end="21">incoming traffic from 5000 routed to 5000 port ‘docker run -p 5000:5000 -d --name newnamecontainer nameofimage’</li>
</ul>
<p class="has-line-data" data-line-start="21" data-line-end="22">*** To enter interactive mode so you can look inside the container</p>
<ul>
<li class="has-line-data" data-line-start="22" data-line-end="23">We will use ‘docker exec -it containername bash’</li>
<li class="has-line-data" data-line-start="23" data-line-end="24">Your working directory was set to /app and now if you type in ls ( like in nginx or aws server )</li>
<li class="has-line-data" data-line-start="24" data-line-end="25">It will list out all the files</li>
<li class="has-line-data" data-line-start="25" data-line-end="27">you can exit the container by using ‘exit’ command</li>
</ul>
<p class="has-line-data" data-line-start="27" data-line-end="28">*** DELETE</p>
<ul>
<li class="has-line-data" data-line-start="28" data-line-end="30">to forcefully delete container ‘docker rm containername -f’</li>
</ul>
<p class="has-line-data" data-line-start="30" data-line-end="31">*** Files which arent required in the docker container</p>
<ul>
<li class="has-line-data" data-line-start="31" data-line-end="32">Such as node_modules and Dockerfile</li>
<li class="has-line-data" data-line-start="32" data-line-end="34">can be ignored using a docker ignore file</li>
</ul>
<p class="has-line-data" data-line-start="34" data-line-end="35">*** If you make any code changes , they will not be rendered</p>
<ul>
<li class="has-line-data" data-line-start="35" data-line-end="36">Because docker image is old (stale version) and doesn’t pick from local</li>
<li class="has-line-data" data-line-start="36" data-line-end="37">You would have to rebuild an image then the container to render your changes</li>
<li class="has-line-data" data-line-start="37" data-line-end="39">For this we use ‘bind mount volume’</li>
</ul>
<p class="has-line-data" data-line-start="39" data-line-end="40">*** Create bind mount volume</p>
<ul>
<li class="has-line-data" data-line-start="40" data-line-end="41">This will allow your changes on local code to directly apply changes to docker image</li>
<li class="has-line-data" data-line-start="41" data-line-end="42">creates a sync between local code with docker container</li>
<li class="has-line-data" data-line-start="42" data-line-end="43">to bind you add -v flag with directory of code you are locally editing along with directory of code in container you want to replicate changes in</li>
<li class="has-line-data" data-line-start="43" data-line-end="44">‘docker run -v D:\Amazon\es6_setup_node:/app  -p 5000:5000 -d --name nodejs-container nodejs-image’</li>
<li class="has-line-data" data-line-start="44" data-line-end="45">in windows you can use ‘%cd%’ this gets the current directory rather than typing the whole directory address</li>
<li class="has-line-data" data-line-start="45" data-line-end="46">‘docker run -v %cd%:/app  -p 5000:5000 -d --name nodejs-container nodejs-image’</li>
<li class="has-line-data" data-line-start="46" data-line-end="47">for power shell you get current directory with ${pwd}</li>
<li class="has-line-data" data-line-start="47" data-line-end="48">for macOS you get current directory with $(cd)</li>
<li class="has-line-data" data-line-start="48" data-line-end="49">After running this and binding volume ,  change code and refresh</li>
<li class="has-line-data" data-line-start="49" data-line-end="50">Must have failed miserably</li>
<li class="has-line-data" data-line-start="50" data-line-end="51">the -v flag did bind and is changing the code internally in container</li>
<li class="has-line-data" data-line-start="51" data-line-end="52">bringout nodemon :D</li>
<li class="has-line-data" data-line-start="52" data-line-end="53">add -L flag in package json when adding ‘“dev”: “nodemon -L --exec babel-node index.js”’</li>
<li class="has-line-data" data-line-start="53" data-line-end="55">rebuild the image and container</li>
</ul>
<p class="has-line-data" data-line-start="55" data-line-end="56">*** If you delete anything in current directory such as node_modules</p>
<ul>
<li class="has-line-data" data-line-start="56" data-line-end="57">it will delete the node_modules in container directory due to binding mount</li>
<li class="has-line-data" data-line-start="57" data-line-end="58">add another -v flag with /app/node_modules directory which will signify and take presidence</li>
<li class="has-line-data" data-line-start="58" data-line-end="59">this another volume wont be binded with the existing directory</li>
<li class="has-line-data" data-line-start="59" data-line-end="61">this is called the annonymous bind</li>
</ul>
<p class="has-line-data" data-line-start="61" data-line-end="62">*** If you add or change files in docker container such as ‘touch newfile’</p>
<ul>
<li class="has-line-data" data-line-start="62" data-line-end="63">docker container will create a file on local directory as well</li>
<li class="has-line-data" data-line-start="63" data-line-end="64">this is something BAD!</li>
<li class="has-line-data" data-line-start="64" data-line-end="65">you create a read only bind mount for the container</li>
<li class="has-line-data" data-line-start="65" data-line-end="66">you do this by add ‘:ro’ to your /app directory</li>
<li class="has-line-data" data-line-start="66" data-line-end="68">for example ‘docker run -v ${pwd}:/app:ro -v /app/node_modules  -p 5000:5000 -d --name nodejs-container nodejs-image’</li>
</ul>
<p class="has-line-data" data-line-start="68" data-line-end="69">*** To pick environment variables</p>
<ul>
<li class="has-line-data" data-line-start="69" data-line-end="70">you add --env-file to your docker build command</li>
<li class="has-line-data" data-line-start="70" data-line-end="72">for example ‘docker run -v ${pwd}:/app:ro -v /app/node_modules --env-file ./.env  -p 5000:5001 -d --name nodejs-container nodejs-image’</li>
</ul>
<p class="has-line-data" data-line-start="72" data-line-end="73">*** As you keep creating containers ( you are creating volumes )</p>
<ul>
<li class="has-line-data" data-line-start="73" data-line-end="74">anonymous volumes dont delete by themselves</li>
<li class="has-line-data" data-line-start="74" data-line-end="75">to delete volumes associated to a container , you can pass a ‘v’ flag to rm</li>
<li class="has-line-data" data-line-start="75" data-line-end="77">example ‘docker rm containername -fv’</li>
</ul>
<p class="has-line-data" data-line-start="77" data-line-end="78">*** Once you start deploying multiple docker containers it can get hectic to run commands</p>
<ul>
<li class="has-line-data" data-line-start="78" data-line-end="79">we create a docker compose file</li>
<li class="has-line-data" data-line-start="79" data-line-end="80">create docker-compose.yml</li>
<li class="has-line-data" data-line-start="80" data-line-end="81">yml is space sensitive</li>
<li class="has-line-data" data-line-start="81" data-line-end="82">this compose file will automate our process</li>
<li class="has-line-data" data-line-start="82" data-line-end="83">example ( already in code )</li>
<li class="has-line-data" data-line-start="83" data-line-end="84">now run command ‘docker-compose up -d’</li>
<li class="has-line-data" data-line-start="84" data-line-end="85">notice how it creates image and container to include folder name with name given in compose file</li>
<li class="has-line-data" data-line-start="85" data-line-end="86">if you want to delete everything together ‘docker-compose -v’ , v flag to remove anonymous binding</li>
</ul>
<p class="has-line-data" data-line-start="88" data-line-end="89">*** Docker compose creates a stale image</p>
<ul>
<li class="has-line-data" data-line-start="89" data-line-end="90">if you run ‘docker-compose -v’ it will delete the container and network</li>
<li class="has-line-data" data-line-start="90" data-line-end="91">but will not delete the image , hence faster compose up command</li>
<li class="has-line-data" data-line-start="91" data-line-end="92">the issue is that if you change Dockerfile , and expect a new image</li>
<li class="has-line-data" data-line-start="92" data-line-end="93">it will not build a new image rather it checks for ‘foldername_appname’</li>
<li class="has-line-data" data-line-start="93" data-line-end="94">this is a dumb check done by docker compose</li>
<li class="has-line-data" data-line-start="94" data-line-end="95">we have to explain docker by using ‘docker-compose -d --build’</li>
<li class="has-line-data" data-line-start="95" data-line-end="96">this will force a new build</li>
</ul>
