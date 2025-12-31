---
title: Coding Conventions
category: contributing
---

# Coding Conventions

This page describes some of the code style used in Pioneer. As of 2019, we rely on clang to do our code-formatting checks for us. This means a Pull Request (PR) with incorrectly formatted code will fail the automated test. Please read [Code Formatting](./coding-conventions.md) for how to avoid this, and how to have our clang-format.sh script check your code before committing.

## Licensing

Engine and Lua code is licensed under [GPL v3](http://www.gnu.org/licenses/gpl.html).

When submitting a file to the Pioneer repository, be sure to include these two lines at the top of each file (suitably commented):

```
Copyright © 2008-2026 Pioneer Developers. See AUTHORS.txt for details
Licensed under the terms of the GPL v3. See licenses/GPL-3.txt
```

Assets (including Lua-based data files like custom systems) are licensed under [CC-BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/). For text-based assets that support comments or copyright information, be sure to include these two lines:

```
Copyright © 2008-2026 Pioneer Developers. See AUTHORS.txt for details
Licensed under the terms of CC-BY-SA 3.0. See licenses/CC-BY-SA-3.0.txt
```

## Tabs & spacing

These standards are agreed upon for both C++ and Lua code - please make very sure to follow them!

-   Hard tabs, 4-space aligned.
-   Indent function arguments broken across multiple lines by one tab **only**. Do not add extra spaces to "line up" arguments with the opening parethesis.
-   No trailing spaces, and don't indent blank lines
-   Attention MS Windows users: lines end with Line Feed (LF), not Carriage Return (CR) or both (CRLF). If you can not fix it in your editor, git can do it for you [using the configuration option](http://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#Formatting-and-Whitespace).

Some of our code doesn't follow this standard; if you're fixing up older indentation styles, please make sure to **do that in its own commit** so that other developers can review your changes more easily.

## Code Formatting

The Pioneer C++ codebase has an enforced common coding style, managed by running the `clang-format` tool. This is run by the Travis CI provider for all pull requests, and may also be run locally as a [git hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks). If your Pull Request is displaying a red X or a message saying "All checks have failed", it is likely that your code has inadvertently broken the C++ code style that Pioneer uses.

### Diagnosing Formatting Issues

If your Pull Request is in violation of Pioneer's code formatting rules, you can look at the Travis log to find out what parts of your code are specifically to blame. Click "Details" next to "The Travis CI build has failed" at the bottom of the Pull Request page, and select the "Static Checks" job from the resulting page. In the log below, the differences between your code and the correctly formatted code will be listed in [diff(1)](https://linux.die.net/man/1/diff) format.

### Installing a Git Hook

Looking at the Travis log to find out what changed is fine and well, but what you really should be doing is using a git hook to validate your code *before* you commit your changes. This process is very simple if you are developing on a Mac or Linux system - simply copy the pre-provided git hook into your local repository's `hooks/` directory. A pre-commit hook is not currently available for Windows systems. If you know how to reliably set one up, you are more than welcome to author it and submit it as a Pull Request.

    $ cp scripts/clang-format.sh .git/hooks/pre-commit-hook

Once you have installed the hook, simply run `git commit` as normal. If your code doesn't comply with the C++ style rules, it will abort the commit and print the difference between your code and the properly formatted code to the console. If it succeeds, it will open an editor as normal.

If, for some reason, you wish to bypass the validation hook, simply run `git commit --no-verify`.

### Applying The Format Changes

Once you know which files are improperly formatted, and what changes need to be made to fix them, you have two options. The first option is to manually apply the required changes to your code, and submit them as a new commit. Alternatively, you can use the automatic formatting tool. The interface is simple, presenting you with the list of changes made by clang-format and asking whether you would like to apply them. The invocation is simple as well:

    $ ./autoformat

This will overwrite your code with the properly formatted version. It is recommended that you do not do this blindly, as clang-format has some issues with detecting file types and may occasionally eat your work. Please read the diff and determine which changes will be made. If your version of clang-format is bugged and suggesting destructive changes, manually apply the correct changes and run \`git-commit --no-verify\` to bypass clang-format entirely.

### Disable

There are times when alignment is more sane to do manually, e.g. for matrices or other things, clang format can be disabled [disable](https://clang.llvm.org/docs/ClangFormatStyleOptions.html#disabling-formatting-on-a-piece-of-code) for these.

# C++ Code Formatting Guide

This section documents syntax and style guidelines that should be followed across the codebase.

Names should be concise and clear. They should easily communicate the purpose of object they represent. Names should not have type or qualifier information embedded in the name (the so-called [Systems Hungarian](http://en.wikipedia.org/wiki/Hungarian_notation) notation). If a name isn't clear, it will cause confusion further down the line when someone else is editing your code.

If a function or variable refers to a quantity (e.g. atmospheric pressure, distance, etc.), please make sure it is well documented, including any assumptions it makes about the value and unit of the quantity. Unknowingly multiplying a value in Parsecs by a value in millimeters can take a while to track down, and it's very frustrating to everyone who has to debug it.

There are a few abbreviated names that are commonly used throughout the codebase, eg `Renderer *r`, `lua_State *l`, etc. Try to prefer them where appropriate.

## Classes

Class names should be written in PascalCase like so:

`class MyClass {};`

Structures intended to be used as an "integral type" like `vector3` should be written in lower case:

`struct vector3 {};`

Class-private or protected member variables should be prefixed with `m_`, using camelCase:

    class MyClass {
    protected:
        int m_someValue;
        std::string m_anotherValue;
    };

Note that public member variables, especially in structures like `vector3`, do not follow the above conventions and are written without prefix.

Static member variables should be prefixed with `s_`, using camelCase:

    class MyClass {
    protected:
        static int s_classScopeVariable;
    };

All class functions (except those intentionally meant to follow the C++ STL's naming convention) should be written in PascalCase:

    class MyClass {
    public:
        void MyFunction() {}
    };

This includes static functions; they use the same naming convention as member functions, but their intended use should be well documented.

## Global variables

Global variables must be prefixed with `g_`, and use camelCase:

`int g_screenWidth;`

Please remember that raw global variables in C++ are considered bad practice; if you're writing code that uses them, you may want to rethink how you're accomplishing your goal.

Variables with static file scope should be prefixed with `s_`, and similarly use camelCase:

`// ...`  
`static int s_fileScopeVariable;`

## Comments

Generally, use the style of the file you're working on. But the below is the general principle for commenting code.

-   Use C++ comments rather than C comment blocks, unless you're writing multiple-paragraph comments.
-   Many people work on the code, so please describe whenever function- and variable names are not enough.
-   Especially comment when you think you're writing clever code
-   That goes double for anything using the Lua stack manipulation functions - trailing comments showing the stack state are *not* overkill!

For documenting C++ functions one can use three slashes (`///`) or the Javadoc style (`/** ... */`) and it will be picked up by [Doxygen](http://doxygen.nl/manual/docblocks.html):

`/// `  
`/// Function to be used only if user is willing to accept the return type`  
`/// Do not use if prone to depression.`  
`/// `  
`void meaningOfLife()`

`/**`  
` * \brief Function documented by a Javadoc-style comment`  
` *`  
` * This is a fun function!`  
` */`  
`void Explode()`

Leading asterisks in Javadoc-style comments are not required - if the comment starts with exactly two asterisks, Doxygen will pick it up.

When not writing Doxygen documentation comments, please use regular C++ style (`//`) comments.

`// Regular comment in code for other programmers mucking about (example code from Quake3):`

`float InvSqrt (float x){`  
`    float xhalf = 0.5f*x;`  
`    int i = *(int*)&x;`  
`    `  
`    // I really should have documented this`  
`    i = 0x5f3759df - (i>>1);  `  
`    `  
`    x = *(float*)&i;`  
`    x = x*(1.5f - xhalf*x*x);`  
`    return x;`  
`}`

Please make sure your comments are informative - they should provide information to future programmers that might not be obvious from reading the variable names:

`// entered if we are flying`  
`// (BAD!)`  
`if(isFlying)`  
`{`  
`    // If the atmospheric pressure exceeds the crush point of the hull (as expressed in arbitrary units)`  
`    // we, naturally, explode.`  
`    // (GOOD!)`  
`    if (GetAtmoPressure() > 5103.0 / m_maxBar) {`  
`        Explode();`

If something is broken, or temporarily disabled, or needs re-thinking, make use of TODO markers at the beginning of your code. Most modern IDEs have plugins to display these comments neatly so future programmers can easily see work that needs to be done:

`// FIXME(sturnclaw): add a better interface for retrieving a global time source`  
`// TODO: re-initialise the turntable style view position from the current mouselook view`  
`` // HACK: attempt to recognise `foo_3.png' style names ``

Signing your comments (e.g. `FIXME(sturnclaw):`) isn't required, but is good practice if the TODO is about something you intend to work on further.

### Lua API Documentation

For [LuaAPI](https://pioneerspacesim.net/codedoc/) documentation we use NaturalDocs v2; this documentation is pulled from C++ and lua source files. This documentation follows the NaturalDocs [conventions](https://www.naturaldocs.org/getting_started/documenting_your_code/).

The syntax is very simple and easy to work with. Leading asterisks on each line of documentation are optional; NaturalDocs will read regular block comments as well.

`/*`  
` * Method: Fly`  
` *`  
` * Fly high in the sky`  
` *`  
` * > ship:fly()`  
` *`  
` * Availability:`  
` *`  
` *  2015`  
` *`  
` * Status:`  
` *`  
` *  experimental`  
` */`  
`static int l_fly_high_in_the_sky(lua_State *l)`  
`{`  
`        // code goes here`  
`   return 0;`  
`}`

## Constants and Macros

When defining file or class-scope constants, never use `#define` - prefer C++ static constants or better yet `constexpr` where possible.

`static const double M_PI = 3.14159;`  
`static constexpr double M_PI = 3.14159;`

The use of macros should be kept to a minimum - using a macro in a local scope to reduce boilerplate is acceptable, but macros in headers should only be used when there is no other alternative. Remember to always `#undef` local macros as soon as they are done being used to prevent accidental name pollution and other issues.

### Include guards

Pioneer is (slowly and unofficially) moving away from include guards and using `#pragma once` as it's easier, less accident-prone (name collisions anyone?), and well supported by all modern compilers. However, we're not rejecting code using include guards instead.

Header include guards should be named for the filename of the header, capitalised, with slashes converted to underscores:

`// Ship.h`  
`#ifndef SHIP_H`

`// WorldView.h`  
`#ifndef WORLDVIEW_H`

`// graphics/Renderer.h`  
`#ifndef GRAPHICS_RENDERER_H`

## Enum types

Prefer using C++ style `enum class` declarations when writing new code. They're slightly more difficult to serialize (although only to the extent of requiring a `static_cast`), but they encourage much more correct code.

No matter which style of enum you're using, try to follow these guidelines:

-   Avoid assigning explicit integer values.
-   Also avoid values that aren't actually valid for whatever the enum is (though \*\_MAX to mark the last valid value is usually acceptable).
-   If these don't work, chances are what you're trying to do would be better served by multiple enums or even a whole class.

### C-style Enums

Enums are effectively global constants, so should be in full caps. They're prefixed with the name of the enum.

`   enum Thing {`  
`       THING_FOO,`  
`       THING_BAR,`  
`       THING_BAZ,`  
`       `  
`       THING_MAX`  
`   };`

If you're writing new code and can't use C++-style enum classes, consider using C-style enums scoped in a struct to avoid polluting the global namespace.

    struct Thing {
        enum Thing {
            Foo,
            Bar,
            Baz,

            THING_MAX
        };
    };

### C++-style Enum Class

C++ style enums are closer to classes, and thus they (and their members) should use PascalCase.

    enum class Thing : uint8_t {
        Foo,
        Bar,
        Baz
    };

# Lua Code Formatting Guide

This section is TODO...
