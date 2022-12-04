<center>
  welcome to papygo syntax's documentation
  writed by <a href="https://github.com/fiandev">fiandev</a>
</center>

# list of contents
- [getting started](#getting-started)
  - [why use papygo?](#why-use-papygo)
  - [installation](#installation)
    - [clone repository](#clone-repository)
      - [install dependencies](#install-dependencies)

- [hello world](#hello-world)
- [statements](#statements)
  - [declare variabel](#declare-variabel)
  - [assign variabel](#assign-variabel)
  - [re-assign variabel](#re-assign-variabel)


# getting started

## why use papygo ?

> why use papygo ?, papygo is simple intepreter language and have similar syntax with Pascal, Python, and Go language 

## installation

### clone repository

```shell
git clone https://github.com/fiandev/papygo
cd papygo
```

#### install dependencies

```
npm install
```

# hello world

```python
print ("hello world!")
```

# statements

## declare variabel

```go
var a, b, c; // declare variabels
const z;     // declare single constant variabel 
```

## assign variabel

```go
// assigned variabel
var a = 1       // statement 1

// assigned constant variabel
const = b = 1
var c = a + b   // statement 2

```

# re-assign variabel

```go
var a = "value" // data type is string
a = "new value" // any of data types can be re-assigned!

const b = 1     // data type is number
b = 2           // Fatal Error, because it's a constant variabel!
```