# ERISTIK

## CONCEPT

  An advanced mind map creator

## FUNCTIONALITIES

  - ### CORE
    - SUPER input
    - create a node
    - choose node color
    - choose link color
    - create a link
    - zoom
    - move node
    - mode global
    - delete node
    - delete link

  - ### USER
    - login
    - register
    - forgot

  - ### PERSIST
    - save
    - remove
    - edit
    - share
    - permissions

## MODEL

```javascript
  Enode: {
    title:String,
    children:Enode[],
    x:Number,
    y:Number,
  },
  Link: {
    A: {
        x:Number,
        y:Number,
    },
    B: {
      x:Number,
      y:Number,
    },
  }
```
