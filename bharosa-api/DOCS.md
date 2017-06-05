# bharosa-api v0.0.0



- [Auth](#auth)
	- [Authenticate](#authenticate)
	- [Authenticate with Facebook](#authenticate-with-facebook)
	- [Authenticate with Github](#authenticate-with-github)
	- [Authenticate with Google](#authenticate-with-google)
	
- [Campaign](#campaign)
	- [Create campaign](#create-campaign)
	- [Delete campaign](#delete-campaign)
	- [Retrieve campaign](#retrieve-campaign)
	- [Retrieve campaigns](#retrieve-campaigns)
	- [Update campaign](#update-campaign)
	
- [PasswordReset](#passwordreset)
	- [Send email](#send-email)
	- [Submit password](#submit-password)
	- [Verify token](#verify-token)
	
- [Paytmrequest](#paytmrequest)
	- [Create paytmrequest](#create-paytmrequest)
	- [Delete paytmrequest](#delete-paytmrequest)
	- [Retrieve paytmrequest](#retrieve-paytmrequest)
	- [Retrieve paytmrequests](#retrieve-paytmrequests)
	- [Update paytmrequest](#update-paytmrequest)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

## Authenticate with Facebook



	POST /auth/facebook


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Facebook user accessToken.</p>							|

## Authenticate with Github



	POST /auth/github


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Github user accessToken.</p>							|

## Authenticate with Google



	POST /auth/google


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Google user accessToken.</p>							|

# Campaign

## Create campaign



	POST /campaigns


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| name			| 			|  <p>Campaign's name.</p>							|
| goal			| 			|  <p>Campaign's goal.</p>							|
| reason			| 			|  <p>Campaign's reason.</p>							|
| details			| 			|  <p>Campaign's details.</p>							|
| image			| 			|  <p>Campaign's image.</p>							|
| video			| 			|  <p>Campaign's video.</p>							|
| created			| 			|  <p>Campaign's created.</p>							|

## Delete campaign



	DELETE /campaigns/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Retrieve campaign



	GET /campaigns/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Retrieve campaigns



	GET /campaigns


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update campaign



	PUT /campaigns/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| name			| 			|  <p>Campaign's name.</p>							|
| goal			| 			|  <p>Campaign's goal.</p>							|
| reason			| 			|  <p>Campaign's reason.</p>							|
| details			| 			|  <p>Campaign's details.</p>							|
| image			| 			|  <p>Campaign's image.</p>							|
| video			| 			|  <p>Campaign's video.</p>							|
| created			| 			|  <p>Campaign's created.</p>							|

# PasswordReset

## Send email



	POST /password-resets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>Email address to receive the password reset token.</p>							|
| link			| String			|  <p>Link to redirect user.</p>							|

## Submit password



	PUT /password-resets/:token


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Verify token



	GET /password-resets/:token


# Paytmrequest

## Create paytmrequest



	POST /paytmrequests


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| REQUEST_TYPE			| 			|  <p>Paytmrequest's REQUEST_TYPE.</p>							|
| MID			| 			|  <p>Paytmrequest's MID.</p>							|
| ORDER_ID			| 			|  <p>Paytmrequest's ORDER_ID.</p>							|
| TXN_AMOUNT			| 			|  <p>Paytmrequest's TXN_AMOUNT.</p>							|
| CHANNEL_ID			| 			|  <p>Paytmrequest's CHANNEL_ID.</p>							|
| INDUSTRY_TYPE_ID			| 			|  <p>Paytmrequest's INDUSTRY_TYPE_ID.</p>							|
| WEBSITE			| 			|  <p>Paytmrequest's WEBSITE.</p>							|
| CHECKSUMHASH			| 			|  <p>Paytmrequest's CHECKSUMHASH.</p>							|
| MOBILE_NO			| 			|  <p>Paytmrequest's MOBILE_NO.</p>							|
| EMAIL			| 			|  <p>Paytmrequest's EMAIL.</p>							|

## Delete paytmrequest



	DELETE /paytmrequests/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Retrieve paytmrequest



	GET /paytmrequests/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|

## Retrieve paytmrequests



	GET /paytmrequests


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update paytmrequest



	PUT /paytmrequests/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>user access token.</p>							|
| REQUEST_TYPE			| 			|  <p>Paytmrequest's REQUEST_TYPE.</p>							|
| MID			| 			|  <p>Paytmrequest's MID.</p>							|
| ORDER_ID			| 			|  <p>Paytmrequest's ORDER_ID.</p>							|
| TXN_AMOUNT			| 			|  <p>Paytmrequest's TXN_AMOUNT.</p>							|
| CHANNEL_ID			| 			|  <p>Paytmrequest's CHANNEL_ID.</p>							|
| INDUSTRY_TYPE_ID			| 			|  <p>Paytmrequest's INDUSTRY_TYPE_ID.</p>							|
| WEBSITE			| 			|  <p>Paytmrequest's WEBSITE.</p>							|
| CHECKSUMHASH			| 			|  <p>Paytmrequest's CHECKSUMHASH.</p>							|
| MOBILE_NO			| 			|  <p>Paytmrequest's MOBILE_NO.</p>							|
| EMAIL			| 			|  <p>Paytmrequest's EMAIL.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's picture.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|


