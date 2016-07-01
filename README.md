# Front End Capstone Application  Autopilot

### Summary
Application will allow the user to build their vehicle(s) to track the maintenance items on as many vehicles they use.  

## Requirements
1. Must use AngularJS 1
1. Must use firebase as the data store
1. Must use use an authentication authorization api
1. Must use another api that you have not worked with before


### Description
User will create account and be allowed to log in.  Interface will allow the  user to create a vehicle object and then store in a "garage" to track the following items: oil, tires, fuel and service items.

Application will call a vehcile recall api to get all open recalls on the vehicles entered in the garage

Application will allow vehicle maintence service items to be viewed.

### Stretch
Application will call a vehcile recall api to get all open recalls on the vehicles entered and allow storage and acknowlegement of those recalls.

### Setup
You will need a simple web server to host this, Node.js worked well for us:

clone down repo
cd into /lib
```
$ cd lib/
$ npm install
$ bower install
```
in root of  application

```
$ http-server -p 8080
```
in lib/

```
$ gulp
```

This will show at in your browser of choice:
'http://localhost:8080'


### Screenshots


## Login ![Screenshot](/img/login.png)

## Landing ![Screenshot](/img/landing.png)

## Vehicle Build ![Screenshot](/img/auto.png)

## Vehicle in Garage ![Screenshot](/img/garage.png)

## Maintenace Items ![Screenshot](/img/oilfueltires.png)

## Vehicle service ![Screenshot](/img/service.png)

## Vehicle service log ![Screenshot](/img/serviceLog.png)

## Vehicle recalls ![Screenshot](/img/serviceRecall.png)

## Logout ![Screenshot](/img/logout.png)

### Contributors:
-[Bradley Guthrie](https://github.com/guthb)
