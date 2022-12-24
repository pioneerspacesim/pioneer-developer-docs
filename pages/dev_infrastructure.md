## Development infrastructure

Since we are at the verge of an infrastructure change, we might as well think through what we have now and what other tools we would benefit from. This is one reason I've written this design document outline, so the development could gain a bit more focus, thus motivation and spirit. 

**We currently have:** 

- Github for actual development work
- Homepage (static page)
- IRC for chat
- Dev Forum - acts like a shared notebook these days.
- Wiki - on a separate domain. It has both developer and player side documentation.
- User forums and Discord for player community discussions (I think the community aspect is a bit neglected these days)
  - [Discord](https://discord.com/channels/705212721666326618/705544729714098179) is the most active these days. Some of the devs are on it as well. There's weekly interaction at worst, sometimes more. We could lean into it.
  - Twitter - primary "marketing", although it seems to turning to hell these days, even moreso than usual. But can draw in some interest. Managed by impaktor.
  - [Youtube](https://www.youtube.com/channel/UCbFD5Oxc1C9zxqnF4OitGjQ) - used for video posting. Sees a little bit of traffic, even comments, but nothing major. Noz, impaktor, strunclaw, wkfo, gliese852 has access. Noz monitors occasionally.
  - [Sketchfab](https://sketchfab.com/bszlrd/collections/pioneer-space-sim-a207c41476a14acdb3bc266361d58ae0) - used for hosting ship models for the wiki. Draws in some interactions, and people find the models all the time
  - [Reddit](https://www.reddit.com/r/pioneerspacesim/) - about a post per 2-3 months, not much activity. Noz keeps an eye on it
  - [Spacesimcentral](https://spacesimcentral.com/community/pioneer/) Where all this began. An old spacegame enthusiast forum. From our perspective it is not too lively. About a post or so per month at best. Noz keeps an eye on it, impaktor has account. 

**Proposed new infrastructure:**

- Github for actual development work
  - This design document properly writen and elaborated, hosted on github (could be part of the dev wiki)
  - Github Projects for project boards based on this design document
  - Github Discussion or some other forum engine to replace the dev forum as a notebook and async place for discussion. This could be the place for feature requests from users as well. GH Discussion threads can be referenced in the Project boards, even turned into tasks and such.
  - Dev Wiki - hosted on github wiki? Not sure it it has all the things we need. 
    - Possibly there could be a separate coding and asset creation wiki, if you think there's benefit in separating them.
- IRC for chat, as before. (And matrix connection is also possible, which is nice)
- Homepage - could be hosted on github pages. If I'm correct, the current site is compatible with that, and only the domain needs sorting out.
  - Player wiki - manual and tutorials. Could also be hosted on github pages, with MKDocs or Docusaurus
  - Link to community places
- Community spaces - maybe we could rethink which of those we actively want to involve with to avoid overstretching for no benefit. 
  - [Discord](https://discord.com/channels/705212721666326618/705544729714098179) - the most active, even if it's not that active. I think we should have a presence there, and encourage discussion. Could also be an important "marketing" place, given that space gamers are on it. Could also be a place to draw in contributors. (nothing concrete came out of that yet, but there were some upstarts)
  - [Youtube](https://www.youtube.com/channel/UCbFD5Oxc1C9zxqnF4OitGjQ) - useful for video hosting. I think we should keep it
  - [Sketchfab](https://sketchfab.com/bszlrd/collections/pioneer-space-sim-a207c41476a14acdb3bc266361d58ae0) - as currently, to host ship models for the wiki.
  - Twitter - not sure, maybe use it as how we do now, and see that happens when the dust settles. Maybe consider mastodon eventually?
  - Reddit - not much use for it really. I suggest a pinned notice that says that devs don't monitor it, and links to where we or the community could be reached. Maybe repost twitter/youtube "marketing" posts occasionally.
  - Spacesimcentral - I'm a bit sad to say that, but SSC does not provide much benefit either. There's no real community happening there from out perspective, so I suggest the same approach as reddit. 
  - Additional places to think about:
    - Artstation - Noz already uses it as a portfolio site, with some Pioneer content too. Could be a place to draw in artists eventually with those protfolio pieces (I've a backlog of Xylo and cockpits already)
    - [mastodon.art](https://mastodon.art) - upstart art community mastodon instance, with lots libre type people. Might be a good place to post art "marketing" stuff. Noz could do it.