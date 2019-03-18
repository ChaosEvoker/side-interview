# Table of Contents

1.  [Setup](#setup)
2.  [Overall thoughts](#org59f8490)
3.  [Better Practices](#practices)
    1.  [Firebase Authentication](#dbauth)
    2.  [Environment Configuration](#envconfig)
4.  [Enhancements](#orgb010b26)
    1.  [Pagination](#org256f981)
    2.  [Styles](#org3f63baf)
    3.  [Data Architecture](#org2c8d390)

<a id="setup></a>

# Setup

To setup the project, just clone the repository and run:

```
yarn
yarn start
```

<a id="org59f8490"></a>

# Overall thoughts

In general, I tried to limit the scope of the project to the features described in the assignment. I tried to eschew practices that would complicate the code for very little gain. In the remaining sections, I will go through some of these decisions as well as areas that could be improved were this to begin to take shape as a real software product. I had a lot of fun doing this. It felt much more engaging than the simple timed coding tests I've often done. I look forward to hearing back from you!

<a id="practices"></a>

# Better Practices

There were a few common best practices that I intentionally did not implement. In both cases, I thought it would largely serve to make the code harder to follow or get running without adding much in exchange:

<a id="dbauth"></a>

## Firebase Authentication

The Firebase DB I set up currently is not authenticated. Obviously, in a real world scenario this would not be a good idea. However, in the interest of making the project simple to setup and run, I chose to leave the DB unsecured. This would be near the top of the priority list were this to be transformed into a real web application.

<a id="envconfig"></a>

## Environment Configuration

Several of the parameters in the code are ones that would be better suited to an environmental configuration. For example, the authentication used for SimplyRETS, or the Firebase configuration. However, given the nature of the project I thought implementing this would serve to add complexity without any benefit.

<a id="orgb010b26"></a>

# Enhancements

There were some possible improvements that I thought could be made to the project, but decided against in order to avoid scope creeping the assignment. Here are a few of the features I considered:


<a id="org256f981"></a>

## Pagination

Both on the UI and the SimplyRETS API side. Currently the API is hard coded to retrieve 500 properties and dumps them all onto the page. To improve this, adding a pagination component to the UI and the API calls to match would help to improve the UX.


<a id="org3f63baf"></a>

## Styles

Currently much of the styling is in fixed CSS. If there was a reasonable expectation that branding was either likely to change or would need to change on a client by client basis, adding some dynamic styling either through CSS Modules or a more in-depth theming implementation would be very helpful toward that goal.


<a id="org2c8d390"></a>

## Data Architecture

Right now, the API call and Firebase connection happens in the `componentDidMount` of `App.js`. Given the limited scope of the project, using something like Redux seemed heavy-handed for this particular use case. However, if the data management became more complex, it would almost certainly warrant adding a Redux store (or whatever seemed most appropriate for the project).

