FROM alpine/psql:latest

RUN apt-get update && apt-get install -y -iputils-ping dnsutils

ENTRYPOINT ["tail", "-f", "/dev/null"]
