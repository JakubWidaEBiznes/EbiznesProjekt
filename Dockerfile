FROM ubuntu:16.04

#RUN DEBIAN_FRONTEND=noninteractive

RUN apt-get update

#Mysql
#RUN echo "mysql-server-5.7 mysql-server/root_password password ' '" | debconf-set-selections
#RUN echo "mysql-server-5.7 mysql-server/root_password_again password ' '" | debconf-set-selections

#RUN apt-get install mysql-server mysql-client -y

#Java $ scala $ sbt
RUN apt-get update
RUN apt-get install -y software-properties-common gnupg2 apt-transport-https apt-utils

RUN echo "deb https://dl.bintray.com/sbt/debian /" | tee -a /etc/apt/sources.list.d/sbt.list
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2EE0EA64E40A89B84B2DF73499E82A75642AC823
RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | debconf-set-selections
RUN add-apt-repository -y ppa:webupd8team/java
RUN apt-get update
RUN mkdir -p /usr/share/man/man1
RUN apt-get install -y --allow-unauthenticated oracle-java8-installer
RUN apt-get install oracle-java8-set-default
RUN apt-get install -y scala sbt

#Node & npm
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs build-essential



EXPOSE 9000
EXPOSE 9090
EXPOSE 3000
EXPOSE 3030

ADD Project root/Project

#RUN git clone https://github.com/JakubWidaEBiznes/EbiznesProjekt.git
WORKDIR /root/Project/ebiznes-react
#RUN npm install

WORKDIR /root/Project/play-react-slick-foreign
RUN sbt update
RUN echo "hello"
COPY startup.sh /root/Project/startup.sh

WORKDIR /root/Project
CMD bash startup.sh
#CMD pwd && ls && cd Project && ls
#running:
#docker build -t jakubwidaebiznes/ebiznesimg .
#docker run -i --name ebiz -p 9000:9000 -p 3000:3000 jakubwidaebiznes/ebiznesimg:latest
