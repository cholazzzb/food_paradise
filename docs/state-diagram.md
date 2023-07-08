```mermaid
---
title: Navigation
---
stateDiagram-v2
    [*] --> AllMenu
    AllMenu --> Bottom_Sheet: if Basket already has the same MenuItem
    AllMenu --> Add_Menu_Page: if Basket don't has the same MenuItem
    Bottom_Sheet --> Add_Menu_Page: if click add new menu
    Bottom_Sheet --> Edit_Menu_Page: if click edit menu
    AllMenu --> Basket: if click see basket
```