# About Dominger
* "Dominger" keeps the fields you want to hide from the user without showing them to the user. :lock:
* Creates a fast and usable flow structure using local storage :floppy_disk:
* No jQuery and Library :x: <b>ONLY PURE JAVASCRIPT</b> :heavy_check_mark:

# How to Install
NPM : npm i dominger

# How to Work
<code>

| Function | Description  | Example Code  |
| :---:   | :-: | :-: |
| clear() | Cleans the Local Store | Dominger.clear(); |
| hide() | Hides the specified area(s) | Dominger.hide(); |
| show() | Indicates the specified area(s) | Dominger.show(); |

# Parameters

### clear()
Parameters not available yet <br>
```JS
Dominger.clear();
```
<br>
<hr>
<br>

### hide()
Parameters <br>
("identity-name", "class or id") <br>
```JS
Dominger.hide('special-name', '#hidd');
```
### <b>FOR IF MULTIPLE CLASS ANY</b>
("identity-name", "class or id", 'multi') <br>
```JS
Dominger.hide('special-name', '.hidd-class', 'multi');
```

### show()
Parameters <br>
("identity-name", "class or id") <br>
```JS
Dominger.show('special-name', '#hidd');
```
### <b>FOR IF MULTIPLE CLASS ANY</b>
("identity-name", "class or id", 'multi') <br>
```JS
Dominger.show('special-name', '.hidd-class', 'multi');
```

# Example Code(s)

### For single class or id

```JS
Dominger.clear(); // Recommended for use..
Dominger.hide('special-name', '#hidd');
var single = Dominger.show('special-name');
document.body.insertAdjacentHTML('beforeend', single);
```

### For multiple class or id

```JS
Dominger.clear(); // Recommended for use..
Dominger.hide('identity-name', '.hide-div', 'multi');
var multi = Dominger.show('identity-name', 'multi');
for ( var i = 0; i < multi.length; i += 1 ) {
    document.body.insertAdjacentHTML('beforeend', multi[i]);
}
```


</code>