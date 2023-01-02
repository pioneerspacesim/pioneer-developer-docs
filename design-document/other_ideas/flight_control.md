---
title: Flight control
---
#FLight Control

planning and notes for kuroneko\'s flight control / joystick control related changes.
**Note: most of this is superceded by #[5371 by Gliese852](https://github.com/pioneerspacesim/pioneer/pull/5371)**

## Where are we now?

-   Mostly working Axis vs Button binding system
-   Some controls (most primary flight controls) mappable directly
-   Some interactions are GUI only
-   Only pitch, yaw and roll are axis assignable.
-   Pure-Innertial flight model with variable levels of flight assistance

## What\'s currently being worked on (and by who)?

-   More axis assignable controls (kuroneko)
-   Setspeed mode behaviour fixes (kuroneko)

## Where should we go?

### Flight Model Assumptions

Since I\'m not sure this is outlined anywhere, let\'s make the following assumptions:

-   All rotational control is performed using an RCS-like jet system which I\'ll simply refer to as RCS below.  RCS jet output is well below primary and retro engines, but is intended to be enough to spin the craft and translate it at low rates.
-   Lateral and Longitudinal Translation is always performed using the RCS-like jets above.
-   Fore/Aft translation are performed using the main and retro engines.
-   RCS and main engines use the same fuel (hence the single fuel gauge).
-   In the future we may wish to introduce Atmospheric Drag/Aerobraking + Aerodynamic Atmospheric Flight for ships which will change the way some things things work further.

### Control Authority

Some work needs to take place in the future to change input from transition authority (ie: push button toggles) with state authority on axes only to being configurable between transition and state authoritative on all flight controls. This will pave the way to support higher end HOTAS sets which contain switches and other state-authoritative style inputs beyond just the axes themselves.

### Flight Assistance

At the moment, our ship avionics (for lack of a better term for it) is trying to be all-or-nothing.

The mode can only be toggled via the GUI (and GUI related keybinds) and an option setting.

I would like to propose a distinct breakdown of flight assist into the mode heirachy below

