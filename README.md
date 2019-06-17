## The Echo App spec

An app that repeats what you say !

### Reflections

Despite the simplicity of this app and how little code was required to build it, I learned significantly:

- The distinction between a CLI and a REPL.

- How to mock and stub an asynchronous function.

### Requirements

- The app runs on the command line.

- It's fine to use Ruby or JavaScript.

- When the app runs you are prompted with a phrase to say something

Example interaction:

```
$ node src/Echo.rb
Say something:
hello, world
You said: 'hello, world'!
```
