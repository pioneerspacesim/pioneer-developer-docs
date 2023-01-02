---
title: Network Features
---
# Network features
Whilst actual multiplayer won\'t ever be in the game, it should be possible to include some network code to enrich the game.

## Bulletin board stories, news articles

These could be provided to the game via RSS, which as a standard provides enough for this level of enrichment. A central server would be provided, with the Pioneer development community in general creating new content. This content would be periodically loaded by the game, for display on bulletin boards, as newspapers, in specific stations, etc.

Content would either be undated, for immediate display, or tagged with a range of in-game dates. This does mean that the data set to download would grow over time, to allow players who start a new game to see fictional news articles appear in a timely order. Downloading the entire set does mean that older articles can be corrected later.

The feature could be switched off or set to a different source of data through the config file.

## Commodities market

Players sell and buy from the same stock if at the same station/market. ideally, this market will be dynamical, and price set from supply/demand, i.e. someone comes in with a hughe shippment of X, and the price drops by quite a bit, and you can message all that there are cheap X to be gotten at station Y.

## Additional mission information {#additional_mission_information}

Similar to the above, this would offer new mission information data. The missions would have to already exist in the game, and be written to expect data from this source. Such data would be start variables, mission text objects and so on.

## Player messaging

Instant subspace messaging for all players in the game universe.

This would require a network protocol that included uploading; perhaps HTTP post.

Undated messages from players could be committed to a notice board in a specific station, or in every station in a system. They\'d last for some amount of time, the details to be determined when it\'s implemented. These messages would pass through a central server (or a player-specified server). This could allow for communities to appear in given systems, or for players to make treasure trails, or tip-offs about local profitable trade routes, or warnings about difficult systems. One\'s imagination here is the limit.

## Leaderboard

Really just a special case of messaging. Report kills, Elite ranking, military ranks, medals etc to a central server. Display it in game somewhere.

## Current project status / update

# ServerAgent
The ServerAgent is an **experimental** feature that allows Pioneer scripts to make calls to an API server. Out of the box its disabled and not used by any of the stock modules. That will change once we gain experience with it.

## Enabling the agent

To enable the agent, you need to edit your `config.ini` and set two parameters:

-  `EnableServerAgent=1`
-  `ServerEndpoint=[http://somewhere/api](http://somewhere/api)`

Obviously, you\'ll need the URL of an API server.

## Using the agent {#using_the_agent}

The agent has one method:

```ServerAgent.Call(method, params, successCallback, failureCallback)```

The arguments are:

-   `method`: string, name of the remote method to call
-   `params`: (optional) arbitrary data, converted to JSON and sent to the server
-   `successCallback`: (optional) function called on successful return from the server. Passed any data returned from the server
-   `failureCallback`: (optional) function called on failure. Passed an error message

`ServerAgent.Call()` returns immediately. If there is already a call being processed, calls are queued.

## Writing a server {#writing_a_server}

Servers will receive a HTTP POST request against the endpoint URL like this:

```
POST /api/method HTTP/1.1
User-Agent: PioneerServerAgent/git.0f09618
Content-Type: application/json

{"foo":"bar"}
```

The `params` argument to `ServerAgent.Call()` is JSON-encoded and sent in the request body.

The server should return something like:

```
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 14

{"baz":"quux"}
```

The result body is JSON-decoded and passed to the `successCallback`.

This style of server is trivially implemented in just about any programming language. A sample server is available at <https://github.com/robn/pioneer-apiserver/blob/master/pioneer-apiserver.psgi>
