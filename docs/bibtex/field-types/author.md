---
sidebar_position: 3
sidebar_label: Author
---

# Author
In the ``author``-field, you can specify all contributors to the work you want to cite. BibTeX has several ways of specifying author names but expects in all cases a consistent and exact arrangement so that inaccurate information could lead to the unwanted output of the author's name.

## Notation: ``{Firstname Lastname}``

A natural indication such as ``{Firstname Lastname}`` is possible, but not vice versa, "Lastname Firstname."

### Example, ``{Firstname Lastname}``

```tex
@article{ (...),

  ...

  author={Isaac Newton}

  ...

}
```


## Notation: ``{Lastname, Firstname}``
However, we recommend the following way ``{Lastname, Firstname}`` i.e., last name and first name separated by a comma. This way allows for more control to distinguish between the first and last name.

### Example, ``{Lastname, Firstname}``

```tex
@article{ (...),

  ...

  author={Newton, Isaac}

  ...

}
```


## Notation: ``{Lastname, Suffix, Firstname}``

If you want to specify any suffix, for example, Junior, Senior, the 5th (Jr. Sr. V), do so in the following way strictly in this order, separating each component with a comma:

``{Lastname, Suffix, Firstname}``

### Example, ``{Lastname, Suffix, Firstname}``

```tex
@article{ (...),

  ...

  author={King, Jr , Luther}

  ...

}
```

## How to add multiple Authors in BibTeX?

You specify the individual authors in the manner described above. The separator, AND, divides multiple authors. So in this way:
``{Lastname, Firstname AND Lastname, Firstname AND Lastname, Firstname AND ...}``


### Example, "How to add multiple Authors?""

```tex
@article{ (...),

  ...

  author={Fisher, James AND Clark, John}

  ...

}
```


## How to add a cooperation in BibTeX?



## Interesting links
http://www.texfaq.org/FAQ-manyauthor
