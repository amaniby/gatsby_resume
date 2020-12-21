#run this first command to create the first image 

docker build -t img1 .

#run the second commmand to create the container with developer mode so you can change the data from the host and get instant changes in the container => you have 
to specify the path in the host than the path in the container in my case:


docker run -p 8000:8000  --mount type=bind,src=C:\docker_test\data\config.js,target=/app/my-resume/config.js img1

#than run this command to build the second image

docker build -t img2 -f Dockerfile2 .

#create directory public  than
run this command to create second container ,here we use volume and specify the path in host and path in container so the data generated in the container 
will be stored in the directory public


docker run -v C:\docker_test\data\public:/app/my-resume/public/ img2

#run the last command to create container with image nginx ,after generating container, access to localhost and you will find the resume

docker run -p 80:80 -v C:\docker_test\data\public:/usr/share/nginx/html nginx
