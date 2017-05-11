FROM library/node:6

RUN mkdir /blockchain-everis

ADD . /blockchain-everis

EXPOSE 9999

ENTRYPOINT ["npm", "start"]
