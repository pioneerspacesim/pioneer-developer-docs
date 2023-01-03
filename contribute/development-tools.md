---
title: Development Tools
category: contributing
---

# Development Tools

Here we aim to document little known features that developers add to help themselves in the development process, wheather that be debugging, profiling, or what else

## Debug

### Compile with Debug support

Build debug

`   ./bootstrap -DCMAKE_BUILD_TYPE=Debug`

You can now use debugger, like [gdb](https://felix-knorr.net/blog/using_gdb_directly.html) (for more advanced gdb tricks see [Pleasant debugging with GDB and DDD](https://begriffs.com/posts/2022-07-17-debugging-gdb-ddd.html); there's also [GUI available](https://github.com/epasveer/seer) for gdb.)

### Document weirdness

To record video from gameplay (e.g. to document unexpected behavior):

`   To record video directly from Pioneer you will need to add the line`  
`   RecordVideo=1 somewhere within your config.ini file. Then once ingame`  
`   you can press Ctrl+ScrLk to start or stop recording.`

### Debug from in-game

Ctrl+I = debug window

Ctrl+F10 open planet viewer, to view selected nav target

Ctrl+F11 reload shaders while running game

Ctrl+Del reload pigui element, allows for live coding. Limited support: Only reloads the active view and then only if the active view has manually enabled it (add \`debugReload = function() package.reimport() end\` to the view's definition next to the draw and refresh functions)

### Debug savegame files

`./build/savegamedump savefiles/<mysavename>`

and look in your savefile folder (e.g. `~/.pioneer/savefiles` on linux) at `<mysavename>.json` file, put JSON e.g. into [http://jsonviewer.stack.hu/](http://jsonviewer.stack.hu/)

### Debug Lua Callstack

A lua callstack can also help - there's a function in lua/core/Sandbox.cpp that can be called in the debugger to get a callstack

### Misc.

Pioneer can dump galaxy information, to make sure the galaxy hasn't changed, or to gather statistics, described here:
[Pull Request #2811](https://github.com/pioneerspacesim/pioneer/pull/2811)

The quit confirmation box can be supressed by putting ConfirmQuit=0 in the pioneer configuration file

## Profiling

For Profiling, one needs some tools installed?

Now new profiling functions merged:
[Add zone-based profiling support \#5168](https://github.com/pioneerspacesim/pioneer/pull/5168)

There's also support for `chrome://tracing` format event to JSON, for better visualization, since
[Add Chrome-Tracing output support to profiler \#5380](https://github.com/pioneerspacesim/pioneer/pull/5380)

### Build with profiling support

ToDo edit this to improve and make sense and be correct

Profiling: to build with the profiler enabled, simply run `./bootstrap -DPROFILER_ENABLED=1 -DCMAKE_BUILD_TYPE=RelWithDebInfo` and compile as normal.
The latter flag is not strictly needed, but building with a `CMAKE_BUILD_TYPE` removes some uncertainty about which optimizations and features are enabled.

To-do: extract wisdome from this conversation, [Pull Request #4764](https://github.com/pioneerspacesim/pioneer/pull/4764) and document here

```xml
<fluffyfreak> Gliese852, if you're on Windows then I use
	https://github.com/VerySleepy/verysleepy a lot of the time 
<Gliese852> fluffyfreak: thanks, I meant the built-in profiler, it seems that
	if you do nothing, it creates a report on the launch of the program, and
	the launch of a new game
<fluffyfreak> If you're running the profile build then you can press Ctrl+p
	to take a profile at any time
<fluffyfreak> hmm, been a while since I used it. There's two modes
<fluffyfreak> Ctrl+shift+p = is capture one frame, otherwise Ctrl+p toggles
	capturing whenever the framerate is "slow"
```

### Using profiler

to do

### clang format check

``    Yes, for your use you'd likely want to invoke `FORMAT_BASE=master ./autoformat` or `FORMAT_BASE=HEAD~1 ./autoformat` ``  
``    - there's little difference between the `autoformat` script and the `scripts/clang-format.sh` script other than the  ``  
`   latter prompts you to automatically apply the issues in your files.`

## Editor integration

There is support for sending Lua code from IDE into running pioneer session via TCP:
- [Pull Request #3768](https://github.com/pioneerspacesim/pioneer/pull/3768)
- [Pull Request #4799](https://github.com/pioneerspacesim/pioneer/pull/4799)

### Easy start (Linux)

1\. Reconfigure with remote lua console support and rebuild:

`./bootstrap -DREMOTE_LUA_REPL=ON`  
`make -C build -j4`

2\. Now after starting a new, or loading a saved game, you can connect to the program via telnet on port **12345**:

`$ telnet localhost 12345`  
`Trying 127.0.0.1...`  
`Connected to localhost.`  
`Escape character is '^]'.`  
`** Welcome to the Pioneer Remote Debugging Console!`  
`>`

Now you can run any lua commands.

### Example of use with VIM for hot reloading of the module

I added the following code to **\~/.vimrc:**

`nmap ;mm :w <CR> :call PioneerReloadModuleFnc(expand("%")) <CR><CR>`
`function! PioneerReloadModuleFnc(filename)`  
`   let s:data = strcharpart(a:filename, 0, 4)`  
`   let s:lua = strcharpart(a:filename, strlen(a:filename) - 3, 4)`  
`   if s:data == "data" && s:lua == "lua"`  
`       let s:crop = strcharpart(a:filename, 5, strlen(a:filename) - 9)`  
`       let s:convert = substitute(s:crop, "/", ".", "g")`  
`       let s:command = "package.reimport(\"" . s:convert . "\")"`  
`       :execute "!echo '". s:command . "' | telnet localhost 12345"`  
`   else`  
`       :echom "ERROR: file should be \"*.lua\" and in \"data\" subfolder"`  
`   endif`  
`endfunction`

Now when pressing the combination **;mm** in normal mode, the file is saved, then telnet is launched and the command is sent:

`package.reimport(<your module name>)`

where the module name is taken from the name of the file being edited. This leads to a reload of this module without restarting the game.

A short video of how it might look: [https://youtu.be/f5s_tuAv6fc]()
