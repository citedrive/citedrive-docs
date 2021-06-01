---
sidebar_position: 6
sidebar_label: crossref
---

# BibTeX Field types: crossref


If several items from your database refer to a specific one, its ID can be entered in "crossref" of the respective entries. 
This means, if you have two entries, A and B: You enter the ID of entry A in B's crossref field, missing data from A will be inherited by B.

The idea is that if you cite, for example, several "inproceedings" of "proceedings," the publishing date only has to be entered once.

# Example 
In this example, B and C will inherit 'year' from A. 
```
@inproceedings{C,

    crossref = {A},
}

@inproceedings{B,
  	
    crossref = {A},
}

@proceedings{A,
    year = {2015},

}
```
## crossref in CiteDrive
The crossref-field is supported in CiteDrive, if you create a BibTeX-project. 