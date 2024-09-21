---
title: Time factor
category: design-docs/other-ideas
---

# Time factor

Things should take time to do in the game. The aim for this is to introduce another factor for balance, and for the player to plan around and think with. The idea is that every action would have a time cost, and there could be several ways to alter and influence that by the player. Such actions for example:

- Loading of cargo
- Embarking and disembarking of passengers
- Customs boarding and inspection (with opportunities for text RPG gameplay, like smooth-talking or bribery)
- Servicing of the ship and equipment
- Removing, installing equipment
- Loading, pumping fuel

Some thing would happen in a queue, like cargo loading, others such as servicing and installation could happen in parallel. Which could also depend on:

- How under or overmanned the given station is, 
- How many crew the player has in their employment. Crew assignment to jobs could be a deciding factor here.
  - Crew skills could make them more fit to certain work, making that work faster
  - Which would also make crew gameplay in general more involved, and loaded with tradeoffs
- Paying extra cold also be a way to expedite some processes, and one could possibly rush it, but that could have risks like damaged equipment or cargo.

The aim is to provide some constraints for the player to work around, some planning to do and execute, and some tradeoffs to make:

- They might need to decide whether to take time loading cargo or pocking up a lucrative job with a tight deadline.
- There could be situations where they would need to leave in a hurry, and have to abandon stuff in the process of loading.
- They might need to decide to to take a relatively fast service job right now, or kick it down the road and risk a more pricy and lengthy equipment overhaul later.
- It could turn out that the station is severely undermanned because of a worker shortage or strike or as a seasonal event, unexpectedly slowing down the player, who now has to figure out how to keep their schedule. 
- Reputation (with the local polities, and the faction) could also have an effect on speeds. 
  - If they like the player better, they would work with them more enthusiastically
  - But if they don't then they might passive-aggressively sabotage them a bit
- Shadier places could treat shippers badly by default, hoping to churn out more money on expediting processes, greasing wheels. Either by demanding bullshit service fees or straight-up bribes. ("Sorry, we have to carefully inspect and inventory everything, the rules are rules" *wink-wink*)
- Which would also mean that getting to know the places one visits could be a useful skill and thing to engage in. To know which places to avoid and when. Or to know that that station has some good stuff, but one has to take their time and plan on staying there for a while. Or go to another place for the same thing, but paying a bit more.

But the aim is not to provide pointless friction into the game, or to make it just a question of spinning time accel until it is done. Ideally the player can actively influence things with different methods, or can do other things while loading and maintenance is in progress. (Some could mean doing lots of writing)

- They could scour the local net for good cargo deals or mission opportunities.
- Or just engage in gossip in the bar, hoping to pick up some useful info or connection, in an RPG manner.
- Or just to take in some global or local lore.
- They could engage in text-adventure/RPG type gameplay (missions could have such aspects) (Sunless Seas and Skies are nice examples in my opinion)
- They could play with fine-tuning equipment on the ship
- They could use their parasite craft to fulfil a bite-sized low-range mission while their big ship is being loaded with hundreds of tons of cargo or under the bi-annual preventive maintenance job.
- Or they could hop to another station for a few crates of valuable goods they found a deal for during that loading. 
- Or they've got a distress call from close by they could attend to with that small craft.
- Or they could just go exploring, and maybe they find some interesting place or some useful thing.

On one hand this would likely make trading and similar UI-heavy gameplay legs more interesting, if done right. 

But on the other hand  some players might really dislike this feature, like if they are more interested in actually flying their ship. **So it would be important to provide some settings for this feature, like a slider that would act as a multiplier for these times.** Which could be set to zero to allow for things to happen instantly. Which could then be tied into other aspects of difficulty or rewards, to make it worthwhile. 

The UI of this would likely live on the station screen and ship info screen as a queue with progress bars, and ways to assign crews to jobs or to interact with the other possibilities. 

# Possible implementation roadmap

## Minimal viable implementation

### 1 - Things take time

- Introduce time factor to actions:

  - Loading and unloading of cargo
    - Cargo mass and fragility could govern job time

  - Installing and uninstalling equipment
    - Equipment size class and complexity (price) could govern job time

  - Servicing and maintenance
    - Ship and equipment size, complexity could govern job time

  - Loading and unloading of fuel

- **UI**: queue on Station Screen that displays the job, and time left.

  - Button to set "alarm" that would stop time accel when job is done

  - Last job always stops time accel

  - Done jobs play notification and then deleted from queue (Maybe after a couple of minutes, so the player can see what's - finished?)

- **Setting** for "difficulty"
  - 0 - nothing takes time, game works the same as now. Queue is never shown
  - 1 - things take the predefined time we set up after balancing the gameplay
  - some steps between 0 and 1 to finetune (0.25, 0.5, 0.75 for example)

### 2 - Crew assignment to manage time

- Players can assign crew to queue jobs
- Number of assigned crew governs speed of job
  - 0: station crew does it slowly
  - Number of crew decreases job time by 0.8x for each additional crew (diminishing returns)
  - Crew skills could govern how effective they are in a given type of job
    - Intelligence: 0.9x for repairs
    - Strength: 0.9x for handling cargo
  - Player skills could also affect job times in a similar way (but then they should level up by time or something similar)
- Jobs could have crew member limits (based on cargo bay size, slot size, etc)
- **UI:** Provide crew slots for each job card in the queue. 
  - Either a numerical slider
  - Or specific crew selector, if skill governs their effectiveness

### 3 - Equipment to manage time

- Some equipment could provide speed upgrades for job times (eg 0.75x)
  - Cargo crane decreases cargo load times 
  - Maintenance workshop decreases servicing and maintenance (could go into an S2 utility slot, or to a cabin slot for example
    - Tangent: This equipment would provide field repair and maintenance in-flight too, with similar time factors)
    - With UI in he Infoview screen
  - Upgraded fuel pumps decrease fuel load times. (could go into utility slot)