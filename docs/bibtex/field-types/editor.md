---
sidebar_position: 8
sidebar_label: editor
---
# BibTeX Field types: editor
In the ``editor``-field, you can specify all contributors to the work you want to cite. BibTeX has several ways of specifying author names but expects in all cases a consistent and exact arrangement so that inaccurate information could lead to the unwanted output of the author's name.

## Notation: ``{Firstname Lastname}``

A natural indication such as ``{Firstname Lastname}`` is possible, but not vice versa, "Lastname Firstname."

### Example, ``{Firstname Lastname}``

```tex
@article{ (...),

  ...

  editor={Isaac Newton}

  ...

}
```


## Notation: ``{Lastname, Firstname}``
However, we recommend the following way ``{Lastname, Firstname}`` i.e., last name and first name separated by a comma. This way allows for more control to distinguish between the first and last name.

### Example, ``{Lastname, Firstname}``

```tex
@article{ (...),

  ...

  editor={Newton, Isaac}

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

  editor={King, Jr , Luther}

  ...

}
```

## How to add multiple Editors in BibTeX?

You specify the individual editor in the manner described above. The separator, AND, divides multiple authors. So in this way:
``{Lastname, Firstname AND Lastname, Firstname AND Lastname, Firstname AND ...}``


### Example, "How to add multiple Editors?""

```tex
@article{ (...),

  ...

  editor={Fisher, James AND Clark, John}

  ...

}
```