-   Off  \-- no assist.
-   Roll Corrected \-- roll is automatically nulled by your flight computer.   You still need to apply thrust to not fall into gravity wells.
-   Full Assist (currently called \"SetSpeed\") \-- roll is automatically Nulled.  Speed reletive to your frame is managed automatically to match a target speed you control.  Speed control is temporarily suspended when thruster inputs are operated directly.  Flight comptuer will stop you from falling into gravity wells if possible.
-   Suspended (aka Locked) Full Assist \-- roll is automatically Nulled.  Speed is locked to a setting determined by your flight computer representative of your velocity prior to the event that caused the suspension.  All Full Assist controls operate as they would in full assist, EXCEPT for speed controls which are inactive until the condition is acknowledged by pilot.
-   Aerodynamic (if we introduce aerodynamic craft) \-- completely disables all use of RCS and instead relies upon the vehicle\'s aerodynamic properties.

It\'s important to note that all these modes are really intended primarily for Manuvering operations and not primary navigation, however, it should be possible  to use them to conduct inter-body navigation within a single system given sufficient time acceleration.

It\'s also fairly important for future development plans that everything can be directly manipulated via a keybind.

These modes are described in more detail below.

#### No Assist (Off)

-   Roll inputs directly cue RCS rotation and directly control roll rate changes - you\'ll spin forever if you don\'t apply counter-spin.
-   You need to apply thrust to not fall into a gravity well (unless the gravitational force is negligable).
-   Required Inputs
    -   RCS Rotational Axes (Roll, Pitch, Yaw)
    -   RCS Translation Axes (Lateral, Longitudinal, Aft/Fore)
    -   Main Engine Output
    -   Retro Engine Output (can be coslaved with the Main for a aft/fore analogue control).
    -   Mode Switch Controls
    -   Temporary Switch to Roll Corrected (aka Kill Roll).
-   Proposed Options
    -   Simulate Digital Axis (for axes bound - lets you make an analogue stick behave like a digital one for accurate RCS control).
    -   RCS Roll Rate (deg/sec up to ship\'s maximum, or % of maximum)

#### Roll Corrected

-   Roll inputs indicate desired roll rate.   FC manages actual RCS to meet input roll rate.  Will automatically stop roll if axis is centred.
-   You need to apply thrust to not fall into a gravity well (unless the gravitational force is negligable).
-   Required Inputs:
    -   Rotational Axises (Roll, Pitch, Yaw)
    -   Thrust Axises (Lateral, Longitudinal, Aft/Fore)
    -   Mode Switch Controls

#### Full Assist & Suspended Full Assist

-   Roll inputs indicate desired roll rate.   FC manages actual RCS to meet input roll rate.  Will automatically stop roll if axis is centred.
-   Pilot controls desired speed.  FC manages primary and retro engine output (and thruster output) to achieve the set speed along your forward axis of flight.
-   Suspended Full Assist is exactly the same as Full Assist except that Speed Input changes may be shown by the instrumentation, but are not acted upon by the flight computer until the command to unsuspend is issued.  Suspended FA is not intended to be manually selected, but rather, triggered by a FC exception (see the specifics below).
-   Desired flight speed is controlled using a number of buttons and 0, 1 or 2 continual axes.
    -   Option 1: Buttons Only (current behaviour)
        -   Buttons increase or decrease the target speed when held.
        -   Speed changes automatically stop at zero, requiring the button to be released and pressed again to cause a reversal of set speed.
        -   No FC exceptions occur in this mode - the FC will automatically adjust set parameters as necessary without pilot input.
    -   Option 2: Single Axis + Buttons
        -   Buttons increase or decrease (exponential) scaling factor for the single axis
        -   Single axis directly sets speed within the limits set by the scaling factor
        -   FC exceptions occur when the frame of reference changes and optionally (user option) when the scale is adjusted.  FC will lock speed down to the computed speed in the new frame equivalent to the speed in the old frame, and will give the pilot a chance to correct their inputs before \'releasing\' the suspend/lock mode.
    -   Option 3: Twin Axis
        -   One Axis (scale) sets the scaling factor for the speed axis.
        -   Other Axis (speed) sets the speed within that limit.
        -   FC exceptions occur when the frame of reference changes and optionally (user option) when the scale is adjusted.  FC will lock speed down to the computed speed in the new frame equivalent to the speed in the old frame, and will give the pilot a chance to correct their inputs before \'releasing\' the suspend/lock mode.
    -   Option 4: Single Axis Exponential
        -   This is an extremely dumb idea IMO, but is included for completeness.
        -   One Axis (speed) operates to set the target speed exponentially. (ie: directly manipulates x in setspeed == k\^x).
        -   Upper Limit should either be user set, or calculated based upon the ship\'s thrust output (set some reasonable target - like maximum speed after n seconds full burn).
        -   FC exceptions occur when the frame of reference changes.  FC will lock speed down to the computed speed in the new frame equivalent to the speed in the old frame and will give the pilot a chance to correct their inputs before \'releasing\' the suspend/lock mode.
    -   All options should include a button for temporarily suspending speed control (so that way the ship can be reoriented without the main engine output influencing the actual velocity until the correct orientation for whatever follow-up manuver is desired)
-   Inputs required
    -   for all suboptions above:
        -   Suspect Speed Control/Clear FC Exception
        -   Roll Axis
        -   Pitch Axis
        -   Yaw Axis
        -   Translation Thrusters
        -   Fore/Aft manual controls
        -   Flight Mode Controls
    -   For Option 1:
        -   Increase Speed
        -   Decrease Speed
    -   For Option 2
        -   Speed Axis
        -   Increase Scale
        -   Decrease Scale
        -   Reverse Hold/Toggle
    -   For Option 3
        -   Scale Axis
        -   Speed Axis
        -   Reverse Hold/Toggle
    -   For Option 4
        -   Speed Axis
        -   Reverse Hold/Toggle
-   Proposed Options
    -   Input mode (which option above to use)
    -   Scale upper cap
    -   Scale lower cap

#### Aerodynamic Flight

Aerodynamic flight generally doesn\'t want to use RCS at all, and instead relies upon flight control surfaces to achieve changes in attitude.  Similarly, rather than controlling the speed, primary engine output is usually directly controlled, using a balance of the craft\'s attitude, lift and gravity to control altitude and speed.

<https://pioneerwiki.com/wiki/Aerodynamics>

### Flight Instrumentation

With more precise/complete flight control comes a need for more complete/usable instrumentation.

A transition of as much flight data to a HUD makes sense - also, the HUD doesn\'t need to be single-mode, but could very easily be modal to present relevant information during different stages of flight.

#### Perceived Flight Modes for HUD Instrumentation:

-   Atmospheric/Planetary Navigation
-   Space Navigation
-   Space Combat

#### Atmospheric/Planetary Navigation

-   Pitch Ladder
-   Heading
-   Atmospheric Navigation Cues (heading indicator)
-   Speed
-   Range to Navigation Target
-   Ground Colission Warning
-   Velocity Vector (aka Flight Path Vector)
-   Altitude
-   Vertical Speed Indicator
-   Fuel Capacity Left
-   Fuel Flight Time Remaining (based upon recent consumption rate)
-   Angle of Attack (if atmospheric flight models are implemented)

#### Space Navigation

-   Space Navigation Cues (flight tunnel, intercept line, other? to navigational reference)
-   Velocity Data (fore/aft, lateral, longitudinal velocities relative to frame of reference + navigational reference).
-   Roll Rate Data (rotational speeds relative to frame of reference + navigational reference).
-   Velocity Vector and Velocity Retro Vector (ie: inverse VV).
-   Range to Navigational Target (exponential Scale?) w/ closing speed
-   Braking Warnings w.r.t Navigational Target based upon maximum deceleration using retro and main engines
-   Fuel Capacity Left

#### Related Reading

-   [report into NASA research in the 90s into HUD design/symbology for V/STOL aircraft](http://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19900008316.pdf)

[Category:Ideas](Category:Ideas "wikilink")
