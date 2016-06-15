# Front End Capstone Application  Autopilot

### Summary
Application will allow the user to build thier vehicle(s) to track the maintenance items on as many vehicles they use.  ntered on the vehicles service scheudules


## Requirements
1. Must use AngularJS 1
1. Must use firebase as the data store
1. Must use use an authentication authorization api
1. Must use another api that you have not worked with before


### Description
User will create account and be allowed to log in.  Interface will allow the  user to create a vehicle object and then store in a "garage" to track the following items: oil, tires, fuel and service items.

Application will call a vehcile recall api to get all open recalls on the vehicles entered and allow storage and ackknowlege ment of those recalls.

Application will call a vehicle maintence service schedule api to allow the  display and review of those items

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

## Vehicle Build ![Screenshot](/img/auto.png)

## Vehicle in Garage ![Screenshot](/img/garage.png)

## Maintenace Items ![Screenshot](/img/oilfueltires.png)

## Vehicle service ![Screenshot](/img/service.png)

## Logout ![Screenshot](/img/logout.png)

### Contributors:
-[Bradley Guthrie](https://github.com/guthb)